package com.uparis.dto;

import com.uparis.db.entity.AbstractPo;

public class QuestionDto extends AbstractPo {

    private String key;

    private String label;

    private String typeControl;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getTypeControl() {
        return typeControl;
    }

    public void setTypeControl(String typeControl) {
        this.typeControl = typeControl;
    }
}
