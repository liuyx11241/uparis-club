import {FormBuilder, FormGroup} from "@angular/forms";

export class TripFormHelper {

    disabled: boolean = true;

    private _tripForm: FormGroup;


    constructor(private formBuilder: FormBuilder) {
    }
}
