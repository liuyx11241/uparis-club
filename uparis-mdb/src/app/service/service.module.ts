import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "./product.service";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {ProductResolver} from "./product.resolver";
import {TripResolver} from "./trip.resolver";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientXsrfModule,
    ],
    declarations: [],
    providers: [
        ProductService,
        ProductResolver,
        TripResolver,
    ]
})
export class ServiceModule {
}
