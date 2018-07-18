import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormHelper} from "../util/form-helper.util";
import {MatRadioChange} from "@angular/material";

@Component({
    selector: 'uparis-payment-form',
    templateUrl: './payment-form.component.html',
    styles: []
})
export class PaymentFormComponent implements OnInit {

    private _paymentForm: FormGroup;

    private _cardForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this._cardForm = FormHelper.newCardPaymentForm(this.fb);
    }

    ngOnInit() {

    }

    @Input()
    set paymentForm(value: FormGroup) {
        this._paymentForm = value;
        this._paymentForm.addControl('stripe', this._cardForm);
    }

    onPaymentModeChange($event: MatRadioChange) {
        if ('STRIPE' === $event.value) {
            this._paymentForm.addControl('stripe', this._cardForm);
        } else {
            this._paymentForm.removeControl('stripe');
        }
    }
}
