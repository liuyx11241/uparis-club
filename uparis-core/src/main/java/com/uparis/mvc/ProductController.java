package com.uparis.mvc;

import com.uparis.db.entity.ItineraryPo;
import com.uparis.db.entity.ProductPo;
import com.uparis.db.repo.ItineraryRepository;
import com.uparis.db.repo.ProductRepository;
import com.uparis.dto.ProductDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private ItineraryRepository itineraryRepo;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<ProductDto> getAllProducts(@RequestParam(value = "page", required = false, defaultValue = "0") Integer page) {
        List<ProductPo> productPos = productRepo.findAll();
        return productPos.stream().map(
                productPo -> modelMapper.map(productPo, ProductDto.class)
        ).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ProductDto getProduct(@PathVariable("id") Long idProduct) {
        Optional<ProductPo> productPo = productRepo.findById(idProduct);
        if (productPo.isPresent()) {
            return modelMapper.map(productPo.get(), ProductDto.class);
        }
        return null;
    }

    @PostMapping
    public Long createProduct(@RequestBody ProductDto newProduct) {
        ProductPo productPo = modelMapper.map(newProduct, ProductPo.class);

        productPo.setId(null);
        productRepo.saveAndFlush(productPo);

        if (!CollectionUtils.isEmpty(newProduct.getListItinerary())) {
            itineraryRepo.saveAll(
                    newProduct.getListItinerary().stream()
                            .map(itineraryDto -> {
                                ItineraryPo itineraryPo = modelMapper.map(itineraryDto, ItineraryPo.class);
                                itineraryPo.setProduct(productPo);
                                return itineraryPo;
                            }).collect(Collectors.toList()));
        }

        return productPo.getId();
    }

    @PutMapping
    public Long updateProduct(@RequestBody ProductDto product) {
        Optional<ProductPo> productPoOptional = productRepo.findById(product.getId());
        if (productPoOptional.isPresent()) {
            ProductPo productPo = productPoOptional.get();
            modelMapper.map(product, productPo);
            productRepo.save(productPo);

            if (!CollectionUtils.isEmpty(product.getListItinerary())) {
                itineraryRepo.saveAll(
                        product.getListItinerary().stream()
                                .filter(itineraryDto -> itineraryDto.getId() == null)
                                .map(itineraryDto -> {
                                    ItineraryPo itineraryPo = modelMapper.map(itineraryDto, ItineraryPo.class);
                                    itineraryPo.setProduct(productPo);
                                    return itineraryPo;
                                }).collect(Collectors.toList()));
                itineraryRepo.saveAll(
                        product.getListItinerary().stream()
                                .filter(itineraryDto -> itineraryDto.getId() != null)
                                .map(itineraryDto -> {
                                    Optional<ItineraryPo> optional = itineraryRepo.findById(itineraryDto.getId());
                                    ItineraryPo itineraryPo;
                                    if (optional.isPresent()) {
                                        itineraryPo = optional.get();
                                        modelMapper.map(itineraryDto, itineraryPo);
                                    } else {
                                        itineraryPo = modelMapper.map(itineraryDto, ItineraryPo.class);
                                    }
                                    itineraryPo.setProduct(productPo);
                                    return itineraryPo;
                                }).collect(Collectors.toList()));
            }
        }

        return product.getId();
    }

    @DeleteMapping("/{id}")
    public Long deleteProduct(@PathVariable Long id) {
        productRepo.deleteById(id);
        return id;
    }
}
