import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
    selector: 'uparis-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    private product: Product;

    constructor() {
    }

    ngOnInit() {
    }

}
