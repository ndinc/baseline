var Canvas;

Canvas = (function() {
  function Canvas(el) {
    var canvas;
    this.$el = $(el);
    canvas = this.$el.get(0);
    if (!(canvas && canvas.getContext)) {
      return false;
    }
    this.ctx = canvas.getContext('2d');
    this.fps = 100;
    this.speed = 1;
    this.moving = false;
    this.currentNum = 0;
    this._setCurrentTriangle();
    this._drowTriangle();
    this.setClickEvent((function(_this) {
      return function() {
        return _this.next();
      };
    })(this));
  }

  Canvas.prototype._getTriangle = function() {
    var deg, rad, y;
    deg = 60;
    rad = deg * Math.PI / 180;
    y = 150 - (150 / 2) * Math.tan(rad);
    return [
      [
        {
          x: 0,
          y: 150 - (y / 2)
        }, {
          x: 150 / 2,
          y: y - (y / 2)
        }, {
          x: 150,
          y: 150 - (y / 2)
        }
      ], [
        {
          x: 100,
          y: 100
        }, {
          x: 150 / 2,
          y: y - (y / 2)
        }, {
          x: 150,
          y: 150 - (y / 2)
        }
      ], [
        {
          x: 150,
          y: 150
        }, {
          x: 150 / 2,
          y: 150 / 2
        }, {
          x: 150,
          y: 150 - (y / 2)
        }
      ]
    ];
  };

  Canvas.prototype.setClickEvent = function(callback) {
    return this.$el.on('click', (function(_this) {
      return function(e) {
        var $el;
        $el = $(e.currentTarget);
        callback($el);
        return false;
      };
    })(this));
  };

  Canvas.prototype.next = function() {
    this._setCurrentTriangle();
    if (!this.nextTriangle) {
      this.prev();
      return false;
    }
    this.targetTriangle = this.nextTriangle;
    this.currentNum++;
    return this.start();
  };

  Canvas.prototype.prev = function() {
    this._setCurrentTriangle();
    if (!this.prevTriangle) {
      return false;
    }
    this.currentNum--;
    this.targetTriangle = this.prevTriangle;
    return this.start();
  };

  Canvas.prototype.start = function() {
    this.moving = true;
    return this._step();
  };

  Canvas.prototype.stop = function() {
    return this.moving = false;
  };

  Canvas.prototype._movePosition = function() {
    var i, samePosCount, v, _ref;
    samePosCount = 0;
    _ref = this.currentTriangle;
    for (i in _ref) {
      v = _ref[i];
      if (this.currentTriangle[i].y < this.targetTriangle[i].y) {
        this.currentTriangle[i].y = this.targetTriangle[i].y < this.currentTriangle[i].y + this.speed ? this.targetTriangle[i].y : this.currentTriangle[i].y + this.speed;
      } else {
        this.currentTriangle[i].y = this.targetTriangle[i].y > this.currentTriangle[i].y - this.speed ? this.targetTriangle[i].y : this.currentTriangle[i].y - this.speed;
      }
      if (this.currentTriangle[i].x < this.targetTriangle[i].x) {
        this.currentTriangle[i].x = this.targetTriangle[i].x < this.currentTriangle[i].x + this.speed ? this.targetTriangle[i].x : this.currentTriangle[i].x + this.speed;
      } else {
        this.currentTriangle[i].x = this.targetTriangle[i].x > this.currentTriangle[i].x - this.speed ? this.targetTriangle[i].x : this.currentTriangle[i].x - this.speed;
      }
      if (this.currentTriangle[i].y === this.targetTriangle[i].y && this.currentTriangle[i].x === this.targetTriangle[i].x) {
        samePosCount++;
      }
    }
    if (samePosCount === this.currentTriangle.length) {
      return this.stop();
    }
  };

  Canvas.prototype._drowTriangle = function() {
    this.ctx.clearRect(0, 0, 300, 300);
    this.ctx.beginPath();
    this.ctx.moveTo(this.currentTriangle[0].x, this.currentTriangle[0].y);
    this.ctx.lineTo(this.currentTriangle[1].x, this.currentTriangle[1].y);
    this.ctx.lineTo(this.currentTriangle[2].x, this.currentTriangle[2].y);
    this.ctx.closePath();
    this.ctx.fillStyle = 'rgba(255, 0, 0, .1)';
    this.ctx.fill();
    this.ctx.fillStyle = "blue";
    this.ctx.font = "30px 'ＭＳ ゴシック'";
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    return this.ctx.fillText('text', 20, 50);
  };

  Canvas.prototype._setCurrentTriangle = function() {
    var triangles;
    triangles = this._getTriangle();
    this.currentTriangle = triangles[this.currentNum];
    this.nextTriangle = triangles[this.currentNum + 1] ? triangles[this.currentNum + 1] : false;
    return this.prevTriangle = triangles[this.currentNum - 1] ? triangles[this.currentNum - 1] : false;
  };

  Canvas.prototype._step = function() {
    return setTimeout((function(_this) {
      return function() {
        _this._movePosition();
        _this._drowTriangle();
        if (_this.moving) {
          return _this._step();
        }
      };
    })(this), 1000 * 1 / this.fps);
  };

  return Canvas;

})();

var Pjax,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Pjax = (function() {
  function Pjax(options) {
    this.setPopStatsEvent = __bind(this.setPopStatsEvent, this);
    this.options = {
      'el': '.js-pjax_container',
      'cls': 'js-pjax_container',
      'anchor': 'a',
      'beforeFn': function() {},
      'afterFn': function() {},
      'loadScript': true,
      'loadLink': true,
      'scrollSpeed': 500
    };
    $.extend(this.options, options);
    this.mainEl = this.options.el;
    this.$mainEl = $(this.mainEl);
    this.moving = false;
    this.minLoadTime = this.options.scrollSpeed > 500 ? this.options.scrollSpeed + 200 : 700;
    this.$title = $('title');
    this.$body = $('body');
    if ('pushState' in window.history) {
      this.init(true);
    }
  }

  Pjax.prototype.init = function() {
    this.$mainEl.addClass(this.options.cls);
    this.initAnchor();
    this.setPopStatsEvent();
    return this.loadLink('init');
  };

  Pjax.prototype.initAnchor = function() {
    this.setAnchor();
    return this.setClickEvent();
  };

  Pjax.prototype.setAnchor = function() {
    var $anchor, anchors;
    anchors = [];
    $anchor = $(this.options.anchor);
    $anchor.each((function(_this) {
      return function(i, el) {
        var url;
        url = $(el).attr("href");
        if (_this.isSelfDomain(url) && url.match(/jpg|jpeg|png|gif/g) === null && url.indexOf('javascript:') === -1 && url !== '#') {
          return anchors.push(el);
        }
      };
    })(this));
    return this.$anchors = $(anchors);
  };

  Pjax.prototype.isSelfDomain = function(url) {
    return url && (url.indexOf(window.location.host) !== -1 || url.indexOf('http') === -1);
  };

  Pjax.prototype.setClickEvent = function(callback) {
    this.nextFn = callback ? callback : this.defaultCallback;
    this.$anchors.off("click");
    return this.$anchors.on("click", (function(_this) {
      return function(e) {
        var href;
        if (_this.moving === false) {
          href = $(e.currentTarget).attr('href');
          if (href !== window.location.href) {
            _this.moving = true;
            _this.nextFn(href, false);
          }
        }
        return false;
      };
    })(this));
  };

  Pjax.prototype.setPopStatsEvent = function(callback) {
    this.prevFn = callback ? callback : this.defaultCallback;
    return $(window).on('popstate', (function(_this) {
      return function(e) {
        var url;
        url = window.location.href;
        if (_this.isSelfDomain(url)) {
          _this.prevFn(url, true);
          return false;
        }
      };
    })(this));
  };

  Pjax.prototype.loadLink = function($dom) {
    var init;
    if (!$dom) {
      return false;
    }
    init = $dom === 'init' ? true : false;
    $dom = init ? $('html') : $dom;
    this.stylesheets = this.stylesheets ? this.stylesheets : [];
    return $dom.find('[rel=stylesheet]').each((function(_this) {
      return function(i, el) {
        var $el, href;
        $el = $(el);
        href = $el.attr('href');
        if ($.inArray(href, _this.stylesheets) === -1) {
          _this.stylesheets.push(href);
          if (!init) {
            return _this.$body.append('<link rel="stylesheet" href="' + href + '" type="text/css">');
          }
        }
      };
    })(this));
  };

  Pjax.prototype.loadScript = function($dom) {
    if (!$dom) {
      return false;
    }
    $('*').off();
    $(window).off();
    return $dom.find('script').each((function(_this) {
      return function(i, el) {
        var $el, src;
        $el = $(el);
        src = $el.attr('src');
        if (src) {
          _this.$body.append('<script type="text/javascript" src="' + src + '"></script>');
        }
        if ($el.text()) {
          return _this.$body.append('<script type="text/javascript">' + $el.text() + '</script>');
        }
      };
    })(this));
  };

  Pjax.prototype.loadContent = function(url, isPopStatsEvent, callback) {
    var dfd, loadAjax, minTimeout;
    loadAjax = function(url) {
      var dfd;
      dfd = $.Deferred();
      return $.ajax({
        url: url,
        dataType: "html",
        beforeSend: function(xhr) {
          return xhr.setRequestHeader("X-PJAX", "true");
        }
      }).then(function(data) {
        return dfd.resolve(data);
      }, function(e) {
        console.log(e);
        return dfd.reject();
      });
    };
    minTimeout = (function(_this) {
      return function() {
        var dfd;
        dfd = $.Deferred();
        setTimeout(function() {
          return dfd.resolve();
        }, _this.minLoadTime);
        return dfd.promise();
      };
    })(this);
    if (!callback) {
      dfd = $.Deferred();
    }
    $.when(loadAjax(url), minTimeout()).done((function(_this) {
      return function(data) {
        var $dom, bodyClass, dom, mainHtmls, parser, title;
        parser = new DOMParser();
        dom = parser.parseFromString(data, "text/html");
        $dom = $(dom);
        title = $dom.find("title").text();
        bodyClass = $dom.find("body").attr('class');
        mainHtmls = {};
        $dom.find(_this.mainEl).each(function(i, el) {
          var key;
          key = $(el).attr('data-pjax') ? $(el).attr('data-pjax') : 'pjax-default-' + i;
          return mainHtmls[key] = $(el).html();
        });
        if (!isPopStatsEvent) {
          window.history.pushState(null, title, url);
        }
        _this.$title.html(title);
        _this.$body.attr('class', bodyClass);
        if (_this.options.loadLink) {
          _this.loadLink($dom);
        }
        if (_this.options.loadScript) {
          _this.loadScript($dom);
        }
        _this.moving = false;
        if (callback) {
          return callback(mainHtmls);
        } else {
          return dfd.resolve(mainHtmls);
        }
      };
    })(this)).fail((function(_this) {
      return function() {
        _this.moving = false;
        if (!callback) {
          return dfd.reject();
        }
      };
    })(this));
    if (!callback) {
      return dfd.promise();
    }
  };

  Pjax.prototype.defaultCallback = function(url, isPopStatsEvent) {
    if (url.slice('#')[0] === window.location.href && !isPopStatsEvent) {
      this.moving = false;
      return false;
    }
    this.defaultBeforeFn();
    this.options.beforeFn();
    return this.loadContent(url, isPopStatsEvent).done((function(_this) {
      return function(htmls) {
        if (htmls) {
          _this.$mainEl.each(function(i, el) {
            var key;
            key = $(el).attr('data-pjax') ? $(el).attr('data-pjax') : 'pjax-default-' + i;
            return $(el).html(htmls[key]);
          });
          $('[data-bgimage]').each(function(i, el) {
            var src;
            src = $(el).css('background-image').replace(/"|'/g, '').replace(/url\(|\)$/ig, '');
            return _this.$mainEl.prepend($('<img>').attr('src', src).hide());
          });
          _this.$mainEl.imagesLoaded().always(function(instance) {
            _this.defaultAfterFn();
            _this.options.afterFn();
          }).done(function(instance) {}).fail(function() {}).progress(function(instance, image) {});
        } else {
          _this.options.afterFn();
        }
      };
    })(this)).fail(function() {
      return window.location.href = url;
    });
  };

  Pjax.prototype.defaultBeforeFn = function() {
    this.$body.addClass('is-loading');
    if (this.options.scrollSpeed && this.options.scrollSpeed > 0) {
      return $('html,body').animate({
        scrollTop: 0
      }, this.options.scrollSpeed, function() {
        return $(window).scrollTop(0);
      });
    } else {
      return setTimout(function() {
        return $(window).scrollTop(0);
      }, this.options.scrollSpeed);
    }
  };

  Pjax.prototype.defaultAfterFn = function() {
    this.$body.removeClass('is-loading');
    twttr.widgets.load();
    return FB.XFBML.parse();
  };

  return Pjax;

})();

(function(DOMParser) {
  "use strict";
  var DOMParser_proto, real_parseFromString;
  DOMParser_proto = DOMParser.prototype;
  real_parseFromString = DOMParser_proto.parseFromString;
  try {
    if ((new DOMParser).parseFromString("", "text/html")) {
      return;
    }
  } catch (_error) {}
  DOMParser_proto.parseFromString = function(markup, type) {
    var doc;
    if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
      doc = document.implementation.createHTMLDocument("");
      if (markup.toLowerCase().indexOf("<!doctype") > -1) {
        doc.documentElement.innerHTML = markup;
      } else {
        doc.body.innerHTML = markup;
      }
      return doc;
    } else {
      return real_parseFromString.apply(this, arguments_);
    }
  };
})(DOMParser);

var App;

$(function() {
  var app;
  return app = new App();
});

App = (function() {
  function App() {
    this.$body = $('body');
    this.options = {
      'pjax': true,
      'foundation': true
    };
    this.initialize();
  }

  App.prototype.initialize = function() {
    this.pjax = new Pjax({
      el: '#main'
    });
    this.canvas = new Canvas('#main_canvas');
    if (this.$body.hasClass('about')) {
      console.log('about');
    }
    if (this.options.foundation) {
      return $(document).foundation();
    }
  };

  return App;

})();
