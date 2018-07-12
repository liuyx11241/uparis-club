import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormHelper} from "../util/form-helper.util";
import {ActivatedRoute} from "@angular/router";
import {Person} from "../model/person.dto";

@Component({
    selector: 'uparis-person-form',
    templateUrl: './person-form.component.html',
})
export class PersonFormComponent implements OnInit {

    private _personForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private fb: FormBuilder) {
        this._personForm = FormHelper.newPersonForm(this.fb);
    }

    ngOnInit() {
        this.route.data.subscribe((data: { person: Person }) => {
            data.person.birthday = new Date(data.person.birthday);
            this._personForm.patchValue(data.person);
        });
    }

    @Input()
    set personForm(value: FormGroup) {
        this._personForm = value;
    }
}
