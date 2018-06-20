import {Component, Input} from '@angular/core';
import {Option} from "../model/option.dto";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-option-selector',
    templateUrl: './option-selector.component.html',
    styles: []
})
export class OptionSelectorComponent {

    private _mappedListOption: any;

    private _selectedOption: Map<string, Option>;

    private _optionSelectorForm: FormGroup;

    constructor() {
        this._selectedOption = new Map<string, Option>();
    }

    selectOption(option: Option): void {
        this._selectedOption.set(option.level.toString(), option);
    }

    selectedOption(level: string): Option {
        return this._selectedOption.get(level);
    }


    get mappedListOption(): any {
        return this._mappedListOption;
    }

    @Input()
    set mappedListOption(value: any) {
        this._mappedListOption = value;
        this._selectedOption.clear();
    }

    @Input()
    set optionSelectorForm(value: FormGroup) {
        this._optionSelectorForm = value;
    }

    private getKeys() {
        return Array.from(Object.keys(this._mappedListOption));
    }
}
