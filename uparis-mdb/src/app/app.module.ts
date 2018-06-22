import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EshopModule} from './eshop/eshop.module';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        //custom module
        EshopModule,

        RouterModule.forRoot([
                {path: '', redirectTo: '/eshop', pathMatch: 'full'},
                {path: '**', redirectTo: '/eshop'},
            ],
            {useHash: false, enableTracing: false,}),
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
