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
import {NumberPickerComponent} from './number-picker.component';
import {PersonFormComponent} from './person-form.component';
import {CheckoutComponent} from './checkout.component';

import {PersonCardComponent} from './person-card.component';
import {OrderDetailComponent} from './order-detail.component';
import {OptionListComponent} from './option-list.component';
import {ModelModule} from "../model/model.module";
import {PaymentFormComponent} from './payment-form.component';
import {TagListComponent} from './tag-list.component';
import {LeaderCardComponent} from './leader-card.component';
import {QuestionSelectorComponent} from './question-selector.component';
import {AnswerListComponent} from './answer-list.component';
import {OrderSearchFormComponent} from './order-search-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EshopRoutingModule,
        MaterialModule,
        ModelModule,
    ],
    providers: [],
    declarations: [
        CheckoutComponent,
        EshopComponent,
        ItineraryListComponent,
        OptionSelectorComponent,
        ProductListComponent,
        ProductDetailComponent,
        PersonFormComponent,
        PersonCardComponent,
        ShoppingCartComponent,
        NumberPickerComponent,
        OrderDetailComponent,
        OptionListComponent,
        PaymentFormComponent,
        TagListComponent,
        LeaderCardComponent,
        QuestionSelectorComponent,
        AnswerListComponent,
        OrderSearchFormComponent,
    ],
    bootstrap: [EshopComponent]
})
export class EshopModule {
}
