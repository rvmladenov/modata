import { Component, OnInit } from "@angular/core";

import { Task } from "./task.model";
import { TaskService } from "./task.service";
import { SocketService } from '../socket/socket.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
    tasks: Task[];
    searchValue = "";
    byId: boolean = undefined;
    byName: boolean = undefined;

    constructor(private taskService: TaskService, private socketService: SocketService) {}

    ngOnInit() {
        /**TODO: Implement a better way instead of subscribing to 2 different places */
        this.taskService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                }
            );

        this.socketService.tasks
            .subscribe(
                (data) => {
                    this.tasks = data.tasks.concat(this.tasks);
                }
            );
    }

    filterByID() {
        this.byId = !this.byId;
        this.byName = undefined;
    }
    
    filterByName() {
        this.byName = !this.byName;
        this.byId = undefined; 
    }
}