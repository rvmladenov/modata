import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { APP_CONSTANTS } from '../shared/constants';
import { Task } from "./task.model";
import { ErrorService } from "../errors/error.service";
export var TaskService = (function () {
    function TaskService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.tasks = [];
    }
    TaskService.prototype.getTasks = function () {
        var _this = this;
        return this.http.get(APP_CONSTANTS.BACKEND_URL + '/tasks')
            .map(function (response) {
            var tasks = response.json().obj;
            var transformedTasks = [];
            for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                var task = tasks_1[_i];
                transformedTasks.push(new Task(task.pid, task.user, task.name, task.res, task.mem, task.time, task.command));
            }
            _this.tasks = transformedTasks;
            return transformedTasks;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    TaskService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TaskService.ctorParameters = [
        { type: Http, },
        { type: ErrorService, },
    ];
    return TaskService;
}());
//# sourceMappingURL=task.service.js.map