import {Option} from "./option.dto";
import {Abstract} from "./abstract.dto";

export class Trip extends Abstract {

    idProduct: number;

    nameProduct: string;

    durationProduct: number;

    dateStart: any | string | Date;

    dateEnd: any | string | Date;

    stock: number;

    price: number;

    priceVAT: number;

    currency: string;

    urlCodeQR: string;

    listOption: Option[];
}
