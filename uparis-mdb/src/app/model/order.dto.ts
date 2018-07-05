import {Person} from "./person.dto";
import {Option} from "./option.dto";
import {Trip} from "./trip.dto";

export class Order {
    id: number;

    reference: string;

    status: string;

    trip: Trip;

    amount: number;

    participant: Person;

    payer: Person;

    listOption: Option[];
}
