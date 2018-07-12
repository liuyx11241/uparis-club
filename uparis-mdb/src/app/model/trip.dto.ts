import {Option} from "./option.dto";
import {Abstract} from "./abstract.dto";
import {Question} from "./question.dto";

export class Trip extends Abstract {

    idProduct: number;

    nameProduct: string;

    durationProduct: number;

    dateStart: any | string | Date;

    dateEnd: string;

    stock: number;

    price: number;

    priceVAT: number;

    currency: string;

    urlCodeQR: string;

    listOption: Option[];

    listQuestion: Question[];
}
