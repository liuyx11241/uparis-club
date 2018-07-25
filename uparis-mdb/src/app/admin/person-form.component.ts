import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../model/person.dto";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";
import {DateFormatter} from "../util/date-formatter.util";
import {FormHelper} from "../util/form-helper.util";

@Component({
    selector: 'uparis-person-form',
    templateUrl: './person-form.component.html',
})
export class PersonFormComponent implements OnInit {

    private _personForm: FormGroup;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private post: PostService,
                private snackBar: SnackBar,
                private fb: FormBuilder) {
        this._personForm = FormHelper.newPersonForm(this.fb);
        this._personForm.addControl('portraitUrl', this.fb.control(null));
        this._personForm.addControl('selfDescription', this.fb.control(null));
        this._personForm.addControl('listGrantedAuthority', this.fb.control(null));
    }

    ngOnInit() {
        this.route.data.subscribe((data: { person: Person }) => {
            if (data.person) {
                this._personForm.disable();
                data.person.birthday = new Date(data.person.birthday);
                this._personForm.patchValue(data.person);
            } else {
                this._personForm.enable();
            }
        });
    }

    save(): void {
        if (this._personForm.valid) {
            let person = this._personForm.value;
            person.birthday = DateFormatter.format(person.birthday);
            this.post.savePerson(person).subscribe((value: number) => {
                this._personForm.disable();
                this.snackBar.openSuccessfulSave();
                this.router.navigate(['/admin/persons', value]);
            });
        }
    }

    idPersonClient(): number {
        return this._personForm.value.id;
    }

    idPersonLeader(): number {
        let person = this._personForm.value;
        if (person.listGrantedAuthority && person.listGrantedAuthority.find((value: string) => value === 'ROLE_LEADER')) {
            return person.id;
        }
        return null;
    }
}
