package com.uparis.dto;

import java.util.List;

public class PersonDto extends PersonSimpleDto {
    private String portraitUrl;

    private String selfDescription;

    private List<String> listGrantedAuthority;

    public String getPortraitUrl() {
        return portraitUrl;
    }

    public void setPortraitUrl(String portraitUrl) {
        this.portraitUrl = portraitUrl;
    }

    public String getSelfDescription() {
        return selfDescription;
    }

    public void setSelfDescription(String selfDescription) {
        this.selfDescription = selfDescription;
    }

    public List<String> getListGrantedAuthority() {
        return listGrantedAuthority;
    }

    public void setListGrantedAuthority(List<String> listGrantedAuthority) {
        this.listGrantedAuthority = listGrantedAuthority;
    }
}
