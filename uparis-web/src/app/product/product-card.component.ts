import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";
import {Product} from "./product.dto";

@Component({
    selector: 'uparis-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    private product$: Product;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ProductService) {
    }

    ngOnInit() {
        let idParam = this.route.snapshot.paramMap.get('id');
        this.product$ = {
            id: idParam,
            name: idParam,
        }
    }
}
