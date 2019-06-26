(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    20: function(t, e, n) {
      t.exports = n(31);
    },
    25: function(t, e, n) {},
    26: function(t, e, n) {},
    31: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n(0),
        r = n.n(a),
        c = n(5),
        o = n.n(c),
        i = (n(25), n(13)),
        s = n(14),
        l = n(18),
        u = n(15),
        p = n(19),
        d = (n(26), n(7)),
        v = "INCREASE_INTERVAL",
        b = "DECREASE_INTERVAL",
        h = "START_STOPWATCH",
        f = "STOP_STOPWATCH",
        O = "TICK",
        w = null,
        m = function(t) {
          return { type: O, payload: t };
        },
        E = (function(t) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(l.a)(this, Object(u.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(e, t),
            Object(s.a)(e, [
              {
                key: "render",
                value: function() {
                  var t = this,
                    e = this.props.stopWatch,
                    n = e.ticking,
                    a = e.interval,
                    c = e.seconds;
                  return r.a.createElement(
                    "div",
                    { className: "App" },
                    r.a.createElement(
                      "div",
                      null,
                      "Refresh interval  ".concat(a / 1e3, " sec      "),
                      r.a.createElement(
                        "button",
                        {
                          disabled: n,
                          onClick: function() {
                            return t.props.increaseInterval();
                          }
                        },
                        "increase"
                      ),
                      r.a.createElement(
                        "button",
                        {
                          disabled: n,
                          onClick: function() {
                            return t.props.decreaseInterval();
                          }
                        },
                        "decrease"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      "Stopwatch:  ".concat(c, " sec     "),
                      r.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            return t.props.startStopwatch(a);
                          }
                        },
                        "Start"
                      ),
                      r.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            return t.props.stopStopwatch();
                          }
                        },
                        "Stop"
                      )
                    ),
                    n &&
                      0 === a &&
                      r.a.createElement(
                        "div",
                        null,
                        "Ok, it's working, but u sure that interval should be zero?"
                      )
                  );
                }
              }
            ]),
            e
          );
        })(r.a.Component),
        y = Object(d.b)(
          function(t) {
            return { stopWatch: t.stopWatch };
          },
          {
            increaseInterval: function() {
              return function(t) {
                t({ type: v, payload: 1e3 });
              };
            },
            decreaseInterval: function() {
              return function(t) {
                t({ type: b, payload: 1e3 });
              };
            },
            startStopwatch: function(t) {
              return function(e) {
                clearInterval(w),
                  (w = setInterval(function() {
                    return e(m(t));
                  }, t)),
                  e({ type: h });
              };
            },
            stopStopwatch: function() {
              return clearInterval(w), { type: f };
            }
          }
        )(E);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var j = n(1),
        k = n(17),
        S = n(2),
        I = { interval: 0, seconds: 0, ticking: !1 };
      var g = Object(j.c)({
          stopWatch: function() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : I,
              e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
              case v:
                return Object(S.a)({}, t, {
                  interval: (t.interval += e.payload)
                });
              case b:
                return t.interval < 1
                  ? Object(S.a)({}, t, { interval: 0 })
                  : Object(S.a)({}, t, { interval: (t.interval -= e.payload) });
              case h:
                return Object(S.a)({}, t, { ticking: !0 });
              case f:
                return Object(S.a)({}, t, { seconds: 0, ticking: !1 });
              case O:
                return 0 === t.interval
                  ? Object(S.a)({}, t, { seconds: (t.seconds += 1) })
                  : Object(S.a)({}, t, {
                      seconds: (t.seconds += e.payload / 1e3)
                    });
              default:
                return t;
            }
          }
        }),
        C = [k.a],
        T = Object(j.e)(g, {}, Object(j.d)(j.a.apply(void 0, C)));
      o.a.render(
        r.a.createElement(d.a, { store: T }, r.a.createElement(y, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(t) {
            t.unregister();
          });
    }
  },
  [[20, 1, 2]]
]);
//# sourceMappingURL=main.cb095cb3.chunk.js.map
