import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'uparis-payment-form',
    templateUrl: './payment-form.component.html',
    styles: []
})
export class PaymentFormComponent implements OnInit {

    private _modePayment = 'CARD';

    constructor() {
    }

    ngOnInit() {

    }

    get modePayment(): string {
        return this._modePayment;
    }

    set modePayment(value: string) {
        this._modePayment = value;
    }
}
