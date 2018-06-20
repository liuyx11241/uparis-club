import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'uparis-checkout-stepper',
    templateUrl: './checkout-stepper.component.html',
    styleUrls: ['./checkout-stepper.component.scss']
})
export class CheckoutStepperComponent implements OnInit {
    private _trip: Trip;
    private _number: number;

    _listCheckoutForm: FormGroup[] = [];

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip }) => {
            this._trip = data.trip;
        });
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            this._number = 1;
            if (params.has('number')) {
                this._number = parseInt(params.get('number'));
            }
        });
    }

    set number(value: number) {
        this._number = value;
    }

    arrays(n: number): number[] {
        return Array(n);
    }

    buildCheckoutForm(): FormGroup {
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
        
        this._listCheckoutForm.push(fg);
        return fg;
    }

    onClick() {
        console.info(this._listCheckoutForm[0].valid);
        console.info(JSON.stringify(this._listCheckoutForm[0].value));
    }
}
