import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "./product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [ProductService]
})
export class ServiceModule {
}
