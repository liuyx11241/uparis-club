import {Schedule} from "./schedule.dto";

export class Itinerary {
    id: number;
    dayStart: number;
    duration: number;
    movement: string;
    idProduct: number;

    listSchedule: Schedule[];
}