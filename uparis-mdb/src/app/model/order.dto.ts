import {Person} from "./person.dto";
import {Option} from "./option.dto";

export class Order {

    id: number;

    participant: Person;

    idTrip: number;

    payer: Person;

    listOption: Option[];
}
