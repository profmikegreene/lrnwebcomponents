define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SelectMenu = void 0;
  function _templateObject_cbccd580d70411e8b543d79b4d1c1cdb() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_cbccd580d70411e8b543d79b4d1c1cdb = function() {
      return data;
    };
    return data;
  }
  var SelectMenu = (function(_PolymerElement) {
    babelHelpers.inherits(SelectMenu, _PolymerElement);
    function SelectMenu() {
      babelHelpers.classCallCheck(this, SelectMenu);
      return babelHelpers.possibleConstructorReturn(
        this,
        (SelectMenu.__proto__ || Object.getPrototypeOf(SelectMenu)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      SelectMenu,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                SelectMenu.prototype.__proto__ ||
                  Object.getPrototypeOf(SelectMenu.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              SelectMenu.haxProperties,
              SelectMenu.tag,
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
              _templateObject_cbccd580d70411e8b543d79b4d1c1cdb()
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
                title: "Select menu",
                description: "Automated conversion of select-menu/",
                icon: "icons:android",
                color: "green",
                groups: ["Menu"],
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
            return "select-menu";
          }
        }
      ]
    );
    return SelectMenu;
  })(_polymerElement.PolymerElement);
  _exports.SelectMenu = SelectMenu;
  window.customElements.define(SelectMenu.tag, SelectMenu);
});