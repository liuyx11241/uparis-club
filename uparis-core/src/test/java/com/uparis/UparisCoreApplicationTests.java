package com.uparis;

import com.uparis.util.HashCodeService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UparisCoreApplicationTests {

    @Autowired
    private HashCodeService hashCodeService;

    @Test
    public void contextLoads() {
    }

    @Test
    public void testHashCode() {
        for (int i = 0; i < 100; i++) {
            String value = hashCodeService.generate();
            System.out.println(value.matches("\\w+") + "\t" + value);
        }
    }
}
