import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductFormHelper} from "./product-form.helper";
import {DeleteService} from "../service/http-delete.service";
import {SnackBar} from "./snack-bar";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-itinerary-table',
    templateUrl: './itinerary-table.component.html',
    styles: [],
})
export class ItineraryTableComponent implements OnInit {
    private _formHelper: ProductFormHelper;
    private _listItinerary: FormArray;

    constructor(private router: Router,
                private snackBar: SnackBar,
                private service: DeleteService) {
    }

    ngOnInit() {
    }

    @Input()
    set formHelper(value: ProductFormHelper) {
        this._formHelper = value;
    }


    @Input()
    set listItinerary(value: FormArray) {
        this._listItinerary = value;
    }

    add(): void {
        this._listItinerary.push(this._formHelper.newItineraryForm());
        this.reorder();
    }

    delete(itinerary: FormGroup): void {
        let index = this._listItinerary.controls.indexOf(itinerary);
        this._listItinerary.removeAt(index);
        this.reorder();
    }

    reorder() {
        let dayStart = 1;
        for (let itinerary of this._listItinerary.controls) {
            itinerary.patchValue({dayStart: dayStart});
            dayStart = dayStart + itinerary.value.duration;
        }
    }
}
