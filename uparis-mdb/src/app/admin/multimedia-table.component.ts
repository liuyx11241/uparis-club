import {Component, Input, OnInit} from '@angular/core';
import {Multimedia} from "../model/multimedia.dto";
import {ProductFormHelper} from "./product-form.helper";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-multimedia-table',
    templateUrl: './multimedia-table.component.html',
    styles: []
})
export class MultimediaTableComponent implements OnInit {
    private _listMultimedia: FormArray;
    private _formHelper: ProductFormHelper;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set formHelper(value: ProductFormHelper) {
        this._formHelper = value;
    }

    @Input()
    set listMultimedia(value: FormArray) {
        this._listMultimedia = value;
    }

    add(type: string): void {
        let multimedia = new Multimedia();
        multimedia.type = type.toUpperCase();
    }

    delete(media: FormGroup): void {
        let index = this._listMultimedia.controls.indexOf(media);
        this._listMultimedia.removeAt(index);
    }
}
