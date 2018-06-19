import {Option} from "./option.dto";

export class Trip {
    id: string;

    idProduct: string;

    nameProduct: string;

    dateStart: string;

    dateEnd: string;

    stock: number;

    price: number;

    priceCurrency: string;

    mappedListOption: Map<number, Option[]>;
}
