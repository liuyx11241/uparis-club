import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EshopModule} from './eshop/eshop.module';
import {RouterModule} from "@angular/router";
import {AdminModule} from './admin/admin.module';
import {ServiceModule} from "./service/service.module";
import {MAT_DATE_LOCALE} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        ServiceModule,
        //custom module
        AdminModule,
        EshopModule,

        RouterModule.forRoot([
                {path: '', redirectTo: '/eshop', pathMatch: 'full'},
                {path: '**', redirectTo: '/eshop'},
            ],
            {useHash: false, enableTracing: false,}),

    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'zh-cn'},
        {provide: MAT_DATE_LOCALE, useValue: 'zh-cn'},
    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
