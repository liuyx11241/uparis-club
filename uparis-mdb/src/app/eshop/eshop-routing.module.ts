import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EshopComponent} from "./eshop.component";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductResolver} from "../service/product.resolver";
import {CheckoutComponent} from "./checkout.component";
import {TripResolver} from "../service/trip.resolver";
import {OrderDetailComponent} from "./order-detail.component";
import {OrderResolver} from "../service/order.resolver";
import {OrderSearchComponent} from "./order-search.component";

const routes: Routes = [
  {
    path: 'eshop', component: EshopComponent,
    children: [
        {path: '', component: ProductListComponent},
        {path: 'products', component: ProductListComponent},
        {path: 'products/:idProduct', component: ProductDetailComponent, resolve: {
            product: ProductResolver
        }},
        {path: 'checkout', component: CheckoutComponent,
            resolve: {trip: TripResolver}
        },
        {path: 'orders', component: OrderSearchComponent},
        {path: 'orders/:reference', component: OrderDetailComponent,
            resolve: {listOrder: OrderResolver}
        }
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EshopRoutingModule {
}
