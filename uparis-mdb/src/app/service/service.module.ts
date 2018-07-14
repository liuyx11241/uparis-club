import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetService} from "./http-get.service";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {ProductResolver} from "./product.resolver";
import {TripResolver} from "./trip.resolver";
import {PostService} from "./http-post.service";
import {DeleteService} from "./http-delete.service";
import {OrderResolver} from "./order.resolver";
import {PersonResolver} from "./person.resolver";
import {AuthService} from "./auth.service";
import {ErrorInterceptor} from "./error.interceptor";
import {JwtInterceptor} from "./jwt.interceptor";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientXsrfModule,
    ],
    declarations: [],
    providers: [
        GetService,
        PostService,
        DeleteService,
        AuthService,

        ProductResolver,
        TripResolver,
        OrderResolver,
        PersonResolver,

        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ]
})
export class ServiceModule {
}
