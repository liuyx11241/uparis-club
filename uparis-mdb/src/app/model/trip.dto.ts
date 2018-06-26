import {Price} from "./price.dto";

export class Trip {
    id: string;

    idProduct: string;

    nameProduct: string;

    dateStart: string;

    dateEnd: string;

    stock: number;

    mainPrice: Price;

    mappedListOption: object;//Map<number, Option[]>;

    mappedPrice: object;//Map<string, Price>
}
