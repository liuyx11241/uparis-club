import {Injectable} from '@angular/core';
import {Product} from "../model/product.dto";
import {Observable, of} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Trip} from "../model/trip.dto";
import {Order} from "../model/order.dto";

const httpOptions = {headers: new HttpHeaders({'ContentType': 'application/json'})}

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {

    }

    public saveProduct(value: Product): Observable<number> {
        if (value === null) {
            return;
        }
        if (value.id) {
            return this.http.put<number>(`/api/product`, value, httpOptions);
        } else {
            return this.http.post<number>(`/api/product`, value, httpOptions);
        }
    }

    public saveTrip(value: Trip): Observable<number> {
        if (value == null) {
            return;
        }

        if (value.id) {
            return this.http.put<number>(`/api/trip`, value, httpOptions);
        } else {
            return this.http.post<number>(`/api/trip`, value, httpOptions);
        }

    }

    public createOrders(value: Order[]): Observable<Order> {
        if (value == null && value.length == 0) {
            return;
        }
        return this.http.post<Order>(`/api/order`, value, httpOptions);
    }

    public updateOrders(value: Order[]): Observable<Order[]> {
        if (value == null && value.length == 0) {
            return of([]);
        }
        return this.http.put<Order[]>(`/api/order`, value, httpOptions);
    }
}
