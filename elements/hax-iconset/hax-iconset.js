/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `hax-iconset`
 * @customElement hax-iconset is a iconset for HAX
 *
 * Example:
 *   <script>import "@lrnwebcomponents/hax-iconset/hax-iconset.js";</script>
 *   <iron-icon icon="hax:vocab"></iron-icon>
 *
 * @pseudoElement hax-iconset
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg size="24" name="hax">
    <!-- placeholder -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="placeholder">
          <path d="M4 3H5V5H3V4C3 3.5 3.5 3 4 3M20 3C20.5 3 21 3.5 21 4V5H19V3H20M15 5V3H17V5H15M11 5V3H13V5H11M7 5V3H9V5H7M21 12C21 12.5 20.5 13 20 13H19V11H21V12M15 13V11H17V13H15M11 13V11H13V13H11M7 13V11H9V13H7M4 13C3.5 13 3 12.5 3 12V11H5V13H4M3 7H5V9H3V7M21 7V9H19V7H21M7 16L12 21L17 16H7Z" />
        </g>
      </defs>
    </svg>
    <!-- site map -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="site-map">
          <path d="M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9Z" />
        </g>
      </defs>
    </svg>
    <!-- templates -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="templates">
          <path d="M2 4V18C2 18 2 20 4 20H20C20 20 22 20 22 18V4H2M9 13H5V7H9V13M19 13H11V11H19V13M19 9H11V7H19V9Z" />
        </g>
      </defs>
    </svg>
    <!-- add item -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="add-item">
          <path d="M2,2H11V11H2V2M17.5,2C20,2 22,4 22,6.5C22,9 20,11 17.5,11C15,11 13,9 13,6.5C13,4 15,2 17.5,2M6.5,14L11,22H2L6.5,14M19,17H22V19H19V22H17V19H14V17H17V14H19V17Z" />
        </g>
      </defs>
    </svg>
    <!-- page details -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="page-details">
          <path d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20Z" />
        </g>
      </defs>
    </svg>
    <!-- page details -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="format-textblock">
          <path d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
        </g>
      </defs>
    </svg>
    <!-- add page -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="add-page">
          <path d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z" />
        </g>
      </defs>
    </svg>
    <!-- h2 -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="h2">
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z" />
        </g>
      </defs>
    </svg>
        <!-- h3 -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="h3">
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z" />
        </g>
      </defs>
    </svg>
        <!-- h4 -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="h4">
    <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z" />
        </g>
      </defs>
    </svg>
        <!-- h5 -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="h5">
    <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z" />
        </g>
      </defs>
    </svg>
    <!-- bricks -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="bricks">
          <path d="M3,16H12V21H3V16M2,10H8V15H2V10M9,10H15V15H9V10M16,10H22V15H16V10M13,16H21V21H13V16M3,4H11V9H3V4M12,4H21V9H12V4Z" />
        </g>
      </defs>
    </svg>
    <!-- hr -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="hr">
          <path d="M19,13H5V11H19V13Z" />
        </g>
      </defs>
    </svg>
    <!-- site settings -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="site-settings">
          <path d="M4,14V17C4,19 7.05,20.72 11,21V18.11L11.13,18C7.12,17.76 4,16.06 4,14M12,13C7.58,13 4,11.21 4,9V12C4,14.21 7.58,16 12,16C12.39,16 12.77,16 13.16,16L17,12.12C15.4,12.72 13.71,13 12,13M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M21,11.13C20.85,11.13 20.71,11.19 20.61,11.3L19.61,12.3L21.66,14.3L22.66,13.3C22.87,13.1 22.88,12.76 22.66,12.53L21.42,11.3C21.32,11.19 21.18,11.13 21.04,11.13M19.04,12.88L13,18.94V21H15.06L21.12,14.93L19.04,12.88Z" />
        </g>
      </defs>
    </svg>
    <!-- add brick -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="add-brick">
           <path d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H13.09A5.47 5.47 0 0 1 13 19A6 6 0 0 1 21 13.34V6M20 15V18H23V20H20V23H18V20H15V18H18V15Z" />
        </g>
      </defs>
    </svg>
    <!-- page edit -->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <defs>
        <g id="page-edit">
          <path d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z" />
        </g>
      </defs>
    </svg>
    <!-- paragraph -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="paragraph">
        <path d="M8.48,14.31V22h3.08V5.08h3.08V22h3.08V5.08h3.08V2H8.48c-3.4,0-6.15,2.75-6.15,6.15S5.08,14.31,8.48,14.31z M20.78,20.46">
        </g>
      </defs>
    </svg>
    <!-- arrow left -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="arrow-left">
          <path d="M7.2,12l8.5,6V6L7.2,12z"/>
        </g>
      </defs>
    </svg>
    <!-- arrow right -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="arrow-right">
        <path d="M15.8,12L7.2,6v12L15.8,12z"/>
        </g>
      </defs>
    </svg>
    <!-- calendar -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="calendar">
          <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.9,4,3,4.9,3,6l0,14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20H5V9h14
            V20z"/>
          <rect x="11" y="11" width="2" height="2"/>
          <rect x="15" y="11" width="2" height="2"/>
          <rect x="7" y="11" width="2" height="2"/>
          <rect x="7" y="15" width="2" height="2"/>
          <rect x="11" y="15" width="2" height="2"/>
          <rect x="15" y="15" width="2" height="2"/>
        </g>
      </defs>
    </svg>
    <!-- vocab -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="vocab">
          <polygon points="5.25,13.12 8.29,13.12 6.77,9.06 	"/>
          <path d="M20.5,4.45c-1.07-0.32-2.19-0.48-3.3-0.47C15.36,3.9,13.54,4.39,12,5.4c-1.54-1-3.36-1.5-5.19-1.42
            C4.97,3.9,3.16,4.39,1.62,5.4v13.83c0.02,0.25,0.22,0.45,0.47,0.47c0.09,0,0.14,0,0.24,0c1.41-0.66,2.93-1.03,4.48-1.09
            c1.84-0.08,3.65,0.41,5.19,1.42c1.59-0.88,3.37-1.37,5.19-1.42c1.55-0.04,3.09,0.3,4.48,0.99c0.07,0.04,0.15,0.05,0.24,0.05
            c0.25-0.02,0.45-0.22,0.47-0.47V5.4C21.81,4.98,21.17,4.66,20.5,4.45z M9.5,16.33l-0.72-1.89H4.77l-0.72,1.89H2.61l3.53-9h1.28
            l3.52,9H9.5z M20.5,17.2c-1.07-0.32-2.18-0.48-3.3-0.47c-1.82,0.05-3.6,0.53-5.19,1.42V7.28c1.59-0.88,3.37-1.37,5.19-1.42
            c1.12-0.01,2.23,0.15,3.3,0.47V17.2z"/>
          <polygon points="19.66,7.34 13.14,7.34 13.14,8.6 17.76,8.6 13.11,15.32 13.11,16.33 19.81,16.33 19.81,15.08 15,15.08 19.66,8.33 
              "/>
        </g>
      </defs>
    </svg>
    <!-- math -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="math">
          <polygon points="11,5.5 7.5,5.5 7.5,2 5.5,2 5.5,5.5 2,5.5 2,7.5 5.5,7.5 5.5,11 7.5,11 7.5,7.5 11,7.5 "/>
          <rect x="13" y="5.5" width="9" height="1.99"/>
          <polygon points="11.02,14.39 9.61,12.98 6.5,16.09 3.41,13 2,14.41 5.09,17.5 1.97,20.62 3.38,22.03 6.5,18.91 9.61,22.02 
            11.02,20.61 7.91,17.5 "/>
          <rect x="13" y="16.5" width="9" height="1.99"/>
          <rect x="16.5" y="13" width="1.99" height="1.99"/>
          <rect x="16.5" y="20.01" width="1.99" height="1.99"/>
        </g>
      </defs>
    </svg>
    <!-- pi -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="pi">
          <path d="M8.8,6.89C7.96,6.96,7.17,6.96,6.41,7.1C5.33,7.31,4.71,8.16,4.15,9.04C3.95,9.34,3.76,9.52,3.36,9.38
            C3.78,7.86,4.34,6.43,5.48,5.3c0.53-0.53,1.19-0.74,1.91-0.81c0.62-0.06,1.25-0.1,1.88-0.1c3.49-0.01,6.99,0,10.48,0
            c0.15,0,0.31,0,0.49,0c0,0.85,0,1.67,0,2.55c-1.29,0-2.6,0-3.94,0c-0.09,1.28-0.18,2.51-0.25,3.74c-0.08,1.45-0.15,2.91-0.19,4.36
            c-0.01,0.55,0.07,1.11,0.17,1.65c0.15,0.82,0.66,1.27,1.46,1.37c0.81,0.1,1.49-0.23,1.84-0.93c0.17-0.35,0.27-0.73,0.41-1.12
            c0.14,0,0.31,0,0.5,0c-0.14,1.15-0.37,2.24-0.96,3.21c-0.8,1.34-2.24,1.89-3.83,1.49c-1.41-0.36-2.31-1.54-2.32-3.23
            c-0.01-1.36,0.11-2.72,0.21-4.07c0.17-2.13,0.38-4.25,0.58-6.41c-1.21,0-2.4,0-3.63,0c-0.1,1.36-0.18,2.72-0.3,4.07
            c-0.21,2.52-0.42,5.05-1.12,7.49c-0.13,0.47-0.31,0.94-0.56,1.35c-0.62,1.01-1.98,1.24-2.93,0.54c-0.55-0.41-0.81-1.07-0.57-1.72
            c0.18-0.48,0.41-0.97,0.72-1.37c1.93-2.46,2.78-5.31,3.05-8.38C8.66,8.32,8.72,7.67,8.8,6.89z"/>
        </g>
      </defs>
    </svg>
    <!-- oerschema -->
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <defs>
        <g id="oerschema">
          <path d="M14.42,14.68c0,0.74,0,1.46,0,2.18c-1.1,0.03-2.53-0.38-3.75-1.74c-0.83,0.95-1.87,1.54-3.13,1.71
            c-1.4,0.19-2.65-0.18-3.73-1.07c-2.32-1.91-2.28-5.15-0.51-7.08c1.84-2,5.19-2.27,7.38,0.18c1-1.12,2.24-1.75,3.76-1.75
            c1.52,0,2.76,0.63,3.77,1.76c0.98-1.13,2.22-1.74,3.76-1.77c0,0.75,0,1.47,0,2.14c-0.44,0.15-0.89,0.24-1.28,0.45
            c-0.75,0.4-1.24,1.05-1.31,1.9c-0.07,0.91-0.05,1.84-0.06,2.75c0,0.1,0,0.19,0,0.3c-0.74,0-1.46,0-2.22,0c0-0.5,0-1.01,0-1.53
            c-1.26,0-2.49,0-3.74,0c0-0.76,0-1.49,0-2.25c1.15,0,2.3,0,3.46,0c-0.36-0.95-1.48-1.63-2.56-1.53c-1.38,0.13-2.28,1.11-2.44,2.27
            C11.64,12.87,12.43,14.56,14.42,14.68z M9.55,12.01c0.04-1.42-1.13-2.66-2.62-2.67c-1.5,0-2.65,1.17-2.66,2.6
            c-0.02,1.59,1.2,2.71,2.66,2.71C8.4,14.65,9.57,13.47,9.55,12.01z"/>
        </g>
      </defs>
    </svg>
    <!-- basic layout bar icons -->
    <svg>
        <g id="12" height="20">
          <rect x="0" y="0" width="24" height="100%"></rect>
        </g>  
        <g id="8/4" height="20">
          <rect x="0" y="0" width="16" height="100%"></rect>
          <rect x="18" y="0" width="6" height="100%"></rect>
        </g>
        <g id="6/6" height="20">
          <rect x="0" y="0" width="11" height="100%"></rect>
          <rect x="12" y="0" width="11" height="100%"></rect>
        </g>
        <g id="4/8" height="20">
          <rect x="0" y="0" width="6" height="100%"></rect>
          <rect x="8" y="0" width="16" height="100%"></rect>
        </g>
        <g id="4/4/4" height="20">
          <rect x="0" y="0" width="7" height="100%"></rect>
          <rect x="8" y="0" width="7" height="100%"></rect>
          <rect x="16" y="0" width="7" height="100%"></rect>
        </g>
        <g id="3/3/3/3" height="20">
          <rect x="0" y="0" width="5" height="100%"></rect>
          <rect x="6" y="0" width="5" height="100%"></rect>
          <rect x="12" y="0" width="5" height="100%"></rect>
          <rect x="18" y="0" width="5" height="100%"></rect>
        </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
