import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "./product.model";

const httpOptions = {headers: new HttpHeaders({'ContentType': 'application/json'})}

@Injectable()
export class ProductService {

    private url = "/api/product";

    constructor(private http: HttpClient) {

    }

    public getAllProducts() {
        return this.http.get<Product[]>(this.url);
    }
}
