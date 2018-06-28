import {Component, Input, OnInit} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";
import {Schedule} from "../model/schedule.dto";

@Component({
    selector: 'uparis-schedule-form',
    templateUrl: './schedule-form.component.html',
})
export class ScheduleFormComponent implements OnInit {
    private _itinerary: Itinerary;

    private _availableTime: string[];

    constructor() {
    }


    ngOnInit() {
        this._availableTime = [];
        for (var hour = 0; hour < 24; hour++) {
            this._availableTime.push((hour < 10 ? '0' : '') + hour + ':' + '00');
            this._availableTime.push((hour < 10 ? '0' : '') + hour + ':' + '30');
        }
    }

    @Input()
    set itinerary(value: Itinerary) {
        this._itinerary = value;
    }

    add(): void {
        let schedule = new Schedule();
        schedule.numOrder = 1 + this._itinerary.listSchedule.length;
        schedule.idItinerary = this._itinerary.id;
        this._itinerary.listSchedule.push(schedule);
    }
}
