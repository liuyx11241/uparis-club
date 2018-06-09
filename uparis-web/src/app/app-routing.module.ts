import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./error/page-not-found.component";
import {AdminModule} from "./admin/admin.module";
import {LoginComponent} from "./auth/login.component";

const ROUTES: Routes = [
    {path: '', redirectTo: '/eshop', pathMatch: 'full'},
    {path: 'admin', component: AdminModule},
    {path: 'login', component: LoginComponent},
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
