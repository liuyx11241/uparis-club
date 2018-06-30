import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";
import {Trip} from "../model/trip.dto";
import {ErrorHandler} from "./error.handler";
import {catchError} from "rxjs/internal/operators";

const httpOptions = {headers: new HttpHeaders({'ContentType': 'application/json'})}

@Injectable()
export class HttpService {

    private handler: ErrorHandler = new ErrorHandler();

    constructor(private http: HttpClient) {

    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("/api/product");
    }

    public getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`/api/product/${id}`);
    }

    public saveProduct(value: Product): Observable<number> {
        if (value === null) {
            return;
        }
        if (value.id) {
            return this.http.put<number>(`/api/product`, value, httpOptions).pipe(
                catchError(this.handler.handleError)
            );
        } else {
            return this.http.post<number>(`/api/product`, value, httpOptions).pipe(
                catchError(this.handler.handleError)
            );
        }
    }


    public getTrip(id: string): Observable<Trip> {
        return this.http.get<Trip>(`/api/trip/${id}`).pipe(
            catchError(this.handler.handleError)
        );
    }
}
