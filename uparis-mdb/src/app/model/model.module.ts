import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenderPipe} from "./gender.pipe";
import {StatusPipe} from "./status.pipe";
import { MoneyPipe } from './money.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GenderPipe,
        StatusPipe,
        MoneyPipe
    ],
    exports: [
        GenderPipe,
        StatusPipe,
        MoneyPipe
    ]

})
export class ModelModule {
}
