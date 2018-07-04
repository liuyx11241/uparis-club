import {Option} from "./option.dto";

export class Trip {
    id: number;

    idProduct: number;

    nameProduct: string;

    durationProduct: number;

    dateStart: any | string | Date;

    dateEnd: any | string | Date;

    stock: number;

    price: number;

    priceVAT: number;

    currency: string;

    listOption: Option[];
}
