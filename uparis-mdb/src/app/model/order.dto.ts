import {Person} from "./person.dto";
import {Option} from "./option.dto";

export class Order {

    participant: Person;

    idTrip: string;

    payer: Person;

    listOption: Option[];
}
