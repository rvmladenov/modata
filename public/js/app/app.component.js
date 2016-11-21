import { Component } from '@angular/core';
import { SocketService } from './socket/socket.service';
export var AppComponent = (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html',
                    styleUrls: ['./styles.scss'] },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: SocketService, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map