import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {FormHelper} from "./form-helper";
import {Product} from "../model/product.dto";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";
import {NgForm} from "@angular/forms";
import {Stock} from "../model/stock.dto";
import {DateFormatter} from "../service/date-formatter.util";

@Component({
    selector: 'uparis-trip-form',
    templateUrl: './trip-form.component.html',
    styles: []
})
export class TripFormComponent implements OnInit {

    @ViewChild('tripForm') tripForm: NgForm;

    private _trip: Trip;
    private _product: Product;
    private _formHelper = new FormHelper();
    private _listStock: Stock[];

    private _tripDateStart: Date;
    private _tripDateEnd: Date;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private snackBar: SnackBar,
                private formatter: DateFormatter,
                private service: PostService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip, product: Product }) => {
            this._trip = data.trip;
            this._product = data.product;
        });
        if (!this._trip) {
            this._trip = new Trip();
            this._trip.listOption = [];
            this._trip.idProduct = this._product.id;
            this._trip.nameProduct = this._product.name;
            this._trip.durationProduct = this._product.duration;
            this._formHelper.disabled = false;
            this._listStock = [];
        } else {
            this._tripDateStart = this.formatter.parse(this._trip.dateStart);
            this._tripDateEnd = this.formatter.parse(this._trip.dateEnd);

            let stockMap = new Map<number, Stock>();
            this._trip.listOption.filter(op => op.stock).forEach(
                op => {
                    let stock = op.stock;
                    if (!stockMap.has(stock.id)) {
                        stockMap.set(stock.id, stock);
                    }
                    op.stock = stockMap.get(stock.id);
                });
            this._listStock = Array.from(stockMap.values());
        }

        this._formHelper.register('trip', this.tripForm);
    }

    onDateStartChange(dateStart: Date) {
        this._tripDateEnd = new Date(dateStart);
        this._tripDateEnd.setDate(this._tripDateEnd.getDate() + this._trip.durationProduct - 1);
    }

    save(): void {
        console.debug(this._formHelper);
        console.debug(this._formHelper.isValid);

        this._formHelper.submit();
        if (this._formHelper.isValid) {
            this._trip.dateStart = this.formatter.format(this._tripDateStart);
            this._trip.dateEnd = this.formatter.format(this._tripDateEnd);

            this.service.saveTrip(this._trip).subscribe(id => {
                this.snackBar.openSuccessfulSave();
                this._formHelper.disabled = true;
                this.router.navigate(['/admin/trips/', id]);
            });
        }
    }
}
