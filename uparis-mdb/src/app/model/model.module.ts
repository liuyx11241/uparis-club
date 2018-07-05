import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenderPipe} from "./gender.pipe";
import {StatusPipe} from "./status.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GenderPipe,
        StatusPipe
    ],
    exports: [
        GenderPipe,
        StatusPipe
    ]

})
export class ModelModule {
}
