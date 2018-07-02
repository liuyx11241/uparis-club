import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EshopRoutingModule} from './eshop-routing.module';
import {EshopComponent} from './eshop.component';
import {MaterialModule} from "../material.module";
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ItineraryListComponent} from './itinerary-list.component';
import {ShoppingCartComponent} from './shopping-cart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OptionSelectorComponent} from './option-selector.component';
import {TripSelectorComponent} from './trip-selector.component';
import {NumberPickerComponent} from './number-picker.component';
import {PersonFormComponent} from './person-form.component';
import {CheckoutStepperComponent} from './checkout-stepper.component';

import {PersonCardComponent} from './person-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EshopRoutingModule,
        MaterialModule,
    ],
    providers: [],
    declarations: [
        CheckoutStepperComponent,
        EshopComponent,
        ItineraryListComponent,
        OptionSelectorComponent,
        ProductListComponent,
        ProductDetailComponent,
        PersonFormComponent,
        PersonCardComponent,
        ShoppingCartComponent,
        TripSelectorComponent,
        NumberPickerComponent,
    ],
    bootstrap: [EshopComponent]
})
export class EshopModule {
}
