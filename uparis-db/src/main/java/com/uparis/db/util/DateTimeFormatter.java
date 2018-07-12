package com.uparis.db.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateTimeFormatter {
    private static final SimpleDateFormat DATE_TIME_FORMAT =
        new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");

    private DateTimeFormatter() {
        //no instance
    }

    public static String format(Date date) {
        return DATE_TIME_FORMAT.format(date);
    }
}
