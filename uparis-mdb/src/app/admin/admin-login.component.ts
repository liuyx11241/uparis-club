import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {FormHelper} from "../util/form-helper.util";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/internal/operators";

@Component({
    selector: 'uparis-admin-login',
    templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent implements OnInit {

    private _loginForm: FormGroup;
    returnUrl: string;

    constructor(private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private auth: AuthService) {
        this._loginForm = this.fb.group({
            username: this.fb.control(null, Validators.required),
            password: this.fb.control(null, [Validators.required, Validators.min(3)]),
        });
    }

    ngOnInit(): void {
        this.auth.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    }

    onSubmit() {
        FormHelper.markAsTouched(this._loginForm);
        if (this._loginForm.invalid) {
            return;
        }
        this.auth.login(this._loginForm.value.username, this._loginForm.value.password)
            .pipe(first())
            .subscribe(data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this._loginForm.setErrors(error, error);
                })
    }
}
