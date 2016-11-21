import { Component } from "@angular/core";
import { TaskService } from "./task.service";
import { SocketService } from '../socket/socket.service';
export var TaskListComponent = (function () {
    function TaskListComponent(taskService, socketService) {
        this.taskService = taskService;
        this.socketService = socketService;
        this.searchValue = "";
        this.byId = undefined;
        this.byName = undefined;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**TODO: Implement a better way instead of subscribing to 2 different places */
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.socketService.tasks
            .subscribe(function (data) {
            _this.tasks = data.tasks.concat(_this.tasks);
        });
    };
    TaskListComponent.prototype.filterByID = function () {
        this.byId = !this.byId;
        this.byName = undefined;
    };
    TaskListComponent.prototype.filterByName = function () {
        this.byName = !this.byName;
        this.byId = undefined;
    };
    TaskListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-task-list',
                    templateUrl: './task-list.component.html'
                },] },
    ];
    /** @nocollapse */
    TaskListComponent.ctorParameters = [
        { type: TaskService, },
        { type: SocketService, },
    ];
    return TaskListComponent;
}());
//# sourceMappingURL=task-list.component.js.map