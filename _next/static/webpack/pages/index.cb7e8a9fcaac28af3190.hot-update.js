webpackHotUpdate_N_E("pages/index",{

/***/ "./util/DDatasetBase.ts":
/*!******************************!*\
  !*** ./util/DDatasetBase.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inrupt/solid-client */ "./node_modules/@inrupt/solid-client/dist/index.es.js");
/* harmony import */ var _SolidUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SolidUtil */ "./util/SolidUtil.ts");
/* harmony import */ var _Mutex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Mutex */ "./util/Mutex.ts");









var DDatasetBase = /*#__PURE__*/function () {
  function DDatasetBase(indexUri, containerUri, session) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DDatasetBase);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_indexUri", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_containerUri", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "_session", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "dataset", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "opts", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "syncMutex", new _Mutex__WEBPACK_IMPORTED_MODULE_7__["default"]());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "onSyncCallbacks", []);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "cache", void 0);

    this._indexUri = indexUri;
    this._containerUri = containerUri;

    if (session) {
      this.setSession(session);
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DDatasetBase, [{
    key: "indexUri",
    get: function get() {
      return this._indexUri;
    }
  }, {
    key: "containerUri",
    get: function get() {
      return this._containerUri;
    }
  }, {
    key: "ready",
    get: function get() {
      return this.dataset != null;
    }
  }, {
    key: "callSyncCallbacks",
    value: function callSyncCallbacks() {
      this.onSyncCallbacks.forEach(function (c) {
        c.call();
      });
      this.cache = null;
    }
  }, {
    key: "addListener",
    value: function addListener(listener) {
      this.onSyncCallbacks.push(listener);
    }
  }, {
    key: "deleteListener",
    value: function deleteListener(listener) {
      var idx = this.onSyncCallbacks.indexOf(listener);
      if (idx >= 0) delete this.onSyncCallbacks[idx];
    }
  }, {
    key: "deleteSelf",
    value: function () {
      var _deleteSelf = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["deleteSolidDataset"])(this._indexUri, this.opts);

              case 2:
                this.dataset = null;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteSelf() {
        return _deleteSelf.apply(this, arguments);
      }

      return deleteSelf;
    }()
  }, {
    key: "fetchDataset",
    value: function () {
      var _fetchDataset = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_SolidUtil__WEBPACK_IMPORTED_MODULE_6__["getOrCreateDataset"])(this._indexUri, this.opts);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchDataset() {
        return _fetchDataset.apply(this, arguments);
      }

      return fetchDataset;
    }()
  }, {
    key: "initializeDataset",
    value: function () {
      var _initializeDataset = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.fetchDataset();

              case 2:
                this.dataset = _context3.sent;
                this.callSyncCallbacks();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initializeDataset() {
        return _initializeDataset.apply(this, arguments);
      }

      return initializeDataset;
    }()
  }, {
    key: "synchronizeDataset",
    value: function () {
      var _synchronizeDataset = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(changes) {
        var unlock;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.syncMutex.lock();

              case 2:
                unlock = _context4.sent;
                _context4.prev = 3;
                _context4.next = 6;
                return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["saveSolidDatasetAt"])(this._indexUri, changes, this.opts);

              case 6:
                this.dataset = _context4.sent;

              case 7:
                _context4.prev = 7;
                unlock();
                _context4.next = 11;
                return this.fetchDataset();

              case 11:
                this.dataset = _context4.sent;
                return _context4.finish(7);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3,, 7, 13]]);
      }));

      function synchronizeDataset(_x) {
        return _synchronizeDataset.apply(this, arguments);
      }

      return synchronizeDataset;
    }()
  }, {
    key: "setSession",
    value: function setSession(session) {
      if (this._session) throw new Error("Attempted to set a session of a DDatasetBase that already has a session");
      this._session = session;
      this.opts = {
        fetch: session.fetch
      };
      this.initializeDataset();
    }
  }, {
    key: "getThing",
    value: function getThing(id) {
      if (!this.dataset) return null;
      return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getThing"])(this.dataset, id);
    }
  }, {
    key: "getAllThings",
    value: function getAllThings() {
      if (!this.dataset) return null;
      return Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["getThingAll"])(this.dataset);
    }
  }, {
    key: "insertThing",
    value: function () {
      var _insertThing = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(thing) {
        var changes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.dataset) {
                  _context5.next = 2;
                  break;
                }

                throw new Error("Dataset is not yet ready");

              case 2:
                _context5.next = 4;
                return this.removeThing(thing);

              case 4:
                changes = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["setThing"])(this.dataset, thing);
                _context5.next = 7;
                return this.synchronizeDataset(changes);

              case 7:
                this.callSyncCallbacks();

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function insertThing(_x2) {
        return _insertThing.apply(this, arguments);
      }

      return insertThing;
    }()
  }, {
    key: "removeThing",
    value: function () {
      var _removeThing2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(val) {
        var thing, changes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.dataset) {
                  _context6.next = 2;
                  break;
                }

                throw new Error("Dataset is not yet ready");

              case 2:
                thing = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["isThing"])(val) ? val : this.getThing(val);

                if (thing) {
                  _context6.next = 5;
                  break;
                }

                throw new Error("removeThing with null thing");

              case 5:
                changes = Object(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_5__["removeThing"])(this.dataset, thing);
                _context6.next = 8;
                return this.synchronizeDataset(changes);

              case 8:
                this.callSyncCallbacks();

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function removeThing(_x3) {
        return _removeThing2.apply(this, arguments);
      }

      return removeThing;
    }()
  }], [{
    key: "cloneSession",
    value: function cloneSession(from, to) {
      to.setSession(from._session);
    }
  }]);

  return DDatasetBase;
}();

/* harmony default export */ __webpack_exports__["default"] = (DDatasetBase);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9ERGF0YXNldEJhc2UudHMiXSwibmFtZXMiOlsiRERhdGFzZXRCYXNlIiwiaW5kZXhVcmkiLCJjb250YWluZXJVcmkiLCJzZXNzaW9uIiwiTXV0ZXgiLCJfaW5kZXhVcmkiLCJfY29udGFpbmVyVXJpIiwic2V0U2Vzc2lvbiIsImRhdGFzZXQiLCJvblN5bmNDYWxsYmFja3MiLCJmb3JFYWNoIiwiYyIsImNhbGwiLCJjYWNoZSIsImxpc3RlbmVyIiwicHVzaCIsImlkeCIsImluZGV4T2YiLCJkZWxldGVTb2xpZERhdGFzZXQiLCJvcHRzIiwiZ2V0T3JDcmVhdGVEYXRhc2V0IiwiZmV0Y2hEYXRhc2V0IiwiY2FsbFN5bmNDYWxsYmFja3MiLCJjaGFuZ2VzIiwic3luY011dGV4IiwibG9jayIsInVubG9jayIsInNhdmVTb2xpZERhdGFzZXRBdCIsIl9zZXNzaW9uIiwiRXJyb3IiLCJmZXRjaCIsImluaXRpYWxpemVEYXRhc2V0IiwiaWQiLCJnZXRUaGluZyIsImdldFRoaW5nQWxsIiwidGhpbmciLCJyZW1vdmVUaGluZyIsInNldFRoaW5nIiwic3luY2hyb25pemVEYXRhc2V0IiwidmFsIiwiaXNUaGluZyIsImZyb20iLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBa0JBO0FBRUE7O0lBTWVBLFk7QUFxRVgsd0JBQVlDLFFBQVosRUFBOEJDLFlBQTlCLEVBQW9EQyxPQUFwRCxFQUF1RTtBQUFBOztBQUFBOztBQUFBOztBQUFBLGdIQWxFM0MsSUFrRTJDOztBQUFBLCtHQTdEdkMsSUE2RHVDOztBQUFBLDRHQXpEeEQsRUF5RHdEOztBQUFBLGlIQXZENUMsSUFBSUMsOENBQUosRUF1RDRDOztBQUFBLHVIQXREakMsRUFzRGlDOztBQUFBOztBQUNuRSxTQUFLQyxTQUFMLEdBQWlCSixRQUFqQjtBQUNBLFNBQUtLLGFBQUwsR0FBcUJKLFlBQXJCOztBQUVBLFFBQUdDLE9BQUgsRUFB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QUgsQ0FBY2tDLElBQUksQ0FBQ2IsUUFBbkI7QUFDSDs7Ozs7O0FBSVU1QiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYjdlOGE5ZmNhYWMyOGFmMzE5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgICBkZWxldGVTb2xpZERhdGFzZXQsXHJcbiAgICBzYXZlU29saWREYXRhc2V0QXQsXHJcbiAgICBcclxuICAgIGdldFRoaW5nLFxyXG4gICAgZ2V0VGhpbmdBbGwsXHJcbiAgICBcclxuICAgIGlzVGhpbmcsXHJcbiAgICByZW1vdmVUaGluZyxcclxuICAgIHNldFRoaW5nLFxyXG5cclxuICAgIFdpdGhDaGFuZ2VMb2csXHJcbiAgICBTb2xpZERhdGFzZXQsXHJcbiAgICBUaGluZyxcclxuICAgIFVybFxyXG59IGZyb20gXCJAaW5ydXB0L3NvbGlkLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIkBpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXJcIjtcclxuXHJcbmltcG9ydCB7IGdldE9yQ3JlYXRlRGF0YXNldCB9IGZyb20gXCIuL1NvbGlkVXRpbFwiO1xyXG5pbXBvcnQgQ2FsbGFibGUgZnJvbSBcIi4vQ2FsbGFibGVcIjtcclxuaW1wb3J0IE11dGV4IGZyb20gXCIuL011dGV4XCI7XHJcblxyXG50eXBlIFRoaW5nSUQgPSBzdHJpbmcgfCBVcmw7XHJcblxyXG50eXBlIENhY2hlID0gYW55O1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgRERhdGFzZXRCYXNlIHtcclxuICAgIHByaXZhdGUgX2luZGV4VXJpOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9jb250YWluZXJVcmk6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3Nlc3Npb246IFNlc3Npb24gPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaW5kZXhVcmkoKSB7IHJldHVybiB0aGlzLl9pbmRleFVyaTsgfVxyXG4gICAgcHVibGljIGdldCBjb250YWluZXJVcmkoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXJVcmk7IH1cclxuXHJcbiAgICBwcml2YXRlIGRhdGFzZXQ6IFNvbGlkRGF0YXNldCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IHJlYWR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzZXQgIT0gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb3B0cyA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgc3luY011dGV4OiBNdXRleCA9IG5ldyBNdXRleCgpO1xyXG4gICAgcHJpdmF0ZSBvblN5bmNDYWxsYmFja3M6IENhbGxhYmxlW10gPSBbXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FjaGU6IENhY2hlO1xyXG5cclxuICAgIHByaXZhdGUgY2FsbFN5bmNDYWxsYmFja3MoKSB7XHJcbiAgICAgICAgdGhpcy5vblN5bmNDYWxsYmFja3MuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICBjLmNhbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhY2hlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTGlzdGVuZXIobGlzdGVuZXI6IENhbGxhYmxlKXtcclxuICAgICAgICB0aGlzLm9uU3luY0NhbGxiYWNrcy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTGlzdGVuZXIobGlzdGVuZXI6IENhbGxhYmxlKXtcclxuICAgICAgICBjb25zdCBpZHggPSB0aGlzLm9uU3luY0NhbGxiYWNrcy5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgICAgICBpZihpZHggPj0gMCkgZGVsZXRlIHRoaXMub25TeW5jQ2FsbGJhY2tzW2lkeF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIGRlbGV0ZVNlbGYoKXtcclxuICAgICAgICBhd2FpdCBkZWxldGVTb2xpZERhdGFzZXQodGhpcy5faW5kZXhVcmksIHRoaXMub3B0cyk7XHJcbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGZldGNoRGF0YXNldCgpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZ2V0T3JDcmVhdGVEYXRhc2V0KHRoaXMuX2luZGV4VXJpLCB0aGlzLm9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdGlhbGl6ZURhdGFzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gYXdhaXQgdGhpcy5mZXRjaERhdGFzZXQoKTtcclxuICAgICAgICB0aGlzLmNhbGxTeW5jQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jaHJvbml6ZURhdGFzZXQoY2hhbmdlczogU29saWREYXRhc2V0ICYgV2l0aENoYW5nZUxvZykge1xyXG4gICAgICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMuc3luY011dGV4LmxvY2soKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFzZXQgPSBhd2FpdCBzYXZlU29saWREYXRhc2V0QXQodGhpcy5faW5kZXhVcmksIGNoYW5nZXMsIHRoaXMub3B0cyk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdW5sb2NrKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXNldCA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2Vzc2lvbihzZXNzaW9uOiBTZXNzaW9uKXtcclxuICAgICAgICBpZih0aGlzLl9zZXNzaW9uKSB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gc2V0IGEgc2Vzc2lvbiBvZiBhIEREYXRhc2V0QmFzZSB0aGF0IGFscmVhZHkgaGFzIGEgc2Vzc2lvblwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgdGhpcy5vcHRzID0geyBmZXRjaDogc2Vzc2lvbi5mZXRjaCB9O1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGFzZXQoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoaW5kZXhVcmk6IHN0cmluZywgY29udGFpbmVyVXJpOiBzdHJpbmcsIHNlc3Npb24/OiBTZXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXhVcmkgPSBpbmRleFVyaTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXJVcmkgPSBjb250YWluZXJVcmk7XHJcblxyXG4gICAgICAgIGlmKHNlc3Npb24pe1xyXG4gICAgICAgICAgICB0aGlzLnNldFNlc3Npb24oc2Vzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRUaGluZyhpZDogVGhpbmdJRCk6IFRoaW5nIHtcclxuICAgICAgICBpZighdGhpcy5kYXRhc2V0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gZ2V0VGhpbmcodGhpcy5kYXRhc2V0LCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEFsbFRoaW5ncygpOiBUaGluZ1tdIHtcclxuICAgICAgICBpZighdGhpcy5kYXRhc2V0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldFRoaW5nQWxsKHRoaXMuZGF0YXNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIGluc2VydFRoaW5nKHRoaW5nOiBUaGluZykge1xyXG4gICAgICAgIGlmKCF0aGlzLmRhdGFzZXQpIHRocm93IG5ldyBFcnJvcihcIkRhdGFzZXQgaXMgbm90IHlldCByZWFkeVwiKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlbW92ZVRoaW5nKHRoaW5nKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGFuZ2VzID0gc2V0VGhpbmcodGhpcy5kYXRhc2V0LCB0aGluZyk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc3luY2hyb25pemVEYXRhc2V0KGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuY2FsbFN5bmNDYWxsYmFja3MoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIHJlbW92ZVRoaW5nKGlkOiBUaGluZ0lEKTtcclxuICAgIHByb3RlY3RlZCBhc3luYyByZW1vdmVUaGluZyh0aGluZzogVGhpbmcpO1xyXG4gICAgcHJvdGVjdGVkIGFzeW5jIHJlbW92ZVRoaW5nKHZhbDogYW55KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZGF0YXNldCkgdGhyb3cgbmV3IEVycm9yKFwiRGF0YXNldCBpcyBub3QgeWV0IHJlYWR5XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRoaW5nID0gKGlzVGhpbmcodmFsKSkgPyB2YWwgOiB0aGlzLmdldFRoaW5nKHZhbCk7XHJcbiAgICAgICAgaWYoIXRoaW5nKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVtb3ZlVGhpbmcgd2l0aCBudWxsIHRoaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IHJlbW92ZVRoaW5nKHRoaXMuZGF0YXNldCwgdGhpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc3luY2hyb25pemVEYXRhc2V0KGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMuY2FsbFN5bmNDYWxsYmFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsb25lU2Vzc2lvbihmcm9tOiBERGF0YXNldEJhc2UsIHRvOiBERGF0YXNldEJhc2Upe1xyXG4gICAgICAgIHRvLnNldFNlc3Npb24oZnJvbS5fc2Vzc2lvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBERGF0YXNldEJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==