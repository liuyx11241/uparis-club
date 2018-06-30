import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";
import {Product} from "../model/product.dto";
import {HttpService} from "../service/product.service";
import {Router} from "@angular/router";
import {FormHelper} from "./form-helper";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'uparis-itinerary-table',
    templateUrl: './itinerary-table.component.html',
    styles: [],
})
export class ItineraryTableComponent implements OnInit {

    @ViewChild('itineraryForm') itineraryForm: NgForm;

    private _product: Product;
    private _formHelper: FormHelper;

    constructor(private router: Router,
                private service: HttpService) {
    }

    ngOnInit() {
    }


    @Input()
    set product(value: Product) {
        this._product = value;
    }

    @Input()
    set formHelper(value: FormHelper) {
        this._formHelper = value;
        this._formHelper.register('itinerary', this.itineraryForm);
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
