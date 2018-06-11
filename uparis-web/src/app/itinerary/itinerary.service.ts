import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {Itinerary} from "./itinerary.dto";

const mock_itinerary = [
    {
        id: '1',
        dayStart: 1,
        dayEnd: 1,
        movement: 'Paris - Madrid',
        description: "DAY 1",
        idProduct: '',
        idTrip: '',
    },
    {
        id: '2',
        dayStart: 2,
        dayEnd: 3,
        movement: 'Madrid',
        description: "DAY 2-3",
        idProduct: '',
        idTrip: '',
    },
    {
        id: '3',
        dayStart: 4,
        dayEnd: 4,
        movement: 'Madrid Paris',
        description: "DAY 4",
        idProduct: '',
        idTrip: '',
    },
]

@Injectable()
export class ItineraryService {

    constructor() {
    }

    public getListItinerary(idProduct: string): Observable<Itinerary[]> | Itinerary[] {
        return mock_itinerary
    }
}
