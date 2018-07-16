import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Schedule} from "../model/schedule.dto";
import {Observable, of} from "rxjs/index";
import {Itinerary} from "../model/itinerary.dto";

@Injectable()
export class DeleteService {

    constructor(private http: HttpClient) {
    }

    public deleteSchedule(schedule: Schedule): Observable<number> {
        if (!schedule.id) {
            return of(-1);
        }

        return this.http.delete<number>(`/api/schedule/${schedule.id}`);
    }

    public deleteItinerary(itinerary: Itinerary): Observable<number> {
        if (!itinerary.id) {
            return of(-1);
        }

        return this.http.delete<number>(`/api/itinerary/${itinerary.id}`);
    }
}
