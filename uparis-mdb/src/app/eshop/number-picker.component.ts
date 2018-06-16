import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'uparis-number-picker',
    templateUrl: './number-picker.component.html',
    styles: []
})
export class NumberPickerComponent implements OnInit {

    private _min$: number = 0;

    private _max$: number;

    // @Input("step")
    // step$: number;

    // @Input("inputDisabled")
    // inputDisabled$: boolean = true;

    @Output("onChange")
    onChange$: EventEmitter<number> = new EventEmitter<number>();

    value$: number = 0;

    constructor() {
    }

    ngOnInit() {
    }


    get min$(): number {
        return this._min$;
    }

    @Input("min")
    set min$(value: number) {
        this._min$ = value;
        this.onValueChange(this.value$)
    }

    get max$(): number {
        return this._max$;
    }

    @Input("max")
    set max$(value: number) {
        this._max$ = value;
        this.onValueChange(this.value$)
    }

    private onValueChange(newValue: number): void {
        this.value$ = newValue;
        if (this._min$ && this.value$ < this._min$) {
            this.value$ = this._min$;
        }

        if (this._max$ && this.value$ > this._max$) {
            this.value$ = this._max$;
        }

        this.onChange$.emit(this.value$);
    }

    minusValue(): void {
        this.onValueChange(this.value$ - 1)
    }

    addValue(): void {
        this.onValueChange(this.value$ + 1)
    }
}