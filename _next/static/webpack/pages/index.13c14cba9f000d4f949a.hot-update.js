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
      if (!this.state.remainingText) return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nb2FsVmlldy9nb2FsVmlld1RpbWVkLnRzeCJdLCJuYW1lcyI6WyJHb2FsVmlld1RpbWVkIiwicHJvcHMiLCJzdGF0ZSIsInJlbWFpbmluZ1RleHQiLCJoaXN0b3J5Q2FsbGFibGUiLCJDYWxsYWJsZSIsIm9uSGlzdG9yeVVwZGF0ZSIsImdvYWwiLCJjb21wbGV0aW9uSGlzdG9yeSIsImFkZExpc3RlbmVyIiwiZGVsZXRlTGlzdGVuZXIiLCJzZXRTdGF0ZSIsImdldENvbXBsZXRpb25UaW1lUmVtYWluaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUlBO0FBSUE7QUFDQTs7SUFRTUEsYTs7Ozs7QUFDRix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFhLEVBQUUsSUFETjtBQUVUQyxxQkFBZSxFQUFFLElBQUlDLHVEQUFKLDBHQUFtQixNQUFLQyxlQUF4QjtBQUZSLEtBQWI7O0FBS0EsVUFBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCQyxpQkFBaEIsQ0FBa0NDLFdBQWxDLENBQThDLE1BQUtQLEtBQUwsQ0FBV0UsZUFBekQ7O0FBUGU7QUFRbEI7Ozs7V0FHRCw2QkFBbUI7QUFDZixXQUFLRSxlQUFMO0FBQ0g7OztXQUVELGdDQUFzQjtBQUNsQixXQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JDLGlCQUFoQixDQUFrQ0UsY0FBbEMsQ0FBaUQsS0FBS1IsS0FBTCxDQUFXRSxlQUE1RDtBQUNIOzs7V0FFRCwyQkFBaUI7QUFDYixXQUFLTyxRQUFMLENBQWM7QUFBQ1IscUJBQWEsRUFBRSxLQUFLRixLQUFMLENBQVdNLElBQVgsQ0FBZ0JDLGlCQUFoQixDQUFrQ0ksMEJBQWxDO0FBQWhCLE9BQWQ7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCxVQUFHLENBQUMsS0FBS1YsS0FBTCxDQUFXQyxhQUFmLEVBQThCLE9BQU8sSUFBUDtBQUU5QixhQUNJLE1BQUMseUNBQUQseUZBQWMsS0FBS0YsS0FBbkI7QUFBMEIsaUJBQVMsRUFBRSxLQUFLQyxLQUFMLENBQVdDO0FBQWhELFNBREo7QUFHSDs7OztFQTlCdUJVLDRDQUFLLENBQUNDLFM7O0FBK0JqQztBQUljLG9FQUFBQyxtRUFBVSxDQUFDZixhQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzYzE0Y2JhOWYwMDBkNGY5NDlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRBY3Rpb25BcmVhLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERHb2FsIH0gZnJvbSBcIi4uLy4uL3V0aWwvREdvYWxcIjtcclxuaW1wb3J0IERHb2FsTGlzdCBmcm9tIFwiLi4vLi4vdXRpbC9ER29hbExpc3RcIjtcclxuXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmltcG9ydCBHb2FsRGF0YUlubmVyIGZyb20gXCIuL2dvYWxEYXRhSW5uZXJcIjtcclxuaW1wb3J0IEdvYWxWaWV3LCB7IEdvYWxWaWV3TW9kZSwgR29hbFZpZXdQcm9wcyB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCBDYWxsYWJsZSBmcm9tIFwiLi4vLi4vdXRpbC9DYWxsYWJsZVwiO1xyXG5cclxuXHJcbnR5cGUgR29hbFZpZXdUaW1lZFN0YXRlID0ge1xyXG4gICAgcmVtYWluaW5nVGV4dDogc3RyaW5nO1xyXG4gICAgaGlzdG9yeUNhbGxhYmxlOiBDYWxsYWJsZTtcclxufTtcclxuXHJcbmNsYXNzIEdvYWxWaWV3VGltZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8R29hbFZpZXdQcm9wcywgR29hbFZpZXdUaW1lZFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZW1haW5pbmdUZXh0OiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5Q2FsbGFibGU6IG5ldyBDYWxsYWJsZSh0aGlzLCB0aGlzLm9uSGlzdG9yeVVwZGF0ZSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmdvYWwuY29tcGxldGlvbkhpc3RvcnkuYWRkTGlzdGVuZXIodGhpcy5zdGF0ZS5oaXN0b3J5Q2FsbGFibGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMub25IaXN0b3J5VXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICB0aGlzLnByb3BzLmdvYWwuY29tcGxldGlvbkhpc3RvcnkuZGVsZXRlTGlzdGVuZXIodGhpcy5zdGF0ZS5oaXN0b3J5Q2FsbGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGlzdG9yeVVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RleHQ6IHRoaXMucHJvcHMuZ29hbC5jb21wbGV0aW9uSGlzdG9yeS5nZXRDb21wbGV0aW9uVGltZVJlbWFpbmluZygpfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnJlbWFpbmluZ1RleHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHb2FsVmlldyB7Li4udGhpcy5wcm9wc30gZXh0cmFUZXh0PXt0aGlzLnN0YXRlLnJlbWFpbmluZ1RleHR9IC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEdvYWxWaWV3VGltZWQpOyJdLCJzb3VyY2VSb290IjoiIn0=