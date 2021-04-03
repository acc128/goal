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
/* harmony import */ var cool_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cool-images */ "./node_modules/cool-images/index.js");
/* harmony import */ var cool_images__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cool_images__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inspirational_quotes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inspirational-quotes */ "./node_modules/inspirational-quotes/index.js");
/* harmony import */ var inspirational_quotes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inspirational_quotes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _motivate_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./motivate.module.css */ "./components/motivate/motivate.module.css");
/* harmony import */ var _motivate_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_motivate_module_css__WEBPACK_IMPORTED_MODULE_9__);





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
      currQuote: null,
      currImg: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Motivate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        currQuote: inspirational_quotes__WEBPACK_IMPORTED_MODULE_8___default.a.getQuote(),
        currImg: cool_images__WEBPACK_IMPORTED_MODULE_7___default.a.one(600, 800, true, true)
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.currQuote) return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], null);
      if (!this.state.currImg) return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], null);
      console.log("quote", this.state.currQuote);
      return __jsx("div", {
        className: _motivate_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, this.state.currQuote.text), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
        color: "textSecondary"
      }, "- ", this.state.currQuote.author), __jsx("img", {
        src: "https://picsum.photos/g/800/600"
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3RpdmF0ZS9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aXZhdGUiLCJwcm9wcyIsInN0YXRlIiwiY3VyclF1b3RlIiwiY3VyckltZyIsInNldFN0YXRlIiwicXVvdGUiLCJnZXRRdW90ZSIsImNvb2xJbWFnZXMiLCJvbmUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY29udGFpbmVyIiwidGV4dCIsImF1dGhvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztJQVNNQSxROzs7OztBQUNGLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZUFBUyxFQUFFLElBREY7QUFFVEMsYUFBTyxFQUFFO0FBRkEsS0FBYjtBQUhjO0FBT2pCOzs7O1dBRUQsNkJBQW1CO0FBQ2YsV0FBS0MsUUFBTCxDQUFjO0FBQUNGLGlCQUFTLEVBQUVHLDJEQUFLLENBQUNDLFFBQU4sRUFBWjtBQUE4QkgsZUFBTyxFQUFFSSxrREFBVSxDQUFDQyxHQUFYLENBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUErQixJQUEvQjtBQUF2QyxPQUFkO0FBQ0g7OztXQUVELGtCQUFRO0FBQ0osVUFBRyxDQUFDLEtBQUtQLEtBQUwsQ0FBV0MsU0FBZixFQUEwQixPQUFPLE1BQUMsa0VBQUQsT0FBUDtBQUMxQixVQUFHLENBQUMsS0FBS0QsS0FBTCxDQUFXRSxPQUFmLEVBQXdCLE9BQU8sTUFBQyxrRUFBRCxPQUFQO0FBQ3hCTSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLEtBQUtULEtBQUwsQ0FBV0MsU0FBL0I7QUFDQSxhQUFPO0FBQUssaUJBQVMsRUFBRVMsMkRBQU0sQ0FBQ0M7QUFBdkIsU0FFSCxNQUFDLDREQUFELFFBQ0ssS0FBS1gsS0FBTCxDQUFXQyxTQUFYLENBQXFCVyxJQUQxQixDQUZHLEVBS0gsTUFBQyw0REFBRDtBQUFZLGFBQUssRUFBQztBQUFsQixlQUNPLEtBQUtaLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQlksTUFENUIsQ0FMRyxFQVNIO0FBQUssV0FBRyxFQUFDO0FBQVQsUUFURyxDQUFQO0FBV0g7Ozs7RUE3QmtCQyw0Q0FBSyxDQUFDQyxTOztBQWdDZGpCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUzYjc5NWQ2YzdhNTgwNTAyMzViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjb29sSW1hZ2VzIGZyb20gXCJjb29sLWltYWdlc1wiO1xyXG5pbXBvcnQgcXVvdGUgZnJvbSBcImluc3BpcmF0aW9uYWwtcXVvdGVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21vdGl2YXRlLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG50eXBlIE1vdGl2YXRlU3RhdGUgPSB7XHJcbiAgICBjdXJyUXVvdGU7XHJcbiAgICBjdXJySW1nOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIE1vdGl2YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBNb3RpdmF0ZVN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJRdW90ZTogbnVsbCxcclxuICAgICAgICAgICAgY3VyckltZzogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyUXVvdGU6IHF1b3RlLmdldFF1b3RlKCksIGN1cnJJbWc6IGNvb2xJbWFnZXMub25lKDYwMCwgODAwLCB0cnVlLCB0cnVlKX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuY3VyclF1b3RlKSByZXR1cm4gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5jdXJySW1nKSByZXR1cm4gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInF1b3RlXCIsdGhpcy5zdGF0ZS5jdXJyUXVvdGUpO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJRdW90ZS50ZXh0fVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgLSB7dGhpcy5zdGF0ZS5jdXJyUXVvdGUuYXV0aG9yfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy9nLzgwMC82MDBcIiAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW90aXZhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==