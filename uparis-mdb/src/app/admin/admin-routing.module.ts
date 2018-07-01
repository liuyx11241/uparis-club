import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {DashboardComponent} from "./dashboard.component";
import {ProductTableComponent} from "./product-table.component";
import {ProductFormComponent} from "./product-form.component";
import {ProductResolver} from "../service/product.resolver";
import {TripFormComponent} from "./trip-form.component";
import {TripResolver} from "../service/trip.resolver";
import {TripTableComponent} from "./trip-table.component";

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'products', component: ProductTableComponent},
            {path: 'products/new', component: ProductFormComponent},
            {path: 'products/:idProduct', component: ProductFormComponent,
                resolve:{
                    product: ProductResolver
                }},
            {path: 'trips', component: TripTableComponent},
            {path: 'trips/new', component: TripFormComponent,
                resolve: {
                    product: ProductResolver
                }
            },
            {path: 'trips/:idTrip', component: TripFormComponent,
                resolve:{
                    trip:TripResolver
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
