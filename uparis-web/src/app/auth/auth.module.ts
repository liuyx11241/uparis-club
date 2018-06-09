import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {AppMaterialModule} from "../app-material.module";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        RouterModule
    ],
    providers: [AuthGuard, AuthService],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    bootstrap: []
})
export class AuthModule {
}
