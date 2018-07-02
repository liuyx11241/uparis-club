import {formatDate} from "@angular/common";
import {Injectable} from "@angular/core";

@Injectable()
export class DateFormatter {

    public format(date: Date): string {
        return formatDate(date, 'yyyy/MM/dd', 'zh-cn');
    }

    public parse(date: string): Date {
        return new Date(Date.parse(date));
    }
}
