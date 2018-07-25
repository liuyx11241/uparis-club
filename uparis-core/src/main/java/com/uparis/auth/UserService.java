package com.uparis.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserService implements UserDetailsService {

    @Value("${uparis.security.oauth2.encoding-strength}")
    private int encodingStrength;

    @Value("${uparis.security.oauth2.admin-username}")
    private String adminUsername;

    @Value("${uparis.security.oauth2.admin-password}")
    private String adminPassword;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (adminUsername.equals(username)) {
            return new User(username, passwordEncoder().encode(adminPassword), Arrays.asList(EnumRole.values()));
        }
        throw new UsernameNotFoundException(String.format("User not found : %s", username));
    }
}
