import {Price} from "./price.dto";

export class Trip {
    id: number;

    idProduct: number;

    nameProduct: string;

    durationProduct: number;

    dateStart: string;

    dateEnd: string;

    stock: number;

    mainPrice: Price;

    mappedListOption: object;//Map<number, Option[]>;

    mappedPrice: object;//Map<string, Price>
}
