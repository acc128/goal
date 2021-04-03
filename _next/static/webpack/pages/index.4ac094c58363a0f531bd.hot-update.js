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
      if (goals == null) return;

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
    }
  }, {
    key: "renderGoal",
    value: function renderGoal(goal, txt) {
      return __jsx(_goalView__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: _list_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.listItem,
        mode: this.props.mode,
        key: goal.url,
        goal: goal,
        extraText: txt
      });
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

      var goalsArray = [];

      if (this.props.timed) {
        var _iterator3 = _createForOfIteratorHelper(this.state.goals),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var goal = _step3.value;
            var txt = goal.completionHistory.getCompletionTimeRemaining();

            if (!!txt) {
              goalsArray.push(this.renderGoal(goal, txt));
            }

            if (!goal.completionHistory.ready) return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], null);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (goalsArray.length == 0) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], null, "Looks like you've caught up with everything! You have no goals left to complete.");
        }
      } else {
        goalsArray = this.state.goals.map(function (goal) {
          return _this2.renderGoal(goal);
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nb2FsTGlzdFZpZXcvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkdvYWxMaXN0VmlldyIsInByb3BzIiwic3RhdGUiLCJjYWxsYWJsZUdvYWxzVXBkYXRlIiwiQ2FsbGFibGUiLCJvbkdvYWxzVXBkYXRlZCIsImxpc3RlbmluZ1RvIiwiZ29hbExpc3QiLCJnb2FscyIsImFkZExpc3RlbmVyIiwiZCIsImRlbGV0ZUxpc3RlbmVyIiwiZ2V0R29hbHMiLCJnb2FsIiwiaW5kZXhPZiIsImNvbXBsZXRpb25IaXN0b3J5IiwicHVzaCIsInNldFN0YXRlIiwidHh0Iiwic3R5bGVzIiwibGlzdEl0ZW0iLCJtb2RlIiwidXJsIiwicmVhZHkiLCJsZW5ndGgiLCJnb2Fsc0FycmF5IiwidGltZWQiLCJnZXRDb21wbGV0aW9uVGltZVJlbWFpbmluZyIsInJlbmRlckdvYWwiLCJtYXAiLCJsaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7O0lBc0JNQSxZOzs7OztBQUNGLHdCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQW1CLEVBQUUsSUFBSUMsc0RBQUosMEdBQW1CLE1BQUtDLGNBQXhCLENBRFo7QUFFVEMsaUJBQVcsRUFBRSxDQUFDTCxLQUFLLENBQUNNLFFBQVAsQ0FGSjtBQUdUQyxXQUFLLEVBQUU7QUFIRSxLQUFiO0FBTUFQLFNBQUssQ0FBQ00sUUFBTixDQUFlRSxXQUFmLENBQTJCLE1BQUtQLEtBQUwsQ0FBV0MsbUJBQXRDO0FBVGM7QUFVakI7Ozs7V0FFRCxnQ0FBc0I7QUFBQSxpREFDSCxLQUFLRCxLQUFMLENBQVdJLFdBRFI7QUFBQTs7QUFBQTtBQUNsQiw0REFBc0M7QUFB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QUNIOztBQUVELGFBQ0k7QUFBSyxpQkFBUyxFQUFFTSx3REFBTSxDQUFDVztBQUF2QixTQUE4QkwsVUFBOUIsQ0FESjtBQUdIOzs7O0VBbEZzQk0sNENBQUssQ0FBQ0MsUzs7QUFxRmxCaEMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFjMDk0YzU4MzYzYTBmNTMxYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2lyY3VsYXJQcm9ncmVzcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYWxsYWJsZSBmcm9tIFwiLi4vLi4vdXRpbC9DYWxsYWJsZVwiO1xyXG5pbXBvcnQgeyBER29hbCB9IGZyb20gXCIuLi8uLi91dGlsL0RHb2FsXCI7XHJcbmltcG9ydCBER29hbExpc3QgZnJvbSBcIi4uLy4uL3V0aWwvREdvYWxMaXN0XCI7XHJcblxyXG5pbXBvcnQgR29hbFZpZXcsIHsgR29hbFZpZXdNb2RlIH0gZnJvbSBcIi4uL2dvYWxWaWV3XCJcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vbGlzdC5tb2R1bGUuY3NzXCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBCcm93c2VyUm91dGVyLFxyXG4gICAgU3dpdGNoLFxyXG4gICAgUm91dGUsXHJcbiAgICBMaW5rLFxyXG4gICAgUHJvdmlkZXJcclxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgR29hbFZpZXdUaW1lZCBmcm9tIFwiLi4vZ29hbFZpZXcvZ29hbFZpZXdUaW1lZFwiO1xyXG5pbXBvcnQgRERhdGFzZXRCYXNlIGZyb20gXCIuLi8uLi91dGlsL0REYXRhc2V0QmFzZVwiO1xyXG5cclxudHlwZSBHb2FsTGlzdFZpZXdQcm9wcyA9IHtcclxuICAgIGdvYWxMaXN0OiBER29hbExpc3Q7XHJcbiAgICBtb2RlOiBHb2FsVmlld01vZGU7XHJcbiAgICB0aW1lZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgR29hbExpc3RWaWV3U3RhdGUgPSB7XHJcbiAgICBjYWxsYWJsZUdvYWxzVXBkYXRlOiBDYWxsYWJsZTtcclxuICAgIGxpc3RlbmluZ1RvOiBERGF0YXNldEJhc2VbXTtcclxuICAgIGdvYWxzOiBER29hbFtdO1xyXG59O1xyXG5cclxuY2xhc3MgR29hbExpc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEdvYWxMaXN0Vmlld1Byb3BzLCBHb2FsTGlzdFZpZXdTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2FsbGFibGVHb2Fsc1VwZGF0ZTogbmV3IENhbGxhYmxlKHRoaXMsIHRoaXMub25Hb2Fsc1VwZGF0ZWQpLFxyXG4gICAgICAgICAgICBsaXN0ZW5pbmdUbzogW3Byb3BzLmdvYWxMaXN0XSxcclxuICAgICAgICAgICAgZ29hbHM6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcm9wcy5nb2FsTGlzdC5hZGRMaXN0ZW5lcih0aGlzLnN0YXRlLmNhbGxhYmxlR29hbHNVcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgZm9yKGNvbnN0IGQgb2YgdGhpcy5zdGF0ZS5saXN0ZW5pbmdUbyl7XHJcbiAgICAgICAgICAgIGQuZGVsZXRlTGlzdGVuZXIodGhpcy5zdGF0ZS5jYWxsYWJsZUdvYWxzVXBkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLm9uR29hbHNVcGRhdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Hb2Fsc1VwZGF0ZWQoKXtcclxuICAgICAgICBjb25zdCBnb2FscyA9IHRoaXMucHJvcHMuZ29hbExpc3QuZ2V0R29hbHMoKTtcclxuICAgICAgICBpZihnb2FscyA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBnb2FsIG9mIGdvYWxzKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5saXN0ZW5pbmdUby5pbmRleE9mKGdvYWwuY29tcGxldGlvbkhpc3RvcnkpID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlzdGVuaW5nVG8ucHVzaChnb2FsLmNvbXBsZXRpb25IaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgIGdvYWwuY29tcGxldGlvbkhpc3RvcnkuYWRkTGlzdGVuZXIodGhpcy5zdGF0ZS5jYWxsYWJsZUdvYWxzVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtnb2Fsc30pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckdvYWwoZ29hbCwgdHh0Pyl7XHJcbiAgICAgICAgcmV0dXJuIDxHb2FsVmlld1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0gbW9kZT17dGhpcy5wcm9wcy5tb2RlfVxyXG4gICAgICAgICAgICBrZXk9e2dvYWwudXJsfSBnb2FsPXtnb2FsfVxyXG4gICAgICAgICAgICBleHRyYVRleHQ9e3R4dH1cclxuICAgICAgICAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5nb2FsTGlzdC5yZWFkeSB8fCB0aGlzLnN0YXRlLmdvYWxzID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5nb2Fscy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZSBubyBnb2Fscy4gV291bGQgeW91IGxpa2UgdG8gPExpbmsgdG89XCIvYWRkXCI+Y3JlYXRlIG9uZT88L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBnb2Fsc0FycmF5ID0gW107XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aW1lZCl7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBnb2FsIG9mIHRoaXMuc3RhdGUuZ29hbHMpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gZ29hbC5jb21wbGV0aW9uSGlzdG9yeS5nZXRDb21wbGV0aW9uVGltZVJlbWFpbmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYoISF0eHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdvYWxzQXJyYXkucHVzaCh0aGlzLnJlbmRlckdvYWwoZ29hbCwgdHh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighZ29hbC5jb21wbGV0aW9uSGlzdG9yeS5yZWFkeSkgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGdvYWxzQXJyYXkubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICBMb29rcyBsaWtlIHlvdSd2ZSBjYXVnaHQgdXAgd2l0aCBldmVyeXRoaW5nISBZb3UgaGF2ZSBubyBnb2FscyBsZWZ0IHRvIGNvbXBsZXRlLlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBnb2Fsc0FycmF5ID0gdGhpcy5zdGF0ZS5nb2Fscy5tYXAoKGdvYWwpID0+IHRoaXMucmVuZGVyR29hbChnb2FsKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9Pntnb2Fsc0FycmF5fTwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvYWxMaXN0VmlldzsiXSwic291cmNlUm9vdCI6IiJ9