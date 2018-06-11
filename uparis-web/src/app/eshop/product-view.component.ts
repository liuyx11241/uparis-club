import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product.dto";
import {slideInDownAnimation} from "../app-animation";

@Component({
    selector: 'uparis-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.css'],
    animations: [slideInDownAnimation]
})
export class ProductViewComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'uparis-product-view';

    private _product$: Product;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ProductService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product$ = data.product;
        });
    }


    get product$(): Product {
        return this._product$;
    }

    @Input()
    set product$(value: Product) {
        this._product$ = value;
    }
}
