import { Component, Input } from "@angular/core";

import { Cpu } from "./cpu.model";
import { CpuService } from "./cpu.service";

@Component({
    selector: 'app-cpu',
    templateUrl: './cpus.component.html',
    styles: ['./cpus.scss']
})
export class CpusComponent {
    @Input() cpu: Cpu;

    constructor(private cpuService: CpuService) {}

    belongsToUser() {
        //TODO: Uncomment this in case the authentication module is implemented
        // return localStorage.getItem('userId') == this.message.userId;
    }
}