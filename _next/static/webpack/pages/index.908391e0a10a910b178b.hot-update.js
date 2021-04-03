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
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @inrupt/solid-ui-react */ "./node_modules/@inrupt/solid-ui-react/dist/index.js");
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_9__);





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
      console.log("quote", this.state.currQuote);
      return __jsx("div", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, this.state.currQuote.text), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
        color: "textSecondary"
      }, "- ", this.state.currQuote.author), __jsx(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: this.state.currImg
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

/***/ }),

/***/ "./node_modules/cool-images/index.js":
/*!*******************************************!*\
  !*** ./node_modules/cool-images/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Utility functions
// =============================================================================
function random(height = 300, width = 500, grey = false, blur = false) {
  if (typeof height !== "number" || typeof width !== "number") {
    throw new Error("Either height or width is not a number. NaN!");
  }
  if (typeof grey !== "boolean" || typeof blur !== "boolean") {
    throw new Error("grey and/or blur should be a boolean!");
  }
  let imgNum, imgURL;
  imgNum = Math.floor(Math.random() * 1000);
  imgURL = `https://unsplash.it/${
    grey ? "g/" : ""
  }${width}/${height}?image=${imgNum}${blur ? "&blur" : ""}`;

  return imgURL;
}

// Export functions
// =============================================================================

function one(height = 300, width = 500, grey = false, blur = false) {
  return random(height, width, grey, blur);
}

function many(
  height = 300,
  width = 500,
  number = 6,
  grey = false,
  blur = false
) {
  if (typeof number !== "number") {
    throw new Error("The number of images should be a number!");
  }
  const imgUrl = random(height, width, grey, blur);
  const imgId = parseInt(imgUrl.match(/image=([^&]+)/)[1]);
  let arr = [];
  for (let i = 0; i < number; i++) {
    let newUrl = imgUrl.replace(imgId, Math.floor(Math.random() * 1000));
    arr.push(newUrl);
  }

  return arr;
}

module.exports = { one, many };


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3RpdmF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jb29sLWltYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb3RpdmF0ZSIsInByb3BzIiwic3RhdGUiLCJjdXJyUXVvdGUiLCJjdXJySW1nIiwic2V0U3RhdGUiLCJxdW90ZSIsImdldFF1b3RlIiwiY29vbEltYWdlcyIsIm9uZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiYXV0aG9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBT01BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsSUFERjtBQUVUQyxhQUFPLEVBQUU7QUFGQSxLQUFiO0FBSGM7QUFPakI7Ozs7V0FFRCw2QkFBbUI7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFBQ0YsaUJBQVMsRUFBRUcsMkRBQUssQ0FBQ0MsUUFBTixFQUFaO0FBQThCSCxlQUFPLEVBQUVJLGtEQUFVLENBQUNDLEdBQVgsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLElBQXpCLEVBQStCLElBQS9CO0FBQXZDLE9BQWQ7QUFDSDs7O1dBRUQsa0JBQVE7QUFDSixVQUFHLENBQUMsS0FBS1AsS0FBTCxDQUFXQyxTQUFmLEVBQTBCLE9BQU8sTUFBQyxrRUFBRCxPQUFQO0FBQzFCTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLEtBQUtULEtBQUwsQ0FBV0MsU0FBL0I7QUFDQSxhQUFPLG1CQUVILE1BQUMsNERBQUQsUUFDSyxLQUFLRCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJTLElBRDFCLENBRkcsRUFLSCxNQUFDLDREQUFEO0FBQVksYUFBSyxFQUFDO0FBQWxCLGVBQ08sS0FBS1YsS0FBTCxDQUFXQyxTQUFYLENBQXFCVSxNQUQ1QixDQUxHLEVBU0gsTUFBQyw0REFBRDtBQUFPLFdBQUcsRUFBRSxLQUFLWCxLQUFMLENBQVdFO0FBQXZCLFFBVEcsQ0FBUDtBQVdIOzs7O0VBNUJrQlUsNENBQUssQ0FBQ0MsUzs7QUErQmRmLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRSxNQUFNLEdBQUcsT0FBTyxTQUFTLE9BQU8sRUFBRSxvQkFBb0I7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTA4MzkxZTBhMTBhOTEwYjE3OGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNvb2xJbWFnZXMgZnJvbSBcImNvb2wtaW1hZ2VzXCI7XHJcbmltcG9ydCBxdW90ZSBmcm9tIFwiaW5zcGlyYXRpb25hbC1xdW90ZXNcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiQGlucnVwdC9zb2xpZC11aS1yZWFjdFwiO1xyXG5cclxudHlwZSBNb3RpdmF0ZVN0YXRlID0ge1xyXG4gICAgY3VyclF1b3RlO1xyXG4gICAgY3VyckltZzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBNb3RpdmF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgTW90aXZhdGVTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyUXVvdGU6IG51bGwsXHJcbiAgICAgICAgICAgIGN1cnJJbWc6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VyclF1b3RlOiBxdW90ZS5nZXRRdW90ZSgpLCBjdXJySW1nOiBjb29sSW1hZ2VzLm9uZSg2MDAsIDgwMCwgdHJ1ZSwgdHJ1ZSl9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmN1cnJRdW90ZSkgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJxdW90ZVwiLHRoaXMuc3RhdGUuY3VyclF1b3RlKTtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VyclF1b3RlLnRleHR9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAtIHt0aGlzLnN0YXRlLmN1cnJRdW90ZS5hdXRob3J9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMuc3RhdGUuY3VyckltZ30gLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdGl2YXRlOyIsIi8vIFV0aWxpdHkgZnVuY3Rpb25zXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJhbmRvbShoZWlnaHQgPSAzMDAsIHdpZHRoID0gNTAwLCBncmV5ID0gZmFsc2UsIGJsdXIgPSBmYWxzZSkge1xyXG4gIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiB3aWR0aCAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRWl0aGVyIGhlaWdodCBvciB3aWR0aCBpcyBub3QgYSBudW1iZXIuIE5hTiFcIik7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZ3JleSAhPT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIGJsdXIgIT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJncmV5IGFuZC9vciBibHVyIHNob3VsZCBiZSBhIGJvb2xlYW4hXCIpO1xyXG4gIH1cclxuICBsZXQgaW1nTnVtLCBpbWdVUkw7XHJcbiAgaW1nTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XHJcbiAgaW1nVVJMID0gYGh0dHBzOi8vdW5zcGxhc2guaXQvJHtcclxuICAgIGdyZXkgPyBcImcvXCIgOiBcIlwiXHJcbiAgfSR7d2lkdGh9LyR7aGVpZ2h0fT9pbWFnZT0ke2ltZ051bX0ke2JsdXIgPyBcIiZibHVyXCIgOiBcIlwifWA7XHJcblxyXG4gIHJldHVybiBpbWdVUkw7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBmdW5jdGlvbnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIG9uZShoZWlnaHQgPSAzMDAsIHdpZHRoID0gNTAwLCBncmV5ID0gZmFsc2UsIGJsdXIgPSBmYWxzZSkge1xyXG4gIHJldHVybiByYW5kb20oaGVpZ2h0LCB3aWR0aCwgZ3JleSwgYmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hbnkoXHJcbiAgaGVpZ2h0ID0gMzAwLFxyXG4gIHdpZHRoID0gNTAwLFxyXG4gIG51bWJlciA9IDYsXHJcbiAgZ3JleSA9IGZhbHNlLFxyXG4gIGJsdXIgPSBmYWxzZVxyXG4pIHtcclxuICBpZiAodHlwZW9mIG51bWJlciAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG51bWJlciBvZiBpbWFnZXMgc2hvdWxkIGJlIGEgbnVtYmVyIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaW1nVXJsID0gcmFuZG9tKGhlaWdodCwgd2lkdGgsIGdyZXksIGJsdXIpO1xyXG4gIGNvbnN0IGltZ0lkID0gcGFyc2VJbnQoaW1nVXJsLm1hdGNoKC9pbWFnZT0oW14mXSspLylbMV0pO1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcbiAgICBsZXQgbmV3VXJsID0gaW1nVXJsLnJlcGxhY2UoaW1nSWQsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApKTtcclxuICAgIGFyci5wdXNoKG5ld1VybCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgb25lLCBtYW55IH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=