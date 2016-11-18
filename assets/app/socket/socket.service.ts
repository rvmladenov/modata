import { Injectable, EventEmitter, OnInit } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { APP_CONSTANTS } from '../shared/constants';

import { Task } from "../tasks/task.model";
import { Cpu } from "../cpus/cpu.model";

import { ErrorService } from "../errors/error.service";

declare var io:any; /* the socket io - declare it here so it would not crash the app */

@Injectable()
export class SocketService {
    socket: any;

    private tasks: Task[] = [];
    newTasks = new EventEmitter<Task>();
    cpus = new EventEmitter<Cpu>();

    constructor(private errorService: ErrorService) {
        this.socket = io(APP_CONSTANTS.BACKEND_URL);
    }

    ngOnInit() {
        //TODO: Sample emit socket.io - delete it if not using it
        // this.socket.emit('new-task', { my: 'data' });

        this.socket.on("new-tasks", function(data) {
            this.newTasks.emit(data);
            console.log("New tasks: " + data);
        });

        this.socket.on("cpus", function(data) {
            this.cpus.emit(data);
            console.log("CPUs: " + data);
        });
    
        //TODO: Is there going to be more staff in here ?
    }

    shutdownServer() {
        this.socket.emit('shutdown', {shutdown: true});
    }
}