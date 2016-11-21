import { Component, ViewEncapsulation } from '@angular/core';

import { APP_CONSTANTS } from './shared/constants';

import { TaskService } from "./tasks/task.service";
import { SocketService } from './socket/socket.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./styles.scss']})
export class AppComponent {
    constructor(public socketService: SocketService) {}
}