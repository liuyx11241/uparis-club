import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product.dto";
import {slideInDownAnimation} from "../app-animation";
import {EshopMediaService} from "./eshop-media.service";

@Component({
    selector: 'uparis-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.css'],
    animations: [slideInDownAnimation],
    providers: [EshopMediaService]
})
export class ProductViewComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;

    private _product$: Product;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ProductService,
                private _media$: EshopMediaService) {
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


    get media$(): EshopMediaService {
        return this._media$;
    }
}
