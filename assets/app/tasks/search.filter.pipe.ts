import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchTasksPipe implements PipeTransform {
    transform(value: any, args: any[]): any {

        if(!value || (value && value.length === 0) || (!args[0])) {
            return value;
        }

        let resultArray = [];
        for(let item of value) {
            if(item.name.match('^.*' + args[0] + '.*$')) {
                resultArray.push(item);
            }
        }

        return resultArray;
    }
}