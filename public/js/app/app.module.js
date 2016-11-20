import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { TaskModule } from "./tasks/task.module";
import { TaskService } from "./tasks/task.service";
import { CpuModule } from "./cpus/cpu.module";
import { CpusComponent } from "./cpus/cpus.component";
import { CpuService } from "./cpus/cpu.service";
import { SocketService } from './socket/socket.service';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        AuthenticationComponent,
                        HeaderComponent,
                        CpusComponent,
                        ErrorComponent
                    ],
                    imports: [
                        BrowserModule,
                        routing,
                        HttpModule,
                        TaskModule,
                        CpuModule
                    ],
                    providers: [
                        AuthService,
                        ErrorService,
                        TaskService,
                        CpuService,
                        SocketService],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map