import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product.dto";
import {ActivatedRoute} from "@angular/router";
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styles: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}}]
})
export class ProductFormComponent implements OnInit {

    _product: Product;

    _productForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private formBuilder: FormBuilder) {
        this._productForm = this.formBuilder.group({
            id: [{value: '', disabled: true}],
            name: ['', Validators.required],
            alias: ['', Validators.maxLength(32)],
            shortDescription: ['', Validators.maxLength(128)],
            longDescription: ['', Validators.maxLength(512)],
            duration: ['', [Validators.required]],
        });
    }


    ngOnInit(): void {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product = data.product;
            this._productForm.setValue(this._product);
        });
    }
}
