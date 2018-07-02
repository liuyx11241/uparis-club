import {Component, Input} from '@angular/core';
import {Option} from "../model/option.dto";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-option-selector',
    templateUrl: './option-selector.component.html',
})
export class OptionSelectorComponent {

    private _mappedListOption: object;

    private _selectedOption: Map<string, Option>;

    private _optionForm: FormGroup;

    constructor() {
        this._selectedOption = new Map<string, Option>();
    }

    selectOption(option: Option): void {
        this._selectedOption.set(option.level.toString(), option);
    }

    selectedOption(level: string): Option {
        return this._selectedOption.get(level);
    }


    get mappedListOption(): object {
        return this._mappedListOption;
    }

    @Input()
    set listOption(value: Option[]) {
        this._selectedOption.clear();
        this._mappedListOption = {};
        value.forEach(option => {
            if (!this._mappedListOption[option.level]) {
                this._mappedListOption[option.level] = [];
            }
            this._mappedListOption[option.level].push(option);
        });
    }

    @Input()
    set optionForm(value: FormGroup) {
        this._optionForm = value;
    }

    private getKeys() {
        return Array.from(Object.keys(this._mappedListOption));
    }
}