import {Price} from "./price.dto";
import {Option} from "./option.dto";

export class Trip {
    id: number;

    idProduct: number;

    nameProduct: string;

    durationProduct: number;

    dateStart: string;

    dateEnd: string;

    stock: number;

    mainPrice: Price;

    listPrice: Price[];

    listOption: Option[];
}
