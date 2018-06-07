import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductCardComponent} from './product-card.component';
import {ProductService} from "./product.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductCardListComponent} from './product-card-list.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [ProductService],
    declarations: [ProductCardComponent, ProductCardListComponent],
    exports: [ProductCardComponent, ProductCardListComponent],
    bootstrap: [ProductCardListComponent]
})
export class ProductModule {
}
