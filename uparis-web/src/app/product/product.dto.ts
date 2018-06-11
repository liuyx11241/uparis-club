import {Itinerary} from "../itinerary/itinerary.dto";

export class Product {
    id: number;
    name: string;
    alias: string
    shortDescription: string;
    longDescription: string;
    duration: number;

    listItinerary: Itinerary[];
}
