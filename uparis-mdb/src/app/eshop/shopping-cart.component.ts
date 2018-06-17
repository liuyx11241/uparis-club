import {Component, Input} from '@angular/core';
import {Product} from "../model/product.dto";
import {Trip} from "../model/trip.dto";
import {Option} from "../model/option.dto";

@Component({
    selector: 'uparis-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent {

    private _product$: Product;

    private _selectedTrip$: Trip;

    // private _selectedOption$ = new Map();

    private _numberParticipant$ = 1;

    constructor() {

    }

    get product$(): Product {
        return this._product$;
    }

    @Input("product")
    set product$(value: Product) {
        this._product$ = value;
    }

    get selectedTrip$(): Trip {
        return this._selectedTrip$;
    }

    get numberParticipant$(): number {
        return this._numberParticipant$;
    }

    set numberParticipant$(value: number) {
        this._numberParticipant$ = value;
    }

    selectTrip(value: Trip) {
        this._selectedTrip$ = value;
        // this._selectedOption$.clear();
    }

    selectOption(option: Option) {
        // this._selectedOption$.set(option.level, option);
    }

    keys(map: { level: number, listOption: Option[] }): string[] {
        return Object.keys(map);
    }

    calcStock(): number {
        let stock = this.selectedTrip$ ? this.selectedTrip$.stock : 0;
        // if (this._selectedOption$) {
        //     Object.keys(this._selectedOption$).map(key => this._selectedOption$[key]).forEach(
        //         option => {
        //             stock = option.quantity ? Math.min(stock, option.quantity) : stock;
        //         }
        //     );
        // }
        return stock;
    }

    isTripValid(): boolean {
        return this._selectedTrip$ && this._numberParticipant$ > 0;
    }

    onSubmit() {

    }
}
