import {Component, Input, OnInit} from '@angular/core';
import {Option} from "../model/option.dto";
import {Stock} from "../model/stock.dto";
import {distinct} from "rxjs/internal/operators";
import {Observable, of} from "rxjs/index";
import {flatMap} from "tslint/lib/utils";

@Component({
    selector: 'uparis-option-table',
    templateUrl: './option-table.component.html',
    styles: []
})
export class OptionTableComponent implements OnInit {

    private _mappedListOption: object;

    private _listStock: Observable<Stock[]>;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set mappedListOption(value: object) {
        this._mappedListOption = value;
        this._listStock = of(flatMap(Object.keys(value), input => value[input])
            .filter((option: Option) => option.stock !== null)
            .map((option: Option) => option.stock)
        ).pipe(
            distinct((stock: Stock) => stock.id)
        );
    }

    private getOptionLevels() {
        return Array.from(Object.keys(this._mappedListOption));
    }
}
