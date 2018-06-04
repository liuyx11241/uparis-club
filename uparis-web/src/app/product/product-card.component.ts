import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'uparis-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    private product;

    constructor() {
    }

    ngOnInit() {
    }

}
