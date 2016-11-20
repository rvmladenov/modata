import { Component, HostListener, Input, ElementRef, Renderer } from "@angular/core";
export var TasksComponent = (function () {
    function TasksComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    TasksComponent.prototype.onMouseEnter = function () {
        this.highlight('deepskyblue');
    };
    TasksComponent.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    TasksComponent.prototype.highlight = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    };
    TasksComponent.decorators = [
        { type: Component, args: [{
                    selector: '[app-task]',
                    templateUrl: './tasks.component.html',
                    styles: ['./tasks.scss']
                },] },
    ];
    /** @nocollapse */
    TasksComponent.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    TasksComponent.propDecorators = {
        'task': [{ type: Input },],
        'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
    };
    return TasksComponent;
}());
//# sourceMappingURL=tasks.component.js.map