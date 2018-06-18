import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Trip} from "../model/trip.dto";

@Component({
    selector: 'uparis-checkout-stepper',
    templateUrl: './checkout-stepper.component.html',
    styleUrls: ['./checkout-stepper.component.scss']
})
export class CheckoutStepperComponent implements OnInit {
    private _trip$: Trip;
    private _number$: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip }) => {
            this._trip$ = data.trip;
        });
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            this._number$ = 1;
            if (params.has('number')) {
                this._number$ = parseInt(params.get('number'));
            }
        });
    }

    arrays(n: number): number[] {
        return Array(n);
    }

    addPerson() {
        this._number$++;
    }
}
