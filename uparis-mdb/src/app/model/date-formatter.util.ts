import {formatDate} from "@angular/common";

export class DateFormatter {
    public static format(date: Date): string {
        return formatDate(date, 'yyyy/MM/dd', 'zh-cn');
    }

    public static parse(date: string): Date {
        return new Date(Date.parse(date));
    }
}
