import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'gender'
})
export class GenderPipe implements PipeTransform {
    transform(value: string, args?: any): string {
        if (value === 'MALE')
            return '男';
        else if (value === 'FEMALE')
            return '女';
        else return '';
    }
}
