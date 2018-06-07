import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product/product-list.component";

const ROUTES: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'product', component: ProductListComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES, {useHash: false})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
