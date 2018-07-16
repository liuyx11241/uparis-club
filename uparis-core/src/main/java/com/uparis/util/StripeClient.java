package com.uparis.util;

import com.stripe.Stripe;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Component
public class StripeClient {

    private BigDecimal HUNDRED = BigDecimal.valueOf(100);

    @Autowired
    StripeClient() {
        Stripe.apiKey = "sk_test_XXXXXXXXXXXXXXXXX";
        // Configuring Timeout
        Stripe.setConnectTimeout(30 * 1000); // in milliseconds
        Stripe.setReadTimeout(80 * 1000);
    }

    public Charge chargeCreditCard(String token, BigDecimal amount, String currency) throws Exception {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("source", token);
        //we multplied amount by 100 because Stripe requires not dollars, but cents.
        chargeParams.put("amount", amount.multiply(HUNDRED).longValue());
        chargeParams.put("currency", currency);
        return Charge.create(chargeParams);
    }
}