package com.uparis.mvc;

import com.uparis.db.entity.ProductPo;
import com.uparis.db.repo.ProductRepository;
import com.uparis.dto.ProductDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProductRepository repoProduct;

    @GetMapping
    public Page<ProductDto> getProducts(
            @RequestParam Map<String, String> filter,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "50") Integer pageSize,
            @RequestParam(value = "sort", required = false, defaultValue = "id") String sort,
            @RequestParam(value = "direction", required = false, defaultValue = "ASC") String direction) {
        Page<ProductPo> productPoPage = repoProduct.findAll(
                PageRequest.of(
                        pageIndex,
                        pageSize,
                        Sort.by(Sort.Direction.fromString(direction), sort)));
        return productPoPage.map(productPo -> modelMapper.map(productPo, ProductDto.class));
    }

    @GetMapping("/{id}")
    public ProductDto getProduct(@PathVariable("id") Long idProduct) {
        ProductPo productPo = repoProduct.findById(idProduct).orElse(null);
        if (productPo == null) {
            return null;
        }
        return modelMapper.map(productPo, ProductDto.class);
    }

    @PostMapping
    public Long createProduct(@RequestBody ProductDto newProduct) {
        newProduct.setId(null);
        newProduct.getListItinerary().forEach(itineraryDto -> {
            itineraryDto.setId(null);
            itineraryDto.getListSchedule().forEach(scheduleDto -> scheduleDto.setId(null));
        });
        newProduct.getListMultimedia().forEach(multimediaDto -> multimediaDto.setId(null));

        return updateProduct(newProduct);
    }

    @PutMapping
    public Long updateProduct(@RequestBody ProductDto productDto) {
        ProductPo productPo = modelMapper.map(productDto, ProductPo.class);
        productPo.getListItinerary().forEach(itineraryPo -> {
            itineraryPo.getListSchedule().forEach(schedulePo -> schedulePo.setItinerary(itineraryPo));
            itineraryPo.setProduct(productPo);
        });

        productPo.getListMultimedia().forEach(multimediaPo -> multimediaPo.setProduct(productPo));

        repoProduct.saveAndFlush(productPo);

        return productPo.getId();
    }

    @DeleteMapping("/{id}")
    public Long deleteProduct(@PathVariable Long id) {
        repoProduct.deleteById(id);
        return id;
    }
}
