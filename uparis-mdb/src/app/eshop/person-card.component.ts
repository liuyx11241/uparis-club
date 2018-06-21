import {Component, Input} from '@angular/core';
import {Person} from "../model/person.dto";
import {Option} from "../model/option.dto";

@Component({
    selector: 'uparis-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

    private _person: Person;

    private _listOption: Option[];

    constructor() {

    }

    @Input()
    set person(value: Person) {
        this._person = value;
    }

    @Input()
    set listOption(value: Option[]) {
        this._listOption = value;
    }


    get styleMale(): boolean {
        return 'MALE' === this._person.gender;
    }
}
