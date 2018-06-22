import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {DashboardComponent} from "./dashboard.component";
import {ProductTableComponent} from "./product-table.component";
import {ProductFormComponent} from "./product-form.component";
import {ProductResolver} from "../service/product-resolver.service";

const routes: Routes = [
    {path: 'admin', component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'products', component: ProductTableComponent},
            {path: 'products/:id', component: ProductFormComponent,
                resolve: {
                    product: ProductResolver
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
