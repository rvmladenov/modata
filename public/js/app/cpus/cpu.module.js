import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CpuService } from "./cpu.service";
export var CpuModule = (function () {
    function CpuModule() {
    }
    CpuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    providers: [CpuService]
                },] },
    ];
    /** @nocollapse */
    CpuModule.ctorParameters = [];
    return CpuModule;
}());
//# sourceMappingURL=cpu.module.js.map