package com.uparis.util;

import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class HashCodeService {


    // MD2, MD5, SHA-1, SHA-256, SHA-384 and SHA-512
    public String generate(String originalString) {
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("MD5");
            return DatatypeConverter.printHexBinary(digest.digest(originalString.getBytes(StandardCharsets.UTF_8)));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }
}
