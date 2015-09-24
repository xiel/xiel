(function() {
	window.jspackager = window.jspackager || {};
	jspackager.devmode = false;
	var tmpList = {
		"base-modules": ["libs/sssl", "libs/zepto", "libs/zepto.callbacks", "libs/zepto.deferred", "libs/zepto.data", "libs/skrollr", "libs/velocity", "init/init-basic"]
	};
	jspackager.jsList = (window.jQuery) ? jQuery.extend(jspackager.jsList || {}, tmpList) : tmpList;
	var basicScript = ["base-modules"],
		srcMatch = /(.*)base-modules\.js$/,
		querys = location.search,
		hash = location.hash,
		scripts, src, path;

	function loadModule(path) {
		for (var j = 0, leng = basicScript.length; j < leng; j = j + 1) {
			if (jspackager.querys['mgnl']) {
				basicScript[j] = basicScript[j].replace(/\./g, '-');
			}
			document.write('<script src="' + path + basicScript[j] + '.js"><\/script>');
		}
	}
	querys = querys.replace(/^\?/, '').split('&');
	var obj = {},
		tmp;
	for (var i = querys.length; i--;) {
		if (querys[i] === '') {
			continue;
		}
		tmp = querys[i].split('=');
		obj[tmp[0]] = (tmp[1] === undefined || tmp[1] === null) ? true : tmp[1];
	}
	jspackager.querys = obj;
	if (hash === '#devmode') {
		basicScript = jspackager.jsList[basicScript];
		jspackager.devmode = true;
	} else {
		if (jspackager.querys['devmode']) {
			basicScript = jspackager.jsList[basicScript];
			jspackager.devmode = true;
		}
	}
	if (jspackager.devmode) {
		scripts = document.getElementsByTagName('script');
		for (var i = 0, len = scripts.length; i < len; i++) {
			src = scripts[i].getAttribute('src');
			if (src) {
				path = srcMatch.exec(src);
				if (path && path[0] && path[1]) {
					jspackager.jsPath = path[1];
					loadModule(path[1]);
				}
			}
		}
	}
})();
if (this.jspackager && !jspackager.devmode) {
	! function() {
		var a = document.getElementsByTagName("script")[0],
			b = a.parentNode,
			c = /ded|co/,
			d = "onload",
			e = "onreadystatechange",
			f = "readyState",
			g = function(g, h) {
				var i = document.createElement("script");
				i[d] = i[e] = function() {
					(!this[f] || c.test(this[f])) && (i[d] = i[e] = null, h && h(i), i = null)
				}, i.async = !0, i.src = g, b.insertBefore(i, a)
			};
		window.sssl = function(a, b) {
			if ("string" == typeof a) return g(a, b), void 0;
			var c = a.shift();
			g(c, function() {
				a.length ? window.sssl(a, b) : b && b()
			})
		}
	}();
	var Zepto = function() {
		function a(a) {
			return null == a ? String(a) : U[V.call(a)] || "object"
		}

		function b(b) {
			return "function" == a(b)
		}

		function c(a) {
			return null != a && a == a.window
		}

		function d(a) {
			return null != a && a.nodeType == a.DOCUMENT_NODE
		}

		function e(b) {
			return "object" == a(b)
		}

		function f(a) {
			return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
		}

		function g(a) {
			return "number" == typeof a.length
		}

		function h(a) {
			return D.call(a, function(a) {
				return null != a
			})
		}

		function i(a) {
			return a.length > 0 ? x.fn.concat.apply([], a) : a
		}

		function j(a) {
			return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}

		function k(a) {
			return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
		}

		function l(a, b) {
			return "number" != typeof b || H[j(a)] ? b : b + "px"
		}

		function m(a) {
			var b, c;
			return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c), F[a]
		}

		function n(a) {
			return "children" in a ? C.call(a.children) : x.map(a.childNodes, function(a) {
				return 1 == a.nodeType ? a : void 0
			})
		}

		function o(a, b, c) {
			for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
		}

		function p(a, b) {
			return null == b ? x(a) : x(a).filter(b)
		}

		function q(a, c, d, e) {
			return b(c) ? c.call(a, d, e) : c
		}

		function r(a, b, c) {
			null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
		}

		function s(a, b) {
			var c = a.className || "",
				d = c && c.baseVal !== v;
			return b === v ? d ? c.baseVal : c : (d ? c.baseVal = b : a.className = b, void 0)
		}

		function t(a) {
			try {
				return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : +a + "" == a ? +a : /^[\[\{]/.test(a) ? x.parseJSON(a) : a) : a
			} catch (b) {
				return a
			}
		}

		function u(a, b) {
			b(a);
			for (var c = 0, d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b)
		}
		var v, w, x, y, z, A, B = [],
			C = B.slice,
			D = B.filter,
			E = window.document,
			F = {},
			G = {},
			H = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			I = /^\s*<(\w+|!)[^>]*>/,
			J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			L = /^(?:body|html)$/i,
			M = /([A-Z])/g,
			N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			O = ["after", "prepend", "before", "append"],
			P = E.createElement("table"),
			Q = E.createElement("tr"),
			R = {
				tr: E.createElement("tbody"),
				tbody: P,
				thead: P,
				tfoot: P,
				td: Q,
				th: Q,
				"*": E.createElement("div")
			},
			S = /complete|loaded|interactive/,
			T = /^[\w-]*$/,
			U = {},
			V = U.toString,
			W = {},
			X = E.createElement("div"),
			Y = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			Z = Array.isArray || function(a) {
				return a instanceof Array
			};
		return W.matches = function(a, b) {
			if (!b || !a || 1 !== a.nodeType) return !1;
			var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
			if (c) return c.call(a, b);
			var d, e = a.parentNode,
				f = !e;
			return f && (e = X).appendChild(a), d = ~W.qsa(e, b).indexOf(a), f && X.removeChild(a), d
		}, z = function(a) {
			return a.replace(/-+(.)?/g, function(a, b) {
				return b ? b.toUpperCase() : ""
			})
		}, A = function(a) {
			return D.call(a, function(b, c) {
				return a.indexOf(b) == c
			})
		}, W.fragment = function(a, b, c) {
			var d, e, g;
			return J.test(a) && (d = x(E.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(K, "<$1></$2>")), b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, d = x.each(C.call(g.childNodes), function() {
				g.removeChild(this)
			})), f(c) && (e = x(d), x.each(c, function(a, b) {
				N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
			})), d
		}, W.Z = function(a, b) {
			return a = a || [], a.__proto__ = x.fn, a.selector = b || "", a
		}, W.isZ = function(a) {
			return a instanceof W.Z
		}, W.init = function(a, c) {
			var d;
			if (!a) return W.Z();
			if ("string" == typeof a)
				if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c), a = null;
				else {
					if (c !== v) return x(c).find(a);
					d = W.qsa(E, a)
				} else {
				if (b(a)) return x(E).ready(a);
				if (W.isZ(a)) return a;
				if (Z(a)) d = h(a);
				else if (e(a)) d = [a], a = null;
				else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c), a = null;
				else {
					if (c !== v) return x(c).find(a);
					d = W.qsa(E, a)
				}
			}
			return W.Z(d, a)
		}, x = function(a, b) {
			return W.init(a, b)
		}, x.extend = function(a) {
			var b, c = C.call(arguments, 1);
			return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
				o(a, c, b)
			}), a
		}, W.qsa = function(a, b) {
			var c, e = "#" == b[0],
				f = !e && "." == b[0],
				g = e || f ? b.slice(1) : b,
				h = T.test(g);
			return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
		}, x.contains = E.documentElement.contains ? function(a, b) {
			return a !== b && a.contains(b)
		} : function(a, b) {
			for (; b && (b = b.parentNode);)
				if (b === a) return !0;
			return !1
		}, x.type = a, x.isFunction = b, x.isWindow = c, x.isArray = Z, x.isPlainObject = f, x.isEmptyObject = function(a) {
			var b;
			for (b in a) return !1;
			return !0
		}, x.inArray = function(a, b, c) {
			return B.indexOf.call(b, a, c)
		}, x.camelCase = z, x.trim = function(a) {
			return null == a ? "" : String.prototype.trim.call(a)
		}, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(a, b) {
			var c, d, e, f = [];
			if (g(a))
				for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c);
			else
				for (e in a) c = b(a[e], e), null != c && f.push(c);
			return i(f)
		}, x.each = function(a, b) {
			var c, d;
			if (g(a)) {
				for (c = 0; c < a.length; c++)
					if (b.call(a[c], c, a[c]) === !1) return a
			} else
				for (d in a)
					if (b.call(a[d], d, a[d]) === !1) return a; return a
		}, x.grep = function(a, b) {
			return D.call(a, b)
		}, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
			U["[object " + b + "]"] = b.toLowerCase()
		}), x.fn = {
			forEach: B.forEach,
			reduce: B.reduce,
			push: B.push,
			sort: B.sort,
			indexOf: B.indexOf,
			concat: B.concat,
			map: function(a) {
				return x(x.map(this, function(b, c) {
					return a.call(b, c, b)
				}))
			},
			slice: function() {
				return x(C.apply(this, arguments))
			},
			ready: function(a) {
				return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded", function() {
					a(x)
				}, !1), this
			},
			get: function(a) {
				return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(a) {
				return B.every.call(this, function(b, c) {
					return a.call(b, c, b) !== !1
				}), this
			},
			filter: function(a) {
				return b(a) ? this.not(this.not(a)) : x(D.call(this, function(b) {
					return W.matches(b, a)
				}))
			},
			add: function(a, b) {
				return x(A(this.concat(x(a, b))))
			},
			is: function(a) {
				return this.length > 0 && W.matches(this[0], a)
			},
			not: function(a) {
				var c = [];
				if (b(a) && a.call !== v) this.each(function(b) {
					a.call(this, b) || c.push(this)
				});
				else {
					var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
					this.forEach(function(a) {
						d.indexOf(a) < 0 && c.push(a)
					})
				}
				return x(c)
			},
			has: function(a) {
				return this.filter(function() {
					return e(a) ? x.contains(this, a) : x(this).find(a).size()
				})
			},
			eq: function(a) {
				return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
			},
			first: function() {
				var a = this[0];
				return a && !e(a) ? a : x(a)
			},
			last: function() {
				var a = this[this.length - 1];
				return a && !e(a) ? a : x(a)
			},
			find: function(a) {
				var b, c = this;
				return b = a ? "object" == typeof a ? x(a).filter(function() {
					var a = this;
					return B.some.call(c, function(b) {
						return x.contains(b, a)
					})
				}) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
					return W.qsa(this, a)
				}) : x()
			},
			closest: function(a, b) {
				var c = this[0],
					e = !1;
				for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
				return x(c)
			},
			parents: function(a) {
				for (var b = [], c = this; c.length > 0;) c = x.map(c, function(a) {
					return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
				});
				return p(b, a)
			},
			parent: function(a) {
				return p(A(this.pluck("parentNode")), a)
			},
			children: function(a) {
				return p(this.map(function() {
					return n(this)
				}), a)
			},
			contents: function() {
				return this.map(function() {
					return C.call(this.childNodes)
				})
			},
			siblings: function(a) {
				return p(this.map(function(a, b) {
					return D.call(n(b.parentNode), function(a) {
						return a !== b
					})
				}), a)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(a) {
				return x.map(this, function(b) {
					return b[a]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
				})
			},
			replaceWith: function(a) {
				return this.before(a).remove()
			},
			wrap: function(a) {
				var c = b(a);
				if (this[0] && !c) var d = x(a).get(0),
					e = d.parentNode || this.length > 1;
				return this.each(function(b) {
					x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
				})
			},
			wrapAll: function(a) {
				if (this[0]) {
					x(this[0]).before(a = x(a));
					for (var b;
						(b = a.children()).length;) a = b.first();
					x(a).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				var c = b(a);
				return this.each(function(b) {
					var d = x(this),
						e = d.contents(),
						f = c ? a.call(this, b) : a;
					e.length ? e.wrapAll(f) : d.append(f)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					x(this).replaceWith(x(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(a) {
				return this.each(function() {
					var b = x(this);
					(a === v ? "none" == b.css("display") : a) ? b.show(): b.hide()
				})
			},
			prev: function(a) {
				return x(this.pluck("previousElementSibling")).filter(a || "*")
			},
			next: function(a) {
				return x(this.pluck("nextElementSibling")).filter(a || "*")
			},
			html: function(a) {
				return 0 in arguments ? this.each(function(b) {
					var c = this.innerHTML;
					x(this).empty().append(q(this, a, b, c))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(a) {
				return 0 in arguments ? this.each(function(b) {
					var c = q(this, a, b, this.textContent);
					this.textContent = null == c ? "" : "" + c
				}) : 0 in this ? this[0].textContent : null
			},
			attr: function(a, b) {
				var c;
				return "string" != typeof a || 1 in arguments ? this.each(function(c) {
					if (1 === this.nodeType)
						if (e(a))
							for (w in a) r(this, w, a[w]);
						else r(this, a, q(this, b, c, this.getAttribute(a)))
				}) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : v
			},
			removeAttr: function(a) {
				return this.each(function() {
					1 === this.nodeType && a.split(" ").forEach(function(a) {
						r(this, a)
					}, this)
				})
			},
			prop: function(a, b) {
				return a = Y[a] || a, 1 in arguments ? this.each(function(c) {
					this[a] = q(this, b, c, this[a])
				}) : this[0] && this[0][a]
			},
			data: function(a, b) {
				var c = "data-" + a.replace(M, "-$1").toLowerCase(),
					d = 1 in arguments ? this.attr(c, b) : this.attr(c);
				return null !== d ? t(d) : v
			},
			val: function(a) {
				return 0 in arguments ? this.each(function(b) {
					this.value = q(this, a, b, this.value)
				}) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(a) {
				if (a) return this.each(function(b) {
					var c = x(this),
						d = q(this, a, b, c.offset()),
						e = c.offsetParent().offset(),
						f = {
							top: d.top - e.top,
							left: d.left - e.left
						};
					"static" == c.css("position") && (f.position = "relative"), c.css(f)
				});
				if (!this.length) return null;
				var b = this[0].getBoundingClientRect();
				return {
					left: b.left + window.pageXOffset,
					top: b.top + window.pageYOffset,
					width: Math.round(b.width),
					height: Math.round(b.height)
				}
			},
			css: function(b, c) {
				if (arguments.length < 2) {
					var d, e = this[0];
					if (!e) return;
					if (d = getComputedStyle(e, ""), "string" == typeof b) return e.style[z(b)] || d.getPropertyValue(b);
					if (Z(b)) {
						var f = {};
						return x.each(b, function(a, b) {
							f[b] = e.style[z(b)] || d.getPropertyValue(b)
						}), f
					}
				}
				var g = "";
				if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
					this.style.removeProperty(j(b))
				});
				else
					for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function() {
						this.style.removeProperty(j(w))
					});
				return this.each(function() {
					this.style.cssText += ";" + g
				})
			},
			index: function(a) {
				return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(a) {
				return a ? B.some.call(this, function(a) {
					return this.test(s(a))
				}, k(a)) : !1
			},
			addClass: function(a) {
				return a ? this.each(function(b) {
					if ("className" in this) {
						y = [];
						var c = s(this),
							d = q(this, a, b, c);
						d.split(/\s+/g).forEach(function(a) {
							x(this).hasClass(a) || y.push(a)
						}, this), y.length && s(this, c + (c ? " " : "") + y.join(" "))
					}
				}) : this
			},
			removeClass: function(a) {
				return this.each(function(b) {
					if ("className" in this) {
						if (a === v) return s(this, "");
						y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function(a) {
							y = y.replace(k(a), " ")
						}), s(this, y.trim())
					}
				})
			},
			toggleClass: function(a, b) {
				return a ? this.each(function(c) {
					var d = x(this),
						e = q(this, a, c, s(this));
					e.split(/\s+/g).forEach(function(a) {
						(b === v ? !d.hasClass(a) : b) ? d.addClass(a): d.removeClass(a)
					})
				}) : this
			},
			scrollTop: function(a) {
				if (this.length) {
					var b = "scrollTop" in this[0];
					return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function() {
						this.scrollTop = a
					} : function() {
						this.scrollTo(this.scrollX, a)
					})
				}
			},
			scrollLeft: function(a) {
				if (this.length) {
					var b = "scrollLeft" in this[0];
					return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function() {
						this.scrollLeft = a
					} : function() {
						this.scrollTo(a, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var a = this[0],
						b = this.offsetParent(),
						c = this.offset(),
						d = L.test(b[0].nodeName) ? {
							top: 0,
							left: 0
						} : b.offset();
					return c.top -= parseFloat(x(a).css("margin-top")) || 0, c.left -= parseFloat(x(a).css("margin-left")) || 0, d.top += parseFloat(x(b[0]).css("border-top-width")) || 0, d.left += parseFloat(x(b[0]).css("border-left-width")) || 0, {
						top: c.top - d.top,
						left: c.left - d.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position");) a = a.offsetParent;
					return a
				})
			}
		}, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function(a) {
			var b = a.replace(/./, function(a) {
				return a[0].toUpperCase()
			});
			x.fn[a] = function(e) {
				var f, g = this[0];
				return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
					g = x(this), g.css(a, q(this, e, b, g[a]()))
				})
			}
		}), O.forEach(function(b, c) {
			var d = c % 2;
			x.fn[b] = function() {
				var b, e, f = x.map(arguments, function(c) {
						return b = a(c), "object" == b || "array" == b || null == c ? c : W.fragment(c)
					}),
					g = this.length > 1;
				return f.length < 1 ? this : this.each(function(a, b) {
					e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null;
					var h = x.contains(E.documentElement, e);
					f.forEach(function(a) {
						if (g) a = a.cloneNode(!0);
						else if (!e) return x(a).remove();
						e.insertBefore(a, b), h && u(a, function(a) {
							null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
						})
					})
				})
			}, x.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
				return x(a)[b](this), this
			}
		}), W.Z.prototype = x.fn, W.uniq = A, W.deserializeValue = t, x.zepto = W, x
	}();
	window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
		function(a) {
			function b(a) {
				return a._zid || (a._zid = m++)
			}

			function c(a, c, f, g) {
				if (c = d(c), c.ns) var h = e(c.ns);
				return (q[b(a)] || []).filter(function(a) {
					return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
				})
			}

			function d(a) {
				var b = ("" + a).split(".");
				return {
					e: b[0],
					ns: b.slice(1).sort().join(" ")
				}
			}

			function e(a) {
				return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
			}

			function f(a, b) {
				return a.del && !s && a.e in t || !!b
			}

			function g(a) {
				return u[a] || s && t[a] || a
			}

			function h(c, e, h, i, k, m, n) {
				var o = b(c),
					p = q[o] || (q[o] = []);
				e.split(/\s/).forEach(function(b) {
					if ("ready" == b) return a(document).ready(h);
					var e = d(b);
					e.fn = h, e.sel = k, e.e in u && (h = function(b) {
						var c = b.relatedTarget;
						return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
					}), e.del = m;
					var o = m || h;
					e.proxy = function(a) {
						if (a = j(a), !a.isImmediatePropagationStopped()) {
							a.data = i;
							var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
							return b === !1 && (a.preventDefault(), a.stopPropagation()), b
						}
					}, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
				})
			}

			function i(a, d, e, h, i) {
				var j = b(a);
				(d || "").split(/\s/).forEach(function(b) {
					c(a, b, e, h).forEach(function(b) {
						delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
					})
				})
			}

			function j(b, c) {
				return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y, function(a, d) {
					var e = c[a];
					b[a] = function() {
						return this[d] = v, e && e.apply(c, arguments)
					}, b[d] = w
				}), (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), b
			}

			function k(a) {
				var b, c = {
					originalEvent: a
				};
				for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
				return j(c, a)
			}
			var l, m = 1,
				n = Array.prototype.slice,
				o = a.isFunction,
				p = function(a) {
					return "string" == typeof a
				},
				q = {},
				r = {},
				s = "onfocusin" in window,
				t = {
					focus: "focusin",
					blur: "focusout"
				},
				u = {
					mouseenter: "mouseover",
					mouseleave: "mouseout"
				};
			r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
				add: h,
				remove: i
			}, a.proxy = function(c, d) {
				var e = 2 in arguments && n.call(arguments, 2);
				if (o(c)) {
					var f = function() {
						return c.apply(d, e ? e.concat(n.call(arguments)) : arguments)
					};
					return f._zid = b(c), f
				}
				if (p(d)) return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) : a.proxy(c[d], c);
				throw new TypeError("expected function")
			}, a.fn.bind = function(a, b, c) {
				return this.on(a, b, c)
			}, a.fn.unbind = function(a, b) {
				return this.off(a, b)
			}, a.fn.one = function(a, b, c, d) {
				return this.on(a, b, c, d, 1)
			};
			var v = function() {
					return !0
				},
				w = function() {
					return !1
				},
				x = /^([A-Z]|returnValue$|layer[XY]$)/,
				y = {
					preventDefault: "isDefaultPrevented",
					stopImmediatePropagation: "isImmediatePropagationStopped",
					stopPropagation: "isPropagationStopped"
				};
			a.fn.delegate = function(a, b, c) {
				return this.on(b, a, c)
			}, a.fn.undelegate = function(a, b, c) {
				return this.off(b, a, c)
			}, a.fn.live = function(b, c) {
				return a(document.body).delegate(this.selector, b, c), this
			}, a.fn.die = function(b, c) {
				return a(document.body).undelegate(this.selector, b, c), this
			}, a.fn.on = function(b, c, d, e, f) {
				var g, j, m = this;
				return b && !p(b) ? (a.each(b, function(a, b) {
					m.on(a, c, d, b, f)
				}), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function(l, m) {
					f && (g = function(a) {
						return i(m, a.type, e), e.apply(this, arguments)
					}), c && (j = function(b) {
						var d, f = a(b.target).closest(c, m).get(0);
						return f && f !== m ? (d = a.extend(k(b), {
							currentTarget: f,
							liveFired: m
						}), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
					}), h(m, b, e, d, c, j || g)
				}))
			}, a.fn.off = function(b, c, d) {
				var e = this;
				return b && !p(b) ? (a.each(b, function(a, b) {
					e.off(a, c, b)
				}), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
					i(this, b, d, c)
				}))
			}, a.fn.trigger = function(b, c) {
				return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b), b._args = c, this.each(function() {
					b.type in t && "function" == typeof this[b.type] ? this[b.type]() : "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
				})
			}, a.fn.triggerHandler = function(b, d) {
				var e, f;
				return this.each(function(g, h) {
					e = k(p(b) ? a.Event(b) : b), e._args = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
						return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0
					})
				}), f
			}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
				a.fn[b] = function(a) {
					return 0 in arguments ? this.bind(b, a) : this.trigger(b)
				}
			}), a.Event = function(a, b) {
				p(a) || (b = a, a = b.type);
				var c = document.createEvent(r[a] || "Events"),
					d = !0;
				if (b)
					for (var e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
				return c.initEvent(a, d, !0), j(c)
			}
		}(Zepto),
		function(a) {
			function b(b, c, d) {
				var e = a.Event(c);
				return a(b).trigger(e, d), !e.isDefaultPrevented()
			}

			function c(a, c, d, e) {
				return a.global ? b(c || s, d, e) : void 0
			}

			function d(b) {
				b.global && 0 === a.active++ && c(b, null, "ajaxStart")
			}

			function e(b) {
				b.global && !--a.active && c(b, null, "ajaxStop")
			}

			function f(a, b) {
				var d = b.context;
				return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : (c(b, d, "ajaxSend", [a, b]), void 0)
			}

			function g(a, b, d, e) {
				var f = d.context,
					g = "success";
				d.success.call(f, a, g, b), e && e.resolveWith(f, [a, g, b]), c(d, f, "ajaxSuccess", [b, d, a]), i(g, b, d)
			}

			function h(a, b, d, e, f) {
				var g = e.context;
				e.error.call(g, d, b, a), f && f.rejectWith(g, [d, b, a]), c(e, g, "ajaxError", [d, e, a || b]), i(b, d, e)
			}

			function i(a, b, d) {
				var f = d.context;
				d.complete.call(f, b, a), c(d, f, "ajaxComplete", [b, d]), e(d)
			}

			function j() {}

			function k(a) {
				return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
			}

			function l(a, b) {
				return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
			}

			function m(b) {
				b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
			}

			function n(b, c, d, e) {
				return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, d = void 0), {
					url: b,
					data: c,
					success: d,
					dataType: e
				}
			}

			function o(b, c, d, e) {
				var f, g = a.isArray(c),
					h = a.isPlainObject(c);
				a.each(c, function(c, i) {
					f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
				})
			}
			var p, q, r = 0,
				s = window.document,
				t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
				u = /^(?:text|application)\/javascript/i,
				v = /^(?:text|application)\/xml/i,
				w = "application/json",
				x = "text/html",
				y = /^\s*$/,
				z = s.createElement("a");
			z.href = window.location.href, a.active = 0, a.ajaxJSONP = function(b, c) {
				if (!("type" in b)) return a.ajax(b);
				var d, e, i = b.jsonpCallback,
					j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r,
					k = s.createElement("script"),
					l = window[j],
					m = function(b) {
						a(k).triggerHandler("error", b || "abort")
					},
					n = {
						abort: m
					};
				return c && c.promise(n), a(k).on("load error", function(f, i) {
					clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c), window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0
				}), f(n, b) === !1 ? (m("abort"), n) : (window[j] = function() {
					d = arguments
				}, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
					m("timeout")
				}, b.timeout)), n)
			}, a.ajaxSettings = {
				type: "GET",
				beforeSend: j,
				success: j,
				error: j,
				complete: j,
				context: null,
				global: !0,
				xhr: function() {
					return new window.XMLHttpRequest
				},
				accepts: {
					script: "text/javascript, application/javascript, application/x-javascript",
					json: w,
					xml: "application/xml, text/xml",
					html: x,
					text: "text/plain"
				},
				crossDomain: !1,
				timeout: 0,
				processData: !0,
				cache: !0
			}, a.ajax = function(b) {
				var c, e = a.extend({}, b || {}),
					i = a.Deferred && a.Deferred();
				for (p in a.ajaxSettings) void 0 === e[p] && (e[p] = a.ajaxSettings[p]);
				d(e), e.crossDomain || (c = s.createElement("a"), c.href = e.url, c.href = c.href, e.crossDomain = z.protocol + "//" + z.host != c.protocol + "//" + c.host), e.url || (e.url = window.location.toString()), m(e);
				var n = e.dataType,
					o = /\?.+=\?/.test(e.url);
				if (o && (n = "jsonp"), e.cache !== !1 && (b && b.cache === !0 || "script" != n && "jsonp" != n) || (e.url = l(e.url, "_=" + Date.now())), "jsonp" == n) return o || (e.url = l(e.url, e.jsonp ? e.jsonp + "=?" : e.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(e, i);
				var r, t = e.accepts[n],
					u = {},
					v = function(a, b) {
						u[a.toLowerCase()] = [a, b]
					},
					w = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol,
					x = e.xhr(),
					A = x.setRequestHeader;
				if (i && i.promise(x), e.crossDomain || v("X-Requested-With", "XMLHttpRequest"), v("Accept", t || "*/*"), (t = e.mimeType || t) && (t.indexOf(",") > -1 && (t = t.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(t)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && v("Content-Type", e.contentType || "application/x-www-form-urlencoded"), e.headers)
					for (q in e.headers) v(q, e.headers[q]);
				if (x.setRequestHeader = v, x.onreadystatechange = function() {
						if (4 == x.readyState) {
							x.onreadystatechange = j, clearTimeout(r);
							var b, c = !1;
							if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == w) {
								n = n || k(e.mimeType || x.getResponseHeader("content-type")), b = x.responseText;
								try {
									"script" == n ? (1, eval)(b) : "xml" == n ? b = x.responseXML : "json" == n && (b = y.test(b) ? null : a.parseJSON(b))
								} catch (d) {
									c = d
								}
								c ? h(c, "parsererror", x, e, i) : g(b, x, e, i)
							} else h(x.statusText || null, x.status ? "error" : "abort", x, e, i)
						}
					}, f(x, e) === !1) return x.abort(), h(null, "abort", x, e, i), x;
				if (e.xhrFields)
					for (q in e.xhrFields) x[q] = e.xhrFields[q];
				var B = "async" in e ? e.async : !0;
				x.open(e.type, e.url, B, e.username, e.password);
				for (q in u) A.apply(x, u[q]);
				return e.timeout > 0 && (r = setTimeout(function() {
					x.onreadystatechange = j, x.abort(), h(null, "timeout", x, e, i)
				}, e.timeout)), x.send(e.data ? e.data : null), x
			}, a.get = function() {
				return a.ajax(n.apply(null, arguments))
			}, a.post = function() {
				var b = n.apply(null, arguments);
				return b.type = "POST", a.ajax(b)
			}, a.getJSON = function() {
				var b = n.apply(null, arguments);
				return b.dataType = "json", a.ajax(b)
			}, a.fn.load = function(b, c, d) {
				if (!this.length) return this;
				var e, f = this,
					g = b.split(/\s/),
					h = n(b, c, d),
					i = h.success;
				return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function(b) {
					f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b), i && i.apply(f, arguments)
				}, a.ajax(h), this
			};
			var A = encodeURIComponent;
			a.param = function(b, c) {
				var d = [];
				return d.add = function(b, c) {
					a.isFunction(c) && (c = c()), null == c && (c = ""), this.push(A(b) + "=" + A(c))
				}, o(d, b, c), d.join("&").replace(/%20/g, "+")
			}
		}(Zepto),
		function(a) {
			a.fn.serializeArray = function() {
				var b, c, d = [],
					e = function(a) {
						return a.forEach ? a.forEach(e) : (d.push({
							name: b,
							value: a
						}), void 0)
					};
				return this[0] && a.each(this[0].elements, function(d, f) {
					c = f.type, b = f.name, b && "fieldset" != f.nodeName.toLowerCase() && !f.disabled && "submit" != c && "reset" != c && "button" != c && "file" != c && ("radio" != c && "checkbox" != c || f.checked) && e(a(f).val())
				}), d
			}, a.fn.serialize = function() {
				var a = [];
				return this.serializeArray().forEach(function(b) {
					a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
				}), a.join("&")
			}, a.fn.submit = function(b) {
				if (0 in arguments) this.bind("submit", b);
				else if (this.length) {
					var c = a.Event("submit");
					this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit()
				}
				return this
			}
		}(Zepto),
		function(a) {
			"__proto__" in {} || a.extend(a.zepto, {
				Z: function(b, c) {
					return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
				},
				isZ: function(b) {
					return "array" === a.type(b) && "__Z" in b
				}
			});
			try {
				getComputedStyle(void 0)
			} catch (b) {
				var c = getComputedStyle;
				window.getComputedStyle = function(a) {
					try {
						return c(a)
					} catch (b) {
						return null
					}
				}
			}
		}(Zepto),
		function(a) {
			a.Callbacks = function(b) {
				b = a.extend({}, b);
				var c, d, e, f, g, h, i = [],
					j = !b.once && [],
					k = function(a) {
						for (c = b.memory && a, d = !0, h = f || 0, f = 0, g = i.length, e = !0; i && g > h; ++h)
							if (i[h].apply(a[0], a[1]) === !1 && b.stopOnFalse) {
								c = !1;
								break
							}
						e = !1, i && (j ? j.length && k(j.shift()) : c ? i.length = 0 : l.disable())
					},
					l = {
						add: function() {
							if (i) {
								var d = i.length,
									h = function(c) {
										a.each(c, function(a, c) {
											"function" == typeof c ? b.unique && l.has(c) || i.push(c) : c && c.length && "string" != typeof c && h(c)
										})
									};
								h(arguments), e ? g = i.length : c && (f = d, k(c))
							}
							return this
						},
						remove: function() {
							return i && a.each(arguments, function(b, c) {
								for (var d;
									(d = a.inArray(c, i, d)) > -1;) i.splice(d, 1), e && (g >= d && --g, h >= d && --h)
							}), this
						},
						has: function(b) {
							return !(!i || !(b ? a.inArray(b, i) > -1 : i.length))
						},
						empty: function() {
							return g = i.length = 0, this
						},
						disable: function() {
							return i = j = c = void 0, this
						},
						disabled: function() {
							return !i
						},
						lock: function() {
							return j = void 0, c || l.disable(), this
						},
						locked: function() {
							return !j
						},
						fireWith: function(a, b) {
							return !i || d && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], e ? j.push(b) : k(b)), this
						},
						fire: function() {
							return l.fireWith(this, arguments)
						},
						fired: function() {
							return !!d
						}
					};
				return l
			}
		}(Zepto),
		function(a) {
			function b(c) {
				var d = [
						["resolve", "done", a.Callbacks({
							once: 1,
							memory: 1
						}), "resolved"],
						["reject", "fail", a.Callbacks({
							once: 1,
							memory: 1
						}), "rejected"],
						["notify", "progress", a.Callbacks({
							memory: 1
						})]
					],
					e = "pending",
					f = {
						state: function() {
							return e
						},
						always: function() {
							return g.done(arguments).fail(arguments), this
						},
						then: function() {
							var c = arguments;
							return b(function(b) {
								a.each(d, function(d, e) {
									var h = a.isFunction(c[d]) && c[d];
									g[e[1]](function() {
										var c = h && h.apply(this, arguments);
										if (c && a.isFunction(c.promise)) c.promise().done(b.resolve).fail(b.reject).progress(b.notify);
										else {
											var d = this === f ? b.promise() : this,
												g = h ? [c] : arguments;
											b[e[0] + "With"](d, g)
										}
									})
								}), c = null
							}).promise()
						},
						promise: function(b) {
							return null != b ? a.extend(b, f) : f
						}
					},
					g = {};
				return a.each(d, function(a, b) {
					var c = b[2],
						h = b[3];
					f[b[1]] = c.add, h && c.add(function() {
						e = h
					}, d[1 ^ a][2].disable, d[2][2].lock), g[b[0]] = function() {
						return g[b[0] + "With"](this === g ? f : this, arguments), this
					}, g[b[0] + "With"] = c.fireWith
				}), f.promise(g), c && c.call(g, g), g
			}
			var c = Array.prototype.slice;
			a.when = function(d) {
				var e, f, g, h = c.call(arguments),
					i = h.length,
					j = 0,
					k = 1 !== i || d && a.isFunction(d.promise) ? i : 0,
					l = 1 === k ? d : b(),
					m = function(a, b, d) {
						return function(f) {
							b[a] = this, d[a] = arguments.length > 1 ? c.call(arguments) : f, d === e ? l.notifyWith(b, d) : --k || l.resolveWith(b, d)
						}
					};
				if (i > 1)
					for (e = new Array(i), f = new Array(i), g = new Array(i); i > j; ++j) h[j] && a.isFunction(h[j].promise) ? h[j].promise().done(m(j, g, h)).fail(l.reject).progress(m(j, f, e)) : --k;
				return k || l.resolveWith(g, h), l.promise()
			}, a.Deferred = b
		}(Zepto),
		function(a) {
			function b(b, d) {
				var i = b[h],
					j = i && e[i];
				if (void 0 === d) return j || c(b);
				if (j) {
					if (d in j) return j[d];
					var k = g(d);
					if (k in j) return j[k]
				}
				return f.call(a(b), d)
			}

			function c(b, c, f) {
				var i = b[h] || (b[h] = ++a.uuid),
					j = e[i] || (e[i] = d(b));
				return void 0 !== c && (j[g(c)] = f), j
			}

			function d(b) {
				var c = {};
				return a.each(b.attributes || i, function(b, d) {
					0 == d.name.indexOf("data-") && (c[g(d.name.replace("data-", ""))] = a.zepto.deserializeValue(d.value))
				}), c
			}
			var e = {},
				f = a.fn.data,
				g = a.camelCase,
				h = a.expando = "Zepto" + +new Date,
				i = [];
			a.fn.data = function(d, e) {
				return void 0 === e ? a.isPlainObject(d) ? this.each(function(b, e) {
					a.each(d, function(a, b) {
						c(e, a, b)
					})
				}) : 0 in this ? b(this[0], d) : void 0 : this.each(function() {
					c(this, d, e)
				})
			}, a.fn.removeData = function(b) {
				return "string" == typeof b && (b = b.split(/\s+/)), this.each(function() {
					var c = this[h],
						d = c && e[c];
					d && a.each(b || d, function(a) {
						delete d[b ? g(this) : a]
					})
				})
			}, ["remove", "empty"].forEach(function(b) {
				var c = a.fn[b];
				a.fn[b] = function() {
					var a = this.find("*");
					return "remove" === b && (a = a.add(this)), a.removeData(), c.call(this)
				}
			})
		}(Zepto),
		function(a, b, c) {
			"use strict";

			function d(c) {
				if (e = b.documentElement, f = b.body, T(), hb = this, c = c || {}, mb = c.constants || {}, c.easing)
					for (var d in c.easing) W[d] = c.easing[d];
				tb = c.edgeStrategy || "set", kb = {
					beforerender: c.beforerender,
					render: c.render,
					keyframe: c.keyframe
				}, lb = c.forceHeight !== !1, lb && (Kb = c.scale || 1), nb = c.mobileDeceleration || y, pb = c.smoothScrolling !== !1, qb = c.smoothScrollingDuration || A, rb = {
					targetTop: hb.getScrollTop()
				}, Sb = (c.mobileCheck || function() {
					return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
				})(), Sb ? (jb = b.getElementById(c.skrollrBody || z), jb && gb(), X(), Eb(e, [s, v], [t])) : Eb(e, [s, u], [t]), hb.refresh(), wb(a, "resize orientationchange", function() {
					var a = e.clientWidth,
						b = e.clientHeight;
					(b !== Pb || a !== Ob) && (Pb = b, Ob = a, Qb = !0)
				});
				var g = U();
				return function h() {
					$(), vb = g(h)
				}(), hb
			}
			var e, f, g = {
					get: function() {
						return hb
					},
					init: function(a) {
						return hb || new d(a)
					},
					VERSION: "0.6.29"
				},
				h = Object.prototype.hasOwnProperty,
				i = a.Math,
				j = a.getComputedStyle,
				k = "touchstart",
				l = "touchmove",
				m = "touchcancel",
				n = "touchend",
				o = "skrollable",
				p = o + "-before",
				q = o + "-between",
				r = o + "-after",
				s = "skrollr",
				t = "no-" + s,
				u = s + "-desktop",
				v = s + "-mobile",
				w = "linear",
				x = 1e3,
				y = .004,
				z = "skrollr-body",
				A = 200,
				B = "start",
				C = "end",
				D = "center",
				E = "bottom",
				F = "___skrollable_id",
				G = /^(?:input|textarea|button|select)$/i,
				H = /^\s+|\s+$/g,
				I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
				J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
				K = /^(@?[a-z\-]+)\[(\w+)\]$/,
				L = /-([a-z0-9_])/g,
				M = function(a, b) {
					return b.toUpperCase()
				},
				N = /[\-+]?[\d]*\.?[\d]+/g,
				O = /\{\?\}/g,
				P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
				Q = /[a-z\-]+-gradient/g,
				R = "",
				S = "",
				T = function() {
					var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
					if (j) {
						var b = j(f, null);
						for (var c in b)
							if (R = c.match(a) || +c == c && b[c].match(a)) break;
						if (!R) return R = S = "", void 0;
						R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
							"-webkit-": "webkit",
							"-moz-": "Moz",
							"-ms-": "ms",
							"-o-": "O"
						}[R]) : S = "-" + R.toLowerCase() + "-"
					}
				},
				U = function() {
					var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
						c = Hb();
					return (Sb || !b) && (b = function(b) {
						var d = Hb() - c,
							e = i.max(0, 1e3 / 60 - d);
						return a.setTimeout(function() {
							c = Hb(), b()
						}, e)
					}), b
				},
				V = function() {
					var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
					return (Sb || !b) && (b = function(b) {
						return a.clearTimeout(b)
					}), b
				},
				W = {
					begin: function() {
						return 0
					},
					end: function() {
						return 1
					},
					linear: function(a) {
						return a
					},
					quadratic: function(a) {
						return a * a
					},
					cubic: function(a) {
						return a * a * a
					},
					swing: function(a) {
						return -i.cos(a * i.PI) / 2 + .5
					},
					sqrt: function(a) {
						return i.sqrt(a)
					},
					outCubic: function(a) {
						return i.pow(a - 1, 3) + 1
					},
					bounce: function(a) {
						var b;
						if (.5083 >= a) b = 3;
						else if (.8489 >= a) b = 9;
						else if (.96208 >= a) b = 27;
						else {
							if (!(.99981 >= a)) return 1;
							b = 91
						}
						return 1 - i.abs(3 * i.cos(1.028 * a * b) / b)
					}
				};
			d.prototype.refresh = function(a) {
				var d, e, f = !1;
				for (a === c ? (f = !0, ib = [], Rb = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
					var g = a[d],
						h = g,
						i = [],
						j = pb,
						k = tb,
						l = !1;
					if (f && F in g && delete g[F], g.attributes) {
						for (var m = 0, n = g.attributes.length; n > m; m++) {
							var p = g.attributes[m];
							if ("data-anchor-target" !== p.name)
								if ("data-smooth-scrolling" !== p.name)
									if ("data-edge-strategy" !== p.name)
										if ("data-emit-events" !== p.name) {
											var q = p.name.match(I);
											if (null !== q) {
												var r = {
													props: p.value,
													element: g,
													eventType: p.name.replace(L, M)
												};
												i.push(r);
												var s = q[1];
												s && (r.constant = s.substr(1));
												var t = q[2];
												/p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
												var u = q[3],
													v = q[4] || u;
												u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Kb))
											}
										} else l = !0;
							else k = p.value;
							else j = "off" !== p.value;
							else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
						}
						if (i.length) {
							var w, x, y;
							!f && F in g ? (y = g[F], w = ib[y].styleAttr, x = ib[y].classAttr) : (y = g[F] = Rb++, w = g.style.cssText, x = Db(g)), ib[y] = {
								element: g,
								styleAttr: w,
								classAttr: x,
								anchorTarget: h,
								keyFrames: i,
								smoothScrolling: j,
								edgeStrategy: k,
								emitEvents: l,
								lastFrameIndex: -1
							}, Eb(g, [o], [])
						}
					}
				}
				for (Ab(), d = 0, e = a.length; e > d; d++) {
					var z = ib[a[d][F]];
					z !== c && (_(z), bb(z))
				}
				return hb
			}, d.prototype.relativeToAbsolute = function(a, b, c) {
				var d = e.clientHeight,
					f = a.getBoundingClientRect(),
					g = f.top,
					h = f.bottom - f.top;
				return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += hb.getScrollTop(), 0 | g + .5
			}, d.prototype.animateTo = function(a, b) {
				b = b || {};
				var d = Hb(),
					e = hb.getScrollTop(),
					f = b.duration === c ? x : b.duration;
				return ob = {
					startTop: e,
					topDiff: a - e,
					targetTop: a,
					duration: f,
					startTime: d,
					endTime: d + f,
					easing: W[b.easing || w],
					done: b.done
				}, ob.topDiff || (ob.done && ob.done.call(hb, !1), ob = c), hb
			}, d.prototype.stopAnimateTo = function() {
				ob && ob.done && ob.done.call(hb, !0), ob = c
			}, d.prototype.isAnimatingTo = function() {
				return !!ob
			}, d.prototype.isMobile = function() {
				return Sb
			}, d.prototype.setScrollTop = function(b, c) {
				return sb = c === !0, Sb ? Tb = i.min(i.max(b, 0), Jb) : a.scrollTo(0, b), hb
			}, d.prototype.getScrollTop = function() {
				return Sb ? Tb : a.pageYOffset || e.scrollTop || f.scrollTop || 0
			}, d.prototype.getMaxScrollTop = function() {
				return Jb
			}, d.prototype.on = function(a, b) {
				return kb[a] = b, hb
			}, d.prototype.off = function(a) {
				return delete kb[a], hb
			}, d.prototype.destroy = function() {
				var a = V();
				a(vb), yb(), Eb(e, [t], [s, u, v]);
				for (var b = 0, d = ib.length; d > b; b++) fb(ib[b].element);
				e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", jb && g.setStyle(jb, "transform", "none"), hb = c, jb = c, kb = c, lb = c, Jb = 0, Kb = 1, mb = c, nb = c, Lb = "down", Mb = -1, Ob = 0, Pb = 0, Qb = !1, ob = c, pb = c, qb = c, rb = c, sb = c, Rb = 0, tb = c, Sb = !1, Tb = 0, ub = c
			};
			var X = function() {
					var d, g, h, j, o, p, q, r, s, t, u, v;
					wb(e, [k, l, m, n].join(" "), function(a) {
						var e = a.changedTouches[0];
						for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
						switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
							case k:
								d && d.blur(), hb.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
								break;
							case l:
								G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, hb.setScrollTop(Tb - r, !0), q = o, u = t;
								break;
							default:
							case m:
							case n:
								var f = g - o,
									w = h - p,
									x = w * w + f * f;
								if (49 > x) {
									if (!G.test(d.tagName)) {
										d.focus();
										var y = b.createEvent("MouseEvents");
										y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
									}
									return
								}
								d = c;
								var z = r / v;
								z = i.max(i.min(z, 3), -3);
								var A = i.abs(z / nb),
									B = z * A + .5 * nb * A * A,
									C = hb.getScrollTop() - B,
									D = 0;
								C > Jb ? (D = (Jb - C) / B, C = Jb) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, hb.animateTo(0 | C + .5, {
									easing: "outCubic",
									duration: A
								})
						}
					}), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
				},
				Y = function() {
					var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
						o = Bb();
					for (j = 0, k = ib.length; k > j; j++)
						for (a = ib[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fb(b), h.frame = hb.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fb(b, !0)), h.frame += m, lb && !h.isEnd && h.frame > Jb && (Jb = h.frame);
					for (Jb = i.max(Jb, Cb()), j = 0, k = ib.length; k > j; j++) {
						for (a = ib[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Jb - h.offset + m);
						a.keyFrames.sort(Ib)
					}
				},
				Z = function(a, b) {
					for (var c = 0, d = ib.length; d > c; c++) {
						var e, f, i = ib[c],
							j = i.element,
							k = i.smoothScrolling ? a : b,
							l = i.keyFrames,
							m = l.length,
							n = l[0],
							s = l[l.length - 1],
							t = k < n.frame,
							u = k > s.frame,
							v = t ? n : s,
							w = i.emitEvents,
							x = i.lastFrameIndex;
						if (t || u) {
							if (t && -1 === i.edge || u && 1 === i.edge) continue;
							switch (t ? (Eb(j, [p], [r, q]), w && x > -1 && (zb(j, n.eventType, Lb), i.lastFrameIndex = -1)) : (Eb(j, [r], [p, q]), w && m > x && (zb(j, s.eventType, Lb), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
								case "reset":
									fb(j);
									continue;
								case "ease":
									k = v.frame;
									break;
								default:
								case "set":
									var y = v.props;
									for (e in y) h.call(y, e) && (f = eb(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
									continue
							}
						} else 0 !== i.edge && (Eb(j, [o, q], [p, r]), i.edge = 0);
						for (var z = 0; m - 1 > z; z++)
							if (k >= l[z].frame && k <= l[z + 1].frame) {
								var A = l[z],
									B = l[z + 1];
								for (e in A.props)
									if (h.call(A.props, e)) {
										var C = (k - A.frame) / (B.frame - A.frame);
										C = A.props[e].easing(C), f = db(A.props[e].value, B.props[e].value, C), f = eb(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
									}
								w && x !== z && ("down" === Lb ? zb(j, A.eventType, Lb) : zb(j, B.eventType, Lb), i.lastFrameIndex = z);
								break
							}
					}
				},
				$ = function() {
					Qb && (Qb = !1, Ab());
					var a, b, d = hb.getScrollTop(),
						e = Hb();
					if (ob) e >= ob.endTime ? (d = ob.targetTop, a = ob.done, ob = c) : (b = ob.easing((e - ob.startTime) / ob.duration), d = 0 | ob.startTop + b * ob.topDiff), hb.setScrollTop(d, !0);
					else if (!sb) {
						var f = rb.targetTop - d;
						f && (rb = {
							startTop: Mb,
							topDiff: d - Mb,
							targetTop: d,
							startTime: Nb,
							endTime: Nb + qb
						}), e <= rb.endTime && (b = W.sqrt((e - rb.startTime) / qb), d = 0 | rb.startTop + b * rb.topDiff)
					}
					if (sb || Mb !== d) {
						Lb = d > Mb ? "down" : Mb > d ? "up" : Lb, sb = !1;
						var h = {
								curTop: d,
								lastTop: Mb,
								maxTop: Jb,
								direction: Lb
							},
							i = kb.beforerender && kb.beforerender.call(hb, h);
						i !== !1 && (Z(d, hb.getScrollTop()), Sb && jb && g.setStyle(jb, "transform", "translate(0, " + -Tb + "px) " + ub), Mb = d, kb.render && kb.render.call(hb, h)), a && a.call(hb, !1)
					}
					Nb = e
				},
				_ = function(a) {
					for (var b = 0, c = a.keyFrames.length; c > b; b++) {
						for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? ab(e) : [e.slice(1)], i[f] = {
							value: e,
							easing: W[d]
						};
						h.props = i
					}
				},
				ab = function(a) {
					var b = [];
					return P.lastIndex = 0, a = a.replace(P, function(a) {
						return a.replace(N, function(a) {
							return 100 * (a / 255) + "%"
						})
					}), S && (Q.lastIndex = 0, a = a.replace(Q, function(a) {
						return S + a
					})), a = a.replace(N, function(a) {
						return b.push(+a), "{?}"
					}), b.unshift(a), b
				},
				bb = function(a) {
					var b, c, d = {};
					for (b = 0, c = a.keyFrames.length; c > b; b++) cb(a.keyFrames[b], d);
					for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) cb(a.keyFrames[b], d)
				},
				cb = function(a, b) {
					var c;
					for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
					for (c in a.props) b[c] = a.props[c]
				},
				db = function(a, b, c) {
					var d, e = a.length;
					if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
					var f = [a[0]];
					for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
					return f
				},
				eb = function(a) {
					var b = 1;
					return O.lastIndex = 0, a[0].replace(O, function() {
						return a[b++]
					})
				},
				fb = function(a, b) {
					a = [].concat(a);
					for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ib[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Eb(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Db(d), d.style.cssText = c.styleAttr, Eb(d, c.classAttr)))
				},
				gb = function() {
					ub = "translateZ(0)", g.setStyle(jb, "transform", ub);
					var a = j(jb),
						b = a.getPropertyValue("transform"),
						c = a.getPropertyValue(S + "transform"),
						d = b && "none" !== b || c && "none" !== c;
					d || (ub = "")
				};
			g.setStyle = function(a, b, c) {
				var d = a.style;
				if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) d[b] = isNaN(c) ? c : "" + (0 | c);
				else if ("float" === b) d.styleFloat = d.cssFloat = c;
				else try {
					R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
				} catch (e) {}
			};
			var hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb = g.addEvent = function(b, c, d) {
					var e = function(b) {
						return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
							b.returnValue = !1, b.defaultPrevented = !0
						}), d.call(this, b)
					};
					c = c.split(" ");
					for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ub.push({
						element: b,
						name: f,
						listener: d
					})
				},
				xb = g.removeEvent = function(a, b, c) {
					b = b.split(" ");
					for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
				},
				yb = function() {
					for (var a, b = 0, c = Ub.length; c > b; b++) a = Ub[b], xb(a.element, a.name, a.listener);
					Ub = []
				},
				zb = function(a, b, c) {
					kb.keyframe && kb.keyframe.call(hb, a, b, c)
				},
				Ab = function() {
					var a = hb.getScrollTop();
					Jb = 0, lb && !Sb && (f.style.height = ""), Y(), lb && !Sb && (f.style.height = Jb + e.clientHeight + "px"), Sb ? hb.setScrollTop(i.min(hb.getScrollTop(), Jb)) : hb.setScrollTop(a, !0), sb = !0
				},
				Bb = function() {
					var a, b, c = e.clientHeight,
						d = {};
					for (a in mb) b = mb[a], "function" == typeof b ? b = b.call(hb) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
					return d
				},
				Cb = function() {
					var a, b = 0;
					return jb && (b = i.max(jb.offsetHeight, jb.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
				},
				Db = function(b) {
					var c = "className";
					return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
				},
				Eb = function(b, d, e) {
					var f = "className";
					if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return b[f] = d, void 0;
					for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Gb(g).replace(Gb(e[h]), " ");
					g = Fb(g);
					for (var j = 0, k = d.length; k > j; j++) - 1 === Gb(g).indexOf(Gb(d[j])) && (g += " " + d[j]);
					b[f] = Fb(g)
				},
				Fb = function(a) {
					return a.replace(H, "")
				},
				Gb = function(a) {
					return " " + a + " "
				},
				Hb = Date.now || function() {
					return +new Date
				},
				Ib = function(a, b) {
					return a.frame - b.frame
				},
				Jb = 0,
				Kb = 1,
				Lb = "down",
				Mb = -1,
				Nb = Hb(),
				Ob = 0,
				Pb = 0,
				Qb = !1,
				Rb = 0,
				Sb = !1,
				Tb = 0,
				Ub = [];
			"function" == typeof define && define.amd ? define([], function() {
				return g
			}) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
		}(window, document),
		function(a) {
			function b(a) {
				var b = a.length,
					d = c.type(a);
				return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
			}
			if (!a.jQuery) {
				var c = function(a, b) {
					return new c.fn.init(a, b)
				};
				c.isWindow = function(a) {
					return null != a && a == a.window
				}, c.type = function(a) {
					return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
				}, c.isArray = Array.isArray || function(a) {
					return "array" === c.type(a)
				}, c.isPlainObject = function(a) {
					var b;
					if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
					try {
						if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
					} catch (d) {
						return !1
					}
					for (b in a);
					return void 0 === b || f.call(a, b)
				}, c.each = function(a, c, d) {
					var e, f = 0,
						g = a.length,
						h = b(a);
					if (d) {
						if (h)
							for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
						else
							for (f in a)
								if (e = c.apply(a[f], d), e === !1) break
					} else if (h)
						for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
					else
						for (f in a)
							if (e = c.call(a[f], f, a[f]), e === !1) break; return a
				}, c.data = function(a, b, e) {
					if (void 0 === e) {
						var f = a[c.expando],
							g = f && d[f];
						if (void 0 === b) return g;
						if (g && b in g) return g[b]
					} else if (void 0 !== b) {
						var f = a[c.expando] || (a[c.expando] = ++c.uuid);
						return d[f] = d[f] || {}, d[f][b] = e, e
					}
				}, c.removeData = function(a, b) {
					var e = a[c.expando],
						f = e && d[e];
					f && c.each(b, function(a, b) {
						delete f[b]
					})
				}, c.extend = function() {
					var a, b, d, e, f, g, h = arguments[0] || {},
						i = 1,
						j = arguments.length,
						k = !1;
					for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
						if (null != (f = arguments[i]))
							for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
					return h
				}, c.queue = function(a, d, e) {
					function f(a, c) {
						var d = c || [];
						return null != a && (b(Object(a)) ? function(a, b) {
							for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
							if (c !== c)
								for (; void 0 !== b[d];) a[e++] = b[d++];
							return a.length = e, a
						}(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
					}
					if (a) {
						d = (d || "fx") + "queue";
						var g = c.data(a, d);
						return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
					}
				}, c.dequeue = function(a, b) {
					c.each(a.nodeType ? [a] : a, function(a, d) {
						b = b || "fx";
						var e = c.queue(d, b),
							f = e.shift();
						"inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
							c.dequeue(d, b)
						}))
					})
				}, c.fn = c.prototype = {
					init: function(a) {
						if (a.nodeType) return this[0] = a, this;
						throw new Error("Not a DOM node.")
					},
					offset: function() {
						var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
							top: 0,
							left: 0
						};
						return {
							top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
							left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
						}
					},
					position: function() {
						function a() {
							for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
							return a || document
						}
						var b = this[0],
							a = a.apply(b),
							d = this.offset(),
							e = /^(?:body|html)$/i.test(a.nodeName) ? {
								top: 0,
								left: 0
							} : c(a).offset();
						return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
							top: d.top - e.top,
							left: d.left - e.left
						}
					}
				};
				var d = {};
				c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
				for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
				c.fn.init.prototype = c.fn, a.Velocity = {
					Utilities: c
				}
			}
		}(window),
		function(a) {
			"object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
		}(function() {
			return function(a, b, c, d) {
				function e(a) {
					for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
						var e = a[b];
						e && d.push(e)
					}
					return d
				}

				function f(a) {
					return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
				}

				function g(a) {
					var b = m.data(a, "velocity");
					return null === b ? d : b
				}

				function h(a) {
					return function(b) {
						return Math.round(b * a) * (1 / a)
					}
				}

				function i(a, c, d, e) {
					function f(a, b) {
						return 1 - 3 * b + 3 * a
					}

					function g(a, b) {
						return 3 * b - 6 * a
					}

					function h(a) {
						return 3 * a
					}

					function i(a, b, c) {
						return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
					}

					function j(a, b, c) {
						return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
					}

					function k(b, c) {
						for (var e = 0; p > e; ++e) {
							var f = j(c, a, d);
							if (0 === f) return c;
							var g = i(c, a, d) - b;
							c -= g / f
						}
						return c
					}

					function l() {
						for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
					}

					function m(b, c, e) {
						var f, g, h = 0;
						do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
						return g
					}

					function n(b) {
						for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
						--e;
						var g = (b - x[e]) / (x[e + 1] - x[e]),
							h = c + g * u,
							i = j(h, a, d);
						return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
					}

					function o() {
						y = !0, (a != c || d != e) && l()
					}
					var p = 4,
						q = .001,
						r = 1e-7,
						s = 10,
						t = 11,
						u = 1 / (t - 1),
						v = "Float32Array" in b;
					if (4 !== arguments.length) return !1;
					for (var w = 0; 4 > w; ++w)
						if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
					a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
					var x = v ? new Float32Array(t) : new Array(t),
						y = !1,
						z = function(b) {
							return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
						};
					z.getControlPoints = function() {
						return [{
							x: a,
							y: c
						}, {
							x: d,
							y: e
						}]
					};
					var A = "generateBezier(" + [a, c, d, e] + ")";
					return z.toString = function() {
						return A
					}, z
				}

				function j(a, b) {
					var c = a;
					return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
				}

				function k(a) {
					if (a) {
						var b = (new Date).getTime(),
							c = t.State.calls.length;
						c > 1e4 && (t.State.calls = e(t.State.calls));
						for (var f = 0; c > f; f++)
							if (t.State.calls[f]) {
								var h = t.State.calls[f],
									i = h[0],
									j = h[2],
									n = h[3],
									o = !!n,
									q = null;
								n || (n = t.State.calls[f][3] = b - 16);
								for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
									var w = i[s],
										y = w.element;
									if (g(y)) {
										var z = !1;
										if (j.display !== d && null !== j.display && "none" !== j.display) {
											if ("flex" === j.display) {
												var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
												m.each(A, function(a, b) {
													v.setPropertyValue(y, "display", b)
												})
											}
											v.setPropertyValue(y, "display", j.display)
										}
										j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
										for (var B in w)
											if ("element" !== B) {
												var C, D = w[B],
													E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
												if (1 === r) C = D.endValue;
												else {
													var F = D.endValue - D.startValue;
													if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
												}
												if (D.currentValue = C, "tween" === B) q = C;
												else {
													if (v.Hooks.registered[B]) {
														var G = v.Hooks.getRoot(B),
															H = g(y).rootPropertyValueCache[G];
														H && (D.rootPropertyValue = H)
													}
													var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
													v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0)
												}
											}
										j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y)
									}
								}
								j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
							}
					}
					t.State.isTicking && x(k)
				}

				function l(a, b) {
					if (!t.State.calls[a]) return !1;
					for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
						var l = c[j].element;
						if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
							g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
							var n = !1;
							m.each(v.Lists.transforms3D, function(a, b) {
								var c = /^scale/.test(b) ? 1 : 0,
									e = g(l).transformCache[b];
								g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
							}), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
						}
						if (!b && f.complete && !f.loop && j === k - 1) try {
							f.complete.call(e, e)
						} catch (o) {
							setTimeout(function() {
								throw o
							}, 1)
						}
						h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) {
							/^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
						}), t(l, "reverse", {
							loop: !0,
							delay: f.delay
						})), f.queue !== !1 && m.dequeue(l, f.queue)
					}
					t.State.calls[a] = !1;
					for (var p = 0, q = t.State.calls.length; q > p; p++)
						if (t.State.calls[p] !== !1) {
							i = !0;
							break
						}
					i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
				}
				var m, n = function() {
						if (c.documentMode) return c.documentMode;
						for (var a = 7; a > 4; a--) {
							var b = c.createElement("div");
							if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
						}
						return d
					}(),
					o = function() {
						var a = 0;
						return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
							var c, d = (new Date).getTime();
							return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
								b(d + c)
							}, c)
						}
					}(),
					p = {
						isString: function(a) {
							return "string" == typeof a
						},
						isArray: Array.isArray || function(a) {
							return "[object Array]" === Object.prototype.toString.call(a)
						},
						isFunction: function(a) {
							return "[object Function]" === Object.prototype.toString.call(a)
						},
						isNode: function(a) {
							return a && a.nodeType
						},
						isNodeList: function(a) {
							return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
						},
						isWrapped: function(a) {
							return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
						},
						isSVG: function(a) {
							return b.SVGElement && a instanceof b.SVGElement
						},
						isEmptyObject: function(a) {
							for (var b in a) return !1;
							return !0
						}
					},
					q = !1;
				if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
				if (7 >= n) return jQuery.fn.velocity = jQuery.fn.animate, void 0;
				var r = 400,
					s = "swing",
					t = {
						State: {
							isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
							isAndroid: /Android/i.test(navigator.userAgent),
							isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
							isChrome: b.chrome,
							isFirefox: /Firefox/i.test(navigator.userAgent),
							prefixElement: c.createElement("div"),
							prefixMatches: {},
							scrollAnchor: null,
							scrollPropertyLeft: null,
							scrollPropertyTop: null,
							isTicking: !1,
							calls: []
						},
						CSS: {},
						Utilities: m,
						Redirects: {},
						Easings: {},
						Promise: b.Promise,
						defaults: {
							queue: "",
							duration: r,
							easing: s,
							begin: d,
							complete: d,
							progress: d,
							display: d,
							visibility: d,
							loop: !1,
							delay: !1,
							mobileHA: !0,
							_cacheValues: !0
						},
						init: function(a) {
							m.data(a, "velocity", {
								isSVG: p.isSVG(a),
								isAnimating: !1,
								computedStyle: null,
								tweensContainer: null,
								rootPropertyValueCache: {},
								transformCache: {}
							})
						},
						hook: null,
						mock: !1,
						version: {
							major: 1,
							minor: 2,
							patch: 2
						},
						debug: !1
					};
				b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
				var u = function() {
					function a(a) {
						return -a.tension * a.x - a.friction * a.v
					}

					function b(b, c, d) {
						var e = {
							x: b.x + d.dx * c,
							v: b.v + d.dv * c,
							tension: b.tension,
							friction: b.friction
						};
						return {
							dx: e.v,
							dv: a(e)
						}
					}

					function c(c, d) {
						var e = {
								dx: c.v,
								dv: a(c)
							},
							f = b(c, .5 * d, e),
							g = b(c, .5 * d, f),
							h = b(c, d, g),
							i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
							j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
						return c.x = c.x + i * d, c.v = c.v + j * d, c
					}
					return function d(a, b, e) {
						var f, g, h, i = {
								x: -1,
								v: 0,
								tension: null,
								friction: null
							},
							j = [0],
							k = 0,
							l = 1e-4,
							m = .016;
						for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m;;)
							if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > l && Math.abs(h.v) > l)) break;
						return f ? function(a) {
							return j[0 | a * (j.length - 1)]
						} : k
					}
				}();
				t.Easings = {
					linear: function(a) {
						return a
					},
					swing: function(a) {
						return .5 - Math.cos(a * Math.PI) / 2
					},
					spring: function(a) {
						return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
					}
				}, m.each([
					["ease", [.25, .1, .25, 1]],
					["ease-in", [.42, 0, 1, 1]],
					["ease-out", [0, 0, .58, 1]],
					["ease-in-out", [.42, 0, .58, 1]],
					["easeInSine", [.47, 0, .745, .715]],
					["easeOutSine", [.39, .575, .565, 1]],
					["easeInOutSine", [.445, .05, .55, .95]],
					["easeInQuad", [.55, .085, .68, .53]],
					["easeOutQuad", [.25, .46, .45, .94]],
					["easeInOutQuad", [.455, .03, .515, .955]],
					["easeInCubic", [.55, .055, .675, .19]],
					["easeOutCubic", [.215, .61, .355, 1]],
					["easeInOutCubic", [.645, .045, .355, 1]],
					["easeInQuart", [.895, .03, .685, .22]],
					["easeOutQuart", [.165, .84, .44, 1]],
					["easeInOutQuart", [.77, 0, .175, 1]],
					["easeInQuint", [.755, .05, .855, .06]],
					["easeOutQuint", [.23, 1, .32, 1]],
					["easeInOutQuint", [.86, 0, .07, 1]],
					["easeInExpo", [.95, .05, .795, .035]],
					["easeOutExpo", [.19, 1, .22, 1]],
					["easeInOutExpo", [1, 0, 0, 1]],
					["easeInCirc", [.6, .04, .98, .335]],
					["easeOutCirc", [.075, .82, .165, 1]],
					["easeInOutCirc", [.785, .135, .15, .86]]
				], function(a, b) {
					t.Easings[b[0]] = i.apply(null, b[1])
				});
				var v = t.CSS = {
					RegEx: {
						isHex: /^#([A-f\d]{3}){1,2}$/i,
						valueUnwrap: /^[A-z]+\((.*)\)$/i,
						wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
						valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
					},
					Lists: {
						colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
						transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
						transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
					},
					Hooks: {
						templates: {
							textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
							boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
							clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
							backgroundPosition: ["X Y", "0% 0%"],
							transformOrigin: ["X Y Z", "50% 50% 0px"],
							perspectiveOrigin: ["X Y", "50% 50%"]
						},
						registered: {},
						register: function() {
							for (var a = 0; a < v.Lists.colors.length; a++) {
								var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
								v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
							}
							var c, d, e;
							if (n)
								for (c in v.Hooks.templates) {
									d = v.Hooks.templates[c], e = d[0].split(" ");
									var f = d[1].match(v.RegEx.valueSplit);
									"Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
								}
							for (c in v.Hooks.templates) {
								d = v.Hooks.templates[c], e = d[0].split(" ");
								for (var a in e) {
									var g = c + e[a],
										h = a;
									v.Hooks.registered[g] = [c, h]
								}
							}
						},
						getRoot: function(a) {
							var b = v.Hooks.registered[a];
							return b ? b[0] : a
						},
						cleanRootPropertyValue: function(a, b) {
							return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
						},
						extractValue: function(a, b) {
							var c = v.Hooks.registered[a];
							if (c) {
								var d = c[0],
									e = c[1];
								return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
							}
							return b
						},
						injectValue: function(a, b, c) {
							var d = v.Hooks.registered[a];
							if (d) {
								var e, f, g = d[0],
									h = d[1];
								return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
							}
							return c
						}
					},
					Normalizations: {
						registered: {
							clip: function(a, b, c) {
								switch (a) {
									case "name":
										return "clip";
									case "extract":
										var d;
										return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
									case "inject":
										return "rect(" + c + ")"
								}
							},
							blur: function(a, b, c) {
								switch (a) {
									case "name":
										return t.State.isFirefox ? "filter" : "-webkit-filter";
									case "extract":
										var d = parseFloat(c);
										if (!d && 0 !== d) {
											var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
											d = e ? e[1] : 0
										}
										return d;
									case "inject":
										return parseFloat(c) ? "blur(" + c + ")" : "none"
								}
							},
							opacity: function(a, b, c) {
								if (8 >= n) switch (a) {
									case "name":
										return "filter";
									case "extract":
										var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
										return c = d ? d[1] / 100 : 1;
									case "inject":
										return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
								} else switch (a) {
									case "name":
										return "opacity";
									case "extract":
										return c;
									case "inject":
										return c
								}
							}
						},
						register: function() {
							9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
							for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
								var b = v.Lists.transformsBase[a];
								v.Normalizations.registered[b] = function(a, c, e) {
									switch (a) {
										case "name":
											return "transform";
										case "extract":
											return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
										case "inject":
											var f = !1;
											switch (b.substr(0, b.length - 1)) {
												case "translate":
													f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
													break;
												case "scal":
												case "scale":
													t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
													break;
												case "skew":
													f = !/(deg|\d)$/i.test(e);
													break;
												case "rotate":
													f = !/(deg|\d)$/i.test(e)
											}
											return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
									}
								}
							}();
							for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
								var b = v.Lists.colors[a];
								v.Normalizations.registered[b] = function(a, c, e) {
									switch (a) {
										case "name":
											return b;
										case "extract":
											var f;
											if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
											else {
												var g, h = {
													black: "rgb(0, 0, 0)",
													blue: "rgb(0, 0, 255)",
													gray: "rgb(128, 128, 128)",
													green: "rgb(0, 128, 0)",
													red: "rgb(255, 0, 0)",
													white: "rgb(255, 255, 255)"
												};
												/^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
											}
											return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
										case "inject":
											return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
									}
								}
							}()
						}
					},
					Names: {
						camelCase: function(a) {
							return a.replace(/-(\w)/g, function(a, b) {
								return b.toUpperCase()
							})
						},
						SVGAttribute: function(a) {
							var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
							return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
						},
						prefixCheck: function(a) {
							if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
							for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
								var e;
								if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
										return a.toUpperCase()
									}), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
							}
							return [a, !1]
						}
					},
					Values: {
						hexToRgb: function(a) {
							var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
								d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
							return a = a.replace(c, function(a, b, c, d) {
								return b + b + c + c + d + d
							}), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
						},
						isCSSNullValue: function(a) {
							return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
						},
						getUnitType: function(a) {
							return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
						},
						getDisplayType: function(a) {
							var b = a && a.tagName.toString().toLowerCase();
							return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
						},
						addClass: function(a, b) {
							a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
						},
						removeClass: function(a, b) {
							a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
						}
					},
					getPropertyValue: function(a, c, e, f) {
						function h(a, c) {
							function e() {
								j && v.setPropertyValue(a, "display", "none")
							}
							var i = 0;
							if (8 >= n) i = m.css(a, c);
							else {
								var j = !1;
								if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
									if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
										var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
										return e(), k
									}
									if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
										var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
										return e(), l
									}
								}
								var o;
								o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
							}
							if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
								var p = h(a, "position");
								("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
							}
							return i
						}
						var i;
						if (v.Hooks.registered[c]) {
							var j = c,
								k = v.Hooks.getRoot(j);
							e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
						} else if (v.Normalizations.registered[c]) {
							var l, o;
							l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
						}
						if (!/^[\d-]/.test(i))
							if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
								if (/^(height|width)$/i.test(c)) try {
									i = a.getBBox()[c]
								} catch (p) {
									i = 0
								} else i = a.getAttribute(c);
								else i = h(a, v.Names.prefixCheck(c)[0]);
						return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
					},
					setPropertyValue: function(a, c, d, e, f) {
						var h = c;
						if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
						else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
						else {
							if (v.Hooks.registered[c]) {
								var i = c,
									j = v.Hooks.getRoot(c);
								e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
							}
							if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
								a.style[h] = d
							} catch (k) {
								t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
							} else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
							t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
						}
						return [h, d]
					},
					flushTransformCache: function(a) {
						function b(b) {
							return parseFloat(v.getPropertyValue(a, b))
						}
						var c = "";
						if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
							var d = {
								translate: [b("translateX"), b("translateY")],
								skewX: [b("skewX")],
								skewY: [b("skewY")],
								scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
								rotate: [b("rotateZ"), 0, 0]
							};
							m.each(g(a).transformCache, function(a) {
								/^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ")" + " ", delete d[a])
							})
						} else {
							var e, f;
							m.each(g(a).transformCache, function(b) {
								return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), c += b + e + " ", void 0)
							}), f && (c = "perspective" + f + " " + c)
						}
						v.setPropertyValue(a, "transform", c)
					}
				};
				v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
					var e = d;
					return a = f(a), m.each(a, function(a, f) {
						if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
						else {
							var h = t.CSS.setPropertyValue(f, b, c);
							"transform" === h[0] && t.CSS.flushTransformCache(f), e = h
						}
					}), e
				};
				var w = function() {
					function a() {
						return h ? B.promise || null : i
					}

					function e() {
						function a() {
							function a(a, b) {
								var c = d,
									e = d,
									g = d;
								return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
							}

							function l(a, b) {
								var c, d;
								return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
									return c = a, ""
								}), c || (c = v.Values.getUnitType(a)), [d, c]
							}

							function n() {
								var a = {
										myParent: f.parentNode || c.body,
										position: v.getPropertyValue(f, "position"),
										fontSize: v.getPropertyValue(f, "fontSize")
									},
									d = a.position === I.lastPosition && a.myParent === I.lastParent,
									e = a.fontSize === I.lastFontSize;
								I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
								var h = 100,
									i = {};
								if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
								else {
									var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
									t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
										t.CSS.setPropertyValue(j, b, "hidden")
									}), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
										t.CSS.setPropertyValue(j, b, h + "%")
									}), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
								}
								return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
							}
							if (h.begin && 0 === y) try {
								h.begin.call(o, o)
							} catch (r) {
								setTimeout(function() {
									throw r
								}, 1)
							}
							if ("scroll" === C) {
								var u, w, z, A = /^x$/i.test(h.axis) ? "Left" : "Top",
									D = parseFloat(h.offset) || 0;
								h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, u = h.container["scroll" + A], z = u + m(f).position()[A.toLowerCase()] + D) : h.container = null : (u = t.State.scrollAnchor[t.State["scrollProperty" + A]], w = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], z = m(f).offset()[A.toLowerCase()] + D), i = {
									scroll: {
										rootPropertyValue: !1,
										startValue: u,
										currentValue: u,
										endValue: z,
										unitType: "",
										easing: h.easing,
										scrollData: {
											container: h.container,
											direction: A,
											alternateValue: w
										}
									},
									element: f
								}, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
							} else if ("reverse" === C) {
								if (!g(f).tweensContainer) return m.dequeue(f, h.queue), void 0;
								"none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
								var E = m.extend(!0, {}, g(f).tweensContainer);
								for (var F in E)
									if ("element" !== F) {
										var G = E[F].startValue;
										E[F].startValue = E[F].currentValue = E[F].endValue, E[F].endValue = G, p.isEmptyObject(s) || (E[F].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(E[F]), f)
									}
								i = E
							} else if ("start" === C) {
								var E;
								g(f).tweensContainer && g(f).isAnimating === !0 && (E = g(f).tweensContainer), m.each(q, function(b, c) {
									if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(b)) {
										var e = a(c, !0),
											f = e[0],
											g = e[1],
											h = e[2];
										if (v.RegEx.isHex.test(f)) {
											for (var i = ["Red", "Green", "Blue"], j = v.Values.hexToRgb(f), k = h ? v.Values.hexToRgb(h) : d, l = 0; l < i.length; l++) {
												var m = [j[l]];
												g && m.push(g), k !== d && m.push(k[l]), q[b + i[l]] = m
											}
											delete q[b]
										}
									}
								});
								for (var H in q) {
									var K = a(q[H]),
										L = K[0],
										M = K[1],
										N = K[2];
									H = v.Names.camelCase(H);
									var O = v.Hooks.getRoot(H),
										P = !1;
									if (g(f).isSVG || "tween" === O || v.Names.prefixCheck(O)[1] !== !1 || v.Normalizations.registered[O] !== d) {
										(h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(H) && !N && 0 !== L && (N = 0), h._cacheValues && E && E[H] ? (N === d && (N = E[H].endValue + E[H].unitType), P = g(f).rootPropertyValueCache[O]) : v.Hooks.registered[H] ? N === d ? (P = v.getPropertyValue(f, O), N = v.getPropertyValue(f, H, P)) : P = v.Hooks.templates[O][1] : N === d && (N = v.getPropertyValue(f, H));
										var Q, R, S, T = !1;
										if (Q = l(H, N), N = Q[0], S = Q[1], Q = l(H, L), L = Q[0].replace(/^([+-\/*])=/, function(a, b) {
												return T = b, ""
											}), R = Q[1], N = parseFloat(N) || 0, L = parseFloat(L) || 0, "%" === R && (/^(fontSize|lineHeight)$/.test(H) ? (L /= 100, R = "em") : /^scale/.test(H) ? (L /= 100, R = "") : /(Red|Green|Blue)$/i.test(H) && (L = 255 * (L / 100), R = "")), /[\/*]/.test(T)) R = S;
										else if (S !== R && 0 !== N)
											if (0 === L) R = S;
											else {
												e = e || n();
												var U = /margin|padding|left|right|width|text|word|letter/i.test(H) || /X$/.test(H) || "x" === H ? "x" : "y";
												switch (S) {
													case "%":
														N *= "x" === U ? e.percentToPxWidth : e.percentToPxHeight;
														break;
													case "px":
														break;
													default:
														N *= e[S + "ToPx"]
												}
												switch (R) {
													case "%":
														N *= 1 / ("x" === U ? e.percentToPxWidth : e.percentToPxHeight);
														break;
													case "px":
														break;
													default:
														N *= 1 / e[R + "ToPx"]
												}
											}
										switch (T) {
											case "+":
												L = N + L;
												break;
											case "-":
												L = N - L;
												break;
											case "*":
												L = N * L;
												break;
											case "/":
												L = N / L
										}
										i[H] = {
											rootPropertyValue: P,
											startValue: N,
											currentValue: N,
											endValue: L,
											unitType: R,
											easing: M
										}, t.debug && console.log("tweensContainer (" + H + "): " + JSON.stringify(i[H]), f)
									} else t.debug && console.log("Skipping [" + O + "] due to a lack of browser support.")
								}
								i.element = f
							}
							i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++)
						}
						var e, f = this,
							h = m.extend({}, t.defaults, s),
							i = {};
						switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) {
							t.velocityQueueEntryFlag = !0, g(f).delayTimer = {
								setTimeout: setTimeout(a, parseFloat(h.delay)),
								next: a
							}
						}), h.duration.toString().toLowerCase()) {
							case "fast":
								h.duration = 200;
								break;
							case "normal":
								h.duration = r;
								break;
							case "slow":
								h.duration = 600;
								break;
							default:
								h.duration = parseFloat(h.duration) || 1
						}
						t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
							return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, a(b), void 0)
						}), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
					}
					var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
					if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
						u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
						var x = o.length,
							y = 0;
						if (!/^(stop|finish)$/i.test(q) && !m.isPlainObject(s)) {
							var z = n + 1;
							s = {};
							for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
						}
						var B = {
							promise: null,
							resolver: null,
							rejecter: null
						};
						h && t.Promise && (B.promise = new t.Promise(function(a, b) {
							B.resolver = a, B.rejecter = b
						}));
						var C;
						switch (q) {
							case "scroll":
								C = "scroll";
								break;
							case "reverse":
								C = "reverse";
								break;
							case "finish":
							case "stop":
								m.each(o, function(a, b) {
									g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer)
								});
								var D = [];
								return m.each(t.State.calls, function(a, b) {
									b && m.each(b[1], function(c, e) {
										var f = s === d ? "" : s;
										return f === !0 || b[2].queue === f || s === d && b[2].queue === !1 ? (m.each(o, function(c, d) {
											d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
												p.isFunction(b) && b(null, !0)
											}), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) {
												b.endValue = b.currentValue
											}), D.push(a)) : "finish" === q && (b[2].duration = 1))
										}), void 0) : !0
									})
								}), "stop" === q && (m.each(D, function(a, b) {
									l(b, !0)
								}), B.promise && B.resolver(o)), a();
							default:
								if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
									if (p.isString(q) && t.Redirects[q]) {
										var E = m.extend({}, s),
											F = E.duration,
											G = E.delay || 0;
										return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
											parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
										}), a()
									}
									var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
									return B.promise ? B.rejecter(new Error(H)) : console.log(H), a()
								}
								C = "start"
						}
						var I = {
								lastParent: null,
								lastPosition: null,
								lastFontSize: null,
								lastPercentToPxWidth: null,
								lastPercentToPxHeight: null,
								lastEmToPx: null,
								remToPx: null,
								vwToPx: null,
								vhToPx: null
							},
							J = [];
						m.each(o, function(a, b) {
							p.isNode(b) && e.call(b)
						});
						var K, E = m.extend({}, t.defaults, s);
						if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
							for (var L = 0; K > L; L++) {
								var M = {
									delay: E.delay,
									progress: E.progress
								};
								L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
							}
						return a()
					}
				};
				t = m.extend(w, t), t.animate = w;
				var x = b.requestAnimationFrame || o;
				return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
					c.hidden ? (x = function(a) {
						return setTimeout(function() {
							a(!0)
						}, 16)
					}, k()) : x = b.requestAnimationFrame || o
				}), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
					t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
						var i = m.extend({}, c),
							j = i.begin,
							k = i.complete,
							l = {
								height: "",
								marginTop: "",
								marginBottom: "",
								paddingTop: "",
								paddingBottom: ""
							},
							n = {};
						i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
							j && j.call(g, g);
							for (var c in l) {
								n[c] = a.style[c];
								var d = t.CSS.getPropertyValue(a, c);
								l[c] = "Down" === b ? [d, 0] : [0, d]
							}
							n.overflow = a.style.overflow, a.style.overflow = "hidden"
						}, i.complete = function() {
							for (var b in n) a.style[b] = n[b];
							k && k.call(g, g), h && h.resolver(g)
						}, t(a, l, i)
					}
				}), m.each(["In", "Out"], function(a, b) {
					t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
						var i = m.extend({}, c),
							j = {
								opacity: "In" === b ? 1 : 0
							},
							k = i.complete;
						i.complete = e !== f - 1 ? i.begin = null : function() {
							k && k.call(g, g), h && h.resolver(g)
						}, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
					}
				}), t
			}(window.jQuery || window.Zepto || window, window, document)
		}),
		function(a) {
			function b(b) {
				var c = a("img", b),
					d = c.length,
					e = !1;
				c.css({
					opacity: 0
				}), c.each(function() {
					function c() {
						clearTimeout(g), d--, f.trigger("mediaLoaded"), 1 > d && a(b).trigger("allMediaLoaded", [{
							withTimeout: e
						}]), f.velocity({
							opacity: 1
						}, {
							duration: 1e3
						})
					}
					var f = a(this);
					if (f.prop("complete")) return c(), void 0;
					f.one("load", function() {
						c()
					});
					var g = setTimeout(function() {
						e = !0, c()
					}, 3e3)
				}), 1 > d && a(b).trigger("allMediaLoaded", [{
					withTimeout: e
				}])
			}

			function c(b) {
				a(".section.projects", b).each(function() {
					function b(b, c) {
						a.ajax({
							url: b,
							data: {
								ajax: !0
							}
						}).done(function(d) {
							var f = a("<div/>").html(d),
								j = a(".section", f);
							r && !c && r.pushState({
								projectLoaded: b,
								scrollYBeforeOpen: e
							}, "", "#!" + b), g ? (g.remove(), g = void 0) : h.css({
								height: 0
							}), g = j, j.appendTo(h).addClass("project--active"), j.height() || 1e3, c || o(j), j.on("allMediaLoaded", function() {
								h.velocity("stop").velocity({
									height: c ? 0 : j.height()
								}, {
									duration: Math.abs(h.height() - j.height()) / 2,
									complete: function() {
										h.css({
											height: ""
										}), i(j)
									}
								})
							}), j.trigger("dommodified")
						})
					}

					function c() {
						return g ? (r && r.pushState({}, "", location.href.replace(location.hash || "#", "")), h.velocity("stop").velocity({
							height: 0
						}, {
							duration: h.height() / 3,
							complete: function() {
								g && (g.remove(), g = void 0)
							}
						}), setTimeout(function() {
							e && a("html").velocity("stop").velocity("scroll", {
								offset: e,
								duration: Math.abs(window.scrollY - e) / 2,
								mobileHA: !1
							}), d && i(d)
						}, 10), void 0) : !1
					}
					var d, e, f = a(this),
						g = void 0,
						h = a("<div/>").addClass("project-slide-wrapper").insertAfter(f);
					r && r.state && r.state.projectLoaded && (e = r.state.scrollYBeforeOpen, b(r.state.projectLoaded, !0)), a(window).on("popstate", function() {
						r && r.state && r.state.projectLoaded && (e = r.state.scrollYBeforeOpen, b(r.state.projectLoaded, !0))
					}), h.on("click", ".close-btn", function(a) {
						c(), a.preventDefault()
					}), h.on("keyup", function(a) {
						var b = a.keyCode ? a.keyCode : a.which;
						27 === b && g && (c(), a.preventDefault())
					}), f.on("click", "a.project-teaser", function(c) {
						var f = a(this);
						d = f.parent(), e = window.scrollY, c.preventDefault(), b(f.attr("href"))
					})
				})
			}

			function d() {
				function b(a) {
					a.addClass("btn--busy"), a.text(a.data("busyText")), a.prop("disabled", !0)
				}

				function c(a) {
					a.removeClass("btn--busy"), a.text(a.data("text")), a.prop("disabled", !1)
				}
				a(document).on("submit", ".contactform", function(d) {
					var e = a(d.target),
						f = a("button[data-busy-text]", e);
					f.each(function() {
						var d = a(this);
						d.data("text", d.text()), b(d);
						var f = setTimeout(function() {
							c(d)
						}, 2e4);
						e.one("submitDone", function() {
							clearTimeout(f), c(d)
						})
					})
				})
			}

			function e() {
				a(document).on("submit", ".contactform", function(b) {
					var c = a(b.target),
						d = c.closest(".section"),
						e = c.serialize() + "&ajax=" + +new Date,
						f = d.height();
					a.ajax({
						url: c.attr("action"),
						type: c.attr("method") || "POST",
						data: e
					}).done(function(b) {
						var c = a("<div/>").html(b),
							e = a(".section", c);
						d.replaceWith(e), e.css({
							minHeight: f
						}), e.trigger("dommodified");
						var g = a("input:invalid, textarea:invalid", e).first();
						o(g.length ? g : e), g.focus()
					}).always(function() {
						c.trigger("submitDone")
					}), b.preventDefault()
				})
			}

			function f() {
				(window.requestAnimationFrame || window.webkitRequestAnimationFrame) && skrollr.init({
					mobileCheck: function() {
						return !1
					}
				})
			}

			function g() {
				a(document).on("blur", "input, textarea", function(b) {
					var c = a(b.target),
						d = c.is(":valid"),
						e = c.closest(".field");
					d ? e.removeClass("field--error") : e.addClass("field--error")
				})
			}

			function h() {
				a(document).on("click", ".toggle-btn", function(b) {
					var c = a(this),
						d = c.prop("hash") || c.attr("href"),
						e = a(d).first(),
						f = c.data("toggle") || "toggle";
					e.length && (j(e), e.toggleClass(f), e.hasClass(f) || n(e) || o(e, !0), e.hasClass(f) || i(e), b.preventDefault())
				})
			}

			function i(b) {
				var c = a(b),
					d = a("h1, h2, h2, h3, a, p, a", c),
					e = d.first(),
					f = e.prop("tabIndex");
				setTimeout(function() {
					(void 0 === f || -1 === f || f === !1) && (e.prop("tabindex", -1), e.one("blur", function() {
						e.prop("tabindex", f)
					})), e.focus()
				}, 100)
			}

			function j(b) {
				var c = a(b),
					d = void 0 === c.data("slideClosed") ? 0 === c.height() : c.data("slideClosed");
				d ? k(c) : l(c)
			}

			function k(b) {
				var c = a(b),
					d = c[0].scrollHeight;
				c.attr("data-slide-closed", !1), c.velocity({
					height: d
				}, {
					duration: d,
					complete: function() {
						c.css("height", "")
					}
				})
			}

			function l(b) {
				var c = a(b),
					d = c[0].scrollHeight;
				c.attr("data-slide-closed", !0), c.velocity({
					height: 0
				}, {
					duration: d,
					complete: function() {
						c.css("height", "")
					}
				})
			}

			function m() {
				a(document).on("click", "a[data-jump]", function(b) {
					var c = a(this),
						d = c.data("jump") || c.prop("hash") || c.attr("href"),
						e = a(d).first();
					e.length && (o(e, !0), b.preventDefault())
				})
			}

			function n(b) {
				var c = a(b),
					d = window.innerHeight,
					e = c.height() || c[0].scrollHeight,
					f = c.offset().top,
					g = f + e,
					h = window.scrollY,
					i = window.scrollY + d;
				return f >= h && i >= g || e > d && h >= f && g >= i ? !0 : !1
			}

			function o(b, c) {
				var d = a(b).first(),
					e = 0,
					f = 500,
					g = 3e3,
					h = d.offset().top;
				if (c) {
					var i = d.height() || d[0].scrollHeight,
						j = window.innerHeight;
					j > i && (h = h - j + i, h += (j - i) / 2)
				}
				var k = h - window.scrollY;
				e = Math.round(.7 * Math.abs(k)), e = Math.max(f, Math.min(g, e)), a("html").velocity("stop").velocity("scroll", {
					offset: h,
					duration: e,
					mobileHA: !1,
					complete: function() {}
				})
			}

			function p() {
				var a = window._paq || [];
				window._paq = a, a.push(["setCookieDomain", "*.xiel.de"]), a.push(["trackPageView"]), a.push(["enableLinkTracking"]),
					function() {
						var b = "//piwik.xiel.de/";
						a.push(["setTrackerUrl", b + "piwik.php"]), a.push(["setSiteId", 2]);
						var c = document,
							d = c.createElement("script"),
							e = c.getElementsByTagName("script")[0];
						d.type = "text/javascript", d.async = !0, d.defer = !0, d.src = b + "piwik.js", e.parentNode.insertBefore(d, e)
					}();
				var b = function(a) {
					var c = a ? a + a : 10;
					window.Piwik && window.Piwik.getAsyncTracker ? s = window.Piwik.getAsyncTracker() : setTimeout(function() {
						b(c)
					}, c)
				};
				b()
			}
			var q = window.jspackager && window.jspackager.devmode,
				r = "history" in window && window.history.pushState && window.history,
				s = void 0;
			!window.jspackager.devmode && ("xiel.local.de" === location.host || 4 === location.host.split(".").length);
			var t = {
				immediate: function() {
					p()
				},
				domReadyOnce: function() {
					f(), g(), d(), e(), m(), h(), q && (a(document).on("mousedown", function() {
						var b = +new Date;
						a(document).one("mouseup", function(c) {
							+new Date - b >= 1e3 && (a(document.body).toggleClass("grid-visible"), c.preventDefault())
						})
					}), sssl("//" + (location.hostname || "localhost") + ":35731/livereload.js?snipver=1", function() {}))
				},
				everyDomReady: function(a) {
					c(a), b(a)
				}
			};
			! function() {
				for (var a, b = function() {
						window.jspackager && window.jspackager.devmode && e.log(arguments)
					}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b)
			}(), t.immediate(), a(t.domReadyOnce), a(function() {
				t.everyDomReady(document)
			}), a(document).on("dommodified", function(a) {
				t.everyDomReady(a.target)
			})
		}(Zepto);
}
