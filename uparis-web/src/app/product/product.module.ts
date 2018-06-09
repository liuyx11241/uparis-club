import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductCardComponent} from './product-card.component';
import {ProductService} from "./product.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductCardListComponent} from './product-card-list.component';
import {AppMaterialModule} from "../app-material.module";
import {RouterModule} from "@angular/router";
import {ProductCardResolver} from "./product-card-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AppMaterialModule,
        RouterModule
    ],
    providers: [ProductService, ProductCardResolver],
    declarations: [ProductCardComponent, ProductCardListComponent],
    exports: [ProductCardComponent, ProductCardListComponent],
    bootstrap: [ProductCardListComponent]
})
export class ProductModule {
}
