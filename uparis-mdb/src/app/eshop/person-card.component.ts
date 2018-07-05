import {Component, Input} from '@angular/core';
import {Person} from "../model/person.dto";

@Component({
    selector: 'uparis-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

    private _person: Person;

    constructor() {

    }

    @Input()
    set person(value: Person) {
        this._person = value;
    }

    get styleMale(): boolean {
        return 'MALE' === this._person.gender;
    }
}
