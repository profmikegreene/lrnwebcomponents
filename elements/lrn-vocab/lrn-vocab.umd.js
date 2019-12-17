!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-modal/simple-modal.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-modal/simple-modal.js"],t):t((e=e||self).LrnVocab={},e.litElement_js,e.schemaBehaviors_js)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=p(["\n      <button>","</button>\n    "]);return f=function(){return e},e}function d(){var e=p(["\n        :host {\n          display: inline-flex;\n          --lrn-vocab-border: 1px dashed #ccc;\n        }\n        button {\n          text-transform: none;\n          min-width: unset;\n          margin: 0;\n          position: relative;\n          top: 0px;\n          border-radius: 0;\n          border-bottom: var(--lrn-vocab-border);\n          background: #f5f5f5;\n          font-size: 1.1em;\n          padding: 2px;\n        }\n        button:hover {\n          background: #bbdefb;\n          border-bottom: 1px dashed #2196f3;\n        }\n      "]);return d=function(){return e},e}var b=function(e){function r(){var e,t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,n=l(r).call(this),e=!n||"object"!=typeof n&&"function"!=typeof n?a(t):n,setTimeout(function(){e.addEventListener("click",e.openDialog.bind(a(e)))},0),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(r,n.SchemaBehaviors(t.LitElement)),o(r,null,[{key:"styles",get:function(){return[t.css(d())]}}]),o(r,[{key:"render",value:function(){return t.html(f(),this.term)}},{key:"openDialog",value:function(e){var t=document.createElement("div");for(var n in this.children)this.children[n].cloneNode&&t.appendChild(this.children[n].cloneNode(!0));var r=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,composed:!0,detail:{title:this.term,elements:{content:t},styles:{"--simple-modal-min-width":"50vw","--simple-modal-min-height":"50vh"},invokedBy:this}});this.dispatchEvent(r)}},{key:"firstUpdated",value:function(e){u(l(r.prototype),"firstUpdated",this)&&u(l(r.prototype),"firstUpdated",this).call(this,e),window.SimpleModal.requestAvailability()}}],[{key:"tag",get:function(){return"lrn-vocab"}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u(l(r),"properties",this),{term:{type:String,reflect:!0}})}},{key:"haxProperties",get:function(){return import("@lrnwebcomponents/hax-iconset/hax-iconset.js"),{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Vocab",description:"Vocabulary term",icon:"hax:vocab",color:"red",groups:["Vocab"],handles:[{type:"inline",text:"term"}],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"term",title:"Term",inputMethod:"textfield",icon:"editor:title",required:!0}],configure:[{property:"term",title:"Term",inputMethod:"textfield",icon:"editor:title",required:!0},{slot:"",title:"Contents",description:"The definitition to display when the term is clicked.",inputMethod:"code-editor",required:!0}],advanced:[]}}}}]),r}();window.customElements.define(b.tag,b),e.LrnVocab=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-vocab.umd.js.map
