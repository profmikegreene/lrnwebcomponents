!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/chartist-render/chartist-render.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/chartist-render/chartist-render.js"],t):t((e=e||self).DataViz={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(){var e,t,n=(e=['\n      <chartist-render\n        id="barChart"\n        type="bar"\n        scale="ct-major-twelfth"\n        chart-title="Quiz Distribution"\n        chart-desc="A bar graph of quizzes completed by student"\n      >\n      </chartist-render>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}window.DataViz=window.DataViz||{},window.DataViz.requestAvailability=function(){return window.DataViz.instance||(window.DataViz.instance=document.createElement("data-viz"),document.body.appendChild(window.DataViz.instance)),window.DataViz.instance};var s=function(e){function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),c(this,i(s).apply(this,arguments))}var f,p,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(s,t.PolymerElement),f=s,d=[{key:"template",get:function(){return t.html(l())}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u(i(s),"properties",this),{title:{name:"title",type:String,value:"data-viz-default-value",reflectToAttribute:!1,observer:!1}})}},{key:"tag",get:function(){return"data-viz"}}],(p=[{key:"connectedCallback",value:function(){u(i(s.prototype),"connectedCallback",this).call(this),window.addEventListener("show-data",this.showDataFunction.bind(this))}},{key:"showDataFunction",value:function(e){var t=e.detail,n=(event.target.tagName,{labels:t.labels,series:t.series});this.shadowRoot.querySelector("#barChart").data=n}},{key:"disconnectedCallback",value:function(){u(i(s.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("show-data",this.showDataFunction.bind(this))}},{key:"hideDataViz",value:function(e){}},{key:"showDataViz",value:function(e){}}])&&n(f.prototype,p),d&&n(f,d),s}();window.customElements.define(s.tag,s),e.DataViz=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=data-viz.umd.js.map
