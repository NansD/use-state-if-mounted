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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Head, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Hook - useStateIfMounted"), __jsx("meta", {
    property: "og:title",
    content: "My page title",
    key: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx(Head, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("meta", {
    property: "og:title",
    content: "My new title",
    key: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3920403402",
    __self: this
  }, "body{font-family:sans-serif;padding:0;margin:0;}main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:1em 0;}h1{font-size:2em;}img{max-width:100%;}pre{overflow:auto;max-height:15em;background-color:#eeeeee;padding:1em;}section,footer{width:100%;max-width:50em;margin:0 auto;}footer p{font-size:.9em;}footer p,footer a{color:#546e7a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW5zL2NvZGUvdXNlLXN0YXRlLWlmLW1vdW50ZWQvZXhhbXBsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQzJCLEFBR29DLEFBTVYsQUFPQyxBQUlDLEFBSUQsQUFRSCxBQU1JLEFBS0QsV0FWQyxHQWhCakIsQUFRa0IsQUFtQmxCLENBdkJBLEFBa0JBLFFBbkNZLEdBOEJJLElBUlcsR0FyQmhCLE9BOEJYLEVBN0JBLGFBcUJjLFlBQ2QsT0FsQndCLDhFQUNRLG1IQUNoQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvbmFucy9jb2RlL3VzZS1zdGF0ZS1pZi1tb3VudGVkL2V4YW1wbGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZUlmTW91bnRlZCB9IGZyb20gJy4uLy4uL3VzZS1zdGF0ZS1pZi1tb3VudGVkJztcblxuaW1wb3J0IHsgdG9DYW1lbCB9IGZyb20gJy4uL2xpYi91dGlsJztcblxuaW1wb3J0IGhvb2tDb25maWcgZnJvbSAnLi4vLi4vdXNlLXN0YXRlLWlmLW1vdW50ZWQvcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHJlcG9zaXRvcnkgPSB7fSwgYXV0aG9yID0ge30gfSA9IGhvb2tDb25maWc7XG5cbiAgY29uc3QgeyBuYW1lOiBhdXRob3JOYW1lLCB1cmw6IGF1dGhvclVybCB9ID0gYXV0aG9yO1xuXG4gIGNvbnN0IHsgdXJsOiByZXBvc2l0b3J5VXJsIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXBvc2l0b3J5RXhpc3RzID0gdHlwZW9mIHJlcG9zaXRvcnlVcmwgPT09ICdzdHJpbmcnO1xuXG4gIGNvbnN0IHJlcG9zaXRvcnlVcmxEaXNwbGF5ID0gcmVwb3NpdG9yeUV4aXN0cyAmJiByZXBvc2l0b3J5VXJsLnNwbGl0KCc6Ly8nKVsxXTtcblxuICBjb25zdCBob29rU2V0dGluZ3MgPSB7XG4gICAgbWVzc2FnZTogJ0hlbGxvLCBjdXN0b20gaG9vayEnXG4gIH1cblxuICBjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZVN0YXRlSWZNb3VudGVkKGhvb2tTZXR0aW5ncyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib29rIC0gdXNlU3RhdGVJZk1vdW50ZWQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk15IHBhZ2UgdGl0bGVcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBuZXcgdGl0bGVcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMWVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcmUge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWN0aW9uLFxuICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgcCxcbiAgICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzU0NmU3YTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8c2VjdGlvbj5cblxuICAgICAgICAgIDxoMT57IHRvQ2FtZWwobmFtZSkgfTwvaDE+XG5cbiAgICAgICAgICA8cD57IGRlc2NyaXB0aW9uIH08L3A+XG5cbiAgICAgICAgICB7IHJlcG9zaXRvcnlFeGlzdHMgJiYgKFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3JlcG9zaXRvcnlVcmx9PlxuICAgICAgICAgICAgICAgIHsgcmVwb3NpdG9yeVVybERpc3BsYXkgfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxoMj5Ib3cgdG8gdXNlPC9oMj5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQWRkIHlvdXIgaW5zdHJ1Y3Rpb25zIGhlcmUhXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGgyPkV4YW1wbGVzPC9oMj5cblxuICAgICAgICAgIDxoMz5TZXQgYW5kIGdyYWIgbWVzc2FnZTwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPklucHV0Ojwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPGNvZGU+XG4gIHtgY29uc3QgaG9va1NldHRpbmdzID0ge1xuICAgIG1lc3NhZ2U6ICdIZWxsbywgY3VzdG9tIGhvb2shJ1xuICB9XG5cbiAgY29uc3QgeyBtZXNzYWdlIH0gPSB1c2VTdGF0ZUlmTW91bnRlZChob29rU2V0dGluZ3MpO2B9XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPk91dHB1dDo8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7IG1lc3NhZ2UgfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBNYWRlIGJ5IDxhIGhyZWY9e2F1dGhvclVybH0+eyBhdXRob3JOYW1lIH08L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcblxufSJdfQ== */\n/*@ sourceURL=/Users/nans/code/use-state-if-mounted/example/pages/index.js */"), __jsx("section", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, Object(_lib_util__WEBPACK_IMPORTED_MODULE_3__["toCamel"])(name)), __jsx("p", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, description), repositoryExists && __jsx("p", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: repositoryUrl,
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, repositoryUrlDisplay)), __jsx("h2", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "How to use"), __jsx("p", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "Add your instructions here!"), __jsx("h2", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Examples"), __jsx("h3", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Set and grab message"), __jsx("p", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("strong", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Input:")), __jsx("pre", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "const hookSettings = {\n    message: 'Hello, custom hook!'\n  }\n\n  const { message } = useStateIfMounted(hookSettings);")), __jsx("p", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("strong", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Output:")), __jsx("p", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, message)), __jsx("footer", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "Made by ", __jsx("a", {
    href: authorUrl,
    className: "jsx-3920403402",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, authorName)))));
}

/***/ })

})
//# sourceMappingURL=index.js.9020cae4abf5f01be613.hot-update.js.map