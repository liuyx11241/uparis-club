import {Option} from "./option";

export class Trip {
    id: string;

    idProduct: string;

    dateStart: string;

    dateEnd: string;

    stock: number;

    price: number;

    priceCurrency: string;

    mappedListOption: { key: number, listOption: Option[] };
}
