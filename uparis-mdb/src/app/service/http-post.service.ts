import {Injectable} from '@angular/core';
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorHandler} from "./error.handler";

const httpOptions = {headers: new HttpHeaders({'ContentType': 'application/json'})}

@Injectable()
export class PostService {

    private handler: ErrorHandler = ErrorHandler.errorHandler;

    constructor(private http: HttpClient) {

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
}
