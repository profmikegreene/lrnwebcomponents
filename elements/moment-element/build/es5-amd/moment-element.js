define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/moment/moment.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_2587d2c0db1311e8b4b4250a52892d0c() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    [[output]]\n"]);
    _templateObject_2587d2c0db1311e8b4b4250a52892d0c = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_2587d2c0db1311e8b4b4250a52892d0c()
    ),
    is: "moment-element",
    properties: {
      datetime: {
        type: String,
        value: function value() {
          return new Date();
        }
      },
      inputFormat: { type: String, value: "" },
      outputFormat: { type: String, value: "" },
      from: { type: String, value: "" },
      to: { type: String, value: "" },
      output: { type: String, notify: !0 }
    },
    observers: [
      "_computeOutput(datetime, inputFormat, outputFormat, from, to)"
    ],
    update: function update() {
      this._computeOutput(
        this.datetime,
        this.inputFormat,
        this.outputFormat,
        this.from,
        this.to
      );
    },
    _computeOutput: function _computeOutput(
      datetime,
      inputFormat,
      outputFormat,
      from,
      to
    ) {
      var output = inputFormat
        ? moment(datetime, inputFormat)
        : moment(datetime);
      if (outputFormat) {
        output = output.format(outputFormat);
      } else if (from) {
        output = "now" === from ? output.fromNow() : output.from(moment(from));
      } else if (to) {
        output = "now" === to ? output.toNow() : output.to(moment(to));
      }
      this.set("output", output);
    }
  });
});