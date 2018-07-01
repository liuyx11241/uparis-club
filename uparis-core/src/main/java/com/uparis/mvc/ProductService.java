package com.uparis.mvc;

import com.uparis.db.entity.*;
import com.uparis.db.repo.ItineraryRepository;
import com.uparis.db.repo.MultimediaRepository;
import com.uparis.db.repo.ProductRepository;
import com.uparis.db.repo.ScheduleRepository;
import com.uparis.dto.ItineraryDto;
import com.uparis.dto.MultimediaDto;
import com.uparis.dto.ProductDto;
import com.uparis.dto.ScheduleDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ProductService {

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

    @Autowired
    private MultimediaRepository repoMultimedia;

    public ProductDto deepGetProduct(Long id) {
        ProductPo productPo = repoProduct.findById(id).orElse(null);
        if (productPo == null) {
            return null;
        }
        return modelMapper.map(productPo, ProductDto.class);
    }

    @Transactional
    public Long deepCreateProduct(ProductDto productDto) {
        ProductPo productPo = repoProduct.saveAndFlush(mapProduct(productDto));

        if (!CollectionUtils.isEmpty(productDto.getListItinerary())) {
            for (ItineraryDto itineraryDto : productDto.getListItinerary()) {
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
            }
        }

        if (!CollectionUtils.isEmpty(productDto.getListMultimedia())) {
            repoMultimedia.saveAll(
                    productDto.getListMultimedia().stream()
                            .map(multimediaDto -> {
                                MultimediaPo multimediaPo = mapMultimedia(multimediaDto);
                                multimediaPo.setProduct(productPo);
                                return multimediaPo;
                            }).collect(Collectors.toList())
            );
        }

        return productPo.getId();
    }

    @Transactional
    public Long deepUpdateProduct(ProductDto productDto) {
        ProductPo productPo = repoProduct.findById(productDto.getId()).get();

        Map<Long, ItineraryPo> itinerary2Delete = productPo.getListItinerary().stream()
                .collect(Collectors.toMap(AbstractPo::getId, po -> po));

        Map<Long, SchedulePo> schedule2Delete = productPo.getListItinerary().stream()
                .filter(itineraryPo -> !CollectionUtils.isEmpty(itineraryPo.getListSchedule()))
                .flatMap(itineraryPo -> itineraryPo.getListSchedule().stream())
                .collect(Collectors.toMap(AbstractPo::getId, po -> po));

        Map<Long, MultimediaPo> multimedia2Delete = productPo.getListMultimedia().stream()
                .collect(Collectors.toMap(AbstractPo::getId, po -> po));

        if (!CollectionUtils.isEmpty(productDto.getListItinerary())) {
            for (ItineraryDto itineraryDto : productDto.getListItinerary()) {
                ItineraryPo itineraryPo = mapItinerary(itineraryDto);
                itineraryPo.setProduct(productPo);
                itinerary2Delete.remove(itineraryPo.getId());
                repoItinerary.save(itineraryPo);

                if (!CollectionUtils.isEmpty(itineraryDto.getListSchedule())) {
                    repoSchedule.saveAll(
                            itineraryDto.getListSchedule().stream()
                                    .map(scheduleDto -> {
                                        SchedulePo schedulePo = mapSchedule(scheduleDto);
                                        schedulePo.setItinerary(itineraryPo);
                                        schedule2Delete.remove(schedulePo.getId());
                                        return schedulePo;
                                    }).collect(Collectors.toList())
                    );
                }
            }
        }

        if (!CollectionUtils.isEmpty(productDto.getListMultimedia())) {
            repoMultimedia.saveAll(
                    productDto.getListMultimedia().stream().map(multimediaDto -> {
                        MultimediaPo multimediaPo = mapMultimedia(multimediaDto);
                        multimediaPo.setProduct(productPo);
                        multimedia2Delete.remove(multimediaPo.getId());
                        return multimediaPo;
                    }).collect(Collectors.toList())
            );
        }

        repoSchedule.deleteInBatch(schedule2Delete.values());
        repoItinerary.deleteInBatch(itinerary2Delete.values());
        repoMultimedia.deleteInBatch(multimedia2Delete.values());

        modelMapper.map(productDto, productPo);
        repoProduct.saveAndFlush(productPo);

        return productPo.getId();
    }

    @Transactional
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

    public MultimediaPo mapMultimedia(MultimediaDto multimediaDto) {
        return modelUtil.mapDto2Po(multimediaDto, repoMultimedia, MultimediaPo.class);
    }

}
