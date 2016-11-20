import { Pipe } from '@angular/core';
export var SearchTasksPipe = (function () {
    function SearchTasksPipe() {
    }
    SearchTasksPipe.prototype.transform = function (value, args) {
        if (!value || (value && value.length === 0) || (!args)) {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item.name.match('^.*' + args + '.*$')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    SearchTasksPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'search'
                },] },
    ];
    /** @nocollapse */
    SearchTasksPipe.ctorParameters = [];
    return SearchTasksPipe;
}());
//# sourceMappingURL=search.filter.pipe.js.map