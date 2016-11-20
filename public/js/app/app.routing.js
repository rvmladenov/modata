import { RouterModule } from "@angular/router";
import { TaskListComponent } from "./tasks/task-list.component";
var APP_ROUTES = [
    { path: '', component: TaskListComponent, pathMatch: 'full' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map