import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Order} from "../model/order.dto";

@Component({
    selector: 'uparis-checkout-stepper',
    templateUrl: './checkout-stepper.component.html',
    styleUrls: ['./checkout-stepper.component.scss']
})
export class CheckoutStepperComponent implements OnInit {
    private _trip: Trip;
    private _number: number;

    _listCheckoutForm: FormArray;
    _listOrder: Order[];

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
        this._listCheckoutForm = this.formBuilder.array([]);
        this._listOrder = [];
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
        let newCheckoutForm = this.formBuilder.array([]);
        this._number = value;
        for (var i = 0; i < this._number; i++) {
            if (this._listCheckoutForm.at(i)) {
                newCheckoutForm.push(this._listCheckoutForm.at(i))
            } else {
                newCheckoutForm.push(this.buildCheckoutForm());
            }
        }
        this._listCheckoutForm = newCheckoutForm;
    }

    private buildCheckoutForm(): FormGroup {
        let fg = this.formBuilder.group({
            option: this.formBuilder.group([]),
            participant: this.formBuilder.group({
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

    createNewOrder(event: any) {
        this._listOrder = [];
        for (let checkoutForm of this._listCheckoutForm.controls) {
            let newOrder = new Order();

            const participant = checkoutForm.get('participant').value;
            newOrder.participant = participant;

            const listOption = checkoutForm.get('option').value;
            newOrder.listOption = [];
            Object.keys(listOption).map(opt => {
                newOrder.listOption.push(listOption[opt])
            })

            console.info(checkoutForm.get('participant').value);
            console.info(checkoutForm.get('option').value);
            console.info(newOrder);
            this._listOrder.push(newOrder);
        }
    }
}
