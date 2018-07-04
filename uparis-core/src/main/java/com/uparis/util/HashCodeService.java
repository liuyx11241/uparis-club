package com.uparis.util;

import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Service
public class HashCodeService {

    // MD2, MD5, SHA-1, SHA-256, SHA-384 and SHA-512
    public String generate(String originalString) {
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("MD5");
            return Base64.getEncoder().encodeToString(digest.digest(
                originalString.getBytes(StandardCharsets.UTF_8)));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }
}
