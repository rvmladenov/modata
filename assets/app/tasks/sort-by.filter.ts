import { Pipe, PipeTransform } from '@angular/core';

import { Task } from './task.model';

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(value: any, args: any[]): any {

        if(!value || (value && value.length === 0)) {
            return value;
        }

        if(args[1] == undefined) {
            return value;
        }

        let bool = args[1];
        let propName = args[0];
        return value.map((data)=>data).sort(function (a, b) {
            if (a[propName] > b[propName]) {
            return (bool == true) ? 1 : -1;
            }
            if (a[propName] < b[propName]) {
            return (bool == true) ? -1 : 1;
            }
            // a must be equal to b
            return 0;
        });
    }
}