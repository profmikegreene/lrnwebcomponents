!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).JsonOutlineSchema={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&s(r,n.prototype),r}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return l(t,arguments,u(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),s(i,t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}var f=function(){function t(){n(this,t),this.id="item-"+this.generateUUID(),this.title="New item",this.location="",this.description="",this.parent="",this.metadata={},this.order=0,this.indent=0}return r(t,[{key:"readLocation",value:function(){return FALSE}},{key:"writeLocation",value:function(t){return FALSE}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}]),t}();window.JSONOutlineSchema=window.JSONOutlineSchema||{},window.JSONOutlineSchema.requestAvailability=function(){return window.JSONOutlineSchema.instance||(window.JSONOutlineSchema.instance=document.createElement("json-outline-schema"),document.body.appendChild(window.JSONOutlineSchema.instance)),window.JSONOutlineSchema.instance};var p=function(t){function i(){var t,e,r,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return n(this,i),e=this,(t=!(r=u(i).call(this))||"object"!=typeof r&&"function"!=typeof r?d(e):r).tag=i.tag,t.template=document.createElement("template"),t.attachShadow({mode:"open"}),o||t.render(),t.__ready=!1,t.file=null,t.id=t.generateUUID(),t.title="New site",t.author="",t.description="",t.license="by-sa",t.metadata={},t.items=[],t.debug=!1,window.JSONOutlineSchema.instance=d(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(i,c(HTMLElement)),r(i,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: block;\n}\n:host([debug]) {\n  font-family: monospace;\n  white-space: pre;\n  margin: 16px 0px;\n}\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<slot></slot>"}}],[{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},h(u(i),"properties",this))}},{key:"tag",get:function(){return"json-outline-schema"}}]),r(i,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),window.addEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-ready",{bubbles:!0,cancelable:!1,composed:!0,detail:!0});this.dispatchEvent(t),this.__ready=!0}},{key:"_copyAttribute",value:function(t,e){var n=this.shadowRoot.querySelectorAll(e),i=this.getAttribute(t),r=null==i?"removeAttribute":"setAttribute",o=!0,a=!1,u=void 0;try{for(var s,l=n[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){s.value[r](t,i)}}catch(t){a=!0,u=t}finally{try{o||null==l.return||l.return()}finally{if(a)throw u}}}},{key:"_setProperty",value:function(t){var e=t.name,n=t.value;this[e]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-unready",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t)}},{key:"clone",value:function(){var t={id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items};return JSON.parse(JSON.stringify(t))}},{key:"newItem",value:function(){return new f}},{key:"addItem",value:function(t){var e=this.validateItem(t);return count=array_push(this.items,e),count}},{key:"validateItem",value:function(t){var n=new f;for(var i in n)"undefined"!==e(t[i])&&(n[i]=t[i]);return n}},{key:"removeItem",value:function(t){for(var e in this.items)if(this.items[e].id==t){var n=this.items[e];return delete this.items[e],n}return!1}},{key:"updateItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.validateItem(t);for(var i in this.items)if(this.items[i].id==n.id)return this.items[i]=n,!e||this.save();return!1}},{key:"load",value:function(t){var n,i,r,o,a;return regeneratorRuntime.async(function(u){for(;;)switch(u.prev=u.next){case 0:if(!t){u.next=9;break}return this.file=t,u.next=4,regeneratorRuntime.awrap(fetch(t).then(function(t){return t.text()}));case 4:for(r in n=u.sent,i=JSON.parse(n))"undefined"!==e(this[r])&&"items"!==r&&(this[r]=i[r]);if(i.items)for(r in i.items)o=i.items[r],(a=new f).id=o.id,a.indent=o.indent,a.location=o.location,a.order=o.order,a.parent=o.parent,a.title=o.title,a.description=o.description,a.metadata=o.metadata,this.items[r]=a;return u.abrupt("return",!0);case 9:return u.abrupt("return",!1);case 10:case"end":return u.stop()}},null,this)}},{key:"save",value:function(){var t={id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items};return JSON.stringify(t,null,2)}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"_toggleDebug",value:function(t){this.debug=!this.debug,this._triggerDebugPaint(this.debug)}},{key:"_triggerDebugPaint",value:function(t){if(t){var e={file:this.file,id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items},n=document.createElement("span");n.innerHTML=JSON.stringify(e,null,2),this.shadowRoot.appendChild(n.cloneNode(!0))}else this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){this.debug&&(this.render(),this._triggerDebugPaint(this.debug))}},{key:"updateMetadata",value:function(t,e){this.metadata[t]=e,this.debug&&(this.render(),this._triggerDebugPaint(this.debug))}},{key:"getItemValues",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=t?this.validateItem(t):new f,n&&(e.parent=n.id),e}},{key:"getItemSchema",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item",n={$schema:"http://json-schema.org/schema#",title:this.title,type:"object",properties:{}};for(var i in"item"==e?t=new f:(t={file:this.file,id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata},"outline"==e&&(t.items=this.items)),t){var r={title:i,type:"string",value:t[i]};switch(i){case"file":case"id":case"title":case"author":case"description":case"license":case"location":case"parent":r.component={name:"paper-input",valueProperty:"value",properties:{required:!0}};break;case"indent":case"order":r.component={name:"paper-input",valueProperty:"value",properties:{required:!0},attributes:{type:"number"}};case"metadata":case"items":r.type="array",r.items={type:"object",properties:{key:{title:"key",type:"string",component:{name:"paper-input",valueProperty:"value",properties:{required:!0}}},value:{title:"value",type:"string",component:{name:"paper-input",valueProperty:"value",properties:{required:!0}}}}};break;default:console.log(i)}n.properties[i]=r}return n}},{key:"itemsToNodes",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];0===t.length&&(t=this.items);var e=this.unflattenItems(t);return this.treeToNodes(e,document.createElement("ul"))}},{key:"treeToNodes",value:function(t,e){for(var n in t){var i=document.createElement("li");i.innerText=t[n].title,i.setAttribute("data-jos-id",t[n].id),t[n].location&&i.setAttribute("data-jos-location",t[n].location),e.appendChild(i),t[n].children&&t[n].children.length>0&&e.appendChild(this.treeToNodes(t[n].children,document.createElement("ul")))}return e}},{key:"unflattenItems",value:function(t,e,n){var i=this;n=void 0!==n?n:[],e=void 0!==e?e:{id:null};var r=t.filter(function(t){return t.parent===e.id});return r.length&&(e.id?e.children=r:n=r,r.forEach(function(e){i.unflattenItems(t,e)})),n}},{key:"scrubElementJOSData",value:function(t){for(var e in t.children)t.removeAttribute("data-jos-id"),t.removeAttribute("data-jos-location"),t.children[e].children&&this.scrubElementJOSData(t.children[e])}},{key:"nodesToItems",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.getChildOutline(t);return e&&(this.items=n,this.debug&&(this.render(),this._triggerDebugPaint(this.debug))),n}},{key:"getChildOutline",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.cloneNode(!0),a=[],u={};null!==o.firstChild;){if("undefined"!==e(o.firstChild.tagName)){var s=o.firstChild;if(null!==s.firstChild&&"undefined"!==e(s.firstChild.tagName)){var l=r;"undefined"!==e(u.id)&&(l=u.id),a=a.concat(this.getChildOutline(s,0,i+1,l))}else u=new f,s.getAttribute("data-jos-id")&&(u.id=s.getAttribute("data-jos-id")),s.getAttribute("data-jos-location")?u.location=s.getAttribute("data-jos-location"):u.location="",u.indent=i,u.order=n,n+=1,u.title=s.innerText,u.parent=r,a.push(u)}o.removeChild(o.firstChild)}return a}},{key:"nextPage",value:function(t,e){t.items=t.items.sort(function(t,e){})}},{key:"file",get:function(){return this.getAttribute("file")},set:function(t){this.__ready&&this.setAttribute("file",t)}},{key:"id",get:function(){return this.getAttribute("id")},set:function(t){this.__ready&&this.setAttribute("id",t)}},{key:"title",get:function(){return this.getAttribute("title")},set:function(t){this.__ready&&this.setAttribute("title",t)}},{key:"author",get:function(){return this.getAttribute("author")},set:function(t){this.__ready&&this.setAttribute("author",t)}},{key:"description",get:function(){return this.getAttribute("description")},set:function(t){this.__ready&&this.setAttribute("description",t)}},{key:"license",get:function(){return this.getAttribute("license")},set:function(t){this.__ready&&this.setAttribute("license",t)}},{key:"debug",get:function(){return this.getAttribute("debug")},set:function(t){this.__ready&&t?this.setAttribute("debug",t):this.removeAttribute("debug")}}],[{key:"observedAttributes",get:function(){return["file","id","title","author","description","license","debug"]}}]),i}();window.customElements.define(p.tag,p),t.JsonOutlineSchema=p,t.JSONOutlineSchemaItem=f,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=json-outline-schema.umd.js.map
