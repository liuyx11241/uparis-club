package com.uparis.mvc;

import com.uparis.dto.TripDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.uparis.mvc.MockRepo.mockTrip;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    @GetMapping("/{id}")
    public TripDto getTrip(@PathVariable("id") Long idTrip) {
        return mockTrip()[1];
    }

}
