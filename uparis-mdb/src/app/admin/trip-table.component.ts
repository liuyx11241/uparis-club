import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../model/trip.dto";

@Component({
    selector: 'uparis-trip-table',
    templateUrl: './trip-table.component.html',
})
export class TripTableComponent implements OnInit {

    private _listTrip: Trip[];
    _displayedColumns = ['id', 'idProduct', 'dateStart', 'dateEnd', 'stock', 'mainPrice', 'actions'];


    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set listTrip(value: Trip[]) {
        this._listTrip = value;
    }
}
