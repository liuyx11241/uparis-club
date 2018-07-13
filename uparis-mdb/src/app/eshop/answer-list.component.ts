import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../model/answer.dto";

@Component({
    selector: 'uparis-answer-list',
    templateUrl: './answer-list.component.html',
    styles: []
})
export class AnswerListComponent implements OnInit {

    private _listAnswer: Answer[];

    private _styleBlue: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set listAnswer(value: Answer[]) {
        this._listAnswer = value;
    }

    @Input()
    set styleBlue(value: boolean) {
        this._styleBlue = value;
    }
}
