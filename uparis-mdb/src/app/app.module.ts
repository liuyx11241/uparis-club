import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EshopModule} from './eshop/eshop.module';
import {RouterModule} from "@angular/router";
import {AdminModule} from './admin/admin.module';
import {ServiceModule} from "./service/service.module";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material";
import {MatMomentDateModule, MomentDateAdapter} from "@angular/material-moment-adapter";

import {registerLocaleData} from "@angular/common";
import localeZh from '@angular/common/locales/zh';
import {AdminLoginComponent} from "./admin/admin-login.component";

registerLocaleData(localeZh);

export const UPARIS_DATE_FORMATS = {
    parse: {
        dateInput: 'L',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMomentDateModule,

        ServiceModule,
        //custom module
        AdminModule,
        EshopModule,

        RouterModule.forRoot([
                {path: 'admin/login', component: AdminLoginComponent},
                {path: '', redirectTo: '/eshop', pathMatch: 'full'},
                {path: '**', redirectTo: '/eshop'},
            ],
            {useHash: false, enableTracing: false,}),

    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'zh-cn'},
        {provide: MAT_DATE_LOCALE, useValue: 'zh-cn'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: UPARIS_DATE_FORMATS},

    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
