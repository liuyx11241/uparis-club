package com.uparis.mvc;

import com.uparis.db.entity.AbstractPo;
import com.uparis.db.entity.OptionPo;
import com.uparis.db.entity.StockPo;
import com.uparis.db.entity.TripPo;
import com.uparis.db.repo.OptionRepository;
import com.uparis.db.repo.StockRepository;
import com.uparis.db.repo.TripRepository;
import com.uparis.dto.OptionDto;
import com.uparis.dto.StockDto;
import com.uparis.dto.TripDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class TripService {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ModelUtil modelUtil;

    @Autowired
    private TripRepository repoTrip;

    @Autowired
    private OptionRepository repoOption;

    @Autowired
    private StockRepository repoStock;

    public TripDto deepGetTrip(Long id) {
        TripPo tripPo = repoTrip.findById(id).get();
        return modelMapper.map(tripPo, TripDto.class);
    }

    @Transactional
    public Long deepCreateTrip(TripDto tripDto) {
        TripPo tripPo = repoTrip.saveAndFlush(mapTrip(tripDto));

        Map<String, StockPo> stockMap = new HashMap<>();
        repoOption.saveAll(
                tripDto.getListOption().stream()
                        .map(optionDto -> {
                            OptionPo optionPo = mapOption(optionDto);
                            optionPo.setTrip(tripPo);
                            if (null != optionDto.getStock()) {
                                String stockName = optionDto.getStock().getName();
                                if (!stockMap.containsKey(stockName)) {
                                    StockPo stockPo = mapStock(optionDto.getStock());
                                    repoStock.save(stockPo);
                                    stockMap.put(stockPo.getName(), stockPo);
                                }
                                optionPo.setStock(stockMap.get(stockName));
                            }
                            return optionPo;
                        }).collect(Collectors.toList()));
        return tripPo.getId();
    }

    @Transactional
    public Long deepUpdateTrip(TripDto tripDto) {
        TripPo tripPo = repoTrip.findById(tripDto.getId()).get();

        Map<Long, OptionPo> option2Delete =
                tripPo.getListOption().stream().collect(Collectors.toMap(AbstractPo::getId, po -> po));

        Map<String, StockPo> stockMap = new HashMap<>();

        repoOption.saveAll(
                tripDto.getListOption().stream()
                        .map(optionDto -> {
                            OptionPo optionPo = mapOption(optionDto);
                            optionPo.setTrip(tripPo);
                            option2Delete.remove(optionPo.getId());
                            if (null != optionDto.getStock()) {
                                StockPo stockPo = mapStock(optionDto.getStock());
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
                            return optionPo;
                        }).collect(Collectors.toList()));

        if (!option2Delete.isEmpty()) {
            repoOption.deleteInBatch(option2Delete.values());
        }

        modelMapper.map(tripDto, tripPo);
        repoTrip.save(tripPo);
        return tripPo.getId();
    }

    private TripPo mapTrip(TripDto tripDto) {
        return modelUtil.mapDto2Po(tripDto, repoTrip, TripPo.class);
    }

    private OptionPo mapOption(OptionDto optionDto) {
        return modelUtil.mapDto2Po(optionDto, repoOption, OptionPo.class);
    }

    private StockPo mapStock(StockDto stockDto) {
        return modelUtil.mapDto2Po(stockDto, repoStock, StockPo.class);
    }
}
