webpackHotUpdate_N_E("pages/index",{

/***/ "./components/goalView/goalViewTimed.tsx":
/*!***********************************************!*\
  !*** ./components/goalView/goalViewTimed.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./components/goalView/index.tsx");
/* harmony import */ var _util_Callable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util/Callable */ "./util/Callable.ts");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var GoalViewTimed = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GoalViewTimed, _React$Component);

  var _super = _createSuper(GoalViewTimed);

  function GoalViewTimed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GoalViewTimed);

    _this = _super.call(this, props);
    _this.state = {
      remainingText: null,
      historyCallable: new _util_Callable__WEBPACK_IMPORTED_MODULE_10__["default"](Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _this.onHistoryUpdate)
    };

    _this.props.goal.completionHistory.addListener(_this.state.historyCallable);

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GoalViewTimed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onHistoryUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.goal.completionHistory.deleteListener(this.state.historyCallable);
    }
  }, {
    key: "onHistoryUpdate",
    value: function onHistoryUpdate() {
      this.setState({
        remainingText: this.props.goal.completionHistory.getCompletionTimeRemaining()
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.remainingText) return __jsx("p", null, "hide ", this.props.goal.name);
      return __jsx(___WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        extraText: this.state.remainingText
      }));
    }
  }]);

  return GoalViewTimed;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (_c = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(GoalViewTimed));

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nb2FsVmlldy9nb2FsVmlld1RpbWVkLnRzeCJdLCJuYW1lcyI6WyJHb2FsVmlld1RpbWVkIiwicHJvcHMiLCJzdGF0ZSIsInJlbWFpbmluZ1RleHQiLCJoaXN0b3J5Q2FsbGFibGUiLCJDYWxsYWJsZSIsIm9uSGlzdG9yeVVwZGF0ZSIsImdvYWwiLCJjb21wbGV0aW9uSGlzdG9yeSIsImFkZExpc3RlbmVyIiwiZGVsZXRlTGlzdGVuZXIiLCJzZXRTdGF0ZSIsImdldENvbXBsZXRpb25UaW1lUmVtYWluaW5nIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFJQTtBQUlBO0FBQ0E7O0lBUU1BLGE7Ozs7O0FBQ0YseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBYSxFQUFFLElBRE47QUFFVEMscUJBQWUsRUFBRSxJQUFJQyx1REFBSiwwR0FBbUIsTUFBS0MsZUFBeEI7QUFGUixLQUFiOztBQUtBLFVBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkMsaUJBQWhCLENBQWtDQyxXQUFsQyxDQUE4QyxNQUFLUCxLQUFMLENBQVdFLGVBQXpEOztBQVBlO0FBUWxCOzs7O1dBR0QsNkJBQW1CO0FBQ2YsV0FBS0UsZUFBTDtBQUNIOzs7V0FFRCxnQ0FBc0I7QUFDbEIsV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCQyxpQkFBaEIsQ0FBa0NFLGNBQWxDLENBQWlELEtBQUtSLEtBQUwsQ0FBV0UsZUFBNUQ7QUFDSDs7O1dBRUQsMkJBQWlCO0FBQ2IsV0FBS08sUUFBTCxDQUFjO0FBQUNSLHFCQUFhLEVBQUUsS0FBS0YsS0FBTCxDQUFXTSxJQUFYLENBQWdCQyxpQkFBaEIsQ0FBa0NJLDBCQUFsQztBQUFoQixPQUFkO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0wsVUFBRyxDQUFDLEtBQUtWLEtBQUwsQ0FBV0MsYUFBZixFQUE4QixPQUFPLDBCQUFTLEtBQUtGLEtBQUwsQ0FBV00sSUFBWCxDQUFnQk0sSUFBekIsQ0FBUDtBQUU5QixhQUNJLE1BQUMseUNBQUQseUZBQWMsS0FBS1osS0FBbkI7QUFBMEIsaUJBQVMsRUFBRSxLQUFLQyxLQUFMLENBQVdDO0FBQWhELFNBREo7QUFHSDs7OztFQTlCdUJXLDRDQUFLLENBQUNDLFM7O0FBK0JqQztBQUljLG9FQUFBQyxtRUFBVSxDQUFDaEIsYUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYzQ4YTY0OTE3Y2I4NGNkNGY4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBER29hbCB9IGZyb20gXCIuLi8uLi91dGlsL0RHb2FsXCI7XHJcbmltcG9ydCBER29hbExpc3QgZnJvbSBcIi4uLy4uL3V0aWwvREdvYWxMaXN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyLCBIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5pbXBvcnQgR29hbERhdGFJbm5lciBmcm9tIFwiLi9nb2FsRGF0YUlubmVyXCI7XHJcbmltcG9ydCBHb2FsVmlldywgeyBHb2FsVmlld01vZGUsIEdvYWxWaWV3UHJvcHMgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgQ2FsbGFibGUgZnJvbSBcIi4uLy4uL3V0aWwvQ2FsbGFibGVcIjtcclxuXHJcblxyXG50eXBlIEdvYWxWaWV3VGltZWRTdGF0ZSA9IHtcclxuICAgIHJlbWFpbmluZ1RleHQ6IHN0cmluZztcclxuICAgIGhpc3RvcnlDYWxsYWJsZTogQ2FsbGFibGU7XHJcbn07XHJcblxyXG5jbGFzcyBHb2FsVmlld1RpbWVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEdvYWxWaWV3UHJvcHMsIEdvYWxWaWV3VGltZWRTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVtYWluaW5nVGV4dDogbnVsbCxcclxuICAgICAgICAgICAgaGlzdG9yeUNhbGxhYmxlOiBuZXcgQ2FsbGFibGUodGhpcywgdGhpcy5vbkhpc3RvcnlVcGRhdGUpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2FsLmNvbXBsZXRpb25IaXN0b3J5LmFkZExpc3RlbmVyKHRoaXMuc3RhdGUuaGlzdG9yeUNhbGxhYmxlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLm9uSGlzdG9yeVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2FsLmNvbXBsZXRpb25IaXN0b3J5LmRlbGV0ZUxpc3RlbmVyKHRoaXMuc3RhdGUuaGlzdG9yeUNhbGxhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpc3RvcnlVcGRhdGUoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUZXh0OiB0aGlzLnByb3BzLmdvYWwuY29tcGxldGlvbkhpc3RvcnkuZ2V0Q29tcGxldGlvblRpbWVSZW1haW5pbmcoKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5yZW1haW5pbmdUZXh0KSByZXR1cm4gPHA+aGlkZSB7dGhpcy5wcm9wcy5nb2FsLm5hbWV9PC9wPjtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R29hbFZpZXcgey4uLnRoaXMucHJvcHN9IGV4dHJhVGV4dD17dGhpcy5zdGF0ZS5yZW1haW5pbmdUZXh0fSAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihHb2FsVmlld1RpbWVkKTsiXSwic291cmNlUm9vdCI6IiJ9