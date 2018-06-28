import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material";
import {ProductService} from "../service/product.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styles: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}}]
})
export class ProductFormComponent implements OnInit {

    _product: Product;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: ProductService) {
    }


    ngOnInit(): void {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product = data.product;
        });

        if (!this._product) {
            this.add();
        }
    }

    add(): void {
        this._product = new Product();
    }

    save(form: NgForm) {
        console.log(form.valid);
        console.log(form.dirty);
        console.log(this._product);
        if (form.valid && form.dirty && this._product) {
            this.service.saveProduct(this._product).subscribe((id: number) => {
                this.router.navigate(['/admin/products', id]);
            });
        }
    }

    delete(form: NgForm) {
        if (this._product) {
        }
    }
}
