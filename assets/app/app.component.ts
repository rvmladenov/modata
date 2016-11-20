import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { APP_CONSTANTS } from './shared/constants';

import { TaskService } from "./tasks/task.service";
import { SocketService } from './socket/socket.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./styles.scss'],
    encapsulation: ViewEncapsulation.None /* Need to remove the encapsulation to include a global scss */
})
export class AppComponent {

    socket: any;

    constructor(public socketService: SocketService) {}

    // ngOnInit() {
    //     /* Initializing the socket io(connecting to server) */
    //     this.socket = io(APP_CONSTANTS.BACKEND_URL);
    // }

    testSocket() {
        console.log('Emiting data');
        this.socket.emit('new-task', { my: 'data' });
    }
}