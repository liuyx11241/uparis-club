import {Person} from "./person.dto";
import {Option} from "./option.dto";
import {Trip} from "./trip.dto";
import {Abstract} from "./abstract.dto";
import {Answer} from "./answer.dto";

export class Order extends Abstract {
    reference: string;

    status: string;

    trip: Trip;

    amount: number;

    participant: Person;

    payer: Person;

    paymentMode: string;

    paymentToken: string;

    listOption: Option[];

    listAnswer: Answer[];
}
