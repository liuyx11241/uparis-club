import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../model/stock.dto";
import {Observable} from "rxjs/index";

@Component({
    selector: 'uparis-stock-table',
    templateUrl: './stock-table.component.html',
})
export class StockTableComponent implements OnInit {
    private _listStock: Observable<Stock[]>;

    constructor() {
    }

    ngOnInit() {
    }


    @Input()
    set listStock(value: Observable<Stock[]>) {
        this._listStock = value;
    }
}
