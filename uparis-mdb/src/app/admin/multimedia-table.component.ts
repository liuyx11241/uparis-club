import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from "../model/product.dto";
import {Multimedia} from "../model/multimedia.dto";
import {FormHelper} from "./form-helper";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'uparis-multimedia-table',
    templateUrl: './multimedia-table.component.html',
    styles: []
})
export class MultimediaTableComponent implements OnInit {

    @ViewChild('multimediaForm') multimediaForm: NgForm;

    private _product: Product;
    private _formHelper: FormHelper;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set product(value: Product) {
        this._product = value;
    }

    @Input()
    set formHelper(value: FormHelper) {
        this._formHelper = value;
        this._formHelper.register('multimedia', this.multimediaForm);
    }

    add(type: string): void {
        let multimedia = new Multimedia();
        multimedia.idProduct = this._product.id;
        multimedia.type = type.toUpperCase();
        this._product.listMultimedia.push(multimedia);
    }
}
