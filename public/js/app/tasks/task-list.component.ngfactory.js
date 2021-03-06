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
import * as import3 from './task-list.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './task.service';
import * as import9 from '../socket/socket.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/forms/src/directives/default_value_accessor';
import * as import13 from '@angular/forms/src/directives/ng_model';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/common/src/directives/ng_class';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from './search.filter.pipe';
import * as import18 from './sort-by.filter';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/forms/src/directives/control_value_accessor';
import * as import24 from '@angular/forms/src/directives/ng_control';
import * as import25 from './tasks.component';
import * as import26 from './tasks.component.ngfactory';
var renderType_TaskListComponent_Host = null;
var _View_TaskListComponent_Host0 = (function (_super) {
    __extends(_View_TaskListComponent_Host0, _super);
    function _View_TaskListComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskListComponent_Host0, renderType_TaskListComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-task-list', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TaskListComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TaskListComponent_0_4 = new import3.TaskListComponent(this.parentInjector.get(import8.TaskService), this.parentInjector.get(import9.SocketService));
        this._appEl_0.initComponent(this._TaskListComponent_0_4, [], compView_0);
        compView_0.create(this._TaskListComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TaskListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TaskListComponent) && (0 === requestNodeIndex))) {
            return this._TaskListComponent_0_4;
        }
        return notFoundResult;
    };
    _View_TaskListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TaskListComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskListComponent_Host0;
}(import1.AppView));
function viewFactory_TaskListComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TaskListComponent_Host === null)) {
        (renderType_TaskListComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_TaskListComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var TaskListComponentNgFactory = new import11.ComponentFactory('app-task-list', viewFactory_TaskListComponent_Host0, import3.TaskListComponent);
var styles_TaskListComponent = [];
var renderType_TaskListComponent = null;
var _View_TaskListComponent0 = (function (_super) {
    __extends(_View_TaskListComponent0, _super);
    function _View_TaskListComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskListComponent0, renderType_TaskListComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'col-md-8 col-md-offset-2');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'container-fluid');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-md-12');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'label', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'form-label');
        this.renderer.setElementAttribute(this._el_6, 'for', 'searchValue');
        this.renderer.setElementAttribute(this._el_6, 'id', 'searchValueLabel');
        this._text_7 = this.renderer.createText(this._el_6, 'Search by Name:', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_4, 'input', null);
        this.renderer.setElementAttribute(this._el_9, 'id', 'searchValue');
        this.renderer.setElementAttribute(this._el_9, 'type', 'text');
        this._DefaultValueAccessor_9_3 = new import12.DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_9));
        this._NG_VALUE_ACCESSOR_9_4 = [this._DefaultValueAccessor_9_3];
        this._NgModel_9_5 = new import13.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_9_4);
        this._NgControl_9_6 = this._NgModel_9_5;
        this._NgControlStatus_9_7 = new import14.NgControlStatus(this._NgControl_9_6);
        this._text_10 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        \n        ', null);
        this._el_12 = this.renderer.createElement(this._el_2, 'table', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'table table-bordered table-sm data-table');
        this._text_13 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'thead', null);
        this._text_15 = this.renderer.createText(this._el_14, '\n            ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'tr', null);
        this._text_17 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'th', null);
        this._el_19 = this.renderer.createElement(this._el_18, 'a', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'btn btn-xs glyphicon glyphicon-resize-vertical');
        this.renderer.setElementAttribute(this._el_19, 'role', 'button');
        this._NgClass_19_3 = new import15.NgClass(this.parentInjector.get(import20.IterableDiffers), this.parentInjector.get(import21.KeyValueDiffers), new import19.ElementRef(this._el_19), this.renderer);
        this._text_20 = this.renderer.createText(this._el_18, 'PID', null);
        this._text_21 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_22 = this.renderer.createElement(this._el_16, 'th', null);
        this._el_23 = this.renderer.createElement(this._el_22, 'a', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'btn btn-xs glyphicon glyphicon-resize-vertical');
        this.renderer.setElementAttribute(this._el_23, 'role', 'button');
        this._NgClass_23_3 = new import15.NgClass(this.parentInjector.get(import20.IterableDiffers), this.parentInjector.get(import21.KeyValueDiffers), new import19.ElementRef(this._el_23), this.renderer);
        this._text_24 = this.renderer.createText(this._el_22, 'User', null);
        this._text_25 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_26 = this.renderer.createElement(this._el_16, 'th', null);
        this._text_27 = this.renderer.createText(this._el_26, 'Name', null);
        this._text_28 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_29 = this.renderer.createElement(this._el_16, 'th', null);
        this._text_30 = this.renderer.createText(this._el_29, 'RES', null);
        this._text_31 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_32 = this.renderer.createElement(this._el_16, 'th', null);
        this._text_33 = this.renderer.createText(this._el_32, 'MEM%', null);
        this._text_34 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_35 = this.renderer.createElement(this._el_16, 'th', null);
        this._text_36 = this.renderer.createText(this._el_35, 'TIME+', null);
        this._text_37 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_38 = this.renderer.createElement(this._el_16, 'th', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'col-md-3');
        this._text_39 = this.renderer.createText(this._el_38, 'Command', null);
        this._text_40 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_41 = this.renderer.createText(this._el_14, '\n        ', null);
        this._text_42 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_43 = this.renderer.createElement(this._el_12, 'tbody', null);
        this._text_44 = this.renderer.createText(this._el_43, '\n            ', null);
        this._anchor_45 = this.renderer.createTemplateAnchor(this._el_43, null);
        this._appEl_45 = new import2.AppElement(45, 43, this, this._anchor_45);
        this._TemplateRef_45_5 = new import22.TemplateRef_(this._appEl_45, viewFactory_TaskListComponent1);
        this._NgFor_45_6 = new import16.NgFor(this._appEl_45.vcRef, this._TemplateRef_45_5, this.parentInjector.get(import20.IterableDiffers), this.ref);
        this._text_46 = this.renderer.createText(this._el_43, '\n        ', null);
        this._text_47 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_48 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_49 = this.renderer.createText(this._el_0, '\n', null);
        this._text_50 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_51 = this.renderer.createElement(parentRenderNode, 'footer', null);
        this._text_52 = this.renderer.createText(this._el_51, '\n  ', null);
        this._el_53 = this.renderer.createElement(this._el_51, 'button', null);
        this._text_54 = this.renderer.createText(this._el_53, 'Terminate', null);
        this._text_55 = this.renderer.createText(this._el_51, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_9, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_9_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_9, 'input', this.eventHandler(this._handle_input_9_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_9, 'blur', this.eventHandler(this._handle_blur_9_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_9_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_9_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        this._expr_11 = import7.UNINITIALIZED;
        this._map_0 = import4.pureProxy1(function (p0) {
            return { white: p0 };
        });
        this._expr_12 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_23, 'click', this.eventHandler(this._handle_click_23_0.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
        this._map_1 = import4.pureProxy1(function (p0) {
            return { white: p0 };
        });
        this._expr_15 = import7.UNINITIALIZED;
        this._pipe_search_0 = new import17.SearchTasksPipe();
        this._pipe_search_0_0 = import4.pureProxy2(this._pipe_search_0.transform.bind(this._pipe_search_0));
        this._arr_0 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._pipe_sortBy_1 = new import18.SortByPipe();
        this._pipe_sortBy_1_0 = import4.pureProxy2(this._pipe_sortBy_1.transform.bind(this._pipe_sortBy_1));
        this._arr_1 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._pipe_sortBy_1_1 = import4.pureProxy2(this._pipe_sortBy_1.transform.bind(this._pipe_sortBy_1));
        this._expr_16 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._anchor_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [subscription_0]);
        return null;
    };
    _View_TaskListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.DefaultValueAccessor) && (9 === requestNodeIndex))) {
            return this._DefaultValueAccessor_9_3;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_9_4;
        }
        if (((token === import13.NgModel) && (9 === requestNodeIndex))) {
            return this._NgModel_9_5;
        }
        if (((token === import24.NgControl) && (9 === requestNodeIndex))) {
            return this._NgControl_9_6;
        }
        if (((token === import14.NgControlStatus) && (9 === requestNodeIndex))) {
            return this._NgControlStatus_9_7;
        }
        if (((token === import15.NgClass) && (19 === requestNodeIndex))) {
            return this._NgClass_19_3;
        }
        if (((token === import15.NgClass) && (23 === requestNodeIndex))) {
            return this._NgClass_23_3;
        }
        if (((token === import22.TemplateRef) && (45 === requestNodeIndex))) {
            return this._TemplateRef_45_5;
        }
        if (((token === import16.NgFor) && (45 === requestNodeIndex))) {
            return this._NgFor_45_6;
        }
        return notFoundResult;
    };
    _View_TaskListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var valUnwrapper = new import7.ValueUnwrapper();
        changes = null;
        var currVal_3 = this.context.searchValue;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgModel_9_5.model = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._NgModel_9_5.ngOnChanges(changes);
        }
        var currVal_11 = 'btn btn-xs glyphicon glyphicon-resize-vertical';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._NgClass_19_3.klass = currVal_11;
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._map_0((this.context.byId != null));
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._NgClass_19_3.ngClass = currVal_12;
            this._expr_12 = currVal_12;
        }
        if (!throwOnChange) {
            this._NgClass_19_3.ngDoCheck();
        }
        var currVal_14 = 'btn btn-xs glyphicon glyphicon-resize-vertical';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._NgClass_23_3.klass = currVal_14;
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._map_1((this.context.byName != null));
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._NgClass_23_3.ngClass = currVal_15;
            this._expr_15 = currVal_15;
        }
        if (!throwOnChange) {
            this._NgClass_23_3.ngDoCheck();
        }
        changes = null;
        valUnwrapper.reset();
        var currVal_16 = valUnwrapper.unwrap(import4.castByValue(this._pipe_sortBy_1_1, this._pipe_sortBy_1.transform)(valUnwrapper.unwrap(import4.castByValue(this._pipe_sortBy_1_0, this._pipe_sortBy_1.transform)(valUnwrapper.unwrap(import4.castByValue(this._pipe_search_0_0, this._pipe_search_0.transform)(this.context.tasks, this.context.searchValue)), this._arr_0('pid', this.context.byId))), this._arr_1('name', this.context.byName)));
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_16, currVal_16))) {
            this._NgFor_45_6.ngForOf = currVal_16;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_16, currVal_16);
            this._expr_16 = currVal_16;
        }
        if ((changes !== null)) {
            this._NgFor_45_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_45_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = this._NgControlStatus_9_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_9, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatus_9_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_9, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_9_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_9, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_9_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_9, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_9_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_9, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_9_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_9, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskListComponent0.prototype.destroyInternal = function () {
        this._NgModel_9_5.ngOnDestroy();
    };
    _View_TaskListComponent0.prototype._handle_ngModelChange_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.searchValue = $event) !== false);
        return (true && pd_0);
    };
    _View_TaskListComponent0.prototype._handle_input_9_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_9_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_TaskListComponent0.prototype._handle_blur_9_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_9_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_TaskListComponent0.prototype._handle_click_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.filterByID() !== false);
        return (true && pd_0);
    };
    _View_TaskListComponent0.prototype._handle_click_23_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.filterByName() !== false);
        return (true && pd_0);
    };
    return _View_TaskListComponent0;
}(import1.AppView));
export function viewFactory_TaskListComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TaskListComponent === null)) {
        (renderType_TaskListComponent = viewUtils.createRenderComponentType('C:/github/modata/assets/app/tasks/task-list.component.html', 0, import10.ViewEncapsulation.None, styles_TaskListComponent, {}));
    }
    return new _View_TaskListComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_TaskListComponent1 = (function (_super) {
    __extends(_View_TaskListComponent1, _super);
    function _View_TaskListComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskListComponent1, renderType_TaskListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this.renderer.setElementAttribute(this._el_0, 'app-task', '');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import26.viewFactory_TasksComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TasksComponent_0_4 = new import25.TasksComponent(new import19.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._TasksComponent_0_4, [], compView_0);
        compView_0.create(this._TasksComponent_0_4, [], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'mouseenter', this.eventHandler(this._handle_mouseenter_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'mouseleave', this.eventHandler(this._handle_mouseleave_0_1.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.TasksComponent) && (0 === requestNodeIndex))) {
            return this._TasksComponent_0_4;
        }
        return notFoundResult;
    };
    _View_TaskListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.context.$implicit;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._TasksComponent_0_4.task = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskListComponent1.prototype._handle_mouseenter_0_0 = function ($event) {
        this._appEl_0.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._TasksComponent_0_4.onMouseEnter() !== false);
        return (true && pd_0);
    };
    _View_TaskListComponent1.prototype._handle_mouseleave_0_1 = function ($event) {
        this._appEl_0.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._TasksComponent_0_4.onMouseLeave() !== false);
        return (true && pd_0);
    };
    return _View_TaskListComponent1;
}(import1.AppView));
function viewFactory_TaskListComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskListComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=task-list.component.ngfactory.js.map