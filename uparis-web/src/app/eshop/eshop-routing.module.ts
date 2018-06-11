import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EshopComponent} from "./eshop.component";
import {ProductViewComponent} from "./product-view.component";
import {ProductListViewComponent} from "./product-list-view.component";
import {ProductViewResolver} from "./product-view-resolver.service";

const routes: Routes = [
    {
        path: 'eshop', component: EshopComponent,
        children: [
            {path: '', component: ProductListViewComponent},
            {path: 'products', component: ProductListViewComponent},
            {path: 'products/:id', component: ProductViewComponent,
                resolve: {
                    product: ProductViewResolver
                }
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EshopRoutingModule {
}
