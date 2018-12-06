import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import*as async from"./node_modules/@polymer/polymer/lib/utils/async.js";import"./node_modules/@polymer/paper-icon-button/paper-icon-button.js";import"./node_modules/@polymer/iron-icons/iron-icons.js";import"./node_modules/@polymer/iron-icons/social-icons.js";import"./node_modules/@polymer/iron-pages/iron-pages.js";import"./node_modules/@polymer/iron-image/iron-image.js";import"./node_modules/@polymer/paper-button/paper-button.js";import"./node_modules/@polymer/paper-card/paper-card.js";import"./node_modules/@polymer/iron-ajax/iron-ajax.js";import"./node_modules/@polymer/iron-list/iron-list.js";import"./node_modules/@polymer/iron-swipeable-container/iron-swipeable-container.js";import"./node_modules/@polymer/paper-tooltip/paper-tooltip.js";import"./node_modules/@polymer/paper-progress/paper-progress.js";import"./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";import"./node_modules/@polymer/app-layout/app-header/app-header.js";import"./node_modules/@lrnwebcomponents/item-overlay-ops/item-overlay-ops.js";import"./node_modules/@lrnwebcomponents/lrnsys-outline/lrnsys-outline.js";import"./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js";import"./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js";import"./lib/sortable-list.js";class OutlineDesigner extends PolymerElement{static get template(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}

app-toolbar {
  background-color: var(--simple-colors-default-theme-light-blue-1, #4285f4);
  color: var(--simple-colors-default-theme-grey-12, #222222);
  margin: 20px 0;
}

#viewmode, #detailsmode {
  transition: .3s all ease;
  -webkit-transition: .3s all ease;
  -moz-transition: .3s all ease;
  -ms-transition: .3s all ease;
  -o-transition: .3s all ease;
}
.rotate-90 {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}

.breadcrumb-arrow:first-child {
    display: none;
}
.breadcrumb-arrow {
  color: var(--breadcrumb-color1,rgb(67, 110, 144));
  margin: -2px 6px 0 6px;
}
.breadcrumb {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  line-height: 34px;
  font-size: 18px;
  color: var(--breadcrumb-color1,rgb(67, 110, 144));
  opacity: 0.8;
}

paper-progress {
  display: block;
  width: 100%;
  --paper-progress-active-color: rgba(255, 255, 255, 0.5);
  --paper-progress-container-color: transparent;
}
.card-wrapper {
  padding: 16px;
}

#sort .card-wrapper {
  background: #dddddd;
  display: inline-block;
  float: left;
  margin: 16px;
  vertical-align: top;
}

paper-card {
  width: 250px;
  height: 300px;
  display: block;
  visibility: visible;
  opacity: 1;
}

#addbutton {
  opacity: .6;
  background-color: #dddddd;
}
.add-button {
  width: 200px;
  height: 200px;
  margin: auto;
  display: flex;
}

paper-card.expanded {
  min-height: 300px;
}

iron-list {
  flex: 1 1 auto;
}

.low-detail,
.mid-detail,
.high-detail {
  visibility: visible;
  opacity: 1;
  transition: .6s all ease;
  -webkit-transition: .6s all ease;
  -moz-transition: .6s all ease;
  -ms-transition: .6s all ease;
  -o-transition: .6s all ease;
}

:host([details-mode="low"]) .mid-detail,
:host([details-mode="low"]) .high-detail {
  visibility: hidden;
  opacity: 0;
}

:host([details-mode="mid"]) .high-detail {
  visibility: hidden;
  opacity: 0;
}
:host([details-mode="mid"]) .mid-detail {
  visibility: visible;
  opacity: 1;
}

paper-card.card-low-detail {
  width: 150px;
  height: 150px;
}
paper-card.card-mid-detail {
  width: 250px;
  height: 250px;
}
paper-card.card-high-detail {
  width: 250px;
  height: 300px;
}

.tf-tree{transition: .3s all ease;font-size:16px;overflow:auto}.tf-tree *{transition: .3s all ease;box-sizing:border-box;margin:0;padding:0}.tf-tree ul{display:inline-flex}.tf-tree li{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;padding:0 1em;position:relative}.tf-tree li ul{margin:2em 0}.tf-tree li li:before{border-top:.0625em solid #000;content:"";display:block;height:.0625em;left:-.03125em;position:absolute;top:-1.03125em;width:100%}.tf-tree li li:first-child:before{left:calc(50% - .03125em);max-width:calc(50% + .0625em)}.tf-tree li li:last-child:before{left:auto;max-width:calc(50% + .0625em);right:calc(50% - .03125em)}.tf-tree li li:only-child:before{display:none}.tf-tree li li:only-child>.tf-nc:before,.tf-tree li li:only-child>.tf-node-content:before{height:1.0625em;top:-1.0625em}.tf-tree .tf-nc,.tf-tree .tf-node-content{border:.0625em solid #000;display:inline-block;padding:.5em 1em;position:relative}.tf-tree .tf-nc:before,.tf-tree .tf-node-content:before{top:-1.03125em}.tf-tree .tf-nc:after,.tf-tree .tf-nc:before,.tf-tree .tf-node-content:after,.tf-tree .tf-node-content:before{border-left:.0625em solid #000;content:"";display:block;height:1em;left:calc(50% - .03125em);position:absolute;width:.0625em}.tf-tree .tf-nc:after,.tf-tree .tf-node-content:after{top:calc(100% + .03125em)}.tf-tree .tf-nc:only-child:after,.tf-tree .tf-node-content:only-child:after,.tf-tree>ul>li>.tf-nc:before,.tf-tree>ul>li>.tf-node-content:before{display:none}.tf-tree.tf-gap-sm li{padding:0 .6em}.tf-tree.tf-gap-sm li>.tf-nc:before,.tf-tree.tf-gap-sm li>.tf-node-content:before{height:.6em;top:-.6em}.tf-tree.tf-gap-sm li>.tf-nc:after,.tf-tree.tf-gap-sm li>.tf-node-content:after{height:.6em}.tf-tree.tf-gap-sm li ul{margin:1.2em 0}.tf-tree.tf-gap-sm li li:before{top:-.63125em}.tf-tree.tf-gap-sm li li:only-child>.tf-nc:before,.tf-tree.tf-gap-sm li li:only-child>.tf-node-content:before{height:.6625em;top:-.6625em}.tf-tree.tf-gap-lg li{padding:0 1.5em}.tf-tree.tf-gap-lg li>.tf-nc:before,.tf-tree.tf-gap-lg li>.tf-node-content:before{height:1.5em;top:-1.5em}.tf-tree.tf-gap-lg li>.tf-nc:after,.tf-tree.tf-gap-lg li>.tf-node-content:after{height:1.5em}.tf-tree.tf-gap-lg li ul{margin:3em 0}.tf-tree.tf-gap-lg li li:before{top:-1.53125em}.tf-tree.tf-gap-lg li li:only-child>.tf-nc:before,.tf-tree.tf-gap-lg li li:only-child>.tf-node-content:before{height:1.5625em;top:-1.5625em}.tf-tree li.tf-dotted-children .tf-nc:after,.tf-tree li.tf-dotted-children .tf-nc:before,.tf-tree li.tf-dotted-children .tf-node-content:after,.tf-tree li.tf-dotted-children .tf-node-content:before{border-left-style:dotted}.tf-tree li.tf-dotted-children li:before{border-top-style:dotted}.tf-tree li.tf-dotted-children>.tf-nc:before,.tf-tree li.tf-dotted-children>.tf-node-content:before{border-left-style:solid}.tf-tree li.tf-dashed-children .tf-nc:after,.tf-tree li.tf-dashed-children .tf-nc:before,.tf-tree li.tf-dashed-children .tf-node-content:after,.tf-tree li.tf-dashed-children .tf-node-content:before{border-left-style:dashed}.tf-tree li.tf-dashed-children li:before{border-top-style:dashed}.tf-tree li.tf-dashed-children>.tf-nc:before,.tf-tree li.tf-dashed-children>.tf-node-content:before{border-left-style:solid}
.tf-label {
  transition: .3s all ease;
  cursor: pointer;
}

.node-high-detail li iron-image {
  height: 50px;
  position: static;
}
.node-high-detail li .tf-label {
  z-index: 1;
  position: relative;
  font-size: 1.75em;
  padding: 8px;
  background-color: rgba(250,250,250,.8);
}

  .node-low-detail .tf-nc {
    height: 32px;
    width: 32px;
    background-color: dodgerblue;
    border-color: dodgerblue;
    padding: 0;
    border-radius: 50%;
    overflow: hidden;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  
  .node-low-detail .tf-nc:before,
  .node-low-detail .tf-nc:after {
    border-left-color: dodgerblue;
    border-left-width: 2px;
  }
  .node-low-detail li li:before {
    border-top-color: dodgerblue;
    border-top-width: 2px;
  }</style>
<style is="custom-style" include="simple-colors"></style>
<iron-ajax
  auto
  url="[[outlineSchemaUrl]]"
  handle-as="json"
  on-response="handleResponse"
  last-response="{{manifest}}"
  loading="{{__loading}}">
</iron-ajax>
<app-header reveals>
  <app-toolbar>
    View: [[viewModeLabel]]
    <paper-icon-button on-tap="_toggleViewMode" id="viewmode" icon="[[viewModeIcon]]"></paper-icon-button>
    <paper-tooltip for="viewmode">[[viewModeLabel]]</paper-tooltip>
    Detail: [[detailsModeLabel]]
    <paper-icon-button on-tap="_toggleDetailsMode" id="detailsmode" icon="[[detailsModeIcon]]"></paper-icon-button>
    <paper-tooltip for="detailsmode">[[detailsModeLabel]]</paper-tooltip>
    <div main-title class="flex layout breadcrumb_layout">
      <iron-icon class="breadcrumb-arrow" icon="icons:chevron-right"></iron-icon>
      <a class="breadcrumb" id="main">[[manifest.title]]</a>

          <iron-icon class="breadcrumb-arrow" icon="icons:chevron-right"></iron-icon>
      <a class="breadcrumb" id="second">Lesson 2</a>

          <iron-icon class="breadcrumb-arrow" icon="icons:chevron-right"></iron-icon>
      <a class="breadcrumb" id="third">Math Basics</a>
    </div>
    <div>
      <paper-icon-button id="helpbutton" icon="icons:help" title="help"></paper-icon-button>
      <paper-tooltip for="helpbutton">Help</paper-tooltip>
    </div>
    <paper-progress value="10" indeterminate bottom-item hidden$="[[!__loading]]"></paper-progress>
  </app-toolbar>
</app-header>
<iron-pages selected="[[selectedView]]">
  <section id="listpage">
    <iron-list id="ironlist" items="[[manifest.items]]" as="item" grid>
    <template>
      <div class="card-wrapper">
      <item-overlay-ops data-item-id$="[[item.id]]" add="" edit="" remove="" duplicate="" move="" edit-mode="">
        <paper-card class$="card-[[detailsMode]]-detail" heading="[[item.title]]" image="[[item.metadata.image]]" elevation="2" animated-shadow="false">
          <div class="card-content mid-detail">[[item.description]]</div>
          <div class="card-actions high-detail">
            <ul>
              <iron-swipeable-container><li>Page 1</li></iron-swipeable-container>
              <iron-swipeable-container><li>Page 2</li></iron-swipeable-container>
              <iron-swipeable-container><li>Page 3</li></iron-swipeable-container>
            </ul>
          </div>
        </paper-card>
      </item-overlay-ops>
      </div>
    </template>
    </iron-list>
  </section>
  <section id="outlinepage">
    <lrnsys-outline id="outline" items="{{manifest.items}}" title="[[manifest.title]]"></lrnsys-outline>
  </section>
  <section id="treepage">
    <div class$="node-[[detailsMode]]-detail tf-tree">
      <ul>
        <template is="dom-repeat" items="{{manifest.items}}" as="item">
        <li>
          <span class="tf-nc">
            <div class="tf-label" id$="item-tip-[[item.id]]">[[item.title]]</div>
            <paper-tooltip for$="item-tip-[[item.id]]">[[item.title]]</paper-tooltip>
            <iron-image src="[[item.metadata.image]]" preload sizing="cover" class="high-detail"></iron-image>
          </span>
        </li>
        </template>
      </ul>
    </div>
  </section>
  <section id="sortpage">
    <sortable-list id="sort" sortable=".card-wrapper" on-sort-finish="_onSortFinish" dragging="{{dragging}}">
      <template is="dom-repeat" items="{{manifest.items}}" as="item">
        <div class="card-wrapper">
          <paper-card class$="card-[[detailsMode]]-detail" data-item-id$="[[item.id]]" heading="[[item.title]]" image="[[item.metadata.image]]" elevation="2"
            animated-shadow="false">
            <div class="card-content mid-detail">[[item.description]]</div>
            <div class="card-actions high-detail"></div>
          </paper-card>
        </div>
      </template>
    </sortable-list>
  </section>
</iron-pages>
<slot></slot>`}static get properties(){return{viewMode:{name:"viewMode",type:"String",value:"cards",observer:"_viewModeChanged"},viewModeIcon:{name:"viewModeIcon",type:"String"},viewModeLabel:{name:"viewModeLabel",type:"String"},detailsMode:{name:"detailsMode",type:"String",value:"mid",reflectToAttribute:!0,observer:"_detailsModeChanged"},detailsModeIcon:{name:"detailsModeIcon",type:"String"},detailsModeLabel:{name:"detailsModeLabel",type:"String"},selectedView:{name:"selectedView",type:"Number"},editMode:{name:"editMode",type:"String",value:!1,reflectToAttribute:!0,observer:"_editModeChanged"},outlineSchemaUrl:{name:"outlineSchemaUrl",type:"String"},manifest:{name:"manifest",type:"Object",notify:!0},outlineData:{name:"outlineData",type:"Object",notify:!0}}}static get tag(){return"outline-designer"}connectedCallback(){super.connectedCallback();this.$.ironlist.addEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this));this.$.ironlist.addEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this))}disconnectedCallback(){super.disconnectedCallback();this.$.ironlist.removeEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this));this.$.ironlist.removeEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this))}_toggleViewMode(e){switch(this.viewMode){case"cards":this.viewMode="outline";break;case"outline":this.outlineData=this.$.outline.getData();this.viewMode="tree";break;case"tree":this.viewMode="drag";break;case"drag":this.viewMode="cards";break;}}_toggleDetailsMode(e){switch(this.detailsMode){case"low":this.detailsMode="mid";break;case"mid":this.detailsMode="high";break;case"high":this.detailsMode="low";break;}}_detailsModeChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){switch(newValue){case"low":this.detailsModeIcon="icons:apps";this.detailsModeLabel="Low";break;case"mid":this.detailsModeIcon="icons:view-module";this.detailsModeLabel="Medium";break;case"high":this.detailsModeIcon="icons:view-carousel";this.detailsModeLabel="High";break;}if(0===this.selectedView){async.microTask.run(()=>{setTimeout(()=>{this.$.ironlist.fire("iron-resize");window.dispatchEvent(new Event("resize"))},50)})}}}_onSortFinish(e){console.log(e.detail)}_overlayOpChanged(e){console.log(e.detail);switch(e.detail.operation){case"add":console.log("add item");console.log(e.detail.element.getAttribute("data-item-id"));break;case"edit":console.log("edit item");console.log(e.detail.element.getAttribute("data-item-id"));break;}}_overlayOpSelected(e){console.log(e.detail);switch(e.detail.operation){case"move":if("option1"===e.detail.option){console.log("move left")}else if("option2"===e.detail.option){console.log("move right")}console.log(e.detail.element.getAttribute("data-item-id"));break;case"duplicate":if("option1"===e.detail.option){console.log("duplicate");console.log(e.detail.element.getAttribute("data-item-id"))}break;case"remove":if("option1"===e.detail.option){console.log("remove");console.log(e.detail.element.getAttribute("data-item-id"))}break;}}_viewModeChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){switch(newValue){case"cards":this.$.viewmode.classList.add("rotate-90");this.selectedView=0;this.viewModeIcon="icons:view-module";this.viewModeLabel="Card view";async.microTask.run(()=>{setTimeout(()=>{this.$.ironlist.fire("iron-resize");window.dispatchEvent(new Event("resize"))},100)});break;case"outline":this.$.viewmode.classList.remove("rotate-90");this.selectedView=1;this.viewModeIcon="icons:view-list";this.viewModeLabel="Outline view";break;case"tree":this.$.viewmode.classList.add("rotate-90");this.selectedView=2;this.viewModeIcon="social:share";this.viewModeLabel="Tree view";break;case"drag":this.$.viewmode.classList.remove("rotate-90");this.selectedView=3;this.viewModeIcon="icons:touch-app";this.viewModeLabel="Draggable cards";break;}}}_editModeChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){console.log(newValue)}}}window.customElements.define("outline-designer",OutlineDesigner);export{OutlineDesigner};