!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-picker/simple-picker.js"),require("@polymer/iron-meta/iron-meta.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-picker/simple-picker.js","@polymer/iron-meta/iron-meta.js"],t):t((e=e||self).SimpleIconPicker={},e.litElement_js,e.simplePicker_js,e.ironMeta_js)}(this,function(e,t,n,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function y(){var e,t,n=(e=["\n        :host(simple-icon-picker) #collapse {\n          width: 300px;\n        }\n        :host(simple-icon-picker) .row {\n          justify-content: flex-start;\n        }\n        :host(simple-icon-picker) simple-picker-option {\n          flex: 0 0 auto;\n        }\n      "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return y=function(){return n},n}var h=function(e){function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a(this,u(i).call(this))).hideOptionLabels=!0,e.allowNull=!1,e.icons=[],e.value=null,e.options=[],e.optionsPerRow=10,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,n.SimplePicker),l(i,null,[{key:"styles",get:function(){return[f(u(i),"styles",this),t.css(y())]}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},f(u(i),"properties",this),{allowNull:{name:"allowNull",type:Boolean},icons:{name:"icons",type:Array},value:{name:"value",type:String,reflect:!0},optionsPerRow:{name:"optionsPerRow",type:Number},__iconList:{name:"__iconList",type:Array}})}},{key:"tag",get:function(){return"simple-icon-picker"}}]),l(i,[{key:"updated",value:function(e){var t=this;f(u(i.prototype),"updated",this)&&f(u(i.prototype),"updated",this).call(this,e),e.forEach(function(e,n){["optionsPerRow","icons","allowNull","__iconList"].includes(n)&&t._getOptions(t[n],e),"value"==n&&t.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t[n]}}))})}},{key:"firstUpdated",value:function(e){f(u(i.prototype),"firstUpdated",this)&&f(u(i.prototype),"firstUpdated",this).call(this,e);var t=new o.IronMeta({type:"iconset"});if(0===this.icons.length&&"undefined"!==r(t)&&t.list&&t.list.length){var n=[];t.list.forEach(function(e){e.getIconNames().forEach(function(e){n.push(e)})}),this.__iconList=n,this._setSelectedOption()}}},{key:"_getOptions",value:function(){var e="string"==typeof this.icons?JSON.parse(this.icons):this.icons,t=(this.shadowRoot.querySelector("#collapse"),this.optionsPerRow);0===e.length&&this.__iconList&&this.__iconList.length>0&&(e=this.__iconList);var n=!1===this.allowNull?[]:[[{alt:"null",value:null}]],o=!1===this.allowNull?0:1;t=Math.sqrt(e.length+o)<=this.optionsPerRow?Math.ceil(Math.sqrt(e.length+o)):this.optionsPerRow;for(var r=0;r<e.length;r++){var i=o+r,l=Math.floor(i/t),c=i-l*t;void 0!==n[l]&&null!==n[l]||(n[l]=[]),n[l][c]={alt:e[r],icon:e[r],value:e[r]}}this.options=n}},{key:"_setSelectedOption",value:function(){this.options.length>1&&f(u(i.prototype),"_setSelectedOption",this).call(this)}}]),i}();window.customElements.define(h.tag,h),e.SimpleIconPicker=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-icon-picker.umd.js.map
