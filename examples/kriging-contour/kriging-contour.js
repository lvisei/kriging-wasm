!(function (r, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((r = "undefined" != typeof globalThis ? globalThis : r || self)[
          "kriging-contour"
        ] = {})
      );
})(this, function (r) {
  "use strict";
  function t(r, t) {
    return r < t ? -1 : r > t ? 1 : r >= t ? 0 : NaN;
  }
  var n, e;
  1 === (n = t).length &&
    ((e = n),
    (n = function (r, n) {
      return t(e(r), n);
    }));
  var o = Math.sqrt(50),
    a = Math.sqrt(10),
    i = Math.sqrt(2);
  function f(r) {
    return Math.ceil(Math.log(r.length) / Math.LN2) + 1;
  }
  var u = Array.prototype.slice;
  function l(r, t) {
    return r - t;
  }
  function s(r) {
    return function () {
      return r;
    };
  }
  function c(r, t) {
    for (var n, e = -1, o = t.length; ++e < o; ) if ((n = h(r, t[e]))) return n;
    return 0;
  }
  function h(r, t) {
    for (
      var n = t[0], e = t[1], o = -1, a = 0, i = r.length, f = i - 1;
      a < i;
      f = a++
    ) {
      var u = r[a],
        l = u[0],
        s = u[1],
        c = r[f],
        h = c[0],
        p = c[1];
      if (g(u, c, t)) return 0;
      s > e != p > e && n < ((h - l) * (e - s)) / (p - s) + l && (o = -o);
    }
    return o;
  }
  function g(r, t, n) {
    var e, o, a, i;
    return (
      (function (r, t, n) {
        return (t[0] - r[0]) * (n[1] - r[1]) == (n[0] - r[0]) * (t[1] - r[1]);
      })(r, t, n) &&
      ((o = r[(e = +(r[0] === t[0]))]),
      (a = n[e]),
      (i = t[e]),
      (o <= a && a <= i) || (i <= a && a <= o))
    );
  }
  function p() {}
  var y = [
    [],
    [
      [
        [1, 1.5],
        [0.5, 1],
      ],
    ],
    [
      [
        [1.5, 1],
        [1, 1.5],
      ],
    ],
    [
      [
        [1.5, 1],
        [0.5, 1],
      ],
    ],
    [
      [
        [1, 0.5],
        [1.5, 1],
      ],
    ],
    [
      [
        [1, 1.5],
        [0.5, 1],
      ],
      [
        [1, 0.5],
        [1.5, 1],
      ],
    ],
    [
      [
        [1, 0.5],
        [1, 1.5],
      ],
    ],
    [
      [
        [1, 0.5],
        [0.5, 1],
      ],
    ],
    [
      [
        [0.5, 1],
        [1, 0.5],
      ],
    ],
    [
      [
        [1, 1.5],
        [1, 0.5],
      ],
    ],
    [
      [
        [0.5, 1],
        [1, 0.5],
      ],
      [
        [1.5, 1],
        [1, 1.5],
      ],
    ],
    [
      [
        [1.5, 1],
        [1, 0.5],
      ],
    ],
    [
      [
        [0.5, 1],
        [1.5, 1],
      ],
    ],
    [
      [
        [1, 1.5],
        [1.5, 1],
      ],
    ],
    [
      [
        [0.5, 1],
        [1, 1.5],
      ],
    ],
    [],
  ];
  function d() {
    var r = 1,
      t = 1,
      n = f,
      e = v;
    function h(r) {
      var t = n(r);
      if (Array.isArray(t)) t = t.slice().sort(l);
      else {
        var e = (function (r, t) {
            var n,
              e,
              o,
              a = r.length,
              i = -1;
            if (null == t) {
              for (; ++i < a; )
                if (null != (n = r[i]) && n >= n)
                  for (e = o = n; ++i < a; )
                    null != (n = r[i]) && (e > n && (e = n), o < n && (o = n));
            } else
              for (; ++i < a; )
                if (null != (n = t(r[i], i, r)) && n >= n)
                  for (e = o = n; ++i < a; )
                    null != (n = t(r[i], i, r)) &&
                      (e > n && (e = n), o < n && (o = n));
            return [e, o];
          })(r),
          f = e[0],
          u = e[1];
        (t = (function (r, t, n) {
          var e = Math.abs(t - r) / Math.max(0, n),
            f = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)),
            u = e / f;
          return (
            u >= o ? (f *= 10) : u >= a ? (f *= 5) : u >= i && (f *= 2),
            t < r ? -f : f
          );
        })(f, u, t)),
          (t = (function (r, t, n) {
            (r = +r),
              (t = +t),
              (n =
                (o = arguments.length) < 2
                  ? ((t = r), (r = 0), 1)
                  : o < 3
                  ? 1
                  : +n);
            for (
              var e = -1,
                o = 0 | Math.max(0, Math.ceil((t - r) / n)),
                a = new Array(o);
              ++e < o;

            )
              a[e] = r + e * n;
            return a;
          })(Math.floor(f / t) * t, Math.floor(u / t) * t, t));
      }
      return t.map(function (t) {
        return g(r, t);
      });
    }
    function g(n, o) {
      var a = [],
        i = [];
      return (
        (function (n, e, o) {
          var a,
            i,
            f,
            u,
            l,
            s,
            c = new Array(),
            h = new Array();
          (a = i = -1), (u = n[0] >= e), y[u << 1].forEach(g);
          for (; ++a < r - 1; )
            (f = u), (u = n[a + 1] >= e), y[f | (u << 1)].forEach(g);
          y[u << 0].forEach(g);
          for (; ++i < t - 1; ) {
            for (
              a = -1,
                u = n[i * r + r] >= e,
                l = n[i * r] >= e,
                y[(u << 1) | (l << 2)].forEach(g);
              ++a < r - 1;

            )
              (f = u),
                (u = n[i * r + r + a + 1] >= e),
                (s = l),
                (l = n[i * r + a + 1] >= e),
                y[f | (u << 1) | (l << 2) | (s << 3)].forEach(g);
            y[u | (l << 3)].forEach(g);
          }
          (a = -1), (l = n[i * r] >= e), y[l << 2].forEach(g);
          for (; ++a < r - 1; )
            (s = l),
              (l = n[i * r + a + 1] >= e),
              y[(l << 2) | (s << 3)].forEach(g);
          function g(r) {
            var t,
              n,
              e = [r[0][0] + a, r[0][1] + i],
              f = [r[1][0] + a, r[1][1] + i],
              u = d(e),
              l = d(f);
            (t = h[u])
              ? (n = c[l])
                ? (delete h[t.end],
                  delete c[n.start],
                  t === n
                    ? (t.ring.push(f), o(t.ring))
                    : (c[t.start] = h[n.end] = {
                        start: t.start,
                        end: n.end,
                        ring: t.ring.concat(n.ring),
                      }))
                : (delete h[t.end], t.ring.push(f), (h[(t.end = l)] = t))
              : (t = c[l])
              ? (n = h[u])
                ? (delete c[t.start],
                  delete h[n.end],
                  t === n
                    ? (t.ring.push(f), o(t.ring))
                    : (c[n.start] = h[t.end] = {
                        start: n.start,
                        end: t.end,
                        ring: n.ring.concat(t.ring),
                      }))
                : (delete c[t.start], t.ring.unshift(e), (c[(t.start = u)] = t))
              : (c[u] = h[l] = { start: u, end: l, ring: [e, f] });
          }
          y[l << 3].forEach(g);
        })(n, o, function (r) {
          e(r, n, o),
            (function (r) {
              for (
                var t = 0,
                  n = r.length,
                  e = r[n - 1][1] * r[0][0] - r[n - 1][0] * r[0][1];
                ++t < n;

              )
                e += r[t - 1][1] * r[t][0] - r[t - 1][0] * r[t][1];
              return e;
            })(r) > 0
              ? a.push([r])
              : i.push(r);
        }),
        i.forEach(function (r) {
          for (var t, n = 0, e = a.length; n < e; ++n)
            if (-1 !== c((t = a[n])[0], r)) return void t.push(r);
        }),
        { type: "MultiPolygon", value: o, coordinates: a }
      );
    }
    function d(t) {
      return 2 * t[0] + t[1] * (r + 1) * 4;
    }
    function v(n, e, o) {
      n.forEach(function (n) {
        var a,
          i = n[0],
          f = n[1],
          u = 0 | i,
          l = 0 | f,
          s = e[l * r + u];
        i > 0 &&
          i < r &&
          u === i &&
          ((a = e[l * r + u - 1]), (n[0] = i + (o - a) / (s - a) - 0.5)),
          f > 0 &&
            f < t &&
            l === f &&
            ((a = e[(l - 1) * r + u]), (n[1] = f + (o - a) / (s - a) - 0.5));
      });
    }
    return (
      (h.contour = g),
      (h.size = function (n) {
        if (!arguments.length) return [r, t];
        var e = Math.ceil(n[0]),
          o = Math.ceil(n[1]);
        if (!(e > 0 && o > 0)) throw new Error("invalid size");
        return (r = e), (t = o), h;
      }),
      (h.thresholds = function (r) {
        return arguments.length
          ? ((n =
              "function" == typeof r
                ? r
                : Array.isArray(r)
                ? s(u.call(r))
                : s(r)),
            h)
          : n;
      }),
      (h.smooth = function (r) {
        return arguments.length ? ((e = r ? v : p), h) : e === v;
      }),
      h
    );
  }
  function v(r, t) {
    var n,
      e = [0].rep(t * t);
    for (n = 0; n < t; n++) e[n * t + n] = r;
    return e;
  }
  function M(r, t, n, e) {
    var o,
      a,
      i = Array(n * e);
    for (o = 0; o < n; o++)
      for (a = 0; a < e; a++) i[o * e + a] = r[o * e + a] + t[o * e + a];
    return i;
  }
  function m(r, t, n, e, o) {
    var a,
      i,
      f,
      u = Array(n * o);
    for (a = 0; a < n; a++)
      for (i = 0; i < o; i++)
        for (u[a * o + i] = 0, f = 0; f < e; f++)
          u[a * o + i] += r[a * e + f] * t[f * o + i];
    return u;
  }
  function A(r, t) {
    var n,
      e,
      o,
      a = Array(t);
    for (n = 0; n < t; n++) a[n] = r[n * t + n];
    for (n = 0; n < t; n++) {
      for (e = 0; e < n; e++) a[n] -= r[n * t + e] * r[n * t + e];
      if (a[n] <= 0) return !1;
      for (a[n] = Math.sqrt(a[n]), e = n + 1; e < t; e++) {
        for (o = 0; o < n; o++) r[e * t + n] -= r[e * t + o] * r[n * t + o];
        r[e * t + n] /= a[n];
      }
    }
    for (n = 0; n < t; n++) r[n * t + n] = a[n];
    return !0;
  }
  function w(r, t) {
    var n, e, o, a;
    for (n = 0; n < t; n++)
      for (r[n * t + n] = 1 / r[n * t + n], e = n + 1; e < t; e++) {
        for (a = 0, o = n; o < e; o++) a -= r[e * t + o] * r[o * t + n];
        r[e * t + n] = a / r[e * t + e];
      }
    for (n = 0; n < t; n++) for (e = n + 1; e < t; e++) r[n * t + e] = 0;
    for (n = 0; n < t; n++) {
      for (r[n * t + n] *= r[n * t + n], o = n + 1; o < t; o++)
        r[n * t + n] += r[o * t + n] * r[o * t + n];
      for (e = n + 1; e < t; e++)
        for (o = e; o < t; o++) r[n * t + e] += r[o * t + n] * r[o * t + e];
    }
    for (n = 0; n < t; n++) for (e = 0; e < n; e++) r[n * t + e] = r[e * t + n];
  }
  function x(r, t) {
    var n,
      e,
      o,
      a,
      i,
      f,
      u,
      l,
      s,
      c,
      h,
      g = t,
      p = Array(t * t),
      y = Array(t),
      d = Array(t),
      v = Array(t);
    for (n = 0; n < t; n++)
      for (a = 0; a < t; a++) p[n * t + a] = n == a ? 1 : 0;
    for (a = 0; a < t; a++) v[a] = 0;
    for (n = 0; n < t; n++) {
      for (l = 0, a = 0; a < t; a++)
        if (1 != v[a])
          for (i = 0; i < t; i++)
            0 == v[i] &&
              Math.abs(r[a * t + i]) >= l &&
              ((l = Math.abs(r[a * t + i])), (o = a), (e = i));
      if ((++v[e], o != e)) {
        for (f = 0; f < t; f++)
          (h = r[o * t + f]), (r[o * t + f] = r[e * t + f]), (r[e * t + f] = h);
        for (f = 0; f < g; f++)
          (h = p[o * t + f]), (p[o * t + f] = p[e * t + f]), (p[e * t + f] = h);
      }
      if (((d[n] = o), (y[n] = e), 0 == r[e * t + e])) return !1;
      for (c = 1 / r[e * t + e], r[e * t + e] = 1, f = 0; f < t; f++)
        r[e * t + f] *= c;
      for (f = 0; f < g; f++) p[e * t + f] *= c;
      for (u = 0; u < t; u++)
        if (u != e) {
          for (s = r[u * t + e], r[u * t + e] = 0, f = 0; f < t; f++)
            r[u * t + f] -= r[e * t + f] * s;
          for (f = 0; f < g; f++) p[u * t + f] -= p[e * t + f] * s;
        }
    }
    for (f = t - 1; f >= 0; f--)
      if (d[f] != y[f])
        for (i = 0; i < t; i++)
          (h = r[i * t + d[f]]),
            (r[i * t + d[f]] = r[i * t + y[f]]),
            (r[i * t + y[f]] = h);
    return !0;
  }
  function E(r, t, n, e, o) {
    return t + ((e - t) / n) * (1 - Math.exp((-1 / o) * Math.pow(r / n, 2)));
  }
  function b(r, t, n, e, o) {
    return t + ((e - t) / n) * (1 - Math.exp((-1 / o) * (r / n)));
  }
  function _(r, t, n, e, o) {
    return r > n
      ? t + (e - t) / n
      : t + ((e - t) / n) * ((r / n) * 1.5 - 0.5 * Math.pow(r / n, 3));
  }
  (Array.prototype.max = function () {
    return Math.max.apply(null, this);
  }),
    (Array.prototype.min = function () {
      return Math.min.apply(null, this);
    }),
    (Array.prototype.mean = function () {
      var r, t;
      for (r = 0, t = 0; r < this.length; r++) t += this[r];
      return t / this.length;
    }),
    (Array.prototype.rep = function (r) {
      for (var t = new Array(r), n = this[0], e = 0; e < r; e++) t[e] = n;
      return t;
    }),
    (Array.prototype.pip = function (r, t) {
      var n,
        e,
        o = !1;
      for (n = 0, e = this.length - 1; n < this.length; e = n++)
        this[n][1] > t != this[e][1] > t &&
          r <
            ((this[e][0] - this[n][0]) * (t - this[n][1])) /
              (this[e][1] - this[n][1]) +
              this[n][0] &&
          (o = !o);
      return o;
    });
  var C = {};
  function z(r, t) {
    return r.map(function (r) {
      return r.map(function (r) {
        return [
          t.xlim[0] + r[0] * t.x_resolution,
          t.y_resolution < 0
            ? t.ylim[1] + r[1] * t.y_resolution
            : t.ylim[0] + r[1] * t.y_resolution,
        ];
      });
    });
  }
  function P(r, t, n) {
    var e = [],
      o = [],
      a = [],
      i = [1e8, 1e8, -1e8, -1e8];
    r.features.forEach(function (r) {
      e.push(r.properties[t]),
        o.push(r.geometry.coordinates[0]),
        a.push(r.geometry.coordinates[1]),
        i[0] > r.geometry.coordinates[0] && (i[0] = r.geometry.coordinates[0]),
        i[1] > r.geometry.coordinates[1] && (i[1] = r.geometry.coordinates[1]),
        i[2] < r.geometry.coordinates[0] && (i[2] = r.geometry.coordinates[0]),
        i[3] < r.geometry.coordinates[1] && (i[3] = r.geometry.coordinates[1]);
    });
    var f = C.train(e, o, a, n.model, n.sigma2, n.alpha);
    return C.getGridInfo(i, f, 200);
  }
  (C.train = function (r, t, n, e, o, a) {
    var i = { t: r, x: t, y: n, nugget: 0, range: 0, sill: 0, A: 1 / 3, n: 0 };
    switch (e) {
      case "gaussian":
        i.model = E;
        break;
      case "exponential":
        i.model = b;
        break;
      case "spherical":
        i.model = _;
    }
    var f,
      u,
      l,
      s,
      c = r.length,
      h = Array((c * c - c) / 2);
    for (f = 0, l = 0; f < c; f++)
      for (u = 0; u < f; u++, l++)
        (h[l] = Array(2)),
          (h[l][0] = Math.pow(
            Math.pow(t[f] - t[u], 2) + Math.pow(n[f] - n[u], 2),
            0.5
          )),
          (h[l][1] = Math.abs(r[f] - r[u]));
    h.sort(function (r, t) {
      return r[0] - t[0];
    }),
      (i.range = h[(c * c - c) / 2 - 1][0]);
    var g = (c * c - c) / 2 > 30 ? 30 : (c * c - c) / 2,
      p = i.range / g,
      y = [0].rep(g),
      d = [0].rep(g);
    if (g < 30) for (s = 0; s < g; s++) (y[s] = h[s][0]), (d[s] = h[s][1]);
    else {
      for (
        f = 0, u = 0, l = 0, s = 0;
        f < g && u < (c * c - c) / 2;
        f++, l = 0
      ) {
        for (
          ;
          h[u][0] <= (f + 1) * p &&
          ((y[s] += h[u][0]),
          (d[s] += h[u][1]),
          l++,
          !(++u >= (c * c - c) / 2));

        );
        l > 0 && ((y[s] /= l), (d[s] /= l), s++);
      }
      if (s < 2) return i;
    }
    (c = s), (i.range = y[c - 1] - y[0]);
    var C = [1].rep(2 * c),
      z = Array(c),
      P = i.A;
    for (f = 0; f < c; f++) {
      switch (e) {
        case "gaussian":
          C[2 * f + 1] = 1 - Math.exp((-1 / P) * Math.pow(y[f] / i.range, 2));
          break;
        case "exponential":
          C[2 * f + 1] = 1 - Math.exp(((-1 / P) * y[f]) / i.range);
          break;
        case "spherical":
          C[2 * f + 1] =
            (y[f] / i.range) * 1.5 - 0.5 * Math.pow(y[f] / i.range, 3);
      }
      z[f] = d[f];
    }
    var k = (function (r, t, n) {
        var e,
          o,
          a = Array(n * t);
        for (e = 0; e < t; e++)
          for (o = 0; o < n; o++) a[o * t + e] = r[e * n + o];
        return a;
      })(C, c, 2),
      q = m(k, C, 2, c, 2),
      N = (q = M(q, v(1 / a, 2), 2, 2)).slice(0);
    A(q, 2) ? w(q, 2) : (x(N, 2), (q = N));
    var F = m(m(q, k, 2, 2, c), z, 2, c, 1);
    (i.nugget = F[0]),
      (i.sill = F[1] * i.range + i.nugget),
      (i.n = t.length),
      (c = t.length);
    var V = Array(c * c);
    for (f = 0; f < c; f++) {
      for (u = 0; u < f; u++)
        (V[f * c + u] = i.model(
          Math.pow(Math.pow(t[f] - t[u], 2) + Math.pow(n[f] - n[u], 2), 0.5),
          i.nugget,
          i.range,
          i.sill,
          i.A
        )),
          (V[u * c + f] = V[f * c + u]);
      V[f * c + f] = i.model(0, i.nugget, i.range, i.sill, i.A);
    }
    var j = M(V, v(o, c), c, c),
      G = j.slice(0);
    A(j, c) ? w(j, c) : (x(G, c), (j = G));
    V = j.slice(0);
    var I = m(j, r, c, c, 1);
    return (i.K = V), (i.M = I), i;
  }),
    (C.predict = function (r, t, n) {
      var e,
        o = Array(n.n);
      for (e = 0; e < n.n; e++)
        o[e] = n.model(
          Math.pow(Math.pow(r - n.x[e], 2) + Math.pow(t - n.y[e], 2), 0.5),
          n.nugget,
          n.range,
          n.sill,
          n.A
        );
      return m(o, n.M, 1, n.n, 1)[0];
    }),
    (C.variance = function (r, t, n) {
      var e,
        o = Array(n.n);
      for (e = 0; e < n.n; e++)
        o[e] = n.model(
          Math.pow(Math.pow(r - n.x[e], 2) + Math.pow(t - n.y[e], 2), 0.5),
          n.nugget,
          n.range,
          n.sill,
          n.A
        );
      return (
        n.model(0, n.nugget, n.range, n.sill, n.A) +
        m(m(o, n.K, 1, n.n, n.n), o, 1, n.n, 1)[0]
      );
    }),
    (C.getGridInfo = function (r, t, n) {
      for (
        var e,
          o,
          a,
          i,
          f = [],
          u = [r[0], r[2]],
          l = [r[1], r[3]],
          s = [t.t.min(), t.t.max()],
          c = u[1] - u[0],
          h = l[1] - l[0],
          g = (1 * c) / (e = n ? Math.ceil(n) : 200),
          p = (1 * h) / (o = Math.ceil(e / (c / h))),
          y = 0;
        y < o;
        y++
      )
        for (var d = 0; d < e; d++)
          (a = r[0] + d * g), (i = r[1] + y * p), f.push(C.predict(a, i, t));
      return {
        grid: f,
        n: e,
        m: o,
        xlim: u,
        ylim: l,
        zlim: s,
        x_resolution: g,
        y_resolution: p,
      };
    }),
    (C.getVectorContour = function (r, t) {
      for (
        var n = d().size([r.n, r.m]).thresholds(t)(r.grid),
          e = { type: "FeatureCollection", features: [] },
          o = function (t) {
            var o = n[t];
            if ("MultiPolygon" === o.type)
              o.coordinates.forEach(function (t) {
                var n = { type: "Polygon", coordinates: [] };
                (n.coordinates = z(t, r)),
                  n.coordinates.length > 0 &&
                    e.features.push({
                      type: "Feature",
                      properties: { value: o.value },
                      geometry: n,
                    });
              });
            else if ("Polygon" === o.type) {
              var a = { type: "Polygon", coordinates: [] };
              (a.coordinates = z(o.coordinates, r)),
                a.coordinates.length > 0 &&
                  e.features.push({
                    type: "Feature",
                    properties: { value: o.value },
                    geometry: a,
                  });
            }
          },
          a = 0;
        a < n.length;
        a++
      )
        o(a);
      return e;
    }),
    (C.drawCanvasContour = function (r, t, n, e, o) {
      var a = t.getContext("2d");
      a.clearRect(0, 0, t.width, t.height);
      for (
        var i = [n[1] - n[0], e[1] - e[0], r.zlim[1] - r.zlim[0]],
          f = r.n,
          u = r.m,
          l = Math.ceil((r.x_resolution * t.width) / (n[1] - n[0])),
          s = Math.ceil((r.y_resolution * t.height) / (e[1] - e[0])),
          c = 0;
        c < u;
        c++
      )
        for (var h = 0; h < f; h++) {
          var g = c * f + h;
          if (null != r.grid[g]) {
            var p = (t.width * (h * r.x_resolution + r.xlim[0] - n[0])) / i[0],
              y =
                t.height * (1 - (c * r.y_resolution + r.ylim[0] - e[0]) / i[1]),
              d = (r.grid[g] - r.zlim[0]) / i[2];
            d < 0 ? (d = 0) : d > 1 && (d = 1),
              (a.fillStyle = o[Math.floor((o.length - 1) * d)]),
              a.fillRect(Math.round(p - l / 2), Math.round(y - s / 2), l, s);
          }
        }
    }),
    (r.drawCanvasContour = function (r, t, n, e, o, a, i) {
      var f = P(r, t, n);
      C.drawCanvasContour(f, e, o, a, i);
    }),
    (r.getVectorContour = function (r, t, n, e) {
      var o = P(r, t, n);
      return C.getVectorContour(o, e);
    }),
    Object.defineProperty(r, "__esModule", { value: !0 });
});
