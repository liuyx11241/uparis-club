import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {TripFormHelper} from "./trip-form.helper";
import {FormHelper} from "../util/form-helper.util";

@Component({
    selector: 'uparis-question-table',
    templateUrl: './question-table.component.html',
    styles: []
})
export class QuestionTableComponent implements OnInit {

    private _listQuestionForm: FormArray;

    private _formHelper: TripFormHelper;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {

    }

    @Input()
    set formHelper(value: TripFormHelper) {
        this._formHelper = value;
    }

    @Input()
    set listQuestionForm(value: FormArray) {
        this._listQuestionForm = value;
    }

    add(event: Event): void {
        this._listQuestionForm.push(this._formHelper.newQuestionForm());
    }

    delete(question: FormGroup): void {
        let index = this._listQuestionForm.controls.indexOf(question);
        this._listQuestionForm.removeAt(index);
    }
}
