import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";
import {Trip} from "../model/trip.dto";

const httpOptions = {headers: new HttpHeaders({'ContentType': 'application/json'})}

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {

    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("/api/products");
    }

    public getProduct(id: string): Observable<Product> {
        return this.http.get<Product>("/api/products/" + id);
    }

    public getTrip(id: string): Observable<Trip> {
        return this.http.get<Trip>("/api/trips/" + id);
    }
}
