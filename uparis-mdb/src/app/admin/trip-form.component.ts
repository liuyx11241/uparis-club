import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {Product} from "../model/product.dto";
import {PostService} from "../service/http-post.service";
import {SnackBar} from "./snack-bar";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DateFormatter} from "../util/date-formatter.util";
import {TripFormHelper} from "./trip-form.helper";

@Component({
    selector: 'uparis-trip-form',
    templateUrl: './trip-form.component.html',
    styles: []
})
export class TripFormComponent implements OnInit {
    private _formHelper: TripFormHelper;
    private _tripForm: FormGroup;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private snackBar: SnackBar,
                private fb: FormBuilder,
                private service: PostService) {
        this._formHelper = new TripFormHelper(fb);
    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip, product: Product }) => {
            this._tripForm = this._formHelper.newTripForm(data.trip);
            this._formHelper.disabled = !!data.trip;

            if (data.product) {
                this._tripForm.patchValue({
                    idProduct: data.product.id,
                    nameProduct: data.product.name,
                    durationProduct: data.product.duration,
                });

            }
        });
    }

    onDateStartChange(dateStart: Date) {
        let dateEnd = new Date(dateStart);
        dateEnd.setDate(dateEnd.getDate() + this._tripForm.get('durationProduct').value - 1);
        this._tripForm.get('dateEnd').patchValue(DateFormatter.format(dateEnd));
    }

    save(): void {
        if (this._formHelper.isValid()) {
            let trip = this._tripForm.value;
            trip.dateStart = DateFormatter.format(trip.dateStart);

            this.service.saveTrip(this._tripForm.value).subscribe(id => {
                this.snackBar.openSuccessfulSave();
                this._formHelper.disabled = true;
                this.router.navigate(['/admin/trips/', id]);
            });
        }
    }
}
