import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {FormHelper} from "../util/form-helper.util";
import {NavigationExtras, Router} from "@angular/router";

@Component({
    selector: 'uparis-admin-login',
    templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {

    private _loginForm: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private auth: AuthService) {
        this._loginForm = this.fb.group({
            username: this.fb.control(null, Validators.required),
            password: this.fb.control(null, [Validators.required, Validators.min(3)]),
        });
    }

    login() {
        FormHelper.markAsTouched(this._loginForm);
        if (this._loginForm.valid) {
            this.auth.authenticate(this._loginForm.value,
                (url: string) => {
                    let navigationExtras: NavigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    };
                    this.router.navigate([url ? url : '/admin'], navigationExtras);
                }, (error: any) => {
                    this._loginForm.setErrors({'401': error})
                }
            );
        }
    }
}
