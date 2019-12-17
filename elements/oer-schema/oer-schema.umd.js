!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/oer-schema/lib/oerschema.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/oer-schema/lib/oerschema.js"],t):t((e=e||self).OerSchema={},e.litElement_js,e.schemaBehaviors_js,e.oerschema_js)}(this,function(e,t,r,n){"use strict";function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(){var e=f(["\n        :host {\n          display: inline-block;\n        }\n      "]);return h=function(){return e},e}function y(){var e=f(['\n      <span property="oer:','">\n        <slot></slot> ',"\n      </span>\n    "]);return y=function(){return e},e}var d=function(e){function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=l(this,s(o).call(this))).text="",e.oerProperty="name",e.typeof="Resource",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,r.SchemaBehaviors(t.LitElement)),i(o,[{key:"render",value:function(){return t.html(y(),this.oerProperty,this.text)}}],[{key:"styles",get:function(){return[t.css(h())]}},{key:"tag",get:function(){return"oer-schema"}}]),i(o,[{key:"updated",value:function(e){var t=this;p(s(o.prototype),"updated",this)&&p(s(o.prototype),"updated",this).call(this,e),e.forEach(function(e,r){"relatedResource"==r&&(t._OERLink=t._generateforComponentLink(t.relatedResource))})}},{key:"_generateforComponentLink",value:function(e){this._OERLink&&document.head.removeChild(this._OERLink);var t=document.createElement("link");return t.setAttribute("property","oer:forComponent"),t.setAttribute("content",this.relatedResource),document.head.appendChild(t),t}}],[{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},p(s(o),"properties",this),{text:{type:String},oerProperty:{type:String,attribute:"oer-property"},typeof:{type:String},relatedResource:{type:String,attribute:"related-resource"},_OERLink:{type:Object}})}},{key:"haxProperties",get:function(){return import("@lrnwebcomponents/hax-iconset/hax-iconset.js"),{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Schema",description:"Schematized element area",icon:"hax:oerschema",color:"blue",groups:["Instructional"],handles:[{type:"inline",text:"text"}],meta:{author:"ELMS:LN"}},settings:{quick:[{slot:"",title:"Text",inputMethod:"textfield",icon:"editor:title"}],configure:[{slot:"",title:"Text",inputMethod:"textfield",icon:"editor:title"},{property:"typeof",title:"Schema typeof",inputMethod:"select",allowNull:!0,options:(new n.OERSchema).types},{property:"oerProperty",title:"Schema property",description:"The OER Schema property this represents",inputMethod:"select",allowNull:!0,options:{name:"name",additionalType:"additionalType",description:"description",image:"image",mainEntityOfPage:"mainEntityOfPage",sameAs:"sameAs",uri:"uri"}},{property:"relatedResource",title:"Related resource",description:"A reference to the related Schema resource",inputMethod:"textfield",icon:"editor:title"}],advanced:[]},saveOptions:{unsetAttributes:["_oerlink"]}}}}]),o}();window.customElements.define(d.tag,d),e.OerSchemaElement=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=oer-schema.umd.js.map
