import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Option} from "../model/option.dto";
import {Stock} from "../model/stock.dto";
import {ProductFormHelper} from "./product-form.helper";
import {NgForm} from "@angular/forms";
import {TripFormHelper} from "./trip-form.helper";

@Component({
    selector: 'uparis-option-table',
    templateUrl: './option-table.component.html',
    styles: []
})
export class OptionTableComponent implements OnInit {

    @ViewChild('optionForm') optionForm: NgForm;

    private _listOption: Option[];

    private _mappedListOption: object;

    private _listStock: Stock[];

    private _formHelper: TripFormHelper;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set listOption(listOption: Option[]) {
        this._listOption = listOption;
        this._mappedListOption = {};
        this._listOption.forEach(option => {
            if (!this._mappedListOption[option.level]) {
                this._mappedListOption[option.level] = [];
            }
            this._mappedListOption[option.level].push(option);
        });
    }

    @Input()
    set listStock(value: Stock[]) {
        this._listStock = value;
    }

    @Input()
    set formHelper(value: TripFormHelper) {
        this._formHelper = value;
    }

    private getOptionLevels() {
        return Array.from(Object.keys(this._mappedListOption));
    }

    addLevel(): void {
        let level = Object.keys(this._mappedListOption).length;
        this._mappedListOption[level + 1] = [];
    }

    addOption(): void {
        let level = Object.keys(this._mappedListOption).length;
        let option = new Option();
        option.level = level;
        this._mappedListOption[level].push(option);
        this._listOption.push(option);
    }

    onLevelChange(newLevel: number, option: Option) {
        let listOption = this._mappedListOption[option.level];
        listOption.splice(listOption.indexOf(option), 1);
        this._mappedListOption[newLevel].push(option);
        option.level = newLevel;
    }

    delete(option: Option): void {
        let listOption = this._mappedListOption[option.level];
        listOption.splice(listOption.indexOf(option), 1);

        this._listOption.splice(this._listOption.indexOf(option), 1);
    }
}
