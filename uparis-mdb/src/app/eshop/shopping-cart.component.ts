import {Component, Input} from '@angular/core';
import {Product} from "../model/product.dto";
import {Trip} from "../model/trip.dto";
import {NavigationExtras, Router} from "@angular/router";
import {groupBy, mergeMap, toArray} from "rxjs/internal/operators";
import {from} from "rxjs/index";
import {Option} from "../model/option.dto";
import {ColorHelper} from "../model/color-helper.util";

@Component({
    selector: 'uparis-shopping-cart',
    templateUrl: './shopping-cart.component.html',
})

export class ShoppingCartComponent {

    private _product: Product;

    private _selectedTrip: Trip;

    private _numberParticipant = 1;

    private _randomBadgeColor: any[];

    constructor(private router: Router) {

    }

    @Input()
    set product(value: Product) {
        this._product = value;
        if (this._product.listTrip && this._product.listTrip.length > 0) {
            this._selectedTrip = this._product.listTrip[0];
        }
        this._randomBadgeColor = [];
        this._product.listTag.forEach(
            tag => this._randomBadgeColor.push([ColorHelper.randomBadgeColor(), ColorHelper.randomBadgeTone()])
        );
    }

    set numberParticipant(value: number) {
        this._numberParticipant = value;
    }

    calcStock(): number {
        return this._selectedTrip ? this._selectedTrip.stock : 0;
    }

    calcTotalStock(): number {
        return this._product.listTrip.map(
            trip => trip.stock
        ).reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    calcMinPrice(): number {
        if (this._selectedTrip) {
            let price = this._selectedTrip.price;
            from(this._selectedTrip.listOption).pipe(
                groupBy((option: Option) => option.level),
                mergeMap(group => group.pipe(toArray()))
            ).subscribe(optionArray => {
                price = price + Math.min.apply(Math, optionArray.map((option: Option) => option.price))
            });
            return price;
        }
        return null;
    }

    calcMaxPrice(): number {
        if (this._selectedTrip) {
            let price = this._selectedTrip.price;
            from(this._selectedTrip.listOption).pipe(
                groupBy((option: Option) => option.level),
                mergeMap(group => group.pipe(toArray()))
            ).subscribe(optionArray => {
                price = price + Math.max.apply(Math, optionArray.map((option: Option) => option.price))
            });
            return price;
        }
        return null;
    }

    isTripValid(): boolean {
        return this._selectedTrip && this._numberParticipant > 0;
    }

    checkout() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'idTrip': this._selectedTrip.id,
                'number': this._numberParticipant
            }
        };
        this.router.navigate(['/eshop/checkout'], navigationExtras);
    }
}
