import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";
import {Product} from "../model/product.dto";
import {Router} from "@angular/router";
import {FormHelper} from "./form-helper";
import {NgForm} from "@angular/forms";
import {DeleteService} from "../service/http-delete.service";
import {SnackBar} from "./snack-bar";

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
                private snackBar: SnackBar,
                private service: DeleteService) {
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
        this.reorder();
    }

    delete(itinerary: Itinerary): void {
        let index = this._product.listItinerary.indexOf(itinerary);
        this._product.listItinerary.splice(index, 1);
        this.reorder();
    }

    reorder() {
        let dayStart = 1;
        this._product.listItinerary.forEach((value: Itinerary) => {
            value.dayStart = dayStart;
            dayStart = dayStart + value.duration;
        });
    }
}
