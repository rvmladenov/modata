import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchTasksPipe implements PipeTransform {
    transform(value: any, args: string): any {

        if(!value || (value && value.length === 0) || (!args)) {
            return value;
        }

        let resultArray = [];
        for(let item of value) {
            if(item.name.match('^.*' + args + '.*$')) {
                resultArray.push(item);
            }
        }

        return resultArray;
    }
}