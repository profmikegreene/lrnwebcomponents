/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
/**
 * `code-editor`
 * `Wrapper on top of a code editor`
 *
 * @demo demo/index.html
 * @microcopy - the mental model for this element
 * - monaco is the VS code editor
 * @customElement code-editor
 */
class CodeEditor extends SchemaBehaviors(LitElement) {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          padding: 16px;
          font-family: unset;
        }
        :host([hidden]) {
          display: none !important;
        }
        .code-pen-container:not([hidden]) {
          width: 100%;
          display: flex;
          background-color: var(--code-pen-button-color, #222222);
          color: white;
          height: 40px;
          justify-content: flex-end;
          align-items: center;
        }
        .code-pen-container span {
          display: inline-flex;
          line-height: 16px;
          font-size: 16px;
          padding: 12px;
        }
        code-pen-button {
          float: right;
          height: 40px;
        }
        label {
          color: var(--code-editor-label-color, #888);
          transition: all 0.5s;
        }

        :host([focused]) label {
          color: var(
            --code-editor-float-label-active-color,
            var(--code-editor-label-color, #000)
          );
        }

        #codeeditor {
          height: 100%;
          display: flex;
          border: var(--code-editor-code-border);
          border-radius: var(--code-editor-code-border-radius);
        }

        :host([focused]) #codeeditor {
          border: var(--code-editor-focus-code-border);
        }
      `
    ];
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.showCodePen = false;
    this.readOnly = false;
    this.theme = "vs-dark";
    this.language = "javascript";
    this.fontSize = 16;
    this.autofocus = false;
    this.hideLineNumbers = false;
    this.focused = false;
    this.__libPath =
      decodeURIComponent(import.meta.url) + "/../../../monaco-editor/min/vs";
    import("@lrnwebcomponents/code-editor/lib/monaco-element/monaco-element.js");
    import("@lrnwebcomponents/code-editor/lib/code-pen-button.js");
    setTimeout(() => {
      this.addEventListener(
        "monaco-element-ready",
        this.editorReady.bind(this)
      );
    }, 0);
  }
  /**
   * LitElement render
   */
  render() {
    return html`
      <label for="codeeditor" ?hidden="${!this.title}">${this.title}</label>
      <monaco-element
        id="codeeditor"
        ?autofocus="${this.autofocus}"
        ?hide-line-numbers="${this.hideLineNumbers}"
        lib-path="${this.__libPath}"
        language="${this.language}"
        theme="${this.theme}"
        @value-changed="${this._editorDataChanged}"
        font-size="${this.fontSize}"
        ?read-only="${this.readOnly}"
        @code-editor-focus="${this._handleFocus}"
        @code-editor-blur="${this._handleBlur}"
      >
      </monaco-element>
      <div class="code-pen-container" ?hidden="${!this.showCodePen}">
        <span>Check it out on code pen: </span
        ><code-pen-button .data="${this.codePenData}"></code-pen-button>
      </div>
    `;
  }

  static get tag() {
    return "code-editor";
  }

  static get properties() {
    return {
      ...super.properties,
      /**
       * Title
       */
      title: {
        type: String
      },
      /**
       * Show codePen button to fork it to there to run
       */
      showCodePen: {
        type: Boolean,
        reflect: true,
        attribute: "show-code-pen"
      },
      /**
       * Readonly setting for the editor
       */
      readOnly: {
        type: Boolean,
        reflect: true,
        attribute: "read-only"
      },
      /**
       * Code pen data, computed based on the HTML editor
       */
      codePenData: {
        type: Object
      },
      /**
       * contents of the editor
       */
      editorValue: {
        type: String
      },
      /**
       * value of the editor after the fact
       */
      value: {
        type: String
      },
      /**
       * Theme for the Ace editor.
       */
      theme: {
        type: String
      },
      /**
       * Mode / language for editor
       */
      mode: {
        type: String
      },
      /**
       * Language to present color coding for
       */
      language: {
        type: String
      },
      /**
       * font size for the editor
       */
      fontSize: {
        type: Number,
        attribute: "font-size"
      },
      /**
       * automatically set focus on the editor
       */
      autofocus: {
        type: Boolean,
        reflect: true
      },
      /**
       * hide the line numbers
       */
      hideLineNumbers: {
        type: Boolean,
        attribute: "hide-line-numbers"
      },
      /**
       * does the monaco-editor have focus
       */
      focused: {
        type: Boolean,
        reflect: true
      }
    };
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "editorValue") {
        this._editorValueChanged(this[propName], oldValue);
      }
      if (propName == "mode") {
        this._modeChanged(this[propName], oldValue);
      }
      if (propName === "showCodePen") {
        // notify
        this.dispatchEvent(
          new CustomEvent("show-code-pen-changed", {
            detail: {
              value: this[propName]
            }
          })
        );
      }
      if (propName === "value") {
        // notify
        this.dispatchEvent(
          new CustomEvent("value-changed", {
            detail: {
              value: this[propName]
            }
          })
        );
      }
      if (["title", "value"].includes(propName)) {
        this.codePenData = this._computeCodePenData(this.title, this.value);
      }
    });
  }
  /**
   * Update the post data whenever the editor has been updated
   */
  _computeCodePenData(title, editorValue) {
    return {
      title: title,
      html: editorValue
    };
  }
  /**
   * sets focused attribute when monaco-elements's focus event fires
   * @param {event} e the monaco-elements's focus event
   */
  _handleFocus(e) {
    this.focused = true;
  }
  /**
   * unsets focused attribute when monaco-elements's blur event fires
   * @param {event} e the monaco-elements's blur event
   */
  _handleBlur(e) {
    this.focused = false;
  }
  /**
   * LEGACY: pass down mode to language if that api is used
   */
  _modeChanged(newValue) {
    this.language = this.mode;
  }

  /**
   * Notice code editor changes and reflect them into this element
   */
  _editorDataChanged(e) {
    // value coming up off of thiss
    this.value = e.detail;
  }

  /**
   * Calculate what's in slot currently and then inject it into the editor.
   */
  updateEditorValue(node) {
    if (node) {
      var content = "";
      var children = node;
      if (node.tagName !== "TEMPLATE") {
        console.warn(
          "code-editor works best with a template tag provided in light dom"
        );
        children = this.childNodes;
        if (children.length > 0) {
          // loop through everything found in the slotted area and put it back in
          for (var j = 0, len2 = children.length; j < len2; j++) {
            if (typeof children[j].tagName !== typeof undefined) {
              content += children[j].outerHTML;
            } else {
              content += children[j].textContent;
            }
          }
        }
      } else {
        content = children.innerHTML;
      }
      if (content) {
        this.shadowRoot.querySelector("#codeeditor").value = content.trim();
      }
    }
  }
  _editorValueChanged(newValue) {
    if (newValue) {
      this.shadowRoot.querySelector("#codeeditor").value = newValue;
    }
  }
  /**
   * Ensure fields don't pass through to HAX if in that context
   */
  preProcessHaxNodeToContent(clone) {
    clone.editorValue = null;
    clone.codePenData = null;
    clone.value = null;
    clone.removeAttribute("value");
    clone.removeAttribute("code-pen-data");
    return clone;
  }
  /**
   * attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    // mutation observer that ensures state of hax applied correctly
    this._observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.tagName) {
              this.updateEditorValue(node);
            }
          });
        }
        // if we dropped nodes via the UI (delete event basically)
        if (mutation.removedNodes.length > 0) {
          // handle removing items... not sure we need to do anything here
          mutation.removedNodes.forEach(node => {
            if (node.tagName) {
              this.updateEditorValue(node);
            }
          });
        }
      });
    });
    this._observer.observe(this, {
      childList: true
    });
  }
  disconnectedCallback() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    super.disconnectedCallback();
  }
  editorReady(e) {
    if (this.editorValue) {
      this.shadowRoot.querySelector("#codeeditor").value = this.editorValue;
    }
  }
}
window.customElements.define(CodeEditor.tag, CodeEditor);
export { CodeEditor };
