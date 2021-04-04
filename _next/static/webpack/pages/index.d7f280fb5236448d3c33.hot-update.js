webpackHotUpdate_N_E("pages/index",{

/***/ "./util/SolidUtil.ts":
/*!***************************!*\
  !*** ./util/SolidUtil.ts ***!
  \***************************/
/*! exports provided: getPodUri, NS, deleteAllInts, deleteAllStrings, getOrCreateDataset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodUri", function() { return getPodUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NS", function() { return NS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllInts", function() { return deleteAllInts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllStrings", function() { return deleteAllStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateDataset", function() { return getOrCreateDataset; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inrupt/solid-client */ "./node_modules/@inrupt/solid-client/dist/index.es.js");



var NS = {
  STORAGE: "http://www.w3.org/ns/pim/space#storage",
  TEXT: "https://schema.org/text",
  CREATED: "http://www.w3.org/2002/12/cal/ical#created",
  TYPE: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
};

function getPodUri(_x) {
  return _getPodUri.apply(this, arguments);
}

function _getPodUri() {
  _getPodUri = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(session) {
    var profileDataset, profile, podUrls;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getSolidDataset"])(session.info.webId, {
              fetch: session.fetch
            });

          case 2:
            profileDataset = _context.sent;
            profile = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getThing"])(profileDataset, session.info.webId);
            podUrls = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getUrlAll"])(profile, NS.STORAGE);
            return _context.abrupt("return", podUrls[0]);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPodUri.apply(this, arguments);
}

function deleteAllInts(thing, param) {
  Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getIntegerAll"])(thing, param).forEach(function (val) {
    thing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["removeInteger"])(thing, param, val);
  });
  return thing;
}

function deleteAllStrings(thing, param) {
  Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getStringNoLocaleAll"])(thing, param).forEach(function (val) {
    thing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["removeStringNoLocale"])(thing, param, val);
  });
  return thing;
}

function getOrCreateDataset(_x2, _x3) {
  return _getOrCreateDataset.apply(this, arguments);
}

function _getOrCreateDataset() {
  _getOrCreateDataset = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(indexUrl, opts) {
    var dataset, _dataset;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getSolidDataset"])(indexUrl, opts);

          case 3:
            dataset = _context2.sent;
            return _context2.abrupt("return", dataset);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

            if (!(_context2.t0.statusCode == 404 || _context2.t0.statusCode == 403)) {
              _context2.next = 16;
              break;
            }

            _context2.next = 12;
            return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["saveSolidDatasetAt"])(indexUrl, Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["createSolidDataset"])(), opts);

          case 12:
            _dataset = _context2.sent;
            return _context2.abrupt("return", _dataset);

          case 16:
            console.log("Error while grabbing dataset", _context2.t0);
            return _context2.abrupt("return", getOrCreateDataset(indexUrl, opts));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getOrCreateDataset.apply(this, arguments);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9Tb2xpZFV0aWwudHMiXSwibmFtZXMiOlsiTlMiLCJTVE9SQUdFIiwiVEVYVCIsIkNSRUFURUQiLCJUWVBFIiwiZ2V0UG9kVXJpIiwic2Vzc2lvbiIsImdldFNvbGlkRGF0YXNldCIsImluZm8iLCJ3ZWJJZCIsImZldGNoIiwicHJvZmlsZURhdGFzZXQiLCJwcm9maWxlIiwiZ2V0VGhpbmciLCJwb2RVcmxzIiwiZ2V0VXJsQWxsIiwiZGVsZXRlQWxsSW50cyIsInRoaW5nIiwicGFyYW0iLCJnZXRJbnRlZ2VyQWxsIiwiZm9yRWFjaCIsInZhbCIsInJlbW92ZUludGVnZXIiLCJkZWxldGVBbGxTdHJpbmdzIiwiZ2V0U3RyaW5nTm9Mb2NhbGVBbGwiLCJyZW1vdmVTdHJpbmdOb0xvY2FsZSIsImdldE9yQ3JlYXRlRGF0YXNldCIsImluZGV4VXJsIiwib3B0cyIsImRhdGFzZXQiLCJzdGF0dXNDb2RlIiwic2F2ZVNvbGlkRGF0YXNldEF0IiwiY3JlYXRlU29saWREYXRhc2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBaUJBLElBQU1BLEVBQUUsR0FBRztBQUNQQyxTQUFPLEVBQUUsd0NBREY7QUFFUEMsTUFBSSxFQUFFLHlCQUZDO0FBR1BDLFNBQU8sRUFBRSw0Q0FIRjtBQUlQQyxNQUFJLEVBQUU7QUFKQyxDQUFYOztTQU9lQyxTOzs7OztnTUFBZixpQkFBeUJDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lDQyw0RUFBZSxDQUFDRCxPQUFPLENBQUNFLElBQVIsQ0FBYUMsS0FBZCxFQUFxQjtBQUFDQyxtQkFBSyxFQUFFSixPQUFPLENBQUNJO0FBQWhCLGFBQXJCLENBRGhEOztBQUFBO0FBQ1VDLDBCQURWO0FBRVVDLG1CQUZWLEdBRW9CQyxxRUFBUSxDQUFDRixjQUFELEVBQWlCTCxPQUFPLENBQUNFLElBQVIsQ0FBYUMsS0FBOUIsQ0FGNUI7QUFHVUssbUJBSFYsR0FHb0JDLHNFQUFTLENBQUNILE9BQUQsRUFBVVosRUFBRSxDQUFDQyxPQUFiLENBSDdCO0FBQUEsNkNBS1dhLE9BQU8sQ0FBQyxDQUFELENBTGxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQSxTQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUFxQ0MsS0FBckMsRUFBeUQ7QUFDckRDLDRFQUFhLENBQUNGLEtBQUQsRUFBUUMsS0FBUixDQUFiLENBQTRCRSxPQUE1QixDQUFvQyxVQUFDQyxHQUFELEVBQVM7QUFDekNKLFNBQUssR0FBR0ssMEVBQWEsQ0FBQ0wsS0FBRCxFQUFRQyxLQUFSLEVBQWVHLEdBQWYsQ0FBckI7QUFDSCxHQUZEO0FBSUEsU0FBT0osS0FBUDtBQUNIOztBQUVELFNBQVNNLGdCQUFULENBQTBCTixLQUExQixFQUF3Q0MsS0FBeEMsRUFBNEQ7QUFDeERNLG1GQUFvQixDQUFDUCxLQUFELEVBQVFDLEtBQVIsQ0FBcEIsQ0FBbUNFLE9BQW5DLENBQTJDLFVBQUNDLEdBQUQsRUFBUztBQUNoREosU0FBSyxHQUFHUSxpRkFBb0IsQ0FBQ1IsS0FBRCxFQUFRQyxLQUFSLEVBQWVHLEdBQWYsQ0FBNUI7QUFDSCxHQUZEO0FBSUEsU0FBT0osS0FBUDtBQUNIOztTQUVjUyxrQjs7Ozs7eU1BQWYsa0JBQWtDQyxRQUFsQyxFQUFvREMsSUFBcEQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHOEJyQiw0RUFBZSxDQUFDb0IsUUFBRCxFQUFXQyxJQUFYLENBSDdDOztBQUFBO0FBR2NDLG1CQUhkO0FBQUEsOENBSWVBLE9BSmY7O0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQVFXLGFBQU1DLFVBQU4sSUFBb0IsR0FBcEIsSUFBMkIsYUFBTUEsVUFBTixJQUFvQixHQVIxRDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQVVrQ0MsK0VBQWtCLENBQUNKLFFBQUQsRUFBV0ssK0VBQWtCLEVBQTdCLEVBQWlDSixJQUFqQyxDQVZwRDs7QUFBQTtBQVVrQkMsb0JBVmxCO0FBQUEsOENBV21CQSxRQVhuQjs7QUFBQTtBQWFZSSxtQkFBTyxDQUFDQyxHQUFSLENBQVksOEJBQVo7QUFiWiw4Q0FjbUJSLGtCQUFrQixDQUFDQyxRQUFELEVBQVdDLElBQVgsQ0FkckM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQW1CQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kN2YyODBmYjUyMzY0NDhkM2MzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVTb2xpZERhdGFzZXQsXHJcbiAgICBnZXRJbnRlZ2VyQWxsLFxyXG4gICAgZ2V0U29saWREYXRhc2V0LFxyXG4gICAgZ2V0U3RyaW5nTm9Mb2NhbGVBbGwsXHJcbiAgICBnZXRUaGluZyxcclxuICAgIGdldFVybEFsbCxcclxuICAgIHJlbW92ZUludGVnZXIsXHJcbiAgICByZW1vdmVTdHJpbmdOb0xvY2FsZSxcclxuICAgIHNhdmVTb2xpZERhdGFzZXRBdCxcclxuICAgIFRoaW5nLFxyXG4gICAgVXJsXHJcbn0gZnJvbSBcIkBpbnJ1cHQvc29saWQtY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIkBpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXJcIjtcclxuXHJcblxyXG5jb25zdCBOUyA9IHtcclxuICAgIFNUT1JBR0U6IFwiaHR0cDovL3d3dy53My5vcmcvbnMvcGltL3NwYWNlI3N0b3JhZ2VcIixcclxuICAgIFRFWFQ6IFwiaHR0cHM6Ly9zY2hlbWEub3JnL3RleHRcIixcclxuICAgIENSRUFURUQ6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMi8xMi9jYWwvaWNhbCNjcmVhdGVkXCIsXHJcbiAgICBUWVBFOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyN0eXBlXCJcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBvZFVyaShzZXNzaW9uOiBTZXNzaW9uKSA6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBwcm9maWxlRGF0YXNldCA9IGF3YWl0IGdldFNvbGlkRGF0YXNldChzZXNzaW9uLmluZm8ud2ViSWQsIHtmZXRjaDogc2Vzc2lvbi5mZXRjaH0pO1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGdldFRoaW5nKHByb2ZpbGVEYXRhc2V0LCBzZXNzaW9uLmluZm8ud2ViSWQpO1xyXG4gICAgY29uc3QgcG9kVXJscyA9IGdldFVybEFsbChwcm9maWxlLCBOUy5TVE9SQUdFKTtcclxuXHJcbiAgICByZXR1cm4gcG9kVXJsc1swXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQWxsSW50cyh0aGluZzogVGhpbmcsIHBhcmFtOiBzdHJpbmcgfCBVcmwpe1xyXG4gICAgZ2V0SW50ZWdlckFsbCh0aGluZywgcGFyYW0pLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgIHRoaW5nID0gcmVtb3ZlSW50ZWdlcih0aGluZywgcGFyYW0sIHZhbCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVBbGxTdHJpbmdzKHRoaW5nOiBUaGluZywgcGFyYW06IHN0cmluZyB8IFVybCl7XHJcbiAgICBnZXRTdHJpbmdOb0xvY2FsZUFsbCh0aGluZywgcGFyYW0pLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgIHRoaW5nID0gcmVtb3ZlU3RyaW5nTm9Mb2NhbGUodGhpbmcsIHBhcmFtLCB2YWwpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGluZztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVEYXRhc2V0KGluZGV4VXJsOiBzdHJpbmcsIG9wdHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBncmFiIHRoZSBkYXRhc2V0XHJcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGF3YWl0IGdldFNvbGlkRGF0YXNldChpbmRleFVybCwgb3B0cyk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFzZXQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIElmIHdlIGVycm9yZWQsIHRoYXQgbWVhbnMgd2UgZmFpbGVkIHRvIHJldHJpZXZlIHRoZSBkYXRhc2V0LlxyXG4gICAgICAgIC8vIFRoaXMgbGlrZWx5IG1lYW5zIGl0J3MgbWlzc2luZ1xyXG4gICAgICAgIGlmKGVycm9yLnN0YXR1c0NvZGUgPT0gNDA0IHx8IGVycm9yLnN0YXR1c0NvZGUgPT0gNDAzKXtcclxuICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byBnZW5lcmF0ZSBhIG5ldyBvbmVcclxuICAgICAgICAgICAgY29uc3QgZGF0YXNldCA9IGF3YWl0IHNhdmVTb2xpZERhdGFzZXRBdChpbmRleFVybCwgY3JlYXRlU29saWREYXRhc2V0KCksIG9wdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YXNldDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBncmFiYmluZyBkYXRhc2V0XCIsZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JDcmVhdGVEYXRhc2V0KGluZGV4VXJsLCBvcHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFBvZFVyaSwgTlMsIGRlbGV0ZUFsbEludHMsIGRlbGV0ZUFsbFN0cmluZ3MsIGdldE9yQ3JlYXRlRGF0YXNldCB9Il0sInNvdXJjZVJvb3QiOiIifQ==