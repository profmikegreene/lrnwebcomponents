import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/grafitto-filter/grafitto-filter.js";
import { winEventsElement } from "@lrnwebcomponents/utils/utils.js";

/**
 * `hax-gizmo-browser`
 * @customElement hax-gizmo-browser
 * `Browse a list of gizmos. This provides a listing of custom elements for people to search and select based on what have been defined as gizmos for users to select.`
 * @microcopy - the mental model for this element
 * - gizmo - silly name for the general public when talking about custom elements and what it provides in the end.
 */
class HaxGizmoBrowser extends winEventsElement(LitElement) {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        hax-gizmo-browser-item {
          margin: 5px;
          transition: 0.2s all linear;
          display: inline-flex;
        }
        #ironlist {
          min-height: 50vh;
          margin: 0;
          padding: 16px;
        }
        .title {
          position: relative;
          padding: 16px;
          outline: 0;
          font-weight: 600;
          text-align: left;
          margin: 0;
          font-size: 18px;
          line-height: 18px;
          font-family: "Noto Serif", serif;
          background-color: var(--hax-color-menu-heading-bg, #eeeeee);
          color: var(--hax-color-menu-heading-color, black);
        }
        .toolbar-inner {
          display: inline-flex;
          padding: 10px;
        }
      `
    ];
  }
  constructor() {
    super();
    this.__winEvents = {
      "hax-store-property-updated": "_haxStorePropertyUpdated"
    };
    this.title = "Create page element";
    this.__gizmoList = [];
    this.filtered = [];
    import("@polymer/paper-input/paper-input.js");
    import("@lrnwebcomponents/dropdown-select/dropdown-select.js");
    import("@lrnwebcomponents/hax-body/lib/hax-gizmo-browser-item.js");
  }
  render() {
    return html`
      <h3 class="title">
        <iron-icon icon="hax:add-brick"></iron-icon> ${this.title}
      </h3>
      <div class="toolbar-inner">
        <dropdown-select
          id="filtertype"
          label="Filter by"
          value="title"
          @change="${this.filtertypeChange}"
        >
          <paper-item value="title">Title</paper-item>
        </dropdown-select>
        <paper-input
          label="Filter"
          id="inputfilter"
          aria-controls="filter"
          @value-changed="${this.inputfilterChanged}"
          value=""
          always-float-label=""
        ></paper-input>
      </div>
      <grafitto-filter
        id="filter"
        .items="${this.__gizmoList}"
        like=""
        where="title"
        like=""
        @filtered-changed="${this.filteredChanged}"
        ><template></template
      ></grafitto-filter>
      ${this.filtered.map(
        gizmo => html`
          <hax-gizmo-browser-item
            .index="${gizmo.index}"
            .title="${gizmo.title}"
            tag-to-insert="${gizmo.tag}"
            .icon="${gizmo.icon}"
            color="${gizmo.color}"
            .author="${gizmo.author}"
            .teaser="${gizmo.teaser}"
            .description="${gizmo.description}"
            .examples="${gizmo.examples}"
            .status="${gizmo.status}"
          ></hax-gizmo-browser-item>
        `
      )}
    `;
  }
  static get tag() {
    return "hax-gizmo-browser";
  }
  static get properties() {
    return {
      /**
       * Title of the browser, for translation.
       */
      title: {
        type: String
      },
      filtered: {
        type: Array
      },
      __gizmoList: {
        type: Array
      }
    };
  }
  filteredChanged(e) {
    this.filtered = [...e.detail.value];
  }
  inputfilterChanged(e) {
    this.shadowRoot.querySelector("#filter").like = e.target.value;
  }
  filtertypeChange(e) {
    this.shadowRoot.querySelector("#inputfilter").value = "";
    this.shadowRoot.querySelector("#filter").where = e.detail.value;
    this.shadowRoot.querySelector("#filter").like = "";
  }
  firstUpdated(changedProperties) {
    this.resetBrowser();
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "activeApp") {
        this._activeAppChanged(this[propName], oldValue);
      }
    });
  }
  /**
   * Store updated, sync.
   */
  _haxStorePropertyUpdated(e) {
    if (
      e.detail &&
      typeof e.detail.value !== typeof undefined &&
      e.detail.property
    ) {
      this[e.detail.property] = e.detail.value;
    }
  }

  /**
   * Reset this browser.
   */
  resetBrowser() {
    this.__gizmoList = window.HaxStore.instance.gizmoList;
    this.filtered = this.__gizmoList;
    this.shadowRoot.querySelector("#inputfilter").value = "";
    this.shadowRoot.querySelector("#filtertype").value = "title";
    this.shadowRoot.querySelector("#filter").value = "";
    this.shadowRoot.querySelector("#filter").filter();
    this.shadowRoot.querySelector("#filter").where = "title";
    this.shadowRoot.querySelector("#filter").like = "";
  }
}
window.customElements.define(HaxGizmoBrowser.tag, HaxGizmoBrowser);
export { HaxGizmoBrowser };
