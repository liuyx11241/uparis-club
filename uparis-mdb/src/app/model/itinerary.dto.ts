import {Schedule} from "./schedule.dto";

export class Itinerary {
    id: string;
    dayStart: number;
    dayEnd: number;
    movement: string;
    idProduct: string;
    idTrip: string;

    listSchedule: Schedule[];
}