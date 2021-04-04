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
        console.log("Attempted to set date", to, this.isNew, this.associatedThing, this.originalThing);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9ER29hbC50cyJdLCJuYW1lcyI6WyJER29hbCIsImNvbnRlbnRzIiwiaXNOZXciLCJkZWZhdWx0aXplR29hbENvbnRlbnRzIiwiYXNzb2NpYXRlZFRoaW5nIiwidGhpbmciLCJjcmVhdGVUaGluZyIsInNldFVybCIsIk5TIiwiVFlQRSIsIkhhYml0TlMiLCJuYW1lIiwiY3JlYXRlZCIsImdvYWxMaXN0IiwiaW50ZXJ2YWwiLCJjYXRlZ29yeSIsImNvbXBsZXRpb25UeXBlIiwib3JpZ2luYWxUaGluZyIsIl9kaXJ0eSIsIl9jb21wbGV0aW9uRGF0YXNldE5hbWUiLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwidXJsIiwiZGlnZXN0IiwiX2NvbXBsZXRpb25IaXN0b3J5IiwiRENvbXBsZXRpb25IaXN0b3J5IiwibmV3R29hbExpc3QiLCJFcnJvciIsIl9uYW1lIiwidG8iLCJzZXRTdHJpbmdOb0xvY2FsZSIsIk5BTUUiLCJjb250YW1pbmF0ZSIsImdldERhdGV0aW1lIiwiQ1JFQVRFRCIsInNldERhdGV0aW1lIiwiY29uc29sZSIsImxvZyIsInJlbGF0aXZlRGF0ZSIsIl9pbnRlcnZhbCIsInNldEludGVnZXIiLCJkZWxldGVBbGxJbnRzIiwiSU5URVJWQUwiLCJfY2F0ZWdvcnkiLCJDQVRFR09SWSIsIl9jb21wbGV0aW9uVHlwZSIsIkNPTVBMRVRJT05UWVBFIiwiYXNVcmwiLCJiYXNlNjR1cmwiLCJlbmNvZGUiLCJkZWxldGVHb2FsIiwiZGlydHkiLCJpbnNlcnRHb2FsIiwiZ2V0VXJsIiwiRGF0ZSIsIkdvYWxJbnRlcnZhbCIsIkRBWSIsIkdvYWxDYXRlZ29yeSIsIkdFTkVSQUwiLCJDb21wbGV0aW9uVHlwZSIsIkJPT0xFQU4iLCJnZXRTdHJpbmdOb0xvY2FsZSIsImdldEludGVnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQTtBQUNBO0FB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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICAgIGFzVXJsLFxyXG4gICAgY3JlYXRlVGhpbmcsXHJcblxyXG4gICAgc2V0SW50ZWdlcixcclxuICAgIGdldEludGVnZXIsXHJcbiAgICBcclxuICAgIHNldFVybCxcclxuICAgIGdldFVybCxcclxuICAgIFxyXG4gICAgZ2V0RGF0ZXRpbWUsXHJcbiAgICBzZXREYXRldGltZSxcclxuICAgIFxyXG4gICAgc2V0U3RyaW5nTm9Mb2NhbGUsXHJcbiAgICBnZXRTdHJpbmdOb0xvY2FsZSxcclxuICAgIFxyXG4gICAgVGhpbmdcclxufSBmcm9tIFwiQGlucnVwdC9zb2xpZC1jbGllbnRcIjtcclxuXHJcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xyXG5pbXBvcnQgYmFzZTY0dXJsIGZyb20gXCJiYXNlNjR1cmxcIjtcclxuaW1wb3J0IHJlbGF0aXZlRGF0ZSBmcm9tIFwidGlueS1yZWxhdGl2ZS1kYXRlXCI7XHJcblxyXG5pbXBvcnQgeyBDb21wbGV0aW9uVHlwZSwgR29hbENhdGVnb3J5LCBHb2FsSW50ZXJ2YWwsIEhhYml0TlMgfSBmcm9tIFwiLi9Hb2FsRm9ybWF0XCI7XHJcbmltcG9ydCB7IE5TLCBkZWxldGVBbGxJbnRzIH0gZnJvbSBcIi4vU29saWRVdGlsXCI7XHJcbmltcG9ydCBER29hbExpc3QgZnJvbSBcIi4vREdvYWxMaXN0XCI7XHJcblxyXG5pbXBvcnQgRENvbXBsZXRpb25IaXN0b3J5IGZyb20gXCIuL0NvbXBsZXRpb25zL0RDb21wbGV0aW9uSGlzdG9yeVwiO1xyXG5cclxuXHJcbnR5cGUgREdvYWxDb250ZW50cyA9IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGNyZWF0ZWQ/OiBEYXRlLFxyXG4gICAgaW50ZXJ2YWw/OiBHb2FsSW50ZXJ2YWwsXHJcbiAgICBjYXRlZ29yeT86IEdvYWxDYXRlZ29yeSxcclxuICAgIGNvbXBsZXRpb25UeXBlPzogQ29tcGxldGlvblR5cGUsXHJcblxyXG4gICAgdGhpbmc/OiBUaGluZyxcclxuICAgIGdvYWxMaXN0PzogREdvYWxMaXN0XHJcbn07XHJcblxyXG5jbGFzcyBER29hbCB7XHJcbiAgICBwcml2YXRlIGdvYWxMaXN0OiBER29hbExpc3Q7XHJcbiAgICBwdWJsaWMgYXNzb2NpYXRlVG8obmV3R29hbExpc3Q6IERHb2FsTGlzdCl7XHJcbiAgICAgICAgaWYodGhpcy5nb2FsTGlzdCA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5nb2FsTGlzdCA9IG5ld0dvYWxMaXN0O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0IHRvIGFzc29jaWF0ZSBhbiBhbHJlYWR5IGFzc29jaWF0ZWQgaGFiaXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXNzb2NpYXRlZEdvYWxMaXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ29hbExpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29udGFtaW5hdGUoKXtcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9ICh0aGlzLm9yaWdpbmFsVGhpbmcgIT0gdGhpcy5hc3NvY2lhdGVkVGhpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGdldCBkaXJ0eSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXJ0eTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTmV3OiBib29sZWFuO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9pbnRlcnZhbDogR29hbEludGVydmFsO1xyXG4gICAgcHJpdmF0ZSBfY2F0ZWdvcnk6IEdvYWxDYXRlZ29yeTtcclxuICAgIHByaXZhdGUgX2NvbXBsZXRpb25UeXBlOiBDb21wbGV0aW9uVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIF9jb21wbGV0aW9uRGF0YXNldE5hbWUgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfY29tcGxldGlvbkhpc3Rvcnk6IERDb21wbGV0aW9uSGlzdG9yeTtcclxuICAgIHB1YmxpYyBnZXQgY29tcGxldGlvbkhpc3RvcnkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGlvbkhpc3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jcmVnaW9uIEdldHRlcnMgYW5kIFNldHRlcnNcclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBuYW1lKHRvOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldFN0cmluZ05vTG9jYWxlKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLk5BTUUsIHRvKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YW1pbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY3JlYXRlZCgpe1xyXG4gICAgICAgIHJldHVybiBnZXREYXRldGltZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DUkVBVEVEKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNyZWF0ZWQodG86IERhdGUpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNOZXcpe1xyXG4gICAgICAgICAgICBzZXREYXRldGltZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DUkVBVEVELCB0byk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdHRlbXB0ZWQgdG8gc2V0IGRhdGVcIix0byx0aGlzLmlzTmV3LHRoaXMuYXNzb2NpYXRlZFRoaW5nLHRoaXMub3JpZ2luYWxUaGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGh1bWFuLXJlYWRhYmxlXHJcbiAgICBwdWJsaWMgZ2V0IGNyZWF0ZWRfcmVsYXRpdmUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcmVsYXRpdmVEYXRlKHRoaXMuY3JlYXRlZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgaW50ZXJ2YWwoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGludGVydmFsKHRvOiBHb2FsSW50ZXJ2YWwpe1xyXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gdG87XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRJbnRlZ2VyKFxyXG4gICAgICAgICAgICBkZWxldGVBbGxJbnRzKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLklOVEVSVkFMKSwgSGFiaXROUy5JTlRFUlZBTCwgdG8pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhbWluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYXRlZ29yeSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXRlZ29yeTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgY2F0ZWdvcnkodG86IEdvYWxDYXRlZ29yeSl7XHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnkgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ0FURUdPUlkpLCBIYWJpdE5TLkNBVEVHT1JZLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbXBsZXRpb25UeXBlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRpb25UeXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjb21wbGV0aW9uVHlwZSh0bzogQ29tcGxldGlvblR5cGUpe1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRpb25UeXBlID0gdG87XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRJbnRlZ2VyKFxyXG4gICAgICAgICAgICBkZWxldGVBbGxJbnRzKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLkNPTVBMRVRJT05UWVBFKSwgSGFiaXROUy5DT01QTEVUSU9OVFlQRSwgdG8pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhbWluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gVXJsIHRvIFRoaW5nXHJcbiAgICBwdWJsaWMgZ2V0IHVybCgpe1xyXG4gICAgICAgIHJldHVybiBhc1VybCh0aGlzLm9yaWdpbmFsVGhpbmcsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB1cmw2NCgpe1xyXG4gICAgICAgIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKHRoaXMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsVGhpbmc6IFRoaW5nO1xyXG4gICAgcHJpdmF0ZSBhc3NvY2lhdGVkVGhpbmc6IFRoaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGhpbmcoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NvY2lhdGVkVGhpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGVudHM6IERHb2FsQ29udGVudHMpe1xyXG4gICAgICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29udGVudHMgPSBER29hbC5kZWZhdWx0aXplR29hbENvbnRlbnRzKGNvbnRlbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBjb250ZW50cy50aGluZztcclxuICAgICAgICBpZighdGhpcy5hc3NvY2lhdGVkVGhpbmcpe1xyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IGNyZWF0ZVRoaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gc2V0VXJsKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBOUy5UWVBFLCBIYWJpdE5TLlRZUEUpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IGNvbnRlbnRzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gY29udGVudHMuY3JlYXRlZDtcclxuICAgICAgICB0aGlzLmdvYWxMaXN0ID0gY29udGVudHMuZ29hbExpc3Q7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IGNvbnRlbnRzLmludGVydmFsO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjb250ZW50cy5jYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRpb25UeXBlID0gY29udGVudHMuY29tcGxldGlvblR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMub3JpZ2luYWxUaGluZyA9IHRoaXMuYXNzb2NpYXRlZFRoaW5nO1xyXG5cclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRoaXMuaXNOZXc7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmlzTmV3KXtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGlvbkRhdGFzZXROYW1lID0gY3J5cHRvLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKHRoaXMudXJsKS5kaWdlc3QoXCJoZXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRpb25IaXN0b3J5ID0gbmV3IERDb21wbGV0aW9uSGlzdG9yeSh0aGlzLCB0aGlzLl9jb21wbGV0aW9uRGF0YXNldE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKCl7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fY29tcGxldGlvbkhpc3RvcnkuZGVsZXRlKCk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbXBsZXRpb25IaXN0b3J5O1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmdvYWxMaXN0LmRlbGV0ZUdvYWwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHB1c2goKXtcclxuICAgICAgICBpZih0aGlzLmRpcnR5KXtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nb2FsTGlzdC5pbnNlcnRHb2FsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsVGhpbmcgPSB0aGlzLmFzc29jaWF0ZWRUaGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV2ZXJ0KCl7XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSB0aGlzLm9yaWdpbmFsVGhpbmc7XHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVGhpbmdWYWxpZCh0aGluZzogVGhpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZ2V0VXJsKHRoaW5nLCBOUy5UWVBFKSA9PT0gSGFiaXROUy5UWVBFO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdGl6ZUdvYWxDb250ZW50cyhjb250ZW50czogREdvYWxDb250ZW50cyl7XHJcbiAgICAgICAgY29udGVudHMuY3JlYXRlZCA9IGNvbnRlbnRzLmNyZWF0ZWQgPz8gbmV3IERhdGUoKTtcclxuICAgICAgICBjb250ZW50cy5pbnRlcnZhbCA9IGNvbnRlbnRzLmludGVydmFsID8/IEdvYWxJbnRlcnZhbC5EQVk7XHJcbiAgICAgICAgY29udGVudHMuY2F0ZWdvcnkgPSBjb250ZW50cy5jYXRlZ29yeSA/PyBHb2FsQ2F0ZWdvcnkuR0VORVJBTDtcclxuICAgICAgICBjb250ZW50cy5jb21wbGV0aW9uVHlwZSA9IGNvbnRlbnRzLmNvbXBsZXRpb25UeXBlID8/IENvbXBsZXRpb25UeXBlLkJPT0xFQU47XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21UaGluZyh0aGluZzogVGhpbmcsIGdvYWxMaXN0OiBER29hbExpc3Qpe1xyXG4gICAgICAgIHJldHVybiBuZXcgREdvYWwoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGdldFN0cmluZ05vTG9jYWxlKHRoaW5nLCBIYWJpdE5TLk5BTUUpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZDogZ2V0RGF0ZXRpbWUodGhpbmcsIEhhYml0TlMuQ1JFQVRFRCksXHJcblxyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6IGdldEludGVnZXIodGhpbmcsIEhhYml0TlMuSU5URVJWQUwpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGdldEludGVnZXIodGhpbmcsIEhhYml0TlMuQ0FURUdPUlkpLFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25UeXBlOiBnZXRJbnRlZ2VyKHRoaW5nLCBIYWJpdE5TLkNPTVBMRVRJT05UWVBFKSxcclxuXHJcbiAgICAgICAgICAgICAgICB0aGluZzogdGhpbmcsXHJcbiAgICAgICAgICAgICAgICBnb2FsTGlzdDogZ29hbExpc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERHb2FsLCBIYWJpdE5TIH07Il0sInNvdXJjZVJvb3QiOiIifQ==