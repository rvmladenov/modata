import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { APP_CONSTANTS } from '../shared/constants';
import { ErrorService } from "../errors/error.service";
export var SocketService = (function () {
    function SocketService(errorService) {
        var _this = this;
        this.errorService = errorService;
        /**
         * You need to subscribe to these emitters in case you want to get the latest data
         */
        this.tasks = new EventEmitter();
        this.cpus = new EventEmitter();
        this.socket = io(APP_CONSTANTS.BACKEND_URL);
        this.socket.on("new-tasks", function (data) {
            _this.tasks.emit(data);
            console.log("Receiving new Task data");
        });
        this.socket.on("cpus", function (data) {
            _this.cpus.emit(data);
            console.log("Receiving new CPU data");
        });
    }
    SocketService.prototype.shutdownServer = function () {
        this.socket.emit('shutdown', { shutdown: true });
    };
    SocketService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SocketService.ctorParameters = [
        { type: ErrorService, },
    ];
    return SocketService;
}());
//# sourceMappingURL=socket.service.js.map