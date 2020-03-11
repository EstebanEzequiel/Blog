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


    var _pre_encabezado_pre_encabezado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pre-encabezado/pre-encabezado.component */
    "./src/app/pre-encabezado/pre-encabezado.component.ts");
    /* harmony import */


    var _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./encabezado/encabezado.component */
    "./src/app/encabezado/encabezado.component.ts");
    /* harmony import */


    var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./estudios/estudios.component */
    "./src/app/estudios/estudios.component.ts");
    /* harmony import */


    var _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./conocimientos/conocimientos.component */
    "./src/app/conocimientos/conocimientos.component.ts");
    /* harmony import */


    var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./experiencia/experiencia.component */
    "./src/app/experiencia/experiencia.component.ts");
    /* harmony import */


    var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./proyectos/proyectos.component */
    "./src/app/proyectos/proyectos.component.ts");
    /* harmony import */


    var _pestagna_pestagna_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pestagna/pestagna.component */
    "./src/app/pestagna/pestagna.component.ts");
    /* harmony import */


    var _pie_pagina_pie_pagina_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pie-pagina/pie-pagina.component */
    "./src/app/pie-pagina/pie-pagina.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Blog';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      consts: [[1, "container-fluid", "bg-dark"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pre-encabezado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-encabezado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-estudios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-conocimientos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-pestagna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-pie-pagina");
        }
      },
      directives: [_pre_encabezado_pre_encabezado_component__WEBPACK_IMPORTED_MODULE_1__["PreEncabezadoComponent"], _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_2__["EncabezadoComponent"], _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_3__["EstudiosComponent"], _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_4__["ConocimientosComponent"], _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_5__["ExperienciaComponent"], _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_6__["ProyectosComponent"], _pestagna_pestagna_component__WEBPACK_IMPORTED_MODULE_7__["PestagnaComponent"], _pie_pagina_pie_pagina_component__WEBPACK_IMPORTED_MODULE_8__["PiePaginaComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./encabezado/encabezado.component */
    "./src/app/encabezado/encabezado.component.ts");
    /* harmony import */


    var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./experiencia/experiencia.component */
    "./src/app/experiencia/experiencia.component.ts");
    /* harmony import */


    var _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./conocimientos/conocimientos.component */
    "./src/app/conocimientos/conocimientos.component.ts");
    /* harmony import */


    var _pie_pagina_pie_pagina_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pie-pagina/pie-pagina.component */
    "./src/app/pie-pagina/pie-pagina.component.ts");
    /* harmony import */


    var _pre_encabezado_pre_encabezado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pre-encabezado/pre-encabezado.component */
    "./src/app/pre-encabezado/pre-encabezado.component.ts");
    /* harmony import */


    var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./estudios/estudios.component */
    "./src/app/estudios/estudios.component.ts");
    /* harmony import */


    var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cursos/cursos.component */
    "./src/app/cursos/cursos.component.ts");
    /* harmony import */


    var _conocimientos_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./conocimientos/frontend/frontend.component */
    "./src/app/conocimientos/frontend/frontend.component.ts");
    /* harmony import */


    var _conocimientos_backend_backend_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./conocimientos/backend/backend.component */
    "./src/app/conocimientos/backend/backend.component.ts");
    /* harmony import */


    var _conocimientos_frameworks_frameworks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./conocimientos/frameworks/frameworks.component */
    "./src/app/conocimientos/frameworks/frameworks.component.ts");
    /* harmony import */


    var _conocimientos_database_database_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./conocimientos/database/database.component */
    "./src/app/conocimientos/database/database.component.ts");
    /* harmony import */


    var _conocimientos_os_os_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./conocimientos/os/os.component */
    "./src/app/conocimientos/os/os.component.ts");
    /* harmony import */


    var _conocimientos_control_versiones_control_versiones_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./conocimientos/control-versiones/control-versiones.component */
    "./src/app/conocimientos/control-versiones/control-versiones.component.ts");
    /* harmony import */


    var _aside_aside_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./aside/aside.component */
    "./src/app/aside/aside.component.ts");
    /* harmony import */


    var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./proyectos/proyectos.component */
    "./src/app/proyectos/proyectos.component.ts");
    /* harmony import */


    var _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./idiomas/idiomas.component */
    "./src/app/idiomas/idiomas.component.ts");
    /* harmony import */


    var _pestagna_pestagna_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pestagna/pestagna.component */
    "./src/app/pestagna/pestagna.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_3__["EncabezadoComponent"], _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__["ExperienciaComponent"], _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_5__["ConocimientosComponent"], _pie_pagina_pie_pagina_component__WEBPACK_IMPORTED_MODULE_6__["PiePaginaComponent"], _pre_encabezado_pre_encabezado_component__WEBPACK_IMPORTED_MODULE_7__["PreEncabezadoComponent"], _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_8__["EstudiosComponent"], _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_9__["CursosComponent"], _conocimientos_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_10__["FrontendComponent"], _conocimientos_backend_backend_component__WEBPACK_IMPORTED_MODULE_11__["BackendComponent"], _conocimientos_frameworks_frameworks_component__WEBPACK_IMPORTED_MODULE_12__["FrameworksComponent"], _conocimientos_database_database_component__WEBPACK_IMPORTED_MODULE_13__["DatabaseComponent"], _conocimientos_os_os_component__WEBPACK_IMPORTED_MODULE_14__["OSComponent"], _conocimientos_control_versiones_control_versiones_component__WEBPACK_IMPORTED_MODULE_15__["ControlVersionesComponent"], _aside_aside_component__WEBPACK_IMPORTED_MODULE_16__["AsideComponent"], _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_17__["ProyectosComponent"], _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_18__["IdiomasComponent"], _pestagna_pestagna_component__WEBPACK_IMPORTED_MODULE_19__["PestagnaComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_3__["EncabezadoComponent"], _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_4__["ExperienciaComponent"], _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_5__["ConocimientosComponent"], _pie_pagina_pie_pagina_component__WEBPACK_IMPORTED_MODULE_6__["PiePaginaComponent"], _pre_encabezado_pre_encabezado_component__WEBPACK_IMPORTED_MODULE_7__["PreEncabezadoComponent"], _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_8__["EstudiosComponent"], _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_9__["CursosComponent"], _conocimientos_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_10__["FrontendComponent"], _conocimientos_backend_backend_component__WEBPACK_IMPORTED_MODULE_11__["BackendComponent"], _conocimientos_frameworks_frameworks_component__WEBPACK_IMPORTED_MODULE_12__["FrameworksComponent"], _conocimientos_database_database_component__WEBPACK_IMPORTED_MODULE_13__["DatabaseComponent"], _conocimientos_os_os_component__WEBPACK_IMPORTED_MODULE_14__["OSComponent"], _conocimientos_control_versiones_control_versiones_component__WEBPACK_IMPORTED_MODULE_15__["ControlVersionesComponent"], _aside_aside_component__WEBPACK_IMPORTED_MODULE_16__["AsideComponent"], _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_17__["ProyectosComponent"], _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_18__["IdiomasComponent"], _pestagna_pestagna_component__WEBPACK_IMPORTED_MODULE_19__["PestagnaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/aside/aside.component.ts":
  /*!******************************************!*\
    !*** ./src/app/aside/aside.component.ts ***!
    \******************************************/

  /*! exports provided: AsideComponent */

  /***/
  function srcAppAsideAsideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideComponent", function () {
      return AsideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AsideComponent =
    /*#__PURE__*/
    function () {
      function AsideComponent() {
        _classCallCheck(this, AsideComponent);
      }

      _createClass(AsideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AsideComponent;
    }();

    AsideComponent.ɵfac = function AsideComponent_Factory(t) {
      return new (t || AsideComponent)();
    };

    AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AsideComponent,
      selectors: [["app-aside"]],
      decls: 40,
      vars: 0,
      consts: [["id", "foto"], ["src", "../../assets/foto.jpg", 1, "card-img", "rounded-circle"], [1, "text-white-50", "text-capitalize"], [1, "far", "fa-hand-point-right"], [1, "text-white-50", "text-justify", "m-0"], [1, "text-muted"], [1, "list-group-item", "bg-dark"], [1, "text-light", "text-capitalize"], [1, "list-group"], [1, "text-white-50"], [1, "list-group-item", "bg-dark", "text-capitalize"]],
      template: function AsideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " perfil\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " hola soy Ezequiel. Desde hace un a\xF1o me dedico al desarrollo y programacion web Frontend bajo el framework Angular, para proyectos independientes, eligiendo antetodo la excelencia y la innovacion para una mejor experiencia del usuario. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " datos personales\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "cite", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "nacimiento: 12/11/1985");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "cite", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "nacionalidad: argentino");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "cite", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ciudad: cordoba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "cite", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "barrio: arguello norte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "cite", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "estado civil: soltero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " cualidades ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "autodidacta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "tabajo en equipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "gestion del tiempo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Responsive Web Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["cite[_ngcontent-%COMP%]{\n    color: orange !important;\n    font-family: 'Titillium Web';\n}\n\nh4[_ngcontent-%COMP%]{\n    margin: 1rem;\n    font-weight: bold;\n    font-family: 'Titillium Web';\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    font-family: 'Titillium Web';\n}\n\n#foto[_ngcontent-%COMP%]{ \n\n    display:-webkit-box;\n\n    display:flex;\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n    height: auto;\n    width: 10em;    \n}\n\nul[_ngcontent-%COMP%]{\n    padding: 0 !important;\n}\n\n@media screen and (max-width: 375px)\n{    \n    #foto[_ngcontent-%COMP%]{\n        display: block;\n    }\n\n    img[_ngcontent-%COMP%]{\n        width: auto;\n        max-width: 100%;\n    }\n\n    #datos[_ngcontent-%COMP%]{\n        margin-left: 4rem;\n    }\n    \n    ul[_ngcontent-%COMP%]{\n        margin: 0;\n        padding: 0;\n        padding-left: 5vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNpZGUvYXNpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQSxPQUFPLGdFQUFnRTs7SUFFbkUsbUJBQVk7O0lBQVosWUFBWTtJQUNaLHNCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztRQUNULFVBQVU7UUFDVixpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FzaWRlL2FzaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaXRle1xuICAgIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInO1xufVxuXG5oNHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJztcbn1cblxucCwgbGkge1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYic7XG59XG5cbiNmb3RveyAvKmNvbnRlbmVkb3IgcGFkcmUgcGFyYSBmb3RvLCBlc3RhcyBwcm9waWVkYWRlcyBjZW50cmFuIGxhIGZvdG8qL1xuXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTBlbTsgICAgXG59XG5cbnVse1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpXG57ICAgIFxuICAgICNmb3Rve1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI2RhdG9ze1xuICAgICAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICB9XG4gICAgXG4gICAgdWx7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1dnc7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aside',
          templateUrl: './aside.component.html',
          styleUrls: ['./aside.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/backend/backend.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/conocimientos/backend/backend.component.ts ***!
    \************************************************************/

  /*! exports provided: BackendComponent */

  /***/
  function srcAppConocimientosBackendBackendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendComponent", function () {
      return BackendComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _conocimientos_backend_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../conocimientos/backend/backend.service */
    "./src/app/conocimientos/backend/backend.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BackendComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r10.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r10.tecnologia, " ", item_r10.porcentaje, "%");
      }
    }

    var BackendComponent =
    /*#__PURE__*/
    function () {
      function BackendComponent(_servicio) {
        _classCallCheck(this, BackendComponent);

        this._servicio = _servicio;
        this.backend = [];
        this.backend = _servicio.obtenerBack();
      }

      _createClass(BackendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackendComponent;
    }();

    BackendComponent.ɵfac = function BackendComponent_Factory(t) {
      return new (t || BackendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_conocimientos_backend_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]));
    };

    BackendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BackendComponent,
      selectors: [["app-backend"]],
      decls: 3,
      vars: 1,
      consts: [[1, "contenedor"], [1, "row", "row-cols-2"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "tarjeta", "text-white"], [1, "img-tarjeta", 3, "src"], [1, "body-tarjeta"], [1, "titulo"], [1, "texto"]],
      template: function BackendComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BackendComponent_div_2_Template, 8, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.backend);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\n    padding: 0;\n    margin: 0;\n}\n\n.contenedor[_ngcontent-%COMP%]{\n    \n    padding-bottom: 1em;\n}\n\n.tarjeta[_ngcontent-%COMP%]{\n    \n    width: 160px;\n    \n    padding: 0;\n    margin-right: 1vh;\n    margin-bottom: 2vh;\n    margin-left: 1vh;\n    border-radius: 5px;\n    -webkit-transform: scale(1,1);\n            transform: scale(1,1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n    background-color: transparent;\n}\n\n.tarjeta[_ngcontent-%COMP%]:hover{\n\n    -webkit-transform: scale(1.1,1.1);\n\n            transform: scale(1.1,1.1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n}\n\n.img-tarjeta[_ngcontent-%COMP%]{\n    \n    padding: 1vh;\n    display: -webkit-box;\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n\n    max-width: 100%;   \n    margin: auto;\n}\n\n.body-tarjeta[_ngcontent-%COMP%]{\n\n    padding: 2vh;\n}\n\n.titulo[_ngcontent-%COMP%]{\n\n    font-size: medium;\n    text-align: center;\n}\n\n.texto[_ngcontent-%COMP%]{\n\n    padding: 1vh;\n    font-size: small;\n    text-align: center;\n}\n\n.texto-pie[_ngcontent-%COMP%]{\n\n    font-size: x-small;\n    opacity: .8;\n    padding: 2vh;\n}\n\n@media screen and (max-width: 520px){\n\n    .tarjeta[_ngcontent-%COMP%]{\n        width: 130px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ub2NpbWllbnRvcy9iYWNrZW5kL2JhY2tlbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksaUNBQXlCOztZQUF6Qix5QkFBeUI7SUFDekIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFHQTs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Nvbm9jaW1pZW50b3MvYmFja2VuZC9iYWNrZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGVuZWRvcntcbiAgICBcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4udGFyamV0YXtcbiAgICBcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5OyAqL1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDsgXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXMgO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFyamV0YTpob3ZlcntcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7IFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zIDtcbn1cblxuLmltZy10YXJqZXRhe1xuICAgIFxuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbWd7XG5cbiAgICBtYXgtd2lkdGg6IDEwMCU7ICAgXG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm9keS10YXJqZXRhe1xuXG4gICAgcGFkZGluZzogMnZoO1xufVxuXG4udGl0dWxve1xuXG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG97XG5cbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0by1waWV7XG5cbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgcGFkZGluZzogMnZoO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KXtcblxuICAgIC50YXJqZXRhe1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-backend',
          templateUrl: './backend.component.html',
          styleUrls: ['./backend.component.css']
        }]
      }], function () {
        return [{
          type: _conocimientos_backend_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/backend/backend.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/conocimientos/backend/backend.service.ts ***!
    \**********************************************************/

  /*! exports provided: BackendService */

  /***/
  function srcAppConocimientosBackendBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackendService =
    /*#__PURE__*/
    function () {
      function BackendService() {
        _classCallCheck(this, BackendService);

        this.back = [{
          foto: 'assets/nodejs.png',
          porcentaje: '25',
          tecnologia: 'Node'
        }, {
          foto: 'assets/php.png',
          porcentaje: '30',
          tecnologia: 'PHP'
        }, {
          foto: 'assets/python.png',
          porcentaje: '50',
          tecnologia: 'Python'
        }];
      }

      _createClass(BackendService, [{
        key: "obtenerBack",
        value: function obtenerBack() {
          return this.back;
        }
      }]);

      return BackendService;
    }();

    BackendService.ɵfac = function BackendService_Factory(t) {
      return new (t || BackendService)();
    };

    BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BackendService,
      factory: BackendService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/conocimientos.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/conocimientos/conocimientos.component.ts ***!
    \**********************************************************/

  /*! exports provided: ConocimientosComponent */

  /***/
  function srcAppConocimientosConocimientosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConocimientosComponent", function () {
      return ConocimientosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./frontend/frontend.component */
    "./src/app/conocimientos/frontend/frontend.component.ts");
    /* harmony import */


    var _backend_backend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./backend/backend.component */
    "./src/app/conocimientos/backend/backend.component.ts");
    /* harmony import */


    var _frameworks_frameworks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./frameworks/frameworks.component */
    "./src/app/conocimientos/frameworks/frameworks.component.ts");
    /* harmony import */


    var _database_database_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./database/database.component */
    "./src/app/conocimientos/database/database.component.ts");
    /* harmony import */


    var _os_os_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./os/os.component */
    "./src/app/conocimientos/os/os.component.ts");
    /* harmony import */


    var _control_versiones_control_versiones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./control-versiones/control-versiones.component */
    "./src/app/conocimientos/control-versiones/control-versiones.component.ts");
    /* harmony import */


    var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../cursos/cursos.component */
    "./src/app/cursos/cursos.component.ts");
    /* harmony import */


    var _aside_aside_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../aside/aside.component */
    "./src/app/aside/aside.component.ts");

    var ConocimientosComponent =
    /*#__PURE__*/
    function () {
      function ConocimientosComponent() {
        _classCallCheck(this, ConocimientosComponent);
      }

      _createClass(ConocimientosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConocimientosComponent;
    }();

    ConocimientosComponent.ɵfac = function ConocimientosComponent_Factory(t) {
      return new (t || ConocimientosComponent)();
    };

    ConocimientosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConocimientosComponent,
      selectors: [["app-conocimientos"]],
      decls: 66,
      vars: 0,
      consts: [[1, "container-sm"], [1, "main"], [1, "section"], [1, "text-white-50", "mb-0", "text-capitalize", "text-center"], [1, "far", "fa-hand-point-right"], ["data-toggle", "collapse", "href", "#collapseExample", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "text-white-50", "mb-0", "p-2", "pr-4"], [1, "m-2", "fas", "fa-code"], [1, "carpeta"], ["id", "collapseExample", 1, "collapse"], ["data-toggle", "collapse", "href", "#collapseExample1", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "text-white-50", "mt-3", "mb-0", "p-2", "pr-4"], ["id", "collapseExample1", 1, "collapse"], ["data-toggle", "collapse", "href", "#collapseExample2", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "text-white-50", "mt-3", "mb-0", "p-2", "pr-4"], [1, "m-2", "fas", "fa-cogs"], ["id", "collapseExample2", 1, "collapse"], ["data-toggle", "collapse", "href", "#collapseExample3", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "text-white-50", "mt-3", "mb-0", "p-2", "pr-4"], [1, "m-2", "fas", "fa-database"], ["id", "collapseExample3", 1, "collapse"], ["data-toggle", "collapse", "href", "#collapseExample4", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "text-white-50", "mt-3", "mb-0", "p-2", "pr-4"], [1, "m-2", "fas", "fa-laptop-code"], ["id", "collapseExample4", 1, "collapse"], ["data-toggle", "collapse", "href", "#collapseExample5", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "text-white-50", "mt-3", "mb-0", "p-2", "pr-4"], [1, "m-2", "fas", "fa-code-branch"], ["id", "collapseExample5", 1, "collapse"], [1, "aside"]],
      template: function ConocimientosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " capacidades ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Frontend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "hola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-frontend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Backend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "hola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-backend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Frameworks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "hola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-frameworks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Base de Datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "hola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "S. Operativos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "hola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "C. de Versiones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "hola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-control-versiones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-cursos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "app-aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_1__["FrontendComponent"], _backend_backend_component__WEBPACK_IMPORTED_MODULE_2__["BackendComponent"], _frameworks_frameworks_component__WEBPACK_IMPORTED_MODULE_3__["FrameworksComponent"], _database_database_component__WEBPACK_IMPORTED_MODULE_4__["DatabaseComponent"], _os_os_component__WEBPACK_IMPORTED_MODULE_5__["OSComponent"], _control_versiones_control_versiones_component__WEBPACK_IMPORTED_MODULE_6__["ControlVersionesComponent"], _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_7__["CursosComponent"], _aside_aside_component__WEBPACK_IMPORTED_MODULE_8__["AsideComponent"]],
      styles: ["h5[_ngcontent-%COMP%]{\n    font-family: 'Titillium Web';\n    font-weight: bold;\n    background-color: #0099ff;\n    display: inline-block;\n    text-transform: capitalize;\n    border-radius: 0px 6px 0px 0px;\n    cursor:pointer;\n    padding-bottom: 2px !important;\n}\n\nh4[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-family: 'Titillium Web';\n}\n\n.carpeta[_ngcontent-%COMP%]{\n    background-color: #0099ff;\n    color: #0099ff;\n    border-radius: 0px 25px 0px 0px ;\n    margin: 0;\n}\n\n.etiqueta[_ngcontent-%COMP%]{\n    color: rgba(42, 3, 94, 0.486);\n    font-weight: bold;\n    display: inline-block;\n    background: rgb(0, 195, 255);\n    padding: 0.5rem 2rem;\n    font-size: 1.5rem;\n    margin-left: -48px;\n    position: relative;\n    width: auto;\n    box-shadow: 1px 1px 6px rgb(65, 65, 65);\n    -moz-box-shadow: 1px 1px 6px rgb(65, 65, 65);\n    -webkit-box-shadow: 1px 1px 6px rgb(65, 65, 65);\n    -webkit-transform: rotate(-6deg);\n            transform: rotate(-6deg);\n    -webkit-transform-origin: bottom left;\n            transform-origin: bottom left;\n}\n\n.forma[_ngcontent-%COMP%]{\n    width: 0px;\n    height: 0px;\n    line-height: 0px;\n    border-left: 26px solid transparent;\n    border-top: 8px solid rgb(0, 90, 143);\n    position: absolute;\n    top: 100%;\n    left: 0px;\n}\n\n.collapse[_ngcontent-%COMP%]{\n    margin: 0px !important;\n    padding: 0px !important;\n}\n\n.main[_ngcontent-%COMP%]{\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    padding: 0;\n}\n\n.section[_ngcontent-%COMP%]{\n    margin: auto;\n    width: 60%;\n    float: left;\n}\n\n.aside[_ngcontent-%COMP%]{\n    width: 30%;    \n    margin-left: 55px;\n}\n\n@media screen and (max-width: 375px)\n{\n    .container-sm[_ngcontent-%COMP%]{ padding: 0px 15px !important;}\n\n    .main[_ngcontent-%COMP%]{\n        width: 100%;\n        display: block;\n    }\n\n    .section[_ngcontent-%COMP%]{\n        overflow: hidden;\n        width:    100%;\n        margin-bottom: 2rem;\n    }\n\n    .aside[_ngcontent-%COMP%]{\n        margin: 0;\n        padding: 0 !important;\n        width: 100%;\n        margin-bottom: 2rem;\n    }\n\n    h5[_ngcontent-%COMP%]{ \n        font-size: 4vw; \n        padding: vw !important;\n    }\n\n    i[_ngcontent-%COMP%]{\n        margin: 1vw !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ub2NpbWllbnRvcy9jb25vY2ltaWVudG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMsK0NBQStDO0lBQy9DLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlLDRCQUE0QixDQUFDOztJQUU1QztRQUNJLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25vY2ltaWVudG9zL2Nvbm9jaW1pZW50b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1e1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYic7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTlmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDZweCAwcHggMHB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuaDR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJztcbn1cblxuLmNhcnBldGF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTlmZjtcbiAgICBjb2xvcjogIzAwOTlmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjVweCAwcHggMHB4IDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5ldGlxdWV0YXtcbiAgICBjb2xvcjogcmdiYSg0MiwgMywgOTQsIDAuNDg2KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE5NSwgMjU1KTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTQ4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYig2NSwgNjUsIDY1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYig2NSwgNjUsIDY1KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYig2NSwgNjUsIDY1KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG59XG5cbi5mb3JtYXtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDI2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHJnYigwLCA5MCwgMTQzKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbn1cblxuLmNvbGxhcHNle1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWlue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNlY3Rpb257XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5hc2lkZXtcbiAgICB3aWR0aDogMzAlOyAgICBcbiAgICBtYXJnaW4tbGVmdDogNTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpXG57XG4gICAgLmNvbnRhaW5lci1zbXsgcGFkZGluZzogMHB4IDE1cHggIWltcG9ydGFudDt9XG5cbiAgICAubWFpbntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zZWN0aW9ue1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogICAgMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAuYXNpZGV7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICBoNXsgXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3OyBcbiAgICAgICAgcGFkZGluZzogdncgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpe1xuICAgICAgICBtYXJnaW46IDF2dyAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConocimientosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-conocimientos',
          templateUrl: './conocimientos.component.html',
          styleUrls: ['./conocimientos.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/control-versiones/control-versiones.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/conocimientos/control-versiones/control-versiones.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ControlVersionesComponent */

  /***/
  function srcAppConocimientosControlVersionesControlVersionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlVersionesComponent", function () {
      return ControlVersionesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _conocimientos_control_versiones_control_versiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../conocimientos/control-versiones/control-versiones.service */
    "./src/app/conocimientos/control-versiones/control-versiones.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ControlVersionesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r18.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r18.tecnologia, " ", item_r18.porcentaje, "%");
      }
    }

    var ControlVersionesComponent =
    /*#__PURE__*/
    function () {
      function ControlVersionesComponent(_servicio) {
        _classCallCheck(this, ControlVersionesComponent);

        this._servicio = _servicio;
        this.versiones = [];
        this.versiones = _servicio.obtenerVersiones();
      }

      _createClass(ControlVersionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ControlVersionesComponent;
    }();

    ControlVersionesComponent.ɵfac = function ControlVersionesComponent_Factory(t) {
      return new (t || ControlVersionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_conocimientos_control_versiones_control_versiones_service__WEBPACK_IMPORTED_MODULE_1__["ControlVersionesService"]));
    };

    ControlVersionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ControlVersionesComponent,
      selectors: [["app-control-versiones"]],
      decls: 3,
      vars: 1,
      consts: [[1, "contenedor"], [1, "row", "row-cols-2"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "tarjeta", "text-white"], [1, "img-tarjeta", 3, "src"], [1, "body-tarjeta"], [1, "titulo"], [1, "texto"]],
      template: function ControlVersionesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ControlVersionesComponent_div_2_Template, 8, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.versiones);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\n    padding: 0;\n    margin: 0;\n}\n\n.contenedor[_ngcontent-%COMP%]{\n    \n    padding-bottom: 1em;\n}\n\n.tarjeta[_ngcontent-%COMP%]{\n    \n    width: 160px;\n    \n    padding: 0;\n    margin-right: 1vh;\n    margin-bottom: 2vh;\n    margin-left: 1vh;\n    border-radius: 5px;\n    -webkit-transform: scale(1,1);\n            transform: scale(1,1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n    background-color: transparent;\n}\n\n.tarjeta[_ngcontent-%COMP%]:hover{\n\n    -webkit-transform: scale(1.1,1.1);\n\n            transform: scale(1.1,1.1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n}\n\n.img-tarjeta[_ngcontent-%COMP%]{\n    \n    padding: 1vh;\n    display: -webkit-box;\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n\n    max-width: 100%;   \n    margin: auto;\n}\n\n.body-tarjeta[_ngcontent-%COMP%]{\n\n    padding: 2vh;\n}\n\n.titulo[_ngcontent-%COMP%]{\n\n    font-size: medium;\n    text-align: center;\n}\n\n.texto[_ngcontent-%COMP%]{\n\n    padding: 1vh;\n    font-size: small;\n    text-align: center;\n}\n\n.texto-pie[_ngcontent-%COMP%]{\n\n    font-size: x-small;\n    opacity: .8;\n    padding: 2vh;\n}\n\n@media screen and (max-width: 520px){\n\n    .tarjeta[_ngcontent-%COMP%]{\n        width: 130px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ub2NpbWllbnRvcy9jb250cm9sLXZlcnNpb25lcy9jb250cm9sLXZlcnNpb25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxpQ0FBeUI7O1lBQXpCLHlCQUF5QjtJQUN6QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUdBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29ub2NpbWllbnRvcy9jb250cm9sLXZlcnNpb25lcy9jb250cm9sLXZlcnNpb25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnRhcmpldGF7XG4gICAgXG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgKi9cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7IFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhcmpldGE6aG92ZXJ7XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0OyBcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcyA7XG59XG5cbi5pbWctdGFyamV0YXtcbiAgICBcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuaW1ne1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAgIFxuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmJvZHktdGFyamV0YXtcblxuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuLnRpdHVsb3tcblxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRve1xuXG4gICAgcGFkZGluZzogMXZoO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG8tcGlle1xuXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCl7XG5cbiAgICAudGFyamV0YXtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlVersionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-control-versiones',
          templateUrl: './control-versiones.component.html',
          styleUrls: ['./control-versiones.component.css']
        }]
      }], function () {
        return [{
          type: _conocimientos_control_versiones_control_versiones_service__WEBPACK_IMPORTED_MODULE_1__["ControlVersionesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/control-versiones/control-versiones.service.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/conocimientos/control-versiones/control-versiones.service.ts ***!
    \******************************************************************************/

  /*! exports provided: ControlVersionesService */

  /***/
  function srcAppConocimientosControlVersionesControlVersionesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlVersionesService", function () {
      return ControlVersionesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ControlVersionesService =
    /*#__PURE__*/
    function () {
      function ControlVersionesService() {
        _classCallCheck(this, ControlVersionesService);

        this.versiones = [{
          foto: 'assets/git.png',
          porcentaje: '40',
          tecnologia: 'Git'
        }, {
          foto: 'assets/github.png',
          porcentaje: '50',
          tecnologia: 'GitHub'
        }];
      }

      _createClass(ControlVersionesService, [{
        key: "obtenerVersiones",
        value: function obtenerVersiones() {
          return this.versiones;
        }
      }]);

      return ControlVersionesService;
    }();

    ControlVersionesService.ɵfac = function ControlVersionesService_Factory(t) {
      return new (t || ControlVersionesService)();
    };

    ControlVersionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ControlVersionesService,
      factory: ControlVersionesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlVersionesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/database/database.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/conocimientos/database/database.component.ts ***!
    \**************************************************************/

  /*! exports provided: DatabaseComponent */

  /***/
  function srcAppConocimientosDatabaseDatabaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function () {
      return DatabaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _conocimientos_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../conocimientos/database/database.service */
    "./src/app/conocimientos/database/database.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DatabaseComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r14.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r14.tecnologia, " ", item_r14.porcentaje, "%");
      }
    }

    var DatabaseComponent =
    /*#__PURE__*/
    function () {
      function DatabaseComponent(_servicio) {
        _classCallCheck(this, DatabaseComponent);

        this._servicio = _servicio;
        this.database = [];
        this.database = _servicio.obtenerData();
      }

      _createClass(DatabaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DatabaseComponent;
    }();

    DatabaseComponent.ɵfac = function DatabaseComponent_Factory(t) {
      return new (t || DatabaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_conocimientos_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]));
    };

    DatabaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DatabaseComponent,
      selectors: [["app-database"]],
      decls: 3,
      vars: 1,
      consts: [[1, "contenedor"], [1, "row", "row-cols-2"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "tarjeta", "text-white"], [1, "img-tarjeta", 3, "src"], [1, "body-tarjeta"], [1, "titulo"], [1, "texto"]],
      template: function DatabaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatabaseComponent_div_2_Template, 8, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.database);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\n    padding: 0;\n    margin: 0;\n}\n\n.contenedor[_ngcontent-%COMP%]{\n    \n    padding-bottom: 1em;\n}\n\n.tarjeta[_ngcontent-%COMP%]{\n    \n    width: 160px;\n    \n    padding: 0;\n    margin-right: 1vh;\n    margin-bottom: 2vh;\n    margin-left: 1vh;\n    border-radius: 5px;\n    -webkit-transform: scale(1,1);\n            transform: scale(1,1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n    background-color: transparent;\n}\n\n.tarjeta[_ngcontent-%COMP%]:hover{\n\n    -webkit-transform: scale(1.1,1.1);\n\n            transform: scale(1.1,1.1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n}\n\n.img-tarjeta[_ngcontent-%COMP%]{\n    \n    padding: 1vh;\n    display: -webkit-box;\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n\n    max-width: 100%;   \n    margin: auto;\n}\n\n.body-tarjeta[_ngcontent-%COMP%]{\n\n    padding: 2vh;\n}\n\n.titulo[_ngcontent-%COMP%]{\n\n    font-size: medium;\n    text-align: center;\n}\n\n.texto[_ngcontent-%COMP%]{\n\n    padding: 1vh;\n    font-size: small;\n    text-align: center;\n}\n\n.texto-pie[_ngcontent-%COMP%]{\n\n    font-size: x-small;\n    opacity: .8;\n    padding: 2vh;\n}\n\n@media screen and (max-width: 520px){\n\n    .tarjeta[_ngcontent-%COMP%]{\n        width: 130px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ub2NpbWllbnRvcy9kYXRhYmFzZS9kYXRhYmFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxpQ0FBeUI7O1lBQXpCLHlCQUF5QjtJQUN6QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUdBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29ub2NpbWllbnRvcy9kYXRhYmFzZS9kYXRhYmFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnRhcmpldGF7XG4gICAgXG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgKi9cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7IFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhcmpldGE6aG92ZXJ7XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0OyBcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcyA7XG59XG5cbi5pbWctdGFyamV0YXtcbiAgICBcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuaW1ne1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAgIFxuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmJvZHktdGFyamV0YXtcblxuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuLnRpdHVsb3tcblxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRve1xuXG4gICAgcGFkZGluZzogMXZoO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG8tcGlle1xuXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCl7XG5cbiAgICAudGFyamV0YXtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-database',
          templateUrl: './database.component.html',
          styleUrls: ['./database.component.css']
        }]
      }], function () {
        return [{
          type: _conocimientos_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/database/database.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/conocimientos/database/database.service.ts ***!
    \************************************************************/

  /*! exports provided: DatabaseService */

  /***/
  function srcAppConocimientosDatabaseDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DatabaseService =
    /*#__PURE__*/
    function () {
      function DatabaseService() {
        _classCallCheck(this, DatabaseService);

        this.data = [{
          foto: 'assets/firebase.png',
          porcentaje: '60',
          tecnologia: 'Firebase'
        }, {
          foto: 'assets/mysql.png',
          porcentaje: '35',
          tecnologia: 'MySQL'
        }];
      }

      _createClass(DatabaseService, [{
        key: "obtenerData",
        value: function obtenerData() {
          return this.data;
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService.ɵfac = function DatabaseService_Factory(t) {
      return new (t || DatabaseService)();
    };

    DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DatabaseService,
      factory: DatabaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/frameworks/frameworks.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/conocimientos/frameworks/frameworks.component.ts ***!
    \******************************************************************/

  /*! exports provided: FrameworksComponent */

  /***/
  function srcAppConocimientosFrameworksFrameworksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworksComponent", function () {
      return FrameworksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _conocimientos_frameworks_frameworks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../conocimientos/frameworks/frameworks.service */
    "./src/app/conocimientos/frameworks/frameworks.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FrameworksComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r12.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r12.tecnologia, " ", item_r12.porcentaje, "%");
      }
    }

    var FrameworksComponent =
    /*#__PURE__*/
    function () {
      function FrameworksComponent(_servicio) {
        _classCallCheck(this, FrameworksComponent);

        this._servicio = _servicio;
        this.framework = [];
        this.framework = _servicio.obtenerFramework();
      }

      _createClass(FrameworksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FrameworksComponent;
    }();

    FrameworksComponent.ɵfac = function FrameworksComponent_Factory(t) {
      return new (t || FrameworksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_conocimientos_frameworks_frameworks_service__WEBPACK_IMPORTED_MODULE_1__["FrameworksService"]));
    };

    FrameworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FrameworksComponent,
      selectors: [["app-frameworks"]],
      decls: 3,
      vars: 1,
      consts: [[1, "contenedor"], [1, "row", "row-cols-2"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "tarjeta", "text-white"], [1, "img-tarjeta", 3, "src"], [1, "body-tarjeta"], [1, "titulo"], [1, "texto"]],
      template: function FrameworksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FrameworksComponent_div_2_Template, 8, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.framework);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\n    padding: 0;\n    margin: 0;\n}\n\n.contenedor[_ngcontent-%COMP%]{\n    \n    padding-bottom: 1em;\n}\n\n.tarjeta[_ngcontent-%COMP%]{\n    \n    width: 160px;\n    \n    padding: 0;\n    margin-right: 1vh;\n    margin-bottom: 2vh;\n    margin-left: 1vh;\n    border-radius: 5px;\n    -webkit-transform: scale(1,1);\n            transform: scale(1,1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n    background-color: transparent;\n}\n\n.tarjeta[_ngcontent-%COMP%]:hover{\n\n    -webkit-transform: scale(1.1,1.1);\n\n            transform: scale(1.1,1.1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n}\n\n.img-tarjeta[_ngcontent-%COMP%]{\n    \n    padding: 1vh;\n    display: -webkit-box;\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n\n    max-width: 100%;   \n    margin: auto;\n}\n\n.body-tarjeta[_ngcontent-%COMP%]{\n\n    padding: 2vh;\n}\n\n.titulo[_ngcontent-%COMP%]{\n\n    font-size: medium;\n    text-align: center;\n}\n\n.texto[_ngcontent-%COMP%]{\n\n    padding: 1vh;\n    font-size: small;\n    text-align: center;\n}\n\n.texto-pie[_ngcontent-%COMP%]{\n\n    font-size: x-small;\n    opacity: .8;\n    padding: 2vh;\n}\n\n@media screen and (max-width: 520px){\n\n    .tarjeta[_ngcontent-%COMP%]{\n        width: 130px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ub2NpbWllbnRvcy9mcmFtZXdvcmtzL2ZyYW1ld29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksaUNBQXlCOztZQUF6Qix5QkFBeUI7SUFDekIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFHQTs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Nvbm9jaW1pZW50b3MvZnJhbWV3b3Jrcy9mcmFtZXdvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGVuZWRvcntcbiAgICBcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4udGFyamV0YXtcbiAgICBcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5OyAqL1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDsgXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXMgO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFyamV0YTpob3ZlcntcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7IFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zIDtcbn1cblxuLmltZy10YXJqZXRhe1xuICAgIFxuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbWd7XG5cbiAgICBtYXgtd2lkdGg6IDEwMCU7ICAgXG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm9keS10YXJqZXRhe1xuXG4gICAgcGFkZGluZzogMnZoO1xufVxuXG4udGl0dWxve1xuXG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG97XG5cbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0by1waWV7XG5cbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgcGFkZGluZzogMnZoO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KXtcblxuICAgIC50YXJqZXRhe1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-frameworks',
          templateUrl: './frameworks.component.html',
          styleUrls: ['./frameworks.component.css']
        }]
      }], function () {
        return [{
          type: _conocimientos_frameworks_frameworks_service__WEBPACK_IMPORTED_MODULE_1__["FrameworksService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/frameworks/frameworks.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/conocimientos/frameworks/frameworks.service.ts ***!
    \****************************************************************/

  /*! exports provided: FrameworksService */

  /***/
  function srcAppConocimientosFrameworksFrameworksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworksService", function () {
      return FrameworksService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FrameworksService =
    /*#__PURE__*/
    function () {
      function FrameworksService() {
        _classCallCheck(this, FrameworksService);

        this.framework = [{
          foto: 'assets/angular.png',
          porcentaje: '60',
          tecnologia: 'Angular'
        }, {
          foto: 'assets/bootstrap.png',
          porcentaje: '85',
          tecnologia: 'Bootstrap'
        }, {
          foto: 'assets/font-awesome.jpg',
          porcentaje: '80',
          tecnologia: 'Font-Awesome'
        }];
      }

      _createClass(FrameworksService, [{
        key: "obtenerFramework",
        value: function obtenerFramework() {
          return this.framework;
        }
      }]);

      return FrameworksService;
    }();

    FrameworksService.ɵfac = function FrameworksService_Factory(t) {
      return new (t || FrameworksService)();
    };

    FrameworksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FrameworksService,
      factory: FrameworksService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/frontend/frontend.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/conocimientos/frontend/frontend.component.ts ***!
    \**************************************************************/

  /*! exports provided: FrontendComponent */

  /***/
  function srcAppConocimientosFrontendFrontendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrontendComponent", function () {
      return FrontendComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _conocimientos_frontend_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../conocimientos/frontend/frontend.service */
    "./src/app/conocimientos/frontend/frontend.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FrontendComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r8.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r8.tecnologia, " ", item_r8.porcentaje, "%");
      }
    }

    var FrontendComponent =
    /*#__PURE__*/
    function () {
      function FrontendComponent(_servicio) {
        _classCallCheck(this, FrontendComponent);

        this._servicio = _servicio;
        this.frontend = [];
        this.frontend = _servicio.obtenerFrontend();
      }

      _createClass(FrontendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FrontendComponent;
    }();

    FrontendComponent.ɵfac = function FrontendComponent_Factory(t) {
      return new (t || FrontendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_conocimientos_frontend_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"]));
    };

    FrontendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FrontendComponent,
      selectors: [["app-frontend"]],
      decls: 3,
      vars: 1,
      consts: [[1, "contenedor"], [1, "row", "row-cols-2"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "tarjeta", "text-white"], [1, "img-tarjeta", 3, "src"], [1, "body-tarjeta"], [1, "titulo"], [1, "texto"]],
      template: function FrontendComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FrontendComponent_div_2_Template, 8, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.frontend);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\n    padding: 0;\n    margin: 0;\n}\n\n.contenedor[_ngcontent-%COMP%]{\n    \n    padding-bottom: 1em;\n}\n\n.tarjeta[_ngcontent-%COMP%]{\n    \n    width: 160px;\n    \n    padding: 0;\n    margin-right: 1vh;\n    margin-bottom: 2vh;\n    margin-left: 1vh;\n    border-radius: 5px;\n    -webkit-transform: scale(1,1);\n            transform: scale(1,1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n    background-color: transparent;\n}\n\n.tarjeta[_ngcontent-%COMP%]:hover{\n\n    -webkit-transform: scale(1.1,1.1);\n\n            transform: scale(1.1,1.1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n}\n\n.img-tarjeta[_ngcontent-%COMP%]{\n    \n    padding: 1vh;\n    display: -webkit-box;\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n\n    max-width: 100%;   \n    margin: auto;\n}\n\n.body-tarjeta[_ngcontent-%COMP%]{\n\n    padding: 2vh;\n}\n\n.titulo[_ngcontent-%COMP%]{\n\n    font-size: medium;\n    text-align: center;\n}\n\n.texto[_ngcontent-%COMP%]{\n\n    padding: 1vh;\n    font-size: small;\n    text-align: center;\n}\n\n.texto-pie[_ngcontent-%COMP%]{\n\n    font-size: x-small;\n    opacity: .8;\n    padding: 2vh;\n}\n\n@media screen and (max-width: 520px){\n\n    .tarjeta[_ngcontent-%COMP%]{\n        width: 130px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ub2NpbWllbnRvcy9mcm9udGVuZC9mcm9udGVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxpQ0FBeUI7O1lBQXpCLHlCQUF5QjtJQUN6QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUdBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29ub2NpbWllbnRvcy9mcm9udGVuZC9mcm9udGVuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnRhcmpldGF7XG4gICAgXG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgKi9cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7IFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhcmpldGE6aG92ZXJ7XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0OyBcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcyA7XG59XG5cbi5pbWctdGFyamV0YXtcbiAgICBcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuaW1ne1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAgIFxuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmJvZHktdGFyamV0YXtcblxuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuLnRpdHVsb3tcblxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRve1xuXG4gICAgcGFkZGluZzogMXZoO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG8tcGlle1xuXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCl7XG5cbiAgICAudGFyamV0YXtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-frontend',
          templateUrl: './frontend.component.html',
          styleUrls: ['./frontend.component.css']
        }]
      }], function () {
        return [{
          type: _conocimientos_frontend_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/frontend/frontend.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/conocimientos/frontend/frontend.service.ts ***!
    \************************************************************/

  /*! exports provided: FrontendService */

  /***/
  function srcAppConocimientosFrontendFrontendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrontendService", function () {
      return FrontendService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FrontendService =
    /*#__PURE__*/
    function () {
      function FrontendService() {
        _classCallCheck(this, FrontendService);

        this.frontend = [{
          foto: 'assets/html.png',
          porcentaje: '80',
          tecnologia: 'HTML5'
        }, {
          foto: 'assets/css.png',
          porcentaje: '55',
          tecnologia: 'CSS3'
        }, {
          foto: 'assets/js.png',
          porcentaje: '45',
          tecnologia: 'Javascript'
        }, {
          foto: 'assets/JQuery.png',
          porcentaje: '60',
          tecnologia: 'Jquery'
        }, {
          foto: 'assets/ts.png',
          porcentaje: '40',
          tecnologia: 'Typescript'
        }];
      }

      _createClass(FrontendService, [{
        key: "obtenerFrontend",
        value: function obtenerFrontend() {
          return this.frontend;
        }
      }]);

      return FrontendService;
    }();

    FrontendService.ɵfac = function FrontendService_Factory(t) {
      return new (t || FrontendService)();
    };

    FrontendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FrontendService,
      factory: FrontendService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/os/os.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/conocimientos/os/os.component.ts ***!
    \**************************************************/

  /*! exports provided: OSComponent */

  /***/
  function srcAppConocimientosOsOsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OSComponent", function () {
      return OSComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _conocimientos_os_os_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../conocimientos/os/os.service */
    "./src/app/conocimientos/os/os.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OSComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r16.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r16.tecnologia, " ", item_r16.porcentaje, "%");
      }
    }

    var OSComponent =
    /*#__PURE__*/
    function () {
      function OSComponent(_servicio) {
        _classCallCheck(this, OSComponent);

        this._servicio = _servicio;
        this.os = [];
        this.os = _servicio.obtenerOs();
      }

      _createClass(OSComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OSComponent;
    }();

    OSComponent.ɵfac = function OSComponent_Factory(t) {
      return new (t || OSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_conocimientos_os_os_service__WEBPACK_IMPORTED_MODULE_1__["OSService"]));
    };

    OSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OSComponent,
      selectors: [["app-os"]],
      decls: 3,
      vars: 1,
      consts: [[1, "contenedor"], [1, "row", "row-cols-2"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "tarjeta", "text-white"], [1, "img-tarjeta", 3, "src"], [1, "body-tarjeta"], [1, "titulo"], [1, "texto"]],
      template: function OSComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OSComponent_div_2_Template, 8, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.os);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\n    padding: 0;\n    margin: 0;\n}\n\n.contenedor[_ngcontent-%COMP%]{\n    \n    padding-bottom: 1em;\n}\n\n.tarjeta[_ngcontent-%COMP%]{\n    \n    width: 160px;\n    \n    padding: 0;\n    margin-right: 1vh;\n    margin-bottom: 2vh;\n    margin-left: 1vh;\n    border-radius: 5px;\n    -webkit-transform: scale(1,1);\n            transform: scale(1,1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n    background-color: transparent;\n}\n\n.tarjeta[_ngcontent-%COMP%]:hover{\n\n    -webkit-transform: scale(1.1,1.1);\n\n            transform: scale(1.1,1.1);\n    -webkit-transition-timing-function:ease-out;\n            transition-timing-function:ease-out; \n    -webkit-transition-duration: 250ms ; \n            transition-duration: 250ms ;\n}\n\n.img-tarjeta[_ngcontent-%COMP%]{\n    \n    padding: 1vh;\n    display: -webkit-box;\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n\n    max-width: 100%;   \n    margin: auto;\n}\n\n.body-tarjeta[_ngcontent-%COMP%]{\n\n    padding: 2vh;\n}\n\n.titulo[_ngcontent-%COMP%]{\n\n    font-size: medium;\n    text-align: center;\n}\n\n.texto[_ngcontent-%COMP%]{\n\n    padding: 1vh;\n    font-size: small;\n    text-align: center;\n}\n\n.texto-pie[_ngcontent-%COMP%]{\n\n    font-size: x-small;\n    opacity: .8;\n    padding: 2vh;\n}\n\n@media screen and (max-width: 520px){\n\n    .tarjeta[_ngcontent-%COMP%]{\n        width: 130px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ub2NpbWllbnRvcy9vcy9vcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxpQ0FBeUI7O1lBQXpCLHlCQUF5QjtJQUN6QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUdBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29ub2NpbWllbnRvcy9vcy9vcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnRhcmpldGF7XG4gICAgXG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgKi9cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7IFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhcmpldGE6aG92ZXJ7XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0OyBcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcyA7XG59XG5cbi5pbWctdGFyamV0YXtcbiAgICBcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuaW1ne1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAgIFxuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmJvZHktdGFyamV0YXtcblxuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuLnRpdHVsb3tcblxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRve1xuXG4gICAgcGFkZGluZzogMXZoO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG8tcGlle1xuXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCl7XG5cbiAgICAudGFyamV0YXtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-os',
          templateUrl: './os.component.html',
          styleUrls: ['./os.component.css']
        }]
      }], function () {
        return [{
          type: _conocimientos_os_os_service__WEBPACK_IMPORTED_MODULE_1__["OSService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conocimientos/os/os.service.ts":
  /*!************************************************!*\
    !*** ./src/app/conocimientos/os/os.service.ts ***!
    \************************************************/

  /*! exports provided: OSService */

  /***/
  function srcAppConocimientosOsOsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OSService", function () {
      return OSService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OSService =
    /*#__PURE__*/
    function () {
      function OSService() {
        _classCallCheck(this, OSService);

        this.os = [{
          foto: 'assets/Windows.png',
          porcentaje: '90',
          tecnologia: 'Windows'
        }, {
          foto: 'assets/ubuntu.png',
          porcentaje: '35',
          tecnologia: 'Ubuntu'
        }];
      }

      _createClass(OSService, [{
        key: "obtenerOs",
        value: function obtenerOs() {
          return this.os;
        }
      }]);

      return OSService;
    }();

    OSService.ɵfac = function OSService_Factory(t) {
      return new (t || OSService)();
    };

    OSService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OSService,
      factory: OSService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OSService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cursos.service.ts":
  /*!***********************************!*\
    !*** ./src/app/cursos.service.ts ***!
    \***********************************/

  /*! exports provided: CursosService */

  /***/
  function srcAppCursosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CursosService", function () {
      return CursosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CursosService =
    /*#__PURE__*/
    function () {
      function CursosService() {
        _classCallCheck(this, CursosService);

        this.cursos = [{
          indice: '0',
          curso: 'java inicial',
          instituto: 'academia cisco-oracle',
          localidad: 'utn cordoba',
          duracion: '4 meses',
          inicio: 'agosto 2015',
          final: 'diciembre 2015'
        }, {
          indice: '1',
          curso: 'tecnico de pc',
          instituto: 'AES computacion',
          localidad: 'barrio centro',
          duracion: '4 meses',
          inicio: 'marzo 2010',
          final: 'julio 2010'
        }, {
          indice: '2',
          curso: 'asistente pyme',
          instituto: 'AES computacion',
          localidad: 'barrio centro',
          duracion: '5 meses',
          inicio: 'julio 2008',
          final: 'diciembre 2008'
        }, {
          indice: '3',
          curso: 'operador de pc',
          instituto: 'CEA informatica',
          localidad: 'villa allende',
          duracion: '6 meses',
          inicio: 'marzo 2002',
          final: 'agosto 2002'
        }];
      }

      _createClass(CursosService, [{
        key: "obtenerCursos",
        value: function obtenerCursos() {
          return this.cursos;
        }
      }]);

      return CursosService;
    }();

    CursosService.ɵfac = function CursosService_Factory(t) {
      return new (t || CursosService)();
    };

    CursosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CursosService,
      factory: CursosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CursosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cursos/cursos.component.ts":
  /*!********************************************!*\
    !*** ./src/app/cursos/cursos.component.ts ***!
    \********************************************/

  /*! exports provided: CursosComponent */

  /***/
  function srcAppCursosCursosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CursosComponent", function () {
      return CursosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cursos.service */
    "./src/app/cursos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CursosComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CursosComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var indice_r4 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.click(indice_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.curso, " ");
      }
    }

    var CursosComponent =
    /*#__PURE__*/
    function () {
      function CursosComponent(_servicio) {
        _classCallCheck(this, CursosComponent);

        this._servicio = _servicio;
        this.cursos = [];
        this.cursos = _servicio.obtenerCursos();
      }

      _createClass(CursosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "click",
        value: function click(indice) {
          var contenido = null;
          var titulo = null;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.cursos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;

              if (parseInt(item.indice) == parseInt(indice)) {
                contenido = item;
                titulo = item.curso;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          document.getElementById('titulo').innerHTML = titulo;
          document.getElementById('body').innerHTML = 'Cursado en el instituto ' + '<em class="text-warning text-capitalize">' + contenido.instituto + '</em>' + ' con ' + '<em class="text-warning">' + contenido.duracion + '</em>' + ' de duracion.' + '<br>' + 'Inicio: ' + '<small class="text-white">' + contenido.inicio + '</small>' + ' Finalizado: ' + '<small class="text-white">' + contenido.final + '</small>';
        }
      }]);

      return CursosComponent;
    }();

    CursosComponent.ɵfac = function CursosComponent_Factory(t) {
      return new (t || CursosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cursos_service__WEBPACK_IMPORTED_MODULE_1__["CursosService"]));
    };

    CursosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CursosComponent,
      selectors: [["app-cursos"]],
      decls: 15,
      vars: 1,
      consts: [[1, "container-sm"], [1, "text-white-50", "text-capitalize", "text-center", "m-0"], [1, "far", "fa-hand-point-", "fa-hand-point-right"], [1, "container-sm", "text-center", "pb-2"], ["id", "boton", "type", "button", "class", "w-1 btn btn-secondary bg-dark m-3 py-3 px-4", "data-toggle", "modal", "data-target", "#exampleModalCenter1", 3, "click", 4, "ngFor", "ngForOf"], ["id", "exampleModalCenter1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "bg-dark", "text-white-50"], [1, "modal-header"], ["id", "titulo", 1, "modal-title", "text-warning", "text-capitalize"], ["id", "body", 1, "modal-body", "mx-2"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-dark"], ["id", "boton", "type", "button", "data-toggle", "modal", "data-target", "#exampleModalCenter1", 1, "w-1", "btn", "btn-secondary", "bg-dark", "m-3", "py-3", "px-4", 3, "click"], [1, "text-capitalize", "text-white-50", "text-center"], [1, "fas", "fa-check", "text-success", "font-smaller"]],
      template: function CursosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " cursos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CursosComponent_button_5_Template, 4, 1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cerrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cursos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["h4[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-family: 'Titillium Web';\n}\n\nh5[_ngcontent-%COMP%]{\n    margin: 0;\n}\n\n.modal-body[_ngcontent-%COMP%]{\n    border: none;\n}\n\n.modal-header[_ngcontent-%COMP%]{\n    border: none;\n}\n\n.modal-footer[_ngcontent-%COMP%]{\n    border: none;\n}\n\nbutton[_ngcontent-%COMP%]{\n    box-shadow: 4px 4px 5px black;\n\n}\n\n.btn[_ngcontent-%COMP%]{\n    border: none !important;\n}\n\n.btn[_ngcontent-%COMP%]:visited{\n    border: none !important;\n}\n\n@media screen and (max-width: 375px)\n{\n    .btn[_ngcontent-%COMP%]{\n        width: 90% !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Vyc29zL2N1cnNvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7SUFDekI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvcy9jdXJzb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0LCBoMntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInO1xufVxuXG5oNXtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbC1ib2R5e1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm1vZGFsLWhlYWRlcntcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ubW9kYWwtZm9vdGVye1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9ue1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNXB4IGJsYWNrO1xuXG59XG5cbi5idG57XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idG46dmlzaXRlZHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpXG57XG4gICAgLmJ0bntcbiAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CursosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cursos',
          templateUrl: './cursos.component.html',
          styleUrls: ['./cursos.component.css']
        }]
      }], function () {
        return [{
          type: _cursos_service__WEBPACK_IMPORTED_MODULE_1__["CursosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/encabezado/encabezado.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/encabezado/encabezado.component.ts ***!
    \****************************************************/

  /*! exports provided: EncabezadoComponent */

  /***/
  function srcAppEncabezadoEncabezadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncabezadoComponent", function () {
      return EncabezadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EncabezadoComponent =
    /*#__PURE__*/
    function () {
      function EncabezadoComponent() {
        _classCallCheck(this, EncabezadoComponent);
      }

      _createClass(EncabezadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EncabezadoComponent;
    }();

    EncabezadoComponent.ɵfac = function EncabezadoComponent_Factory(t) {
      return new (t || EncabezadoComponent)();
    };

    EncabezadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EncabezadoComponent,
      selectors: [["app-encabezado"]],
      decls: 15,
      vars: 0,
      consts: [[1, "fondo"], [1, "filtro"], [1, "container-sm"], [1, "row", "row-cols-1"], ["id", "texto", 1, "col", "text-white"], [1, "display-4", "font-weight-bold"], [1, "text-white-50", "font-weight-bold"]],
      template: function EncabezadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Esteban Ezequiel Ceballos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Frontend Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Bienvenidos a mi Blog .. el mismo es un despliegue breve de mi hoja de vida junto a las competencias propias del desarrollo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Frontend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " que adquiri. Desde ya agradezco tu visita y no dudes en contactarme ... Saludos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fondo[_ngcontent-%COMP%]{\n    background: url('escritorio.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n.filtro[_ngcontent-%COMP%]{\n    background: rgba(47, 47, 47, 0.6);\n    height: 25rem;\n    display: -webkit-box;\n    display: flex; \n    -webkit-box-align: end;\n            align-items: flex-end;\n}\n\n.row[_ngcontent-%COMP%]{\n    margin: 0 auto;\n}\n\n#angular[_ngcontent-%COMP%]{ text-align: right; }\n\n#texto[_ngcontent-%COMP%]{\n    text-align: right;\n    padding: 0px;\n    padding-bottom: 2em;\n}\n\nh5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    font-family: 'Titillium Web', !important;\n    text-align: justify;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-family: 'Nunito';\n    color: turquoise;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\n@media screen and (max-width: 375px){\n    \n    .filtro[_ngcontent-%COMP%] { height: 16rem;}\n    \n    #texto[_ngcontent-%COMP%]{ \n        \n        padding-bottom: 0.5em; \n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    h1[_ngcontent-%COMP%] { \n        font-size: 20px; \n        margin: 0;\n        padding: 0;\n        text-align: center;\n    }\n\n    h2[_ngcontent-%COMP%] { \n        font-size: 16px;  \n        margin: 0;\n        padding: 0;\n        text-align: center;\n    }\n\n    img[_ngcontent-%COMP%] { \n        height: auto; \n        width: 5em; \n        \n    }\n\n    h5[_ngcontent-%COMP%] {\n        font-size: 14px;\n        font-family: initial;\n        margin: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5jYWJlemFkby9lbmNhYmV6YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYSxFQUFFLDBEQUEwRDtJQUN6RSxzQkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxVQUFVLGlCQUFpQixFQUFFOztBQUU3QjtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxVQUFVLGFBQWEsQ0FBQzs7SUFFeEI7O1FBRUkscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lbmNhYmV6YWRvL2VuY2FiZXphZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2VzY3JpdG9yaW8uanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmZpbHRyb3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCA0NywgNDcsIDAuNik7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4OyAvKmZpbHRybyBwYWRyZSBkZSByb3csIHN1cyBwcm9waWVkYWRlcyBjZW50cmFuIGVsIGRpdiByb3cqL1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnJvd3tcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuI2FuZ3VsYXJ7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbiN0ZXh0b3tcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cblxuaDUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaDF7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuICAgIGNvbG9yOiB0dXJxdW9pc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcbiAgICBcbiAgICAuZmlsdHJvIHsgaGVpZ2h0OiAxNnJlbTt9XG4gICAgXG4gICAgI3RleHRveyBcbiAgICAgICAgXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTsgXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICBoMSB7IFxuICAgICAgICBmb250LXNpemU6IDIwcHg7IFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBoMiB7IFxuICAgICAgICBmb250LXNpemU6IDE2cHg7ICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW1nIHsgXG4gICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgIHdpZHRoOiA1ZW07IFxuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAtMC41ZW07ICovXG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EncabezadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-encabezado',
          templateUrl: './encabezado.component.html',
          styleUrls: ['./encabezado.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/estudios/estudios.component.ts":
  /*!************************************************!*\
    !*** ./src/app/estudios/estudios.component.ts ***!
    \************************************************/

  /*! exports provided: EstudiosComponent */

  /***/
  function srcAppEstudiosEstudiosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudiosComponent", function () {
      return EstudiosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _estudios_estudios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../estudios/estudios.service */
    "./src/app/estudios/estudios.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EstudiosComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.contenido);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.fecha);
      }
    }

    var EstudiosComponent =
    /*#__PURE__*/
    function () {
      function EstudiosComponent(_servicio) {
        _classCallCheck(this, EstudiosComponent);

        this._servicio = _servicio;
        this.estudios = [];
        this.estudios = _servicio.obtenerEstudios();
      }

      _createClass(EstudiosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EstudiosComponent;
    }();

    EstudiosComponent.ɵfac = function EstudiosComponent_Factory(t) {
      return new (t || EstudiosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_estudios_estudios_service__WEBPACK_IMPORTED_MODULE_1__["EstudiosService"]));
    };

    EstudiosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EstudiosComponent,
      selectors: [["app-estudios"]],
      decls: 7,
      vars: 1,
      consts: [[1, "container"], [1, "etiqueta", "text-dark", "text-uppercase"], [1, "forma"], [1, "forma1"], [1, "card-columns"], ["class", "card mt-4 bg-dark text-white", "style", "max-width: 540px;", 4, "ngFor", "ngForOf"], [1, "card", "mt-4", "bg-dark", "text-white", 2, "max-width", "540px"], ["height", "auto", "width", "355em", "alt", "", 1, "img-fluid", 3, "src"], [1, "card-body"], [1, "card-text", "text-justify"], [1, "card-text", "font-weight-bold", "text-white-50"]],
      template: function EstudiosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Formacion Academica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EstudiosComponent_div_6_Template, 7, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estudios);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\n    font-family: 'Titillium Web';\n}\n\n.container[_ngcontent-%COMP%]{\n    position: relative;\n}\n\n.card-columns[_ngcontent-%COMP%]{\n    margin-top: 15px;\n}\n\n.etiqueta[_ngcontent-%COMP%]{\n    font-weight: bold;\n    text-transform: capitalize;\n    background: tomato;\n    padding: 0.2em 1.5em 0.2em 0.9em;\n    margin-left: -15px;\n    position: absolute;\n    top: 11%;\n    left: 0;\n    z-index: 1;\n}\n\n.forma[_ngcontent-%COMP%]{\n    width: 0px;\n    height: 0px;\n    line-height: 0px;\n    border-left: 35px solid white;\n    border-top: 35px solid transparent;\n    position: absolute;\n    top: 0%;\n    left: 96%;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.forma1[_ngcontent-%COMP%]{\n    width: 0px;\n    height: 0px;\n    line-height: 0px;\n    border-left: 30px solid transparent;\n    border-top: 15px solid #b41b00;\n    position: absolute;\n    top: 100%;\n    left: 0;\n}\n\n.card[_ngcontent-%COMP%]{\n    border: none;\n    \n    \n}\n\nh4[_ngcontent-%COMP%]{\n    font-weight: bold;\n}\n\n.card-body[_ngcontent-%COMP%]{\n    padding: 10px !important;\n}\n\n@media screen and (max-width: 375px){    \n    img[_ngcontent-%COMP%]{\n        height: auto;\n        max-width: 100%;\n    }   \n    \n    .etiqueta[_ngcontent-%COMP%]{\n        font-size: 22px;\n        margin-left: -2px;\n        top: 0.6%;\n    }\n\n    .card[_ngcontent-%COMP%]{\n        margin-top: 1.5em !important;\n    }\n\n    .forma1[_ngcontent-%COMP%]{\n        border-left: 17px solid transparent;\n        border-top: 15px solid #b41b00;   \n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0dWRpb3MvZXN0dWRpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87QUFDWDs7QUFHQTtJQUNJLFlBQVk7SUFDWjs7aUNBRTZCO0lBQzdCOzs0Q0FFd0M7QUFDNUM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxtQ0FBbUM7UUFDbkMsOEJBQThCO0lBQ2xDOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvZXN0dWRpb3MvZXN0dWRpb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJztcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLWNvbHVtbnN7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmV0aXF1ZXRhe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGJhY2tncm91bmQ6IHRvbWF0bztcbiAgICBwYWRkaW5nOiAwLjJlbSAxLjVlbSAwLjJlbSAwLjllbTtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTElO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmZvcm1he1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogMzVweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItdG9wOiAzNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAlO1xuICAgIGxlZnQ6IDk2JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5mb3JtYTF7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgI2I0MWIwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG59XG5cblxuLmNhcmR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7ICovXG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCA4cHggYmxhY2s7XG4gICAgLW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDhweCBibGFjaztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggOHB4IGJsYWNrOyAqL1xufVxuXG5oNHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXsgICAgXG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9ICAgXG4gICAgXG4gICAgLmV0aXF1ZXRhe1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICB0b3A6IDAuNiU7XG4gICAgfVxuXG4gICAgLmNhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNWVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmZvcm1hMXtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgI2I0MWIwMDsgICBcbiAgICB9XG5cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstudiosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-estudios',
          templateUrl: './estudios.component.html',
          styleUrls: ['./estudios.component.css']
        }]
      }], function () {
        return [{
          type: _estudios_estudios_service__WEBPACK_IMPORTED_MODULE_1__["EstudiosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/estudios/estudios.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/estudios/estudios.service.ts ***!
    \**********************************************/

  /*! exports provided: EstudiosService */

  /***/
  function srcAppEstudiosEstudiosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudiosService", function () {
      return EstudiosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EstudiosService =
    /*#__PURE__*/
    function () {
      function EstudiosService() {
        _classCallCheck(this, EstudiosService);

        this.estudios = [{
          fecha: 'Año 2016 a la actualidad',
          foto: 'assets/utn.png',
          contenido: 'Cursando Analista en Sistemas de informacion.'
        }, {
          fecha: 'Año 2019',
          foto: 'assets/mm.jpg',
          contenido: 'Certificado con el titulo Desarrollo Web con alcances en el ambito Frontend para la creacion de aplicaciones web dinámicas, bajo el frameworks Angular.'
        }, {
          fecha: 'Año 2003',
          foto: 'assets/secundario.jpg',
          contenido: 'Graduado en el Instituto Secundario Brigadier MJI San Martin. Titulo Filosofia y Humanidades'
        }];
      }

      _createClass(EstudiosService, [{
        key: "obtenerEstudios",
        value: function obtenerEstudios() {
          return this.estudios;
        }
      }]);

      return EstudiosService;
    }();

    EstudiosService.ɵfac = function EstudiosService_Factory(t) {
      return new (t || EstudiosService)();
    };

    EstudiosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EstudiosService,
      factory: EstudiosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstudiosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/experiencia/experiencia.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/experiencia/experiencia.component.ts ***!
    \******************************************************/

  /*! exports provided: ExperienciaComponent */

  /***/
  function srcAppExperienciaExperienciaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function () {
      return ExperienciaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExperienciaComponent =
    /*#__PURE__*/
    function () {
      function ExperienciaComponent() {
        _classCallCheck(this, ExperienciaComponent);
      }

      _createClass(ExperienciaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienciaComponent;
    }();

    ExperienciaComponent.ɵfac = function ExperienciaComponent_Factory(t) {
      return new (t || ExperienciaComponent)();
    };

    ExperienciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienciaComponent,
      selectors: [["app-experiencia"]],
      decls: 0,
      vars: 0,
      template: function ExperienciaComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2lhL2V4cGVyaWVuY2lhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienciaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experiencia',
          templateUrl: './experiencia.component.html',
          styleUrls: ['./experiencia.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/idiomas/idiomas.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/idiomas/idiomas.component.ts ***!
    \**********************************************/

  /*! exports provided: IdiomasComponent */

  /***/
  function srcAppIdiomasIdiomasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdiomasComponent", function () {
      return IdiomasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IdiomasComponent =
    /*#__PURE__*/
    function () {
      function IdiomasComponent() {
        _classCallCheck(this, IdiomasComponent);
      }

      _createClass(IdiomasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IdiomasComponent;
    }();

    IdiomasComponent.ɵfac = function IdiomasComponent_Factory(t) {
      return new (t || IdiomasComponent)();
    };

    IdiomasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IdiomasComponent,
      selectors: [["app-idiomas"]],
      decls: 2,
      vars: 0,
      template: function IdiomasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "idiomas works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkaW9tYXMvaWRpb21hcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdiomasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-idiomas',
          templateUrl: './idiomas.component.html',
          styleUrls: ['./idiomas.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pestagna/pestagna.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pestagna/pestagna.component.ts ***!
    \************************************************/

  /*! exports provided: PestagnaComponent */

  /***/
  function srcAppPestagnaPestagnaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PestagnaComponent", function () {
      return PestagnaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PestagnaComponent =
    /*#__PURE__*/
    function () {
      function PestagnaComponent() {
        _classCallCheck(this, PestagnaComponent);
      }

      _createClass(PestagnaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pinchar",
        value: function pinchar() {
          var x = document.getElementById("numero");

          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }
      }]);

      return PestagnaComponent;
    }();

    PestagnaComponent.ɵfac = function PestagnaComponent_Factory(t) {
      return new (t || PestagnaComponent)();
    };

    PestagnaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PestagnaComponent,
      selectors: [["app-pestagna"]],
      decls: 6,
      vars: 0,
      consts: [[1, "bg-success", 3, "click"], [1, "text-white-50", "font-weight-bold"], [1, "fab", "fa-whatsapp", "text-white-50"], ["id", "numero"]],
      template: function PestagnaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PestagnaComponent_Template_a_click_1_listener() {
            return ctx.pinchar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "351 682 5970");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["a[_ngcontent-%COMP%]{\n    padding: 12px;\n    margin: 4px;\n    position: fixed;\n    top: 50%;\n    right: 0%;\n    border-radius: 7px 0px 0px 7px;\n    outline:none !important;\n    box-shadow: 8px 8px 20px black;\n    -moz-box-shadow: 8px 8px 20px black;\n    -webkit-box-shadow: 8px 8px 20px black;\n    z-index: 1;\n}\n\n#numero[_ngcontent-%COMP%]{\n\n    display: none;\n    -webkit-transition: width .5s;\n    transition: width .5s;\n    float: right;\n}\n\ni[_ngcontent-%COMP%]{\n    margin: 0 !important;\n    padding: 0 !important;\n    padding-right: 1vh !important;\n    padding-left: 1vh !important;\n}\n\nspan[_ngcontent-%COMP%]{\n    margin: 0 !important;\n    padding: 0 !important;\n}\n\nh3[_ngcontent-%COMP%]{\n    margin: 0 !important;\n    padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVzdGFnbmEvcGVzdGFnbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDZCQUFxQjtJQUFyQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGVzdGFnbmEvcGVzdGFnbmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAwcHggMHB4IDdweDtcbiAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDIwcHggYmxhY2s7XG4gICAgLW1vei1ib3gtc2hhZG93OiA4cHggOHB4IDIwcHggYmxhY2s7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggOHB4IDIwcHggYmxhY2s7XG4gICAgei1pbmRleDogMTtcbn1cblxuI251bWVyb3tcblxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjVzO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuaXtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMXZoICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxdmggIWltcG9ydGFudDtcbn1cblxuc3BhbntcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmgze1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PestagnaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pestagna',
          templateUrl: './pestagna.component.html',
          styleUrls: ['./pestagna.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pie-pagina/pie-pagina.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pie-pagina/pie-pagina.component.ts ***!
    \****************************************************/

  /*! exports provided: PiePaginaComponent */

  /***/
  function srcAppPiePaginaPiePaginaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PiePaginaComponent", function () {
      return PiePaginaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PiePaginaComponent =
    /*#__PURE__*/
    function () {
      function PiePaginaComponent() {
        _classCallCheck(this, PiePaginaComponent);
      }

      _createClass(PiePaginaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PiePaginaComponent;
    }();

    PiePaginaComponent.ɵfac = function PiePaginaComponent_Factory(t) {
      return new (t || PiePaginaComponent)();
    };

    PiePaginaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PiePaginaComponent,
      selectors: [["app-pie-pagina"]],
      decls: 14,
      vars: 0,
      consts: [[1, "fondo"], [1, "filtro"], [1, "container-fluid", "bg-dark"], [1, "text-center"], [1, "text-white-50", "text-capitalize", "font-weight-bold", 2, "font-size", "24px"], [1, "far", "fa-hand-point-right", "mr-2"], ["target", "_blank", "href", "https://www.instagram.com/ezequiel__ceballos/", 1, "text-danger", "mr-2"], [1, "fab", "fa-instagram", "mr-2", "my-1", 2, "color", "brown", "font-size", "1.5rem"], ["target", "_blank", "href", "https://gmail.com/estebanezequielceballos@gmail.com", 1, "text-white-50"], [1, "far", "fa-envelope", "mr-2", "my-1", 2, "font-size", "1.5rem"]],
      template: function PiePaginaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " contacto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " /ezequiel__ceballos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " estebanezequielceballos@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fondo[_ngcontent-%COMP%]{\n    background: url('escritorio.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n.filtro[_ngcontent-%COMP%]{\n    background: rgba(47, 47, 47, 0.6);\n    height: 15rem;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n    display:block;\n    text-align: center;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-family: 'Titillium Web';\n    font-size: small\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGllLXBhZ2luYS9waWUtcGFnaW5hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFDQSx1Q0FBdUMiLCJmaWxlIjoic3JjL2FwcC9waWUtcGFnaW5hL3BpZS1wYWdpbmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2VzY3JpdG9yaW8uanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmZpbHRyb3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCA0NywgNDcsIDAuNik7XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJztcbiAgICBmb250LXNpemU6IHNtYWxsXG59XG4vKiBhbGluZWFyIGljb25vcyBhOmxpbmsgZW4gdW5hIGxpc3RhICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PiePaginaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pie-pagina',
          templateUrl: './pie-pagina.component.html',
          styleUrls: ['./pie-pagina.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pre-encabezado/pre-encabezado.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pre-encabezado/pre-encabezado.component.ts ***!
    \************************************************************/

  /*! exports provided: PreEncabezadoComponent */

  /***/
  function srcAppPreEncabezadoPreEncabezadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreEncabezadoComponent", function () {
      return PreEncabezadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreEncabezadoComponent =
    /*#__PURE__*/
    function () {
      function PreEncabezadoComponent() {
        _classCallCheck(this, PreEncabezadoComponent);
      }

      _createClass(PreEncabezadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreEncabezadoComponent;
    }();

    PreEncabezadoComponent.ɵfac = function PreEncabezadoComponent_Factory(t) {
      return new (t || PreEncabezadoComponent)();
    };

    PreEncabezadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreEncabezadoComponent,
      selectors: [["app-pre-encabezado"]],
      decls: 8,
      vars: 0,
      consts: [[1, "fondo"], [1, "filtro"], [1, "container"], [1, "row"], [1, "col"], ["id", "logo", 1, "col-6"], ["src", "../../assets/logo.png", 1, "img-fluid", "float-left"]],
      template: function PreEncabezadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fondo[_ngcontent-%COMP%]{\n    background: url('cordoba.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.filtro[_ngcontent-%COMP%]{\n    background: rgb(50, 58, 64,0.5);\n    height: 6em;\n    display: -webkit-box;\n    display: flex;  \n    -webkit-box-align: center;\n            align-items: center;\n\n}\n\n#logo[_ngcontent-%COMP%]{  \n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.modal-content[_ngcontent-%COMP%]{\n    border-radius: 5px 5px 5px 5px;\n    border: 0px;\n}\n\nimg[_ngcontent-%COMP%]{\n    height: 2.7em;\n    margin: auto;\n}\n\n@media screen and (min-width: 768px ) and (max-width: 1024px){\n    img[_ngcontent-%COMP%] { height: 2.7em; }\n\n    .filtro[_ngcontent-%COMP%] {   height: 6.5em;   }\n}\n\n@media screen and (min-width: 611px ) and (max-width: 768px){\n    img[_ngcontent-%COMP%] { height: 2.5em; }\n\n    .filtro[_ngcontent-%COMP%] {   height: 5.5em;   }\n}\n\n@media screen and (min-width: 512px ) and (max-width: 611px){\n    img[_ngcontent-%COMP%] { height: 2.5em; }\n\n    .filtro[_ngcontent-%COMP%] {   height: 5.5em;   }\n}\n\n@media screen and (min-width: 425px ) and (max-width: 512px){\n    img[_ngcontent-%COMP%] { height: 2.5em; }\n\n    .filtro[_ngcontent-%COMP%] {   height: 5em;   }\n}\n\n@media screen and (min-width: 375px ) and (max-width: 425px){\n    img[_ngcontent-%COMP%] { height: 2em; }\n\n    .filtro[_ngcontent-%COMP%] {   height: 4.6em;   }\n}\n\n@media screen and (max-width: 375px){\n    img[_ngcontent-%COMP%] { height: 1.5em; }\n\n    .filtro[_ngcontent-%COMP%] {   height: 3em;   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWVuY2FiZXphZG8vcHJlLWVuY2FiZXphZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWEsR0FBRyxxQkFBcUI7SUFDckMseUJBQW1CO1lBQW5CLG1CQUFtQjs7QUFFdkI7O0FBRUEsUUFBUSxxQkFBcUI7SUFDekIsMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxNQUFNLGFBQWEsRUFBRTs7SUFFckIsWUFBWSxhQUFhLElBQUk7QUFDakM7O0FBRUE7SUFDSSxNQUFNLGFBQWEsRUFBRTs7SUFFckIsWUFBWSxhQUFhLElBQUk7QUFDakM7O0FBRUE7SUFDSSxNQUFNLGFBQWEsRUFBRTs7SUFFckIsWUFBWSxhQUFhLElBQUk7QUFDakM7O0FBRUE7SUFDSSxNQUFNLGFBQWEsRUFBRTs7SUFFckIsWUFBWSxXQUFXLElBQUk7QUFDL0I7O0FBRUE7SUFDSSxNQUFNLFdBQVcsRUFBRTs7SUFFbkIsWUFBWSxhQUFhLElBQUk7QUFDakM7O0FBRUE7SUFDSSxNQUFNLGFBQWEsRUFBRTs7SUFFckIsWUFBWSxXQUFXLElBQUk7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wcmUtZW5jYWJlemFkby9wcmUtZW5jYWJlemFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRve1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvY29yZG9iYS5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmZpbHRyb3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTAsIDU4LCA2NCwwLjUpO1xuICAgIGhlaWdodDogNmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7ICAvKiBjZW50cmFkbyBkZSBsb2dvICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4jbG9nb3sgIC8qIGNlbnRyYWRvIGRlIGxvZ28gKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbmltZ3tcbiAgICBoZWlnaHQ6IDIuN2VtO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHggKSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICBpbWcgeyBoZWlnaHQ6IDIuN2VtOyB9XG5cbiAgICAuZmlsdHJvIHsgICBoZWlnaHQ6IDYuNWVtOyAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjExcHggKSBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgIGltZyB7IGhlaWdodDogMi41ZW07IH1cblxuICAgIC5maWx0cm8geyAgIGhlaWdodDogNS41ZW07ICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MTJweCApIGFuZCAobWF4LXdpZHRoOiA2MTFweCl7XG4gICAgaW1nIHsgaGVpZ2h0OiAyLjVlbTsgfVxuXG4gICAgLmZpbHRybyB7ICAgaGVpZ2h0OiA1LjVlbTsgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4ICkgYW5kIChtYXgtd2lkdGg6IDUxMnB4KXtcbiAgICBpbWcgeyBoZWlnaHQ6IDIuNWVtOyB9XG5cbiAgICAuZmlsdHJvIHsgICBoZWlnaHQ6IDVlbTsgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4ICkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICBpbWcgeyBoZWlnaHQ6IDJlbTsgfVxuXG4gICAgLmZpbHRybyB7ICAgaGVpZ2h0OiA0LjZlbTsgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcbiAgICBpbWcgeyBoZWlnaHQ6IDEuNWVtOyB9XG5cbiAgICAuZmlsdHJvIHsgICBoZWlnaHQ6IDNlbTsgICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreEncabezadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-encabezado',
          templateUrl: './pre-encabezado.component.html',
          styleUrls: ['./pre-encabezado.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/proyectos/proyectos.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/proyectos/proyectos.component.ts ***!
    \**************************************************/

  /*! exports provided: ProyectosComponent */

  /***/
  function srcAppProyectosProyectosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function () {
      return ProyectosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProyectosComponent =
    /*#__PURE__*/
    function () {
      function ProyectosComponent() {
        _classCallCheck(this, ProyectosComponent);
      }

      _createClass(ProyectosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProyectosComponent;
    }();

    ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) {
      return new (t || ProyectosComponent)();
    };

    ProyectosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProyectosComponent,
      selectors: [["app-proyectos"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container-sm", "py-5"], [1, "text-uppercase", "text-white-50"], [1, "punta"], [1, "cola"], [1, "curva"], ["target", "_blank", "href", "https://github.com/EstebanEzequiel", 1, "text-light"], [1, "fab", "fa-github-square", "mr-2", "my-1", 2, "color", "white", "font-size", "2rem"]],
      template: function ProyectosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " github.com/EstebanEzequiel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container-sm[_ngcontent-%COMP%]{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\nh3[_ngcontent-%COMP%]{\n    font-family: 'Titillium Web';\n    float: left;\n    background-color: orangered;\n    font-weight: bold;\n    position: relative;\n    margin: 0;\n    padding: 1vh;\n    padding-left: 1.5em;\n}\n\na[_ngcontent-%COMP%]{\n    font-family: 'Titillium Web';\n    margin-left: 4em;\n    text-decoration: none;\n    display:block;\n    text-align: center;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-family: 'Titillium Web';\n}\n\n.punta[_ngcontent-%COMP%]{\n\n    width: 0px;\n    height: 0px;\n    line-height: 0px;\n    border-left: 48px solid transparent;\n    border-top: 48px solid orangered;\n    position: absolute;\n    left: 86%;\n    top: 0%;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.cola[_ngcontent-%COMP%]{\n\n    width: 0px;\n    height: 0px;\n    line-height: 0px;\n    border-left: 34px solid transparent;\n    border-top: 34px solid #343a40;\n    position: absolute;\n    left: -10%;\n    top: 16%;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n\n}\n\n@media screen and (max-width: 375px){    \n\n    .container-sm[_ngcontent-%COMP%]{\n        display: block;\n        overflow: hidden;\n        text-align: center;\n        padding: 24px 15px !important;\n        padding-top: 0px !important;\n    }\n\n    .punta[_ngcontent-%COMP%]{\n        left: 100%;\n        top: 97%;\n        -webkit-transform: rotate(135deg);\n                transform: rotate(135deg);\n    }\n    \n    a[_ngcontent-%COMP%]{\n        margin: 0;\n        margin-top: 4rem;\n    }\n    \n    .curva[_ngcontent-%COMP%]{\n        width: 0px;\n        height: 0px;\n        line-height: 0px;\n        border-left: 48px solid orangered;\n        border-top: 70px solid orangered;\n        position: absolute;\n        left: 100%;\n        top: 0%;\n        border-radius: 0px 30px 0px 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG9zL3Byb3llY3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixnQ0FBd0I7WUFBeEIsd0JBQXdCOztBQUU1Qjs7QUFFQTs7SUFFSTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLDZCQUE2QjtRQUM3QiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsUUFBUTtRQUNSLGlDQUF5QjtnQkFBekIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksU0FBUztRQUNULGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixPQUFPO1FBQ1AsK0JBQStCO0lBQ25DO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm95ZWN0b3MvcHJveWVjdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXNte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmgze1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYic7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIHBhZGRpbmctbGVmdDogMS41ZW07XG59XG5cbmF7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJztcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYic7XG59XG5cbi5wdW50YXtcblxuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogNDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiA0OHB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogODYlO1xuICAgIHRvcDogMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uY29sYXtcblxuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogMzRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAzNHB4IHNvbGlkICMzNDNhNDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMCU7XG4gICAgdG9wOiAxNiU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXsgICAgXG5cbiAgICAuY29udGFpbmVyLXNte1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wdW50YXtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgdG9wOiA5NyU7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgfVxuICAgIFxuICAgIGF7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICB9XG4gICAgXG4gICAgLmN1cnZhe1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDQ4cHggc29saWQgb3JhbmdlcmVkO1xuICAgICAgICBib3JkZXItdG9wOiA3MHB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICB0b3A6IDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAwcHggMHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-proyectos',
          templateUrl: './proyectos.component.html',
          styleUrls: ['./proyectos.component.css']
        }]
      }], function () {
        return [];
      }, null);
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! /home/e2equ1e1/Escritorio/Blog/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map