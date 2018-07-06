import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'eshop/product-detail',
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    private _product: Product;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product = data.product;
        });
    }

    @Input()
    set product(value: Product) {
        this._product = value;
    }
}
