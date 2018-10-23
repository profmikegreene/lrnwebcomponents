import "@polymer/polymer/polymer.js";
import "@polymer/app-layout/app-layout.js";
import "paper-avatar/paper-avatar.js";
import "lrn-icons/lrn-icons.js";
import "@polymer/paper-button/paper-button.js";
import "simple-colors/simple-colors.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-collapse/iron-collapse.js";
/**
`lrnsys-collapselist`


@demo demo/index.html
*/
Polymer({
  _template: `
    <style is="custom-style">
      :host {
        display: block;
        background-color: var(--simple-colors-background1);
        --lrnsys-collapselist-text-color: var(--simple-colors-foreground1);
        --lrnsys-collapselist-item-color: var(--simple-colors-background1);
        --lrnsys-collapselist-item-active-color: var(--simple-colors-background2);
        --lrnsys-collapselist-item-border: var(--simple-colors-background5);
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      ul li {
        width: 100%;
        border: 1px solid var(--lrnsys-collapselist-item-border);
        margin-bottom: -1px;
      }
      ul li paper-button {
        height: 2em;
        padding: .5em;
        margin: 0;
        min-width: .1em;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        text-transform: unset;
        border-radius: 0;
      }
      ul li paper-button iron-icon,
      ul li paper-button span {
        pointer-events: none;
      }
      .collapse-label {
        margin-left: .5em;
      }
      .collapse-content {
        padding: 1em;
      }
    </style>
    <ul>
    <template is="dom-repeat" items="{{items}}" as="row">
      <li>
        <lrnsys-collapselist-item>
          <span slot="label">
            <iron-icon icon="[[row.icon]]"></iron-icon>
            <span class="collapse-label">[[row.label]]</span>
          </span>
          <span slot="content">
            [[row.content]]
          </span>
        </lrnsys-collapselist-item>
      </li>
    </template>
    </ul>
`,

  is: "lrnsys-collapselist",
  behaviors: [simpleColorsBehaviors],

  properties: {
    /**
     * Array of items to present with label and content for the list of collapses.
     */
    items: {
      type: Array
    }
  }
});