import {Itinerary} from "./itinerary.dto";
import {Trip} from "./trip.dto";
import {Multimedia} from "./multimedia.dto";
import {Abstract} from "./abstract.dto";

export class Product extends Abstract {
    name: string;
    alias: string;
    shortDescription: string;
    longDescription: string;
    duration: number;

    listTrip: Trip[] = [];
    listItinerary: Itinerary[] = [];
    listMultimedia: Multimedia[] = [];
}
