import {Trip} from "./trip.dto";

export class Product {
    id: number;
    name: string;
    alias: string
    shortDescription: string;
    longDescription: string;
    duration: number;
    listTrip: Trip[];
}
