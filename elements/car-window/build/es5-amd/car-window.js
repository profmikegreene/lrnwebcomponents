define([
  "exports",
  "./node_modules/skatejs/dist/es/index.js",
  "./node_modules/@skatejs/renderer-lit-html/dist/es/index.js",
  "./node_modules/lit-html/lit-html.js"
], function(_exports, _index, _index2, _litHtml) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.CarWindow = void 0;
  _index2 = babelHelpers.interopRequireDefault(_index2);
  function _templateObject_24b16170d0b611e89d3fddca7ccba7bf() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.tint-green {\n  background-color: green;\n}\n\n.tint-clear {\n  opacity: .7;\n  background-color: grey;\n}</style>\n<h2>New car window</h2>\n<div class="tint-',
      '">\n    <div hidden="',
      '">',
      "</div>\n    <slot></slot>\n</div>"
    ]);
    _templateObject_24b16170d0b611e89d3fddca7ccba7bf = function() {
      return data;
    };
    return data;
  }
  var SkateJS = (function(_withComponent) {
      babelHelpers.inherits(SkateJS, _withComponent);
      function SkateJS() {
        babelHelpers.classCallCheck(this, SkateJS);
        return babelHelpers.possibleConstructorReturn(
          this,
          (SkateJS.__proto__ || Object.getPrototypeOf(SkateJS)).apply(
            this,
            arguments
          )
        );
      }
      return SkateJS;
    })((0, _index.withComponent)((0, _index2.default)())),
    CarWindow = (function(_SkateJS) {
      babelHelpers.inherits(CarWindow, _SkateJS);
      babelHelpers.createClass(
        CarWindow,
        [
          {
            key: "render",
            value: function render() {
              return (0, _litHtml.html)(
                _templateObject_24b16170d0b611e89d3fddca7ccba7bf(),
                this.tint,
                this.manufacture,
                this.size
              );
            }
          },
          {
            key: "tag",
            value: function tag() {
              return "car-window";
            }
          }
        ],
        [
          {
            key: "properties",
            get: function get() {
              return {
                tint: {
                  name: "tint",
                  type: "String",
                  value: "clear",
                  reflectToAttribute: !1,
                  observer: !1
                },
                size: {
                  name: "size",
                  type: "Number",
                  value: "1000",
                  reflectToAttribute: !1,
                  observer: !1
                },
                manufacture: {
                  name: "manufacture",
                  type: "Boolean",
                  value: "",
                  reflectToAttribute: !1,
                  observer: !1
                }
              };
            }
          }
        ]
      );
      function CarWindow() {
        var _this;
        babelHelpers.classCallCheck(this, CarWindow);
        _this = babelHelpers.possibleConstructorReturn(
          this,
          (CarWindow.__proto__ || Object.getPrototypeOf(CarWindow)).call(this)
        );
        var obj = CarWindow.properties;
        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            if (_this.hasAttribute(p)) {
              _this[p] = _this.getAttribute(p);
            } else {
              _this[p] = obj[p].value;
            }
          }
        }
        return _this;
      }
      babelHelpers.createClass(
        CarWindow,
        [{ key: "connected", value: function connected() {} }],
        [
          {
            key: "props",
            get: function get() {
              var obj = CarWindow.properties,
                simpleProps = {};
              for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                  simpleProps[p] = obj[p].value;
                }
              }
              return simpleProps;
            }
          }
        ]
      );
      return CarWindow;
    })(SkateJS);
  _exports.CarWindow = CarWindow;
  customElements.define("car-window", CarWindow);
});