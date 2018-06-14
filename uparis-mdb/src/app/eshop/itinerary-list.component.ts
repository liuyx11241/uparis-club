import {Component, Input, OnInit} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";
import {Observable} from "rxjs/index";

@Component({
    selector: 'uparis-itinerary-list',
    templateUrl: './itinerary-list.component.html',
    styleUrls: ['./itinerary-list.component.scss']
})
export class ItineraryListComponent implements OnInit {

    private _currentIndex: number = 0;

    private _listItinerary: Itinerary[] | Observable<Itinerary[]>;

    constructor() {
        this._currentIndex = 0;
    }

    ngOnInit() {
    }

    get listItinerary(): Itinerary[] | Observable<Itinerary[]> {
        return this._listItinerary;
    }

    @Input()
    set listItinerary(value: Itinerary[] | Observable<Itinerary[]>) {
        this._listItinerary = value;
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
