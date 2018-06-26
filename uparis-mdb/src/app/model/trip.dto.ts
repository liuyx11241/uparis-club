import {Option} from "./option.dto";
import {Price} from "./price.dto";

export class Trip {
    id: string;

    idProduct: string;

    nameProduct: string;

    dateStart: string;

    dateEnd: string;

    stock: number;

    mainPrice: Price;

    mappedListOption: Map<number, Option[]>;

    mappedPrice: Map<string, Price>
}
