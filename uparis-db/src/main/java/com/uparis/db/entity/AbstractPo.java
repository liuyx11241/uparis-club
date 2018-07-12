package com.uparis.db.entity;

import com.uparis.db.util.DateTimeFormatter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Objects;

@MappedSuperclass
public abstract class AbstractPo {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, updatable = false)
    private String timeCreated;

    @Column(nullable = false)
    private String timeModified;

    @PrePersist
    private void preInsert() {
        this.timeModified = this.timeCreated = DateTimeFormatter.format(Calendar.getInstance().getTime());
    }

    @PreUpdate
    private void preUpdate() {
        this.timeModified = DateTimeFormatter.format(Calendar.getInstance().getTime());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
    }

    public String getTimeModified() {
        return timeModified;
    }

    public void setTimeModified(String timeModified) {
        this.timeModified = timeModified;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof AbstractPo))
            return false;
        AbstractPo that = (AbstractPo) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
