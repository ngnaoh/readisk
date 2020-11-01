"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Manager = _interopRequireDefault(require("@/views/Manager.vue"));

var _Home = _interopRequireDefault(require("@/views/Home.vue"));

var _About = _interopRequireDefault(require("@/views/About.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Home",
  component: _Home["default"]
}, {
  path: "/manager",
  name: "Manager",
  component: _Manager["default"]
}, {
  path: "/about",
  name: "About",
  component: _About["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;