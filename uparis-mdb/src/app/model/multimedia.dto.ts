import {Abstract} from "./abstract.dto";

export class Multimedia extends Abstract {
    idProduct: number;
    srcUrl: string;
    type: string;
    altText: string;
    title: string;
    description: string;
}
