import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../model/schedule.dto";

@Component({
    selector: 'uparis-schedule-form',
    templateUrl: './schedule-form.component.html',
    styles: []
})
export class ScheduleFormComponent implements OnInit {
    private _listSchedule: Schedule[];

    constructor() {
    }

    ngOnInit() {

    }

    @Input()
    set listSchedule(value: Schedule[]) {
        this._listSchedule = value;
    }
}
