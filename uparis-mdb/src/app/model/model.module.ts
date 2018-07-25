import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenderPipe} from "./gender.pipe";
import {StatusPipe} from "./status.pipe";
import {MoneyPipe} from './money.pipe';
import {RolePipe} from "./role.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GenderPipe,
        StatusPipe,
        MoneyPipe,
        RolePipe,
    ],
    exports: [
        GenderPipe,
        StatusPipe,
        MoneyPipe,
        RolePipe,
    ]

})
export class ModelModule {
}
