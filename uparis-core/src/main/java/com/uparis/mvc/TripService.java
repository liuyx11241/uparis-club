package com.uparis.mvc;

import com.uparis.db.entity.TripPo;
import com.uparis.db.repo.TripRepository;
import com.uparis.dto.TripDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TripService {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ModelUtil modelUtil;

    @Autowired
    private TripRepository repoTrip;

    public TripDto deepGetTrip(Long id) {
        TripPo tripPo = repoTrip.findById(id).get();
        return modelMapper.map(tripPo, TripDto.class);
    }

    @Transactional
    public Long deepCreateTrip(TripDto tripDto) {
        return repoTrip.saveAndFlush(mapTrip(tripDto)).getId();
    }

    private TripPo mapTrip(TripDto tripDto) {
        return modelUtil.mapDto2Po(tripDto, repoTrip, TripPo.class);
    }
}
