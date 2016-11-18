import { Routes, RouterModule } from "@angular/router";

import { TaskListComponent } from "./tasks/task-list.component";

const APP_ROUTES: Routes = [
    { path: '', component: TaskListComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);