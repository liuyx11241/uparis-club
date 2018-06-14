import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EshopComponent} from "./eshop.component";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductResolver} from "./product-resolver.service";

const routes: Routes = [
  {
    path: 'eshop', component: EshopComponent,
    children: [
        {path: '', component: ProductListComponent},
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', component: ProductDetailComponent, resolve: {
            product: ProductResolver
        }},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EshopRoutingModule {
}