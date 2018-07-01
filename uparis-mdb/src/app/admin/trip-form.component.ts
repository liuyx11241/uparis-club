import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {FormHelper} from "./form-helper";
import {Product} from "../model/product.dto";
import {Price} from "../model/price.dto";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'uparis-trip-form',
    templateUrl: './trip-form.component.html',
    styles: []
})
export class TripFormComponent implements OnInit {

    @ViewChild('tripForm') tripForm: NgForm;

    _trip: Trip;
    _product: Product;
    _formHelper = new FormHelper();

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
            this._trip.listPrice = [];
            this._trip.mappedListOption = {};
            this._trip.idProduct = this._product.id;
            this._trip.nameProduct = this._product.name;
            this._trip.durationProduct = this._product.duration;
            this._trip.mainPrice = new Price();
            this._formHelper.disabled = false;
        } else {
            this.onDateStartChange(this.parseDate(this._trip.dateStart));
        }

        this._formHelper.register('trip', this.tripForm);
    }

    onDateStartChange(dateStart: Date) {
        this._trip.dateStart = dateStart.toLocaleDateString();
        let dateEnd = new Date(dateStart.setDate(dateStart.getDate() + this._trip.durationProduct - 1));
        this._trip.dateEnd = dateEnd.toLocaleDateString();
    }

    parseDate(date: string): Date {
        return new Date(date);
    }

    save(): void {
        this._formHelper.submit();
        if (this._formHelper.isValid) {
            this.service.saveTrip(this._trip).subscribe(id => {
                this.snackBar.openSuccessfulSave();
                this._formHelper.disabled = true;
                this.router.navigate(['/admin/trips/', id]);
            });
        }
    }
}
