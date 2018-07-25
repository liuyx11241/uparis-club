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
import {OrderTableComponent} from "./order-table.component";
import {PersonTableComponent} from "./person-table.component";
import {AuthGuard} from "../service/auth.guard";
import {PersonFormComponent} from "./person-form.component";
import {PersonResolver} from "../service/person.resolver";

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children:[
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
                    {path: 'orders', component: OrderTableComponent},
                    {path: 'persons', component: PersonTableComponent},
                    {path: 'persons/new', component: PersonFormComponent},
                    {path: 'persons/:idPerson', component: PersonFormComponent,
                        resolve: {
                            person: PersonResolver
                        }
                    },
                    {path: '', component: DashboardComponent}
                ]
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
