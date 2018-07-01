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

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProductService productService;

    @GetMapping
    public Page<ProductDto> getProducts(
            @RequestParam(value = "filter", required = false, defaultValue = "") String filter,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "50") Integer pageSize,
            @RequestParam(value = "sort", required = false, defaultValue = "id") String sort,
            @RequestParam(value = "direction", required = false, defaultValue = "ASC") String direction) {
        Page<ProductPo> productPoPage = productRepo.findAll(
                PageRequest.of(
                        pageIndex,
                        pageSize,
                        Sort.by(Sort.Direction.fromString(direction), sort)));
        return productPoPage.map(productPo -> modelMapper.map(productPo, ProductDto.class));
    }

    @GetMapping("/{id}")
    public ProductDto getProduct(@PathVariable("id") Long idProduct) {
        return productService.deepGetProduct(idProduct);
    }

    @PostMapping
    public Long createProduct(@RequestBody ProductDto newProduct) {
        newProduct.setId(null);
        newProduct.getListItinerary().forEach(itineraryDto -> {
            itineraryDto.setId(null);
            itineraryDto.getListSchedule().forEach(scheduleDto -> scheduleDto.setId(null));
        });
        return productService.deepCreateProduct(newProduct);
    }

    @PutMapping
    public Long updateProduct(@RequestBody ProductDto product) {
        if (product.getId() == null) {
            return createProduct(product);
        }
        return productService.deepUpdateProduct(product);
    }

    @DeleteMapping("/{id}")
    public Long deleteProduct(@PathVariable Long id) {
        productRepo.deleteById(id);
        return id;
    }
}
