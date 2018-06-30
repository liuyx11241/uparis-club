import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Itinerary} from "../model/itinerary.dto";
import {Schedule} from "../model/schedule.dto";
import {FormHelper} from "./form-helper";
import {NgForm} from "@angular/forms";
import {DeleteService} from "../service/http-delete.service";
import {SnackBar} from "./snack-bar";

@Component({
    selector: 'uparis-schedule-table',
    templateUrl: './schedule-table.component.html',
})
export class ScheduleTableComponent implements OnInit {

    @ViewChild('scheduleForm') scheduleForm: NgForm;

    private _itinerary: Itinerary;

    private _formHelper: FormHelper;

    private _availableTime: string[];

    constructor(private snackBar: SnackBar,
                private service: DeleteService) {
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

    @Input()
    set formHelper(value: FormHelper) {
        this._formHelper = value;
        this._formHelper.register(`schedule${this._itinerary.dayStart}`, this.scheduleForm);
    }

    reorder(): void {
        let numOrder = 0;
        this._itinerary.listSchedule.forEach(value => {
            value.numOrder = numOrder;
            numOrder++;
        });
    }

    add(): void {
        if (!this._itinerary.listSchedule)
            this._itinerary.listSchedule = [];
        let schedule = new Schedule();
        schedule.numOrder = 1 + this._itinerary.listSchedule.length;
        schedule.idItinerary = this._itinerary.id;
        this._itinerary.listSchedule.push(schedule);
        this.reorder();
    }

    delete(schedule: Schedule): void {
        let index = this._itinerary.listSchedule.indexOf(schedule);
        this._itinerary.listSchedule.splice(index, 1);
        this.reorder();
    }
}
