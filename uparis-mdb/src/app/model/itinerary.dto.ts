import {Schedule} from "./schedule.dto";

export class Itinerary {
    id: string;
    dayStart: number;
    duration: number;
    movement: string;
    idProduct: string;
    idTrip: string;

    listSchedule: Schedule[];
}