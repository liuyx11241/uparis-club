package com.uparisclub.mvc;

import com.uparisclub.db.repo.ProductRepository;
import com.uparisclub.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping
    public List<ProductDto> getAllProducts() {
        ProductDto product1 = new ProductDto();
        product1.setId("id1");
        product1.setName("name1");

        ProductDto product2 = new ProductDto();
        product2.setId("id2");
        product2.setName("name2");

        return Arrays.asList(product1, product2);
    }
}
