import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {FormHelper} from "./form-helper";
import {Product} from "../model/product.dto";
import {Price} from "../model/price.dto";
import {MatDatepickerInputEvent} from "@angular/material";
import {FormControl} from "@angular/forms";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";

@Component({
    selector: 'uparis-trip-form',
    templateUrl: './trip-form.component.html',
    styles: []
})
export class TripFormComponent implements OnInit {

    _trip: Trip;
    _product: Product;
    _formHelper = new FormHelper();

    dateStart: FormControl;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private snackBar: SnackBar,
                private service: PostService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip, product: Product }) => {
            this._trip = data.trip;
            this._product = data.product;
        });
        if (!this._trip) {
            this._trip = new Trip();
            this._trip.mappedPrice = {};
            this._trip.mappedListOption = {};
            this._trip.idProduct = this._product.id;
            this._trip.nameProduct = this._product.name;
            this._trip.durationProduct = this._product.duration;
            this._trip.mainPrice = new Price();
            this._formHelper.disabled = false;
        }
        this.dateStart = new FormControl(this._trip.dateStart);
    }

    onDateStartChange(event: MatDatepickerInputEvent<Date>) {
        let dateStart = event.value;
        this._trip.dateStart = dateStart.toLocaleDateString();
        let dateEnd = new Date(dateStart.setDate(dateStart.getDate() + this._trip.durationProduct - 1));
        this._trip.dateEnd = dateEnd.toLocaleDateString();
    }

    parseDate(date: string): Date {
        return new Date(date);
    }

    save(): void {
        this.service.saveTrip(this._trip).subscribe(id => {
            console.log(id);
            this.snackBar.openSuccessfulSave();
            this.router.navigate(['/admin/trips/', id]);
        });
    }
}
