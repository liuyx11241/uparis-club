import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EshopRoutingModule} from './eshop-routing.module';
import {EshopComponent} from './eshop.component';
import {AppMaterialModule} from "../app-material.module";
import {ProductListViewComponent} from "./product-list-view.component";
import {ProductViewComponent} from "./product-view.component";
import {ItineraryListViewComponent} from "./itinerary-list-view.component";
import {ProductViewResolver} from "./product-view-resolver.service";
import {ServiceModule} from "../service/service.module";

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        EshopRoutingModule,
        ServiceModule,
    ],
    providers: [ProductViewResolver],
    declarations: [EshopComponent, ProductListViewComponent, ProductViewComponent, ItineraryListViewComponent],
    exports: [EshopComponent],
    bootstrap: [EshopComponent]
})
export class EshopModule {
}
