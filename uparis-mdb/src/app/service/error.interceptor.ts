import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from "./auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.auth.logout();
                location.reload(true);
            }

            if (err.error instanceof ErrorEvent) {
                console.error(err.error.message);
            } else {
                console.error(`Code : ${err.status}, Body : `);
                console.error(err.error);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}