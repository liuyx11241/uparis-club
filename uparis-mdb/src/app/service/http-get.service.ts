import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";
import {Trip} from "../model/trip.dto";
import {ErrorHandler} from "./error.handler";
import {catchError, map} from "rxjs/internal/operators";
import {Person} from "../model/person.dto";
import {Order} from "../model/order.dto";


@Injectable()
export class GetService {

    private handler: ErrorHandler = ErrorHandler.errorHandler;

    constructor(private http: HttpClient) {

    }

    private appendHttpParams(httpParams: HttpParams, filter: { [key: string]: any }): HttpParams {
        Object.keys(filter).map(key => {
            httpParams = httpParams.append(key, filter[key]);
        });
        return httpParams;
    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("/api/product").pipe(
            map(value => value['content'])
        );
    }

    public getProducts(filter: { [key: string]: any }, pageIndex, pageSize, sort, direction): Observable<Product[]> {
        let httpParams = this.appendHttpParams(new HttpParams()
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString())
            .set('direction', direction)
            .set('sort', sort), filter);
        return this.http.get<Product[]>(`/api/product`, {
            params: httpParams
        });
    };

    public getTrips(filter: { [key: string]: any }, pageIndex, pageSize, sort, direction): Observable<Trip[]> {
        let httpParams = this.appendHttpParams(new HttpParams()
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString())
            .set('direction', direction)
            .set('sort', sort), filter);
        return this.http.get<Trip[]>(`/api/trip`, {
            params: httpParams
        });
    }

    public getPersons(filter: { [key: string]: any }, pageIndex, pageSize, sort, direction): Observable<Person[]> {
        let httpParams = this.appendHttpParams(new HttpParams()
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString())
            .set('direction', direction)
            .set('sort', sort), filter);
        return this.http.get<Person[]>(`/api/person`, {
            params: httpParams
        });
    }

    public getOrders(filter: { [key: string]: any }, pageIndex, pageSize, sort, direction): Observable<Order[]> {
        let httpParams = this.appendHttpParams(new HttpParams()
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString())
            .set('direction', direction)
            .set('sort', sort), filter);
        return this.http.get<Order[]>(`/api/order`, {
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

    public getOrder(reference: string): Observable<Order[]> {
        return this.http.get<Order[]>(`/api/order/${reference}`).pipe(
            catchError(this.handler.handleError)
        );
    }
}
