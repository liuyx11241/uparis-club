import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'uparis-product-card-list',
    templateUrl: './product-card-list.component.html',
    styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {

    productList$: [
        {
            id: 'id1'
            name: 'name1'
        },
        {
            id: 'id2',
            name: 'name2'
        }
        ]

    constructor() {
    }

    ngOnInit() {
    }

}
