package com.uparis.auth;

import org.springframework.security.core.GrantedAuthority;

public enum EnumRole implements GrantedAuthority {

    ROLE_ADMIN, ROLE_LEADER, ROLE_CLIENT;

    @Override
    public String getAuthority() {
        return this.name();
    }
}
