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
        color: "textSecondary",
        variant: "subtitle2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInBhcmFtcyIsInN0YXRlIiwiaWRlbnRpdHlQcm92aWRlciIsImN1cnJlbnRVcmwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRvIiwic3R5bGVzIiwicGFkZGVkIiwiZSIsInNldElkcCIsInRhcmdldCIsInZhbHVlIiwiZW5kQWRvcm5tZW50IiwiYXBwIiwibWFpbkRpdiIsInJvdXRlQ29udGVudHMiLCJwcm9wcyIsImxvYWRpbmciLCJyZW5kZXJNYWluQm9keSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0lBV01BLFM7Ozs7O0FBQ0YscUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsOEJBQU1BLE1BQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQWdCLEVBQUUsb0JBRFQ7QUFFVEMsZ0JBQVUsRUFBRTtBQUZILEtBQWI7QUFIZ0I7QUFPbkI7Ozs7V0FFRCw2QkFBb0I7QUFDaEIsV0FBS0MsUUFBTCxDQUFjO0FBQ1ZELGtCQUFVLEVBQUVFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkM7QUFEbEIsT0FBZDtBQUdIOzs7V0FFRCxnQkFBT0MsRUFBUCxFQUFtQjtBQUNmLFdBQUtKLFFBQUwsQ0FBYztBQUNWRix3QkFBZ0IsRUFBRU07QUFEUixPQUFkO0FBR0g7OztXQUVELDBCQUFpQjtBQUFBOztBQUNiLGFBQ0ksbUJBQ0k7QUFBSyxpQkFBUyxFQUFFQyxzREFBTSxDQUFDQztBQUF2QixTQUNJLE1BQUMsNERBQUQsb0hBREosQ0FESixFQU9JO0FBQUssaUJBQVMsRUFBRUQsc0RBQU0sQ0FBQ0M7QUFBdkIsU0FDSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRDtBQUNJLGFBQUssRUFBQyxtQkFEVjtBQUVJLG1CQUFXLEVBQUMsbUJBRmhCO0FBR0ksWUFBSSxFQUFDLEtBSFQ7QUFJSSxhQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXQyxnQkFKdEI7QUFLSSxnQkFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDQyxNQUFMLENBQVlELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQixDQUFQO0FBQUEsU0FMZDtBQU1JLGtCQUFVLEVBQUU7QUFDUkMsc0JBQVksRUFDUixNQUFDLGtFQUFEO0FBQWEsc0JBQVUsRUFBRSxLQUFLZCxLQUFMLENBQVdDLGdCQUFwQztBQUFzRCx1QkFBVyxFQUFFLEtBQUtELEtBQUwsQ0FBV0U7QUFBOUUsYUFDSSxNQUFDLHdEQUFEO0FBQVEsbUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBSyxFQUFDO0FBQWxDLHlCQURKO0FBRkk7QUFOaEIsUUFESixDQURKLENBUEosRUEyQkk7QUFBSyxpQkFBUyxFQUFFTSxzREFBTSxDQUFDQztBQUF2QixTQUNJLE1BQUMsNERBQUQ7QUFBWSxhQUFLLEVBQUMsZUFBbEI7QUFBa0MsZUFBTyxFQUFDO0FBQTFDLHFNQURKLENBM0JKLENBREo7QUFtQ0g7OztXQUVELGtCQUFTO0FBQ0wsYUFBTztBQUFLLGlCQUFTLEVBQUVELHNEQUFNLENBQUNPO0FBQXZCLFNBQ0g7QUFBSyxpQkFBUyxFQUFFUCxzREFBTSxDQUFDUTtBQUF2QixTQUNJO0FBQUssaUJBQVMsRUFBRVIsc0RBQU0sQ0FBQ1M7QUFBdkIsU0FDSTtBQUFLLGlCQUFTLEVBQUVULHNEQUFNLENBQUNDO0FBQXZCLFNBQ0ksTUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQztBQUFwQixvQkFESixDQURKLEVBS0ssS0FBS1MsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQUMsa0VBQUQsT0FBckIsR0FBNEMsS0FBS0MsY0FBTCxFQUxqRCxDQURKLEVBU0k7QUFBSyxpQkFBUyxFQUFFWixzREFBTSxDQUFDUztBQUF2QixTQUNJLE1BQUMsaURBQUQsT0FESixDQVRKLENBREcsQ0FBUDtBQWVIOzs7O0VBNUVtQkksNENBQUssQ0FBQ0MsUzs7QUE2RTdCO0FBRWN4Qix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MWI0N2U2ODRkYjE3OWQ3N2RjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgRm9ybUdyb3VwLCBUeXBvZ3JhcGh5LCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBMb2dpbkJ1dHRvbiB9IGZyb20gXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCI7XG5cbmltcG9ydCBNb3RpdmF0ZSBmcm9tIFwiLi4vbW90aXZhdGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYXBwLm1vZHVsZS5jc3NcIjtcblxudHlwZSBMb2dpbkZvcm1QYXJhbXMgPSB7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbn07XG5cbnR5cGUgTG9naW5Gb3JtU3RhdGUgPSB7XG4gICAgaWRlbnRpdHlQcm92aWRlcjogc3RyaW5nO1xuICAgIGN1cnJlbnRVcmw6IHN0cmluZztcbn07XG5cbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMb2dpbkZvcm1QYXJhbXMsIExvZ2luRm9ybVN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IFwiaHR0cHM6Ly9pbnJ1cHQubmV0XCIsXG4gICAgICAgICAgICBjdXJyZW50VXJsOiBcImh0dHBzOi8vbG9jYWxob3N0OjMwMDBcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRVcmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldElkcCh0bzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlcjogdG9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWFpbkJvZHkoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGVkfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIEdvYWxHb2F0ISBBIGhhYml0L2dvYWwgdHJhY2tpbmcgYXBwLiBQbGVhc2UgbG9nIGluIG9yIHJlZ2lzdGVyIHdpdGggeW91ciBTb2xpZCBwcm92aWRlciBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWRkZWR9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSWRlbnRpdHkgUHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSWRlbnRpdHkgUHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlkZW50aXR5UHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldElkcChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbkJ1dHRvbiBvaWRjSXNzdWVyPXt0aGlzLnN0YXRlLmlkZW50aXR5UHJvdmlkZXJ9IHJlZGlyZWN0VXJsPXt0aGlzLnN0YXRlLmN1cnJlbnRVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cmbmJzcDtpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWRkZWR9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwic3VidGl0bGUyXCI+XG4gICAgICAgICAgICAgICAgICAgIElmIHlvdSBkb24ndCBoYXZlIGEgU29saWQgcHJvdmlkZXIsIHNpbXBseSBjbGljayBMb2cgSW4gYW5kIHlvdSdsbCBiZSByZWRpcmVjdGVkIHRvIGEgcGFnZSB3aGVyZSB5b3UgY2FuIGNsaWNrIHJlZ2lzdGVyLiBDb21lIGJhY2sgdG8gdGhpcyBwYWdlIG9uY2UgeW91J3JlIGRvbmUsIGFuZCBjbGljayBMb2cgSW4gYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkRpdn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3V0ZUNvbnRlbnRzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWRkZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+R29hbEdvYXQ8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyAvPiA6IHRoaXMucmVuZGVyTWFpbkJvZHkoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm91dGVDb250ZW50c30+XG4gICAgICAgICAgICAgICAgICAgIDxNb3RpdmF0ZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==