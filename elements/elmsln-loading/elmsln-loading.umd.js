!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js"],e):e((n=n||self).ElmslnLoading={},n.litElement_js,n.simpleColors_js)}(this,function(n,e,t){"use strict";function i(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function o(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,i)}return t}function a(n){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function c(n,e){return(c=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function u(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function f(n,e,t){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,e,t){var i=function(n,e){for(;!Object.prototype.hasOwnProperty.call(n,e)&&null!==(n=a(n)););return n}(n,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(t):o.value}})(n,e,t||n)}function l(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function p(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(){var n=l(['\n      <iron-icon icon="lrn:network"></iron-icon>\n    ']);return m=function(){return n},n}function b(){var n=l(['\n        @-moz-keyframes spin {\n          100% {\n            -moz-transform: rotate(60deg);\n            filter: saturate(10) invert(0.9);\n          }\n        }\n        @-webkit-keyframes spin {\n          100% {\n            -webkit-transform: rotate(60deg);\n            filter: saturate(10) invert(0.9);\n          }\n        }\n        @keyframes spin {\n          100% {\n            -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n          }\n        }\n        :host iron-icon {\n          color: var(--simple-colors-default-theme-accent-6);\n          display: block;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="tiny"]) iron-icon {\n          width: 16px;\n          height: 16px;\n          -webkit-animation: spin 0.75s ease-out infinite;\n          -moz-animation: spin 0.75s ease-out infinite;\n          animation: spin 0.75s ease-out infinite;\n        }\n        :host([size="small"]) iron-icon {\n          width: 32px;\n          height: 32px;\n          -webkit-animation: spin 1s ease-out infinite;\n          -moz-animation: spin 1s ease-out infinite;\n          animation: spin 1s ease-out infinite;\n        }\n        :host([size="medium"]) iron-icon {\n          width: 64px;\n          height: 64px;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="large"]) iron-icon {\n          width: 80px;\n          height: 80px;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="epic"]) iron-icon {\n          width: 400px;\n          height: 400px;\n          -webkit-animation: spin 2s ease-out infinite;\n          -moz-animation: spin 2s ease-out infinite;\n          animation: spin 2s ease-out infinite;\n        }\n      ']);return b=function(){return n},n}var y=function(n){function i(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=u(this,a(i).call(this))).size="medium",import("@lrnwebcomponents/lrn-icons/lrn-icons.js"),import("@polymer/iron-icon/iron-icon.js"),n}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&c(n,e)}(i,t.SimpleColors),o(i,null,[{key:"styles",get:function(){return[].concat(p(f(a(i),"styles",this)),[e.css(b())])}},{key:"tag",get:function(){return"elmsln-loading"}}]),o(i,[{key:"updated",value:function(n){var e=this;n.forEach(function(n,t){"color"==t&&e._getAccentColor(e[t])})}},{key:"render",value:function(){return e.html(m())}},{key:"_getAccentColor",value:function(n){n=n.replace("-text",""),this.accentColor&&"grey"!==this.accentColor||!this.colors[n]||(this.accentColor=n)}}],[{key:"properties",get:function(){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach(function(e){r(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},f(a(i),"properties",this),{color:{type:String},size:{type:String,reflect:!0}})}}]),i}();window.customElements.define(y.tag,y),n.ElmslnLoading=y,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=elmsln-loading.umd.js.map
