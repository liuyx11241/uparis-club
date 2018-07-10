import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {User} from "../model/user";
import {tap} from "rxjs/internal/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authenticated = false;

    redirectUrl: string;

    constructor(private http: HttpClient) {
    }

    authenticate(credentials?: any): Observable<User> {
        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        return of(new User()).pipe(
            tap(user => {
                this.authenticated = !!user;
            })
        );
    }
}