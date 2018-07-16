import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {OAUTH2_ACCESS_TOKEN, OAUTH2_TOKEN_PASSWORD, OAUTH2_TOKEN_USERNAME} from "./service.constants";
import {JwtHelperService} from "@auth0/angular-jwt";
import {tap} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";

@Injectable()
export class AuthService {
    redirectUrl = '/admin';

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {

    }

    get authenticated(): boolean {
        return localStorage.getItem(OAUTH2_ACCESS_TOKEN)
            && !this.jwtHelper.isTokenExpired(localStorage.getItem(OAUTH2_ACCESS_TOKEN));
    }

    login(username: string, password: string): Observable<any> {
        const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

        const headers = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa(OAUTH2_TOKEN_USERNAME + ':' + OAUTH2_TOKEN_PASSWORD));

        return this.http.post<any>('http://localhost:8080/oauth/token', body, {headers: headers})
            .pipe(
                // map(res => res.json()),
                tap(res => console.info(res)),
                map((res: any) => {
                    console.info(res[OAUTH2_ACCESS_TOKEN]);
                    if (res[OAUTH2_ACCESS_TOKEN]) {
                        this._login(res[OAUTH2_ACCESS_TOKEN]);
                        return res[OAUTH2_ACCESS_TOKEN];
                    }
                    return null;
                })
            );
    }


    private _login(accessToken: string) {
        const decodedToken = this.jwtHelper.decodeToken(accessToken);
        console.log(decodedToken);
        localStorage.setItem(OAUTH2_ACCESS_TOKEN, accessToken);
    }

    logout() {
        localStorage.removeItem(OAUTH2_ACCESS_TOKEN);
    }
}