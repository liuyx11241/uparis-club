import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../model/schedule.dto";

@Component({
    selector: 'uparis-schedule-form',
    templateUrl: './schedule-form.component.html',
})
export class ScheduleFormComponent implements OnInit {
    private _listSchedule: Schedule[];

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
    set listSchedule(value: Schedule[]) {
        this._listSchedule = value;
    }
}
