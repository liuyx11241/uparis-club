import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../model/trip.dto";
import {FormGroup} from "@angular/forms";
import {Question} from "../model/question.dto";

@Component({
    selector: 'uparis-question-selector',
    templateUrl: './question-selector.component.html',
})
export class QuestionSelectorComponent implements OnInit {
    private _trip: Trip;

    private _listQuestion: Question[];

    private _questionForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set trip(value: Trip) {
        this._trip = value;
    }

    @Input()
    set listQuestion(value: Question[]) {
        this._listQuestion = value;
    }

    @Input()
    set questionForm(value: FormGroup) {
        this._questionForm = value;
    }

    enumValues(line: string): string[] {
        return line.split(';');
    }
}
