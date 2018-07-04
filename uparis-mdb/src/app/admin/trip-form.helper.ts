import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Trip} from "../model/trip.dto";
import {Option} from "../model/option.dto";
import {Stock} from "../model/stock.dto";

export class TripFormHelper {

    private _tripForm: FormGroup;

    private _listStockForm: FormArray;

    constructor(private formBuilder: FormBuilder) {
        this._tripForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            idProduct: this.formBuilder.control(null, Validators.required),
            nameProduct: this.formBuilder.control(null),
            durationProduct: this.formBuilder.control(null),
            dateStart: this.formBuilder.control(null, Validators.required),
            dateEnd: this.formBuilder.control(null),
            stock: this.formBuilder.control(null, [Validators.required, Validators.min(0)]),
            price: this.formBuilder.control(null, [Validators.required, Validators.min(0)]),
            priceVAT: this.formBuilder.control(null),
            currency: this.formBuilder.control(null, Validators.required),
            listOption: this.formBuilder.array([]),
        });
        this._listStockForm = this.formBuilder.array([]);
    }

    newTripForm(trip?: Trip): FormGroup {
        if (trip) {
            trip.dateStart = new Date(trip.dateStart);
            trip.dateEnd = new Date(trip.dateEnd);
            this._tripForm.patchValue(trip, {onlySelf: true});
            if (trip.listOption) {
                trip.listOption.forEach(
                    option => this.listOptionForm.push(this.newOptionForm(option)));
            }
        }
        return this._tripForm;
    }

    newOptionForm(option?: Option): FormGroup {
        let optionForm = this.formBuilder.group({
            id: this.formBuilder.control(option ? option.id : null),
            name: this.formBuilder.control(option ? option.name : null, Validators.required),
            description: this.formBuilder.control(option ? option.description : null),
            level: this.formBuilder.control(option ? option.level : null, [Validators.required, Validators.min(1)]),
            numOrder: this.formBuilder.control(option ? option.numOrder : null, [Validators.required, Validators.min(0)]),
            price: this.formBuilder.control(option ? option.price : null, [Validators.required, Validators.min(0)]),
            priceVAT: this.formBuilder.control(option ? option.priceVAT : null),
            stock: this.formBuilder.control(option ? option.stock : null),
        });

        if (option && option.stock) {
            let stockForm = this.listStockform.controls.find(stockForm => stockForm.value.id === option.stock.id);
            if (!stockForm) {
                stockForm = this.newStockForm(option.stock);
                this.listStockform.push(stockForm);
            }
            optionForm.patchValue({stock: stockForm.value});
        }
        console.debug(optionForm.value.stock);
        console.debug(optionForm.get('stock').value);
        console.debug(optionForm.get('stock').value === optionForm.value.stock);

        return optionForm;
    }

    newStockForm(stock?: Stock): FormGroup {
        return this.formBuilder.group({
            id: this.formBuilder.control(stock ? stock.id : null),
            name: this.formBuilder.control(stock ? stock.name : null, Validators.required),
            quantity: this.formBuilder.control(stock ? stock.quantity : 0, [Validators.required, Validators.min(0)]),
        });
    }

    get disabled(): boolean {
        return this._tripForm.disabled;
    }

    set disabled(value: boolean) {
        value ? this._tripForm.disable() : this._tripForm.enable();
        value ? this._listStockForm.disable() : this._listStockForm.enable();
    }

    get listOptionForm(): FormArray {
        return this._tripForm.get('listOption') as FormArray;
    }

    get listStockform(): FormArray {
        return this._listStockForm;
    }

    public isValid(): boolean {
        this.markAsTouched(this._tripForm);
        this.markAsTouched(this._listStockForm);
        return this._tripForm.valid;
    }

    private markAsTouched(ctl: AbstractControl) {
        if (ctl instanceof FormControl) {
            ctl.markAsTouched();
        }
        if (ctl instanceof FormGroup || ctl instanceof FormArray) {
            (<any>Object).values(ctl.controls).forEach(control => this.markAsTouched(control));
        }
    }
}
