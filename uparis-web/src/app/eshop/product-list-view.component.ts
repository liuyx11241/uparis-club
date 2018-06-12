import {Component, HostBinding, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product.dto";
import {slideInDownAnimation} from "../app-animation";

@Component({
    selector: 'uparis-product-list-view',
    templateUrl: './product-list-view.component.html',
    styleUrls: ['./product-list-view.component.css'],
    animations: [slideInDownAnimation]
})
export class ProductListViewComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    listProduct$: Product[];

    constructor(private service: ProductService) {
    }

    ngOnInit() {
        this.service.getAllProducts().subscribe(data => {
            this.listProduct$ = data;
        })
    }

    trackByProducts(index: number, product: Product): string {
        return product.id;
    };
}
