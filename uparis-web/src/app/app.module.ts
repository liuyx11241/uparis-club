import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ProductModule} from "./product/product.module";

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product/product-list.component";

const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'product', component: ProductListComponent},
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, {useHash: true});


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        APP_ROUTES,
        BrowserModule,
        ProductModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
