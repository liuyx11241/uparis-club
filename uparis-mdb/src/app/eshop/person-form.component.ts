import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {

    private _personForm: FormGroup;

    constructor() {

    }

    @Input()
    set personForm(value: FormGroup) {
        this._personForm = value;
    }
}
