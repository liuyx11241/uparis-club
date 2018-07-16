import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {FormHelper} from "../util/form-helper.util";
import {Router} from "@angular/router";

@Component({
    selector: 'uparis-admin-login',
    templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent implements OnInit {

    private _loginForm: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private auth: AuthService) {
        this._loginForm = this.fb.group({
            username: this.fb.control(null, Validators.required),
            password: this.fb.control(null, [Validators.required, Validators.min(3)]),
        });
    }

    ngOnInit(): void {
        this.auth.logout();
    }

    onSubmit() {
        FormHelper.markAsTouched(this._loginForm);
        if (this._loginForm.invalid) {
            return;
        }
        this.auth.login(this._loginForm.value.username, this._loginForm.value.password)
            .subscribe(result => {
                    if (result) {
                        this.router.navigateByUrl(this.auth.redirectUrl);
                    }
                },
                error => {
                    let formErr = {};
                    formErr[error.error] = error.error_description;
                    this._loginForm.setErrors(formErr);
                })
    }
}
