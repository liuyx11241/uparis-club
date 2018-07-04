import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        switch (value) {
            case 'INIT':
                return '初建';
            case 'PENDING':
                return '等待付款';
            case 'REFUND':
                return '退款';
            case 'SUCCESS':
                return '成功';
            case 'FAILURE':
                return '失败';
            case 'WAITING_LIST':
                return '候补';
        }

        return null;
    }

}
