import { Pipe } from '@angular/core';
export var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (value, args) {
        if (!value || (value && value.length === 0)) {
            return value;
        }
        if (args[1] == undefined) {
            return value;
        }
        var bool = args[1];
        var propName = args[0];
        return value.map(function (data) { return data; }).sort(function (a, b) {
            if (a[propName] > b[propName]) {
                return (bool == true) ? 1 : -1;
            }
            if (a[propName] < b[propName]) {
                return (bool == true) ? -1 : 1;
            }
            // a must be equal to b
            return 0;
        });
    };
    SortByPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sortBy'
                },] },
    ];
    /** @nocollapse */
    SortByPipe.ctorParameters = [];
    return SortByPipe;
}());
//# sourceMappingURL=sort-by.filter.js.map