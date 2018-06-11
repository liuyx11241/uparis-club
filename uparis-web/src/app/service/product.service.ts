import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";

const httpOptions = {headers: new HttpHeaders({'ContentType': 'application/json'})}

@Injectable()
export class ProductService {

    private url = "/api/products";

    constructor(private http: HttpClient) {

    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url);
    }

    public getProduct(id: string) {
        return this.http.get<Product>(this.url + "/" + id);
    }
}
