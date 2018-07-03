import {Component, Input} from '@angular/core';
import {FormArray} from "@angular/forms";
import {TripFormHelper} from "./trip-form.helper";

@Component({
    selector: 'uparis-stock-table',
    templateUrl: './stock-table.component.html',
})
export class StockTableComponent {

    private _formHelper: TripFormHelper;

    private _listStockForm: FormArray;

    constructor() {
    }

    @Input()
    set listStockForm(value: FormArray) {
        this._listStockForm = value;
    }

    @Input()
    set formHelper(value: TripFormHelper) {
        this._formHelper = value;
    }

    add(): void {
        this._listStockForm.push(this._formHelper.newStockForm());
    }
}
