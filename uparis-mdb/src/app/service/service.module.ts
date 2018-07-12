import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetService} from "./http-get.service";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {ProductResolver} from "./product.resolver";
import {TripResolver} from "./trip.resolver";
import {PostService} from "./http-post.service";
import {DeleteService} from "./http-delete.service";
import {OrderResolver} from "./order.resolver";
import {PersonResolver} from "./person.resolver";

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
        ProductResolver,
        TripResolver,
        OrderResolver,
        PersonResolver,
    ]
})
export class ServiceModule {
}
