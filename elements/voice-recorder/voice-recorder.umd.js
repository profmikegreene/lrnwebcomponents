!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("vmsg/vmsg.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","vmsg/vmsg.js"],t):t((e=e||self).VoiceRecorder={},e.litElement_js,e.vmsg_js)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=f(["\n        :host {\n          display: inline-flex;\n        }\n      "]);return s=function(){return e},e}function a(){var e=f(['\n      <button @click="','">\n        <iron-icon icon="','"></iron-icon>',"\n      </button>\n    "]);return a=function(){return e},e}var l=function(e){function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=u(this,i(r).call(this))).recording=!1,import("@polymer/iron-icon/iron-icon.js"),import("@polymer/iron-icons/av-icons.js"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(r,t.LitElement),o(r,[{key:"render",value:function(){return t.html(a(),this.recordState,this.iconState,this.textState)}}],[{key:"styles",get:function(){return[t.css(s())]}},{key:"properties",get:function(){return{iconState:{type:String},textState:{type:String},recording:{type:Boolean}}}},{key:"tag",get:function(){return"voice-recorder"}}]),o(r,[{key:"recordState",value:function(e){this.recording=!this.recording}},{key:"firstUpdated",value:function(e){}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"recording"==n&&(t[n]?(t.textState="stop",t.iconState="av:stop"):(t.textState="Record",t.iconState="av:play-arrow"),t.toggleRecording(t[n],e))})}},{key:"toggleRecording",value:function(e,t){var r=this;if(e){var o=this.pathFromUrl(decodeURIComponent("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href));n.record({wasmURL:o+"../../vmsg/vmsg.wasm"}).then(function(e){console.log("Recorded MP3",e),r.dispatchEvent(new CustomEvent("voice-recorder-recording",{value:e}))})}}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}}]),r}();customElements.define(l.tag,l),e.VoiceRecorder=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=voice-recorder.umd.js.map
