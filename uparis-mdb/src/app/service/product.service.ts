import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";
import {Trip} from "../model/trip.dto";
import {ErrorHandler} from "./error.handler";
import {catchError} from "rxjs/internal/operators";

const httpOptions = {headers: new HttpHeaders({'ContentType': 'application/json'})}

@Injectable()
export class ProductService {

    private handler: ErrorHandler = new ErrorHandler();

    constructor(private http: HttpClient) {

    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("/api/products");
    }

    public getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`/api/products/${id}`);
    }

    public saveProduct(value: Product): Observable<number> {
        if (value === null) {
            return;
        }
        if (value.id) {
            console.info(`put${value.id}`);
            return this.http.put<number>(`/api/products`, value, httpOptions).pipe(
                catchError(this.handler.handleError)
            );
        } else {
            console.info(`post${value.id}`);
            return this.http.post<number>(`/api/products`, value, httpOptions).pipe(
                catchError(this.handler.handleError)
            );
        }
    }


    public getTrip(id: string): Observable<Trip> {
        return this.http.get<Trip>(`/api/trips/${id}`).pipe(
            catchError(this.handler.handleError)
        );
    }
}
