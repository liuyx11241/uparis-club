package com.uparis.db;

import com.uparis.db.constant.TypeGender;
import com.uparis.db.entity.PersonPo;
import com.uparis.db.repo.PersonRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JpaPersonTests {

    @Autowired
    private PersonRepository repoPerson;

    @Test
    public void contextLoads() {
    }

    @Test
    public void testGrantedAuthority() {

        PersonPo personPo = new PersonPo();
        personPo.setGender(TypeGender.MALE);
        personPo.setFullName("setFullName");
        personPo.setFirstName("setFirstName");
        personPo.setLastName("setLastName");
        personPo.setBirthday("18/05/1987");
        personPo.setWechat("setWechat");
        personPo.setTelephone("setTelephone");
        personPo.setEmail("setEmail");
        personPo.setAddress("setAddress");
        personPo.setAddressComplement("setAddressComplement");
        personPo.setZipCode("setZipCode");
        personPo.setCity("setCity");
        personPo.setCountry("setCountry");
        repoPerson.save(personPo);
    }
}
