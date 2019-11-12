/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/simple-colors-shared-styles/simple-colors-shared-styles.js";
/**
 * `simple-colors`
 * a shared set of styles for `@lrnwebcomponents`
### Styling
See demo of "all of the colors" (`demo/colors.html`) for styling.
 *
 * @customElement
 * @demo ./demo/index.html demo
 * @demo ./demo/how.html getting started
 * @demo ./demo/colors.html all of the colors
 * @demo ./demo/picker.html simple-colors-picker
 * @demo ./demo/extending.html extending simple-colors
 */
class SimpleColors extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  constructor() {
    super();
    this.accentColor = "grey";
    this.dark = false;
    this.__utils = window.SimpleColorsSharedStyles.requestAvailability();
    this.colors = window.SimpleColorsSharedStyles.colors;
  }

  static get tag() {
    return "simple-colors";
  }

  /**
   * gets the current shade
   *
   * @param {string} the shade
   * @param {number} the inverted shade
   */
  invertShade(shade) {
    return this.__utils.invertShade(shade);
  }

  /**
   * gets the color information of a given CSS variable or class
   *
   * @param {string} the CSS variable (eg. `--simple-colors-fixed-theme-red-3`) or a class (eg. `.simple-colors-fixed-theme-red-3-text`)
   * @param {object} an object that includes the theme, color, and shade information
   */
  getColorInfo(colorName) {
    return this.__utils.getColorInfo(colorName);
  }

  /**
   * returns a variable based on color name, shade, and fixed theme
   *
   * @param {string} the color name
   * @param {number} the color shade
   * @param {boolean} the color shade
   * @returns {string} the CSS Variable
   */
  makeVariable(color = "grey", shade = 1, theme = "default") {
    return this.__utils.makeVariable(
      (color = "grey"),
      (shade = 1),
      (theme = "default")
    );
  }

  /**
   * for large or small text given a color and its shade,
   * lists all the colors and shades that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {object} all of the WCAG 2.0 AA-compliant colors and shades
   */
  getContrastingColors(colorName, colorShade, isLarge) {
    return this.__utils.getContrastingColors(colorName, colorShade, isLarge);
  }

  /**
   * for large or small text given a color and its shade,
   * lists all the shades of another color that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {array} all of the WCAG 2.0 AA-compliant shades of the contrasting color
   */
  getContrastingShades(isLarge, colorName, colorShade, contrastName) {
    return this.__utils.getContrastingShades(
      isLarge,
      colorName,
      colorShade,
      contrastName
    );
  }

  /**
   * determines if two shades are WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {string} contrast shade, e.g. 12
   * @param {boolean} whether or not the contrasting shade is WCAG 2.0 AA-compliant
   */
  isContrastCompliant(
    isLarge,
    colorName,
    colorShade,
    contrastName,
    contrastShade
  ) {
    return this.__utils.isContrastCompliant(
      isLarge,
      colorName,
      colorShade,
      contrastName,
      contrastShade
    );
  }
}
window.customElements.define(SimpleColors.tag, SimpleColors);
export { SimpleColors };
