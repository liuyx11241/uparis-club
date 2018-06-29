import {Itinerary} from "./itinerary.dto";
import {Trip} from "./trip.dto";
import {Multimedia} from "./multimedia.dto";

export class Product {
    id: number;
    name: string;
    alias: string
    shortDescription: string;
    longDescription: string;
    duration: number;

    listTrip: Trip[] = [];
    listItinerary: Itinerary[] = [];
    listMultimedia: Multimedia[] = [];
}
