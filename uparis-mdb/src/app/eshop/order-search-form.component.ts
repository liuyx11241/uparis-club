import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GetService} from "../service/http-get.service";
import {FormHelper} from "../util/form-helper.util";
import {Order} from "../model/order.dto";
import {Router} from "@angular/router";
import {DateFormatter} from "../util/date-formatter.util";

@Component({
    selector: 'uparis-order-search-form',
    templateUrl: './order-search-form.component.html',
    // providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}}]
})
export class OrderSearchFormComponent {

    private _orderForm: FormGroup;
    private _orderNotFound: boolean;

    constructor(private fb: FormBuilder, private router: Router, private getService: GetService) {
        this._orderForm = this.fb.group({
            reference: this.fb.control(null, Validators.required),
            birthday: this.fb.control(null, Validators.required),
            wechat: this.fb.control(null, Validators.required),
        });
    }

    searchOrder(): void {
        FormHelper.markAsTouched(this._orderForm);
        if (this._orderForm.valid) {
            let criteria = this._orderForm.value;
            criteria.birthday = DateFormatter.format(criteria.birthday);
            this.getService.searchOrder(criteria).subscribe((order: Order) => {
                if (order && order.reference) {
                    this._orderNotFound = false;
                    this.router.navigate(['/eshop/orders', order.reference]);
                } else {
                    this._orderNotFound = true;
                }
            });
        }
    }
}
