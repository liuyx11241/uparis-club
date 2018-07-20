import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {GetService} from "../service/http-get.service";
import {HttpResponsePage} from "../model/http-page.dto";

@Component({
    selector: 'uparis-product-list',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
    private _listProduct: Product[] = [];

    private _pageResponse: HttpResponsePage<Product>;

    constructor(private service: GetService) {
        this._pageResponse = Object.create({
            last: false,
            pageable: {
                pageNumber: -1,
                pageSize: 9,
            },
        });
    }

    ngOnInit() {
        this.more();
    }

    trackByProducts(index: number, product: Product): number {
        return product.id;
    };

    more() {
        if (this._pageResponse && !this._pageResponse.last) {
            let pageable = this._pageResponse.pageable;
            this.service.getProducts({'status': 'ACTIVE'}, pageable.pageNumber + 1, pageable.pageSize, 'id', 'desc')
                .subscribe((res: any) => {
                    this._listProduct = [...this._listProduct].concat(res['content']);
                    this._pageResponse = res;
                    console.info(res);
                });
        }
    }
}