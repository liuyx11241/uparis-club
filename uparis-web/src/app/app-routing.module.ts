import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./error/page-not-found.component";

const ROUTES: Routes = [
    {path: '', redirectTo: '/eshop', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
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
