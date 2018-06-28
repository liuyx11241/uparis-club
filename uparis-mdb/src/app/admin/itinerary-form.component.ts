import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";

@Component({
    selector: 'uparis-itinerary-form',
    templateUrl: './itinerary-form.component.html',
})
export class ItineraryFormComponent implements OnInit {

    private _itinerary: Itinerary;

    private _durationChange = new EventEmitter<Itinerary>();

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set itinerary(value: Itinerary) {
        this._itinerary = value;
    }


    @Output()
    get durationChange(): EventEmitter<Itinerary> {
        return this._durationChange;
    }

    onDurationChange() {
        this._durationChange.emit(this._itinerary);
    }
}
