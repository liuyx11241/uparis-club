import {Component, Input, OnInit} from '@angular/core';
import {Itinerary} from "./itinerary.dto";
import {Observable} from "rxjs/index";

@Component({
    selector: 'uparis-itinerary-item-list',
    templateUrl: './itinerary-item-list.component.html',
    styleUrls: ['./itinerary-item-list.component.css']
})
export class ItineraryItemListComponent implements OnInit {

    private _listItinerary$: Itinerary[] | Observable<Itinerary[]>;

    private _currentIndex: number = 0;

    constructor() {
        this._currentIndex = 0;
    }

    ngOnInit() {
    }

    get listItinerary$(): Itinerary[] | Observable<Itinerary[]> {
        return this._listItinerary$;
    }

    @Input()
    set listItinerary$(value: Itinerary[] | Observable<Itinerary[]>) {
        this._listItinerary$ = value;
    }

    get currentIndex(): number {
        return this._currentIndex;
    }

    set currentIndex(value: number) {
        this._currentIndex = value;
    }

    nextDay() {
        this._currentIndex++;
    }

    prevDay() {
        this._currentIndex--;
    }
}
