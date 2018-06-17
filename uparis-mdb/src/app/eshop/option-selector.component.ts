import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Option} from "../model/option.dto";

@Component({
    selector: 'uparis-option-selector',
    templateUrl: './option-selector.component.html',
    styles: []
})
export class OptionSelectorComponent implements OnInit {

    @Input()
    placeholder$: string;

    private _listOption$: Option[];

    @Output()
    readonly selection = new EventEmitter<Option>();

    private _selectedOption$: Option;

    constructor() {
    }

    ngOnInit() {

    }

    get listOption$(): Option[] {
        return this._listOption$;
    }

    @Input()
    set listOption$(value: Option[]) {
        this._listOption$ = value;
        this._selectedOption$ = null;
    }

    get selectedOption$(): Option {
        return this._selectedOption$;
    }

    set selectedOption$(value: Option) {
        this._selectedOption$ = value;
        this.selection.emit(value);
    }
}
