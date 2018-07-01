import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";
import {Trip} from "../model/trip.dto";
import {ErrorHandler} from "./error.handler";
import {catchError} from "rxjs/internal/operators";


@Injectable()
export class GetService {

    private handler: ErrorHandler = ErrorHandler.errorHandler;

    constructor(private http: HttpClient) {

    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("/api/product");
    }

    public getProducts(filter, pageIndex, pageSize, sort, direction): Observable<any> {
        let httpParams = new HttpParams()
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString())
            .set('direction', direction)
            .set('sort', sort)
            .set('filter', filter);
        return this.http.get(`/api/product`, {
            params: httpParams
        });
    };

    public getTrips(filter, pageIndex, pageSize, sort, direction): Observable<any> {
        let httpParams = new HttpParams()
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString())
            .set('direction', direction)
            .set('filter', filter)
            .set('sort', sort);
        return this.http.get(`/api/trip`, {
            params: httpParams
        });
    }


    public getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`/api/product/${id}`);
    }

    public getTrip(id: string): Observable<Trip> {
        return this.http.get<Trip>(`/api/trip/${id}`).pipe(
            catchError(this.handler.handleError)
        );
    }
}
