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
        Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setDatetime"])(this.associatedThing, _GoalFormat__WEBPACK_IMPORTED_MODULE_9__["HabitNS"].CREATED, to);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9ER29hbC50cyJdLCJuYW1lcyI6WyJER29hbCIsImNvbnRlbnRzIiwiaXNOZXciLCJkZWZhdWx0aXplR29hbENvbnRlbnRzIiwiYXNzb2NpYXRlZFRoaW5nIiwidGhpbmciLCJjcmVhdGVUaGluZyIsInNldFVybCIsIk5TIiwiVFlQRSIsIkhhYml0TlMiLCJuYW1lIiwiY3JlYXRlZCIsImdvYWxMaXN0IiwiaW50ZXJ2YWwiLCJjYXRlZ29yeSIsImNvbXBsZXRpb25UeXBlIiwib3JpZ2luYWxUaGluZyIsIl9kaXJ0eSIsIl9jb21wbGV0aW9uRGF0YXNldE5hbWUiLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwidXJsIiwiZGlnZXN0IiwiX2NvbXBsZXRpb25IaXN0b3J5IiwiRENvbXBsZXRpb25IaXN0b3J5IiwibmV3R29hbExpc3QiLCJFcnJvciIsIl9uYW1lIiwidG8iLCJzZXRTdHJpbmdOb0xvY2FsZSIsIk5BTUUiLCJjb250YW1pbmF0ZSIsImdldERhdGV0aW1lIiwiQ1JFQVRFRCIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRldGltZSIsImluY2x1ZGVzIiwicmVsYXRpdmVEYXRlIiwiX2ludGVydmFsIiwic2V0SW50ZWdlciIsImRlbGV0ZUFsbEludHMiLCJJTlRFUlZBTCIsIl9jYXRlZ29yeSIsIkNBVEVHT1JZIiwiX2NvbXBsZXRpb25UeXBlIiwiQ09NUExFVElPTlRZUEUiLCJhc1VybCIsImJhc2U2NHVybCIsImVuY29kZSIsImRlbGV0ZUdvYWwiLCJkaXJ0eSIsImluc2VydEdvYWwiLCJnZXRVcmwiLCJEYXRlIiwiR29hbEludGVydmFsIiwiREFZIiwiR29hbENhdGVnb3J5IiwiR0VORVJBTCIsIkNvbXBsZXRpb25UeXBlIiwiQk9PTEVBTiIsImdldFN0cmluZ05vTG9jYWxlIiwiZ2V0SW50ZWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7SUFjTUEsSztBQXlIRixpQkFBWUMsUUFBWixFQUFvQztBQUFBOztBQUFBOztBQUFBLDhHQXRHbkIsS0FzR21COztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLDhIQXhGSCxFQXdGRzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDaEMsU0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFFQUQsWUFBUSxHQUFHRCxLQUFLLENBQUNHLHNCQUFOLENBQTZCRixRQUE3QixDQUFYO0FBRUEsU0FBS0csZUFBTCxHQUF1QkgsUUFBUSxDQUFDSSxLQUFoQzs7QUFDQSxRQUFHLENBQUMsS0FBS0QsZUFBVCxFQUF5QjtBQUNyQjtBQUNBLFdBQUtBLGVBQUwsR0FBdUJFLHdFQUFXLEVBQWxDO0FBQ0EsV0FBS0YsZUFBTCxHQUF1QkcsbUVBQU0sQ0FBQyxLQUFLSCxlQUFOLEVBQXVCSSw4Q0FBRSxDQUFDQyxJQUExQixFQUFnQ0MsbURBQU8sQ0FBQ0QsSUFBeEMsQ0FBN0I7QUFDQSxXQUFLUCxLQUFMLEdBQWEsSUFBYjtBQUNIOztBQUVELFNBQUtTLElBQUwsR0FBWVYsUUFBUSxDQUFDVSxJQUFyQjtBQUNBLFNBQUtDLE9BQUwsR0FBZVgsUUFBUSxDQUFDVyxPQUF4QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JaLFFBQVEsQ0FBQ1ksUUFBekI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCYixRQUFRLENBQUNhLFFBQXpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQmQsUUFBUSxDQUFDYyxRQUF6QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JmLFFBQVEsQ0FBQ2UsY0FBL0I7QUFFQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtiLGVBQTFCO0FBRUEsU0FBS2MsTUFBTCxHQUFjLEtBQUtoQixLQUFuQjs7QUFFQSxRQUFHLENBQUMsS0FBS0EsS0FBVCxFQUFlO0FBQ1gsV0FBS2lCLHNCQUFMLEdBQThCQyw2Q0FBTSxDQUFDQyxVQUFQLENBQWtCLFFBQWxCLEVBQTRCQyxNQUE1QixDQUFtQyxLQUFLQyxHQUF4QyxFQUE2Q0MsTUFBN0MsQ0FBb0QsS0FBcEQsQ0FBOUI7QUFDQSxXQUFLQyxrQkFBTCxHQUEwQixJQUFJQyx3RUFBSixDQUF1QixJQUF2QixFQUE2QixLQUFLUCxzQkFBbEMsQ0FBMUI7QUFDSDtBQUNKOzs7O1dBbkpELHFCQUFtQlEsV0FBbkIsRUFBMEM7QUFDdEMsVUFBRyxLQUFLZCxRQUFMLElBQWlCLElBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLFFBQUwsR0FBZ0JjLFdBQWhCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsY0FBTSxJQUFJQyxLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUNIO0FBQ0o7OztTQUVELGVBQStCO0FBQzNCLGFBQU8sS0FBS2YsUUFBWjtBQUNIOzs7V0FHRCx1QkFBcUI7QUFDakIsV0FBS0ssTUFBTCxHQUFlLEtBQUtELGFBQUwsSUFBc0IsS0FBS2IsZUFBMUM7QUFDSDs7O1NBSUQsZUFBa0I7QUFDZCxhQUFPLEtBQUtjLE1BQVo7QUFDSDs7O1NBWUQsZUFBOEI7QUFDMUIsYUFBTyxLQUFLTyxrQkFBWjtBQUNILEssQ0FFRDs7OztTQUNBLGVBQWlCO0FBQ2IsYUFBTyxLQUFLSSxLQUFaO0FBQ0gsSztTQUNELGFBQWdCQyxFQUFoQixFQUEyQjtBQUN2QixXQUFLRCxLQUFMLEdBQWFDLEVBQWI7QUFDQSxXQUFLMUIsZUFBTCxHQUF1QjJCLDhFQUFpQixDQUFDLEtBQUszQixlQUFOLEVBQXVCTSxtREFBTyxDQUFDc0IsSUFBL0IsRUFBcUNGLEVBQXJDLENBQXhDO0FBRUEsV0FBS0csV0FBTDtBQUNIOzs7U0FFRCxlQUFvQjtBQUNoQixhQUFPQyx3RUFBVyxDQUFDLEtBQUs5QixlQUFOLEVBQXVCTSxtREFBTyxDQUFDeUIsT0FBL0IsQ0FBbEI7QUFDSCxLO1NBRUQsYUFBbUJMLEVBQW5CLEVBQTRCO0FBQ3hCLFVBQUcsS0FBSzVCLEtBQUwsSUFBYyxLQUFLVSxPQUFMLElBQWdCLElBQWpDLEVBQXNDO0FBQ2xDd0IsZUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEwQlAsRUFBMUI7QUFDQVEsZ0ZBQVcsQ0FBQyxLQUFLbEMsZUFBTixFQUF1Qk0sbURBQU8sQ0FBQ3lCLE9BQS9CLEVBQXdDTCxFQUF4QyxDQUFYO0FBQ0FNLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBa0IsS0FBS3pCLE9BQXZCO0FBQ0EsYUFBS3FCLFdBQUw7QUFDSCxPQUxELE1BS0s7QUFDRCxZQUFHLEtBQUt0QixJQUFMLENBQVU0QixRQUFWLENBQW1CLE9BQW5CLENBQUgsRUFBZ0NILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt6QixPQUFqQixFQUEwQixLQUFLQSxPQUFMLElBQWdCLElBQTFDO0FBQ25DO0FBQ0osSyxDQUVEOzs7O1NBQ0EsZUFBc0M7QUFDbEMsYUFBTzRCLGtFQUFZLENBQUMsS0FBSzVCLE9BQU4sQ0FBbkI7QUFDSDs7O1NBR0QsZUFBcUI7QUFDakIsYUFBTyxLQUFLNkIsU0FBWjtBQUNILEs7U0FDRCxhQUFvQlgsRUFBcEIsRUFBcUM7QUFDakMsV0FBS1csU0FBTCxHQUFpQlgsRUFBakI7QUFDQSxXQUFLMUIsZUFBTCxHQUF1QnNDLHVFQUFVLENBQzdCQyxpRUFBYSxDQUFDLEtBQUt2QyxlQUFOLEVBQXVCTSxtREFBTyxDQUFDa0MsUUFBL0IsQ0FEZ0IsRUFDMEJsQyxtREFBTyxDQUFDa0MsUUFEbEMsRUFDNENkLEVBRDVDLENBQWpDO0FBR0EsV0FBS0csV0FBTDtBQUNIOzs7U0FFRCxlQUFxQjtBQUNqQixhQUFPLEtBQUtZLFNBQVo7QUFDSCxLO1NBQ0QsYUFBb0JmLEVBQXBCLEVBQXFDO0FBQ2pDLFdBQUtlLFNBQUwsR0FBaUJmLEVBQWpCO0FBQ0EsV0FBSzFCLGVBQUwsR0FBdUJzQyx1RUFBVSxDQUM3QkMsaUVBQWEsQ0FBQyxLQUFLdkMsZUFBTixFQUF1Qk0sbURBQU8sQ0FBQ29DLFFBQS9CLENBRGdCLEVBQzBCcEMsbURBQU8sQ0FBQ29DLFFBRGxDLEVBQzRDaEIsRUFENUMsQ0FBakM7QUFHQSxXQUFLRyxXQUFMO0FBQ0g7OztTQUVELGVBQTJCO0FBQ3ZCLGFBQU8sS0FBS2MsZUFBWjtBQUNILEs7U0FDRCxhQUEwQmpCLEVBQTFCLEVBQTZDO0FBQ3pDLFdBQUtpQixlQUFMLEdBQXVCakIsRUFBdkI7QUFDQSxXQUFLMUIsZUFBTCxHQUF1QnNDLHVFQUFVLENBQzdCQyxpRUFBYSxDQUFDLEtBQUt2QyxlQUFOLEVBQXVCTSxtREFBTyxDQUFDc0MsY0FBL0IsQ0FEZ0IsRUFDZ0N0QyxtREFBTyxDQUFDc0MsY0FEeEMsRUFDd0RsQixFQUR4RCxDQUFqQztBQUdBLFdBQUtHLFdBQUw7QUFDSCxLLENBRUQ7QUFFQTs7OztTQUNBLGVBQWdCO0FBQ1osYUFBT2dCLGtFQUFLLENBQUMsS0FBS2hDLGFBQU4sRUFBcUIsRUFBckIsQ0FBWjtBQUNIOzs7U0FDRCxlQUFrQjtBQUNkLGFBQU9pQyxnREFBUyxDQUFDQyxNQUFWLENBQWlCLEtBQUs1QixHQUF0QixDQUFQO0FBQ0g7OztTQUtELGVBQWtCO0FBQ2QsYUFBTyxLQUFLbkIsZUFBWjtBQUNIOzs7O3NNQWdDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVSxLQUFLcUIsa0JBQUwsWUFEVjs7QUFBQTtBQUVJLHVCQUFPLEtBQUtBLGtCQUFaO0FBRko7QUFBQSx1QkFJVSxLQUFLWixRQUFMLENBQWN1QyxVQUFkLENBQXlCLElBQXpCLENBSlY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7bU1BT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNPLEtBQUtDLEtBRFo7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFFYyxLQUFLeEMsUUFBTCxDQUFjeUMsVUFBZCxDQUF5QixJQUF6QixDQUZkOztBQUFBO0FBR1EscUJBQUtyQyxhQUFMLEdBQXFCLEtBQUtiLGVBQTFCOztBQUhSO0FBS0kscUJBQUtjLE1BQUwsR0FBYyxLQUFkOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FRQSxrQkFBZTtBQUNYLFdBQUtkLGVBQUwsR0FBdUIsS0FBS2EsYUFBNUI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNIOzs7V0FFRCxzQkFBMkJiLEtBQTNCLEVBQWtEO0FBQzlDLGFBQU9rRCxtRUFBTSxDQUFDbEQsS0FBRCxFQUFRRyw4Q0FBRSxDQUFDQyxJQUFYLENBQU4sS0FBMkJDLG1EQUFPLENBQUNELElBQTFDO0FBQ0g7OztXQUVELGdDQUFxQ1IsUUFBckMsRUFBNkQ7QUFBQTs7QUFDekRBLGNBQVEsQ0FBQ1csT0FBVCx3QkFBbUJYLFFBQVEsQ0FBQ1csT0FBNUIsaUVBQXVDLElBQUk0QyxJQUFKLEVBQXZDO0FBQ0F2RCxjQUFRLENBQUNhLFFBQVQseUJBQW9CYixRQUFRLENBQUNhLFFBQTdCLG1FQUF5QzJDLHdEQUFZLENBQUNDLEdBQXREO0FBQ0F6RCxjQUFRLENBQUNjLFFBQVQseUJBQW9CZCxRQUFRLENBQUNjLFFBQTdCLG1FQUF5QzRDLHdEQUFZLENBQUNDLE9BQXREO0FBQ0EzRCxjQUFRLENBQUNlLGNBQVQsNEJBQTBCZixRQUFRLENBQUNlLGNBQW5DLHlFQUFxRDZDLDBEQUFjLENBQUNDLE9BQXBFO0FBRUEsYUFBTzdELFFBQVA7QUFDSDs7O1dBRUQsbUJBQXdCSSxLQUF4QixFQUFzQ1EsUUFBdEMsRUFBMEQ7QUFDdEQsYUFBTyxJQUFJYixLQUFKLENBQ0g7QUFDSVcsWUFBSSxFQUFFb0QsOEVBQWlCLENBQUMxRCxLQUFELEVBQVFLLG1EQUFPLENBQUNzQixJQUFoQixDQUQzQjtBQUVJcEIsZUFBTyxFQUFFc0Isd0VBQVcsQ0FBQzdCLEtBQUQsRUFBUUssbURBQU8sQ0FBQ3lCLE9BQWhCLENBRnhCO0FBSUlyQixnQkFBUSxFQUFFa0QsdUVBQVUsQ0FBQzNELEtBQUQsRUFBUUssbURBQU8sQ0FBQ2tDLFFBQWhCLENBSnhCO0FBS0k3QixnQkFBUSxFQUFFaUQsdUVBQVUsQ0FBQzNELEtBQUQsRUFBUUssbURBQU8sQ0FBQ29DLFFBQWhCLENBTHhCO0FBT0k5QixzQkFBYyxFQUFFZ0QsdUVBQVUsQ0FBQzNELEtBQUQsRUFBUUssbURBQU8sQ0FBQ3NDLGNBQWhCLENBUDlCO0FBU0kzQyxhQUFLLEVBQUVBLEtBVFg7QUFVSVEsZ0JBQVEsRUFBRUE7QUFWZCxPQURHLENBQVA7QUFjSDs7Ozs7O0FBR0wiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmIxNzRjZGFhNzBmMThkNDNkMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxyXG4gICAgYXNVcmwsXHJcbiAgICBjcmVhdGVUaGluZyxcclxuXHJcbiAgICBzZXRJbnRlZ2VyLFxyXG4gICAgZ2V0SW50ZWdlcixcclxuICAgIFxyXG4gICAgc2V0VXJsLFxyXG4gICAgZ2V0VXJsLFxyXG4gICAgXHJcbiAgICBnZXREYXRldGltZSxcclxuICAgIHNldERhdGV0aW1lLFxyXG4gICAgXHJcbiAgICBzZXRTdHJpbmdOb0xvY2FsZSxcclxuICAgIGdldFN0cmluZ05vTG9jYWxlLFxyXG4gICAgXHJcbiAgICBUaGluZ1xyXG59IGZyb20gXCJAaW5ydXB0L3NvbGlkLWNsaWVudFwiO1xyXG5cclxuaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XHJcbmltcG9ydCBiYXNlNjR1cmwgZnJvbSBcImJhc2U2NHVybFwiO1xyXG5pbXBvcnQgcmVsYXRpdmVEYXRlIGZyb20gXCJ0aW55LXJlbGF0aXZlLWRhdGVcIjtcclxuXHJcbmltcG9ydCB7IENvbXBsZXRpb25UeXBlLCBHb2FsQ2F0ZWdvcnksIEdvYWxJbnRlcnZhbCwgSGFiaXROUyB9IGZyb20gXCIuL0dvYWxGb3JtYXRcIjtcclxuaW1wb3J0IHsgTlMsIGRlbGV0ZUFsbEludHMgfSBmcm9tIFwiLi9Tb2xpZFV0aWxcIjtcclxuaW1wb3J0IERHb2FsTGlzdCBmcm9tIFwiLi9ER29hbExpc3RcIjtcclxuXHJcbmltcG9ydCBEQ29tcGxldGlvbkhpc3RvcnkgZnJvbSBcIi4vQ29tcGxldGlvbnMvRENvbXBsZXRpb25IaXN0b3J5XCI7XHJcblxyXG5cclxudHlwZSBER29hbENvbnRlbnRzID0ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgY3JlYXRlZD86IERhdGUsXHJcbiAgICBpbnRlcnZhbD86IEdvYWxJbnRlcnZhbCxcclxuICAgIGNhdGVnb3J5PzogR29hbENhdGVnb3J5LFxyXG4gICAgY29tcGxldGlvblR5cGU/OiBDb21wbGV0aW9uVHlwZSxcclxuXHJcbiAgICB0aGluZz86IFRoaW5nLFxyXG4gICAgZ29hbExpc3Q/OiBER29hbExpc3RcclxufTtcclxuXHJcbmNsYXNzIERHb2FsIHtcclxuICAgIHByaXZhdGUgZ29hbExpc3Q6IERHb2FsTGlzdDtcclxuICAgIHB1YmxpYyBhc3NvY2lhdGVUbyhuZXdHb2FsTGlzdDogREdvYWxMaXN0KXtcclxuICAgICAgICBpZih0aGlzLmdvYWxMaXN0ID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmdvYWxMaXN0ID0gbmV3R29hbExpc3Q7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHQgdG8gYXNzb2NpYXRlIGFuIGFscmVhZHkgYXNzb2NpYXRlZCBoYWJpdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhc3NvY2lhdGVkR29hbExpc3QoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nb2FsTGlzdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb250YW1pbmF0ZSgpe1xyXG4gICAgICAgIHRoaXMuX2RpcnR5ID0gKHRoaXMub3JpZ2luYWxUaGluZyAhPSB0aGlzLmFzc29jaWF0ZWRUaGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpcnR5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNOZXc6IGJvb2xlYW47XHJcblxyXG5cclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2ludGVydmFsOiBHb2FsSW50ZXJ2YWw7XHJcbiAgICBwcml2YXRlIF9jYXRlZ29yeTogR29hbENhdGVnb3J5O1xyXG4gICAgcHJpdmF0ZSBfY29tcGxldGlvblR5cGU6IENvbXBsZXRpb25UeXBlO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbXBsZXRpb25EYXRhc2V0TmFtZSA9IFwiXCI7XHJcbiAgICBwcml2YXRlIF9jb21wbGV0aW9uSGlzdG9yeTogRENvbXBsZXRpb25IaXN0b3J5O1xyXG4gICAgcHVibGljIGdldCBjb21wbGV0aW9uSGlzdG9yeSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0aW9uSGlzdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24gR2V0dGVycyBhbmQgU2V0dGVyc1xyXG4gICAgcHVibGljIGdldCBuYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodG86IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHRvO1xyXG4gICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gc2V0U3RyaW5nTm9Mb2NhbGUodGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuTkFNRSwgdG8pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhbWluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjcmVhdGVkKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldERhdGV0aW1lKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLkNSRUFURUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY3JlYXRlZCh0bzogRGF0ZSl7XHJcbiAgICAgICAgaWYodGhpcy5pc05ldyB8fCB0aGlzLmNyZWF0ZWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0IGRhdGUgdG9cIix0byk7XHJcbiAgICAgICAgICAgIHNldERhdGV0aW1lKHRoaXMuYXNzb2NpYXRlZFRoaW5nLCBIYWJpdE5TLkNSRUFURUQsIHRvKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3dcIix0aGlzLmNyZWF0ZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhbWluYXRlKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubmFtZS5pbmNsdWRlcyhcImRlYnVnXCIpKSBjb25zb2xlLmxvZyh0aGlzLmNyZWF0ZWQsIHRoaXMuY3JlYXRlZCA9PSBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHVtYW4tcmVhZGFibGVcclxuICAgIHB1YmxpYyBnZXQgY3JlYXRlZF9yZWxhdGl2ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiByZWxhdGl2ZURhdGUodGhpcy5jcmVhdGVkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBpbnRlcnZhbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgaW50ZXJ2YWwodG86IEdvYWxJbnRlcnZhbCl7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuSU5URVJWQUwpLCBIYWJpdE5TLklOVEVSVkFMLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNhdGVnb3J5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjYXRlZ29yeSh0bzogR29hbENhdGVnb3J5KXtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IHRvO1xyXG4gICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gc2V0SW50ZWdlcihcclxuICAgICAgICAgICAgZGVsZXRlQWxsSW50cyh0aGlzLmFzc29jaWF0ZWRUaGluZywgSGFiaXROUy5DQVRFR09SWSksIEhhYml0TlMuQ0FURUdPUlksIHRvKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YW1pbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29tcGxldGlvblR5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGlvblR5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGNvbXBsZXRpb25UeXBlKHRvOiBDb21wbGV0aW9uVHlwZSl7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGlvblR5cGUgPSB0bztcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHNldEludGVnZXIoXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbEludHModGhpcy5hc3NvY2lhdGVkVGhpbmcsIEhhYml0TlMuQ09NUExFVElPTlRZUEUpLCBIYWJpdE5TLkNPTVBMRVRJT05UWVBFLCB0byk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyBVcmwgdG8gVGhpbmdcclxuICAgIHB1YmxpYyBnZXQgdXJsKCl7XHJcbiAgICAgICAgcmV0dXJuIGFzVXJsKHRoaXMub3JpZ2luYWxUaGluZywgXCJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHVybDY0KCl7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NHVybC5lbmNvZGUodGhpcy51cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3JpZ2luYWxUaGluZzogVGhpbmc7XHJcbiAgICBwcml2YXRlIGFzc29jaWF0ZWRUaGluZzogVGhpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCB0aGluZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc29jaWF0ZWRUaGluZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50czogREdvYWxDb250ZW50cyl7XHJcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb250ZW50cyA9IERHb2FsLmRlZmF1bHRpemVHb2FsQ29udGVudHMoY29udGVudHMpO1xyXG5cclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IGNvbnRlbnRzLnRoaW5nO1xyXG4gICAgICAgIGlmKCF0aGlzLmFzc29jaWF0ZWRUaGluZyl7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRoaW5nXHJcbiAgICAgICAgICAgIHRoaXMuYXNzb2NpYXRlZFRoaW5nID0gY3JlYXRlVGhpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NvY2lhdGVkVGhpbmcgPSBzZXRVcmwodGhpcy5hc3NvY2lhdGVkVGhpbmcsIE5TLlRZUEUsIEhhYml0TlMuVFlQRSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gY29udGVudHMubmFtZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBjb250ZW50cy5jcmVhdGVkO1xyXG4gICAgICAgIHRoaXMuZ29hbExpc3QgPSBjb250ZW50cy5nb2FsTGlzdDtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gY29udGVudHMuaW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNvbnRlbnRzLmNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGlvblR5cGUgPSBjb250ZW50cy5jb21wbGV0aW9uVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRoaW5nID0gdGhpcy5hc3NvY2lhdGVkVGhpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdGhpcy5pc05ldztcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNOZXcpe1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0aW9uRGF0YXNldE5hbWUgPSBjcnlwdG8uY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUodGhpcy51cmwpLmRpZ2VzdChcImhleFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGlvbkhpc3RvcnkgPSBuZXcgRENvbXBsZXRpb25IaXN0b3J5KHRoaXMsIHRoaXMuX2NvbXBsZXRpb25EYXRhc2V0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoKXtcclxuICAgICAgICBhd2FpdCB0aGlzLl9jb21wbGV0aW9uSGlzdG9yeS5kZWxldGUoKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fY29tcGxldGlvbkhpc3Rvcnk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ29hbExpc3QuZGVsZXRlR29hbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcHVzaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuZGlydHkpe1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdvYWxMaXN0Lmluc2VydEdvYWwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxUaGluZyA9IHRoaXMuYXNzb2NpYXRlZFRoaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXZlcnQoKXtcclxuICAgICAgICB0aGlzLmFzc29jaWF0ZWRUaGluZyA9IHRoaXMub3JpZ2luYWxUaGluZztcclxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNUaGluZ1ZhbGlkKHRoaW5nOiBUaGluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBnZXRVcmwodGhpbmcsIE5TLlRZUEUpID09PSBIYWJpdE5TLlRZUEU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0aXplR29hbENvbnRlbnRzKGNvbnRlbnRzOiBER29hbENvbnRlbnRzKXtcclxuICAgICAgICBjb250ZW50cy5jcmVhdGVkID0gY29udGVudHMuY3JlYXRlZCA/PyBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnRlbnRzLmludGVydmFsID0gY29udGVudHMuaW50ZXJ2YWwgPz8gR29hbEludGVydmFsLkRBWTtcclxuICAgICAgICBjb250ZW50cy5jYXRlZ29yeSA9IGNvbnRlbnRzLmNhdGVnb3J5ID8/IEdvYWxDYXRlZ29yeS5HRU5FUkFMO1xyXG4gICAgICAgIGNvbnRlbnRzLmNvbXBsZXRpb25UeXBlID0gY29udGVudHMuY29tcGxldGlvblR5cGUgPz8gQ29tcGxldGlvblR5cGUuQk9PTEVBTjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbVRoaW5nKHRoaW5nOiBUaGluZywgZ29hbExpc3Q6IERHb2FsTGlzdCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBER29hbChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZ2V0U3RyaW5nTm9Mb2NhbGUodGhpbmcsIEhhYml0TlMuTkFNRSksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBnZXREYXRldGltZSh0aGluZywgSGFiaXROUy5DUkVBVEVEKSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogZ2V0SW50ZWdlcih0aGluZywgSGFiaXROUy5JTlRFUlZBTCksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZ2V0SW50ZWdlcih0aGluZywgSGFiaXROUy5DQVRFR09SWSksXHJcblxyXG4gICAgICAgICAgICAgICAgY29tcGxldGlvblR5cGU6IGdldEludGVnZXIodGhpbmcsIEhhYml0TlMuQ09NUExFVElPTlRZUEUpLFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaW5nOiB0aGluZyxcclxuICAgICAgICAgICAgICAgIGdvYWxMaXN0OiBnb2FsTGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgREdvYWwsIEhhYml0TlMgfTsiXSwic291cmNlUm9vdCI6IiJ9