webpackHotUpdate_N_E("pages/index",{

/***/ "./components/loginForm/index.tsx":
/*!****************************************!*\
  !*** ./components/loginForm/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inrupt/solid-ui-react */ "./node_modules/@inrupt/solid-ui-react/dist/index.js");
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _motivate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../motivate */ "./components/motivate/index.tsx");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.module.css */ "./components/app.module.css");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_9__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var LoginForm = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LoginForm, _React$Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(params) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginForm);

    _this = _super.call(this, params);
    _this.state = {
      identityProvider: "https://inrupt.net",
      currentUrl: "https://localhost:3000"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        currentUrl: window.location.href
      });
    }
  }, {
    key: "setIdp",
    value: function setIdp(to) {
      this.setState({
        identityProvider: to
      });
    }
  }, {
    key: "renderMainBody",
    value: function renderMainBody() {
      var _this2 = this;

      return __jsx("div", null, __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.padded
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], null, "Welcome to GoalGoat! A habit/goal tracking app. Please log in or register with your Solid provider below.")), __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.padded
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
        label: "Identity Provider",
        placeholder: "Identity Provider",
        type: "url",
        value: this.state.identityProvider,
        onChange: function onChange(e) {
          return _this2.setIdp(e.target.value);
        },
        InputProps: {
          endAdornment: __jsx(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_7__["LoginButton"], {
            oidcIssuer: this.state.identityProvider,
            redirectUrl: this.state.currentUrl
          }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            variant: "contained",
            color: "primary"
          }, "Log\xA0in"))
        }
      }))), __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.padded
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        color: "textSecondary"
      }, "If you don't have a Solid provider, simply click Log In and you'll be redirected to a page where you can click register. Come back to this page once you're done, and click Log In again.")));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.app
      }, __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainDiv
      }, __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.routeContents
      }, __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.padded
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        variant: "h6"
      }, "GoalGoat")), this.props.loading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], null) : this.renderMainBody()), __jsx("div", {
        className: _app_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.routeContents
      }, __jsx(_motivate__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInBhcmFtcyIsInN0YXRlIiwiaWRlbnRpdHlQcm92aWRlciIsImN1cnJlbnRVcmwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRvIiwic3R5bGVzIiwicGFkZGVkIiwiZSIsInNldElkcCIsInRhcmdldCIsInZhbHVlIiwiZW5kQWRvcm5tZW50IiwiYXBwIiwibWFpbkRpdiIsInJvdXRlQ29udGVudHMiLCJwcm9wcyIsImxvYWRpbmciLCJyZW5kZXJNYWluQm9keSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0lBV01BLFM7Ozs7O0FBQ0YscUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsOEJBQU1BLE1BQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQWdCLEVBQUUsb0JBRFQ7QUFFVEMsZ0JBQVUsRUFBRTtBQUZILEtBQWI7QUFIZ0I7QUFPbkI7Ozs7V0FFRCw2QkFBb0I7QUFDaEIsV0FBS0MsUUFBTCxDQUFjO0FBQ1ZELGtCQUFVLEVBQUVFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkM7QUFEbEIsT0FBZDtBQUdIOzs7V0FFRCxnQkFBT0MsRUFBUCxFQUFtQjtBQUNmLFdBQUtKLFFBQUwsQ0FBYztBQUNWRix3QkFBZ0IsRUFBRU07QUFEUixPQUFkO0FBR0g7OztXQUVELDBCQUFpQjtBQUFBOztBQUNiLGFBQ0ksbUJBQ0k7QUFBSyxpQkFBUyxFQUFFQyxzREFBTSxDQUFDQztBQUF2QixTQUNJLE1BQUMsNERBQUQsb0hBREosQ0FESixFQU9JO0FBQUssaUJBQVMsRUFBRUQsc0RBQU0sQ0FBQ0M7QUFBdkIsU0FDSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRDtBQUNJLGFBQUssRUFBQyxtQkFEVjtBQUVJLG1CQUFXLEVBQUMsbUJBRmhCO0FBR0ksWUFBSSxFQUFDLEtBSFQ7QUFJSSxhQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXQyxnQkFKdEI7QUFLSSxnQkFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDQyxNQUFMLENBQVlELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQixDQUFQO0FBQUEsU0FMZDtBQU1JLGtCQUFVLEVBQUU7QUFDUkMsc0JBQVksRUFDUixNQUFDLGtFQUFEO0FBQWEsc0JBQVUsRUFBRSxLQUFLZCxLQUFMLENBQVdDLGdCQUFwQztBQUFzRCx1QkFBVyxFQUFFLEtBQUtELEtBQUwsQ0FBV0U7QUFBOUUsYUFDSSxNQUFDLHdEQUFEO0FBQVEsbUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBSyxFQUFDO0FBQWxDLHlCQURKO0FBRkk7QUFOaEIsUUFESixDQURKLENBUEosRUEyQkk7QUFBSyxpQkFBUyxFQUFFTSxzREFBTSxDQUFDQztBQUF2QixTQUNJLE1BQUMsNERBQUQ7QUFBWSxhQUFLLEVBQUM7QUFBbEIscU1BREosQ0EzQkosQ0FESjtBQW1DSDs7O1dBRUQsa0JBQVM7QUFDTCxhQUFPO0FBQUssaUJBQVMsRUFBRUQsc0RBQU0sQ0FBQ087QUFBdkIsU0FDSDtBQUFLLGlCQUFTLEVBQUVQLHNEQUFNLENBQUNRO0FBQXZCLFNBQ0k7QUFBSyxpQkFBUyxFQUFFUixzREFBTSxDQUFDUztBQUF2QixTQUNJO0FBQUssaUJBQVMsRUFBRVQsc0RBQU0sQ0FBQ0M7QUFBdkIsU0FDSSxNQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDO0FBQXBCLG9CQURKLENBREosRUFLSyxLQUFLUyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBQyxrRUFBRCxPQUFyQixHQUE0QyxLQUFLQyxjQUFMLEVBTGpELENBREosRUFTSTtBQUFLLGlCQUFTLEVBQUVaLHNEQUFNLENBQUNTO0FBQXZCLFNBQ0ksTUFBQyxpREFBRCxPQURKLENBVEosQ0FERyxDQUFQO0FBZUg7Ozs7RUE1RW1CSSw0Q0FBSyxDQUFDQyxTOztBQTZFN0I7QUFFY3hCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkNDFlODdlYmNlZmM0MzMzY2RkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkLCBGb3JtR3JvdXAsIFR5cG9ncmFwaHksIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IExvZ2luQnV0dG9uIH0gZnJvbSBcIkBpbnJ1cHQvc29saWQtdWktcmVhY3RcIjtcblxuaW1wb3J0IE1vdGl2YXRlIGZyb20gXCIuLi9tb3RpdmF0ZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9hcHAubW9kdWxlLmNzc1wiO1xuXG50eXBlIExvZ2luRm9ybVBhcmFtcyA9IHtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xufTtcblxudHlwZSBMb2dpbkZvcm1TdGF0ZSA9IHtcbiAgICBpZGVudGl0eVByb3ZpZGVyOiBzdHJpbmc7XG4gICAgY3VycmVudFVybDogc3RyaW5nO1xufTtcblxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExvZ2luRm9ybVBhcmFtcywgTG9naW5Gb3JtU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlcjogXCJodHRwczovL2lucnVwdC5uZXRcIixcbiAgICAgICAgICAgIGN1cnJlbnRVcmw6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudFVybDogd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0SWRwKHRvOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyOiB0b1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJNYWluQm9keSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWRkZWR9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gR29hbEdvYXQhIEEgaGFiaXQvZ29hbCB0cmFja2luZyBhcHAuIFBsZWFzZSBsb2cgaW4gb3IgcmVnaXN0ZXIgd2l0aCB5b3VyIFNvbGlkIHByb3ZpZGVyIGJlbG93LlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZGRlZH0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJZGVudGl0eSBQcm92aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJZGVudGl0eSBQcm92aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaWRlbnRpdHlQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0SWRwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luQnV0dG9uIG9pZGNJc3N1ZXI9e3RoaXMuc3RhdGUuaWRlbnRpdHlQcm92aWRlcn0gcmVkaXJlY3RVcmw9e3RoaXMuc3RhdGUuY3VycmVudFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyZuYnNwO2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZGRlZH0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBJZiB5b3UgZG9uJ3QgaGF2ZSBhIFNvbGlkIHByb3ZpZGVyLCBzaW1wbHkgY2xpY2sgTG9nIEluIGFuZCB5b3UnbGwgYmUgcmVkaXJlY3RlZCB0byBhIHBhZ2Ugd2hlcmUgeW91IGNhbiBjbGljayByZWdpc3Rlci4gQ29tZSBiYWNrIHRvIHRoaXMgcGFnZSBvbmNlIHlvdSdyZSBkb25lLCBhbmQgY2xpY2sgTG9nIEluIGFnYWluLlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5EaXZ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm91dGVDb250ZW50c30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdvYWxHb2F0PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz4gOiB0aGlzLnJlbmRlck1haW5Cb2R5KCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvdXRlQ29udGVudHN9PlxuICAgICAgICAgICAgICAgICAgICA8TW90aXZhdGUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=