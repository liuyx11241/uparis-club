package com.uparis.db;

import com.uparis.db.constant.TypeCurrency;
import com.uparis.db.entity.ItineraryPo;
import com.uparis.db.entity.ProductPo;
import com.uparis.db.entity.SchedulePo;
import com.uparis.db.entity.TripPo;
import com.uparis.db.repo.ItineraryRepository;
import com.uparis.db.repo.ProductRepository;
import com.uparis.db.repo.ScheduleRepository;
import com.uparis.db.repo.TripRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JpaProductTests {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    ItineraryRepository itineraryRepository;

    @Autowired
    ScheduleRepository scheduleRepository;

    @Test
    public void contextLoads() {
    }

    @Test
    public void testJpaProduct() {
        // fixme Danger because of create-drop
        ProductPo product = null;
        for (int i = 0; i < 10; i++) {
            product = productRepository.save(new ProductPo("name" + i));
        }

        Assert.assertEquals(10, productRepository.findAll().size());

        Assert.assertEquals(false, productRepository.findOptionalByName("FFF").isPresent());

        Assert.assertNotNull(productRepository.findById(product.getId()));

        Assert.assertEquals(product.getId(), productRepository.findByName("name9").getId());

        productRepository.delete(productRepository.findByName("name9"));

        Assert.assertEquals(9, productRepository.findAll().size());
    }

    @Test
    public void testJpaTrip() {
        ProductPo productPo = productRepository.save(new ProductPo("test", 7));

        TripPo tripPo = new TripPo();
        tripPo.setDateStart("18/05/2018");
        tripPo.setDateEnd("18/05/2018");
        tripPo.setProduct(productPo);
        tripPo.setStock(0);
        tripPo.setPrice(BigDecimal.ONE);
        tripPo.setCurrency(TypeCurrency.EUR);
        tripRepository.save(tripPo);
    }

    @Test
    @Transactional
    public void testJpaItinerary() {
        ProductPo product = new ProductPo("name");
        productRepository.saveAndFlush(product);

        ItineraryPo itinerary1 = new ItineraryPo();
        itinerary1.setDayStart(1);
        itinerary1.setDuration(1);
        itinerary1.setProduct(product);
        itineraryRepository.saveAndFlush(itinerary1);
    }

    @Test
    public void testProductService() {
        ProductPo productPo = new ProductPo();
        productPo.setName("TEST");
        productPo.setDuration(8);
        productPo.setListItinerary(new ArrayList<>());
        productPo.setListMultimedia(new ArrayList<>());

        for (int i = 0; i < 3; i++) {
            ItineraryPo itineraryPo = new ItineraryPo();
            itineraryPo.setDayStart(i + 1);
            itineraryPo.setDuration(1);
            itineraryPo.setProduct(productPo);
            itineraryPo.setListSchedule(new ArrayList<>());
            productPo.getListItinerary().add(itineraryPo);
            for (int j = 0; j < 2; j++) {
                SchedulePo schedulePo = new SchedulePo();
                schedulePo.setNumOrder(j);
                schedulePo.setActivity("TEST");
                schedulePo.setItinerary(itineraryPo);
                itineraryPo.getListSchedule().add(schedulePo);
            }
        }
        productRepository.saveAndFlush(productPo);

        Assert.assertEquals(3, itineraryRepository.count());
        Assert.assertEquals(6, scheduleRepository.count());

        ItineraryPo itineraryPo = new ItineraryPo();
        itineraryPo.setDayStart(4);
        itineraryPo.setDuration(1);
        itineraryPo.setProduct(productPo);
        productPo.getListItinerary().remove(0);
        productPo.getListItinerary().add(itineraryPo);
        productRepository.saveAndFlush(productPo);

        Assert.assertEquals(3, itineraryRepository.count());
        Assert.assertEquals(4, scheduleRepository.count());
    }


}
