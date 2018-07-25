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
            paymentMode: this.formBuilder.control('STRIPE', Validators.required)
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
        FormHelper.markAsTouched(this._paymentForm);
        if (!this._payer) {
            FormHelper.markAsTouched(this._payerForm);
        }

        if ((this._payer || FormHelper.isValid(this._payerForm)) && FormHelper.isValid(this._paymentForm)) {
            const orderRef = new Order();
            orderRef.reference = this._order.reference;
            orderRef.payer = this._payer ? this._payer : this._payerForm.value;
            orderRef.paymentMode = this._paymentForm.value.paymentMode;
            if ('STRIPE' === orderRef.paymentMode) {
                this._payByStripe(this._paymentForm.get('stripe') as FormGroup, (status: number, response: any) => {
                    if (status === 200) {
                        orderRef.paymentToken = response.id;
                        this.service.payOrders(orderRef).subscribe(
                            (value: Order) => {
                                location.reload(true);
                            },
                            (error: string) => {
                                console.info(error);
                                switch (error) {
                                    case '402': // payment failed
                                        break;
                                    case '408': // Time out
                                        break;
                                    case '412': // no stock
                                        break;
                                    case '400': // bajd request
                                        break;
                                    case '500': // internal server
                                        break;
                                }
                            });
                    } else {
                        this._paymentForm.setErrors({'402': response.error.message}, {emitEvent: true});
                        console.log(response.error.message);
                    }
                });
            }
        }
    }


    private _payByStripe(stripeForm: FormGroup, callback: (status: number, response: any) => void): void {
        let card = stripeForm.value;

        (<any>window).Stripe.card.createToken({
            number: card.cardNumber,
            name: card.holder,
            exp_month: card.expiryMonth,
            exp_year: card.expiryYear,
            cvc: card.cardVerificationValue
        }, callback);
    }
}
