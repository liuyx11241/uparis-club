package com.uparis.mvc;

import com.uparis.db.entity.TripPo;
import com.uparis.db.repo.TripRepository;
import com.uparis.dto.TripDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/trip")
public class TripController {

    @Autowired
    private TripRepository repoTrip;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public Page<TripDto> getTrips(
            @RequestParam(value = "filter", required = false, defaultValue = "") String filter,
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
        Optional<TripPo> tripPo = repoTrip.findById(idTrip);
        return modelMapper.map(tripPo, TripDto.class);
    }
}
