package com.uparis;

import com.uparis.db.entity.ItineraryPo;
import com.uparis.db.entity.ProductPo;
import com.uparis.db.entity.SchedulePo;
import com.uparis.db.repo.ItineraryRepository;
import com.uparis.db.repo.ProductRepository;
import com.uparis.db.repo.ScheduleRepository;
import com.uparis.util.HashCodeService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UparisCoreApplicationTests {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ItineraryRepository itineraryRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private HashCodeService hashCodeService;

    @Test
    public void contextLoads() {
    }

    @Test
    public void testProductService() {
        ProductPo productPo = new ProductPo();
        productPo.setName("TEST");
        productPo.setDuration(8);
        productPo.setListItinerary(new ArrayList<>());

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

    @Test
    public void testHashCode() {
        for (int i = 0; i < 100; i++) {
            String value =
                    hashCodeService.generate(String.valueOf(i));
            System.out.println(value.matches("\\w+") + "\t" + value);
        }
    }
}
