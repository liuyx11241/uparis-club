package com.uparis.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_ANSWER")
public class AnswerPo extends AbstractPo {

    @ManyToOne(optional = false)
    private OrderPo order;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false)
    private String answer;

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public OrderPo getOrder() {
        return order;
    }

    public void setOrder(OrderPo order) {
        this.order = order;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
