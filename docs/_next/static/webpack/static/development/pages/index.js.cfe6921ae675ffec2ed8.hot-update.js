webpackHotUpdate("static/development/pages/index.js",{

/***/ "../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_state_if_mounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../use-state-if-mounted */ "../use-state-if-mounted/index.js");
/* harmony import */ var _use_state_if_mounted__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_use_state_if_mounted__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/util */ "./lib/util.js");
/* harmony import */ var _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../use-state-if-mounted/package.json */ "../use-state-if-mounted/package.json");
var _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../use-state-if-mounted/package.json */ "../use-state-if-mounted/package.json", 1);

var _jsxFileName = "/Users/nans/code/use-state-if-mounted/example/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Index() {
  var name = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_6__.name,
      description = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_6__.description,
      _hookConfig$repositor = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_6__.repository,
      repository = _hookConfig$repositor === void 0 ? {} : _hookConfig$repositor,
      _hookConfig$author = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_6__.author,
      author = _hookConfig$author === void 0 ? {} : _hookConfig$author;
  var authorName = author.name,
      authorUrl = author.url;
  var repositoryUrl = repository.url;
  var repositoryExists = typeof repositoryUrl === "string";
  var repositoryUrlDisplay = repositoryExists && repositoryUrl.split("://")[1];

  var _useStateIfMounted = Object(_use_state_if_mounted__WEBPACK_IMPORTED_MODULE_4__["useStateIfMounted"])(initialCount),
      _useStateIfMounted2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useStateIfMounted, 2),
      count = _useStateIfMounted2[0],
      setCount = _useStateIfMounted2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Hook - useStateIfMounted"), __jsx("meta", {
    property: "og:title",
    content: "My page title",
    key: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("meta", {
    property: "og:title",
    content: "My new title",
    key: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2272958534",
    __self: this
  }, "body{font-family:sans-serif;padding:0;margin:0;}main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:1em 0;}h1{font-size:2em;}img{max-width:100%;}pre{overflow:auto;max-height:15em;background-color:#eeeeee;padding:1em;}section,footer{width:100%;max-width:50em;margin:0 auto;}footer p{font-size:0.9em;}footer p,footer a{color:#546e7a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW5zL2NvZGUvdXNlLXN0YXRlLWlmLW1vdW50ZWQvZXhhbXBsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjJCLEFBR29DLEFBTVYsQUFPQyxBQUlDLEFBSUQsQUFRSCxBQU1LLEFBS0YsV0FWQyxHQWhCakIsQUFRa0IsQUFtQmxCLENBdkJBLENBa0JBLE9BbkNZLEdBOEJJLElBUlcsR0FyQmhCLE9BOEJYLEVBN0JBLGFBcUJjLFlBQ2QsT0FsQndCLDhFQUNRLG1IQUNoQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvbmFucy9jb2RlL3VzZS1zdGF0ZS1pZi1tb3VudGVkL2V4YW1wbGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlSWZNb3VudGVkIH0gZnJvbSBcIi4uLy4uL3VzZS1zdGF0ZS1pZi1tb3VudGVkXCI7XG5pbXBvcnQgeyB0b0NhbWVsIH0gZnJvbSBcIi4uL2xpYi91dGlsXCI7XG5cbmltcG9ydCBob29rQ29uZmlnIGZyb20gXCIuLi8uLi91c2Utc3RhdGUtaWYtbW91bnRlZC9wYWNrYWdlLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHJlcG9zaXRvcnkgPSB7fSwgYXV0aG9yID0ge30gfSA9IGhvb2tDb25maWc7XG5cbiAgY29uc3QgeyBuYW1lOiBhdXRob3JOYW1lLCB1cmw6IGF1dGhvclVybCB9ID0gYXV0aG9yO1xuXG4gIGNvbnN0IHsgdXJsOiByZXBvc2l0b3J5VXJsIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXBvc2l0b3J5RXhpc3RzID0gdHlwZW9mIHJlcG9zaXRvcnlVcmwgPT09IFwic3RyaW5nXCI7XG5cbiAgY29uc3QgcmVwb3NpdG9yeVVybERpc3BsYXkgPVxuICAgIHJlcG9zaXRvcnlFeGlzdHMgJiYgcmVwb3NpdG9yeVVybC5zcGxpdChcIjovL1wiKVsxXTtcblxuXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZUlmTW91bnRlZChpbml0aWFsQ291bnQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9vayAtIHVzZVN0YXRlSWZNb3VudGVkPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBwYWdlIHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgbmV3IHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VjdGlvbixcbiAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBwLFxuICAgICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ2ZTdhO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMT57dG9DYW1lbChuYW1lKX08L2gxPlxuXG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgIHtyZXBvc2l0b3J5RXhpc3RzICYmIChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YSBocmVmPXtyZXBvc2l0b3J5VXJsfT57cmVwb3NpdG9yeVVybERpc3BsYXl9PC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8aDI+SG93IHRvIHVzZTwvaDI+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFVzZSB0aGlzIGhvb2sganVzdCBsaWtlIFJlYWN0J3MmbmJzcDtcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlc3RhdGVcIj5cbiAgICAgICAgICAgICAgdXNlU3RhdGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIG9uZSBob29rIG9ubHkgdXBkYXRlcyBzdGF0ZSBpZiB0aGUgY29tcG9uZW50IHRoYXQgY2FsbGVkIHRoaXNcbiAgICAgICAgICAgIGhvb2sgaXMgbW91bnRlZC4gVGhpcyBhbGxvd3MgdXMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzIGFuZCBtZXNzYWdlc1xuICAgICAgICAgICAgbGlrZSB0aGlzIG9uZSA6XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgV2FybmluZzogQ2FuJ3QgcGVyZm9ybSBhIFJlYWN0IHN0YXRlIHVwZGF0ZSBvbiBhbiB1bm1vdW50ZWRcbiAgICAgICAgICAgIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgaW5kaWNhdGVzIGEgbWVtb3J5IGxlYWsgaW4geW91clxuICAgICAgICAgICAgYXBwbGljYXRpb24uIFRvIGZpeCwgY2FuY2VsIGFsbCBzdWJzY3JpcHRpb25zIGFuZCBhc3luY2hyb25vdXMgdGFza3NcbiAgICAgICAgICAgIGluIGEgdXNlRWZmZWN0IGNsZWFudXAgZnVuY3Rpb24uIGluIENoaWxkIChjcmVhdGVkIGJ5IEhvbGRlcilcbiAgICAgICAgICA8L2NvZGU+XG5cbiAgICAgICAgICA8aDI+RXhhbXBsZXM8L2gyPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPklucHV0Ojwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgIHtgXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGVJZk1vdW50ZWQoaW5pdGlhbENvdW50KTtgfVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5PdXRwdXQ6PC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBNYWRlIGJ5IDxhIGhyZWY9e2F1dGhvclVybH0+e2F1dGhvck5hbWV9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/nans/code/use-state-if-mounted/example/pages/index.js */"), __jsx("section", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, Object(_lib_util__WEBPACK_IMPORTED_MODULE_5__["toCamel"])(name)), __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, description), repositoryExists && __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: repositoryUrl,
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, repositoryUrlDisplay)), __jsx("h2", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "How to use"), __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Use this hook just like React's\xA0", __jsx("a", {
    href: "https://reactjs.org/docs/hooks-reference.html#usestate",
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "useState"), "."), __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "This one hook only updates state if the component that called this hook is mounted. This allows us to avoid memory leaks and messages like this one :"), __jsx("code", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. in Child (created by Holder)"), __jsx("h2", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, "Examples"), __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("strong", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Input:")), __jsx("pre", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "\n  const [count, setCount] = useStateIfMounted(initialCount);")), __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("strong", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Output:")), __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, message)), __jsx("footer", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, "Made by ", __jsx("a", {
    href: authorUrl,
    className: "jsx-2272958534",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, authorName)))));
}

/***/ })

})
//# sourceMappingURL=index.js.cfe6921ae675ffec2ed8.hot-update.js.map