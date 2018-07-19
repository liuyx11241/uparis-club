package com.uparis.mvc;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.codec.Hex;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;

@Configuration
public class ModelConfig {

    @Value("${uparis.security.encryptor.salt}")
    private String salt;

    @Value("${uparis.security.encryptor.password}")
    private String password;

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean
    public TextEncryptor textEncryptor() {
        return Encryptors.delux(password, new String(Hex.encode(salt.getBytes())));
    }
}
