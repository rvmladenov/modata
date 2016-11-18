import { Component, Input } from "@angular/core";

import { Task } from "./task.model";
import { TaskService } from "./task.service";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styles: ['./tasks.scss']
})
export class TasksComponent {
    @Input() task: Task;

    constructor(private taskService: TaskService) {}

    belongsToUser() {
        //TODO: Uncomment this in case the authentication module is implemented
        // return localStorage.getItem('userId') == this.message.userId;
    }
}