import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "./product.dto";
import {Trip} from "./trip.dto";
import {Itinerary} from "./itinerary.dto";
import {Schedule} from "./schedule.dto";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [Product, Trip, Itinerary, Schedule],
    exports: [Product, Trip, Itinerary, Schedule]
})
export class ModelModule {
}
