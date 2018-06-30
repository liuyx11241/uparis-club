import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material";
import {NgForm} from "@angular/forms";
import {FormHelper} from "./form-helper";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styles: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}}]
})
export class ProductFormComponent implements OnInit {

    @ViewChild('productForm') productForm: NgForm;

    _product: Product;

    _formHelper: FormHelper;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private snackBar: SnackBar,
                private service: PostService) {
        this._formHelper = new FormHelper();
    }


    ngOnInit(): void {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product = data.product;
        });

        if (!this._product) {
            this.add();
        }
        this._formHelper.register('product', this.productForm);
    }

    add(): void {
        this._formHelper.disabled = false;
        this._product = new Product();
    }

    save() {
        this._formHelper.submit();
        if (this._formHelper.isValid) {
            this.service.saveProduct(this._product).subscribe((id: number) => {
                this._formHelper.disabled = true;
                this.snackBar.openSuccessfulSave();
                this.router.navigate(['/admin/products', id]);
            });
        }
    }

    delete(form: NgForm) {
        if (this._product) {
        }
    }
}
