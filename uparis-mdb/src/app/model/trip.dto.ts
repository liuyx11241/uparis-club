import {Option} from "./option.dto";

export class Trip {
    id: number;

    idProduct: number;

    nameProduct: string;

    durationProduct: number;

    dateStart: string;

    dateEnd: string;

    stock: number;

    price: number;

    priceVAT: number;

    currency: string;

    listOption: Option[];
}
