package com.uparis.mvc;

import com.uparis.db.entity.ProductPo;
import com.uparis.db.repo.ProductRepository;
import com.uparis.dto.ProductDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ModelService modelService;

    @GetMapping
    public List<ProductDto> getAllProducts(@RequestParam(value = "page", required = false, defaultValue = "0") Integer page) {
        List<ProductPo> productPos = productRepo.findAll();
        return productPos.stream().map(
                productPo -> modelMapper.map(productPo, ProductDto.class)).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ProductDto getProduct(@PathVariable("id") Long idProduct) {
        return modelService.deepGetProduct(idProduct);
    }

    @PostMapping
    public Long createProduct(@RequestBody ProductDto newProduct) {
        newProduct.setId(null);
        newProduct.getListItinerary().forEach(itineraryDto -> {
            itineraryDto.setId(null);
            itineraryDto.getListSchedule().forEach(scheduleDto -> scheduleDto.setId(null));
        });
        return modelService.deepCreateProduct(newProduct);
    }

    @PutMapping
    public Long updateProduct(@RequestBody ProductDto product) {
        if (product.getId() == null) {
            return createProduct(product);
        }
        return modelService.deepUpdateProduct(product);
    }

    @DeleteMapping("/{id}")
    public Long deleteProduct(@PathVariable Long id) {
        productRepo.deleteById(id);
        return id;
    }
}
