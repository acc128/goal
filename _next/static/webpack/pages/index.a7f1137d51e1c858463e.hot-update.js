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
      if (this.isNew) {
        Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setDatetime"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CREATED, to);
        this.contaminate();
      } else {
        if (this.name.includes("debug")) {
          console.log(Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getDatetime"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CREATED), this.created);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9ER29hbC50cyJdLCJuYW1lcyI6WyJER29hbCIsImNvbnRlbnRzIiwiaXNOZXciLCJkZWZhdWx0aXplR29hbENvbnRlbnRzIiwiYXNzb2NpYXRlZFRoaW5nIiwidGhpbmciLCJjcmVhdGVUaGluZyIsInNldFVybCIsIk5TIiwiVFlQRSIsIkhhYml0TlMiLCJuYW1lIiwiY3JlYXRlZCIsImdvYWxMaXN0IiwiaW50ZXJ2YWwiLCJjYXRlZ29yeSIsImNvbXBsZXRpb25UeXBlIiwib3JpZ2luYWxUaGluZyIsIl9kaXJ0eSIsIl9jb21wbGV0aW9uRGF0YXNldE5hbWUiLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwidXJsIiwiZGlnZXN0IiwiX2NvbXBsZXRpb25IaXN0b3J5IiwiRENvbXBsZXRpb25IaXN0b3J5IiwibmV3R29hbExpc3QiLCJFcnJvciIsIl9uYW1lIiwidG8iLCJzZXRTdHJpbmdOb0xvY2FsZSIsIk5BTUUiLCJjb250YW1pbmF0ZSIsImdldERhdGV0aW1lIiwiQ1JFQVRFRCIsInNldERhdGV0aW1lIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwicmVsYXRpdmVEYXRlIiwiX2ludGVydmFsIiwic2V0SW50ZWdlciIsImRlbGV0ZUFsbEludHMiLCJJTlRFUlZBTCIsIl9jYXRlZ29yeSIsIkNBVEVHT1JZIiwiX2NvbXBsZXRpb25UeXBlIiwiQ09NUExFVElPTlRZUEUiLCJhc1VybCIsImJhc2U2NHVybCIsImVuY29kZSIsImRlbGV0ZUdvYWwiLCJkaXJ0eSIsImluc2VydEdvYWwiLCJnZXRVcmwiLCJEYXRlIiwiR29hbEludGVydmFsIiwiREFZIiwiR29hbENhdGVnb3J5IiwiR0VORVJBTCIsIkNvbXBsZXRpb25UeXBlIiwiQk9PTEVBTiIsImdldFN0cmluZ05vTG9jYWxlIiwiZ2V0SW50ZWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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Y0g7Ozs7OztBQUdMIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3ZjExMzdkNTFlMWM4NTg0NjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICAgIGFzVXJsLFxyXG4gICAgY3JlYXRlVGhpbmcsXHJcblxyXG4gICAgc2V0SW50ZWdlcixcclxuICAgIGdldEludGVnZXIsXHJcbiAgICBcclxuICAgIHNldFVybCxcclxuICAgIGdldFVybCxcclxuICAgIFxyXG4gICAgZ2V0RGF0ZXRpbWUsXHJcbiAgICBzZXREYXRldGltZSxcclxuICAgIFxyXG4gICAgc2V0U3RyaW5nTm9Mb2NhbGUsXHJcbiAgICBnZXRTdHJpbmdOb0xvY2FsZSxcclxuICAgIFxyXG4gICAgVGhpbmdcclxufSBmcm9tIFwiQGlucnVwdC9zb2xpZC1jbGllbnRcIjtcclxuXHJcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xyXG5pbXBvcnQgYmFzZTY0dXJsIGZyb20gXCJiYXNlNjR1cmxcIjtcclxuaW1wb3J0IHJlbGF0aXZlRGF0ZSBmcm9tIFwidGlueS1yZWxhdGl2ZS1kYXRlXCI7XHJcblxyXG5pbXBvcnQgeyBDb21wbGV0aW9uVHlwZSwgR29hbENhdGVnb3J5LCBHb2FsSW50ZXJ2YWwsIEhhYml0TlMgfSBmcm9tIFwiLi9Hb2FsRm9ybWF0XCI7XHJcbmltcG9ydCB7IE5TLCBkZWxldGVBbGxJbnRzIH0gZnJvbSBcIi4vU29saWRVdGlsXCI7XHJcbmltcG9ydCBER29hbExpc3QgZnJvbSBcIi4vREdvYWxMaXN0XCI7XHJcblxyXG5pbXBvcnQgRENvbXBsZXRpb25IaXN0b3J5IGZyb20gXCIuL0NvbXBsZXRpb25zL0RDb21wbGV0aW9uSGlzdG9yeVwiO1xyXG5cclxuXHJcbnR5cGUgREdvYWxDb250ZW50cyA9IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGNyZWF0ZWQ/OiBEYXRlLFxyXG4gICAgaW50ZXJ2YWw/OiBHb2FsSW50ZXJ2YWwsXHJcbiAgICBjYXRlZ29yeT86IEdvYWxDYXRlZ29yeSxcclxuICAgIGNvbXBsZXRpb25UeXBlPzogQ29tcGxldGlvblR5cGUsXHJcblxyXG4gICAgdGhpbmc/OiBUaGluZyxcclxuICAgIGdvYWxMaXN0PzogREdvYWxMaXN0XHJcbn07XHJcblxyXG5jbGFzcyBER29hbCB7XHJcbiAgICBwcml2YXRlIGdvYWxMaXN0OiBER29hbExpc3Q7XHJcbiAgICBwdWJsaWMgYXNzb2NpYXRlVG8obmV3R29hbExpc3Q6IERHb2FsTGlzdCl7XHJcbiAgICAgICAgaWYodGhpcy5nb2FsTGlzdCA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5nb2FsTGlzdCA9IG5ld0dvYWxMaXN0O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0IHRvIGFzc29jaWF0ZSBhbiBhbHJlYWR5IGFzc29jaWF0ZWQgaGFiaXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXNzb2NpYXRlZEdvYWxMaXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ29hbExpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29udGFtaW5hdGUoKXtcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9ICh0aGlzLm9yaWdpbmFsVGhpbmcgIT0gdGhpcy5hc3NvY2lhdGVkVGhpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGdldCBkaXJ0eSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXJ0eTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTmV3OiBib29sZWFuO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9pbnRlcnZhbDogR29hbEludGVydmFsO1xyXG4gICAgcHJpdmF0ZSBfY2F0ZWdvcnk6IEdvYWxDYXRlZ29yeTtcclxuICAgIHByaXZhdGUgX2NvbXBsZXRpb25UeXBlOiBDb21wbGV0aW9uVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIF9jb21wbGV0aW9uRGF0YXNldE5hbWUgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfY29tcGxldGlvbkhpc3Rvcnk6IERDb21wbGV0aW9uSGlzdG9yeTtcclxuICAgIHB1YmxpYyBnZXQgY29tcGxldGlvbkhpc3RvcnkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGlvbkhpc3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jcmVnaW9uIEdldHRlcnMgYW5kIFNldHRlcnNcclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBuYW1lKHRvOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldFN0cmluZ05vTG9jYWxlKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLk5BTUUsIHRvKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YW1pbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY3JlYXRlZCgpe1xyXG4gICAgICAgIHJldHVybiBnZXREYXRldGltZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DUkVBVEVEKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNyZWF0ZWQodG86IERhdGUpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNOZXcpe1xyXG4gICAgICAgICAgICBzZXREYXRldGltZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DUkVBVEVELCB0byk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5uYW1lLmluY2x1ZGVzKFwiZGVidWdcIikpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0RGF0ZXRpbWUodGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ1JFQVRFRCksIHRoaXMuY3JlYXRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHVtYW4tcmVhZGFibGVcclxuICAgIHB1YmxpYyBnZXQgY3JlYXRlZF9yZWxhdGl2ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiByZWxhdGl2ZURhdGUodGhpcy5jcmVhdGVkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBpbnRlcnZhbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgaW50ZXJ2YWwodG86IEdvYWxJbnRlcnZhbCl7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuSU5URVJWQUwpLCBIYWJpdE5TLklOVEVSVkFMLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNhdGVnb3J5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjYXRlZ29yeSh0bzogR29hbENhdGVnb3J5KXtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IHRvO1xyXG4gICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gc2V0SW50ZWdlcihcclxuICAgICAgICAgICAgZGVsZXRlQWxsSW50cyh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DQVRFR09SWSksIEhhYml0TlMuQ0FURUdPUlksIHRvKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YW1pbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29tcGxldGlvblR5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGlvblR5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGNvbXBsZXRpb25UeXBlKHRvOiBDb21wbGV0aW9uVHlwZSl7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGlvblR5cGUgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ09NUExFVElPTlRZUEUpLCBIYWJpdE5TLkNPTVBMRVRJT05UWVBFLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyBVcmwgdG8gVGhpbmdcclxuICAgIHB1YmxpYyBnZXQgdXJsKCl7XHJcbiAgICAgICAgcmV0dXJuIGFzVXJsKHRoaXMub3JpZ2luYWxUaGluZywgXCJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHVybDY0KCl7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NHVybC5lbmNvZGUodGhpcy51cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3JpZ2luYWxUaGluZzogVGhpbmc7XHJcbiAgICBwcml2YXRlIGFzc29jaWF0ZWRUaGluZzogVGhpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCB0aGluZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc29jaWF0ZWRUaGluZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50czogREdvYWxDb250ZW50cyl7XHJcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb250ZW50cyA9IERHb2FsLmRlZmF1bHRpemVHb2FsQ29udGVudHMoY29udGVudHMpO1xyXG5cclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IGNvbnRlbnRzLnRoaW5nO1xyXG4gICAgICAgIGlmKCF0aGlzLmFzc29jaWF0ZWRUaGluZyl7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRoaW5nXHJcbiAgICAgICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gY3JlYXRlVGhpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRVcmwodGhpcy5hc3NvY2lhdGVkVGhpbmcsIE5TLlRZUEUsIEhhYml0TlMuVFlQRSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gY29udGVudHMubmFtZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBjb250ZW50cy5jcmVhdGVkO1xyXG4gICAgICAgIHRoaXMuZ29hbExpc3QgPSBjb250ZW50cy5nb2FsTGlzdDtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gY29udGVudHMuaW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNvbnRlbnRzLmNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGlvblR5cGUgPSBjb250ZW50cy5jb21wbGV0aW9uVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRoaW5nID0gdGhpcy5hc3NvY2lhdGVkVGhpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdGhpcy5pc05ldztcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNOZXcpe1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0aW9uRGF0YXNldE5hbWUgPSBjcnlwdG8uY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUodGhpcy51cmwpLmRpZ2VzdChcImhleFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGlvbkhpc3RvcnkgPSBuZXcgRENvbXBsZXRpb25IaXN0b3J5KHRoaXMsIHRoaXMuX2NvbXBsZXRpb25EYXRhc2V0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoKXtcclxuICAgICAgICBhd2FpdCB0aGlzLl9jb21wbGV0aW9uSGlzdG9yeS5kZWxldGUoKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fY29tcGxldGlvbkhpc3Rvcnk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ29hbExpc3QuZGVsZXRlR29hbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcHVzaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuZGlydHkpe1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdvYWxMaXN0Lmluc2VydEdvYWwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxUaGluZyA9IHRoaXMuYXNzb2NpYXRlZFRoaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXZlcnQoKXtcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHRoaXMub3JpZ2luYWxUaGluZztcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNUaGluZ1ZhbGlkKHRoaW5nOiBUaGluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBnZXRVcmwodGhpbmcsIE5TLlRZUEUpID09PSBIYWJpdE5TLlRZUEU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0aXplR29hbENvbnRlbnRzKGNvbnRlbnRzOiBER29hbENvbnRlbnRzKXtcclxuICAgICAgICBjb250ZW50cy5jcmVhdGVkID0gY29udGVudHMuY3JlYXRlZCA/PyBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnRlbnRzLmludGVydmFsID0gY29udGVudHMuaW50ZXJ2YWwgPz8gR29hbEludGVydmFsLkRBWTtcclxuICAgICAgICBjb250ZW50cy5jYXRlZ29yeSA9IGNvbnRlbnRzLmNhdGVnb3J5ID8/IEdvYWxDYXRlZ29yeS5HRU5FUkFMO1xyXG4gICAgICAgIGNvbnRlbnRzLmNvbXBsZXRpb25UeXBlID0gY29udGVudHMuY29tcGxldGlvblR5cGUgPz8gQ29tcGxldGlvblR5cGUuQk9PTEVBTjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbVRoaW5nKHRoaW5nOiBUaGluZywgZ29hbExpc3Q6IERHb2FsTGlzdCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBER29hbChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZ2V0U3RyaW5nTm9Mb2NhbGUodGhpbmcsIEhhYml0TlMuTkFNRSksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBnZXREYXRldGltZSh0aGluZywgSGFiaXROUy5DUkVBVEVEKSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogZ2V0SW50ZWdlcih0aGluZywgSGFiaXROUy5JTlRFUlZBTCksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZ2V0SW50ZWdlcih0aGluZywgSGFiaXROUy5DQVRFR09SWSksXHJcblxyXG4gICAgICAgICAgICAgICAgY29tcGxldGlvblR5cGU6IGdldEludGVnZXIodGhpbmcsIEhhYml0TlMuQ09NUExFVElPTlRZUEUpLFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaW5nOiB0aGluZyxcclxuICAgICAgICAgICAgICAgIGdvYWxMaXN0OiBnb2FsTGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgREdvYWwsIEhhYml0TlMgfTsiXSwic291cmNlUm9vdCI6IiJ9