webpackHotUpdate_N_E("pages/index",{

/***/ "./components/goalListView/index.tsx":
/*!*******************************************!*\
  !*** ./components/goalListView/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_Callable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/Callable */ "./util/Callable.ts");
/* harmony import */ var _goalView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../goalView */ "./components/goalView/index.tsx");
/* harmony import */ var _list_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../list.module.css */ "./components/list.module.css");
/* harmony import */ var _list_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_list_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _goalView_goalViewTimed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../goalView/goalViewTimed */ "./components/goalView/goalViewTimed.tsx");






var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var GoalListView = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(GoalListView, _React$Component);

  var _super = _createSuper(GoalListView);

  function GoalListView(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoalListView);

    _this = _super.call(this, props);
    _this.state = {
      callableGoalsUpdate: new _util_Callable__WEBPACK_IMPORTED_MODULE_8__["default"](Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _this.onGoalsUpdated),
      listeningTo: [props.goalList],
      goals: null
    };
    props.goalList.addListener(_this.state.callableGoalsUpdate);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoalListView, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _iterator = _createForOfIteratorHelper(this.state.listeningTo),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var d = _step.value;
          d.deleteListener(this.state.callableGoalsUpdate);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onGoalsUpdated();
    }
  }, {
    key: "onGoalsUpdated",
    value: function onGoalsUpdated() {
      var goals = this.props.goalList.getGoals();

      var _iterator2 = _createForOfIteratorHelper(goals),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var goal = _step2.value;

          if (this.state.listeningTo.indexOf(goal.completionHistory) == -1) {
            this.state.listeningTo.push(goal.completionHistory);
            goal.completionHistory.addListener(this.state.callableGoalsUpdate);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.setState({
        goals: goals
      });
      console.log("Updated goals. Now: ", goals);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.goalList.ready || this.state.goals == null) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], null);
      }

      if (this.state.goals.length == 0) {
        return __jsx("div", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], null, "You have no goals. Would you like to ", __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
          to: "/add"
        }, "create one?")));
      }

      if (this.props.timed) {
        var visibleGoals = 0;

        var _iterator3 = _createForOfIteratorHelper(this.state.goals),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var goal = _step3.value;
            if (goal.completionHistory.getCompletionTimeRemaining() !== "") visibleGoals++;
            if (!goal.completionHistory.ready) return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], null);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (visibleGoals == 0) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], null, "Looks like you've caught up with everything! You have no goals left to complete.");
        }
      }

      var goalsArray = this.state.goals.map(function (goal) {
        return _this2.props.timed ? __jsx(_goalView_goalViewTimed__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: _list_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.listItem,
          mode: _this2.props.mode,
          key: goal.url,
          goal: goal
        }) : __jsx(_goalView__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: _list_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.listItem,
          mode: _this2.props.mode,
          key: goal.url,
          goal: goal
        });
      });
      return __jsx("div", {
        className: _list_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.list
      }, goalsArray);
    }
  }]);

  return GoalListView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GoalListView);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nb2FsTGlzdFZpZXcvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkdvYWxMaXN0VmlldyIsInByb3BzIiwic3RhdGUiLCJjYWxsYWJsZUdvYWxzVXBkYXRlIiwiQ2FsbGFibGUiLCJvbkdvYWxzVXBkYXRlZCIsImxpc3RlbmluZ1RvIiwiZ29hbExpc3QiLCJnb2FscyIsImFkZExpc3RlbmVyIiwiZCIsImRlbGV0ZUxpc3RlbmVyIiwiZ2V0R29hbHMiLCJnb2FsIiwiaW5kZXhPZiIsImNvbXBsZXRpb25IaXN0b3J5IiwicHVzaCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInJlYWR5IiwibGVuZ3RoIiwidGltZWQiLCJ2aXNpYmxlR29hbHMiLCJnZXRDb21wbGV0aW9uVGltZVJlbWFpbmluZyIsImdvYWxzQXJyYXkiLCJtYXAiLCJzdHlsZXMiLCJsaXN0SXRlbSIsIm1vZGUiLCJ1cmwiLCJsaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUVBO0FBT0E7O0lBZU1BLFk7Ozs7O0FBQ0Ysd0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBbUIsRUFBRSxJQUFJQyxzREFBSiwwR0FBbUIsTUFBS0MsY0FBeEIsQ0FEWjtBQUVUQyxpQkFBVyxFQUFFLENBQUNMLEtBQUssQ0FBQ00sUUFBUCxDQUZKO0FBR1RDLFdBQUssRUFBRTtBQUhFLEtBQWI7QUFNQVAsU0FBSyxDQUFDTSxRQUFOLENBQWVFLFdBQWYsQ0FBMkIsTUFBS1AsS0FBTCxDQUFXQyxtQkFBdEM7QUFUYztBQVVqQjs7OztXQUVELGdDQUFzQjtBQUFBLGlEQUNILEtBQUtELEtBQUwsQ0FBV0ksV0FEUjtBQUFBOztBQUFB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LENBQW5CO0FBVUEsYUFDSTtBQUFLLGlCQUFTLEVBQUVjLHdEQUFNLENBQUNJO0FBQXZCLFNBQThCTixVQUE5QixDQURKO0FBR0g7Ozs7RUE5RXNCTyw0Q0FBSyxDQUFDQyxTOztBQWlGbEJqQywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MDVjMTc5YTlmNjYxOGQ1OTkzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDaXJjdWxhclByb2dyZXNzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhbGxhYmxlIGZyb20gXCIuLi8uLi91dGlsL0NhbGxhYmxlXCI7XHJcbmltcG9ydCB7IERHb2FsIH0gZnJvbSBcIi4uLy4uL3V0aWwvREdvYWxcIjtcclxuaW1wb3J0IERHb2FsTGlzdCBmcm9tIFwiLi4vLi4vdXRpbC9ER29hbExpc3RcIjtcclxuXHJcbmltcG9ydCBHb2FsVmlldywgeyBHb2FsVmlld01vZGUgfSBmcm9tIFwiLi4vZ29hbFZpZXdcIlxyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9saXN0Lm1vZHVsZS5jc3NcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIEJyb3dzZXJSb3V0ZXIsXHJcbiAgICBTd2l0Y2gsXHJcbiAgICBSb3V0ZSxcclxuICAgIExpbmssXHJcbiAgICBQcm92aWRlclxyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBHb2FsVmlld1RpbWVkIGZyb20gXCIuLi9nb2FsVmlldy9nb2FsVmlld1RpbWVkXCI7XHJcbmltcG9ydCBERGF0YXNldEJhc2UgZnJvbSBcIi4uLy4uL3V0aWwvRERhdGFzZXRCYXNlXCI7XHJcblxyXG50eXBlIEdvYWxMaXN0Vmlld1Byb3BzID0ge1xyXG4gICAgZ29hbExpc3Q6IERHb2FsTGlzdDtcclxuICAgIG1vZGU6IEdvYWxWaWV3TW9kZTtcclxuICAgIHRpbWVkOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBHb2FsTGlzdFZpZXdTdGF0ZSA9IHtcclxuICAgIGNhbGxhYmxlR29hbHNVcGRhdGU6IENhbGxhYmxlO1xyXG4gICAgbGlzdGVuaW5nVG86IEREYXRhc2V0QmFzZVtdO1xyXG4gICAgZ29hbHM6IERHb2FsW107XHJcbn07XHJcblxyXG5jbGFzcyBHb2FsTGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8R29hbExpc3RWaWV3UHJvcHMsIEdvYWxMaXN0Vmlld1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYWxsYWJsZUdvYWxzVXBkYXRlOiBuZXcgQ2FsbGFibGUodGhpcywgdGhpcy5vbkdvYWxzVXBkYXRlZCksXHJcbiAgICAgICAgICAgIGxpc3RlbmluZ1RvOiBbcHJvcHMuZ29hbExpc3RdLFxyXG4gICAgICAgICAgICBnb2FsczogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb3BzLmdvYWxMaXN0LmFkZExpc3RlbmVyKHRoaXMuc3RhdGUuY2FsbGFibGVHb2Fsc1VwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBmb3IoY29uc3QgZCBvZiB0aGlzLnN0YXRlLmxpc3RlbmluZ1RvKXtcclxuICAgICAgICAgICAgZC5kZWxldGVMaXN0ZW5lcih0aGlzLnN0YXRlLmNhbGxhYmxlR29hbHNVcGRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMub25Hb2Fsc1VwZGF0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdvYWxzVXBkYXRlZCgpe1xyXG4gICAgICAgIGNvbnN0IGdvYWxzID0gdGhpcy5wcm9wcy5nb2FsTGlzdC5nZXRHb2FscygpO1xyXG4gICAgICAgIGZvcihjb25zdCBnb2FsIG9mIGdvYWxzKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5saXN0ZW5pbmdUby5pbmRleE9mKGdvYWwuY29tcGxldGlvbkhpc3RvcnkpID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlzdGVuaW5nVG8ucHVzaChnb2FsLmNvbXBsZXRpb25IaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgIGdvYWwuY29tcGxldGlvbkhpc3RvcnkuYWRkTGlzdGVuZXIodGhpcy5zdGF0ZS5jYWxsYWJsZUdvYWxzVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtnb2Fsc30pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlZCBnb2Fscy4gTm93OiBcIiwgZ29hbHMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5nb2FsTGlzdC5yZWFkeSB8fCB0aGlzLnN0YXRlLmdvYWxzID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5nb2Fscy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZSBubyBnb2Fscy4gV291bGQgeW91IGxpa2UgdG8gPExpbmsgdG89XCIvYWRkXCI+Y3JlYXRlIG9uZT88L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMudGltZWQpe1xyXG4gICAgICAgICAgICBsZXQgdmlzaWJsZUdvYWxzID0gMDtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGdvYWwgb2YgdGhpcy5zdGF0ZS5nb2Fscyl7XHJcbiAgICAgICAgICAgICAgICBpZihnb2FsLmNvbXBsZXRpb25IaXN0b3J5LmdldENvbXBsZXRpb25UaW1lUmVtYWluaW5nKCkgIT09IFwiXCIpIHZpc2libGVHb2FscysrO1xyXG4gICAgICAgICAgICAgICAgaWYoIWdvYWwuY29tcGxldGlvbkhpc3RvcnkucmVhZHkpIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih2aXNpYmxlR29hbHMgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIExvb2tzIGxpa2UgeW91J3ZlIGNhdWdodCB1cCB3aXRoIGV2ZXJ5dGhpbmchIFlvdSBoYXZlIG5vIGdvYWxzIGxlZnQgdG8gY29tcGxldGUuXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnb2Fsc0FycmF5ID0gdGhpcy5zdGF0ZS5nb2Fscy5tYXAoXHJcbiAgICAgICAgICAgIChnb2FsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGltZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R29hbFZpZXdUaW1lZCBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0gbW9kZT17dGhpcy5wcm9wcy5tb2RlfSBrZXk9e2dvYWwudXJsfSBnb2FsPXtnb2FsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogICA8R29hbFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IG1vZGU9e3RoaXMucHJvcHMubW9kZX0ga2V5PXtnb2FsLnVybH0gZ29hbD17Z29hbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e2dvYWxzQXJyYXl9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29hbExpc3RWaWV3OyJdLCJzb3VyY2VSb290IjoiIn0=