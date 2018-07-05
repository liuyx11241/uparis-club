import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Itinerary} from "../model/itinerary.dto";
import {Schedule} from "../model/schedule.dto";
import {Product} from "../model/product.dto";
import {Multimedia} from "../model/multimedia.dto";
import {FormHelper} from "../model/form-helper.util";

export class ProductFormHelper {
    private _productForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this._productForm = FormHelper.newProductForm(this.formBuilder);
        this._productForm.addControl('listItinerary', this.formBuilder.array([]));
        this._productForm.addControl('listMultimedia', this.formBuilder.array([]));
    }

    get disabled(): boolean {
        return this._productForm.disabled;
    }

    set disabled(value: boolean) {
        value ? this._productForm.disable() : this._productForm.enable();
    }

    newProductForm(product?: Product): FormGroup {
        if (product) {
            this._productForm.patchValue(product, {onlySelf: true})
            if (product.listItinerary) {
                product.listItinerary.forEach(itinerary => this.listItineraryForm.push(this.newItineraryForm(itinerary)));
            }
            if (product.listMultimedia) {
                product.listMultimedia.forEach(media => this.listMultimediaForm.push(this.newMultimediaForm(media)));
            }
        } else {
            this._productForm.reset();
        }
        return this._productForm;
    }

    newItineraryForm(itinerary?: Itinerary): FormGroup {
        let itineraryForm = FormHelper.newItineraryForm(this.formBuilder, itinerary);
        itineraryForm.addControl('listSchedule', this.formBuilder.array([]));
        let listSchedule = itineraryForm.get('listSchedule') as FormArray;
        if (itinerary && itinerary.listSchedule) {
            itinerary.listSchedule.forEach(schedule => {
                listSchedule.push(this.newScheduleForm(schedule));
            })
        }

        return itineraryForm;
    }

    newScheduleForm(schedule?: Schedule): FormGroup {
        return FormHelper.newScheduleForm(this.formBuilder, schedule);
    }

    newMultimediaForm(media?: Multimedia): FormGroup {
        return FormHelper.newMultimediaForm(this.formBuilder, media);
    }

    get listItineraryForm(): FormArray {
        return this._productForm.get('listItinerary') as FormArray;
    }

    get listMultimediaForm(): FormArray {
        return this._productForm.get('listMultimedia') as FormArray;
    }

    public isValid(): boolean {
        this.markAsTouched(this._productForm);
        return this._productForm.valid;
    }

    private markAsTouched(formGroup: any) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({onlySelf: true});
            } else if (control instanceof FormGroup) {
                this.markAsTouched(control);
            } else if (control instanceof FormArray) {
                this.markAsTouched(control);
            }
        });
    }
}
