import {Component, Input, OnInit} from '@angular/core';
import {ProductFormHelper} from "./product-form.helper";
import {DeleteService} from "../service/http-delete.service";
import {SnackBar} from "./snack-bar";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
    selector: 'uparis-schedule-table',
    templateUrl: './schedule-table.component.html',
})
export class ScheduleTableComponent implements OnInit {

    private _formHelper: ProductFormHelper;

    private _listSchedule: FormArray;

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
    set formHelper(value: ProductFormHelper) {
        this._formHelper = value;
    }

    @Input()
    set listSchedule(value: FormArray) {
        this._listSchedule = value;
    }

    reorder(): void {
        let order = 0;
        for (let schedule of this._listSchedule.controls) {
            schedule.patchValue({numOrder: order});
        }
    }

    add(): void {
        this._listSchedule.push(this._formHelper.newScheduleForm());
        this.reorder();
    }

    delete(schedule: FormGroup): void {
        let index = this._listSchedule.controls.indexOf(schedule);
        this._listSchedule.removeAt(index);
        this.reorder();
    }
}
