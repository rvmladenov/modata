import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CpuService } from "./cpu.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [CpuService]
})
export class CpuModule {}