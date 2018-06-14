import {Itinerary} from "./itinerary.dto";
import {Trip} from "./trip.dto";
import {Picture} from "./picture.dto";

export class Product {
    id: string;
    name: string;
    alias: string
    shortDescription: string;
    longDescription: string;
    duration: number;

    listTrip: Trip[];
    listItinerary: Itinerary[];
    listPicture: Picture[];
}
