import {Stock} from "./stock.dto";

export class Option {
    id: number;

    idTrip: number;

    name: string;

    description: string;

    level: number;

    numOrder: number;

    price: number;

    priceVAT: number;

    currencyTrip: string;

    stock: Stock;
}
