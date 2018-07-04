import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard.component';
import {ProductTableComponent} from './product-table.component';
import {ProductFormComponent} from './product-form.component';
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScheduleTableComponent} from './schedule-table.component';
import {ItineraryTableComponent} from './itinerary-table.component';
import {TripTableComponent} from './trip-table.component';
import {TripFormComponent} from './trip-form.component';
import {OptionTableComponent} from './option-table.component';
import {StockTableComponent} from './stock-table.component';
import {MultimediaTableComponent} from './multimedia-table.component';
import {SnackBar} from "./snack-bar";
import {OrderTableComponent} from './order-table.component';
import {PersonTableComponent} from './person-table.component';
import {GenderPipe} from "./gender.pipe";
import { StatusPipe } from './status.pipe';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
        AdminComponent,
        DashboardComponent,
        ProductTableComponent,
        ProductFormComponent,
        ScheduleTableComponent,
        ItineraryTableComponent,
        TripTableComponent,
        TripFormComponent,
        OptionTableComponent,
        StockTableComponent,
        MultimediaTableComponent,
        OrderTableComponent,
        PersonTableComponent,

        GenderPipe,
        StatusPipe,
    ],
    providers: [
        SnackBar,
    ],
    bootstrap: [AdminComponent]
})
export class AdminModule {
}
