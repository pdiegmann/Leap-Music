(function(t) {
	"use strict";

	function e() {
		function e(t) {
			for (var e, i = Array(t.byteLength), s = t.BYTES_PER_ELEMENT, n = 0, r = i.length; r > n; ++n) e = 8 * (n % s), i[n] = (t[0 | n / s] & 255 << e) >>> e;
			return i.__view = t, i
		}

		function i(i, s, h, u) {
			var l, c, f, p, d;
			if (Array.isArray(s))
				if (s.__view)
					if (h === t && (h = 0), u === t && (u = s.length - h), f = i.bytes, i.type === r) l = s.__view.slice(0 | h / f, 0 | (h + u) / f);
					else {
						for (c = s.slice(h, h + u), l = Array(0 | c.length / f), p = 0, d = l.length; d > p; ++p) l[p] = 0;
						for (p = 0, d = c.length; d > p; ++p) l[0 | p / f] += (255 & c[p]) << 8 * (p % f)
					} else l = s.slice();
					else l = "number" == typeof s && s > 0 ? Array(0 | s) : [];
			if (i.type !== r)
				for (p = 0, d = l.length; d > p; ++p) l[p] = 65535 & (+l[p] || 0);
			else
				for (p = 0, d = l.length; d > p; ++p) l[p] = l[p] || 0; if (i.type === n)
				for (p = 0, d = l.length; d > p; ++p) l[p] & 1 << 8 * f - 1 && (l[p] -= 1 << 8 * f);
			return l.__klass = i, l.constructor = window[i.name], l.set = a, l.subarray = o, l.BYTES_PER_ELEMENT = i.bytes, l.byteLength = i.bytes * l.length, l.byteOffset = h || 0, Object.defineProperty(l, "buffer", {
				get: function() {
					return new e(this)
				}
			}), l
		}
		var s = 0,
			n = 1,
			r = 2,
			a = function(e, i) {
				i === t && (i = 0);
				var s, n = Math.min(this.length - i, e.length);
				for (s = 0; n > s; ++s) this[i + s] = e[s]
			}, o = function(e, i) {
				return i === t && (i = this.length), new this.constructor(this.slice(e, i))
			};
		[
			["Int8Array", 1, n],
			["Uint8Array", 1, s],
			["Int16Array", 2, n],
			["Uint16Array", 2, s],
			["Int32Array", 4, n],
			["Uint32Array", 4, s],
			["Float32Array", 4, r],
			["Float64Array", 8, r]
		].forEach(function(t) {
			var e = t[0],
				s = {
					bytes: t[1],
					type: t[2],
					name: e
				};
			window[e] = function(t, e, n) {
				return i.call(this, s, t, e, n)
			}
		})
	}
	"undefined" == typeof Float32Array && e();
	var i = function() {
		return b.apply(null, arguments)
	}, s = Array.prototype.slice,
		n = 0,
		r = 1,
		a = 2,
		o = 3,
		h = [8e3, 11025, 12e3, 16e3, 22050, 24e3, 32e3, 44100, 48e3],
		u = [32, 64, 128, 256],
		l = "13.08.03",
		c = null,
		f = {}, p = {}, d = "undefined" != typeof module && module.exports ? "node" : "undefined" != typeof window ? "browser" : "unknown",
		m = "browser" === d && /(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent),
		v = !1,
		g = 120,
		b = function() {
			var e, i, n = s.call(arguments),
				r = n[0];
			switch (typeof r) {
				case "string":
					f[r] ? e = new f[r](n.slice(1)) : p[r] ? e = p[r](n.slice(1)) : (i = /^(.+?)(?:\.(ar|kr))?$/.exec(r), i && (r = i[1], f[r] ? e = new f[r](n.slice(1)) : p[r] && (e = p[r](n.slice(1))), e && i[2] && e[i[2]]()));
					break;
				case "number":
					e = new O(n);
					break;
				case "boolean":
					e = new D(n);
					break;
				case "function":
					e = new M(n);
					break;
				case "object":
					if (null !== r) {
						if (r instanceof T) return r;
						if (r.context instanceof T) return r.context;
						x(r) ? e = new j(n) : w(r) && (e = new L(n))
					}
			}
			e === t && (e = new R(n.slice(1)), console.warn('T("' + r + '") is not defined.'));
			var a = e._;
			return a.originkey = r, a.meta = _(e), a.emit("init"), e
		}, _ = function(t) {
			for (var e, i, s = t._.meta, n = t; null !== n && n.constructor !== Object;) {
				e = Object.getOwnPropertyNames(n);
				for (var r = 0, a = e.length; a > r; ++r) s[e[r]] || (/^(constructor$|process$|_)/.test(e[r]) ? s[e[r]] = "ignore" : (i = Object.getOwnPropertyDescriptor(n, e[r]), "function" == typeof i.value ? s[e[r]] = "function" : (i.get || i.set) && (s[e[r]] = "property")));
				n = Object.getPrototypeOf(n)
			}
			return s
		};
	Object.defineProperties(i, {
		version: {
			value: l
		},
		envtype: {
			value: d
		},
		envmobile: {
			value: m
		},
		env: {
			get: function() {
				return c.impl.env
			}
		},
		samplerate: {
			get: function() {
				return c.samplerate
			}
		},
		channels: {
			get: function() {
				return c.channels
			}
		},
		cellsize: {
			get: function() {
				return c.cellsize
			}
		},
		currentTime: {
			get: function() {
				return c.currentTime
			}
		},
		isPlaying: {
			get: function() {
				return c.status === r
			}
		},
		isRecording: {
			get: function() {
				return c.status === o
			}
		},
		amp: {
			set: function(t) {
				"number" == typeof t && (c.amp = t)
			},
			get: function() {
				return c.amp
			}
		},
		bpm: {
			set: function(t) {
				"number" == typeof t && t >= 5 && 300 >= t && (g = t)
			},
			get: function() {
				return g
			}
		}
	}), i.bind = function(t, e) {
		return c.bind(t, e), i
	}, i.setup = function(t) {
		return c.setup(t), i
	}, i.play = function() {
		return c.play(), i
	}, i.pause = function() {
		return c.pause(), i
	}, i.reset = function() {
		return c.reset(), c.events.emit("reset"), i
	}, i.on = i.addListener = function(t, e) {
		return c.on(t, e), i
	}, i.once = function(t, e) {
		return c.once(t, e), i
	}, i.off = i.removeListener = function(t, e) {
		return c.off(t, e), i
	}, i.removeAllListeners = function(t) {
		return c.removeAllListeners(t), i
	}, i.listeners = function(t) {
		return c.listeners(t)
	}, i.rec = function() {
		return c.rec.apply(c, arguments)
	}, i.timevalue = function() {
		var t = function(t) {
			var e, i = g;
			return (e = /^bpm(\d+(?:\.\d+)?)/i.exec(t)) && (i = Math.max(5, Math.min(300, +(e[1] || 0)))), i
		};
		return function(e) {
			var s, n, r;
			if (s = /^(\d+(?:\.\d+)?)Hz$/i.exec(e)) return 0 === +s[1] ? 0 : 1e3 / +s[1];
			if (s = /L(\d+)?(\.*)$/i.exec(e)) return n = 1e3 * 60 / t(e) * (4 / (s[1] || 4)), n *= [1, 1.5, 1.75, 1.875][(s[2] || "").length] || 1;
			if (s = /^(\d+(?:\.\d+)?|\.(?:\d+))(min|sec|m)s?$/i.exec(e)) switch (s[2]) {
				case "min":
					return 1e3 * 60 * +(s[1] || 0);
				case "sec":
					return 1e3 * +(s[1] || 0);
				case "m":
					return +(s[1] || 0)
			}
			return (s = /^(?:([0-5]?[0-9]):)?(?:([0-5]?[0-9]):)(?:([0-5]?[0-9]))(?:\.([0-9]{1,3}))?$/.exec(e)) ? (r = 3600 * (s[1] || 0) + 60 * (s[2] || 0) + (s[3] || 0), r = 1e3 * r + (0 | ((s[4] || "") + "00").substr(0, 3))) : (s = /(\d+)\.(\d+)\.(\d+)$/i.exec(e)) ? (r = 480 * (4 * s[1] + +s[2]) + +s[3], 1e3 * 60 / t(e) * (r / 480)) : (s = /(\d+)ticks$/i.exec(e)) ? 1e3 * 60 / t(e) * (s[1] / 480) : (s = /^(\d+)samples(?:\/(\d+)Hz)?$/i.exec(e)) ? 1e3 * s[1] / (s[2] || i.samplerate) : 0
		}
	}();
	var y = i.fn = {
		SignalArray: Float32Array,
		currentTimeIncr: 0,
		emptycell: null,
		FINISHED_STATE: n,
		PLAYING_STATE: r,
		UNSCHEDULED_STATE: a,
		SCHEDULED_STATE: o
	}, w = y.isArray = Array.isArray,
		x = y.isDictionary = function(t) {
			return "object" == typeof t && t.constructor === Object
		};
	y.nop = function() {
		return this
	}, y.isSignalArray = function(t) {
		return t instanceof y.SignalArray ? !0 : Array.isArray(t) && t.__klass && 2 === t.__klass.type ? !0 : !1
	}, y.extend = function(t, e) {
		function i() {
			this.constructor = t
		}
		e = e || T;
		for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
		return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
	}, y.constructorof = function(t, e) {
		for (var i = t && t.prototype; i;) {
			if (i === e.prototype) return !0;
			i = Object.getPrototypeOf(i)
		}
		return !1
	}, y.register = function(t, e) {
		y.constructorof(e, T) ? f[t] = e : p[t] = e
	}, y.alias = function(t, e) {
		f[e] ? f[t] = f[e] : p[e] && (p[t] = p[e])
	}, y.getClass = function(t) {
		return f[t]
	}, y.pointer = function(t, e, i) {
		return e = t.byteOffset + e * t.constructor.BYTES_PER_ELEMENT, "number" == typeof i ? new t.constructor(t.buffer, e, i) : new t.constructor(t.buffer, e)
	}, y.nextTick = function(t) {
		return c.nextTick(t), i
	}, y.fixAR = function(t) {
		t._.ar = !0, t._.aronly = !0
	}, y.fixKR = function(t) {
		t._.ar = !1, t._.kronly = !0
	}, y.changeWithValue = function() {
		var t = this._,
			e = t.value * t.mul + t.add;
		isNaN(e) && (e = 0);
		for (var i = this.cells[0], s = 0, n = i.length; n > s; ++s) i[s] = e
	}, y.changeWithValue.unremovable = !0, y.clone = function(t) {
		var e = new t.constructor([]);
		return e._.ar = t._.ar, e._.mul = t._.mul, e._.add = t._.add, e._.bypassed = t._.bypassed, e
	}, y.timer = function() {
		var t = function(t) {
			return function() {
				-1 === c.timers.indexOf(t) && (c.timers.push(t), c.events.emit("addObject"), t._.emit("start"), y.buddies_start(t))
			}
		}, e = function(t) {
				return function() {
					var e = c.timers.indexOf(t); - 1 !== e && (c.timers.splice(e, 1), t._.emit("stop"), c.events.emit("removeObject"), y.buddies_stop(t))
				}
			};
		return function(i) {
			var s = t(i),
				n = e(i);
			return i.nodeType = T.TIMER, i.start = function() {
				return c.nextTick(s), i
			}, i.stop = function() {
				return c.nextTick(n), i
			}, i
		}
	}(), y.listener = function() {
		var t = function(t) {
			return function() {
				-1 === c.listeners.indexOf(t) && (c.listeners.push(t), c.events.emit("addObject"), t._.emit("listen"), y.buddies_start(t))
			}
		}, e = function(t) {
				return function() {
					var e = c.listeners.indexOf(t); - 1 !== e && (c.listeners.splice(e, 1), t._.emit("unlisten"), c.events.emit("removeObject"), y.buddies_stop(t))
				}
			};
		return function(i) {
			var s = t(i),
				n = e(i);
			return i.nodeType = T.LISTENER, i.listen = function() {
				return arguments.length && i.append.apply(i, arguments), i.nodes.length && c.nextTick(s), i
			}, i.unlisten = function() {
				return arguments.length && i.remove.apply(i, arguments), i.nodes.length || c.nextTick(n), i
			}, i
		}
	}(), y.make_onended = function(t, e) {
		return function() {
			if (t.playbackState = n, "number" == typeof e)
				for (var i = t.cells[0], s = t.cells[1], r = t.cells[2], a = 0, o = s.length; o > a; ++a) i[0] = s[a] = r[a] = e;
			t._.emit("ended")
		}
	}, y.inputSignalAR = function(t) {
		var e, i, s, n, a, o, h = t.cells[0],
			u = t.cells[1],
			l = t.cells[2],
			c = t.nodes,
			f = c.length,
			p = h.length,
			d = t.tickID;
		if (2 === t.numChannels) {
			if (s = !0, 0 !== f) {
				for (e = 0; f > e; ++e)
					if (c[e].playbackState === r) {
						c[e].process(d), u.set(c[e].cells[1]), l.set(c[e].cells[2]), s = !1, ++e;
						break
					}
				for (; f > e; ++e)
					if (c[e].playbackState === r)
						for (c[e].process(d), a = c[e].cells[1], o = c[e].cells[2], i = p; i;) i -= 8, u[i] += a[i], l[i] += o[i], u[i + 1] += a[i + 1], l[i + 1] += o[i + 1], u[i + 2] += a[i + 2], l[i + 2] += o[i + 2], u[i + 3] += a[i + 3], l[i + 3] += o[i + 3], u[i + 4] += a[i + 4], l[i + 4] += o[i + 4], u[i + 5] += a[i + 5], l[i + 5] += o[i + 5], u[i + 6] += a[i + 6], l[i + 6] += o[i + 6], u[i + 7] += a[i + 7], l[i + 7] += o[i + 7]
			}
			s && (u.set(y.emptycell), l.set(y.emptycell))
		} else {
			if (s = !0, 0 !== f) {
				for (e = 0; f > e; ++e)
					if (c[e].playbackState === r) {
						c[e].process(d), h.set(c[e].cells[0]), s = !1, ++e;
						break
					}
				for (; f > e; ++e)
					if (c[e].playbackState === r)
						for (n = c[e].process(d).cells[0], i = p; i;) i -= 8, h[i] += n[i], h[i + 1] += n[i + 1], h[i + 2] += n[i + 2], h[i + 3] += n[i + 3], h[i + 4] += n[i + 4], h[i + 5] += n[i + 5], h[i + 6] += n[i + 6], h[i + 7] += n[i + 7]
			}
			s && h.set(y.emptycell)
		}
	}, y.inputSignalKR = function(t) {
		var e, i = t.nodes,
			s = i.length,
			n = t.tickID,
			a = 0;
		for (e = 0; s > e; ++e) i[e].playbackState === r && (a += i[e].process(n).cells[0][0]);
		return a
	}, y.outputSignalAR = function(t) {
		var e, i = t.cells[0],
			s = t.cells[1],
			n = t.cells[2],
			r = t._.mul,
			a = t._.add;
		if (2 === t.numChannels)
			for (e = i.length; e;) e -= 8, s[e] = s[e] * r + a, n[e] = n[e] * r + a, s[e + 1] = s[e + 1] * r + a, n[e + 1] = n[e + 1] * r + a, s[e + 2] = s[e + 2] * r + a, n[e + 2] = n[e + 2] * r + a, s[e + 3] = s[e + 3] * r + a, n[e + 3] = n[e + 3] * r + a, s[e + 4] = s[e + 4] * r + a, n[e + 4] = n[e + 4] * r + a, s[e + 5] = s[e + 5] * r + a, n[e + 5] = n[e + 5] * r + a, s[e + 6] = s[e + 6] * r + a, n[e + 6] = n[e + 6] * r + a, s[e + 7] = s[e + 7] * r + a, n[e + 7] = n[e + 7] * r + a, i[e] = .5 * (s[e] + n[e]), i[e + 1] = .5 * (s[e + 1] + n[e + 1]), i[e + 2] = .5 * (s[e + 2] + n[e + 2]), i[e + 3] = .5 * (s[e + 3] + n[e + 3]), i[e + 4] = .5 * (s[e + 4] + n[e + 4]), i[e + 5] = .5 * (s[e + 5] + n[e + 5]), i[e + 6] = .5 * (s[e + 6] + n[e + 6]), i[e + 7] = .5 * (s[e + 7] + n[e + 7]);
		else if (1 !== r || 0 !== a)
			for (e = i.length; e;) e -= 8, i[e] = i[e] * r + a, i[e + 1] = i[e + 1] * r + a, i[e + 2] = i[e + 2] * r + a, i[e + 3] = i[e + 3] * r + a, i[e + 4] = i[e + 4] * r + a, i[e + 5] = i[e + 5] * r + a, i[e + 6] = i[e + 6] * r + a, i[e + 7] = i[e + 7] * r + a
	}, y.outputSignalKR = function(t) {
		var e, i = t.cells[0],
			s = t.cells[1],
			n = t.cells[2],
			r = t._.mul,
			a = t._.add,
			o = i[0] * r + a;
		if (2 === t.numChannels)
			for (e = i.length; e;) e -= 8, i[e] = i[e + 1] = i[e + 2] = i[e + 3] = i[e + 4] = i[e + 5] = i[e + 6] = i[e + 7] = s[e] = s[e + 1] = s[e + 2] = s[e + 3] = s[e + 4] = s[e + 5] = s[e + 6] = s[e + 7] = n[e] = n[e + 1] = n[e + 2] = n[e + 3] = n[e + 4] = n[e + 5] = n[e + 6] = n[e + 7] = o;
		else
			for (e = i.length; e;) e -= 8, i[e] = i[e + 1] = i[e + 2] = i[e + 3] = i[e + 4] = i[e + 5] = i[e + 6] = i[e + 7] = o
	}, y.buddies_start = function(t) {
		var e, i, s, n = t._.buddies;
		for (i = 0, s = n.length; s > i; ++i) switch (e = n[i], e.nodeType) {
			case T.DSP:
				e.play();
				break;
			case T.TIMER:
				e.start();
				break;
			case T.LISTENER:
				e.listen()
		}
	}, y.buddies_stop = function(t) {
		var e, i, s, n = t._.buddies;
		for (i = 0, s = n.length; s > i; ++i) switch (e = n[i], e.nodeType) {
			case T.DSP:
				e.pause();
				break;
			case T.TIMER:
				e.stop();
				break;
			case T.LISTENER:
				e.unlisten()
		}
	}, y.fix_iOS6_1_problem = function(t) {
		c.fix_iOS6_1_problem(t)
	};
	var k = i.modules = {}, A = k.EventEmitter = function() {
			function e(t) {
				this.context = t, this.events = {}
			}
			var i = e.prototype;
			return i.emit = function(e) {
				var i = this.events[e];
				if (!i) return !1;
				var n;
				if ("function" == typeof i) {
					switch (arguments.length) {
						case 1:
							i.call(this.context);
							break;
						case 2:
							i.call(this.context, arguments[1]);
							break;
						case 3:
							i.call(this.context, arguments[1], arguments[2]);
							break;
						default:
							n = s.call(arguments, 1), i.apply(this.context, n)
					}
					return !0
				}
				if (w(i)) {
					n = s.call(arguments, 1);
					for (var r = i.slice(), a = 0, o = r.length; o > a; ++a) r[a] instanceof T ? r[a].bang.apply(r[a], n) : r[a].apply(this.context, n);
					return !0
				}
				return i instanceof T ? (n = s.call(arguments, 1), i.bang.apply(i, n), t) : !1
			}, i.on = function(t, e) {
				if ("function" != typeof e && !(e instanceof T)) throw Error("addListener takes instances of Function or timbre.Object");
				var i = this.events;
				return i[t] ? w(i[t]) ? i[t].push(e) : i[t] = [i[t], e] : i[t] = e, this
			}, i.once = function(t, e) {
				var i, s = this;
				if ("function" == typeof e) i = function() {
					s.off(t, i), e.apply(s.context, arguments)
				};
				else {
					if (!(e instanceof T)) throw Error("once takes instances of Function or timbre.Object");
					i = function() {
						s.off(t, i), e.bang.apply(e, arguments)
					}
				}
				return i.listener = e, s.on(t, i), this
			}, i.off = function(t, e) {
				if ("function" != typeof e && !(e instanceof T)) throw Error("removeListener takes instances of Function or timbre.Object");
				var i = this.events;
				if (!i[t]) return this;
				var s = i[t];
				if (w(s)) {
					for (var n = -1, r = 0, a = s.length; a > r; ++r)
						if (s[r] === e || s[r].listener && s[r].listener === e) {
							n = r;
							break
						}
					if (0 > n) return this;
					s.splice(n, 1), 0 === s.length && (i[t] = null)
				} else(s === e || s.listener && s.listener === e) && (i[t] = null);
				return this
			}, i.removeAllListeners = function(t) {
				var e = this.events,
					i = !1,
					s = e[t];
				if (w(s))
					for (var n = s.length; n--;) {
						var r = s[n];
						r.unremovable ? i = !0 : this.off(t, r)
					} else s && (s.unremovable ? i = !0 : this.off(t, s));
				return i || (e[t] = null), this
			}, i.listeners = function(t) {
				var e, i = this.events;
				if (!i[t]) return [];
				if (i = i[t], !w(i)) return i.unremovable ? [] : [i];
				i = i.slice(), e = [];
				for (var s = 0, n = i.length; n > s; ++s) i[s].unremovable || e.push(i[s]);
				return e
			}, e
		}(),
		S = k.Deferred = function() {
			function t(t) {
				this.context = t || this, this._state = "pending", this._doneList = [], this._failList = [], this._promise = new e(this)
			}

			function e(t) {
				this.context = t.context, this.then = t.then, this.done = function() {
					return t.done.apply(t, arguments), this
				}, this.fail = function() {
					return t.fail.apply(t, arguments), this
				}, this.pipe = function() {
					return t.pipe.apply(t, arguments)
				}, this.always = function() {
					return t.always.apply(t, arguments), this
				}, this.promise = function() {
					return this
				}, this.isResolved = function() {
					return t.isResolved()
				}, this.isRejected = function() {
					return t.isRejected()
				}
			}
			var i = t.prototype,
				n = function(t, e, i, s) {
					if ("pending" === this._state) {
						this._state = t;
						for (var n = 0, r = e.length; r > n; ++n) e[n].apply(i, s);
						this._doneList = this._failList = null
					}
				}, r = function(t) {
					return t && "function" == typeof t.promise
				};
			return i.resolve = function() {
				var t = s.call(arguments, 0);
				return n.call(this, "resolved", this._doneList, this.context || this, t), this
			}, i.resolveWith = function(t) {
				var e = s.call(arguments, 1);
				return n.call(this, "resolved", this._doneList, t, e), this
			}, i.reject = function() {
				var t = s.call(arguments, 0);
				return n.call(this, "rejected", this._failList, this.context || this, t), this
			}, i.rejectWith = function(t) {
				var e = s.call(arguments, 1);
				return n.call(this, "rejected", this._failList, t, e), this
			}, i.promise = function() {
				return this._promise
			}, i.done = function() {
				for (var t = s.call(arguments), e = "resolved" === this._state, i = "pending" === this._state, n = this._doneList, r = 0, a = t.length; a > r; ++r) "function" == typeof t[r] && (e ? t[r]() : i && n.push(t[r]));
				return this
			}, i.fail = function() {
				for (var t = s.call(arguments), e = "rejected" === this._state, i = "pending" === this._state, n = this._failList, r = 0, a = t.length; a > r; ++r) "function" == typeof t[r] && (e ? t[r]() : i && n.push(t[r]));
				return this
			}, i.always = function() {
				return this.done.apply(this, arguments), this.fail.apply(this, arguments), this
			}, i.then = function(t, e) {
				return this.done(t).fail(e)
			}, i.pipe = function(e, i) {
				var n = this,
					a = new t(this.context);
				return this.done(function() {
					var t = e.apply(n.context, arguments);
					r(t) ? t.then(function() {
						var e = s.call(arguments);
						a.resolveWith.apply(a, [t].concat(e))
					}) : a.resolveWith(n, t)
				}), this.fail(function() {
					if ("function" == typeof i) {
						var t = i.apply(n.context, arguments);
						r(t) && t.fail(function() {
							var e = s.call(arguments);
							a.rejectWith.apply(a, [t].concat(e))
						})
					} else a.reject.apply(a, arguments)
				}), a.promise()
			}, i.isResolved = function() {
				return "resolved" === this._state
			}, i.isRejected = function() {
				return "rejected" === this._state
			}, i.state = function() {
				return this._state
			}, t.when = function(e) {
				var i = 0,
					n = s.call(arguments),
					a = n.length,
					o = a;
				1 !== a || r(e) || (o = 0);
				var h = 1 === o ? e : new t,
					u = function(t, e) {
						return function(i) {
							e[t] = arguments.length > 1 ? s.call(arguments) : i, --o || h.resolve.apply(h, e)
						}
					};
				if (a > 1)
					for (var l = Array(a), c = function() {
							h.reject()
						}; a > i; ++i) n[i] && r(n[i]) ? n[i].promise().done(u(i, l)).fail(c) : (l[i] = n[i], --o);
				return o || h.resolve.apply(h, n), h.promise()
			}, t
		}(),
		T = i.Object = function() {
			function e(t, s) {
				this._ = {};
				var n = this._.events = new A(this);
				if (this._.emit = function() {
					return n.emit.apply(n, arguments)
				}, x(s[0])) {
					var a = s.shift(),
						o = a["in"];
					this.once("init", function() {
						this.set(a), o && (w(o) ? this.append.apply(this, o) : o instanceof e && this.append(o))
					})
				}
				switch (this.tickID = -1, this.nodes = s.map(i), this.cells = [], this.numChannels = t, t) {
					case 0:
						this.L = this.R = new I(null), this.cells[0] = this.cells[1] = this.cells[2] = this.L.cell;
						break;
					case 1:
						this.L = this.R = new I(this), this.cells[0] = this.cells[1] = this.cells[2] = this.L.cell;
						break;
					case 2:
						this.L = new I(this), this.R = new I(this), this.cells[0] = new y.SignalArray(c.cellsize), this.cells[1] = this.L.cell, this.cells[2] = this.R.cell
				}
				this.playbackState = r, this.nodeType = e.DSP, this._.ar = !0, this._.mul = 1, this._.add = 0, this._.dac = null, this._.bypassed = !1, this._.meta = {}, this._.samplerate = c.samplerate, this._.cellsize = c.cellsize, this._.buddies = []
			}
			e.DSP = 1, e.TIMER = 2, e.LISTENER = 3;
			var n = e.prototype;
			return Object.defineProperties(n, {
				isAr: {
					get: function() {
						return this._.ar
					}
				},
				isKr: {
					get: function() {
						return !this._.ar
					}
				},
				isBypassed: {
					get: function() {
						return this._.bypassed
					}
				},
				isEnded: {
					get: function() {
						return !(1 & this.playbackState)
					}
				},
				mul: {
					set: function(t) {
						"number" == typeof t && (this._.mul = t, this._.emit("setMul", t))
					},
					get: function() {
						return this._.mul
					}
				},
				add: {
					set: function(t) {
						"number" == typeof t && (this._.add = t, this._.emit("setAdd", t))
					},
					get: function() {
						return this._.add
					}
				},
				buddies: {
					set: function(t) {
						w(t) || (t = [t]), this._.buddies = t.filter(function(t) {
							return t instanceof e
						})
					},
					get: function() {
						return this._.buddies
					}
				}
			}), n.toString = function() {
				return this.constructor.name
			}, n.valueOf = function() {
				return c.tickID !== this.tickID && this.process(c.tickID), this.cells[0][0]
			}, n.append = function() {
				if (arguments.length > 0) {
					var t = s.call(arguments).map(i);
					this.nodes = this.nodes.concat(t), this._.emit("append", t)
				}
				return this
			}, n.appendTo = function(t) {
				return t.append(this), this
			}, n.remove = function() {
				if (arguments.length > 0) {
					for (var t, e = this.nodes, i = [], s = 0, n = arguments.length; n > s; ++s) - 1 !== (t = e.indexOf(arguments[s])) && (i.push(e[t]), e.splice(t, 1));
					i.length > 0 && this._.emit("remove", i)
				}
				return this
			}, n.removeFrom = function(t) {
				return t.remove(this), this
			}, n.removeAll = function() {
				var t = this.nodes.slice();
				return this.nodes = [], t.length > 0 && this._.emit("remove", t), this
			}, n.removeAtIndex = function(t) {
				var e = this.nodes[t];
				return e && (this.nodes.splice(t, 1), this._.emit("remove", [e])), this
			}, n.postMessage = function(t) {
				return this._.emit("message", t), this
			}, n.to = function(t) {
				if (t instanceof e) t.append(this);
				else {
					var i = s.call(arguments);
					x(i[1]) ? i.splice(2, 0, this) : i.splice(1, 0, this), t = b.apply(null, i)
				}
				return t
			}, n.splice = function(t, i, s) {
				var n;
				return i ? i instanceof e && (n = i.nodes.indexOf(s), -1 !== n && i.nodes.splice(n, 1), t instanceof e ? (t.nodes.push(this), i.nodes.push(t)) : i.nodes.push(this)) : this._.dac && (t instanceof e ? s instanceof e ? s._.dac && (s._.dac._.node = t, t._.dac = s._.dac, s._.dac = null, t.nodes.push(this)) : this._.dac && (this._.dac._.node = t, t._.dac = this._.dac, this._.dac = null, t.nodes.push(this)) : s instanceof e && s._.dac && (s._.dac._.node = this, this._.dac = s._.dac, s._.dac = null)), this
			}, n.on = n.addListener = function(t, e) {
				return this._.events.on(t, e), this
			}, n.once = function(t, e) {
				return this._.events.once(t, e), this
			}, n.off = n.removeListener = function(t, e) {
				return this._.events.off(t, e), this
			}, n.removeAllListeners = function(t) {
				return this._.events.removeAllListeners(t), this
			}, n.listeners = function(t) {
				return this._.events.listeners(t)
			}, n.set = function(t, e) {
				var i, s, n = this._.meta;
				switch (typeof t) {
					case "string":
						switch (n[t]) {
							case "property":
								this[t] = e;
								break;
							case "function":
								this[t](e);
								break;
							default:
								for (i = this; null !== i;) s = Object.getOwnPropertyDescriptor(i, t), s && ("function" == typeof s.value ? (n[t] = "function", this[t](e)) : (s.get || s.set) && (n[t] = "property", this[t] = e)), i = Object.getPrototypeOf(i)
						}
						break;
					case "object":
						for (i in t) this.set(i, t[i])
				}
				return this
			}, n.get = function(e) {
				return "property" === this._.meta[e] ? this[e] : t
			}, n.bang = function() {
				return this._.emit.apply(this, ["bang"].concat(s.call(arguments))), this
			}, n.process = y.nop, n.bypass = function() {
				return this._.bypassed = 0 === arguments.length ? !0 : !! arguments[0], this
			}, n.play = function() {
				var t = this._.dac;
				return null === t && (t = this._.dac = new P(this)), t.play() && this._.emit.apply(this, ["play"].concat(s.call(arguments))), y.buddies_start(this), this
			}, n.pause = function() {
				var t = this._.dac;
				return t && t.playbackState === r && (t.pause(), this._.dac = null, this._.emit("pause")), y.buddies_stop(this), this
			}, n.start = n.stop = n.listen = n.unlisten = function() {
				return this
			}, n.ar = function() {
				return (0 === arguments.length ? 0 : !arguments[0]) ? this.kr(!0) : this._.kronly || (this._.ar = !0, this._.emit("ar", !0)), this
			}, n.kr = function() {
				return (0 === arguments.length ? 0 : !arguments[0]) ? this.ar(!0) : this._.aronly || (this._.ar = !1, this._.emit("ar", !1)), this
			}, n.plot = "browser" === d ? function(e) {
				var i = this._,
					s = e.target;
				if (!s) return this;
				var n, r = e.width || s.width || 320,
					a = e.height || s.height || 240,
					o = (e.x || 0) + .5,
					h = e.y || 0,
					u = s.getContext("2d");
				n = e.foreground !== t ? e.foreground : i.plotForeground || "rgb(  0, 128, 255)";
				var l;
				l = e.background !== t ? e.background : i.plotBackground || "rgb(255, 255, 255)";
				var c, f, p, d, m, v = e.lineWidth || i.plotLineWidth || 1,
					g = !! i.plotCyclic,
					b = i.plotData || this.cells[0],
					_ = e.range || i.plotRange || [-1.2, 1.2],
					y = _[0],
					w = a / (_[1] - y),
					x = r / b.length,
					k = b.length;
				if (u.save(), u.rect(o, h, r, a), null !== l && (u.fillStyle = l, u.fillRect(o, h, r, a)), i.plotBefore && i.plotBefore.call(this, u, o, h, r, a), i.plotBarStyle)
					for (u.fillStyle = n, c = 0, m = 0; k > m; ++m) p = (b[m] - y) * w, f = a - p, u.fillRect(c + o, f + h, x, p), c += x;
				else {
					for (u.strokeStyle = n, u.lineWidth = v, u.beginPath(), c = 0, d = a - (b[0] - y) * w, u.moveTo(c + o, d + h), m = 1; k > m; ++m) c += x, f = a - (b[m] - y) * w, u.lineTo(c + o, f + h);
					g ? u.lineTo(c + x + o, d + h) : u.lineTo(c + x + o, f + h), u.stroke()
				}
				i.plotAfter && i.plotAfter.call(this, u, o, h, r, a);
				var A = e.border || i.plotBorder;
				return A && (u.strokeStyle = "string" == typeof A ? A : "#000", u.lineWidth = 1, u.strokeRect(o, h, r, a)), u.restore(), this
			} : y.nop, e
		}(),
		I = i.ChannelObject = function() {
			function t(t) {
				i.Object.call(this, -1, []), y.fixAR(this), this._.parent = t, this.cell = new y.SignalArray(c.cellsize), this.L = this.R = this, this.cells[0] = this.cells[1] = this.cells[2] = this.cell, this.numChannels = 1
			}
			return y.extend(t), t.prototype.process = function(t) {
				return this.tickID !== t && (this.tickID = t, this._.parent && this._.parent.process(t)), this
			}, t
		}(),
		R = function() {
			function t(t) {
				T.call(this, 2, t)
			}
			return y.extend(t), t.prototype.process = function(t) {
				var e = this._;
				return this.tickID !== t && (this.tickID = t, e.ar ? (y.inputSignalAR(this), y.outputSignalAR(this)) : (this.cells[0][0] = y.inputSignalKR(this), y.outputSignalKR(this))), this
			}, y.register("+", t), t
		}(),
		O = function() {
			function t(t) {
				if (T.call(this, 1, []), y.fixKR(this), this.value = t[0], x(t[1])) {
					var e = t[1];
					this.once("init", function() {
						this.set(e)
					})
				}
				this.on("setAdd", y.changeWithValue), this.on("setMul", y.changeWithValue)
			}
			y.extend(t);
			var e = t.prototype;
			return Object.defineProperties(e, {
				value: {
					set: function(t) {
						"number" == typeof t && (this._.value = isNaN(t) ? 0 : t, y.changeWithValue.call(this))
					},
					get: function() {
						return this._.value
					}
				}
			}), t
		}(),
		D = function() {
			function t(t) {
				if (T.call(this, 1, []), y.fixKR(this), this.value = t[0], x(t[1])) {
					var e = t[1];
					this.once("init", function() {
						this.set(e)
					})
				}
				this.on("setAdd", y.changeWithValue), this.on("setMul", y.changeWithValue)
			}
			y.extend(t);
			var e = t.prototype;
			return Object.defineProperties(e, {
				value: {
					set: function(t) {
						this._.value = t ? 1 : 0, y.changeWithValue.call(this)
					},
					get: function() {
						return !!this._.value
					}
				}
			}), t
		}(),
		M = function() {
			function t(t) {
				if (T.call(this, 1, []), y.fixKR(this), this.func = t[0], this._.value = 0, x(t[1])) {
					var e = t[1];
					this.once("init", function() {
						this.set(e)
					})
				}
				this.on("setAdd", y.changeWithValue), this.on("setMul", y.changeWithValue)
			}
			y.extend(t);
			var e = t.prototype;
			return Object.defineProperties(e, {
				func: {
					set: function(t) {
						"function" == typeof t && (this._.func = t)
					},
					get: function() {
						return this._.func
					}
				},
				args: {
					set: function(t) {
						this._.args = w(t) ? t : [t]
					},
					get: function() {
						return this._.args
					}
				}
			}), e.bang = function() {
				var t = this._,
					e = s.call(arguments).concat(t.args),
					i = t.func.apply(this, e);
				return "number" == typeof i && (t.value = i, y.changeWithValue.call(this)), this._.emit("bang"), this
			}, t
		}(),
		L = function() {
			function t(t) {
				T.call(this, 1, []);
				var e, i;
				for (e = 0, i = t[0].length; i > e; ++e) this.append(t[0][e]);
				if (x(t[1])) {
					var s = t[1];
					this.once("init", function() {
						this.set(s)
					})
				}
			}
			y.extend(t);
			var e = t.prototype;
			return Object.defineProperties(e, {}), e.bang = function() {
				var t, e, i = ["bang"].concat(s.call(arguments)),
					n = this.nodes;
				for (t = 0, e = n.length; e > t; ++t) n[t].bang.apply(n[t], i);
				return this
			}, e.postMessage = function(t) {
				var e, i, s = this.nodes;
				for (e = 0, i = s.length; i > e; ++e) s[e].postMessage(t);
				return this
			}, e.process = function(t) {
				var e = this._;
				return this.tickID !== t && (this.tickID = t, e.ar ? (y.inputSignalAR(this), y.outputSignalAR(this)) : (this.cells[0][0] = y.inputSignalKR(this), y.outputSignalKR(this))), this
			}, t
		}(),
		j = function() {
			function t(t) {
				if (T.call(this, 1, []), y.fixKR(this), x(t[1])) {
					var e = t[1];
					this.once("init", function() {
						this.set(e)
					})
				}
			}
			y.extend(t);
			var e = t.prototype;
			return Object.defineProperties(e, {}), t
		}(),
		P = function() {
			function t(t) {
				T.call(this, 2, []), this.playbackState = n;
				var s = this._;
				s.node = t, s.onplay = e(this), s.onpause = i(this)
			}
			y.extend(t);
			var e = function(t) {
				return function() {
					-1 === c.inlets.indexOf(t) && (c.inlets.push(t), c.events.emit("addObject"), t.playbackState = r, t._.emit("play"))
				}
			}, i = function(t) {
					return function() {
						var e = c.inlets.indexOf(t); - 1 !== e && (c.inlets.splice(e, 1), t.playbackState = n, t._.emit("pause"), c.events.emit("removeObject"))
					}
				}, s = t.prototype;
			return s.play = function() {
				return c.nextTick(this._.onplay), -1 === c.inlets.indexOf(this)
			}, s.pause = function() {
				c.nextTick(this._.onpause)
			}, s.process = function(t) {
				var e = this._.node;
				1 & e.playbackState ? (e.process(t), this.cells[1].set(e.cells[1]), this.cells[2].set(e.cells[2])) : (this.cells[1].set(y.emptycell), this.cells[2].set(y.emptycell))
			}, t
		}(),
		F = function() {
			function e() {
				this.context = this, this.tickID = 0, this.impl = null, this.amp = .8, this.status = n, this.samplerate = 44100, this.channels = 2, this.cellsize = 64, this.streammsec = 20, this.streamsize = 0, this.currentTime = 0, this.nextTicks = [], this.inlets = [], this.timers = [], this.listeners = [], this.deferred = null, this.recStart = 0, this.recBuffers = null, this.delayProcess = i(this), this.events = null, y.currentTimeIncr = 1e3 * this.cellsize / this.samplerate, y.emptycell = new y.SignalArray(this.cellsize), this.reset(!0)
			}
			var i = function(t) {
				return function() {
					t.recStart = Date.now(), t.process()
				}
			}, a = e.prototype;
			a.bind = function(t, e) {
				if ("function" == typeof t) {
					var i = new t(this, e);
					this.impl = i, this.impl.defaultSamplerate && (this.samplerate = this.impl.defaultSamplerate)
				}
				return this
			}, a.setup = function(e) {
				return "object" == typeof e && (-1 !== h.indexOf(e.samplerate) && (this.samplerate = e.samplerate <= this.impl.maxSamplerate ? e.samplerate : this.impl.maxSamplerate), -1 !== u.indexOf(e.cellsize) && (this.cellsize = e.cellsize), "undefined" != typeof Float64Array && e.f64 !== t && (v = !! e.f64, y.SignalArray = v ? Float64Array : Float32Array)), y.currentTimeIncr = 1e3 * this.cellsize / this.samplerate, y.emptycell = new y.SignalArray(this.cellsize), this
			}, a.getAdjustSamples = function(t) {
				var e, i;
				return t = t || this.samplerate, e = this.streammsec / 1e3 * t, i = Math.ceil(Math.log(e) * Math.LOG2E), i = 8 > i ? 8 : i > 14 ? 14 : i, 1 << i
			}, a.play = function() {
				return this.status === n && (this.status = r, this.streamsize = this.getAdjustSamples(), this.strmL = new y.SignalArray(this.streamsize), this.strmR = new y.SignalArray(this.streamsize), this.impl.play(), this.events.emit("play")), this
			}, a.pause = function() {
				return this.status === r && (this.status = n, this.impl.pause(), this.events.emit("pause")), this
			}, a.reset = function(t) {
				return t && (this.events = new A(this).on("addObject", function() {
					this.status === n && this.play()
				}).on("removeObject", function() {
					this.status === r && 0 === this.inlets.length + this.timers.length + this.listeners.length && this.pause()
				})), this.currentTime = 0, this.nextTicks = [], this.inlets = [], this.timers = [], this.listeners = [], this
			}, a.process = function() {
				var t, e, i, s, n, r, a, h, u = this.tickID,
					l = this.strmL,
					c = this.strmR,
					f = this.amp,
					p = this.streamsize,
					d = 0,
					m = this.cellsize,
					v = this.streamsize / this.cellsize,
					g = this.timers,
					b = this.inlets,
					_ = this.listeners,
					w = y.currentTimeIncr;
				for (s = 0; p > s; ++s) l[s] = c[s] = 0;
				for (; v--;) {
					for (++u, n = 0, r = g.length; r > n; ++n) 1 & g[n].playbackState && g[n].process(u);
					for (n = 0, r = b.length; r > n; ++n)
						if (t = b[n], t.process(u), 1 & t.playbackState)
							for (e = t.cells[1], i = t.cells[2], a = 0, s = d; m > a; ++a, ++s) l[s] += e[a], c[s] += i[a];
					for (d += m, n = 0, r = _.length; r > n; ++n) 1 & _[n].playbackState && _[n].process(u);
					for (this.currentTime += w, h = this.nextTicks.splice(0), n = 0, r = h.length; r > n; ++n) h[n]()
				}
				for (s = 0; p > s; ++s) t = l[s] * f, -1 > t ? t = -1 : t > 1 && (t = 1), l[s] = t, t = c[s] * f, -1 > t ? t = -1 : t > 1 && (t = 1), c[s] = t;
				this.tickID = u;
				var x = this.currentTime;
				if (this.status === o) {
					if (2 === this.recCh) this.recBuffers.push(new y.SignalArray(l)), this.recBuffers.push(new y.SignalArray(c));
					else {
						var k = new y.SignalArray(l.length);
						for (s = 0, p = k.length; p > s; ++s) k[s] = .5 * (l[s] + c[s]);
						this.recBuffers.push(k)
					} if (x >= this.maxDuration) this.deferred.sub.reject();
					else if (x >= this.recDuration) this.deferred.sub.resolve();
					else {
						var A = Date.now();
						A - this.recStart > 20 ? setTimeout(this.delayProcess, 10) : this.process()
					}
				}
			}, a.nextTick = function(t) {
				this.status === n ? t() : this.nextTicks.push(t)
			}, a.rec = function() {
				y.fix_iOS6_1_problem(!0);
				var t = new S(this);
				if (this.deferred) return console.warn("rec deferred is exists??"), t.reject().promise();
				if (this.status !== n) return console.log("status is not none", this.status), t.reject().promise();
				var e = 0,
					i = arguments,
					r = x(i[e]) ? i[e++] : {}, a = i[e];
				if ("function" != typeof a) return console.warn("no function"), t.reject().promise();
				this.deferred = t, this.status = o, this.reset();
				var h = new b("+"),
					u = new S(this),
					c = {
						done: function() {
							u.resolve.apply(u, s.call(arguments))
						},
						send: function() {
							h.append.apply(h, arguments)
						}
					}, f = this;
				return u.then(l, function() {
					y.fix_iOS6_1_problem(!1), l.call(f, !0)
				}), this.deferred.sub = u, this.savedSamplerate = this.samplerate, this.samplerate = r.samplerate || this.samplerate, this.recDuration = r.recDuration || 1 / 0, this.maxDuration = r.maxDuration || 6e5, this.recCh = r.ch || 1, 2 !== this.recCh && (this.recCh = 1), this.recBuffers = [], this.streamsize = this.getAdjustSamples(), this.strmL = new y.SignalArray(this.streamsize), this.strmR = new y.SignalArray(this.streamsize), this.inlets.push(h), a(c), setTimeout(this.delayProcess, 10), t.promise()
			};
			var l = function() {
				this.status = n, this.reset();
				var t, e = this.recBuffers,
					i = this.samplerate,
					s = this.streamsize;
				this.samplerate = this.savedSamplerate, t = 1 / 0 !== this.recDuration ? 0 | .001 * this.recDuration * i : (e.length >> this.recCh - 1) * s;
				var r, a, o = 0 | t / s,
					h = 0,
					u = 0,
					l = t;
				if (2 === this.recCh) {
					var c = new y.SignalArray(t),
						f = new y.SignalArray(t),
						p = new y.SignalArray(t);
					for (a = 0; o > a; ++a)
						if (c.set(e[h++], u), f.set(e[h++], u), u += s, l -= s, l > 0 && s > l) {
							c.set(e[h++].subarray(0, l), u), f.set(e[h++].subarray(0, l), u);
							break
						}
					for (a = 0, o = t; o > a; ++a) p[a] = .5 * (c[a] + f[a]);
					r = {
						samplerate: i,
						channels: 2,
						buffer: [p, c, f]
					}
				} else {
					var d = new y.SignalArray(t);
					for (a = 0; o > a; ++a)
						if (d.set(e[h++], u), u += s, l -= s, l > 0 && s > l) {
							d.set(e[h++].subarray(0, l), u);
							break
						}
					r = {
						samplerate: i,
						channels: 1,
						buffer: [d]
					}
				}
				var m = [].concat.apply([r], arguments);
				this.deferred.resolve.apply(this.deferred, m), this.deferred = null
			};
			return a.on = function(t, e) {
				this.events.on(t, e)
			}, a.once = function(t, e) {
				this.events.once(t, e)
			}, a.off = function(t, e) {
				this.events.off(t, e)
			}, a.removeAllListeners = function(t) {
				this.events.removeListeners(t)
			}, a.listeners = function(t) {
				return this.events.listeners(t)
			}, a.fix_iOS6_1_problem = function(t) {
				this.impl.fix_iOS6_1_problem && this.impl.fix_iOS6_1_problem(t)
			}, e
		}(),
		q = null;
	q = "undefined" != typeof webkitAudioContext ? function(t) {
		var e, i, s = new webkitAudioContext;
		y._audioContext = s, this.maxSamplerate = s.sampleRate, this.defaultSamplerate = s.sampleRate, this.env = "webkit";
		var n = navigator.userAgent;
		if (n.match(/linux/i) ? t.streammsec *= 8 : n.match(/win(dows)?\s*(nt 5\.1|xp)/i) && (t.streammsec *= 4), this.play = function() {
			var n, r, a, o = t.getAdjustSamples(s.sampleRate),
				h = t.streamsize;
			t.samplerate === s.sampleRate ? n = function(e) {
				var i = e.outputBuffer;
				t.process(), i.getChannelData(0).set(t.strmL), i.getChannelData(1).set(t.strmR)
			} : 2 * t.samplerate === s.sampleRate ? n = function(e) {
				var i, s, n = t.strmL,
					r = t.strmR,
					a = e.outputBuffer,
					o = a.getChannelData(0),
					h = a.getChannelData(1),
					u = a.length;
				for (t.process(), i = s = 0; u > i; i += 2, ++s) o[i] = o[i + 1] = n[s], h[i] = h[i + 1] = r[s]
			} : (r = h, a = t.samplerate / s.sampleRate, n = function(e) {
				var i, s = t.strmL,
					n = t.strmR,
					o = e.outputBuffer,
					u = o.getChannelData(0),
					l = o.getChannelData(1),
					c = o.length;
				for (i = 0; c > i; ++i) r >= h && (t.process(), r -= h), u[i] = s[0 | r], l[i] = n[0 | r], r += a
			}), e = s.createBufferSource(), i = s.createJavaScriptNode(o, 2, t.channels), i.onaudioprocess = n, e.noteOn(0), e.connect(i), i.connect(s.destination)
		}, this.pause = function() {
			e.disconnect(), i.disconnect()
		}, m) {
			var r = 0,
				a = s.createBufferSource();
			this.fix_iOS6_1_problem = function(t) {
				r += t ? 1 : -1, 1 === r ? (a.noteOn(0), a.connect(s.destination)) : 0 === r && a.disconnect()
			}
		}
	} : "function" == typeof Audio && "function" == typeof(new Audio).mozSetup ? function(t) {
		var e = function() {
			var t = "var t=0;onmessage=function(e){if(t)t=clearInterval(t),0;if(typeof e.data=='number'&&e.data>0)t=setInterval(function(){postMessage(0);},e.data);};",
				e = new Blob([t], {
					type: "text/javascript"
				}),
				i = URL.createObjectURL(e);
			return new Worker(i)
		}();
		this.maxSamplerate = 48e3, this.defaultSamplerate = 44100, this.env = "moz", this.play = function() {
			var i = new Audio,
				s = new Float32Array(t.streamsize * t.channels),
				n = t.streammsec,
				r = 0,
				a = 1e3 * (t.streamsize / t.samplerate),
				o = Date.now(),
				h = function() {
					if (!(r > Date.now() - o)) {
						var e = t.strmL,
							n = t.strmR,
							h = s.length,
							u = e.length;
						for (t.process(); u--;) s[--h] = n[u], s[--h] = e[u];
						i.mozWriteAudio(s), r += a
					}
				};
			i.mozSetup(t.channels, t.samplerate), e.onmessage = h, e.postMessage(n)
		}, this.pause = function() {
			e.postMessage(0)
		}
	} : function() {
		this.maxSamplerate = 48e3, this.defaultSamplerate = 44100, this.env = "nop", this.play = function() {}, this.pause = function() {}
	}, c = (new F).bind(q);
	var E = i;
	"node" === d ? module.exports = global.timbre = E : "browser" === d && (E.noConflict = function() {
		var t = window.timbre,
			e = window.T;
		return function(i) {
			return window.T === E && (window.T = e), i && window.timbre === E && (window.timbre = t), E
		}
	}(), window.timbre = window.T = E),
	function() {
		function t(t) {
			try {
				return e.plugins && e.mimeTypes && e.mimeTypes.length ? e.plugins["Shockwave Flash"].description.match(/([0-9]+)/)[t] : new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/)[t]
			} catch (i) {
				return -1
			}
		}
		if ("nop" === c.impl.env && "browser" === d && !m) {
			var e = navigator;
			if (!(10 > t(0))) {
				var i, s = "TimbreFlashPlayerDiv",
					n = function() {
						var t = document.getElementsByTagName("script");
						if (t && t.length)
							for (var e, i = 0, s = t.length; s > i; ++i)
								if (e = /^(.*\/)timbre(?:\.dev)?\.js$/i.exec(t[i].src)) return e[1] + "timbre.swf"
					}();
				window.timbrejs_flashfallback_init = function() {
					function t(t) {
						var e = 0;
						this.maxSamplerate = 44100, this.defaultSamplerate = 44100, this.env = "flash", this.play = function() {
							var s, r = Array(t.streamsize * t.channels),
								a = t.streammsec,
								o = 0,
								h = 1e3 * (t.streamsize / t.samplerate),
								u = Date.now();
							s = function() {
								if (!(o > Date.now() - u)) {
									var e = t.strmL,
										s = t.strmR,
										n = r.length,
										a = e.length;
									for (t.process(); a--;) r[--n] = 0 | 32768 * s[a], r[--n] = 0 | 32768 * e[a];
									i.writeAudio(r.join(" ")), o += h
								}
							}, i.setup ? (i.setup(t.channels, t.samplerate), e = setInterval(s, a)) : console.warn("Cannot find " + n)
						}, this.pause = function() {
							0 !== e && (i.cancel(), clearInterval(e), e = 0)
						}
					}
					c.bind(t), delete window.timbrejs_flashfallback_init
				};
				var r, a, o = n,
					h = o + "?" + +new Date,
					u = "TimbreFlashPlayer",
					l = document.createElement("div");
				l.id = s, l.style.display = "inline", l.width = l.height = 1, e.plugins && e.mimeTypes && e.mimeTypes.length ? (r = document.createElement("object"), r.id = u, r.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", r.width = r.height = 1, r.setAttribute("data", h), r.setAttribute("type", "application/x-shockwave-flash"), a = document.createElement("param"), a.setAttribute("name", "allowScriptAccess"), a.setAttribute("value", "always"), r.appendChild(a), l.appendChild(r)) : l.innerHTML = '<object id="' + u + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1"><param name="movie" value="' + h + '" /><param name="bgcolor" value="#FFFFFF" /><param name="quality" value="high" /><param name="allowScriptAccess" value="always" /></object>', window.addEventListener("load", function() {
					document.body.appendChild(l), i = document[u]
				})
			}
		}
	}()
})(),
function(t) {
	"use strict";

	function e(t) {
		this.samplerate = t, this.frequency = 340, this.Q = 1, this.gain = 0, this.x1L = this.x2L = this.y1L = this.y2L = 0, this.x1R = this.x2R = this.y1R = this.y2R = 0, this.b0 = this.b1 = this.b2 = this.a1 = this.a2 = 0, this.setType("lpf")
	}
	var i = e.prototype;
	i.process = function(t, e) {
		var i, s, n, r, a, o, h = this.x1L,
			u = this.x2L,
			l = this.y1L,
			c = this.y2L,
			f = this.x1R,
			p = this.x2R,
			d = this.y1R,
			m = this.y2R,
			v = this.b0,
			g = this.b1,
			b = this.b2,
			_ = this.a1,
			y = this.a2;
		for (a = 0, o = t.length; o > a; ++a) i = t[a], n = v * i + g * h + b * u - _ * l - y * c, u = h, h = i, c = l, l = n, s = e[a], r = v * s + g * f + b * p - _ * d - y * m, p = f, f = s, m = d, d = r, t[a] = n, e[a] = r;
		this.x1L = h, this.x2L = u, this.y1L = l, this.y2L = c, this.x1R = f, this.x2R = p, this.y1R = d, this.y2R = m
	}, i.setType = function(t) {
		var e;
		(e = s[t]) && (this.type = t, e.call(this, this.frequency, this.Q, this.gain))
	}, i.setParams = function(t, e, i) {
		this.frequency = t, this.Q = e, this.gain = i;
		var n = s[this.type];
		return n && n.call(this, t, e, i), this
	};
	var s = {
		lowpass: function(t, e) {
			if (t /= .5 * this.samplerate, t >= 1) this.b0 = 1, this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else if (0 >= t) this.b0 = this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else {
				e = 0 > e ? 0 : e;
				var i = Math.pow(10, .05 * e),
					s = Math.sqrt(.5 * (4 - Math.sqrt(16 - 16 / (i * i)))),
					n = Math.PI * t,
					r = .5 * s * Math.sin(n),
					a = .5 * (1 - r) / (1 + r),
					o = (.5 + a) * Math.cos(n),
					h = .25 * (.5 + a - o);
				this.b0 = 2 * h, this.b1 = 4 * h, this.b2 = this.b0, this.a1 = 2 * -o, this.a2 = 2 * a
			}
		},
		highpass: function(t, e) {
			if (t /= .5 * this.samplerate, t >= 1) this.b0 = this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else if (0 >= t) this.b0 = 1, this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else {
				e = 0 > e ? 0 : e;
				var i = Math.pow(10, .05 * e),
					s = Math.sqrt((4 - Math.sqrt(16 - 16 / (i * i))) / 2),
					n = Math.PI * t,
					r = .5 * s * Math.sin(n),
					a = .5 * (1 - r) / (1 + r),
					o = (.5 + a) * Math.cos(n),
					h = .25 * (.5 + a + o);
				this.b0 = 2 * h, this.b1 = -4 * h, this.b2 = this.b0, this.a1 = 2 * -o, this.a2 = 2 * a
			}
		},
		bandpass: function(t, e) {
			if (t /= .5 * this.samplerate, t > 0 && 1 > t)
				if (e > 0) {
					var i = Math.PI * t,
						s = Math.sin(i) / (2 * e),
						n = Math.cos(i),
						r = 1 / (1 + s);
					this.b0 = s * r, this.b1 = 0, this.b2 = -s * r, this.a1 = -2 * n * r, this.a2 = (1 - s) * r
				} else this.b0 = this.b1 = this.b2 = this.a1 = this.a2 = 0;
				else this.b0 = this.b1 = this.b2 = this.a1 = this.a2 = 0
		},
		lowshelf: function(t, e, i) {
			t /= .5 * this.samplerate;
			var s = Math.pow(10, i / 40);
			if (t >= 1) this.b0 = s * s, this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else if (0 >= t) this.b0 = 1, this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else {
				var n = Math.PI * t,
					r = 1,
					a = .5 * Math.sin(n) * Math.sqrt((s + 1 / s) * (1 / r - 1) + 2),
					o = Math.cos(n),
					h = 2 * Math.sqrt(s) * a,
					u = s + 1,
					l = s - 1,
					c = 1 / (u + l * o + h);
				this.b0 = s * (u - l * o + h) * c, this.b1 = 2 * s * (l - u * o) * c, this.b2 = s * (u - l * o - h) * c, this.a1 = -2 * (l + u * o) * c, this.a2 = (u + l * o - h) * c
			}
		},
		highshelf: function(t, e, i) {
			t /= .5 * this.samplerate;
			var s = Math.pow(10, i / 40);
			if (t >= 1) this.b0 = 1, this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else if (0 >= t) this.b0 = s * s, this.b1 = this.b2 = this.a1 = this.a2 = 0;
			else {
				var n = Math.PI * t,
					r = 1,
					a = .5 * Math.sin(n) * Math.sqrt((s + 1 / s) * (1 / r - 1) + 2),
					o = Math.cos(n),
					h = 2 * Math.sqrt(s) * a,
					u = s + 1,
					l = s - 1,
					c = 1 / (u - l * o + h);
				this.b0 = s * (u + l * o + h) * c, this.b1 = -2 * s * (l + u * o) * c, this.b2 = s * (u + l * o - h) * c, this.a1 = 2 * (l - u * o) * c, this.a2 = (u - l * o - h) * c
			}
		},
		peaking: function(t, e, i) {
			if (t /= .5 * this.samplerate, t > 0 && 1 > t) {
				var s = Math.pow(10, i / 40);
				if (e > 0) {
					var n = Math.PI * t,
						r = Math.sin(n) / (2 * e),
						a = Math.cos(n),
						o = 1 / (1 + r / s);
					this.b0 = (1 + r * s) * o, this.b1 = -2 * a * o, this.b2 = (1 - r * s) * o, this.a1 = this.b1, this.a2 = (1 - r / s) * o
				} else this.b0 = s * s, this.b1 = this.b2 = this.a1 = this.a2 = 0
			} else this.b0 = 1, this.b1 = this.b2 = this.a1 = this.a2 = 0
		},
		notch: function(t, e) {
			if (t /= .5 * this.samplerate, t > 0 && 1 > t)
				if (e > 0) {
					var i = Math.PI * t,
						s = Math.sin(i) / (2 * e),
						n = Math.cos(i),
						r = 1 / (1 + s);
					this.b0 = r, this.b1 = -2 * n * r, this.b2 = r, this.a1 = this.b1, this.a2 = (1 - s) * r
				} else this.b0 = this.b1 = this.b2 = this.a1 = this.a2 = 0;
				else this.b0 = 1, this.b1 = this.b2 = this.a1 = this.a2 = 0
		},
		allpass: function(t, e) {
			if (t /= .5 * this.samplerate, t > 0 && 1 > t)
				if (e > 0) {
					var i = Math.PI * t,
						s = Math.sin(i) / (2 * e),
						n = Math.cos(i),
						r = 1 / (1 + s);
					this.b0 = (1 - s) * r, this.b1 = -2 * n * r, this.b2 = (1 + s) * r, this.a1 = this.b1, this.a2 = this.b0
				} else this.b0 = -1, this.b1 = this.b2 = this.a1 = this.a2 = 0;
				else this.b0 = 1, this.b1 = this.b2 = this.a1 = this.a2 = 0
		}
	};
	s.lpf = s.lowpass, s.hpf = s.highpass, s.bpf = s.bandpass, s.bef = s.notch, s.brf = s.notch, s.apf = s.allpass, t.modules.Biquad = e
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		this.samplerate = e;
		var i = Math.round(Math.log(.1 * e) * Math.LOG2E);
		this.buffersize = 1 << i, this.bufferL = new t.fn.SignalArray(this.buffersize + 1), this.bufferR = new t.fn.SignalArray(this.buffersize + 1), this.wave = null, this._wave = null, this.writeIndex = this.buffersize >> 1, this.readIndex = 0, this.delayTime = 20, this.rate = 4, this.depth = 20, this.feedback = .2, this.wet = .5, this.phase = 0, this.phaseIncr = 0, this.phaseStep = 4, this.setWaveType("sin"), this.setDelayTime(this.delayTime), this.setRate(this.rate)
	}
	var i = e.prototype,
		s = [];
	s[0] = function() {
		for (var t = new Float32Array(512), e = 0; 512 > e; ++e) t[e] = Math.sin(2 * Math.PI * (e / 512));
		return t
	}(), s[1] = function() {
		for (var t, e = new Float32Array(512), i = 0; 512 > i; ++i) t = i / 512 - .25, e[i] = 1 - 4 * Math.abs(Math.round(t) - t);
		return e
	}(), i.setWaveType = function(t) {
		"sin" === t ? (this.wave = t, this._wave = s[0]) : "tri" === t && (this.wave = t, this._wave = s[1])
	}, i.setDelayTime = function(t) {
		this.delayTime = t;
		for (var e = this.writeIndex - (0 | .001 * t * this.samplerate); 0 > e;) e += this.buffersize;
		this.readIndex = e
	}, i.setRate = function(t) {
		this.rate = t, this.phaseIncr = 512 * this.rate / this.samplerate * this.phaseStep
	}, i.process = function(t, e) {
		var i, s, n, r, a, o = this.bufferL,
			h = this.bufferR,
			u = this.buffersize,
			l = u - 1,
			c = this._wave,
			f = this.phase,
			p = this.phaseIncr,
			d = this.writeIndex,
			m = this.readIndex,
			v = this.depth,
			g = this.feedback,
			b = this.wet,
			_ = 1 - b,
			y = t.length,
			w = this.phaseStep;
		for (r = 0; y > r;) {
			for (n = c[0 | f] * v, f += p; f > 512;) f -= 512;
			for (a = 0; w > a; ++a, ++r) s = m + u + n & l, i = .5 * (o[s] + o[s + 1]), o[d] = t[r] - i * g, t[r] = t[r] * _ + i * b, i = .5 * (h[s] + h[s + 1]), h[d] = e[r] - i * g, e[r] = e[r] * _ + i * b, d = d + 1 & l, m = m + 1 & l
		}
		this.phase = f, this.writeIndex = d, this.readIndex = m
	}, t.modules.Chorus = e
}(timbre),
function(t) {
	"use strict";

	function e(e, s) {
		this.samplerate = e, this.channels = s, this.lastPreDelayFrames = 0, this.preDelayReadIndex = 0, this.preDelayWriteIndex = n, this.ratio = -1, this.slope = -1, this.linearThreshold = -1, this.dbThreshold = -1, this.dbKnee = -1, this.kneeThreshold = -1, this.kneeThresholdDb = -1, this.ykneeThresholdDb = -1, this.K = -1, this.attackTime = .003, this.releaseTime = .25, this.preDelayTime = .006, this.dbPostGain = 0, this.effectBlend = 1, this.releaseZone1 = .09, this.releaseZone2 = .16, this.releaseZone3 = .42, this.releaseZone4 = .98, this.detectorAverage = 0, this.compressorGain = 1, this.meteringGain = 1, this.delayBufferL = new t.fn.SignalArray(i), this.delayBufferR = 2 === s ? new t.fn.SignalArray(i) : this.delayBufferL, this.preDelayTime = 6, this.preDelayReadIndex = 0, this.preDelayWriteIndex = n, this.maxAttackCompressionDiffDb = -1, this.meteringReleaseK = 1 - Math.exp(-1 / (.325 * this.samplerate)), this.setAttackTime(this.attackTime), this.setReleaseTime(this.releaseTime), this.setPreDelayTime(this.preDelayTime), this.setParams(-24, 30, 12)
	}
	var i = 1024,
		s = i - 1,
		n = 256,
		r = 5,
		a = e.prototype;
	a.clone = function() {
		var t = new e(this.samplerate, this.channels);
		return t.setAttackTime(this.attackTime), t.setReleaseTime(this.releaseTime), t.setPreDelayTime(this.preDelayTime), t.setParams(this.dbThreshold, this.dbKnee, this.ratio), t
	}, a.setAttackTime = function(t) {
		this.attackTime = Math.max(.001, t), this._attackFrames = this.attackTime * this.samplerate
	}, a.setReleaseTime = function(t) {
		this.releaseTime = Math.max(.001, t);
		var e = this.releaseTime * this.samplerate,
			i = .0025;
		this._satReleaseFrames = i * this.samplerate;
		var s = e * this.releaseZone1,
			n = e * this.releaseZone2,
			r = e * this.releaseZone3,
			a = e * this.releaseZone4;
		this._kA = .9999999999999998 * s + 1.8432219684323923e-16 * n - 1.9373394351676423e-16 * r + 8.824516011816245e-18 * a, this._kB = -1.5788320352845888 * s + 2.3305837032074286 * n - .9141194204840429 * r + .1623677525612032 * a, this._kC = .5334142869106424 * s - 1.272736789213631 * n + .9258856042207512 * r - .18656310191776226 * a, this._kD = .08783463138207234 * s - .1694162967925622 * n + .08588057951595272 * r - .00429891410546283 * a, this._kE = -.042416883008123074 * s + .1115693827987602 * n - .09764676325265872 * r + .028494263462021576 * a
	}, a.setPreDelayTime = function(t) {
		this.preDelayTime = t;
		var e = t * this.samplerate;
		if (e > i - 1 && (e = i - 1), this.lastPreDelayFrames !== e) {
			this.lastPreDelayFrames = e;
			for (var s = 0, n = this.delayBufferL.length; n > s; ++s) this.delayBufferL[s] = this.delayBufferR[s] = 0;
			this.preDelayReadIndex = 0, this.preDelayWriteIndex = e
		}
	}, a.setParams = function(t, e, i) {
		this._k = this.updateStaticCurveParameters(t, e, i);
		var s = this.saturate(1, this._k),
			n = 1 / s;
		n = Math.pow(n, .6), this._masterLinearGain = Math.pow(10, .05 * this.dbPostGain) * n
	}, a.kneeCurve = function(t, e) {
		return this.linearThreshold > t ? t : this.linearThreshold + (1 - Math.exp(-e * (t - this.linearThreshold))) / e
	}, a.saturate = function(t, e) {
		var i;
		if (this.kneeThreshold > t) i = this.kneeCurve(t, e);
		else {
			var s = t ? 20 * Math.log(t) * Math.LOG10E : -1e3,
				n = this.ykneeThresholdDb + this.slope * (s - this.kneeThresholdDb);
			i = Math.pow(10, .05 * n)
		}
		return i
	}, a.slopeAt = function(t, e) {
		if (this.linearThreshold > t) return 1;
		var i = 1.001 * t,
			s = t ? 20 * Math.log(t) * Math.LOG10E : -1e3,
			n = i ? 20 * Math.log(i) * Math.LOG10E : -1e3,
			r = this.kneeCurve(t, e),
			a = this.kneeCurve(i, e),
			o = r ? 20 * Math.log(r) * Math.LOG10E : -1e3,
			h = a ? 20 * Math.log(a) * Math.LOG10E : -1e3;
		return (h - o) / (n - s)
	}, a.kAtSlope = function(t) {
		for (var e = this.dbThreshold + this.dbKnee, i = Math.pow(10, .05 * e), s = .1, n = 1e4, r = 5, a = 0; 15 > a; ++a) {
			var o = this.slopeAt(i, r);
			t > o ? n = r : s = r, r = Math.sqrt(s * n)
		}
		return r
	}, a.updateStaticCurveParameters = function(t, e, i) {
		this.dbThreshold = t, this.linearThreshold = Math.pow(10, .05 * t), this.dbKnee = e, this.ratio = i, this.slope = 1 / this.ratio, this.kneeThresholdDb = t + e, this.kneeThreshold = Math.pow(10, .05 * this.kneeThresholdDb);
		var s = this.kAtSlope(1 / this.ratio),
			n = this.kneeCurve(this.kneeThreshold, s);
		return this.ykneeThresholdDb = n ? 20 * Math.log(n) * Math.LOG10E : -1e3, this._k = s, this._k
	}, a.process = function(t, e) {
		for (var i = 1 - this.effectBlend, n = this.effectBlend, a = this._k, o = this._masterLinearGain, h = this._satReleaseFrames, u = this._kA, l = this._kB, c = this._kC, f = this._kD, p = this._kE, d = 64, m = t.length / d, v = 0, g = this.detectorAverage, b = this.compressorGain, _ = this.maxAttackCompressionDiffDb, y = 1 / this._attackFrames, w = this.preDelayReadIndex, x = this.preDelayWriteIndex, k = this.detectorAverage, A = this.delayBufferL, S = this.delayBufferR, T = this.meteringGain, I = this.meteringReleaseK, R = 0; m > R; ++R) {
			var O, D = Math.asin(g) / (.5 * Math.PI),
				M = D > b,
				L = b / D,
				j = L ? 20 * Math.log(L) * Math.LOG10E : -1e3;
			if ((1 / 0 === j || isNaN(j)) && (j = -1), M) {
				_ = -1, L = j, L = -12 > L ? 0 : L > 0 ? 3 : .25 * (L + 12);
				var P = L * L,
					F = P * L,
					q = P * P,
					E = u + l * L + c * P + f * F + p * q,
					B = r / E;
				O = Math.pow(10, .05 * B)
			} else {
				(-1 === _ || j > _) && (_ = j);
				var C = Math.max(.5, _);
				L = .25 / C, O = 1 - Math.pow(L, y)
			}
			for (var z = d; z--;) {
				var N = 0,
					G = .5 * (t[v] + e[v]);
				A[x] = t[v], S[x] = e[v], 0 > G && (G *= -1), G > N && (N = G);
				var W = N;
				0 > W && (W *= -1);
				var V = this.saturate(W, a),
					K = 1e-4 >= W ? 1 : V / W,
					Y = K ? -20 * Math.log(K) * Math.LOG10E : 1e3;
				2 > Y && (Y = 2);
				var $ = Y / h,
					H = Math.pow(10, .05 * $) - 1,
					Q = K > k,
					U = Q ? H : 1;
				k += (K - k) * U, k > 1 && (k = 1), 1 > O ? b += (D - b) * O : (b *= O, b > 1 && (b = 1));
				var Z = Math.sin(.5 * Math.PI * b),
					J = i + n * o * Z,
					X = 20 * Math.log(Z) * Math.LOG10E;
				T > X ? T = X : T += (X - T) * I, t[v] = A[w] * J, e[v] = S[w] * J, v++, w = w + 1 & s, x = x + 1 & s
			}
			1e-6 > k && (k = 1e-6), 1e-6 > b && (b = 1e-6)
		}
		this.preDelayReadIndex = w, this.preDelayWriteIndex = x, this.detectorAverage = k, this.compressorGain = b, this.maxAttackCompressionDiffDb = _, this.meteringGain = T
	}, a.reset = function() {
		this.detectorAverage = 0, this.compressorGain = 1, this.meteringGain = 1;
		for (var t = 0, e = this.delayBufferL.length; e > t; ++t) this.delayBufferL[t] = this.delayBufferR[t] = 0;
		this.preDelayReadIndex = 0, this.preDelayWriteIndex = n, this.maxAttackCompressionDiffDb = -1
	}, t.modules.Compressor = e
}(timbre),
function(t) {
	"use strict";

	function e() {}
	e.prototype.decode = function(t, i, s) {
		if ("string" == typeof t) {
			if (/\.wav$/.test(t)) return e.wav_decode(t, i, s);
			if (e.ogg_decode && /\.ogg$/.test(t)) return e.ogg_decode(t, i, s);
			if (e.mp3_decode && /\.mp3$/.test(t)) return e.mp3_decode(t, i, s)
		} else if ("object" == typeof t) {
			if ("wav" === t.type) return e.wav_decode(t.data, i, s);
			if (e.ogg_decode && "ogg" === t.type) return e.ogg_decode(t.data, i, s);
			if (e.mp3_decode && "mp3" === t.type) return e.mp3_decode(t.data, i, s)
		}
		return e.webkit_decode ? "object" == typeof t ? e.webkit_decode(t.data || t, i, s) : e.webkit_decode(t, i, s) : e.moz_decode ? e.moz_decode(t, i, s) : (i(!1), void 0)
	}, t.modules.Decoder = e, e.getBinaryWithPath = "browser" === t.envtype ? function(e, i) {
		t.fn.fix_iOS6_1_problem(!0);
		var s = new XMLHttpRequest;
		s.open("GET", e), s.responseType = "arraybuffer", s.onreadystatechange = function() {
			4 === s.readyState && (s.response ? i(new Uint8Array(s.response)) : void 0 !== s.responseBody && i(new Uint8Array(VBArray(s.responseBody).toArray())), t.fn.fix_iOS6_1_problem(!1))
		}, s.send()
	} : function(t, e) {
		e("no support")
	};
	var i = function(t) {
		for (var e, i, s, n, r, a = new Int32Array(t.length / 3), o = 0, h = t.length, u = 0; h > o;) e = t[o++], i = t[o++], s = t[o++], n = e + (i << 8) + (s << 16), r = 8388608 & n ? n - 16777216 : n, a[u++] = r;
		return a
	};
	e.wav_decode = function() {
		var t = function(t, e, s) {
			if ("RIFF" !== String.fromCharCode(t[0], t[1], t[2], t[3])) return e(!1);
			var n = t[4] + (t[5] << 8) + (t[6] << 16) + (t[7] << 24);
			if (n + 8 !== t.length) return e(!1);
			if ("WAVE" !== String.fromCharCode(t[8], t[9], t[10], t[11])) return e(!1);
			if ("fmt " !== String.fromCharCode(t[12], t[13], t[14], t[15])) return e(!1);
			for (var r = t[22] + (t[23] << 8), a = t[24] + (t[25] << 8) + (t[26] << 16) + (t[27] << 24), o = t[34] + (t[35] << 8), h = 36; t.length > h && "data" !== String.fromCharCode(t[h], t[h + 1], t[h + 2], t[h + 3]);) h += 1;
			if (h >= t.length) return e(!1);
			h += 4;
			var u = t[h] + (t[h + 1] << 8) + (t[h + 2] << 16) + (t[h + 3] << 24),
				l = (u / r >> 1) / a;
			if (h += 4, u > t.length - h) return e(!1);
			var c, f, p;
			c = new Float32Array(0 | l * a), 2 === r && (f = new Float32Array(c.length), p = new Float32Array(c.length)), e({
				samplerate: a,
				channels: r,
				buffer: [c, f, p],
				duration: l
			}), 8 === o ? t = new Int8Array(t.buffer, h) : 16 === o ? t = new Int16Array(t.buffer, h) : 32 === o ? t = new Int32Array(t.buffer, h) : 24 === o && (t = i(new Uint8Array(t.buffer, h)));
			var d, m, v, g = 1 / ((1 << o - 1) - 1);
			if (2 === r)
				for (h = m = 0, d = c.length; d > h; ++h) v = f[h] = t[m++] * g, v += p[h] = t[m++] * g, c[h] = .5 * v;
			else
				for (h = 0, d = c.length; d > h; ++h) c[h] = t[h] * g;
			s()
		};
		return function(i, s, n) {
			"string" == typeof i ? e.getBinaryWithPath(i, function(e) {
				t(e, s, n)
			}) : t(i, s, n)
		}
	}(), e.webkit_decode = function() {
		if ("undefined" != typeof webkitAudioContext) {
			var i = t.fn._audioContext,
				s = function(t, e, s) {
					var n, r, a, o, h;
					if ("string" == typeof t) return s(!1);
					var u;
					try {
						u = i.createBuffer(t.buffer, !1)
					} catch (l) {
						return e(!1)
					}
					n = i.sampleRate, r = u.numberOfChannels, 2 === r ? (a = u.getChannelData(0), o = u.getChannelData(1)) : a = o = u.getChannelData(0), h = a.length / n;
					for (var c = new Float32Array(a), f = 0, p = c.length; p > f; ++f) c[f] = .5 * (c[f] + o[f]);
					e({
						samplerate: n,
						channels: r,
						buffer: [c, a, o],
						duration: h
					}), s()
				};
			return function(t, i, n) {
				if (t instanceof File) {
					var r = new FileReader;
					r.onload = function(t) {
						s(new Uint8Array(t.target.result), i, n)
					}, r.readAsArrayBuffer(t)
				} else "string" == typeof t ? e.getBinaryWithPath(t, function(t) {
					s(t, i, n)
				}) : s(t, i, n)
			}
		}
	}(), e.moz_decode = function() {
		return "function" == typeof Audio && "function" == typeof(new Audio).mozSetup ? function(t, e, i) {
			var s, n, r, a, o, h, u = 0,
				l = new Audio(t);
			l.volume = 0, l.addEventListener("loadedmetadata", function() {
				s = l.mozSampleRate, n = l.mozChannels, h = l.duration, r = new Float32Array(0 | l.duration * s), 2 === n && (a = new Float32Array(0 | l.duration * s), o = new Float32Array(0 | l.duration * s)), 2 === n ? l.addEventListener("MozAudioAvailable", function(t) {
					for (var e, i = t.frameBuffer, s = 0, n = i.length; n > s; s += 2) e = a[u] = i[s], e += o[u] = i[s + 1], r[u] = .5 * e, u += 1
				}, !1) : l.addEventListener("MozAudioAvailable", function(t) {
					for (var e = t.frameBuffer, i = 0, s = e.length; s > i; ++i) r[i] = e[i], u += 1
				}, !1), l.play(), setTimeout(function() {
					e({
						samplerate: s,
						channels: n,
						buffer: [r, a, o],
						duration: h
					})
				}, 1e3)
			}, !1), l.addEventListener("ended", function() {
				i()
			}, !1), l.load()
		} : void 0
	}()
}(timbre),
function(t) {
	"use strict";

	function e(t) {
		this.samplerate = t || 44100, this.value = s, this.status = f, this.curve = "linear", this.step = 1, this.releaseNode = null, this.loopNode = null, this.emit = null, this._envValue = new i(t), this._table = [], this._initValue = s, this._curveValue = 0, this._defaultCurveType = r, this._index = 0, this._counter = 0
	}

	function i(t) {
		this.samplerate = t, this.value = s, this.step = 1, this._curveType = r, this._curveValue = 0, this._grow = 0, this._a2 = 0, this._b1 = 0, this._y1 = 0, this._y2 = 0
	}
	var s = e.ZERO = 1e-6,
		n = e.CurveTypeSet = 0,
		r = e.CurveTypeLin = 1,
		a = e.CurveTypeExp = 2,
		o = e.CurveTypeSin = 3,
		h = e.CurveTypeWel = 4,
		u = e.CurveTypeCurve = 5,
		l = e.CurveTypeSqr = 6,
		c = e.CurveTypeCub = 7,
		f = e.StatusWait = 0,
		p = e.StatusGate = 1,
		d = e.StatusSustain = 2,
		m = e.StatusRelease = 3,
		v = e.StatusEnd = 4,
		g = {
			set: n,
			lin: r,
			linear: r,
			exp: a,
			exponential: a,
			sin: o,
			sine: o,
			wel: h,
			welch: h,
			sqr: l,
			squared: l,
			cub: c,
			cubed: c
		};
	e.CurveTypeDict = g;
	var b = e.prototype;
	b.clone = function() {
		var t = new e(this.samplerate);
		return t._table = this._table, t._initValue = this._initValue, t.setCurve(this.curve), null !== this.releaseNode && t.setReleaseNode(this.releaseNode + 1), null !== this.loopNode && t.setLoopNode(this.loopNode + 1), t.setStep(this.step), t.reset(), t
	}, b.setTable = function(t) {
		this._initValue = t[0], this._table = t.slice(1), this.value = this._envValue.value = this._initValue, this._index = 0, this._counter = 0, this.status = f
	}, b.setCurve = function(t) {
		"number" == typeof t ? (this._defaultCurveType = u, this._curveValue = t, this.curve = t) : (this._defaultCurveType = g[t] || null, this.curve = t)
	}, b.setReleaseNode = function(t) {
		"number" == typeof t && t > 0 && (this.releaseNode = t - 1)
	}, b.setLoopNode = function(t) {
		"number" == typeof t && t > 0 && (this.loopNode = t - 1)
	}, b.setStep = function(t) {
		this.step = this._envValue.step = t
	}, b.reset = function() {
		this.value = this._envValue.value = this._initValue, this._index = 0, this._counter = 0, this.status = f
	}, b.release = function() {
		null !== this.releaseNode && (this._counter = 0, this.status = m)
	}, b.getInfo = function(t) {
		var e, i, s = this._table,
			n = 0,
			r = 1 / 0,
			a = 1 / 0,
			o = !1;
		for (e = 0, i = s.length; i > e; ++e) {
			this.loopNode === e && (r = n), this.releaseNode === e && (t > n ? n += t : n = t, a = n);
			var h = s[e];
			Array.isArray(h) && (n += h[1])
		}
		return 1 / 0 !== r && 1 / 0 === a && (n += t, o = !0), {
			totalDuration: n,
			loopBeginTime: r,
			releaseBeginTime: a,
			isEndlessLoop: o
		}
	}, b.calcStatus = function() {
		var t, e, i, s, a = this.status,
			o = this._table,
			h = this._index,
			l = this._counter,
			c = this._curveValue,
			g = this._defaultCurveType,
			b = this.loopNode,
			_ = this.releaseNode,
			y = this._envValue,
			w = null;
		switch (a) {
			case f:
			case v:
				break;
			case p:
			case m:
				for (; 0 >= l;)
					if (h >= o.length) {
						if (a === p && null !== b) {
							h = b;
							continue
						}
						a = v, l = 1 / 0, s = n, w = "ended"
					} else
				if (a !== p || h !== _) t = o[h++], e = t[0], s = null === t[2] ? g : t[2], s === u && (c = t[3], .001 > Math.abs(c) && (s = r)), i = t[1], l = y.setNext(e, i, s, c);
				else {
					if (null !== b && _ > b) {
						h = b;
						continue
					}
					a = d, l = 1 / 0, s = n, w = "sustained"
				}
		}
		return this.status = a, this.emit = w, this._index = h, this._counter = l, a
	}, b.next = function() {
		return 1 & this.calcStatus() && (this.value = this._envValue.next() || s), this._counter -= 1, this.value
	}, b.process = function(t) {
		var e, i = this._envValue,
			n = t.length;
		if (1 & this.calcStatus())
			for (e = 0; n > e; ++e) t[e] = i.next() || s;
		else {
			var r = this.value || s;
			for (e = 0; n > e; ++e) t[e] = r
		}
		this.value = t[n - 1], this._counter -= t.length
	}, i.prototype.setNext = function(t, e, i, s) {
		var f, p, d, m, v, g, b, y = this.step,
			w = this.value,
			x = 0 | .001 * e * this.samplerate / y;
		switch (1 > x && (x = 1, i = n), i) {
			case n:
				this.value = t;
				break;
			case r:
				f = (t - w) / x;
				break;
			case a:
				f = 0 !== w ? Math.pow(t / w, 1 / x) : 0;
				break;
			case o:
				p = Math.PI / x, m = .5 * (t + w), v = 2 * Math.cos(p), g = .5 * (t - w), b = g * Math.sin(.5 * Math.PI - p), w = m - g;
				break;
			case h:
				p = .5 * Math.PI / x, v = 2 * Math.cos(p), t >= w ? (m = w, g = 0, b = -Math.sin(p) * (t - w)) : (m = t, g = w - t, b = Math.cos(p) * (w - t)), w = m + g;
				break;
			case u:
				d = (t - w) / (1 - Math.exp(s)), m = w + d, v = d, f = Math.exp(s / x);
				break;
			case l:
				g = Math.sqrt(w), b = Math.sqrt(t), f = (b - g) / x;
				break;
			case c:
				g = Math.pow(w, .33333333), b = Math.pow(t, .33333333), f = (b - g) / x
		}
		return this.next = _[i], this._grow = f, this._a2 = m, this._b1 = v, this._y1 = g, this._y2 = b, x
	};
	var _ = [];
	_[n] = function() {
		return this.value
	}, _[r] = function() {
		return this.value += this._grow, this.value
	}, _[a] = function() {
		return this.value *= this._grow, this.value
	}, _[o] = function() {
		var t = this._b1 * this._y1 - this._y2;
		return this.value = this._a2 - t, this._y2 = this._y1, this._y1 = t, this.value
	}, _[h] = function() {
		var t = this._b1 * this._y1 - this._y2;
		return this.value = this._a2 + t, this._y2 = this._y1, this._y1 = t, this.value
	}, _[u] = function() {
		return this._b1 *= this._grow, this.value = this._a2 - this._b1, this.value
	}, _[l] = function() {
		return this._y1 += this._grow, this.value = this._y1 * this._y1, this.value
	}, _[c] = function() {
		return this._y1 += this._grow, this.value = this._y1 * this._y1 * this._y1, this.value
	}, i.prototype.next = _[n], t.modules.Envelope = e, t.modules.EnvelopeValue = i
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		e = "number" == typeof e ? e : 512, e = 1 << Math.ceil(Math.log(e) * Math.LOG2E), this.length = e, this.buffer = new t.fn.SignalArray(e), this.real = new t.fn.SignalArray(e), this.imag = new t.fn.SignalArray(e), this._real = new t.fn.SignalArray(e), this._imag = new t.fn.SignalArray(e), this.mag = new t.fn.SignalArray(e >> 1), this.minDecibels = -30, this.maxDecibels = -100;
		var i = s.get(e);
		this._bitrev = i.bitrev, this._sintable = i.sintable, this._costable = i.costable
	}
	var i = e.prototype;
	i.setWindow = function(e) {
		if ("string" == typeof e) {
			var i = /([A-Za-z]+)(?:\(([01]\.?\d*)\))?/.exec(e);
			if (null !== i) {
				var s = i[1].toLowerCase(),
					r = void 0 !== i[2] ? +i[2] : .25,
					a = n[s];
				if (a) {
					this._window || (this._window = new t.fn.SignalArray(this.length));
					var o = this._window,
						h = 0,
						u = this.length;
					for (r = 0 > r ? 0 : r > 1 ? 1 : r; u > h; ++h) o[h] = a(h, u, r);
					this.windowName = e
				}
			}
		}
	}, i.forward = function(t) {
		var e, i, s, n, r, a, o, h, u, l, c, f = this.buffer,
			p = this.real,
			d = this.imag,
			m = this._window,
			v = this._bitrev,
			g = this._sintable,
			b = this._costable,
			_ = f.length;
		if (m)
			for (e = 0; _ > e; ++e) f[e] = t[e] * m[e];
		else f.set(t);
		for (e = 0; _ > e; ++e) p[e] = f[v[e]], d[e] = 0;
		for (s = 1; _ > s; s = n)
			for (r = 0, n = s + s, a = _ / n, i = 0; s > i; i++) {
				for (o = b[r], h = g[r], e = i; _ > e; e += n) u = e + s, l = h * d[u] + o * p[u], c = o * d[u] - h * p[u], p[u] = p[e] - l, p[e] += l, d[u] = d[e] - c, d[e] += c;
				r += a
			}
		var y, w, x = this.mag;
		for (e = 0; _ > e; ++e) y = p[e], w = d[e], x[e] = Math.sqrt(y * y + w * w);
		return {
			real: p,
			imag: d
		}
	}, i.inverse = function(t, e) {
		var i, s, n, r, a, o, h, u, l, c, f, p = this.buffer,
			d = this._real,
			m = this._imag,
			v = this._bitrev,
			g = this._sintable,
			b = this._costable,
			_ = p.length;
		for (i = 0; _ > i; ++i) s = v[i], d[i] = +t[s], m[i] = -e[s];
		for (n = 1; _ > n; n = r)
			for (a = 0, r = n + n, o = _ / r, s = 0; n > s; s++) {
				for (h = b[a], u = g[a], i = s; _ > i; i += r) l = i + n, c = u * m[l] + h * d[l], f = h * m[l] - u * d[l], d[l] = d[i] - c, d[i] += c, m[l] = m[i] - f, m[i] += f;
				a += o
			}
		for (i = 0; _ > i; ++i) p[i] = d[i] / _;
		return p
	}, i.getFrequencyData = function(t) {
		var e, i = this.minDecibels,
			s = Math.min(this.mag.length, t.length);
		if (s) {
			var n, r = this.mag,
				a = 0;
			for (e = 0; s > e; ++e) n = r[e], t[e] = n ? 20 * Math.log(n) * Math.LOG10E : i, t[e] > a && (a = t[e])
		}
		return t
	};
	var s = {
		get: function(e) {
			return s[e] || function() {
				var i, n, r = function() {
						var t, i, s, n, r;
						for (t = new Int16Array(e), r = e >> 1, i = s = 0; t[i] = s, !(++i >= e);) {
							for (n = r; s >= n;) s -= n, n >>= 1;
							s += n
						}
						return t
					}(),
					a = Math.floor(Math.log(e) / Math.LN2),
					o = new t.fn.SignalArray((1 << a) - 1),
					h = new t.fn.SignalArray((1 << a) - 1),
					u = 2 * Math.PI;
				for (i = 0, n = o.length; n > i; ++i) o[i] = Math.sin(u * (i / e)), h[i] = Math.cos(u * (i / e));
				return s[e] = {
					bitrev: r,
					sintable: o,
					costable: h
				}, s[e]
			}()
		}
	}, n = function() {
			var t = Math.PI,
				e = 2 * Math.PI,
				i = Math.abs,
				s = Math.pow,
				n = Math.cos,
				r = Math.sin,
				a = function(e) {
					return r(t * e) / (t * e)
				}, o = Math.E;
			return {
				rectangular: function() {
					return 1
				},
				hann: function(t, i) {
					return .5 * (1 - n(e * t / (i - 1)))
				},
				hamming: function(t, i) {
					return .54 - .46 * n(e * t / (i - 1))
				},
				tukery: function(e, i, s) {
					return s * (i - 1) / 2 > e ? .5 * (1 + n(t * (2 * e / (s * (i - 1)) - 1))) : e > (i - 1) * (1 - s / 2) ? .5 * (1 + n(t * (2 * e / (s * (i - 1)) - 2 / s + 1))) : 1
				},
				cosine: function(e, i) {
					return r(t * e / (i - 1))
				},
				lanczos: function(t, e) {
					return a(2 * t / (e - 1) - 1)
				},
				triangular: function(t, e) {
					return 2 / (e + 1) * ((e + 1) / 2 - i(t - (e - 1) / 2))
				},
				bartlett: function(t, e) {
					return 2 / (e - 1) * ((e - 1) / 2 - i(t - (e - 1) / 2))
				},
				gaussian: function(t, e, i) {
					return s(o, -.5 * s((t - (e - 1) / 2) / (i * (e - 1) / 2), 2))
				},
				bartlettHann: function(t, s) {
					return .62 - .48 * i(t / (s - 1) - .5) - .38 * n(e * t / (s - 1))
				},
				blackman: function(i, s, r) {
					var a = (1 - r) / 2,
						o = .5,
						h = r / 2;
					return a - o * n(e * i / (s - 1)) + h * n(4 * t * i / (s - 1))
				}
			}
		}();
	t.modules.FFT = e
}(timbre),
function(t) {
	"use strict";

	function e(t) {
		this.samplerate = t || 44100, this.wave = null, this.step = 1, this.frequency = 0, this.value = 0, this.phase = 0, this.feedback = !1, this._x = 0, this._lastouts = 0, this._coeff = r / this.samplerate, this._radtoinc = r / (2 * Math.PI)
	}

	function i(t, e, i, s) {
		var n, r, a, o, h, u = l[e];
		if (void 0 !== u) {
			switch ("function" == typeof u && (u = u()), i) {
				case "@1":
					for (r = 512; 1024 > r; ++r) u[r] = 0;
					break;
				case "@2":
					for (r = 512; 1024 > r; ++r) u[r] = Math.abs(u[r]);
					break;
				case "@3":
					for (r = 256; 512 > r; ++r) u[r] = 0;
					for (r = 512; 768 > r; ++r) u[r] = Math.abs(u[r]);
					for (r = 768; 1024 > r; ++r) u[r] = 0;
					break;
				case "@4":
					for (n = new Float32Array(1024), r = 0; 512 > r; ++r) n[r] = u[r << 1];
					u = n;
					break;
				case "@5":
					for (n = new Float32Array(1024), r = 0; 512 > r; ++r) n[r] = Math.abs(u[r << 1]);
					u = n
			}
			if (void 0 !== s && 50 !== s) {
				for (s *= .01, s = 0 > s ? 0 : s > 1 ? 1 : s, n = new Float32Array(1024), a = 0 | 1024 * s, r = 0; a > r; ++r) n[r] = u[0 | 512 * (r / a)];
				for (h = 1024 - a, o = 0; 1024 > r; ++r, ++o) n[r] = u[0 | 512 * (o / h) + 512];
				u = n
			}
			if ("+" === t)
				for (r = 0; 1024 > r; ++r) u[r] = .5 * u[r] + .5;
			else if ("-" === t)
				for (r = 0; 1024 > r; ++r) u[r] *= -1;
			return u
		}
	}

	function s(t) {
		var e = new Float32Array(1024),
			i = t.length >> 1;
		if (-1 !== [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].indexOf(i))
			for (var s = 0, n = 0; i > s; ++s) {
				var r = parseInt(t.substr(2 * s, 2), 16);
				r = 128 & r ? (r - 256) / 128 : r / 127;
				for (var a = 0, o = 1024 / i; o > a; ++a) e[n++] = r
			}
		return e
	}

	function n(t) {
		var e = new Float32Array(1024);
		if (8 === t.length) {
			var i, s, n = parseInt(t, 16),
				r = new Float32Array(8);
			for (r[0] = 1, i = 0; 7 > i; ++i) r[i + 1] = .0625 * (15 & n), n >>= 4;
			for (i = 0; 8 > i; ++i) {
				var a = 0,
					o = (i + 1) / 1024;
				for (s = 0; 1024 > s; ++s) e[s] += Math.sin(2 * Math.PI * a) * r[i], a += o
			}
			var h, u = 0;
			for (i = 0; 1024 > i; ++i)(h = Math.abs(e[i])) > u && (u = h);
			if (u > 0)
				for (i = 0; 1024 > i; ++i) e[i] /= u
		}
		return e
	}
	var r = 1024,
		a = r - 1,
		o = e.prototype;
	o.setWave = function(e) {
		var i, s, n = this.wave;
		if (this.wave || (this.wave = new Float32Array(r + 1)), "function" == typeof e)
			for (i = 0; r > i; ++i) n[i] = e(i / r);
		else if (t.fn.isSignalArray(e))
			if (e.length === n.length) n.set(e);
			else
				for (s = e.length / r, i = 0; r > i; ++i) n[i] = e[0 | i * s];
			else "string" == typeof e && void 0 !== (s = h(e)) && this.wave.set(s);
		this.wave[r] = this.wave[0]
	}, o.clone = function() {
		var t = new e(this.samplerate);
		return t.wave = this.wave, t.step = this.step, t.frequency = this.frequency, t.value = this.value, t.phase = this.phase, t.feedback = this.feedback, t
	}, o.reset = function() {
		this._x = 0
	}, o.next = function() {
		var t = this._x,
			e = 0 | t + this.phase * this._radtoinc;
		return this.value = this.wave[e & a], t += this.frequency * this._coeff * this.step, t > r && (t -= r), this._x = t, this.value
	}, o.process = function(t) {
		var e, i, s, n, o, h, u = this.wave,
			l = this._radtoinc,
			c = this._x,
			f = this.frequency * this._coeff,
			p = this.step;
		if (this.feedback) {
			var d = this._lastouts;
			for (l *= this.phase, h = 0; p > h; ++h) e = c + d * l, i = 0 | e, s = e - i, i &= a, n = u[i], o = u[i + 1], t[h] = d = n + s * (o - n), c += f;
			this._lastouts = d
		} else {
			var m = this.phase * l;
			for (h = 0; p > h; ++h) e = c + m, i = 0 | e, s = e - i, i &= a, n = u[i], o = u[i + 1], t[h] = n + s * (o - n), c += f
		}
		c > r && (c -= r), this._x = c, this.value = t[t.length - 1]
	}, o.processWithFreqArray = function(t, e) {
		var i, s, n, o, h, u, l = this.wave,
			c = this._radtoinc,
			f = this._x,
			p = this._coeff,
			d = this.step;
		if (this.feedback) {
			var m = this._lastouts;
			for (c *= this.phase, u = 0; d > u; ++u) i = f + m * c, s = 0 | i, n = i - s, s &= a, o = l[s], h = l[s + 1], t[u] = m = o + n * (h - o), f += e[u] * p;
			this._lastouts = m
		} else {
			var v = this.phase * this._radtoinc;
			for (u = 0; d > u; ++u) i = f + v, s = 0 | i, n = i - s, s &= a, o = l[s], h = l[s + 1], t[u] = o + n * (h - o), f += e[u] * p
		}
		f > r && (f -= r), this._x = f, this.value = t[t.length - 1]
	}, o.processWithPhaseArray = function(t, e) {
		var i, s, n, o, h, u, l = this.wave,
			c = this._radtoinc,
			f = this._x,
			p = this.frequency * this._coeff,
			d = this.step;
		if (this.feedback) {
			var m = this._lastouts;
			for (c *= this.phase, u = 0; d > u; ++u) i = f + m * c, s = 0 | i, n = i - s, s &= a, o = l[s], h = l[s + 1], t[u] = m = o + n * (h - o), f += p;
			this._lastouts = m
		} else
			for (u = 0; d > u; ++u) i = f + e[u] * c, s = 0 | i, n = i - s, s &= a, o = l[s], h = l[s + 1], t[u] = o + n * (h - o), f += p;
		f > r && (f -= r), this._x = f, this.value = t[t.length - 1]
	}, o.processWithFreqAndPhaseArray = function(t, e, i) {
		var s, n, o, h, u, l, c = this.wave,
			f = this._radtoinc,
			p = this._x,
			d = this._coeff,
			m = this.step;
		if (this.feedback) {
			var v = this._lastouts;
			for (f *= this.phase, l = 0; m > l; ++l) s = p + v * f, n = 0 | s, o = s - n, n &= a, h = c[n], u = c[n + 1], t[l] = v = h + o * (u - h), p += e[l] * d;
			this._lastouts = v
		} else
			for (l = 0; m > l; ++l) s = p + i[l] * r, n = 0 | s, o = s - n, n &= a, h = c[n], u = c[n + 1], t[l] = h + o * (u - h), p += e[l] * d;
		p > r && (p -= r), this._x = p, this.value = t[t.length - 1]
	};
	var h = function(t) {
		var e = l[t];
		if (void 0 !== e) return "function" == typeof e && (e = e()), e;
		var r;
		if (r = /^([\-+]?)(\w+)(?:\((@[0-7])?:?(\d+)?\))?$/.exec(t), null !== r) {
			var a = r[1],
				o = r[2],
				h = r[3],
				u = r[4];
			if (e = i(a, o, h, u), void 0 !== e) return l[t] = e, e
		}
		return r = /^wavb\(((?:[0-9a-fA-F][0-9a-fA-F])+)\)$/.exec(t), null !== r ? s(r[1]) : (r = /^wavc\(([0-9a-fA-F]{8})\)$/.exec(t), null !== r ? n(r[1]) : void 0)
	};
	e.getWavetable = h;
	var u = function(e, i) {
		var s, n, r = new Float32Array(1024);
		if ("function" == typeof i)
			for (n = 0; 1024 > n; ++n) r[n] = i(n / 1024);
		else if (t.fn.isSignalArray(i))
			if (i.length === r.length) r.set(i);
			else
				for (s = i.length / 1024, n = 0; 1024 > n; ++n) r[n] = i[0 | n * s];
		l[e] = r
	};
	e.setWavetable = u;
	var l = {
		sin: function() {
			for (var t = new Float32Array(1024), e = 0; 1024 > e; ++e) t[e] = Math.sin(2 * Math.PI * (e / 1024));
			return t
		},
		cos: function() {
			for (var t = new Float32Array(1024), e = 0; 1024 > e; ++e) t[e] = Math.cos(2 * Math.PI * (e / 1024));
			return t
		},
		pulse: function() {
			for (var t = new Float32Array(1024), e = 0; 1024 > e; ++e) t[e] = 512 > e ? 1 : -1;
			return t
		},
		tri: function() {
			for (var t, e = new Float32Array(1024), i = 0; 1024 > i; ++i) t = i / 1024 - .25, e[i] = 1 - 4 * Math.abs(Math.round(t) - t);
			return e
		},
		saw: function() {
			for (var t, e = new Float32Array(1024), i = 0; 1024 > i; ++i) t = i / 1024, e[i] = 2 * (t - Math.round(t));
			return e
		},
		fami: function() {
			for (var t = [0, .125, .25, .375, .5, .625, .75, .875, .875, .75, .625, .5, .375, .25, .125, 0, -.125, -.25, -.375, -.5, -.625, -.75, -.875, -1, -1, -.875, -.75, -.625, -.5, -.375, -.25, -.125], e = new Float32Array(1024), i = 0; 1024 > i; ++i) e[i] = t[0 | i / 1024 * t.length];
			return e
		},
		konami: function() {
			for (var t = [-.625, -.875, -.125, .75, .5, .125, .5, .75, .25, -.125, .5, .875, .625, 0, .25, .375, -.125, -.75, 0, .625, .125, -.5, -.375, -.125, -.75, -1, -.625, 0, -.375, -.875, -.625, -.25], e = new Float32Array(1024), i = 0; 1024 > i; ++i) e[i] = t[0 | i / 1024 * t.length];
			return e
		}
	};
	t.modules.Oscillator = e
}(timbre),
function(t) {
	"use strict";

	function e(e, a) {
		this.samplerate = e;
		var o, h, u = e / 44100;
		for (h = 2 * n.length, this.comb = Array(h), this.combout = Array(h), o = 0; h > o; ++o) this.comb[o] = new i(n[o % n.length] * u), this.combout[o] = new t.fn.SignalArray(a);
		for (h = 2 * r.length, this.allpass = Array(h), o = 0; h > o; ++o) this.allpass[o] = new s(r[o % r.length] * u);
		this.outputs = [new t.fn.SignalArray(a), new t.fn.SignalArray(a)], this.damp = 0, this.wet = .33, this.setRoomSize(.5), this.setDamp(.5)
	}

	function i(e) {
		this.buffer = new t.fn.SignalArray(0 | e), this.buffersize = this.buffer.length, this.bufidx = 0, this.feedback = 0, this.filterstore = 0, this.damp = 0
	}

	function s(e) {
		this.buffer = new t.fn.SignalArray(0 | e), this.buffersize = this.buffer.length, this.bufidx = 0
	}
	var n = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617],
		r = [225, 556, 441, 341],
		a = e.prototype;
	a.setRoomSize = function(t) {
		var e = this.comb,
			i = .28 * t + .7;
		this.roomsize = t, e[0].feedback = e[1].feedback = e[2].feedback = e[3].feedback = e[4].feedback = e[5].feedback = e[6].feedback = e[7].feedback = e[8].feedback = e[9].feedback = e[10].feedback = e[11].feedback = e[12].feedback = e[13].feedback = e[14].feedback = e[15].feedback = i
	}, a.setDamp = function(t) {
		var e = this.comb,
			i = .4 * t;
		this.damp = t, e[0].damp = e[1].damp = e[2].damp = e[3].damp = e[4].damp = e[5].damp = e[6].damp = e[7].damp = e[8].damp = e[9].damp = e[10].damp = e[11].damp = e[12].damp = e[13].damp = e[14].damp = e[15].damp = i
	}, a.process = function(t, e) {
		var i, s = this.comb,
			n = this.combout,
			r = this.allpass,
			a = this.outputs[0],
			o = this.outputs[1],
			h = this.wet,
			u = 1 - h,
			l = t.length;
		for (s[0].process(t, n[0]), s[1].process(t, n[1]), s[2].process(t, n[2]), s[3].process(t, n[3]), s[4].process(t, n[4]), s[5].process(t, n[5]), s[6].process(t, n[6]), s[7].process(t, n[7]), s[8].process(e, n[8]), s[9].process(e, n[9]), s[10].process(e, n[10]), s[11].process(e, n[11]), s[12].process(e, n[12]), s[13].process(e, n[13]), s[14].process(e, n[14]), s[15].process(e, n[15]), i = 0; l > i; ++i) a[i] = n[0][i] + n[1][i] + n[2][i] + n[3][i] + n[4][i] + n[5][i] + n[6][i] + n[7][i], o[i] = n[8][i] + n[9][i] + n[10][i] + n[11][i] + n[12][i] + n[13][i] + n[14][i] + n[15][i];
		for (r[0].process(a, a), r[1].process(a, a), r[2].process(a, a), r[3].process(a, a), r[4].process(o, o), r[5].process(o, o), r[6].process(o, o), r[7].process(o, o), i = 0; l > i; ++i) t[i] = a[i] * h + t[i] * u, e[i] = o[i] * h + e[i] * u
	}, i.prototype.process = function(t, e) {
		var i, s, n, r = this.buffer,
			a = this.buffersize,
			o = this.bufidx,
			h = this.filterstore,
			u = this.feedback,
			l = this.damp,
			c = 1 - l,
			f = t.length;
		for (n = 0; f > n; ++n) i = .015 * t[n], s = r[o], h = s * c + h * l, r[o] = i + h * u, ++o >= a && (o = 0), e[n] = s;
		this.bufidx = o, this.filterstore = h
	}, s.prototype.process = function(t, e) {
		var i, s, n, r, a = this.buffer,
			o = this.buffersize,
			h = this.bufidx,
			u = t.length;
		for (r = 0; u > r; ++r) i = t[r], n = a[h], s = -i + n, a[h] = i + .5 * n, ++h >= o && (h = 0), e[r] = s;
		this.bufidx = h
	}, t.modules.Reverb = e
}(timbre),
function(t) {
	"use strict";

	function e(t) {
		return new i(t)
	}

	function i(t) {
		if (this.fragments = [], t) {
			var e = t.samplerate || 44100,
				i = t.buffer[0].length / e;
			this.fragments.push(new s(t, 0, i))
		}
	}

	function s(t, e, i, s, n, r, o) {
		t || (t = a), this.buffer = t.buffer[0], this.samplerate = t.samplerate || 44100, this.start = e, this._duration = i, this.reverse = s || !1, this.pitch = n || 100, this.stretch = r || !1, this.pan = o || 50
	}

	function n(t, e) {
		this.tape = t, this.fragments = t.fragments, this.samplerate = e || 44100, this.isEnded = !1, this.buffer = null, this.bufferIndex = 0, this.bufferIndexIncr = 0, this.bufferBeginIndex = 0, this.bufferEndIndex = 0, this.fragment = null, this.fragmentIndex = 0, this.panL = .5, this.panR = .5
	}
	var r = new Float32Array(60),
		a = {
			buffer: r,
			samplerate: 1
		};
	e.silence = function(t) {
		return new e(a).slice(0, 1).fill(t)
	}, e.join = function(t) {
		for (var e = new i, s = 0; t.length > s; s++) t[s] instanceof i && e.add_fragments(t[s].fragments);
		return e
	}, e.Tape = i, i.prototype.add_fragment = function(t) {
		return this.fragments.push(t), this
	}, i.prototype.add_fragments = function(t) {
		for (var e = 0; t.length > e; e++) this.fragments.push(t[e]);
		return this
	}, i.prototype.duration = function() {
		for (var t = 0, e = 0; this.fragments.length > e; e++) t += this.fragments[e].duration();
		return t
	}, i.prototype.slice = function(t, e) {
		var s = this.duration();
		t + e > s && (e = s - t);
		for (var n = new i, r = t, a = e, o = 0; this.fragments.length > o; o++) {
			var h = this.fragments[o],
				u = h.create(r, a),
				l = u[0];
			if (r = u[1], a = u[2], l && n.add_fragment(l), 0 === a) break
		}
		return n
	}, i.prototype.cut = i.prototype.slice, i.prototype.concat = function(t) {
		var e = new i;
		return e.add_fragments(this.fragments), e.add_fragments(t.fragments), e
	}, i.prototype.loop = function(t) {
		var e, s = [];
		for (e = 0; this.fragments.length > e; e++) s.push(this.fragments[e].clone());
		var n = new i;
		for (e = 0; t > e; e++) n.add_fragments(s);
		return n
	}, i.prototype.times = i.prototype.loop, i.prototype.split = function(t) {
		for (var e = this.duration() / t, i = [], s = 0; t > s; s++) i.push(this.slice(s * e, e));
		return i
	}, i.prototype.fill = function(t) {
		var e = this.duration();
		if (0 === e) throw "EmptyFragment";
		var i = 0 | t / e,
			s = t % e;
		return this.loop(i).plus(this.slice(0, s))
	}, i.prototype.replace = function(t, s, n) {
		var r = new i,
			a = t + s;
		r = r.plus(this.slice(0, t));
		var o = r.duration();
		t > o && (r = r.plus(e.silence(t - o))), r = r.plus(n);
		var h = this.duration();
		return h > a && (r = r.plus(this.slice(a, h - a))), r
	}, i.prototype.reverse = function() {
		for (var t = new i, e = this.fragments.length; e--;) {
			var s = this.fragments[e].clone();
			s.reverse = !s.isReversed(), t.add_fragment(s)
		}
		return t
	}, i.prototype.pitch = function(t, e) {
		var s = new i;
		e = e || !1;
		for (var n = 0; this.fragments.length > n; n++) {
			var r = this.fragments[n].clone();
			r.pitch *= .01 * t, r.stretch = e, s.add_fragment(r)
		}
		return s
	}, i.prototype.stretch = function(t) {
		var e = 100 * (1 / (.01 * t));
		return this.pitch(e, !0)
	}, i.prototype.pan = function(t) {
		var e = new i;
		t > 100 ? t = 100 : 0 > t && (t = 0);
		for (var s = 0; this.fragments.length > s; s++) {
			var n = this.fragments[s].clone();
			n.pan = t, e.add_fragment(n)
		}
		return e
	}, i.prototype.silence = function() {
		return e.silence(this.duration())
	}, i.prototype.join = function(t) {
		for (var e = new i, s = 0; t.length > s; s++) t[s] instanceof i && e.add_fragments(t[s].fragments);
		return e
	}, i.prototype.getBuffer = function() {
		var t = 44100;
		this.fragments.length > 0 && (t = this.fragments[0].samplerate);
		var e = new n(this, t),
			i = 0 | this.duration() * t;
		return {
			samplerate: t,
			buffer: e.fetch(i)
		}
	}, s.prototype.duration = function() {
		return this._duration * (100 / this.pitch)
	}, s.prototype.original_duration = function() {
		return this._duration
	}, s.prototype.isReversed = function() {
		return this.reverse
	}, s.prototype.isStretched = function() {
		return this.stretched
	}, s.prototype.create = function(t, e) {
		var i = this.duration();
		if (t >= i) return [null, t - i, e];
		var s, n = t + e >= i;
		n ? (s = i - t, e -= s) : (s = e, e = 0);
		var r = this.clone();
		return r.start = this.start + .01 * t * this.pitch, r._duration = .01 * s * this.pitch, r.reverse = !1, [r, 0, e]
	}, s.prototype.clone = function() {
		var t = new s;
		return t.buffer = this.buffer, t.samplerate = this.samplerate, t.start = this.start, t._duration = this._duration, t.reverse = this.reverse, t.pitch = this.pitch, t.stretch = this.stretch, t.pan = this.pan, t
	}, e.Fragment = s, e.TapeStream = n, n.prototype.reset = function() {
		return this.isEnded = !1, this.buffer = null, this.bufferIndex = 0, this.bufferIndexIncr = 0, this.bufferBeginIndex = 0, this.bufferEndIndex = 0, this.fragment = null, this.fragmentIndex = 0, this.panL = .5, this.panR = .5, this.isLooped = !1, this
	}, n.prototype.fetch = function(e) {
		var i = new t.fn.SignalArray(e),
			s = new t.fn.SignalArray(e),
			n = this.fragments;
		if (0 === n.length) return [i, s];
		for (var a, o = 100 * this.samplerate, h = this.buffer, u = this.bufferIndex, l = this.bufferIndexIncr, c = this.bufferBeginIndex, f = this.bufferEndIndex, p = this.fragment, d = this.fragmentIndex, m = this.panL, v = this.panR, g = 0; e > g; g++) {
			for (; !h || c > u || u >= f;)
				if (!p || n.length > d) p = n[d++], h = p.buffer, l = p.samplerate / o * p.pitch, c = p.start * p.samplerate, f = c + p.original_duration() * p.samplerate, a = .01 * p.pan, m = 1 - a, v = a, p.reverse ? (l *= -1, u = f + l) : u = c;
				else {
					if (!this.isLooped) {
						this.isEnded = !0, h = r, l = 0, u = 0;
						break
					}
					h = null, u = 0, l = 0, c = 0, f = 0, p = null, d = 0
				}
			i[g] = h[0 | u] * m, s[g] = h[0 | u] * v, u += l
		}
		return this.buffer = h, this.bufferIndex = u, this.bufferIndexIncr = l, this.bufferBeginIndex = c, this.bufferEndIndex = f, this.fragment = p, this.fragmentIndex = d, this.panL = m, this.panR = v, [i, s]
	}, t.modules.Scissor = e
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		this.samplerate = e;
		var i = Math.ceil(Math.log(1.5 * e) * Math.LOG2E);
		this.buffersize = 1 << i, this.buffermask = this.buffersize - 1, this.writeBufferL = new t.fn.SignalArray(this.buffersize), this.writeBufferR = new t.fn.SignalArray(this.buffersize), this.readBufferL = this.writeBufferL, this.readBufferR = this.writeBufferR, this.delaytime = null, this.feedback = null, this.cross = null, this.mix = null, this.prevL = 0, this.prevR = 0, this.readIndex = 0, this.writeIndex = 0, this.setParams(125, .25, !1, .45)
	}
	var i = e.prototype;
	i.setParams = function(t, e, i, s) {
		if (this.delaytime !== t) {
			this.delaytime = t;
			var n = 0 | .001 * t * this.samplerate;
			n > this.buffermask && (n = this.buffermask), this.writeIndex = this.readIndex + n & this.buffermask
		}
		this.feedback !== e && (this.feedback = e), this.cross !== i && (this.cross = i, i ? (this.readBufferL = this.writeBufferR, this.readBufferR = this.writeBufferL) : (this.readBufferL = this.writeBufferL, this.readBufferR = this.writeBufferR)), this.mix !== s && (this.mix = s)
	}, i.process = function(t, e) {
		var i, s, n = this.readBufferL,
			r = this.readBufferR,
			a = this.writeBufferL,
			o = this.writeBufferR,
			h = this.readIndex,
			u = this.writeIndex,
			l = this.buffermask,
			c = this.feedback,
			f = this.mix,
			p = 1 - f,
			d = this.prevL,
			m = this.prevR,
			v = t.length;
		for (s = 0; v > s; ++s) i = n[h], a[u] = t[s] - i * c, t[s] = d = .5 * (t[s] * p + i * f + d), i = r[h], o[u] = e[s] - i * c, e[s] = m = .5 * (e[s] * p + i * f + m), h += 1, u = u + 1 & l;
		this.readIndex = h & this.buffermask, this.writeIndex = u, this.prevL = d, this.prevR = m
	}, t.modules.StereoDelay = e
}(timbre),
function(t) {
	"use strict";
	var e = t.fn,
		i = t.modules;
	e.register("audio", function(t) {
		var i = e.getClass("buffer"),
			r = new i(t);
		return r.playbackState = e.FINISHED_STATE, r._.isLoaded = !1, Object.defineProperties(r, {
			isLoaded: {
				get: function() {
					return this._.isLoaded
				}
			}
		}), r.load = s, r.loadthis = n, r
	});
	var s = function(s) {
		var n = this,
			r = this._,
			a = new i.Deferred(this),
			o = arguments,
			h = 1;
		a.done(function() {
			n._.emit("done")
		}), "function" == typeof o[h] && (a.done(o[h++]), "function" == typeof o[h] && a.fail(o[h++])), r.loadedTime = 0;
		var u = function(i, s) {
			var r = n._;
			i ? (n.playbackState = e.PLAYING_STATE, r.samplerate = i.samplerate, r.channels = i.channels, r.bufferMix = null, r.buffer = i.buffer, r.phase = 0, r.phaseIncr = i.samplerate / t.samplerate, r.duration = 1e3 * i.duration, r.currentTime = 0, r.isReversed && (r.phaseIncr *= -1, r.phase = i.buffer[0].length + r.phaseIncr), n._.emit("loadedmetadata")) : a.reject(s)
		}, l = function() {
				n._.isLoaded = !0, n._.plotFlush = !0, n._.emit("loadeddata"), a.resolveWith(n)
			};
		return (new i.Decoder).decode(s, u, l), a.promise()
	}, n = function() {
			return s.apply(this, arguments), this
		}
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.biquad = new n(s.samplerate), s.freq = t(340), s.band = t(1), s.gain = t(0), s.plotBefore = a, s.plotRange = [-18, 18], s.plotFlush = !0
	}
	var i = t.fn,
		s = t.modules.FFT,
		n = t.modules.Biquad,
		r = 20;
	i.extend(e);
	var a = function(t, e, i, s, n) {
		t.lineWidth = 1, t.strokeStyle = "rgb(192, 192, 192)";
		for (var a = .5 * this._.samplerate, o = 1; 10 >= o; ++o)
			for (var h = 1; 4 >= h; h++) {
				var u = o * Math.pow(10, h);
				if (!(r >= u || u >= a)) {
					t.beginPath();
					var l = Math.log(u / r) / Math.log(a / r);
					l = (0 | l * s + e) + .5, t.moveTo(l, i), t.lineTo(l, i + n), t.stroke()
				}
			}
		var c = n / 6;
		for (o = 1; 6 > o; o++) {
			t.beginPath();
			var f = (0 | i + o * c) + .5;
			t.moveTo(e, f), t.lineTo(e + s, f), t.stroke()
		}
	}, o = e.prototype;
	Object.defineProperties(o, {
		type: {
			set: function(t) {
				var e = this._;
				t !== e.biquad.type && (e.biquad.setType(t), e.plotFlush = !0)
			},
			get: function() {
				return this._.biquad.type
			}
		},
		freq: {
			set: function(e) {
				this._.freq = t(e)
			},
			get: function() {
				return this._.freq
			}
		},
		cutoff: {
			set: function(e) {
				this._.freq = t(e)
			},
			get: function() {
				return this._.freq
			}
		},
		res: {
			set: function(e) {
				this._.band = t(e)
			},
			get: function() {
				return this._.band
			}
		},
		Q: {
			set: function(e) {
				this._.band = t(e)
			},
			get: function() {
				return this._.band
			}
		},
		band: {
			set: function(e) {
				this._.band = t(e)
			},
			get: function() {
				return this._.band
			}
		},
		gain: {
			set: function(e) {
				this._.gain = t(e)
			},
			get: function() {
				return this._.gain
			}
		}
	}), o.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this);
			var s = e.freq.process(t).cells[0][0],
				n = e.band.process(t).cells[0][0],
				r = e.gain.process(t).cells[0][0];
			(e.prevFreq !== s || e.prevband !== n || e.prevGain !== r) && (e.prevFreq = s, e.prevband = n, e.prevGain = r, e.biquad.setParams(s, n, r), e.plotFlush = !0), e.bypassed || e.biquad.process(this.cells[1], this.cells[2]), i.outputSignalAR(this)
		}
		return this
	};
	var h = new s(2048),
		u = t.Object.prototype.plot;
	o.plot = function(t) {
		if (this._.plotFlush) {
			var e = new n(this._.samplerate);
			e.setType(this.type), e.setParams(this.freq.valueOf(), this.band.valueOf(), this.gain.valueOf());
			var i = new Float32Array(h.length);
			i[0] = 1, e.process(i, i), h.forward(i);
			var s, a, o, l, c, f, p, d, m = 512,
				v = new Float32Array(m),
				g = .5 * this._.samplerate,
				b = new Float32Array(m);
			for (h.getFrequencyData(b), s = 0; m > s; ++s) o = Math.pow(g / r, s / m) * r, a = o / (g / b.length), l = 0 | a, c = a - l, 0 === l ? p = f = d = b[l] : (f = b[l - 1], p = b[l], d = (1 - c) * f + c * p), v[s] = d;
			this._.plotData = v, this._.plotFlush = null
		}
		return u.call(this, t)
	}, i.register("biquad", e), i.register("lowpass", function(t) {
		return new e(t).set("type", "lowpass")
	}), i.register("highpass", function(t) {
		return new e(t).set("type", "highpass")
	}), i.register("bandpass", function(t) {
		return new e(t).set("type", "bandpass")
	}), i.register("lowshelf", function(t) {
		return new e(t).set("type", "lowshelf")
	}), i.register("highshelf", function(t) {
		return new e(t).set("type", "highshelf")
	}), i.register("peaking", function(t) {
		return new e(t).set("type", "peaking")
	}), i.register("notch", function(t) {
		return new e(t).set("type", "notch")
	}), i.register("allpass", function(t) {
		return new e(t).set("type", "allpass")
	}), i.alias("lpf", "lowpass"), i.alias("hpf", "highpass"), i.alias("bpf", "bandpass"), i.alias("bef", "notch"), i.alias("brf", "notch"), i.alias("apf", "allpass")
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.fixAR(this);
		var s = this._;
		s.pitch = t(1), s.samplerate = 44100, s.channels = 0, s.bufferMix = null, s.buffer = [], s.isLooped = !1, s.isReversed = !1, s.duration = 0, s.currentTime = 0, s.currentTimeObj = null, s.phase = 0, s.phaseIncr = 0, s.onended = i.make_onended(this, 0), s.onlooped = r(this)
	}
	var i = t.fn,
		s = t.modules.Scissor.Tape,
		n = function(t) {
			return i.isSignalArray(t) || t instanceof Float32Array
		};
	i.extend(e);
	var r = function(t) {
		return function() {
			var e = t._;
			e.phase >= e.buffer[0].length ? e.phase = 0 : 0 > e.phase && (e.phase = e.buffer[0].length + e.phaseIncr), t._.emit("looped")
		}
	}, a = e.prototype,
		o = function(e) {
			var i = this._;
			if ("object" == typeof e) {
				var r, a, o = [];
				n(e) ? (o[0] = e, a = 1) : "object" == typeof e && (e instanceof t.Object ? e = e.buffer : e instanceof s && (e = e.getBuffer()), Array.isArray(e.buffer) ? n(e.buffer[0]) && (n(e.buffer[1]) && n(e.buffer[2]) ? (a = 2, o = e.buffer) : (a = 1, o = [e.buffer[0]])) : n(e.buffer) && (a = 1, o = [e.buffer]), "number" == typeof e.samplerate && (r = e.samplerate)), o.length && (r > 0 && (i.samplerate = e.samplerate), i.bufferMix = null, i.buffer = o, i.phase = 0, i.phaseIncr = i.samplerate / t.samplerate, i.duration = 1e3 * i.buffer[0].length / i.samplerate, i.currentTime = 0, i.plotFlush = !0, this.reverse(i.isReversed))
			}
		};
	Object.defineProperties(a, {
		buffer: {
			set: o,
			get: function() {
				var t = this._;
				return {
					samplerate: t.samplerate,
					channels: t.channels,
					buffer: t.buffer
				}
			}
		},
		pitch: {
			set: function(e) {
				this._.pitch = t(e)
			},
			get: function() {
				return this._.pitch
			}
		},
		isLooped: {
			get: function() {
				return this._.isLooped
			}
		},
		isReversed: {
			get: function() {
				return this._.isReversed
			}
		},
		samplerate: {
			get: function() {
				return this._.samplerate
			}
		},
		duration: {
			get: function() {
				return this._.duration
			}
		},
		currentTime: {
			set: function(e) {
				if ("number" == typeof e) {
					var i = this._;
					e >= 0 && i.duration >= e && (i.phase = e / 1e3 * i.samplerate, i.currentTime = e)
				} else e instanceof t.Object ? this._.currentTimeObj = e : null === e && (this._.currentTimeObj = null)
			},
			get: function() {
				return this._.currentTimeObj ? this._.currentTimeObj : this._.currentTime
			}
		}
	}), a.clone = function() {
		var t = this._,
			e = i.clone(this);
		return t.buffer.length && o.call(e, {
			buffer: t.buffer,
			samplerate: t.samplerate,
			channels: t.channels
		}), e.loop(t.isLooped), e.reverse(t.isReversed), e
	}, a.slice = function(e, s) {
		var n = this._,
			r = t(n.originkey),
			a = n.isReversed;
		if (n.buffer.length) {
			if (e = "number" == typeof e ? 0 | .001 * e * n.samplerate : 0, s = "number" == typeof s ? 0 | .001 * s * n.samplerate : n.buffer[0].length, e > s) {
				var h = e;
				e = s, s = h, a = !a
			}
			2 === n.channels ? o.call(r, {
				buffer: [i.pointer(n.buffer[0], e, s - e), i.pointer(n.buffer[1], e, s - e), i.pointer(n.buffer[2], e, s - e)],
				samplerate: n.samplerate
			}) : o.call(r, {
				buffer: i.pointer(n.buffer[0], e, s - e),
				samplerate: n.samplerate
			}), r.playbackState = i.PLAYING_STATE
		}
		return r.loop(n.isLooped), r.reverse(n.isReversed), r
	}, a.reverse = function(t) {
		var e = this._;
		return e.isReversed = !! t, e.isReversed ? (e.phaseIncr > 0 && (e.phaseIncr *= -1), 0 === e.phase && e.buffer.length && (e.phase = e.buffer[0].length + e.phaseIncr)) : 0 > e.phaseIncr && (e.phaseIncr *= -1), this
	}, a.loop = function(t) {
		return this._.isLooped = !! t, this
	}, a.bang = function(t) {
		return this.playbackState = t === !1 ? i.FINISHED_STATE : i.PLAYING_STATE, this._.phase = 0, this._.emit("bang"), this
	}, a.process = function(t) {
		var e = this._;
		if (!e.buffer.length) return this;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r, a = this.cells[1],
				o = this.cells[2],
				h = e.phase,
				u = e.cellsize;
			if (2 === e.channels ? (n = e.buffer[1], r = e.buffer[2]) : n = r = e.buffer[0], e.currentTimeObj) {
				var l, c = e.currentTimeObj.process(t).cells[0],
					f = .001 * e.samplerate;
				for (s = 0; u > s; ++s) l = c[s], h = l * f, a[s] = n[0 | h] || 0, o[s] = r[0 | h] || 0;
				e.phase = h, e.currentTime = l
			} else {
				var p = e.pitch.process(t).cells[0][0],
					d = e.phaseIncr * p;
				for (s = 0; u > s; ++s) a[s] = n[0 | h] || 0, o[s] = r[0 | h] || 0, h += d;
				h >= n.length ? e.isLooped ? i.nextTick(e.onlooped) : i.nextTick(e.onended) : 0 > h && (e.isLooped ? i.nextTick(e.onlooped) : i.nextTick(e.onended)), e.phase = h, e.currentTime += i.currentTimeIncr
			}
			i.outputSignalAR(this)
		}
		return this
	};
	var h = t.Object.prototype.plot;
	a.plot = function(t) {
		var e, i, s = this._;
		if (s.plotFlush) {
			2 === s.channels ? (e = s.buffer[1], i = s.buffer[2]) : e = i = s.buffer[0];
			for (var n = new Float32Array(2048), r = 0, a = e.length / 2048, o = 0; 2048 > o; o++) n[o] = .5 * (e[0 | r] + i[0 | r]), r += a;
			s.plotData = n, s.plotFlush = null
		}
		return h.call(this, t)
	}, i.register("buffer", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var n = new s(this._.samplerate);
		n.setDelayTime(20), n.setRate(4), n.depth = 20, n.feedback = .2, n.mix = .33, this._.chorus = n
	}
	var i = t.fn,
		s = t.modules.Chorus;
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		type: {
			set: function(t) {
				this._.chorus.setDelayTime(t)
			},
			get: function() {
				return this._.chorus.wave
			}
		},
		delay: {
			set: function(t) {
				t >= .5 && 80 >= t && this._.chorus.setDelayTime(t)
			},
			get: function() {
				return this._.chorus.delayTime
			}
		},
		rate: {
			set: function(t) {
				"number" == typeof t && t > 0 && this._.chorus.setRate(t)
			},
			get: function() {
				return this._.chorus.rate
			}
		},
		depth: {
			set: function(t) {
				"number" == typeof t && t >= 0 && 100 >= t && (t *= this._.samplerate / 44100, this._.chorus.depth = t)
			},
			get: function() {
				return this._.chorus.depth
			}
		},
		fb: {
			set: function(t) {
				"number" == typeof t && t >= -1 && 1 >= t && (this._.chorus.feedback = .99996 * t)
			},
			get: function() {
				return this._.chorus.feedback
			}
		},
		mix: {
			set: function(e) {
				this._.mix = t(e)
			},
			get: function() {
				return this._.mix
			}
		}
	}), n.process = function(t) {
		var e = this._;
		return this.tickID !== t && (this.tickID = t, i.inputSignalAR(this), e.bypassed || e.chorus.process(this.cells[1], this.cells[2]), i.outputSignalAR(this)), this
	}, i.register("chorus", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e);
		var i = this._;
		i.min = -.8, i.max = .8
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		minmax: {
			set: function(t) {
				var e = this._;
				"number" == typeof t && (e.min = -Math.abs(t), e.max = -e.min)
			},
			get: function() {
				return this._.max
			}
		},
		min: {
			set: function(t) {
				var e = this._;
				"number" == typeof t && (t > e.max ? e.max = t : e.min = t)
			},
			get: function() {
				return this._.min
			}
		},
		max: {
			set: function(t) {
				var e = this._;
				"number" == typeof t && (e.min > t ? e.min = t : e.max = t)
			},
			get: function() {
				return this._.max
			}
		}
	}), s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r = this.cells[1],
				a = this.cells[2],
				o = r.length,
				h = e.min,
				u = e.max;
			if (e.ar) {
				for (i.inputSignalAR(this), s = 0; o > s; ++s) n = r[s], h > n ? n = h : n > u && (n = u), r[s] = n, n = a[s], h > n ? n = h : n > u && (n = u), a[s] = n;
				i.outputSignalAR(this)
			} else n = i.inputSignalKR(this), h > n ? n = h : n > u && (n = u), this.cells[0][0] = n, i.outputSignalKR(this)
		}
		return this
	}, i.register("clip", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.prevThresh = -24, s.prevKnee = 30, s.prevRatio = 12, s.thresh = t(s.prevThresh), s.knee = t(s.prevKnee), s.ratio = t(s.prevRatio), s.postGain = 6, s.reduction = 0, s.attack = 3, s.release = 25, s.comp = new n(s.samplerate), s.comp.dbPostGain = s.postGain, s.comp.setAttackTime(.001 * s.attack), s.comp.setReleaseTime(.001 * s.release), s.comp.setPreDelayTime(6), s.comp.setParams(s.prevThresh, s.prevKnee, s.prevRatio)
	}
	var i = t.fn,
		s = t.timevalue,
		n = t.modules.Compressor;
	i.extend(e);
	var r = e.prototype;
	Object.defineProperties(r, {
		thresh: {
			set: function(e) {
				this._.thresh = t(e)
			},
			get: function() {
				return this._.thresh
			}
		},
		thre: {
			set: function(e) {
				this._.thresh = t(e)
			},
			get: function() {
				return this._.thre
			}
		},
		knee: {
			set: function(e) {
				this._.kne = t(e)
			},
			get: function() {
				return this._.knee
			}
		},
		ratio: {
			set: function(e) {
				this._.ratio = t(e)
			},
			get: function() {
				return this._.ratio
			}
		},
		gain: {
			set: function(t) {
				"number" == typeof t && (this._.comp.dbPostGain = t)
			},
			get: function() {
				return this._.comp.dbPostGain
			}
		},
		attack: {
			set: function(t) {
				"string" == typeof t && (t = s(t)), "number" == typeof t && (t = 0 > t ? 0 : t > 1e3 ? 1e3 : t, this._.attack = t, this._.comp.setAttackTime(.001 * t))
			},
			get: function() {
				return this._.attack
			}
		},
		release: {
			set: function(t) {
				"string" == typeof t && (t = s(t)), "number" == typeof t && (t = 0 > t ? 0 : t > 1e3 ? 1e3 : t, this._.release = t, this._.comp.setReleaseTime(.001 * t))
			},
			get: function() {
				return this._.release
			}
		},
		reduction: {
			get: function() {
				return this._.reduction
			}
		}
	}), r.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this);
			var s = e.thresh.process(t).cells[0][0],
				n = e.knee.process(t).cells[0][0],
				r = e.ratio.process(t).cells[0][0];
			(e.prevThresh !== s || e.prevKnee !== n || e.prevRatio !== r) && (e.prevThresh = s, e.prevKnee = n, e.prevRatio = r, e.comp.setParams(s, n, r)), e.bypassed || (e.comp.process(this.cells[1], this.cells[2]), e.reduction = e.comp.meteringGain), i.outputSignalAR(this)
		}
		return this
	}, i.register("comp", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.time = t(100), s.fb = t(.2), s.cross = t(!1), s.mix = .33, s.delay = new n(s.samplerate)
	}
	var i = t.fn,
		s = t.timevalue,
		n = t.modules.StereoDelay;
	i.extend(e);
	var r = e.prototype;
	Object.defineProperties(r, {
		time: {
			set: function(e) {
				"string" == typeof e && (e = s(e)), this._.time = t(e)
			},
			get: function() {
				return this._.time
			}
		},
		fb: {
			set: function(e) {
				this._.fb = t(e)
			},
			get: function() {
				return this._.fb
			}
		},
		cross: {
			set: function(e) {
				this._.cross = t(e)
			},
			get: function() {
				return this._.cross
			}
		},
		mix: {
			set: function(t) {
				"number" == typeof t && (t = t > 1 ? 1 : 0 > t ? 0 : t, this._.mix = t)
			},
			get: function() {
				return this._.mix
			}
		}
	}), r.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s = e.time.process(t).cells[0][0],
				n = e.fb.process(t).cells[0][0],
				r = 0 !== e.cross.process(t).cells[0][0],
				a = e.mix;
			(e.prevTime !== s || e.prevFb !== n || e.prevCross !== r || e.prevMix !== a) && (e.prevTime = s, e.prevFb = n, e.prevCross = r, e.prevMix = a, e.delay.setParams(s, n, r, a)), i.inputSignalAR(this), e.bypassed || e.delay.process(this.cells[1], this.cells[2]), i.outputSignalAR(this)
		}
		return this
	}, i.register("delay", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.pre = t(60), s.post = t(-18), s.x1L = s.x2L = s.y1L = s.y2L = 0, s.x1R = s.x2R = s.y1R = s.y2R = 0, s.b0 = s.b1 = s.b2 = s.a1 = s.a2 = 0, s.cutoff = 0, s.Q = 1, s.preScale = 0, s.postScale = 0
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		cutoff: {
			set: function(t) {
				"number" == typeof t && t > 0 && (this._.cutoff = t)
			},
			get: function() {
				return this._.cutoff
			}
		},
		pre: {
			set: function(e) {
				this._.pre = t(e)
			},
			get: function() {
				return this._.pre
			}
		},
		post: {
			set: function(e) {
				this._.post = t(e)
			},
			get: function() {
				return this._.post
			}
		}
	}), s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this);
			var s = -e.pre.process(t).cells[0][0],
				r = -e.post.process(t).cells[0][0];
			if ((e.prevPreGain !== s || e.prevPostGain !== r) && (e.prevPreGain = s, e.prevPostGain = r, e.preScale = Math.pow(10, .05 * -s), e.postScale = Math.pow(10, .05 * -r)), !e.bypassed) {
				var a, o, h, u, l, c = this.cells[1],
					f = this.cells[2],
					p = e.preScale,
					d = e.postScale;
				if (e.cutoff) {
					e.prevCutoff !== e.cutoff && (e.prevCutoff = e.cutoff, n(e));
					var m = e.x1L,
						v = e.x2L,
						g = e.y1L,
						b = e.y2L,
						_ = e.x1R,
						y = e.x2R,
						w = e.y1R,
						x = e.y2R,
						k = e.b0,
						A = e.b1,
						S = e.b2,
						T = e.a1,
						I = e.a2;
					for (a = 0, o = c.length; o > a; ++a) u = c[a] * p, l = k * u + A * m + S * v - T * g - I * b, h = l * d, -1 > h ? h = -1 : h > 1 && (h = 1), c[a] = h, v = m, m = u, b = g, g = l, u = f[a] * p, l = k * u + A * _ + S * y - T * w - I * x, h = l * d, -1 > h ? h = -1 : h > 1 && (h = 1), f[a] = h, y = _, _ = u, x = w, w = l;
					e.x1L = m, e.x2L = v, e.y1L = g, e.y2L = b, e.x1R = _, e.x2R = y, e.y1R = w, e.y2R = x
				} else
					for (a = 0, o = c.length; o > a; ++a) h = c[a] * p * d, -1 > h ? h = -1 : h > 1 && (h = 1), c[a] = h, h = f[a] * p * d, -1 > h ? h = -1 : h > 1 && (h = 1), f[a] = h
			}
			i.outputSignalAR(this)
		}
		return this
	};
	var n = function(t) {
		var e = 2 * Math.PI * t.cutoff / t.samplerate,
			i = Math.cos(e),
			s = Math.sin(e),
			n = s / (2 * t.Q),
			r = 1 / (1 + n);
		t.b0 = .5 * (1 - i) * r, t.b1 = 1 - i * r, t.b2 = .5 * (1 - i) * r, t.a1 = -2 * i * r, t.a2 = 1 - n * r
	};
	i.register("dist", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), this._.ar = !1
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r, a, o, h, u = this.nodes,
				l = this.cells[0],
				c = this.cells[1],
				f = this.cells[2],
				p = u.length,
				d = l.length;
			if (e.ar) {
				if (u.length > 0)
					for (u[0].process(t), a = u[0].cells[1], o = u[0].cells[2], c.set(a), f.set(o), s = 1; p > s; ++s)
						for (u[s].process(t), a = u[s].cells[1], o = u[s].cells[2], n = 0; d > n; ++n) h = a[n], c[n] = 0 === h ? 0 : c[n] / h, h = o[n], f[n] = 0 === h ? 0 : f[n] / h;
				else
					for (n = 0; d > n; ++n) c[n] = f[s] = 0;
				i.outputSignalAR(this)
			} else {
				if (u.length > 0)
					for (r = u[0].process(t).cells[0][0], s = 1; p > s; ++s) h = u[s].process(t).cells[0][0], r = 0 === h ? 0 : r / h;
				else r = 0;
				l[0] = r, i.outputSignalKR(this)
			}
		}
		return this
	}, i.register("/", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e);
		var i = this._;
		i.env = new r(i.samplerate), i.env.setStep(i.cellsize), i.tmp = new s.SignalArray(i.cellsize), i.ar = !1, i.plotFlush = !0, i.onended = h(this), this.on("ar", o)
	}

	function i(t, e, i, s, n, r) {
		var a = i;
		return "number" == typeof t[s] ? a = t[s] : "number" == typeof t[n] ? a = t[n] : r && ("string" == typeof t[s] ? a = r(t[s]) : "string" == typeof t[n] && (a = r(t[n]))), e > a && (a = e), a
	}
	var s = t.fn,
		n = t.timevalue,
		r = t.modules.Envelope,
		a = s.isDictionary;
	s.extend(e);
	var o = function(t) {
		this._.env.setStep(t ? 1 : this._.cellsize)
	}, h = function(t) {
			return function() {
				t._.emit("ended")
			}
		}, u = e.prototype;
	Object.defineProperties(u, {
		table: {
			set: function(t) {
				Array.isArray(t) && (l.call(this, t), this._.plotFlush = !0)
			},
			get: function() {
				return this._.env.table
			}
		},
		curve: {
			set: function(t) {
				this._.env.setCurve(t)
			},
			get: function() {
				return this._.env.curve
			}
		},
		releaseNode: {
			set: function(t) {
				this._.env.setReleaseNode(t), this._.plotFlush = !0
			},
			get: function() {
				return this._.env.releaseNode + 1
			}
		},
		loopNode: {
			set: function(t) {
				this._.env.setLoopNode(t), this._.plotFlush = !0
			},
			get: function() {
				return this._.env.loopNode + 1
			}
		}
	}), u.clone = function() {
		var t = s.clone(this);
		return t._.env = this._.env.clone(), t
	}, u.reset = function() {
		return this._.env.reset(), this
	}, u.release = function() {
		var t = this._;
		return t.env.release(), t.emit("released"), this
	}, u.bang = function() {
		var t = this._;
		return t.env.reset(), t.env.status = r.StatusGate, t.emit("bang"), this
	}, u.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var i, n = this.cells[1],
				r = this.cells[2],
				a = e.cellsize;
			if (this.nodes.length) s.inputSignalAR(this);
			else
				for (i = 0; a > i; ++i) n[i] = r[i] = 1;
			var o, h = null;
			if (e.ar) {
				var u = e.tmp;
				for (e.env.process(u), i = 0; a > i; ++i) n[i] *= u[i], r[i] *= u[i];
				h = e.env.emit
			} else {
				for (o = e.env.next(), i = 0; a > i; ++i) n[i] *= o, r[i] *= o;
				h = e.env.emit
			}
			s.outputSignalAR(this), h && ("ended" === h ? s.nextTick(e.onended) : this._.emit(h, e.value))
		}
		return this
	};
	var l = function(t) {
		for (var e, i, s, a, o = this._.env, h = [t[0] || f], u = 1, l = t.length; l > u; ++u) e = t[u][0] || f, i = t[u][1], s = t[u][2], "number" != typeof i && (i = "string" == typeof i ? n(i) : 10), 10 > i && (i = 10), "number" == typeof s ? (a = s, s = r.CurveTypeCurve) : (s = r.CurveTypeDict[s] || null, a = 0), h.push([e, i, s, a]);
		o.setTable(h)
	}, c = t.Object.prototype.plot;
	u.plot = function(t) {
		if (this._.plotFlush) {
			var e, i, s = this._.env.clone(),
				n = s.getInfo(1e3),
				a = n.totalDuration,
				o = n.loopBeginTime,
				h = n.releaseBeginTime,
				u = new Float32Array(256),
				l = 0,
				f = a / u.length,
				p = !1,
				d = 0 | .001 * a * this._.samplerate;
			for (d /= u.length, s.setStep(d), s.status = r.StatusGate, e = 0, i = u.length; i > e; ++e) u[e] = s.next(), l += f, !p && l >= h && (s.release(), p = !0);
			this._.plotData = u, this._.plotBefore = function(t, e, i, s, n) {
				var r, u;
				1 / 0 !== o && 1 / 0 !== h && (r = e + s * (o / a), u = e + s * (h / a), u -= r, t.fillStyle = "rgba(224, 224, 224, 0.8)", t.fillRect(r, 0, u, n)), 1 / 0 !== h && (r = e + s * (h / a), u = s - r, t.fillStyle = "rgba(212, 212, 212, 0.8)", t.fillRect(r, 0, u, n))
			};
			var m = 1 / 0,
				v = -1 / 0;
			for (e = 0; i > e; ++e) m > u[e] ? m = u[e] : u[e] > v && (v = u[e]);
			1 > v && (v = 1), this._.plotRange = [m, v], this._.plotData = u, this._.plotFlush = null
		}
		return c.call(this, t)
	}, s.register("env", e);
	var f = r.ZERO;
	s.register("perc", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 10, "a", "attackTime", n),
			o = i(s, 10, 1e3, "r", "releaseTime", n),
			h = i(s, f, 1, "lv", "level");
		return s.table = [f, [h, r],
			[f, o]
		], new e(t)
	}), s.register("adsr", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 10, "a", "attackTime", n),
			o = i(s, 10, 300, "d", "decayTime", n),
			h = i(s, f, .5, "s", "sustainLevel"),
			u = i(s, 10, 1e3, "r", "decayTime", n),
			l = i(s, f, 1, "lv", "level");
		return s.table = [f, [l, r],
			[h, o],
			[f, u]
		], s.releaseNode = 3, new e(t)
	}), s.register("adshr", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 10, "a", "attackTime", n),
			o = i(s, 10, 300, "d", "decayTime", n),
			h = i(s, f, .5, "s", "sustainLevel"),
			u = i(s, 10, 500, "h", "holdTime", n),
			l = i(s, 10, 1e3, "r", "decayTime", n),
			c = i(s, f, 1, "lv", "level");
		return s.table = [f, [c, r],
			[h, o],
			[h, u],
			[f, l]
		], new e(t)
	}), s.register("asr", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 10, "a", "attackTime", n),
			o = i(s, f, .5, "s", "sustainLevel"),
			h = i(s, 10, 1e3, "r", "releaseTime", n);
		return s.table = [f, [o, r],
			[f, h]
		], s.releaseNode = 2, new e(t)
	}), s.register("dadsr", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 100, "dl", "delayTime", n),
			o = i(s, 10, 10, "a", "attackTime", n),
			h = i(s, 10, 300, "d", "decayTime", n),
			u = i(s, f, .5, "s", "sustainLevel"),
			l = i(s, 10, 1e3, "r", "relaseTime", n),
			c = i(s, f, 1, "lv", "level");
		return s.table = [f, [f, r],
			[c, o],
			[u, h],
			[f, l]
		], s.releaseNode = 4, new e(t)
	}), s.register("ahdsfr", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 10, "a", "attackTime", n),
			o = i(s, 10, 10, "h", "holdTime", n),
			h = i(s, 10, 300, "d", "decayTime", n),
			u = i(s, f, .5, "s", "sustainLevel"),
			l = i(s, 10, 5e3, "f", "fadeTime", n),
			c = i(s, 10, 1e3, "r", "relaseTime", n),
			p = i(s, f, 1, "lv", "level");
		return s.table = [f, [p, r],
			[p, o],
			[u, h],
			[f, l],
			[f, c]
		], s.releaseNode = 5, new e(t)
	}), s.register("linen", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 10, "a", "attackTime", n),
			o = i(s, 10, 1e3, "s", "sustainTime", n),
			h = i(s, 10, 1e3, "r", "releaseTime", n),
			u = i(s, f, 1, "lv", "level");
		return s.table = [f, [u, r],
			[u, o],
			[f, h]
		], new e(t)
	}), s.register("env.tri", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 20, 1e3, "dur", "duration", n),
			o = i(s, f, 1, "lv", "level");
		return r *= .5, s.table = [f, [o, r],
			[f, r]
		], new e(t)
	}), s.register("env.cutoff", function(t) {
		a(t[0]) || t.unshift({});
		var s = t[0],
			r = i(s, 10, 100, "r", "relaseTime", n),
			o = i(s, f, 1, "lv", "level");
		return s.table = [o, [f, r]], new e(t)
	})
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.biquads = Array(7), s.plotBefore = o, s.plotRange = [-18, 18], s.plotFlush = !0
	}
	var i = t.fn,
		s = t.modules.FFT,
		n = t.modules.Biquad,
		r = 20,
		a = {
			hpf: 0,
			lf: 1,
			lmf: 2,
			mf: 3,
			hmf: 4,
			hf: 5,
			lpf: 6
		};
	i.extend(e);
	var o = function(t, e, i, s, n) {
		t.lineWidth = 1, t.strokeStyle = "rgb(192, 192, 192)";
		for (var a = .5 * this._.samplerate, o = 1; 10 >= o; ++o)
			for (var h = 1; 4 >= h; h++) {
				var u = o * Math.pow(10, h);
				if (!(r >= u || u >= a)) {
					t.beginPath();
					var l = Math.log(u / r) / Math.log(a / r);
					l = (0 | l * s + e) + .5, t.moveTo(l, i), t.lineTo(l, i + n), t.stroke()
				}
			}
		var c = n / 6;
		for (o = 1; 6 > o; o++) {
			t.beginPath();
			var f = (0 | i + o * c) + .5;
			t.moveTo(e, f), t.lineTo(e + s, f), t.stroke()
		}
	}, h = e.prototype;
	Object.defineProperties(h, {
		params: {
			set: function(t) {
				if ("object" == typeof t)
					for (var e = Object.keys(t), i = 0, s = e.length; s > i; ++i) {
						var n = t[e[i]];
						Array.isArray(n) ? this.setParams(e[i], n[0], n[1], n[2]) : this.setParams(e[i])
					}
			}
		}
	}), h.setParams = function(t, e, i, s) {
		var r = this._;
		if ("string" == typeof t && (t = a[t]), t >= 0 && r.biquads.length > t) {
			if (t |= 0, "number" == typeof e && "number" == typeof i) {
				"number" != typeof s && (s = 0);
				var o = r.biquads[t];
				if (!o) switch (o = r.biquads[t] = new n(r.samplerate), t) {
					case 0:
						o.setType("highpass");
						break;
					case r.biquads.length - 1:
						o.setType("lowpass");
						break;
					default:
						o.setType("peaking")
				}
				o.setParams(e, i, s)
			} else r.biquads[t] = void 0;
			r.plotFlush = !0
		}
		return this
	}, h.getParams = function(t) {
		var e = this._,
			i = e.biquads[0 | t];
		return i ? {
			freq: i.frequency,
			Q: i.Q,
			gain: i.gain
		} : void 0
	}, h.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			if (this.tickID = t, i.inputSignalAR(this), !e.bypassed)
				for (var s = this.cells[1], n = this.cells[2], r = e.biquads, a = 0, o = r.length; o > a; ++a) r[a] && r[a].process(s, n);
			i.outputSignalAR(this)
		}
		return this
	};
	var u = new s(2048),
		l = t.Object.prototype.plot;
	h.plot = function(t) {
		if (this._.plotFlush) {
			var e = this._,
				i = new Float32Array(u.length);
			i[0] = 1;
			for (var s = 0, a = e.biquads.length; a > s; ++s) {
				var o = this.getParams(s);
				if (o) {
					var h = new n(e.samplerate);
					0 === s ? h.setType("highpass") : s === a - 1 ? h.setType("lowpass") : h.setType("peaking"), h.setParams(o.freq, o.Q, o.gain), h.process(i, i)
				}
			}
			u.forward(i);
			var c, f, p, d, m, v, g, b = 512,
				_ = new Float32Array(b),
				y = .5 * e.samplerate,
				w = new Float32Array(b);
			for (u.getFrequencyData(w), s = 0; b > s; ++s) f = Math.pow(y / r, s / b) * r, c = f / (y / w.length), p = 0 | c, d = c - p, 0 === p ? v = m = g = w[p] : (m = w[p - 1], v = w[p], g = (1 - d) * m + d * v), _[s] = g;
			this._.plotData = _, this._.plotFlush = null
		}
		return l.call(this, t)
	}, i.register("eq", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.listener(this), i.fixAR(this), this.real = new t.ChannelObject(this), this.imag = new t.ChannelObject(this), this.cells[3] = this.real.cell, this.cells[4] = this.imag.cell;
		var n = this._;
		n.fft = new s(2 * n.cellsize), n.fftCell = new i.SignalArray(n.fft.length), n.prevCell = new i.SignalArray(n.cellsize), n.freqs = new i.SignalArray(n.fft.length >> 1), n.plotFlush = !0, n.plotRange = [0, 32], n.plotBarStyle = !0
	}
	var i = t.fn,
		s = t.modules.FFT;
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		window: {
			set: function(t) {
				this._.fft.setWindow(t)
			},
			get: function() {
				return this._.fft.windowName
			}
		},
		spectrum: {
			get: function() {
				return this._.fft.getFrequencyData(this._.freqs)
			}
		}
	}), n.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this), i.outputSignalAR(this);
			var s = this.cells[0],
				n = e.cellsize;
			e.fftCell.set(e.prevCell), e.fftCell.set(s, n), e.fft.forward(e.fftCell), e.prevCell.set(s), e.plotFlush = !0, this.cells[3].set(e.fft.real.subarray(0, n)), this.cells[4].set(e.fft.imag.subarray(0, n))
		}
		return this
	};
	var r = t.Object.prototype.plot;
	n.plot = function(t) {
		return this._.plotFlush && (this._.plotData = this.spectrum, this._.plotFlush = null), r.call(this, t)
	}, i.register("fft", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.fixAR(this);
		var s = this._;
		s.freq = t(440), s.reg = 32768, s.shortFlag = !1, s.phase = 0, s.lastValue = 0
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		shortFlag: {
			set: function(t) {
				this._.shortFlag = !! t
			},
			get: function() {
				return this._.shortFlag
			}
		},
		freq: {
			set: function(e) {
				this._.freq = t(e)
			},
			get: function() {
				return this._.freq
			}
		}
	}), s.process = function(t) {
		var e = this._,
			i = this.cells[0];
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r = e.lastValue,
				a = e.phase,
				o = e.freq.process(t).cells[0][0] / e.samplerate,
				h = e.reg,
				u = e.mul,
				l = e.add;
			if (e.shortFlag)
				for (s = 0, n = i.length; n > s; ++s) a >= 1 && (h >>= 1, h |= (1 & (h ^ h >> 6)) << 15, r = (1 & h) - .5, a -= 1), i[s] = r * u + l, a += o;
			else
				for (s = 0, n = i.length; n > s; ++s) a >= 1 && (h >>= 1, h |= (1 & (h ^ h >> 1)) << 15, r = (1 & h) - .5, a -= 1), i[s] = r * u + l, a += o;
			e.reg = h, e.phase = a, e.lastValue = r
		}
		return this
	}, i.register("fnoise", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this), this._.selected = 0, this._.outputs = []
	}
	var i = t.fn,
		s = function() {
			function e(e) {
				t.Object.call(this, 2, []), i.fixAR(this), this._.parent = e
			}
			return i.extend(e), e.prototype.process = function(t) {
				return this.tickID !== t && (this.tickID = t, this._.parent.process(t)), this
			}, e
		}();
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		selected: {
			set: function(t) {
				var e = this._;
				if ("number" == typeof t) {
					e.selected = t;
					for (var s = e.outputs, n = 0, r = s.length; r > n; ++n) s[n] && (s[n].cells[0].set(i.emptycell), s[n].cells[1].set(i.emptycell), s[n].cells[2].set(i.emptycell))
				}
			},
			get: function() {
				return this._.selected
			}
		}
	}), n.at = function(t) {
		var e = this._,
			i = e.outputs[t];
		return i || (e.outputs[t] = i = new s(this)), i
	}, n.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this), i.outputSignalAR(this);
			var s = e.outputs[e.selected];
			s && (s.cells[0].set(this.cells[0]), s.cells[1].set(this.cells[1]), s.cells[2].set(this.cells[2]))
		}
		return this
	}, i.register("gate", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.fixAR(this);
		var n = this._;
		n.fft = new s(2 * n.cellsize), n.fftCell = new i.SignalArray(this._.fft.length), n.realBuffer = new i.SignalArray(this._.fft.length), n.imagBuffer = new i.SignalArray(this._.fft.length)
	}
	var i = t.fn,
		s = t.modules.FFT;
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		real: {
			set: function(e) {
				this._.real = t(e)
			},
			get: function() {
				return this._.real
			}
		},
		imag: {
			set: function(e) {
				this._.imag = t(e)
			},
			get: function() {
				return this._.imag
			}
		}
	}), n.process = function(t) {
		var e = this._;
		if (this.tickID !== t && (this.tickID = t, e.real && e.imag)) {
			var s = this.cells[0],
				n = e.realBuffer,
				r = e.imagBuffer,
				a = e.real.process(t).cells[0],
				o = e.imag.process(t).cells[0];
			n.set(a), r.set(o), s.set(e.fft.inverse(n, r).subarray(0, e.cellsize)), i.outputSignalAR(this)
		}
		return this
	}, i.register("ifft", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.timer(this), i.fixKR(this);
		var s = this._;
		s.interval = t(1e3), s.count = 0, s.delay = 0, s.timeout = 1 / 0, s.currentTime = 0, s.delaySamples = 0, s.countSamples = 0, s.onended = i.make_onended(this), this.on("start", n)
	}
	var i = t.fn,
		s = t.timevalue;
	i.extend(e);
	var n = function() {
		var t = this._;
		this.playbackState = i.PLAYING_STATE, t.delaySamples = 0 | t.samplerate * .001 * t.delay, t.countSamples = t.count = t.currentTime = 0
	};
	Object.defineProperty(n, "unremovable", {
		value: !0,
		writable: !1
	});
	var r = e.prototype;
	Object.defineProperties(r, {
		interval: {
			set: function(e) {
				"string" == typeof e && (e = s(e), 0 >= e && (e = 0)), this._.interval = t(e)
			},
			get: function() {
				return this._.interval
			}
		},
		delay: {
			set: function(t) {
				"string" == typeof t && (t = s(t)), "number" == typeof t && t >= 0 && (this._.delay = t, this._.delaySamples = 0 | this._.samplerate * .001 * t)
			},
			get: function() {
				return this._.delay
			}
		},
		count: {
			set: function(t) {
				"number" == typeof t && (this._.count = t)
			},
			get: function() {
				return this._.count
			}
		},
		timeout: {
			set: function(t) {
				"string" == typeof t && (t = s(t)), "number" == typeof t && t >= 0 && (this._.timeout = t)
			},
			get: function() {
				return this._.timeout
			}
		},
		currentTime: {
			get: function() {
				return this._.currentTime
			}
		}
	}), r.bang = function() {
		var t = this._;
		return this.playbackState = i.PLAYING_STATE, t.delaySamples = 0 | t.samplerate * .001 * t.delay, t.countSamples = t.count = t.currentTime = 0, t.emit("bang"), this
	}, r.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			this.tickID = t, s.delaySamples > 0 && (s.delaySamples -= e.length);
			var n = s.interval.process(t).cells[0][0];
			if (0 >= s.delaySamples && (s.countSamples -= e.length, 0 >= s.countSamples)) {
				s.countSamples += 0 | .001 * s.samplerate * n;
				for (var r = this.nodes, a = s.count, o = a * s.mul + s.add, h = 0, u = e.length; u > h; ++h) e[h] = o;
				for (var l = 0, c = r.length; c > l; ++l) r[l].bang(a);
				s.count += 1
			}
			s.currentTime += i.currentTimeIncr, s.currentTime >= s.timeout && i.nextTick(s.onended)
		}
		return this
	}, i.register("interval", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.fixAR(this);
		var s = this._,
			n = Math.ceil(Math.log(s.samplerate) * Math.LOG2E);
		s.buffersize = 1 << n, s.buffermask = s.buffersize - 1, s.buffer = new i.SignalArray(s.buffersize), s.time = 0, s.readIndex = 0, s.writeIndex = 0
	}
	var i = t.fn,
		s = t.timevalue;
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		time: {
			set: function(t) {
				if ("string" == typeof t && (t = s(t)), "number" == typeof t && t > 0) {
					var e = this._;
					e.time = t;
					var i = 0 | .001 * t * e.samplerate;
					i > e.buffermask && (i = e.buffermask), e.writeIndex = e.readIndex + i & e.buffermask
				}
			},
			get: function() {
				return this._.time
			}
		}
	}), n.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this);
			var s, n = this.cells[0],
				r = e.buffer,
				a = e.buffermask,
				o = e.readIndex,
				h = e.writeIndex,
				u = n.length;
			for (s = 0; u > s; ++s) r[h] = n[s], n[s] = r[o], o += 1, h = h + 1 & a;
			e.readIndex = o & a, e.writeIndex = h, i.outputSignalAR(this)
		}
		return this
	}, i.register("lag", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e);
		var i = this._;
		i.input = 0, i.value = 0, i.prev = null, i.ar = !1, i.map = s
	}
	var i = t.fn;
	i.extend(e);
	var s = function(t) {
		return t
	}, n = e.prototype;
	Object.defineProperties(n, {
		input: {
			set: function(t) {
				"number" == typeof t && (this._.input = t)
			},
			get: function() {
				return this._.input
			}
		},
		map: {
			set: function(t) {
				"function" == typeof t && (this._.map = t)
			},
			get: function() {
				return this._.map
			}
		}
	}), n.bang = function() {
		return this._.prev = null, this._.emit("bang"), this
	}, n.at = function(t) {
		return this._.map ? this._.map(t) : 0
	}, n.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var n, r = this.nodes.length,
				a = e.length;
			if (s.ar && r) {
				i.inputSignalAR(this);
				var o = s.map;
				if (o)
					for (n = 0; a > n; ++n) e[n] = o(e[n]);
				s.value = e[a - 1], i.outputSignalAR(this)
			} else {
				var h = r ? i.inputSignalKR(this) : s.input;
				s.map && s.prev !== h && (s.prev = h, s.value = s.map(h));
				var u = s.value * s.mul + s.add;
				for (n = 0; a > n; ++n) e[n] = u
			}
		}
		return this
	}, i.register("map", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e)
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	s.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var n, r, a, o, h = this.nodes,
				u = h.length,
				l = e.length;
			if (s.ar) {
				if (h.length > 0)
					for (a = h[0].process(t).cells[0], e.set(a), n = 1; u > n; ++n)
						for (a = h[n].process(t).cells[0], r = 0; l > r; ++r) o = a[r], o > e[r] && (e[r] = o);
				else
					for (r = 0; l > r; ++r) e[r] = 0;
				i.outputSignalAR(this)
			} else {
				if (h.length > 0)
					for (a = h[0].process(t).cells[0][0], n = 1; u > n; ++n) o = h[n].process(t).cells[0][0], o > a && (a = o);
				else a = 0;
				e[0] = a, i.outputSignalKR(this)
			}
		}
		return this
	}, i.register("max", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var n = this._;
		n.src = n.func = null, n.bufferL = new i.SignalArray(s), n.bufferR = new i.SignalArray(s), n.readIndex = 0, n.writeIndex = 0, n.totalRead = 0, n.totalWrite = 0
	}
	if ("browser" === t.envtype) {
		var i = t.fn,
			s = 4096,
			n = s - 1;
		i.extend(e);
		var r = e.prototype;
		r.listen = function(e) {
			var i = a[t.env];
			i && (i.set.call(this, e), i.listen.call(this))
		}, r.unlisten = function() {
			var e = a[t.env];
			e && e.unlisten.call(this), this.cells[0].set(i.emptycell), this.cells[1].set(i.emptycell), this.cells[2].set(i.emptycell);
			for (var s = this._, n = s.bufferL, r = s.bufferR, o = 0, h = n.length; h > o; ++o) n[o] = r[o] = 0
		}, r.process = function(t) {
			var e = this._;
			if (null === e.src) return this;
			if (this.tickID !== t) {
				this.tickID = t;
				var s = e.cellsize;
				if (e.totalWrite > e.totalRead + s) {
					var r = e.readIndex,
						a = r + s;
					this.cells[1].set(e.bufferL.subarray(r, a)), this.cells[2].set(e.bufferR.subarray(r, a)), e.readIndex = a & n, e.totalRead += s
				}
				i.outputSignalAR(this)
			}
			return this
		};
		var a = {};
		a.webkit = {
			set: function(t) {
				var e = this._;
				if (t instanceof HTMLMediaElement) {
					var s = i._audioContext;
					e.src = s.createMediaElementSource(t)
				}
			},
			listen: function() {
				var t = this._,
					e = i._audioContext;
				t.gain = e.createGainNode(), t.gain.gain.value = 0, t.node = e.createJavaScriptNode(1024, 2, 2), t.node.onaudioprocess = o(this), t.src.connect(t.node), t.node.connect(t.gain), t.gain.connect(e.destination)
			},
			unlisten: function() {
				var t = this._;
				t.src && t.src.disconnect(), t.gain && t.gain.disconnect(), t.node && t.node.disconnect()
			}
		};
		var o = function(t) {
			return function(e) {
				var i = t._,
					s = e.inputBuffer,
					r = s.length,
					a = i.writeIndex;
				i.bufferL.set(s.getChannelData(0), a), i.bufferR.set(s.getChannelData(1), a), i.writeIndex = a + r & n, i.totalWrite += r
			}
		};
		a.moz = {
			set: function(t) {
				var e = this._;
				t instanceof HTMLAudioElement && (e.src = t, e.istep = e.samplerate / t.mozSampleRate)
			},
			listen: function() {
				var t = this._,
					e = t.bufferL,
					i = t.bufferR,
					s = 0,
					r = 0;
				2 === t.src.mozChannels ? (t.x = 0, t.func = function(a) {
					var o, h, u = t.writeIndex,
						l = t.totalWrite,
						c = a.frameBuffer,
						f = t.istep,
						p = c.length;
					for (o = t.x, h = 0; p > h; h += 2) {
						for (o += f; o > 0;) e[u] = .5 * (c[h] + s), i[u] = .5 * (c[h + 1] + r), u = u + 1 & n, ++l, o -= 1;
						s = c[h], r = c[h + 1]
					}
					t.x = o, t.writeIndex = u, t.totalWrite = l
				}) : (t.x = 0, t.func = function(r) {
					var a, o, h = t.writeIndex,
						u = t.totalWrite,
						l = r.frameBuffer,
						c = t.istep,
						f = l.length;
					for (a = t.x, o = 0; f > o; ++o) {
						for (a += c; a >= 0;) e[h] = i[h] = .5 * (l[o] + s), h = h + 1 & n, ++u, a -= 1;
						s = l[o]
					}
					t.x = a, t.writeIndex = h, t.totalWrite = u
				}), t.src.addEventListener("MozAudioAvailable", t.func)
			},
			unlisten: function() {
				var t = this._;
				t.func && (t.src.removeEventListener("MozAudioAvailable", t.func), t.func = null)
			}
		}, i.register("mediastream", e)
	}
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e);
		var i = this._;
		i.midi = 0, i.value = 0, i.prev = null, i.a4 = 440, i.ar = !1
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		midi: {
			set: function(t) {
				"number" == typeof t && (this._.midi = t)
			},
			get: function() {
				return this._.midi
			}
		},
		a4: {
			set: function(t) {
				"number" == typeof t && (this._.a4 = t, this._.prev = null)
			},
			get: function() {
				return this._.a4
			}
		}
	}), s.bang = function() {
		return this._.prev = null, this._.emit("bang"), this
	}, s.at = function(t) {
		var e = this._;
		return e.a4 * Math.pow(2, (t - 69) / 12)
	}, s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n = this.cells[0],
				r = this.nodes.length,
				a = n.length;
			if (e.ar && r) {
				i.inputSignalAR(this);
				var o = e.a4;
				for (s = 0; a > s; ++s) n[s] = o * Math.pow(2, (n[s] - 69) / 12);
				e.value = n[a - 1], i.outputSignalAR(this)
			} else {
				var h = r ? i.inputSignalKR(this) : e.midi;
				e.prev !== h && (e.prev = h, e.value = e.a4 * Math.pow(2, (h - 69) / 12)), n[0] = e.value, i.outputSignalKR(this)
			}
		}
		return this
	}, i.register("midicps", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e);
		var i = this._;
		i.midi = 0, i.value = 0, i.prev = null, i.range = 12, i.ar = !1
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		midi: {
			set: function(t) {
				"number" == typeof t && (this._.midi = t)
			},
			get: function() {
				return this._.midi
			}
		},
		range: {
			set: function(t) {
				"number" == typeof t && t > 0 && (this._.range = t)
			},
			get: function() {
				return this._.range
			}
		}
	}), s.bang = function() {
		return this._.prev = null, this._.emit("bang"), this
	}, s.at = function(t) {
		var e = this._;
		return Math.pow(2, t / e.range)
	}, s.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var n, r = this.nodes.length,
				a = e.length;
			if (s.ar && r) {
				i.inputSignalAR(this);
				var o = s.range;
				for (n = 0; a > n; ++n) e[n] = Math.pow(2, e[n] / o);
				s.value = e[a - 1], i.outputSignalAR(this)
			} else {
				var h = this.nodes.length ? i.inputSignalKR(this) : s.midi;
				s.prev !== h && (s.prev = h, s.value = Math.pow(2, h / s.range));
				var u = s.value * s.mul + s.add;
				for (n = 0; a > n; ++n) e[n] = u
			}
		}
		return this
	}, i.register("midiratio", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e)
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	s.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var n, r, a, o, h = this.nodes,
				u = h.length,
				l = e.length;
			if (s.ar) {
				if (h.length > 0)
					for (a = h[0].process(t).cells[0], e.set(a), n = 1; u > n; ++n)
						for (a = h[n].process(t).cells[0], r = 0; l > r; ++r) o = a[r], e[r] > o && (e[r] = o);
				else
					for (r = 0; l > r; ++r) e[r] = 0;
				i.outputSignalAR(this)
			} else {
				if (h.length > 0)
					for (a = h[0].process(t).cells[0][0], n = 1; u > n; ++n) o = h[n].process(t).cells[0][0], a > o && (a = o);
				else a = 0;
				e[0] = a, i.outputSignalKR(this)
			}
		}
		return this
	}, i.register("min", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 0, e), i.timer(this), i.fixKR(this);
		var n = this._;
		n.tracks = [], n.onended = i.make_onended(this), n.currentTime = 0, this.on("start", s)
	}
	var i = t.fn;
	i.extend(e);
	var s = function() {
		var t = this,
			e = this._,
			s = e.mml;
		"string" == typeof s && (s = [s]), e.tracks = s.map(function(e, i) {
			return new r(t, i, e)
		}), e.currentTime = 0, this.playbackState = i.PLAYING_STATE
	};
	Object.defineProperty(s, "unremoved", {
		value: !0,
		writable: !1
	});
	var n = e.prototype;
	Object.defineProperties(n, {
		mml: {
			set: function(t) {
				var e = this._;
				("string" == typeof t || Array.isArray(t)) && (e.mml = t)
			},
			get: function() {
				return this._.mml
			}
		},
		currentTime: {
			get: function() {
				return this._.currentTime
			}
		}
	}), n.on = n.addListener = function(t, e) {
		return "mml" === t && (t = "data", console.warn("A 'mml' event listener was deprecated in ~v13.03.01. use 'data' event listener.")), this._.events.on(t, e), this
	}, n.once = function(t, e) {
		return "mml" === t && (t = "data", console.warn("A 'mml' event listener was deprecated in ~v13.03.01. use 'data' event listener.")), this._.events.once(t, e), this
	}, n.off = n.removeListener = function(t, e) {
		return "mml" === t && (t = "data", console.warn("A 'mml' event listener was deprecated in ~v13.03.01. use 'data' event listener.")), this._.events.off(t, e), this
	}, n.removeAllListeners = function(t) {
		return "mml" === t && (console.warn("A 'mml' event listener was deprecated in ~v13.03.01. use 'data' event listener."), t = "data"), this._.events.removeAllListeners(t), this
	}, n.listeners = function(t) {
		return "mml" === t && (console.warn("A 'mml' event listener was deprecated in ~v13.03.01. use 'data' event listener."), t = "data"), this._.events.listeners(t)
	}, n.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r = e.tracks;
			for (s = 0, n = r.length; n > s; ++s) r[s].process();
			for (; s--;) r[s].ended && r.splice(s, 1);
			0 === r.length && i.nextTick(e.onended), e.currentTime += i.currentTimeIncr
		}
		return this
	}, i.register("mml", e);
	var r = function() {
		function t(t, e, i) {
			var s = this._ = {};
			s.sequencer = t, s.trackNum = e, s.commands = l(i), s.status = {
				t: 120,
				l: 4,
				o: 4,
				v: 12,
				q: 6,
				dot: 0,
				tie: !1
			}, s.index = 0, s.queue = [], s.currentTime = 0, s.queueTime = 0, s.segnoIndex = -1, s.loopStack = [], s.prevNote = 0, s.remain = 1 / 0, this.ended = !1, u(this)
		}
		var e = 0,
			s = 1,
			n = 2,
			r = 3;
		t.prototype.process = function() {
			var t = this._,
				l = t.sequencer,
				c = t.trackNum,
				f = t.queue,
				p = !1;
			if (f.length)
				for (; f[0][0] <= t.currentTime;) {
					var d = t.queue.shift();
					switch (d[1]) {
						case s:
							a(l, c, d[2], d[3]), t.remain = d[4], u(this);
							break;
						case n:
							o(l, c, d[2], d[3]);
							break;
						case r:
							h(l, d[2]);
							break;
						case e:
							p = !0
					}
					if (0 === f.length) break
				}
			t.remain -= i.currentTimeIncr, p && (this.ended = !0), t.currentTime += i.currentTimeIncr
		};
		var a = function(t, e, i, s) {
			var n, r, a, o = t.nodes;
			for (r = 0, a = o.length; a > r; ++r) n = o[r], n.noteOn ? n.noteOn(i, s) : n.bang();
			t._.emit("data", "noteOn", {
				trackNum: e,
				noteNum: i,
				velocity: s
			})
		}, o = function(t, e, i, s) {
				var n, r, a, o = t.nodes;
				for (r = 0, a = o.length; a > r; ++r) n = o[r], n.noteOff ? n.noteOff(i, s) : n.release && n.release();
				t._.emit("data", "noteOff", {
					trackNum: e,
					noteNum: i,
					velocity: s
				})
			}, h = function(t, e) {
				t._.emit("data", "command", {
					command: e
				})
			}, u = function(t) {
				var i = t._;
				i.sequencer;
				var a, o, h, u, l, c, f, p, d, m, v, g, b, _ = i.commands,
					y = i.queue,
					w = i.index,
					x = i.status,
					k = i.queueTime,
					A = i.loopStack;
				d = [];
				t: for (;;) {
					if (w >= _.length) {
						if (!(i.segnoIndex >= 0)) break;
						w = i.segnoIndex
					}
					switch (a = _[w++], a.name) {
						case "@":
							y.push([k, r, a.val]);
							break;
						case "n":
							if (o = x.t || 120, null !== a.len ? (u = a.len, l = a.dot || 0) : (u = x.l, l = a.dot || x.dot), f = 1e3 * 60 / o * (4 / u), f *= [1, 1.5, 1.75, 1.875][l] || 1, c = x.v << 3, x.tie) {
								for (g = y.length; g--;)
									if (y[g][2]) {
										y.splice(g, 1);
										break
									}
								h = i.prevNote
							} else h = i.prevNote = a.val + 12 * (x.o + 1), y.push([k, s, h, c, f]); if (u > 0) {
								if (p = x.q / 8, 1 > p)
									for (m = k + f * p, y.push([m, n, h, c]), g = 0, b = d.length; b > g; ++g) y.push([m, n, d[g], c]);
								if (d = [], k += f, !x.tie) break t
							} else d.push(h);
							x.tie = !1;
							break;
						case "r":
							o = x.t || 120, null !== a.len ? (u = a.len, l = a.dot || 0) : (u = x.l, l = a.dot || x.dot), u > 0 && (f = 1e3 * 60 / o * (4 / u), f *= [1, 1.5, 1.75, 1.875][l] || 1, k += f);
							break;
						case "l":
							x.l = a.val, x.dot = a.dot;
							break;
						case "o":
							x.o = a.val;
							break;
						case "<":
							9 > x.o && (x.o += 1);
							break;
						case ">":
							x.o > 0 && (x.o -= 1);
							break;
						case "v":
							x.v = a.val;
							break;
						case "(":
							15 > x.v && (x.v += 1);
							break;
						case ")":
							x.v > 0 && (x.v -= 1);
							break;
						case "q":
							x.q = a.val;
							break;
						case "&":
							x.tie = !0;
							break;
						case "$":
							i.segnoIndex = w;
							break;
						case "[":
							A.push([w, null, null]);
							break;
						case "|":
							v = A[A.length - 1], v && 1 === v[1] && (A.pop(), w = v[2]);
							break;
						case "]":
							v = A[A.length - 1], v && (null === v[1] && (v[1] = a.count, v[2] = w), v[1] -= 1, 0 === v[1] ? A.pop() : w = v[0]);
							break;
						case "t":
							x.t = null === a.val ? 120 : a.val;
							break;
						case "EOF":
							y.push([k, e])
					}
				}
				i.index = w,
				i.queueTime = k
			}, l = function(t) {
				var e, i, s, n, r, a, o, h, u = Array(t.length),
					l = [];
				for (r = 0, a = c.length; a > r; ++r)
					for (e = c[r], i = e.re; s = i.exec(t);) {
						if (!u[s.index]) {
							for (o = 0, h = s[0].length; h > o; ++o) u[s.index + o] = !0;
							n = e.func ? e.func(s) : {
								name: s[0]
							}, n && (n.index = s.index, n.origin = s[0], l.push(n))
						}
						for (; i.lastIndex < t.length && u[i.lastIndex];)++i.lastIndex
					}
				return l.sort(function(t, e) {
					return t.index - e.index
				}), l.push({
					name: "EOF"
				}), l
			}, c = [{
				re: /@(\d*)/g,
				func: function(t) {
					return {
						name: "@",
						val: t[1] || null
					}
				}
			}, {
				re: /([cdefgab])([\-+]?)(\d*)(\.*)/g,
				func: function(t) {
					return {
						name: "n",
						val: {
							c: 0,
							d: 2,
							e: 4,
							f: 5,
							g: 7,
							a: 9,
							b: 11
						}[t[1]] + ({
							"-": -1,
							"+": 1
						}[t[2]] || 0),
						len: "" === t[3] ? null : Math.min(0 | t[3], 64),
						dot: t[4].length
					}
				}
			}, {
				re: /r(\d*)(\.*)/g,
				func: function(t) {
					return {
						name: "r",
						len: "" === t[1] ? null : Math.max(1, Math.min(0 | t[1], 64)),
						dot: t[2].length
					}
				}
			}, {
				re: /&/g
			}, {
				re: /l(\d*)(\.*)/g,
				func: function(t) {
					return {
						name: "l",
						val: "" === t[1] ? 4 : Math.min(0 | t[1], 64),
						dot: t[2].length
					}
				}
			}, {
				re: /o([0-9])/g,
				func: function(t) {
					return {
						name: "o",
						val: "" === t[1] ? 4 : 0 | t[1]
					}
				}
			}, {
				re: /[<>]/g
			}, {
				re: /v(\d*)/g,
				func: function(t) {
					return {
						name: "v",
						val: "" === t[1] ? 12 : Math.min(0 | t[1], 15)
					}
				}
			}, {
				re: /[()]/g
			}, {
				re: /q([0-8])/g,
				func: function(t) {
					return {
						name: "q",
						val: "" === t[1] ? 6 : Math.min(0 | t[1], 8)
					}
				}
			}, {
				re: /\[/g
			}, {
				re: /\|/g
			}, {
				re: /\](\d*)/g,
				func: function(t) {
					return {
						name: "]",
						count: 0 | t[1] || 2
					}
				}
			}, {
				re: /t(\d*)/g,
				func: function(t) {
					return {
						name: "t",
						val: "" === t[1] ? null : Math.max(5, Math.min(0 | t[1], 300))
					}
				}
			}, {
				re: /\$/g
			}];
		return t
	}()
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e)
	}
	var i = t.fn;
	i.extend(e), e.prototype.process = function(t) {
		var e = this._;
		return this.tickID !== t && (this.tickID = t, e.ar ? (i.inputSignalAR(this), i.outputSignalAR(this)) : (this.cells[0][0] = i.inputSignalKR(this), i.outputSignalKR(this))), this
	}, i.register("mono", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e)
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r, a, o, h = this.nodes,
				u = this.cells[0],
				l = this.cells[1],
				c = this.cells[2],
				f = h.length,
				p = u.length;
			if (e.ar) {
				if (h.length > 0)
					for (h[0].process(t), a = h[0].cells[1], o = h[0].cells[2], l.set(a), c.set(o), s = 1; f > s; ++s)
						for (h[s].process(t), a = h[s].cells[1], o = h[s].cells[2], n = 0; p > n; ++n) l[n] *= a[n], c[n] *= o[n];
				else
					for (n = 0; p > n; ++n) l[n] = c[n] = 0;
				i.outputSignalAR(this)
			} else {
				if (h.length > 0)
					for (r = h[0].process(t).cells[0][0], s = 1; f > s; ++s) r *= h[s].process(t).cells[0][0];
				else r = 0;
				u[0] = r, i.outputSignalKR(this)
			}
		}
		return this
	}, i.register("*", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e);
		var i = this._;
		i.defaultValue = 0, i.index = 0, i.dict = {}, i.ar = !1
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		dict: {
			set: function(t) {
				if ("object" == typeof t) this._.dict = t;
				else if ("function" == typeof t) {
					for (var e = {}, i = 0; 128 > i; ++i) e[i] = t(i);
					this._.dict = e
				}
			},
			get: function() {
				return this._.dict
			}
		},
		defaultValue: {
			set: function(t) {
				"number" == typeof t && (this._.defaultValue = t)
			},
			get: function() {
				return this._.defaultValue
			}
		},
		index: {
			set: function(t) {
				"number" == typeof t && (this._.index = t)
			},
			get: function() {
				return this._.index
			}
		}
	}), s.at = function(t) {
		var e = this._;
		return (e.dict[0 | t] || e.defaultValue) * e.mul + e.add
	}, s.clear = function() {
		return this._.dict = {}, this
	}, s.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var n, r, a, o = this.nodes.length,
				h = s.dict,
				u = s.defaultValue,
				l = s.mul,
				c = s.add,
				f = e.length;
			if (s.ar && o) {
				for (i.inputSignalAR(this), a = 0; f > a; ++a) n = e[a], n = 0 > n ? 0 | n - .5 : 0 | n + .5, e[a] = (h[n] || u) * l + c;
				i.outputSignalAR(this)
			} else
				for (n = this.nodes.length ? i.inputSignalKR(this) : s.index, n = 0 > n ? 0 | n - .5 : 0 | n + .5, r = (h[n] || u) * l + c, a = 0; f > a; ++a) e[a] = r
		}
		return this
	}, i.register("ndict", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e)
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	s.process = function(t) {
		var e = this.cells[0],
			i = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r, a = i.mul,
				o = i.add;
			if (i.ar)
				for (s = 0, n = e.length; n > s; ++s) e[s] = (2 * Math.random() - 1) * a + o;
			else
				for (r = (2 * Math.random() + 1) * a + o, s = 0, n = e.length; n > s; ++s) e[s] = r
		}
		return this
	}, i.register("noise", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e);
		var s = this._;
		s.freq = t(440), s.phase = t(0), s.osc = new n(s.samplerate), s.tmp = new i.SignalArray(s.cellsize), s.osc.step = s.cellsize, this.once("init", r)
	}
	var i = t.fn,
		s = t.timevalue,
		n = t.modules.Oscillator;
	i.extend(e);
	var r = function() {
		var t = this._;
		this.wave || (this.wave = "sin"), t.plotData = t.osc.wave, t.plotLineWidth = 2, t.plotCyclic = !0, t.plotBefore = o
	}, a = e.prototype;
	Object.defineProperties(a, {
		wave: {
			set: function(t) {
				this._.osc.setWave(t)
			},
			get: function() {
				return this._.osc.wave
			}
		},
		freq: {
			set: function(e) {
				"string" == typeof e && (e = s(e), e = 0 >= e ? 0 : 1e3 / e), this._.freq = t(e)
			},
			get: function() {
				return this._.freq
			}
		},
		phase: {
			set: function(e) {
				this._.phase = t(e), this._.osc.feedback = !1
			},
			get: function() {
				return this._.phase
			}
		},
		fb: {
			set: function(e) {
				this._.phase = t(e), this._.osc.feedback = !0
			},
			get: function() {
				return this._.phase
			}
		}
	}), a.clone = function() {
		var t = i.clone(this);
		return t._.osc = this._.osc.clone(), t._.freq = this._.freq, t._.phase = this._.phase, t
	}, a.bang = function() {
		return this._.osc.reset(), this._.emit("bang"), this
	}, a.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n = this.cells[1],
				r = this.cells[2],
				a = e.cellsize;
			if (this.nodes.length) i.inputSignalAR(this);
			else
				for (s = 0; a > s; ++s) n[s] = r[s] = 1;
			var o = e.osc,
				h = e.freq.process(t).cells[0],
				u = e.phase.process(t).cells[0];
			if (o.frequency = h[0], o.phase = u[0], e.ar) {
				var l = e.tmp;
				for (e.freq.isAr ? e.phase.isAr ? o.processWithFreqAndPhaseArray(l, h, u) : o.processWithFreqArray(l, h) : e.phase.isAr ? o.processWithPhaseArray(l, u) : o.process(l), s = 0; a > s; ++s) n[s] *= l[s], r[s] *= l[s]
			} else {
				var c = o.next();
				for (s = 0; a > s; ++s) n[s] *= c, r[s] *= c
			}
			i.outputSignalAR(this)
		}
		return this
	};
	var o;
	"browser" === t.envtype && (o = function(t, e, i, s, n) {
		var r = (n >> 1) + .5;
		t.strokeStyle = "#ccc", t.lineWidth = 1, t.beginPath(), t.moveTo(e, r + i), t.lineTo(e + s, r + i), t.stroke()
	}), i.register("osc", e), i.register("sin", function(t) {
		return new e(t).set("wave", "sin")
	}), i.register("cos", function(t) {
		return new e(t).set("wave", "cos")
	}), i.register("pulse", function(t) {
		return new e(t).set("wave", "pulse")
	}), i.register("tri", function(t) {
		return new e(t).set("wave", "tri")
	}), i.register("saw", function(t) {
		return new e(t).set("wave", "saw")
	}), i.register("fami", function(t) {
		return new e(t).set("wave", "fami")
	}), i.register("konami", function(t) {
		return new e(t).set("wave", "konami")
	}), i.register("+sin", function(t) {
		return new e(t).set("wave", "+sin").kr()
	}), i.register("+pulse", function(t) {
		return new e(t).set("wave", "+pulse").kr()
	}), i.register("+tri", function(t) {
		return new e(t).set("wave", "+tri").kr()
	}), i.register("+saw", function(t) {
		return new e(t).set("wave", "+saw").kr()
	}), i.alias("square", "pulse")
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.pos = t(0), s.panL = .5, s.panR = .5
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		pos: {
			set: function(e) {
				this._.pos = t(e)
			},
			get: function() {
				return this._.pos
			}
		}
	}), s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s = e.pos.process(t).cells[0][0];
			e.prevPos !== s && (e.panL = 1 - s, e.panR = e.prevPos = s);
			var n, r, a, o = this.nodes,
				h = this.cells[1],
				u = this.cells[2],
				l = o.length,
				c = h.length;
			if (l) {
				for (a = o[0].process(t).cells[0], r = 0; c > r; ++r) h[r] = u[r] = a[r];
				for (n = 1; l > n; ++n)
					for (a = o[n].process(t).cells[0], r = 0; c > r; ++r) h[r] = u[r] += a[r];
				var f = e.panL,
					p = e.panR;
				for (r = 0; c > r; ++r) h[r] = h[r] * f, u[r] = u[r] * p
			} else h.set(i.emptycell), u.set(i.emptycell);
			i.outputSignalAR(this)
		}
		return this
	}, i.register("pan", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e);
		var i = this._;
		i.value = 0, i.env = new r(i.samplerate), i.env.step = i.cellsize, i.curve = "lin", i.counter = 0, i.ar = !1, i.onended = a(this), this.on("ar", o)
	}
	var i = t.fn,
		s = t.timevalue,
		n = t.modules.Envelope,
		r = t.modules.EnvelopeValue;
	i.extend(e);
	var a = function(t, e) {
		return function() {
			if ("number" == typeof e)
				for (var i = t.cells[0], s = t.cells[1], n = t.cells[2], r = t._.env.value, a = 0, o = s.length; o > a; ++a) i[0] = s[a] = n[a] = r;
			t._.emit("ended")
		}
	}, o = function(t) {
			this._.env.step = t ? 1 : this._.cellsize
		}, h = e.prototype;
	Object.defineProperties(h, {
		value: {
			set: function(t) {
				"number" == typeof t && (this._.env.value = t)
			},
			get: function() {
				return this._.env.value
			}
		}
	}), h.to = function(t, e, i) {
		var r = this._,
			a = r.env;
		if ("string" == typeof e ? e = s(e) : e === void 0 && (e = 0), i === void 0) r.counter = a.setNext(t, e, n.CurveTypeLin), r.curve = "lin";
		else {
			var o = n.CurveTypeDict[i];
			r.counter = o === void 0 ? a.setNext(t, e, n.CurveTypeCurve, i) : a.setNext(t, e, o), r.curve = i
		}
		return r.plotFlush = !0, this
	}, h.setAt = function(t, e) {
		var i = this._;
		return this.to(i.env.value, e, "set"), i.atValue = t, this
	}, h.linTo = function(t, e) {
		return this.to(t, e, "lin")
	}, h.expTo = function(t, e) {
		return this.to(t, e, "exp")
	}, h.sinTo = function(t, e) {
		return this.to(t, e, "sin")
	}, h.welTo = function(t, e) {
		return this.to(t, e, "wel")
	}, h.sqrTo = function(t, e) {
		return this.to(t, e, "sqr")
	}, h.cubTo = function(t, e) {
		return this.to(t, e, "cub")
	}, h.cancel = function() {
		var t = this._;
		return t.counter = t.env.setNext(t.env.value, 0, n.CurveTypeSet), this
	}, h.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, r, a = this.cells[1],
				o = this.cells[2],
				h = e.cellsize,
				u = e.env,
				l = e.counter;
			if (this.nodes.length) i.inputSignalAR(this);
			else
				for (s = 0; h > s; ++s) a[s] = o[s] = 1; if (0 >= l && ("set" === e.curve ? u.setNext(e.atValue, 0, n.CurveTypeSet) : u.setNext(u.value, 0, n.CurveTypeSet), i.nextTick(e.onended), e.counter = 1 / 0), e.ar) {
				for (s = 0; h > s; ++s) r = u.next(), a[s] *= r, o[s] *= r;
				e.counter -= e.cellsize
			} else {
				for (r = u.next(), s = 0; h > s; ++s) a[s] *= r, o[s] *= r;
				e.counter -= 1
			}
			i.outputSignalAR(this), e.value = r
		}
		return this
	};
	var u = t.Object.prototype.plot;
	h.plot = function(t) {
		var e = this._;
		if (e.plotFlush) {
			var i, s, a, o = new r(128),
				h = new Float32Array(128);
			if ("set" === e.curve)
				for (s = 100, a = h.length; a > s; ++s) h[s] = 1;
			else
				for (i = n.CurveTypeDict[e.curve], i === void 0 ? o.setNext(1, 1e3, n.CurveTypeCurve, e.curve) : o.setNext(1, 1e3, i), s = 0, a = h.length; a > s; ++s) h[s] = o.next();
			e.plotData = h, e.plotRange = [0, 1], e.plotFlush = null
		}
		return u.call(this, t)
	}, i.register("param", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.freq = t("sin", {
			freq: 1,
			add: 1e3,
			mul: 250
		}).kr(), s.Q = t(1), s.allpass = [], this.steps = 2
	}
	var i = t.fn,
		s = t.modules.Biquad;
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		freq: {
			set: function(t) {
				this._.freq = t
			},
			get: function() {
				return this._.freq
			}
		},
		Q: {
			set: function(e) {
				this._.Q = t(e)
			},
			get: function() {
				return this._.Q
			}
		},
		steps: {
			set: function(t) {
				if ("number" == typeof t) {
					if (t |= 0, 2 === t || 4 === t || 8 === t || 12 === t) {
						var e = this._.allpass;
						if (t > e.length)
							for (var i = e.length; t > i; ++i) e[i] = new s(this._.samplerate), e[i].setType("allpass")
					}
					this._.steps = t
				}
			},
			get: function() {
				return this._.steps
			}
		}
	}), n.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			if (this.tickID = t, i.inputSignalAR(this), !e.bypassed) {
				var s, n = this.cells[1],
					r = this.cells[2],
					a = e.freq.process(t).cells[0][0],
					o = e.Q.process(t).cells[0][0],
					h = e.steps;
				for (s = 0; h > s; s += 2) e.allpass[s].setParams(a, o, 0), e.allpass[s].process(n, r), e.allpass[s + 1].setParams(a, o, 0), e.allpass[s + 1].process(n, r)
			}
			i.outputSignalAR(this)
		}
		return this
	}, i.register("phaser", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), s.fixAR(this);
		for (var i = new Uint8Array(5), n = 0; 5 > n; ++n) i[n] = (0 | Math.random() * (1 << 30)) % 25;
		this._.whites = i, this._.key = 0
	}
	var i = 31,
		s = t.fn;
	s.extend(e);
	var n = e.prototype;
	n.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var n, r, a, o, h, u, l = s.key,
				c = s.whites,
				f = s.mul,
				p = s.add;
			for (n = 0, r = e.length; r > n; ++n) {
				for (o = l++, l > i && (l = 0), u = o ^ l, a = h = 0; 5 > a; ++a) u & 1 << a && (c[a] = (0 | Math.random() * (1 << 30)) % 25), h += c[a];
				e[n] = (.01666666 * h - 1) * f + p
			}
			s.key = l
		}
		return this
	}, s.register("pink", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), this._.freq = 440, this._.buffer = null, this._.index = 0
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		freq: {
			set: function(t) {
				"number" == typeof t && (0 > t && (t = 0), this._.freq = t)
			},
			get: function() {
				return this._.freq
			}
		}
	}), s.bang = function() {
		for (var t = this._, e = t.freq, s = 0 | t.samplerate / e + .5, n = t.buffer = new i.SignalArray(s), r = 0; s > r; ++r) n[r] = 2 * Math.random() - 1;
		return t.index = 0, t.emit("bang"), this
	}, s.process = function(t) {
		var e = this.cells[0],
			i = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s = i.buffer;
			if (s) {
				var n, r, a, o = s.length,
					h = i.index,
					u = i.mul,
					l = i.add,
					c = e.length;
				for (a = 0; c > a; ++a) n = h, r = s[h++], h >= o && (h = 0), r = .5 * (r + s[h]), s[n] = r, e[a] = r * u + l;
				i.index = h
			}
		}
		return this
	}, i.register("pluck", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.listener(this), i.fixAR(this);
		var s = this._;
		s.timeout = 5e3, s.status = n, s.writeIndex = 0, s.writeIndexIncr = 1, s.currentTime = 0, s.currentTimeIncr = 1e3 / s.samplerate, s.onended = a(this)
	}
	var i = t.fn,
		s = t.timevalue,
		n = 0,
		r = 1;
	i.extend(e);
	var a = function(t) {
		return function() {
			var e = t._,
				s = new i.SignalArray(e.buffer.subarray(0, 0 | e.writeIndex));
			e.status = n, e.writeIndex = 0, e.currentTime = 0, e.emit("ended", {
				buffer: s,
				samplerate: e.samplerate
			})
		}
	}, o = e.prototype;
	Object.defineProperties(o, {
		timeout: {
			set: function(t) {
				"string" == typeof t && (t = s(t)), "number" == typeof t && t > 0 && (this._.timeout = t)
			},
			get: function() {
				return this._.timeout
			}
		},
		samplerate: {
			set: function(t) {
				"number" == typeof t && t > 0 && this._.samplerate >= t && (this._.samplerate = t)
			},
			get: function() {
				return this._.samplerate
			}
		},
		currentTime: {
			get: function() {
				return this._.currentTime
			}
		}
	}), o.start = function() {
		var e, s = this._;
		return s.status === n && (e = 0 | .01 * s.timeout * s.samplerate, (!s.buffer || e > s.buffer.length) && (s.buffer = new i.SignalArray(e)), s.writeIndex = 0, s.writeIndexIncr = s.samplerate / t.samplerate, s.currentTime = 0, s.status = r, s.emit("start"), this.listen()), this
	}, o.stop = function() {
		var t = this._;
		return t.status === r && (t.status = n, t.emit("stop"), i.nextTick(t.onended), this.unlisten()), this
	}, o.bang = function() {
		return this._.status === n ? this.srart() : this._.status === r && this.stop(), this._.emit("bang"), this
	}, o.process = function(t) {
		var e = this._,
			s = this.cells[0];
		if (this.tickID !== t) {
			if (this.tickID = t, i.inputSignalAR(this), e.status === r) {
				var n, a = s.length,
					o = e.buffer,
					h = e.timeout,
					u = e.writeIndex,
					l = e.writeIndexIncr,
					c = e.currentTime,
					f = e.currentTimeIncr;
				for (n = 0; a > n; ++n) o[0 | u] = s[n], u += l, c += f, c >= h && i.nextTick(e.onended);
				e.writeIndex = u, e.currentTime = c
			}
			i.outputSignalAR(this)
		}
		return this
	}, i.register("record", e), i.alias("rec", "record")
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this), this._.reverb = new s(this._.samplerate, this._.cellsize)
	}
	var i = t.fn,
		s = t.modules.Reverb;
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		room: {
			set: function(t) {
				"number" == typeof t && (t = t > 1 ? 1 : 0 > t ? 0 : t, this._.reverb.setRoomSize(t))
			},
			get: function() {
				return this._.reverb.roomsize
			}
		},
		damp: {
			set: function(t) {
				"number" == typeof t && (t = t > 1 ? 1 : 0 > t ? 0 : t, this._.reverb.setDamp(t))
			},
			get: function() {
				return this._.reverb.damp
			}
		},
		mix: {
			set: function(t) {
				"number" == typeof t && (t = t > 1 ? 1 : 0 > t ? 0 : t, this._.reverb.wet = t)
			},
			get: function() {
				return this._.reverb.wet
			}
		}
	}), n.process = function(t) {
		var e = this._;
		return this.tickID !== t && (this.tickID = t, i.inputSignalAR(this), e.bypassed || e.reverb.process(this.cells[1], this.cells[2]), i.outputSignalAR(this)), this
	}, i.register("reverb", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 0, e), i.timer(this), i.fixKR(this);
		var s = this._;
		s.queue = [], s.currentTime = 0, s.maxRemain = 1e3
	}
	var i = t.fn,
		s = t.timevalue;
	i.extend(e);
	var n = e.prototype;
	Object.defineProperties(n, {
		queue: {
			get: function() {
				return this._.queue
			}
		},
		remain: {
			get: function() {
				return this._.queue.length
			}
		},
		maxRemain: {
			set: function(t) {
				"number" == typeof t && t > 0 && (this._.maxRemain = t)
			},
			get: function() {
				return this._.maxRemain
			}
		},
		isEmpty: {
			get: function() {
				return 0 === this._.queue.length
			}
		},
		currentTime: {
			get: function() {
				return this._.currentTime
			}
		}
	}), n.sched = function(t, e, i) {
		return "string" == typeof t && (t = s(t)), "number" == typeof t && this.schedAbs(this._.currentTime + t, e, i), this
	}, n.schedAbs = function(e, i, n) {
		if ("string" == typeof e && (e = s(e)), "number" == typeof e) {
			var r = this._,
				a = r.queue;
			if (a.length >= r.maxRemain) return this;
			for (var o = a.length; o-- && !(e > a[o][0]););
			a.splice(o + 1, 0, [e, t(i), n])
		}
		return this
	}, n.advance = function(t) {
		return "string" == typeof t && (t = s(t)), "number" == typeof t && (this._.currentTime += t), this
	}, n.clear = function() {
		return this._.queue.splice(0), this
	}, n.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s = null,
				n = e.queue;
			if (n.length)
				for (; n[0][0] < e.currentTime;) {
					var r = e.queue.shift();
					if (r[1].bang(r[2]), s = "sched", 0 === n.length) {
						s = "empty";
						break
					}
				}
			e.currentTime += i.currentTimeIncr, s && e.emit(s)
		}
		return this
	}, i.register("schedule", e), i.alias("sched", "schedule")
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.listener(this), i.fixAR(this);
		var s = this._;
		s.samples = 0, s.writeIndex = 0, s.plotFlush = !0, this.once("init", n)
	}
	var i = t.fn,
		s = t.timevalue;
	i.extend(e);
	var n = function() {
		this._.buffer || (this.size = 1024), this._.interval || (this.interval = 1e3)
	}, r = e.prototype;
	Object.defineProperties(r, {
		size: {
			set: function(t) {
				var e = this._;
				if (!e.buffer && "number" == typeof t) {
					var s = 64 > t ? 64 : t > 2048 ? 2048 : t;
					e.buffer = new i.SignalArray(s), e.reservedinterval && (this.interval = e.reservedinterval, e.reservedinterval = null)
				}
			},
			get: function() {
				return this._.buffer.length
			}
		},
		interval: {
			set: function(t) {
				var e = this._;
				"string" == typeof t && (t = s(t)), "number" == typeof t && t > 0 && (e.buffer ? (e.interval = t, e.samplesIncr = .001 * t * e.samplerate / e.buffer.length, 1 > e.samplesIncr && (e.samplesIncr = 1)) : e.reservedinterval = t)
			},
			get: function() {
				return this._.interval
			}
		}
	}), r.bang = function() {
		for (var t = this._, e = t.buffer, i = 0, s = e.length; s > i; ++i) e[i] = 0;
		return t.samples = 0, t.writeIndex = 0, this._.emit("bang"), this
	}, r.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this), i.outputSignalAR(this);
			var s, n = this.cells[0],
				r = e.cellsize,
				a = e.samples,
				o = e.samplesIncr,
				h = e.buffer,
				u = e.writeIndex,
				l = !1,
				c = h.length;
			for (s = 0; r > s; ++s) 0 >= a && (h[u++] = n[s], u >= c && (u = 0), l = e.plotFlush = !0, a += o), --a;
			e.samples = a, e.writeIndex = u, l && this._.emit("data")
		}
		return this
	};
	var a = t.Object.prototype.plot;
	r.plot = function(t) {
		var e = this._;
		if (e.plotFlush) {
			for (var i = e.buffer, s = i.length - 1, n = new Float32Array(i.length), r = e.writeIndex, o = 0, h = i.length; h > o; o++) n[o] = i[++r & s];
			e.plotData = n, e.plotFlush = null
		}
		return a.call(this, t)
	}, i.register("scope", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), n.fixAR(this);
		var i = this._;
		i.numberOfInputs = 0, i.numberOfOutputs = 0, i.bufferSize = 0, i.bufferMask = 0, i.duration = 0, i.inputBufferL = null, i.inputBufferR = null, i.outputBufferL = null, i.outputBufferR = null, i.onaudioprocess = null, i.index = 0, this.once("init", r)
	}

	function i(t, e) {
		this.samplerate = t._.samplerate, this.length = t._.bufferSize, this.duration = t._.duration, this.numberOfChannels = e.length, this.getChannelData = function(t) {
			return e[t]
		}
	}

	function s(e) {
		var s = e._;
		this.node = e, this.playbackTime = t.currentTime, this.inputBuffer = 2 === s.numberOfInputs ? new i(e, [s.inputBufferL, s.inputBufferR]) : new i(e, [s.inputBufferL]), this.outputBuffer = 2 === s.numberOfOutputs ? new i(e, [s.outputBufferL, s.outputBufferR]) : new i(e, [s.outputBufferL])
	}
	var n = t.fn;
	n.extend(e);
	var r = function() {
		var t = this._;
		0 === t.numberOfInputs && (this.numberOfInputs = 1), 0 === t.numberOfOutputs && (this.numberOfOutputs = 1), 0 === t.bufferSize && (this.bufferSize = 1024)
	}, a = e.prototype;
	Object.defineProperties(a, {
		numberOfInputs: {
			set: function(t) {
				var e = this._;
				0 === e.numberOfInputs && (e.numberOfInputs = 2 === t ? 2 : 1)
			},
			get: function() {
				return this._.numberOfInputs
			}
		},
		numberOfOutputs: {
			set: function(t) {
				var e = this._;
				0 === e.numberOfOutputs && (e.numberOfOutputs = 2 === t ? 2 : 1)
			},
			get: function() {
				return this._.numberOfOutputs
			}
		},
		bufferSize: {
			set: function(t) {
				var e = this._;
				0 === e.bufferSize && -1 !== [256, 512, 1024, 2048, 4096, 8192, 16384].indexOf(t) && (e.bufferSize = t, e.bufferMask = t - 1, e.duration = t / e.samplerate, e.inputBufferL = new n.SignalArray(t), e.inputBufferR = new n.SignalArray(t), e.outputBufferL = new n.SignalArray(t), e.outputBufferR = new n.SignalArray(t))
			},
			get: function() {
				return this._.bufferSize
			}
		},
		onaudioprocess: {
			set: function(t) {
				"function" == typeof t && (this._.onaudioprocess = t)
			},
			get: function() {
				return this._.onaudioprocess
			}
		}
	}), a.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var i, r = e.cellsize,
				a = e.bufferMask,
				o = e.index,
				h = o + r,
				u = this.cells[1],
				l = this.cells[2];
			if (n.inputSignalAR(this), 2 === e.numberOfInputs) e.inputBufferL.set(u, o), e.inputBufferR.set(l, o);
			else {
				i = e.inputBufferL;
				for (var c = 0; r > c; c++) i[o + c] = .5 * (u[c] + l[c])
			}
			u.set(e.outputBufferL.subarray(o, h)), l.set(e.outputBufferR.subarray(o, h)), e.index = h & a, 0 === e.index && e.onaudioprocess && (e.onaudioprocess(new s(this)), 1 === e.numberOfOutputs && e.outputBufferR.set(e.outputBufferL)), n.outputSignalAR(this)
		}
		return this
	}, n.register("script", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), this._.selected = 0, this._.background = !1
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		selected: {
			set: function(t) {
				"number" == typeof t && (this._.selected = t, this.cells[1].set(i.emptycell), this.cells[2].set(i.emptycell))
			},
			get: function() {
				return this._.selected
			}
		},
		background: {
			set: function(t) {
				this._.background = !! t
			},
			get: function() {
				return this._.background
			}
		}
	}), s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n = this.nodes,
				r = n.length;
			if (e.background)
				for (s = 0; r > s; ++s) n[s].process(t);
			var a = n[e.selected];
			a && (e.background || a.process(t), this.cells[1].set(a.cells[1]), this.cells[2].set(a.cells[2])), i.outputSignalAR(this)
		}
		return this
	}, i.register("selector", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.listener(this), i.fixAR(this);
		var s = this._;
		s.status = r, s.samples = 0, s.samplesIncr = 0, s.writeIndex = 0, s.plotFlush = !0, s.plotRange = [0, 32], s.plotBarStyle = !0, this.once("init", o)
	}
	var i = t.fn,
		s = t.timevalue,
		n = t.modules.FFT,
		r = 0,
		a = 1;
	i.extend(e);
	var o = function() {
		var t = this._;
		t.fft || (this.size = 512), t.interval || (this.interval = 500)
	}, h = e.prototype;
	Object.defineProperties(h, {
		size: {
			set: function(t) {
				var e = this._;
				if (!e.fft && "number" == typeof t) {
					var s = 256 > t ? 256 : t > 2048 ? 2048 : t;
					e.fft = new n(s), e.buffer = new i.SignalArray(e.fft.length), e.freqs = new i.SignalArray(e.fft.length >> 1), e.reservedwindow && (e.fft.setWindow(e.reservedwindow), e.reservedwindow = null), e.reservedinterval && (this.interval = e.reservedinterval, e.reservedinterval = null)
				}
			},
			get: function() {
				return this._.buffer.length
			}
		},
		window: {
			set: function(t) {
				this._.fft.setWindow(t)
			},
			get: function() {
				return this._.fft.windowName
			}
		},
		interval: {
			set: function(t) {
				var e = this._;
				"string" == typeof t && (t = s(t)), "number" == typeof t && t > 0 && (e.buffer ? (e.interval = t, e.samplesIncr = .001 * t * e.samplerate, e.samplesIncr < e.buffer.length && (e.samplesIncr = e.buffer.length, e.interval = 1e3 * e.samplesIncr / e.samplerate)) : e.reservedinterval = t)
			},
			get: function() {
				return this._.interval
			}
		},
		spectrum: {
			get: function() {
				return this._.fft.getFrequencyData(this._.freqs)
			}
		},
		real: {
			get: function() {
				return this._.fft.real
			}
		},
		imag: {
			get: function() {
				return this._.fft.imag
			}
		}
	}), h.bang = function() {
		return this._.samples = 0, this._.writeIndex = 0, this._.emit("bang"), this
	}, h.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t, i.inputSignalAR(this), i.outputSignalAR(this);
			var s, n, o = this.cells[0],
				h = o.length,
				u = e.status,
				l = e.samples,
				c = e.samplesIncr,
				f = e.writeIndex,
				p = e.buffer,
				d = p.length;
			for (s = 0; h > s; ++s) 0 >= l && u === r && (u = a, f = 0, l += c), u === a && (p[f++] = o[s], f >= d && (e.fft.forward(p), n = e.plotFlush = !0, u = r)), --l;
			e.samples = l, e.status = u, e.writeIndex = f, n && this._.emit("data")
		}
		return this
	};
	var u = t.Object.prototype.plot;
	h.plot = function(t) {
		return this._.plotFlush && (this._.plotData = this.spectrum, this._.plotFlush = null), u.call(this, t)
	}, i.register("spectrum", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), this._.ar = !1
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s, n, r, a, o, h = this.nodes,
				u = this.cells[0],
				l = this.cells[1],
				c = this.cells[2],
				f = h.length,
				p = u.length;
			if (e.ar) {
				if (h.length > 0)
					for (h[0].process(t), a = h[0].cells[1], o = h[0].cells[2], l.set(a), c.set(o), s = 1; f > s; ++s)
						for (h[s].process(t), a = h[s].cells[1], o = h[s].cells[2], n = 0; p > n; ++n) l[n] -= a[n], c[n] -= o[n];
				else
					for (n = 0; p > n; ++n) l[n] = c[s] = 0;
				i.outputSignalAR(this)
			} else {
				if (h.length > 0)
					for (r = h[0].process(t).cells[0][0], s = 1; f > s; ++s) r -= h[s].process(t).cells[0][0];
				else r = 0;
				u[0] = r, i.outputSignalKR(this)
			}
		}
		return this
	}, i.register("-", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		this.playbackState = i.FINISHED_STATE, s.poly = 4, s.genList = [], s.genDict = {}, s.synthdef = null, s.remGen = r(this), s.onended = i.make_onended(this)
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		def: {
			set: function(t) {
				"function" == typeof t && (this._.synthdef = t)
			},
			get: function() {
				return this._.synthdef
			}
		},
		poly: {
			set: function(t) {
				"number" == typeof t && t > 0 && 64 >= t && (this._.poly = t)
			},
			get: function() {
				return this._.poly
			}
		}
	});
	var n = function(t, e) {
		return function() {
			t._.remGen(e.gen)
		}
	}, r = function(t) {
			return function(e) {
				var i = t._,
					s = i.genList.indexOf(e); - 1 !== s && i.genList.splice(s, 1), e.noteNum !== void 0 && (i.genDict[e.noteNum] = null)
			}
		}, a = function(e, s, r, a) {
			r |= 0, 0 >= r ? this.noteOff(this, e) : r > 127 && (r = 127);
			var o = this._,
				h = o.genList,
				u = o.genDict,
				l = u[e];
			l && o.remGen(l);
			var c = {
				freq: s,
				noteNum: e,
				velocity: r,
				mul: .0078125 * r
			};
			if (a)
				for (var f in a) c[f] = a[f];
			c.doneAction = n(this, c), l = o.synthdef.call(this, c), l instanceof t.Object && (l.noteNum = e, h.push(l), u[e] = c.gen = l, this.playbackState = i.PLAYING_STATE, h.length > o.poly && o.remGen(h[0]))
		}, o = function() {
			for (var t = new Float32Array(128), e = 0; 128 > e; ++e) t[e] = 440 * Math.pow(2, 1 * (e - 69) / 12);
			return t
		}(),
		h = function(t) {
			return t > 0 ? 12 * Math.log(1 * t / 440) * Math.LOG2E + 69 : 0
		};
	s.noteOn = function(t, e, i) {
		var s = o[t] || 440 * Math.pow(2, (t - 69) / 12);
		return a.call(this, 0 | t + .5, s, e, i), this
	}, s.noteOff = function(t) {
		var e = this._.genDict[t];
		return e && e.release && e.release(), this
	}, s.noteOnWithFreq = function(t, e, i) {
		var s = h(t);
		return a.call(this, 0 | s + .5, t, e, i), this
	}, s.noteOffWithFreq = function(t) {
		var e = h(t);
		return this.noteOff(0 | e + .5)
	}, s.allNoteOff = function() {
		for (var t = this._.genList, e = 0, i = t.length; i > e; ++e) t[e].release && t[e].release()
	}, s.allSoundOff = function() {
		for (var t = this._, e = t.genList, i = t.genDict; e.length;) delete i[e.shift().noteNum]
	}, s.synth = function(e) {
		var s, r = this._,
			a = r.genList,
			o = {};
		if (e)
			for (var h in e) o[h] = e[h];
		return o.doneAction = n(this, o), s = r.synthdef.call(this, o), s instanceof t.Object && (a.push(s), o.gen = s, this.playbackState = i.PLAYING_STATE, a.length > r.poly && r.remGen(a[0])), this
	}, s.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			if (this.tickID = t, this.playbackState === i.PLAYING_STATE) {
				var n, r, a, o, h, u, l = s.genList,
					c = this.cells[1],
					f = this.cells[2],
					p = e.length;
				if (l.length)
					for (n = l[0], n.process(t), c.set(n.cells[1]), f.set(n.cells[2]), r = 1, a = l.length; a > r; ++r)
						for (n = l[r], n.process(t), h = n.cells[1], u = n.cells[2], o = 0; p > o; ++o) c[o] += h[o], f[o] += u[o];
				else i.nextTick(s.onended)
			}
			i.outputSignalAR(this)
		}
		return this
	}, i.register("SynthDef", e);
	var u = {
		set: function(e) {
			i.isDictionary(e) ? "string" == typeof e.type && (this._.env = e) : e instanceof t.Object && (this._.env = e)
		},
		get: function() {
			return this._.env
		}
	};
	i.register("OscGen", function() {
		var i = {
			set: function(e) {
				e instanceof t.Object && (this._.osc = e)
			},
			get: function() {
				return this._.osc
			}
		}, s = {
				set: function(t) {
					"string" == typeof t && (this._.wave = t)
				},
				get: function() {
					return this._.wave
				}
			}, n = function(e) {
				var i, s, n, r, a = this._;
				return s = a.osc || null, n = a.env || {}, r = n.type || "perc", s instanceof t.Object && "function" == typeof s.clone && (s = s.clone()), s || (s = t("osc", {
					wave: a.wave
				})), s.freq = e.freq, s.mul = s.mul * e.velocity / 128, i = s, n instanceof t.Object ? "function" == typeof n.clone && (i = n.clone().append(i)) : i = t(r, n, i), i.on("ended", e.doneAction).bang(), i
			};
		return function(t) {
			var r = new e(t);
			return r._.wave = "sin", Object.defineProperties(r, {
				env: u,
				osc: i,
				wave: s
			}), r.def = n, r
		}
	}()), i.register("PluckGen", function() {
		var i = function(e) {
			var i, s, n, r = this._;
			return s = r.env || {}, n = s.type || "perc", i = t("pluck", {
				freq: e.freq,
				mul: e.velocity / 128
			}).bang(), s instanceof t.Object ? "function" == typeof s.clone && (i = s.clone().append(i)) : i = t(n, s, i), i.on("ended", e.doneAction).bang(), i
		};
		return function(t) {
			var s = new e(t);
			return Object.defineProperties(s, {
				env: u
			}), s.def = i, s
		}
	}())
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 2, e), i.fixAR(this);
		var s = this._;
		s.isLooped = !1, s.onended = i.make_onended(this, 0)
	}
	var i = t.fn,
		s = t.modules.Scissor,
		n = s.Tape,
		r = s.TapeStream,
		a = i.isSignalArray;
	i.extend(e);
	var o = e.prototype;
	Object.defineProperties(o, {
		tape: {
			set: function(e) {
				e instanceof n ? (this.playbackState = i.PLAYING_STATE, this._.tape = e, this._.tapeStream = new r(e, this._.samplerate), this._.tapeStream.isLooped = this._.isLooped) : (e instanceof t.Object && e.buffer && (e = e.buffer), "object" == typeof e && Array.isArray(e.buffer) && a(e.buffer[0]) && (this.playbackState = i.PLAYING_STATE, this._.tape = new s(e), this._.tapeStream = new r(this._.tape, this._.samplerate), this._.tapeStream.isLooped = this._.isLooped))
			},
			get: function() {
				return this._.tape
			}
		},
		isLooped: {
			get: function() {
				return this._.isLooped
			}
		},
		buffer: {
			get: function() {
				return this._.tape ? this._.tape.getBuffer() : void 0
			}
		}
	}), o.loop = function(t) {
		return this._.isLooped = !! t, this._.tapeStream && (this._.tapeStream.isLooped = this._.isLooped), this
	}, o.bang = function() {
		return this.playbackState = i.PLAYING_STATE, this._.tapeStream && this._.tapeStream.reset(), this._.emit("bang"), this
	}, o.getBuffer = function() {
		return this._.tape ? this._.tape.getBuffer() : void 0
	}, o.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			this.tickID = t;
			var s = e.tapeStream;
			if (s) {
				var n = this.cells[1],
					r = this.cells[2],
					a = s.fetch(n.length);
				n.set(a[0]), r.set(a[1]), this.playbackState === i.PLAYING_STATE && s.isEnded && i.nextTick(e.onended)
			}
			i.outputSignalAR(this)
		}
		return this
	}, i.register("tape", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.timer(this);
		var s = this._;
		this.playbackState = i.FINISHED_STATE, s.task = [], s.i = 0, s.j = 0, s.imax = 0, s.jmax = 0, s.wait = 0, s.count = 0, s.args = {}, s.doNum = 1, s.initFunc = i.nop, s.onended = a(this), this.on("start", r)
	}
	var i = t.fn,
		s = t.timevalue,
		n = t(function() {}).constructor;
	i.extend(e);
	var r = function() {
		var t, e = this._;
		this.playbackState = i.PLAYING_STATE, e.task = this.nodes.map(function(t) {
			return t instanceof n ? t.func : !1
		}).filter(function(t) {
			return !!t
		}), e.i = e.j = 0, e.imax = e.doNum, e.jmax = e.task.length, t = e.initFunc(), i.isDictionary(t) || (t = {
			param: t
		}), e.args = t
	}, a = function(t) {
			return function() {
				t.playbackState = i.FINISHED_STATE;
				var e = t._,
					s = t.cells[0],
					n = t.cells[1],
					r = t.cells[2],
					a = e.args;
				if ("number" == typeof a)
					for (var o = 0, h = n.length; h > o; ++o) s[0] = n[o] = r[o] = a;
				e.emit("ended", e.args)
			}
		}, o = e.prototype;
	Object.defineProperties(o, {
		"do": {
			set: function(t) {
				"number" == typeof t && t > 0 && (this._.doNum = 1 / 0 === t ? 1 / 0 : 0 | t)
			},
			get: function() {
				return this._.doNum
			}
		},
		init: {
			set: function(t) {
				"function" == typeof t && (this._.initFunc = t)
			},
			get: function() {
				return this._.initFunc
			}
		}
	}), o.bang = function() {
		var t = this._;
		return t.count = 0, t.emit("bang"), this
	}, o.wait = function(t) {
		return "string" == typeof t && (t = s(t)), "number" == typeof t && t > 0 && (this._.count += 0 | .001 * this._.samplerate * t), this
	}, o.process = function(t) {
		var e, s = this.cells[0],
			n = this._;
		if (this.tickID !== t && (this.tickID = t, n.i < n.imax)) {
			for (; 0 >= n.count;) {
				if (n.j >= n.jmax) {
					if (++n.i, n.i >= n.imax) {
						i.nextTick(n.onended);
						break
					}
					n.j = 0
				}
				e = n.task[n.j++], e && e.call(this, n.i, n.args)
			}
			n.count -= s.length
		}
		return this
	}, i.register("task", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 0, e), i.timer(this), i.fixKR(this);
		var s = this._;
		this.playbackState = i.FINISHED_STATE, s.currentTime = 0, s.samplesMax = 0, s.samples = 0, s.onended = i.make_onended(this), this.once("init", n), this.on("start", r)
	}
	var i = t.fn,
		s = t.timevalue;
	i.extend(e);
	var n = function() {
		this._.timeout || (this.timeout = 1e3)
	}, r = function() {
			this.playbackState = i.PLAYING_STATE
		};
	Object.defineProperty(r, "unremovable", {
		value: !0,
		writable: !1
	});
	var a = e.prototype;
	Object.defineProperties(a, {
		timeout: {
			set: function(t) {
				var e = this._;
				"string" == typeof t && (t = s(t)), "number" == typeof t && t >= 0 && (this.playbackState = i.PLAYING_STATE, e.timeout = t, e.samplesMax = 0 | e.samplerate * .001 * t, e.samples = e.samplesMax)
			},
			get: function() {
				return this._.timeout
			}
		},
		currentTime: {
			get: function() {
				return this._.currentTime
			}
		}
	}), a.bang = function() {
		var t = this._;
		return this.playbackState = i.PLAYING_STATE, t.samples = t.samplesMax, t.currentTime = 0, t.emit("bang"), this
	}, a.process = function(t) {
		var e = this.cells[0],
			s = this._;
		if (this.tickID !== t) {
			if (this.tickID = t, s.samples > 0 && (s.samples -= e.length), 0 >= s.samples) {
				for (var n = this.nodes, r = 0, a = n.length; a > r; ++r) n[r].bang();
				i.nextTick(s.onended)
			}
			s.currentTime += i.currentTimeIncr
		}
		return this
	}, i.register("timeout", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e), i.fixAR(this), this._.curve = null
	}
	var i = t.fn;
	i.extend(e);
	var s = e.prototype;
	Object.defineProperties(s, {
		curve: {
			set: function(t) {
				i.isSignalArray(t) && (this._.curve = t)
			},
			get: function() {
				return this._.curve
			}
		}
	}), s.process = function(t) {
		var e = this._;
		if (this.tickID !== t) {
			if (this.tickID = t, i.inputSignalAR(this), e.curve) {
				var s, n, r = this.cells[0],
					a = e.curve,
					o = a.length,
					h = e.cellsize;
				for (n = 0; h > n; ++n) s = 0 | .5 * (r[n] + 1) * o + .5, 0 > s ? s = 0 : s >= o - 1 && (s = o - 1), r[n] = a[s]
			}
			i.outputSignalAR(this)
		}
		return this
	}, i.register("waveshaper", e)
}(timbre),
function(t) {
	"use strict";

	function e(e) {
		t.Object.call(this, 1, e);
		var i = this._;
		i.inMin = 0, i.inMax = 1, i.outMin = 0, i.outMax = 1, i.ar = !1, this.once("init", s)
	}
	var i = t.fn;
	i.extend(e);
	var s = function() {
		this._.warp || (this.warp = "linlin")
	}, n = e.prototype;
	Object.defineProperties(n, {
		inMin: {
			set: function(t) {
				"number" == typeof t && (this._.inMin = t)
			},
			get: function() {
				return this._.inMin
			}
		},
		inMax: {
			set: function(t) {
				"number" == typeof t && (this._.inMax = t)
			},
			get: function() {
				return this._.inMax
			}
		},
		outMin: {
			set: function(t) {
				"number" == typeof t && (this._.outMin = t)
			},
			get: function() {
				return this._.outMin
			}
		},
		outMax: {
			set: function(t) {
				"number" == typeof t && (this._.outMax = t)
			},
			get: function() {
				return this._.outMax
			}
		},
		warp: {
			set: function(t) {
				if ("string" == typeof t) {
					var e = r[t];
					e && (this._.warp = e, this._.warpName = t)
				}
			},
			get: function() {
				return this._.warpName
			}
		}
	}), n.process = function(t) {
		var e = this._,
			s = this.cells[0];
		if (this.tickID !== t) {
			this.tickID = t;
			var n, r = e.inMin,
				a = e.inMax,
				o = e.outMin,
				h = e.outMax,
				u = e.warp,
				l = this.nodes.length,
				c = e.mul,
				f = e.add,
				p = s.length;
			if (e.ar && l) {
				for (i.inputSignalAR(this), n = 0; p > n; ++n) s[n] = u(s[n], r, a, o, h) * c + f;
				i.outputSignalAR(this)
			} else {
				var d = this.nodes.length ? i.inputSignalKR(this) : 0,
					m = u(d, r, a, o, h) * c + f;
				for (n = 0; p > n; ++n) s[n] = m
			}
		}
		return this
	};
	var r = {
		linlin: function(t, e, i, s, n) {
			return e > t ? s : t > i ? n : i === e ? s : (t - e) / (i - e) * (n - s) + s
		},
		linexp: function(t, e, i, s, n) {
			return e > t ? s : t > i ? n : 0 === s ? 0 : i === e ? n : Math.pow(n / s, (t - e) / (i - e)) * s
		},
		explin: function(t, e, i, s, n) {
			return e > t ? s : t > i ? n : 0 === e ? n : Math.log(t / e) / Math.log(i / e) * (n - s) + s
		},
		expexp: function(t, e, i, s, n) {
			return e > t ? s : t > i ? n : 0 === e || 0 === s ? 0 : Math.pow(n / s, Math.log(t / e) / Math.log(i / e)) * s
		}
	};
	i.register("zmap", e)
}(timbre);
//# sourceMappingURL=timbre.js.map