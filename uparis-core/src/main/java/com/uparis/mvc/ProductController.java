package com.uparis.mvc;

import com.uparis.db.entity.ProductPo;
import com.uparis.db.repo.ProductRepository;
import com.uparis.dto.ProductDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ProductDto createProduct(@RequestBody ProductDto newProduct) {
        ProductPo productPo = modelMapper.map(newProduct, ProductPo.class);

        productPo.setId(null);
        productRepo.saveAndFlush(productPo);

        return modelMapper.map(productPo, ProductDto.class);
    }

    @PutMapping
    public ProductDto updateProduct(@RequestBody ProductDto product) {
        Optional<ProductPo> productPoOptional = productRepo.findById(product.getId());
        if (productPoOptional.isPresent()) {
            ProductPo productPo = productPoOptional.get();
            modelMapper.map(product, productPo);
            productRepo.save(productPo);
        }

        return product;
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepo.deleteById(id);
    }
}
