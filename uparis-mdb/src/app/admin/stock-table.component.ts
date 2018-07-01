import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Stock} from "../model/stock.dto";
import {FormHelper} from "./form-helper";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'uparis-stock-table',
    templateUrl: './stock-table.component.html',
})
export class StockTableComponent implements OnInit {

    @ViewChild('stockForm') stockForm: NgForm;

    private _listStock: Stock[];

    private _formHelper: FormHelper;

    constructor() {
    }

    ngOnInit() {
    }


    @Input()
    set listStock(value: Stock[]) {
        this._listStock = value;
    }

    @Input()
    set formHelper(value: FormHelper) {
        this._formHelper = value;
        this._formHelper.register('stock', this.stockForm);
    }

    add(): void {
        this._listStock.push(new Stock());
    }
}
