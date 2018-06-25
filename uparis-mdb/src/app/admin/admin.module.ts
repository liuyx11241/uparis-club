import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard.component';
import {ProductTableComponent} from './product-table.component';
import {ProductFormComponent} from './product-form.component';
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScheduleFormComponent} from './schedule-form.component';
import {ItineraryTableComponent} from './itinerary-table.component';
import {ItineraryFormComponent} from './itinerary-form.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AdminComponent,
        DashboardComponent,
        ProductTableComponent,
        ProductFormComponent,
        ScheduleFormComponent,
        ItineraryTableComponent,
        ItineraryFormComponent,
    ],
    bootstrap: [AdminComponent]
})
export class AdminModule {
}
