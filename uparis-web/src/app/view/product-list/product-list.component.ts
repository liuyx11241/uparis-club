import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from "../../model/product.model";

@Component({
    selector: 'uparis-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    private products: Product[];

    constructor(private router: Router, private service: ProductService) {
    }

    ngOnInit() {
        this.service.getAllProducts().subscribe(
            data => {
                this.products = data;
            }
        );
    }
}
