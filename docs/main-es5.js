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


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { PeliculasdbzService } from './services/peliculasdbz.service';
    // import { PeliculasdbService } from './services/peliculasdb.service';


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'dragonballapp';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
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
      }], function () {
        return [];
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-audio-player */
    "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _services_personajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/personajes.service */
    "./src/app/services/personajes.service.ts");
    /* harmony import */


    var _services_peliculasdb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/peliculasdb.service */
    "./src/app/services/peliculasdb.service.ts");
    /* harmony import */


    var _services_peliculasdbz_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/peliculasdbz.service */
    "./src/app/services/peliculasdbz.service.ts");
    /* harmony import */


    var _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/imagenes-galerias.service */
    "./src/app/services/imagenes-galerias.service.ts");
    /* harmony import */


    var _pipes_peliculadb_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pipes/peliculadb-imagen.pipe */
    "./src/app/pipes/peliculadb-imagen.pipe.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_personajes_personajes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/personajes/personajes.component */
    "./src/app/components/personajes/personajes.component.ts");
    /* harmony import */


    var _components_dragon_ball_dragon_ball_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/dragon-ball/dragon-ball.component */
    "./src/app/components/dragon-ball/dragon-ball.component.ts");
    /* harmony import */


    var _components_dragon_ball_z_dragon_ball_z_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/dragon-ball-z/dragon-ball-z.component */
    "./src/app/components/dragon-ball-z/dragon-ball-z.component.ts");
    /* harmony import */


    var _components_dragon_ball_gt_dragon_ball_gt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/dragon-ball-gt/dragon-ball-gt.component */
    "./src/app/components/dragon-ball-gt/dragon-ball-gt.component.ts");
    /* harmony import */


    var _components_personaje_personaje_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/personaje/personaje.component */
    "./src/app/components/personaje/personaje.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_personaje_tarjeta_personaje_tarjeta_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/personaje-tarjeta/personaje-tarjeta.component */
    "./src/app/components/personaje-tarjeta/personaje-tarjeta.component.ts");
    /* harmony import */


    var _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/peliculas/peliculas.component */
    "./src/app/components/peliculas/peliculas.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _components_transformaciones_transformaciones_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/transformaciones/transformaciones.component */
    "./src/app/components/transformaciones/transformaciones.component.ts");
    /* harmony import */


    var _components_transformacion_tarjeta_transformacion_tarjeta_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/transformacion-tarjeta/transformacion-tarjeta.component */
    "./src/app/components/transformacion-tarjeta/transformacion-tarjeta.component.ts");
    /* harmony import */


    var _services_transformaciones_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/transformaciones.service */
    "./src/app/services/transformaciones.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Rutas
    // Servicios
    // Pipes
    // Components
    // Angular Material


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_personajes_service__WEBPACK_IMPORTED_MODULE_5__["PersonajesService"], _services_peliculasdbz_service__WEBPACK_IMPORTED_MODULE_7__["PeliculasdbzService"], _services_peliculasdb_service__WEBPACK_IMPORTED_MODULE_6__["PeliculasdbService"], _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_8__["ImagenesGaleriasService"], _services_transformaciones_service__WEBPACK_IMPORTED_MODULE_26__["TransformacionesService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__["NgxAudioPlayerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _components_personajes_personajes_component__WEBPACK_IMPORTED_MODULE_14__["PersonajesComponent"], _components_dragon_ball_dragon_ball_component__WEBPACK_IMPORTED_MODULE_15__["DragonBallComponent"], _components_dragon_ball_z_dragon_ball_z_component__WEBPACK_IMPORTED_MODULE_16__["DragonBallZComponent"], _components_dragon_ball_gt_dragon_ball_gt_component__WEBPACK_IMPORTED_MODULE_17__["DragonBallGTComponent"], _components_personaje_personaje_component__WEBPACK_IMPORTED_MODULE_18__["PersonajeComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"], _components_personaje_tarjeta_personaje_tarjeta_component__WEBPACK_IMPORTED_MODULE_20__["PersonajeTarjetaComponent"], _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_21__["PeliculasComponent"], _pipes_peliculadb_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__["PeliculadbImagenPipe"], _components_transformaciones_transformaciones_component__WEBPACK_IMPORTED_MODULE_24__["TransformacionesComponent"], _components_transformacion_tarjeta_transformacion_tarjeta_component__WEBPACK_IMPORTED_MODULE_25__["TransformacionTarjetaComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__["NgxAudioPlayerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _components_personajes_personajes_component__WEBPACK_IMPORTED_MODULE_14__["PersonajesComponent"], _components_dragon_ball_dragon_ball_component__WEBPACK_IMPORTED_MODULE_15__["DragonBallComponent"], _components_dragon_ball_z_dragon_ball_z_component__WEBPACK_IMPORTED_MODULE_16__["DragonBallZComponent"], _components_dragon_ball_gt_dragon_ball_gt_component__WEBPACK_IMPORTED_MODULE_17__["DragonBallGTComponent"], _components_personaje_personaje_component__WEBPACK_IMPORTED_MODULE_18__["PersonajeComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"], _components_personaje_tarjeta_personaje_tarjeta_component__WEBPACK_IMPORTED_MODULE_20__["PersonajeTarjetaComponent"], _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_21__["PeliculasComponent"], _pipes_peliculadb_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__["PeliculadbImagenPipe"], _components_transformaciones_transformaciones_component__WEBPACK_IMPORTED_MODULE_24__["TransformacionesComponent"], _components_transformacion_tarjeta_transformacion_tarjeta_component__WEBPACK_IMPORTED_MODULE_25__["TransformacionTarjetaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__["NgxAudioPlayerModule"]],
          providers: [_services_personajes_service__WEBPACK_IMPORTED_MODULE_5__["PersonajesService"], _services_peliculasdbz_service__WEBPACK_IMPORTED_MODULE_7__["PeliculasdbzService"], _services_peliculasdb_service__WEBPACK_IMPORTED_MODULE_6__["PeliculasdbService"], _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_8__["ImagenesGaleriasService"], _services_transformaciones_service__WEBPACK_IMPORTED_MODULE_26__["TransformacionesService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: APP_ROUTING */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function () {
      return APP_ROUTING;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_personajes_personajes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/personajes/personajes.component */
    "./src/app/components/personajes/personajes.component.ts");
    /* harmony import */


    var _components_dragon_ball_dragon_ball_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dragon-ball/dragon-ball.component */
    "./src/app/components/dragon-ball/dragon-ball.component.ts");
    /* harmony import */


    var _components_dragon_ball_z_dragon_ball_z_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/dragon-ball-z/dragon-ball-z.component */
    "./src/app/components/dragon-ball-z/dragon-ball-z.component.ts");
    /* harmony import */


    var _components_dragon_ball_gt_dragon_ball_gt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/dragon-ball-gt/dragon-ball-gt.component */
    "./src/app/components/dragon-ball-gt/dragon-ball-gt.component.ts");
    /* harmony import */


    var _components_personaje_personaje_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/personaje/personaje.component */
    "./src/app/components/personaje/personaje.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/peliculas/peliculas.component */
    "./src/app/components/peliculas/peliculas.component.ts");
    /* harmony import */


    var _components_transformaciones_transformaciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/transformaciones/transformaciones.component */
    "./src/app/components/transformaciones/transformaciones.component.ts");

    var APP_ROUTES = [{
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'personajes',
      component: _components_personajes_personajes_component__WEBPACK_IMPORTED_MODULE_3__["PersonajesComponent"]
    }, {
      path: 'transformaciones',
      component: _components_transformaciones_transformaciones_component__WEBPACK_IMPORTED_MODULE_10__["TransformacionesComponent"]
    }, {
      path: 'dragonball',
      component: _components_dragon_ball_dragon_ball_component__WEBPACK_IMPORTED_MODULE_4__["DragonBallComponent"]
    }, {
      path: 'dragonball-z',
      component: _components_dragon_ball_z_dragon_ball_z_component__WEBPACK_IMPORTED_MODULE_5__["DragonBallZComponent"]
    }, {
      path: 'dragonball-gt',
      component: _components_dragon_ball_gt_dragon_ball_gt_component__WEBPACK_IMPORTED_MODULE_6__["DragonBallGTComponent"]
    }, {
      path: 'personaje/:id',
      component: _components_personaje_personaje_component__WEBPACK_IMPORTED_MODULE_7__["PersonajeComponent"]
    }, {
      path: 'peliculas',
      component: _components_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_9__["PeliculasComponent"]
    }, {
      path: 'search/:termino',
      component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'home'
    }];

    var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 12,
      vars: 0,
      consts: [["id", "jumboAbout", 1, "jumbotron", "jumbotron-fluid", "fadeIn", "fast"], [1, "container-fluid"], [1, "display-4", "animated", "fadeIn", "text-light", 2, "text-shadow", "0 0 10px black"], [1, "lead", "text-light", 2, "padding-top", "40px"], [2, "background-color", "white", "position", "relative", "bottom", "0"], [1, "center"], ["href", "https://github.com/Lithos-hub"], ["src", "../../../assets/img/github.png", "width", "200px", 2, "display", "block", "margin", "auto", "cursor", "pointer"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Acerca de Dragon Ball App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Esta es una aplicaci\xF3n desarrollada por m\xED desde cero con el objetivo de practicar el manejo de Angular.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA1Espero que la disfrutes!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dragon-ball-gt/dragon-ball-gt.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/dragon-ball-gt/dragon-ball-gt.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DragonBallGTComponent */

  /***/
  function srcAppComponentsDragonBallGtDragonBallGtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragonBallGTComponent", function () {
      return DragonBallGTComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/imagenes-galerias.service */
    "./src/app/services/imagenes-galerias.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-audio-player */
    "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");

    function DragonBallGTComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var imagen_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imagen_r1.imgdbgt, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var DragonBallGTComponent = // tslint:disable-next-line: variable-name
    function DragonBallGTComponent(_imagenesService) {
      _classCallCheck(this, DragonBallGTComponent);

      this._imagenesService = _imagenesService;
      this.msbapAudioUrl = '../../../assets/audio/dragonballgt.mp3';
      this.imagenes = [];
      this.imagenes = this._imagenesService.getImagenes();
      console.log(this.imagenes);
    };

    DragonBallGTComponent.ɵfac = function DragonBallGTComponent_Factory(t) {
      return new (t || DragonBallGTComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__["ImagenesGaleriasService"]));
    };

    DragonBallGTComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DragonBallGTComponent,
      selectors: [["app-dragon-ball-gt"]],
      decls: 20,
      vars: 4,
      consts: [["id", "jumbosPaginas", 1, "animated", "fadeIn", "fast"], [1, "portada"], ["src", "../../../assets/img/dragonballgt-logo.png", 2, "min-width", "30%", "max-width", "40%"], [1, "container"], ["id", "textoSagas", 1, "lead", "text-dark", "font-weight-normal"], [1, "display-4", "text-center"], [1, "container", 2, "padding-bottom", "50px"], [1, "card-columns"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "reproductor"], [3, "audioUrl", "autoPlay", "displayVolumeControls"], [1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"]],
      template: function DragonBallGTComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tras la culminaci\xF3n del manga y de Dragon Ball Z, y ante la negativa del autor a continuar con la historia, Toei Animation produjo una serie original como continuaci\xF3n de Dragon Ball Z con el t\xEDtulo de Dragon Ball GT, dirigida por Osamu Kasai, musicalizada por Akihito Tokunaga, y transmitida por Fuji Television desde el 2 de febrero de 1996 hasta su conclusi\xF3n el 19 de noviembre de 1997, despu\xE9s de un total de 64 episodios emitidos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " El reparto de voces en japon\xE9s cont\xF3 una vez m\xE1s con Nozawa como Gok\u016B y Kusao como Trunks, adem\xE1s de Y\u016Bko Minaguchi como Pan.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Galer\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DragonBallGTComponent_div_17_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-basic-audio-player", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagenes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("audioUrl", ctx.msbapAudioUrl)("autoPlay", true)("displayVolumeControls", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__["MatBasicAudioPlayerComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragonBallGTComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dragon-ball-gt',
          templateUrl: './dragon-ball-gt.component.html'
        }]
      }], function () {
        return [{
          type: _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__["ImagenesGaleriasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dragon-ball-z/dragon-ball-z.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/dragon-ball-z/dragon-ball-z.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DragonBallZComponent */

  /***/
  function srcAppComponentsDragonBallZDragonBallZComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragonBallZComponent", function () {
      return DragonBallZComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/imagenes-galerias.service */
    "./src/app/services/imagenes-galerias.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-audio-player */
    "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");

    function DragonBallZComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var imagen_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imagen_r1.imgdbz, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var DragonBallZComponent = // tslint:disable-next-line: variable-name
    function DragonBallZComponent(_imagenesService) {
      _classCallCheck(this, DragonBallZComponent);

      this._imagenesService = _imagenesService;
      this.msbapAudioUrl = '../../../assets/audio/dragonballz.mp3';
      this.imagenes = [];
      this.imagenes = this._imagenesService.getImagenes();
      console.log(this.imagenes);
    };

    DragonBallZComponent.ɵfac = function DragonBallZComponent_Factory(t) {
      return new (t || DragonBallZComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__["ImagenesGaleriasService"]));
    };

    DragonBallZComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DragonBallZComponent,
      selectors: [["app-dragon-ball-z"]],
      decls: 20,
      vars: 4,
      consts: [["id", "jumbosPaginas", 1, "animated", "fadeIn", "fast"], [1, "portada"], ["src", "../../../assets/img/dragonballz-logo.png", 2, "min-width", "30%", "max-width", "40%"], [1, "container"], ["id", "textoSagas", 1, "lead", "text-dark", "font-weight-normal"], [1, "display-4", "text-center"], [1, "container", 2, "padding-bottom", "50px"], [1, "card-columns"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "reproductor"], [3, "audioUrl", "autoPlay", "displayVolumeControls"], [1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"]],
      template: function DragonBallZComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "La continuaci\xF3n de Dragon Ball que relata las aventuras de Gok\u016B en su etapa adulta se estren\xF3 el 26 de abril de 1989 en Fuji Television. Fue producida tambi\xE9n por Toei Animation y animada por los mismos estudios que la serie predecesora. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nishio volvi\xF3 como director, al igual que Kikuchi como responsable de la composici\xF3n musical.116\u200B Est\xE1 basada en los 26 vol\xFAmenes del manga que no fueron cubiertos por el otro anime. Tuvo un total de 291 episodios, y su transmisi\xF3n concluy\xF3 el 31 de enero de 1996.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Galer\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DragonBallZComponent_div_17_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-basic-audio-player", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagenes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("audioUrl", ctx.msbapAudioUrl)("autoPlay", true)("displayVolumeControls", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__["MatBasicAudioPlayerComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragonBallZComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dragon-ball-z',
          templateUrl: './dragon-ball-z.component.html'
        }]
      }], function () {
        return [{
          type: _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__["ImagenesGaleriasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dragon-ball/dragon-ball.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/dragon-ball/dragon-ball.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DragonBallComponent */

  /***/
  function srcAppComponentsDragonBallDragonBallComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragonBallComponent", function () {
      return DragonBallComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/imagenes-galerias.service */
    "./src/app/services/imagenes-galerias.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-audio-player */
    "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");

    function DragonBallComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var imagen_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imagen_r1.imgdb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var DragonBallComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: variable-name
      function DragonBallComponent(_imagenesService) {
        _classCallCheck(this, DragonBallComponent);

        this._imagenesService = _imagenesService;
        this.msbapAudioUrl = '../../../assets/audio/dragonball.mp3';
        this.imagenes = [];
        this.imagenes = this._imagenesService.getImagenes();
        console.log(this.imagenes);
      }

      _createClass(DragonBallComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DragonBallComponent;
    }();

    DragonBallComponent.ɵfac = function DragonBallComponent_Factory(t) {
      return new (t || DragonBallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__["ImagenesGaleriasService"]));
    };

    DragonBallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DragonBallComponent,
      selectors: [["app-dragon-ball"]],
      decls: 20,
      vars: 4,
      consts: [["id", "jumbosPaginas", 1, "animated", "fadeIn", "fast"], [1, "portada"], ["src", "../../../assets/img/dragonball-logo.png", 2, "min-width", "30%", "max-width", "40%"], [1, "container"], ["id", "textoSagas", 1, "lead", "text-dark", "font-weight-normal"], [1, "display-4", "text-center"], [1, "container", 2, "padding-bottom", "50px"], [1, "card-columns"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "reproductor"], [3, "audioUrl", "autoPlay", "displayVolumeControls"], [1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"]],
      template: function DragonBallComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toei Animation produjo la adaptaci\xF3n al anime de Dragon Ball, cuya animaci\xF3n estuvo a cargo de Studio Live, Astroimpact, Inc, Bird Studio y Sh\u016Beisha, dirigida por Daisuke Nishio y Minoru Okazaki y musicalizada por Shunsuke Kikuchi. Varios de los integrantes del equipo de producci\xF3n hab\xEDan colaborado antes con Toriyama en Dr. Slump.\u200B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " El mangaka colabor\xF3 en la producci\xF3n como asistente en el dise\xF1o e iluminaci\xF3n de los personajes. Fuji Television transmiti\xF3 originalmente el anime de 153 episodios en total, basados en la primera parte del manga que narra las aventuras de Gok\u016B en su infancia, desde el 26 de febrero de 1986 hasta el 19 de abril de 1989.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Galer\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DragonBallComponent_div_17_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-basic-audio-player", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagenes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("audioUrl", ctx.msbapAudioUrl)("autoPlay", true)("displayVolumeControls", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_3__["MatBasicAudioPlayerComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragonBallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dragon-ball',
          templateUrl: './dragon-ball.component.html'
        }]
      }], function () {
        return [{
          type: _services_imagenes_galerias_service__WEBPACK_IMPORTED_MODULE_1__["ImagenesGaleriasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 34,
      vars: 0,
      consts: [["id", "jumboHome", 1, "jumbotron", "jumbotron-fluid", "container-fluid", "animated", "fadeIn", "fast"], [1, "container"], [1, "display-3", "text-light", 2, "text-shadow", "0 0 10px black"], [1, "lead", "text-light", 2, "text-shadow", "0 0 10px black"], [1, "container", "animated", "fadeIn"], [1, "row"], [1, "col"], [1, "card-group"], [1, "card"], ["href", "dragonball"], ["src", "assets/img/dragonball-wall.jpg ", "id", "wall", 1, "card-img-top"], [1, "card-body"], ["src", "assets/img/dragonball-logo.png ", "id", "logos", "alt", "... ", 1, "card-img-top"], [1, "card-text", "text-justify"], ["href", "dragonball-z"], ["src", "assets/img/dragonballz-wall.jpg ", "id", "wall", "alt", "... ", 1, "card-img-top"], ["src", "assets/img/dragonballz-logo.png ", "id", "logos", "alt", "... ", 1, "card-img-top", 2, "padding-top", "40px"], ["href", "dragonball-gt"], ["src", "assets/img/dragonballgt-wall.jpg ", "id", "wall", "alt", "... ", 1, "card-img-top"], ["src", "assets/img/dragonballgt-logo.png ", "id", "logos", "alt", "... ", 1, "card-img-top", 2, "padding-bottom", "5px"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dragon Ball App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Una enciclopedia visual del m\xEDtico anime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "La primera saga del manga y anime donde se narran las aventuras de un peque\xF1o Goku, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad. Conforme transcurre la trama, conoce a otros personajes que le ayudan en este prop\xF3sito. El nombre de la serie proviene de unas esferas m\xE1gicas que al ser reunidas invocan a un drag\xF3n que concede deseos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Continuando con la adaptaci\xF3n del manga, la serie narra la aventura de la vida adulta de Son Goku quien, con sus compa\xF1eros defiende la tierra contra varios villanos. Mientras que la serie original, Dragon Ball, narra la historia de la infancia hasta la adultez, Dragon Ball Z es la continuaci\xF3n de la vida adulta que lleva Goku, paralelamente narra la madurez de su hijo, Gohan.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Todo comienza 5 a\xF1os despu\xE9s de que Son Goku se haya ido a entrenar con Oob. Pilaf logr\xF3 encontrar las Esferas del Drag\xF3n Definitivas (cuya principal caracter\xEDstica es que tienen sus respectivas estrellas de color negro dibujadas en su superficie) y accidentalmente convierte a Son Goku en un ni\xF1o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/peliculas/peliculas.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/peliculas/peliculas.component.ts ***!
    \*************************************************************/

  /*! exports provided: PeliculasComponent */

  /***/
  function srcAppComponentsPeliculasPeliculasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculasComponent", function () {
      return PeliculasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_peliculasdbz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/peliculasdbz.service */
    "./src/app/services/peliculasdbz.service.ts");
    /* harmony import */


    var _services_peliculasdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/peliculasdb.service */
    "./src/app/services/peliculasdb.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PeliculasComponent_div_6_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var peliculas_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.url + peliculas_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peliculas_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peliculas_r3.overview);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A\xF1o de lanzamiento: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, peliculas_r3.release_date, "yyyy"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Puntuaci\xF3n: ", peliculas_r3.vote_average, " / 10 ");
      }
    }

    function PeliculasComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dragon Ball ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PeliculasComponent_div_6_div_7_Template, 19, 8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.peliculasdb);
      }
    }

    function PeliculasComponent_div_7_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var peliculas_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.url + peliculas_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peliculas_r5.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peliculas_r5.overview);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A\xF1o de lanzamiento: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, peliculas_r5.release_date, "yyyy"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Puntuaci\xF3n: ", peliculas_r5.vote_average, " / 10 ");
      }
    }

    function PeliculasComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dragon Ball Z / GT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PeliculasComponent_div_7_div_7_Template, 19, 8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.peliculasz);
      }
    }

    var PeliculasComponent = /*#__PURE__*/function () {
      function PeliculasComponent(_ps, _pdbs) {
        var _this = this;

        _classCallCheck(this, PeliculasComponent);

        this._ps = _ps;
        this._pdbs = _pdbs;
        this.url = 'https://image.tmdb.org/t/p/w500';
        this.peliculasdb = [];
        this.peliculasz = [];

        this._ps.getPeliculasZ().subscribe(function (data) {
          console.log(data.parts);
          _this.peliculasz = data.parts;
        });

        this._pdbs.getPeliculasDB().subscribe(function (data) {
          console.log(data.parts);
          _this.peliculasdb = data.parts;
        });
      }

      _createClass(PeliculasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PeliculasComponent;
    }();

    PeliculasComponent.ɵfac = function PeliculasComponent_Factory(t) {
      return new (t || PeliculasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculasdbz_service__WEBPACK_IMPORTED_MODULE_1__["PeliculasdbzService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculasdb_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasdbService"]));
    };

    PeliculasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PeliculasComponent,
      selectors: [["app-peliculas"]],
      decls: 8,
      vars: 2,
      consts: [[1, "jumbotron", "jumbotron-fluid", "animated", "fadeIn", "fast", 2, "margin-bottom", "50px"], [1, "text-dark", "text-center", 2, "padding-top", "10px", "margin", "0 auto"], ["src", "assets/img/dmdb.png ", 1, "card-img", 2, "height", "50px", "width", "auto", "border-radius", "10px"], ["class", "container", 4, "ngIf"], ["class", "container ", 4, "ngIf"], [1, "container"], [1, "text-center"], [1, "display-4"], ["src", "assets/img/bola-dragon.png", "width", "50px", "height", "auto", 2, "padding-bottom", "10px"], ["src", "assets/img/radar.png", "width", "60px", "height", "auto", 2, "padding-bottom", "10px"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "card", "mb-3"], [1, "row", "no-gutters"], [1, "col-md-3"], [1, "card-img", 2, "height", "350px", "width", "auto", 3, "src"], [1, "col-md-9"], [1, "card-body"], [1, "card-title"], [1, "card-text", "text-justify"], [1, "card-text"], [1, "text-muted"], [1, "lead"], ["src", "assets/img/bola-dragon.png ", "width", "50px ", "height", "auto ", 2, "padding-bottom", "10px"], ["src", "assets/img/radar.png ", "width", "60px ", "height", "auto ", 2, "padding-bottom", "10px"]],
      template: function PeliculasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pel\xEDculas y OVAs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PeliculasComponent_div_6_Template, 8, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PeliculasComponent_div_7_Template, 8, 1, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.peliculasdb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.peliculasz);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-peliculas',
          templateUrl: './peliculas.component.html'
        }]
      }], function () {
        return [{
          type: _services_peliculasdbz_service__WEBPACK_IMPORTED_MODULE_1__["PeliculasdbzService"]
        }, {
          type: _services_peliculasdb_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasdbService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/personaje-tarjeta/personaje-tarjeta.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/personaje-tarjeta/personaje-tarjeta.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PersonajeTarjetaComponent */

  /***/
  function srcAppComponentsPersonajeTarjetaPersonajeTarjetaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonajeTarjetaComponent", function () {
      return PersonajeTarjetaComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PersonajeTarjetaComponent = /*#__PURE__*/function () {
      function PersonajeTarjetaComponent(router) {
        _classCallCheck(this, PersonajeTarjetaComponent);

        this.router = router;
        this.personaje = {};
        this.personajeSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PersonajeTarjetaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "verPersonaje",
        value: function verPersonaje() {
          this.router.navigate(['/personaje', this.index]);
        }
      }]);

      return PersonajeTarjetaComponent;
    }();

    PersonajeTarjetaComponent.ɵfac = function PersonajeTarjetaComponent_Factory(t) {
      return new (t || PersonajeTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    PersonajeTarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonajeTarjetaComponent,
      selectors: [["app-personaje-tarjeta"]],
      inputs: {
        personaje: "personaje",
        index: "index"
      },
      outputs: {
        personajeSeleccionado: "personajeSeleccionado"
      },
      decls: 19,
      vars: 11,
      consts: [["id", "tarjetaPersonaje", 1, "card"], [1, "container", 2, "background-color", "#343A40"], ["width", "3em", "height", "3em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", "id", "etiquetaPersonaje", 1, "bi", "bi-diamond-half"], ["fill-rule", "evenodd", "d", "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z"], ["id", "indicaPersonaje"], ["id", "imagenPersonaje", 1, "card-img-top", 3, "src", "alt", "click"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text", "text-justify"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-block", "text-dark", 3, "click"]],
      template: function PersonajeTarjetaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Personaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonajeTarjetaComponent_Template_img_click_6_listener() {
            return ctx.verPersonaje();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonajeTarjetaComponent_Template_button_click_17_listener() {
            return ctx.verPersonaje();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ver m\xE1s...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.personaje.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.personaje.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.personaje.nombre), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.personaje.saga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 7, ctx.personaje.bio, 0, 200), "... ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonajeTarjetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-personaje-tarjeta',
          templateUrl: './personaje-tarjeta.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        personaje: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        personajeSeleccionado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/personaje/personaje.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/personaje/personaje.component.ts ***!
    \*************************************************************/

  /*! exports provided: PersonajeComponent */

  /***/
  function srcAppComponentsPersonajePersonajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonajeComponent", function () {
      return PersonajeComponent;
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


    var src_app_services_personajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/personajes.service */
    "./src/app/services/personajes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PersonajeComponent = function PersonajeComponent(activatedRoute, // tslint:disable-next-line: variable-name
    _personajesService) {
      var _this2 = this;

      _classCallCheck(this, PersonajeComponent);

      this.activatedRoute = activatedRoute;
      this._personajesService = _personajesService;
      this.personaje = {};
      this.activatedRoute.params.subscribe(function (params) {
        console.log(params.id);
        _this2.personaje = _this2._personajesService.getPersonaje(params.id);
      });
    };

    PersonajeComponent.ɵfac = function PersonajeComponent_Factory(t) {
      return new (t || PersonajeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_personajes_service__WEBPACK_IMPORTED_MODULE_2__["PersonajesService"]));
    };

    PersonajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonajeComponent,
      selectors: [["app-personaje"]],
      decls: 20,
      vars: 6,
      consts: [[1, "container", "animated", "fadeIn", "fast", 2, "padding-top", "50px", "padding-bottom", "50px"], [1, "text-center", 2, "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"], [1, "container"], [1, "row", "justify-content-md-center"], [1, "col-md-6"], [1, "img-fluid", 2, "border", "1px solid #dd9c33", "display", "block", "margin", "auto", "max-height", "550px", 3, "src"], [1, "col-md-6", "text-justify", 2, "width", "150px"], [1, "container-fluid", "text-center"], ["href", "personajes", 1, "btn", "btn-outline-danger", 2, "text-align", "center", "margin", "auto", "width", "200px"]],
      template: function PersonajeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Regresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.personaje.nombre), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.personaje.nombrejapones, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.personaje.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.personaje.bio, " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-personaje',
          templateUrl: './personaje.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_personajes_service__WEBPACK_IMPORTED_MODULE_2__["PersonajesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/personajes/personajes.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/personajes/personajes.component.ts ***!
    \***************************************************************/

  /*! exports provided: PersonajesComponent */

  /***/
  function srcAppComponentsPersonajesPersonajesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonajesComponent", function () {
      return PersonajesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_personajes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/personajes.service */
    "./src/app/services/personajes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _personaje_tarjeta_personaje_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../personaje-tarjeta/personaje-tarjeta.component */
    "./src/app/components/personaje-tarjeta/personaje-tarjeta.component.ts");

    function PersonajesComponent_app_personaje_tarjeta_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-personaje-tarjeta", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("personajeSeleccionado", function PersonajesComponent_app_personaje_tarjeta_8_Template_app_personaje_tarjeta_personajeSeleccionado_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.verPersonaje($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var personaje_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("personaje", personaje_r1)("index", i_r2);
      }
    }

    var PersonajesComponent = /*#__PURE__*/function () {
      function PersonajesComponent(_personajesService, router) {
        _classCallCheck(this, PersonajesComponent);

        this._personajesService = _personajesService;
        this.router = router;
        this.personajes = [];
      }

      _createClass(PersonajesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.personajes = this._personajesService.getPersonajes();
        }
      }, {
        key: "verPersonaje",
        value: function verPersonaje(idx) {
          this.router.navigate(['/personaje', idx]);
        }
      }]);

      return PersonajesComponent;
    }();

    PersonajesComponent.ɵfac = function PersonajesComponent_Factory(t) {
      return new (t || PersonajesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_personajes_service__WEBPACK_IMPORTED_MODULE_1__["PersonajesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PersonajesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonajesComponent,
      selectors: [["app-personajes"]],
      decls: 9,
      vars: 1,
      consts: [[1, "jumbotron", "jumbotron-fluid", "animated", "fadeIn", "fast", 2, "margin-bottom", "20px"], [1, "text-dark", "text-center", 2, "padding-top", "10px", "padding-bottom", "10px"], [1, "container"], [1, "card-columns", "animated", "fadeIn", "fast"], [3, "personaje", "index", "personajeSeleccionado", 4, "ngFor", "ngForOf"], [3, "personaje", "index", "personajeSeleccionado"]],
      template: function PersonajesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Personajes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dragon Ball / Z / GT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PersonajesComponent_app_personaje_tarjeta_8_Template, 1, 2, "app-personaje-tarjeta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personajes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _personaje_tarjeta_personaje_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__["PersonajeTarjetaComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonajesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-personajes',
          templateUrl: './personajes.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _services_personajes_service__WEBPACK_IMPORTED_MODULE_1__["PersonajesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
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


    var src_app_services_personajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/personajes.service */
    "./src/app/services/personajes.service.ts");
    /* harmony import */


    var _services_transformaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/transformaciones.service */
    "./src/app/services/transformaciones.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _personaje_tarjeta_personaje_tarjeta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../personaje-tarjeta/personaje-tarjeta.component */
    "./src/app/components/personaje-tarjeta/personaje-tarjeta.component.ts");
    /* harmony import */


    var _transformacion_tarjeta_transformacion_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../transformacion-tarjeta/transformacion-tarjeta.component */
    "./src/app/components/transformacion-tarjeta/transformacion-tarjeta.component.ts");

    function SearchComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Lo sentimos. Ha sido imposible encontrar resultados con: \"", ctx_r0.termino, "\" ");
      }
    }

    function SearchComponent_app_personaje_tarjeta_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-personaje-tarjeta", 12);
      }

      if (rf & 2) {
        var personaje_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("personaje", personaje_r3)("index", personaje_r3.idx);
      }
    }

    function SearchComponent_app_transformacion_tarjeta_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-transformacion-tarjeta", 13);
      }

      if (rf & 2) {
        var transformacion_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transformacion", transformacion_r4)("index", transformacion_r4.idx);
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(activatedRoute, // tslint:disable-next-line: variable-name
      _personajesService, _transformacionesService, router) {
        _classCallCheck(this, SearchComponent);

        this.activatedRoute = activatedRoute;
        this._personajesService = _personajesService;
        this._transformacionesService = _transformacionesService;
        this.router = router;
        this.personaje = {};
        this.transformacion = {};
        this.personajes = [];
        this.transformaciones = [];
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.activatedRoute.params.subscribe(function (params) {
            _this3.termino = params.termino;
            _this3.personajes = _this3._personajesService.buscarPersonajes(params.termino);
            console.log(_this3.personajes);
          });
          this.activatedRoute.params.subscribe(function (params) {
            _this3.termino = params.termino;
            _this3.transformaciones = _this3._transformacionesService.buscarTransformaciones(params.termino);
            console.log(_this3.transformaciones);
          });
        }
      }, {
        key: "verPersonaje",
        value: function verPersonaje() {
          console.log(this.index);
          this.router.navigate(['/personaje', this.index]);
        }
      }, {
        key: "verTransformacion",
        value: function verTransformacion() {
          console.log(this.index);
          this.router.navigate(['/transformacion', this.index]);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_personajes_service__WEBPACK_IMPORTED_MODULE_2__["PersonajesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transformaciones_service__WEBPACK_IMPORTED_MODULE_3__["TransformacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      inputs: {
        personaje: "personaje",
        transformacion: "transformacion",
        index: "index"
      },
      decls: 16,
      vars: 4,
      consts: [[1, "jumbotron", "jumbotron-fluid", "animated", "fadeIn", "fast", 2, "margin-bottom", "50px"], [1, "text-dark", "text-center", 2, "padding-top", "10px", "padding-bottom", "10px", "margin", "0 auto"], ["row", ""], [1, "col-md-12"], ["class", "alert alert-danger animated fadeIn fast text-center", "style", "width: 400px; margin: auto; margin-bottom: 50px;", "role", "alert", 4, "ngIf"], [1, "container"], [1, "card-columns", "animated", "fadeIn", "fast"], [3, "personaje", "index", 4, "ngFor", "ngForOf"], [3, "transformacion", "index", 4, "ngFor", "ngForOf"], [1, "container-fluid", "text-center"], ["href", "personajes", 1, "btn", "btn-outline-danger", 2, "text-align", "center", "margin", "auto", "width", "200px"], ["role", "alert", 1, "alert", "alert-danger", "animated", "fadeIn", "fast", "text-center", 2, "width", "400px", "margin", "auto", "margin-bottom", "50px"], [3, "personaje", "index"], [3, "transformacion", "index"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscando...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_app_personaje_tarjeta_11_Template, 1, 2, "app-personaje-tarjeta", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_app_transformacion_tarjeta_12_Template, 1, 2, "app-transformacion-tarjeta", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Regresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \" ", ctx.termino, " \"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personajes.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personajes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transformaciones);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _personaje_tarjeta_personaje_tarjeta_component__WEBPACK_IMPORTED_MODULE_5__["PersonajeTarjetaComponent"], _transformacion_tarjeta_transformacion_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__["TransformacionTarjetaComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_personajes_service__WEBPACK_IMPORTED_MODULE_2__["PersonajesService"]
        }, {
          type: _services_transformaciones_service__WEBPACK_IMPORTED_MODULE_3__["TransformacionesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        personaje: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transformacion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["home"];
    };

    var _c1 = function _c1() {
      return ["personajes"];
    };

    var _c2 = function _c2() {
      return ["transformaciones"];
    };

    var _c3 = function _c3() {
      return ["dragonball"];
    };

    var _c4 = function _c4() {
      return ["dragonball-z"];
    };

    var _c5 = function _c5() {
      return ["dragonball-gt"];
    };

    var _c6 = function _c6() {
      return ["peliculas"];
    };

    var _c7 = function _c7() {
      return ["about"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.mostrar = true;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscarPersonaje",
        value: function buscarPersonaje(termino) {
          this.router.navigate(['/search', termino]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 39,
      vars: 16,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["src", "assets\\img\\dragonIcon.png", "width", "40", "height", "40", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "text", "placeholder", "Buscar personaje", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "keyup.enter"], ["buscarTexto", ""], [1, "btn", "btn-outline-warning", "my-2", "my-sm-0", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Personajes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Transformaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sagas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dragon Ball");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dragon Ball Z ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dragon Ball GT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pel\xEDculas / OVAs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Acerca de...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return ctx.buscarPersonaje(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return ctx.buscarPersonaje(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html'
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
  "./src/app/components/transformacion-tarjeta/transformacion-tarjeta.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/transformacion-tarjeta/transformacion-tarjeta.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: TransformacionTarjetaComponent */

  /***/
  function srcAppComponentsTransformacionTarjetaTransformacionTarjetaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransformacionTarjetaComponent", function () {
      return TransformacionTarjetaComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TransformacionTarjetaComponent = /*#__PURE__*/function () {
      function TransformacionTarjetaComponent(router) {
        _classCallCheck(this, TransformacionTarjetaComponent);

        this.router = router;
        this.transformacion = {};
        this.personajeSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TransformacionTarjetaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "verPersonaje",
        value: function verPersonaje() {
          this.router.navigate(['/transformaciones', this.index]);
        }
      }]);

      return TransformacionTarjetaComponent;
    }();

    TransformacionTarjetaComponent.ɵfac = function TransformacionTarjetaComponent_Factory(t) {
      return new (t || TransformacionTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    TransformacionTarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransformacionTarjetaComponent,
      selectors: [["app-transformacion-tarjeta"]],
      inputs: {
        transformacion: "transformacion",
        index: "index"
      },
      outputs: {
        personajeSeleccionado: "personajeSeleccionado"
      },
      decls: 14,
      vars: 6,
      consts: [["id", "tarjetaTransformacion", 1, "card"], ["width", "3em", "height", "3em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", "id", "etiquetaTransformacion", 1, "bi", "bi-diamond-half"], ["fill-rule", "evenodd", "d", "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z"], ["id", "indicaTransformacion"], ["id", "imagenTransformacion", 1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title", "text-center"]],
      template: function TransformacionTarjetaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transformaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.transformacion.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.transformacion.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.transformacion.nombre), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.transformacion.saga);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformacionTarjetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-transformacion-tarjeta',
          templateUrl: './transformacion-tarjeta.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        transformacion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        personajeSeleccionado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/transformaciones/transformaciones.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/transformaciones/transformaciones.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TransformacionesComponent */

  /***/
  function srcAppComponentsTransformacionesTransformacionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransformacionesComponent", function () {
      return TransformacionesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_transformaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/transformaciones.service */
    "./src/app/services/transformaciones.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _transformacion_tarjeta_transformacion_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../transformacion-tarjeta/transformacion-tarjeta.component */
    "./src/app/components/transformacion-tarjeta/transformacion-tarjeta.component.ts");

    function TransformacionesComponent_app_transformacion_tarjeta_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-transformacion-tarjeta", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("personajeSeleccionado", function TransformacionesComponent_app_transformacion_tarjeta_8_Template_app_transformacion_tarjeta_personajeSeleccionado_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.verTransformacion($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transformacion_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transformacion", transformacion_r1)("index", i_r2);
      }
    }

    var TransformacionesComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: variable-name
      function TransformacionesComponent(_transformacionesService, router) {
        _classCallCheck(this, TransformacionesComponent);

        this._transformacionesService = _transformacionesService;
        this.router = router;
        this.transformaciones = [];
      }

      _createClass(TransformacionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.transformaciones = this._transformacionesService.getTransformaciones();
        }
      }, {
        key: "verTransformacion",
        value: function verTransformacion(idx) {
          this.router.navigate(['/transformacion', idx]);
        }
      }]);

      return TransformacionesComponent;
    }();

    TransformacionesComponent.ɵfac = function TransformacionesComponent_Factory(t) {
      return new (t || TransformacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transformaciones_service__WEBPACK_IMPORTED_MODULE_1__["TransformacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TransformacionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransformacionesComponent,
      selectors: [["app-transformaciones"]],
      decls: 9,
      vars: 1,
      consts: [[1, "jumbotron", "jumbotron-fluid", "animated", "fadeIn", "fast", 2, "margin-bottom", "50px"], [1, "text-dark", "text-center", 2, "padding-top", "10px", "padding-bottom", "10px", "margin", "0 auto"], [1, "container"], [1, "card-columns", "animated", "fadeIn", "fast"], [3, "transformacion", "index", "personajeSeleccionado", 4, "ngFor", "ngForOf"], [3, "transformacion", "index", "personajeSeleccionado"]],
      template: function TransformacionesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transformaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dragon Ball / Z / GT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TransformacionesComponent_app_transformacion_tarjeta_8_Template, 1, 2, "app-transformacion-tarjeta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transformaciones);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _transformacion_tarjeta_transformacion_tarjeta_component__WEBPACK_IMPORTED_MODULE_4__["TransformacionTarjetaComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformacionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-transformaciones',
          templateUrl: './transformaciones.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _services_transformaciones_service__WEBPACK_IMPORTED_MODULE_1__["TransformacionesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/peliculadb-imagen.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/peliculadb-imagen.pipe.ts ***!
    \*************************************************/

  /*! exports provided: PeliculadbImagenPipe */

  /***/
  function srcAppPipesPeliculadbImagenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculadbImagenPipe", function () {
      return PeliculadbImagenPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PeliculadbImagenPipe = /*#__PURE__*/function () {
      function PeliculadbImagenPipe() {
        _classCallCheck(this, PeliculadbImagenPipe);
      }

      _createClass(PeliculadbImagenPipe, [{
        key: "transform",
        value: function transform(pelicula) {
          var url = 'https://image.tmdb.org/t/p/w500';

          if (pelicula.poster_path) {
            return url + pelicula.poster_path;
          } else {
            if (pelicula.backdrop_path) {
              return url + pelicula.backdrop_path;
            }
          }
        }
      }]);

      return PeliculadbImagenPipe;
    }();

    PeliculadbImagenPipe.ɵfac = function PeliculadbImagenPipe_Factory(t) {
      return new (t || PeliculadbImagenPipe)();
    };

    PeliculadbImagenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "peliculadbImagen",
      type: PeliculadbImagenPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculadbImagenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'peliculadbImagen'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/imagenes-galerias.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/imagenes-galerias.service.ts ***!
    \*******************************************************/

  /*! exports provided: ImagenesGaleriasService */

  /***/
  function srcAppServicesImagenesGaleriasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagenesGaleriasService", function () {
      return ImagenesGaleriasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImagenesGaleriasService = /*#__PURE__*/function () {
      function ImagenesGaleriasService() {
        _classCallCheck(this, ImagenesGaleriasService);

        this.imagenes = [{
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/1/11/Dragon_ball021.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/1/10/EveryoneInDragonBallZ.jpg',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/e/e6/GTChara2_%28PerfectFiles%29.png'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/b/be/Tumblr_lyhlnyJolO1qd3uyxo1_500.png',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/8/85/GohanDebutNV.png',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/8/87/Mouma%28Tori%29.png'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/6/69/Dragon_ball006.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/9/99/Goku_zzzzzzz.jpg',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/8/80/Final_shot.jpg'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/8/8b/Dragon_ball007.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/8/82/Vegetaunderwater2.jpg',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/5/5f/GokuSSJGT.png'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/b/b3/Dragon_ball002.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/8/8a/KidBuuEvil01.png',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/b/b5/Gtssj2.jpg'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/2/27/Dragon_ball001.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/1/1d/Battle_Cell_Vs_Gohan.jpg',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/6/68/Gogeta_BBK_dbgtepisode60_309.jpg'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/3/30/Dragon_ball003.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/2/20/Dragon_ball_z_3.jpg',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/2/27/Vlcsnap-2017-01-27-01h47m24s433.png'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/b/b3/Dragon_ball004.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/7/7a/DragonBallZ.png',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/4/4d/DragonballGT-Episode064_240.jpg'
        }, {
          imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/3/3b/Dragon_ball028.jpg',
          imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/d/d1/SSVegito.Ep.270.png',
          imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/d/d9/Hidden_Danger_-_Baby.PNG'
        }];
      }

      _createClass(ImagenesGaleriasService, [{
        key: "getImagenes",
        value: function getImagenes() {
          return this.imagenes;
        }
      }]);

      return ImagenesGaleriasService;
    }();

    ImagenesGaleriasService.ɵfac = function ImagenesGaleriasService_Factory(t) {
      return new (t || ImagenesGaleriasService)();
    };

    ImagenesGaleriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImagenesGaleriasService,
      factory: ImagenesGaleriasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagenesGaleriasService, [{
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
  "./src/app/services/peliculasdb.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/peliculasdb.service.ts ***!
    \*************************************************/

  /*! exports provided: PeliculasdbService */

  /***/
  function srcAppServicesPeliculasdbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculasdbService", function () {
      return PeliculasdbService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // SERVICIO DE PELICULAS DRAGON BALL


    var PeliculasdbService = /*#__PURE__*/function () {
      function PeliculasdbService(http) {
        _classCallCheck(this, PeliculasdbService);

        this.http = http;
        this.apikey = "c9a3e87b703c630c13d5ea61ef62c7b6";
        this.urlMoviedb = "https://api.themoviedb.org/3";
      }

      _createClass(PeliculasdbService, [{
        key: "getPeliculasDB",
        value: function getPeliculasDB() {
          var url2 = "".concat(this.urlMoviedb, "/collection/386410?&api_key=").concat(this.apikey, "&language=es");
          return this.http.jsonp(url2, 'callback=JSON_CALLBACK');
        }
      }]);

      return PeliculasdbService;
    }();

    PeliculasdbService.ɵfac = function PeliculasdbService_Factory(t) {
      return new (t || PeliculasdbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PeliculasdbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PeliculasdbService,
      factory: PeliculasdbService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasdbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/peliculasdbz.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/peliculasdbz.service.ts ***!
    \**************************************************/

  /*! exports provided: PeliculasdbzService */

  /***/
  function srcAppServicesPeliculasdbzServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculasdbzService", function () {
      return PeliculasdbzService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // SERVICIO DE PELICULAS DRAGON BALL Z


    var PeliculasdbzService = /*#__PURE__*/function () {
      function PeliculasdbzService(http) {
        _classCallCheck(this, PeliculasdbzService);

        this.http = http;
        this.apikey = "c9a3e87b703c630c13d5ea61ef62c7b6";
        this.urlMoviedb = "https://api.themoviedb.org/3";
      }

      _createClass(PeliculasdbzService, [{
        key: "getPeliculasZ",
        value: function getPeliculasZ() {
          var url = "".concat(this.urlMoviedb, "/collection/425164?&api_key=").concat(this.apikey, "&language=es");
          return this.http.jsonp(url, 'callback=JSON_CALLBACK');
        }
      }]);

      return PeliculasdbzService;
    }();

    PeliculasdbzService.ɵfac = function PeliculasdbzService_Factory(t) {
      return new (t || PeliculasdbzService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PeliculasdbzService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PeliculasdbzService,
      factory: PeliculasdbzService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasdbzService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/personajes.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/personajes.service.ts ***!
    \************************************************/

  /*! exports provided: PersonajesService */

  /***/
  function srcAppServicesPersonajesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonajesService", function () {
      return PersonajesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PersonajesService = /*#__PURE__*/function () {
      function PersonajesService() {
        _classCallCheck(this, PersonajesService);

        this.personajes = [{
          nombre: 'Goku',
          nombrejapones: '孫そん悟ご空くう',
          bio: 'Originalmente fue enviado a la Tierra con la misión de conquistarla. Sin embargo, el caer por un barranco recibió un brutal golpe que casi lo mata. Este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freezer. Más tarde, Kacarrot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.',
          img: 'assets/img/goku.png',
          saga: ''
        }, {
          nombre: 'Vegeta',
          nombrejapones: 'ベジータ四世',
          bio: 'A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, más adelante decide rebelarse ante el Imperio de Freezer y se vuelve un aliado clave para los Guerreros Z, a tal punto que con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar junto a ellos contra las inminentes amenazas. Él, junto a Piccolo, es de los antiguos enemigos de Son Goku que ha evolucionando de ser un villano, a antihéroe, y finalmente a un héroe a lo largo del transcurso de la historia llegando a convertirse en el deuteragonista de la serie.',
          img: 'assets/img/vegeta.png',
          saga: ''
        }, {
          nombre: 'Son Gohanda',
          nombrejapones: '孫そん悟ご飯はん',
          bio: 'En los principios de Dragon Ball Z, Gohan tenía el pelo largo por atrás, y usaba un sombrero rojo que tenía la esfera del dragón de cuatro estrellas, junto con una túnica amarilla con el Kanji Son (孫) estampada por enfrente, un vestido de una sola pieza de color verde cuyas mangas son de color blanco, y zapatos idénticos a los de su padre. Luego, durante su entrenamiento con Piccolo, Gohan usaba un traje parecido al de Goku, con la diferencia de que tiene el Kanji "Ma" (魔; demonio, insignia de Piccolo) en lugar del símbolo de la tortuga y una espada, hasta que finalmente fue cambiado por un traje similar al de Piccolo.',
          img: 'assets/img/gohan-child1.png',
          saga: '(Saga Saiyans)'
        }, {
          nombre: 'Son Gohanda',
          nombrejapones: '孫そん悟ご飯はん',
          bio: 'En los principios de Dragon Ball Z, Gohan tenía el pelo largo por atrás, y usaba un sombrero rojo que tenía la esfera del dragón de cuatro estrellas, junto con una túnica amarilla con el Kanji Son (孫) estampada por enfrente, un vestido de una sola pieza de color verde cuyas mangas son de color blanco, y zapatos idénticos a los de su padre. Luego, durante su entrenamiento con Piccolo, Gohan usaba un traje parecido al de Goku, con la diferencia de que tiene el Kanji "Ma" (魔; demonio, insignia de Piccolo) en lugar del símbolo de la tortuga y una espada, hasta que finalmente fue cambiado por un traje similar al de Piccolo.',
          img: 'assets/img/gohan-child2.png',
          saga: '(Saga Freezer)'
        }, {
          nombre: 'Krillin',
          nombrejapones: 'クリリン',
          bio: 'Es valiente y lleno de recursos, junto con Yamcha, se adaptó a una vida relativamente mas normal que muchos de sus amigos, buscando mujeres en su vida. Está entre los seres humanos más "normales" de sus compañeros, ya que puede ser visto usando ropa casual en los momentos de paz, además de su típico Uniforme de la Escuela Tortuga, además de participar en otras actividades cotidianas y posteriormente conseguirse un trabajo. Como el mejor amigo de Goku, Kurilín fue uno de los pocos en conservar un rol destacado durante la historia, incluso personajes como Yamcha, Tenshinhan, Chaoz, Yajirobe, entre otros, quedaron atrás. En general, Kurilín es un personaje muy valorado en todo Dragon Ball: poderoso, leal y audaz; siendo el segundo personaje con mayor de apariciones en el manga. Asimismo, es el Artista Marcial Terrícola más versátil y experimentando, con un gran arsenal de técnicas tan amplias como los saiyanos, recurriendo a estrategias que pueden llevarlo a vencer a Son Gohan de adulto en forma base durante un entrenamiento.',
          img: 'assets/img/krillin1.png',
          saga: '(Saga Saiyans / Freezer)'
        }, {
          nombre: 'Krillin',
          nombrejapones: 'クリリン',
          bio: 'En la saga de Boo, a Krillin le crece el pelo negro y lleva varios trajes informales. Cuando se casó con C-18, lleva una camisa naranja de manga corta y botones sueltos, pantalones cortos blancos y sandalias rojas. En el 25º Torneo Mundial de Artes Marciales, aparece por primera vez con un chaleco naranja con una camiseta blanca de manga corta, pantalones cortos de mezclilla verdes con un cinturón marrón en la cintura, calcetines blancos y zapatos marrones.',
          img: 'assets/img/krillin2.png',
          saga: '(Saga Boo)'
        }, {
          nombre: 'Trunks del futuro',
          nombrejapones: '未来のトランクス',
          bio: 'Este Trunks jamás conoció a su padre, combinado con el hecho de que las desgracias y consecuencias de todo lo que vivió en su futuro apocalíptico, padece de trastorno por estrés postraumático (TEPT), y por tanto suele mostrarse serio, melancólico y reservado. Después de la muerte de su madre, Bulma del Futuro Alternativo, se volvió más sensible, a tal punto que solo personas muy cercanas a él pueden devolverle la ecuanimidad, como es el caso de Mai del Futuro. Cuando logra la calma, es muy comunicativo con cualquiera cerca suyo, y claramente siente un gran orgullo cuando conoce a su padre de la Línea de tiempo del presente, entendiendo por qué su madre se enamoró de él. Cuando finalmente conoce a Vegeta en el pasado, Trunks se ve constantemente tratando de impresionarle, esto a menudo se mezcla con el horror que siente hacia la actitud indiferente de su padre en torno a los que le rodean, especialmente cuando Vegeta se negó a salvar a Bulma y al bebé Trunks cuando el Dr. Gero explotó su nave, forzando a Trunks a salvar a su contraparte actual y a su madre. Trunks también siente un profundo respeto y aprecio por Gohan del Futuro quien fue su mejor amigo y maestro durante el caos desatado por los Androides e incluso siente cierta simpatía por su homólogo del presente, Gohan, quien vive una vida pacífica y pudo formar una familia feliz, algo a lo que Trunks aspira algún día.',
          img: 'assets/img/trunks-futuro.png',
          saga: '(Saga Célula)'
        }, {
          nombre: 'Piccolo',
          nombrejapones: 'ピッコロ',
          bio: 'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A través del tiempo, también comenzó a tomarle cariño a su discípulo Son Gohan, a quien veía como una especie de "vástago" y formando un lazo de amistad con este.',
          img: 'assets/img/piccolo-z.png',
          saga: ''
        }, {
          nombre: 'Yamcha',
          nombrejapones: 'ヤムチャ',
          bio: 'Yamcha se caracteriza originalmente como un guerrero empático, algo rudo y astuto pero que teme a nada más que hablar con las mujeres. En cuanto a sus técnicas, por lo general son extraídas de alguien que no tiene las artes marciales en las venas. Sus técnicas son más de un solitario salvaje y más adelante en Dragon Ball Z de su experiencia como jugador retirado de béisbol. No obstante, uno se puede encariñar con él. Es carismático. A ello se debe que sea muy honesto con sus debilidades, y todas sus dificultades y problemas. Es uno de los personajes mejor estructurados en lo que respecta a "Comic relief" en la serie.',
          img: 'assets/img/yamcha.png',
          saga: ''
        }, {
          nombre: 'Ten Shin Han',
          nombrejapones: '天津飯',
          bio: 'Tenshinhan marcó dos personalidades diferentes, al principio de la historia, era un hombre cruel, presumido y soberbio, que utilizaba el uso de las artes marciales para mal, ideaba planes para robar dinero a las personas. Más tarde se convirtió en un hombre bueno, agradable llegando a usar la fuerza para proteger la Tierra de enemigos más poderosos, en especial protegía mucho a su amigo Chaoz, a quien le tiene un gran aprecio.',
          img: 'assets/img/tenshinhan.png',
          saga: ''
        }, {
          nombre: 'Chaoz',
          nombrejapones: '餃子 [チャオズ]',
          bio: 'Chaoz es muy tranquilo, pero es muy valiente y se preocupa mucho por su amigo Tenshinhan. Normalmente siempre se lo ve acompañando a Tenshinhan, incluso en ocasiones donde Tenshinhan le dice que es muy peligroso que lo acompañe. También es un poco infantil, como se lo ve en su lucha contra Krilin. Chaoz es un personaje que principalmente se destaca por sus notables habilidades psíquicas y energéticas dado a eso su nivel es superior al resto de los humanos normales. Después del entrenamiento de un año bajo la guía de Kami antes de su batalla con Nappa, su nivel es de 610 unidades de Ki según los rastreadores, y este es su nivel de poder más alto en la franquicia de Dragon Ball. Luego de su muerte entrena junto a Yamcha, Piccolo y Tenshinhan aprendiendo de Kaio donde después de una larga preparación conseguiría derrotar a Gurdo quien poseía un nivel de 13.000 unidades de ki aproximadamente, cabe destacar que esto es un relleno del anime. De acuerdo con la tarjeta de videojuego de Dragon Ball Z Collectible Card Game, el nivel de poder de Chaoz después de ser revivido es de 25.000 unidades, sin embargo, no se específica si se refiere a su poder en el momento en el cual aparecen Mecha Freezer y el Rey Cold o si se trata de su nivel de la Saga de los Androides y Cell En unos niveles que trae la película Super batalla decisiva por el planeta Tierra, el nivel de poder de Chaoz es sólo 130, mientras que el resto de los guerreros Z tienen sus niveles más altos que los que tenían en su pelea con Vegeta y Nappa en la Saga Saiyan. /*Luego de la Saga de Cell, Chaoz entrenó con Tenshinhan durante muchos años eso pudo significar en él un incremento notable en su poder o simplemente un ligero aumento eso aún se desconoce pero se puede especular que sobrepasó a muchos de los Guerreros Z o continuó con un bajo nivel de pelea.',
          img: 'assets/img/chaoz.png',
          saga: ''
        }, {
          nombre: 'Goten',
          nombrejapones: '孫そん悟ご天てん',
          bio: 'En su infancia, Goten es un niño bondadoso, amante de la diversión y un tanto ingenuo como su padre. También es un poco revoltoso, debido a la influencia de su mejor amigo Trunks y uniéndose a él en muchas de sus travesuras. Entre Trunks y él, es sorprendentemente la voz de la razón, aunque por lo general sigue las ideas del primero. Goten también es muy educado, ya que siempre hace una reverencia antes de enfrentarse a alguien en una pelea. Él admira mucho a su hermano mayor Gohan (además de ser la única persona que en su momento no encontraba vergonzoso el traje de El Gran Saiyaman, pensando que este es "Genial"), aunque tiempo más tarde éste le rechaza a Gohan el traje de El Gran Saiyaman reconociendo que es un traje ridículo.',
          img: 'assets/img/goten.png',
          saga: '(Saga Boo)'
        }, {
          nombre: 'Trunks niño',
          nombrejapones: 'トランクス',
          bio: 'Cuando niño, Trunks demuestra una personalidad muy parecida a la de Vegeta a quien respeta y ve como modelo a seguir. Está muy orgulloso de su padre y desde temprana edad entrena para ser tan fuerte como él. A pesar de su entrenamiento con Vegeta, aún no domina cosas tan básicas como seguir al enemigo mediante su ki, debido a que prefiere pasar más tiempo con Bulma. Su mejor amigo es Goten y entre ambos disfrutan de entrenamientos, juegos y travesuras, incluso mantienen por algún tiempo el secreto de que pueden convertirse en Super Saiyan. A pesar de tener un año de diferencia, Trunks tiene mayor madurez que Goten y siempre consigue que este le crea y lo siga en sus juegos. En las películas se muestra que le gustaría tener un hermano mayor, asumiendo Tapion el rol por un breve tiempo. Él se niega a respetar a alguien que no le gusta, característica que comparte con su padre, como cuando ve a Goku por primera vez, aunque luego cambia su opinión al verlo transformado en un Super Saiyan. En el Torneo Mundial de las Artes Marciales se le ve igual que su padre, luchando con calma e insultando a su rivales, excepto contra Goten. Muchas veces demuestra su alto conocimiento científico, característica que obtiene de su madre y abuelo. Su comida favorita es carne a la parrilla y disfruta de la las carreras de coches. Debido a que creció en un mundo pacífico y sin preocupaciones, Trunks es muy diferente de su contraparte del futuro. También tienen un poco de diferencias en cuanto a personalidad, mientras que Trunks del presente es presumido y arrogante como su padre, Trunks del Futuro no lo es, siéndolo menos después de la muerte de Bulma del futuro. Otra gran diferencia es que Trunks del Futuro es capaz de ver a través de tácticas enemigas y adaptarse a las estrategias de juego, algo que Trunks del presente no es capaz de hacer en Dragon Ball Z, Dragon Ball Super o Dragon Ball GT.',
          img: 'assets/img/trunks-kid.png',
          saga: '(Saga Boo)'
        }, {
          nombre: 'Videl',
          nombrejapones: 'ビーデル',
          bio: 'Videl se caracteriza por ser una joven enérgica y tenaz con un enorme sentido de la justicia, reforzado por el hecho de que ayuda a la policía de Ciudad Satán en la lucha contra el crimen con los cuales guarda una estrecha relación. Su relación con su padre es bastante notoria a pesar de que ella vive avergonzada en cierto modo de las locuras de su padre y el hecho de haberle mentido al mundo tras lo ocurrido con Cell. En un principio, a pesar de tener una apariencia inocente y hermosa, presenta una personalidad algo bastante presumida y temperamental, con una actitud arrogante y desafiante, demostrando tener mucha confianza en sí misma, llegando a sentir celos del Gran Saiyaman cuando este comenzó a arrebatarle la resolución de los conflictos en Ciudad Satán. Aunque logró forjar una buena reputación regodeada por la fama, es claramente muy sensible (de hecho llegó a llorar cuando Spopovich estaba dándole una paliza y la tenía al borde de la muerte, hecho que hizo enfurecer bastante a Gohan y también cuando pensó que el propio Gohan había muerto a manos de Majin-Boo). A medida que la trama avanzaba poco a poco ella empieza a cambiar su personalidad, llegando a ser más amable y más educada en más de un sentido. Este gran cambio se debe a que sin darse cuenta comenzó a tomarle cariño a Gohan, quien gracias a su corazón bondadoso y honesto llegó a enamorarse de él. Más tarde se convierte en la esposa de Gohan y madre de Pan. Como esposa de Gohan, ella es mas cariñosa y maternal con todo el mundo. Teniendo un tono más suave en su voz, dejando muy atrás su personalidad caprichosa demostrada al principio de la historia. También demuestra tener una fe extrema en su esposo, como cuando Barry Kahn mostró unas fotos de Gohan siendo besado por Cocoa Amaguri y fingió consolarla, Videl lo insultó, diciendo que era patético, e indicando que Gohan debía haber tenido una razón para hacer lo que hizo. Más tarde, después de que Gohan derrota a Barry Kahn infectado por Watagash, Videl abraza a Gohan y exclama que lo ama.',
          img: 'assets/img/videl.png',
          saga: '(Saga Célula)'
        }, {
          nombre: 'Mr. Satán',
          nombrejapones: 'ミスター・サタン',
          bio: 'En una primera impresión, se da a conocer como un hombre arrogante, presumido, fanfarrón y manipulador, que tiende a justificar sus debilidades y errores con ocurrencias y pretextos. Muestra cobardía cuando se da cuenta de que su adversario es más fuerte que él. Sin embargo, tiene una gran capacidad de improvisación para salir al paso de situaciones difíciles y en el fondo es un hombre de buen corazón que muestra un gran compromiso para ayudar a los suyos. En una conversación con Videl, Piccolo afirma que pese a no tener poderes, Mr. Satán es reconocido como el campeón mundial por su valentía. Tiene la idea de que las Artes Marciales deben brindar un buen espectáculo al público, por lo cual hace demostraciones de fuerza tales como romper una hilera de ladrillos o arrastrar cuatro autobuses con sus brazos (actos ciertamente increíbles a nivel humano, pero que son ridículos para los Guerreros Z); igualmente, para impresionar a sus fans realiza poses y actitudes propias de la lucha libre profesional. Para los humanos, Mr. Satán es el hombre más poderoso del mundo y prueba de ello es que posee el cinturón que lo proclama como Campeón Mundial de las Artes Marciales. Por tanto, es dueño de un gran carisma y autoridad moral sobre la raza humana y estas virtudes fueron aprovechadas para ayudar a los Guerreros Z en situaciones específicas, y a cambio, recibe todo el crédito de los actos heroicos.',
          img: 'assets/img/mrsatan.png',
          saga: '(Saga Célula)'
        }, {
          nombre: 'Kaito',
          nombrejapones: '餃子 [チャオズ]',
          bio: 'Son Goku le conoce tras morir por primera vez, en el combate con su hermano Raditz, al encargarle Kami cruzar el camino de la serpiente y entrenarse con Kaiō-sama para prepararse a la llegada de los saiyajin. Tras un largo viaje de más de 100 días, en el que tuvo que recorrer 100.000 kilómetros y hacer una visita al infierno, Son Goku consigue llegar a casa de Kaiō y le pide que le entrene. Pero dado que el joven no especifica en qué disciplina, Kaiō del Norte le hace pasar una prueba en la que tiene que conseguir hacerle reír con un chiste, para demostrar ser merecedor de ello. Una vez superados la prueba y el malentendido, Kaiō del Norte decide entrenar a Son Goku en el tiempo que les queda. Su planeta tiene una fuerza de gravedad, aproximadamente 10 veces superior a la de La Tierra, por lo que su entrenamiento es muy eficaz. Las primeras pruebas que hace pasar a sus discípulos, y por supuesto a Son Goku, son las de conseguir atrapar a Bubbles, y golpear a Gregory con un pesado mazo, para conseguir que se acostumbren a la fuerza de gravedad, y ganen velocidad y resistencia. Cuando Son Goku supera estas pruebas, Kaiō-sama decide entrenarle en técnicas de combate, logrando enseñarle con eficacia el Kaiō Ken y la Genki-dama, dos técnicas de su invención, pero que ni él mismo había conseguido llevar a cabo.',
          img: 'assets/img/kaito.png',
          saga: ''
        }];
        console.log('Servicio listo para usarse');
      }

      _createClass(PersonajesService, [{
        key: "getPersonajes",
        value: function getPersonajes() {
          return this.personajes;
        }
      }, {
        key: "getPersonaje",
        value: function getPersonaje(idx) {
          return this.personajes[idx];
        }
      }, {
        key: "buscarPersonajes",
        value: function buscarPersonajes(termino) {
          var personajesArr = [];
          termino = termino.toLowerCase();

          for (var i = 0; i < this.personajes.length; i++) {
            var personaje = this.personajes[i];
            var nombre = personaje.nombre.toLowerCase();

            if (nombre.indexOf(termino) >= 0) {
              personaje.idx = i;
              personajesArr.push(personaje);
            }
          }

          return personajesArr;
        }
      }]);

      return PersonajesService;
    }();

    PersonajesService.ɵfac = function PersonajesService_Factory(t) {
      return new (t || PersonajesService)();
    };

    PersonajesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PersonajesService,
      factory: PersonajesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonajesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/transformaciones.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/transformaciones.service.ts ***!
    \******************************************************/

  /*! exports provided: TransformacionesService */

  /***/
  function srcAppServicesTransformacionesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransformacionesService", function () {
      return TransformacionesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TransformacionesService = /*#__PURE__*/function () {
      function TransformacionesService() {
        _classCallCheck(this, TransformacionesService);

        this.transformaciones = [{
          nombre: 'Goku SSJ',
          img: 'assets/img/goku-ssj.png',
          saga: 'Saga Freezer'
        }, {
          nombre: 'Goku SSJ2',
          img: 'assets/img/goku-ssj2.png',
          saga: 'Saga Boo'
        }, {
          nombre: 'Goku SSJ3',
          img: 'assets/img/goku-ssj3.png',
          saga: 'Saga Boo'
        }, {
          nombre: 'Goku SSJ4',
          img: 'assets/img/goku-ssj4.png',
          saga: 'Saga GT'
        }, {
          nombre: 'Vegeta SSJ',
          img: 'assets/img/vegeta-ssj.png',
          saga: 'Saga Androides'
        }, {
          nombre: 'Vegeta SSJ2',
          img: 'assets/img/vegeta-ssj2.png',
          saga: 'Saga Boo'
        }, {
          nombre: 'Vegeta SSJ4',
          img: 'assets/img/vegeta-ssj4.png',
          saga: 'Saga GT'
        }, {
          nombre: 'Son Gohanda SSJ',
          img: 'assets/img/gohan-child-ssj.png',
          saga: 'Saga Célula'
        }, {
          nombre: 'Son Gohanda SSJ2',
          img: 'assets/img/gohan-child-ssj2.png',
          saga: 'Saga Célula'
        }, {
          nombre: 'Trunks SSJ',
          img: 'assets/img/trunks-futuro-ssj.png',
          saga: 'Saga Androides'
        }, {
          nombre: 'Super Trunks',
          img: 'assets/img/supertrunks.png',
          saga: 'Saga Célula'
        }, {
          nombre: 'Goten SSJ',
          img: 'assets/img/goten-ssj.png',
          saga: 'Saga Boo'
        }, {
          nombre: 'Trunks niño SSJ',
          img: 'assets/img/trunks-kid-ssj.png',
          saga: 'Saga Boo'
        }, {
          nombre: 'Gotenks SSJ',
          img: 'assets/img/gotenks-ssj.png',
          saga: 'Saga Boo'
        }, {
          nombre: 'Gotenks SSJ3',
          img: 'assets/img/gotenks-ssj3.png',
          saga: 'Saga Boo'
        }];
        console.log('Servicio listo para usarse');
      }

      _createClass(TransformacionesService, [{
        key: "getTransformaciones",
        value: function getTransformaciones() {
          return this.transformaciones;
        }
      }, {
        key: "getTransformacion",
        value: function getTransformacion(idx) {
          return this.transformaciones[idx];
        }
      }, {
        key: "buscarTransformaciones",
        value: function buscarTransformaciones(termino) {
          var transformacionArr = [];
          termino = termino.toLowerCase();

          for (var i = 0; i < this.transformaciones.length; i++) {
            var transformacion = this.transformaciones[i];
            var nombre = transformacion.nombre.toLowerCase();

            if (nombre.indexOf(termino) >= 0) {
              transformacion.idx = i;
              transformacionArr.push(transformacion);
            }
          }

          return transformacionArr;
        }
      }]);

      return TransformacionesService;
    }();

    TransformacionesService.ɵfac = function TransformacionesService_Factory(t) {
      return new (t || TransformacionesService)();
    };

    TransformacionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TransformacionesService,
      factory: TransformacionesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformacionesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
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


    var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\Ka\Desktop\Cursos Herrera\Angular APPS\DragonBallApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map