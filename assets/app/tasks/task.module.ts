import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from "./tasks.component";
import { TaskListComponent } from "./task-list.component";
import { TaskService } from "./task.service";

@NgModule({
    declarations: [TasksComponent, TaskListComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [TaskService]
})
export class TaskModule {}