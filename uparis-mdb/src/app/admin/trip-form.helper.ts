import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Trip} from "../model/trip.dto";
import {Option} from "../model/option.dto";
import {Stock} from "../model/stock.dto";
import {FormHelper} from "../util/form-helper.util";
import {Question} from "../model/question.dto";

export class TripFormHelper {

    private _tripForm: FormGroup;

    private _listStockForm: FormArray;

    constructor(private formBuilder: FormBuilder) {
        this._tripForm = FormHelper.newTripForm(this.formBuilder);
        this._tripForm.addControl('listOption', formBuilder.array([]));
        this._tripForm.addControl('listQuestion', formBuilder.array([]));

        this._listStockForm = this.formBuilder.array([]);
    }

    newTripForm(trip?: Trip): FormGroup {
        if (trip) {
            trip.dateStart = new Date(trip.dateStart);
            this._tripForm.patchValue(trip, {onlySelf: true});
            if (trip.listOption) {
                trip.listOption.forEach(
                    option => this.listOptionForm.push(this.newOptionForm(option)));
            }
        }
        return this._tripForm;
    }

    newOptionForm(option?: Option): FormGroup {
        let optionForm = FormHelper.newOptionForm(this.formBuilder, option);

        if (option && option.stock) {
            let stockForm = this.listStockForm.controls.find(stockForm => stockForm.value.id === option.stock.id);
            if (!stockForm) {
                stockForm = this.newStockForm(option.stock);
                this.listStockForm.push(stockForm);
            }
            optionForm.setControl('stock', stockForm);
        }

        return optionForm;
    }

    newStockForm(stock?: Stock): FormGroup {
        return FormHelper.newStockForm(this.formBuilder, stock);
    }

    newQuestionForm(question?: Question): FormGroup {
        return FormHelper.newQuestionForm(this.formBuilder, question);
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

    get listQuestionForm(): FormArray {
        return this._tripForm.get('listQuestion') as FormArray;
    }

    get listStockForm(): FormArray {
        return this._listStockForm;
    }

    public isValid(): boolean {
        FormHelper.markAsTouched(this._tripForm);
        FormHelper.markAsTouched(this._listStockForm);
        return this._tripForm.valid;
    }
}
