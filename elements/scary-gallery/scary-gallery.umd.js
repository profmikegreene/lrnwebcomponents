!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js"],t):t(e.polymerLegacy_js,e.polymer_dom_js)}(this,function(e,t){"use strict";function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function r(){var e=i(['\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n        display: block;\n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n      }\n\n      #img {\n        display: none;\n      }\n    </style>\n\n    <a id="baseURIAnchor" href="#"></a>\n    <div id="sizedImgDiv" role="img" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>\n    <img id="img" on-load="_imgOnLoad" on-error="_imgOnError">\n']);return r=function(){return e},e}function n(){var e=i(["\n    <style>\n      :host {\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n      }\n    </style>\n    <slot></slot>\n"]);return n=function(){return e},e}e.Polymer({_template:e.html(r()),is:"scary-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null},naturalWidth:{type:Number,notify:!0,computed:"_computeNaturalWidth(loaded)"},naturalHeight:{type:Number,notify:!0,computed:"_computeNaturalHeight(loaded)"}},observers:["_loadStateObserver(src)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_computeNaturalWidth:function(e){return e?this.$.img.naturalWidth:null},_computeNaturalHeight:function(e){return e?this.$.img.naturalHeight:null},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e){var t=this._resolveSrc(e);t!==this._resolvedSrc&&(this._resolvedSrc=t,this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_resolveSrc:function(e){var t=this.resolveUrl(e,this.$.baseURIAnchor.href);return"/"===t[0]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}}),e.Polymer({_template:e.html(n()),is:"scary-gallery",properties:{minHeight:{type:Number,value:200},gap:{type:Number,value:4}},observers:["_init(minHeight, gap)"],attached:function(){this._observer=t.dom(this).observeNodes(this._init),this._boundResize=this._resize.bind(this),window.addEventListener("resize",this._boundResize)},detached:function(){t.dom(this).unobserveNodes(this._observer),window.removeEventListener("resize",this._boundResize)},_init:function(){this.debounce("init",function(){this._firstResize=!0,this._children=Array.prototype.slice.call(t.dom(this).querySelectorAll("scary-image")),this._resize()},50)},_resize:function(){this.debounce("resize",function(){var e=!0,t=[],i=[],r=0;this._maxWidth=this.offsetWidth,this._children.forEach(function(n){if(n.style.margin=(this.gap/2).toString(10)+"px",n.loaded){var s=this.minHeight/n.naturalHeight*n.naturalWidth+this.gap;r+s>this._maxWidth&&(i.length>0&&(t.push({images:i,width:r}),i=[]),r=0),r+=s,n.tmpWidth=s,i.push(n)}else e=!1}.bind(this)),i.length>0&&t.push({images:i,width:r}),t.forEach(function(e){var t=e.images.length*this.gap,i=this._maxWidth-t,r=e.width-t,n=this.minHeight*i/r;e.images.forEach(function(e){e.height=n,e.width=n/e.naturalHeight*e.naturalWidth}.bind(this))}.bind(this)),e||this._resize(),e&&this._firstResize&&(this._firstResize=!1,this._resize())},50)}})});
//# sourceMappingURL=scary-gallery.umd.js.map