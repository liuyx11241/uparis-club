import {Itinerary} from "./itinerary.dto";
import {Trip} from "./trip.dto";
import {Multimedia} from "./multimedia.dto";
import {Abstract} from "./abstract.dto";
import {Tag} from "./tag.dto";

export class Product extends Abstract {
    name: string;
    alias: string;
    status: string;
    shortDescription: string;
    longDescription: string;
    duration: number;

    listTrip: Trip[] = [];
    listItinerary: Itinerary[] = [];
    listMultimedia: Multimedia[] = [];
    listTag: Tag[] = [];
}
