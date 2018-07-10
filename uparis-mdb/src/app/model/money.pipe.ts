import {Pipe, PipeTransform} from '@angular/core';
import {formatNumber, getCurrencySymbol} from "@angular/common";

@Pipe({
    name: 'money'
})
export class MoneyPipe implements PipeTransform {
    transform(value: number, currencyCode: string, displayPlus = false, locale = 'zh-cn'): string {
        const symbol = getCurrencySymbol(currencyCode, "narrow");
        let result = formatNumber(value, locale, '1.2-2') + symbol;
        if (displayPlus && value > 0) {
            return '+' + result;
        }
        return result;
    }
}
