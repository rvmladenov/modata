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

@NgModule({
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
    providers: [AuthService, ErrorService, TaskService, CpuService],
    bootstrap: [AppComponent]
})
export class AppModule {

}