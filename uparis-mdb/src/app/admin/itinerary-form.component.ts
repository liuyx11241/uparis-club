import {Component, Input, OnInit} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";

@Component({
    selector: 'uparis-itinerary-form',
    templateUrl: './itinerary-form.component.html',
})
export class ItineraryFormComponent implements OnInit {

    private _itinerary: Itinerary;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set itinerary(value: Itinerary) {
        this._itinerary = value;
    }
}
