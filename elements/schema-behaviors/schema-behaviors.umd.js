!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).SchemaBehaviors={})}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,r){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}e.SchemaBehaviors=function(e){return function(s){function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u(this,c(f).call(this))).schemaResourceID="",e.schemaMap={prefix:{oer:"http://oerschema.org/",schema:"http://schema.org/",dc:"http://purl.org/dc/terms/",foaf:"http://xmlns.com/foaf/0.1/",cc:"http://creativecommons.org/ns#",bib:"http://bib.schema.org"}},e}var p,h,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,e),p=f,l=[{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},a(c(f),"properties",this),{schemaResourceID:{type:String},schemaMap:{type:Object,readOnly:!0,observer:"_schemaMapChanged"}})}}],(h=[{key:"updated",value:function(e){var t=this;a(c(f.prototype),"updated",this)&&a(c(f.prototype),"updated",this).call(this,e),e.forEach(function(e,r){"schemaMap"==r&&t._schemaMapChanged(t[r],e)})}},{key:"_schemaMapChanged",value:function(e,r){if("undefined"!==t(e)){this.schemaResourceID=this.getAttribute("resource"),""!=this.schemaResourceID&&null!=this.schemaResourceID||(this.schemaResourceID=this.generateResourceID(),this.setAttribute("resource",this.schemaResourceID));var o=e.prefix,n="";for(var c in o)o.hasOwnProperty(c)&&(n+=c+":"+o[c]+" ");""!=n&&this.setAttribute("prefix",n)}}},{key:"generateResourceID",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return"#"+e()+e()+"-"+e()+"-"+e()+"-"+e()}}])&&r(p.prototype,h),l&&r(p,l),f}()},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=schema-behaviors.umd.js.map
