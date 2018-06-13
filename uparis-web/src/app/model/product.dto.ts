import {Itinerary} from "./itinerary.dto";
import {Trip} from "./trip.dto";
import {Image} from "./image.dto";

export class Product {
    id: string;
    name: string;
    alias: string
    shortDescription: string;
    longDescription: string;
    duration: number;

    listTrip: Trip[];
    listItinerary: Itinerary[];
    listImage: Image[] = [
        new Image("1", "https://source.unsplash.com/random/900x600", "10 seconds between slides...", 'This carousel uses customized default values.'),
        new Image("2", "https://source.unsplash.com/random/900x600", "No keyboard...", 'This carousel uses customized default values.'),
        new Image("3", "https://source.unsplash.com/random/900x600", "And no wrap after last slide.", 'This carousel uses customized default values.'),
    ];
}
