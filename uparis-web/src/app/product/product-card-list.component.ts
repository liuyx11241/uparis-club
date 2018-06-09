import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product.dto";

@Component({
    selector: 'uparis-product-card-list',
    templateUrl: './product-card-list.component.html',
    styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {

    listProduct$: Product[];

    constructor(private service: ProductService) {
    }

    ngOnInit() {
        this.service.getAllProducts().subscribe(data => {
            this.listProduct$ = data;
        })
    }
}
