import {Schedule} from "./schedule.dto";
import {Abstract} from "./abstract.dto";

export class Itinerary extends Abstract {
    dayStart: number;
    duration: number;
    movement: string;
    idProduct: number;

    listSchedule: Schedule[];
}