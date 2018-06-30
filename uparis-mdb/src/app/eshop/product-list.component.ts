import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {HttpService} from "../service/product.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
    selector: 'uparis-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    private _listProduct$: Product[];

    constructor(private service: HttpService, private router: Router) {
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

    trackByProducts(index: number, product: Product): number {
        return product.id;
    };

    gotoDetail(idProduct: string) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'id': idProduct
            }
        };

        this.router.navigate(['/eshop/products'], navigationExtras);
    }
}
