import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormHelper} from "./form-helper";
import {NgForm} from "@angular/forms";
import {Price} from "../model/price.dto";

@Component({
    selector: 'uparis-price-table',
    templateUrl: './price-table.component.html',
    styles: []
})
export class PriceTableComponent implements OnInit {

    @ViewChild('priceForm') priceForm: NgForm;

    private _formHelper: FormHelper;

    private _listPrice: Price[];

    private _mainPrice = new EventEmitter<Price>();

    private _selectedPrice: Price;

    private _listCurrency = ['EUR', 'RMB'];

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set formHelper(value: FormHelper) {
        this._formHelper = value;
        this._formHelper.register('price', this.priceForm);
    }


    @Input()
    set listPrice(listPrice: Price[]) {
        this._listPrice = listPrice;
        this._listCurrency.forEach(currency => {
            let priceFound = this._listPrice.find(value => currency === value.currency);
            if (!priceFound) {
                let price = new Price();
                price.currency = currency;
                this._listPrice.push(price);
            }
        });
    }

    @Output()
    get mainPrice(): EventEmitter<Price> {
        return this._mainPrice;
    }

    onCheck(price: Price) {
        this._selectedPrice = price;
        this._mainPrice.emit(price);
    }
}
