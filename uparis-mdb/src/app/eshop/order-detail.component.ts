import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Order} from "../model/order.dto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormHelper} from "../model/form-helper.util";
import {MatSlideToggleChange} from "@angular/material";
import {Person} from "../model/person.dto";

@Component({
    selector: 'uparis-order-detail',
    templateUrl: './order-detail.component.html',
    styles: []
})
export class OrderDetailComponent implements OnInit {
    private _listOrder: Order[];
    private _payer: Person;
    private _payerForm: FormGroup;

    private _order: Order;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
        this._payerForm = FormHelper.newPersonForm(formBuilder);
    }

    ngOnInit() {
        this.route.data.subscribe((data: { listOrder: Order[] }) => {
            this._listOrder = data.listOrder;
            if (this._listOrder.length > 0) {
                this._order = this._listOrder[0];
            }
        });
    }

    selectPayer($event: MatSlideToggleChange, payer: Person): void {
        this._payer = $event.checked ? payer : null
    }

    get amount(): number {
        let amount = 0;
        this._listOrder.forEach(order => {
            amount = amount + order.trip.price;
            order.listOption.forEach(option => {
                amount = amount + option.price;
            })
        });
        return amount;
    }
}
