import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EshopRoutingModule} from './eshop-routing.module';
import {EshopComponent} from './eshop.component';
import {ProductModule} from "../product/product.module";
import {AppMaterialModule} from "../app-material.module";

@NgModule({
    imports: [
        AppMaterialModule,
        CommonModule,
        EshopRoutingModule,
        ProductModule
    ],
    declarations: [EshopComponent],
    exports: [EshopComponent],
    bootstrap: [EshopComponent]
})
export class EshopModule {
}
