import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EshopComponent} from "./eshop.component";
import {ProductCardComponent} from "../product/product-card.component";
import {ProductCardListComponent} from "../product/product-card-list.component";
import {ProductCardResolver} from "../product/product-card-resolver.service";

const routes: Routes = [
    {
        path: 'eshop', component: EshopComponent,
        children: [
            {path: 'products', component: ProductCardListComponent},
            {path: 'products/:id', component: ProductCardComponent,
                resolve:{
                    product:ProductCardResolver
                }},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EshopRoutingModule {
}
