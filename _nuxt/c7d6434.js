(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    363: function (t, e, n) {
      "use strict";
      n.r(e);
      n(51), n(62);
      var o = {
          name: "CodeEditor",
          data: function () {
            return { id: null };
          },
          methods: {
            init: function () {
              this.$el.contentWindow.postMessage(
                { fromParent: !0, action: "language", data: this.language },
                "*"
              ),
                this.$el.contentWindow.postMessage(
                  {
                    fromParent: !0,
                    action: "update",
                    data: this.code.replace(/__BREAK__/g, "\n"),
                  },
                  "*"
                );
            },
          },
          props: {
            language: { type: String, default: "html" },
            code: { type: String, default: "" },
          },
        },
        l = n(10),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)("iframe", {
              staticClass: "codeeditor block h-96 w-full",
              attrs: { src: "https://yj639.csb.app/" },
              on: { load: t.init },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);
