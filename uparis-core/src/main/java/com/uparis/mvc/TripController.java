package com.uparis.mvc;

import com.uparis.db.entity.StockPo;
import com.uparis.db.entity.TripPo;
import com.uparis.db.repo.StockRepository;
import com.uparis.db.repo.TripRepository;
import com.uparis.dto.TripDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/trip")
public class TripController {

    @Autowired
    private TripRepository repoTrip;

    @Autowired
    private StockRepository repoStock;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public Page<TripDto> getTrips(
            @RequestParam Map<String, String> filter,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "50") Integer pageSize,
            @RequestParam(value = "sort", required = false, defaultValue = "id") String sort,
            @RequestParam(value = "direction", required = false, defaultValue = "ASC") String direction) {
        Page<TripPo> tripPoPage = repoTrip.findAll(PageRequest.of(
                pageIndex, pageSize, Sort.by(Sort.Direction.fromString(direction), sort)));
        return tripPoPage.map(tripPo -> modelMapper.map(tripPo, TripDto.class));
    }

    @GetMapping("/{id}")
    public TripDto getTrip(@PathVariable("id") Long idTrip) {
        TripPo tripPo = repoTrip.findById(idTrip).orElse(null);
        if (tripPo == null) {
            return null;
        }
        return modelMapper.map(tripPo, TripDto.class);
    }

    @PostMapping
    public ResponseEntity<Long> createTrip(@RequestBody TripDto newTrip) {
        if (newTrip.getIdProduct() == null) {
            return ResponseEntity.badRequest().build();
        }

        newTrip.setId(null);

        newTrip.getListOption().forEach(optionDto -> {
            optionDto.setId(null);
            if (null != optionDto.getStock()) {
                optionDto.getStock().setId(null);
            }
        });

        return updateTrip(newTrip);
    }

    @PutMapping
    public ResponseEntity<Long> updateTrip(@RequestBody TripDto trip) {
        if (trip.getIdProduct() == null) {
            return ResponseEntity.badRequest().build();
        }

        TripPo tripPo = modelMapper.map(trip, TripPo.class);

        Map<String, StockPo> stockMap = new HashMap<>();
        tripPo.getListOption().forEach(optionPo -> {
            optionPo.setTrip(tripPo);
            if (null != optionPo.getStock()) {
                StockPo stockPo = optionPo.getStock();
                if (stockPo.getId() == null) {
                    if (!stockMap.containsKey(stockPo.getName())) {
                        repoStock.save(stockPo);
                        stockMap.put(stockPo.getName(), stockPo);
                    }
                    optionPo.setStock(stockMap.get(stockPo.getName()));
                } else {
                    repoStock.save(stockPo);
                    optionPo.setStock(stockPo);
                }
            } else {
                optionPo.setStock(null);
            }
        });

        repoTrip.saveAndFlush(tripPo);

        return ResponseEntity.ok(tripPo.getId());
    }

    @DeleteMapping("/{id}")
    public Long deleteTrip(@PathVariable Long id) {
        repoTrip.deleteById(id);
        return id;
    }
}
