(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-config.ts":
    /*!*******************************!*\
      !*** ./src/app/app-config.ts ***!
      \*******************************/

    /*! exports provided: NextConfig */

    /***/
    function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NextConfig", function () {
        return NextConfig;
      });

      var NextConfig = function NextConfig() {
        _classCallCheck(this, NextConfig);
      };

      NextConfig.config = {
        layout: 'vertical',
        subLayout: '',
        collapseMenu: false,
        layoutType: 'menu-light',
        headerBackColor: 'background-blue',
        rtlLayout: false,
        navFixedLayout: false,
        headerFixedLayout: false,
        boxLayout: false
      };
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme/layout/admin/admin.component */
      "./src/app/theme/layout/admin/admin.component.ts");
      /* harmony import */


      var _data_source_data_source_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-source/data-source.component */
      "./src/app/data-source/data-source.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _data_streamers_data_streamers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-streamers/data-streamers.component */
      "./src/app/data-streamers/data-streamers.component.ts");
      /* harmony import */


      var _data_mart_data_mart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data-mart/data-mart.component */
      "./src/app/data-mart/data-mart.component.ts");
      /* harmony import */


      var _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./microservices/microservices.component */
      "./src/app/microservices/microservices.component.ts");
      /* harmony import */


      var _health_dashboard_health_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./health-dashboard/health-dashboard.component */
      "./src/app/health-dashboard/health-dashboard.component.ts");
      /* harmony import */


      var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./theme/layout/auth/auth.component */
      "./src/app/theme/layout/auth/auth.component.ts");

      var routes = [{
        path: '',
        component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [{
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }, {
          path: 'data-source',
          component: _data_source_data_source_component__WEBPACK_IMPORTED_MODULE_3__["DataSourceComponent"]
        }, {
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        }, {
          path: 'data-streamers',
          component: _data_streamers_data_streamers_component__WEBPACK_IMPORTED_MODULE_5__["DataStreamersComponent"]
        }, {
          path: 'data-mart',
          component: _data_mart_data_mart_component__WEBPACK_IMPORTED_MODULE_6__["DataMartComponent"]
        }, {
          path: 'microservices',
          component: _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_7__["MicroservicesComponent"]
        }, {
          path: 'health-dashboard',
          component: _health_dashboard_health_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["HealthDashboardComponent"]
        }, {
          path: '',
          redirectTo: 'microservices',
          pathMatch: 'full'
        }, {
          path: 'sample-page',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | demo-pages-sample-page-sample-page-module */
            "demo-pages-sample-page-sample-page-module").then(__webpack_require__.bind(null,
            /*! ./demo/pages/sample-page/sample-page.module */
            "./src/app/demo/pages/sample-page/sample-page.module.ts")).then(function (module) {
              return module.SamplePageModule;
            });
          }
        }]
      }, {
        path: '',
        component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
        children: []
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme/shared/components/spinner/spinner.component */
      "./src/app/theme/shared/components/spinner/spinner.component.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
        styles: [".pcoded-navbar[_ngcontent-%COMP%]   .pcoded-inner-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-left: 43px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBjb2RlZC1uYXZiYXIgLnBjb2RlZC1pbm5lci1uYXZiYXIgbGkgPiBhIHtcbiAgcGFkZGluZy1sZWZ0OiA0M3B4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./theme/shared/shared.module */
      "./src/app/theme/shared/shared.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./theme/layout/admin/admin.component */
      "./src/app/theme/layout/admin/admin.component.ts");
      /* harmony import */


      var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./theme/layout/auth/auth.component */
      "./src/app/theme/layout/auth/auth.component.ts");
      /* harmony import */


      var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/navigation.component */
      "./src/app/theme/layout/admin/navigation/navigation.component.ts");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-content.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-bar.component */
      "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */
      "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");
      /* harmony import */


      var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./theme/layout/admin/configuration/configuration.component */
      "./src/app/theme/layout/admin/configuration/configuration.component.ts");
      /* harmony import */


      var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./theme/shared/full-screen/toggle-full-screen */
      "./src/app/theme/shared/full-screen/toggle-full-screen.ts");
      /* harmony import */


      var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/navigation */
      "./src/app/theme/layout/admin/navigation/navigation.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./microservices/microservices.component */
      "./src/app/microservices/microservices.component.ts");
      /* harmony import */


      var _data_mart_data_mart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./data-mart/data-mart.component */
      "./src/app/data-mart/data-mart.component.ts");
      /* harmony import */


      var _data_source_data_source_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./data-source/data-source.component */
      "./src/app/data-source/data-source.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _data_streamers_data_streamers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./data-streamers/data-streamers.component */
      "./src/app/data-streamers/data-streamers.component.ts");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! angular-datatables */
      "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
      /* harmony import */


      var _health_dashboard_health_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./health-dashboard/health-dashboard.component */
      "./src/app/health-dashboard/health-dashboard.component.ts");
      /* harmony import */


      var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-bar-rating */
      "./node_modules/ngx-bar-rating/__ivy_ngcc__/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./theme/shared/components/alert/alert.component */
      "./src/app/theme/shared/components/alert/alert.component.ts");
      /* harmony import */


      var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./theme/shared/components/card/card.component */
      "./src/app/theme/shared/components/card/card.component.ts");
      /* harmony import */


      var _theme_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./theme/shared/components/breadcrumb/breadcrumb.component */
      "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./theme/shared/components/modal/ui-modal/ui-modal.component */
      "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
      /* harmony import */


      var _theme_shared_components_modal_animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./theme/shared/components/modal/animation-modal/animation-modal.component */
      "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts");
      /* harmony import */


      var _theme_shared_components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./theme/shared/components/todo/todo-list-remove.directive */
      "./src/app/theme/shared/components/todo/todo-list-remove.directive.ts");
      /* harmony import */


      var _theme_shared_components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./theme/shared/components/todo/todo-card-complete.directive */
      "./src/app/theme/shared/components/todo/todo-card-complete.directive.ts");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ng-click-outside */
      "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./theme/shared/components/spinner/spinner.component */
      "./src/app/theme/shared/components/spinner/spinner.component.ts");
      /* harmony import */


      var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./theme/shared/components/chart/apex-chart/apex-chart.component */
      "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
      /* harmony import */


      var _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./theme/shared/components/gallery/gallery.component */
      "./src/app/theme/shared/components/gallery/gallery.component.ts");
      /* harmony import */


      var _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./theme/shared/components/toast/toast.component */
      "./src/app/theme/shared/components/toast/toast.component.ts");
      /* harmony import */


      var _theme_shared_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./theme/shared/components/data-table/data-filter.pipe */
      "./src/app/theme/shared/components/data-table/data-filter.pipe.ts");
      /* Menu Items */


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__["NavigationItem"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_26__["DataTablesModule"], ngx_bar_rating__WEBPACK_IMPORTED_MODULE_28__["BarRatingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__["NavRightComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__["ToggleFullScreenDirective"], _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_21__["MicroservicesComponent"], _data_mart_data_mart_component__WEBPACK_IMPORTED_MODULE_22__["DataMartComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _data_source_data_source_component__WEBPACK_IMPORTED_MODULE_23__["DataSourceComponent"], _data_streamers_data_streamers_component__WEBPACK_IMPORTED_MODULE_25__["DataStreamersComponent"], _health_dashboard_health_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["HealthDashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_26__["DataTablesModule"], ngx_bar_rating__WEBPACK_IMPORTED_MODULE_28__["BarRatingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__["NavRightComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__["ToggleFullScreenDirective"], _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_21__["MicroservicesComponent"], _data_mart_data_mart_component__WEBPACK_IMPORTED_MODULE_22__["DataMartComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _data_source_data_source_component__WEBPACK_IMPORTED_MODULE_23__["DataSourceComponent"], _data_streamers_data_streamers_component__WEBPACK_IMPORTED_MODULE_25__["DataStreamersComponent"], _health_dashboard_health_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["HealthDashboardComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_26__["DataTablesModule"], ngx_bar_rating__WEBPACK_IMPORTED_MODULE_28__["BarRatingModule"]],
            providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__["NavigationItem"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_29__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_l"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PerfectScrollbarComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormArrayName"], _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_33__["AlertComponent"], _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_34__["CardComponent"], _theme_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__["BreadcrumbComponent"], _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_36__["UiModalComponent"], _theme_shared_components_modal_animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_37__["AnimationModalComponent"], _theme_shared_components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_38__["TodoListRemoveDirective"], _theme_shared_components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_39__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_40__["ClickOutsideDirective"], _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_41__["SpinnerComponent"], _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_42__["ApexChartComponent"], _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_43__["GalleryComponent"], _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_44__["ToastComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepickerMonth"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationEllipsis"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTimepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbToastHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbHighlight"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabTitle"], angular_datatables__WEBPACK_IMPORTED_MODULE_26__["DataTableDirective"], ngx_bar_rating__WEBPACK_IMPORTED_MODULE_28__["BarRatingComponent"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__["NavRightComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__["ToggleFullScreenDirective"], _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_21__["MicroservicesComponent"], _data_mart_data_mart_component__WEBPACK_IMPORTED_MODULE_22__["DataMartComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _data_source_data_source_component__WEBPACK_IMPORTED_MODULE_23__["DataSourceComponent"], _data_streamers_data_streamers_component__WEBPACK_IMPORTED_MODULE_25__["DataStreamersComponent"], _health_dashboard_health_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["HealthDashboardComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_29__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["KeyValuePipe"], _theme_shared_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_45__["DataFilterPipe"]]);
      /***/

    },

    /***/
    "./src/app/data-mart/chart/barchart-data.ts":
    /*!**************************************************!*\
      !*** ./src/app/data-mart/chart/barchart-data.ts ***!
      \**************************************************/

    /*! exports provided: BarChartData */

    /***/
    function srcAppDataMartChartBarchartDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartData", function () {
        return BarChartData;
      });

      var BarChartData = function BarChartData() {
        _classCallCheck(this, BarChartData);
      };

      BarChartData.barChart1 = {
        chart: {
          height: 275,
          type: 'bar'
        },
        title: {
          text: 'Top Employers of 2020'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%'
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#4680ff'],
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: 'No of Employers',
          data: [5468, 3110, 1987, 1950, 1480]
        }],
        xaxis: {
          categories: ['Axis', 'Samsung', 'Reliance', 'Amazon', 'IDBI']
        },
        fill: {
          opacity: 1
        }
      };
      BarChartData.barChart2 = {
        chart: {
          height: 350,
          type: 'bar'
        },
        title: {
          text: 'IKYA Customer Distribution of 2019 by Region'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        colors: ['#4680ff', '#0e9e4a'],
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        series: [{
          data: [44, 43, 36, 18, 17]
        }],
        xaxis: {
          categories: ['Delhi', 'Mumbai', 'Bangalore', 'Jaipur', 'Chennai']
        }
      };
      BarChartData.barChart3 = {
        chart: {
          height: 233,
          type: 'bar'
        },
        title: {
          text: 'Invoice raised by top companies in 2020 by IKYA'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%'
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#4680ff'],
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: 'No of Employees',
          data: [339007330, 202099852, 232540820, 735772086, 259672407]
        }],
        xaxis: {
          categories: ['Amazon', 'Huawei', 'LG', 'Reliance', 'Vodafone']
        },
        fill: {
          opacity: 1
        }
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/piechart-donut-data-1.ts":
    /*!**********************************************************!*\
      !*** ./src/app/data-mart/chart/piechart-donut-data-1.ts ***!
      \**********************************************************/

    /*! exports provided: PieChartDonutData1 */

    /***/
    function srcAppDataMartChartPiechartDonutData1Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartDonutData1", function () {
        return PieChartDonutData1;
      });

      var PieChartDonutData1 = function PieChartDonutData1() {
        _classCallCheck(this, PieChartDonutData1);
      };

      PieChartDonutData1.pie2CAC = {
        chart: {
          height: 320,
          type: 'donut'
        },
        series: [43, 15, 42],
        labels: ['Employee', 'Segment', 'Employment_Detail'],
        colors: ['#4680ff', '#0e9e4a', '#ff5252'],
        legend: {
          show: true,
          position: 'bottom'
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true
                },
                value: {
                  show: true
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: false
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/piechart-donut-data-2.ts":
    /*!**********************************************************!*\
      !*** ./src/app/data-mart/chart/piechart-donut-data-2.ts ***!
      \**********************************************************/

    /*! exports provided: PieChartDonutData2 */

    /***/
    function srcAppDataMartChartPiechartDonutData2Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartDonutData2", function () {
        return PieChartDonutData2;
      });

      var PieChartDonutData2 = function PieChartDonutData2() {
        _classCallCheck(this, PieChartDonutData2);
      };

      PieChartDonutData2.pie2CAC = {
        chart: {
          height: 320,
          type: 'donut'
        },
        series: [39.89, 15.56, 11.32, 8.75, 7.96],
        labels: ['Retail', 'FMCD/FMCG', 'Telecom', 'BFSI', 'EMPI'],
        colors: ['#4680ff', '#0e9e4a', '#ff5252', '#ffba57', '#ff3453'],
        legend: {
          show: true,
          position: 'bottom'
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true
                },
                value: {
                  show: true
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: false
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/piechart-donut-data-3.ts":
    /*!**********************************************************!*\
      !*** ./src/app/data-mart/chart/piechart-donut-data-3.ts ***!
      \**********************************************************/

    /*! exports provided: PieChartDonutData3 */

    /***/
    function srcAppDataMartChartPiechartDonutData3Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartDonutData3", function () {
        return PieChartDonutData3;
      });

      var PieChartDonutData3 = function PieChartDonutData3() {
        _classCallCheck(this, PieChartDonutData3);
      };

      PieChartDonutData3.pie2CAC = {
        chart: {
          height: 320,
          type: 'donut'
        },
        series: [90, 10],
        labels: ['SAP', 'QPay'],
        colors: ['#4680ff', '#0e9e4a'],
        legend: {
          show: true,
          position: 'bottom'
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true
                },
                value: {
                  show: true
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: false
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/radialchart-data.ts":
    /*!*****************************************************!*\
      !*** ./src/app/data-mart/chart/radialchart-data.ts ***!
      \*****************************************************/

    /*! exports provided: RadialChartData */

    /***/
    function srcAppDataMartChartRadialchartDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadialChartData", function () {
        return RadialChartData;
      });

      var RadialChartData = function RadialChartData() {
        _classCallCheck(this, RadialChartData);
      };

      RadialChartData.radialBar1 = {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          radialBar: {
            offsetY: -30,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ['#4680ff', '#0e9e4a', '#ffa21d', '#ff5252'],
        series: [100, 78, 76, 74, 35],
        labels: ['EMPI', 'BFSI', 'FMCD/FMCG', 'RETAIL', 'IT/ITES/Education'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetX: 0,
          offsetY: 0,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function formatter(seriesName, opts) {
            return seriesName;
          },
          itemMargin: {
            horizontal: 1
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }]
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/sale-report-data.ts":
    /*!*****************************************************!*\
      !*** ./src/app/data-mart/chart/sale-report-data.ts ***!
      \*****************************************************/

    /*! exports provided: SaleReport */

    /***/
    function srcAppDataMartChartSaleReportDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleReport", function () {
        return SaleReport;
      });

      var SaleReport = function SaleReport() {
        _classCallCheck(this, SaleReport);
      };

      SaleReport.widgetChartData1 = {
        chart: {
          type: 'bar',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#4680ff'],
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Monthly Salary Cost :';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      SaleReport.widgetChartData2 = {
        chart: {
          type: 'bar',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#9ccc65'],
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Quarterly Salary Cost :';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      SaleReport.widgetChartData3 = {
        chart: {
          type: 'bar',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ffba57'],
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Monthly Salary Cost :';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      SaleReport.widgetChartData4 = {
        chart: {
          type: 'bar',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ffba57'],
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Monthly Salary Cost :';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      SaleReport.widgetChartData5 = {
        chart: {
          type: 'bar',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ffba57'],
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Quarterly Salary Cost :';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      SaleReport.widgetChartData6 = {
        chart: {
          type: 'bar',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ffba57'],
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Monthly Salary Cost :';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/support-chart-data-1.ts":
    /*!*********************************************************!*\
      !*** ./src/app/data-mart/chart/support-chart-data-1.ts ***!
      \*********************************************************/

    /*! exports provided: SupportChartData1 */

    /***/
    function srcAppDataMartChartSupportChartData1Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData1", function () {
        return SupportChartData1;
      });

      var SupportChartData1 = function SupportChartData1() {
        _classCallCheck(this, SupportChartData1);
      };

      SupportChartData1.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#4680ff'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/support-chart-data-2.ts":
    /*!*********************************************************!*\
      !*** ./src/app/data-mart/chart/support-chart-data-2.ts ***!
      \*********************************************************/

    /*! exports provided: SupportChartData2 */

    /***/
    function srcAppDataMartChartSupportChartData2Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData2", function () {
        return SupportChartData2;
      });

      var SupportChartData2 = function SupportChartData2() {
        _classCallCheck(this, SupportChartData2);
      };

      SupportChartData2.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#9ccc65'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/support-chart-data-3.ts":
    /*!*********************************************************!*\
      !*** ./src/app/data-mart/chart/support-chart-data-3.ts ***!
      \*********************************************************/

    /*! exports provided: SupportChartData3 */

    /***/
    function srcAppDataMartChartSupportChartData3Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData3", function () {
        return SupportChartData3;
      });

      var SupportChartData3 = function SupportChartData3() {
        _classCallCheck(this, SupportChartData3);
      };

      SupportChartData3.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#9ccc65'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-mart/chart/support-chart-data.ts":
    /*!*******************************************************!*\
      !*** ./src/app/data-mart/chart/support-chart-data.ts ***!
      \*******************************************************/

    /*! exports provided: chartDB */

    /***/
    function srcAppDataMartChartSupportChartDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chartDB", function () {
        return chartDB;
      });

      var chartDB = function chartDB() {
        _classCallCheck(this, chartDB);
      };

      chartDB.completedTicketCAC = {
        chart: {
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        series: [{
          data: [45, 66, 41, 89, 25, 44, 9, 54]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-mart/data-mart.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/data-mart/data-mart.component.ts ***!
      \**************************************************/

    /*! exports provided: DataMartComponent */

    /***/
    function srcAppDataMartDataMartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataMartComponent", function () {
        return DataMartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart/support-chart-data-1 */
      "./src/app/data-mart/chart/support-chart-data-1.ts");
      /* harmony import */


      var _chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chart/support-chart-data-2 */
      "./src/app/data-mart/chart/support-chart-data-2.ts");
      /* harmony import */


      var _chart_support_chart_data_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chart/support-chart-data-3 */
      "./src/app/data-mart/chart/support-chart-data-3.ts");
      /* harmony import */


      var _chart_piechart_donut_data_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chart/piechart-donut-data-1 */
      "./src/app/data-mart/chart/piechart-donut-data-1.ts");
      /* harmony import */


      var _chart_piechart_donut_data_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart/piechart-donut-data-2 */
      "./src/app/data-mart/chart/piechart-donut-data-2.ts");
      /* harmony import */


      var _chart_piechart_donut_data_3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chart/piechart-donut-data-3 */
      "./src/app/data-mart/chart/piechart-donut-data-3.ts");
      /* harmony import */


      var _chart_barchart_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chart/barchart-data */
      "./src/app/data-mart/chart/barchart-data.ts");
      /* harmony import */


      var _chart_radialchart_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./chart/radialchart-data */
      "./src/app/data-mart/chart/radialchart-data.ts");
      /* harmony import */


      var _chart_support_chart_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./chart/support-chart-data */
      "./src/app/data-mart/chart/support-chart-data.ts");
      /* harmony import */


      var _chart_sale_report_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./chart/sale-report-data */
      "./src/app/data-mart/chart/sale-report-data.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../theme/shared/components/card/card.component */
      "./src/app/theme/shared/components/card/card.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../theme/shared/components/chart/apex-chart/apex-chart.component */
      "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");

      function DataMartComponent_div_146_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-apex-chart", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-card", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New hiring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " of");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 8,544 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " happened under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "General Staffing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " for");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " August 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-apex-chart", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r0.pieChartDonutData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r0.barChartData1);
        }
      }

      function DataMartComponent_div_147_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-apex-chart", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-card", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "There is a total of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 1676 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " customers under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "workforce management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " as of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-card", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "IKYA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "registered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 15% decrease ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " in customers in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " compared to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "previous year");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-card", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-apex-chart", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r1.radialChartData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r1.barChartData2);
        }
      }

      function DataMartComponent_div_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-apex-chart", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-card", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "IKYA raised");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 1500 crore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " worth invoice under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Work force management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " in 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-apex-chart", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r2.pieChartDonutData2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r2.barChartData3);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "selected-card": a0
        };
      };

      var DataMartComponent = /*#__PURE__*/function () {
        function DataMartComponent(router, route) {
          _classCallCheck(this, DataMartComponent);

          this.router = router;
          this.route = route;
          this.dtColumnsReorderOptions1 = {};
          this.dtColumnsReorderOptions2 = {};
          this.dtColumnsReorderOptions3 = {};
          this.datamart = 1;
          this.martId = 0;
          this.supportChartData1 = _chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_1__["SupportChartData1"].supportChartData;
          this.supportChartData2 = _chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_2__["SupportChartData2"].supportChartData;
          this.supportChartData3 = _chart_support_chart_data_3__WEBPACK_IMPORTED_MODULE_3__["SupportChartData3"].supportChartData;
          this.pieChartDonutData1 = _chart_piechart_donut_data_1__WEBPACK_IMPORTED_MODULE_4__["PieChartDonutData1"].pie2CAC;
          this.pieChartDonutData2 = _chart_piechart_donut_data_2__WEBPACK_IMPORTED_MODULE_5__["PieChartDonutData2"].pie2CAC;
          this.pieChartDonutData3 = _chart_piechart_donut_data_3__WEBPACK_IMPORTED_MODULE_6__["PieChartDonutData3"].pie2CAC;
          this.barChartData1 = _chart_barchart_data__WEBPACK_IMPORTED_MODULE_7__["BarChartData"].barChart1;
          this.barChartData2 = _chart_barchart_data__WEBPACK_IMPORTED_MODULE_7__["BarChartData"].barChart2;
          this.barChartData3 = _chart_barchart_data__WEBPACK_IMPORTED_MODULE_7__["BarChartData"].barChart3;
          this.radialChartData1 = _chart_radialchart_data__WEBPACK_IMPORTED_MODULE_8__["RadialChartData"].radialBar1;
          this.completedTicketChartData1 = _chart_support_chart_data__WEBPACK_IMPORTED_MODULE_9__["chartDB"].completedTicketCAC;
          this.saleReportChartData1 = _chart_sale_report_data__WEBPACK_IMPORTED_MODULE_10__["SaleReport"].widgetChartData1;
          this.saleReportChartData2 = _chart_sale_report_data__WEBPACK_IMPORTED_MODULE_10__["SaleReport"].widgetChartData2;
          this.saleReportChartData3 = _chart_sale_report_data__WEBPACK_IMPORTED_MODULE_10__["SaleReport"].widgetChartData3;
          this.saleReportChartData4 = _chart_sale_report_data__WEBPACK_IMPORTED_MODULE_10__["SaleReport"].widgetChartData4;
          this.saleReportChartData5 = _chart_sale_report_data__WEBPACK_IMPORTED_MODULE_10__["SaleReport"].widgetChartData5;
          this.saleReportChartData6 = _chart_sale_report_data__WEBPACK_IMPORTED_MODULE_10__["SaleReport"].widgetChartData6;
        }

        _createClass(DataMartComponent, [{
          key: "navigate",
          value: function navigate(path) {
            this.router.navigate([path]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtColumnsReorderOptions1 = {
              ajax: 'fake-data/datatable-data-1.json',
              columns: [{
                title: 'Name',
                data: 'name'
              }, {
                title: 'Position',
                data: 'position'
              }, {
                title: 'Office',
                data: 'office'
              }, {
                title: 'Age',
                data: 'age'
              }, {
                title: 'Start Date',
                data: 'date'
              }, {
                title: 'Salary',
                data: 'salary'
              }],
              colReorder: {
                order: [0, 3, 4, 2, 1, 5],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptions2 = {
              ajax: 'fake-data/datatable-data-2.json',
              columns: [{
                title: 'Name',
                data: 'name'
              }, {
                title: 'Position',
                data: 'position'
              }, {
                title: 'Office',
                data: 'office'
              }, {
                title: 'Age',
                data: 'age'
              }, {
                title: 'Start Date',
                data: 'date'
              }, {
                title: 'Salary',
                data: 'salary'
              }],
              colReorder: {
                order: [0, 3, 4, 2, 1, 5],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptions3 = {
              ajax: 'fake-data/datatable-data-3.json',
              columns: [{
                title: 'Name',
                data: 'name'
              }, {
                title: 'Position',
                data: 'position'
              }, {
                title: 'Office',
                data: 'office'
              }, {
                title: 'Age',
                data: 'age'
              }, {
                title: 'Start Date',
                data: 'date'
              }, {
                title: 'Salary',
                data: 'salary'
              }],
              colReorder: {
                order: [0, 3, 4, 2, 1, 5],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
          }
        }, {
          key: "loadDatatable",
          value: function loadDatatable(datamart) {
            console.log(datamart);
          }
        }, {
          key: "viewMartDetails",
          value: function viewMartDetails(martId) {
            if (this.martId != martId) {
              this.martId = martId;
            } else {
              this.martId = 0;
            }
          }
        }]);

        return DataMartComponent;
      }();

      DataMartComponent.ɵfac = function DataMartComponent_Factory(t) {
        return new (t || DataMartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]));
      };

      DataMartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataMartComponent,
        selectors: [["app-data-mart"]],
        decls: 149,
        vars: 29,
        consts: [[1, "row"], [1, "col-md-12"], [1, "md-stepper"], [1, "md-step", 3, "click"], [1, "md-step-circle"], [1, "feather", "icon-file"], [1, "md-step-title"], [1, "md-step-bar-left"], [1, "md-step-bar-right"], [1, "md-step", "active"], [1, "fas", "fa-warehouse", "icon-droplet"], [1, "feather", "icon-cloud-off"], [1, "fa", "fa-database", "icon-sidebar"], [1, "col-lg-4", "col-md-6"], ["footerClass", "bg-c-yellow", 3, "hidHeader", "isCardFooter"], [1, "row", "align-items-center"], [1, "col-8"], [1, "text-c-yellow"], [1, "text-muted", "m-b-0"], [1, "col-4", "text-right"], [1, "fas", "fa-database", "m-r-1", "f-28"], [1, "app-card-footer"], [1, "col-9"], [1, "text-white", "m-b-0"], [1, "col-3", "text-right"], [1, "feather", "icon-trending-up", "text-white", "f-16"], ["footerClass", "bg-c-green", 3, "hidHeader", "isCardFooter"], [1, "text-c-green"], [1, "fas", "fa-table", "m-r-1", "f-28"], ["footerClass", "bg-c-red", 3, "hidHeader", "isCardFooter"], [1, "text-c-red"], [1, "feather", "icon-file-text", "f-28"], [1, "col-sm-12", "col-md-3", 3, "click"], ["cardClass", "support-bar", "blockClass", "p-0", "footerClass", "bg-success text-white", 3, "hidHeader", "isCardFooter", "ngClass"], [1, "p-20", "pb-0", 2, "min-height", "110px"], [1, "m-0"], [1, "text-c-blue"], [1, "col"], [1, "m-0", "text-white"], ["class", "row", 4, "ngIf"], [1, "col-sm-12", "col-md-4"], ["cardTitle", "Table wise contribution", 3, "options"], ["chartID", "pie-chart-1", 3, "chartConfig"], [1, "col-sm-12", "col-md-8"], [3, "hidHeader", "options"], [2, "font-size", "1.75rem", "border-bottom", "1px solid #e2e5e8"], [2, "font-size", "20px"], [2, "font-weight", "bold", "color", "#9ccc65"], [2, "font-weight", "bold", "color", "#4680ff"], ["chartID", "bar-chart-3-cac", 3, "chartConfig"], ["cardTitle", "Top Customers by segment 2020", 3, "options"], ["chartID", "radial-chart-1", 3, "chartConfig"], [1, "col-sm-12", "col-md-4", 2, "flex-direction", "column", "justify-content", "space-around", "display", "flex"], [2, "font-size", "1.75rem"], [1, "col-sm-12", "col-md-4", 2, "display", "flex", "flex-direction", "column", "justify-content", "center"], ["cardTitle", "Invoice raised by segments 2020", 3, "options"], ["chartID", "pie-chart-2", 3, "chartConfig"], ["chartID", "bar-chart-2-cac", 3, "chartConfig"]],
        template: function DataMartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMartComponent_Template_div_click_3_listener() {
              return ctx.navigate("microservices");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Microservices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Data Mart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMartComponent_Template_div_click_19_listener() {
              return ctx.navigate("data-streamers");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Streamers & Transformers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMartComponent_Template_div_click_27_listener() {
              return ctx.navigate("data-source");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Data Sources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Number of Marts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Derived from QPay, SAP, POP, Worq, Simpliance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "app-card", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "5 hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Refresh Rate of Marts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "5 hours average");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "app-card", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "12 GB approx.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mart size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "20% change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMartComponent_Template_div_click_90_listener() {
              return ctx.viewMartDetails(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "app-card", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Employee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "29 Attributes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2.5 Million");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Records");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMartComponent_Template_div_click_104_listener() {
              return ctx.viewMartDetails(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "app-card", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "31 Attributes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "2K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Records");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMartComponent_Template_div_click_118_listener() {
              return ctx.viewMartDetails(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "app-card", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Finance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "36 Attributes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h4", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "10 Million");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Records");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMartComponent_Template_div_click_132_listener() {
              return ctx.viewMartDetails(4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "app-card", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Minimum Wages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "37 Attributes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h4", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "46");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Records");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, DataMartComponent_div_146_Template, 21, 5, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, DataMartComponent_div_147_Template, 37, 9, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, DataMartComponent_div_148_Template, 17, 5, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.martId == 1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.martId == 2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.martId == 3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.martId == 4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.martId == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.martId == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.martId == 3);
          }
        },
        directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_14__["ApexChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtbWFydC9kYXRhLW1hcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataMartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-data-mart',
            templateUrl: './data-mart.component.html',
            styleUrls: ['./data-mart.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/data-source/chart/support-chart-data-1.ts":
    /*!***********************************************************!*\
      !*** ./src/app/data-source/chart/support-chart-data-1.ts ***!
      \***********************************************************/

    /*! exports provided: SupportChartData1 */

    /***/
    function srcAppDataSourceChartSupportChartData1Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData1", function () {
        return SupportChartData1;
      });

      var SupportChartData1 = function SupportChartData1() {
        _classCallCheck(this, SupportChartData1);
      };

      SupportChartData1.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#4680ff'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-source/chart/support-chart-data-2.ts":
    /*!***********************************************************!*\
      !*** ./src/app/data-source/chart/support-chart-data-2.ts ***!
      \***********************************************************/

    /*! exports provided: SupportChartData2 */

    /***/
    function srcAppDataSourceChartSupportChartData2Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData2", function () {
        return SupportChartData2;
      });

      var SupportChartData2 = function SupportChartData2() {
        _classCallCheck(this, SupportChartData2);
      };

      SupportChartData2.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#9ccc65'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-source/chart/support-chart-data-3.ts":
    /*!***********************************************************!*\
      !*** ./src/app/data-source/chart/support-chart-data-3.ts ***!
      \***********************************************************/

    /*! exports provided: SupportChartData3 */

    /***/
    function srcAppDataSourceChartSupportChartData3Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData3", function () {
        return SupportChartData3;
      });

      var SupportChartData3 = function SupportChartData3() {
        _classCallCheck(this, SupportChartData3);
      };

      SupportChartData3.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#9ccc65'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-source/chart/support-chart-data-4.ts":
    /*!***********************************************************!*\
      !*** ./src/app/data-source/chart/support-chart-data-4.ts ***!
      \***********************************************************/

    /*! exports provided: SupportChartData4 */

    /***/
    function srcAppDataSourceChartSupportChartData4Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData4", function () {
        return SupportChartData4;
      });

      var SupportChartData4 = function SupportChartData4() {
        _classCallCheck(this, SupportChartData4);
      };

      SupportChartData4.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#9ccc65'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-source/data-source.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/data-source/data-source.component.ts ***!
      \******************************************************/

    /*! exports provided: DataSourceComponent */

    /***/
    function srcAppDataSourceDataSourceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSourceComponent", function () {
        return DataSourceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart/support-chart-data-1 */
      "./src/app/data-source/chart/support-chart-data-1.ts");
      /* harmony import */


      var _chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chart/support-chart-data-2 */
      "./src/app/data-source/chart/support-chart-data-2.ts");
      /* harmony import */


      var _chart_support_chart_data_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chart/support-chart-data-3 */
      "./src/app/data-source/chart/support-chart-data-3.ts");
      /* harmony import */


      var _chart_support_chart_data_4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chart/support-chart-data-4 */
      "./src/app/data-source/chart/support-chart-data-4.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../theme/shared/components/card/card.component */
      "./src/app/theme/shared/components/card/card.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-datatables */
      "./node_modules/angular-datatables/__ivy_ngcc__/index.js");

      function DataSourceComponent_div_75_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "table", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r1.dtColumnsReorderOptionsQPay);
        }
      }

      function DataSourceComponent_div_75_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "table", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r2.dtColumnsReorderOptionsSimplience);
        }
      }

      function DataSourceComponent_div_75_div_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "table", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r3.dtColumnsReorderOptionsSAP);
        }
      }

      function DataSourceComponent_div_75_div_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "table", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r4.dtColumnsReorderOptionsWorq);
        }
      }

      function DataSourceComponent_div_75_div_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "table", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r5.dtColumnsReorderOptionsPOP);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "selected-card": a0
        };
      };

      function DataSourceComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_div_75_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.switchDataTable("QPay");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "QPay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1064 Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1 Billion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_div_75_Template_div_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.switchDataTable("SAP");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-card", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SAP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "5 Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "10 Million");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_div_75_Template_div_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.switchDataTable("POP");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-card", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "POP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1 Table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "498");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_div_75_Template_div_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.switchDataTable("Worq");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "app-card", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Worq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "1 Table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_div_75_Template_div_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.switchDataTable("Simplience");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "app-card", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Simplience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "1 Table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "46");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, DataSourceComponent_div_75_div_91_Template, 4, 2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, DataSourceComponent_div_75_div_92_Template, 4, 2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, DataSourceComponent_div_75_div_93_Template, 4, 2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, DataSourceComponent_div_75_div_94_Template, 4, 2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, DataSourceComponent_div_75_div_95_Template, 4, 2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx_r0.currentTable == "QPay"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r0.currentTable == "SAP"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx_r0.currentTable == "POP"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx_r0.currentTable == "Worq"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx_r0.currentTable == "Simplience"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentTable == "QPay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentTable == "Simplience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentTable == "SAP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentTable == "Worq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentTable == "POP");
        }
      }

      var DataSourceComponent = /*#__PURE__*/function () {
        function DataSourceComponent(router, route) {
          _classCallCheck(this, DataSourceComponent);

          this.router = router;
          this.route = route;
          this.dtColumnsReorderOptionsQPay = {};
          this.dtColumnsReorderOptionsQString = {};
          this.dtColumnsReorderOptionsSAP = {};
          this.dtColumnsReorderOptionsSimplience = {};
          this.dtColumnsReorderOptionsWorq = {};
          this.dtColumnsReorderOptionsPOP = {};
          this.currentTable = '';
          this.showDB = false;
          this.supportChartData1 = _chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_1__["SupportChartData1"].supportChartData;
          this.supportChartData2 = _chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_2__["SupportChartData2"].supportChartData;
          this.supportChartData3 = _chart_support_chart_data_3__WEBPACK_IMPORTED_MODULE_3__["SupportChartData3"].supportChartData;
          this.supportChartData4 = _chart_support_chart_data_4__WEBPACK_IMPORTED_MODULE_4__["SupportChartData4"].supportChartData;
        }

        _createClass(DataSourceComponent, [{
          key: "switchDataTable",
          value: function switchDataTable(type) {
            if (this.currentTable !== type) {
              this.currentTable = type;
            } else {
              this.currentTable = '';
            }
          }
        }, {
          key: "navigate",
          value: function navigate(path) {
            this.router.navigate([path]);
          }
        }, {
          key: "showDbDetails",
          value: function showDbDetails() {
            this.showDB ? this.showDB = false : this.showDB = true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtColumnsReorderOptionsQPay = {
              ajax: 'fake-data/datatable-qpay.json',
              columns: [{
                title: 'Table name',
                data: 'TableName'
              }, {
                title: 'Number of attributes',
                data: 'ColumnCount'
              }, {
                title: 'Number of Records',
                data: 'RowCount'
              }],
              //dom: 'Rt',
              paging: true,
              pagingType: "full_numbers",
              colReorder: {
                order: [0, 2, 1],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptionsQString = {
              ajax: 'fake-data/datatable-qstring.json',
              columns: [{
                title: 'Table name',
                data: 'TableName'
              }, {
                title: 'Number of attributes',
                data: 'ColumnCount'
              }, {
                title: 'Number of Records',
                data: 'RowCount'
              }],
              //dom: 'Rt',
              paging: true,
              pagingType: "full_numbers",
              colReorder: {
                order: [0, 2, 1],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptionsSimplience = {
              ajax: 'fake-data/datatable-simplience.json',
              columns: [{
                title: 'Table name',
                data: 'TableName'
              }, {
                title: 'Number of attributes',
                data: 'ColumnCount'
              }, {
                title: 'Number of Records',
                data: 'RowCount'
              }],
              //dom: 'Rt',
              paging: true,
              pagingType: "full_numbers",
              colReorder: {
                order: [0, 2, 1],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptionsSAP = {
              ajax: 'fake-data/datatable-sap.json',
              columns: [{
                title: 'Table name',
                data: 'TableName'
              }, {
                title: 'Number of attributes',
                data: 'ColumnCount'
              }, {
                title: 'Number of Records',
                data: 'RowCount'
              }],
              //dom: 'Rt',
              paging: true,
              pagingType: "full_numbers",
              colReorder: {
                order: [0, 2, 1],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptionsWorq = {
              ajax: 'fake-data/datatable-worq.json',
              columns: [{
                title: 'Table name',
                data: 'TableName'
              }, {
                title: 'Number of attributes',
                data: 'ColumnCount'
              }, {
                title: 'Number of Records',
                data: 'RowCount'
              }],
              //dom: 'Rt',
              paging: true,
              pagingType: "full_numbers",
              colReorder: {
                order: [0, 2, 1],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptionsPOP = {
              ajax: 'fake-data/datatable-pop.json',
              columns: [{
                title: 'Table name',
                data: 'TableName'
              }, {
                title: 'Number of attributes',
                data: 'ColumnCount'
              }, {
                title: 'Number of Records',
                data: 'RowCount'
              }],
              //dom: 'Rt',
              paging: true,
              pagingType: "full_numbers",
              colReorder: {
                order: [0, 2, 1],
                fixedColumnsRight: 1
              },
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.currentTable = '';
          }
        }]);

        return DataSourceComponent;
      }();

      DataSourceComponent.ɵfac = function DataSourceComponent_Factory(t) {
        return new (t || DataSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      DataSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataSourceComponent,
        selectors: [["app-data-source"]],
        decls: 76,
        vars: 10,
        consts: [[1, "row"], [1, "col-md-12"], [1, "md-stepper"], [1, "md-step", 3, "click"], [1, "md-step-circle"], [1, "feather", "icon-file"], [1, "md-step-title"], [1, "md-step-bar-left"], [1, "md-step-bar-right"], [1, "fas", "fa-warehouse", "icon-droplet"], [1, "feather", "icon-cloud-off"], [1, "md-step", "active"], [1, "fa", "fa-database", "icon-sidebar"], [1, "col-lg-4", "col-md-6"], ["footerClass", "bg-c-yellow", 3, "hidHeader", "isCardFooter", "ngClass", "click"], [1, "row", "align-items-center"], [1, "col-8"], [1, "text-c-yellow"], [1, "col-4", "text-right"], [1, "fas", "fa-database", "m-r-1", "f-28"], [1, "app-card-footer"], [1, "col-9"], [1, "text-white", "m-b-0"], ["footerClass", "bg-c-green", 3, "hidHeader", "isCardFooter"], [1, "text-c-green"], [1, "fas", "fa-table", "m-r-1", "f-28"], ["footerClass", "bg-c-red", 3, "hidHeader", "isCardFooter"], [1, "text-c-red"], [1, "feather", "icon-file-text", "f-28"], ["class", "row justify-content-around", 4, "ngIf"], [1, "row", "justify-content-around"], [3, "click"], ["cardClass", "support-bar", "blockClass", "p-0", "footerClass", "bg-success text-white", 3, "hidHeader", "isCardFooter", "ngClass"], [1, "p-20", "pb-0", 2, "min-width", "280px", "min-height", "110px"], [1, "m-0"], [1, "col-4"], ["src", "assets/images/dbicons/sql.png", "alt", "", 2, "float", "right"], [1, "text-c-blue"], [1, "col"], [1, "m-0", "text-white"], [1, "p-20", "pb-0", 2, "min-height", "110px"], ["src", "assets/images/dbicons/sap.png", "alt", "", 2, "float", "right"], ["src", "assets/images/dbicons/postgres.png", "alt", "", 2, "float", "right"], ["cardClass", "support-bar overflow-hidden", "blockClass", "p-0", "footerClass", "bg-success text-white", 3, "hidHeader", "isCardFooter", "ngClass"], ["class", "col-md-12", 4, "ngIf"], ["cardTitle", "QPay Table Stats", "cardClass", "card-datatable", 3, "options"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions"], ["cardTitle", "Simplience Table Stats", "cardClass", "card-datatable", 3, "options"], ["cardTitle", "SAP Table Stats", "cardClass", "card-datatable", 3, "options"], ["cardTitle", "Worq Table Stats", "cardClass", "card-datatable", 3, "options"], ["cardTitle", "POP Table Stats", "cardClass", "card-datatable", 3, "options"]],
        template: function DataSourceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_Template_div_click_3_listener() {
              return ctx.navigate("microservices");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Microservices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_Template_div_click_11_listener() {
              return ctx.navigate("data-mart");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Data Mart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_Template_div_click_19_listener() {
              return ctx.navigate("data-streamers");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Streamers & Transformers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Data Sources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSourceComponent_Template_app_card_click_37_listener() {
              return ctx.showDbDetails();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "No of Database");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1072");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "No of Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "app-card", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1 Billion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Data records");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, DataSourceComponent_div_75_Template, 96, 30, "div", 29);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.showDB));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDB == true);
          }
        },
        directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtc291cmNlL2RhdGEtc291cmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataSourceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-data-source',
            templateUrl: './data-source.component.html',
            styleUrls: ['./data-source.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/data-streamers/chart/area-chart-data-1.ts":
    /*!***********************************************************!*\
      !*** ./src/app/data-streamers/chart/area-chart-data-1.ts ***!
      \***********************************************************/

    /*! exports provided: AreaChartData */

    /***/
    function srcAppDataStreamersChartAreaChartData1Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaChartData", function () {
        return AreaChartData;
      });

      var AreaChartData = function AreaChartData() {
        _classCallCheck(this, AreaChartData);
      };

      AreaChartData.areaChart1 = {
        chart: {
          height: 500,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#4680ff'],
        series: [{
          name: 'Employee',
          data: [0, 0, 0, 2336150, 2551770, 2756103]
        }],
        xaxis: {
          type: 'datetime',
          categories: ['2020-09-14T00:00:00', '2020-09-15T01:30:00', '2020-09-16T02:30:00', '2020-09-17T03:30:00', '2020-09-18T04:30:00', '2020-09-19T05:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      };
      AreaChartData.areaChart2 = {
        chart: {
          height: 500,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#4680ff'],
        series: [{
          name: 'Employee',
          data: [0, 0, 0, 1820, 2100, 2708]
        }],
        xaxis: {
          type: 'datetime',
          categories: ['2020-09-14T00:00:00', '2020-09-15T01:30:00', '2020-09-16T02:30:00', '2020-09-17T03:30:00', '2020-09-18T04:30:00', '2020-09-19T05:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      };
      AreaChartData.areaChart3 = {
        chart: {
          height: 500,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#4680ff'],
        series: [{
          name: 'Employee',
          data: [0, 0, 0, 9034420, 10100234, 10616953]
        }],
        xaxis: {
          type: 'datetime',
          categories: ['2020-09-14T00:00:00', '2020-09-15T01:30:00', '2020-09-16T02:30:00', '2020-09-17T03:30:00', '2020-09-18T04:30:00', '2020-09-19T05:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/data-streamers/chart/bar-chart-data-1.ts":
    /*!**********************************************************!*\
      !*** ./src/app/data-streamers/chart/bar-chart-data-1.ts ***!
      \**********************************************************/

    /*! exports provided: BarChartData */

    /***/
    function srcAppDataStreamersChartBarChartData1Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartData", function () {
        return BarChartData;
      });

      var BarChartData = function BarChartData() {
        _classCallCheck(this, BarChartData);
      };

      BarChartData.barChart1 = {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        colors: ['#4680ff', '#0e9e4a'],
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        series: [{
          data: [1378034, 44, 1378025]
        }],
        xaxis: {
          categories: ['Employee', 'Segment', 'Employment_Detail']
        }
      };
      BarChartData.barChart2 = {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        colors: ['#4680ff', '#0e9e4a'],
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        series: [{
          data: [2506, 44, 112, 46]
        }],
        xaxis: {
          categories: ['Company', 'Segment', 'ClientInActive', 'Entity']
        }
      };
      BarChartData.barChart3 = {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        colors: ['#4680ff', '#0e9e4a'],
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        series: [{
          data: [377784, 238424, 10000745]
        }],
        xaxis: {
          categories: ['GSTInvoice', 'Invoice_Collection', 'HPayroll']
        }
      };
      /***/
    },

    /***/
    "./src/app/data-streamers/data-streamers.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/data-streamers/data-streamers.component.ts ***!
      \************************************************************/

    /*! exports provided: DataStreamersComponent */

    /***/
    function srcAppDataStreamersDataStreamersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataStreamersComponent", function () {
        return DataStreamersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chart_area_chart_data_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart/area-chart-data-1 */
      "./src/app/data-streamers/chart/area-chart-data-1.ts");
      /* harmony import */


      var _chart_bar_chart_data_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chart/bar-chart-data-1 */
      "./src/app/data-streamers/chart/bar-chart-data-1.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../theme/shared/components/card/card.component */
      "./src/app/theme/shared/components/card/card.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../theme/shared/components/chart/apex-chart/apex-chart.component */
      "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "./node_modules/angular-datatables/__ivy_ngcc__/index.js");

      function DataStreamersComponent_ng_template_39_div_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "QPay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Data Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "29");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Selected Data Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-apex-chart", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-apex-chart", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "table", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r2.barChartData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r2.areaChartData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r2.dtColumnsReorderOptionsEmployee);
        }
      }

      function DataStreamersComponent_ng_template_39_div_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "QPay, POP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Data Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "31");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Selected Data Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-apex-chart", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-card", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-apex-chart", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-card", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "table", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r3.barChartData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r3.areaChartData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r3.dtColumnsReorderOptionsCompany);
        }
      }

      function DataStreamersComponent_ng_template_39_div_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "QPay, SAP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "687");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Data Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "36");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Selected Data Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-apex-chart", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-apex-chart", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-card", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "table", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r4.barChartData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx_r4.areaChartData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r4.dtColumnsReorderOptionsFinance);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "selected-card": a0
        };
      };

      function DataStreamersComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Stream 1: Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Consumed Data Sources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2.5 Million");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "19/09/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStreamersComponent_ng_template_39_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.viewStreamDetails(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Stream 2: Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Consumed Data Sources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Last Run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "19/09/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStreamersComponent_ng_template_39_Template_button_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.viewStreamDetails(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "app-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Stream 3: Finance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h6", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Consumed Data Sources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Data Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "10 Million");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Last Run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "19/09/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStreamersComponent_ng_template_39_Template_button_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.viewStreamDetails(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, DataStreamersComponent_ng_template_39_div_79_Template, 35, 8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, DataStreamersComponent_ng_template_39_div_80_Template, 35, 8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, DataStreamersComponent_ng_template_39_div_81_Template, 35, 8, "div", 30);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r0.streamId == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.streamId == 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r0.streamId == 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.streamId == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.streamId == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.streamId == 3);
        }
      }

      function DataStreamersComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 55);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.urlSafe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      }

      var DataStreamersComponent = /*#__PURE__*/function () {
        function DataStreamersComponent(router, route, sanitizer) {
          _classCallCheck(this, DataStreamersComponent);

          this.router = router;
          this.route = route;
          this.sanitizer = sanitizer;
          this.dtColumnsReorderOptionsEmployee = {};
          this.dtColumnsReorderOptionsCompany = {};
          this.dtColumnsReorderOptionsFinance = {};
          this.streamId = 0;
          this.webUrl = "http://103.210.74.188:9021/clusters";
          this.areaChartData1 = _chart_area_chart_data_1__WEBPACK_IMPORTED_MODULE_1__["AreaChartData"].areaChart1;
          this.barChartData1 = _chart_bar_chart_data_1__WEBPACK_IMPORTED_MODULE_2__["BarChartData"].barChart1;
        }

        _createClass(DataStreamersComponent, [{
          key: "navigate",
          value: function navigate(path) {
            this.router.navigate([path]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtColumnsReorderOptionsEmployee = {
              ajax: 'fake-data/datatable-data-employee.json',
              columns: [{
                title: 'Axpert Employee ID',
                data: 'Axpert_Employee_Id'
              }, {
                title: 'Company ID',
                data: 'Company_Id'
              }, {
                title: 'Date of Joining',
                data: 'DOJ'
              }, {
                title: 'Date of Birth',
                data: 'Date_Of_Birth'
              }, {
                title: 'Date of Joining',
                data: 'Date_Of_Joining'
              }, {
                title: 'Department ID',
                data: 'Department_Id'
              }, {
                title: 'Designation ID',
                data: 'Designation_Id'
              }, {
                title: 'Disability',
                data: 'Disability'
              }, {
                title: 'Employee Code',
                data: 'Employee_Code'
              }, {
                title: 'Employee ID',
                data: 'Employee_Id'
              }, {
                title: 'Gender',
                data: 'Gender'
              }, {
                title: 'IKYA Location',
                data: 'IKYA_Location'
              }, {
                title: 'Last Working Day',
                data: 'Last_Working_Day'
              }, {
                title: 'Loss Of Pay Days',
                data: 'Loss_Of_Pay_Days'
              }, {
                title: 'Marital Status',
                data: 'Marital_Status'
              }, {
                title: 'Month Days',
                data: 'Month_Days'
              }, {
                title: 'Pay Category Id',
                data: 'Pay_Category_Id'
              }, {
                title: 'Reason Of Leaving',
                data: 'Reason_Of_Leaving'
              }, {
                title: 'Resign Status',
                data: 'Resign_Status'
              }, {
                title: 'Resignation Date',
                data: 'Resignation_Date'
              }, {
                title: 'Work Location ID',
                data: 'Work_Location_Id'
              }, {
                title: 'Working Days',
                data: 'Working_Days'
              }, {
                title: 'Attendance CreatedOn',
                data: 'attendance_CreatedOn'
              }, {
                title: 'Attendance Effective Date',
                data: 'attendance_Effective_Date'
              }, {
                title: 'Employee CreatedOn',
                data: 'employee_CreatedOn'
              }, {
                title: 'Employee Effective Date',
                data: 'employee_Effective_Date'
              }, {
                title: 'Employment Detail Created On',
                data: 'employment_detail_CreatedOn'
              }],
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptionsCompany = {
              ajax: 'fake-data/datatable-data-company.json',
              columns: [{
                'title': 'Company Code',
                'data': 'Company_Code'
              }, {
                'title': 'Segment ID',
                'data': 'Segment_Id'
              }, {
                'title': 'Company ID',
                'data': 'Company_Id'
              }, {
                'title': 'Effective Date',
                'data': 'Effective_Date'
              }, {
                'title': 'Sap Code',
                'data': 'SAP_Code'
              }, {
                'title': 'Payroll Type',
                'data': 'Payroll_Type'
              }, {
                'title': 'Reimbursement Type',
                'data': 'Reimbursement_Type'
              }, {
                'title': 'Billing Type',
                'data': 'Billing_Type'
              }, {
                'title': 'Client Since',
                'data': 'Client_Since'
              }, {
                'title': 'Company Active',
                'data': 'Company_Active'
              }, {
                'title': 'Tat',
                'data': 'TAT'
              }, {
                'title': 'City ID',
                'data': 'City_Id'
              }, {
                'title': 'Zone Tagging',
                'data': 'Zone_Tagging'
              }, {
                'title': 'Mis Name',
                'data': 'Mis_Name'
              }, {
                'title': 'Business Unit Name ID',
                'data': 'Business_Unit_Name_id'
              }, {
                'title': 'Segment Name',
                'data': 'Segment_Name'
              }, {
                'title': 'Segment Created On',
                'data': 'segment_CreatedOn'
              }, {
                'title': 'Is Active',
                'data': 'IsActive'
              }, {
                'title': 'Company Name',
                'data': 'CompanyName'
              }],
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.dtColumnsReorderOptionsFinance = {
              ajax: 'fake-data/datatable-data-finance.json',
              columns: [{
                'title': 'Company ID',
                'data': 'Company_Id'
              }, {
                'title': 'Amount',
                'data': 'Amount'
              }, {
                'title': 'Billing Client Name',
                'data': 'BillingClientName'
              }, {
                'title': 'Billing State Name',
                'data': 'BillingStateName'
              }, {
                'title': 'CGST Amount',
                'data': 'CGST_Amount'
              }, {
                'title': 'CGST Percentage',
                'data': 'CGST_Percentage'
              }, {
                'title': 'City ID',
                'data': 'City_Id'
              }, {
                'title': 'Gst Invoice Created on',
                'data': 'gstinvoice_CreatedOn'
              }, {
                'title': 'Input Date',
                'data': 'Input_Date'
              }, {
                'title': 'Invoice Date',
                'data': 'Invoice_Date'
              }, {
                'title': 'Invoice Number',
                'data': 'Invoice_Number'
              }, {
                'title': 'Net Amount',
                'data': 'Net_Amount'
              }, {
                'title': 'No Of Employees',
                'data': 'No_Of_Employees'
              }, {
                'title': 'Quess Company Name',
                'data': 'QuessCompanyName'
              }, {
                'title': 'Service Charge',
                'data': 'Service_Charge'
              }, {
                'title': 'Service Charge Amount',
                'data': 'Service_Charge_Amount'
              }, {
                'title': 'SGST Amount',
                'data': 'SGST_Amount'
              }, {
                'title': 'SGST Percentage',
                'data': 'SGST_Percentage'
              }, {
                'title': 'Shipping Client Name',
                'data': 'ShippingClientName'
              }, {
                'title': 'Shipping State Name',
                'data': 'ShippingStateName'
              }, {
                'title': 'Invoice Collection Created on',
                'data': 'invoice_collection_CreatedOn'
              }, {
                'title': 'On Account Amount',
                'data': 'On_Account_Amount'
              }, {
                'title': 'Total Collection Amount',
                'data': 'Total_Collection_Amount'
              }, {
                'title': 'Total Tds Amount',
                'data': 'Total_Tds_Amount'
              }, {
                'title': 'Category',
                'data': 'Category'
              }, {
                'title': 'Location Id',
                'data': 'Location_Id'
              }, {
                'title': 'Yr Of Service',
                'data': 'Yr_Of_Service'
              }, {
                'title': 'Lop',
                'data': 'LOP'
              }, {
                'title': 'Department',
                'data': 'Department'
              }, {
                'title': 'Designation',
                'data': 'Designation'
              }, {
                'title': 'Employee Id',
                'data': 'Employee_Id'
              }, {
                'title': 'Company Name',
                'data': 'Company_Name'
              }, {
                'title': 'Employee Name',
                'data': 'Employee_Name'
              }, {
                'title': 'Working Days',
                'data': 'Working_Days'
              }, {
                'title': 'Resign Status',
                'data': 'Resign_Status'
              }, {
                'title': 'Basic',
                'data': 'Basic'
              }, {
                'title': 'Hra',
                'data': 'HRA'
              }, {
                'title': 'Esi',
                'data': 'ESI'
              }, {
                'title': 'Gross',
                'data': 'GROSS'
              }, {
                'title': 'Pf',
                'data': 'PF'
              }, {
                'title': 'Egross',
                'data': 'EGROSS'
              }, {
                'title': 'Netpay',
                'data': 'NETPAY'
              }, {
                'title': 'Eresi',
                'data': 'ERESI'
              }, {
                'title': 'Totded',
                'data': 'TOTDED'
              }, {
                'title': 'Tds',
                'data': 'TDS'
              }, {
                'title': 'Ctc',
                'data': 'CTC'
              }, {
                'title': 'Esigross',
                'data': 'ESIGROSS'
              }, {
                'title': 'Pay Period',
                'data': 'Pay_Period'
              }, {
                'title': 'Pay Period Id',
                'data': 'Pay_Period_ID'
              }],
              responsive: true,
              dom: 'Bfrtip',
              buttons: ['csv', 'excel', 'print']
            };
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.webUrl);
          }
        }, {
          key: "viewStreamDetails",
          value: function viewStreamDetails(streamId) {
            if (this.streamId != streamId) {
              this.streamId = streamId;
            } else {
              this.streamId = 0;
            }

            switch (this.streamId) {
              case 1:
                this.areaChartData1 = _chart_area_chart_data_1__WEBPACK_IMPORTED_MODULE_1__["AreaChartData"].areaChart1;
                this.barChartData1 = _chart_bar_chart_data_1__WEBPACK_IMPORTED_MODULE_2__["BarChartData"].barChart1;
                break;

              case 2:
                this.areaChartData1 = _chart_area_chart_data_1__WEBPACK_IMPORTED_MODULE_1__["AreaChartData"].areaChart2;
                this.barChartData1 = _chart_bar_chart_data_1__WEBPACK_IMPORTED_MODULE_2__["BarChartData"].barChart2;
                break;

              case 3:
                this.areaChartData1 = _chart_area_chart_data_1__WEBPACK_IMPORTED_MODULE_1__["AreaChartData"].areaChart3;
                this.barChartData1 = _chart_bar_chart_data_1__WEBPACK_IMPORTED_MODULE_2__["BarChartData"].barChart3;
                break;

              default:
                this.streamId = 0;
            }
          }
        }]);

        return DataStreamersComponent;
      }();

      DataStreamersComponent.ɵfac = function DataStreamersComponent_Factory(t) {
        return new (t || DataStreamersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
      };

      DataStreamersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataStreamersComponent,
        selectors: [["app-data-streamers"]],
        decls: 42,
        vars: 1,
        consts: [[1, "row"], [1, "col-md-12"], [1, "md-stepper"], [1, "md-step", 3, "click"], [1, "md-step-circle"], [1, "feather", "icon-file"], [1, "md-step-title"], [1, "md-step-bar-left"], [1, "md-step-bar-right"], [1, "fas", "fa-warehouse", "icon-droplet"], [1, "md-step", "active"], [1, "feather", "icon-cloud-off"], [1, "fa", "fa-database", "icon-sidebar"], ["cardClass", "tab-card", 3, "hidHeader"], ["title", "Streams", 1, "bg-light", "d-inline-block", "mr-2", "border", "border-primary"], ["ngbTabContent", ""], ["title", "Dashboard", 1, "bg-light", "d-inline-block", "mr-2", "border", "border-primary"], [1, "col-4"], ["cardclass", "user-card2 overflow-hidden", "blockclass", "text-center p-0", 1, "ng-tns-c92-177", 3, "hidHeader", "ngClass"], [1, "ng-tns-c92-177", "ng-trigger", "ng-trigger-cardRemove", "user-card2", "overflow-hidden", 2, "opacity", "1"], [1, "card-body", "ng-tns-c92-177", "text-center", "p-0", "ng-star-inserted"], [1, "p-20", "p-b-0", "ng-tns-c92-177"], [1, "m-b-15"], [1, "risk-rate"], [1, "m-b-20", "m-t-15"], [1, "row", "justify-content-center", "m-t-10", "b-t-default", "m-l-0", "m-r-0"], [1, "col", "m-t-15", "b-r-default"], [1, "text-muted"], [1, "col", "m-t-15"], [1, "btn", "btn-success", "btn-block", "ng-tns-c92-177", 3, "click"], ["class", "row", 4, "ngIf"], [1, "ng-tns-c92-50", 3, "hidHeader"], [1, "ng-tns-c92-50", "ng-trigger", "ng-trigger-cardRemove", 2, "opacity", "1"], [1, "card-body", "ng-tns-c92-50", "ng-star-inserted"], [1, "row", "ng-tns-c92-50"], [1, "col-12"], [1, "text-c-green", "mb-0", 2, "text-align", "center"], [1, "col-12", 2, "text-align", "center", "margin-top", "10px"], [1, "row", "mt-6", "ng-tns-c92-50", 2, "margin-top", "20px", "padding", "10px", "background", "#9ccc65", "border-radius", "2px"], [2, "color", "white"], [1, "ml-6", 2, "font-size", "0.83rem", "color", "white"], [1, "col-4", "align-self-center"], [1, "fas", "fa-arrow-circle-right", 2, "color", "white", "font-size", "40px", "margin-left", "25%"], ["chartID", "bar-chart-3-cac", 3, "chartConfig"], [1, "col-8"], ["cardTitle", "Employee Stream", 3, "options"], ["chartID", "area-chart-1-cac", 3, "chartConfig"], [1, "col-sm-12"], ["cardTitle", "Employee Datamart", "cardClass", "card-datatable", 3, "options"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions"], ["cardTitle", "Company Stream", 3, "options"], ["cardTitle", "Company Datamart", "cardClass", "card-datatable", 3, "options"], ["cardTitle", "Finance Stream", 3, "options"], ["cardTitle", "Finance Datamart", "cardClass", "card-datatable", 3, "options"], ["width", "100%", "height", "700px", "frameBorder", "0", "allowFullScreen", "true", 3, "src"]],
        template: function DataStreamersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStreamersComponent_Template_div_click_3_listener() {
              return ctx.navigate("microservices");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Microservices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStreamersComponent_Template_div_click_11_listener() {
              return ctx.navigate("data-mart");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Data Mart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Streamers & Transformers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStreamersComponent_Template_div_click_27_listener() {
              return ctx.navigate("data-source");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Data Sources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-card", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-tab", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DataStreamersComponent_ng_template_39_Template, 82, 15, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ngb-tab", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DataStreamersComponent_ng_template_41_Template, 1, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);
          }
        },
        directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__["ApexChartComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtc3RyZWFtZXJzL2RhdGEtc3RyZWFtZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStreamersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-data-streamers',
            templateUrl: './data-streamers.component.html',
            styleUrls: ['./data-streamers.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/health-dashboard/chart/chart-data.ts":
    /*!******************************************************!*\
      !*** ./src/app/health-dashboard/chart/chart-data.ts ***!
      \******************************************************/

    /*! exports provided: ChartDB */

    /***/
    function srcAppHealthDashboardChartChartDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDB", function () {
        return ChartDB;
      });

      var ChartDB = function ChartDB() {
        _classCallCheck(this, ChartDB);
      };

      ChartDB.transactions1CAC = {
        chart: {
          type: 'bar',
          height: 60,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#4680ff'],
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Inbound';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      ChartDB.transactions2CAC = {
        chart: {
          type: 'bar',
          height: 65,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ff5252'],
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Outbound';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      ChartDB.powerCardChartData1 = {
        chart: {
          type: 'line',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ff5252'],
        stroke: {
          curve: 'smooth',
          width: 3
        },
        series: [{
          name: 'series1',
          data: [55, 35, 75, 50, 90, 50]
        }],
        yaxis: {
          min: 10,
          max: 100
        },
        tooltip: {
          theme: 'dark',
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Power';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      ChartDB.powerCardChartData2 = {
        chart: {
          type: 'line',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ff5252'],
        stroke: {
          curve: 'smooth',
          width: 3
        },
        series: [{
          name: 'series1',
          data: [55, 35, 75, 50, 90, 50]
        }],
        yaxis: {
          min: 10,
          max: 100
        },
        tooltip: {
          theme: 'dark',
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Power';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      ChartDB.powerCardChartData3 = {
        chart: {
          type: 'line',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ff5252'],
        stroke: {
          curve: 'smooth',
          width: 3
        },
        series: [{
          name: 'series1',
          data: [55, 35, 75, 50, 90, 50]
        }],
        yaxis: {
          min: 10,
          max: 100
        },
        tooltip: {
          theme: 'dark',
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Power';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      ChartDB.powerCardChartData4 = {
        chart: {
          type: 'line',
          height: 75,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ff5252'],
        stroke: {
          curve: 'smooth',
          width: 3
        },
        series: [{
          name: 'series1',
          data: [55, 35, 75, 50, 90, 50]
        }],
        yaxis: {
          min: 10,
          max: 100
        },
        tooltip: {
          theme: 'dark',
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Power';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      ChartDB.trafficCAC1 = {
        chart: {
          height: 300,
          type: 'donut'
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: false
          }
        },
        series: [86, 14],
        colors: ['#4680ff', '#ffffff', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252', '#7759de'],
        labels: ['RAM'],
        legend: {
          show: true,
          position: 'bottom'
        }
      };
      /***/
    },

    /***/
    "./src/app/health-dashboard/health-dashboard.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/health-dashboard/health-dashboard.component.ts ***!
      \****************************************************************/

    /*! exports provided: HealthDashboardComponent */

    /***/
    function srcAppHealthDashboardHealthDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthDashboardComponent", function () {
        return HealthDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart/chart-data */
      "./src/app/health-dashboard/chart/chart-data.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var HealthDashboardComponent = /*#__PURE__*/function () {
        function HealthDashboardComponent(sanitizer) {
          _classCallCheck(this, HealthDashboardComponent);

          this.sanitizer = sanitizer;
          this.healthUrl = "https://app.netdata.cloud/spaces/easerverstats/rooms/alpharoom/nodes/0e3c2a24-faad-11ea-bbac-fa163e244b4a#menu_apps";
          this.serverId = 0;
          this.powerCardChartData1 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData1;
          this.powerCardChartData2 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData2;
          this.powerCardChartData3 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData3;
          this.powerCardChartData4 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData4;
          this.chartDB = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"];
        }

        _createClass(HealthDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.healthUrl);
          }
        }, {
          key: "viewServerDetails",
          value: function viewServerDetails(serverId) {
            this.serverId ? this.serverId = 0 : this.serverId = serverId;

            switch (this.serverId) {
              case 1:
                this.powerCardChartData1 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData1;
                this.powerCardChartData2 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData2;
                this.powerCardChartData3 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData3;
                this.powerCardChartData4 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData4;
                break;

              case 2:
                this.powerCardChartData1 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData1;
                this.powerCardChartData2 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData2;
                this.powerCardChartData3 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData3;
                this.powerCardChartData4 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData4;
                break;

              case 3:
                this.powerCardChartData1 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData1;
                this.powerCardChartData2 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData2;
                this.powerCardChartData3 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData3;
                this.powerCardChartData4 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData4;
                break;

              case 4:
                this.powerCardChartData1 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData1;
                this.powerCardChartData2 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData2;
                this.powerCardChartData3 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData3;
                this.powerCardChartData4 = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"].powerCardChartData4;
                break;

              default:
                this.serverId = 0;
            }
          }
        }]);

        return HealthDashboardComponent;
      }();

      HealthDashboardComponent.ɵfac = function HealthDashboardComponent_Factory(t) {
        return new (t || HealthDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      HealthDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HealthDashboardComponent,
        selectors: [["app-health-dashboard"]],
        decls: 2,
        vars: 1,
        consts: [[1, "row"], ["width", "100%", "height", "750px", "frameBorder", "0", "allowFullScreen", "true", 3, "src"]],
        template: function HealthDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.urlSafe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC1kYXNoYm9hcmQvaGVhbHRoLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-health-dashboard',
            templateUrl: './health-dashboard.component.html',
            styleUrls: ['./health-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent() {
          _classCallCheck(this, LoginComponent);
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fbClicked = true;
          }
        }, {
          key: "toggleBck",
          value: function toggleBck() {
            this.fbClicked = !this.fbClicked;
          }
        }, {
          key: "navigate",
          value: function navigate() {
            window.location.href = "/microservices";
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)();
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 31,
        vars: 1,
        consts: [[1, "auth-wrapper", "align-items-stretch", 3, "ngClass"], [1, "auth-side-form", 2, "background", "rgba(0,0,0,0.6)"], [1, "auth-content"], ["src", "assets/images/auth/auth-logo-dark.png", "alt", "", 1, "img-fluid", "mb-4", "d-block", "d-xl-none", "d-lg-none"], [1, "mb-4", "f-w-400", 2, "color", "white"], [1, "input-group", "mb-3"], ["type", "email", "placeholder", "Email address", 1, "form-control"], [1, "input-group", "mb-4"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "btn", "btn-block", "btn-primary", "mb-0", 3, "click"], [1, "text-center"], [1, "saprator", "my-4"], [1, "btn", "text-white", "bg-facebook", "mb-2", "mr-2", "wid-40", "px-0", "hei-40", "rounded-circle", 3, "click"], [1, "fab", "fa-facebook-f"], [1, "btn", "text-white", "bg-googleplus", "mb-2", "mr-2", "wid-40", "px-0", "hei-40", "rounded-circle"], [1, "fab", "fa-google-plus-g"], [1, "btn", "text-white", "bg-twitter", "mb-2", "wid-40", "px-0", "hei-40", "rounded-circle"], [1, "fab", "fa-twitter"], [1, "mb-2", "text-muted"], [1, "f-w-400"], [1, "mb-0", "text-muted"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Signin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() {
              return ctx.navigate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Signin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "OR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
              return ctx.toggleBck();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Forgot password? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Don\u2019t have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Signup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.fbClicked ? "aut-bg-img" : "aut-bg2-img");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/microservices/chart/support-chart-data-1.ts":
    /*!*************************************************************!*\
      !*** ./src/app/microservices/chart/support-chart-data-1.ts ***!
      \*************************************************************/

    /*! exports provided: SupportChartData1 */

    /***/
    function srcAppMicroservicesChartSupportChartData1Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData1", function () {
        return SupportChartData1;
      });

      var SupportChartData1 = function SupportChartData1() {
        _classCallCheck(this, SupportChartData1);
      };

      SupportChartData1.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#4680ff'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/microservices/chart/support-chart-data-2.ts":
    /*!*************************************************************!*\
      !*** ./src/app/microservices/chart/support-chart-data-2.ts ***!
      \*************************************************************/

    /*! exports provided: SupportChartData2 */

    /***/
    function srcAppMicroservicesChartSupportChartData2Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportChartData2", function () {
        return SupportChartData2;
      });

      var SupportChartData2 = function SupportChartData2() {
        _classCallCheck(this, SupportChartData2);
      };

      SupportChartData2.supportChartData = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#9ccc65'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [{
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(seriesName) {
                return 'Ticket ';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/microservices/microservices.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/microservices/microservices.component.ts ***!
      \**********************************************************/

    /*! exports provided: MicroservicesComponent */

    /***/
    function srcAppMicroservicesMicroservicesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MicroservicesComponent", function () {
        return MicroservicesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart/support-chart-data-1 */
      "./src/app/microservices/chart/support-chart-data-1.ts");
      /* harmony import */


      var _chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chart/support-chart-data-2 */
      "./src/app/microservices/chart/support-chart-data-2.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../theme/shared/components/card/card.component */
      "./src/app/theme/shared/components/card/card.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
      /* harmony import */


      var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bar-rating */
      "./node_modules/ngx-bar-rating/__ivy_ngcc__/index.js");
      /* harmony import */


      var _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../theme/shared/components/alert/alert.component */
      "./src/app/theme/shared/components/alert/alert.component.ts");

      function MicroservicesComponent_ng_template_39_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 28);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.urlSafe1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function MicroservicesComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MicroservicesComponent_ng_template_39_ng_template_6_Template, 1, 1, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r5);
        }
      }

      function MicroservicesComponent_ng_template_41_ng_template_6_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r9.dtColumnsReorderOptions);
        }
      }

      function MicroservicesComponent_ng_template_41_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MicroservicesComponent_ng_template_41_ng_template_6_div_0_Template, 3, 1, "div", 31);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.showMinimumWagesTable);
        }
      }

      function MicroservicesComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_41_Template_a_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.enableMinimumWagesTable($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Minimum Wages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MicroservicesComponent_ng_template_41_ng_template_6_Template, 1, 1, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r7);
        }
      }

      function MicroservicesComponent_ng_template_43_ng_template_6_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var id_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", id_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r18);
        }
      }

      function MicroservicesComponent_ng_template_43_ng_template_6_div_17_option_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var company_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", company_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", company_r21.name, " ");
        }
      }

      function MicroservicesComponent_ng_template_43_ng_template_6_div_17_div_149_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-alert", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Onboarding initiated!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MicroservicesComponent_ng_template_43_ng_template_6_div_17_div_149_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_43_ng_template_6_div_17_div_149_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r23.hire();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Onboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MicroservicesComponent_ng_template_43_ng_template_6_div_17_div_149_div_9_Template, 3, 0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Positions: ", (ctx_r20.selectedCompany == null ? null : ctx_r20.selectedCompany.totalPositions) ? ctx_r20.selectedCompany.totalPositions : "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Closed: ", (ctx_r20.selectedCompany == null ? null : ctx_r20.selectedCompany.totalClosed) ? ctx_r20.selectedCompany.totalClosed : "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total POP Onboarded: ", (ctx_r20.selectedCompany == null ? null : ctx_r20.selectedCompany.totalPopOnboarded) ? ctx_r20.selectedCompany == null ? null : ctx_r20.selectedCompany.totalPopOnboarded : "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.showHiringSuccess);
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4) {
        return {
          "badge-success": a0,
          "badge-info": a1,
          "badge-warning": a2,
          "badge-danger": a3,
          "badge-dark": a4
        };
      };

      function MicroservicesComponent_ng_template_43_ng_template_6_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Personal Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Is Blacklisted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Aadhar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "PAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Bank Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Company Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Current Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Current Postion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Last Pay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sub-Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h6", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Document Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "PF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "UAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "ESIC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h6", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Ratings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Overall Rating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Skill:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "bar-rating", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Stability:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "bar-rating", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Select a company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "select", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_43_ng_template_6_div_17_Template_select_ngModelChange_147_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r25.selectCompany($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, MicroservicesComponent_ng_template_43_ng_template_6_div_17_option_148_Template, 2, 2, "option", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, MicroservicesComponent_ng_template_43_ng_template_6_div_17_div_149_Template, 10, 4, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r17.selectedUser.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.highestEducation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quess Employee: ", ctx_r17.selectedUser.quessEmployee == "yes" ? "yes" : "No", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Contract Expiry: ", ctx_r17.selectedUser.contractExpiry ? ctx_r17.selectedUser.contractExpiry + " months" : "NA", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](36, _c0, ctx_r17.selectedUser.hiringStatus == "Available To Hire", ctx_r17.selectedUser.hiringStatus == "Ready To Onboard", ctx_r17.selectedUser.hiringStatus == "Available To Rehire", ctx_r17.selectedUser.hiringStatus == "Not Available To Hire", ctx_r17.selectedUser.hiringStatus == "Blacklisted"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.hiringStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.dateOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.yearsOfExperience);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.isBlacklisted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.selectedUser.aadhar, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.selectedUser.panCard, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.selectedUser.bankAccountNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.selectedUser.currentCompany ? ctx_r17.selectedUser.currentCompany : "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.selectedUser.currentPosition ? ctx_r17.selectedUser.currentPosition : "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.selectedUser.lastPay ? ctx_r17.selectedUser.lastPay : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.selectedUser.subBusiness ? ctx_r17.selectedUser.subBusiness : "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.PF ? ctx_r17.selectedUser.PF : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.UAN ? ctx_r17.selectedUser.UAN : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.selectedUser.ESIC ? ctx_r17.selectedUser.ESIC : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.selectedUser.overallRating, "/5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r17.selectedUser.skillRating)("max", 5)("theme", "movie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.selectedUser.skillRating, "/5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r17.selectedUser.stabilityRating)("max", 5)("theme", "movie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.selectedUser.stabilityRating, "/5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.selectedCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.companyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.selectedCompany);
        }
      }

      function MicroservicesComponent_ng_template_43_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MicroservicesComponent_ng_template_43_ng_template_6_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Identity Card:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MicroservicesComponent_ng_template_43_ng_template_6_option_8_Template, 2, 2, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Card Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MicroservicesComponent_ng_template_43_ng_template_6_div_17_Template, 150, 42, "div", 45);
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r13.idForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.idList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.showData);
        }
      }

      function MicroservicesComponent_ng_template_43_ng_template_10_Template(rf, ctx) {}

      function MicroservicesComponent_ng_template_43_ng_template_14_Template(rf, ctx) {}

      function MicroservicesComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rapid Hire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MicroservicesComponent_ng_template_43_ng_template_6_Template, 18, 3, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Minimum Wages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MicroservicesComponent_ng_template_43_ng_template_10_Template, 0, 0, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Salary Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MicroservicesComponent_ng_template_43_ng_template_14_Template, 0, 0, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r12);
        }
      }

      function MicroservicesComponent_ng_template_45_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "API Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Minimum Wages API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In use since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "15 September 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "API Provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Quess Corporate IT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Validations done so far:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "100+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Vinay CS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "API Unit Cost:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Free");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Link to consume:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "https://edlcmsuat.quesscorp.com/api/MinimumWages/CheckWages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MicroservicesComponent_ng_template_45_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "API Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aadhar Offline XML KYC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In use since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "15 July 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "API Provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Surepass Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Validations done so far:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "50K+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "API Unit Cost:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "50 Paise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Link to consume:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "https://kyc-api.aadhaarkyc.io/api/v1/aadhaar/upload/qr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MicroservicesComponent_ng_template_45_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "API Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aadhar Offline XML KYC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In use since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "15 July 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "API Provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Surepass Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Validations done so far:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "50K+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "API Unit Cost:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "50 Paise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Link to consume:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "https://kyc-api.aadhaarkyc.io/api/v1/pan/pan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MicroservicesComponent_ng_template_45_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "API Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aadhar Offline XML KYC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In use since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "15 July 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "API Provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Surepass Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Validations done so far:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "50K+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "API Unit Cost:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2.5 Paise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Link to consume:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "https://kyc-api.aadhaarkyc.io/api/v1/bank-verification/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MicroservicesComponent_ng_template_45_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Under Development ");
        }
      }

      function MicroservicesComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Minimum Wages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MicroservicesComponent_ng_template_45_ng_template_6_Template, 46, 0, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Aadhar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MicroservicesComponent_ng_template_45_ng_template_10_Template, 46, 0, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PAN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MicroservicesComponent_ng_template_45_ng_template_14_Template, 46, 0, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bank Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MicroservicesComponent_ng_template_45_ng_template_18_Template, 46, 0, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Salary Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MicroservicesComponent_ng_template_45_ng_template_22_Template, 1, 0, "ng-template", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r29);
        }
      }

      function MicroservicesComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "HR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-card", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Finance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-card", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hiring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-card", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-card", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-card", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-card", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "VAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true)("isCardFooter", false);
        }
      }

      var MicroservicesComponent = /*#__PURE__*/function () {
        function MicroservicesComponent(calendar, sanitizer, router, route, formBuilder) {
          _classCallCheck(this, MicroservicesComponent);

          this.sanitizer = sanitizer;
          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.dtColumnsReorderOptions = {};
          this.hoveredDate = null;
          this.toDate = null;
          this.idList = ['Aadhar', 'PAN', 'Driving License'];
          this.showData = false;
          this.selectedUser = {};
          this.badgeClass = '';
          this.showHiringSuccess = false;
          this.showMinimumWagesTable = false;
          this.powerBi1 = "https://app.powerbi.com/reportEmbed?reportId=ac709cd8-ce1b-4f80-9186-e89ecbbcf535&autoAuth=true&ctid=d086aad7-5dab-4ec4-8234-a0c94fe179c4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D";
          this.powerBi2 = "";
          this.datamarts = ['Employee', 'Finance', 'Company'];
          this.selectedDatamart = this.datamarts[0];
          this.employeeData = [{
            "name": "Monika",
            "age": "33",
            "dateOfBirth": "03/29/1987",
            "panCard": "BSJK4367O",
            "gender": "F",
            "aadhar": "204693524587",
            "bankAccountNumber": "120001234567",
            "highestEducation": "BTech",
            "educationRating": "1",
            "yearsOfExperience": "8",
            "managerFeedback": "Excellent",
            "workExperienceRating": "5",
            "numberOfCompaniesPreviouslyWorked": "2",
            "stabilityRating": "3",
            "skillRating": "4",
            "isPreviousEmployee": "yes",
            "isBlacklisted": "no",
            "overallRating": "3",
            "contractStatus": "true",
            "contractExpiry": "2",
            "documentsVerified": "yes",
            "isActive": "yes",
            "mobile": "9675098605",
            "email": "monikasharmagame@gmail.com",
            "currentCompany": "SAMSUNG INDIA ELECTRONICS PRIVATE LIMITED",
            "currentPosition": "Software Engineer",
            "quessEmployee": "yes",
            "subBusiness": "IT Staffing",
            "lastPay": "28000",
            "hiringStatus": "Available To Rehire",
            "PF": "PYBOM006023703421010495",
            "UAN": "123000000000",
            "ESIC": "5603269771",
            "remark": "documents verified",
            "profileImageUrl": "https://getharbour-live1.s3.ap-south-1.amazonaws.com/1571214083_image-1187791806.jpg"
          }, {
            "name": "Atul Kumar Pandey",
            "age": "35",
            "dateOfBirth": "07/31/1998",
            "panCard": "BSJK43672",
            "gender": "F",
            "aadhar": "250134147368",
            "bankAccountNumber": "120001234567",
            "highestEducation": "PUC",
            "educationRating": "2",
            "yearsOfExperience": "2",
            "managerFeedback": "Moderate",
            "workExperienceRating": "2",
            "numberOfCompaniesPreviouslyWorked": "2",
            "stabilityRating": "2",
            "skillRating": "2",
            "isPreviousEmployee": "yes",
            "isBlacklisted": "no",
            "overallRating": "2",
            "contractStatus": "true",
            "contractExpiry": "5",
            "documentsVerified": "no",
            "isActive": "yes",
            "mobile": "8887524049",
            "email": "pandeyatul191992@gmail.com",
            "currentCompany": "Aditya group",
            "currentPosition": "Security",
            "quessEmployee": "yes",
            "subBusiness": "General Staffing",
            "lastPay": "15000",
            "hiringStatus": "Not Available To Hire",
            "PF": "PYBOM005683703421010695",
            "UAN": "100000000000",
            "ESIC": "5603369771",
            "remark": "documents verified",
            "profileImageUrl": "https://getharbour-live1.s3.ap-south-1.amazonaws.com/1570879197_image-1371260819.jpg"
          }, {
            "name": "Sharanappa Siddappa Bishmannanavar",
            "age": "34",
            "dateOfBirth": "06/16/1986",
            "panCard": "BSJK45679",
            "gender": "M",
            "aadhar": "907786601058",
            "bankAccountNumber": "120001234567",
            "highestEducation": "Graduate",
            "educationRating": "3",
            "yearsOfExperience": "10",
            "managerFeedback": "Good",
            "workExperienceRating": "5",
            "numberOfCompaniesPreviouslyWorked": "5",
            "stabilityRating": "3",
            "skillRating": "4",
            "isPreviousEmployee": "no",
            "isBlacklisted": "no",
            "overallRating": "4",
            "contractStatus": "false",
            "contractExpiry": "",
            "documentsVerified": "yes",
            "isActive": "no",
            "mobile": "8494933724",
            "email": "kr.prakash33@gmail.com",
            "currentCompany": "Jindal group",
            "currentPosition": "CA",
            "quessEmployee": "no",
            "subBusiness": "",
            "lastPay": "300000",
            "hiringStatus": "Available To Hire",
            "PF": "PYBOM006033703421010785",
            "UAN": "100000000000",
            "ESIC": "5603370771",
            "remark": "documents verified",
            "profileImageUrl": "https://getharbour-live1.s3.ap-south-1.amazonaws.com/1533027708_image617203940.jpg"
          }, {
            "name": "Rishi Raj",
            "age": "35",
            "dateOfBirth": "04/12/1990",
            "panCard": "BSJK4569K",
            "gender": "F",
            "aadhar": "100302449395",
            "bankAccountNumber": "900012345627",
            "highestEducation": "Master Certificate",
            "educationRating": "5",
            "yearsOfExperience": "3",
            "managerFeedback": "Good",
            "workExperienceRating": "4",
            "numberOfCompaniesPreviouslyWorked": "1",
            "stabilityRating": "4",
            "skillRating": "3",
            "isPreviousEmployee": "yes",
            "isBlacklisted": "no",
            "overallRating": "4",
            "contractStatus": "true",
            "contractExpiry": "14",
            "documentsVerified": "yes",
            "isActive": "yes",
            "mobile": "9572868806",
            "email": "rishiraj373@gmail.com",
            "currentCompany": "Aditya group",
            "currentPosition": "Manager",
            "quessEmployee": "yes",
            "subBusiness": "General Staffing",
            "lastPay": "75000",
            "hiringStatus": "Not Available To Hire",
            "PF": "PYBOM006823703421010495",
            "UAN": "100000000000",
            "ESIC": "5603370881",
            "remark": "documents verified",
            "profileImageUrl": "https://getharbour-live1.s3.ap-south-1.amazonaws.com/1572521640_image8902691431167406611.jpg"
          }, {
            "name": "Annpurna",
            "age": "38",
            "dateOfBirth": "04/17/1992",
            "panCard": "BSJK4785P",
            "gender": "M",
            "aadhar": "805310281680",
            "bankAccountNumber": "000123456347",
            "highestEducation": "Master",
            "educationRating": "4",
            "yearsOfExperience": "6",
            "managerFeedback": "Average",
            "workExperienceRating": "5",
            "numberOfCompaniesPreviouslyWorked": "2",
            "stabilityRating": "3",
            "skillRating": "3",
            "isPreviousEmployee": "yes",
            "isBlacklisted": "yes",
            "overallRating": "4",
            "contractStatus": "true",
            "contractExpiry": "2",
            "documentsVerified": "yes",
            "isActive": "yes",
            "mobile": "9718465948",
            "email": "anapurnashrivastva@gmail.com",
            "currentCompany": "PHILIPS INDIA LIMITED",
            "currentPosition": "ISD",
            "quessEmployee": "no",
            "subBusiness": "General Staffing",
            "lastPay": "",
            "hiringStatus": "Blacklisted",
            "PF": "PYBOM006953703421010695",
            "UAN": "100000000000",
            "ESIC": "5605370771",
            "remark": "documents verified",
            "profileImageUrl": "https://getharbour-live1.s3.ap-south-1.amazonaws.com/1507280994_profile_img_url.jpg"
          }, {
            "name": "Neelam",
            "age": "25",
            "dateOfBirth": "09/27/1994",
            "panCard": "BSJK4785Q",
            "gender": "M",
            "aadhar": "468598406869",
            "bankAccountNumber": "4000123456723",
            "highestEducation": "Graduate",
            "educationRating": "3",
            "yearsOfExperience": "7",
            "managerFeedback": "Good",
            "workExperienceRating": "5",
            "numberOfCompaniesPreviouslyWorked": "4",
            "stabilityRating": "2",
            "skillRating": "2",
            "isPreviousEmployee": "yes",
            "isBlacklisted": "no",
            "overallRating": "3",
            "contractStatus": "false",
            "contractExpiry": "",
            "documentsVerified": "no",
            "isActive": "yes",
            "mobile": "9610931993",
            "email": "nkatewa210@gmail.com",
            "currentCompany": "",
            "currentPosition": "",
            "quessEmployee": "no",
            "subBusiness": "",
            "lastPay": "",
            "hiringStatus": "Ready To Onboard",
            "PF": "-",
            "UAN": "-",
            "ESIC": "-",
            "remark": "documents needs to be verified",
            "profileImageUrl": "https://getharbour-live1.s3.ap-south-1.amazonaws.com/1569160611_image2435094178282071866.jpg"
          }];
          this.companyData = [{
            'id': 0,
            'name': 'PEPCART LOGISTICS PRIVATE LIMITED',
            'totalPositions': '40',
            'totalClosed': '2',
            'totalPopOnboarded': '0'
          }, {
            'id': 1,
            'name': 'VODAFONE MOBILE SERVICE LIMITED',
            'totalPositions': '124',
            'totalClosed': '26',
            'totalPopOnboarded': '17'
          }, {
            'id': 2,
            'name': 'PROCTER AND GAMBLE HOME PRODUCTS PRIVATE LIMITED',
            'totalPositions': '36',
            'totalClosed': '12',
            'totalPopOnboarded': '8'
          }, {
            'id': 3,
            'name': 'IDBI BANK LIMITED',
            'totalPositions': '17',
            'totalClosed': '1',
            'totalPopOnboarded': '1'
          }, {
            'id': 4,
            'name': 'LG ELECTRONICS INDIA PRIVATE LTD',
            'totalPositions': '15',
            'totalClosed': '4',
            'totalPopOnboarded': '0'
          }, {
            'id': 5,
            'name': 'SBI CARDS AND PAYMENT SERVICES PVT LTD',
            'totalPositions': '2319',
            'totalClosed': '150',
            'totalPopOnboarded': '65'
          }];
          this.supportChartData1 = _chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_1__["SupportChartData1"].supportChartData;
          this.supportChartData2 = _chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_2__["SupportChartData2"].supportChartData;
          this.fromDate = calendar.getToday();
          this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        }

        _createClass(MicroservicesComponent, [{
          key: "navigate",
          value: function navigate(path) {
            this.router.navigate([path]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtColumnsReorderOptions = {
              ajax: 'fake-data/datatable-minimum-wages.json',
              columns: [{
                title: 'id',
                data: 'id'
              }, {
                title: 'wage_designation_id',
                data: 'wage_designation_id'
              }, {
                title: 'company_designation',
                data: 'company_designation'
              }, {
                title: 'company_id',
                data: 'company_id'
              }, {
                title: 'company_name',
                data: 'company_name'
              }, {
                title: 'parent_client_id',
                data: 'parent_client_id'
              }, {
                title: 'wage_id',
                data: 'wage_id'
              }, {
                title: 'state_id',
                data: 'state_id'
              }, {
                title: 'state_name',
                data: 'state_name'
              }, {
                title: 'industry_id',
                data: 'industry_id'
              }, {
                title: 'industry_name',
                data: 'industry_name'
              }, {
                title: 'class_of_employment',
                data: 'class_of_employment'
              }, {
                title: 'zone',
                data: 'zone'
              }, {
                title: 'area',
                data: 'area'
              }, {
                title: 'designation',
                data: 'designation'
              }, {
                title: 'class_of_workers',
                data: 'class_of_workers'
              }, {
                title: 'food_accn_provided',
                data: 'food_accn_provided'
              }, {
                title: 'category',
                data: 'category'
              }, {
                title: 'sub_category',
                data: 'sub_category'
              }, {
                title: 'qualification_experience',
                data: 'qualification_experience'
              }, {
                title: 'grade',
                data: 'grade'
              }, {
                title: 'district',
                data: 'district'
              }, {
                title: 'basic_per_day',
                data: 'basic_per_day'
              }, {
                title: 'basic_per_month',
                data: 'basic_per_month'
              }, {
                title: 'hra_per_month',
                data: 'hra_per_month'
              }, {
                title: 'vda_per_day',
                data: 'vda_per_day'
              }, {
                title: 'vda_per_month',
                data: 'vda_per_month'
              }, {
                title: 'total_per_day',
                data: 'total_per_day'
              }, {
                title: 'total_per_month',
                data: 'total_per_month'
              }, {
                title: 'basic_general',
                data: 'basic_general'
              }, {
                title: 'basic_it',
                data: 'basic_it'
              }, {
                title: 'da_general',
                data: 'da_general'
              }, {
                title: 'da_it',
                data: 'da_it'
              }, {
                title: 'special_allowance',
                data: 'special_allowance'
              }, {
                title: 'minimum_wages_general',
                data: 'minimum_wages_general'
              }, {
                title: 'minimum_wages_it',
                data: 'minimum_wages_it'
              }, {
                title: 'version',
                data: 'version'
              }],
              dom: 'Bfrtip',
              scrollX: true,
              buttons: ['csv', 'excel', 'print']
            };
            this.idForm = this.formBuilder.group({
              idControl: ['Aadhar'],
              idNumberControl: ['']
            });
            this.urlSafe1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.powerBi1);
            this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.powerBi2);
          }
        }, {
          key: "selectDatamart",
          value: function selectDatamart(event) {
            this.selectedDatamart = event;
          }
        }, {
          key: "selectCompany",
          value: function selectCompany(company) {
            this.selectedCompany = company;
            console.log(this.selectedCompany);
          }
        }, {
          key: "hire",
          value: function hire() {
            this.showHiringSuccess = true;
          }
        }, {
          key: "clearTab",
          value: function clearTab($event) {
            this.showData = false;
            this.idForm.patchValue({
              idNumberControl: ''
            });
          }
        }, {
          key: "enableMinimumWagesTable",
          value: function enableMinimumWagesTable($event) {
            this.showMinimumWagesTable = true;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.selectedCompany = null;
            this.showHiringSuccess = false;
            console.log(this.idForm.value);
            this.selectedUser = this.employeeData.find(function (employee) {
              if (_this.idForm.value.idControl == 'Aadhar') {
                return employee.aadhar == _this.idForm.value.idNumberControl;
              } else if (_this.idForm.value.idControl == 'PAN') {
                return employee.panCard == _this.idForm.value.idNumberControl;
              }
            }); //hiring status logic
            // if(this.selectedUser){
            //   if(this.selectedUser['isBlacklisted'] !== 'yes' && this.selectedUser['contractExpiry'] <= 3 && this.selectedUser['documentsVerified'] === 'yes'){
            //     if( this.selectedUser['isActive'] == 'yes'){
            //       this.selectedUser['hiringStatus'] = 'Ready To Rehire';
            //     }
            //     else{
            //       this.selectedUser['hiringStatus'] = 'Ready To Onboard';
            //     }
            //   }else if(this.selectedUser['isBlacklisted'] !== 'yes' && (this.selectedUser['contractExpiry'] > 3)){
            //     this.selectedUser['hiringStatus'] = 'Unable To Hire';
            //   }else{
            //     this.selectedUser['hiringStatus'] = 'Blacklisted';
            //   }
            //   this.showData = true;
            // }

            this.showData = true;
          }
        }, {
          key: "generateReport",
          value: function generateReport() {
            console.log('in here'); // this.formattedStartDate = this.fromDate.year+'-'+ (this.fromDate.month < 10 ? '0'+this.fromDate.month: this.fromDate.month) +'-'+ (this.fromDate.day < 10 ? '0'+this.fromDate.day: this.fromDate.day);
            // this.formattedEndDate = this.toDate.year+'-'+ (this.toDate.month < 10 ? '0'+this.toDate.month: this.toDate.month) +'-'+ (this.toDate.day < 10 ? '0'+this.toDate.day: this.toDate.day);
            // //this.fromDate? this.formattedStartDate = this.fromDate. : ;
            // //this.formattedEndDate = this.toDate;
            // this.reportMaker.generateReport(this.selectedDatamart,this.formattedStartDate,this.formattedEndDate).subscribe(resp=>{
            //   console.log(resp);
            //   this.router.navigate(['report-viewer']);
            // },
            // err => {
            //   console.log('HTTP Error', err);
            //   this.router.navigate(['report-viewer']);
            // });
          }
        }]);

        return MicroservicesComponent;
      }();

      MicroservicesComponent.ɵfac = function MicroservicesComponent_Factory(t) {
        return new (t || MicroservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]));
      };

      MicroservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MicroservicesComponent,
        selectors: [["app-microservices"]],
        decls: 48,
        vars: 1,
        consts: [[1, "row"], [1, "col-md-12"], [1, "md-stepper"], [1, "md-step", "active"], [1, "md-step-circle"], [1, "feather", "icon-file"], [1, "md-step-title"], [1, "md-step-bar-left"], [1, "md-step-bar-right"], [1, "md-step", 3, "click"], [1, "fas", "fa-warehouse", "icon-droplet"], [1, "feather", "icon-cloud-off"], [1, "fa", "fa-database", "icon-sidebar"], ["cardClass", "tab-card", 3, "hidHeader"], [3, "tabChange"], ["title", "Dashboard", 1, "bg-light", "d-inline-block", "mr-2", "border", "border-primary"], ["ngbTabContent", ""], ["title", "Reports"], ["title", "Tools"], ["title", "Open API"], ["title", "Widgets"], [1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", "mr-2", "border-right", "border-top", "border-bottom", "rounded"], ["nav", "ngbNav"], ["ngbNavItem", "overview"], ["ngbNavLink", ""], ["ngbNavContent", ""], [2, "width", "100%", 3, "ngbNavOutlet"], ["width", "100%", "height", "700px", "frameBorder", "0", "allowFullScreen", "true", 3, "src"], ["ngbNavItem", "minimumWages"], ["ngbNavLink", "", 3, "click"], ["class", "row p-10 m-10", 4, "ngIf"], [1, "row", "p-10", "m-10"], [1, "col-sm-11", "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions"], ["ngbNavItem", "rapidHire"], ["ngbNavItem", "salaryCalculator"], [1, "col-4"], [3, "formGroup", "ngSubmit"], [1, "row", "justify-content-start"], [2, "margin", "10px"], ["formControlName", "idControl", "id", "idControl", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "idNumberControl", "id", "idNumber", "placeholder", "Enter you id number", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 2, "margin", "10px"], ["id", "details", 4, "ngIf"], [3, "value"], ["id", "details"], ["cardClass", "user-card2 overflow-hidden", "blockclass", "text-center p-0", 3, "hidHeader"], [1, "col-sm-3", "user-profile-side"], [1, "p-20", "text-center"], [1, "m-b-25"], ["height", "100", "width", "100", "alt", "User-Profile-Image", 1, "img-radius", 3, "src"], [1, "f-w-600"], [1, "badge", "p-10", "f-15", 3, "ngClass"], [1, "col-sm-6"], [1, "p-20"], [1, "m-b-30", "p-b-5", "b-b-default", "mr-2", "border-bottom", "f-w-600"], [1, "col-sm-4"], [1, "m-b-10", "f-w-600"], [1, "text-muted", "f-w-400"], ["href", "#", "target", "_top"], [1, "m-b-10", "f-w-600", "text-green"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", 2, "color", "#4680ff"], [1, "m-b-20", "p-b-5", "mr-2", "border-bottom", "b-b-default", "f-w-600"], [1, "col-sm-3"], [1, "m-b-20", "p-b-5", "b-b-default", "mr-2", "border-bottom", "f-w-600"], [1, "col-12", "m-b-20"], [1, "row", "justify-content-center"], [1, "hei-150", "wid-150", "d-inline-block", "mr-2", "b-wid-4", "border", "border-primary", "rounded-circle"], [1, "m-t-45", "m-l-30", "d-inline-block"], [1, "m-l-50", "f-30", "f-w-600", "d-inline-block"], [1, "m-b-10"], ["readOnly", "true", 3, "rate", "max", "theme"], [1, "m-l-5"], [1, "form-group"], [1, "f-w-600", "mr-2", "border-bottom"], ["id", "companyListSelection", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "p-10", 4, "ngIf"], [3, "ngValue"], [1, "p-10"], [1, "m-t-10"], [1, "btn", "btn-primary", 3, "click"], ["class", "m-t-10", 4, "ngIf"], ["type", "success", "dismiss", "true"], ["ngbNavItem", "aadhar"], ["ngbNavItem", "pan"], ["ngbNavItem", "bankAccount"], [1, "row", "m-20", "mr-2"], [1, "col-6"], [1, "row", "p-20", "border", "rounded"], ["href", "https://edlcmsuat.quesscorp.com/api/MinimumWages/CheckWages", "target", "_top"], ["href", "https://kyc-api.aadhaarkyc.io/api/v1/aadhaar/upload/qr", "target", "_top"], ["href", "https://kyc-api.aadhaarkyc.io/api/v1/pan/pan", "target", "_top"], ["href", "https://kyc-api.aadhaarkyc.io/api/v1/bank-verification/", "target", "_top"], [1, "row", "m-20", "p-5"], [1, "col-3"], ["cardClass", "user-card user-card-3 support-bar1", "footerClass", "bg-light", 3, "hidHeader", "isCardFooter"], [1, "text-center"], ["src", "assets/images/widget-icons/hr-icon.png", "alt", "User image", 1, "img-radius", "img-fluid", "wid-150"], [1, "mb-1", "mt-3", "f-w-400"], ["src", "assets/images/widget-icons/finance-icon.png", "alt", "User image", 1, "img-radius", "img-fluid", "wid-150"], ["src", "assets/images/widget-icons/hiring-icon.png", "alt", "User image", 1, "img-radius", "img-fluid", "wid-150"], ["src", "assets/images/widget-icons/support-icon.png", "alt", "User image", 1, "img-radius", "img-fluid", "wid-150", "hei-150"], ["src", "assets/images/widget-icons/customer-icon.png", "alt", "User image", 1, "img-radius", "img-fluid", "wid-150"], ["src", "assets/images/widget-icons/applications-icon.png", "alt", "User image", 1, "img-radius", "img-fluid", "wid-150"], ["src", "assets/images/widget-icons/vas-icon.png", "alt", "User image", 1, "img-radius", "img-fluid", "wid-150", "hei-150"]],
        template: function MicroservicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Microservices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MicroservicesComponent_Template_div_click_11_listener() {
              return ctx.navigate("data-mart");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Data Mart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MicroservicesComponent_Template_div_click_19_listener() {
              return ctx.navigate("data-streamers");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Streamers & Transformers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MicroservicesComponent_Template_div_click_27_listener() {
              return ctx.navigate("data-source");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Data Sources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-card", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngb-tabset", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function MicroservicesComponent_Template_ngb_tabset_tabChange_37_listener($event) {
              return ctx.clearTab($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-tab", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MicroservicesComponent_ng_template_39_Template, 8, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ngb-tab", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MicroservicesComponent_ng_template_41_Template, 8, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ngb-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MicroservicesComponent_ng_template_43_Template, 16, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ngb-tab", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MicroservicesComponent_ng_template_45_Template, 24, 1, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngb-tab", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MicroservicesComponent_ng_template_47_Template, 43, 14, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);
          }
        },
        directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], ngx_bar_rating__WEBPACK_IMPORTED_MODULE_10__["BarRatingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"]],
        styles: [".custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.datamart-select-dropdown[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-family: 'Open Sans';\n}\n\n.datamart-select-dropdown-label[_ngcontent-%COMP%] {\n  font-family: 'Open Sans';\n  font-size: 17px;\n}\n\n.analytics-selection-box[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.app-card-footer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.br[_ngcontent-%COMP%] {\n  margin-top: -10px !important;\n}\n\n[_nghost-%COMP%]     div.br {\n  margin-top: -10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm9zZXJ2aWNlcy9taWNyb3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDZjs7QUFDQTtFQUNJLHlCQUF5QjtBQUU3Qjs7QUFBQTtFQUNJLHlCQUFrQztFQUNsQyxZQUFZO0FBR2hCOztBQURBO0VBQ0ksd0NBQXdDO0FBSTVDOztBQUZBO0VBQ0ksbUJBQWtCO0VBQ2xCLHdCQUF3QjtBQUs1Qjs7QUFIQTtFQUNJLHdCQUF3QjtFQUN4QixlQUFlO0FBTW5COztBQUpBO0VBQ0ksaUJBQWdCO0FBT3BCOztBQUxBO0VBQ0ksZUFBZTtBQVFuQjs7QUFOQTtFQUNJLDRCQUE0QjtBQVNoQzs7QUFQQTtFQUVJLDRCQUE0QjtBQVNoQyIsImZpbGUiOiJzcmMvYXBwL21pY3Jvc2VydmljZXMvbWljcm9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZGF5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xufVxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cbi5kYXRhbWFydC1zZWxlY3QtZHJvcGRvd257XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbn1cbi5kYXRhbWFydC1zZWxlY3QtZHJvcGRvd24tbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5hbmFseXRpY3Mtc2VsZWN0aW9uLWJveHtcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xufVxuLmFwcC1jYXJkLWZvb3RlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnJ7XG4gICAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCBkaXYuYnJ7XG4gICAgLy95b3VyIHN0eWxlIGhlcmVcbiAgICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MicroservicesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-microservices',
            templateUrl: './microservices.component.html',
            styleUrls: ['./microservices.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/admin.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/theme/layout/admin/admin.component.ts ***!
      \*******************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function srcAppThemeLayoutAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../app-config */
      "./src/app/app-config.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "./src/app/theme/layout/admin/navigation/navigation.component.ts");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./configuration/configuration.component */
      "./src/app/theme/layout/admin/configuration/configuration.component.ts");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/components/breadcrumb/breadcrumb.component */
      "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0(a0) {
        return {
          "container": a0
        };
      };

      function AdminComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.nextConfig.layout === "horizontal" && ctx_r0.nextConfig.subLayout === "horizontal-2"));
        }
      }

      function AdminComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.nextConfig.layout === "horizontal" && ctx_r1.nextConfig.subLayout === "horizontal-2"));
        }
      }

      var _c1 = function _c1(a0, a1, a2) {
        return {
          "navbar-collapsed": a0,
          "theme-horizontal": a1,
          "mob-open": a2
        };
      };

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(zone, location) {
          _classCallCheck(this, AdminComponent);

          this.zone = zone;
          this.location = location;
          this.contentPage = window.location.href.indexOf('/login') > -1 ? false : true;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
          var currentURL = this.location.path();
          var baseHerf = this.location['_baseHref'];

          if (baseHerf) {
            currentURL = baseHerf + this.location.path();
          }

          this.windowWidth = window.innerWidth;

          if ((currentURL === baseHerf + '/layout/collapse-menu' || currentURL === baseHerf + '/layout/box') && this.windowWidth >= 992 && this.windowWidth <= 1024) {
            this.nextConfig.collapseMenu = true;
          }

          this.navCollapsed = this.windowWidth >= 992 ? this.nextConfig.collapseMenu : false;
          this.navCollapsedMob = false;
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.windowWidth < 992) {
              this.nextConfig.layout = 'vertical';
              setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100% amit
              }, 500);
            }
          }
        }, {
          key: "navMobClick",
          value: function navMobClick() {
            var _this2 = this;

            if (this.windowWidth < 992) {
              if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(function () {
                  _this2.navCollapsedMob = !_this2.navCollapsedMob;
                }, 100);
              } else {
                this.navCollapsedMob = !this.navCollapsedMob;
              }
            }
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 6,
        vars: 7,
        consts: [[1, "pcoded-navbar", 3, "ngClass", "onNavMobCollapse"], [1, "navbar", "pcoded-header", "navbar-expand-lg", "navbar-light", "header-blue", 3, "onNavCollapse", "onNavHeaderMobCollapse"], [1, "pcoded-main-container"], [3, "ngClass", 4, "ngIf"], ["class", "pcoded-content", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "pcoded-content", 3, "ngClass"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navigation", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavMobCollapse", function AdminComponent_Template_app_navigation_onNavMobCollapse_0_listener() {
              return ctx.navMobClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavCollapse", function AdminComponent_Template_app_nav_bar_onNavCollapse_1_listener() {
              return ctx.navCollapsed = !ctx.navCollapsed;
            })("onNavHeaderMobCollapse", function AdminComponent_Template_app_nav_bar_onNavHeaderMobCollapse_1_listener() {
              return ctx.navMobClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_3_Template, 3, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminComponent_div_4_Template, 3, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-configuration");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx.navCollapsed, ctx.nextConfig["layout"] === "horizontal", ctx.navCollapsedMob));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.contentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentPage);
          }
        },
        directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_6__["ConfigurationComponent"], _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]],
        styles: [".pcoded-navbar[_ngcontent-%COMP%]   .pcoded-inner-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-left: 43px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBjb2RlZC1uYXZiYXIgLnBjb2RlZC1pbm5lci1uYXZiYXIgbGkgPiBhIHtcbiAgcGFkZGluZy1sZWZ0OiA0M3B4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/configuration/configuration.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ConfigurationComponent */

    /***/
    function srcAppThemeLayoutAdminConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
        return ConfigurationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app-config */
      "./src/app/app-config.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function ConfigurationComponent_div_0_div_86_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_86_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.rtlLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_86_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.setRtlLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.rtlLayout);
        }
      }

      function ConfigurationComponent_div_0_div_87_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_87_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.menuFixedLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_87_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.setMenuFixedLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.menuFixedLayout);
        }
      }

      function ConfigurationComponent_div_0_div_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_88_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.headerFixedLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_88_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.setHeaderFixedLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Header Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.headerFixedLayout);
        }
      }

      function ConfigurationComponent_div_0_div_89_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_89_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.boxLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_89_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.setBoxLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Box Layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.boxLayout);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "active": a0
        };
      };

      function ConfigurationComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Able Pro ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "v8.0 Customizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "perfect-scrollbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.setLayout("menu-dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.setLayout("menu-light");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.setLayout("dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.setLayout("reset");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reset to Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Background Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.setHeaderBackground("background-blue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.setHeaderBackground("background-red");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.setHeaderBackground("background-purple");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.setHeaderBackground("background-info");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.setHeaderBackground("background-green");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.setHeaderBackground("background-dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Background Gradient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.setHeaderBackground("background-grd-blue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.setHeaderBackground("background-grd-red");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.setHeaderBackground("background-grd-purple");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.setHeaderBackground("background-grd-info");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.setHeaderBackground("background-grd-green");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.setHeaderBackground("background-grd-dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Background Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_68_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.setHeaderBackground("background-img-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.setHeaderBackground("background-img-2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.setHeaderBackground("background-img-3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.setHeaderBackground("background-img-4");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.setHeaderBackground("background-img-5");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.setHeaderBackground("background-img-6");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ConfigurationComponent_div_0_div_86_Template, 6, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ConfigurationComponent_div_0_div_87_Template, 6, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ConfigurationComponent_div_0_div_88_Template, 6, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ConfigurationComponent_div_0_div_89_Template, 6, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Online Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Thank you for sharing !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx_r0.styleSelectorToggle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", "calc(100vh - 335px)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, ctx_r0.layoutType === "menu-dark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c1, ctx_r0.layoutType === "menu-light"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c1, ctx_r0.layoutType === "dark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c1, ctx_r0.layoutType === "reset"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c1, ctx_r0.headerBackgroundColor === "background-blue"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, ctx_r0.headerBackgroundColor === "background-red"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, ctx_r0.headerBackgroundColor === "background-purple"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c1, ctx_r0.headerBackgroundColor === "background-info"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c1, ctx_r0.headerBackgroundColor === "background-green"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c1, ctx_r0.headerBackgroundColor === "background-dark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c1, ctx_r0.headerBackgroundColor === "background-grd-blue"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c1, ctx_r0.headerBackgroundColor === "background-grd-red"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c1, ctx_r0.headerBackgroundColor === "background-grd-purple"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c1, ctx_r0.headerBackgroundColor === "background-grd-info"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c1, ctx_r0.headerBackgroundColor === "background-grd-green"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c1, ctx_r0.headerBackgroundColor === "background-grd-dark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c1, ctx_r0.headerBackgroundColor === "background-img-1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c1, ctx_r0.headerBackgroundColor === "background-img-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c1, ctx_r0.headerBackgroundColor === "background-img-3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c1, ctx_r0.headerBackgroundColor === "background-img-4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c1, ctx_r0.headerBackgroundColor === "background-img-5"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c1, ctx_r0.headerBackgroundColor === "background-img-6"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nextConfig["layout"] !== "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nextConfig["layout"] !== "horizontal" && !ctx_r0.nextConfig["boxLayout"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nextConfig["layout"] !== "horizontal" && !ctx_r0.nextConfig["boxLayout"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nextConfig["layout"] !== "horizontal");
        }
      }

      var ConfigurationComponent = /*#__PURE__*/function () {
        function ConfigurationComponent(zone, location) {
          var _this3 = this;

          _classCallCheck(this, ConfigurationComponent);

          this.zone = zone;
          this.location = location;

          this.scroll = function () {
            if (_this3.headerFixedLayout === false) {
              document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
              var el = document.querySelector('.pcoded-navbar.menupos-fixed');
              var scrollPosition = window.pageYOffset;

              if (scrollPosition > 60) {
                el.style.position = 'fixed';
                el.style.transition = 'none';
                el.style.marginTop = '0';
              } else {
                el.style.position = 'absolute';
                el.style.marginTop = '60px';
              }
            } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
              document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
          };

          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
          this.setThemeLayout();
        }

        _createClass(ConfigurationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.styleSelectorToggle = false;
            this.layoutType = this.nextConfig.layoutType;
            this.setLayout(this.layoutType);
            this.headerBackgroundColor = this.nextConfig.headerBackColor;
            this.setHeaderBackground(this.headerBackgroundColor);
            this.rtlLayout = this.nextConfig.rtlLayout;
            this.changeRtlLayout(this.rtlLayout);
            this.menuFixedLayout = this.nextConfig.navFixedLayout;

            if (this.nextConfig.layout === 'vertical') {
              this.changeMenuFixedLayout(this.menuFixedLayout);
            }

            this.headerFixedLayout = this.nextConfig.headerFixedLayout;
            this.changeHeaderFixedLayout(this.headerFixedLayout);
            this.boxLayout = this.nextConfig.boxLayout;
            this.changeBoxLayout(this.boxLayout);
          }
        }, {
          key: "setThemeLayout",
          value: function setThemeLayout() {
            var currentURL = this.location.path();
            var baseHref = this.location['_baseHref'];

            if (baseHref) {
              currentURL = baseHref + this.location.path();
            }

            switch (currentURL) {
              case baseHref + '/layout/static':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;

              case baseHref + '/layout/nav-fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/collapse-menu':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.collapseMenu = true;
                break;

              case baseHref + '/layout/vertical-rtl':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.rtlLayout = true;
                break;

              case baseHref + '/layout/horizontal':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = false;
                break;

              case baseHref + '/layout/horizontal-l2':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = false;
                break;

              case baseHref + '/layout/horizontal-rtl':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.rtlLayout = true;
                this.nextConfig.collapseMenu = false;
                break;

              case baseHref + '/layout/box':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.boxLayout = true;
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = true;
                break;

              case baseHref + '/layout/light':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'background-blue';
                break;

              case baseHref + '/layout/dark':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'dark';
                this.nextConfig.headerBackColor = 'background-blue';
                break;

              default:
                break;
            }
          }
        }, {
          key: "setHeaderBackColor",
          value: function setHeaderBackColor(color) {
            this.headerBackColor = color;
            document.querySelector('body').style.background = color;
          } // change main layout

        }, {
          key: "setLayout",
          value: function setLayout(layout) {
            this.isConfig = true;
            document.querySelector('.pcoded-navbar').classList.remove('menu-light');
            document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
            document.querySelector('body').classList.remove('able-pro-dark');
            this.layoutType = layout;

            if (layout === 'menu-light') {
              document.querySelector('.pcoded-navbar').classList.add(layout);
              this.setHeaderBackground('background-blue');
            }

            if (layout === 'dark') {
              this.setHeaderBackground('background-blue');
              document.querySelector('body').classList.add('able-pro-dark');
            }

            if (layout === 'reset') {
              this.reset();
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.ngOnInit();
          }
        }, {
          key: "setRtlLayout",
          value: function setRtlLayout(e) {
            var flag = !!e.target.checked;
            this.changeRtlLayout(flag);
          }
        }, {
          key: "changeRtlLayout",
          value: function changeRtlLayout(flag) {
            if (flag) {
              document.querySelector('body').classList.add('able-pro-rtl');
            } else {
              document.querySelector('body').classList.remove('able-pro-rtl');
            }
          }
        }, {
          key: "setMenuFixedLayout",
          value: function setMenuFixedLayout(e) {
            var flag = !!e.target.checked;
            this.changeMenuFixedLayout(flag);
          }
        }, {
          key: "changeMenuFixedLayout",
          value: function changeMenuFixedLayout(flag) {
            var _this4 = this;

            setTimeout(function () {
              if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');

                if (_this4.nextConfig.layout === 'vertical') {
                  document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                }

                window.addEventListener('scroll', _this4.scroll, true);
                window.scrollTo(0, 0);
              } else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');

                if (_this4.nextConfig.layout === 'vertical') {
                  document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }

                if (_this4.nextConfig.layout === 'vertical') {
                  window.removeEventListener('scroll', _this4.scroll, true);
                }
              }
            }, 100);
          }
        }, {
          key: "setHeaderFixedLayout",
          value: function setHeaderFixedLayout(e) {
            var flag = !!e.target.checked;
            this.changeHeaderFixedLayout(flag);
          }
        }, {
          key: "changeHeaderFixedLayout",
          value: function changeHeaderFixedLayout(flag) {
            if (flag) {
              document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
            } else {
              document.querySelector('.pcoded-header').classList.remove('headerpos-fixed'); // static

              if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
              } else {
                window.removeEventListener('scroll', this.scroll, true);
              }
            }
          }
        }, {
          key: "setBoxLayout",
          value: function setBoxLayout(e) {
            var flag = !!e.target.checked;
            this.changeBoxLayout(flag);
          }
        }, {
          key: "changeBoxLayout",
          value: function changeBoxLayout(flag) {
            if (flag) {
              document.querySelector('body').classList.add('container');
              document.querySelector('body').classList.add('box-layout');
            } else {
              document.querySelector('body').classList.remove('box-layout');
              document.querySelector('body').classList.remove('container');
            }
          }
        }, {
          key: "setHeaderBackground",
          value: function setHeaderBackground(background) {
            this.headerBackgroundColor = background;
            document.querySelector('body').classList.remove('background-blue');
            document.querySelector('body').classList.remove('background-red');
            document.querySelector('body').classList.remove('background-purple');
            document.querySelector('body').classList.remove('background-info');
            document.querySelector('body').classList.remove('background-green');
            document.querySelector('body').classList.remove('background-dark');
            document.querySelector('body').classList.remove('background-grd-blue');
            document.querySelector('body').classList.remove('background-grd-red');
            document.querySelector('body').classList.remove('background-grd-purple');
            document.querySelector('body').classList.remove('background-grd-info');
            document.querySelector('body').classList.remove('background-grd-green');
            document.querySelector('body').classList.remove('background-grd-dark');
            document.querySelector('body').classList.remove('background-img-1');
            document.querySelector('body').classList.remove('background-img-2');
            document.querySelector('body').classList.remove('background-img-3');
            document.querySelector('body').classList.remove('background-img-4');
            document.querySelector('body').classList.remove('background-img-5');
            document.querySelector('body').classList.remove('background-img-6');
            document.querySelector('body').classList.add(background);
          }
        }]);

        return ConfigurationComponent;
      }();

      ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) {
        return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfigurationComponent,
        selectors: [["app-configuration"]],
        decls: 1,
        vars: 1,
        consts: [["id", "styleSelector", "class", "menu-styler", 3, "ngClass", 4, "ngIf"], ["id", "styleSelector", 1, "menu-styler", 3, "ngClass"], [1, "style-block"], [1, "mb-2"], [1, "font-weight-normal"], [1, "m-style-scroller"], [1, "theme-color", "layout-type"], ["href", "javascript:", "data-value", "menu-dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "menu-light", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "reset", 3, "ngClass", "click"], [1, "theme-color", "background-color", "flat"], ["href", "javascript:", "data-value", "background-blue", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-red", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-purple", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-info", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-green", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-dark", 3, "ngClass", "click"], [1, "theme-color", "background-color", "gradient"], ["href", "javascript:", "data-value", "background-grd-blue", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-grd-red", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-grd-purple", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-grd-info", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-grd-green", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-grd-dark", 3, "ngClass", "click"], [1, "theme-color", "background-color", "image"], ["href", "javascript:", "data-value", "background-img-1", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-img-2", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-img-3", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-img-4", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-img-5", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "background-img-6", 3, "ngClass", "click"], ["class", "form-group mb-2", 4, "ngIf"], ["href", "https://themeforest.net/user/phoenixcoded", 1, "btn", "btn-success", "btn-block", "m-r-15", "m-t-10", "m-b-10"], ["href", "http://ableproadmin.com/doc-7.0/", "target", "_blank", 1, "btn", "btn-primary", "btn-block", "m-r-15", "m-t-5", "m-b-10"], [1, "text-center"], [1, "text-center", "f-18", "m-t-15", "m-b-15", "d-block"], ["href", "https://www.facebook.com/Phoenixcoded/", "target", "_blank", 1, "btn", "text-white", "bg-facebook", "btn-icon", "m-b-20"], [1, "feather", "icon-facebook"], ["href", "https://twitter.com/phoenixcoded", "target", "_blank", 1, "btn", "text-white", "bg-twitter", "btn-icon", "m-l-20", "m-b-20"], [1, "feather", "icon-twitter"], [1, "form-group", "mb-2"], [1, "switch", "switch-primary", "d-inline", "m-r-10"], ["type", "checkbox", "id", "theme-rtl", 3, "ngModel", "ngModelChange", "change"], ["for", "theme-rtl", 1, "cr"], ["type", "checkbox", "id", "menu-fixed", 3, "ngModel", "ngModelChange", "change"], ["for", "menu-fixed", 1, "cr"], ["type", "checkbox", "id", "header-fixed", 3, "ngModel", "ngModelChange", "change"], ["for", "header-fixed", 1, "cr"], ["type", "checkbox", "id", "box-layouts", 3, "ngModel", "ngModelChange", "change"], ["for", "box-layouts", 1, "cr"]],
        template: function ConfigurationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfigurationComponent_div_0_Template, 101, 75, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConfig);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.able-pro-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.able-pro-dark .menu-styler h1,\nbody.able-pro-dark .menu-styler h2,\nbody.able-pro-dark .menu-styler h3,\nbody.able-pro-dark .menu-styler h4,\nbody.able-pro-dark .menu-styler h5,\nbody.able-pro-dark .menu-styler p,\nbody.able-pro-dark .menu-styler h6 {\n  color: #222;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFBcEI7O0FBSUE7RUFHTSxtQ0FBa0M7QUFIeEM7O0FBQUE7Ozs7Ozs7RUFZTSxXQUFXO0FBRmpCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXN0eWxlciB7XHJcbiAgLm5hdi1waWxscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuYm9keS5hYmxlLXByby1kYXJre1xyXG4gIC5tZW51LXN0eWxlcntcclxuICAgIC50YWItY29udGVudHtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcclxuICAgIH1cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIGg0LFxyXG4gICAgaDUsXHJcbiAgICBwLFxyXG4gICAgaDZ7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-configuration',
            templateUrl: './configuration.component.html',
            styleUrls: ['./configuration.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function srcAppThemeLayoutAdminNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app-config */
      "./src/app/app-config.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nav-left/nav-left.component */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
      /* harmony import */


      var _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nav-right/nav-right.component */
      "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");

      function NavBarComponent_div_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavBarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard/analytics"];
      };

      var _c1 = function _c1(a0) {
        return {
          "on": a0
        };
      };

      function NavBarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.navCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.toggleMobOption();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-nav-left", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-nav-right", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.menuClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.collapseStyle);
        }
      }

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);

          this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
          this.menuClass = false;
          this.collapseStyle = 'none';
          this.windowWidth = window.innerWidth;
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMobOption",
          value: function toggleMobOption() {
            this.menuClass = !this.menuClass;
            this.collapseStyle = this.menuClass ? 'block' : 'none';
          }
        }, {
          key: "navCollapse",
          value: function navCollapse() {
            if (this.windowWidth >= 992) {
              this.onNavCollapse.emit();
            } else {
              this.onNavHeaderMobCollapse.emit();
            }
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)();
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        outputs: {
          onNavCollapse: "onNavCollapse",
          onNavHeaderMobCollapse: "onNavHeaderMobCollapse"
        },
        decls: 3,
        vars: 2,
        consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["mainHeader", ""], [1, "container"], [4, "ngTemplateOutlet"], [1, "m-header"], ["href", "javascript:", "id", "mobile-collapse", 1, "mobile-menu", 3, "click"], [1, "b-brand", 3, "routerLink"], ["id", "main-logo", "src", "assets/images/logo1.png", "height", "40px", "width", "40px", "alt", "", 1, "logo"], ["src", "assets/images/logo-icon.png", "alt", "", 1, "logo-thumb"], ["href", "javascript:", 1, "mob-toggler", 3, "ngClass", "click"], [1, "feather", "icon-more-vertical"], [1, "collapse", "navbar-collapse"], [1, "mr-auto"], [1, "ml-auto"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavBarComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_Template, 11, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextConfig.layout === "horizontal" && ctx.nextConfig.subLayout === "horizontal-2")("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_4__["NavLeftComponent"], _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_5__["NavRightComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
          }]
        }], function () {
          return [];
        }, {
          onNavCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onNavHeaderMobCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
      \***************************************************************************/

    /*! exports provided: NavLeftComponent */

    /***/
    function srcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
        return NavLeftComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav-search/nav-search.component */
      "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");

      var NavLeftComponent = /*#__PURE__*/function () {
        function NavLeftComponent() {
          _classCallCheck(this, NavLeftComponent);
        }

        _createClass(NavLeftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavLeftComponent;
      }();

      NavLeftComponent.ɵfac = function NavLeftComponent_Factory(t) {
        return new (t || NavLeftComponent)();
      };

      NavLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavLeftComponent,
        selectors: [["app-nav-left"]],
        decls: 3,
        vars: 0,
        consts: [[1, "navbar-nav", "mr-auto"], [1, "nav-item"]],
        template: function NavLeftComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_1__["NavSearchComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavLeftComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-left',
            templateUrl: './nav-left.component.html',
            styleUrls: ['./nav-left.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: NavSearchComponent */

    /***/
    function srcAppThemeLayoutAdminNavBarNavLeftNavSearchNavSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
        return NavSearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NavSearchComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSearchComponent_div_2_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.isSearch = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "block");
        }
      }

      var NavSearchComponent = /*#__PURE__*/function () {
        function NavSearchComponent() {
          _classCallCheck(this, NavSearchComponent);

          this.isSearch = false;
        }

        _createClass(NavSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavSearchComponent;
      }();

      NavSearchComponent.ɵfac = function NavSearchComponent_Factory(t) {
        return new (t || NavSearchComponent)();
      };

      NavSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavSearchComponent,
        selectors: [["app-nav-search"]],
        decls: 3,
        vars: 1,
        consts: [["href", "javascript:", 1, "pop-search", 3, "click"], [1, "feather", "icon-search"], ["class", "search-bar", 3, "display", 4, "ngIf"], [1, "search-bar"], ["type", "text", "placeholder", "Search hear", 1, "form-control", "border-0", "shadow-none"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
        template: function NavSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSearchComponent_Template_a_click_0_listener() {
              return ctx.isSearch = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavSearchComponent_div_2_Template, 5, 2, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearch);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-search',
            templateUrl: './nav-search.component.html',
            styleUrls: ['./nav-search.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: NavRightComponent */

    /***/
    function srcAppThemeLayoutAdminNavBarNavRightNavRightComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
        return NavRightComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");

      var NavRightComponent = /*#__PURE__*/function () {
        function NavRightComponent() {
          _classCallCheck(this, NavRightComponent);
        }

        _createClass(NavRightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavRightComponent;
      }();

      NavRightComponent.ɵfac = function NavRightComponent_Factory(t) {
        return new (t || NavRightComponent)();
      };

      NavRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavRightComponent,
        selectors: [["app-nav-right"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])],
        decls: 97,
        vars: 2,
        consts: [[1, "navbar-nav", "ml-auto"], ["ngbDropdown", "", "placement", "auto", 1, "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:", "data-toggle", "dropdown"], [1, "icon", "feather", "icon-bell"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "notification"], [1, "noti-head"], [1, "d-inline-block", "m-b-0"], [1, "float-right"], ["href", "javascript:", 1, "m-r-10"], ["href", "javascript:"], [1, "noti-body"], [1, "n-title"], [1, "m-b-0"], [1, "notification"], [1, "media"], ["src", "assets/images/user/avatar-1.jpg", "alt", "Generic placeholder image", 1, "img-radius"], [1, "media-body"], [1, "n-time", "text-muted"], [1, "icon", "feather", "icon-clock", "m-r-10"], ["src", "assets/images/user/avatar-2.jpg", "alt", "Generic placeholder image", 1, "img-radius"], [1, "noti-footer"], ["ngbDropdown", "", "placement", "auto", 1, "dropdown", "drp-user"], ["href", "javascript:", "ngbDropdownToggle", "", "data-toggle", "dropdown"], [1, "icon", "feather", "icon-user"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "profile-notification"], [1, "pro-head"], ["src", "assets/images/user/avatar-1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], ["href", "javascript:", "title", "Logout", 1, "dud-logout"], [1, "feather", "icon-log-out"], [1, "pro-body"], ["href", "javascript:", 1, "dropdown-item"], [1, "feather", "icon-user"], [1, "feather", "icon-mail"], [1, "feather", "icon-lock"]],
        template: function NavRightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "mark as read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "clear all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perfect-scrollbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NEW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "5 min");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "New ticket Added");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "EARLIER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Joseph William");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "10 min");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Prchace New Theme and make payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sara Soudein");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "12 min");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "currently login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Joseph William");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "30 min");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Prchace New Theme and make payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "show all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " My Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Lock Screen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", "300px");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavRightComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-right',
            templateUrl: './nav-right.component.html',
            styleUrls: ['./nav-right.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: NavCollapseComponent */

    /***/
    function srcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
        return NavCollapseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "./src/app/app-config.ts");

      function NavCollapseComponent_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavCollapseComponent_ng_container_0_li_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0() {
        return ["active"];
      };

      function NavCollapseComponent_ng_container_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavCollapseComponent_ng_container_0_li_1_Template_li_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.navCollapse($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_li_1_ng_container_3_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavCollapseComponent_ng_container_0_li_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavCollapseComponent_ng_container_0_li_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavCollapseComponent_ng_container_0_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavCollapseComponent_ng_container_0_li_2_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.navCollapse($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_li_2_ng_container_3_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r15.item.icon);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.item.badge.title, " ");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.item.badge.title, " ");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavCollapseComponent_ng_container_0_ng_template_3_span_0_Template, 2, 3, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_3_span_3_Template, 2, 2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavCollapseComponent_ng_container_0_ng_template_3_span_4_Template, 2, 2, "span", 13);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.item.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.badge && ctx_r4.themeLayout === "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.badge && ctx_r4.themeLayout === "vertical");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 20);
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r19);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 20);
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r19);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 20);
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r19);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_group_1_Template, 1, 1, "app-nav-group", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_item_3_Template, 1, 1, "app-nav-item", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.type == "item");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_Template, 4, 3, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.item.children);
        }
      }

      function NavCollapseComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_li_1_Template, 4, 6, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_2_Template, 4, 6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_3_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavCollapseComponent_ng_container_0_ng_template_5_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.themeLayout === "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.themeLayout === "vertical");
        }
      }

      var NavCollapseComponent = /*#__PURE__*/function () {
        function NavCollapseComponent() {
          _classCallCheck(this, NavCollapseComponent);

          this.visible = false;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
          this.themeLayout = this.nextConfig.layout;
        }

        _createClass(NavCollapseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navCollapse",
          value: function navCollapse(e) {
            this.visible = !this.visible;
            var parent = e.target;

            if (this.themeLayout === 'vertical') {
              parent = parent.parentElement;
            }

            var sections = document.querySelectorAll('.pcoded-hasmenu');

            for (var i = 0; i < sections.length; i++) {
              if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
              }
            }

            var firstParent = parent.parentElement;
            var preParent = parent.parentElement.parentElement;

            if (firstParent.classList.contains('pcoded-hasmenu')) {
              do {
                firstParent.classList.add('pcoded-trigger'); // firstParent.parentElement.classList.toggle('pcoded-trigger');

                firstParent = firstParent.parentElement.parentElement.parentElement;
              } while (firstParent.classList.contains('pcoded-hasmenu'));
            } else if (preParent.classList.contains('pcoded-submenu')) {
              do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
              } while (preParent.classList.contains('pcoded-submenu'));
            }

            parent.classList.toggle('pcoded-trigger');
          }
        }]);

        return NavCollapseComponent;
      }();

      NavCollapseComponent.ɵfac = function NavCollapseComponent_Factory(t) {
        return new (t || NavCollapseComponent)();
      };

      NavCollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavCollapseComponent,
        selectors: [["app-nav-collapse"]],
        inputs: {
          item: "item"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["class", "nav-item pcoded-hasmenu", 3, "routerLinkActive", "mouseenter", 4, "ngIf"], ["class", "nav-item pcoded-hasmenu", 3, "routerLinkActive", 4, "ngIf"], ["itemContent", ""], ["subMenuContent", ""], [1, "nav-item", "pcoded-hasmenu", 3, "routerLinkActive", "mouseenter"], ["href", "javascript:", 1, "nav-link", 3, "routerLinkActive"], [4, "ngTemplateOutlet"], [1, "nav-item", "pcoded-hasmenu", 3, "routerLinkActive"], ["href", "javascript:", 1, "nav-link", 3, "routerLinkActive", "click"], ["class", "pcoded-micon", 4, "ngIf"], [1, "pcoded-mtext"], ["class", "badge label", 3, "ngClass", 4, "ngIf"], ["class", "pcoded-badge badge", 3, "ngClass", 4, "ngIf"], [1, "pcoded-micon"], [1, "badge", "label", 3, "ngClass"], [1, "pcoded-badge", "badge", 3, "ngClass"], [1, "pcoded-submenu", 3, "routerLinkActive"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"]],
        template: function NavCollapseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavCollapseComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)',
            display: 'block'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0%)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)'
          }))])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavCollapseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-collapse',
            templateUrl: './nav-collapse.component.html',
            styleUrls: ['./nav-collapse.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(-100%)',
              display: 'block'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(0%)'
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(-100%)'
            }))])])]
          }]
        }], function () {
          return [];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
      \************************************************************************************/

    /*! exports provided: NavContentComponent */

    /***/
    function srcAppThemeLayoutAdminNavigationNavContentNavContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
        return NavContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../app-config */
      "./src/app/app-config.ts");
      /* harmony import */


      var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navigation */
      "./src/app/theme/layout/admin/navigation/navigation.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-click-outside */
      "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nav-group/nav-group.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
      /* harmony import */


      var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./nav-collapse/nav-collapse.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
      /* harmony import */


      var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./nav-item/nav-item.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");

      var _c0 = ["navbarContent"];
      var _c1 = ["navbarWrapper"];

      function NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 7);
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3);
        }
      }

      function NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 7);
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3);
        }
      }

      function NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 7);
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3);
        }
      }

      function NavContentComponent_perfect_scrollbar_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_group_1_Template, 1, 1, "app-nav-group", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_item_3_Template, 1, 1, "app-nav-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.type == "item");
        }
      }

      function NavContentComponent_perfect_scrollbar_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_perfect_scrollbar_0_Template_perfect_scrollbar_clickOutside_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.navMob();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_perfect_scrollbar_0_Template_ul_clickOutside_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.fireOutClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_perfect_scrollbar_0_ng_container_3_Template, 4, 3, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "300px")("max-height", "calc(100vh - 60px)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("excludeBeforeClick", true)("exclude", "#mobile-collapse")("usePSClass", "next")("disabled", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.navigation);
        }
      }

      function NavContentComponent_div_1_ng_container_6_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 7);
        }

        if (rf & 2) {
          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r16);
        }
      }

      function NavContentComponent_div_1_ng_container_6_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 7);
        }

        if (rf & 2) {
          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r16);
        }
      }

      function NavContentComponent_div_1_ng_container_6_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 7);
        }

        if (rf & 2) {
          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r16);
        }
      }

      function NavContentComponent_div_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_div_1_ng_container_6_app_nav_group_1_Template, 1, 1, "app-nav-group", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavContentComponent_div_1_ng_container_6_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_div_1_ng_container_6_app_nav_item_3_Template, 1, 1, "app-nav-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.type == "item");
        }
      }

      function NavContentComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContentComponent_div_1_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.scrollMinus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_div_1_Template_ul_clickOutside_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.fireLeave();
          })("mouseleave", function NavContentComponent_div_1_Template_ul_mouseleave_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.fireLeave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavContentComponent_div_1_ng_container_6_Template, 4, 3, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContentComponent_div_1_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.scrollPlus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.prevDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.navigation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.nextDisabled);
        }
      }

      var NavContentComponent = /*#__PURE__*/function () {
        function NavContentComponent(nav, zone, location) {
          _classCallCheck(this, NavContentComponent);

          this.nav = nav;
          this.zone = zone;
          this.location = location;
          this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
          this.windowWidth = window.innerWidth;
          this.navigation = this.nav.get();
          this.prevDisabled = 'disabled';
          this.nextDisabled = '';
          this.scrollWidth = 0;
          this.contentWidth = 0;
          this.isNavProfile = false;
        }

        _createClass(NavContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.windowWidth < 992) {
              this.nextConfig['layout'] = 'vertical';
              setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%';
              }, 500);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.nextConfig['layout'] === 'horizontal') {
              this.contentWidth = this.navbarContent.nativeElement.clientWidth;
              this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
            }
          }
        }, {
          key: "scrollPlus",
          value: function scrollPlus() {
            this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);

            if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
              this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
              this.nextDisabled = 'disabled';
            }

            this.prevDisabled = '';

            if (this.nextConfig.rtlLayout) {
              document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            } else {
              document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }
          }
        }, {
          key: "scrollMinus",
          value: function scrollMinus() {
            this.scrollWidth = this.scrollWidth - this.wrapperWidth;

            if (this.scrollWidth < 0) {
              this.scrollWidth = 0;
              this.prevDisabled = 'disabled';
            }

            this.nextDisabled = '';

            if (this.nextConfig.rtlLayout) {
              document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            } else {
              document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }
          }
        }, {
          key: "fireLeave",
          value: function fireLeave() {
            var sections = document.querySelectorAll('.pcoded-hasmenu');

            for (var i = 0; i < sections.length; i++) {
              sections[i].classList.remove('active');
              sections[i].classList.remove('pcoded-trigger');
            }

            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
              }
            }
          }
        }, {
          key: "navMob",
          value: function navMob() {
            if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              this.onNavMobCollapse.emit();
            }
          }
        }, {
          key: "fireOutClick",
          value: function fireOutClick() {
            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  parent.classList.add('pcoded-trigger');
                }

                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  up_parent.classList.add('pcoded-trigger');
                }

                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  last_parent.classList.add('pcoded-trigger');
                }

                last_parent.classList.add('active');
              }
            }
          }
        }]);

        return NavContentComponent;
      }();

      NavContentComponent.ɵfac = function NavContentComponent_Factory(t) {
        return new (t || NavContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      NavContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavContentComponent,
        selectors: [["app-nav-content"]],
        viewQuery: function NavContentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarWrapper = _t.first);
          }
        },
        outputs: {
          onNavMobCollapse: "onNavMobCollapse"
        },
        decls: 2,
        vars: 2,
        consts: [["id", "nav-ps-next", "ngClass", "able-pro-scroll", 3, "excludeBeforeClick", "exclude", "max-width", "max-height", "usePSClass", "disabled", "clickOutside", 4, "ngIf"], ["class", "navbar-content sidenav-horizontal", "id", "layout-sidenav", 4, "ngIf"], ["id", "nav-ps-next", "ngClass", "able-pro-scroll", 3, "excludeBeforeClick", "exclude", "usePSClass", "disabled", "clickOutside"], [1, "navbar-content"], [1, "nav", "pcoded-inner-navbar", 3, "clickOutside"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"], ["id", "layout-sidenav", 1, "navbar-content", "sidenav-horizontal"], ["navbarWrapper", ""], ["href", "javascript:", 1, "sidenav-horizontal-prev", 3, "ngClass", "click"], [1, "sidenav-horizontal-wrapper"], ["id", "side-nav-horizontal", 1, "nav", "pcoded-inner-navbar", "sidenav-inner", 3, "clickOutside", "mouseleave"], ["navbarContent", ""], ["href", "javascript:", 1, "sidenav-horizontal-next", 3, "ngClass", "click"]],
        template: function NavContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavContentComponent_perfect_scrollbar_0_Template, 4, 9, "perfect-scrollbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_div_1_Template, 8, 3, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextConfig["layout"] === "vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextConfig["layout"] === "horizontal");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__["NavGroupComponent"], _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__["NavCollapseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__["NavItemComponent"]],
        styles: [".pcoded-navbar[_ngcontent-%COMP%]   .pcoded-inner-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-left: 43px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2LWNvbnRlbnQvbmF2LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vbmF2aWdhdGlvbi9uYXYtY29udGVudC9uYXYtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wY29kZWQtbmF2YmFyIC5wY29kZWQtaW5uZXItbmF2YmFyIGxpID4gYSB7XG4gIHBhZGRpbmctbGVmdDogNDNweCAhaW1wb3J0YW50O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-content',
            templateUrl: './nav-content.component.html',
            styleUrls: ['./nav-content.component.scss']
          }]
        }], function () {
          return [{
            type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }];
        }, {
          onNavMobCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          navbarContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navbarContent', {
              "static": false
            }]
          }],
          navbarWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navbarWrapper', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: NavGroupComponent */

    /***/
    function srcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
        return NavGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "./src/app/app-config.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../nav-collapse/nav-collapse.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
      /* harmony import */


      var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../nav-item/nav-item.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");

      function NavGroupComponent_ng_container_0_ng_container_4_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 4);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
        }
      }

      function NavGroupComponent_ng_container_0_ng_container_4_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 4);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
        }
      }

      function NavGroupComponent_ng_container_0_ng_container_4_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 4);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
        }
      }

      function NavGroupComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavGroupComponent_ng_container_0_ng_container_4_app_nav_group_1_Template, 1, 1, "app-nav-group", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavGroupComponent_ng_container_0_ng_container_4_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavGroupComponent_ng_container_0_ng_container_4_app_nav_item_3_Template, 1, 1, "app-nav-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type == "item");
        }
      }

      function NavGroupComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavGroupComponent_ng_container_0_ng_container_4_Template, 4, 3, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
        }
      }

      var NavGroupComponent = /*#__PURE__*/function () {
        function NavGroupComponent(zone, location) {
          _classCallCheck(this, NavGroupComponent);

          this.zone = zone;
          this.location = location;
          this.layout1 = false;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
        }

        _createClass(NavGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // at reload time active and trigger link
            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  parent.classList.add('pcoded-trigger');
                }

                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  up_parent.classList.add('pcoded-trigger');
                }

                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  last_parent.classList.add('pcoded-trigger');
                }

                last_parent.classList.add('active');
              }
            }
          }
        }]);

        return NavGroupComponent;
      }();

      NavGroupComponent.ɵfac = function NavGroupComponent_Factory(t) {
        return new (t || NavGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      NavGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavGroupComponent,
        selectors: [["app-nav-group"]],
        inputs: {
          item: "item",
          layout1: "layout1",
          activeId: "activeId"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "nav-item", "pcoded-menu-caption"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"]],
        template: function NavGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavGroupComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], NavGroupComponent, _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__["NavCollapseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__["NavItemComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-group',
            templateUrl: './nav-group.component.html',
            styleUrls: ['./nav-group.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          layout1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: NavItemComponent */

    /***/
    function srcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
        return NavItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "./src/app/app-config.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function NavItemComponent_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavItemComponent_ng_container_0_li_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.item.title);
        }
      }

      function NavItemComponent_ng_container_0_li_1_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.item.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_li_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0() {
        return ["active"];
      };

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function NavItemComponent_ng_container_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavItemComponent_ng_container_0_li_1_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.closeOtherMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_li_1_span_3_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavItemComponent_ng_container_0_li_1_ng_template_4_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavItemComponent_ng_container_0_li_1_ng_container_6_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r1.item.target ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r1.item.url));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.icon)("ngIfElse", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavItemComponent_ng_container_0_li_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavItemComponent_ng_container_0_li_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.item.title);
        }
      }

      function NavItemComponent_ng_container_0_li_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.item.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_li_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavItemComponent_ng_container_0_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_li_2_span_3_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavItemComponent_ng_container_0_li_2_ng_template_4_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavItemComponent_ng_container_0_li_2_ng_container_6_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.item.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r2.item.target ? "_blank" : "_self")("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item.icon)("ngIfElse", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r19.item.icon);
        }
      }

      function NavItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_ng_template_3_span_0_Template, 2, 1, "span", 13);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
        }
      }

      function NavItemComponent_ng_container_0_ng_template_5_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r20.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.item.badge.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_ng_template_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r21.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.item.badge.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_ng_template_5_span_0_Template, 2, 2, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavItemComponent_ng_container_0_ng_template_5_span_1_Template, 2, 2, "span", 17);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.item.badge && ctx_r6.themeLayout === "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.item.badge && ctx_r6.themeLayout === "horizontal");
        }
      }

      function NavItemComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavItemComponent_ng_container_0_li_1_Template, 7, 11, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_2_Template, 7, 7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavItemComponent_ng_container_0_ng_template_5_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.external);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.external);
        }
      }

      var NavItemComponent = /*#__PURE__*/function () {
        function NavItemComponent(location) {
          _classCallCheck(this, NavItemComponent);

          this.location = location;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
          this.themeLayout = this.nextConfig['layout'];
        }

        _createClass(NavItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeOtherMenu",
          value: function closeOtherMenu(event) {
            var _this5 = this;

            if (this.nextConfig['layout'] === 'vertical') {
              var ele = event.target;

              if (ele !== null && ele !== undefined) {
                var parent = ele.parentElement;
                var up_parent = parent.parentElement.parentElement;
                var last_parent = up_parent.parentElement;
                var sections = document.querySelectorAll('.pcoded-hasmenu');

                for (var i = 0; i < sections.length; i++) {
                  sections[i].classList.remove('active');
                  sections[i].classList.remove('pcoded-trigger');
                }

                if (parent.classList.contains('pcoded-hasmenu')) {
                  parent.classList.add('pcoded-trigger');
                  parent.classList.add('active');
                } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                  up_parent.classList.add('pcoded-trigger');
                  up_parent.classList.add('active');
                } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                  last_parent.classList.add('pcoded-trigger');
                  last_parent.classList.add('active');
                }
              }

              if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
              }
            } else {
              setTimeout(function () {
                var sections = document.querySelectorAll('.pcoded-hasmenu');

                for (var _i = 0; _i < sections.length; _i++) {
                  sections[_i].classList.remove('active');

                  sections[_i].classList.remove('pcoded-trigger');
                }

                var current_url = _this5.location.path();

                if (_this5.location['_baseHref']) {
                  current_url = _this5.location['_baseHref'] + _this5.location.path();
                }

                var link = "a.nav-link[ href='" + current_url + "' ]";
                var ele = document.querySelector(link);

                if (ele !== null && ele !== undefined) {
                  var _parent = ele.parentElement;
                  var _up_parent = _parent.parentElement.parentElement;
                  var _last_parent = _up_parent.parentElement;

                  if (_parent.classList.contains('pcoded-hasmenu')) {
                    _parent.classList.add('active');
                  } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                    _up_parent.classList.add('active');
                  } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                    _last_parent.classList.add('active');
                  }
                }
              }, 500);
            }
          }
        }]);

        return NavItemComponent;
      }();

      NavItemComponent.ɵfac = function NavItemComponent_Factory(t) {
        return new (t || NavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      NavItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavItemComponent,
        selectors: [["app-nav-item"]],
        inputs: {
          item: "item"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "ngClass", "routerLinkActive", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["itemIcon", ""], ["itemBadge", ""], [3, "ngClass", "routerLinkActive"], [1, "nav-link", 3, "target", "routerLink", "click"], [4, "ngTemplateOutlet"], ["class", "pcoded-mtext", 4, "ngIf", "ngIfElse"], ["directTitle", ""], [1, "pcoded-mtext"], [3, "ngClass"], [3, "target", "href"], ["class", "pcoded-micon", 4, "ngIf"], [1, "pcoded-micon"], [1, "feather", 3, "ngClass"], ["class", "pcoded-badge badge", 3, "ngClass", 4, "ngIf"], ["class", "badge label", 3, "ngClass", 4, "ngIf"], [1, "pcoded-badge", "badge", 3, "ngClass"], [1, "badge", "label", 3, "ngClass"]],
        template: function NavItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-item',
            templateUrl: './nav-item.component.html',
            styleUrls: ['./nav-item.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/navigation/navigation.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
      \***********************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcAppThemeLayoutAdminNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app-config */
      "./src/app/app-config.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nav-content/nav-content.component */
      "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");

      var _c0 = function _c0(a0) {
        return {
          "container": a0
        };
      };

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);

          this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
          this.windowWidth = window.innerWidth;
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navMobCollapse",
          value: function navMobCollapse() {
            if (this.windowWidth < 992) {
              this.onNavMobCollapse.emit();
            }
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)();
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        outputs: {
          onNavMobCollapse: "onNavMobCollapse"
        },
        decls: 2,
        vars: 3,
        consts: [[1, "navbar-wrapper", 3, "ngClass"], [3, "onNavMobCollapse"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavMobCollapse", function NavigationComponent_Template_app_nav_content_onNavMobCollapse_1_listener() {
              return ctx.navMobCollapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.nextConfig.layout === "horizontal" && ctx.nextConfig.subLayout === "horizontal-2"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_3__["NavContentComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [];
        }, {
          onNavMobCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/admin/navigation/navigation.ts":
    /*!*************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
      \*************************************************************/

    /*! exports provided: NavigationItem */

    /***/
    function srcAppThemeLayoutAdminNavigationNavigationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
        return NavigationItem;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NavigationItems = [{
        type: 'group',
        icon: 'feather icon-align-left',
        url: '/microservices',
        children: [{
          id: 'dataSource',
          title: 'Data Sources',
          type: 'item',
          url: '/data-source',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        }, {
          id: 'dataStreamersTransformers',
          title: 'Streamers & Transformers',
          url: '/data-streamers',
          type: 'item',
          icon: 'feather icon-cloud-off',
          classes: 'nav-item'
        }, {
          id: 'dataMart',
          title: 'Data Mart',
          url: '/data-mart',
          type: 'item',
          icon: 'feather icon-droplet',
          classes: 'nav-item'
        }, {
          id: 'microServices',
          title: 'Microservices',
          url: '/microservices',
          type: 'item',
          icon: 'feather icon-file',
          classes: 'nav-item'
        }, {
          id: 'healthDashboard',
          title: 'Health Dashboard',
          url: '/health-dashboard',
          type: 'item',
          icon: 'feather icon-settings',
          classes: 'nav-item'
        }]
      }];

      var NavigationItem = /*#__PURE__*/function () {
        function NavigationItem() {
          _classCallCheck(this, NavigationItem);
        }

        _createClass(NavigationItem, [{
          key: "get",
          value: function get() {
            return NavigationItems;
          }
        }]);

        return NavigationItem;
      }();

      NavigationItem.ɵfac = function NavigationItem_Factory(t) {
        return new (t || NavigationItem)();
      };

      NavigationItem.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationItem,
        factory: NavigationItem.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/layout/auth/auth.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/theme/layout/auth/auth.component.ts ***!
      \*****************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function srcAppThemeLayoutAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 1,
        vars: 0,
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/alert/alert.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
      \******************************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function srcAppThemeSharedComponentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlertComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx_r2.dismissAlert(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "alert-dismissible": a0
        };
      };

      var _c1 = ["*"];

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent() {
          _classCallCheck(this, AlertComponent);
        }

        _createClass(AlertComponent, [{
          key: "dismissAlert",
          value: function dismissAlert(element) {
            element.parentElement.removeChild(element);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)();
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["app-alert"]],
        inputs: {
          type: "type",
          dismiss: "dismiss"
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 7,
        consts: [["role", "alert", 3, "ngClass"], ["alert", ""], ["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlertComponent_button_3_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert alert-", ctx.type, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.dismiss));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismiss);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss']
          }]
        }], function () {
          return [];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/alert/alert.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
      \***************************************************************/

    /*! exports provided: AlertModule */

    /***/
    function srcAppThemeSharedComponentsAlertAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return AlertModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert.component */
      "./src/app/theme/shared/components/alert/alert.component.ts");

      var AlertModule = function AlertModule() {
        _classCallCheck(this, AlertModule);
      };

      AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AlertModule
      });
      AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AlertModule_Factory(t) {
          return new (t || AlertModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, {
          declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \****************************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function srcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../layout/admin/navigation/navigation */
      "./src/app/theme/layout/admin/navigation/navigation.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_7_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h5", 15);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_7_h5_1_Template, 1, 0, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var last_r11 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r11);
        }
      }

      var _c0 = function _c0() {
        return ["/microservices"];
      };

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_12_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r13.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r13.title);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_12_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r13.title);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_12_li_1_Template, 3, 2, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_12_li_2_Template, 3, 1, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r13.url !== false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r13.url === false);
        }
      }

      var _c1 = function _c1() {
        return ["/health-dashboard"];
      };

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Health Metrics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_7_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_10_Template, 2, 2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_11_Template, 2, 2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_12_Template, 3, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_div_13_Template, 7, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.navigationList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "theme2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "theme1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.navigationList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r2.url !== "/health-dashboard");
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_Template, 14, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r2 = ctx.$implicit;
          var last_r3 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r3 && breadcrumb_r2.breadcrumbs !== false);
        }
      }

      function BreadcrumbComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.navigationList);
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(route, nav, titleService) {
          _classCallCheck(this, BreadcrumbComponent);

          this.route = route;
          this.nav = nav;
          this.titleService = titleService;
          this.breadcrumbList = [];
          this.navigationList = [];
          this.navigation = this.nav.get();
          this.type = 'theme2';
          this.setBreadcrumb();
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var routerUrl;
            routerUrl = this.route.url;

            if (routerUrl && typeof routerUrl === 'string') {
              this.filterNavigation(routerUrl);
            }
          }
        }, {
          key: "setBreadcrumb",
          value: function setBreadcrumb() {
            var _this6 = this;

            var routerUrl;
            this.route.events.subscribe(function (router) {
              routerUrl = router.urlAfterRedirects;

              if (routerUrl && typeof routerUrl === 'string') {
                _this6.breadcrumbList.length = 0;
                var activeLink = router.url;

                _this6.filterNavigation(activeLink);
              }
            });
          }
        }, {
          key: "filterNavigation",
          value: function filterNavigation(activeLink) {
            var result = [];
            var title = 'Welcome';
            this.navigation.forEach(function (a) {
              if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                result = [{
                  url: 'url' in a ? a.url : false,
                  title: a.title,
                  breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
                  type: a.type
                }];
                title = a.title;
              } else {
                if (a.type === 'group' && 'children' in a) {
                  a.children.forEach(function (b) {
                    if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                      result = [{
                        url: 'url' in b ? b.url : false,
                        title: b.title,
                        breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                        type: b.type
                      }];
                      title = b.title;
                    } else {
                      if (b.type === 'collapse' && 'children' in b) {
                        b.children.forEach(function (c) {
                          if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                            result = [{
                              url: 'url' in b ? b.url : false,
                              title: b.title,
                              breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                              type: b.type
                            }, {
                              url: 'url' in c ? c.url : false,
                              title: c.title,
                              breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                              type: c.type
                            }];
                            title = c.title;
                          } else {
                            if (c.type === 'collapse' && 'children' in c) {
                              c.children.forEach(function (d) {
                                if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                  result = [{
                                    url: 'url' in b ? b.url : false,
                                    title: b.title,
                                    breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                                    type: b.type
                                  }, {
                                    url: 'url' in c ? c.url : false,
                                    title: c.title,
                                    breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                                    type: c.type
                                  }, {
                                    url: 'url' in d ? d.url : false,
                                    title: d.title,
                                    breadcrumbs: 'breadcrumbs' in c ? d.breadcrumbs : true,
                                    type: d.type
                                  }];
                                  title = d.title;
                                }
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
            this.navigationList = result;
            this.titleService.setTitle(title + ' | IQ');
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          type: "type"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "page-header", 4, "ngIf"], [1, "page-header"], [1, "page-block"], [1, "row"], [1, "col", 2, "max-width", "100px"], ["id", "main-logo", "src", "assets/images/logo1.png", "height", "55px", "width", "55px", "alt", "", 1, "logo"], [1, "col-md-10"], [1, "page-header-title", 2, "padding-top", "5px"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], ["class", "col-md-1", 4, "ngIf"], ["class", "m-b-10", 4, "ngIf"], [1, "m-b-10"], [3, "routerLink"], [1, "feather", "icon-home"], ["class", "breadcrumb-item", 4, "ngIf"], ["href", "javascript:"], [1, "col-md-1"], [1, "row", "justify-content-end"], [2, "color", "#ffffff", "margin-right", "6px", "font-size", "12px"], [1, "fas", "fa-chart-bar", "fa", 2, "color", "#ffffff", "margin-top", "20px"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navigationList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
      \*************************************************************************/

    /*! exports provided: BreadcrumbModule */

    /***/
    function srcAppThemeSharedComponentsBreadcrumbBreadcrumbModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
        return BreadcrumbModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumb.component */
      "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var BreadcrumbModule = function BreadcrumbModule() {
        _classCallCheck(this, BreadcrumbModule);
      };

      BreadcrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BreadcrumbModule
      });
      BreadcrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BreadcrumbModule_Factory(t) {
          return new (t || BreadcrumbModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
          declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
            exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/card/card.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/theme/shared/components/card/card.component.ts ***!
      \****************************************************************/

    /*! exports provided: CardComponent */

    /***/
    function srcAppThemeSharedComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /*import { AnimationBuilder, AnimationService } from 'css-animator';*/


      function CardComponent_div_2_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.cardTitle);
        }
      }

      function CardComponent_div_2_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.captionClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.cardCaption);
        }
      }

      function CardComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx_r11.fullCardToggle(_r0, "", true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.collapsedCardToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.cardRefresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Reload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.cardRemoveAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.fullIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.cardClass === "full-card" ? "Restore" : "Maximize", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.collapsedIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.collapsedCard === "collapsed" ? "Expand" : "Collapse", " ");
        }
      }

      function CardComponent_div_2_ng_content_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "customHeader"]);
        }
      }

      function CardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_2_h5_1_Template, 2, 1, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_p_2_Template, 2, 2, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_2_div_3_Template, 25, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_2_ng_content_4_Template, 1, 0, "ng-content", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.headerClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.customHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.customHeader && ctx_r1.cardCaption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.options && !ctx_r1.customHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.customHeader);
        }
      }

      function CardComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function CardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapsedCard", ctx_r2.collapsedCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function CardComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.blockClass);
        }
      }

      function CardComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.footerClass);
        }
      }

      function CardComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["", 8, "app-card-header"]], "*", [["", 8, "app-card-footer"]]];
      var _c1 = [".app-card-header", "*", ".app-card-footer"];

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent(
        /*animationService: AnimationService,*/
        config) {
          _classCallCheck(this, CardComponent);

          config.placement = 'bottom-right';
          this.customHeader = false;
          this.options = true;
          this.hidHeader = false;
          this.isCardFooter = false;
          this.cardTitle = '';
          /*this.animator = animationService.builder();
          this.animators = animationService.builder();
          this.animator.useVisibility = true;*/

          this.fullIcon = 'icon-maximize';
          this.isAnimating = false;
          this.collapsedCard = 'expanded';
          this.collapsedIcon = 'icon-minus';
          this.loadCard = false;
          this.cardRemove = 'open';
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.hidHeader) {
              this.options = false;
            }

            if (!this.options || this.hidHeader || this.customHeader) {
              this.collapsedCard = 'false';
            }
          }
        }, {
          key: "fullCardToggle",
          value: function fullCardToggle(element, animation, status) {
            var _this7 = this;

            animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
            this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize'; // const duration = this.cardClass === 'full-card' ? 300 : 600;

            this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';

            if (status) {
              this.animation = animation;
            }

            this.isAnimating = true;
            /*this.animators
              .setType(this.animation)
              .setDuration(500)
              .setDirection('alternate')
              .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
              .animate(element)
              .then(() => {
                this.isAnimating = false;
              })
              .catch(() => {
                this.isAnimating = false;
              });*/

            setTimeout(function () {
              _this7.cardClass = animation === 'zoomOut' ? '' : _this7.cardClass;

              if (_this7.cardClass === 'full-card') {
                document.querySelector('body').style.overflow = 'hidden';
              } else {
                document.querySelector('body').removeAttribute('style');
              }
            }, 500);
          }
        }, {
          key: "collapsedCardToggle",
          value: function collapsedCardToggle() {
            this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
            this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
          }
        }, {
          key: "cardRefresh",
          value: function cardRefresh() {
            var _this8 = this;

            this.loadCard = true;
            this.cardClass = 'card-load';
            setTimeout(function () {
              _this8.loadCard = false;
              _this8.cardClass = 'expanded';
            }, 3000);
          }
        }, {
          key: "cardRemoveAction",
          value: function cardRemoveAction() {
            this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]));
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        inputs: {
          cardTitle: "cardTitle",
          cardClass: "cardClass",
          blockClass: "blockClass",
          headerClass: "headerClass",
          options: "options",
          hidHeader: "hidHeader",
          customHeader: "customHeader",
          cardCaption: "cardCaption",
          captionClass: "captionClass",
          isCardFooter: "isCardFooter",
          footerClass: "footerClass"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])],
        ngContentSelectors: _c1,
        decls: 8,
        vars: 7,
        consts: [[1, "card", 3, "ngClass"], ["toAnimate", ""], ["class", "card-header", 3, "ngClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["subMenuContent", ""], ["class", "card-footer", 3, "ngClass", 4, "ngIf"], ["class", "card-loader", 4, "ngIf"], [1, "card-header", 3, "ngClass"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "card-header-right", 4, "ngIf"], [3, "ngClass"], [1, "card-header-right"], ["ngbDropdown", "", 1, "btn-group", "card-option", "dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle", "btn-icon"], [1, "feather", "icon-more-horizontal"], ["ngbDropdownMenu", "", 1, "list-unstyled", "card-option", "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", "full-card", 3, "click"], ["href", "javascript:"], [1, "feather", 3, "ngClass"], [1, "dropdown-item", "minimize-card", 3, "click"], [2, "display", "none"], [1, "feather", "icon-plus"], [1, "dropdown-item", "reload-card", 3, "click"], [1, "feather", "icon-refresh-cw"], [1, "dropdown-item", "close-card", 3, "click"], [1, "feather", "icon-trash"], [4, "ngTemplateOutlet"], [1, "card-body", 3, "ngClass"], [1, "card-footer", 3, "ngClass"], [1, "card-loader"], [1, "pct-loader1", "anim-rotate"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_Template, 5, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_3_Template, 2, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_div_7_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardClass)("@cardRemove", ctx.cardRemove);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options)("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCardFooter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCard);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        styles: [".card.full-card[_ngcontent-%COMP%] {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            overflow: 'hidden',
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            overflow: 'hidden',
            height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"]
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              overflow: 'hidden',
              height: '0px'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              overflow: 'hidden',
              height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"]
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              display: 'none'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))])]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]
          }];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cardClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          blockClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hidHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cardCaption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          captionClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isCardFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          footerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/card/card.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/theme/shared/components/card/card.module.ts ***!
      \*************************************************************/

    /*! exports provided: CardModule */

    /***/
    function srcAppThemeSharedComponentsCardCardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardModule", function () {
        return CardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card.component */
      "./src/app/theme/shared/components/card/card.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /*import { AnimationService, AnimatorModule } from 'css-animator';*/


      var CardModule = function CardModule() {
        _classCallCheck(this, CardModule);
      };

      CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CardModule
      });
      CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CardModule_Factory(t) {
          return new (t || CardModule)();
        },
        providers: [
          /*AnimationService*/
        ],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, {
          declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]],
          exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]],
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            providers: [
              /*AnimationService*/
            ]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ApexChartComponent */

    /***/
    function srcAppThemeSharedComponentsChartApexChartApexChartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function () {
        return ApexChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! apexcharts/dist/apexcharts.common.js */
      "./node_modules/apexcharts/dist/apexcharts.common.js");
      /* harmony import */


      var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _apex_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apex-chart.service */
      "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");

      var ApexChartComponent = /*#__PURE__*/function () {
        function ApexChartComponent(apexEvent) {
          _classCallCheck(this, ApexChartComponent);

          this.apexEvent = apexEvent;
        }

        _createClass(ApexChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            setTimeout(function () {
              _this9.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1___default.a(document.querySelector('#' + _this9.chartID), _this9.chartConfig);

              _this9.chart.render();
            });
            this.apexEvent.changeTimeRange.subscribe(function () {
              if (_this9.xAxis) {
                _this9.chart.updateOptions({
                  xaxis: _this9.xAxis
                });
              }
            });
            this.apexEvent.changeSeriesData.subscribe(function () {
              if (_this9.newData) {
                _this9.chart.updateSeries([{
                  data: _this9.newData
                }]);
              }
            });
          }
        }]);

        return ApexChartComponent;
      }();

      ApexChartComponent.ɵfac = function ApexChartComponent_Factory(t) {
        return new (t || ApexChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]));
      };

      ApexChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ApexChartComponent,
        selectors: [["app-apex-chart"]],
        inputs: {
          chartID: "chartID",
          chartConfig: "chartConfig",
          xAxis: "xAxis",
          newData: "newData"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "id"]],
        template: function ApexChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.chartID);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApexChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-apex-chart',
            templateUrl: './apex-chart.component.html',
            styleUrls: ['./apex-chart.component.scss']
          }]
        }], function () {
          return [{
            type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]
          }];
        }, {
          chartID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chartConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          xAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          newData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
      \********************************************************************************/

    /*! exports provided: ApexChartService */

    /***/
    function srcAppThemeSharedComponentsChartApexChartApexChartServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApexChartService", function () {
        return ApexChartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ApexChartService = /*#__PURE__*/function () {
        function ApexChartService() {
          _classCallCheck(this, ApexChartService);

          this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ApexChartService, [{
          key: "eventChangeTimeRange",
          value: function eventChangeTimeRange() {
            this.changeTimeRange.emit();
          }
        }, {
          key: "eventChangeSeriesData",
          value: function eventChangeSeriesData() {
            this.changeSeriesData.emit();
          }
        }]);

        return ApexChartService;
      }();

      ApexChartService.ɵfac = function ApexChartService_Factory(t) {
        return new (t || ApexChartService)();
      };

      ApexChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApexChartService,
        factory: ApexChartService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApexChartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, {
          changeTimeRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          changeSeriesData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/data-table/data-filter.pipe.ts":
    /*!************************************************************************!*\
      !*** ./src/app/theme/shared/components/data-table/data-filter.pipe.ts ***!
      \************************************************************************/

    /*! exports provided: DataFilterPipe */

    /***/
    function srcAppThemeSharedComponentsDataTableDataFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function () {
        return DataFilterPipe;
      });
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DataFilterPipe = /*#__PURE__*/function () {
        function DataFilterPipe() {
          _classCallCheck(this, DataFilterPipe);
        }

        _createClass(DataFilterPipe, [{
          key: "transform",
          value: function transform(array, query) {
            if (query) {
              return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, function (row) {
                return row.name.indexOf(query) > -1;
              });
            }

            return array;
          }
        }]);

        return DataFilterPipe;
      }();

      DataFilterPipe.ɵfac = function DataFilterPipe_Factory(t) {
        return new (t || DataFilterPipe)();
      };

      DataFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "dataFilter",
        type: DataFilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataFilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
          args: [{
            name: 'dataFilter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/gallery/gallery.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/theme/shared/components/gallery/gallery.component.ts ***!
      \**********************************************************************/

    /*! exports provided: GalleryComponent */

    /***/
    function srcAppThemeSharedComponentsGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
        return GalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-lightbox */
      "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function GalleryComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.open(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getSantizeUrl(image_r1.thumb), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var GalleryComponent = /*#__PURE__*/function () {
        function GalleryComponent(lightbox, lightboxEvent, lighboxConfig, sanitizer) {
          _classCallCheck(this, GalleryComponent);

          this.lightbox = lightbox;
          this.lightboxEvent = lightboxEvent;
          this.lighboxConfig = lighboxConfig;
          this.sanitizer = sanitizer;
          this.albums = this.albums ? this.albums : [];
          lighboxConfig.fadeDuration = 1;
        }

        _createClass(GalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getSantizeUrl",
          value: function getSantizeUrl(url) {
            return this.sanitizer.bypassSecurityTrustUrl(url);
          }
        }, {
          key: "open",
          value: function open(index) {
            var _this10 = this;

            this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(function (event) {
              return _this10._onReceivedEvent(event);
            });
            this.lightbox.open(this.albums, index, {
              wrapAround: true,
              showImageNumberLabel: true
            });
          }
        }, {
          key: "_onReceivedEvent",
          value: function _onReceivedEvent(event) {
            if (event.id === ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LIGHTBOX_EVENT"].CLOSE) {
              this.subscription.unsubscribe();
            }
          }
        }]);

        return GalleryComponent;
      }();

      GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
        return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleryComponent,
        selectors: [["app-gallery"]],
        inputs: {
          albums: "albums"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "column", "has-text-centered"], ["class", "img-row", 4, "ngFor", "ngForOf"], [1, "img-row"], [1, "img-frame", 3, "src", "click"]],
        template: function GalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albums);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]
          }, {
            type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"]
          }, {
            type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, {
          albums: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/index.ts":
    /*!**************************************************!*\
      !*** ./src/app/theme/shared/components/index.ts ***!
      \**************************************************/

    /*! exports provided: AlertModule, CardModule, BreadcrumbModule, ModalModule */

    /***/
    function srcAppThemeSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert/alert.module */
      "./src/app/theme/shared/components/alert/alert.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"];
      });
      /* harmony import */


      var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card/card.module */
      "./src/app/theme/shared/components/card/card.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CardModule", function () {
        return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"];
      });
      /* harmony import */


      var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.module */
      "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
        return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"];
      });
      /* harmony import */


      var _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/modal.module */
      "./src/app/theme/shared/components/modal/modal.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
        return _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"];
      });
      /***/

    },

    /***/
    "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: AnimationModalComponent */

    /***/
    function srcAppThemeSharedComponentsModalAnimationModalAnimationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationModalComponent", function () {
        return AnimationModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AnimationModalComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
        }
      }

      function AnimationModalComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationModalComponent_ng_template_4_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.close(ctx_r3.modalID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = ["*"];

      var AnimationModalComponent = /*#__PURE__*/function () {
        function AnimationModalComponent() {
          _classCallCheck(this, AnimationModalComponent);

          this.backDrop = false;
        }

        _createClass(AnimationModalComponent, [{
          key: "close",
          value: function close(event) {
            document.querySelector('#' + event).classList.remove('md-show');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AnimationModalComponent;
      }();

      AnimationModalComponent.ɵfac = function AnimationModalComponent_Factory(t) {
        return new (t || AnimationModalComponent)();
      };

      AnimationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AnimationModalComponent,
        selectors: [["app-animation-modal"]],
        inputs: {
          modalClass: "modalClass",
          contentClass: "contentClass",
          modalID: "modalID",
          backDrop: "backDrop"
        },
        ngContentSelectors: _c0,
        decls: 6,
        vars: 5,
        consts: [[1, "md-modal", 3, "ngClass", "id"], [1, "md-content", 3, "ngClass"], ["class", "md-overlay", 4, "ngIf", "ngIfElse"], ["backDropOver", ""], [1, "md-overlay"], [1, "md-overlay", 3, "click"]],
        template: function AnimationModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnimationModalComponent_div_3_Template, 1, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimationModalComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.modalID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.modalClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backDrop)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  perspective: 600px;\n}\n\n.container {\n  min-height: 100%;\n}\n\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.md-show {\n  visibility: visible;\n}\n\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  transition: all 0.3s;\n}\n\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n\n/* Content styles */\n\n.md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n\n.md-content h3 {\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  opacity: 0.8;\n  color: #fff;\n  border-radius: 3px 3px 0 0;\n}\n\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n}\n\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n  line-height: 1.5;\n}\n\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n\n.md-content > div ul li {\n  padding: 5px 0;\n}\n\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n\n/* Individual modal styles with animations/transitions */\n\n/* Effect 1: Fade in and scale up */\n\n.md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 2: Slide from the right */\n\n.md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n\n.md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n/* Effect 3: Slide from the bottom */\n\n.md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* Effect 4: Newspaper */\n\n.md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 5: fall */\n\n.md-effect-5.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 6: side fall */\n\n.md-effect-6.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 7:  slide and stick to top */\n\n.md-effect-7 {\n  top: 0;\n  transform: translateX(-50%);\n}\n\n.md-effect-7 .md-content {\n  transform: translateY(-200%);\n  transition: all .3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n\n/* Effect 8: 3D flip horizontal */\n\n.md-effect-8.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n\n/* Effect 9: 3D flip vertical */\n\n.md-effect-9.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 10: 3D sign */\n\n.md-effect-10.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 11: Super scaled */\n\n.md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 12:  Just me */\n\n.md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent;\n}\n\n.md-effect-12 .md-content h3 {\n  background: transparent;\n}\n\n.md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 13: 3D slit */\n\n.md-effect-13.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit .7s forwards ease-out;\n  animation: slit .7s forwards ease-out;\n}\n\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: .5;\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n/* Effect 14:  3D Rotate from bottom */\n\n.md-effect-14.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n\n.md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 15:  3D Rotate in from left */\n\n.md-effect-15.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n\n/* Effect 16:  Blur */\n\nbody.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  -webkit-filter: blur(3px);\n  filter: blur(3px);\n}\n\n.md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0;\n}\n\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* Effect 17:  Slide in from bottom with perspective on container */\n\nbody.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n\nbody.modal-17 > header {\n  height: 70px;\n}\n\nbody.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n}\n\nbody.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\nbody.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none;\n}\n\nbody.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\n.md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%);\n}\n\n.md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s;\n}\n\n/* Effect 18:  Slide from right with perspective on container */\n\nbody.modal-18 {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-18 ~ .md-overlay {\n  transition: all 0.5s;\n}\n\nbody.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none;\n}\n\nbody.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n\nbody.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(-200px);\n  }\n}\n\n@keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateZ(-200px);\n  }\n}\n\n.md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s;\n}\n\n/* Effect 19:  Slip in from the top with perspective on container */\n\nbody.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none;\n}\n\nbody.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n\nbody.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n}\n\n@keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n}\n\n.md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL2FuaW1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBSEE7RUFJSSxZQUFZO0VBQ1osZ0JBQWdCO0VBRWhCLGtCQUFrQjtBQUd0Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUVsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFFM0IsNENBQTRDO0FBRTlDOztBQUNBO0VBQ0UsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFVBQVU7RUFDViwrQkFBK0I7RUFFL0Isb0JBQW9CO0FBRXRCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUVyQjs7QUFDQSxtQkFBQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBTEE7RUFNSSxTQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUc5Qjs7QUFkQTtFQWNJLHVCQUF1QjtFQUN2QixTQUFTO0FBSWI7O0FBbkJBO0VBaUJNLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBTXRCOztBQXpCQTtFQXNCTSxTQUFTO0VBQ1Qsc0JBQXNCO0FBTzVCOztBQTlCQTtFQXlCUSxjQUFjO0FBU3RCOztBQWxDQTtFQThCSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQVFwQjs7QUFKQSx3REFBQTs7QUFFQSxtQ0FBQTs7QUFFQTtFQUVFLHFCQUFxQjtFQUNyQixVQUFVO0VBRVYsb0JBQW9CO0FBS3RCOztBQUZBO0VBRUUsbUJBQW1CO0VBQ25CLFVBQVU7QUFLWjs7QUFGQSxtQ0FBQTs7QUFFQTtFQUVFLDBCQUEwQjtFQUMxQixVQUFVO0VBRVYsc0RBQXNEO0FBSXhEOztBQURBO0VBRUUsd0JBQXdCO0VBQ3hCLFVBQVU7QUFJWjs7QUFEQSxvQ0FBQTs7QUFFQTtFQUVFLDBCQUEwQjtFQUMxQixVQUFVO0VBRVYsb0JBQW9CO0FBR3RCOztBQUFBO0VBRUUsd0JBQXdCO0VBQ3hCLFVBQVU7QUFHWjs7QUFBQSx3QkFBQTs7QUFFQTtFQUlFLGtDQUFrQztFQUNsQyxVQUFVO0FBRVo7O0FBQ0E7RUFHRSxvQkFBb0I7QUFFdEI7O0FBQ0E7RUFJRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUVaOztBQUNBLG1CQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBQXZCOztBQUpBO0VBU0ksNEJBQTRCO0VBSTVCLDJDQUEyQztFQUMzQyxVQUFVO0FBQ2Q7O0FBR0E7RUFHRSw0QkFBNEI7RUFJNUIsd0NBQXdDO0VBQ3hDLFVBQVU7QUFBWjs7QUFHQSx3QkFBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQUZ2Qjs7QUFGQTtFQVNJLDRCQUE0QjtFQUk1Qix5REFBeUQ7RUFDekQsVUFBVTtBQURkOztBQUtBO0VBR0UsNEJBQTRCO0VBSTVCLG1EQUFtRDtFQUNuRCxVQUFVO0FBRlo7O0FBS0Esc0NBQUE7O0FBRUE7RUFDRSxNQUFNO0VBSU4sMkJBQTJCO0FBSDdCOztBQUZBO0VBVUksNEJBQTRCO0VBRzVCLG1CQUFtQjtFQUNuQixVQUFVO0FBRGQ7O0FBS0E7RUFJRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFVBQVU7QUFGWjs7QUFLQSxpQ0FBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQUp2Qjs7QUFBQTtFQVNJLDRCQUE0QjtFQUk1QiwwQkFBMEI7RUFHMUIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFIZDs7QUFPQTtFQUlFLHdCQUF3QjtFQUN4QixVQUFVO0FBSlo7O0FBT0EsK0JBQUE7O0FBRUE7RUFJSSxtQkFBbUI7QUFOdkI7O0FBRUE7RUFTSSw0QkFBNEI7RUFJNUIsMEJBQTBCO0VBRzFCLG9CQUFvQjtFQUNwQixVQUFVO0FBTGQ7O0FBU0E7RUFJRSx3QkFBd0I7RUFDeEIsVUFBVTtBQU5aOztBQVNBLHVCQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBUnZCOztBQUlBO0VBU0ksNEJBQTRCO0VBSTVCLDBCQUEwQjtFQUcxQix1QkFBdUI7RUFDdkIsVUFBVTtFQUdWLG9CQUFvQjtBQVB4Qjs7QUFXQTtFQUlFLHdCQUF3QjtFQUN4QixVQUFVO0FBUlo7O0FBV0EsNEJBQUE7O0FBRUE7RUFJRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUdWLG9CQUFvQjtBQVR0Qjs7QUFZQTtFQUlFLG1CQUFtQjtFQUNuQixVQUFVO0FBVFo7O0FBWUEsd0JBQUE7O0FBRUE7RUFJRSxxQkFBcUI7RUFDckIsVUFBVTtFQUdWLG9CQUFvQjtFQUNwQixXQUFXO0VBSVgsdUJBQXVCO0FBYnpCOztBQUFBO0VBV0ksdUJBQXVCO0FBUDNCOztBQVlBO0VBSUUsbUJBQW1CO0VBQ25CLFVBQVU7QUFUWjs7QUFZQSx1QkFBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQVh2Qjs7QUFPQTtFQVNJLDRCQUE0QjtFQUk1Qiw2Q0FBNkM7RUFDN0MsVUFBVTtBQVZkOztBQWNBO0VBQ0UsNkNBQTZDO0VBRTdDLHFDQUFxQztBQVh2Qzs7QUFjQTtFQUNFO0lBQ0Usb0RBQW9EO0lBQ3BELFdBQVc7SUFDWCwyQ0FBMkM7RUFYN0M7RUFjQTtJQUNFLDhDQUE4QztJQUM5QyxVQUFVO0VBWlo7QUFDRjs7QUE4QkE7RUFDRTtJQUNFLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsMENBQWtDO1lBQWxDLGtDQUFrQztFQWZwQztFQWtCQTtJQUNFLHNDQUFzQztJQUN0QyxVQUFVO0VBaEJaO0FBQ0Y7O0FBb0JBLHNDQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBbkJ2Qjs7QUFlQTtFQVNJLDRCQUE0QjtFQUk1QiwwQ0FBMEM7RUFHMUMsd0JBQXdCO0VBQ3hCLFVBQVU7RUFHViw2QkFBNkI7QUFsQmpDOztBQXNCQTtFQUlFLHVDQUF1QztFQUN2QyxVQUFVO0FBbkJaOztBQXNCQSx1Q0FBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQXJCdkI7O0FBaUJBO0VBU0ksNEJBQTRCO0VBSTVCLDREQUE0RDtFQUc1RCx3QkFBd0I7RUFDeEIsVUFBVTtFQUdWLG9CQUFvQjtBQXBCeEI7O0FBd0JBO0VBSUUsdURBQXVEO0VBQ3ZELFVBQVU7QUFyQlo7O0FBd0JBLHFCQUFBOztBQUVBO0VBRUkseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQXZCckI7O0FBMkJBO0VBRUUsMEJBQTBCO0VBQzFCLFVBQVU7QUF4Qlo7O0FBMkJBO0VBRUUsb0JBQW9CO0FBeEJ0Qjs7QUEyQkE7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVTtBQXhCWjs7QUEyQkEsbUVBQUE7O0FBRUE7RUFFSSxZQUFZO0VBQ1osZ0JBQWdCO0VBR2hCLDBCQUEwQjtBQTFCOUI7O0FBOEJBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUdoQiwwQkFBMEI7QUEzQjVCOztBQThCQTtFQUdNLFlBQVk7QUE3QmxCOztBQTBCQTtFQU1NLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUE1QmhDOztBQXFCQTtFQVdJLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFFMUIseUJBQXlCO0VBRXpCLHdCQUF3QjtFQUV4Qiw0QkFBNEI7QUE1QmhDOztBQVVBO0VBc0JNLGFBQWE7QUE1Qm5COztBQU1BO0VBNEJNLHlCQUF5QjtFQUV6Qix3QkFBd0I7RUFFeEIsNEJBQTRCO0FBN0JsQzs7QUFrQ0E7RUFDRSxVQUFVO0VBRVYsMkJBQTJCO0FBL0I3Qjs7QUFrQ0E7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUdWLHlCQUF5QjtBQS9CM0I7O0FBa0NBLCtEQUFBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQWhDbEI7O0FBbUNBO0VBRUUsb0JBQW9CO0FBaEN0Qjs7QUFtQ0E7RUFHTSxhQUFhO0FBbENuQjs7QUErQkE7RUFPSSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7RUFDaEMsNkRBQTZEO0VBQzdELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIscURBQXFEO0FBbEN6RDs7QUFvQkE7RUFrQk0sb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyw2REFBNkQ7RUFDN0QsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixxREFBcUQ7QUFsQzNEOztBQXVDQTtFQUNFO0lBQ0Usa0RBQWtEO0lBQ2xELDJDQUEyQztFQXBDN0M7RUF1Q0E7SUFDRSxxQ0FBcUM7RUFyQ3ZDO0FBQ0Y7O0FBeUNBO0VBQ0U7SUFDRSwwQ0FBMEM7SUFDMUMsMkNBQW1DO1lBQW5DLG1DQUFtQztFQXRDckM7RUF5Q0E7SUFDRSw2QkFBNkI7RUF2Qy9CO0FBQ0Y7O0FBMkNBO0VBRUUsMkJBQTJCO0VBQzNCLFVBQVU7QUF4Q1o7O0FBMkNBO0VBR0ksd0JBQXdCO0VBQ3hCLFVBQVU7RUFFVix5QkFBeUI7QUF6QzdCOztBQW1DQTtFQVVNLFlBQVk7RUFDWixnQkFBZ0I7QUF6Q3RCOztBQThCQTtFQWdCTSxvQkFBb0I7QUF4QzFCOztBQTZDQSxtRUFBQTs7QUFFQTtFQUdNLGFBQWE7QUE3Q25COztBQTBDQTtFQU9JLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQix3Q0FBd0M7QUE3QzVDOztBQTRCQTtFQXFCTSxvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLGdEQUFnRDtFQUNoRCxpQ0FBaUM7RUFDakMsK0JBQStCO0VBQy9CLDZDQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHdDQUF3QztBQTdDOUM7O0FBa0RBO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsMkNBQTJDO0VBL0M3QztBQUNGOztBQTJEQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLDJDQUFtQztZQUFuQyxtQ0FBbUM7RUFqRHJDO0FBQ0Y7O0FBcURBO0VBSUUsNEJBQTRCO0VBQzVCLFVBQVU7QUFsRFo7O0FBcURBO0VBSUUsd0JBQXdCO0VBQ3hCLFVBQVU7RUFHVix5QkFBeUI7QUFsRDNCOztBQXFEQTtFQUNFO0lBQ0UsY0FBYztFQWxEaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtcGVyc3BlY3RpdmUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1kLW1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA2MzBweDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLm1kLXNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgc3R5bGVzICovXHJcblxyXG4ubWQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICB9XHJcbiAgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAwIDMwcHggMjBweDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEluZGl2aWR1YWwgbW9kYWwgc3R5bGVzIHdpdGggYW5pbWF0aW9ucy90cmFuc2l0aW9ucyAqL1xyXG5cclxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXHJcblxyXG4ubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cclxuXHJcbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA0OiBOZXdzcGFwZXIgKi9cclxuXHJcbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC01IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC02IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA3OiAgc2xpZGUgYW5kIHN0aWNrIHRvIHRvcCAqL1xyXG5cclxuLm1kLWVmZmVjdC03IHtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cclxuXHJcbi5tZC1lZmZlY3QtOCB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA5OiAzRCBmbGlwIHZlcnRpY2FsICovXHJcblxyXG4ubWQtZWZmZWN0LTkge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTAge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMTogU3VwZXIgc2NhbGVkICovXHJcblxyXG4ubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cclxuXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGgzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEzOiAzRCBzbGl0ICovXHJcblxyXG4ubWQtZWZmZWN0LTEzIHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxuICAtbW96LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTQge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXHJcblxyXG4ubWQtZWZmZWN0LTE1IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxNjogIEJsdXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTYgPiB7XHJcbiAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyLCAubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTc6ICBTbGlkZSBpbiBmcm9tIGJvdHRvbSB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xyXG5cclxuYm9keS5tb2RhbC0xNyA+IHtcclxuICBuYXYsIHNlY3Rpb24sIC5tZC1vdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtMTcge1xyXG4gID4ge1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgPiB7XHJcbiAgICBuYXYsIC5tZC1vdmVybGF5LCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTgge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuYm9keS5tb2RhbC0xOCB7XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgfVxyXG4gID4ge1xyXG4gICAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICAmLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIH1cclxuICAmLm1kLWVmZmVjdC0xOSB+IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubWQtb3ZlcmxheSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTkge1xyXG4gID4ge1xyXG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICBhbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuICA+IHtcclxuICAgIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICB9XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-animation-modal',
            templateUrl: './animation-modal.component.html',
            styleUrls: ['./animation-modal.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          modalClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          modalID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/modal/modal.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/theme/shared/components/modal/modal.module.ts ***!
      \***************************************************************/

    /*! exports provided: ModalModule */

    /***/
    function srcAppThemeSharedComponentsModalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
        return ModalModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ui-modal/ui-modal.component */
      "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
      /* harmony import */


      var _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./animation-modal/animation-modal.component */
      "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts");

      var ModalModule = function ModalModule() {
        _classCallCheck(this, ModalModule);
      };

      ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ModalModule
      });
      ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ModalModule_Factory(t) {
          return new (t || ModalModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
          declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]],
            exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts ***!
      \******************************************************************************/

    /*! exports provided: UiModalComponent */

    /***/
    function srcAppThemeSharedComponentsModalUiModalUiModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiModalComponent", function () {
        return UiModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function UiModalComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UiModalComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          "display": a0,
          "opacity": a1
        };
      };

      var _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];

      var UiModalComponent = /*#__PURE__*/function () {
        function UiModalComponent() {
          _classCallCheck(this, UiModalComponent);

          this.hideHeader = false;
          this.hideFooter = false;
          this.containerClick = true;
          this.visible = false;
          this.visibleAnimate = false;
        }

        _createClass(UiModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "show",
          value: function show() {
            var _this11 = this;

            this.visible = true;
            setTimeout(function () {
              return _this11.visibleAnimate = true;
            }, 100);
            document.querySelector('body').classList.add('modal-open');
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this12 = this;

            this.visibleAnimate = false;
            setTimeout(function () {
              return _this12.visible = false;
            }, 300);
            document.querySelector('body').classList.remove('modal-open');
          }
        }, {
          key: "onContainerClicked",
          value: function onContainerClicked(event) {
            if (event.target.classList.contains('modal') && this.containerClick === true) {
              this.hide();
            }
          }
        }]);

        return UiModalComponent;
      }();

      UiModalComponent.ɵfac = function UiModalComponent_Factory(t) {
        return new (t || UiModalComponent)();
      };

      UiModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiModalComponent,
        selectors: [["app-ui-modal"]],
        inputs: {
          dialogClass: "dialogClass",
          hideHeader: "hideHeader",
          hideFooter: "hideFooter",
          containerClick: "containerClick"
        },
        ngContentSelectors: _c3,
        decls: 7,
        vars: 10,
        consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], ["role", "document", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]],
        template: function UiModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiModalComponent_Template_div_click_0_listener($event) {
              return ctx.onContainerClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UiModalComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UiModalComponent_div_6_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dialogClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.basic.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n\n.basic.fade.in {\n  opacity: 1;\n}\n\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n\n.basic.modal.fade .modal-dialog {\n  transition: all .3s ease-out;\n  transform: translate(0, -25%);\n}\n\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvdWktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFBO0VBQ0EsaUNBQWlDO0VBQ2pDLFVBQVU7QUFBZDs7QUFaQTtFQWVJLFVBQVU7RUFHViwrQkFBK0I7QUFDbkM7O0FBbkJBO0VBb0JNLFVBQVU7QUFHaEI7O0FBdkJBO0VBNEJNLDBCQUEwQjtBQUVoQzs7QUE5QkE7RUFpQ00sNEJBQTRCO0VBSTVCLDZCQUE2QjtBQUduQzs7QUF4Q0E7RUF5Q0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBR2Y7O0FBOUNBO0VBOENJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUF5QjtFQUN6QixpQkFBaUI7QUFJckIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC91aS1tb2RhbC91aS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgJi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgJi5mYWRlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgICYuaW4ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm1vZGFsLmZhZGUge1xyXG4gICAgJi5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-modal',
            templateUrl: './ui-modal.component.html',
            styleUrls: ['./ui-modal.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          dialogClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/spinner/spinkits.ts":
    /*!*************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
      \*************************************************************/

    /*! exports provided: Spinkit */

    /***/
    function srcAppThemeSharedComponentsSpinnerSpinkitsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
        return Spinkit;
      });

      var Spinkit = {
        skChasingDots: 'sk-chasing-dots',
        skCubeGrid: 'sk-cube-grid',
        skDoubleBounce: 'sk-double-bounce',
        skRotatingPlane: 'sk-rotationg-plane',
        skSpinnerPulse: 'sk-spinner-pulse',
        skThreeBounce: 'sk-three-bounce',
        skWanderingCubes: 'sk-wandering-cubes',
        skWave: 'sk-wave',
        skLine: 'sk-line-material'
      };
      /***/
    },

    /***/
    "./src/app/theme/shared/components/spinner/spinner.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function srcAppThemeSharedComponentsSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./spinkits */
      "./src/app/theme/shared/components/spinner/spinkits.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SpinnerComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r1.backgroundColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.backgroundColor);
        }
      }

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_0_div_2_Template, 2, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.spinner === ctx_r0.Spinkit.skLine);
        }
      }

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this13 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
          this.backgroundColor = '#2196f3';
          this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skLine;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this13.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
              _this13.isSpinnerVisible = false;
            }
          }, function () {
            _this13.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor",
          spinner: "spinner"
        },
        decls: 1,
        vars: 1,
        consts: [["id", "http-loader", 4, "ngIf"], ["id", "http-loader"], [1, "loader-bg"], ["class", "sk-line-material", 3, "colored", 4, "ngIf"], [1, "sk-line-material"], [1, "sk-child", "sk-bounce1"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 3, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iXX0= */", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0);\n  }\n  40% {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFLO0VBQ0wscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtRUFBbUU7RUFDbkUsMkRBQTJEO0FBQy9EOztBQUVBO0VBQ0k7SUFFSSxvQkFBb0I7RUFDMUI7RUFDRTtJQUVJLG9CQUFvQjtFQUMxQjtBQUNGOztBQUVBO0VBQ0k7SUFFSSxvQkFBb0I7RUFDMUI7RUFDRTtJQUVJLG9CQUFvQjtFQUMxQjtBQUNGOztBQUVBO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQ0FBK0I7QUFDbkM7O0FBRUE7RUFDSSx5Q0FBMEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcclxuICAgIHRvcDogMCAgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            templateUrl: './spinner.component.html',
            styleUrls: ['./spinner.component.scss', './spinkit-css/sk-line-material.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          spinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/toast/toast.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/theme/shared/components/toast/toast.component.ts ***!
      \******************************************************************/

    /*! exports provided: ToastComponent */

    /***/
    function srcAppThemeSharedComponentsToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
        return ToastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/theme/shared/components/toast/toast.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["*"];

      var ToastComponent = /*#__PURE__*/function () {
        function ToastComponent(toastEvent) {
          _classCallCheck(this, ToastComponent);

          this.toastEvent = toastEvent;
          this.isShow = false;
        }

        _createClass(ToastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastEvent.toggleToast.subscribe(function (toast) {
              document.querySelector('#' + toast.uid).classList.add('show');
              setTimeout(function () {
                document.querySelector('#' + toast.uid).classList.remove('show');
              }, toast.delay ? toast.delay : 500);
            });
          }
        }, {
          key: "closeToast",
          value: function closeToast(uid) {
            document.querySelector('#' + uid).classList.remove('show');
          }
        }]);

        return ToastComponent;
      }();

      ToastComponent.ɵfac = function ToastComponent_Factory(t) {
        return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToastComponent,
        selectors: [["app-toast"]],
        inputs: {
          uID: "uID",
          toastTitle: "toastTitle",
          toastCaption: "toastCaption",
          toastClass: "toastClass"
        },
        ngContentSelectors: _c0,
        decls: 12,
        vars: 4,
        consts: [["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", 3, "id", "ngClass"], [1, "toast-header"], ["src", "./favicon.ico", "alt", "", 1, "img-fluid", "m-r-5", 2, "width", "20px"], [1, "mr-auto"], ["type", "button", "data-dismiss", "toast", "aria-label", "Close", 1, "m-l-5", "mb-1", "mt-1", "close", 3, "click"], [1, "toast-body"]],
        template: function ToastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastComponent_Template_button_click_7_listener() {
              return ctx.closeToast(ctx.uID);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.uID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toastClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toastTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toastCaption);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toast',
            templateUrl: './toast.component.html',
            styleUrls: ['./toast.component.scss']
          }]
        }], function () {
          return [{
            type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
          }];
        }, {
          uID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toastTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toastCaption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toastClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/toast/toast.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/theme/shared/components/toast/toast.service.ts ***!
      \****************************************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppThemeSharedComponentsToastToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService() {
          _classCallCheck(this, ToastService);

          this.toggleToast = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ToastService, [{
          key: "toast",
          value: function toast(event) {
            this.toggleToast.emit(event);
          }
        }]);

        return ToastService;
      }();

      ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || ToastService)();
      };

      ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToastService,
        factory: ToastService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, {
          toggleToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/todo/todo-card-complete.directive.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/theme/shared/components/todo/todo-card-complete.directive.ts ***!
      \******************************************************************************/

    /*! exports provided: TodoCardCompleteDirective */

    /***/
    function srcAppThemeSharedComponentsTodoTodoCardCompleteDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoCardCompleteDirective", function () {
        return TodoCardCompleteDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TodoCardCompleteDirective = /*#__PURE__*/function () {
        function TodoCardCompleteDirective(elements) {
          _classCallCheck(this, TodoCardCompleteDirective);

          this.elements = elements;
        }

        _createClass(TodoCardCompleteDirective, [{
          key: "onToggle",
          value: function onToggle($event) {
            $event.preventDefault();
            this.elements.nativeElement.classList.toggle('complete');
          }
        }]);

        return TodoCardCompleteDirective;
      }();

      TodoCardCompleteDirective.ɵfac = function TodoCardCompleteDirective_Factory(t) {
        return new (t || TodoCardCompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      TodoCardCompleteDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TodoCardCompleteDirective,
        selectors: [["", "appTodoCardComplete", ""]],
        hostBindings: function TodoCardCompleteDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoCardCompleteDirective_click_HostBindingHandler($event) {
              return ctx.onToggle($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoCardCompleteDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appTodoCardComplete]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/components/todo/todo-list-remove.directive.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/shared/components/todo/todo-list-remove.directive.ts ***!
      \****************************************************************************/

    /*! exports provided: TodoListRemoveDirective */

    /***/
    function srcAppThemeSharedComponentsTodoTodoListRemoveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoListRemoveDirective", function () {
        return TodoListRemoveDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TodoListRemoveDirective = /*#__PURE__*/function () {
        function TodoListRemoveDirective(elements) {
          _classCallCheck(this, TodoListRemoveDirective);

          this.elements = elements;
        }

        _createClass(TodoListRemoveDirective, [{
          key: "onToggle",
          value: function onToggle($event) {
            $event.preventDefault();
            var parent = this.elements.nativeElement.parentElement.parentElement;
            parent.remove();
          }
        }]);

        return TodoListRemoveDirective;
      }();

      TodoListRemoveDirective.ɵfac = function TodoListRemoveDirective_Factory(t) {
        return new (t || TodoListRemoveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      TodoListRemoveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TodoListRemoveDirective,
        selectors: [["", "appTodoListRemove", ""]],
        hostBindings: function TodoListRemoveDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListRemoveDirective_click_HostBindingHandler($event) {
              return ctx.onToggle($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListRemoveDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appTodoListRemove]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
    /*!****************************************************************!*\
      !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
      \****************************************************************/

    /*! exports provided: ToggleFullScreenDirective */

    /***/
    function srcAppThemeSharedFullScreenToggleFullScreenTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function () {
        return ToggleFullScreenDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ToggleFullScreenDirective = /*#__PURE__*/function () {
        function ToggleFullScreenDirective(elements) {
          _classCallCheck(this, ToggleFullScreenDirective);

          this.elements = elements;
        }

        _createClass(ToggleFullScreenDirective, [{
          key: "onClick",
          value: function onClick() {
            /*if (screenfull.enabled) {
              (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
              (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
              screenfull.toggle();
            }*/

            /*if (isScreenFull(screenfull)) {
              if (screenfull.isFullscreen) {
                screenfull.exit();
              } else {
                screenfull.request();
              }
            }*/
          }
        }]);

        return ToggleFullScreenDirective;
      }();

      ToggleFullScreenDirective.ɵfac = function ToggleFullScreenDirective_Factory(t) {
        return new (t || ToggleFullScreenDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ToggleFullScreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ToggleFullScreenDirective,
        selectors: [["", "appToggleFullScreen", ""]],
        hostBindings: function ToggleFullScreenDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullScreenDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullScreenDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appToggleFullScreen]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();

      function isScreenFull(sf) {
        return sf.isFullscreen;
      }
      /***/

    },

    /***/
    "./src/app/theme/shared/shared.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/theme/shared/shared.module.ts ***!
      \***********************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppThemeSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components */
      "./src/app/theme/shared/components/index.ts");
      /* harmony import */


      var _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/data-table/data-filter.pipe */
      "./src/app/theme/shared/components/data-table/data-filter.pipe.ts");
      /* harmony import */


      var _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/todo/todo-list-remove.directive */
      "./src/app/theme/shared/components/todo/todo-list-remove.directive.ts");
      /* harmony import */


      var _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/todo/todo-card-complete.directive */
      "./src/app/theme/shared/components/todo/todo-card-complete.directive.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-click-outside */
      "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/spinner/spinner.component */
      "./src/app/theme/shared/components/spinner/spinner.component.ts");
      /* harmony import */


      var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/chart/apex-chart/apex-chart.component */
      "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
      /* harmony import */


      var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/chart/apex-chart/apex-chart.service */
      "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/toast/toast.component */
      "./src/app/theme/shared/components/toast/toast.component.ts");
      /* harmony import */


      var _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/toast/toast.service */
      "./src/app/theme/shared/components/toast/toast.service.ts");
      /* harmony import */


      var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/gallery/gallery.component */
      "./src/app/theme/shared/components/gallery/gallery.component.ts");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-lightbox */
      "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__);
      /*import 'hammerjs';
      import 'mousetrap';
      import { GalleryModule } from '@ks89/angular-modal-gallery';*/


      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__["ApexChartService"], _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"]],
            declarations: [_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__["ApexChartService"], _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/A-8538/my-code/DataProject-UI/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map