package com.uparis.mvc;

import com.uparis.dto.OptionDto;
import com.uparis.dto.TripDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    @GetMapping("/{id}")
    public TripDto getTrip(@PathVariable("id") String idTrip) {
        return mockTrip()[1];
    }

    public static TripDto[] mockTrip() {
        TripDto tripDto1 = new TripDto("16/06/2018", "22/06/2018", 14);
        tripDto1.setId("trip1");
        tripDto1.setPrice(BigDecimal.valueOf(388));
        tripDto1.setNameProduct("SKI");
        tripDto1.setPriceCurrency("EUR");
        tripDto1.getMappedListOption()
            .putAll(optionDtos1().stream().collect(Collectors.groupingBy(OptionDto::getLevel, Collectors.toList())));

        TripDto tripDto2 = new TripDto("16/07/2018", "22/07/2018", 7);
        tripDto2.setId("trip2");
        tripDto2.setNameProduct("Tour du mont blanc");
        tripDto2.setPrice(BigDecimal.valueOf(388));
        tripDto2.setPriceCurrency("EUR");
        tripDto2.getMappedListOption()
            .putAll(optionDtos2().stream().collect(Collectors.groupingBy(OptionDto::getLevel, Collectors.toList())));

        return new TripDto[]{tripDto1, tripDto2};
    }

    private static List<OptionDto> optionDtos1() {
        return Arrays.asList(
            new OptionDto("1", "1", "ow", 1, 1, BigDecimal.valueOf(396), "EUR", "1", 8, "PADI OW"),
            new OptionDto("2", "1", "aow", 1, 2, BigDecimal.valueOf(313), "EUR", "1", 8, null),
            new OptionDto("3", "1", "Fun Dive", 1, 3, BigDecimal.valueOf(325), "EUR", "1", 8, "Fun Dive"),
            new OptionDto("4", "1", "Surf", 1, 4, BigDecimal.valueOf(180), "EUR", "2", 10, null)
                            );
    }

    private static List<OptionDto> optionDtos2() {
        return Arrays.asList(
            new OptionDto("1", "1", "ow", 1, 1, BigDecimal.valueOf(100), "EUR"),
            new OptionDto("2", "1", "aow", 1, 2, BigDecimal.valueOf(200), "EUR", "4", 5, null),
            new OptionDto("3", "1", "fun dive", 2, 3, BigDecimal.valueOf(300), "EUR"),
            new OptionDto("4", "1", "Surf", 2, 4, BigDecimal.valueOf(150), "EUR", "3", 3, null),
            new OptionDto("5", "1", "With Car", 3, 4, BigDecimal.valueOf(6), "EUR", "6", 2, null),
            new OptionDto("6", "1", "without car", 3, 4, BigDecimal.valueOf(9), "EUR")
                            );
    }
}
