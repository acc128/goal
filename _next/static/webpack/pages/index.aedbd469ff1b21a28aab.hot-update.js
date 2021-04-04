webpackHotUpdate_N_E("pages/index",{

/***/ "./util/DGoal.ts":
/*!***********************!*\
  !*** ./util/DGoal.ts ***!
  \***********************/
/*! exports provided: DGoal, HabitNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DGoal", function() { return DGoal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inrupt/solid-client */ "./node_modules/@inrupt/solid-client/dist/index.es.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var base64url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! base64url */ "./node_modules/base64url/index.js");
/* harmony import */ var base64url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(base64url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tiny_relative_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-relative-date */ "./node_modules/tiny-relative-date/src/index.js");
/* harmony import */ var _GoalFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GoalFormat */ "./util/GoalFormat.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HabitNS", function() { return _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"]; });

/* harmony import */ var _SolidUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SolidUtil */ "./util/SolidUtil.ts");
/* harmony import */ var _Completions_DCompletionHistory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Completions/DCompletionHistory */ "./util/Completions/DCompletionHistory.ts");













var DGoal = /*#__PURE__*/function () {
  function DGoal(contents) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DGoal);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "goalList", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_dirty", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "isNew", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_name", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_interval", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_category", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_completionType", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_completionDatasetName", "");

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_completionHistory", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "originalThing", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "associatedThing", void 0);

    this.isNew = false;
    contents = DGoal.defaultizeGoalContents(contents);
    this.associatedThing = contents.thing;

    if (!this.associatedThing) {
      // Generate a new thing
      this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["createThing"])();
      this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setUrl"])(this.associatedThing, _SolidUtil__WEBPACK_IMPORTED_MODULE_10__["NS"].TYPE, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].TYPE);
      this.isNew = true;
    }

    this.name = contents.name;
    this.created = contents.created;
    this.goalList = contents.goalList;
    this.interval = contents.interval;
    this.category = contents.category;
    this.completionType = contents.completionType;
    this.originalThing = this.associatedThing;
    this._dirty = this.isNew;

    if (!this.isNew) {
      this._completionDatasetName = crypto__WEBPACK_IMPORTED_MODULE_6___default.a.createHash("sha256").update(this.url).digest("hex");
      this._completionHistory = new _Completions_DCompletionHistory__WEBPACK_IMPORTED_MODULE_11__["default"](this, this._completionDatasetName);
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DGoal, [{
    key: "associateTo",
    value: function associateTo(newGoalList) {
      if (this.goalList == null) {
        this.goalList = newGoalList;
      } else {
        throw new Error("Attempt to associate an already associated habit");
      }
    }
  }, {
    key: "associatedGoalList",
    get: function get() {
      return this.goalList;
    }
  }, {
    key: "contaminate",
    value: function contaminate() {
      this._dirty = this.originalThing != this.associatedThing;
    }
  }, {
    key: "dirty",
    get: function get() {
      return this._dirty;
    }
  }, {
    key: "completionHistory",
    get: function get() {
      return this._completionHistory;
    } //#region Getters and Setters

  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(to) {
      this._name = to;
      this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setStringNoLocale"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].NAME, to);
      this.contaminate();
    }
  }, {
    key: "created",
    get: function get() {
      return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getDatetime"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CREATED);
    },
    set: function set(to) {
      if (this.isNew || this.created == null) {
        this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setDatetime"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CREATED, to);
        this.contaminate();
      }
    } // human-readable

  }, {
    key: "created_relative",
    get: function get() {
      return Object(tiny_relative_date__WEBPACK_IMPORTED_MODULE_8__["default"])(this.created);
    }
  }, {
    key: "interval",
    get: function get() {
      return this._interval;
    },
    set: function set(to) {
      this._interval = to;
      this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setInteger"])(Object(_SolidUtil__WEBPACK_IMPORTED_MODULE_10__["deleteAllInts"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].INTERVAL), _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].INTERVAL, to);
      this.contaminate();
    }
  }, {
    key: "category",
    get: function get() {
      return this._category;
    },
    set: function set(to) {
      this._category = to;
      this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setInteger"])(Object(_SolidUtil__WEBPACK_IMPORTED_MODULE_10__["deleteAllInts"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CATEGORY), _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CATEGORY, to);
      this.contaminate();
    }
  }, {
    key: "completionType",
    get: function get() {
      return this._completionType;
    },
    set: function set(to) {
      this._completionType = to;
      this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setInteger"])(Object(_SolidUtil__WEBPACK_IMPORTED_MODULE_10__["deleteAllInts"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].COMPLETIONTYPE), _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].COMPLETIONTYPE, to);
      this.contaminate();
    } //#endregion
    // Url to Thing

  }, {
    key: "url",
    get: function get() {
      return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["asUrl"])(this.originalThing, "");
    }
  }, {
    key: "url64",
    get: function get() {
      return base64url__WEBPACK_IMPORTED_MODULE_7___default.a.encode(this.url);
    }
  }, {
    key: "thing",
    get: function get() {
      return this.associatedThing;
    }
  }, {
    key: "delete",
    value: function () {
      var _delete2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._completionHistory["delete"]();

              case 2:
                delete this._completionHistory;
                _context.next = 5;
                return this.goalList.deleteGoal(this);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "push",
    value: function () {
      var _push = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.dirty) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return this.goalList.insertGoal(this);

              case 3:
                this.originalThing = this.associatedThing;

              case 4:
                this._dirty = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function push() {
        return _push.apply(this, arguments);
      }

      return push;
    }()
  }, {
    key: "revert",
    value: function revert() {
      this.associatedThing = this.originalThing;
      this._dirty = false;
    }
  }], [{
    key: "isThingValid",
    value: function isThingValid(thing) {
      return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getUrl"])(thing, _SolidUtil__WEBPACK_IMPORTED_MODULE_10__["NS"].TYPE) === _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].TYPE;
    }
  }, {
    key: "defaultizeGoalContents",
    value: function defaultizeGoalContents(contents) {
      var _contents$created, _contents$interval, _contents$category, _contents$completionT;

      contents.created = (_contents$created = contents.created) !== null && _contents$created !== void 0 ? _contents$created : new Date();
      contents.interval = (_contents$interval = contents.interval) !== null && _contents$interval !== void 0 ? _contents$interval : _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["GoalInterval"].DAY;
      contents.category = (_contents$category = contents.category) !== null && _contents$category !== void 0 ? _contents$category : _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["GoalCategory"].GENERAL;
      contents.completionType = (_contents$completionT = contents.completionType) !== null && _contents$completionT !== void 0 ? _contents$completionT : _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["CompletionType"].BOOLEAN;
      return contents;
    }
  }, {
    key: "fromThing",
    value: function fromThing(thing, goalList) {
      return new DGoal({
        name: Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getStringNoLocale"])(thing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].NAME),
        created: Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getDatetime"])(thing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CREATED),
        interval: Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getInteger"])(thing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].INTERVAL),
        category: Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getInteger"])(thing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CATEGORY),
        completionType: Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getInteger"])(thing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].COMPLETIONTYPE),
        thing: thing,
        goalList: goalList
      });
    }
  }]);

  return DGoal;
}();



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9ER29hbC50cyJdLCJuYW1lcyI6WyJER29hbCIsImNvbnRlbnRzIiwiaXNOZXciLCJkZWZhdWx0aXplR29hbENvbnRlbnRzIiwiYXNzb2NpYXRlZFRoaW5nIiwidGhpbmciLCJjcmVhdGVUaGluZyIsInNldFVybCIsIk5TIiwiVFlQRSIsIkhhYml0TlMiLCJuYW1lIiwiY3JlYXRlZCIsImdvYWxMaXN0IiwiaW50ZXJ2YWwiLCJjYXRlZ29yeSIsImNvbXBsZXRpb25UeXBlIiwib3JpZ2luYWxUaGluZyIsIl9kaXJ0eSIsIl9jb21wbGV0aW9uRGF0YXNldE5hbWUiLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwidXJsIiwiZGlnZXN0IiwiX2NvbXBsZXRpb25IaXN0b3J5IiwiRENvbXBsZXRpb25IaXN0b3J5IiwibmV3R29hbExpc3QiLCJFcnJvciIsIl9uYW1lIiwidG8iLCJzZXRTdHJpbmdOb0xvY2FsZSIsIk5BTUUiLCJjb250YW1pbmF0ZSIsImdldERhdGV0aW1lIiwiQ1JFQVRFRCIsInNldERhdGV0aW1lIiwicmVsYXRpdmVEYXRlIiwiX2ludGVydmFsIiwic2V0SW50ZWdlciIsImRlbGV0ZUFsbEludHMiLCJJTlRFUlZBTCIsIl9jYXRlZ29yeSIsIkNBVEVHT1JZIiwiX2NvbXBsZXRpb25UeXBlIiwiQ09NUExFVElPTlRZUEUiLCJhc1VybCIsImJhc2U2NHVybCIsImVuY29kZSIsImRlbGV0ZUdvYWwiLCJkaXJ0eSIsImluc2VydEdvYWwiLCJnZXRVcmwiLCJEYXRlIiwiR29hbEludGVydmFsIiwiREFZIiwiR29hbENhdGVnb3J5IiwiR0VORVJBTCIsIkNvbXBsZXRpb25UeXBlIiwiQk9PTEVBTiIsImdldFN0cmluZ05vTG9jYWxlIiwiZ2V0SW50ZWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFH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SUFBSXlDLElBQUosRUFBdkM7QUFDQXBELGNBQVEsQ0FBQ2EsUUFBVCx5QkFBb0JiLFFBQVEsQ0FBQ2EsUUFBN0IsbUVBQXlDd0Msd0RBQVksQ0FBQ0MsR0FBdEQ7QUFDQXRELGNBQVEsQ0FBQ2MsUUFBVCx5QkFBb0JkLFFBQVEsQ0FBQ2MsUUFBN0IsbUVBQXlDeUMsd0RBQVksQ0FBQ0MsT0FBdEQ7QUFDQXhELGNBQVEsQ0FBQ2UsY0FBVCw0QkFBMEJmLFFBQVEsQ0FBQ2UsY0FBbkMseUVBQXFEMEMsMERBQWMsQ0FBQ0MsT0FBcEU7QUFFQSxhQUFPMUQsUUFBUDtBQUNIOzs7V0FFRCxtQkFBd0JJLEtBQXhCLEVBQXNDUSxRQUF0QyxFQUEwRDtBQUN0RCxhQUFPLElBQUliLEtBQUosQ0FDSDtBQUNJVyxZQUFJLEVBQUVpRCw4RUFBaUIsQ0FBQ3ZELEtBQUQsRUFBUUssbURBQU8sQ0FBQ3NCLElBQWhCLENBRDNCO0FBRUlwQixlQUFPLEVBQUVzQix3RUFBVyxDQUFDN0IsS0FBRCxFQUFRSyxtREFBTyxDQUFDeUIsT0FBaEIsQ0FGeEI7QUFJSXJCLGdCQUFRLEVBQUUrQyx1RUFBVSxDQUFDeEQsS0FBRCxFQUFRSyxtREFBTyxDQUFDK0IsUUFBaEIsQ0FKeEI7QUFLSTFCLGdCQUFRLEVBQUU4Qyx1RUFBVSxDQUFDeEQsS0FBRCxFQUFRSyxtREFBTyxDQUFDaUMsUUFBaEIsQ0FMeEI7QUFPSTNCLHNCQUFjLEVBQUU2Qyx1RUFBVSxDQUFDeEQsS0FBRCxFQUFRSyxtREFBTyxDQUFDbUMsY0FBaEIsQ0FQOUI7QUFTSXhDLGFBQUssRUFBRUEsS0FUWDtBQVVJUSxnQkFBUSxFQUFFQTtBQVZkLE9BREcsQ0FBUDtBQWNIOzs7Ozs7QUFHTCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZWRiZDQ2OWZmMWIyMWEyOGFhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXHJcbiAgICBhc1VybCxcclxuICAgIGNyZWF0ZVRoaW5nLFxyXG5cclxuICAgIHNldEludGVnZXIsXHJcbiAgICBnZXRJbnRlZ2VyLFxyXG4gICAgXHJcbiAgICBzZXRVcmwsXHJcbiAgICBnZXRVcmwsXHJcbiAgICBcclxuICAgIGdldERhdGV0aW1lLFxyXG4gICAgc2V0RGF0ZXRpbWUsXHJcbiAgICBcclxuICAgIHNldFN0cmluZ05vTG9jYWxlLFxyXG4gICAgZ2V0U3RyaW5nTm9Mb2NhbGUsXHJcbiAgICBcclxuICAgIFRoaW5nXHJcbn0gZnJvbSBcIkBpbnJ1cHQvc29saWQtY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcclxuaW1wb3J0IGJhc2U2NHVybCBmcm9tIFwiYmFzZTY0dXJsXCI7XHJcbmltcG9ydCByZWxhdGl2ZURhdGUgZnJvbSBcInRpbnktcmVsYXRpdmUtZGF0ZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29tcGxldGlvblR5cGUsIEdvYWxDYXRlZ29yeSwgR29hbEludGVydmFsLCBIYWJpdE5TIH0gZnJvbSBcIi4vR29hbEZvcm1hdFwiO1xyXG5pbXBvcnQgeyBOUywgZGVsZXRlQWxsSW50cyB9IGZyb20gXCIuL1NvbGlkVXRpbFwiO1xyXG5pbXBvcnQgREdvYWxMaXN0IGZyb20gXCIuL0RHb2FsTGlzdFwiO1xyXG5cclxuaW1wb3J0IERDb21wbGV0aW9uSGlzdG9yeSBmcm9tIFwiLi9Db21wbGV0aW9ucy9EQ29tcGxldGlvbkhpc3RvcnlcIjtcclxuXHJcblxyXG50eXBlIERHb2FsQ29udGVudHMgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBjcmVhdGVkPzogRGF0ZSxcclxuICAgIGludGVydmFsPzogR29hbEludGVydmFsLFxyXG4gICAgY2F0ZWdvcnk/OiBHb2FsQ2F0ZWdvcnksXHJcbiAgICBjb21wbGV0aW9uVHlwZT86IENvbXBsZXRpb25UeXBlLFxyXG5cclxuICAgIHRoaW5nPzogVGhpbmcsXHJcbiAgICBnb2FsTGlzdD86IERHb2FsTGlzdFxyXG59O1xyXG5cclxuY2xhc3MgREdvYWwge1xyXG4gICAgcHJpdmF0ZSBnb2FsTGlzdDogREdvYWxMaXN0O1xyXG4gICAgcHVibGljIGFzc29jaWF0ZVRvKG5ld0dvYWxMaXN0OiBER29hbExpc3Qpe1xyXG4gICAgICAgIGlmKHRoaXMuZ29hbExpc3QgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ29hbExpc3QgPSBuZXdHb2FsTGlzdDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdCB0byBhc3NvY2lhdGUgYW4gYWxyZWFkeSBhc3NvY2lhdGVkIGhhYml0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFzc29jaWF0ZWRHb2FsTGlzdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdvYWxMaXN0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbnRhbWluYXRlKCl7XHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSAodGhpcy5vcmlnaW5hbFRoaW5nICE9IHRoaXMuYXNzb2NpYXRlZFRoaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgZGlydHkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlydHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ldzogYm9vbGVhbjtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWw6IEdvYWxJbnRlcnZhbDtcclxuICAgIHByaXZhdGUgX2NhdGVnb3J5OiBHb2FsQ2F0ZWdvcnk7XHJcbiAgICBwcml2YXRlIF9jb21wbGV0aW9uVHlwZTogQ29tcGxldGlvblR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29tcGxldGlvbkRhdGFzZXROYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgX2NvbXBsZXRpb25IaXN0b3J5OiBEQ29tcGxldGlvbkhpc3Rvcnk7XHJcbiAgICBwdWJsaWMgZ2V0IGNvbXBsZXRpb25IaXN0b3J5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRpb25IaXN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vI3JlZ2lvbiBHZXR0ZXJzIGFuZCBTZXR0ZXJzXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh0bzogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdG87XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRTdHJpbmdOb0xvY2FsZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5OQU1FLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNyZWF0ZWQoKXtcclxuICAgICAgICByZXR1cm4gZ2V0RGF0ZXRpbWUodGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ1JFQVRFRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjcmVhdGVkKHRvOiBEYXRlKXtcclxuICAgICAgICBpZih0aGlzLmlzTmV3IHx8IHRoaXMuY3JlYXRlZCA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXREYXRldGltZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DUkVBVEVELCB0byk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHVtYW4tcmVhZGFibGVcclxuICAgIHB1YmxpYyBnZXQgY3JlYXRlZF9yZWxhdGl2ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiByZWxhdGl2ZURhdGUodGhpcy5jcmVhdGVkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBpbnRlcnZhbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgaW50ZXJ2YWwodG86IEdvYWxJbnRlcnZhbCl7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuSU5URVJWQUwpLCBIYWJpdE5TLklOVEVSVkFMLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNhdGVnb3J5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjYXRlZ29yeSh0bzogR29hbENhdGVnb3J5KXtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IHRvO1xyXG4gICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gc2V0SW50ZWdlcihcclxuICAgICAgICAgICAgZGVsZXRlQWxsSW50cyh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DQVRFR09SWSksIEhhYml0TlMuQ0FURUdPUlksIHRvKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YW1pbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29tcGxldGlvblR5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGlvblR5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGNvbXBsZXRpb25UeXBlKHRvOiBDb21wbGV0aW9uVHlwZSl7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGlvblR5cGUgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ09NUExFVElPTlRZUEUpLCBIYWJpdE5TLkNPTVBMRVRJT05UWVBFLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyBVcmwgdG8gVGhpbmdcclxuICAgIHB1YmxpYyBnZXQgdXJsKCl7XHJcbiAgICAgICAgcmV0dXJuIGFzVXJsKHRoaXMub3JpZ2luYWxUaGluZywgXCJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHVybDY0KCl7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NHVybC5lbmNvZGUodGhpcy51cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3JpZ2luYWxUaGluZzogVGhpbmc7XHJcbiAgICBwcml2YXRlIGFzc29jaWF0ZWRUaGluZzogVGhpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCB0aGluZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc29jaWF0ZWRUaGluZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50czogREdvYWxDb250ZW50cyl7XHJcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb250ZW50cyA9IERHb2FsLmRlZmF1bHRpemVHb2FsQ29udGVudHMoY29udGVudHMpO1xyXG5cclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IGNvbnRlbnRzLnRoaW5nO1xyXG4gICAgICAgIGlmKCF0aGlzLmFzc29jaWF0ZWRUaGluZyl7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRoaW5nXHJcbiAgICAgICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gY3JlYXRlVGhpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRVcmwodGhpcy5hc3NvY2lhdGVkVGhpbmcsIE5TLlRZUEUsIEhhYml0TlMuVFlQRSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gY29udGVudHMubmFtZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBjb250ZW50cy5jcmVhdGVkO1xyXG4gICAgICAgIHRoaXMuZ29hbExpc3QgPSBjb250ZW50cy5nb2FsTGlzdDtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gY29udGVudHMuaW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNvbnRlbnRzLmNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGlvblR5cGUgPSBjb250ZW50cy5jb21wbGV0aW9uVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRoaW5nID0gdGhpcy5hc3NvY2lhdGVkVGhpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdGhpcy5pc05ldztcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNOZXcpe1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0aW9uRGF0YXNldE5hbWUgPSBjcnlwdG8uY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUodGhpcy51cmwpLmRpZ2VzdChcImhleFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGlvbkhpc3RvcnkgPSBuZXcgRENvbXBsZXRpb25IaXN0b3J5KHRoaXMsIHRoaXMuX2NvbXBsZXRpb25EYXRhc2V0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoKXtcclxuICAgICAgICBhd2FpdCB0aGlzLl9jb21wbGV0aW9uSGlzdG9yeS5kZWxldGUoKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fY29tcGxldGlvbkhpc3Rvcnk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ29hbExpc3QuZGVsZXRlR29hbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcHVzaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuZGlydHkpe1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdvYWxMaXN0Lmluc2VydEdvYWwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxUaGluZyA9IHRoaXMuYXNzb2NpYXRlZFRoaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXZlcnQoKXtcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHRoaXMub3JpZ2luYWxUaGluZztcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNUaGluZ1ZhbGlkKHRoaW5nOiBUaGluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBnZXRVcmwodGhpbmcsIE5TLlRZUEUpID09PSBIYWJpdE5TLlRZUEU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0aXplR29hbENvbnRlbnRzKGNvbnRlbnRzOiBER29hbENvbnRlbnRzKXtcclxuICAgICAgICBjb250ZW50cy5jcmVhdGVkID0gY29udGVudHMuY3JlYXRlZCA/PyBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnRlbnRzLmludGVydmFsID0gY29udGVudHMuaW50ZXJ2YWwgPz8gR29hbEludGVydmFsLkRBWTtcclxuICAgICAgICBjb250ZW50cy5jYXRlZ29yeSA9IGNvbnRlbnRzLmNhdGVnb3J5ID8/IEdvYWxDYXRlZ29yeS5HRU5FUkFMO1xyXG4gICAgICAgIGNvbnRlbnRzLmNvbXBsZXRpb25UeXBlID0gY29udGVudHMuY29tcGxldGlvblR5cGUgPz8gQ29tcGxldGlvblR5cGUuQk9PTEVBTjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbVRoaW5nKHRoaW5nOiBUaGluZywgZ29hbExpc3Q6IERHb2FsTGlzdCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBER29hbChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZ2V0U3RyaW5nTm9Mb2NhbGUodGhpbmcsIEhhYml0TlMuTkFNRSksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBnZXREYXRldGltZSh0aGluZywgSGFiaXROUy5DUkVBVEVEKSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogZ2V0SW50ZWdlcih0aGluZywgSGFiaXROUy5JTlRFUlZBTCksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZ2V0SW50ZWdlcih0aGluZywgSGFiaXROUy5DQVRFR09SWSksXHJcblxyXG4gICAgICAgICAgICAgICAgY29tcGxldGlvblR5cGU6IGdldEludGVnZXIodGhpbmcsIEhhYml0TlMuQ09NUExFVElPTlRZUEUpLFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaW5nOiB0aGluZyxcclxuICAgICAgICAgICAgICAgIGdvYWxMaXN0OiBnb2FsTGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgREdvYWwsIEhhYml0TlMgfTsiXSwic291cmNlUm9vdCI6IiJ9