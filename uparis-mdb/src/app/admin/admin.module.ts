import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard.component';
import {ProductTableComponent} from './product-table.component';
import {ProductFormComponent} from './product-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,

        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [AdminComponent, DashboardComponent, ProductTableComponent, ProductFormComponent],
    exports: [],
    bootstrap: [AdminComponent]
})
export class AdminModule {
}
