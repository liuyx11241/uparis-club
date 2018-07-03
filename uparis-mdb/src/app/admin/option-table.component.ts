import {Component, Input} from '@angular/core';
import {TripFormHelper} from "./trip-form.helper";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-option-table',
    templateUrl: './option-table.component.html',
    styles: []
})
export class OptionTableComponent {

    private _mappedListOption: Map<number, FormGroup[]>

    private _formHelper: TripFormHelper;

    private _listStockForm: FormArray;

    private _listOptionForm: FormArray;

    constructor() {
        this._mappedListOption = new Map<number, FormGroup[]>();
    }


    @Input()
    set listStockForm(value: FormArray) {
        this._listStockForm = value;
    }

    @Input()
    set listOptionForm(value: FormArray) {
        this._listOptionForm = value;
    }

    @Input()
    set formHelper(value: TripFormHelper) {
        this._formHelper = value;
    }

    private getOptionLevels() {
        return Array.from(this._mappedListOption.keys());
    }

    addLevel(): void {
        this._mappedListOption.set(this._mappedListOption.size + 1, []);
    }

    addOption(): void {
        let level = this._mappedListOption.size;
        let optionForm = this._formHelper.newOptionForm();
        optionForm.patchValue({level: level});

        this._mappedListOption.get(level).push(optionForm);
        this._listOptionForm.push(optionForm);
    }

    onLevelChange(newLevel: number, option: FormGroup) {
        let listOption = this._mappedListOption.get(option.value.level);
        listOption.splice(listOption.indexOf(option), 1);
        this._mappedListOption.get(newLevel).push(option);
    }

    delete(option: FormGroup): void {
        let listOption = this._mappedListOption.get(option.value.level);
        listOption.splice(listOption.indexOf(option), 1);
        this._listOptionForm.removeAt(this._listOptionForm.controls.indexOf(option))
    }
}
