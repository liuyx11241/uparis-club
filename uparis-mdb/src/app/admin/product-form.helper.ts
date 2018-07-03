import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Itinerary} from "../model/itinerary.dto";
import {Schedule} from "../model/schedule.dto";
import {Product} from "../model/product.dto";
import {Multimedia} from "../model/multimedia.dto";

export class ProductFormHelper {
    private _productForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this._productForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            name: this.formBuilder.control(null, Validators.required),
            alias: this.formBuilder.control(null),
            shortDescription: this.formBuilder.control(null, Validators.maxLength(128)),
            longDescription: this.formBuilder.control(null, Validators.maxLength(512)),
            duration: this.formBuilder.control(null, [Validators.required, Validators.min(1)]),
            listItinerary: this.formBuilder.array([]),
            listMultimedia: this.formBuilder.array([]),
        });
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
        let itineraryForm = this.formBuilder.group({
            id: this.formBuilder.control(itinerary ? itinerary.id : null),
            dayStart: this.formBuilder.control(itinerary ? itinerary.dayStart : null, Validators.required),
            duration: this.formBuilder.control(itinerary ? itinerary.duration : null, [Validators.required, Validators.min(1)]),
            movement: this.formBuilder.control(itinerary ? itinerary.movement : null),
            listSchedule: this.formBuilder.array([])
        });
        let listSchedule = itineraryForm.get('listSchedule') as FormArray;
        if (itinerary && itinerary.listSchedule) {
            itinerary.listSchedule.forEach(schedule => {
                listSchedule.push(this.newScheduleForm(schedule));
            })
        }

        return itineraryForm;
    }

    newScheduleForm(schedule?: Schedule): FormGroup {
        return this.formBuilder.group({
            id: this.formBuilder.control(schedule ? schedule.id : null),
            time: this.formBuilder.control(schedule ? schedule.time : null),
            numOrder: this.formBuilder.control(schedule ? schedule.numOrder : null, Validators.required),
            activity: this.formBuilder.control(schedule ? schedule.activity : null, Validators.required),
        });
    }

    newMultimediaForm(media?: Multimedia): FormGroup {
        return this.formBuilder.group({
            id: this.formBuilder.control(media ? media.id : null),
            srcUrl: this.formBuilder.control(media ? media.srcUrl : null, Validators.required),
            type: this.formBuilder.control(media ? media.type : null, Validators.required),
            altText: this.formBuilder.control(media ? media.altText : null),
            title: this.formBuilder.control(media ? media.title : null),
            description: this.formBuilder.control(media ? media.description : null),
        });
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
