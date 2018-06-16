import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trip} from "../model/trip.dto";

@Component({
    selector: 'uparis-trip-selector',
    templateUrl: './trip-selector.component.html',
    styles: []
})
export class TripSelectorComponent implements OnInit {

    private _listTrip$: Trip[];

    private _selectedTrip$: Trip;

    @Input()
    placeholder$: string;

    @Output()
    readonly selection = new EventEmitter<Trip>();

    constructor() {
    }

    ngOnInit() {
    }

    get listTrip$(): Trip[] {
        return this._listTrip$;
    }

    @Input()
    set listTrip$(value: Trip[]) {
        this._listTrip$ = value;
    }

    get selectedTrip$(): Trip {
        return this._selectedTrip$;
    }

    set selectedTrip$(value: Trip) {
        this._selectedTrip$ = value;
        this.selection.emit(value);
    }
}
