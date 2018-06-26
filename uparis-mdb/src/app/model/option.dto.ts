import {Price} from "./price.dto";
import {Stock} from "./stock.dto";

export class Option {
    id: string;

    idTrip: string;

    name: string;

    description: string;

    level: number;

    numOrder: number;

    priceFactor: Price;

    stock: Stock;
}
