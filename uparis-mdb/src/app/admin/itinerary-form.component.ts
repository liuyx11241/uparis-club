import {Component, Input, OnInit} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";

@Component({
    selector: 'uparis-itinerary-form',
    templateUrl: './itinerary-form.component.html',
    styles: [],
})
export class ItineraryFormComponent implements OnInit {

    private _listItinerary: Itinerary[];
    _expandedItinerary: Itinerary;
    displayedColumns = ['id', 'dayStart', 'dayEnd', 'movement', 'actions'];

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set listItinerary(value: Itinerary[]) {
        this._listItinerary = value;
    }
}
