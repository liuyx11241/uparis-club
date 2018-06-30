import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetService} from "./http-get.service";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {ProductResolver} from "./product.resolver";
import {TripResolver} from "./trip.resolver";
import {PostService} from "./http-post.service";
import {DeleteService} from "./http-delete.service";

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
    ]
})
export class ServiceModule {
}
