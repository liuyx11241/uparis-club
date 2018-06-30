import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Schedule} from "../model/schedule.dto";
import {ErrorHandler} from "./error.handler";
import {Observable, of} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";
import {Itinerary} from "../model/itinerary.dto";

@Injectable()
export class DeleteService {

    private handler: ErrorHandler = ErrorHandler.errorHandler;

    constructor(private http: HttpClient) {
    }

    public deleteSchedule(schedule: Schedule): Observable<number> {
        if (!schedule.id) {
            return of(-1);
        }

        return this.http.delete<number>(`/api/schedule/${schedule.id}`).pipe(
            catchError(this.handler.handleError)
        );
    }

    public deleteItinerary(itinerary: Itinerary): Observable<number> {
        if (!itinerary.id) {
            return of(-1);
        }

        return this.http.delete<number>(`/api/itinerary/${itinerary.id}`).pipe(
            catchError(this.handler.handleError)
        );
    }
}
