import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EshopRoutingModule} from './eshop-routing.module';
import {EshopComponent} from './eshop.component';
import {MaterialModule} from "../material.module";
import {ProductListComponent} from './product-list.component';
import {ServiceModule} from "../service/service.module";
import {ProductDetailComponent} from './product-detail.component';
import {ItineraryListComponent} from './itinerary-list.component';
import {ProductResolver} from "./product-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        EshopRoutingModule,

        MaterialModule,
        ServiceModule,
    ],
    providers: [ProductResolver],
    declarations: [EshopComponent, ProductListComponent, ProductDetailComponent, ItineraryListComponent],
    bootstrap: [EshopComponent]
})
export class EshopModule {
}
