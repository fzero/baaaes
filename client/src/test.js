!(function() {
  "use strict";
  var t = { width: 400, height: 600 };
  var e = document.createElement("a");
  function i(t) {
    (e.href = t), e.host || (e.href = e.href);
    var i = e.host;
    e.pathname;
    return (
      "http:" === e.protocol && (i = i.replace(/:80$/, "")),
      "https:" === e.protocol && (i = i.replace(/:443$/, "")),
      {
        host: i,
        pathname: ("/" === e.pathname[0] ? "" : "/") + e.pathname,
        href: e.href
      }
    );
  }
  var r = function() {
      var t = this;
      this._getScriptsInfo().forEach(function(e) {
        t._replaceScript(e);
      });
    },
    n = {
      embedWidgetSitePath: { configurable: !0 },
      widgetName: { configurable: !0 },
      defaultSettings: { configurable: !0 },
      propertiesToWorkWith: { configurable: !0 },
      propertiesToSkipInHash: { configurable: !0 }
    };
  (n.embedWidgetSitePath.get = function() {
    throw new Error("Method must be overridden");
  }),
    (n.widgetName.get = function() {
      throw new Error("Method must be overridden");
    }),
    (n.defaultSettings.get = function() {
      throw new Error("Method must be overridden");
    }),
    (n.propertiesToWorkWith.get = function() {
      return [];
    }),
    (r.prototype.filterRawSettings = function(t) {
      var e = this,
        i = {};
      return (
        Object.keys(t).forEach(function(r) {
          -1 !== e.propertiesToWorkWith.indexOf(r) && (i[r] = t[r]);
        }),
        i
      );
    }),
    (n.propertiesToSkipInHash.get = function() {
      return ["customer", "locale"];
    }),
    (r.prototype._getScriptsInfo = function() {
      var t = (function() {
        if (document.currentScript) return document.currentScript.src;
        for (
          var t = document.getElementsByTagName("script"), e = 0;
          e < t.length;
          e++
        )
          if ("interactive" === t[e].readyState) return t[e].src;
        try {
          throw new Error();
        } catch (t) {
          var i = /\((.*?):\d+:\d+\)\s*$/m.exec(t.stack);
          if (i) return i[1];
        }
        return null;
      })();
      if (!t)
        return (
          console.error(
            "Could not self-replace the script, widget embedding has been aborted"
          ),
          []
        );
      for (
        var e = i(t),
          r = e.host,
          n = e.href,
          o = document.getElementsByTagName("script"),
          a = [],
          s = 0;
        s < o.length;
        s++
      ) {
        var c = o.item(s);
        c.src && i(c.src).href === n && a.push(c);
      }
      var h,
        l = (void 0 === (h = r) && (h = location.host),
        -1 !==
          [
            "i18n.tradingview.com",
            "partial.tradingview.com",
            "www.tradingview.com",
            "wwwcn.tradingview.com"
          ].indexOf(h) ||
        -1 !==
          [
            "d33t3vvu2t2yu5.cloudfront.net",
            "dwq4do82y8xi7.cloudfront.net",
            "s.tradingview.com",
            "s3.tradingview.com"
          ].indexOf(h) ||
        h.match(/^[a-z]{2}\.tradingview\.com/) ||
        h.match(/prod-[^.]+.tradingview.com/)
          ? "battle"
          : -1 !== h.indexOf("tradingview.com")
            ? "staging"
            : h.match(/webcharts/)
              ? "staging_local"
              : (h.match(/^localhost(:\d+)?$/), "local"));
      return a.map(function(t) {
        return { scriptHost: r, scriptEnv: l, scriptElement: t };
      });
    }),
    (r.prototype._replaceScript = function(t) {
      var e = t.scriptEnv,
        i = t.scriptHost,
        r = t.scriptElement;
      this.script = r;
      var n = this._scriptContentToJSON();
      n && (this.settings = this.filterRawSettings(n)),
        (n && this._isValidSettings()) ||
          (console.error("Invalid settings provided, fall back to defaults"),
          (this.settings = this.filterRawSettings(this.defaultSettings)));
      var o,
        a = isNaN(this.settings.height)
          ? this.settings.height
          : this.settings.height + "px",
        s = isNaN(this.settings.width)
          ? this.settings.width
          : this.settings.width + "px";
      this.script.parentNode &&
      this.script.parentNode.classList.contains("tradingview-widget-container")
        ? (this.iframeContainer = this.script.parentNode)
        : (this.iframeContainer = document.createElement("div")),
        (this.iframeContainer.style.width = s),
        (this.iframeContainer.style.height = a),
        this.iframeContainer.appendChild(
          (((o = document.createElement("style")).innerHTML =
            "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Tahoma, Arial, sans-serif !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #38acdb !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #299dcd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\t"),
          o)
        );
      var c = this._extractOldStyleEmbedCopyrightFromDOM(),
        h = c && !this.settings.whitelabel,
        l = this.iframeContainer.querySelector(".tradingview-widget-copyright"),
        d = c || l ? "calc(" + a + " - 32px)" : a;
      (this.settings.utm_source = location.hostname),
        (this.settings.utm_medium = l ? "widget_new" : "widget"),
        (this.settings.utm_campaign = this.widgetName),
        (this.iframe = this._createIframe(d, s, i, e, r.id));
      var p = this.iframeContainer.querySelector(
        ".tradingview-widget-container__widget"
      );
      if (
        (p
          ? (this.script.parentNode.replaceChild(this.iframe, p),
            this.script.parentNode.removeChild(this.script))
          : (this.iframeContainer.appendChild(this.iframe),
            this.script.parentNode.replaceChild(
              this.iframeContainer,
              this.script
            )),
        h)
      ) {
        var g = document.createElement("div");
        (g.style.height = "32px"),
          (g.style.lineHeight = "32px"),
          (g.style.width = s),
          (g.style.textAlign = "center"),
          (g.style.verticalAlign = "middle"),
          (g.innerHTML = c.innerHTML),
          this.iframeContainer.appendChild(g);
      }
    }),
    (r.prototype._iframeSrcBase = function(t, e) {
      var i = "https://s.tradingview.com";
      return (
        "local" === e
          ? (i = "http://" + t)
          : "staging" === e &&
            (i =
              -1 !== t.indexOf("beta.tradingview.com")
                ? "https://betacdn.tradingview.com"
                : "https://" + t),
        this.settings.customer &&
          -1 !== this.propertiesToSkipInHash.indexOf("customer") &&
          (i += "/" + this.settings.customer),
        i + this.embedWidgetSitePath
      );
    }),
    (r.prototype._isValidSettings = function() {
      var t = function(t) {
        if (void 0 === t) return !0;
        var e = parseInt(t) + "%" == t + "";
        return parseInt(t) + "" == t + "" || e;
      };
      return t(this.settings.width) && t(this.settings.height);
    }),
    (r.prototype._buildGetQueryString = function() {
      var t = this.settings.locale;
      return t ? "?locale=" + t : "";
    }),
    (r.prototype._buildHashString = function(t) {
      var e = this,
        i = {};
      return (
        t && (i.frameElementId = t),
        Object.keys(this.settings).forEach(function(t) {
          -1 === e.propertiesToSkipInHash.indexOf(t) && (i[t] = e.settings[t]);
        }),
        Object.keys(i).length > 0
          ? "#" + encodeURIComponent(JSON.stringify(i))
          : ""
      );
    }),
    (r.prototype._scriptContentToJSON = function() {
      var t = this.script.innerHTML.trim();
      try {
        return JSON.parse(t);
      } catch (t) {
        return console.error("Widget settings parse error: " + t), null;
      }
    }),
    (r.prototype._createIframe = function(t, e, i, r, n) {
      var o = document.createElement("iframe");
      n && (o.id = n),
        this.settings.enableScrolling || o.setAttribute("scrolling", "no"),
        o.setAttribute("allowtransparency", !0),
        o.setAttribute("frameborder", 0),
        (o.style.boxSizing = "border-box"),
        (o.style.height = t),
        (o.style.width = e);
      var a =
        this._iframeSrcBase(i, r) +
        this._buildGetQueryString() +
        this._buildHashString(n);
      return o.setAttribute("src", a), o;
    }),
    (r.prototype._extractOldStyleEmbedCopyrightFromDOM = function() {
      return (function(t) {
        if (null === t) return null;
        var e = t.querySelector("#tradingview-copyright"),
          i = t.querySelector("#tradingview-quotes"),
          r = e || i;
        return r && t.removeChild(r), r;
      })(this.script.parentNode);
    }),
    Object.defineProperties(r.prototype, n),
    new ((function(e) {
      function i() {
        e.apply(this, arguments);
      }
      e && (i.__proto__ = e),
        (i.prototype = Object.create(e && e.prototype)),
        (i.prototype.constructor = i);
      var r = {
        embedWidgetSitePath: { configurable: !0 },
        widgetName: { configurable: !0 },
        defaultSettings: { configurable: !0 },
        propertiesToWorkWith: { configurable: !0 }
      };
      return (
        (r.embedWidgetSitePath.get = function() {
          return "/hotlistswidgetembed/";
        }),
        (r.widgetName.get = function() {
          return "hotlists";
        }),
        (r.defaultSettings.get = function() {
          return t;
        }),
        (r.propertiesToWorkWith.get = function() {
          return [
            "belowLineFillColorFalling",
            "belowLineFillColorGrowing",
            "customer",
            "exchange",
            "gridLineColor",
            "height",
            "largeChartUrl",
            "locale",
            "plotLineColorFalling",
            "plotLineColorGrowing",
            "scaleFontColor",
            "showChart",
            "symbolActiveColor",
            "whitelabel",
            "width"
          ];
        }),
        Object.defineProperties(i.prototype, r),
        i
      );
    })(r))();
})();
