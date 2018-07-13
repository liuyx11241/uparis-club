import {Component, Input} from '@angular/core';
import {TripFormHelper} from "./trip-form.helper";
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";
import {Stock} from "../model/stock.dto";
import {MatSelectChange} from "@angular/material";

@Component({
    selector: 'uparis-option-table',
    templateUrl: './option-table.component.html',
    styles: []
})
export class OptionTableComponent {

    private _mappedListOption: Map<number, AbstractControl[]>

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
        this._listOptionForm.controls.forEach(optionForm => {
            if (!this._mappedListOption.has(optionForm.value.level)) {
                this._mappedListOption.set(optionForm.value.level, []);
            }
            this._mappedListOption.get(optionForm.value.level).push(optionForm);
        });
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
        optionForm.patchValue({level: level, numOrder: this._listOptionForm.controls.length});

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

    compareStock: ((s1: Stock, s2: Stock) => boolean) | null = this.compareStockById;

    compareStockById(s1: Stock, s2: Stock): boolean {
        return s1 && s2 && s1.id === s2.id;
    }

    onStockChange($event: MatSelectChange, option: FormGroup) {
        option.setControl('stock', $event.value);
    }
}
