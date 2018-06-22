import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "./product.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductResolver} from "./product.resolver";
import {TripResolver} from "./trip-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
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
