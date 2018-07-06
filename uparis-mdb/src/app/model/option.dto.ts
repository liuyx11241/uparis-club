import {Stock} from "./stock.dto";
import {Abstract} from "./abstract.dto";

export class Option extends Abstract {

    idTrip: number;

    name: string;

    description: string;

    level: number;

    numOrder: number;

    price: number;

    priceVAT: number;

    stock: Stock;
}
