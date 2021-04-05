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
  while (Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getInteger"])(thing, param) !== null) {
    thing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["removeInteger"])(thing, param, Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_2__["getInteger"])(thing, param));
  }
  /*
  getIntegerAll(thing, param).forEach((val) => {
      thing = removeInteger(thing, param, val);
  });*/


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9Tb2xpZFV0aWwudHMiXSwibmFtZXMiOlsiTlMiLCJTVE9SQUdFIiwiVEVYVCIsIkNSRUFURUQiLCJUWVBFIiwiZ2V0UG9kVXJpIiwic2Vzc2lvbiIsImdldFNvbGlkRGF0YXNldCIsImluZm8iLCJ3ZWJJZCIsImZldGNoIiwicHJvZmlsZURhdGFzZXQiLCJwcm9maWxlIiwiZ2V0VGhpbmciLCJwb2RVcmxzIiwiZ2V0VXJsQWxsIiwiZGVsZXRlQWxsSW50cyIsInRoaW5nIiwicGFyYW0iLCJnZXRJbnRlZ2VyIiwicmVtb3ZlSW50ZWdlciIsImRlbGV0ZUFsbFN0cmluZ3MiLCJnZXRTdHJpbmdOb0xvY2FsZUFsbCIsImZvckVhY2giLCJ2YWwiLCJyZW1vdmVTdHJpbmdOb0xvY2FsZSIsImdldE9yQ3JlYXRlRGF0YXNldCIsImluZGV4VXJsIiwib3B0cyIsImRhdGFzZXQiLCJzdGF0dXNDb2RlIiwic2F2ZVNvbGlkRGF0YXNldEF0IiwiY3JlYXRlU29saWREYXRhc2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBa0JBLElBQU1BLEVBQUUsR0FBRztBQUNQQyxTQUFPLEVBQUUsd0NBREY7QUFFUEMsTUFBSSxFQUFFLHlCQUZDO0FBR1BDLFNBQU8sRUFBRSw0Q0FIRjtBQUlQQyxNQUFJLEVBQUU7QUFKQyxDQUFYOztTQU9lQyxTOzs7OztnTUFBZixpQkFBeUJDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lDQyw0RUFBZSxDQUFDRCxPQUFPLENBQUNFLElBQVIsQ0FBYUMsS0FBZCxFQUFxQjtBQUFDQyxtQkFBSyxFQUFFSixPQUFPLENBQUNJO0FBQWhCLGFBQXJCLENBRGhEOztBQUFBO0FBQ1VDLDBCQURWO0FBRVVDLG1CQUZWLEdBRW9CQyxxRUFBUSxDQUFDRixjQUFELEVBQWlCTCxPQUFPLENBQUNFLElBQVIsQ0FBYUMsS0FBOUIsQ0FGNUI7QUFHVUssbUJBSFYsR0FHb0JDLHNFQUFTLENBQUNILE9BQUQsRUFBVVosRUFBRSxDQUFDQyxPQUFiLENBSDdCO0FBQUEsNkNBS1dhLE9BQU8sQ0FBQyxDQUFELENBTGxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQSxTQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUFxQ0MsS0FBckMsRUFBeUQ7QUFDckQsU0FBTUMsdUVBQVUsQ0FBQ0YsS0FBRCxFQUFRQyxLQUFSLENBQVYsS0FBNkIsSUFBbkMsRUFBd0M7QUFDcENELFNBQUssR0FBR0csMEVBQWEsQ0FBQ0gsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLHVFQUFVLENBQUNGLEtBQUQsRUFBUUMsS0FBUixDQUF6QixDQUFyQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7OztBQUVJLFNBQU9ELEtBQVA7QUFDSDs7QUFFRCxTQUFTSSxnQkFBVCxDQUEwQkosS0FBMUIsRUFBd0NDLEtBQXhDLEVBQTREO0FBQ3hESSxtRkFBb0IsQ0FBQ0wsS0FBRCxFQUFRQyxLQUFSLENBQXBCLENBQW1DSyxPQUFuQyxDQUEyQyxVQUFDQyxHQUFELEVBQVM7QUFDaERQLFNBQUssR0FBR1EsaUZBQW9CLENBQUNSLEtBQUQsRUFBUUMsS0FBUixFQUFlTSxHQUFmLENBQTVCO0FBQ0gsR0FGRDtBQUlBLFNBQU9QLEtBQVA7QUFDSDs7U0FFY1Msa0I7Ozs7O3lNQUFmLGtCQUFrQ0MsUUFBbEMsRUFBb0RDLElBQXBEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRzhCckIsNEVBQWUsQ0FBQ29CLFFBQUQsRUFBV0MsSUFBWCxDQUg3Qzs7QUFBQTtBQUdjQyxtQkFIZDtBQUFBLDhDQUllQSxPQUpmOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFRVyxhQUFNQyxVQUFOLElBQW9CLEdBQXBCLElBQTJCLGFBQU1BLFVBQU4sSUFBb0IsR0FSMUQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFVa0NDLCtFQUFrQixDQUFDSixRQUFELEVBQVdLLCtFQUFrQixFQUE3QixFQUFpQ0osSUFBakMsQ0FWcEQ7O0FBQUE7QUFVa0JDLG9CQVZsQjtBQUFBLDhDQVdtQkEsUUFYbkI7O0FBQUE7QUFhWUksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBYlosOENBY21CUixrQkFBa0IsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLENBZHJDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFtQkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ5ODE2OWRiYWNkMzYxYzk3MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlU29saWREYXRhc2V0LFxyXG4gICAgZ2V0SW50ZWdlcixcclxuICAgIGdldEludGVnZXJBbGwsXHJcbiAgICBnZXRTb2xpZERhdGFzZXQsXHJcbiAgICBnZXRTdHJpbmdOb0xvY2FsZUFsbCxcclxuICAgIGdldFRoaW5nLFxyXG4gICAgZ2V0VXJsQWxsLFxyXG4gICAgcmVtb3ZlSW50ZWdlcixcclxuICAgIHJlbW92ZVN0cmluZ05vTG9jYWxlLFxyXG4gICAgc2F2ZVNvbGlkRGF0YXNldEF0LFxyXG4gICAgVGhpbmcsXHJcbiAgICBVcmxcclxufSBmcm9tIFwiQGlucnVwdC9zb2xpZC1jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tIFwiQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3NlclwiO1xyXG5cclxuXHJcbmNvbnN0IE5TID0ge1xyXG4gICAgU1RPUkFHRTogXCJodHRwOi8vd3d3LnczLm9yZy9ucy9waW0vc3BhY2Ujc3RvcmFnZVwiLFxyXG4gICAgVEVYVDogXCJodHRwczovL3NjaGVtYS5vcmcvdGV4dFwiLFxyXG4gICAgQ1JFQVRFRDogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAyLzEyL2NhbC9pY2FsI2NyZWF0ZWRcIixcclxuICAgIFRZUEU6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI3R5cGVcIlxyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9kVXJpKHNlc3Npb246IFNlc3Npb24pIDogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHByb2ZpbGVEYXRhc2V0ID0gYXdhaXQgZ2V0U29saWREYXRhc2V0KHNlc3Npb24uaW5mby53ZWJJZCwge2ZldGNoOiBzZXNzaW9uLmZldGNofSk7XHJcbiAgICBjb25zdCBwcm9maWxlID0gZ2V0VGhpbmcocHJvZmlsZURhdGFzZXQsIHNlc3Npb24uaW5mby53ZWJJZCk7XHJcbiAgICBjb25zdCBwb2RVcmxzID0gZ2V0VXJsQWxsKHByb2ZpbGUsIE5TLlNUT1JBR0UpO1xyXG5cclxuICAgIHJldHVybiBwb2RVcmxzWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVBbGxJbnRzKHRoaW5nOiBUaGluZywgcGFyYW06IHN0cmluZyB8IFVybCl7XHJcbiAgICB3aGlsZShnZXRJbnRlZ2VyKHRoaW5nLCBwYXJhbSkgIT09IG51bGwpe1xyXG4gICAgICAgIHRoaW5nID0gcmVtb3ZlSW50ZWdlcih0aGluZywgcGFyYW0sIGdldEludGVnZXIodGhpbmcsIHBhcmFtKSk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgZ2V0SW50ZWdlckFsbCh0aGluZywgcGFyYW0pLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgIHRoaW5nID0gcmVtb3ZlSW50ZWdlcih0aGluZywgcGFyYW0sIHZhbCk7XHJcbiAgICB9KTsqL1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUFsbFN0cmluZ3ModGhpbmc6IFRoaW5nLCBwYXJhbTogc3RyaW5nIHwgVXJsKXtcclxuICAgIGdldFN0cmluZ05vTG9jYWxlQWxsKHRoaW5nLCBwYXJhbSkuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgdGhpbmcgPSByZW1vdmVTdHJpbmdOb0xvY2FsZSh0aGluZywgcGFyYW0sIHZhbCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaW5nO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZURhdGFzZXQoaW5kZXhVcmw6IHN0cmluZywgb3B0cykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIGdyYWIgdGhlIGRhdGFzZXRcclxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gYXdhaXQgZ2V0U29saWREYXRhc2V0KGluZGV4VXJsLCBvcHRzKTtcclxuICAgICAgICByZXR1cm4gZGF0YXNldDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gSWYgd2UgZXJyb3JlZCwgdGhhdCBtZWFucyB3ZSBmYWlsZWQgdG8gcmV0cmlldmUgdGhlIGRhdGFzZXQuXHJcbiAgICAgICAgLy8gVGhpcyBsaWtlbHkgbWVhbnMgaXQncyBtaXNzaW5nXHJcbiAgICAgICAgaWYoZXJyb3Iuc3RhdHVzQ29kZSA9PSA0MDQgfHwgZXJyb3Iuc3RhdHVzQ29kZSA9PSA0MDMpe1xyXG4gICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGdlbmVyYXRlIGEgbmV3IG9uZVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhc2V0ID0gYXdhaXQgc2F2ZVNvbGlkRGF0YXNldEF0KGluZGV4VXJsLCBjcmVhdGVTb2xpZERhdGFzZXQoKSwgb3B0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhc2V0O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGdyYWJiaW5nIGRhdGFzZXRcIixlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRPckNyZWF0ZURhdGFzZXQoaW5kZXhVcmwsIG9wdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0UG9kVXJpLCBOUywgZGVsZXRlQWxsSW50cywgZGVsZXRlQWxsU3RyaW5ncywgZ2V0T3JDcmVhdGVEYXRhc2V0IH0iXSwic291cmNlUm9vdCI6IiJ9