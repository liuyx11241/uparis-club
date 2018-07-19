import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material";

@Component({
    selector: 'uparis-person-form',
    templateUrl: './person-form.component.html',
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}}]
})
export class PersonFormComponent {

    private _personForm: FormGroup;

    private _appearance: string;

    constructor() {

    }

    @Input()
    set personForm(value: FormGroup) {
        this._personForm = value;
    }

    @Input()
    set appearance(value: string) {
        this._appearance = value;
    }
}
