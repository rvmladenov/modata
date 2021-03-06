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
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/http/src/http_module';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from './tasks/task.module';
import * as import10 from './cpus/cpu.module';
import * as import11 from '@angular/common/src/localization';
import * as import12 from '@angular/core/src/application_init';
import * as import13 from '@angular/core/src/testability/testability';
import * as import14 from '@angular/core/src/application_ref';
import * as import15 from '@angular/core/src/linker/compiler';
import * as import16 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import17 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import18 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import19 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import20 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import21 from '@angular/core/src/linker/view_utils';
import * as import22 from '@angular/platform-browser/src/browser/title';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import28 from './errors/error.service';
import * as import29 from './tasks/task.service';
import * as import30 from './cpus/cpu.service';
import * as import31 from '@angular/common/src/location/location';
import * as import32 from '@angular/router/src/url_tree';
import * as import33 from '@angular/router/src/router_outlet_map';
import * as import34 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import35 from './auth/auth.service';
import * as import36 from './socket/socket.service';
import * as import38 from './tasks/task-list.component.ngfactory';
import * as import39 from './app.component.ngfactory';
import * as import40 from '@angular/core/src/application_tokens';
import * as import41 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import42 from '@angular/platform-browser/src/dom/events/key_events';
import * as import43 from '@angular/core/src/zone/ng_zone';
import * as import44 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import45 from '@angular/common/src/location/platform_location';
import * as import46 from '@angular/common/src/location/location_strategy';
import * as import47 from './tasks/task-list.component';
import * as import48 from '@angular/router/src/router';
import * as import49 from '@angular/core/src/console';
import * as import50 from '@angular/core/src/i18n/tokens';
import * as import51 from '@angular/core/src/error_handler';
import * as import52 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import53 from '@angular/platform-browser/src/dom/animation_driver';
import * as import54 from '@angular/core/src/render/api';
import * as import55 from '@angular/core/src/security';
import * as import56 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import57 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import58 from '@angular/http/src/interfaces';
import * as import59 from '@angular/http/src/http';
import * as import60 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import61 from '@angular/router/src/router_config_loader';
import * as import62 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import38.TaskListComponentNgFactory,
            import39.AppComponentNgFactory
        ], [import39.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_11", {
        get: function () {
            if ((this.__LOCALE_ID_11 == null)) {
                (this.__LOCALE_ID_11 = 'en-US');
            }
            return this.__LOCALE_ID_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_12", {
        get: function () {
            if ((this.__NgLocalization_12 == null)) {
                (this.__NgLocalization_12 = new import11.NgLocaleLocalization(this._LOCALE_ID_11));
            }
            return this.__NgLocalization_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_17", {
        get: function () {
            if ((this.__ApplicationRef_17 == null)) {
                (this.__ApplicationRef_17 = this._ApplicationRef__16);
            }
            return this.__ApplicationRef_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_18", {
        get: function () {
            if ((this.__Compiler_18 == null)) {
                (this.__Compiler_18 = new import15.Compiler());
            }
            return this.__Compiler_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_19", {
        get: function () {
            if ((this.__APP_ID_19 == null)) {
                (this.__APP_ID_19 = import40._appIdRandomProviderFactory());
            }
            return this.__APP_ID_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_20", {
        get: function () {
            if ((this.__DOCUMENT_20 == null)) {
                (this.__DOCUMENT_20 = import4._document());
            }
            return this.__DOCUMENT_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_21", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_21 = new import16.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_22", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_22 = [
                    new import41.DomEventsPlugin(),
                    new import42.KeyEventsPlugin(),
                    new import16.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_21)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_23", {
        get: function () {
            if ((this.__EventManager_23 == null)) {
                (this.__EventManager_23 = new import17.EventManager(this._EVENT_MANAGER_PLUGINS_22, this.parent.get(import43.NgZone)));
            }
            return this.__EventManager_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_24", {
        get: function () {
            if ((this.__DomSharedStylesHost_24 == null)) {
                (this.__DomSharedStylesHost_24 = new import18.DomSharedStylesHost(this._DOCUMENT_20));
            }
            return this.__DomSharedStylesHost_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_25", {
        get: function () {
            if ((this.__AnimationDriver_25 == null)) {
                (this.__AnimationDriver_25 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_26", {
        get: function () {
            if ((this.__DomRootRenderer_26 == null)) {
                (this.__DomRootRenderer_26 = new import19.DomRootRenderer_(this._DOCUMENT_20, this._EventManager_23, this._DomSharedStylesHost_24, this._AnimationDriver_25));
            }
            return this.__DomRootRenderer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = import44._createConditionalRootRenderer(this._DomRootRenderer_26, this.parent.get(import44.NgProbeToken, null)));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import20.DomSanitizerImpl());
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_30", {
        get: function () {
            if ((this.__ViewUtils_30 == null)) {
                (this.__ViewUtils_30 = new import21.ViewUtils(this._RootRenderer_27, this._APP_ID_19, this._Sanitizer_29));
            }
            return this.__ViewUtils_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_31", {
        get: function () {
            if ((this.__IterableDiffers_31 == null)) {
                (this.__IterableDiffers_31 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_32", {
        get: function () {
            if ((this.__KeyValueDiffers_32 == null)) {
                (this.__KeyValueDiffers_32 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_33", {
        get: function () {
            if ((this.__SharedStylesHost_33 == null)) {
                (this.__SharedStylesHost_33 = this._DomSharedStylesHost_24);
            }
            return this.__SharedStylesHost_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_34", {
        get: function () {
            if ((this.__Title_34 == null)) {
                (this.__Title_34 = new import22.Title());
            }
            return this.__Title_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_35", {
        get: function () {
            if ((this.__BrowserXhr_35 == null)) {
                (this.__BrowserXhr_35 = new import23.BrowserXhr());
            }
            return this.__BrowserXhr_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_36", {
        get: function () {
            if ((this.__ResponseOptions_36 == null)) {
                (this.__ResponseOptions_36 = new import24.BaseResponseOptions());
            }
            return this.__ResponseOptions_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_37", {
        get: function () {
            if ((this.__XSRFStrategy_37 == null)) {
                (this.__XSRFStrategy_37 = import6._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_38", {
        get: function () {
            if ((this.__XHRBackend_38 == null)) {
                (this.__XHRBackend_38 = new import25.XHRBackend(this._BrowserXhr_35, this._ResponseOptions_36, this._XSRFStrategy_37));
            }
            return this.__XHRBackend_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_39", {
        get: function () {
            if ((this.__RequestOptions_39 == null)) {
                (this.__RequestOptions_39 = new import26.BaseRequestOptions());
            }
            return this.__RequestOptions_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_40", {
        get: function () {
            if ((this.__Http_40 == null)) {
                (this.__Http_40 = import6.httpFactory(this._XHRBackend_38, this._RequestOptions_39));
            }
            return this.__Http_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_41", {
        get: function () {
            if ((this.__RadioControlRegistry_41 == null)) {
                (this.__RadioControlRegistry_41 = new import27.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ErrorService_42", {
        get: function () {
            if ((this.__ErrorService_42 == null)) {
                (this.__ErrorService_42 = new import28.ErrorService());
            }
            return this.__ErrorService_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TaskService_43", {
        get: function () {
            if ((this.__TaskService_43 == null)) {
                (this.__TaskService_43 = new import29.TaskService(this._Http_40, this._ErrorService_42));
            }
            return this.__TaskService_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_CpuService_44", {
        get: function () {
            if ((this.__CpuService_44 == null)) {
                (this.__CpuService_44 = new import30.CpuService(this._Http_40, this._ErrorService_42));
            }
            return this.__CpuService_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_45", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_45 == null)) {
                (this.__ROUTER_CONFIGURATION_45 = {});
            }
            return this.__ROUTER_CONFIGURATION_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_46", {
        get: function () {
            if ((this.__LocationStrategy_46 == null)) {
                (this.__LocationStrategy_46 = import5.provideLocationStrategy(this.parent.get(import45.PlatformLocation), this.parent.get(import46.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_45));
            }
            return this.__LocationStrategy_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_47", {
        get: function () {
            if ((this.__Location_47 == null)) {
                (this.__Location_47 = new import31.Location(this._LocationStrategy_46));
            }
            return this.__Location_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_48", {
        get: function () {
            if ((this.__UrlSerializer_48 == null)) {
                (this.__UrlSerializer_48 = new import32.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_49", {
        get: function () {
            if ((this.__RouterOutletMap_49 == null)) {
                (this.__RouterOutletMap_49 = new import33.RouterOutletMap());
            }
            return this.__RouterOutletMap_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_50", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_50 == null)) {
                (this.__NgModuleFactoryLoader_50 = new import34.SystemJsNgModuleLoader(this._Compiler_18, this.parent.get(import34.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_51", {
        get: function () {
            if ((this.__ROUTES_51 == null)) {
                (this.__ROUTES_51 = [[{
                            path: '',
                            component: import47.TaskListComponent,
                            pathMatch: 'full'
                        }
                    ]]);
            }
            return this.__ROUTES_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_52", {
        get: function () {
            if ((this.__Router_52 == null)) {
                (this.__Router_52 = import5.setupRouter(this._ApplicationRef_17, this._UrlSerializer_48, this._RouterOutletMap_49, this._Location_47, this, this._NgModuleFactoryLoader_50, this._Compiler_18, this._ROUTES_51, this._ROUTER_CONFIGURATION_45));
            }
            return this.__Router_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_53", {
        get: function () {
            if ((this.__ActivatedRoute_53 == null)) {
                (this.__ActivatedRoute_53 = import5.rootRoute(this._Router_52));
            }
            return this.__ActivatedRoute_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_54", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_54 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_54 = [import5.initialRouterNavigation(this._Router_52, this._ROUTER_CONFIGURATION_45)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthService_55", {
        get: function () {
            if ((this.__AuthService_55 == null)) {
                (this.__AuthService_55 = new import35.AuthService(this._Http_40, this._ErrorService_42));
            }
            return this.__AuthService_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SocketService_56", {
        get: function () {
            if ((this.__SocketService_56 == null)) {
                (this.__SocketService_56 = new import36.SocketService(this._ErrorService_42));
            }
            return this.__SocketService_56;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import48.Router, null));
        this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
        this._HttpModule_5 = new import6.HttpModule();
        this._InternalFormsSharedModule_6 = new import7.InternalFormsSharedModule();
        this._FormsModule_7 = new import8.FormsModule();
        this._TaskModule_8 = new import9.TaskModule();
        this._CpuModule_9 = new import10.CpuModule();
        this._AppModule_10 = new import1.AppModule();
        this._ErrorHandler_13 = import4.errorHandler();
        this._ApplicationInitStatus_14 = new import12.ApplicationInitStatus(this.parent.get(import12.APP_INITIALIZER, null));
        this._Testability_15 = new import13.Testability(this.parent.get(import43.NgZone));
        this._ApplicationRef__16 = new import14.ApplicationRef_(this.parent.get(import43.NgZone), this.parent.get(import49.Console), this, this._ErrorHandler_13, this, this._ApplicationInitStatus_14, this.parent.get(import13.TestabilityRegistry, null), this._Testability_15);
        return this._AppModule_10;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_3;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_4;
        }
        if ((token === import6.HttpModule)) {
            return this._HttpModule_5;
        }
        if ((token === import7.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_6;
        }
        if ((token === import8.FormsModule)) {
            return this._FormsModule_7;
        }
        if ((token === import9.TaskModule)) {
            return this._TaskModule_8;
        }
        if ((token === import10.CpuModule)) {
            return this._CpuModule_9;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_10;
        }
        if ((token === import50.LOCALE_ID)) {
            return this._LOCALE_ID_11;
        }
        if ((token === import11.NgLocalization)) {
            return this._NgLocalization_12;
        }
        if ((token === import51.ErrorHandler)) {
            return this._ErrorHandler_13;
        }
        if ((token === import12.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_14;
        }
        if ((token === import13.Testability)) {
            return this._Testability_15;
        }
        if ((token === import14.ApplicationRef_)) {
            return this._ApplicationRef__16;
        }
        if ((token === import14.ApplicationRef)) {
            return this._ApplicationRef_17;
        }
        if ((token === import15.Compiler)) {
            return this._Compiler_18;
        }
        if ((token === import40.APP_ID)) {
            return this._APP_ID_19;
        }
        if ((token === import52.DOCUMENT)) {
            return this._DOCUMENT_20;
        }
        if ((token === import16.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_21;
        }
        if ((token === import17.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_22;
        }
        if ((token === import17.EventManager)) {
            return this._EventManager_23;
        }
        if ((token === import18.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_24;
        }
        if ((token === import53.AnimationDriver)) {
            return this._AnimationDriver_25;
        }
        if ((token === import19.DomRootRenderer)) {
            return this._DomRootRenderer_26;
        }
        if ((token === import54.RootRenderer)) {
            return this._RootRenderer_27;
        }
        if ((token === import20.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import55.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import21.ViewUtils)) {
            return this._ViewUtils_30;
        }
        if ((token === import56.IterableDiffers)) {
            return this._IterableDiffers_31;
        }
        if ((token === import57.KeyValueDiffers)) {
            return this._KeyValueDiffers_32;
        }
        if ((token === import18.SharedStylesHost)) {
            return this._SharedStylesHost_33;
        }
        if ((token === import22.Title)) {
            return this._Title_34;
        }
        if ((token === import23.BrowserXhr)) {
            return this._BrowserXhr_35;
        }
        if ((token === import24.ResponseOptions)) {
            return this._ResponseOptions_36;
        }
        if ((token === import58.XSRFStrategy)) {
            return this._XSRFStrategy_37;
        }
        if ((token === import25.XHRBackend)) {
            return this._XHRBackend_38;
        }
        if ((token === import26.RequestOptions)) {
            return this._RequestOptions_39;
        }
        if ((token === import59.Http)) {
            return this._Http_40;
        }
        if ((token === import27.RadioControlRegistry)) {
            return this._RadioControlRegistry_41;
        }
        if ((token === import28.ErrorService)) {
            return this._ErrorService_42;
        }
        if ((token === import29.TaskService)) {
            return this._TaskService_43;
        }
        if ((token === import30.CpuService)) {
            return this._CpuService_44;
        }
        if ((token === import5.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_45;
        }
        if ((token === import46.LocationStrategy)) {
            return this._LocationStrategy_46;
        }
        if ((token === import31.Location)) {
            return this._Location_47;
        }
        if ((token === import32.UrlSerializer)) {
            return this._UrlSerializer_48;
        }
        if ((token === import33.RouterOutletMap)) {
            return this._RouterOutletMap_49;
        }
        if ((token === import60.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_50;
        }
        if ((token === import61.ROUTES)) {
            return this._ROUTES_51;
        }
        if ((token === import48.Router)) {
            return this._Router_52;
        }
        if ((token === import62.ActivatedRoute)) {
            return this._ActivatedRoute_53;
        }
        if ((token === import40.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_54;
        }
        if ((token === import35.AuthService)) {
            return this._AuthService_55;
        }
        if ((token === import36.SocketService)) {
            return this._SocketService_56;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__16.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map