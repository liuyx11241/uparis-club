import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'uparis-number-picker',
    templateUrl: './number-picker.component.html',
    styles: []
})
export class NumberPickerComponent {

    private _min: number = 0;

    private _max: number;

    // @Input("step")
    // step$: number;

    // @Input("inputDisabled")
    // inputDisabled$: boolean = true;

    @Output("onChange")
    onChange$: EventEmitter<number> = new EventEmitter<number>();

    private _value: number = 0;

    constructor() {
    }

    @Input("min")
    set min(value: number) {
        this._min = value;
        this.onValueChange(this._value)
    }

    @Input("max")
    set max(value: number) {
        this._max = value;
        this.onValueChange(this._value)
    }

    @Input("initValue")
    set init(value: number) {
        this.onValueChange(value);
    }

    private onValueChange(newValue: number, event: boolean = true): void {
        this._value = newValue;
        if (this._min && this._value < this._min) {
            this._value = this._min;
        }

        if (this._max && this._value > this._max) {
            this._value = this._max;
        }

        if (event) {
            this.onChange$.emit(this._value);
        }
    }

    minusValue(): void {
        this.onValueChange(this._value - 1)
    }

    addValue(): void {
        this.onValueChange(this._value + 1)
    }
}