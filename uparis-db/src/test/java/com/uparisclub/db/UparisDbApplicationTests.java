package com.uparisclub.db;

import com.uparisclub.db.entity.Product;
import com.uparisclub.db.repo.ProductRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UparisDbApplicationTests {

    @Autowired
    ProductRepository productRepository;

    @Test
    public void contextLoads() {
    }

    @Test
    public void testJpaProduct() {
        Product product = null;
        for (int i = 0; i < 10; i++) {
            product = productRepository.save(new Product("name" + i));
        }


        Assert.assertEquals(10, productRepository.findAll().size());

        Assert.assertEquals(null, productRepository.findByName("FFF"));

        Assert.assertNotNull(productRepository.findById(product.getId()));

        Assert.assertEquals(product.getId(), productRepository.findByName("name9").getId());

        productRepository.delete(productRepository.findByName("name9"));

        Assert.assertEquals(9, productRepository.findAll().size());
    }
}
