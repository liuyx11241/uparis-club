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
import {ShoppingCartComponent} from './shopping-cart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OptionSelectorComponent} from './option-selector.component';
import {TripSelectorComponent} from './trip-selector.component';
import {NumberPickerComponent} from './number-picker.component';
import {PersonFormComponent} from './person-form.component';
import {MatNativeDateModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EshopRoutingModule,
        MatNativeDateModule,
        MaterialModule,
        ServiceModule,
    ],
    providers: [ProductResolver],
    declarations: [
        EshopComponent,
        ProductListComponent,
        ProductDetailComponent,
        ItineraryListComponent,
        ShoppingCartComponent,
        OptionSelectorComponent,
        TripSelectorComponent,
        NumberPickerComponent,
        PersonFormComponent],
    bootstrap: [EshopComponent]
})
export class EshopModule {
}
