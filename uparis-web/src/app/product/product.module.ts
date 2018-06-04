import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './product-list.component';
import {ProductCardComponent} from './product-card.component';
import {ProductService} from "./product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        HttpClientModule
    ],
    providers: [ProductService],
    declarations: [ProductListComponent, ProductCardComponent],
    exports: [ProductListComponent, ProductCardComponent],
    bootstrap: [ProductListComponent]
})

export class ProductModule {
}
