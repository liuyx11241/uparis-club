import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Option} from "../model/option.dto";

@Component({
    selector: 'uparis-option-selector',
    templateUrl: './option-selector.component.html',
    styles: []
})
export class OptionSelectorComponent implements OnInit {


    private _mappedListOption$: any;

    private _selectedOption$: Map<string, Option>;

    @Output("selectedOption")
    selectedOptionEmitter = new EventEmitter<Map<string, Option>>();

    constructor() {
        this._selectedOption$ = new Map<string, Option>();
    }

    ngOnInit() {

    }

    selectOption(option: Option): void {
        this._selectedOption$.set(option.level.toString(), option);
        this.selectedOptionEmitter.emit(this._selectedOption$);
    }

    selectedOption(level: string): Option {
        return this._selectedOption$.get(level);
    }


    get mappedListOption$(): any {
        return this._mappedListOption$;
    }

    @Input()
    set mappedListOption$(value: any) {
        this._mappedListOption$ = value;
        this._selectedOption$.clear();
    }

    private getKeys() {
        return Array.from(Object.keys(this._mappedListOption$));
    }
}
