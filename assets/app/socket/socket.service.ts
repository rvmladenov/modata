import { Injectable, EventEmitter } from "@angular/core";
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
    
    /**
     * You need to subscribe to these emitters in case you want to get the latest data
     */
    tasks: EventEmitter<Task> = new EventEmitter<Task>()
    cpus: EventEmitter<Cpu> = new EventEmitter<Cpu>();

    constructor(private errorService: ErrorService) {
        this.socket = io(APP_CONSTANTS.BACKEND_URL);

        this.socket.on("new-tasks", (data)=> {
            this.tasks.emit(data);
            console.log("Receiving new Task data");
        });

        this.socket.on("cpus", (data)=> {
            this.cpus.emit(data);
            console.log("Receiving new CPU data");
        });
    }

    shutdownServer() {
        this.socket.emit('shutdown', {shutdown: true});
    }
}