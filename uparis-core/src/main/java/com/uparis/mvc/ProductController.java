package com.uparis.mvc;

import com.uparis.db.repo.ProductRepository;
import com.uparis.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping
    public List<ProductDto> getAllProducts() {
        ProductDto product1 = new ProductDto();
        product1.setId(1L);
        product1.setName("name1");
        product1.setDuration(7);
        product1.setAlias("ski1");
        product1.setShortDescription("SKI in Short Description");
        product1.setLongDescription("SKI in Long Description");

        ProductDto product2 = new ProductDto();
        product2.setId(2L);
        product2.setName("name2");
        product2.setDuration(7);
        product2.setAlias("tmb1");
        product2.setShortDescription("Tour du mont blanc in short Description");
        product2.setLongDescription("Tour du mont blanc in Long Description");

        return Arrays.asList(product1, product2);
    }

    @GetMapping("/{id}")
    public ProductDto getProduct(@PathVariable("id") String idProduct) {
        ProductDto product1 = new ProductDto();
        product1.setId(1L);
        product1.setName("name1");
        product1.setDuration(7);
        product1.setAlias("ski1");
        product1.setShortDescription("SKI in Short Description");
        product1.setLongDescription("SKI in Long Description");
        return product1;
    }
}
