import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductFormHelper} from "./product-form.helper";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styles: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}}]
})
export class ProductFormComponent implements OnInit {

    _formHelper: ProductFormHelper;

    _productForm: FormGroup;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private snackBar: SnackBar,
                private service: PostService) {
        this._formHelper = new ProductFormHelper(fb);
    }


    ngOnInit(): void {
        this.route.data.subscribe((data: { product: Product }) => {
            this._productForm = this._formHelper.newProductForm(data.product);
            this._formHelper.disabled = !!data.product;
        });
    }

    add(): void {
        this._formHelper.disabled = false;
    }

    save() {
        if (this._formHelper.isValid()) {
            this.service.saveProduct(this._productForm.value).subscribe((id: number) => {
                this._formHelper.disabled = true;
                this.snackBar.openSuccessfulSave();
                this.router.navigate(['/admin/products', id]);
            });
        }
    }

    delete() {

    }

    createTrip() {
        this.router.navigate(['/admin/trips/new'], {
            queryParams: {
                idProduct: this._productForm.value.id
            }
        });
    }
}
