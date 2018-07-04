import {Person} from "./person.dto";
import {Option} from "./option.dto";

export class Order {

    id: number;

    reference: string;

    idTrip: number;

    dateStartTrip: string;

    idProductTrip: string;

    nameProductTrip: string;

    amount: number;

    participant: Person;

    payer: Person;

    listOption: Option[];
}
