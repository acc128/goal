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
        console.log("Set date to", to);
        this.associatedThing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setDatetime"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CREATED, to);
        console.log("Now", this.created);
        this.contaminate();
      } else {
        if (this.name.includes("debug")) console.log(this.created, this.created == null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9ER29hbC50cyJdLCJuYW1lcyI6WyJER29hbCIsImNvbnRlbnRzIiwiaXNOZXciLCJkZWZhdWx0aXplR29hbENvbnRlbnRzIiwiYXNzb2NpYXRlZFRoaW5nIiwidGhpbmciLCJjcmVhdGVUaGluZyIsInNldFVybCIsIk5TIiwiVFlQRSIsIkhhYml0TlMiLCJuYW1lIiwiY3JlYXRlZCIsImdvYWxMaXN0IiwiaW50ZXJ2YWwiLCJjYXRlZ29yeSIsImNvbXBsZXRpb25UeXBlIiwib3JpZ2luYWxUaGluZyIsIl9kaXJ0eSIsIl9jb21wbGV0aW9uRGF0YXNldE5hbWUiLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwidXJsIiwiZGlnZXN0IiwiX2NvbXBsZXRpb25IaXN0b3J5IiwiRENvbXBsZXRpb25IaXN0b3J5IiwibmV3R29hbExpc3QiLCJFcnJvciIsIl9uYW1lIiwidG8iLCJzZXRTdHJpbmdOb0xvY2FsZSIsIk5BTUUiLCJjb250YW1pbmF0ZSIsImdldERhdGV0aW1lIiwiQ1JFQVRFRCIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRldGltZSIsImluY2x1ZGVzIiwicmVsYXRpdmVEYXRlIiwiX2ludGVydmFsIiwic2V0SW50ZWdlciIsImRlbGV0ZUFsbEludHMiLCJJTlRFUlZBTCIsIl9jYXRlZ29yeSIsIkNBVEVHT1JZIiwiX2NvbXBsZXRpb25UeXBlIiwiQ09NUExFVElPTlRZUEUiLCJhc1VybCIsImJhc2U2NHVybCIsImVuY29kZSIsImRlbGV0ZUdvYWwiLCJkaXJ0eSIsImluc2VydEdvYWwiLCJnZXRVcmwiLCJEYXRlIiwiR29hbEludGVydmFsIiwiREFZIiwiR29hbENhdGVnb3J5IiwiR0VORVJBTCIsIkNvbXBsZXRpb25UeXBlIiwiQk9PTEVBTiIsImdldFN0cmluZ05vTG9jYWxlIiwiZ2V0SW50ZWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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VSxDQUFDM0QsS0FBRCxFQUFRSyxtREFBTyxDQUFDc0MsY0FBaEIsQ0FQOUI7QUFTSTNDLGFBQUssRUFBRUEsS0FUWDtBQVVJUSxnQkFBUSxFQUFFQTtBQVZkLE9BREcsQ0FBUDtBQWNIOzs7Ozs7QUFHTCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNGJlYjNkYjE2MDAwN2NiMGM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXHJcbiAgICBhc1VybCxcclxuICAgIGNyZWF0ZVRoaW5nLFxyXG5cclxuICAgIHNldEludGVnZXIsXHJcbiAgICBnZXRJbnRlZ2VyLFxyXG4gICAgXHJcbiAgICBzZXRVcmwsXHJcbiAgICBnZXRVcmwsXHJcbiAgICBcclxuICAgIGdldERhdGV0aW1lLFxyXG4gICAgc2V0RGF0ZXRpbWUsXHJcbiAgICBcclxuICAgIHNldFN0cmluZ05vTG9jYWxlLFxyXG4gICAgZ2V0U3RyaW5nTm9Mb2NhbGUsXHJcbiAgICBcclxuICAgIFRoaW5nXHJcbn0gZnJvbSBcIkBpbnJ1cHQvc29saWQtY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcclxuaW1wb3J0IGJhc2U2NHVybCBmcm9tIFwiYmFzZTY0dXJsXCI7XHJcbmltcG9ydCByZWxhdGl2ZURhdGUgZnJvbSBcInRpbnktcmVsYXRpdmUtZGF0ZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29tcGxldGlvblR5cGUsIEdvYWxDYXRlZ29yeSwgR29hbEludGVydmFsLCBIYWJpdE5TIH0gZnJvbSBcIi4vR29hbEZvcm1hdFwiO1xyXG5pbXBvcnQgeyBOUywgZGVsZXRlQWxsSW50cyB9IGZyb20gXCIuL1NvbGlkVXRpbFwiO1xyXG5pbXBvcnQgREdvYWxMaXN0IGZyb20gXCIuL0RHb2FsTGlzdFwiO1xyXG5cclxuaW1wb3J0IERDb21wbGV0aW9uSGlzdG9yeSBmcm9tIFwiLi9Db21wbGV0aW9ucy9EQ29tcGxldGlvbkhpc3RvcnlcIjtcclxuXHJcblxyXG50eXBlIERHb2FsQ29udGVudHMgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBjcmVhdGVkPzogRGF0ZSxcclxuICAgIGludGVydmFsPzogR29hbEludGVydmFsLFxyXG4gICAgY2F0ZWdvcnk/OiBHb2FsQ2F0ZWdvcnksXHJcbiAgICBjb21wbGV0aW9uVHlwZT86IENvbXBsZXRpb25UeXBlLFxyXG5cclxuICAgIHRoaW5nPzogVGhpbmcsXHJcbiAgICBnb2FsTGlzdD86IERHb2FsTGlzdFxyXG59O1xyXG5cclxuY2xhc3MgREdvYWwge1xyXG4gICAgcHJpdmF0ZSBnb2FsTGlzdDogREdvYWxMaXN0O1xyXG4gICAgcHVibGljIGFzc29jaWF0ZVRvKG5ld0dvYWxMaXN0OiBER29hbExpc3Qpe1xyXG4gICAgICAgIGlmKHRoaXMuZ29hbExpc3QgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ29hbExpc3QgPSBuZXdHb2FsTGlzdDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdCB0byBhc3NvY2lhdGUgYW4gYWxyZWFkeSBhc3NvY2lhdGVkIGhhYml0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFzc29jaWF0ZWRHb2FsTGlzdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdvYWxMaXN0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbnRhbWluYXRlKCl7XHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSAodGhpcy5vcmlnaW5hbFRoaW5nICE9IHRoaXMuYXNzb2NpYXRlZFRoaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgZGlydHkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlydHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ldzogYm9vbGVhbjtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWw6IEdvYWxJbnRlcnZhbDtcclxuICAgIHByaXZhdGUgX2NhdGVnb3J5OiBHb2FsQ2F0ZWdvcnk7XHJcbiAgICBwcml2YXRlIF9jb21wbGV0aW9uVHlwZTogQ29tcGxldGlvblR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29tcGxldGlvbkRhdGFzZXROYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgX2NvbXBsZXRpb25IaXN0b3J5OiBEQ29tcGxldGlvbkhpc3Rvcnk7XHJcbiAgICBwdWJsaWMgZ2V0IGNvbXBsZXRpb25IaXN0b3J5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRpb25IaXN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vI3JlZ2lvbiBHZXR0ZXJzIGFuZCBTZXR0ZXJzXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh0bzogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdG87XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRTdHJpbmdOb0xvY2FsZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5OQU1FLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNyZWF0ZWQoKXtcclxuICAgICAgICByZXR1cm4gZ2V0RGF0ZXRpbWUodGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ1JFQVRFRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjcmVhdGVkKHRvOiBEYXRlKXtcclxuICAgICAgICBpZih0aGlzLmlzTmV3IHx8IHRoaXMuY3JlYXRlZCA9PSBudWxsKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXQgZGF0ZSB0b1wiLHRvKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXREYXRldGltZSh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DUkVBVEVELCB0byk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm93XCIsdGhpcy5jcmVhdGVkKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YW1pbmF0ZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZih0aGlzLm5hbWUuaW5jbHVkZXMoXCJkZWJ1Z1wiKSkgY29uc29sZS5sb2codGhpcy5jcmVhdGVkLCB0aGlzLmNyZWF0ZWQgPT0gbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGh1bWFuLXJlYWRhYmxlXHJcbiAgICBwdWJsaWMgZ2V0IGNyZWF0ZWRfcmVsYXRpdmUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcmVsYXRpdmVEYXRlKHRoaXMuY3JlYXRlZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgaW50ZXJ2YWwoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGludGVydmFsKHRvOiBHb2FsSW50ZXJ2YWwpe1xyXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gdG87XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRJbnRlZ2VyKFxyXG4gICAgICAgICAgICBkZWxldGVBbGxJbnRzKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLklOVEVSVkFMKSwgSGFiaXROUy5JTlRFUlZBTCwgdG8pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhbWluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYXRlZ29yeSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXRlZ29yeTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgY2F0ZWdvcnkodG86IEdvYWxDYXRlZ29yeSl7XHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnkgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ0FURUdPUlkpLCBIYWJpdE5TLkNBVEVHT1JZLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbXBsZXRpb25UeXBlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRpb25UeXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjb21wbGV0aW9uVHlwZSh0bzogQ29tcGxldGlvblR5cGUpe1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRpb25UeXBlID0gdG87XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRJbnRlZ2VyKFxyXG4gICAgICAgICAgICBkZWxldGVBbGxJbnRzKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLkNPTVBMRVRJT05UWVBFKSwgSGFiaXROUy5DT01QTEVUSU9OVFlQRSwgdG8pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhbWluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gVXJsIHRvIFRoaW5nXHJcbiAgICBwdWJsaWMgZ2V0IHVybCgpe1xyXG4gICAgICAgIHJldHVybiBhc1VybCh0aGlzLm9yaWdpbmFsVGhpbmcsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB1cmw2NCgpe1xyXG4gICAgICAgIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKHRoaXMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsVGhpbmc6IFRoaW5nO1xyXG4gICAgcHJpdmF0ZSBhc3NvY2lhdGVkVGhpbmc6IFRoaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGhpbmcoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NvY2lhdGVkVGhpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGVudHM6IERHb2FsQ29udGVudHMpe1xyXG4gICAgICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29udGVudHMgPSBER29hbC5kZWZhdWx0aXplR29hbENvbnRlbnRzKGNvbnRlbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBjb250ZW50cy50aGluZztcclxuICAgICAgICBpZighdGhpcy5hc3NvY2lhdGVkVGhpbmcpe1xyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IGNyZWF0ZVRoaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gc2V0VXJsKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBOUy5UWVBFLCBIYWJpdE5TLlRZUEUpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IGNvbnRlbnRzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gY29udGVudHMuY3JlYXRlZDtcclxuICAgICAgICB0aGlzLmdvYWxMaXN0ID0gY29udGVudHMuZ29hbExpc3Q7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IGNvbnRlbnRzLmludGVydmFsO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjb250ZW50cy5jYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRpb25UeXBlID0gY29udGVudHMuY29tcGxldGlvblR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMub3JpZ2luYWxUaGluZyA9IHRoaXMuYXNzb2NpYXRlZFRoaW5nO1xyXG5cclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRoaXMuaXNOZXc7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmlzTmV3KXtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGlvbkRhdGFzZXROYW1lID0gY3J5cHRvLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKHRoaXMudXJsKS5kaWdlc3QoXCJoZXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRpb25IaXN0b3J5ID0gbmV3IERDb21wbGV0aW9uSGlzdG9yeSh0aGlzLCB0aGlzLl9jb21wbGV0aW9uRGF0YXNldE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKCl7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fY29tcGxldGlvbkhpc3RvcnkuZGVsZXRlKCk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbXBsZXRpb25IaXN0b3J5O1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmdvYWxMaXN0LmRlbGV0ZUdvYWwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHB1c2goKXtcclxuICAgICAgICBpZih0aGlzLmRpcnR5KXtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nb2FsTGlzdC5pbnNlcnRHb2FsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsVGhpbmcgPSB0aGlzLmFzc29jaWF0ZWRUaGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV2ZXJ0KCl7XHJcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSB0aGlzLm9yaWdpbmFsVGhpbmc7XHJcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzVGhpbmdWYWxpZCh0aGluZzogVGhpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZ2V0VXJsKHRoaW5nLCBOUy5UWVBFKSA9PT0gSGFiaXROUy5UWVBFO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdGl6ZUdvYWxDb250ZW50cyhjb250ZW50czogREdvYWxDb250ZW50cyl7XHJcbiAgICAgICAgY29udGVudHMuY3JlYXRlZCA9IGNvbnRlbnRzLmNyZWF0ZWQgPz8gbmV3IERhdGUoKTtcclxuICAgICAgICBjb250ZW50cy5pbnRlcnZhbCA9IGNvbnRlbnRzLmludGVydmFsID8/IEdvYWxJbnRlcnZhbC5EQVk7XHJcbiAgICAgICAgY29udGVudHMuY2F0ZWdvcnkgPSBjb250ZW50cy5jYXRlZ29yeSA/PyBHb2FsQ2F0ZWdvcnkuR0VORVJBTDtcclxuICAgICAgICBjb250ZW50cy5jb21wbGV0aW9uVHlwZSA9IGNvbnRlbnRzLmNvbXBsZXRpb25UeXBlID8/IENvbXBsZXRpb25UeXBlLkJPT0xFQU47XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21UaGluZyh0aGluZzogVGhpbmcsIGdvYWxMaXN0OiBER29hbExpc3Qpe1xyXG4gICAgICAgIHJldHVybiBuZXcgREdvYWwoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGdldFN0cmluZ05vTG9jYWxlKHRoaW5nLCBIYWJpdE5TLk5BTUUpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZDogZ2V0RGF0ZXRpbWUodGhpbmcsIEhhYml0TlMuQ1JFQVRFRCksXHJcblxyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6IGdldEludGVnZXIodGhpbmcsIEhhYml0TlMuSU5URVJWQUwpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGdldEludGVnZXIodGhpbmcsIEhhYml0TlMuQ0FURUdPUlkpLFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25UeXBlOiBnZXRJbnRlZ2VyKHRoaW5nLCBIYWJpdE5TLkNPTVBMRVRJT05UWVBFKSxcclxuXHJcbiAgICAgICAgICAgICAgICB0aGluZzogdGhpbmcsXHJcbiAgICAgICAgICAgICAgICBnb2FsTGlzdDogZ29hbExpc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERHb2FsLCBIYWJpdE5TIH07Il0sInNvdXJjZVJvb3QiOiIifQ==