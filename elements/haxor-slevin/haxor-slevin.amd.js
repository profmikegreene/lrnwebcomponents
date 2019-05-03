define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","./node_modules/mobx/lib/mobx.module.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js","./node_modules/@polymer/iron-pages/iron-pages.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/polymer/lib/elements/dom-repeat.js"],function(_exports,_require,_polymerElement,_HAXCMSThemeWiring,_haxcmsSiteStore,_mobxModule,_simpleColors,_siteQuery,_ironPages,_ironIcon,_domRepeat){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.HaxorSlevin=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_859081406a8711e9aab8db3041f3697d(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  background-color: #FFFFFF;\n  color: rgba(0,0,0,.84);\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n\n:host([edit-mode]) #slot {\n  display: none;\n}\n#slot {\n  min-height: 50vh;\n}\n#slot ::slotted(p) {\n  margin-top: 29px;\n  font-family: Georgia,Cambria,\"Times New Roman\",Times,serif;\n  letter-spacing: .01rem;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 21px;\n  line-height: 1.58;\n  letter-spacing: -.003em;\n  margin-bottom: 0;\n}\n#slot ::slotted(h1,h2,h3,h4,h5,h6) {\n  font-family: \"Lucida Grande\",\"Lucida Sans Unicode\",\"Lucida Sans\",Geneva,Arial,sans-serif;\n  letter-spacing: -.02em;\n  font-style: normal;\n  letter-spacing: 0;\n  font-size: 34px;\n  line-height: 1.15;\n  letter-spacing: -.015em;\n  font-weight: 600;\n  margin-top: 53px;\n}\n#slot ::slotted(h2,h3) {\n  font-size: 34px;\n}\n.wrapper {\n  padding-bottom: 80px;\n}\n#home {\n  max-width: 1032px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin: 0 auto;\n}\n.contentcontainer-wrapper {\n  max-width: 740px;\n  margin: 0 auto;\n  box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px;\n}\nsimple-blog-card {\n  padding: 8px;\n  min-height: 100px;\n  min-width: 100px;\n}\n.simple-blog-card-wrapper {\n  margin: 0 auto;\n  width: 100%;\n}\n.evenly {\n  display: flex;\n  justify-content: space-evenly;\n}\nsimple-blog-card[size=\"micro\"] {\n  padding: 4px;\n}\niron-pages {\n  padding-top: 64px;\n}\ndom-repeat {\n  padding-bottom: 16px;\n  min-height: 300px;\n}\napp-toolbar {\n  padding: 0 20px;\n  height: 54px;\n  max-width: 1032px;\n  margin: 0 auto;\n}\n.backbutton {\n  height: 54px;\n  border-radius: 0;\n  min-width: unset;\n  text-transform: unset;\n}\napp-header {\n  z-index: 100;\n  @apply --layout-fixed-top;\n  color: #FFFFFF;\n  box-shadow: 0 4px 12px 0 rgba(0,0,0,.15);\n  background-color: var(--haxcms-color);\n  --app-header-background-rear-layer: {\n    background-color: var(--haxcms-color);\n  };\n}\npaper-icon-button {\n  --paper-icon-button-ink-color: white;\n}\nsite-active-title {\n  --site-active-title-heading: {\n    font-size: 42px;\n    font-family: Georgia,Cambria,\"Times New Roman\",Times,serif;\n    font-weight: 400;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.25;\n    letter-spacing: 0;\n  };\n}\n\n.social-float {\n  top: 160px;\n  position: fixed;\n  z-index: 99;\n  margin-left: -10vw;\n}\n.social-float ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nsocial-share-link {\n  --social-share-button-bg: var(--haxcms-color);\n  --social-share-button: {\n    padding: 8px;\n    border-radius: 50%;\n  }\n}\n\n.annoy-user {\n  background-color: rgba(255,255,255,.9);\n  display: block;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  box-shadow: 0 -3px 10px 0 rgba(0,0,0,.0785);\n  right: 0;\n  padding: 10px 0;\n  height: 50px;\n  z-index: 100;\n}\niron-icon {\n  height: 40px;\n  width: 40px;\n  display: flex;\n  padding-right: 20px;\n}\n.annoy-user iron-icon {\n  color: black;\n}\n.annoy-user span {\n  flex: 1 1 auto;\n  height: 40px;\n  display: flex;\n  vertical-align: middle;\n  line-height: 40px;\n}\n.annoy-inner strong {\n  padding: 0 4px;\n}\n.annoy-user .rss {\n  margin-left: 50px;\n}\n.annoy-inner {\n  max-width:700px;\n  margin: 0 auto;\n  display: flex;\n}\n.subtitle {\n  font-family: \"Lucida Grande\",\"Lucida Sans Unicode\",\"Lucida Sans\",Geneva,Arial,sans-serif;\n  letter-spacing: -.02em;\n  font-weight: 300;\n  font-style: normal;\n  letter-spacing: 0;\n  font-size: 28px;\n  line-height: 1.22;\n  letter-spacing: -.012em;\n}\nsite-rss-button {\n  margin: 0 4px;\n  padding: 0;\n  --site-rss-color: #000000;\n  --site-rss-bg-color: var(--haxcms-color);\n  --site-rss-paper-button: {\n    padding: 0 4px;\n    margin: 0;\n  };\n}\n\n@media screen and (max-width: 800px) {\n  #contentcontainer, #home {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .evenly {\n    display: unset;\n    justify-content: unset;\n  }\n  simple-blog-card {\n    padding: 0;\n  }\n  .hide-small {\n    display: none;\n  }\n}</style>\n<custom-style>\n  <style>\n  html,body {\n    background-color: #FFFFFF;\n  }\n  :root,html,body,a {\n    color: rgba(0,0,0,.84);\n  }\n  </style>\n</custom-style>\n<app-header reveals>\n  <app-toolbar>\n    <div>\n      <paper-button class=\"backbutton\" on-click=\"_goBack\">\n        <iron-icon icon=\"[[icon]]\"></iron-icon>\n        <span class=\"hide-small\">[[title]] - [[activeTitle]]</span>\n      </paper-button>\n    </div>\n    <div main-title>\n      <iron-image src=\"[[image]]\" preload sizing=\"cover\" style=\"height:46px;width:100%;margin: 4px 0 2px 0;\"></iron-image>\n    </div>\n    <div>\n      <site-modal icon=\"icons:search\" title=\"Search site\" button-label=\"Search\">\n        <site-search></site-search>\n      </site-modal>\n    </div>\n  </app-toolbar>\n</app-header>\n<div class=\"wrapper\">\n  <iron-pages selected=\"[[selectedPage]]\">\n    <div id=\"home\">\n      <site-query result=\"{{__mainPosts}}\" limit=\"2\" sort='{\"created\": \"ASC\"}'></site-query>\n      <div class=\"simple-blog-card-wrapper evenly\">\n        <dom-repeat items=\"[[__mainPosts]]\" as=\"post\" mutable-data>\n          <template>\n            <simple-blog-card alt=\"[[post.metadata.fields.images.0.alt]]\" color=\"[[color]]\"\n              title=\"[[post.title]]\"\n              size=\"large\"\n              link=\"[[post.location]]\"\n              image=\"[[_showImage(post.metadata.fields.images.0.src)]]\"\n              author=\"[[author.name]]\"\n              timestamp=\"[[post.created]]\"\n              readtime=\"[[post.metadata.readtime]]\"\n              authorimage=\"[[author.image]]\"\n              placeholder=\"[[image]]\"\n              authorlink=\"[[author.socialLink]]\">\n              [[post.description]]\n            </simple-blog-card>\n          </template>\n        </dom-repeat>\n      </div>\n      <site-query result=\"{{__posts}}\" start-index=\"2\" limit=\"6\" sort='{\"created\": \"ASC\"}'></site-query>\n      <div class=\"simple-blog-card-wrapper\">\n        <dom-repeat items=\"[[__posts]]\" as=\"post\" mutable-data>\n          <template>\n            <simple-blog-card \n            placeholder=\"[[image]]\"\n            alt=\"[[post.metadata.fields.images.0.alt]]\" color=\"[[color]]\" title=\"[[post.title]]\" size=\"medium\"\n              link=\"[[post.location]]\" image=\"[[_showImage(post.metadata.fields.images.0.src)]]\" author=\"[[author.name]]\"\n              timestamp=\"[[post.created]]\" readtime=\"[[post.metadata.readtime]]\" authorimage=\"[[author.image]]\" authorlink=\"[[author.socialLink]]\">\n              [[post.description]]\n            </simple-blog-card>\n          </template>\n        </dom-repeat>\n      </div>\n    </div>\n    <div class=\"contentcontainer-wrapper\">\n      <div id=\"contentcontainer\">\n        <site-active-title></site-active-title>\n        <h3 class=\"subtitle\" hidden$=\"[[!subtitle]]\">[[subtitle]]</h3>\n        <div id=\"slot\">\n          <slot></slot>\n        </div>\n      </div>\n      <site-query result=\"{{__followUpPosts}}\" limit=\"3\" start-index=\"[[activeManifestIndexCounter]]\"\n        sort='{\"created\": \"ASC\"}'></site-query>\n      <div class=\"simple-blog-card-wrapper\">\n        <dom-repeat items=\"[[__followUpPosts]]\" as=\"post\" mutable-data>\n          <template>\n            <simple-blog-card alt=\"[[post.metadata.fields.images.0.alt]]\" color=\"[[color]]\" title=\"[[post.title]]\" size=\"small\"\n              link=\"[[post.location]]\" image=\"[[_showImage(post.metadata.fields.images.0.src)]]\" author=\"[[author.name]]\"\n              placeholder=\"[[image]]\" timestamp=\"[[post.created]]\" readtime=\"[[post.metadata.readtime]]\"\n              authorimage=\"[[author.image]]\" authorlink=\"[[author.socialLink]]\">\n              [[post.description]]\n            </simple-blog-card>\n          </template>\n        </dom-repeat>\n      </div>\n      <div class=\"social-float hide-small\">\n        <ul>\n          <li>\n            <social-share-link button-style mode=\"icon-only\" message=\"[[shareMsg]]\" type=\"Twitter\">\n            </social-share-link>\n          </li>\n          <li>\n            <social-share-link button-style mode=\"icon-only\" message=\"[[shareMsg]]\" url=\"[[shareUrl]]\" type=\"LinkedIn\">\n            </social-share-link>\n          </li>\n          <li>\n            <social-share-link button-style mode=\"icon-only\" url=\"[[shareUrl]]\" message=\"[[shareMsg]]\" type=\"Facebook\">\n            </social-share-link>\n          </li>\n          <li>\n            <social-share-link button-style mode=\"icon-only\" message=\"[[shareMsg]]\" image=\"[[activeImage]]\" url=\"[[shareUrl]]\"\n              type=\"Pinterest\">\n            </social-share-link>\n          </li>\n        </ul>\n      </div>\n      <div class=\"annoy-user hide-small\">\n        <div class=\"annoy-inner\">\n          <iron-icon icon=\"[[icon]]\"></iron-icon>\n          <span>\n            Never miss a story from <strong>[[title]]</strong> use RSS today!\n          </span>\n          <span class=\"rss\">\n            <site-rss-button type=\"atom\"></site-rss-button>\n            <site-rss-button type=\"rss\"></site-rss-button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </iron-pages>\n</div>"]);_templateObject_859081406a8711e9aab8db3041f3697d=function _templateObject_859081406a8711e9aab8db3041f3697d(){return data};return data}/**
 * `haxor-slevin`
 * `Tech blogger theme`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var HaxorSlevin=/*#__PURE__*/function(_HAXCMSTheme){babelHelpers.inherits(HaxorSlevin,_HAXCMSTheme);babelHelpers.createClass(HaxorSlevin,[{key:"_getColor",value:function _getColor(manifest){if(manifest&&manifest.metadata&&manifest.metadata.hexCode){return manifest.metadata.hexCode}}}],[{key:"template",// render function
get:function get(){return(0,_polymerElement.html)(_templateObject_859081406a8711e9aab8db3041f3697d())}// properties available to the custom element for data binding
},{key:"properties",get:function get(){return Object.assign(babelHelpers.get(babelHelpers.getPrototypeOf(HaxorSlevin),"properties",this),{manifest:{type:Object},color:{type:String,computed:"_getColor(manifest)"},selectedPage:{type:Number,reflectToAttribute:!0,value:0}})}},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */get:function get(){return"haxor-slevin"}}]);function HaxorSlevin(){var _this;babelHelpers.classCallCheck(this,HaxorSlevin);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(HaxorSlevin).call(this));new Promise(function(res,rej){return _require.default(["@polymer/paper-button/paper-button.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@polymer/iron-image/iron-image.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@lrnwebcomponents/simple-blog-card/simple-blog-card.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@polymer/app-layout/app-header/app-header.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@polymer/app-layout/app-toolbar/app-toolbar.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@lrnwebcomponents/social-share-link/social-share-link.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js"],res,rej)});return _this}babelHelpers.createClass(HaxorSlevin,[{key:"_showImage",value:function _showImage(image){if(image){return image}if(this.image){return this.image}return!1}/**
   * life cycle, element is afixed to the DOM
   */},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;babelHelpers.get(babelHelpers.getPrototypeOf(HaxorSlevin.prototype),"connectedCallback",this).call(this);this.__disposer=[];(0,_mobxModule.autorun)(function(reaction){var manifest=(0,_mobxModule.toJS)(_haxcmsSiteStore.store.manifest);_this2.title=manifest.title;_this2.image=manifest.metadata.image;_this2.icon=manifest.metadata.icon;_this2.author=manifest.metadata.author;_this2.__disposer.push(reaction)});(0,_mobxModule.autorun)(function(reaction){_this2._noticeLocationChange(_haxcmsSiteStore.store.location);_this2.__disposer.push(reaction)});(0,_mobxModule.autorun)(function(reaction){_this2.activeManifestIndexCounter=(0,_mobxModule.toJS)(_haxcmsSiteStore.store.activeManifestIndexCounter);_this2.__disposer.push(reaction)});(0,_mobxModule.autorun)(function(reaction){_this2.activeTitle=(0,_mobxModule.toJS)(_haxcmsSiteStore.store.activeTitle);_this2.shareUrl=document.location.href;_this2.shareMsg=_this2.activeTitle+" "+_this2.shareUrl;if(_haxcmsSiteStore.store.activeItem&&_haxcmsSiteStore.store.activeItem.metadata&&_haxcmsSiteStore.store.activeItem.metadata.fields&&_haxcmsSiteStore.store.activeItem.metadata.fields.subtitle){_this2.subtitle=_haxcmsSiteStore.store.activeItem.metadata.fields.subtitle}else{_this2.subtitle=!1}// look for image on the post and make it the pin share
if(_haxcmsSiteStore.store.activeItem&&_haxcmsSiteStore.store.activeItem.metadata&&_haxcmsSiteStore.store.activeItem.metadata.fields&&_haxcmsSiteStore.store.activeItem.metadata.fields.images&&_haxcmsSiteStore.store.activeItem.metadata.fields.images[0]&&_haxcmsSiteStore.store.activeItem.metadata.fields.images[0].src){_this2.activeImage=_haxcmsSiteStore.store.activeItem.metadata.fields.images[0].src}_this2.__disposer.push(reaction)})}/**
   * Listen for router location changes and select page to match
   */},{key:"_noticeLocationChange",value:function _noticeLocationChange(location){if(!location||"undefined"===typeof location.route)return;var name=location.route.name;if("home"===name||"404"===name){this.selectedPage=0}else{window.scrollTo({top:0,left:0});this.selectedPage=1}setTimeout(function(){var evt=document.createEvent("UIEvents");evt.initUIEvent("resize",!0,!1,window,0);window.dispatchEvent(evt)},50)}/**
   * life cycle, element is removed from the DOM
   */},{key:"disconnectedCallback",value:function disconnectedCallback(){for(var i in this.__disposer){this.__disposer[i].dispose()}babelHelpers.get(babelHelpers.getPrototypeOf(HaxorSlevin.prototype),"disconnectedCallback",this).call(this)}/**
   * Manage the back button to get to the home page of items
   */},{key:"_goBack",value:function _goBack(e){window.history.pushState(null,null,_haxcmsSiteStore.store.location.baseUrl);window.dispatchEvent(new PopStateEvent("popstate"));// should help account for starting on a page where popstate isn't set
// and also generate data model mirroring
window.scrollTo({top:0,left:0});var evt=new CustomEvent("json-outline-schema-active-item-changed",{bubbles:!0,cancelable:!0,detail:{}});this.dispatchEvent(evt);this.selectedPage=0}}]);return HaxorSlevin}((0,_HAXCMSThemeWiring.HAXCMSTheme)(_polymerElement.PolymerElement));_exports.HaxorSlevin=HaxorSlevin;window.customElements.define(HaxorSlevin.tag,HaxorSlevin)});