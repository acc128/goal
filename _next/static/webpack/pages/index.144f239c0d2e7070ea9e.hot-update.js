webpackHotUpdate_N_E("pages/index",{

/***/ "./components/motivate/index.tsx":
/*!***************************************!*\
  !*** ./components/motivate/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inspirational_quotes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inspirational-quotes */ "./node_modules/inspirational-quotes/index.js");
/* harmony import */ var inspirational_quotes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inspirational_quotes__WEBPACK_IMPORTED_MODULE_7__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Motivate = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Motivate, _React$Component);

  var _super = _createSuper(Motivate);

  function Motivate(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Motivate);

    _this = _super.call(this, props);
    _this.state = {
      currQuote: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Motivate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        currQuote: inspirational_quotes__WEBPACK_IMPORTED_MODULE_7___default.a.getQuote()
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.currQuote) return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], null);
      console.log("quote", this.state.currQuote);
      return __jsx("div", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, this.state.currQuote.text), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
        color: "textSecondary"
      }, "- ", this.state.currQuote.author));
    }
  }]);

  return Motivate;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Motivate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3RpdmF0ZS9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aXZhdGUiLCJwcm9wcyIsInN0YXRlIiwiY3VyclF1b3RlIiwic2V0U3RhdGUiLCJxdW90ZSIsImdldFF1b3RlIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJhdXRob3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0lBTU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUU7QUFERixLQUFiO0FBSGM7QUFNakI7Ozs7V0FFRCw2QkFBbUI7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFBQ0QsaUJBQVMsRUFBRUUsMkRBQUssQ0FBQ0MsUUFBTjtBQUFaLE9BQWQ7QUFDSDs7O1dBRUQsa0JBQVE7QUFDSixVQUFHLENBQUMsS0FBS0osS0FBTCxDQUFXQyxTQUFmLEVBQTBCLE9BQU8sTUFBQyxrRUFBRCxPQUFQO0FBQzFCSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLEtBQUtOLEtBQUwsQ0FBV0MsU0FBL0I7QUFDQSxhQUFPLG1CQUVILE1BQUMsNERBQUQsUUFDSyxLQUFLRCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJNLElBRDFCLENBRkcsRUFLSCxNQUFDLDREQUFEO0FBQVksYUFBSyxFQUFDO0FBQWxCLGVBQ08sS0FBS1AsS0FBTCxDQUFXQyxTQUFYLENBQXFCTyxNQUQ1QixDQUxHLENBQVA7QUFTSDs7OztFQXpCa0JDLDRDQUFLLENBQUNDLFM7O0FBNEJkWix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDRmMjM5YzBkMmU3MDcwZWE5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY29vbEltYWdlcyBmcm9tIFwiY29vbC1pbWFnZXNcIjtcclxuaW1wb3J0IHF1b3RlIGZyb20gXCJpbnNwaXJhdGlvbmFsLXF1b3Rlc1wiO1xyXG5cclxudHlwZSBNb3RpdmF0ZVN0YXRlID0ge1xyXG4gICAgY3VyclF1b3RlO1xyXG59XHJcblxyXG5jbGFzcyBNb3RpdmF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgTW90aXZhdGVTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyUXVvdGU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VyclF1b3RlOiBxdW90ZS5nZXRRdW90ZSgpfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5jdXJyUXVvdGUpIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVvdGVcIix0aGlzLnN0YXRlLmN1cnJRdW90ZSk7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJRdW90ZS50ZXh0fVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgLSB7dGhpcy5zdGF0ZS5jdXJyUXVvdGUuYXV0aG9yfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3RpdmF0ZTsiXSwic291cmNlUm9vdCI6IiJ9