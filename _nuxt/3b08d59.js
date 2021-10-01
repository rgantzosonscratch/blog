(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    132: function (r, o, d) {
      "use strict";
      d.r(o);
      var x = d(6),
        t =
          (d(33),
          d(263),
          d(56),
          d(57),
          d(7),
          d(27),
          d(34),
          d(15),
          {
            name: "RippleButton",
            props: {
              time: { type: Number, default: 500 },
              color: { type: String, default: "#42b883" },
              event: { type: String, default: "mousedown" },
              opacity: { type: Number, default: 0.3 },
              disabled: { type: Boolean, default: !1 },
            },
            mounted: function () {
              var r = this;
              return Object(x.a)(
                regeneratorRuntime.mark(function o() {
                  return regeneratorRuntime.wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          (function (r) {
                            return new Promise(function (o, d) {
                              var x = document.querySelector(r);
                              x && o(x),
                                new MutationObserver(function (d, x) {
                                  Array.from(
                                    document.querySelectorAll(r)
                                  ).forEach(function (element) {
                                    o(element), x.disconnect();
                                  });
                                }).observe(document.documentElement, {
                                  childList: !0,
                                  subtree: !0,
                                });
                            });
                          },
                            r.disabled &&
                              r.$el.setAttribute("disabled", "disabled"),
                            (function (r) {
                              var o =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                                time =
                                  o.time ||
                                  3 * (+r.getAttribute("data-time") || 1e3),
                                d =
                                  o.color ||
                                  r.getAttribute("data-color") ||
                                  "currentColor",
                                x =
                                  o.opacity ||
                                  r.getAttribute("data-opacity") ||
                                  ".3",
                                t =
                                  o.event ||
                                  r.getAttribute("data-event") ||
                                  "click";
                              (r.style.overflow = "hidden"),
                                (r.style.position = "relative"),
                                r.addEventListener(t, function (o) {
                                  if (!r.disabled) {
                                    var t = document.createElement("DIV");
                                    (t.style.position = "absolute"),
                                      (t.style.background = "".concat(d)),
                                      (t.style.borderRadius = "50%");
                                    var e,
                                      h = r.getBoundingClientRect();
                                    (e =
                                      h.width > h.height
                                        ? 3 * h.width
                                        : 3 * h.height),
                                      (t.style.pointerEvents = "none"),
                                      (t.style.height = "".concat(e, "px")),
                                      (t.style.width = "".concat(e, "px")),
                                      (t.style.transform =
                                        "translate(-50%, -50%) scale(0)"),
                                      (t.style.top = "".concat(
                                        o.pageY - (h.top + window.scrollY),
                                        "px"
                                      )),
                                      (t.style.left = "".concat(
                                        o.pageX - (h.left + window.scrollX),
                                        "px"
                                      )),
                                      (t.style.transition = "opacity "
                                        .concat(time, "ms ease, transform ")
                                        .concat(time, "ms ease")),
                                      t.removeAttribute("data-ripple"),
                                      (t.style.opacity = x),
                                      r.appendChild(t),
                                      setTimeout(function () {
                                        (t.style.transform =
                                          "translate(-50%, -50%) scale(1)"),
                                          (t.style.opacity = "0"),
                                          setTimeout(function () {
                                            t.remove();
                                          }, time);
                                      }, 1);
                                  }
                                });
                            })(r.$el));
                        case 1:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                })
              )();
            },
          }),
        e = t,
        h = (d(264), d(10)),
        component = Object(h.a)(
          e,
          function () {
            var r = this,
              o = r.$createElement;
            return (r._self._c || o)(
              "button",
              {
                attrs: {
                  "data-ripple": "",
                  "data-time": r.time,
                  "data-color": r.color,
                  "data-event": r.event,
                  "data-opacity": r.opacity,
                },
              },
              [r._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          "2546b3d8",
          null
        );
      o.default = component.exports;
    },
    173: function (r, o, d) {
      var content = d(257);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[r.i, content, ""]]),
        content.locals && (r.exports = content.locals);
      (0, d(30).default)("1239d49d", content, !0, { sourceMap: !1 });
    },
    174: function (r, o, d) {
      var content = d(259);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[r.i, content, ""]]),
        content.locals && (r.exports = content.locals);
      (0, d(30).default)("547b22f7", content, !0, { sourceMap: !1 });
    },
    175: function (r, o, d) {
      var content = d(262);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[r.i, content, ""]]),
        content.locals && (r.exports = content.locals);
      (0, d(30).default)("03e4a98e", content, !0, { sourceMap: !1 });
    },
    178: function (r, o, d) {
      var content = d(265);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[r.i, content, ""]]),
        content.locals && (r.exports = content.locals);
      (0, d(30).default)("45c72240", content, !0, { sourceMap: !1 });
    },
    200: function (r, o, d) {
      var content = d(255);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[r.i, content, ""]]),
        content.locals && (r.exports = content.locals);
      (0, d(30).default)("bafa9ce4", content, !0, { sourceMap: !1 });
    },
    204: function (r, o, d) {
      "use strict";
      var base = d(200),
        x = d(96),
        t = {
          created: function () {
            base.dark &&
              (document.documentElement.classList.add("dark"),
              document.documentElement.classList.remove("light-mode")),
              console.log(x.a),
              (x.a.size = "72x72"),
              window.onNuxtReady(function () {
                x.a.parse(document.body);
              });
          },
        },
        e = (d(256), d(10)),
        component = Object(e.a)(
          t,
          function () {
            var r = this,
              o = r.$createElement,
              d = r._self._c || o;
            return d(
              "div",
              { staticClass: "dark", attrs: { id: "container" } },
              [d("AppHeader"), r._v(" "), d("Nuxt")],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      o.a = component.exports;
      installComponents(component, { AppHeader: d(292).default });
    },
    205: function (r, o, d) {
      "use strict";
      var x = d(10),
        component = Object(x.a)(
          {},
          function () {
            var r = this.$createElement,
              o = this._self._c || r;
            return o(
              "div",
              { staticClass: "dark", attrs: { id: "container" } },
              [o("Nuxt")],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      o.a = component.exports;
    },
    209: function (r, o, d) {
      d(210), (r.exports = d(211));
    },
    251: function (r, o, d) {
      var content = d(252);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[r.i, content, ""]]),
        content.locals && (r.exports = content.locals);
      (0, d(30).default)("07e0228e", content, !0, { sourceMap: !1 });
    },
    252: function (r, o, d) {
      var x = d(29)(function (i) {
        return i[1];
      });
      x.push([
        r.i,
        '@-webkit-keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes shadowPulse{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}@keyframes shadowPulse{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}#container{display:flex;background:#19212b;color:#fff;width:100%;justify-content:center;align-items:center;min-height:100vh}.app_container hr{outline:none;border:none;background:linear-gradient(90deg,transparent,#42b883,#428bb8,transparent);height:1px}.app_container .prose{max-width:none!important}.app_container .prose .standout{width:clamp(300px,80vw,800px);left:calc(50% - clamp(300px,80vw,800px)/2);position:relative}.app_container .prose pre *{text-shadow:none!important}.app_container .prose blockquote{border-left-color:#42b883!important}.app_container .prose [id]:is(h1,h2,h3){display:flex;align-items:center}.app_container .prose [id]:is(h1,h2,h3):before{content:"#";color:#42b883;opacity:0;transition:all .3s ease;display:inline-block;width:0;overflow:hidden;cursor:pointer}.app_container .prose [id]:is(h1,h2,h3):hover:before{opacity:1;width:1em}.app_container .prose [id]:is(h1,h2,h3).scrollto{-webkit-animation:pulse 1s cubic-bezier(.4,0,.6,1) 5;animation:pulse 1s cubic-bezier(.4,0,.6,1) 5}.app_container .prose code{background:hsla(0,0%,100%,.06666666666666667);border-radius:3px;padding:2px}.app_container .prose code:after,.app_container .prose code:before{display:none!important}.app_container .prose pre code{background:transparent}.app_container .prose .img_wrapper{background-color:#42b883;position:relative}.app_container .prose .img_wrapper,.app_container .prose .img_wrapper *{transition:all .3s ease}.app_container .prose .img_wrapper:hover{background:#fff}.app_container .prose .img_wrapper:hover img{filter:none}.app_container .prose .img_wrapper:hover:before{background:transparent}.app_container .prose .img_wrapper img{filter:grayscale(100%) contrast(1);flex:1 0 100%;height:100%;max-width:100%;mix-blend-mode:multiply;-o-object-fit:cover;object-fit:cover;position:relative;width:100%}.app_container .prose .img_wrapper:before{background-color:#19212b;bottom:0;content:"";height:100%;left:0;mix-blend-mode:lighten;position:absolute;right:0;top:0;width:100%;z-index:1}.app_container{position:relative;display:flex;justify-content:center;align-items:center;min-height:100vh;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100vw;padding:70px 30px 300px;flex-direction:column}#info *{display:block;width:100%}#info .title{font-size:3em;background:linear-gradient(90deg,#42b883,#428bb8);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:200;text-align:center}#info .date{text-align:center;color:#000}.dark #info .date{color:#516b8c}',
        "",
      ]),
        (x.locals = { dark: "true" }),
        (r.exports = x);
    },
    255: function (r, o, d) {
      var x = d(29)(function (i) {
        return i[1];
      });
      x.push([
        r.i,
        "@-webkit-keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes shadowPulse{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}@keyframes shadowPulse{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}",
        "",
      ]),
        (x.locals = { dark: "true" }),
        (r.exports = x);
    },
    256: function (r, o, d) {
      "use strict";
      d(173);
    },
    257: function (r, o, d) {
      var x = d(29)(function (i) {
        return i[1];
      });
      x.push([
        r.i,
        "img.emoji{height:1em!important;width:1em!important;margin:0 .05em 0 .1em!important;vertical-align:-.1em!important;display:inline!important}",
        "",
      ]),
        (x.locals = {}),
        (r.exports = x);
    },
    258: function (r, o, d) {
      "use strict";
      d(174);
    },
    259: function (r, o, d) {
      var x = d(29)(function (i) {
        return i[1];
      });
      x.push([
        r.i,
        "@-webkit-keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes shadowPulse{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}@keyframes shadowPulse{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}svg{color:#359268}.rplbtn{display:inline-flex;flex-direction:row;align-items:center}.rplbtn svg{display:block;font-size:1rem;margin-right:4px}@media(max-width:500px){.rplbtn{font-size:0;border:none!important}.rplbtn svg{display:block;font-size:1rem;margin-right:none}}header{z-index:1000;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);top:-100px;position:fixed;width:100vw;color:#276d4e;transition:top .8s ease,box-shadow .5s ease}.dark header{color:#d6f0e4}header.shown{top:0}header ul li{padding:8px 20px;border-radius:4px;margin:0 3px;background:transparent;color:#276d4e;transition:background-color .3s ease,color .3s ease,transform .1s ease,transform .3s ease,box-shadow .2s ease;border:2px solid #5b9f80;cursor:pointer}.dark header ul li{color:#65c89c}header ul li:active{transform:scale(.95)}",
        "",
      ]),
        (x.locals = { dark: "true" }),
        (r.exports = x);
    },
    260: function (r, o, d) {
      r.exports = d.p + "img/logo.702730a.png";
    },
    261: function (r, o, d) {
      "use strict";
      d(175);
    },
    262: function (r, o, d) {
      var x = d(29)(function (i) {
        return i[1];
      });
      x.push([
        r.i,
        "[data-v-2fa7d2b0]:export{dark:true}@-webkit-keyframes pulse-data-v-2fa7d2b0{0%,to{opacity:1}50%{opacity:.5}}@keyframes pulse-data-v-2fa7d2b0{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes shadowPulse-data-v-2fa7d2b0{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}@keyframes shadowPulse-data-v-2fa7d2b0{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}.search[data-v-2fa7d2b0]{float:right;right:0;margin-right:5px;border-radius:3px;width:45px;border:2px solid rgba(66,184,131,.1);background:transparent;position:relative;display:flex;align-items:center;justify-content:center}.search[data-v-2fa7d2b0]:focus,.search[data-v-2fa7d2b0]:focus-within{box-shadow:0 0 0 4px rgba(66,184,131,.2)}.search input[data-v-2fa7d2b0]{width:0;padding:0}.search svg[data-v-2fa7d2b0]{padding:4px;color:#42b883;display:flex;justify-content:center;align-items:center;min-width:20px;font-size:1.7rem}.search input[data-v-2fa7d2b0]{border:none;outline:none;background:transparent;overflow:hidden;color:#b0e3cc;caret-color:#42b883}.search[data-v-2fa7d2b0]:hover{background:rgba(66,184,131,.1)}.search input[data-v-2fa7d2b0]::-moz-placeholder{color:rgba(139,213,180,.4)}.search input[data-v-2fa7d2b0]:-ms-input-placeholder{color:rgba(139,213,180,.4)}.search input[data-v-2fa7d2b0]::placeholder{color:rgba(139,213,180,.4)}.search input[data-v-2fa7d2b0]::-webkit-search-cancel-button{display:none}.search[data-v-2fa7d2b0]:focus-within{width:clamp(80px,100%,300px);border-radius:100px}.search:focus-within input[data-v-2fa7d2b0]{width:clamp(80px,100%,300px);padding:7px}.search:focus-within svg[data-v-2fa7d2b0]{margin-left:8px}button[data-v-2fa7d2b0]{display:none}@media(min-width:600px){.search[data-v-2fa7d2b0]{height:100%}}@media(max-width:600px){.search[data-v-2fa7d2b0]:not(:focus-within){height:100%}.search_container[data-v-2fa7d2b0]:focus-within{position:fixed;inset:0;background:rgba(39,109,78,.8);height:100vh;width:100vw;z-index:100}.search_container[data-v-2fa7d2b0]:focus-within{background:#276d4e;box-shadow:0 0 0 5px rgba(101,200,156,.1);color:#1a4733}.search_container:focus-within button[data-v-2fa7d2b0]{display:inline-flex;margin-top:110px;width:clamp(80px,100%,300px);justify-content:center;align-items:center}.search_container:focus-within input[data-v-2fa7d2b0]{width:70vw}.search_container:focus-within svg[data-v-2fa7d2b0]{color:#65c89c}}",
        "",
      ]),
        (x.locals = {}),
        (r.exports = x);
    },
    264: function (r, o, d) {
      "use strict";
      d(178);
    },
    265: function (r, o, d) {
      var x = d(29)(function (i) {
        return i[1];
      });
      x.push([
        r.i,
        "[data-v-2546b3d8]:export{dark:true}@-webkit-keyframes pulse-data-v-2546b3d8{0%,to{opacity:1}50%{opacity:.5}}@keyframes pulse-data-v-2546b3d8{0%,to{opacity:1}50%{opacity:.5}}@-webkit-keyframes shadowPulse-data-v-2546b3d8{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}@keyframes shadowPulse-data-v-2546b3d8{0%{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}10%{filter:drop-shadow(3px 9px rgba(66,184,131,.3333333333)) drop-shadow(4px 31px rgba(66,184,131,.0967741935)) drop-shadow(-8px 3px #42b883) drop-shadow(3px 19px rgba(66,184,131,.1578947368)) drop-shadow(5px 26px rgba(66,184,131,.1153846154))}20%{filter:drop-shadow(-3px 22px rgba(66,184,131,.1363636364)) drop-shadow(-4px 26px rgba(66,184,131,.1153846154)) drop-shadow(3px 1px #42b883) drop-shadow(2px 15px rgba(66,184,131,.2)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}30%{filter:drop-shadow(-9px 44px rgba(66,184,131,.0681818182)) drop-shadow(6px 37px rgba(66,184,131,.0810810811)) drop-shadow(3px 31px rgba(66,184,131,.0967741935)) drop-shadow(7px 4px rgba(66,184,131,.75)) drop-shadow(0 23px rgba(66,184,131,.1304347826))}40%{filter:drop-shadow(5px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 25px rgba(66,184,131,.12)) drop-shadow(-7px 22px rgba(66,184,131,.1363636364)) drop-shadow(5px 29px rgba(66,184,131,.1034482759)) drop-shadow(6px 13px rgba(66,184,131,.2307692308))}50%{filter:drop-shadow(0 20px rgba(66,184,131,.15)) drop-shadow(5px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 47px rgba(66,184,131,.0638297872)) drop-shadow(4px 27px rgba(66,184,131,.1111111111)) drop-shadow(-3px 29px rgba(66,184,131,.1034482759))}60%{filter:drop-shadow(9px 33px rgba(66,184,131,.0909090909)) drop-shadow(8px 38px rgba(66,184,131,.0789473684)) drop-shadow(3px 1px #42b883) drop-shadow(-7px 23px rgba(66,184,131,.1304347826)) drop-shadow(-3px 21px rgba(66,184,131,.1428571429))}70%{filter:drop-shadow(-6px 5px rgba(66,184,131,.6)) drop-shadow(3px 44px rgba(66,184,131,.0681818182)) drop-shadow(-5px 22px rgba(66,184,131,.1363636364)) drop-shadow(1px 24px rgba(66,184,131,.125)) drop-shadow(-1px 23px rgba(66,184,131,.1304347826))}80%{filter:drop-shadow(0 48px rgba(66,184,131,.0625)) drop-shadow(8px 43px rgba(66,184,131,.0697674419)) drop-shadow(-3px 48px rgba(66,184,131,.0625)) drop-shadow(2px 33px rgba(66,184,131,.0909090909)) drop-shadow(-3px 1px #42b883)}90%{filter:drop-shadow(5px 40px rgba(66,184,131,.075)) drop-shadow(6px 1px #42b883) drop-shadow(3px 36px rgba(66,184,131,.0833333333)) drop-shadow(-1px 35px rgba(66,184,131,.0857142857)) drop-shadow(9px 11px rgba(66,184,131,.2727272727))}to{filter:drop-shadow(-6px 47px rgba(66,184,131,.0638297872)) drop-shadow(-4px 7px rgba(66,184,131,.4285714286)) drop-shadow(-6px 48px rgba(66,184,131,.0625)) drop-shadow(-9px 7px rgba(66,184,131,.4285714286)) drop-shadow(-2px 13px rgba(66,184,131,.2307692308))}to{filter:drop-shadow(4px 14px rgba(66,184,131,.2142857143)) drop-shadow(8px 7px rgba(66,184,131,.4285714286)) drop-shadow(4px 35px rgba(66,184,131,.0857142857)) drop-shadow(8px 44px rgba(66,184,131,.0681818182)) drop-shadow(4px 22px rgba(66,184,131,.1363636364))}}button[data-v-2546b3d8]{padding:8px 20px;border-radius:4px;margin:0 3px;background:transparent;color:#276d4e;transition:background-color .3s ease,color .3s ease,transform .1s ease,transform .3s ease,box-shadow .2s ease;border:2px solid #5b9f80;cursor:pointer}button[disabled][data-v-2546b3d8]{opacity:.5;cursor:not-allowed;filter:grayscale(100%)}button[data-v-2546b3d8]:hover{background:rgba(66,184,170,.1)}.dark button[data-v-2546b3d8]{color:#65c89c}button[data-v-2546b3d8]:active{transform:scale(.95)}",
        "",
      ]),
        (x.locals = {}),
        (r.exports = x);
    },
    292: function (r, o, d) {
      "use strict";
      d.r(o);
      var x = {
          created: function () {
            var r = 0;
            document.addEventListener("mousemove", function (r) {
              window.innerHeight - (window.innerHeight - r.clientY) < 100 &&
                document.querySelector("header").classList.add("shown");
            }),
              document.addEventListener("scroll", function () {
                var o =
                  window.pageYOffset || document.documentElement.scrollTop;
                o > r &&
                  document.querySelector("header").classList.remove("shown"),
                  (r = o <= 0 ? 0 : o),
                  window.scrollY < 100
                    ? ((document.querySelector("header").style.transition =
                        "none"),
                      (document.querySelector("header").style.top = "-".concat(
                        window.scrollY,
                        "px"
                      )))
                    : ((document.querySelector("header").style.top = null),
                      (document.querySelector("header").style.transition =
                        "top .8s ease"));
              });
          },
        },
        t = (d(258), d(10)),
        component = Object(t.a)(
          x,
          function () {
            var r = this,
              o = r.$createElement,
              d = r._self._c || o;
            return d(
              "header",
              {
                staticClass:
                  "shown flex justify-between items-center p-3 dark:bg-transparent bg-gray-200 bg-opacity-10 dark:bg-opacity-5",
              },
              [
                d("script", {
                  attrs: {
                    src:
                      "https://rawcdn.githack.com/Explosion-Scratch/ripple/dccaf32e995242fa4b63509003eba7ba6efb3195/ripple.js",
                  },
                }),
                r._v(" "),
                d(
                  "NuxtLink",
                  { attrs: { to: "/" } },
                  [d("Logo", { staticClass: "h-10" })],
                  1
                ),
                r._v(" "),
                d(
                  "nav",
                  { staticClass: "flex" },
                  [
                    d("SearchBar"),
                    r._v(" "),
                    d(
                      "ul",
                      { staticClass: "ml-2 flex justify-center items-center" },
                      [
                        d(
                          "NuxtLink",
                          { attrs: { to: "/" } },
                          [
                            d("RippleButton", { staticClass: "rplbtn" }, [
                              d(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink":
                                      "http://www.w3.org/1999/xlink",
                                    "aria-hidden": "true",
                                    role: "img",
                                    width: "1em",
                                    height: "1em",
                                    preserveAspectRatio: "xMidYMid meet",
                                    viewBox: "0 0 24 24",
                                  },
                                },
                                [
                                  d("g", { attrs: { fill: "none" } }, [
                                    d("path", {
                                      attrs: {
                                        d:
                                          "M22 20v-7.826a4 4 0 0 0-1.253-2.908l-7.373-6.968a2 2 0 0 0-2.748 0L3.253 9.266A4 4 0 0 0 2 12.174V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                      },
                                    }),
                                  ]),
                                ]
                              ),
                              r._v("\n          Home\n        "),
                            ]),
                          ],
                          1
                        ),
                        r._v(" "),
                        d(
                          "NuxtLink",
                          { attrs: { to: "/contact" } },
                          [
                            d("RippleButton", { staticClass: "rplbtn" }, [
                              d(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink":
                                      "http://www.w3.org/1999/xlink",
                                    "aria-hidden": "true",
                                    role: "img",
                                    width: "1em",
                                    height: "1em",
                                    preserveAspectRatio: "xMidYMid meet",
                                    viewBox: "0 0 24 24",
                                  },
                                },
                                [
                                  d("g", { attrs: { fill: "none" } }, [
                                    d("path", {
                                      attrs: {
                                        d: "M12 8v3m0 0v3m0-3h3m-3 0H9",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                      },
                                    }),
                                    d("path", {
                                      attrs: {
                                        d:
                                          "M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                      },
                                    }),
                                    d("path", {
                                      attrs: {
                                        d:
                                          "M14 19c-1.236 0-2.598.5-3.841 1.145c-1.998 1.037-2.997 1.556-3.489 1.225c-.492-.33-.399-1.355-.212-3.404L6.5 17.5",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                      },
                                    }),
                                  ]),
                                ]
                              ),
                              r._v("\n          Contact\n        "),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      o.default = component.exports;
      installComponents(component, {
        Logo: d(294).default,
        SearchBar: d(293).default,
        RippleButton: d(132).default,
      });
    },
    293: function (r, o, d) {
      "use strict";
      d.r(o);
      var x = {
          name: "SearchBar",
          methods: {
            focusInput: function () {
              this.$el.querySelector("input").focus();
            },
            search: function () {
              var r = this.$el.querySelector("input").value;
              this.$dispatch("searched", r),
                console.log("User searched %o", r),
                localStorage.setItem("searched", r);
            },
          },
          mounted: function () {
            this.$el.querySelector("input").value = localStorage.getItem(
              "searched"
            );
          },
        },
        t = (d(261), d(10)),
        component = Object(t.a)(
          x,
          function () {
            var r = this,
              o = r.$createElement,
              d = r._self._c || o;
            return d(
              "div",
              {
                staticClass:
                  "search_container flex flex-col justify-center items-center",
              },
              [
                d("div", { staticClass: "search" }, [
                  d(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        role: "img",
                        width: "1em",
                        height: "1em",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 1024 1024",
                      },
                      on: { click: r.focusInput },
                    },
                    [
                      d("path", {
                        attrs: {
                          d:
                            "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
                          fill: "currentColor",
                        },
                      }),
                    ]
                  ),
                  r._v(" "),
                  d("input", {
                    attrs: {
                      type: "search",
                      placeholder: "Search all articles",
                    },
                    on: {
                      keyup: function (o) {
                        return !o.type.indexOf("key") &&
                          r._k(o.keyCode, "enter", 13, o.key, "Enter")
                          ? null
                          : r.search.apply(null, arguments);
                      },
                    },
                  }),
                ]),
                r._v(" "),
                d("RippleButton", [r._v("Search")]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "2fa7d2b0",
          null
        );
      o.default = component.exports;
      installComponents(component, { RippleButton: d(132).default });
    },
    294: function (r, o, d) {
      "use strict";
      d.r(o);
      var x = d(10),
        component = Object(x.a)(
          {},
          function () {
            var r = this.$createElement;
            return (this._self._c || r)("img", { attrs: { src: d(260) } });
          },
          [],
          !1,
          null,
          null,
          null
        );
      o.default = component.exports;
    },
  },
  [[209, 16, 2, 17]],
]);
