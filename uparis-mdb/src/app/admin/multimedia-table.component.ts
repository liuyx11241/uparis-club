import {Component, Input, OnInit, ViewChild} from '@angular/core';
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

    private _listMultimedia: Multimedia[];
    private _formHelper: FormHelper;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set listMultimedia(value: Multimedia[]) {
        this._listMultimedia = value;
    }

    @Input()
    set formHelper(value: FormHelper) {
        this._formHelper = value;
        this._formHelper.register('multimedia', this.multimediaForm);
    }

    add(type: string): void {
        let multimedia = new Multimedia();
        multimedia.type = type.toUpperCase();
        this._listMultimedia.push(multimedia);
    }

    delete(media: Multimedia): void {
        let index = this._listMultimedia.indexOf(media);
        this._listMultimedia.splice(index, 1);
    }
}
