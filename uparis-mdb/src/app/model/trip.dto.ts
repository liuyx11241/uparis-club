import {Itinerary} from "./itinerary.dto";

export class Trip {
    id: string;
    idProduct: string;
    dateStart: string;

    dateEnd: string;

    stock: number;

    listItinerary: Itinerary[];
}
