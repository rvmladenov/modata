import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from "./tasks.component";
import { TaskListComponent } from "./task-list.component";
import { TaskService } from "./task.service";

import { SearchTasksPipe } from './search.filter.pipe';
import { SortByPipe } from './sort-by.filter';

@NgModule({
    declarations: [TasksComponent, TaskListComponent, SearchTasksPipe, SortByPipe],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [TaskService]
})
export class TaskModule {}