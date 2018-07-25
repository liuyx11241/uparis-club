import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'role'
})
export class RolePipe implements PipeTransform {
    transform(value: string, args?: any): string {
        if (value === 'ROLE_ADMIN')
            return '管理员';
        else if (value === 'ROLE_LEADER')
            return '领队';
        else if (value === 'ROLE_CLIENT')
            return '普通用户';
        else return '';
    }
}
