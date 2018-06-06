import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
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

        // Material Modules
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,

        // Business Modules
        ProductModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
