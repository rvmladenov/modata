import { Component, ViewEncapsulation } from '@angular/core';
import { SocketService } from './socket/socket.service';
export var AppComponent = (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
    }
    // ngOnInit() {
    //     /* Initializing the socket io(connecting to server) */
    //     this.socket = io(APP_CONSTANTS.BACKEND_URL);
    // }
    AppComponent.prototype.testSocket = function () {
        console.log('Emiting data');
        this.socket.emit('new-task', { my: 'data' });
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html',
                    styleUrls: ['./styles.scss'],
                    encapsulation: ViewEncapsulation.None /* Need to remove the encapsulation to include a global scss */
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: SocketService, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map