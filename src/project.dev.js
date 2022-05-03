window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Den: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aeadeGHa1JJwLL8BFYe9Clx", "Den");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editor: {
          executionOrder: 3
        }
      },
      start: function start() {
        if (this.node.x < 0) return;
        cc.log("den: Hello");
        var inOut = cc.tween(this.node).repeat(3, this.zoomIn().then(this.zoomOut()));
        inOut.then(this.go100px()).then(this.flipDragon()).then(this.prev100px()).then(this.flipDragon()).start();
      },
      zoomIn: function zoomIn() {
        return cc.tween().to(1, {
          scaleX: -2,
          scaleY: 2
        });
      },
      zoomOut: function zoomOut() {
        return cc.tween().to(1, {
          scaleX: -1,
          scaleY: 1
        });
      },
      flipDragon: function flipDragon() {
        return cc.tween().to(.3, {
          scaleX: this.node.scaleX = -this.node.scaleX,
          scaleY: this.node.scaleY
        });
      },
      go100px: function go100px() {
        return cc.tween().to(2, {
          position: cc.v2(100, 0)
        });
      },
      prev100px: function prev100px() {
        return cc.tween().to(2, {
          position: cc.v2(0, 0)
        });
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  Trang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd45fQnRndKVb94KRzppQde", "Trang");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editor: {
          executionOrder: 1
        }
      },
      start: function start() {
        cc.log("trang: Hello");
        cc.log("trang: I'm white");
      },
      update: function update(dt) {
        if (this.node.x > 100) return;
        this.node.angle -= this.node.x * dt * 12.8;
        this.node.x += 1;
      }
    });
    cc._RF.pop();
  }, {} ],
  Vang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28119Z+betAlZiHk9Hnftng", "Vang");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editor: {
          executionOrder: 0
        }
      },
      start: function start() {
        cc.log("vang: Hello");
      },
      update: function update(dt) {
        if (this.node.x > 100) return;
        this.node.x += 1;
      }
    });
    cc._RF.pop();
  }, {} ],
  Xanh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ee2cs5zKNFdocOeM+5DkHY", "Xanh");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editor: {
          executionOrder: 2
        }
      },
      start: function start() {
        cc.log("xanh: hmmmm");
        this.node.runAction(this.jump3Time());
      },
      jump3Time: function jump3Time() {
        return cc.jumpBy(2, cc.v2(0, 0), 50, 3);
      }
    });
    cc._RF.pop();
  }, {} ],
  "use_v2.1-2.2.1_cc.Toggle_event": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a417E7mbJJKLNb++pURgzz", "use_v2.1-2.2.1_cc.Toggle_event");
    "use strict";
    cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = true);
    cc._RF.pop();
  }, {} ]
}, {}, [ "Den", "Trang", "Vang", "Xanh", "use_v2.1-2.2.1_cc.Toggle_event" ]);