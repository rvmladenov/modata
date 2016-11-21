/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './tasks.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
var renderType_TasksComponent_Host = null;
var _View_TasksComponent_Host0 = (function (_super) {
    __extends(_View_TasksComponent_Host0, _super);
    function _View_TasksComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TasksComponent_Host0, renderType_TasksComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TasksComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('div', rootSelector, null);
        this.renderer.setElementAttribute(this._el_0, 'app-task', '');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TasksComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TasksComponent_0_4 = new import3.TasksComponent(new import8.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._TasksComponent_0_4, [], compView_0);
        compView_0.create(this._TasksComponent_0_4, this.projectableNodes, null);
        var disposable_0 = this.renderer.listen(this._el_0, 'mouseenter', this.eventHandler(this._handle_mouseenter_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'mouseleave', this.eventHandler(this._handle_mouseleave_0_1.bind(this)));
        this.init([].concat([this._el_0]), [this._el_0], [
            disposable_0,
            disposable_1
        ], []);
        return this._appEl_0;
    };
    _View_TasksComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TasksComponent) && (0 === requestNodeIndex))) {
            return this._TasksComponent_0_4;
        }
        return notFoundResult;
    };
    _View_TasksComponent_Host0.prototype._handle_mouseenter_0_0 = function ($event) {
        this._appEl_0.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._TasksComponent_0_4.onMouseEnter() !== false);
        return (true && pd_0);
    };
    _View_TasksComponent_Host0.prototype._handle_mouseleave_0_1 = function ($event) {
        this._appEl_0.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._TasksComponent_0_4.onMouseLeave() !== false);
        return (true && pd_0);
    };
    return _View_TasksComponent_Host0;
}(import1.AppView));
function viewFactory_TasksComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TasksComponent_Host === null)) {
        (renderType_TasksComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_TasksComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var TasksComponentNgFactory = new import10.ComponentFactory('[app-task]', viewFactory_TasksComponent_Host0, import3.TasksComponent);
var styles_TasksComponent = ['./tasks.scss'];
var renderType_TasksComponent = null;
var _View_TasksComponent0 = (function (_super) {
    __extends(_View_TasksComponent0, _super);
    function _View_TasksComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TasksComponent0, renderType_TasksComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TasksComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'td', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'td', null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'td', null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'td', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_12 = this.renderer.createElement(parentRenderNode, 'td', null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'td', null);
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_18 = this.renderer.createElement(parentRenderNode, 'td', null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19
        ], [], []);
        return null;
    };
    _View_TasksComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.task.pid, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.task.user, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_4, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.task.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_7, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.task.res, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_10, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.task.mem, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_13, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, '', this.context.task.time, '');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_16, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import4.interpolate(1, '', this.context.task.command, '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_19, currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TasksComponent0;
}(import1.AppView));
export function viewFactory_TasksComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TasksComponent === null)) {
        (renderType_TasksComponent = viewUtils.createRenderComponentType('C:/github/modata/assets/app/tasks/tasks.component.html', 0, import9.ViewEncapsulation.Emulated, styles_TasksComponent, {}));
    }
    return new _View_TasksComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=tasks.component.ngfactory.js.map