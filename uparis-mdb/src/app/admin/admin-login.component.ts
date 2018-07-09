import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'uparis-admin-login',
    templateUrl: './admin-login.component.html',
    styles: []
})
export class AdminLoginComponent implements OnInit {

    private _loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this._loginForm = this.fb.group({
            username: this.fb.control(null, Validators.required),
            password: this.fb.control(null, [Validators.required, Validators.min(3)]),
        });
    }

    ngOnInit() {
    }

    logIn() {
        console.info(this._loginForm.value);
    }
}
