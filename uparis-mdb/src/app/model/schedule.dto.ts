import {Abstract} from "./abstract.dto";

export class Schedule extends Abstract {
    idItinerary: number;
    time: string;
    numOrder: number;
    activity: string;
}
