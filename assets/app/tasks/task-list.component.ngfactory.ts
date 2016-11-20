/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './task-list.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
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
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/ng_control';
import * as import23 from './tasks.component';
import * as import24 from './tasks.component.ngfactory';
var renderType_TaskListComponent_Host:import0.RenderComponentType = (null as any);
class _View_TaskListComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TaskListComponent_0_4:import3.TaskListComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TaskListComponent_Host0,renderType_TaskListComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-task-list',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TaskListComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TaskListComponent_0_4 = new import3.TaskListComponent(this.parentInjector.get(import8.TaskService),this.parentInjector.get(import9.SocketService));
    this._appEl_0.initComponent(this._TaskListComponent_0_4,[],compView_0);
    compView_0.create(this._TaskListComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.TaskListComponent) && (0 === requestNodeIndex))) { return this._TaskListComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._TaskListComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TaskListComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TaskListComponent_Host === (null as any))) { (renderType_TaskListComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_TaskListComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const TaskListComponentNgFactory:import11.ComponentFactory<import3.TaskListComponent> = new import11.ComponentFactory<import3.TaskListComponent>('app-task-list',viewFactory_TaskListComponent_Host0,import3.TaskListComponent);
const styles_TaskListComponent:any[] = [];
var renderType_TaskListComponent:import0.RenderComponentType = (null as any);
class _View_TaskListComponent0 extends import1.AppView<import3.TaskListComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _DefaultValueAccessor_7_3:import12.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_7_4:any[];
  _NgModel_7_5:import13.NgModel;
  _NgControl_7_6:any;
  _NgControlStatus_7_7:import14.NgControlStatus;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _el_16:any;
  _NgClass_16_3:import15.NgClass;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _el_20:any;
  _NgClass_20_3:import15.NgClass;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _anchor_42:any;
  /*private*/ _appEl_42:import2.AppElement;
  _TemplateRef_42_5:any;
  _NgFor_42_6:import16.NgFor;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _el_50:any;
  _text_51:any;
  _text_52:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_11:any;
  _map_0:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_14:any;
  _map_1:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TaskListComponent0,renderType_TaskListComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','col-md-8 col-md-offset-2');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','container-fluid');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'label',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','form-label');
    this.renderer.setElementAttribute(this._el_4,'for','searchValue');
    this._text_5 = this.renderer.createText(this._el_4,'Search by Name:',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_2,'input',(null as any));
    this.renderer.setElementAttribute(this._el_7,'id','searchValue');
    this.renderer.setElementAttribute(this._el_7,'type','text');
    this._DefaultValueAccessor_7_3 = new import12.DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_7));
    this._NG_VALUE_ACCESSOR_7_4 = [this._DefaultValueAccessor_7_3];
    this._NgModel_7_5 = new import13.NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_7_4);
    this._NgControl_7_6 = this._NgModel_7_5;
    this._NgControlStatus_7_7 = new import14.NgControlStatus(this._NgControl_7_6);
    this._text_8 = this.renderer.createText(this._el_2,'\n        \n        ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_2,'table',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','table table-bordered table-sm data-table');
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'thead',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n            ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'tr',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'th',(null as any));
    this._el_16 = this.renderer.createElement(this._el_15,'a',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','btn btn-xs glyphicon glyphicon-resize-vertical');
    this.renderer.setElementAttribute(this._el_16,'role','button');
    this._NgClass_16_3 = new import15.NgClass(this.parentInjector.get(import18.IterableDiffers),this.parentInjector.get(import19.KeyValueDiffers),new import17.ElementRef(this._el_16),this.renderer);
    this._text_17 = this.renderer.createText(this._el_15,'PID',(null as any));
    this._text_18 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_13,'th',(null as any));
    this._el_20 = this.renderer.createElement(this._el_19,'a',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','btn btn-xs glyphicon glyphicon-resize-vertical');
    this.renderer.setElementAttribute(this._el_20,'role','button');
    this._NgClass_20_3 = new import15.NgClass(this.parentInjector.get(import18.IterableDiffers),this.parentInjector.get(import19.KeyValueDiffers),new import17.ElementRef(this._el_20),this.renderer);
    this._text_21 = this.renderer.createText(this._el_19,'User',(null as any));
    this._text_22 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_13,'th',(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'Name',(null as any));
    this._text_25 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_13,'th',(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'RES',(null as any));
    this._text_28 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_13,'th',(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'MEM%',(null as any));
    this._text_31 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_32 = this.renderer.createElement(this._el_13,'th',(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'TIME+',(null as any));
    this._text_34 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_35 = this.renderer.createElement(this._el_13,'th',(null as any));
    this.renderer.setElementAttribute(this._el_35,'class','col-md-3');
    this._text_36 = this.renderer.createText(this._el_35,'Command',(null as any));
    this._text_37 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._text_38 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._text_39 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_40 = this.renderer.createElement(this._el_9,'tbody',(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'\n            ',(null as any));
    this._anchor_42 = this.renderer.createTemplateAnchor(this._el_40,(null as any));
    this._appEl_42 = new import2.AppElement(42,40,this,this._anchor_42);
    this._TemplateRef_42_5 = new import20.TemplateRef_(this._appEl_42,viewFactory_TaskListComponent1);
    this._NgFor_42_6 = new import16.NgFor(this._appEl_42.vcRef,this._TemplateRef_42_5,this.parentInjector.get(import18.IterableDiffers),this.ref);
    this._text_43 = this.renderer.createText(this._el_40,'\n        ',(null as any));
    this._text_44 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._text_45 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_46 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_47 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_48 = this.renderer.createElement(parentRenderNode,'footer',(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'\n  ',(null as any));
    this._el_50 = this.renderer.createElement(this._el_48,'button',(null as any));
    this._text_51 = this.renderer.createText(this._el_50,'Terminate',(null as any));
    this._text_52 = this.renderer.createText(this._el_48,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_7,'ngModelChange',this.eventHandler(this._handle_ngModelChange_7_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_7,'input',this.eventHandler(this._handle_input_7_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_7,'blur',this.eventHandler(this._handle_blur_7_2.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_7_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_7_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_16,'click',this.eventHandler(this._handle_click_16_0.bind(this)));
    this._expr_11 = import7.UNINITIALIZED;
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {white: p0};
    });
    this._expr_12 = import7.UNINITIALIZED;
    var disposable_4:Function = this.renderer.listen(this._el_20,'click',this.eventHandler(this._handle_click_20_0.bind(this)));
    this._expr_14 = import7.UNINITIALIZED;
    this._map_1 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {white: p0};
    });
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._el_20,
      this._text_21,
      this._text_22,
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
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._anchor_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._text_52
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.DefaultValueAccessor) && (7 === requestNodeIndex))) { return this._DefaultValueAccessor_7_3; }
    if (((token === import21.NG_VALUE_ACCESSOR) && (7 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_7_4; }
    if (((token === import13.NgModel) && (7 === requestNodeIndex))) { return this._NgModel_7_5; }
    if (((token === import22.NgControl) && (7 === requestNodeIndex))) { return this._NgControl_7_6; }
    if (((token === import14.NgControlStatus) && (7 === requestNodeIndex))) { return this._NgControlStatus_7_7; }
    if (((token === import15.NgClass) && (16 === requestNodeIndex))) { return this._NgClass_16_3; }
    if (((token === import15.NgClass) && (20 === requestNodeIndex))) { return this._NgClass_20_3; }
    if (((token === import20.TemplateRef) && (42 === requestNodeIndex))) { return this._TemplateRef_42_5; }
    if (((token === import16.NgFor) && (42 === requestNodeIndex))) { return this._NgFor_42_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_3:any = this.context.searchValue;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgModel_7_5.model = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._NgModel_7_5.ngOnChanges(changes); }
    const currVal_11:any = 'btn btn-xs glyphicon glyphicon-resize-vertical';
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._NgClass_16_3.klass = currVal_11;
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this._map_0((this.context.byId != (null as any)));
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._NgClass_16_3.ngClass = currVal_12;
      this._expr_12 = currVal_12;
    }
    if (!throwOnChange) { this._NgClass_16_3.ngDoCheck(); }
    const currVal_14:any = 'btn btn-xs glyphicon glyphicon-resize-vertical';
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this._NgClass_20_3.klass = currVal_14;
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._map_1((this.context.byName != (null as any)));
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this._NgClass_20_3.ngClass = currVal_15;
      this._expr_15 = currVal_15;
    }
    if (!throwOnChange) { this._NgClass_20_3.ngDoCheck(); }
    changes = (null as any);
    const currVal_16:any = this.context.tasks;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._NgFor_42_6.ngForOf = currVal_16;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_16,currVal_16);
      this._expr_16 = currVal_16;
    }
    if ((changes !== (null as any))) { this._NgFor_42_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_42_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._NgControlStatus_7_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_7,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatus_7_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_7,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatus_7_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_7,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_7_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_7,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_7_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_7,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatus_7_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_7,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_7_5.ngOnDestroy();
  }
  private _handle_ngModelChange_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.searchValue = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_input_7_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_7_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_7_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_7_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_click_16_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.filterByID()) !== false);
    return (true && pd_0);
  }
  private _handle_click_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.filterByName()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_TaskListComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.TaskListComponent> {
  if ((renderType_TaskListComponent === (null as any))) { (renderType_TaskListComponent = viewUtils.createRenderComponentType('C:/github/modata/assets/app/tasks/task-list.component.html',0,import10.ViewEncapsulation.None,styles_TaskListComponent,{})); }
  return new _View_TaskListComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_TaskListComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TasksComponent_0_4:import23.TasksComponent;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TaskListComponent1,renderType_TaskListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'tr',(null as any));
    this.renderer.setElementAttribute(this._el_0,'app-task','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import24.viewFactory_TasksComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TasksComponent_0_4 = new import23.TasksComponent(new import17.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._TasksComponent_0_4,[],compView_0);
    compView_0.create(this._TasksComponent_0_4,[],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'mouseenter',this.eventHandler(this._handle_mouseenter_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'mouseleave',this.eventHandler(this._handle_mouseleave_0_1.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TasksComponent) && (0 === requestNodeIndex))) { return this._TasksComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.$implicit;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._TasksComponent_0_4.task = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mouseenter_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._TasksComponent_0_4.onMouseEnter()) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_0_1($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._TasksComponent_0_4.onMouseLeave()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TaskListComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TaskListComponent1(viewUtils,parentInjector,declarationEl);
}