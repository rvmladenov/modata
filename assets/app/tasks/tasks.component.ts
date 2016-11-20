import { Component, HostListener, Input, ElementRef, Renderer } from "@angular/core";

import { Task } from "./task.model";

@Component({
    selector: '[app-task]',
    templateUrl: './tasks.component.html',
    styles: ['./tasks.scss']
})
export class TasksComponent {
    @Input() task: Task;

    constructor(private el: ElementRef, private renderer: Renderer) { }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('deepskyblue');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}