import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        switch (value) {
            case 'INIT':
                return '初始化';
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
            case 'ACTIVE':
                return '上线';
            case 'INACTIVE':
                return '草稿';
        }

        return null;
    }

}
