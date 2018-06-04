import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./view/product-list/product-list.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, ProductListComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
