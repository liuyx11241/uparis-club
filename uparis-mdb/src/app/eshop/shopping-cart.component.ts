import {Component, Input} from '@angular/core';
import {Product} from "../model/product.dto";
import {Trip} from "../model/trip.dto";
import {NavigationExtras, Router} from "@angular/router";

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

    constructor(private router: Router) {

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

    calcStock(): number {
        let stock = this.selectedTrip$ ? this.selectedTrip$.stock : 0;
        return stock;
    }

    isTripValid(): boolean {
        return this._selectedTrip$ && this._numberParticipant$ > 0;
    }

    checkout() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'idTrip': this._selectedTrip$.id,
                'number': this._numberParticipant$
            }
        };
        this.router.navigate(['/eshop/checkout'], navigationExtras);
    }
}
