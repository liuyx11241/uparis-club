import {Component, Input, OnInit} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";
import {Product} from "../model/product.dto";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'uparis-itinerary-table',
    templateUrl: './itinerary-table.component.html',
    styles: [],
})
export class ItineraryTableComponent implements OnInit {

    private _product: Product;
    private _disabled = true;

    constructor(private router: Router,
                private service: ProductService) {
    }

    ngOnInit() {
    }


    @Input()
    set product(value: Product) {
        this._product = value;
    }

    @Input()
    set disabled(value: boolean) {
        this._disabled = value;
    }

    add(): void {
        let itinerary = new Itinerary();
        itinerary.dayStart = 1 + this._product.listItinerary.length;
        itinerary.duration = 1;
        itinerary.idProduct = this._product.id;
        this._product.listItinerary.push(itinerary);
        this.prepareSave();
    }

    delete(value: Itinerary): void {

    }

    prepareSave() {
        let dayStart = 1;
        this._product.listItinerary.forEach((value: Itinerary) => {
            value.dayStart = dayStart;
            dayStart = dayStart + value.duration;
        });
    }
}
