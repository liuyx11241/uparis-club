import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person} from "../model/person.dto";

@Component({
    selector: 'uparis-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

    personForm$: FormGroup;

    @Output("onSubmit")
    onSubmit$: EventEmitter<Person> = new EventEmitter<Person>();

    constructor(private fb: FormBuilder) {
        this.rebuildPersonForm();
    }

    ngOnInit() {
    }

    rebuildPersonForm(): void {
        this.personForm$ = this.fb.group(
            {
                'gender': ['', Validators.required],
                'fullName': ['',],
                'firstName': ['', Validators.required],
                'lastName': ['', Validators.required],
                'birthday': ['', Validators.required],
                'birthplace': ['', Validators.required],
                'wechat': ['', Validators.required],
                'telephone': ['', Validators.required],
                'email': ['', [Validators.required, Validators.email]],
                'address': ['', Validators.required],
                'addressComplement': ['',],
                'zipCode': ['', Validators.required],
                'city': ['', Validators.required],
                'country': ['', Validators.required],
            }
        )
    }

    retrievePerson(): Person {
        if (this.personForm$.valid) {
            return this.personForm$.value;
        }
        return null;
    }
}
