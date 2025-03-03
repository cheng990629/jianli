import { r as Le, g as Tt } from "./vendor-core-DKKL4amP.js";
function tt(n, e) {
	return function () {
		return n.apply(e, arguments);
	};
}
const { toString: Ft } = Object.prototype,
	{ getPrototypeOf: Ne } = Object,
	ue = ((n) => (e) => {
		const t = Ft.call(e);
		return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	F = (n) => ((n = n.toLowerCase()), (e) => ue(e) === n),
	le = (n) => (e) => typeof e === n,
	{ isArray: H } = Array,
	q = le("undefined");
function jt(n) {
	return (
		n !== null &&
		!q(n) &&
		n.constructor !== null &&
		!q(n.constructor) &&
		C(n.constructor.isBuffer) &&
		n.constructor.isBuffer(n)
	);
}
const nt = F("ArrayBuffer");
function kt(n) {
	let e;
	return (
		typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (e = ArrayBuffer.isView(n)) : (e = n && n.buffer && nt(n.buffer)),
		e
	);
}
const $t = le("string"),
	C = le("function"),
	rt = le("number"),
	ce = (n) => n !== null && typeof n == "object",
	Dt = (n) => n === !0 || n === !1,
	te = (n) => {
		if (ue(n) !== "object") return !1;
		const e = Ne(n);
		return (
			(e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) &&
			!(Symbol.toStringTag in n) &&
			!(Symbol.iterator in n)
		);
	},
	Ut = F("Date"),
	It = F("File"),
	Bt = F("Blob"),
	Vt = F("FileList"),
	Ht = (n) => ce(n) && C(n.pipe),
	Mt = (n) => {
		let e;
		return (
			n &&
			((typeof FormData == "function" && n instanceof FormData) ||
				(C(n.append) &&
					((e = ue(n)) === "formdata" || (e === "object" && C(n.toString) && n.toString() === "[object FormData]"))))
		);
	},
	Kt = F("URLSearchParams"),
	zt = (n) => (n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function G(n, e, { allOwnKeys: t = !1 } = {}) {
	if (n === null || typeof n > "u") return;
	let r, s;
	if ((typeof n != "object" && (n = [n]), H(n))) for (r = 0, s = n.length; r < s; r++) e.call(null, n[r], r, n);
	else {
		const i = t ? Object.getOwnPropertyNames(n) : Object.keys(n),
			o = i.length;
		let a;
		for (r = 0; r < o; r++) (a = i[r]), e.call(null, n[a], a, n);
	}
}
function st(n, e) {
	e = e.toLowerCase();
	const t = Object.keys(n);
	let r = t.length,
		s;
	for (; r-- > 0; ) if (((s = t[r]), e === s.toLowerCase())) return s;
	return null;
}
const it = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
	ot = (n) => !q(n) && n !== it;
function xe() {
	const { caseless: n } = (ot(this) && this) || {},
		e = {},
		t = (r, s) => {
			const i = (n && st(e, s)) || s;
			te(e[i]) && te(r) ? (e[i] = xe(e[i], r)) : te(r) ? (e[i] = xe({}, r)) : H(r) ? (e[i] = r.slice()) : (e[i] = r);
		};
	for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && G(arguments[r], t);
	return e;
}
const _t = (n, e, t, { allOwnKeys: r } = {}) => (
		G(
			e,
			(s, i) => {
				t && C(s) ? (n[i] = tt(s, t)) : (n[i] = s);
			},
			{ allOwnKeys: r },
		),
		n
	),
	Jt = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
	qt = (n, e, t, r) => {
		(n.prototype = Object.create(e.prototype, r)),
			(n.prototype.constructor = n),
			Object.defineProperty(n, "super", { value: e.prototype }),
			t && Object.assign(n.prototype, t);
	},
	Wt = (n, e, t, r) => {
		let s, i, o;
		const a = {};
		if (((e = e || {}), n == null)) return e;
		do {
			for (s = Object.getOwnPropertyNames(n), i = s.length; i-- > 0; )
				(o = s[i]), (!r || r(o, n, e)) && !a[o] && ((e[o] = n[o]), (a[o] = !0));
			n = t !== !1 && Ne(n);
		} while (n && (!t || t(n, e)) && n !== Object.prototype);
		return e;
	},
	Gt = (n, e, t) => {
		(n = String(n)), (t === void 0 || t > n.length) && (t = n.length), (t -= e.length);
		const r = n.indexOf(e, t);
		return r !== -1 && r === t;
	},
	Xt = (n) => {
		if (!n) return null;
		if (H(n)) return n;
		let e = n.length;
		if (!rt(e)) return null;
		const t = new Array(e);
		for (; e-- > 0; ) t[e] = n[e];
		return t;
	},
	Yt = (
		(n) => (e) =>
			n && e instanceof n
	)(typeof Uint8Array < "u" && Ne(Uint8Array)),
	Qt = (n, e) => {
		const r = (n && n[Symbol.iterator]).call(n);
		let s;
		for (; (s = r.next()) && !s.done; ) {
			const i = s.value;
			e.call(n, i[0], i[1]);
		}
	},
	Zt = (n, e) => {
		let t;
		const r = [];
		for (; (t = n.exec(e)) !== null; ) r.push(t);
		return r;
	},
	en = F("HTMLFormElement"),
	tn = (n) =>
		n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, r, s) {
			return r.toUpperCase() + s;
		}),
	je = (
		({ hasOwnProperty: n }) =>
		(e, t) =>
			n.call(e, t)
	)(Object.prototype),
	nn = F("RegExp"),
	at = (n, e) => {
		const t = Object.getOwnPropertyDescriptors(n),
			r = {};
		G(t, (s, i) => {
			let o;
			(o = e(s, i, n)) !== !1 && (r[i] = o || s);
		}),
			Object.defineProperties(n, r);
	},
	rn = (n) => {
		at(n, (e, t) => {
			if (C(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1) return !1;
			const r = n[t];
			if (C(r)) {
				if (((e.enumerable = !1), "writable" in e)) {
					e.writable = !1;
					return;
				}
				e.set ||
					(e.set = () => {
						throw Error("Can not rewrite read-only method '" + t + "'");
					});
			}
		});
	},
	sn = (n, e) => {
		const t = {},
			r = (s) => {
				s.forEach((i) => {
					t[i] = !0;
				});
			};
		return H(n) ? r(n) : r(String(n).split(e)), t;
	},
	on = () => {},
	an = (n, e) => ((n = +n), Number.isFinite(n) ? n : e),
	pe = "abcdefghijklmnopqrstuvwxyz",
	ke = "0123456789",
	ut = { DIGIT: ke, ALPHA: pe, ALPHA_DIGIT: pe + pe.toUpperCase() + ke },
	un = (n = 16, e = ut.ALPHA_DIGIT) => {
		let t = "";
		const { length: r } = e;
		for (; n--; ) t += e[(Math.random() * r) | 0];
		return t;
	};
function ln(n) {
	return !!(n && C(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const cn = (n) => {
		const e = new Array(10),
			t = (r, s) => {
				if (ce(r)) {
					if (e.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						e[s] = r;
						const i = H(r) ? [] : {};
						return (
							G(r, (o, a) => {
								const l = t(o, s + 1);
								!q(l) && (i[a] = l);
							}),
							(e[s] = void 0),
							i
						);
					}
				}
				return r;
			};
		return t(n, 0);
	},
	fn = F("AsyncFunction"),
	dn = (n) => n && (ce(n) || C(n)) && C(n.then) && C(n.catch),
	d = {
		isArray: H,
		isArrayBuffer: nt,
		isBuffer: jt,
		isFormData: Mt,
		isArrayBufferView: kt,
		isString: $t,
		isNumber: rt,
		isBoolean: Dt,
		isObject: ce,
		isPlainObject: te,
		isUndefined: q,
		isDate: Ut,
		isFile: It,
		isBlob: Bt,
		isRegExp: nn,
		isFunction: C,
		isStream: Ht,
		isURLSearchParams: Kt,
		isTypedArray: Yt,
		isFileList: Vt,
		forEach: G,
		merge: xe,
		extend: _t,
		trim: zt,
		stripBOM: Jt,
		inherits: qt,
		toFlatObject: Wt,
		kindOf: ue,
		kindOfTest: F,
		endsWith: Gt,
		toArray: Xt,
		forEachEntry: Qt,
		matchAll: Zt,
		isHTMLForm: en,
		hasOwnProperty: je,
		hasOwnProp: je,
		reduceDescriptors: at,
		freezeMethods: rn,
		toObjectSet: sn,
		toCamelCase: tn,
		noop: on,
		toFiniteNumber: an,
		findKey: st,
		global: it,
		isContextDefined: ot,
		ALPHABET: ut,
		generateString: un,
		isSpecCompliantForm: ln,
		toJSONObject: cn,
		isAsyncFn: fn,
		isThenable: dn,
	};
function b(n, e, t, r, s) {
	Error.call(this),
		Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
		(this.message = n),
		(this.name = "AxiosError"),
		e && (this.code = e),
		t && (this.config = t),
		r && (this.request = r),
		s && (this.response = s);
}
d.inherits(b, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: d.toJSONObject(this.config),
			code: this.code,
			status: this.response && this.response.status ? this.response.status : null,
		};
	},
});
const lt = b.prototype,
	ct = {};
[
	"ERR_BAD_OPTION_VALUE",
	"ERR_BAD_OPTION",
	"ECONNABORTED",
	"ETIMEDOUT",
	"ERR_NETWORK",
	"ERR_FR_TOO_MANY_REDIRECTS",
	"ERR_DEPRECATED",
	"ERR_BAD_RESPONSE",
	"ERR_BAD_REQUEST",
	"ERR_CANCELED",
	"ERR_NOT_SUPPORT",
	"ERR_INVALID_URL",
].forEach((n) => {
	ct[n] = { value: n };
});
Object.defineProperties(b, ct);
Object.defineProperty(lt, "isAxiosError", { value: !0 });
b.from = (n, e, t, r, s, i) => {
	const o = Object.create(lt);
	return (
		d.toFlatObject(
			n,
			o,
			function (l) {
				return l !== Error.prototype;
			},
			(a) => a !== "isAxiosError",
		),
		b.call(o, n.message, e, t, r, s),
		(o.cause = n),
		(o.name = n.name),
		i && Object.assign(o, i),
		o
	);
};
const hn = null;
function we(n) {
	return d.isPlainObject(n) || d.isArray(n);
}
function ft(n) {
	return d.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function $e(n, e, t) {
	return n
		? n
				.concat(e)
				.map(function (s, i) {
					return (s = ft(s)), !t && i ? "[" + s + "]" : s;
				})
				.join(t ? "." : "")
		: e;
}
function pn(n) {
	return d.isArray(n) && !n.some(we);
}
const gn = d.toFlatObject(d, {}, null, function (e) {
	return /^is[A-Z]/.test(e);
});
function fe(n, e, t) {
	if (!d.isObject(n)) throw new TypeError("target must be an object");
	(e = e || new FormData()),
		(t = d.toFlatObject(t, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (g, y) {
			return !d.isUndefined(y[g]);
		}));
	const r = t.metaTokens,
		s = t.visitor || u,
		i = t.dots,
		o = t.indexes,
		l = (t.Blob || (typeof Blob < "u" && Blob)) && d.isSpecCompliantForm(e);
	if (!d.isFunction(s)) throw new TypeError("visitor must be a function");
	function c(p) {
		if (p === null) return "";
		if (d.isDate(p)) return p.toISOString();
		if (!l && d.isBlob(p)) throw new b("Blob is not supported. Use a Buffer instead.");
		return d.isArrayBuffer(p) || d.isTypedArray(p)
			? l && typeof Blob == "function"
				? new Blob([p])
				: Buffer.from(p)
			: p;
	}
	function u(p, g, y) {
		let x = p;
		if (p && !y && typeof p == "object") {
			if (d.endsWith(g, "{}")) (g = r ? g : g.slice(0, -2)), (p = JSON.stringify(p));
			else if ((d.isArray(p) && pn(p)) || ((d.isFileList(p) || d.endsWith(g, "[]")) && (x = d.toArray(p))))
				return (
					(g = ft(g)),
					x.forEach(function (j, w) {
						!(d.isUndefined(j) || j === null) && e.append(o === !0 ? $e([g], w, i) : o === null ? g : g + "[]", c(j));
					}),
					!1
				);
		}
		return we(p) ? !0 : (e.append($e(y, g, i), c(p)), !1);
	}
	const h = [],
		f = Object.assign(gn, { defaultVisitor: u, convertValue: c, isVisitable: we });
	function m(p, g) {
		if (!d.isUndefined(p)) {
			if (h.indexOf(p) !== -1) throw Error("Circular reference detected in " + g.join("."));
			h.push(p),
				d.forEach(p, function (x, S) {
					(!(d.isUndefined(x) || x === null) && s.call(e, x, d.isString(S) ? S.trim() : S, g, f)) === !0 &&
						m(x, g ? g.concat(S) : [S]);
				}),
				h.pop();
		}
	}
	if (!d.isObject(n)) throw new TypeError("data must be an object");
	return m(n), e;
}
function De(n) {
	const e = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
	return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (r) {
		return e[r];
	});
}
function Ce(n, e) {
	(this._pairs = []), n && fe(n, this, e);
}
const dt = Ce.prototype;
dt.append = function (e, t) {
	this._pairs.push([e, t]);
};
dt.toString = function (e) {
	const t = e
		? function (r) {
				return e.call(this, r, De);
			}
		: De;
	return this._pairs
		.map(function (s) {
			return t(s[0]) + "=" + t(s[1]);
		}, "")
		.join("&");
};
function mn(n) {
	return encodeURIComponent(n)
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
function ht(n, e, t) {
	if (!e) return n;
	const r = (t && t.encode) || mn,
		s = t && t.serialize;
	let i;
	if ((s ? (i = s(e, t)) : (i = d.isURLSearchParams(e) ? e.toString() : new Ce(e, t).toString(r)), i)) {
		const o = n.indexOf("#");
		o !== -1 && (n = n.slice(0, o)), (n += (n.indexOf("?") === -1 ? "?" : "&") + i);
	}
	return n;
}
class Ue {
	constructor() {
		this.handlers = [];
	}
	use(e, t, r) {
		return (
			this.handlers.push({
				fulfilled: e,
				rejected: t,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(e) {
		this.handlers[e] && (this.handlers[e] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(e) {
		d.forEach(this.handlers, function (r) {
			r !== null && e(r);
		});
	}
}
const pt = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
	yn = typeof URLSearchParams < "u" ? URLSearchParams : Ce,
	bn = typeof FormData < "u" ? FormData : null,
	Sn = typeof Blob < "u" ? Blob : null,
	xn = (() => {
		let n;
		return typeof navigator < "u" && ((n = navigator.product) === "ReactNative" || n === "NativeScript" || n === "NS")
			? !1
			: typeof window < "u" && typeof document < "u";
	})(),
	wn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
	A = {
		classes: { URLSearchParams: yn, FormData: bn, Blob: Sn },
		isStandardBrowserEnv: xn,
		isStandardBrowserWebWorkerEnv: wn,
		protocols: ["http", "https", "file", "blob", "url", "data"],
	};
function On(n, e) {
	return fe(
		n,
		new A.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (t, r, s, i) {
					return A.isNode && d.isBuffer(t)
						? (this.append(r, t.toString("base64")), !1)
						: i.defaultVisitor.apply(this, arguments);
				},
			},
			e,
		),
	);
}
function En(n) {
	return d.matchAll(/\w+|\[(\w*)]/g, n).map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function Rn(n) {
	const e = {},
		t = Object.keys(n);
	let r;
	const s = t.length;
	let i;
	for (r = 0; r < s; r++) (i = t[r]), (e[i] = n[i]);
	return e;
}
function gt(n) {
	function e(t, r, s, i) {
		let o = t[i++];
		const a = Number.isFinite(+o),
			l = i >= t.length;
		return (
			(o = !o && d.isArray(s) ? s.length : o),
			l
				? (d.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
				: ((!s[o] || !d.isObject(s[o])) && (s[o] = []), e(t, r, s[o], i) && d.isArray(s[o]) && (s[o] = Rn(s[o])), !a)
		);
	}
	if (d.isFormData(n) && d.isFunction(n.entries)) {
		const t = {};
		return (
			d.forEachEntry(n, (r, s) => {
				e(En(r), s, t, 0);
			}),
			t
		);
	}
	return null;
}
function Ln(n, e, t) {
	if (d.isString(n))
		try {
			return (e || JSON.parse)(n), d.trim(n);
		} catch (r) {
			if (r.name !== "SyntaxError") throw r;
		}
	return (t || JSON.stringify)(n);
}
const X = {
	transitional: pt,
	adapter: ["xhr", "http"],
	transformRequest: [
		function (e, t) {
			const r = t.getContentType() || "",
				s = r.indexOf("application/json") > -1,
				i = d.isObject(e);
			if ((i && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e))) return s && s ? JSON.stringify(gt(e)) : e;
			if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e)) return e;
			if (d.isArrayBufferView(e)) return e.buffer;
			if (d.isURLSearchParams(e))
				return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
			let a;
			if (i) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1) return On(e, this.formSerializer).toString();
				if ((a = d.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
					const l = this.env && this.env.FormData;
					return fe(a ? { "files[]": e } : e, l && new l(), this.formSerializer);
				}
			}
			return i || s ? (t.setContentType("application/json", !1), Ln(e)) : e;
		},
	],
	transformResponse: [
		function (e) {
			const t = this.transitional || X.transitional,
				r = t && t.forcedJSONParsing,
				s = this.responseType === "json";
			if (e && d.isString(e) && ((r && !this.responseType) || s)) {
				const o = !(t && t.silentJSONParsing) && s;
				try {
					return JSON.parse(e);
				} catch (a) {
					if (o) throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a;
				}
			}
			return e;
		},
	],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: A.classes.FormData, Blob: A.classes.Blob },
	validateStatus: function (e) {
		return e >= 200 && e < 300;
	},
	headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
	X.headers[n] = {};
});
const Nn = d.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent",
	]),
	Cn = (n) => {
		const e = {};
		let t, r, s;
		return (
			n &&
				n
					.split(`
`)
					.forEach(function (o) {
						(s = o.indexOf(":")),
							(t = o.substring(0, s).trim().toLowerCase()),
							(r = o.substring(s + 1).trim()),
							!(!t || (e[t] && Nn[t])) &&
								(t === "set-cookie" ? (e[t] ? e[t].push(r) : (e[t] = [r])) : (e[t] = e[t] ? e[t] + ", " + r : r));
					}),
			e
		);
	},
	Ie = Symbol("internals");
function _(n) {
	return n && String(n).trim().toLowerCase();
}
function ne(n) {
	return n === !1 || n == null ? n : d.isArray(n) ? n.map(ne) : String(n);
}
function vn(n) {
	const e = Object.create(null),
		t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = t.exec(n)); ) e[r[1]] = r[2];
	return e;
}
const Pn = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function ge(n, e, t, r, s) {
	if (d.isFunction(r)) return r.call(this, e, t);
	if ((s && (e = t), !!d.isString(e))) {
		if (d.isString(r)) return e.indexOf(r) !== -1;
		if (d.isRegExp(r)) return r.test(e);
	}
}
function An(n) {
	return n
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function Tn(n, e) {
	const t = d.toCamelCase(" " + e);
	["get", "set", "has"].forEach((r) => {
		Object.defineProperty(n, r + t, {
			value: function (s, i, o) {
				return this[r].call(this, e, s, i, o);
			},
			configurable: !0,
		});
	});
}
let v = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, r) {
		const s = this;
		function i(a, l, c) {
			const u = _(l);
			if (!u) throw new Error("header name must be a non-empty string");
			const h = d.findKey(s, u);
			(!h || s[h] === void 0 || c === !0 || (c === void 0 && s[h] !== !1)) && (s[h || l] = ne(a));
		}
		const o = (a, l) => d.forEach(a, (c, u) => i(c, u, l));
		return (
			d.isPlainObject(e) || e instanceof this.constructor
				? o(e, t)
				: d.isString(e) && (e = e.trim()) && !Pn(e)
					? o(Cn(e), t)
					: e != null && i(t, e, r),
			this
		);
	}
	get(e, t) {
		if (((e = _(e)), e)) {
			const r = d.findKey(this, e);
			if (r) {
				const s = this[r];
				if (!t) return s;
				if (t === !0) return vn(s);
				if (d.isFunction(t)) return t.call(this, s, r);
				if (d.isRegExp(t)) return t.exec(s);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (((e = _(e)), e)) {
			const r = d.findKey(this, e);
			return !!(r && this[r] !== void 0 && (!t || ge(this, this[r], r, t)));
		}
		return !1;
	}
	delete(e, t) {
		const r = this;
		let s = !1;
		function i(o) {
			if (((o = _(o)), o)) {
				const a = d.findKey(r, o);
				a && (!t || ge(r, r[a], a, t)) && (delete r[a], (s = !0));
			}
		}
		return d.isArray(e) ? e.forEach(i) : i(e), s;
	}
	clear(e) {
		const t = Object.keys(this);
		let r = t.length,
			s = !1;
		for (; r--; ) {
			const i = t[r];
			(!e || ge(this, this[i], i, e, !0)) && (delete this[i], (s = !0));
		}
		return s;
	}
	normalize(e) {
		const t = this,
			r = {};
		return (
			d.forEach(this, (s, i) => {
				const o = d.findKey(r, i);
				if (o) {
					(t[o] = ne(s)), delete t[i];
					return;
				}
				const a = e ? An(i) : String(i).trim();
				a !== i && delete t[i], (t[a] = ne(s)), (r[a] = !0);
			}),
			this
		);
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		const t = Object.create(null);
		return (
			d.forEach(this, (r, s) => {
				r != null && r !== !1 && (t[s] = e && d.isArray(r) ? r.join(", ") : r);
			}),
			t
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON())
			.map(([e, t]) => e + ": " + t)
			.join(`
`);
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static concat(e, ...t) {
		const r = new this(e);
		return t.forEach((s) => r.set(s)), r;
	}
	static accessor(e) {
		const r = (this[Ie] = this[Ie] = { accessors: {} }).accessors,
			s = this.prototype;
		function i(o) {
			const a = _(o);
			r[a] || (Tn(s, o), (r[a] = !0));
		}
		return d.isArray(e) ? e.forEach(i) : i(e), this;
	}
};
v.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(v.prototype, ({ value: n }, e) => {
	let t = e[0].toUpperCase() + e.slice(1);
	return {
		get: () => n,
		set(r) {
			this[t] = r;
		},
	};
});
d.freezeMethods(v);
function me(n, e) {
	const t = this || X,
		r = e || t,
		s = v.from(r.headers);
	let i = r.data;
	return (
		d.forEach(n, function (a) {
			i = a.call(t, i, s.normalize(), e ? e.status : void 0);
		}),
		s.normalize(),
		i
	);
}
function mt(n) {
	return !!(n && n.__CANCEL__);
}
function Y(n, e, t) {
	b.call(this, n ?? "canceled", b.ERR_CANCELED, e, t), (this.name = "CanceledError");
}
d.inherits(Y, b, { __CANCEL__: !0 });
function Fn(n, e, t) {
	const r = t.config.validateStatus;
	!t.status || !r || r(t.status)
		? n(t)
		: e(
				new b(
					"Request failed with status code " + t.status,
					[b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
					t.config,
					t.request,
					t,
				),
			);
}
const jn = A.isStandardBrowserEnv
	? (function () {
			return {
				write: function (t, r, s, i, o, a) {
					const l = [];
					l.push(t + "=" + encodeURIComponent(r)),
						d.isNumber(s) && l.push("expires=" + new Date(s).toGMTString()),
						d.isString(i) && l.push("path=" + i),
						d.isString(o) && l.push("domain=" + o),
						a === !0 && l.push("secure"),
						(document.cookie = l.join("; "));
				},
				read: function (t) {
					const r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
					return r ? decodeURIComponent(r[3]) : null;
				},
				remove: function (t) {
					this.write(t, "", Date.now() - 864e5);
				},
			};
		})()
	: (function () {
			return {
				write: function () {},
				read: function () {
					return null;
				},
				remove: function () {},
			};
		})();
function kn(n) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function $n(n, e) {
	return e ? n.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function yt(n, e) {
	return n && !kn(e) ? $n(n, e) : e;
}
const Dn = A.isStandardBrowserEnv
	? (function () {
			const e = /(msie|trident)/i.test(navigator.userAgent),
				t = document.createElement("a");
			let r;
			function s(i) {
				let o = i;
				return (
					e && (t.setAttribute("href", o), (o = t.href)),
					t.setAttribute("href", o),
					{
						href: t.href,
						protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
						host: t.host,
						search: t.search ? t.search.replace(/^\?/, "") : "",
						hash: t.hash ? t.hash.replace(/^#/, "") : "",
						hostname: t.hostname,
						port: t.port,
						pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname,
					}
				);
			}
			return (
				(r = s(window.location.href)),
				function (o) {
					const a = d.isString(o) ? s(o) : o;
					return a.protocol === r.protocol && a.host === r.host;
				}
			);
		})()
	: (function () {
			return function () {
				return !0;
			};
		})();
function Un(n) {
	const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
	return (e && e[1]) || "";
}
function In(n, e) {
	n = n || 10;
	const t = new Array(n),
		r = new Array(n);
	let s = 0,
		i = 0,
		o;
	return (
		(e = e !== void 0 ? e : 1e3),
		function (l) {
			const c = Date.now(),
				u = r[i];
			o || (o = c), (t[s] = l), (r[s] = c);
			let h = i,
				f = 0;
			for (; h !== s; ) (f += t[h++]), (h = h % n);
			if (((s = (s + 1) % n), s === i && (i = (i + 1) % n), c - o < e)) return;
			const m = u && c - u;
			return m ? Math.round((f * 1e3) / m) : void 0;
		}
	);
}
function Be(n, e) {
	let t = 0;
	const r = In(50, 250);
	return (s) => {
		const i = s.loaded,
			o = s.lengthComputable ? s.total : void 0,
			a = i - t,
			l = r(a),
			c = i <= o;
		t = i;
		const u = {
			loaded: i,
			total: o,
			progress: o ? i / o : void 0,
			bytes: a,
			rate: l || void 0,
			estimated: l && o && c ? (o - i) / l : void 0,
			event: s,
		};
		(u[e ? "download" : "upload"] = !0), n(u);
	};
}
const Bn = typeof XMLHttpRequest < "u",
	Vn =
		Bn &&
		function (n) {
			return new Promise(function (t, r) {
				let s = n.data;
				const i = v.from(n.headers).normalize(),
					o = n.responseType;
				let a;
				function l() {
					n.cancelToken && n.cancelToken.unsubscribe(a), n.signal && n.signal.removeEventListener("abort", a);
				}
				let c;
				d.isFormData(s) &&
					(A.isStandardBrowserEnv || A.isStandardBrowserWebWorkerEnv
						? i.setContentType(!1)
						: i.getContentType(/^\s*multipart\/form-data/)
							? d.isString((c = i.getContentType())) &&
								i.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1"))
							: i.setContentType("multipart/form-data"));
				let u = new XMLHttpRequest();
				if (n.auth) {
					const p = n.auth.username || "",
						g = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : "";
					i.set("Authorization", "Basic " + btoa(p + ":" + g));
				}
				const h = yt(n.baseURL, n.url);
				u.open(n.method.toUpperCase(), ht(h, n.params, n.paramsSerializer), !0), (u.timeout = n.timeout);
				function f() {
					if (!u) return;
					const p = v.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
						y = {
							data: !o || o === "text" || o === "json" ? u.responseText : u.response,
							status: u.status,
							statusText: u.statusText,
							headers: p,
							config: n,
							request: u,
						};
					Fn(
						function (S) {
							t(S), l();
						},
						function (S) {
							r(S), l();
						},
						y,
					),
						(u = null);
				}
				if (
					("onloadend" in u
						? (u.onloadend = f)
						: (u.onreadystatechange = function () {
								!u ||
									u.readyState !== 4 ||
									(u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
									setTimeout(f);
							}),
					(u.onabort = function () {
						u && (r(new b("Request aborted", b.ECONNABORTED, n, u)), (u = null));
					}),
					(u.onerror = function () {
						r(new b("Network Error", b.ERR_NETWORK, n, u)), (u = null);
					}),
					(u.ontimeout = function () {
						let g = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
						const y = n.transitional || pt;
						n.timeoutErrorMessage && (g = n.timeoutErrorMessage),
							r(new b(g, y.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED, n, u)),
							(u = null);
					}),
					A.isStandardBrowserEnv)
				) {
					const p = (n.withCredentials || Dn(h)) && n.xsrfCookieName && jn.read(n.xsrfCookieName);
					p && i.set(n.xsrfHeaderName, p);
				}
				s === void 0 && i.setContentType(null),
					"setRequestHeader" in u &&
						d.forEach(i.toJSON(), function (g, y) {
							u.setRequestHeader(y, g);
						}),
					d.isUndefined(n.withCredentials) || (u.withCredentials = !!n.withCredentials),
					o && o !== "json" && (u.responseType = n.responseType),
					typeof n.onDownloadProgress == "function" && u.addEventListener("progress", Be(n.onDownloadProgress, !0)),
					typeof n.onUploadProgress == "function" &&
						u.upload &&
						u.upload.addEventListener("progress", Be(n.onUploadProgress)),
					(n.cancelToken || n.signal) &&
						((a = (p) => {
							u && (r(!p || p.type ? new Y(null, n, u) : p), u.abort(), (u = null));
						}),
						n.cancelToken && n.cancelToken.subscribe(a),
						n.signal && (n.signal.aborted ? a() : n.signal.addEventListener("abort", a)));
				const m = Un(h);
				if (m && A.protocols.indexOf(m) === -1) {
					r(new b("Unsupported protocol " + m + ":", b.ERR_BAD_REQUEST, n));
					return;
				}
				u.send(s || null);
			});
		},
	Oe = { http: hn, xhr: Vn };
d.forEach(Oe, (n, e) => {
	if (n) {
		try {
			Object.defineProperty(n, "name", { value: e });
		} catch {}
		Object.defineProperty(n, "adapterName", { value: e });
	}
});
const Ve = (n) => `- ${n}`,
	Hn = (n) => d.isFunction(n) || n === null || n === !1,
	bt = {
		getAdapter: (n) => {
			n = d.isArray(n) ? n : [n];
			const { length: e } = n;
			let t, r;
			const s = {};
			for (let i = 0; i < e; i++) {
				t = n[i];
				let o;
				if (((r = t), !Hn(t) && ((r = Oe[(o = String(t)).toLowerCase()]), r === void 0)))
					throw new b(`Unknown adapter '${o}'`);
				if (r) break;
				s[o || "#" + i] = r;
			}
			if (!r) {
				const i = Object.entries(s).map(
					([a, l]) =>
						`adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"),
				);
				let o = e
					? i.length > 1
						? `since :
` +
							i.map(Ve).join(`
`)
						: " " + Ve(i[0])
					: "as no adapter specified";
				throw new b("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT");
			}
			return r;
		},
		adapters: Oe,
	};
function ye(n) {
	if ((n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)) throw new Y(null, n);
}
function He(n) {
	return (
		ye(n),
		(n.headers = v.from(n.headers)),
		(n.data = me.call(n, n.transformRequest)),
		["post", "put", "patch"].indexOf(n.method) !== -1 &&
			n.headers.setContentType("application/x-www-form-urlencoded", !1),
		bt
			.getAdapter(n.adapter || X.adapter)(n)
			.then(
				function (r) {
					return ye(n), (r.data = me.call(n, n.transformResponse, r)), (r.headers = v.from(r.headers)), r;
				},
				function (r) {
					return (
						mt(r) ||
							(ye(n),
							r &&
								r.response &&
								((r.response.data = me.call(n, n.transformResponse, r.response)),
								(r.response.headers = v.from(r.response.headers)))),
						Promise.reject(r)
					);
				},
			)
	);
}
const Me = (n) => (n instanceof v ? n.toJSON() : n);
function B(n, e) {
	e = e || {};
	const t = {};
	function r(c, u, h) {
		return d.isPlainObject(c) && d.isPlainObject(u)
			? d.merge.call({ caseless: h }, c, u)
			: d.isPlainObject(u)
				? d.merge({}, u)
				: d.isArray(u)
					? u.slice()
					: u;
	}
	function s(c, u, h) {
		if (d.isUndefined(u)) {
			if (!d.isUndefined(c)) return r(void 0, c, h);
		} else return r(c, u, h);
	}
	function i(c, u) {
		if (!d.isUndefined(u)) return r(void 0, u);
	}
	function o(c, u) {
		if (d.isUndefined(u)) {
			if (!d.isUndefined(c)) return r(void 0, c);
		} else return r(void 0, u);
	}
	function a(c, u, h) {
		if (h in e) return r(c, u);
		if (h in n) return r(void 0, c);
	}
	const l = {
		url: i,
		method: i,
		data: i,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutMessage: o,
		withCredentials: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		responseEncoding: o,
		validateStatus: a,
		headers: (c, u) => s(Me(c), Me(u), !0),
	};
	return (
		d.forEach(Object.keys(Object.assign({}, n, e)), function (u) {
			const h = l[u] || s,
				f = h(n[u], e[u], u);
			(d.isUndefined(f) && h !== a) || (t[u] = f);
		}),
		t
	);
}
const St = "1.5.1",
	ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
	ve[n] = function (r) {
		return typeof r === n || "a" + (e < 1 ? "n " : " ") + n;
	};
});
const Ke = {};
ve.transitional = function (e, t, r) {
	function s(i, o) {
		return "[Axios v" + St + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
	}
	return (i, o, a) => {
		if (e === !1) throw new b(s(o, " has been removed" + (t ? " in " + t : "")), b.ERR_DEPRECATED);
		return t && !Ke[o] && (Ke[o] = !0), e ? e(i, o, a) : !0;
	};
};
function Mn(n, e, t) {
	if (typeof n != "object") throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(n);
	let s = r.length;
	for (; s-- > 0; ) {
		const i = r[s],
			o = e[i];
		if (o) {
			const a = n[i],
				l = a === void 0 || o(a, i, n);
			if (l !== !0) throw new b("option " + i + " must be " + l, b.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (t !== !0) throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
	}
}
const Ee = { assertOptions: Mn, validators: ve },
	k = Ee.validators;
let $ = class {
	constructor(e) {
		(this.defaults = e), (this.interceptors = { request: new Ue(), response: new Ue() });
	}
	request(e, t) {
		typeof e == "string" ? ((t = t || {}), (t.url = e)) : (t = e || {}), (t = B(this.defaults, t));
		const { transitional: r, paramsSerializer: s, headers: i } = t;
		r !== void 0 &&
			Ee.assertOptions(
				r,
				{
					silentJSONParsing: k.transitional(k.boolean),
					forcedJSONParsing: k.transitional(k.boolean),
					clarifyTimeoutError: k.transitional(k.boolean),
				},
				!1,
			),
			s != null &&
				(d.isFunction(s)
					? (t.paramsSerializer = { serialize: s })
					: Ee.assertOptions(s, { encode: k.function, serialize: k.function }, !0)),
			(t.method = (t.method || this.defaults.method || "get").toLowerCase());
		let o = i && d.merge(i.common, i[t.method]);
		i &&
			d.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
				delete i[p];
			}),
			(t.headers = v.concat(o, i));
		const a = [];
		let l = !0;
		this.interceptors.request.forEach(function (g) {
			(typeof g.runWhen == "function" && g.runWhen(t) === !1) ||
				((l = l && g.synchronous), a.unshift(g.fulfilled, g.rejected));
		});
		const c = [];
		this.interceptors.response.forEach(function (g) {
			c.push(g.fulfilled, g.rejected);
		});
		let u,
			h = 0,
			f;
		if (!l) {
			const p = [He.bind(this), void 0];
			for (p.unshift.apply(p, a), p.push.apply(p, c), f = p.length, u = Promise.resolve(t); h < f; )
				u = u.then(p[h++], p[h++]);
			return u;
		}
		f = a.length;
		let m = t;
		for (h = 0; h < f; ) {
			const p = a[h++],
				g = a[h++];
			try {
				m = p(m);
			} catch (y) {
				g.call(this, y);
				break;
			}
		}
		try {
			u = He.call(this, m);
		} catch (p) {
			return Promise.reject(p);
		}
		for (h = 0, f = c.length; h < f; ) u = u.then(c[h++], c[h++]);
		return u;
	}
	getUri(e) {
		e = B(this.defaults, e);
		const t = yt(e.baseURL, e.url);
		return ht(t, e.params, e.paramsSerializer);
	}
};
d.forEach(["delete", "get", "head", "options"], function (e) {
	$.prototype[e] = function (t, r) {
		return this.request(B(r || {}, { method: e, url: t, data: (r || {}).data }));
	};
});
d.forEach(["post", "put", "patch"], function (e) {
	function t(r) {
		return function (i, o, a) {
			return this.request(
				B(a || {}, { method: e, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: o }),
			);
		};
	}
	($.prototype[e] = t()), ($.prototype[e + "Form"] = t(!0));
});
let Kn = class xt {
	constructor(e) {
		if (typeof e != "function") throw new TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function (i) {
			t = i;
		});
		const r = this;
		this.promise.then((s) => {
			if (!r._listeners) return;
			let i = r._listeners.length;
			for (; i-- > 0; ) r._listeners[i](s);
			r._listeners = null;
		}),
			(this.promise.then = (s) => {
				let i;
				const o = new Promise((a) => {
					r.subscribe(a), (i = a);
				}).then(s);
				return (
					(o.cancel = function () {
						r.unsubscribe(i);
					}),
					o
				);
			}),
			e(function (i, o, a) {
				r.reason || ((r.reason = new Y(i, o, a)), t(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		const t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	static source() {
		let e;
		return {
			token: new xt(function (s) {
				e = s;
			}),
			cancel: e,
		};
	}
};
function zn(n) {
	return function (t) {
		return n.apply(null, t);
	};
}
function _n(n) {
	return d.isObject(n) && n.isAxiosError === !0;
}
const Re = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
};
Object.entries(Re).forEach(([n, e]) => {
	Re[e] = n;
});
function wt(n) {
	const e = new $(n),
		t = tt($.prototype.request, e);
	return (
		d.extend(t, $.prototype, e, { allOwnKeys: !0 }),
		d.extend(t, e, null, { allOwnKeys: !0 }),
		(t.create = function (s) {
			return wt(B(n, s));
		}),
		t
	);
}
const O = wt(X);
O.Axios = $;
O.CanceledError = Y;
O.CancelToken = Kn;
O.isCancel = mt;
O.VERSION = St;
O.toFormData = fe;
O.AxiosError = b;
O.Cancel = O.CanceledError;
O.all = function (e) {
	return Promise.all(e);
};
O.spread = zn;
O.isAxiosError = _n;
O.mergeConfig = B;
O.AxiosHeaders = v;
O.formToJSON = (n) => gt(d.isHTMLForm(n) ? new FormData(n) : n);
O.getAdapter = bt.getAdapter;
O.HttpStatusCode = Re;
O.default = O;
const {
		Axios: Hr,
		AxiosError: Mr,
		CanceledError: Kr,
		isCancel: zr,
		CancelToken: _r,
		VERSION: Jr,
		all: qr,
		Cancel: Wr,
		isAxiosError: Gr,
		spread: Xr,
		toFormData: Yr,
		AxiosHeaders: Qr,
		HttpStatusCode: Zr,
		formToJSON: es,
		getAdapter: ts,
		mergeConfig: ns,
	} = O,
	Jn = {
		type: "logger",
		log(n) {
			this.output("log", n);
		},
		warn(n) {
			this.output("warn", n);
		},
		error(n) {
			this.output("error", n);
		},
		output(n, e) {
			console && console[n];
		},
	};
class re {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.init(e, t);
	}
	init(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		(this.prefix = t.prefix || "i18next:"), (this.logger = e || Jn), (this.options = t), (this.debug = t.debug);
	}
	log() {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return this.forward(t, "log", "", !0);
	}
	warn() {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return this.forward(t, "warn", "", !0);
	}
	error() {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return this.forward(t, "error", "");
	}
	deprecate() {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
	}
	forward(e, t, r, s) {
		return s && !this.debug
			? null
			: (typeof e[0] == "string" && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
	}
	create(e) {
		return new re(this.logger, { prefix: `${this.prefix}:${e}:`, ...this.options });
	}
	clone(e) {
		return (e = e || this.options), (e.prefix = e.prefix || this.prefix), new re(this.logger, e);
	}
}
var T = new re();
class de {
	constructor() {
		this.observers = {};
	}
	on(e, t) {
		return (
			e.split(" ").forEach((r) => {
				(this.observers[r] = this.observers[r] || []), this.observers[r].push(t);
			}),
			this
		);
	}
	off(e, t) {
		if (this.observers[e]) {
			if (!t) {
				delete this.observers[e];
				return;
			}
			this.observers[e] = this.observers[e].filter((r) => r !== t);
		}
	}
	emit(e) {
		for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
		this.observers[e] &&
			[].concat(this.observers[e]).forEach((o) => {
				o(...r);
			}),
			this.observers["*"] &&
				[].concat(this.observers["*"]).forEach((o) => {
					o.apply(o, [e, ...r]);
				});
	}
}
function J() {
	let n, e;
	const t = new Promise((r, s) => {
		(n = r), (e = s);
	});
	return (t.resolve = n), (t.reject = e), t;
}
function ze(n) {
	return n == null ? "" : "" + n;
}
function qn(n, e, t) {
	n.forEach((r) => {
		e[r] && (t[r] = e[r]);
	});
}
function Pe(n, e, t) {
	function r(o) {
		return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
	}
	function s() {
		return !n || typeof n == "string";
	}
	const i = typeof e != "string" ? [].concat(e) : e.split(".");
	for (; i.length > 1; ) {
		if (s()) return {};
		const o = r(i.shift());
		!n[o] && t && (n[o] = new t()), Object.prototype.hasOwnProperty.call(n, o) ? (n = n[o]) : (n = {});
	}
	return s() ? {} : { obj: n, k: r(i.shift()) };
}
function _e(n, e, t) {
	const { obj: r, k: s } = Pe(n, e, Object);
	r[s] = t;
}
function Wn(n, e, t, r) {
	const { obj: s, k: i } = Pe(n, e, Object);
	(s[i] = s[i] || []), s[i].push(t);
}
function se(n, e) {
	const { obj: t, k: r } = Pe(n, e);
	if (t) return t[r];
}
function Gn(n, e, t) {
	const r = se(n, t);
	return r !== void 0 ? r : se(e, t);
}
function Ot(n, e, t) {
	for (const r in e)
		r !== "__proto__" &&
			r !== "constructor" &&
			(r in n
				? typeof n[r] == "string" || n[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String
					? t && (n[r] = e[r])
					: Ot(n[r], e[r], t)
				: (n[r] = e[r]));
	return n;
}
function U(n) {
	return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Xn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
function Yn(n) {
	return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => Xn[e]) : n;
}
const Qn = [" ", ",", "?", "!", ";"];
function Zn(n, e, t) {
	(e = e || ""), (t = t || "");
	const r = Qn.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
	if (r.length === 0) return !0;
	const s = new RegExp(`(${r.map((o) => (o === "?" ? "\\?" : o)).join("|")})`);
	let i = !s.test(n);
	if (!i) {
		const o = n.indexOf(t);
		o > 0 && !s.test(n.substring(0, o)) && (i = !0);
	}
	return i;
}
function ie(n, e) {
	let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
	if (!n) return;
	if (n[e]) return n[e];
	const r = e.split(t);
	let s = n;
	for (let i = 0; i < r.length; ++i) {
		if (!s || (typeof s[r[i]] == "string" && i + 1 < r.length)) return;
		if (s[r[i]] === void 0) {
			let o = 2,
				a = r.slice(i, i + o).join(t),
				l = s[a];
			for (; l === void 0 && r.length > i + o; ) o++, (a = r.slice(i, i + o).join(t)), (l = s[a]);
			if (l === void 0) return;
			if (l === null) return null;
			if (e.endsWith(a)) {
				if (typeof l == "string") return l;
				if (a && typeof l[a] == "string") return l[a];
			}
			const c = r.slice(i + o).join(t);
			return c ? ie(l, c, t) : void 0;
		}
		s = s[r[i]];
	}
	return s;
}
function oe(n) {
	return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class Je extends de {
	constructor(e) {
		let t =
			arguments.length > 1 && arguments[1] !== void 0
				? arguments[1]
				: { ns: ["translation"], defaultNS: "translation" };
		super(),
			(this.data = e || {}),
			(this.options = t),
			this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
			this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
	}
	addNamespaces(e) {
		this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
	}
	removeNamespaces(e) {
		const t = this.options.ns.indexOf(e);
		t > -1 && this.options.ns.splice(t, 1);
	}
	getResource(e, t, r) {
		let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
			o = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
		let a = [e, t];
		r && typeof r != "string" && (a = a.concat(r)),
			r && typeof r == "string" && (a = a.concat(i ? r.split(i) : r)),
			e.indexOf(".") > -1 && (a = e.split("."));
		const l = se(this.data, a);
		return l || !o || typeof r != "string" ? l : ie(this.data && this.data[e] && this.data[e][t], r, i);
	}
	addResource(e, t, r, s) {
		let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
		const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
		let a = [e, t];
		r && (a = a.concat(o ? r.split(o) : r)),
			e.indexOf(".") > -1 && ((a = e.split(".")), (s = t), (t = a[1])),
			this.addNamespaces(t),
			_e(this.data, a, s),
			i.silent || this.emit("added", e, t, r, s);
	}
	addResources(e, t, r) {
		let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
		for (const i in r)
			(typeof r[i] == "string" || Object.prototype.toString.apply(r[i]) === "[object Array]") &&
				this.addResource(e, t, i, r[i], { silent: !0 });
		s.silent || this.emit("added", e, t, r);
	}
	addResourceBundle(e, t, r, s, i) {
		let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 },
			a = [e, t];
		e.indexOf(".") > -1 && ((a = e.split(".")), (s = r), (r = t), (t = a[1])), this.addNamespaces(t);
		let l = se(this.data, a) || {};
		s ? Ot(l, r, i) : (l = { ...l, ...r }), _e(this.data, a, l), o.silent || this.emit("added", e, t, r);
	}
	removeResourceBundle(e, t) {
		this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
	}
	hasResourceBundle(e, t) {
		return this.getResource(e, t) !== void 0;
	}
	getResourceBundle(e, t) {
		return (
			t || (t = this.options.defaultNS),
			this.options.compatibilityAPI === "v1" ? { ...this.getResource(e, t) } : this.getResource(e, t)
		);
	}
	getDataByLanguage(e) {
		return this.data[e];
	}
	hasLanguageSomeTranslations(e) {
		const t = this.getDataByLanguage(e);
		return !!((t && Object.keys(t)) || []).find((s) => t[s] && Object.keys(t[s]).length > 0);
	}
	toJSON() {
		return this.data;
	}
}
var Et = {
	processors: {},
	addPostProcessor(n) {
		this.processors[n.name] = n;
	},
	handle(n, e, t, r, s) {
		return (
			n.forEach((i) => {
				this.processors[i] && (e = this.processors[i].process(e, t, r, s));
			}),
			e
		);
	},
};
const qe = {};
class ae extends de {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		super(),
			qn(
				["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"],
				e,
				this,
			),
			(this.options = t),
			this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
			(this.logger = T.create("translator"));
	}
	changeLanguage(e) {
		e && (this.language = e);
	}
	exists(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
		if (e == null) return !1;
		const r = this.resolve(e, t);
		return r && r.res !== void 0;
	}
	extractFromKey(e, t) {
		let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
		r === void 0 && (r = ":");
		const s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
		let i = t.ns || this.options.defaultNS || [];
		const o = r && e.indexOf(r) > -1,
			a =
				!this.options.userDefinedKeySeparator &&
				!t.keySeparator &&
				!this.options.userDefinedNsSeparator &&
				!t.nsSeparator &&
				!Zn(e, r, s);
		if (o && !a) {
			const l = e.match(this.interpolator.nestingRegexp);
			if (l && l.length > 0) return { key: e, namespaces: i };
			const c = e.split(r);
			(r !== s || (r === s && this.options.ns.indexOf(c[0]) > -1)) && (i = c.shift()), (e = c.join(s));
		}
		return typeof i == "string" && (i = [i]), { key: e, namespaces: i };
	}
	translate(e, t, r) {
		if (
			(typeof t != "object" &&
				this.options.overloadTranslationOptionHandler &&
				(t = this.options.overloadTranslationOptionHandler(arguments)),
			typeof t == "object" && (t = { ...t }),
			t || (t = {}),
			e == null)
		)
			return "";
		Array.isArray(e) || (e = [String(e)]);
		const s = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails,
			i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
			{ key: o, namespaces: a } = this.extractFromKey(e[e.length - 1], t),
			l = a[a.length - 1],
			c = t.lng || this.language,
			u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (c && c.toLowerCase() === "cimode") {
			if (u) {
				const w = t.nsSeparator || this.options.nsSeparator;
				return s ? { res: `${l}${w}${o}`, usedKey: o, exactUsedKey: o, usedLng: c, usedNS: l } : `${l}${w}${o}`;
			}
			return s ? { res: o, usedKey: o, exactUsedKey: o, usedLng: c, usedNS: l } : o;
		}
		const h = this.resolve(e, t);
		let f = h && h.res;
		const m = (h && h.usedKey) || o,
			p = (h && h.exactUsedKey) || o,
			g = Object.prototype.toString.apply(f),
			y = ["[object Number]", "[object Function]", "[object RegExp]"],
			x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
			S = !this.i18nFormat || this.i18nFormat.handleAsObject;
		if (
			S &&
			f &&
			typeof f != "string" &&
			typeof f != "boolean" &&
			typeof f != "number" &&
			y.indexOf(g) < 0 &&
			!(typeof x == "string" && g === "[object Array]")
		) {
			if (!t.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler ||
					this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				const w = this.options.returnedObjectHandler
					? this.options.returnedObjectHandler(m, f, { ...t, ns: a })
					: `key '${o} (${this.language})' returned an object instead of string.`;
				return s ? ((h.res = w), h) : w;
			}
			if (i) {
				const w = g === "[object Array]",
					L = w ? [] : {},
					P = w ? p : m;
				for (const E in f)
					if (Object.prototype.hasOwnProperty.call(f, E)) {
						const Q = `${P}${i}${E}`;
						(L[E] = this.translate(Q, { ...t, joinArrays: !1, ns: a })), L[E] === Q && (L[E] = f[E]);
					}
				f = L;
			}
		} else if (S && typeof x == "string" && g === "[object Array]")
			(f = f.join(x)), f && (f = this.extendTranslation(f, e, t, r));
		else {
			let w = !1,
				L = !1;
			const P = t.count !== void 0 && typeof t.count != "string",
				E = ae.hasDefaultValue(t),
				Q = P ? this.pluralResolver.getSuffix(c, t.count, t) : "",
				Pt = t.ordinal && P ? this.pluralResolver.getSuffix(c, t.count, { ordinal: !1 }) : "",
				M = t[`defaultValue${Q}`] || t[`defaultValue${Pt}`] || t.defaultValue;
			!this.isValidLookup(f) && E && ((w = !0), (f = M)), this.isValidLookup(f) || ((L = !0), (f = o));
			const At = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : f,
				K = E && M !== f && this.options.updateMissing;
			if (L || w || K) {
				if ((this.logger.log(K ? "updateKey" : "missingKey", c, l, o, K ? M : f), i)) {
					const N = this.resolve(o, { ...t, keySeparator: !1 });
					N &&
						N.res &&
						this.logger.warn(
							"Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
						);
				}
				let z = [];
				const Z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && Z && Z[0]) for (let N = 0; N < Z.length; N++) z.push(Z[N]);
				else
					this.options.saveMissingTo === "all"
						? (z = this.languageUtils.toResolveHierarchy(t.lng || this.language))
						: z.push(t.lng || this.language);
				const Ae = (N, D, Te) => {
					const Fe = E && Te !== f ? Te : At;
					this.options.missingKeyHandler
						? this.options.missingKeyHandler(N, l, D, Fe, K, t)
						: this.backendConnector &&
							this.backendConnector.saveMissing &&
							this.backendConnector.saveMissing(N, l, D, Fe, K, t),
						this.emit("missingKey", N, l, D, f);
				};
				this.options.saveMissing &&
					(this.options.saveMissingPlurals && P
						? z.forEach((N) => {
								this.pluralResolver.getSuffixes(N, t).forEach((D) => {
									Ae([N], o + D, t[`defaultValue${D}`] || M);
								});
							})
						: Ae(z, o, M));
			}
			(f = this.extendTranslation(f, e, t, h, r)),
				L && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`),
				(L || w) &&
					this.options.parseMissingKeyHandler &&
					(this.options.compatibilityAPI !== "v1"
						? (f = this.options.parseMissingKeyHandler(
								this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o,
								w ? f : void 0,
							))
						: (f = this.options.parseMissingKeyHandler(f)));
		}
		return s ? ((h.res = f), h) : f;
	}
	extendTranslation(e, t, r, s, i) {
		var o = this;
		if (this.i18nFormat && this.i18nFormat.parse)
			e = this.i18nFormat.parse(
				e,
				{ ...this.options.interpolation.defaultVariables, ...r },
				r.lng || this.language || s.usedLng,
				s.usedNS,
				s.usedKey,
				{ resolved: s },
			);
		else if (!r.skipInterpolation) {
			r.interpolation &&
				this.interpolator.init({ ...r, interpolation: { ...this.options.interpolation, ...r.interpolation } });
			const c =
				typeof e == "string" &&
				(r && r.interpolation && r.interpolation.skipOnVariables !== void 0
					? r.interpolation.skipOnVariables
					: this.options.interpolation.skipOnVariables);
			let u;
			if (c) {
				const f = e.match(this.interpolator.nestingRegexp);
				u = f && f.length;
			}
			let h = r.replace && typeof r.replace != "string" ? r.replace : r;
			if (
				(this.options.interpolation.defaultVariables && (h = { ...this.options.interpolation.defaultVariables, ...h }),
				(e = this.interpolator.interpolate(e, h, r.lng || this.language, r)),
				c)
			) {
				const f = e.match(this.interpolator.nestingRegexp),
					m = f && f.length;
				u < m && (r.nest = !1);
			}
			!r.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (r.lng = s.usedLng),
				r.nest !== !1 &&
					(e = this.interpolator.nest(
						e,
						function () {
							for (var f = arguments.length, m = new Array(f), p = 0; p < f; p++) m[p] = arguments[p];
							return i && i[0] === m[0] && !r.context
								? (o.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`), null)
								: o.translate(...m, t);
						},
						r,
					)),
				r.interpolation && this.interpolator.reset();
		}
		const a = r.postProcess || this.options.postProcess,
			l = typeof a == "string" ? [a] : a;
		return (
			e != null &&
				l &&
				l.length &&
				r.applyPostProcessor !== !1 &&
				(e = Et.handle(
					l,
					e,
					t,
					this.options && this.options.postProcessPassResolved ? { i18nResolved: s, ...r } : r,
					this,
				)),
			e
		);
	}
	resolve(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r,
			s,
			i,
			o,
			a;
		return (
			typeof e == "string" && (e = [e]),
			e.forEach((l) => {
				if (this.isValidLookup(r)) return;
				const c = this.extractFromKey(l, t),
					u = c.key;
				s = u;
				let h = c.namespaces;
				this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
				const f = t.count !== void 0 && typeof t.count != "string",
					m = f && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(),
					p =
						t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "",
					g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
				h.forEach((y) => {
					this.isValidLookup(r) ||
						((a = y),
						!qe[`${g[0]}-${y}`] &&
							this.utils &&
							this.utils.hasLoadedNamespace &&
							!this.utils.hasLoadedNamespace(a) &&
							((qe[`${g[0]}-${y}`] = !0),
							this.logger.warn(
								`key "${s}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,
								"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
							)),
						g.forEach((x) => {
							if (this.isValidLookup(r)) return;
							o = x;
							const S = [u];
							if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(S, u, x, y, t);
							else {
								let w;
								f && (w = this.pluralResolver.getSuffix(x, t.count, t));
								const L = `${this.options.pluralSeparator}zero`,
									P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
								if (
									(f &&
										(S.push(u + w),
										t.ordinal && w.indexOf(P) === 0 && S.push(u + w.replace(P, this.options.pluralSeparator)),
										m && S.push(u + L)),
									p)
								) {
									const E = `${u}${this.options.contextSeparator}${t.context}`;
									S.push(E),
										f &&
											(S.push(E + w),
											t.ordinal && w.indexOf(P) === 0 && S.push(E + w.replace(P, this.options.pluralSeparator)),
											m && S.push(E + L));
								}
							}
							let j;
							for (; (j = S.pop()); ) this.isValidLookup(r) || ((i = j), (r = this.getResource(x, y, j, t)));
						}));
				});
			}),
			{ res: r, usedKey: s, exactUsedKey: i, usedLng: o, usedNS: a }
		);
	}
	isValidLookup(e) {
		return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
	}
	getResource(e, t, r) {
		let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		return this.i18nFormat && this.i18nFormat.getResource
			? this.i18nFormat.getResource(e, t, r, s)
			: this.resourceStore.getResource(e, t, r, s);
	}
	static hasDefaultValue(e) {
		const t = "defaultValue";
		for (const r in e)
			if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0) return !0;
		return !1;
	}
}
function be(n) {
	return n.charAt(0).toUpperCase() + n.slice(1);
}
class We {
	constructor(e) {
		(this.options = e),
			(this.supportedLngs = this.options.supportedLngs || !1),
			(this.logger = T.create("languageUtils"));
	}
	getScriptPartFromCode(e) {
		if (((e = oe(e)), !e || e.indexOf("-") < 0)) return null;
		const t = e.split("-");
		return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x")
			? null
			: this.formatLanguageCode(t.join("-"));
	}
	getLanguagePartFromCode(e) {
		if (((e = oe(e)), !e || e.indexOf("-") < 0)) return e;
		const t = e.split("-");
		return this.formatLanguageCode(t[0]);
	}
	formatLanguageCode(e) {
		if (typeof e == "string" && e.indexOf("-") > -1) {
			const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
			let r = e.split("-");
			return (
				this.options.lowerCaseLng
					? (r = r.map((s) => s.toLowerCase()))
					: r.length === 2
						? ((r[0] = r[0].toLowerCase()),
							(r[1] = r[1].toUpperCase()),
							t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = be(r[1].toLowerCase())))
						: r.length === 3 &&
							((r[0] = r[0].toLowerCase()),
							r[1].length === 2 && (r[1] = r[1].toUpperCase()),
							r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
							t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = be(r[1].toLowerCase())),
							t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = be(r[2].toLowerCase()))),
				r.join("-")
			);
		}
		return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
	}
	isSupportedCode(e) {
		return (
			(this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) &&
				(e = this.getLanguagePartFromCode(e)),
			!this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
		);
	}
	getBestMatchFromCodes(e) {
		if (!e) return null;
		let t;
		return (
			e.forEach((r) => {
				if (t) return;
				const s = this.formatLanguageCode(r);
				(!this.options.supportedLngs || this.isSupportedCode(s)) && (t = s);
			}),
			!t &&
				this.options.supportedLngs &&
				e.forEach((r) => {
					if (t) return;
					const s = this.getLanguagePartFromCode(r);
					if (this.isSupportedCode(s)) return (t = s);
					t = this.options.supportedLngs.find((i) => {
						if (i === s) return i;
						if (!(i.indexOf("-") < 0 && s.indexOf("-") < 0) && i.indexOf(s) === 0) return i;
					});
				}),
			t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
			t
		);
	}
	getFallbackCodes(e, t) {
		if (!e) return [];
		if (
			(typeof e == "function" && (e = e(t)),
			typeof e == "string" && (e = [e]),
			Object.prototype.toString.apply(e) === "[object Array]")
		)
			return e;
		if (!t) return e.default || [];
		let r = e[t];
		return (
			r || (r = e[this.getScriptPartFromCode(t)]),
			r || (r = e[this.formatLanguageCode(t)]),
			r || (r = e[this.getLanguagePartFromCode(t)]),
			r || (r = e.default),
			r || []
		);
	}
	toResolveHierarchy(e, t) {
		const r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
			s = [],
			i = (o) => {
				o &&
					(this.isSupportedCode(o)
						? s.push(o)
						: this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
			};
		return (
			typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
				? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)),
					this.options.load !== "languageOnly" &&
						this.options.load !== "currentOnly" &&
						i(this.getScriptPartFromCode(e)),
					this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e)))
				: typeof e == "string" && i(this.formatLanguageCode(e)),
			r.forEach((o) => {
				s.indexOf(o) < 0 && i(this.formatLanguageCode(o));
			}),
			s
		);
	}
}
let er = [
		{
			lngs: [
				"ach",
				"ak",
				"am",
				"arn",
				"br",
				"fil",
				"gun",
				"ln",
				"mfe",
				"mg",
				"mi",
				"oc",
				"pt",
				"pt-BR",
				"tg",
				"tl",
				"ti",
				"tr",
				"uz",
				"wa",
			],
			nr: [1, 2],
			fc: 1,
		},
		{
			lngs: [
				"af",
				"an",
				"ast",
				"az",
				"bg",
				"bn",
				"ca",
				"da",
				"de",
				"dev",
				"el",
				"en",
				"eo",
				"es",
				"et",
				"eu",
				"fi",
				"fo",
				"fur",
				"fy",
				"gl",
				"gu",
				"ha",
				"hi",
				"hu",
				"hy",
				"ia",
				"it",
				"kk",
				"kn",
				"ku",
				"lb",
				"mai",
				"ml",
				"mn",
				"mr",
				"nah",
				"nap",
				"nb",
				"ne",
				"nl",
				"nn",
				"no",
				"nso",
				"pa",
				"pap",
				"pms",
				"ps",
				"pt-PT",
				"rm",
				"sco",
				"se",
				"si",
				"so",
				"son",
				"sq",
				"sv",
				"sw",
				"ta",
				"te",
				"tk",
				"ur",
				"yo",
			],
			nr: [1, 2],
			fc: 2,
		},
		{
			lngs: [
				"ay",
				"bo",
				"cgg",
				"fa",
				"ht",
				"id",
				"ja",
				"jbo",
				"ka",
				"km",
				"ko",
				"ky",
				"lo",
				"ms",
				"sah",
				"su",
				"th",
				"tt",
				"ug",
				"vi",
				"wo",
				"zh",
			],
			nr: [1],
			fc: 3,
		},
		{ lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 },
		{ lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
		{ lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
		{ lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
		{ lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
		{ lngs: ["fr"], nr: [1, 2], fc: 9 },
		{ lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
		{ lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
		{ lngs: ["is"], nr: [1, 2], fc: 12 },
		{ lngs: ["jv"], nr: [0, 1], fc: 13 },
		{ lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
		{ lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
		{ lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
		{ lngs: ["mk"], nr: [1, 2], fc: 17 },
		{ lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
		{ lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
		{ lngs: ["or"], nr: [2, 1], fc: 2 },
		{ lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
		{ lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
		{ lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
	],
	tr = {
		1: function (n) {
			return +(n > 1);
		},
		2: function (n) {
			return +(n != 1);
		},
		3: function (n) {
			return 0;
		},
		4: function (n) {
			return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
		},
		5: function (n) {
			return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
		},
		6: function (n) {
			return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
		},
		7: function (n) {
			return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
		},
		8: function (n) {
			return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3;
		},
		9: function (n) {
			return +(n >= 2);
		},
		10: function (n) {
			return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4;
		},
		11: function (n) {
			return n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3;
		},
		12: function (n) {
			return +(n % 10 != 1 || n % 100 == 11);
		},
		13: function (n) {
			return +(n !== 0);
		},
		14: function (n) {
			return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3;
		},
		15: function (n) {
			return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
		},
		16: function (n) {
			return n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2;
		},
		17: function (n) {
			return n == 1 || (n % 10 == 1 && n % 100 != 11) ? 0 : 1;
		},
		18: function (n) {
			return n == 0 ? 0 : n == 1 ? 1 : 2;
		},
		19: function (n) {
			return n == 1 ? 0 : n == 0 || (n % 100 > 1 && n % 100 < 11) ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3;
		},
		20: function (n) {
			return n == 1 ? 0 : n == 0 || (n % 100 > 0 && n % 100 < 20) ? 1 : 2;
		},
		21: function (n) {
			return n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0;
		},
		22: function (n) {
			return n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3;
		},
	};
const nr = ["v1", "v2", "v3"],
	rr = ["v4"],
	Ge = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function sr() {
	const n = {};
	return (
		er.forEach((e) => {
			e.lngs.forEach((t) => {
				n[t] = { numbers: e.nr, plurals: tr[e.fc] };
			});
		}),
		n
	);
}
class ir {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		(this.languageUtils = e),
			(this.options = t),
			(this.logger = T.create("pluralResolver")),
			(!this.options.compatibilityJSON || rr.includes(this.options.compatibilityJSON)) &&
				(typeof Intl > "u" || !Intl.PluralRules) &&
				((this.options.compatibilityJSON = "v3"),
				this.logger.error(
					"Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
				)),
			(this.rules = sr());
	}
	addRule(e, t) {
		this.rules[e] = t;
	}
	getRule(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (this.shouldUseIntlApi())
			try {
				return new Intl.PluralRules(oe(e), { type: t.ordinal ? "ordinal" : "cardinal" });
			} catch {
				return;
			}
		return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
	}
	needsPlural(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const r = this.getRule(e, t);
		return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
	}
	getPluralFormsOfKey(e, t) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return this.getSuffixes(e, r).map((s) => `${t}${s}`);
	}
	getSuffixes(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const r = this.getRule(e, t);
		return r
			? this.shouldUseIntlApi()
				? r
						.resolvedOptions()
						.pluralCategories.sort((s, i) => Ge[s] - Ge[i])
						.map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`)
				: r.numbers.map((s) => this.getSuffix(e, s, t))
			: [];
	}
	getSuffix(e, t) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		const s = this.getRule(e, r);
		return s
			? this.shouldUseIntlApi()
				? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}`
				: this.getSuffixRetroCompatible(s, t)
			: (this.logger.warn(`no plural rule found for: ${e}`), "");
	}
	getSuffixRetroCompatible(e, t) {
		const r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
		let s = e.numbers[r];
		this.options.simplifyPluralSuffix &&
			e.numbers.length === 2 &&
			e.numbers[0] === 1 &&
			(s === 2 ? (s = "plural") : s === 1 && (s = ""));
		const i = () => (this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString());
		return this.options.compatibilityJSON === "v1"
			? s === 1
				? ""
				: typeof s == "number"
					? `_plural_${s.toString()}`
					: i()
			: this.options.compatibilityJSON === "v2" ||
					(this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1)
				? i()
				: this.options.prepend && r.toString()
					? this.options.prepend + r.toString()
					: r.toString();
	}
	shouldUseIntlApi() {
		return !nr.includes(this.options.compatibilityJSON);
	}
}
function Xe(n, e, t) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
		s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
		i = Gn(n, e, t);
	return !i && s && typeof t == "string" && ((i = ie(n, t, r)), i === void 0 && (i = ie(e, t, r))), i;
}
class or {
	constructor() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		(this.logger = T.create("interpolator")),
			(this.options = e),
			(this.format = (e.interpolation && e.interpolation.format) || ((t) => t)),
			this.init(e);
	}
	init() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		e.interpolation || (e.interpolation = { escapeValue: !0 });
		const t = e.interpolation;
		(this.escape = t.escape !== void 0 ? t.escape : Yn),
			(this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0),
			(this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1),
			(this.prefix = t.prefix ? U(t.prefix) : t.prefixEscaped || "{{"),
			(this.suffix = t.suffix ? U(t.suffix) : t.suffixEscaped || "}}"),
			(this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","),
			(this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-"),
			(this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || ""),
			(this.nestingPrefix = t.nestingPrefix ? U(t.nestingPrefix) : t.nestingPrefixEscaped || U("$t(")),
			(this.nestingSuffix = t.nestingSuffix ? U(t.nestingSuffix) : t.nestingSuffixEscaped || U(")")),
			(this.nestingOptionsSeparator = t.nestingOptionsSeparator
				? t.nestingOptionsSeparator
				: t.nestingOptionsSeparator || ","),
			(this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
			(this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1),
			this.resetRegExp();
	}
	reset() {
		this.options && this.init(this.options);
	}
	resetRegExp() {
		const e = `${this.prefix}(.+?)${this.suffix}`;
		this.regexp = new RegExp(e, "g");
		const t = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
		this.regexpUnescape = new RegExp(t, "g");
		const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
		this.nestingRegexp = new RegExp(r, "g");
	}
	interpolate(e, t, r, s) {
		let i, o, a;
		const l = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
		function c(p) {
			return p.replace(/\$/g, "$$$$");
		}
		const u = (p) => {
			if (p.indexOf(this.formatSeparator) < 0) {
				const S = Xe(t, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(S, void 0, r, { ...s, ...t, interpolationkey: p }) : S;
			}
			const g = p.split(this.formatSeparator),
				y = g.shift().trim(),
				x = g.join(this.formatSeparator).trim();
			return this.format(Xe(t, l, y, this.options.keySeparator, this.options.ignoreJSONStructure), x, r, {
				...s,
				...t,
				interpolationkey: y,
			});
		};
		this.resetRegExp();
		const h = (s && s.missingInterpolationHandler) || this.options.missingInterpolationHandler,
			f =
				s && s.interpolation && s.interpolation.skipOnVariables !== void 0
					? s.interpolation.skipOnVariables
					: this.options.interpolation.skipOnVariables;
		return (
			[
				{ regex: this.regexpUnescape, safeValue: (p) => c(p) },
				{ regex: this.regexp, safeValue: (p) => (this.escapeValue ? c(this.escape(p)) : c(p)) },
			].forEach((p) => {
				for (a = 0; (i = p.regex.exec(e)); ) {
					const g = i[1].trim();
					if (((o = u(g)), o === void 0))
						if (typeof h == "function") {
							const x = h(e, i, s);
							o = typeof x == "string" ? x : "";
						} else if (s && Object.prototype.hasOwnProperty.call(s, g)) o = "";
						else if (f) {
							o = i[0];
							continue;
						} else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), (o = "");
					else typeof o != "string" && !this.useRawValueToEscape && (o = ze(o));
					const y = p.safeValue(o);
					if (
						((e = e.replace(i[0], y)),
						f ? ((p.regex.lastIndex += o.length), (p.regex.lastIndex -= i[0].length)) : (p.regex.lastIndex = 0),
						a++,
						a >= this.maxReplaces)
					)
						break;
				}
			}),
			e
		);
	}
	nest(e, t) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
			s,
			i,
			o;
		function a(l, c) {
			const u = this.nestingOptionsSeparator;
			if (l.indexOf(u) < 0) return l;
			const h = l.split(new RegExp(`${u}[ ]*{`));
			let f = `{${h[1]}`;
			(l = h[0]), (f = this.interpolate(f, o));
			const m = f.match(/'/g),
				p = f.match(/"/g);
			((m && m.length % 2 === 0 && !p) || p.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
			try {
				(o = JSON.parse(f)), c && (o = { ...c, ...o });
			} catch (g) {
				return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${u}${f}`;
			}
			return delete o.defaultValue, l;
		}
		for (; (s = this.nestingRegexp.exec(e)); ) {
			let l = [];
			(o = { ...r }),
				(o = o.replace && typeof o.replace != "string" ? o.replace : o),
				(o.applyPostProcessor = !1),
				delete o.defaultValue;
			let c = !1;
			if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
				const u = s[1].split(this.formatSeparator).map((h) => h.trim());
				(s[1] = u.shift()), (l = u), (c = !0);
			}
			if (((i = t(a.call(this, s[1].trim(), o), o)), i && s[0] === e && typeof i != "string")) return i;
			typeof i != "string" && (i = ze(i)),
				i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), (i = "")),
				c && (i = l.reduce((u, h) => this.format(u, h, r.lng, { ...r, interpolationkey: s[1].trim() }), i.trim())),
				(e = e.replace(s[0], i)),
				(this.regexp.lastIndex = 0);
		}
		return e;
	}
}
function ar(n) {
	let e = n.toLowerCase().trim();
	const t = {};
	if (n.indexOf("(") > -1) {
		const r = n.split("(");
		e = r[0].toLowerCase().trim();
		const s = r[1].substring(0, r[1].length - 1);
		e === "currency" && s.indexOf(":") < 0
			? t.currency || (t.currency = s.trim())
			: e === "relativetime" && s.indexOf(":") < 0
				? t.range || (t.range = s.trim())
				: s.split(";").forEach((o) => {
						if (!o) return;
						const [a, ...l] = o.split(":"),
							c = l
								.join(":")
								.trim()
								.replace(/^'+|'+$/g, "");
						t[a.trim()] || (t[a.trim()] = c),
							c === "false" && (t[a.trim()] = !1),
							c === "true" && (t[a.trim()] = !0),
							isNaN(c) || (t[a.trim()] = parseInt(c, 10));
					});
	}
	return { formatName: e, formatOptions: t };
}
function I(n) {
	const e = {};
	return function (r, s, i) {
		const o = s + JSON.stringify(i);
		let a = e[o];
		return a || ((a = n(oe(s), i)), (e[o] = a)), a(r);
	};
}
class ur {
	constructor() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		(this.logger = T.create("formatter")),
			(this.options = e),
			(this.formats = {
				number: I((t, r) => {
					const s = new Intl.NumberFormat(t, { ...r });
					return (i) => s.format(i);
				}),
				currency: I((t, r) => {
					const s = new Intl.NumberFormat(t, { ...r, style: "currency" });
					return (i) => s.format(i);
				}),
				datetime: I((t, r) => {
					const s = new Intl.DateTimeFormat(t, { ...r });
					return (i) => s.format(i);
				}),
				relativetime: I((t, r) => {
					const s = new Intl.RelativeTimeFormat(t, { ...r });
					return (i) => s.format(i, r.range || "day");
				}),
				list: I((t, r) => {
					const s = new Intl.ListFormat(t, { ...r });
					return (i) => s.format(i);
				}),
			}),
			this.init(e);
	}
	init(e) {
		const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
		this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
	}
	add(e, t) {
		this.formats[e.toLowerCase().trim()] = t;
	}
	addCached(e, t) {
		this.formats[e.toLowerCase().trim()] = I(t);
	}
	format(e, t, r) {
		let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		return t.split(this.formatSeparator).reduce((a, l) => {
			const { formatName: c, formatOptions: u } = ar(l);
			if (this.formats[c]) {
				let h = a;
				try {
					const f = (s && s.formatParams && s.formatParams[s.interpolationkey]) || {},
						m = f.locale || f.lng || s.locale || s.lng || r;
					h = this.formats[c](a, m, { ...u, ...s, ...f });
				} catch (f) {
					this.logger.warn(f);
				}
				return h;
			} else this.logger.warn(`there was no format function for ${c}`);
			return a;
		}, e);
	}
}
function lr(n, e) {
	n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class cr extends de {
	constructor(e, t, r) {
		let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		super(),
			(this.backend = e),
			(this.store = t),
			(this.services = r),
			(this.languageUtils = r.languageUtils),
			(this.options = s),
			(this.logger = T.create("backendConnector")),
			(this.waitingReads = []),
			(this.maxParallelReads = s.maxParallelReads || 10),
			(this.readingCalls = 0),
			(this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
			(this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
			(this.state = {}),
			(this.queue = []),
			this.backend && this.backend.init && this.backend.init(r, s.backend, s);
	}
	queueLoad(e, t, r, s) {
		const i = {},
			o = {},
			a = {},
			l = {};
		return (
			e.forEach((c) => {
				let u = !0;
				t.forEach((h) => {
					const f = `${c}|${h}`;
					!r.reload && this.store.hasResourceBundle(c, h)
						? (this.state[f] = 2)
						: this.state[f] < 0 ||
							(this.state[f] === 1
								? o[f] === void 0 && (o[f] = !0)
								: ((this.state[f] = 1),
									(u = !1),
									o[f] === void 0 && (o[f] = !0),
									i[f] === void 0 && (i[f] = !0),
									l[h] === void 0 && (l[h] = !0)));
				}),
					u || (a[c] = !0);
			}),
			(Object.keys(i).length || Object.keys(o).length) &&
				this.queue.push({ pending: o, pendingCount: Object.keys(o).length, loaded: {}, errors: [], callback: s }),
			{
				toLoad: Object.keys(i),
				pending: Object.keys(o),
				toLoadLanguages: Object.keys(a),
				toLoadNamespaces: Object.keys(l),
			}
		);
	}
	loaded(e, t, r) {
		const s = e.split("|"),
			i = s[0],
			o = s[1];
		t && this.emit("failedLoading", i, o, t), r && this.store.addResourceBundle(i, o, r), (this.state[e] = t ? -1 : 2);
		const a = {};
		this.queue.forEach((l) => {
			Wn(l.loaded, [i], o),
				lr(l, e),
				t && l.errors.push(t),
				l.pendingCount === 0 &&
					!l.done &&
					(Object.keys(l.loaded).forEach((c) => {
						a[c] || (a[c] = {});
						const u = l.loaded[c];
						u.length &&
							u.forEach((h) => {
								a[c][h] === void 0 && (a[c][h] = !0);
							});
					}),
					(l.done = !0),
					l.errors.length ? l.callback(l.errors) : l.callback());
		}),
			this.emit("loaded", a),
			(this.queue = this.queue.filter((l) => !l.done));
	}
	read(e, t, r) {
		let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
			i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
			o = arguments.length > 5 ? arguments[5] : void 0;
		if (!e.length) return o(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({ lng: e, ns: t, fcName: r, tried: s, wait: i, callback: o });
			return;
		}
		this.readingCalls++;
		const a = (c, u) => {
				if ((this.readingCalls--, this.waitingReads.length > 0)) {
					const h = this.waitingReads.shift();
					this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
				}
				if (c && u && s < this.maxRetries) {
					setTimeout(() => {
						this.read.call(this, e, t, r, s + 1, i * 2, o);
					}, i);
					return;
				}
				o(c, u);
			},
			l = this.backend[r].bind(this.backend);
		if (l.length === 2) {
			try {
				const c = l(e, t);
				c && typeof c.then == "function" ? c.then((u) => a(null, u)).catch(a) : a(null, c);
			} catch (c) {
				a(c);
			}
			return;
		}
		return l(e, t, a);
	}
	prepareLoading(e, t) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
			s = arguments.length > 3 ? arguments[3] : void 0;
		if (!this.backend)
			return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
		typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
		const i = this.queueLoad(e, t, r, s);
		if (!i.toLoad.length) return i.pending.length || s(), null;
		i.toLoad.forEach((o) => {
			this.loadOne(o);
		});
	}
	load(e, t, r) {
		this.prepareLoading(e, t, {}, r);
	}
	reload(e, t, r) {
		this.prepareLoading(e, t, { reload: !0 }, r);
	}
	loadOne(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		const r = e.split("|"),
			s = r[0],
			i = r[1];
		this.read(s, i, "read", void 0, void 0, (o, a) => {
			o && this.logger.warn(`${t}loading namespace ${i} for language ${s} failed`, o),
				!o && a && this.logger.log(`${t}loaded namespace ${i} for language ${s}`, a),
				this.loaded(e, o, a);
		});
	}
	saveMissing(e, t, r, s, i) {
		let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
			a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
		if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
			this.logger.warn(
				`did not save key "${r}" as the namespace "${t}" was not yet loaded`,
				"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
			);
			return;
		}
		if (!(r == null || r === "")) {
			if (this.backend && this.backend.create) {
				const l = { ...o, isUpdate: i },
					c = this.backend.create.bind(this.backend);
				if (c.length < 6)
					try {
						let u;
						c.length === 5 ? (u = c(e, t, r, s, l)) : (u = c(e, t, r, s)),
							u && typeof u.then == "function" ? u.then((h) => a(null, h)).catch(a) : a(null, u);
					} catch (u) {
						a(u);
					}
				else c(e, t, r, s, a, l);
			}
			!e || !e[0] || this.store.addResource(e[0], t, r, s);
		}
	}
}
function Ye() {
	return {
		debug: !1,
		initImmediate: !0,
		ns: ["translation"],
		defaultNS: ["translation"],
		fallbackLng: ["dev"],
		fallbackNS: !1,
		supportedLngs: !1,
		nonExplicitSupportedLngs: !1,
		load: "all",
		preload: !1,
		simplifyPluralSuffix: !0,
		keySeparator: ".",
		nsSeparator: ":",
		pluralSeparator: "_",
		contextSeparator: "_",
		partialBundledLanguages: !1,
		saveMissing: !1,
		updateMissing: !1,
		saveMissingTo: "fallback",
		saveMissingPlurals: !0,
		missingKeyHandler: !1,
		missingInterpolationHandler: !1,
		postProcess: !1,
		postProcessPassResolved: !1,
		returnNull: !1,
		returnEmptyString: !0,
		returnObjects: !1,
		joinArrays: !1,
		returnedObjectHandler: !1,
		parseMissingKeyHandler: !1,
		appendNamespaceToMissingKey: !1,
		appendNamespaceToCIMode: !1,
		overloadTranslationOptionHandler: function (e) {
			let t = {};
			if (
				(typeof e[1] == "object" && (t = e[1]),
				typeof e[1] == "string" && (t.defaultValue = e[1]),
				typeof e[2] == "string" && (t.tDescription = e[2]),
				typeof e[2] == "object" || typeof e[3] == "object")
			) {
				const r = e[3] || e[2];
				Object.keys(r).forEach((s) => {
					t[s] = r[s];
				});
			}
			return t;
		},
		interpolation: {
			escapeValue: !0,
			format: (n, e, t, r) => n,
			prefix: "{{",
			suffix: "}}",
			formatSeparator: ",",
			unescapePrefix: "-",
			nestingPrefix: "$t(",
			nestingSuffix: ")",
			nestingOptionsSeparator: ",",
			maxReplaces: 1e3,
			skipOnVariables: !0,
		},
	};
}
function Qe(n) {
	return (
		typeof n.ns == "string" && (n.ns = [n.ns]),
		typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]),
		typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]),
		n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])),
		n
	);
}
function ee() {}
function fr(n) {
	Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
		typeof n[t] == "function" && (n[t] = n[t].bind(n));
	});
}
class W extends de {
	constructor() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = arguments.length > 1 ? arguments[1] : void 0;
		if (
			(super(),
			(this.options = Qe(e)),
			(this.services = {}),
			(this.logger = T),
			(this.modules = { external: [] }),
			fr(this),
			t && !this.isInitialized && !e.isClone)
		) {
			if (!this.options.initImmediate) return this.init(e, t), this;
			setTimeout(() => {
				this.init(e, t);
			}, 0);
		}
	}
	init() {
		var e = this;
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			r = arguments.length > 1 ? arguments[1] : void 0;
		typeof t == "function" && ((r = t), (t = {})),
			!t.defaultNS &&
				t.defaultNS !== !1 &&
				t.ns &&
				(typeof t.ns == "string" ? (t.defaultNS = t.ns) : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
		const s = Ye();
		(this.options = { ...s, ...this.options, ...Qe(t) }),
			this.options.compatibilityAPI !== "v1" &&
				(this.options.interpolation = { ...s.interpolation, ...this.options.interpolation }),
			t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator),
			t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
		function i(u) {
			return u ? (typeof u == "function" ? new u() : u) : null;
		}
		if (!this.options.isClone) {
			this.modules.logger ? T.init(i(this.modules.logger), this.options) : T.init(null, this.options);
			let u;
			this.modules.formatter ? (u = this.modules.formatter) : typeof Intl < "u" && (u = ur);
			const h = new We(this.options);
			this.store = new Je(this.options.resources, this.options);
			const f = this.services;
			(f.logger = T),
				(f.resourceStore = this.store),
				(f.languageUtils = h),
				(f.pluralResolver = new ir(h, {
					prepend: this.options.pluralSeparator,
					compatibilityJSON: this.options.compatibilityJSON,
					simplifyPluralSuffix: this.options.simplifyPluralSuffix,
				})),
				u &&
					(!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) &&
					((f.formatter = i(u)),
					f.formatter.init(f, this.options),
					(this.options.interpolation.format = f.formatter.format.bind(f.formatter))),
				(f.interpolator = new or(this.options)),
				(f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
				(f.backendConnector = new cr(i(this.modules.backend), f.resourceStore, f, this.options)),
				f.backendConnector.on("*", function (m) {
					for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++) g[y - 1] = arguments[y];
					e.emit(m, ...g);
				}),
				this.modules.languageDetector &&
					((f.languageDetector = i(this.modules.languageDetector)),
					f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)),
				this.modules.i18nFormat &&
					((f.i18nFormat = i(this.modules.i18nFormat)), f.i18nFormat.init && f.i18nFormat.init(this)),
				(this.translator = new ae(this.services, this.options)),
				this.translator.on("*", function (m) {
					for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++) g[y - 1] = arguments[y];
					e.emit(m, ...g);
				}),
				this.modules.external.forEach((m) => {
					m.init && m.init(this);
				});
		}
		if (
			((this.format = this.options.interpolation.format),
			r || (r = ee),
			this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
		) {
			const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
			u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
		}
		!this.services.languageDetector &&
			!this.options.lng &&
			this.logger.warn("init: no languageDetector is used and no lng is defined"),
			["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
				this[u] = function () {
					return e.store[u](...arguments);
				};
			}),
			["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
				this[u] = function () {
					return e.store[u](...arguments), e;
				};
			});
		const l = J(),
			c = () => {
				const u = (h, f) => {
					this.isInitialized &&
						!this.initializedStoreOnce &&
						this.logger.warn("init: i18next is already initialized. You should call init just once!"),
						(this.isInitialized = !0),
						this.options.isClone || this.logger.log("initialized", this.options),
						this.emit("initialized", this.options),
						l.resolve(f),
						r(h, f);
				};
				if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
					return u(null, this.t.bind(this));
				this.changeLanguage(this.options.lng, u);
			};
		return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
	}
	loadResources(e) {
		let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ee;
		const s = typeof e == "string" ? e : this.language;
		if ((typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages)) {
			if (s && s.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
			const i = [],
				o = (a) => {
					if (!a || a === "cimode") return;
					this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
						c !== "cimode" && i.indexOf(c) < 0 && i.push(c);
					});
				};
			s ? o(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)),
				this.options.preload && this.options.preload.forEach((a) => o(a)),
				this.services.backendConnector.load(i, this.options.ns, (a) => {
					!a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
				});
		} else r(null);
	}
	reloadResources(e, t, r) {
		const s = J();
		return (
			e || (e = this.languages),
			t || (t = this.options.ns),
			r || (r = ee),
			this.services.backendConnector.reload(e, t, (i) => {
				s.resolve(), r(i);
			}),
			s
		);
	}
	use(e) {
		if (!e)
			throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!e.type)
			throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		return (
			e.type === "backend" && (this.modules.backend = e),
			(e.type === "logger" || (e.log && e.warn && e.error)) && (this.modules.logger = e),
			e.type === "languageDetector" && (this.modules.languageDetector = e),
			e.type === "i18nFormat" && (this.modules.i18nFormat = e),
			e.type === "postProcessor" && Et.addPostProcessor(e),
			e.type === "formatter" && (this.modules.formatter = e),
			e.type === "3rdParty" && this.modules.external.push(e),
			this
		);
	}
	setResolvedLanguage(e) {
		if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
			for (let t = 0; t < this.languages.length; t++) {
				const r = this.languages[t];
				if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
					this.resolvedLanguage = r;
					break;
				}
			}
	}
	changeLanguage(e, t) {
		var r = this;
		this.isLanguageChangingTo = e;
		const s = J();
		this.emit("languageChanging", e);
		const i = (l) => {
				(this.language = l),
					(this.languages = this.services.languageUtils.toResolveHierarchy(l)),
					(this.resolvedLanguage = void 0),
					this.setResolvedLanguage(l);
			},
			o = (l, c) => {
				c
					? (i(c),
						this.translator.changeLanguage(c),
						(this.isLanguageChangingTo = void 0),
						this.emit("languageChanged", c),
						this.logger.log("languageChanged", c))
					: (this.isLanguageChangingTo = void 0),
					s.resolve(function () {
						return r.t(...arguments);
					}),
					t &&
						t(l, function () {
							return r.t(...arguments);
						});
			},
			a = (l) => {
				!e && !l && this.services.languageDetector && (l = []);
				const c = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
				c &&
					(this.language || i(c),
					this.translator.language || this.translator.changeLanguage(c),
					this.services.languageDetector &&
						this.services.languageDetector.cacheUserLanguage &&
						this.services.languageDetector.cacheUserLanguage(c)),
					this.loadResources(c, (u) => {
						o(u, c);
					});
			};
		return (
			!e && this.services.languageDetector && !this.services.languageDetector.async
				? a(this.services.languageDetector.detect())
				: !e && this.services.languageDetector && this.services.languageDetector.async
					? this.services.languageDetector.detect.length === 0
						? this.services.languageDetector.detect().then(a)
						: this.services.languageDetector.detect(a)
					: a(e),
			s
		);
	}
	getFixedT(e, t, r) {
		var s = this;
		const i = function (o, a) {
			let l;
			if (typeof a != "object") {
				for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), h = 2; h < c; h++) u[h - 2] = arguments[h];
				l = s.options.overloadTranslationOptionHandler([o, a].concat(u));
			} else l = { ...a };
			(l.lng = l.lng || i.lng),
				(l.lngs = l.lngs || i.lngs),
				(l.ns = l.ns || i.ns),
				(l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
			const f = s.options.keySeparator || ".";
			let m;
			return (
				l.keyPrefix && Array.isArray(o)
					? (m = o.map((p) => `${l.keyPrefix}${f}${p}`))
					: (m = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o),
				s.t(m, l)
			);
		};
		return typeof e == "string" ? (i.lng = e) : (i.lngs = e), (i.ns = t), (i.keyPrefix = r), i;
	}
	t() {
		return this.translator && this.translator.translate(...arguments);
	}
	exists() {
		return this.translator && this.translator.exists(...arguments);
	}
	setDefaultNamespace(e) {
		this.options.defaultNS = e;
	}
	hasLoadedNamespace(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (!this.isInitialized)
			return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
		if (!this.languages || !this.languages.length)
			return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
		const r = t.lng || this.resolvedLanguage || this.languages[0],
			s = this.options ? this.options.fallbackLng : !1,
			i = this.languages[this.languages.length - 1];
		if (r.toLowerCase() === "cimode") return !0;
		const o = (a, l) => {
			const c = this.services.backendConnector.state[`${a}|${l}`];
			return c === -1 || c === 2;
		};
		if (t.precheck) {
			const a = t.precheck(this, o);
			if (a !== void 0) return a;
		}
		return !!(
			this.hasResourceBundle(r, e) ||
			!this.services.backendConnector.backend ||
			(this.options.resources && !this.options.partialBundledLanguages) ||
			(o(r, e) && (!s || o(i, e)))
		);
	}
	loadNamespaces(e, t) {
		const r = J();
		return this.options.ns
			? (typeof e == "string" && (e = [e]),
				e.forEach((s) => {
					this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
				}),
				this.loadResources((s) => {
					r.resolve(), t && t(s);
				}),
				r)
			: (t && t(), Promise.resolve());
	}
	loadLanguages(e, t) {
		const r = J();
		typeof e == "string" && (e = [e]);
		const s = this.options.preload || [],
			i = e.filter((o) => s.indexOf(o) < 0);
		return i.length
			? ((this.options.preload = s.concat(i)),
				this.loadResources((o) => {
					r.resolve(), t && t(o);
				}),
				r)
			: (t && t(), Promise.resolve());
	}
	dir(e) {
		if (
			(e ||
				(e =
					this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
			!e)
		)
			return "rtl";
		const t = [
				"ar",
				"shu",
				"sqr",
				"ssh",
				"xaa",
				"yhd",
				"yud",
				"aao",
				"abh",
				"abv",
				"acm",
				"acq",
				"acw",
				"acx",
				"acy",
				"adf",
				"ads",
				"aeb",
				"aec",
				"afb",
				"ajp",
				"apc",
				"apd",
				"arb",
				"arq",
				"ars",
				"ary",
				"arz",
				"auz",
				"avl",
				"ayh",
				"ayl",
				"ayn",
				"ayp",
				"bbz",
				"pga",
				"he",
				"iw",
				"ps",
				"pbt",
				"pbu",
				"pst",
				"prp",
				"prd",
				"ug",
				"ur",
				"ydd",
				"yds",
				"yih",
				"ji",
				"yi",
				"hbo",
				"men",
				"xmn",
				"fa",
				"jpr",
				"peo",
				"pes",
				"prs",
				"dv",
				"sam",
				"ckb",
			],
			r = (this.services && this.services.languageUtils) || new We(Ye());
		return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = arguments.length > 1 ? arguments[1] : void 0;
		return new W(e, t);
	}
	cloneInstance() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ee;
		const r = e.forkResourceStore;
		r && delete e.forkResourceStore;
		const s = { ...this.options, ...e, isClone: !0 },
			i = new W(s);
		return (
			(e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)),
			["store", "services", "language"].forEach((a) => {
				i[a] = this[a];
			}),
			(i.services = { ...this.services }),
			(i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
			r && ((i.store = new Je(this.store.data, s)), (i.services.resourceStore = i.store)),
			(i.translator = new ae(i.services, s)),
			i.translator.on("*", function (a) {
				for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) c[u - 1] = arguments[u];
				i.emit(a, ...c);
			}),
			i.init(s, t),
			(i.translator.options = s),
			(i.translator.backendConnector.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
			i
		);
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage,
		};
	}
}
const R = W.createInstance();
R.createInstance = W.createInstance;
R.createInstance;
R.dir;
R.init;
R.loadResources;
R.reloadResources;
R.use;
R.changeLanguage;
R.getFixedT;
R.t;
R.exists;
R.setDefaultNamespace;
R.hasLoadedNamespace;
R.loadNamespaces;
R.loadLanguages;
const dr = {},
	Ze = (n) => {
		let e;
		const t = new Set(),
			r = (l, c) => {
				const u = typeof l == "function" ? l(e) : l;
				if (!Object.is(u, e)) {
					const h = e;
					(e = (c ?? typeof u != "object") ? u : Object.assign({}, e, u)), t.forEach((f) => f(e, h));
				}
			},
			s = () => e,
			a = {
				setState: r,
				getState: s,
				subscribe: (l) => (t.add(l), () => t.delete(l)),
				destroy: () => {
					t.clear();
				},
			};
		return (e = n(r, s, a)), a;
	},
	hr = (n) => (n ? Ze(n) : Ze);
var Rt = { exports: {} },
	Lt = {},
	Nt = { exports: {} },
	Ct = {};
var V = Le;
function pr(n, e) {
	return (n === e && (n !== 0 || 1 / n === 1 / e)) || (n !== n && e !== e);
}
var gr = typeof Object.is == "function" ? Object.is : pr,
	mr = V.useState,
	yr = V.useEffect,
	br = V.useLayoutEffect,
	Sr = V.useDebugValue;
function xr(n, e) {
	var t = e(),
		r = mr({ inst: { value: t, getSnapshot: e } }),
		s = r[0].inst,
		i = r[1];
	return (
		br(
			function () {
				(s.value = t), (s.getSnapshot = e), Se(s) && i({ inst: s });
			},
			[n, t, e],
		),
		yr(
			function () {
				return (
					Se(s) && i({ inst: s }),
					n(function () {
						Se(s) && i({ inst: s });
					})
				);
			},
			[n],
		),
		Sr(t),
		t
	);
}
function Se(n) {
	var e = n.getSnapshot;
	n = n.value;
	try {
		var t = e();
		return !gr(n, t);
	} catch {
		return !0;
	}
}
function wr(n, e) {
	return e();
}
var Or = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? wr : xr;
Ct.useSyncExternalStore = V.useSyncExternalStore !== void 0 ? V.useSyncExternalStore : Or;
Nt.exports = Ct;
var Er = Nt.exports;
var he = Le,
	Rr = Er;
function Lr(n, e) {
	return (n === e && (n !== 0 || 1 / n === 1 / e)) || (n !== n && e !== e);
}
var Nr = typeof Object.is == "function" ? Object.is : Lr,
	Cr = Rr.useSyncExternalStore,
	vr = he.useRef,
	Pr = he.useEffect,
	Ar = he.useMemo,
	Tr = he.useDebugValue;
Lt.useSyncExternalStoreWithSelector = function (n, e, t, r, s) {
	var i = vr(null);
	if (i.current === null) {
		var o = { hasValue: !1, value: null };
		i.current = o;
	} else o = i.current;
	i = Ar(
		function () {
			function l(m) {
				if (!c) {
					if (((c = !0), (u = m), (m = r(m)), s !== void 0 && o.hasValue)) {
						var p = o.value;
						if (s(p, m)) return (h = p);
					}
					return (h = m);
				}
				if (((p = h), Nr(u, m))) return p;
				var g = r(m);
				return s !== void 0 && s(p, g) ? p : ((u = m), (h = g));
			}
			var c = !1,
				u,
				h,
				f = t === void 0 ? null : t;
			return [
				function () {
					return l(e());
				},
				f === null
					? void 0
					: function () {
							return l(f());
						},
			];
		},
		[e, t, r, s],
	);
	var a = Cr(n, i[0], i[1]);
	return (
		Pr(
			function () {
				(o.hasValue = !0), (o.value = a);
			},
			[a],
		),
		Tr(a),
		a
	);
};
Rt.exports = Lt;
var Fr = Rt.exports;
const jr = Tt(Fr),
	vt = {},
	{ useSyncExternalStoreWithSelector: kr } = jr;
let et = !1;
function $r(n, e = n.getState, t) {
	(vt ? "production" : void 0) !== "production" && t && !et && (et = !0);
	const r = kr(n.subscribe, n.getState, n.getServerState || n.getState, e, t);
	return Le.useDebugValue(r), r;
}
const Dr = (n) => {
		const e = typeof n == "function" ? hr(n) : n,
			t = (r, s) => $r(e, r, s);
		return Object.assign(t, e), t;
	},
	rs = (n) => Dr;
export { O as a, rs as c, R as i };
