import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_LABEL_GLOBAL_OPTIONS, MatAutocompleteSelectedEvent, MatChipInputEvent} from "@angular/material";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductFormHelper} from "./product-form.helper";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Tag} from "../model/tag.dto";
import {GetService} from "../service/http-get.service";
import {Observable} from "rxjs/index";
import {map, startWith} from "rxjs/internal/operators";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styles: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}}]
})
export class ProductFormComponent implements OnInit {

    private _formHelper: ProductFormHelper;

    private _productForm: FormGroup;

    private _idProduct: number;

    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    private _listTagForm: FormArray;

    private _listAllTags: Tag[] = [];

    private _filteredTags$: Observable<Tag[]>;

    private _inputTagForm: FormControl;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private snackBar: SnackBar,
                private service: PostService,
                private getService: GetService) {
        this._formHelper = new ProductFormHelper(fb);
    }

    ngOnInit(): void {
        this.route.data.subscribe((data: { product: Product }) => {
            this._productForm = this._formHelper.newProductForm(data.product);
            this._listTagForm = this._formHelper.listTagForm;
            this._inputTagForm = this._formHelper.inputTagForm;
            this._formHelper.disabled = !!data.product;
        });
        this._filteredTags$ = this._formHelper.inputTagForm.valueChanges.pipe(
            startWith(null),
            map((tag: Tag | null) => tag ? this._filter(tag) : this._listAllTags.slice()));
        this.getService.getAllTags().subscribe(data => this._listAllTags = data);
    }

    save() {
        console.info(this._productForm);
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

    addTrip() {
        this.router.navigate(['/admin/trips/new'], {
            queryParams: {
                idProduct: this._productForm.value.id
            }
        });
    }

    addTag(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            let tag = new Tag();
            tag.value = value.trim();
            this._pushTag(tag);
        }

        if (input) {
            input.value = '';
        }
    }

    removeTag(tagForm: FormGroup): void {
        const index = this._listTagForm.controls.indexOf(tagForm);

        if (index >= 0) {
            this._listTagForm.removeAt(index);
        }
    }

    selectTag(event: MatAutocompleteSelectedEvent) {
        this._pushTag(event.option.value);
        this._inputTagForm.setValue(null);
    }

    private _filter(tag: Tag): Tag[] {
        return this._listAllTags
            .filter(value => !this._listTagForm.controls.find(ctrl => ctrl.value.value === value.value))
            .filter(value => value.value !== tag.value);
    }

    private _pushTag(tag: Tag): void {
        let existedTag = this._listTagForm.controls.find(ctrl => ctrl.value.value === tag.value);
        if (!existedTag) {
            this._listTagForm.push(this._formHelper.newTagForm(tag));
        }
    }
}
