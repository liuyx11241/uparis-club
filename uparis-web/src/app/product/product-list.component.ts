import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ProductService} from "./product.service";

@Component({
    selector: 'uparis-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    listProduct: Product[];

    constructor(private service: ProductService) {
    }

    ngOnInit() {
        this.service.getAllProducts().subscribe(
            data => {
                this.listProduct = data;
            }
        );
    }
}
