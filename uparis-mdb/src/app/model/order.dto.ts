import {Person} from "./person.dto";

export class Order {

    participant: Person;

    idTrip: string;

    payer: Person;

    mappedOption: Map;
}
