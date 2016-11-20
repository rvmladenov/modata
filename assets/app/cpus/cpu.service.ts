import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { APP_CONSTANTS } from '../shared/constants';

import { Cpu } from "./cpu.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class CpuService {
    private cpus: Cpu[] = [];

    constructor(private http: Http, private errorService: ErrorService) {}
    
    getCpus() {
        return this.http.get(APP_CONSTANTS.BACKEND_URL+'/cpus')
            .map((response: Response) => {
                const cpus = response.json().obj;
                let transformedCpus: Cpu[] = [];

                for (let cpu of cpus) {
                    transformedCpus.push(new Cpu(cpu.id, cpu.percentUsage));
                }
                this.cpus = transformedCpus;
                return transformedCpus;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}