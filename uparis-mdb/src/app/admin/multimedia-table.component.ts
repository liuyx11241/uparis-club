import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product.dto";
import {Multimedia} from "../model/multimedia.dto";

@Component({
    selector: 'uparis-multimedia-table',
    templateUrl: './multimedia-table.component.html',
    styles: []
})
export class MultimediaTableComponent implements OnInit {

    private _product: Product;
    private _disabled: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set product(value: Product) {
        this._product = value;
    }

    @Input()
    set disabled(value: boolean) {
        this._disabled = value;
    }

    add(type: string): void {
        let multimedia = new Multimedia();
        multimedia.idProduct = this._product.id;
        multimedia.type = type.toUpperCase();
        this._product.listMultimedia.push(multimedia);
    }
}
