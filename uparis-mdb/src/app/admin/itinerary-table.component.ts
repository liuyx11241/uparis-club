import {Component, Input, OnInit} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";

@Component({
    selector: 'uparis-itinerary-table',
    templateUrl: './itinerary-table.component.html',
    styles: [],
})
export class ItineraryTableComponent implements OnInit {

    private _listItinerary: Itinerary[];
    private _expandedItinerary: Itinerary;
    displayedColumns = ['id', 'dayStart', 'dayEnd', 'movement', 'actions'];

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set listItinerary(value: Itinerary[]) {
        this._listItinerary = value;
        if (this._listItinerary && this._listItinerary.length > 0) {
            this._expandedItinerary = this._listItinerary[0];
        }
    }

    set expandedItinerary(value: Itinerary) {
        // if (this._expandedItinerary === value) {
        //     this._expandedItinerary = null;
        // } else {
        // }
        this._expandedItinerary = value;
    }

    add(): void {
        window.alert("add");
    }

    save(): void {
        window.alert("save");
    }

    delete(value: Itinerary): void {
        window.alert(JSON.stringify(value));
    }
}
