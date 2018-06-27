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
        return this.http.get<Product>(`/api/products/${id}`);
    }

    public saveProduct(value: Product): Observable<Product> {
        if (value === null) {
            return;
        }
        if (value.id) {
            console.info(`put${value.id}`);
            return this.http.put<Product>(`/api/products`, value, httpOptions);
        } else {
            console.info(`post${value.id}`);
            return this.http.post<Product>(`/api/products`, value, httpOptions);
        }
    }


    public getTrip(id: string): Observable<Trip> {
        return this.http.get<Trip>(`/api/trips/${id}`);
    }
}
