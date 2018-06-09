import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";
import {Product} from "./product.dto";
import {slideInDownAnimation} from "../app-animation";

@Component({
    selector: 'uparis-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
    animations: [slideInDownAnimation]
})
export class ProductCardComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'uparis-product-card';

    @Input()
    private product$: Product;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ProductService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: Product) => {
            this.product$ = data;
        });
    }
}
