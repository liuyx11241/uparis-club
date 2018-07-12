import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authenticated = false;

    redirectUrl: string;

    constructor(private http: HttpClient) {
    }

    authenticate(credentials?: any, successHandler?: (url: string) => void, errorHandler?: (error: any) => void): void {
        let httpParams = new HttpParams()
            .set('username', credentials['username'])
            .set('password', credentials['password']);
        this.http.post(`/api/auth/login`, httpParams).subscribe(value => {
            this.authenticated = true;
            successHandler && successHandler(this.redirectUrl);
        }, error => {
            console.error(error);
            errorHandler && errorHandler(error);
        });
    }

    unauthenticate(successHandler?: () => void, errorHandler?: (error: any) => void): void {
        this.http.post(`/api/auth/logout`, {}).subscribe(value => {
            successHandler && successHandler();
        }, error => {
            console.error(error);
            errorHandler && errorHandler(error);
        }, () => {
            this.authenticated = false;
        })
    }
}