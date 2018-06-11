import {Component, HostBinding, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product.dto";
import {slideInDownAnimation} from "../app-animation";

@Component({
    selector: 'uparis-product-card-list',
    templateUrl: './product-card-list.component.html',
    styleUrls: ['./product-card-list.component.css'],
    animations: [slideInDownAnimation]
})
export class ProductCardListComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    listProduct$: Product[];

    constructor(private service: ProductService) {
    }

    ngOnInit() {
        this.service.getAllProducts().subscribe(data => {
            this.listProduct$ = data;
        })
    }
}
