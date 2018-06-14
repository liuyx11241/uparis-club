import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ProductService} from "../service/product.service";

@Component({
    selector: 'uparis-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    private _listProduct$: Product[];

    constructor(private service: ProductService) {
    }

    ngOnInit() {
        this.service.getAllProducts().subscribe(data => {
            this._listProduct$ = data;
        });
    }

    @Input()
    set listProduct$(value: Product[]) {
        this._listProduct$ = value;
    }

    get listProduct$(): Product[] {
        return this._listProduct$;
    }

    trackByProducts(index: number, product: Product): string {
        return product.id;
    };
}
