import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute} from "@angular/router";
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styles: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}}]
})
export class ProductFormComponent implements OnInit {

    _product: Product;

    constructor(private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product = data.product;
        });
    }
}
