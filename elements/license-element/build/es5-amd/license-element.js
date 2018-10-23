define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LicenseElement = void 0;
  function _templateObject_17e80a00d6f311e880eba118d8d010c4() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_17e80a00d6f311e880eba118d8d010c4 = function() {
      return data;
    };
    return data;
  }
  var LicenseElement = (function(_PolymerElement) {
    babelHelpers.inherits(LicenseElement, _PolymerElement);
    function LicenseElement() {
      babelHelpers.classCallCheck(this, LicenseElement);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LicenseElement.__proto__ || Object.getPrototypeOf(LicenseElement)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LicenseElement,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LicenseElement.prototype.__proto__ ||
                  Object.getPrototypeOf(LicenseElement.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LicenseElement.haxProperties,
              LicenseElement.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_17e80a00d6f311e880eba118d8d010c4()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "License element",
                description: "Automated conversion of license-element/",
                icon: "icons:android",
                color: "green",
                groups: ["Element"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "license-element";
          }
        }
      ]
    );
    return LicenseElement;
  })(_polymerElement.PolymerElement);
  _exports.LicenseElement = LicenseElement;
  window.customElements.define(LicenseElement.tag, LicenseElement);
});
