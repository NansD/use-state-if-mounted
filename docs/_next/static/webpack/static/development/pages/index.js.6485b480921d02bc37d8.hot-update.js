webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_state_if_mounted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../use-state-if-mounted */ "../use-state-if-mounted/index.js");
/* harmony import */ var _use_state_if_mounted__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_use_state_if_mounted__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/util */ "./lib/util.js");
/* harmony import */ var _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../use-state-if-mounted/package.json */ "../use-state-if-mounted/package.json");
var _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../use-state-if-mounted/package.json */ "../use-state-if-mounted/package.json", 1);
var _jsxFileName = "/Users/nans/code/use-state-if-mounted/example/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Index() {
  var name = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_4__.name,
      description = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_4__.description,
      _hookConfig$repositor = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_4__.repository,
      repository = _hookConfig$repositor === void 0 ? {} : _hookConfig$repositor,
      _hookConfig$author = _use_state_if_mounted_package_json__WEBPACK_IMPORTED_MODULE_4__.author,
      author = _hookConfig$author === void 0 ? {} : _hookConfig$author;
  var authorName = author.name,
      authorUrl = author.url;
  var repositoryUrl = repository.url;
  var repositoryExists = typeof repositoryUrl === 'string';
  var repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];
  var hookSettings = {
    message: 'Hello, custom hook!'
  };

  var _useStateIfMounted = Object(_use_state_if_mounted__WEBPACK_IMPORTED_MODULE_2__["useStateIfMounted"])(hookSettings),
      message = _useStateIfMounted.message;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("main", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1960406444",
    __self: this
  }, "body{font-family:sans-serif;padding:0;margin:0;}main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:1em 0;}h1{font-size:2em;}img{max-width:100%;}pre{overflow:auto;max-height:15em;background-color:#eeeeee;padding:1em;}section,footer{width:100%;max-width:50em;margin:0 auto;}footer p{font-size:.9em;}footer p,footer a{color:#546e7a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW5zL2NvZGUvdXNlLXN0YXRlLWlmLW1vdW50ZWQvZXhhbXBsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnlCLEFBR2tDLEFBTVYsQUFPQyxBQUlDLEFBSUQsQUFRSCxBQU1JLEFBS0QsV0FWQyxHQWhCakIsQUFRa0IsQUFtQmxCLENBdkJBLEFBa0JBLFFBbkNZLEdBOEJJLElBUlcsR0FyQmhCLE9BOEJYLEVBN0JBLGFBcUJjLFlBQ2QsT0FsQndCLDhFQUNRLG1IQUNoQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvbmFucy9jb2RlL3VzZS1zdGF0ZS1pZi1tb3VudGVkL2V4YW1wbGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZUlmTW91bnRlZCB9IGZyb20gJy4uLy4uL3VzZS1zdGF0ZS1pZi1tb3VudGVkJztcblxuaW1wb3J0IHsgdG9DYW1lbCB9IGZyb20gJy4uL2xpYi91dGlsJztcblxuaW1wb3J0IGhvb2tDb25maWcgZnJvbSAnLi4vLi4vdXNlLXN0YXRlLWlmLW1vdW50ZWQvcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHJlcG9zaXRvcnkgPSB7fSwgYXV0aG9yID0ge30gfSA9IGhvb2tDb25maWc7XG5cbiAgY29uc3QgeyBuYW1lOiBhdXRob3JOYW1lLCB1cmw6IGF1dGhvclVybCB9ID0gYXV0aG9yO1xuXG4gIGNvbnN0IHsgdXJsOiByZXBvc2l0b3J5VXJsIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXBvc2l0b3J5RXhpc3RzID0gdHlwZW9mIHJlcG9zaXRvcnlVcmwgPT09ICdzdHJpbmcnO1xuXG4gIGNvbnN0IHJlcG9zaXRvcnlVcmxEaXNwbGF5ID0gcmVwb3NpdG9yeUV4aXN0cyAmJiByZXBvc2l0b3J5VXJsLnNwbGl0KCc6Ly8nKVsxXTtcblxuICBjb25zdCBob29rU2V0dGluZ3MgPSB7XG4gICAgbWVzc2FnZTogJ0hlbGxvLCBjdXN0b20gaG9vayEnXG4gIH1cblxuICBjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZVN0YXRlSWZNb3VudGVkKGhvb2tTZXR0aW5ncyk7XG5cbiAgcmV0dXJuIChcbiAgPD5cbiAgICA8bWFpbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxNWVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwZW07XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHAsXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBjb2xvcjogIzU0NmU3YTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c2VjdGlvbj5cblxuICAgICAgICA8aDE+eyB0b0NhbWVsKG5hbWUpIH08L2gxPlxuXG4gICAgICAgIDxwPnsgZGVzY3JpcHRpb24gfTwvcD5cblxuICAgICAgICB7IHJlcG9zaXRvcnlFeGlzdHMgJiYgKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj17cmVwb3NpdG9yeVVybH0+XG4gICAgICAgICAgICAgIHsgcmVwb3NpdG9yeVVybERpc3BsYXkgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8aDI+SG93IHRvIHVzZTwvaDI+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWRkIHlvdXIgaW5zdHJ1Y3Rpb25zIGhlcmUhXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8aDI+RXhhbXBsZXM8L2gyPlxuXG4gICAgICAgIDxoMz5TZXQgYW5kIGdyYWIgbWVzc2FnZTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+SW5wdXQ6PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHByZT5cbiAgICAgICAgICA8Y29kZT5cbntgY29uc3QgaG9va1NldHRpbmdzID0ge1xuICBtZXNzYWdlOiAnSGVsbG8sIGN1c3RvbSBob29rISdcbn1cblxuY29uc3QgeyBtZXNzYWdlIH0gPSB1c2VTdGF0ZUlmTW91bnRlZChob29rU2V0dGluZ3MpO2B9XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L3ByZT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHN0cm9uZz5PdXRwdXQ6PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgeyBtZXNzYWdlIH1cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBNYWRlIGJ5IDxhIGhyZWY9e2F1dGhvclVybH0+eyBhdXRob3JOYW1lIH08L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvbWFpbj5cbiAgPC8+XG4gICk7XG5cbn0iXX0= */\n/*@ sourceURL=/Users/nans/code/use-state-if-mounted/example/pages/index.js */"), __jsx("section", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, Object(_lib_util__WEBPACK_IMPORTED_MODULE_3__["toCamel"])(name)), __jsx("p", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, description), repositoryExists && __jsx("p", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: repositoryUrl,
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, repositoryUrlDisplay)), __jsx("h2", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "How to use"), __jsx("p", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Add your instructions here!"), __jsx("h2", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Examples"), __jsx("h3", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Set and grab message"), __jsx("p", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Input:")), __jsx("pre", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("code", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "const hookSettings = {\n  message: 'Hello, custom hook!'\n}\n\nconst { message } = useStateIfMounted(hookSettings);")), __jsx("p", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "Output:")), __jsx("p", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, message)), __jsx("footer", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, "Made by ", __jsx("a", {
    href: authorUrl,
    className: "jsx-1960406444",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, authorName)))));
}

/***/ })

})
//# sourceMappingURL=index.js.6485b480921d02bc37d8.hot-update.js.map