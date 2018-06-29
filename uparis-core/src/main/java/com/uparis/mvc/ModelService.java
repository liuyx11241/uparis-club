package com.uparis.mvc;

import com.uparis.db.entity.ItineraryPo;
import com.uparis.db.entity.ProductPo;
import com.uparis.db.entity.SchedulePo;
import com.uparis.db.repo.ItineraryRepository;
import com.uparis.db.repo.ProductRepository;
import com.uparis.db.repo.ScheduleRepository;
import com.uparis.dto.ItineraryDto;
import com.uparis.dto.ProductDto;
import com.uparis.dto.ScheduleDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.stream.Collectors;

@Service
public class ModelService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ModelUtil modelUtil;

    @Autowired
    private ProductRepository repoProduct;

    @Autowired
    private ItineraryRepository repoItinerary;

    @Autowired
    private ScheduleRepository repoSchedule;

    public ProductDto deepGetProduct(Long id) {
        ProductPo productPo = repoProduct.findById(id).orElse(null);
        if (productPo == null) {
            return null;
        }
        ProductDto productDto = modelMapper.map(productPo, ProductDto.class);
        productDto.getListItinerary().addAll(
            productPo.getListItinerary().stream().map(itineraryPo -> {
                ItineraryDto itineraryDto = modelMapper.map(itineraryPo, ItineraryDto.class);
                itineraryDto.getListSchedule().addAll(
                    itineraryPo.getListSchedule().stream()
                        .map(schedulePo -> modelMapper.map(schedulePo, ScheduleDto.class))
                        .collect(Collectors.toList()));
                return itineraryDto;
            }).collect(Collectors.toList()));
        return productDto;
    }

    @Transactional
    public Long deepSaveProduct(ProductDto productDto) {
        ProductPo productPo = mapProduct(productDto);
        repoProduct.saveAndFlush(productPo);

        if (!CollectionUtils.isEmpty(productDto.getListItinerary())) {
            productDto.getListItinerary().forEach(itineraryDto -> {
                ItineraryPo itineraryPo = mapItinerary(itineraryDto);
                itineraryPo.setProduct(productPo);
                repoItinerary.save(itineraryPo);

                if (!CollectionUtils.isEmpty(itineraryDto.getListSchedule())) {
                    repoSchedule.saveAll(
                        itineraryDto.getListSchedule().stream()
                            .map(scheduleDto -> {
                                SchedulePo schedulePo = mapSchedule(scheduleDto);
                                schedulePo.setItinerary(itineraryPo);
                                return schedulePo;
                            }).collect(Collectors.toList()));
                }
            });
        }

        return productPo.getId();
    }

    public Long deepDeleteProduct(ProductDto productDto) {
        return null;
    }

    public ProductPo mapProduct(ProductDto productDto) {
        return modelUtil.mapDto2Po(productDto, repoProduct, ProductPo.class);
    }

    public ItineraryPo mapItinerary(ItineraryDto itineraryDto) {
        return modelUtil.mapDto2Po(itineraryDto, repoItinerary, ItineraryPo.class);
    }

    public SchedulePo mapSchedule(ScheduleDto scheduleDto) {
        return modelUtil.mapDto2Po(scheduleDto, repoSchedule, SchedulePo.class);
    }
}
