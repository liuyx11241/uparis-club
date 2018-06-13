import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EshopRoutingModule} from './eshop-routing.module';
import {EshopComponent} from './eshop.component';
import {AppMaterialModule} from "../app-material.module";
import {ProductListViewComponent} from "./product-list-view.component";
import {ProductViewComponent} from "./product-view.component";
import {ItineraryListViewComponent} from "./itinerary-list.component";
import {ProductViewResolver} from "./product-view-resolver.service";
import {ServiceModule} from "../service/service.module";
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        EshopRoutingModule,
        ServiceModule,
    ],
    providers: [ProductViewResolver],
    declarations: [EshopComponent, ProductListViewComponent, ProductViewComponent, ItineraryListViewComponent, ShoppingCartComponent],
    exports: [EshopComponent],
    bootstrap: [EshopComponent]
})
export class EshopModule {
}
