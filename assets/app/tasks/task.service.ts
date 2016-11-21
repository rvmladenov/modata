import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { APP_CONSTANTS } from '../shared/constants';

import { Task } from "./task.model";

import { ErrorService } from "../errors/error.service";

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    constructor(private http: Http, private errorService: ErrorService) {}
    
    getTasks() {
        return this.http.get(APP_CONSTANTS.BACKEND_URL+'/tasks')
            .map((response: Response) => {
                const tasks = response.json().obj;
                let transformedTasks: Task[] = [];

                for (let task of tasks) {
                    transformedTasks.push(new Task(
                        task.pid,task.user,task.name,task.res,task.mem,task.time,task.command)
                    );
                }
                this.tasks = transformedTasks;
                return transformedTasks;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }
}