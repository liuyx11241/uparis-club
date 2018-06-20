import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Order} from "../model/order.dto";

@Component({
    selector: 'uparis-checkout-stepper',
    templateUrl: './checkout-stepper.component.html',
    styleUrls: ['./checkout-stepper.component.scss']
})
export class CheckoutStepperComponent implements OnInit {
    private _trip: Trip;
    private _number: number;

    _listCheckoutForm: FormGroup[] = [];
    _listOrder: Order[];

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip }) => {
            this._trip = data.trip;
        });
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            let number = 1;
            if (params.has('number')) {
                number = parseInt(params.get('number'));
            }
            this.number = number;
        });
    }

    set number(value: number) {
        this._listCheckoutForm = [];
        this._listOrder = [];
        this._number = value;
        for (var i = 0; i < this._number; i++) {
            this._listCheckoutForm.push(this.buildCheckoutForm());
            this._listOrder.push(new Order());
        }
    }

    private buildCheckoutForm(): FormGroup {
        let fg = this.formBuilder.group({
            'option': this.formBuilder.group({}),
            'participant': this.formBuilder.group({
                    'gender': ['', Validators.required],
                    'fullName': ['',],
                    'firstName': ['', Validators.required],
                    'lastName': ['', Validators.required],
                    'birthday': ['', Validators.required],
                    'birthplace': ['', Validators.required],
                    'wechat': ['', Validators.required],
                    'telephone': ['', Validators.required],
                    'email': ['', [Validators.required, Validators.email]],
                    'address': ['', Validators.required],
                    'addressComplement': ['',],
                    'zipCode': ['', Validators.required],
                    'city': ['', Validators.required],
                    'country': ['', Validators.required],
                }
            ),
        });

        for (let obj of Object.keys(this._trip.mappedListOption)) {
            (fg.get('option') as FormGroup).addControl("option" + obj, this.formBuilder.control('', Validators.required));
        }

        return fg;
    }

    createNewOrder(event: any, form: FormGroup, index: number) {
        console.info(event);
        console.info(form);
        console.info(index);
        let order = this._listOrder[index];

        console.info(form.get('participant').value);
        console.info(form.get('option').value);
        order.participant = form.get('participant').value;
        order.listOption = form.get('option').value;
    }
}
