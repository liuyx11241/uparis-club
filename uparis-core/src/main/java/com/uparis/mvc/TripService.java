package com.uparis.mvc;

import com.uparis.db.entity.OptionPo;
import com.uparis.db.entity.PricePo;
import com.uparis.db.entity.StockPo;
import com.uparis.db.entity.TripPo;
import com.uparis.db.repo.OptionRepository;
import com.uparis.db.repo.PriceRepository;
import com.uparis.db.repo.StockRepository;
import com.uparis.db.repo.TripRepository;
import com.uparis.dto.OptionDto;
import com.uparis.dto.PriceDto;
import com.uparis.dto.StockDto;
import com.uparis.dto.TripDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    private PriceRepository repoPrice;

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
        repoPrice.saveAll(
                tripPo.getListPrice().stream()
                        .peek(pricePo -> pricePo.setTrip(tripPo))
                        .collect(Collectors.toList()));

        return tripPo.getId();
    }

    @Transactional
    public Long deepUpdateTrip(TripDto tripDto) {
        TripPo tripPo = repoTrip.findById(tripDto.getId()).get();

        repoPrice.saveAll(
                tripDto.getListPrice().stream().map(priceDto -> {
                    PricePo pricePo = mapPrice(priceDto);
                    pricePo.setTrip(tripPo);
                    return pricePo;
                }).collect(Collectors.toList())
        );

        modelMapper.map(tripDto, tripPo);
        repoTrip.save(tripPo);
        return tripPo.getId();
    }

    private TripPo mapTrip(TripDto tripDto) {
        return modelUtil.mapDto2Po(tripDto, repoTrip, TripPo.class);
    }

    private PricePo mapPrice(PriceDto priceDto) {
        return modelUtil.mapDto2Po(priceDto, repoPrice, PricePo.class);
    }

    private OptionPo mapOption(OptionDto optionDto) {
        return modelUtil.mapDto2Po(optionDto, repoOption, OptionPo.class);
    }

    private StockPo mapStock(StockDto stockDto) {
        return modelUtil.mapDto2Po(stockDto, repoStock, StockPo.class);
    }
}
