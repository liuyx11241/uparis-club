import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormHelper} from "../util/form-helper.util";

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
    }

    byCreditCard(): void {
        FormHelper.markAsTouched(this._cardForm);
        if (this._cardForm.invalid) {
            return;
        }

        let card = this._cardForm.value;

        (<any>window).Stripe.card.createToken({
            number: card.cardNumber,
            name: card.holder,
            exp_month: card.expiryMonth,
            exp_year: card.expiryYear,
            cvc: card.cardVerificationValue
        }, (status: number, response: any) => {
            if (status === 200) {
                let token = response.id;
                this.chargeCard(token);
            } else {
                console.log(response.error.message);
            }
        });
    }

    chargeCard(token: string): void {
        const headers = new Headers({'token': token, 'amount': 100});
    }
}
