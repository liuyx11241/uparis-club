import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EshopComponent} from "./eshop.component";
import {ProductCardComponent} from "../product/product-card.component";
import {ProductCardListComponent} from "../product/product-card-list.component";

const routes: Routes = [
    {path: 'eshop', component: EshopComponent},
    {path: 'eshop/product', component: ProductCardListComponent},
    {path: 'eshop/product/:id', component: ProductCardComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EshopRoutingModule {
}
