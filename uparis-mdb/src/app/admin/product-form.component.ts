import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    _product: Product;
    _productForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private formBuilder: FormBuilder) {
        this._productForm = this.formBuilder.group({
            id: [''],
            name: ['', Validators.required],
            alias: ['',],
            shortDescription: ['', Validators.maxLength(128)],
            longDescription: ['', Validators.maxLength(512)],
            duration: ['', Validators.required],
        });
    }

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product = data.product;
        });
        this._productForm.setValue(this._product);
    }
}
