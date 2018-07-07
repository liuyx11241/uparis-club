import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-payment-form',
    templateUrl: './payment-form.component.html',
    styles: []
})
export class PaymentFormComponent implements OnInit {

    private _paymentForm: FormGroup

    constructor() {
    }

    ngOnInit() {

    }

    @Input()
    set paymentForm(value: FormGroup) {
        this._paymentForm = value;
    }
}
