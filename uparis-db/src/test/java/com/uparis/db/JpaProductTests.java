package com.uparis.db;

import com.uparis.db.entity.ItineraryPo;
import com.uparis.db.entity.ItineraryRlt;
import com.uparis.db.entity.ProductPo;
import com.uparis.db.entity.TripPo;
import com.uparis.db.repo.ItineraryRepository;
import com.uparis.db.repo.ItineraryRltRepository;
import com.uparis.db.repo.ProductRepository;
import com.uparis.db.repo.TripRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

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
    ItineraryRltRepository itineraryRltRepository;

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

        Assert.assertEquals(null, productRepository.findByName("FFF"));

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
        tripPo.setDateEnd("19/05/2018");
        tripPo.setProduct(productPo);
        tripPo.setStock(0);
        tripRepository.save(tripPo);
    }

    @Test
    @Transactional
    public void testJpaItinerary() {
        ItineraryPo itinerary1 = new ItineraryPo();
        itineraryRepository.saveAndFlush(itinerary1);
        ItineraryPo itinerary2 = new ItineraryPo();
        itineraryRepository.saveAndFlush(itinerary2);

        ProductPo product = new ProductPo("name");
        productRepository.saveAndFlush(product);

        ItineraryRlt itineraryRlt = new ItineraryRlt();
        itineraryRlt.setItinerary(itinerary1);
        itineraryRlt.setNumOrder(1);
        itineraryRlt.setProduct(product);
        itineraryRltRepository.saveAndFlush(itineraryRlt);

    }
}