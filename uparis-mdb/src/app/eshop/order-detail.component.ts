import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Order} from "../model/order.dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormHelper} from "../util/form-helper.util";
import {MatSlideToggleChange} from "@angular/material";
import {Person} from "../model/person.dto";
import {PostService} from "../service/http-post.service";

@Component({
    selector: 'uparis-order-detail',
    templateUrl: './order-detail.component.html',
    styles: []
})
export class OrderDetailComponent implements OnInit {
    private _listOrder: Order[];
    private _payer: Person;
    private _payerForm: FormGroup;
    private _paymentForm: FormGroup;


    private _order: Order;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: PostService) {
        this._payerForm = FormHelper.newPersonForm(formBuilder);
        this._paymentForm = this.formBuilder.group({
            paymentMode: this.formBuilder.control('CARD', Validators.required)
        });
    }

    ngOnInit() {
        this.route.data.subscribe((data: { listOrder: Order[] }) => this.init(data.listOrder));
    }

    selectPayer($event: MatSlideToggleChange, payer: Person): void {
        this._payer = $event.checked ? payer : null
    }

    private init(data: Order[]): void {
        this._listOrder = data;
        if (this._listOrder.length > 0) {
            this._order = this._listOrder[0];
        }
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

    pay() {
        if ((this._payer || FormHelper.isValid(this._payerForm)) && FormHelper.isValid(this._paymentForm)) {
            this._listOrder.forEach(order => {
                order.payer = this._payer ? this._payer : this._payerForm.value;
                order.paymentMode = this._paymentForm.value.paymentMode;
            });
            this.service.updateOrders(this._listOrder).subscribe(data => this.init(data))
        }
    }
}
