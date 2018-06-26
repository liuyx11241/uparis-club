import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Trip} from "../model/trip.dto";

@Component({
    selector: 'uparis-trip-form',
    templateUrl: './trip-form.component.html',
    styles: []
})
export class TripFormComponent implements OnInit {

    _trip: Trip;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip }) => {
            this._trip = data.trip;
        })
    }

}
