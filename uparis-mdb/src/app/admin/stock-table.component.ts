import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Stock} from "../model/stock.dto";
import {NgForm} from "@angular/forms";
import {TripFormHelper} from "./trip-form.helper";

@Component({
    selector: 'uparis-stock-table',
    templateUrl: './stock-table.component.html',
})
export class StockTableComponent implements OnInit {

    @ViewChild('stockForm') stockForm: NgForm;

    private _listStock: Stock[];

    private _formHelper: TripFormHelper;

    constructor() {
    }

    ngOnInit() {
    }


    @Input()
    set listStock(value: Stock[]) {
        this._listStock = value;
    }

    @Input()
    set formHelper(value: TripFormHelper) {
        this._formHelper = value;
    }

    add(): void {
        this._listStock.push(new Stock());
    }
}
