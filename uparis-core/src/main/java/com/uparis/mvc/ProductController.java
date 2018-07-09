package com.uparis.mvc;

import com.uparis.db.constant.TypeProductStatus;
import com.uparis.db.entity.ProductPo;
import com.uparis.db.repo.ProductRepository;
import com.uparis.db.repo.TagRepository;
import com.uparis.dto.ProductDto;
import com.uparis.dto.ProductSimpleDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProductRepository repoProduct;

    @Autowired
    private TagRepository repoTag;

    @GetMapping
    public Page<ProductSimpleDto> getProducts(
            @RequestParam Map<String, String> filter,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "50") Integer pageSize,
            @RequestParam(value = "sort", required = false, defaultValue = "id") String sort,
            @RequestParam(value = "direction", required = false, defaultValue = "ASC") String direction) {
        PageRequest pageRequest = PageRequest.of(pageIndex, pageSize, Sort.by(Sort.Direction.fromString(direction), sort));
        Example<ProductPo> example = Example.of(new ProductPo());
        if (filter.containsKey("status")) {
            example.getProbe().setStatus(TypeProductStatus.valueOf(filter.get("status").toUpperCase()));
        }
        Page<ProductPo> productPoPage = repoProduct.findAll(example, pageRequest);
        return productPoPage.map(productPo -> modelMapper.map(productPo, ProductSimpleDto.class));
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

        repoTag.saveAll(productPo.getListTag());

        repoProduct.save(productPo);

        return productPo.getId();
    }

    @DeleteMapping("/{id}")
    public Long deleteProduct(@PathVariable Long id) {
        repoProduct.deleteById(id);
        return id;
    }
}
