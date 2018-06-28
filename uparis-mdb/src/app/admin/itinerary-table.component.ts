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
    private _expandedItinerary: Itinerary;

    constructor(private router: Router,
                private service: ProductService) {
    }

    ngOnInit() {
    }


    @Input()
    set product(value: Product) {
        this._product = value;
    }

    set expandedItinerary(value: Itinerary) {
        this._expandedItinerary = value;
    }

    add(): void {
        let itinerary = new Itinerary();
        itinerary.dayStart = 1 + this._product.listItinerary.length;
        itinerary.duration = 1;
        itinerary.idProduct = this._product.id;
        this._product.listItinerary.push();
        this.prepareSave();
    }

    save(): void {
        this.prepareSave();
        this.service.saveProduct(this._product).subscribe((id: number) => {
            this.router.navigate(['/admin/products', id]);
        });
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
