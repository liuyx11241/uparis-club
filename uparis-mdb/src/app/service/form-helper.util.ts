import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";

export class FormHelper {
    public static markAsTouched(ctl: AbstractControl) {
        if (ctl instanceof FormControl) {
            ctl.markAsTouched();
        }
        if (ctl instanceof FormGroup || ctl instanceof FormArray) {
            (<any>Object).values(ctl.controls).forEach(control => this.markAsTouched(control));
        }
    }
}
