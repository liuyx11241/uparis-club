import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs/index";

export class ErrorHandler {
    public static errorHandler = new ErrorHandler();

    constructor() {
    }

    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error(error.error.message);
        } else {
            console.error(`Code : ${error.status}, Body : ${error.error}`);
        }
        return throwError("Please Try again later.");
    }
}
