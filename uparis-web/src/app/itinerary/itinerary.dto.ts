export class Itinerary {
    id: string;
    dayStart: number;
    dayEnd: number;
    movement: string;
    idProduct: string;
    idTrip: string;

    listSchedule: Schedule[];
}

export class Schedule {
    id: string;
    idItinerary: string;
    time: string;
    numOrder: number;
    activity: string;
}
