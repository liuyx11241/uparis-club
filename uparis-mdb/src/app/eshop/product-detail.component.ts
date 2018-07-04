import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/index";

@Component({
    selector: 'eshop/product-detail',
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    private _product$: Product | Observable<Product>;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product$ = data.product;
        });
    }

    get product(): Product | Observable<Product> {
        return this._product$;
    }

    @Input()
    set product(value: Product | Observable<Product>) {
        this._product$ = value;
    }
}
