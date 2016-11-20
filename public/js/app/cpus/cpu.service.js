import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { APP_CONSTANTS } from '../shared/constants';
import { Cpu } from "./cpu.model";
import { ErrorService } from "../errors/error.service";
export var CpuService = (function () {
    function CpuService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.cpus = [];
    }
    CpuService.prototype.getCpus = function () {
        var _this = this;
        return this.http.get(APP_CONSTANTS.BACKEND_URL + '/cpus')
            .map(function (response) {
            var cpus = response.json().obj;
            var transformedCpus = [];
            for (var _i = 0, cpus_1 = cpus; _i < cpus_1.length; _i++) {
                var cpu = cpus_1[_i];
                transformedCpus.push(new Cpu(cpu.id, cpu.percentUsage));
            }
            _this.cpus = transformedCpus;
            return transformedCpus;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    CpuService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CpuService.ctorParameters = [
        { type: Http, },
        { type: ErrorService, },
    ];
    return CpuService;
}());
//# sourceMappingURL=cpu.service.js.map