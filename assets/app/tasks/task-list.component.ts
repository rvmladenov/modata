import { Component, OnInit } from "@angular/core";

import { Task } from "./task.model";
import { TaskService } from "./task.service";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
    tasks: Task[];

    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.taskService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                }
            );
    }
}