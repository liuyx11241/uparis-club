import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './routing.module';
import {MaterialModule} from './material.module';
import {ProductModule} from "./product/product.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,

        MaterialModule,

        // Business Modules
        ProductModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
