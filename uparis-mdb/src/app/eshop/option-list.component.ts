import {Component, Input, OnInit} from '@angular/core';
import {Option} from "../model/option.dto";
import {Trip} from "../model/trip.dto";

@Component({
    selector: 'uparis-option-list',
    templateUrl: './option-list.component.html',
    styles: []
})
export class OptionListComponent implements OnInit {

    private _trip: Trip;

    private _listOption: Option[];

    private _styleBlue: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set trip(value: Trip) {
        this._trip = value;
    }

    @Input()
    set listOption(value: Option[]) {
        this._listOption = value;
    }

    @Input()
    set styleBlue(value: boolean) {
        this._styleBlue = value;
    }

    subTotal(): number {
        let amount = this._trip.price;
        this._listOption.forEach(option => amount = amount + option.price);
        return amount;
    }
}
