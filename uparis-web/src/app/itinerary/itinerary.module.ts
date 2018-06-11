import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItineraryItemListComponent} from './itinerary-item-list.component';
import {ItineraryService} from "./itinerary.service";
import {AppMaterialModule} from "../app-material.module";

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
    ],
    providers: [ItineraryService],
    declarations: [ItineraryItemListComponent,],
    exports: [ItineraryItemListComponent,]
})
export class ItineraryModule {
}
