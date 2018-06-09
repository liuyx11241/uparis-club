import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {AppMaterialModule} from "../app-material.module";
import {RouterModule} from "@angular/router";
import {AuthModule} from "../auth/auth.module";
import { AdminDashboardComponent } from './admin-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        RouterModule,
        AdminRoutingModule,
        AuthModule
    ],
    declarations: [AdminComponent, AdminDashboardComponent],
    exports: [AdminComponent, AdminDashboardComponent]
})
export class AdminModule {
}
