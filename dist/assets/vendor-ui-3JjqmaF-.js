import { R as X, r as f, g as oc, a as Es, b as zo, c as xf, d as Cf } from "./vendor-core-DKKL4amP.js";
function Lt(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function pe(e) {
	"@babel/helpers - typeof";
	return (
		(pe =
			typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
				? function (t) {
						return typeof t;
					}
				: function (t) {
						return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
							? "symbol"
							: typeof t;
					}),
		pe(e)
	);
}
function Ef(e, t) {
	if (pe(e) != "object" || !e) return e;
	var r = e[Symbol.toPrimitive];
	if (r !== void 0) {
		var n = r.call(e, t);
		if (pe(n) != "object") return n;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return String(e);
}
function ic(e) {
	var t = Ef(e, "string");
	return pe(t) == "symbol" ? t : t + "";
}
function $s(e, t) {
	for (var r = 0; r < t.length; r++) {
		var n = t[r];
		(n.enumerable = n.enumerable || !1),
			(n.configurable = !0),
			"value" in n && (n.writable = !0),
			Object.defineProperty(e, ic(n.key), n);
	}
}
function zt(e, t, r) {
	return t && $s(e.prototype, t), r && $s(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Te() {
	return (
		(Te = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
					}
					return e;
				}),
		Te.apply(null, arguments)
	);
}
var Ye = function () {
	return (
		(Ye =
			Object.assign ||
			function (t) {
				for (var r, n = 1, o = arguments.length; n < o; n++) {
					r = arguments[n];
					for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
				}
				return t;
			}),
		Ye.apply(this, arguments)
	);
};
function yn(e, t, r) {
	if (r || arguments.length === 2)
		for (var n = 0, o = t.length, i; n < o; n++)
			(i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
	return e.concat(i || Array.prototype.slice.call(t));
}
var Pe = "-ms-",
	gn = "-moz-",
	Se = "-webkit-",
	ac = "comm",
	No = "rule",
	Xa = "decl",
	$f = "@import",
	Of = "@namespace",
	sc = "@keyframes",
	Rf = "@layer",
	lc = Math.abs,
	Ya = String.fromCharCode,
	sa = Object.assign;
function Pf(e, t) {
	return De(e, 0) ^ 45 ? (((((((t << 2) ^ De(e, 0)) << 2) ^ De(e, 1)) << 2) ^ De(e, 2)) << 2) ^ De(e, 3) : 0;
}
function cc(e) {
	return e.trim();
}
function Wt(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function le(e, t, r) {
	return e.replace(t, r);
}
function po(e, t, r) {
	return e.indexOf(t, r);
}
function De(e, t) {
	return e.charCodeAt(t) | 0;
}
function yr(e, t, r) {
	return e.slice(t, r);
}
function Tt(e) {
	return e.length;
}
function uc(e) {
	return e.length;
}
function hn(e, t) {
	return t.push(e), e;
}
function Tf(e, t) {
	return e.map(t).join("");
}
function Os(e, t) {
	return e.filter(function (r) {
		return !Wt(r, t);
	});
}
var ko = 1,
	Wr = 1,
	fc = 0,
	Ct = 0,
	Ne = 0,
	Jr = "";
function Ho(e, t, r, n, o, i, a, s) {
	return {
		value: e,
		root: t,
		parent: r,
		type: n,
		props: o,
		children: i,
		line: ko,
		column: Wr,
		length: a,
		return: "",
		siblings: s,
	};
}
function Zt(e, t) {
	return sa(Ho("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Tr(e) {
	for (; e.root; ) e = Zt(e.root, { children: [e] });
	hn(e, e.siblings);
}
function Af() {
	return Ne;
}
function Mf() {
	return (Ne = Ct > 0 ? De(Jr, --Ct) : 0), Wr--, Ne === 10 && ((Wr = 1), ko--), Ne;
}
function _t() {
	return (Ne = Ct < fc ? De(Jr, Ct++) : 0), Wr++, Ne === 10 && ((Wr = 1), ko++), Ne;
}
function Jt() {
	return De(Jr, Ct);
}
function bo() {
	return Ct;
}
function Do(e, t) {
	return yr(Jr, e, t);
}
function Sn(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32:
			return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125:
			return 4;
		case 58:
			return 3;
		case 34:
		case 39:
		case 40:
		case 91:
			return 2;
		case 41:
		case 93:
			return 1;
	}
	return 0;
}
function If(e) {
	return (ko = Wr = 1), (fc = Tt((Jr = e))), (Ct = 0), [];
}
function _f(e) {
	return (Jr = ""), e;
}
function Ri(e) {
	return cc(Do(Ct - 1, la(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ff(e) {
	for (; (Ne = Jt()) && Ne < 33; ) _t();
	return Sn(e) > 2 || Sn(Ne) > 3 ? "" : " ";
}
function jf(e, t) {
	for (; --t && _t() && !(Ne < 48 || Ne > 102 || (Ne > 57 && Ne < 65) || (Ne > 70 && Ne < 97)); );
	return Do(e, bo() + (t < 6 && Jt() == 32 && _t() == 32));
}
function la(e) {
	for (; _t(); )
		switch (Ne) {
			case e:
				return Ct;
			case 34:
			case 39:
				e !== 34 && e !== 39 && la(Ne);
				break;
			case 40:
				e === 41 && la(e);
				break;
			case 92:
				_t();
				break;
		}
	return Ct;
}
function Lf(e, t) {
	for (; _t() && e + Ne !== 57; ) if (e + Ne === 84 && Jt() === 47) break;
	return "/*" + Do(t, Ct - 1) + "*" + Ya(e === 47 ? e : _t());
}
function zf(e) {
	for (; !Sn(Jt()); ) _t();
	return Do(e, Ct);
}
function dc(e) {
	return _f(yo("", null, null, null, [""], (e = If(e)), 0, [0], e));
}
function yo(e, t, r, n, o, i, a, s, l) {
	for (
		var c = 0, u = 0, d = a, h = 0, b = 0, m = 0, v = 1, p = 1, y = 1, S = 0, g = "", w = o, E = i, C = n, x = g;
		p;
	)
		switch (((m = S), (S = _t()))) {
			case 40:
				if (m != 108 && De(x, d - 1) == 58) {
					po((x += le(Ri(S), "&", "&\f")), "&\f", lc(c ? s[c - 1] : 0)) != -1 && (y = -1);
					break;
				}
			case 34:
			case 39:
			case 91:
				x += Ri(S);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				x += Ff(m);
				break;
			case 92:
				x += jf(bo() - 1, 7);
				continue;
			case 47:
				switch (Jt()) {
					case 42:
					case 47:
						hn(Nf(Lf(_t(), bo()), t, r, l), l),
							(Sn(m || 1) == 5 || Sn(Jt() || 1) == 5) && Tt(x) && yr(x, -1, void 0) !== " " && (x += " ");
						break;
					default:
						x += "/";
				}
				break;
			case 123 * v:
				s[c++] = Tt(x) * y;
			case 125 * v:
			case 59:
			case 0:
				switch (S) {
					case 0:
					case 125:
						p = 0;
					case 59 + u:
						y == -1 && (x = le(x, /\f/g, "")),
							b > 0 &&
								(Tt(x) - d || (v === 0 && m === 47)) &&
								hn(b > 32 ? Ps(x + ";", n, r, d - 1, l) : Ps(le(x, " ", "") + ";", n, r, d - 2, l), l);
						break;
					case 59:
						x += ";";
					default:
						if ((hn((C = Rs(x, t, r, c, u, o, s, g, (w = []), (E = []), d, i)), i), S === 123))
							if (u === 0) yo(x, t, C, C, w, i, d, s, E);
							else {
								switch (h) {
									case 99:
										if (De(x, 3) === 110) break;
									case 108:
										if (De(x, 2) === 97) break;
									default:
										u = 0;
									case 100:
									case 109:
									case 115:
								}
								u
									? yo(e, C, C, n && hn(Rs(e, C, C, 0, 0, o, s, g, o, (w = []), d, E), E), o, E, d, s, n ? w : E)
									: yo(x, C, C, C, [""], E, 0, s, E);
							}
				}
				(c = u = b = 0), (v = y = 1), (g = x = ""), (d = a);
				break;
			case 58:
				(d = 1 + Tt(x)), (b = m);
			default:
				if (v < 1) {
					if (S == 123) --v;
					else if (S == 125 && v++ == 0 && Mf() == 125) continue;
				}
				switch (((x += Ya(S)), S * v)) {
					case 38:
						y = u > 0 ? 1 : ((x += "\f"), -1);
						break;
					case 44:
						(s[c++] = (Tt(x) - 1) * y), (y = 1);
						break;
					case 64:
						Jt() === 45 && (x += Ri(_t())), (h = Jt()), (u = d = Tt((g = x += zf(bo())))), S++;
						break;
					case 45:
						m === 45 && Tt(x) == 2 && (v = 0);
				}
		}
	return i;
}
function Rs(e, t, r, n, o, i, a, s, l, c, u, d) {
	for (var h = o - 1, b = o === 0 ? i : [""], m = uc(b), v = 0, p = 0, y = 0; v < n; ++v)
		for (var S = 0, g = yr(e, h + 1, (h = lc((p = a[v])))), w = e; S < m; ++S)
			(w = cc(p > 0 ? b[S] + " " + g : le(g, /&\f/g, b[S]))) && (l[y++] = w);
	return Ho(e, t, r, o === 0 ? No : s, l, c, u, d);
}
function Nf(e, t, r, n) {
	return Ho(e, t, r, ac, Ya(Af()), yr(e, 2, -2), 0, n);
}
function Ps(e, t, r, n, o) {
	return Ho(e, t, r, Xa, yr(e, 0, n), yr(e, n + 1, -1), n, o);
}
function hc(e, t, r) {
	switch (Pf(e, t)) {
		case 5103:
			return Se + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
			return Se + e + e;
		case 4855:
			return (
				Se +
				e
					.replace("add", "source-over")
					.replace("substract", "source-out")
					.replace("intersect", "source-in")
					.replace("exclude", "xor") +
				e
			);
		case 4789:
			return gn + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756:
			return Se + e + gn + e + Pe + e + e;
		case 5936:
			switch (De(e, t + 11)) {
				case 114:
					return Se + e + Pe + le(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108:
					return Se + e + Pe + le(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45:
					return Se + e + Pe + le(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
		case 6828:
		case 4268:
		case 2903:
			return Se + e + Pe + e + e;
		case 6165:
			return Se + e + Pe + "flex-" + e + e;
		case 5187:
			return Se + e + le(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + Pe + "flex-$1$2") + e;
		case 5443:
			return (
				Se +
				e +
				Pe +
				"flex-item-" +
				le(e, /flex-|-self/g, "") +
				(Wt(e, /flex-|baseline/) ? "" : Pe + "grid-row-" + le(e, /flex-|-self/g, "")) +
				e
			);
		case 4675:
			return Se + e + Pe + "flex-line-pack" + le(e, /align-content|flex-|-self/g, "") + e;
		case 5548:
			return Se + e + Pe + le(e, "shrink", "negative") + e;
		case 5292:
			return Se + e + Pe + le(e, "basis", "preferred-size") + e;
		case 6060:
			return Se + "box-" + le(e, "-grow", "") + Se + e + Pe + le(e, "grow", "positive") + e;
		case 4554:
			return Se + le(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
		case 6187:
			return le(le(le(e, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"), e, "") + e;
		case 5495:
		case 3959:
			return le(e, /(image-set\([^]*)/, Se + "$1$`$1");
		case 4968:
			return (
				le(le(e, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + Pe + "flex-pack:$3"), /space-between/, "justify") +
				Se +
				e +
				e
			);
		case 4200:
			if (!Wt(e, /flex-|baseline/)) return Pe + "grid-column-align" + yr(e, t) + e;
			break;
		case 2592:
		case 3360:
			return Pe + le(e, "template-", "") + e;
		case 4384:
		case 3616:
			return r &&
				r.some(function (n, o) {
					return (t = o), Wt(n.props, /grid-\w+-end/);
				})
				? ~po(e + (r = r[t].value), "span", 0)
					? e
					: Pe +
						le(e, "-start", "") +
						e +
						Pe +
						"grid-row-span:" +
						(~po(r, "span", 0) ? Wt(r, /\d+/) : +Wt(r, /\d+/) - +Wt(e, /\d+/)) +
						";"
				: Pe + le(e, "-start", "") + e;
		case 4896:
		case 4128:
			return r &&
				r.some(function (n) {
					return Wt(n.props, /grid-\w+-start/);
				})
				? e
				: Pe + le(le(e, "-end", "-span"), "span ", "") + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532:
			return le(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (Tt(e) - 1 - t > 6)
				switch (De(e, t + 1)) {
					case 109:
						if (De(e, t + 4) !== 45) break;
					case 102:
						return le(e, /(.+:)(.+)-([^]+)/, "$1" + Se + "$2-$3$1" + gn + (De(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
					case 115:
						return ~po(e, "stretch", 0) ? hc(le(e, "stretch", "fill-available"), t, r) + e : e;
				}
			break;
		case 5152:
		case 5920:
			return le(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (n, o, i, a, s, l, c) {
				return Pe + o + ":" + i + c + (a ? Pe + o + "-span:" + (s ? l : +l - +i) + c : "") + e;
			});
		case 4949:
			if (De(e, t + 6) === 121) return le(e, ":", ":" + Se) + e;
			break;
		case 6444:
			switch (De(e, De(e, 14) === 45 ? 18 : 11)) {
				case 120:
					return (
						le(
							e,
							/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
							"$1" + Se + (De(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Se + "$2$3$1" + Pe + "$2box$3",
						) + e
					);
				case 100:
					return le(e, ":", ":" + Pe) + e;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391:
			return le(e, "scroll-", "scroll-snap-") + e;
	}
	return e;
}
function wn(e, t) {
	for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
	return r;
}
function vc(e, t, r, n) {
	switch (e.type) {
		case Rf:
			if (e.children.length) break;
		case $f:
		case Of:
		case Xa:
			return (e.return = e.return || e.value);
		case ac:
			return "";
		case sc:
			return (e.return = e.value + "{" + wn(e.children, n) + "}");
		case No:
			if (!Tt((e.value = e.props.join(",")))) return "";
	}
	return Tt((r = wn(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function kf(e) {
	var t = uc(e);
	return function (r, n, o, i) {
		for (var a = "", s = 0; s < t; s++) a += e[s](r, n, o, i) || "";
		return a;
	};
}
function Hf(e) {
	return function (t) {
		t.root || ((t = t.return) && e(t));
	};
}
function Df(e, t, r, n) {
	if (e.length > -1 && !e.return)
		switch (e.type) {
			case Xa:
				e.return = hc(e.value, e.length, r);
				return;
			case sc:
				return wn([Zt(e, { value: le(e.value, "@", "@" + Se) })], n);
			case No:
				if (e.length)
					return Tf((r = e.props), function (o) {
						switch (Wt(o, (n = /(::plac\w+|:read-\w+)/))) {
							case ":read-only":
							case ":read-write":
								Tr(Zt(e, { props: [le(o, /:(read-\w+)/, ":" + gn + "$1")] })),
									Tr(Zt(e, { props: [o] })),
									sa(e, { props: Os(r, n) });
								break;
							case "::placeholder":
								Tr(Zt(e, { props: [le(o, /:(plac\w+)/, ":" + Se + "input-$1")] })),
									Tr(Zt(e, { props: [le(o, /:(plac\w+)/, ":" + gn + "$1")] })),
									Tr(Zt(e, { props: [le(o, /:(plac\w+)/, Pe + "input-$1")] })),
									Tr(Zt(e, { props: [o] })),
									sa(e, { props: Os(r, n) });
								break;
						}
						return "";
					});
		}
}
var Bf = {
		animationIterationCount: 1,
		aspectRatio: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1,
	},
	ft = {},
	Gr = (typeof process < "u" && ft !== void 0 && (ft.REACT_APP_SC_ATTR || ft.SC_ATTR)) || "data-styled",
	gc = "active",
	mc = "data-styled-version",
	Bo = "6.0.9",
	Za = `/*!sc*/
`,
	Qa = typeof window < "u" && "HTMLElement" in window,
	Vf = !!(typeof SC_DISABLE_SPEEDY == "boolean"
		? SC_DISABLE_SPEEDY
		: typeof process < "u" &&
				ft !== void 0 &&
				ft.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
				ft.REACT_APP_SC_DISABLE_SPEEDY !== ""
			? ft.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ft.REACT_APP_SC_DISABLE_SPEEDY
			: typeof process < "u" &&
				ft !== void 0 &&
				ft.SC_DISABLE_SPEEDY !== void 0 &&
				ft.SC_DISABLE_SPEEDY !== "" &&
				ft.SC_DISABLE_SPEEDY !== "false" &&
				ft.SC_DISABLE_SPEEDY),
	Wf = {},
	Vo = Object.freeze([]),
	qr = Object.freeze({});
function pc(e, t, r) {
	return r === void 0 && (r = qr), (e.theme !== r.theme && e.theme) || t || r.theme;
}
var bc = new Set([
		"a",
		"abbr",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"base",
		"bdi",
		"bdo",
		"big",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"col",
		"colgroup",
		"data",
		"datalist",
		"dd",
		"del",
		"details",
		"dfn",
		"dialog",
		"div",
		"dl",
		"dt",
		"em",
		"embed",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"keygen",
		"label",
		"legend",
		"li",
		"link",
		"main",
		"map",
		"mark",
		"menu",
		"menuitem",
		"meta",
		"meter",
		"nav",
		"noscript",
		"object",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"param",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"script",
		"section",
		"select",
		"small",
		"source",
		"span",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"track",
		"u",
		"ul",
		"use",
		"var",
		"video",
		"wbr",
		"circle",
		"clipPath",
		"defs",
		"ellipse",
		"foreignObject",
		"g",
		"image",
		"line",
		"linearGradient",
		"marker",
		"mask",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialGradient",
		"rect",
		"stop",
		"svg",
		"text",
		"tspan",
	]),
	Gf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
	qf = /(^-|-$)/g;
function Ts(e) {
	return e.replace(Gf, "-").replace(qf, "");
}
var Uf = /(a)(d)/gi,
	ro = 52,
	As = function (e) {
		return String.fromCharCode(e + (e > 25 ? 39 : 97));
	};
function ca(e) {
	var t,
		r = "";
	for (t = Math.abs(e); t > ro; t = (t / ro) | 0) r = As(t % ro) + r;
	return (As(t % ro) + r).replace(Uf, "$1-$2");
}
var Pi,
	yc = 5381,
	zr = function (e, t) {
		for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
		return e;
	},
	Sc = function (e) {
		return zr(yc, e);
	};
function wc(e) {
	return ca(Sc(e) >>> 0);
}
function Kf(e) {
	return e.displayName || e.name || "Component";
}
function Ti(e) {
	return typeof e == "string" && !0;
}
var xc = typeof Symbol == "function" && Symbol.for,
	Cc = xc ? Symbol.for("react.memo") : 60115,
	Xf = xc ? Symbol.for("react.forward_ref") : 60112,
	Yf = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0,
	},
	Zf = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
	Ec = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
	Qf =
		(((Pi = {})[Xf] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
		(Pi[Cc] = Ec),
		Pi);
function Ms(e) {
	return ("type" in (t = e) && t.type.$$typeof) === Cc ? Ec : "$$typeof" in e ? Qf[e.$$typeof] : Yf;
	var t;
}
var Jf = Object.defineProperty,
	ed = Object.getOwnPropertyNames,
	Is = Object.getOwnPropertySymbols,
	td = Object.getOwnPropertyDescriptor,
	rd = Object.getPrototypeOf,
	_s = Object.prototype;
function $c(e, t, r) {
	if (typeof t != "string") {
		if (_s) {
			var n = rd(t);
			n && n !== _s && $c(e, n, r);
		}
		var o = ed(t);
		Is && (o = o.concat(Is(t)));
		for (var i = Ms(e), a = Ms(t), s = 0; s < o.length; ++s) {
			var l = o[s];
			if (!(l in Zf || (r && r[l]) || (a && l in a) || (i && l in i))) {
				var c = td(t, l);
				try {
					Jf(e, l, c);
				} catch {}
			}
		}
	}
	return e;
}
function Ur(e) {
	return typeof e == "function";
}
function Ja(e) {
	return typeof e == "object" && "styledComponentId" in e;
}
function hr(e, t) {
	return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ua(e, t) {
	if (e.length === 0) return "";
	for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
	return r;
}
function xn(e) {
	return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function fa(e, t, r) {
	if ((r === void 0 && (r = !1), !r && !xn(e) && !Array.isArray(e))) return t;
	if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = fa(e[n], t[n]);
	else if (xn(t)) for (var n in t) e[n] = fa(e[n], t[n]);
	return e;
}
function es(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
function Mn(e) {
	for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
	return new Error(
		"An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
			.concat(e, " for more information.")
			.concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
	);
}
var nd = (function () {
		function e(t) {
			(this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = t);
		}
		return (
			(e.prototype.indexOfGroup = function (t) {
				for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
				return r;
			}),
			(e.prototype.insertRules = function (t, r) {
				if (t >= this.groupSizes.length) {
					for (var n = this.groupSizes, o = n.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Mn(16, "".concat(t));
					(this.groupSizes = new Uint32Array(i)), this.groupSizes.set(n), (this.length = i);
					for (var a = o; a < i; a++) this.groupSizes[a] = 0;
				}
				for (var s = this.indexOfGroup(t + 1), l = ((a = 0), r.length); a < l; a++)
					this.tag.insertRule(s, r[a]) && (this.groupSizes[t]++, s++);
			}),
			(e.prototype.clearGroup = function (t) {
				if (t < this.length) {
					var r = this.groupSizes[t],
						n = this.indexOfGroup(t),
						o = n + r;
					this.groupSizes[t] = 0;
					for (var i = n; i < o; i++) this.tag.deleteRule(n);
				}
			}),
			(e.prototype.getGroup = function (t) {
				var r = "";
				if (t >= this.length || this.groupSizes[t] === 0) return r;
				for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, a = o; a < i; a++)
					r += "".concat(this.tag.getRule(a)).concat(Za);
				return r;
			}),
			e
		);
	})(),
	So = new Map(),
	Eo = new Map(),
	Ai = 1,
	no = function (e) {
		if (So.has(e)) return So.get(e);
		for (; Eo.has(Ai); ) Ai++;
		var t = Ai++;
		return So.set(e, t), Eo.set(t, e), t;
	},
	od = function (e, t) {
		So.set(e, t), Eo.set(t, e);
	},
	id = "style[".concat(Gr, "][").concat(mc, '="').concat(Bo, '"]'),
	ad = new RegExp("^".concat(Gr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
	sd = function (e, t, r) {
		for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++) (n = o[i]) && e.registerName(t, n);
	},
	ld = function (e, t) {
		for (
			var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Za), o = [], i = 0, a = n.length;
			i < a;
			i++
		) {
			var s = n[i].trim();
			if (s) {
				var l = s.match(ad);
				if (l) {
					var c = 0 | parseInt(l[1], 10),
						u = l[2];
					c !== 0 && (od(u, c), sd(e, u, l[3]), e.getTag().insertRules(c, o)), (o.length = 0);
				} else o.push(s);
			}
		}
	};
function cd() {
	return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Oc = function (e) {
		var t = document.head,
			r = e || t,
			n = document.createElement("style"),
			o = (function (s) {
				var l = Array.from(s.querySelectorAll("style[".concat(Gr, "]")));
				return l[l.length - 1];
			})(r),
			i = o !== void 0 ? o.nextSibling : null;
		n.setAttribute(Gr, gc), n.setAttribute(mc, Bo);
		var a = cd();
		return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
	},
	ud = (function () {
		function e(t) {
			(this.element = Oc(t)),
				this.element.appendChild(document.createTextNode("")),
				(this.sheet = (function (r) {
					if (r.sheet) return r.sheet;
					for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
						var a = n[o];
						if (a.ownerNode === r) return a;
					}
					throw Mn(17);
				})(this.element)),
				(this.length = 0);
		}
		return (
			(e.prototype.insertRule = function (t, r) {
				try {
					return this.sheet.insertRule(r, t), this.length++, !0;
				} catch {
					return !1;
				}
			}),
			(e.prototype.deleteRule = function (t) {
				this.sheet.deleteRule(t), this.length--;
			}),
			(e.prototype.getRule = function (t) {
				var r = this.sheet.cssRules[t];
				return r && r.cssText ? r.cssText : "";
			}),
			e
		);
	})(),
	fd = (function () {
		function e(t) {
			(this.element = Oc(t)), (this.nodes = this.element.childNodes), (this.length = 0);
		}
		return (
			(e.prototype.insertRule = function (t, r) {
				if (t <= this.length && t >= 0) {
					var n = document.createTextNode(r);
					return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
				}
				return !1;
			}),
			(e.prototype.deleteRule = function (t) {
				this.element.removeChild(this.nodes[t]), this.length--;
			}),
			(e.prototype.getRule = function (t) {
				return t < this.length ? this.nodes[t].textContent : "";
			}),
			e
		);
	})(),
	dd = (function () {
		function e(t) {
			(this.rules = []), (this.length = 0);
		}
		return (
			(e.prototype.insertRule = function (t, r) {
				return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
			}),
			(e.prototype.deleteRule = function (t) {
				this.rules.splice(t, 1), this.length--;
			}),
			(e.prototype.getRule = function (t) {
				return t < this.length ? this.rules[t] : "";
			}),
			e
		);
	})(),
	Fs = Qa,
	hd = { isServer: !Qa, useCSSOMInjection: !Vf },
	$o = (function () {
		function e(t, r, n) {
			t === void 0 && (t = qr), r === void 0 && (r = {});
			var o = this;
			(this.options = Ye(Ye({}, hd), t)),
				(this.gs = r),
				(this.names = new Map(n)),
				(this.server = !!t.isServer),
				!this.server &&
					Qa &&
					Fs &&
					((Fs = !1),
					(function (i) {
						for (var a = document.querySelectorAll(id), s = 0, l = a.length; s < l; s++) {
							var c = a[s];
							c && c.getAttribute(Gr) !== gc && (ld(i, c), c.parentNode && c.parentNode.removeChild(c));
						}
					})(this)),
				es(this, function () {
					return (function (i) {
						for (
							var a = i.getTag(),
								s = a.length,
								l = "",
								c = function (d) {
									var h = (function (y) {
										return Eo.get(y);
									})(d);
									if (h === void 0) return "continue";
									var b = i.names.get(h),
										m = a.getGroup(d);
									if (b === void 0 || m.length === 0) return "continue";
									var v = "".concat(Gr, ".g").concat(d, '[id="').concat(h, '"]'),
										p = "";
									b !== void 0 &&
										b.forEach(function (y) {
											y.length > 0 && (p += "".concat(y, ","));
										}),
										(l += "".concat(m).concat(v, '{content:"').concat(p, '"}').concat(Za));
								},
								u = 0;
							u < s;
							u++
						)
							c(u);
						return l;
					})(o);
				});
		}
		return (
			(e.registerId = function (t) {
				return no(t);
			}),
			(e.prototype.reconstructWithOptions = function (t, r) {
				return r === void 0 && (r = !0), new e(Ye(Ye({}, this.options), t), this.gs, (r && this.names) || void 0);
			}),
			(e.prototype.allocateGSInstance = function (t) {
				return (this.gs[t] = (this.gs[t] || 0) + 1);
			}),
			(e.prototype.getTag = function () {
				return (
					this.tag ||
					(this.tag =
						((t = (function (r) {
							var n = r.useCSSOMInjection,
								o = r.target;
							return r.isServer ? new dd(o) : n ? new ud(o) : new fd(o);
						})(this.options)),
						new nd(t)))
				);
				var t;
			}),
			(e.prototype.hasNameForId = function (t, r) {
				return this.names.has(t) && this.names.get(t).has(r);
			}),
			(e.prototype.registerName = function (t, r) {
				if ((no(t), this.names.has(t))) this.names.get(t).add(r);
				else {
					var n = new Set();
					n.add(r), this.names.set(t, n);
				}
			}),
			(e.prototype.insertRules = function (t, r, n) {
				this.registerName(t, r), this.getTag().insertRules(no(t), n);
			}),
			(e.prototype.clearNames = function (t) {
				this.names.has(t) && this.names.get(t).clear();
			}),
			(e.prototype.clearRules = function (t) {
				this.getTag().clearGroup(no(t)), this.clearNames(t);
			}),
			(e.prototype.clearTag = function () {
				this.tag = void 0;
			}),
			e
		);
	})(),
	vd = /&/g,
	gd = /^\s*\/\/.*$/gm;
function Rc(e, t) {
	return e.map(function (r) {
		return (
			r.type === "rule" &&
				((r.value = "".concat(t, " ").concat(r.value)),
				(r.value = r.value.replaceAll(",", ",".concat(t, " "))),
				(r.props = r.props.map(function (n) {
					return "".concat(t, " ").concat(n);
				}))),
			Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Rc(r.children, t)),
			r
		);
	});
}
function md(e) {
	var t,
		r,
		n,
		o = qr,
		i = o.options,
		a = i === void 0 ? qr : i,
		s = o.plugins,
		l = s === void 0 ? Vo : s,
		c = function (h, b, m) {
			return m === r || (m.startsWith(r) && m.endsWith(r) && m.replaceAll(r, "").length > 0) ? ".".concat(t) : h;
		},
		u = l.slice();
	u.push(function (h) {
		h.type === No && h.value.includes("&") && (h.props[0] = h.props[0].replace(vd, r).replace(n, c));
	}),
		a.prefix && u.push(Df),
		u.push(vc);
	var d = function (h, b, m, v) {
		b === void 0 && (b = ""),
			m === void 0 && (m = ""),
			v === void 0 && (v = "&"),
			(t = v),
			(r = b),
			(n = new RegExp("\\".concat(r, "\\b"), "g"));
		var p = h.replace(gd, ""),
			y = dc(m || b ? "".concat(m, " ").concat(b, " { ").concat(p, " }") : p);
		a.namespace && (y = Rc(y, a.namespace));
		var S = [];
		return (
			wn(
				y,
				kf(
					u.concat(
						Hf(function (g) {
							return S.push(g);
						}),
					),
				),
			),
			S
		);
	};
	return (
		(d.hash = l.length
			? l
					.reduce(function (h, b) {
						return b.name || Mn(15), zr(h, b.name);
					}, yc)
					.toString()
			: ""),
		d
	);
}
var pd = new $o(),
	da = md(),
	Pc = X.createContext({ shouldForwardProp: void 0, styleSheet: pd, stylis: da });
Pc.Consumer;
X.createContext(void 0);
function ha() {
	return f.useContext(Pc);
}
var bd = (function () {
		function e(t, r) {
			var n = this;
			(this.inject = function (o, i) {
				i === void 0 && (i = da);
				var a = n.name + i.hash;
				o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
			}),
				(this.name = t),
				(this.id = "sc-keyframes-".concat(t)),
				(this.rules = r),
				es(this, function () {
					throw Mn(12, String(n.name));
				});
		}
		return (
			(e.prototype.getName = function (t) {
				return t === void 0 && (t = da), this.name + t.hash;
			}),
			e
		);
	})(),
	yd = function (e) {
		return e >= "A" && e <= "Z";
	};
function js(e) {
	for (var t = "", r = 0; r < e.length; r++) {
		var n = e[r];
		if (r === 1 && n === "-" && e[0] === "-") return e;
		yd(n) ? (t += "-" + n.toLowerCase()) : (t += n);
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var Tc = function (e) {
		return e == null || e === !1 || e === "";
	},
	Ac = function (e) {
		var t,
			r,
			n = [];
		for (var o in e) {
			var i = e[o];
			e.hasOwnProperty(o) &&
				!Tc(i) &&
				((Array.isArray(i) && i.isCss) || Ur(i)
					? n.push("".concat(js(o), ":"), i, ";")
					: xn(i)
						? n.push.apply(n, yn(yn(["".concat(o, " {")], Ac(i), !1), ["}"], !1))
						: n.push(
								""
									.concat(js(o), ": ")
									.concat(
										((t = o),
										(r = i) == null || typeof r == "boolean" || r === ""
											? ""
											: typeof r != "number" || r === 0 || t in Bf || t.startsWith("--")
												? String(r).trim()
												: "".concat(r, "px")),
										";",
									),
							));
		}
		return n;
	};
function rr(e, t, r, n) {
	if (Tc(e)) return [];
	if (Ja(e)) return [".".concat(e.styledComponentId)];
	if (Ur(e)) {
		if (!Ur((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t) return [e];
		var o = e(t);
		return rr(o, t, r, n);
	}
	var i;
	return e instanceof bd
		? r
			? (e.inject(r, n), [e.getName(n)])
			: [e]
		: xn(e)
			? Ac(e)
			: Array.isArray(e)
				? Array.prototype.concat.apply(
						Vo,
						e.map(function (a) {
							return rr(a, t, r, n);
						}),
					)
				: [e.toString()];
}
function Mc(e) {
	for (var t = 0; t < e.length; t += 1) {
		var r = e[t];
		if (Ur(r) && !Ja(r)) return !1;
	}
	return !0;
}
var Sd = Sc(Bo),
	wd = (function () {
		function e(t, r, n) {
			(this.rules = t),
				(this.staticRulesId = ""),
				(this.isStatic = (n === void 0 || n.isStatic) && Mc(t)),
				(this.componentId = r),
				(this.baseHash = zr(Sd, r)),
				(this.baseStyle = n),
				$o.registerId(r);
		}
		return (
			(e.prototype.generateAndInjectStyles = function (t, r, n) {
				var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
				if (this.isStatic && !n.hash)
					if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = hr(o, this.staticRulesId);
					else {
						var i = ua(rr(this.rules, t, r, n)),
							a = ca(zr(this.baseHash, i) >>> 0);
						if (!r.hasNameForId(this.componentId, a)) {
							var s = n(i, ".".concat(a), void 0, this.componentId);
							r.insertRules(this.componentId, a, s);
						}
						(o = hr(o, a)), (this.staticRulesId = a);
					}
				else {
					for (var l = zr(this.baseHash, n.hash), c = "", u = 0; u < this.rules.length; u++) {
						var d = this.rules[u];
						if (typeof d == "string") c += d;
						else if (d) {
							var h = ua(rr(d, t, r, n));
							(l = zr(l, h + u)), (c += h);
						}
					}
					if (c) {
						var b = ca(l >>> 0);
						r.hasNameForId(this.componentId, b) ||
							r.insertRules(this.componentId, b, n(c, ".".concat(b), void 0, this.componentId)),
							(o = hr(o, b));
					}
				}
				return o;
			}),
			e
		);
	})(),
	ts = X.createContext(void 0);
ts.Consumer;
var Mi = {};
function xd(e, t, r) {
	var n = Ja(e),
		o = e,
		i = !Ti(e),
		a = t.attrs,
		s = a === void 0 ? Vo : a,
		l = t.componentId,
		c =
			l === void 0
				? (function (g, w) {
						var E = typeof g != "string" ? "sc" : Ts(g);
						Mi[E] = (Mi[E] || 0) + 1;
						var C = "".concat(E, "-").concat(wc(Bo + E + Mi[E]));
						return w ? "".concat(w, "-").concat(C) : C;
					})(t.displayName, t.parentComponentId)
				: l,
		u = t.displayName;
	u === void 0 &&
		(function (g) {
			return Ti(g) ? "styled.".concat(g) : "Styled(".concat(Kf(g), ")");
		})(e);
	var d = t.displayName && t.componentId ? "".concat(Ts(t.displayName), "-").concat(t.componentId) : t.componentId || c,
		h = n && o.attrs ? o.attrs.concat(s).filter(Boolean) : s,
		b = t.shouldForwardProp;
	if (n && o.shouldForwardProp) {
		var m = o.shouldForwardProp;
		if (t.shouldForwardProp) {
			var v = t.shouldForwardProp;
			b = function (g, w) {
				return m(g, w) && v(g, w);
			};
		} else b = m;
	}
	var p = new wd(r, d, n ? o.componentStyle : void 0);
	function y(g, w) {
		return (function (E, C, x) {
			var I = E.attrs,
				T = E.componentStyle,
				A = E.defaultProps,
				M = E.foldedComponentIds,
				_ = E.styledComponentId,
				F = E.target,
				k = X.useContext(ts),
				D = ha(),
				R = E.shouldForwardProp || D.shouldForwardProp,
				$ = (function (q, U, ee) {
					for (var J, Q = Ye(Ye({}, U), { className: void 0, theme: ee }), se = 0; se < q.length; se += 1) {
						var de = Ur((J = q[se])) ? J(Q) : J;
						for (var me in de)
							Q[me] = me === "className" ? hr(Q[me], de[me]) : me === "style" ? Ye(Ye({}, Q[me]), de[me]) : de[me];
					}
					return U.className && (Q.className = hr(Q.className, U.className)), Q;
				})(I, C, pc(C, k, A) || qr),
				O = $.as || F,
				j = {};
			for (var L in $)
				$[L] === void 0 ||
					L[0] === "$" ||
					L === "as" ||
					L === "theme" ||
					(L === "forwardedAs" ? (j.as = $.forwardedAs) : (R && !R(L, O)) || (j[L] = $[L]));
			var N = (function (q, U) {
					var ee = ha(),
						J = q.generateAndInjectStyles(U, ee.styleSheet, ee.stylis);
					return J;
				})(T, $),
				H = hr(M, _);
			return (
				N && (H += " " + N),
				$.className && (H += " " + $.className),
				(j[Ti(O) && !bc.has(O) ? "class" : "className"] = H),
				(j.ref = x),
				f.createElement(O, j)
			);
		})(S, g, w);
	}
	var S = X.forwardRef(y);
	return (
		(S.attrs = h),
		(S.componentStyle = p),
		(S.shouldForwardProp = b),
		(S.foldedComponentIds = n ? hr(o.foldedComponentIds, o.styledComponentId) : ""),
		(S.styledComponentId = d),
		(S.target = n ? o.target : e),
		Object.defineProperty(S, "defaultProps", {
			get: function () {
				return this._foldedDefaultProps;
			},
			set: function (g) {
				this._foldedDefaultProps = n
					? (function (w) {
							for (var E = [], C = 1; C < arguments.length; C++) E[C - 1] = arguments[C];
							for (var x = 0, I = E; x < I.length; x++) fa(w, I[x], !0);
							return w;
						})({}, o.defaultProps, g)
					: g;
			},
		}),
		es(S, function () {
			return ".".concat(S.styledComponentId);
		}),
		i &&
			$c(S, e, {
				attrs: !0,
				componentStyle: !0,
				displayName: !0,
				foldedComponentIds: !0,
				shouldForwardProp: !0,
				styledComponentId: !0,
				target: !0,
			}),
		S
	);
}
function Ls(e, t) {
	for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
	return r;
}
var zs = function (e) {
	return Object.assign(e, { isCss: !0 });
};
function Ic(e) {
	for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
	if (Ur(e) || xn(e)) return zs(rr(Ls(Vo, yn([e], t, !0))));
	var n = e;
	return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? rr(n) : zs(rr(Ls(n, t)));
}
function va(e, t, r) {
	if ((r === void 0 && (r = qr), !t)) throw Mn(1, t);
	var n = function (o) {
		for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
		return e(t, r, Ic.apply(void 0, yn([o], i, !1)));
	};
	return (
		(n.attrs = function (o) {
			return va(e, t, Ye(Ye({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
		}),
		(n.withConfig = function (o) {
			return va(e, t, Ye(Ye({}, r), o));
		}),
		n
	);
}
var _c = function (e) {
		return va(xd, e);
	},
	Cd = _c;
bc.forEach(function (e) {
	Cd[e] = _c(e);
});
var Ed = (function () {
	function e(t, r) {
		(this.rules = t), (this.componentId = r), (this.isStatic = Mc(t)), $o.registerId(this.componentId + 1);
	}
	return (
		(e.prototype.createStyles = function (t, r, n, o) {
			var i = o(ua(rr(this.rules, r, n, o)), ""),
				a = this.componentId + t;
			n.insertRules(a, a, i);
		}),
		(e.prototype.removeStyles = function (t, r) {
			r.clearRules(this.componentId + t);
		}),
		(e.prototype.renderStyles = function (t, r, n, o) {
			t > 2 && $o.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, o);
		}),
		e
	);
})();
function Sy(e) {
	for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
	var n = Ic.apply(void 0, yn([e], t, !1)),
		o = "sc-global-".concat(wc(JSON.stringify(n))),
		i = new Ed(n, o),
		a = function (l) {
			var c = ha(),
				u = X.useContext(ts),
				d = X.useRef(c.styleSheet.allocateGSInstance(o)).current;
			return (
				c.styleSheet.server && s(d, l, c.styleSheet, u, c.stylis),
				X.useLayoutEffect(
					function () {
						if (!c.styleSheet.server)
							return (
								s(d, l, c.styleSheet, u, c.stylis),
								function () {
									return i.removeStyles(d, c.styleSheet);
								}
							);
					},
					[d, l, c.styleSheet, u, c.stylis],
				),
				null
			);
		};
	function s(l, c, u, d, h) {
		if (i.isStatic) i.renderStyles(l, Wf, u, h);
		else {
			var b = Ye(Ye({}, c), { theme: pc(c, d, a.defaultProps) });
			i.renderStyles(l, b, u, h);
		}
	}
	return X.memo(a);
}
function ga(e, t) {
	return (
		(ga = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (r, n) {
					return (r.__proto__ = n), r;
				}),
		ga(e, t)
	);
}
function Wo(e, t) {
	if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
	(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
		Object.defineProperty(e, "prototype", { writable: !1 }),
		t && ga(e, t);
}
function Oo(e) {
	return (
		(Oo = Object.setPrototypeOf
			? Object.getPrototypeOf.bind()
			: function (t) {
					return t.__proto__ || Object.getPrototypeOf(t);
				}),
		Oo(e)
	);
}
function Fc() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	} catch {}
	return (Fc = function () {
		return !!e;
	})();
}
function be(e) {
	if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function $d(e, t) {
	if (t && (pe(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
	return be(e);
}
function Go(e) {
	var t = Fc();
	return function () {
		var r,
			n = Oo(e);
		if (t) {
			var o = Oo(this).constructor;
			r = Reflect.construct(n, arguments, o);
		} else r = n.apply(this, arguments);
		return $d(this, r);
	};
}
var jc = { exports: {} };
(function (e) {
	(function () {
		var t = {}.hasOwnProperty;
		function r() {
			for (var n = [], o = 0; o < arguments.length; o++) {
				var i = arguments[o];
				if (i) {
					var a = typeof i;
					if (a === "string" || a === "number") n.push(i);
					else if (Array.isArray(i)) {
						if (i.length) {
							var s = r.apply(null, i);
							s && n.push(s);
						}
					} else if (a === "object") {
						if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
							n.push(i.toString());
							continue;
						}
						for (var l in i) t.call(i, l) && i[l] && n.push(l);
					}
				}
			}
			return n.join(" ");
		}
		e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
	})();
})(jc);
var Od = jc.exports;
const ce = oc(Od);
var Rd = Symbol.for("react.element"),
	Pd = Symbol.for("react.transitional.element"),
	Td = Symbol.for("react.fragment");
function Lc(e) {
	return e && pe(e) === "object" && (e.$$typeof === Rd || e.$$typeof === Pd) && e.type === Td;
}
function Kr(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = [];
	return (
		X.Children.forEach(e, function (n) {
			(n == null && !t.keepEmpty) ||
				(Array.isArray(n)
					? (r = r.concat(Kr(n)))
					: Lc(n) && n.props
						? (r = r.concat(Kr(n.props.children, t)))
						: r.push(n));
		}),
		r
	);
}
var ma = {},
	Ad = function (t) {};
function Md(e, t) {}
function Id(e, t) {}
function _d() {
	ma = {};
}
function zc(e, t, r) {
	!t && !ma[r] && (e(!1, r), (ma[r] = !0));
}
function gt(e, t) {
	zc(Md, e, t);
}
function Fd(e, t) {
	zc(Id, e, t);
}
gt.preMessage = Ad;
gt.resetWarned = _d;
gt.noteOnce = Fd;
function P(e, t, r) {
	return (
		(t = ic(t)) in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	);
}
function Ns(e, t) {
	var r = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		t &&
			(n = n.filter(function (o) {
				return Object.getOwnPropertyDescriptor(e, o).enumerable;
			})),
			r.push.apply(r, n);
	}
	return r;
}
function z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var r = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Ns(Object(r), !0).forEach(function (n) {
					P(e, n, r[n]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
				: Ns(Object(r)).forEach(function (n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
					});
	}
	return e;
}
function Cn(e) {
	return e instanceof HTMLElement || e instanceof SVGElement;
}
function jd(e) {
	return e && pe(e) === "object" && Cn(e.nativeElement) ? e.nativeElement : Cn(e) ? e : null;
}
function wo(e) {
	var t = jd(e);
	if (t) return t;
	if (e instanceof X.Component) {
		var r;
		return (r = Es.findDOMNode) === null || r === void 0 ? void 0 : r.call(Es, e);
	}
	return null;
}
var Nc = { exports: {} },
	Ce = {};
var rs = Symbol.for("react.element"),
	ns = Symbol.for("react.portal"),
	qo = Symbol.for("react.fragment"),
	Uo = Symbol.for("react.strict_mode"),
	Ko = Symbol.for("react.profiler"),
	Xo = Symbol.for("react.provider"),
	Yo = Symbol.for("react.context"),
	Ld = Symbol.for("react.server_context"),
	Zo = Symbol.for("react.forward_ref"),
	Qo = Symbol.for("react.suspense"),
	Jo = Symbol.for("react.suspense_list"),
	ei = Symbol.for("react.memo"),
	ti = Symbol.for("react.lazy"),
	zd = Symbol.for("react.offscreen"),
	kc;
kc = Symbol.for("react.module.reference");
function $t(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case rs:
				switch (((e = e.type), e)) {
					case qo:
					case Ko:
					case Uo:
					case Qo:
					case Jo:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case Ld:
							case Yo:
							case Zo:
							case ti:
							case ei:
							case Xo:
								return e;
							default:
								return t;
						}
				}
			case ns:
				return t;
		}
	}
}
Ce.ContextConsumer = Yo;
Ce.ContextProvider = Xo;
Ce.Element = rs;
Ce.ForwardRef = Zo;
Ce.Fragment = qo;
Ce.Lazy = ti;
Ce.Memo = ei;
Ce.Portal = ns;
Ce.Profiler = Ko;
Ce.StrictMode = Uo;
Ce.Suspense = Qo;
Ce.SuspenseList = Jo;
Ce.isAsyncMode = function () {
	return !1;
};
Ce.isConcurrentMode = function () {
	return !1;
};
Ce.isContextConsumer = function (e) {
	return $t(e) === Yo;
};
Ce.isContextProvider = function (e) {
	return $t(e) === Xo;
};
Ce.isElement = function (e) {
	return typeof e == "object" && e !== null && e.$$typeof === rs;
};
Ce.isForwardRef = function (e) {
	return $t(e) === Zo;
};
Ce.isFragment = function (e) {
	return $t(e) === qo;
};
Ce.isLazy = function (e) {
	return $t(e) === ti;
};
Ce.isMemo = function (e) {
	return $t(e) === ei;
};
Ce.isPortal = function (e) {
	return $t(e) === ns;
};
Ce.isProfiler = function (e) {
	return $t(e) === Ko;
};
Ce.isStrictMode = function (e) {
	return $t(e) === Uo;
};
Ce.isSuspense = function (e) {
	return $t(e) === Qo;
};
Ce.isSuspenseList = function (e) {
	return $t(e) === Jo;
};
Ce.isValidElementType = function (e) {
	return (
		typeof e == "string" ||
		typeof e == "function" ||
		e === qo ||
		e === Ko ||
		e === Uo ||
		e === Qo ||
		e === Jo ||
		e === zd ||
		(typeof e == "object" &&
			e !== null &&
			(e.$$typeof === ti ||
				e.$$typeof === ei ||
				e.$$typeof === Xo ||
				e.$$typeof === Yo ||
				e.$$typeof === Zo ||
				e.$$typeof === kc ||
				e.getModuleId !== void 0))
	);
};
Ce.typeOf = $t;
Nc.exports = Ce;
var Ii = Nc.exports;
function os(e, t, r) {
	var n = f.useRef({});
	return (
		(!("value" in n.current) || r(n.current.condition, t)) && ((n.current.value = e()), (n.current.condition = t)),
		n.current.value
	);
}
var Nd = Number(f.version.split(".")[0]),
	is = function (t, r) {
		typeof t == "function" ? t(r) : pe(t) === "object" && t && "current" in t && (t.current = r);
	},
	en = function () {
		for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
		var o = r.filter(Boolean);
		return o.length <= 1
			? o[0]
			: function (i) {
					r.forEach(function (a) {
						is(a, i);
					});
				};
	},
	as = function () {
		for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
		return os(
			function () {
				return en.apply(void 0, r);
			},
			r,
			function (o, i) {
				return (
					o.length !== i.length ||
					o.every(function (a, s) {
						return a !== i[s];
					})
				);
			},
		);
	},
	In = function (t) {
		var r, n;
		if (!t) return !1;
		if (Hc(t) && Nd >= 19) return !0;
		var o = Ii.isMemo(t) ? t.type.type : t.type;
		return !(
			(typeof o == "function" &&
				!((r = o.prototype) !== null && r !== void 0 && r.render) &&
				o.$$typeof !== Ii.ForwardRef) ||
			(typeof t == "function" &&
				!((n = t.prototype) !== null && n !== void 0 && n.render) &&
				t.$$typeof !== Ii.ForwardRef)
		);
	};
function Hc(e) {
	return f.isValidElement(e) && !Lc(e);
}
var Dc = function (t) {
		if (t && Hc(t)) {
			var r = t;
			return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
		}
		return null;
	},
	pa = f.createContext(null);
function kd(e) {
	var t = e.children,
		r = e.onBatchResize,
		n = f.useRef(0),
		o = f.useRef([]),
		i = f.useContext(pa),
		a = f.useCallback(
			function (s, l, c) {
				n.current += 1;
				var u = n.current;
				o.current.push({ size: s, element: l, data: c }),
					Promise.resolve().then(function () {
						u === n.current && (r?.(o.current), (o.current = []));
					}),
					i?.(s, l, c);
			},
			[r, i],
		);
	return f.createElement(pa.Provider, { value: a }, t);
}
var Bc = (function () {
		if (typeof Map < "u") return Map;
		function e(t, r) {
			var n = -1;
			return (
				t.some(function (o, i) {
					return o[0] === r ? ((n = i), !0) : !1;
				}),
				n
			);
		}
		return (function () {
			function t() {
				this.__entries__ = [];
			}
			return (
				Object.defineProperty(t.prototype, "size", {
					get: function () {
						return this.__entries__.length;
					},
					enumerable: !0,
					configurable: !0,
				}),
				(t.prototype.get = function (r) {
					var n = e(this.__entries__, r),
						o = this.__entries__[n];
					return o && o[1];
				}),
				(t.prototype.set = function (r, n) {
					var o = e(this.__entries__, r);
					~o ? (this.__entries__[o][1] = n) : this.__entries__.push([r, n]);
				}),
				(t.prototype.delete = function (r) {
					var n = this.__entries__,
						o = e(n, r);
					~o && n.splice(o, 1);
				}),
				(t.prototype.has = function (r) {
					return !!~e(this.__entries__, r);
				}),
				(t.prototype.clear = function () {
					this.__entries__.splice(0);
				}),
				(t.prototype.forEach = function (r, n) {
					n === void 0 && (n = null);
					for (var o = 0, i = this.__entries__; o < i.length; o++) {
						var a = i[o];
						r.call(n, a[1], a[0]);
					}
				}),
				t
			);
		})();
	})(),
	ba = typeof window < "u" && typeof document < "u" && window.document === document,
	Ro = (function () {
		return typeof global < "u" && global.Math === Math
			? global
			: typeof self < "u" && self.Math === Math
				? self
				: typeof window < "u" && window.Math === Math
					? window
					: Function("return this")();
	})(),
	Hd = (function () {
		return typeof requestAnimationFrame == "function"
			? requestAnimationFrame.bind(Ro)
			: function (e) {
					return setTimeout(function () {
						return e(Date.now());
					}, 1e3 / 60);
				};
	})(),
	Dd = 2;
function Bd(e, t) {
	var r = !1,
		n = !1,
		o = 0;
	function i() {
		r && ((r = !1), e()), n && s();
	}
	function a() {
		Hd(i);
	}
	function s() {
		var l = Date.now();
		if (r) {
			if (l - o < Dd) return;
			n = !0;
		} else (r = !0), (n = !1), setTimeout(a, t);
		o = l;
	}
	return s;
}
var Vd = 20,
	Wd = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
	Gd = typeof MutationObserver < "u",
	qd = (function () {
		function e() {
			(this.connected_ = !1),
				(this.mutationEventsAdded_ = !1),
				(this.mutationsObserver_ = null),
				(this.observers_ = []),
				(this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
				(this.refresh = Bd(this.refresh.bind(this), Vd));
		}
		return (
			(e.prototype.addObserver = function (t) {
				~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
			}),
			(e.prototype.removeObserver = function (t) {
				var r = this.observers_,
					n = r.indexOf(t);
				~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
			}),
			(e.prototype.refresh = function () {
				var t = this.updateObservers_();
				t && this.refresh();
			}),
			(e.prototype.updateObservers_ = function () {
				var t = this.observers_.filter(function (r) {
					return r.gatherActive(), r.hasActive();
				});
				return (
					t.forEach(function (r) {
						return r.broadcastActive();
					}),
					t.length > 0
				);
			}),
			(e.prototype.connect_ = function () {
				!ba ||
					this.connected_ ||
					(document.addEventListener("transitionend", this.onTransitionEnd_),
					window.addEventListener("resize", this.refresh),
					Gd
						? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
							this.mutationsObserver_.observe(document, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0,
							}))
						: (document.addEventListener("DOMSubtreeModified", this.refresh), (this.mutationEventsAdded_ = !0)),
					(this.connected_ = !0));
			}),
			(e.prototype.disconnect_ = function () {
				!ba ||
					!this.connected_ ||
					(document.removeEventListener("transitionend", this.onTransitionEnd_),
					window.removeEventListener("resize", this.refresh),
					this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
					this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
					(this.mutationsObserver_ = null),
					(this.mutationEventsAdded_ = !1),
					(this.connected_ = !1));
			}),
			(e.prototype.onTransitionEnd_ = function (t) {
				var r = t.propertyName,
					n = r === void 0 ? "" : r,
					o = Wd.some(function (i) {
						return !!~n.indexOf(i);
					});
				o && this.refresh();
			}),
			(e.getInstance = function () {
				return this.instance_ || (this.instance_ = new e()), this.instance_;
			}),
			(e.instance_ = null),
			e
		);
	})(),
	Vc = function (e, t) {
		for (var r = 0, n = Object.keys(t); r < n.length; r++) {
			var o = n[r];
			Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
		}
		return e;
	},
	Xr = function (e) {
		var t = e && e.ownerDocument && e.ownerDocument.defaultView;
		return t || Ro;
	},
	Wc = ri(0, 0, 0, 0);
function Po(e) {
	return parseFloat(e) || 0;
}
function ks(e) {
	for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
	return t.reduce(function (n, o) {
		var i = e["border-" + o + "-width"];
		return n + Po(i);
	}, 0);
}
function Ud(e) {
	for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
		var i = o[n],
			a = e["padding-" + i];
		r[i] = Po(a);
	}
	return r;
}
function Kd(e) {
	var t = e.getBBox();
	return ri(0, 0, t.width, t.height);
}
function Xd(e) {
	var t = e.clientWidth,
		r = e.clientHeight;
	if (!t && !r) return Wc;
	var n = Xr(e).getComputedStyle(e),
		o = Ud(n),
		i = o.left + o.right,
		a = o.top + o.bottom,
		s = Po(n.width),
		l = Po(n.height);
	if (
		(n.boxSizing === "border-box" &&
			(Math.round(s + i) !== t && (s -= ks(n, "left", "right") + i),
			Math.round(l + a) !== r && (l -= ks(n, "top", "bottom") + a)),
		!Zd(e))
	) {
		var c = Math.round(s + i) - t,
			u = Math.round(l + a) - r;
		Math.abs(c) !== 1 && (s -= c), Math.abs(u) !== 1 && (l -= u);
	}
	return ri(o.left, o.top, s, l);
}
var Yd = (function () {
	return typeof SVGGraphicsElement < "u"
		? function (e) {
				return e instanceof Xr(e).SVGGraphicsElement;
			}
		: function (e) {
				return e instanceof Xr(e).SVGElement && typeof e.getBBox == "function";
			};
})();
function Zd(e) {
	return e === Xr(e).document.documentElement;
}
function Qd(e) {
	return ba ? (Yd(e) ? Kd(e) : Xd(e)) : Wc;
}
function Jd(e) {
	var t = e.x,
		r = e.y,
		n = e.width,
		o = e.height,
		i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
		a = Object.create(i.prototype);
	return Vc(a, { x: t, y: r, width: n, height: o, top: r, right: t + n, bottom: o + r, left: t }), a;
}
function ri(e, t, r, n) {
	return { x: e, y: t, width: r, height: n };
}
var eh = (function () {
		function e(t) {
			(this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = ri(0, 0, 0, 0)), (this.target = t);
		}
		return (
			(e.prototype.isActive = function () {
				var t = Qd(this.target);
				return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
			}),
			(e.prototype.broadcastRect = function () {
				var t = this.contentRect_;
				return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
			}),
			e
		);
	})(),
	th = (function () {
		function e(t, r) {
			var n = Jd(r);
			Vc(this, { target: t, contentRect: n });
		}
		return e;
	})(),
	rh = (function () {
		function e(t, r, n) {
			if (((this.activeObservations_ = []), (this.observations_ = new Bc()), typeof t != "function"))
				throw new TypeError("The callback provided as parameter 1 is not a function.");
			(this.callback_ = t), (this.controller_ = r), (this.callbackCtx_ = n);
		}
		return (
			(e.prototype.observe = function (t) {
				if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
				if (!(typeof Element > "u" || !(Element instanceof Object))) {
					if (!(t instanceof Xr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
					var r = this.observations_;
					r.has(t) || (r.set(t, new eh(t)), this.controller_.addObserver(this), this.controller_.refresh());
				}
			}),
			(e.prototype.unobserve = function (t) {
				if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
				if (!(typeof Element > "u" || !(Element instanceof Object))) {
					if (!(t instanceof Xr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
					var r = this.observations_;
					r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
				}
			}),
			(e.prototype.disconnect = function () {
				this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
			}),
			(e.prototype.gatherActive = function () {
				var t = this;
				this.clearActive(),
					this.observations_.forEach(function (r) {
						r.isActive() && t.activeObservations_.push(r);
					});
			}),
			(e.prototype.broadcastActive = function () {
				if (this.hasActive()) {
					var t = this.callbackCtx_,
						r = this.activeObservations_.map(function (n) {
							return new th(n.target, n.broadcastRect());
						});
					this.callback_.call(t, r, t), this.clearActive();
				}
			}),
			(e.prototype.clearActive = function () {
				this.activeObservations_.splice(0);
			}),
			(e.prototype.hasActive = function () {
				return this.activeObservations_.length > 0;
			}),
			e
		);
	})(),
	Gc = typeof WeakMap < "u" ? new WeakMap() : new Bc(),
	qc = (function () {
		function e(t) {
			if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
			if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
			var r = qd.getInstance(),
				n = new rh(t, r, this);
			Gc.set(this, n);
		}
		return e;
	})();
["observe", "unobserve", "disconnect"].forEach(function (e) {
	qc.prototype[e] = function () {
		var t;
		return (t = Gc.get(this))[e].apply(t, arguments);
	};
});
var nh = (function () {
		return typeof Ro.ResizeObserver < "u" ? Ro.ResizeObserver : qc;
	})(),
	er = new Map();
function oh(e) {
	e.forEach(function (t) {
		var r,
			n = t.target;
		(r = er.get(n)) === null ||
			r === void 0 ||
			r.forEach(function (o) {
				return o(n);
			});
	});
}
var Uc = new nh(oh);
function ih(e, t) {
	er.has(e) || (er.set(e, new Set()), Uc.observe(e)), er.get(e).add(t);
}
function ah(e, t) {
	er.has(e) && (er.get(e).delete(t), er.get(e).size || (Uc.unobserve(e), er.delete(e)));
}
var sh = (function (e) {
	Wo(r, e);
	var t = Go(r);
	function r() {
		return Lt(this, r), t.apply(this, arguments);
	}
	return (
		zt(r, [
			{
				key: "render",
				value: function () {
					return this.props.children;
				},
			},
		]),
		r
	);
})(f.Component);
function lh(e, t) {
	var r = e.children,
		n = e.disabled,
		o = f.useRef(null),
		i = f.useRef(null),
		a = f.useContext(pa),
		s = typeof r == "function",
		l = s ? r(o) : r,
		c = f.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
		u = !s && f.isValidElement(l) && In(l),
		d = u ? Dc(l) : null,
		h = as(d, o),
		b = function () {
			var y;
			return (
				wo(o.current) ||
				(o.current && pe(o.current) === "object"
					? wo((y = o.current) === null || y === void 0 ? void 0 : y.nativeElement)
					: null) ||
				wo(i.current)
			);
		};
	f.useImperativeHandle(t, function () {
		return b();
	});
	var m = f.useRef(e);
	m.current = e;
	var v = f.useCallback(function (p) {
		var y = m.current,
			S = y.onResize,
			g = y.data,
			w = p.getBoundingClientRect(),
			E = w.width,
			C = w.height,
			x = p.offsetWidth,
			I = p.offsetHeight,
			T = Math.floor(E),
			A = Math.floor(C);
		if (
			c.current.width !== T ||
			c.current.height !== A ||
			c.current.offsetWidth !== x ||
			c.current.offsetHeight !== I
		) {
			var M = { width: T, height: A, offsetWidth: x, offsetHeight: I };
			c.current = M;
			var _ = x === Math.round(E) ? E : x,
				F = I === Math.round(C) ? C : I,
				k = z(z({}, M), {}, { offsetWidth: _, offsetHeight: F });
			a?.(k, p, g),
				S &&
					Promise.resolve().then(function () {
						S(k, p);
					});
		}
	}, []);
	return (
		f.useEffect(
			function () {
				var p = b();
				return (
					p && !n && ih(p, v),
					function () {
						return ah(p, v);
					}
				);
			},
			[o.current, n],
		),
		f.createElement(sh, { ref: i }, u ? f.cloneElement(l, { ref: h }) : l)
	);
}
var ch = f.forwardRef(lh),
	uh = "rc-observer-key";
function fh(e, t) {
	var r = e.children,
		n = typeof r == "function" ? [r] : Kr(r);
	return n.map(function (o, i) {
		var a = o?.key || "".concat(uh, "-").concat(i);
		return f.createElement(ch, Te({}, e, { key: a, ref: i === 0 ? t : void 0 }), o);
	});
}
var _n = f.forwardRef(fh);
_n.Collection = kd;
function ss(e, t) {
	var r = Object.assign({}, e);
	return (
		Array.isArray(t) &&
			t.forEach(function (n) {
				delete r[n];
			}),
		r
	);
}
function ya(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
	return n;
}
function dh(e) {
	if (Array.isArray(e)) return ya(e);
}
function Kc(e) {
	if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function ls(e, t) {
	if (e) {
		if (typeof e == "string") return ya(e, t);
		var r = {}.toString.call(e).slice(8, -1);
		return (
			r === "Object" && e.constructor && (r = e.constructor.name),
			r === "Map" || r === "Set"
				? Array.from(e)
				: r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
					? ya(e, t)
					: void 0
		);
	}
}
function hh() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function te(e) {
	return dh(e) || Kc(e) || ls(e) || hh();
}
var Xc = function (t) {
		return +setTimeout(t, 16);
	},
	Yc = function (t) {
		return clearTimeout(t);
	};
typeof window < "u" &&
	"requestAnimationFrame" in window &&
	((Xc = function (t) {
		return window.requestAnimationFrame(t);
	}),
	(Yc = function (t) {
		return window.cancelAnimationFrame(t);
	}));
var Hs = 0,
	cs = new Map();
function Zc(e) {
	cs.delete(e);
}
var Ft = function (t) {
	var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
	Hs += 1;
	var n = Hs;
	function o(i) {
		if (i === 0) Zc(n), t();
		else {
			var a = Xc(function () {
				o(i - 1);
			});
			cs.set(n, a);
		}
	}
	return o(r), n;
};
Ft.cancel = function (e) {
	var t = cs.get(e);
	return Zc(e), Yc(t);
};
function us(e) {
	for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
		(r =
			(e.charCodeAt(n) & 255) |
			((e.charCodeAt(++n) & 255) << 8) |
			((e.charCodeAt(++n) & 255) << 16) |
			((e.charCodeAt(++n) & 255) << 24)),
			(r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
			(r ^= r >>> 24),
			(t =
				((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
				((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
	switch (o) {
		case 3:
			t ^= (e.charCodeAt(n + 2) & 255) << 16;
		case 2:
			t ^= (e.charCodeAt(n + 1) & 255) << 8;
		case 1:
			(t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
	}
	return (
		(t ^= t >>> 13),
		(t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
		((t ^ (t >>> 15)) >>> 0).toString(36)
	);
}
function vh(e, t) {
	if (e == null) return {};
	var r = {};
	for (var n in e)
		if ({}.hasOwnProperty.call(e, n)) {
			if (t.indexOf(n) !== -1) continue;
			r[n] = e[n];
		}
	return r;
}
function Et(e, t) {
	if (e == null) return {};
	var r,
		n,
		o = vh(e, t);
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(e);
		for (n = 0; n < i.length; n++)
			(r = i[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
	}
	return o;
}
function Qc(e, t) {
	var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
		n = new Set();
	function o(i, a) {
		var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
			l = n.has(i);
		if ((gt(!l, "Warning: There may be circular references"), l)) return !1;
		if (i === a) return !0;
		if (r && s > 1) return !1;
		n.add(i);
		var c = s + 1;
		if (Array.isArray(i)) {
			if (!Array.isArray(a) || i.length !== a.length) return !1;
			for (var u = 0; u < i.length; u++) if (!o(i[u], a[u], c)) return !1;
			return !0;
		}
		if (i && a && pe(i) === "object" && pe(a) === "object") {
			var d = Object.keys(i);
			return d.length !== Object.keys(a).length
				? !1
				: d.every(function (h) {
						return o(i[h], a[h], c);
					});
		}
		return !1;
	}
	return o(e, t);
}
var Ds = "%",
	gh = (function () {
		function e(t) {
			Lt(this, e), P(this, "instanceId", void 0), P(this, "cache", new Map()), (this.instanceId = t);
		}
		return (
			zt(e, [
				{
					key: "get",
					value: function (r) {
						return this.cache.get(r.join(Ds)) || null;
					},
				},
				{
					key: "update",
					value: function (r, n) {
						var o = r.join(Ds),
							i = this.cache.get(o),
							a = n(i);
						a === null ? this.cache.delete(o) : this.cache.set(o, a);
					},
				},
			]),
			e
		);
	})(),
	Sa = "data-token-hash",
	pr = "data-css-hash",
	Nr = "__cssinjs_instance__";
function mh() {
	var e = Math.random().toString(12).slice(2);
	if (typeof document < "u" && document.head && document.body) {
		var t = document.body.querySelectorAll("style[".concat(pr, "]")) || [],
			r = document.head.firstChild;
		Array.from(t).forEach(function (o) {
			(o[Nr] = o[Nr] || e), o[Nr] === e && document.head.insertBefore(o, r);
		});
		var n = {};
		Array.from(document.querySelectorAll("style[".concat(pr, "]"))).forEach(function (o) {
			var i = o.getAttribute(pr);
			if (n[i]) {
				if (o[Nr] === e) {
					var a;
					(a = o.parentNode) === null || a === void 0 || a.removeChild(o);
				}
			} else n[i] = !0;
		});
	}
	return new gh(e);
}
var fs = f.createContext({ hashPriority: "low", cache: mh(), defaultCache: !0 });
function et() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ph(e, t) {
	if (!e) return !1;
	if (e.contains) return e.contains(t);
	for (var r = t; r; ) {
		if (r === e) return !0;
		r = r.parentNode;
	}
	return !1;
}
var Bs = "data-rc-order",
	Vs = "data-rc-priority",
	bh = "rc-util-key",
	wa = new Map();
function Jc() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
		t = e.mark;
	return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : bh;
}
function ni(e) {
	if (e.attachTo) return e.attachTo;
	var t = document.querySelector("head");
	return t || document.body;
}
function yh(e) {
	return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ds(e) {
	return Array.from((wa.get(e) || e).children).filter(function (t) {
		return t.tagName === "STYLE";
	});
}
function eu(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (!et()) return null;
	var r = t.csp,
		n = t.prepend,
		o = t.priority,
		i = o === void 0 ? 0 : o,
		a = yh(n),
		s = a === "prependQueue",
		l = document.createElement("style");
	l.setAttribute(Bs, a),
		s && i && l.setAttribute(Vs, "".concat(i)),
		r != null && r.nonce && (l.nonce = r?.nonce),
		(l.innerHTML = e);
	var c = ni(t),
		u = c.firstChild;
	if (n) {
		if (s) {
			var d = (t.styles || ds(c)).filter(function (h) {
				if (!["prepend", "prependQueue"].includes(h.getAttribute(Bs))) return !1;
				var b = Number(h.getAttribute(Vs) || 0);
				return i >= b;
			});
			if (d.length) return c.insertBefore(l, d[d.length - 1].nextSibling), l;
		}
		c.insertBefore(l, u);
	} else c.appendChild(l);
	return l;
}
function tu(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = ni(t);
	return (t.styles || ds(r)).find(function (n) {
		return n.getAttribute(Jc(t)) === e;
	});
}
function En(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = tu(e, t);
	if (r) {
		var n = ni(t);
		n.removeChild(r);
	}
}
function Sh(e, t) {
	var r = wa.get(e);
	if (!r || !ph(document, r)) {
		var n = eu("", t),
			o = n.parentNode;
		wa.set(e, o), e.removeChild(n);
	}
}
function Sr(e, t) {
	var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
		n = ni(r),
		o = ds(n),
		i = z(z({}, r), {}, { styles: o });
	Sh(n, i);
	var a = tu(t, i);
	if (a) {
		var s, l;
		if (
			(s = i.csp) !== null &&
			s !== void 0 &&
			s.nonce &&
			a.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)
		) {
			var c;
			a.nonce = (c = i.csp) === null || c === void 0 ? void 0 : c.nonce;
		}
		return a.innerHTML !== e && (a.innerHTML = e), a;
	}
	var u = eu(e, i);
	return u.setAttribute(Jc(i), t), u;
}
function ru(e) {
	if (Array.isArray(e)) return e;
}
function wh(e, t) {
	var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (r != null) {
		var n,
			o,
			i,
			a,
			s = [],
			l = !0,
			c = !1;
		try {
			if (((i = (r = r.call(e)).next), t === 0)) {
				if (Object(r) !== r) return;
				l = !1;
			} else for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
		} catch (u) {
			(c = !0), (o = u);
		} finally {
			try {
				if (!l && r.return != null && ((a = r.return()), Object(a) !== a)) return;
			} finally {
				if (c) throw o;
			}
		}
		return s;
	}
}
function nu() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W(e, t) {
	return ru(e) || wh(e, t) || ls(e, t) || nu();
}
function xh(e, t) {
	if (e.length !== t.length) return !1;
	for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
	return !0;
}
var hs = (function () {
	function e() {
		Lt(this, e),
			P(this, "cache", void 0),
			P(this, "keys", void 0),
			P(this, "cacheCallTimes", void 0),
			(this.cache = new Map()),
			(this.keys = []),
			(this.cacheCallTimes = 0);
	}
	return (
		zt(e, [
			{
				key: "size",
				value: function () {
					return this.keys.length;
				},
			},
			{
				key: "internalGet",
				value: function (r) {
					var n,
						o,
						i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
						a = { map: this.cache };
					return (
						r.forEach(function (s) {
							if (!a) a = void 0;
							else {
								var l, c;
								a = (l = a) === null || l === void 0 || (c = l.map) === null || c === void 0 ? void 0 : c.get(s);
							}
						}),
						(n = a) !== null && n !== void 0 && n.value && i && (a.value[1] = this.cacheCallTimes++),
						(o = a) === null || o === void 0 ? void 0 : o.value
					);
				},
			},
			{
				key: "get",
				value: function (r) {
					var n;
					return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
				},
			},
			{
				key: "has",
				value: function (r) {
					return !!this.internalGet(r);
				},
			},
			{
				key: "set",
				value: function (r, n) {
					var o = this;
					if (!this.has(r)) {
						if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
							var i = this.keys.reduce(
									function (c, u) {
										var d = W(c, 2),
											h = d[1];
										return o.internalGet(u)[1] < h ? [u, o.internalGet(u)[1]] : c;
									},
									[this.keys[0], this.cacheCallTimes],
								),
								a = W(i, 1),
								s = a[0];
							this.delete(s);
						}
						this.keys.push(r);
					}
					var l = this.cache;
					r.forEach(function (c, u) {
						if (u === r.length - 1) l.set(c, { value: [n, o.cacheCallTimes++] });
						else {
							var d = l.get(c);
							d ? d.map || (d.map = new Map()) : l.set(c, { map: new Map() }), (l = l.get(c).map);
						}
					});
				},
			},
			{
				key: "deleteByPath",
				value: function (r, n) {
					var o = r.get(n[0]);
					if (n.length === 1) {
						var i;
						return (
							o.map ? r.set(n[0], { map: o.map }) : r.delete(n[0]),
							(i = o.value) === null || i === void 0 ? void 0 : i[0]
						);
					}
					var a = this.deleteByPath(o.map, n.slice(1));
					return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), a;
				},
			},
			{
				key: "delete",
				value: function (r) {
					if (this.has(r))
						return (
							(this.keys = this.keys.filter(function (n) {
								return !xh(n, r);
							})),
							this.deleteByPath(this.cache, r)
						);
				},
			},
		]),
		e
	);
})();
P(hs, "MAX_CACHE_SIZE", 20);
P(hs, "MAX_CACHE_OFFSET", 5);
var Ws = 0,
	ou = (function () {
		function e(t) {
			Lt(this, e),
				P(this, "derivatives", void 0),
				P(this, "id", void 0),
				(this.derivatives = Array.isArray(t) ? t : [t]),
				(this.id = Ws),
				t.length === 0 && (t.length > 0, void 0),
				(Ws += 1);
		}
		return (
			zt(e, [
				{
					key: "getDerivativeToken",
					value: function (r) {
						return this.derivatives.reduce(
							function (n, o) {
								return o(r, n);
							},
							void 0,
						);
					},
				},
			]),
			e
		);
	})(),
	_i = new hs();
function xa(e) {
	var t = Array.isArray(e) ? e : [e];
	return _i.has(t) || _i.set(t, new ou(t)), _i.get(t);
}
var Ch = new WeakMap(),
	Fi = {};
function Eh(e, t) {
	for (var r = Ch, n = 0; n < t.length; n += 1) {
		var o = t[n];
		r.has(o) || r.set(o, new WeakMap()), (r = r.get(o));
	}
	return r.has(Fi) || r.set(Fi, e()), r.get(Fi);
}
var Gs = new WeakMap();
function To(e) {
	var t = Gs.get(e) || "";
	return (
		t ||
			(Object.keys(e).forEach(function (r) {
				var n = e[r];
				(t += r), n instanceof ou ? (t += n.id) : n && pe(n) === "object" ? (t += To(n)) : (t += n);
			}),
			Gs.set(e, t)),
		t
	);
}
function $h(e, t) {
	return us("".concat(t, "_").concat(To(e)));
}
var mn = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""),
	iu = "_bAmBoO_";
function Oh(e, t, r) {
	if (et()) {
		var n, o;
		Sr(e, mn);
		var i = document.createElement("div");
		(i.style.position = "fixed"), (i.style.left = "0"), (i.style.top = "0"), t?.(i), document.body.appendChild(i);
		var a = (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(iu);
		return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), En(mn), a;
	}
	return !1;
}
var ji = void 0;
function Rh() {
	return (
		ji === void 0 &&
			(ji = Oh("@layer ".concat(mn, " { .").concat(mn, ' { content: "').concat(iu, '"!important; } }'), function (e) {
				e.className = mn;
			})),
		ji
	);
}
var qs = et() ? f.useLayoutEffect : f.useEffect,
	je = function (t, r) {
		var n = f.useRef(!0);
		qs(function () {
			return t(n.current);
		}, r),
			qs(function () {
				return (
					(n.current = !1),
					function () {
						n.current = !0;
					}
				);
			}, []);
	},
	Us = function (t, r) {
		je(function (n) {
			if (!n) return t();
		}, r);
	},
	Ph = z({}, zo),
	Ks = Ph.useInsertionEffect,
	Th = function (t, r, n) {
		f.useMemo(t, n),
			je(function () {
				return r(!0);
			}, n);
	},
	Ah = Ks
		? function (e, t, r) {
				return Ks(function () {
					return e(), t();
				}, r);
			}
		: Th,
	Mh = z({}, zo),
	Ih = Mh.useInsertionEffect,
	_h = function (t) {
		var r = [],
			n = !1;
		function o(i) {
			n || r.push(i);
		}
		return (
			f.useEffect(function () {
				return (
					(n = !1),
					function () {
						(n = !0),
							r.length &&
								r.forEach(function (i) {
									return i();
								});
					}
				);
			}, t),
			o
		);
	},
	Fh = function () {
		return function (t) {
			t();
		};
	},
	jh = typeof Ih < "u" ? _h : Fh;
function au(e, t, r, n, o) {
	var i = f.useContext(fs),
		a = i.cache,
		s = [e].concat(te(t)),
		l = s.join("_"),
		c = jh([l]),
		u = function (m) {
			a.update(s, function (v) {
				var p = v || [],
					y = W(p, 2),
					S = y[0],
					g = S === void 0 ? 0 : S,
					w = y[1],
					E = w,
					C = E || r(),
					x = [g, C];
				return m ? m(x) : x;
			});
		};
	f.useMemo(
		function () {
			u();
		},
		[l],
	);
	var d = a.get(s),
		h = d[1];
	return (
		Ah(
			function () {
				o?.(h);
			},
			function (b) {
				return (
					u(function (m) {
						var v = W(m, 2),
							p = v[0],
							y = v[1];
						return b && p === 0 && o?.(h), [p + 1, y];
					}),
					function () {
						a.update(s, function (m) {
							var v = m || [],
								p = W(v, 2),
								y = p[0],
								S = y === void 0 ? 0 : y,
								g = p[1],
								w = S - 1;
							return w === 0
								? (c(function () {
										return n?.(g, !1);
									}),
									null)
								: [S - 1, g];
						});
					}
				);
			},
			[l],
		),
		h
	);
}
var Lh = {},
	zh = "css",
	dr = new Map();
function Nh(e) {
	dr.set(e, (dr.get(e) || 0) + 1);
}
function kh(e, t) {
	if (typeof document < "u") {
		var r = document.querySelectorAll("style[".concat(Sa, '="').concat(e, '"]'));
		r.forEach(function (n) {
			if (n[Nr] === t) {
				var o;
				(o = n.parentNode) === null || o === void 0 || o.removeChild(n);
			}
		});
	}
}
var Hh = 0;
function Dh(e, t) {
	dr.set(e, (dr.get(e) || 0) - 1);
	var r = Array.from(dr.keys()),
		n = r.filter(function (o) {
			var i = dr.get(o) || 0;
			return i <= 0;
		});
	r.length - n.length > Hh &&
		n.forEach(function (o) {
			kh(o, t), dr.delete(o);
		});
}
var Bh = function (t, r, n, o) {
	var i = n.getDerivativeToken(t),
		a = z(z({}, i), r);
	return o && (a = o(a)), a;
};
function Vh(e, t) {
	var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
		n = f.useContext(fs),
		o = n.cache.instanceId,
		i = r.salt,
		a = i === void 0 ? "" : i,
		s = r.override,
		l = s === void 0 ? Lh : s,
		c = r.formatToken,
		u = r.getComputedToken,
		d = Eh(function () {
			return Object.assign.apply(Object, [{}].concat(te(t)));
		}, t),
		h = To(d),
		b = To(l),
		m = au(
			"token",
			[a, e.id, h, b],
			function () {
				var v = u ? u(d, l, e) : Bh(d, l, e, c),
					p = $h(v, a);
				(v._tokenKey = p), Nh(p);
				var y = "".concat(zh, "-").concat(us(p));
				return (v._hashId = y), [v, y];
			},
			function (v) {
				Dh(v[0]._tokenKey, o);
			},
		);
	return m;
}
var Wh = {
		animationIterationCount: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1,
	},
	Xs = "data-ant-cssinjs-cache-path",
	su = "_FILE_STYLE__",
	br,
	lu = !0;
function Gh() {
	if (!br && ((br = {}), et())) {
		var e = document.createElement("div");
		(e.className = Xs),
			(e.style.position = "fixed"),
			(e.style.visibility = "hidden"),
			(e.style.top = "-9999px"),
			document.body.appendChild(e);
		var t = getComputedStyle(e).content || "";
		(t = t.replace(/^"/, "").replace(/"$/, "")),
			t.split(";").forEach(function (o) {
				var i = o.split(":"),
					a = W(i, 2),
					s = a[0],
					l = a[1];
				br[s] = l;
			});
		var r = document.querySelector("style[".concat(Xs, "]"));
		if (r) {
			var n;
			(lu = !1), (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
		}
		document.body.removeChild(e);
	}
}
function qh(e) {
	return Gh(), !!br[e];
}
function Uh(e) {
	var t = br[e],
		r = null;
	if (t && et())
		if (lu) r = su;
		else {
			var n = document.querySelector("style[".concat(pr, '="').concat(br[e], '"]'));
			n ? (r = n.innerHTML) : delete br[e];
		}
	return [r, t];
}
var Ys = et(),
	Kh = "_skip_check_",
	cu = "_multi_value_";
function Zs(e) {
	var t = wn(dc(e), vc);
	return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Xh(e) {
	return pe(e) === "object" && e && (Kh in e || cu in e);
}
function Yh(e, t, r) {
	if (!t) return e;
	var n = ".".concat(t),
		o = r === "low" ? ":where(".concat(n, ")") : n,
		i = e.split(",").map(function (a) {
			var s,
				l = a.trim().split(/\s+/),
				c = l[0] || "",
				u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
			return (c = "".concat(u).concat(o).concat(c.slice(u.length))), [c].concat(te(l.slice(1))).join(" ");
		});
	return i.join(",");
}
var Zh = function e(t) {
	var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { root: !0, parentSelectors: [] },
		o = n.root,
		i = n.injectHash,
		a = n.parentSelectors,
		s = r.hashId,
		l = r.layer;
	r.path;
	var c = r.hashPriority,
		u = r.transformers,
		d = u === void 0 ? [] : u;
	r.linters;
	var h = "",
		b = {};
	function m(g) {
		var w = g.getName(s);
		if (!b[w]) {
			var E = e(g.style, r, { root: !1, parentSelectors: a }),
				C = W(E, 1),
				x = C[0];
			b[w] = "@keyframes ".concat(g.getName(s)).concat(x);
		}
	}
	function v(g) {
		var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
		return (
			g.forEach(function (E) {
				Array.isArray(E) ? v(E, w) : E && w.push(E);
			}),
			w
		);
	}
	var p = v(Array.isArray(t) ? t : [t]);
	if (
		(p.forEach(function (g) {
			var w = typeof g == "string" && !o ? {} : g;
			if (typeof w == "string")
				h += "".concat(
					w,
					`
`,
				);
			else if (w._keyframe) m(w);
			else {
				var E = d.reduce(function (C, x) {
					var I;
					return (x == null || (I = x.visit) === null || I === void 0 ? void 0 : I.call(x, C)) || C;
				}, w);
				Object.keys(E).forEach(function (C) {
					var x = E[C];
					if (pe(x) === "object" && x && (C !== "animationName" || !x._keyframe) && !Xh(x)) {
						var I = !1,
							T = C.trim(),
							A = !1;
						(o || i) && s
							? T.startsWith("@")
								? (I = !0)
								: (T = Yh(C, s, c))
							: o && !s && (T === "&" || T === "") && ((T = ""), (A = !0));
						var M = e(x, r, { root: A, injectHash: I, parentSelectors: [].concat(te(a), [T]) }),
							_ = W(M, 2),
							F = _[0],
							k = _[1];
						(b = z(z({}, b), k)), (h += "".concat(T).concat(F));
					} else {
						let $ = function (O, j) {
							var L = O.replace(/[A-Z]/g, function (H) {
									return "-".concat(H.toLowerCase());
								}),
								N = j;
							!Wh[O] && typeof N == "number" && N !== 0 && (N = "".concat(N, "px")),
								O === "animationName" && j !== null && j !== void 0 && j._keyframe && (m(j), (N = j.getName(s))),
								(h += "".concat(L, ":").concat(N, ";"));
						};
						var D,
							R = (D = x?.value) !== null && D !== void 0 ? D : x;
						pe(x) === "object" && x !== null && x !== void 0 && x[cu] && Array.isArray(R)
							? R.forEach(function (O) {
									$(C, O);
								})
							: $(C, R);
					}
				});
			}
		}),
		!o)
	)
		h = "{".concat(h, "}");
	else if (l && Rh()) {
		var y = l.split(","),
			S = y[y.length - 1].trim();
		(h = "@layer ".concat(S, " {").concat(h, "}")), y.length > 1 && (h = "@layer ".concat(l, "{%%%:%}").concat(h));
	}
	return [h, b];
};
function Qh(e, t) {
	return us("".concat(e.join("%")).concat(t));
}
function Jh() {
	return null;
}
function Ca(e, t) {
	var r = e.token,
		n = e.path,
		o = e.hashId,
		i = e.layer,
		a = e.nonce,
		s = e.clientOnly,
		l = e.order,
		c = l === void 0 ? 0 : l,
		u = f.useContext(fs),
		d = u.autoClear;
	u.mock;
	var h = u.defaultCache,
		b = u.hashPriority,
		m = u.container,
		v = u.ssrInline,
		p = u.transformers,
		y = u.linters,
		S = u.cache,
		g = r._tokenKey,
		w = [g].concat(te(n)),
		E = Ys,
		C = au(
			"style",
			w,
			function () {
				var M = w.join("|");
				if (qh(M)) {
					var _ = Uh(M),
						F = W(_, 2),
						k = F[0],
						D = F[1];
					if (k) return [k, g, D, {}, s, c];
				}
				var R = t(),
					$ = Zh(R, { hashId: o, hashPriority: b, layer: i, path: n.join("-"), transformers: p, linters: y }),
					O = W($, 2),
					j = O[0],
					L = O[1],
					N = Zs(j),
					H = Qh(w, N);
				return [N, g, H, L, s, c];
			},
			function (M, _) {
				var F = W(M, 3),
					k = F[2];
				(_ || d) && Ys && En(k, { mark: pr });
			},
			function (M) {
				var _ = W(M, 4),
					F = _[0];
				_[1];
				var k = _[2],
					D = _[3];
				if (E && F !== su) {
					var R = { mark: pr, prepend: "queue", attachTo: m, priority: c },
						$ = typeof a == "function" ? a() : a;
					$ && (R.csp = { nonce: $ });
					var O = Sr(F, k, R);
					(O[Nr] = S.instanceId),
						O.setAttribute(Sa, g),
						Object.keys(D).forEach(function (j) {
							Sr(Zs(D[j]), "_effect-".concat(j), R);
						});
				}
			},
		),
		x = W(C, 3),
		I = x[0],
		T = x[1],
		A = x[2];
	return function (M) {
		var _;
		if (!v || E || !h) _ = f.createElement(Jh, null);
		else {
			var F;
			_ = f.createElement(
				"style",
				Te({}, ((F = {}), P(F, Sa, T), P(F, pr, A), F), { dangerouslySetInnerHTML: { __html: I } }),
			);
		}
		return f.createElement(f.Fragment, null, _, M);
	};
}
var Ot = (function () {
	function e(t, r) {
		Lt(this, e),
			P(this, "name", void 0),
			P(this, "style", void 0),
			P(this, "_keyframe", !0),
			(this.name = t),
			(this.style = r);
	}
	return (
		zt(e, [
			{
				key: "getName",
				value: function () {
					var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
					return r ? "".concat(r, "-").concat(this.name) : this.name;
				},
			},
		]),
		e
	);
})();
function Ar(e) {
	return (e.notSplit = !0), e;
}
Ar(["borderTop", "borderBottom"]),
	Ar(["borderTop"]),
	Ar(["borderBottom"]),
	Ar(["borderLeft", "borderRight"]),
	Ar(["borderLeft"]),
	Ar(["borderRight"]);
var vs = f.createContext({});
function ev(e) {
	return ru(e) || Kc(e) || ls(e) || nu();
}
function It(e, t) {
	for (var r = e, n = 0; n < t.length; n += 1) {
		if (r == null) return;
		r = r[t[n]];
	}
	return r;
}
function uu(e, t, r, n) {
	if (!t.length) return r;
	var o = ev(t),
		i = o[0],
		a = o.slice(1),
		s;
	return (
		!e && typeof i == "number" ? (s = []) : Array.isArray(e) ? (s = te(e)) : (s = z({}, e)),
		n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : (s[i] = uu(s[i], a, r, n)),
		s
	);
}
function At(e, t, r) {
	var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
	return t.length && n && r === void 0 && !It(e, t.slice(0, -1)) ? e : uu(e, t, r, n);
}
function tv(e) {
	return pe(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Qs(e) {
	return Array.isArray(e) ? [] : {};
}
var rv = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function kr() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
	var n = Qs(t[0]);
	return (
		t.forEach(function (o) {
			function i(a, s) {
				var l = new Set(s),
					c = It(o, a),
					u = Array.isArray(c);
				if (u || tv(c)) {
					if (!l.has(c)) {
						l.add(c);
						var d = It(n, a);
						u ? (n = At(n, a, [])) : (!d || pe(d) !== "object") && (n = At(n, a, Qs(c))),
							rv(c).forEach(function (h) {
								i([].concat(te(a), [h]), l);
							});
					}
				} else n = At(n, a, c);
			}
			i([]);
		}),
		n
	);
}
function nv() {}
const ov = () => {
		const e = () => {};
		return (e.deprecated = nv), e;
	},
	iv = f.createContext(void 0),
	av = {
		items_per_page: "/ page",
		jump_to: "Go to",
		jump_to_confirm: "confirm",
		page: "Page",
		prev_page: "Previous Page",
		next_page: "Next Page",
		prev_5: "Previous 5 Pages",
		next_5: "Next 5 Pages",
		prev_3: "Previous 3 Pages",
		next_3: "Next 3 Pages",
		page_size: "Page Size",
	};
var sv = {
	locale: "en_US",
	today: "Today",
	now: "Now",
	backToToday: "Back to today",
	ok: "OK",
	clear: "Clear",
	month: "Month",
	year: "Year",
	timeSelect: "select time",
	dateSelect: "select date",
	weekSelect: "Choose a week",
	monthSelect: "Choose a month",
	yearSelect: "Choose a year",
	decadeSelect: "Choose a decade",
	yearFormat: "YYYY",
	dateFormat: "M/D/YYYY",
	dayFormat: "D",
	dateTimeFormat: "M/D/YYYY HH:mm:ss",
	monthBeforeYear: !0,
	previousMonth: "Previous month (PageUp)",
	nextMonth: "Next month (PageDown)",
	previousYear: "Last year (Control + left)",
	nextYear: "Next year (Control + right)",
	previousDecade: "Last decade",
	nextDecade: "Next decade",
	previousCentury: "Last century",
	nextCentury: "Next century",
};
const fu = { placeholder: "Select time", rangePlaceholder: ["Start time", "End time"] },
	Js = {
		lang: Object.assign(
			{
				placeholder: "Select date",
				yearPlaceholder: "Select year",
				quarterPlaceholder: "Select quarter",
				monthPlaceholder: "Select month",
				weekPlaceholder: "Select week",
				rangePlaceholder: ["Start date", "End date"],
				rangeYearPlaceholder: ["Start year", "End year"],
				rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
				rangeMonthPlaceholder: ["Start month", "End month"],
				rangeWeekPlaceholder: ["Start week", "End week"],
			},
			sv,
		),
		timePickerLocale: Object.assign({}, fu),
	},
	lt = "${label} is not a valid ${type}",
	Yr = {
		locale: "en",
		Pagination: av,
		DatePicker: Js,
		TimePicker: fu,
		Calendar: Js,
		global: { placeholder: "Please select" },
		Table: {
			filterTitle: "Filter menu",
			filterConfirm: "OK",
			filterReset: "Reset",
			filterEmptyText: "No filters",
			filterCheckall: "Select all items",
			filterSearchPlaceholder: "Search in filters",
			emptyText: "No data",
			selectAll: "Select current page",
			selectInvert: "Invert current page",
			selectNone: "Clear all data",
			selectionAll: "Select all data",
			sortTitle: "Sort",
			expand: "Expand row",
			collapse: "Collapse row",
			triggerDesc: "Click to sort descending",
			triggerAsc: "Click to sort ascending",
			cancelSort: "Click to cancel sorting",
		},
		Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
		Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
		Popconfirm: { okText: "OK", cancelText: "Cancel" },
		Transfer: {
			titles: ["", ""],
			searchPlaceholder: "Search here",
			itemUnit: "item",
			itemsUnit: "items",
			remove: "Remove",
			selectCurrent: "Select current page",
			removeCurrent: "Remove current page",
			selectAll: "Select all data",
			removeAll: "Remove all data",
			selectInvert: "Invert current page",
		},
		Upload: {
			uploading: "Uploading...",
			removeFile: "Remove file",
			uploadError: "Upload error",
			previewFile: "Preview file",
			downloadFile: "Download file",
		},
		Empty: { description: "No data" },
		Icon: { icon: "icon" },
		Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand" },
		PageHeader: { back: "Back" },
		Form: {
			optional: "(optional)",
			defaultValidateMessages: {
				default: "Field validation error for ${label}",
				required: "Please enter ${label}",
				enum: "${label} must be one of [${enum}]",
				whitespace: "${label} cannot be a blank character",
				date: {
					format: "${label} date format is invalid",
					parse: "${label} cannot be converted to a date",
					invalid: "${label} is an invalid date",
				},
				types: {
					string: lt,
					method: lt,
					array: lt,
					object: lt,
					number: lt,
					date: lt,
					boolean: lt,
					integer: lt,
					float: lt,
					regexp: lt,
					email: lt,
					url: lt,
					hex: lt,
				},
				string: {
					len: "${label} must be ${len} characters",
					min: "${label} must be at least ${min} characters",
					max: "${label} must be up to ${max} characters",
					range: "${label} must be between ${min}-${max} characters",
				},
				number: {
					len: "${label} must be equal to ${len}",
					min: "${label} must be minimum ${min}",
					max: "${label} must be maximum ${max}",
					range: "${label} must be between ${min}-${max}",
				},
				array: {
					len: "Must be ${len} ${label}",
					min: "At least ${min} ${label}",
					max: "At most ${max} ${label}",
					range: "The amount of ${label} must be between ${min}-${max}",
				},
				pattern: { mismatch: "${label} does not match the pattern ${pattern}" },
			},
		},
		Image: { preview: "Preview" },
		QRCode: { expired: "QR code expired", refresh: "Refresh" },
		ColorPicker: { presetEmpty: "Empty" },
	};
Object.assign({}, Yr.Modal);
let xo = [];
const el = () => xo.reduce((e, t) => Object.assign(Object.assign({}, e), t), Yr.Modal);
function lv(e) {
	if (e) {
		const t = Object.assign({}, e);
		return (
			xo.push(t),
			el(),
			() => {
				(xo = xo.filter((r) => r !== t)), el();
			}
		);
	}
	Object.assign({}, Yr.Modal);
}
const gs = f.createContext(void 0),
	cv = (e, t) => {
		const r = f.useContext(gs),
			n = f.useMemo(() => {
				var i;
				const a = Yr[e],
					s = (i = r?.[e]) !== null && i !== void 0 ? i : {};
				return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
			}, [e, t, r]),
			o = f.useMemo(() => {
				const i = r?.locale;
				return r?.exist && !i ? Yr.locale : i;
			}, [r]);
		return [n, o];
	},
	uv = "internalMark",
	fv = (e) => {
		const { locale: t = {}, children: r, _ANT_MARK__: n } = e;
		f.useEffect(() => lv(t && t.Modal), [t]);
		const o = f.useMemo(() => Object.assign(Object.assign({}, t), { exist: !0 }), [t]);
		return f.createElement(gs.Provider, { value: o }, r);
	},
	Ve = Math.round;
function Li(e, t) {
	const r =
			e
				.replace(/^[^(]*\((.*)/, "$1")
				.replace(/\).*/, "")
				.match(/\d*\.?\d+%?/g) || [],
		n = r.map((o) => parseFloat(o));
	for (let o = 0; o < 3; o += 1) n[o] = t(n[o] || 0, r[o] || "", o);
	return r[3] ? (n[3] = r[3].includes("%") ? n[3] / 100 : n[3]) : (n[3] = 1), n;
}
const tl = (e, t, r) => (r === 0 ? e : e / 100);
function un(e, t) {
	const r = t || 255;
	return e > r ? r : e < 0 ? 0 : e;
}
class Hr {
	constructor(t) {
		P(this, "isValid", !0),
			P(this, "r", 0),
			P(this, "g", 0),
			P(this, "b", 0),
			P(this, "a", 1),
			P(this, "_h", void 0),
			P(this, "_s", void 0),
			P(this, "_l", void 0),
			P(this, "_v", void 0),
			P(this, "_max", void 0),
			P(this, "_min", void 0),
			P(this, "_brightness", void 0);
		function r(n) {
			return n[0] in t && n[1] in t && n[2] in t;
		}
		if (t)
			if (typeof t == "string") {
				let o = function (i) {
					return n.startsWith(i);
				};
				const n = t.trim();
				/^#?[A-F\d]{3,8}$/i.test(n)
					? this.fromHexString(n)
					: o("rgb")
						? this.fromRgbString(n)
						: o("hsl")
							? this.fromHslString(n)
							: (o("hsv") || o("hsb")) && this.fromHsvString(n);
			} else if (t instanceof Hr)
				(this.r = t.r),
					(this.g = t.g),
					(this.b = t.b),
					(this.a = t.a),
					(this._h = t._h),
					(this._s = t._s),
					(this._l = t._l),
					(this._v = t._v);
			else if (r("rgb"))
				(this.r = un(t.r)), (this.g = un(t.g)), (this.b = un(t.b)), (this.a = typeof t.a == "number" ? un(t.a, 1) : 1);
			else if (r("hsl")) this.fromHsl(t);
			else if (r("hsv")) this.fromHsv(t);
			else throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
	}
	setR(t) {
		return this._sc("r", t);
	}
	setG(t) {
		return this._sc("g", t);
	}
	setB(t) {
		return this._sc("b", t);
	}
	setA(t) {
		return this._sc("a", t, 1);
	}
	setHue(t) {
		const r = this.toHsv();
		return (r.h = t), this._c(r);
	}
	getLuminance() {
		function t(i) {
			const a = i / 255;
			return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
		}
		const r = t(this.r),
			n = t(this.g),
			o = t(this.b);
		return 0.2126 * r + 0.7152 * n + 0.0722 * o;
	}
	getHue() {
		if (typeof this._h > "u") {
			const t = this.getMax() - this.getMin();
			t === 0
				? (this._h = 0)
				: (this._h = Ve(
						60 *
							(this.r === this.getMax()
								? (this.g - this.b) / t + (this.g < this.b ? 6 : 0)
								: this.g === this.getMax()
									? (this.b - this.r) / t + 2
									: (this.r - this.g) / t + 4),
					));
		}
		return this._h;
	}
	getSaturation() {
		if (typeof this._s > "u") {
			const t = this.getMax() - this.getMin();
			t === 0 ? (this._s = 0) : (this._s = t / this.getMax());
		}
		return this._s;
	}
	getLightness() {
		return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
	}
	getValue() {
		return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
	}
	getBrightness() {
		return (
			typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3),
			this._brightness
		);
	}
	darken(t = 10) {
		const r = this.getHue(),
			n = this.getSaturation();
		let o = this.getLightness() - t / 100;
		return o < 0 && (o = 0), this._c({ h: r, s: n, l: o, a: this.a });
	}
	lighten(t = 10) {
		const r = this.getHue(),
			n = this.getSaturation();
		let o = this.getLightness() + t / 100;
		return o > 1 && (o = 1), this._c({ h: r, s: n, l: o, a: this.a });
	}
	mix(t, r = 50) {
		const n = this._c(t),
			o = r / 100,
			i = (s) => (n[s] - this[s]) * o + this[s],
			a = { r: Ve(i("r")), g: Ve(i("g")), b: Ve(i("b")), a: Ve(i("a") * 100) / 100 };
		return this._c(a);
	}
	tint(t = 10) {
		return this.mix({ r: 255, g: 255, b: 255, a: 1 }, t);
	}
	shade(t = 10) {
		return this.mix({ r: 0, g: 0, b: 0, a: 1 }, t);
	}
	onBackground(t) {
		const r = this._c(t),
			n = this.a + r.a * (1 - this.a),
			o = (i) => Ve((this[i] * this.a + r[i] * r.a * (1 - this.a)) / n);
		return this._c({ r: o("r"), g: o("g"), b: o("b"), a: n });
	}
	isDark() {
		return this.getBrightness() < 128;
	}
	isLight() {
		return this.getBrightness() >= 128;
	}
	equals(t) {
		return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
	}
	clone() {
		return this._c(this);
	}
	toHexString() {
		let t = "#";
		const r = (this.r || 0).toString(16);
		t += r.length === 2 ? r : "0" + r;
		const n = (this.g || 0).toString(16);
		t += n.length === 2 ? n : "0" + n;
		const o = (this.b || 0).toString(16);
		if (((t += o.length === 2 ? o : "0" + o), typeof this.a == "number" && this.a >= 0 && this.a < 1)) {
			const i = Ve(this.a * 255).toString(16);
			t += i.length === 2 ? i : "0" + i;
		}
		return t;
	}
	toHsl() {
		return { h: this.getHue(), s: this.getSaturation(), l: this.getLightness(), a: this.a };
	}
	toHslString() {
		const t = this.getHue(),
			r = Ve(this.getSaturation() * 100),
			n = Ve(this.getLightness() * 100);
		return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
	}
	toHsv() {
		return { h: this.getHue(), s: this.getSaturation(), v: this.getValue(), a: this.a };
	}
	toRgb() {
		return { r: this.r, g: this.g, b: this.b, a: this.a };
	}
	toRgbString() {
		return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
	}
	toString() {
		return this.toRgbString();
	}
	_sc(t, r, n) {
		const o = this.clone();
		return (o[t] = un(r, n)), o;
	}
	_c(t) {
		return new this.constructor(t);
	}
	getMax() {
		return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
	}
	getMin() {
		return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
	}
	fromHexString(t) {
		const r = t.replace("#", "");
		function n(o, i) {
			return parseInt(r[o] + r[i || o], 16);
		}
		r.length < 6
			? ((this.r = n(0)), (this.g = n(1)), (this.b = n(2)), (this.a = r[3] ? n(3) / 255 : 1))
			: ((this.r = n(0, 1)), (this.g = n(2, 3)), (this.b = n(4, 5)), (this.a = r[6] ? n(6, 7) / 255 : 1));
	}
	fromHsl({ h: t, s: r, l: n, a: o }) {
		if (((this._h = t % 360), (this._s = r), (this._l = n), (this.a = typeof o == "number" ? o : 1), r <= 0)) {
			const h = Ve(n * 255);
			(this.r = h), (this.g = h), (this.b = h);
		}
		let i = 0,
			a = 0,
			s = 0;
		const l = t / 60,
			c = (1 - Math.abs(2 * n - 1)) * r,
			u = c * (1 - Math.abs((l % 2) - 1));
		l >= 0 && l < 1
			? ((i = c), (a = u))
			: l >= 1 && l < 2
				? ((i = u), (a = c))
				: l >= 2 && l < 3
					? ((a = c), (s = u))
					: l >= 3 && l < 4
						? ((a = u), (s = c))
						: l >= 4 && l < 5
							? ((i = u), (s = c))
							: l >= 5 && l < 6 && ((i = c), (s = u));
		const d = n - c / 2;
		(this.r = Ve((i + d) * 255)), (this.g = Ve((a + d) * 255)), (this.b = Ve((s + d) * 255));
	}
	fromHsv({ h: t, s: r, v: n, a: o }) {
		(this._h = t % 360), (this._s = r), (this._v = n), (this.a = typeof o == "number" ? o : 1);
		const i = Ve(n * 255);
		if (((this.r = i), (this.g = i), (this.b = i), r <= 0)) return;
		const a = t / 60,
			s = Math.floor(a),
			l = a - s,
			c = Ve(n * (1 - r) * 255),
			u = Ve(n * (1 - r * l) * 255),
			d = Ve(n * (1 - r * (1 - l)) * 255);
		switch (s) {
			case 0:
				(this.g = d), (this.b = c);
				break;
			case 1:
				(this.r = u), (this.b = c);
				break;
			case 2:
				(this.r = c), (this.b = d);
				break;
			case 3:
				(this.r = c), (this.g = u);
				break;
			case 4:
				(this.r = d), (this.g = c);
				break;
			case 5:
			default:
				(this.g = c), (this.b = u);
				break;
		}
	}
	fromHsvString(t) {
		const r = Li(t, tl);
		this.fromHsv({ h: r[0], s: r[1], v: r[2], a: r[3] });
	}
	fromHslString(t) {
		const r = Li(t, tl);
		this.fromHsl({ h: r[0], s: r[1], l: r[2], a: r[3] });
	}
	fromRgbString(t) {
		const r = Li(t, (n, o) => (o.includes("%") ? Ve((n / 100) * 255) : n));
		(this.r = r[0]), (this.g = r[1]), (this.b = r[2]), (this.a = r[3]);
	}
}
var oo = 2,
	rl = 0.16,
	dv = 0.05,
	hv = 0.05,
	vv = 0.15,
	du = 5,
	hu = 4,
	gv = [
		{ index: 7, amount: 15 },
		{ index: 6, amount: 25 },
		{ index: 5, amount: 30 },
		{ index: 5, amount: 45 },
		{ index: 5, amount: 65 },
		{ index: 5, amount: 85 },
		{ index: 4, amount: 90 },
		{ index: 3, amount: 95 },
		{ index: 2, amount: 97 },
		{ index: 1, amount: 98 },
	];
function nl(e, t, r) {
	var n;
	return (
		Math.round(e.h) >= 60 && Math.round(e.h) <= 240
			? (n = r ? Math.round(e.h) - oo * t : Math.round(e.h) + oo * t)
			: (n = r ? Math.round(e.h) + oo * t : Math.round(e.h) - oo * t),
		n < 0 ? (n += 360) : n >= 360 && (n -= 360),
		n
	);
}
function ol(e, t, r) {
	if (e.h === 0 && e.s === 0) return e.s;
	var n;
	return (
		r ? (n = e.s - rl * t) : t === hu ? (n = e.s + rl) : (n = e.s + dv * t),
		n > 1 && (n = 1),
		r && t === du && n > 0.1 && (n = 0.1),
		n < 0.06 && (n = 0.06),
		Math.round(n * 100) / 100
	);
}
function il(e, t, r) {
	var n;
	return r ? (n = e.v + hv * t) : (n = e.v - vv * t), (n = Math.max(0, Math.min(1, n))), Math.round(n * 100) / 100;
}
function $n(e) {
	for (
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r = [],
			n = new Hr(e),
			o = n.toHsv(),
			i = du;
		i > 0;
		i -= 1
	) {
		var a = new Hr({ h: nl(o, i, !0), s: ol(o, i, !0), v: il(o, i, !0) });
		r.push(a);
	}
	r.push(n);
	for (var s = 1; s <= hu; s += 1) {
		var l = new Hr({ h: nl(o, s), s: ol(o, s), v: il(o, s) });
		r.push(l);
	}
	return t.theme === "dark"
		? gv.map(function (c) {
				var u = c.index,
					d = c.amount;
				return new Hr(t.backgroundColor || "#141414").mix(r[u], d).toHexString();
			})
		: r.map(function (c) {
				return c.toHexString();
			});
}
var Ea = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ea.primary = Ea[5];
var $a = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
$a.primary = $a[5];
const mv = (e) => {
	const { controlHeight: t } = e;
	return { controlHeightSM: t * 0.75, controlHeightXS: t * 0.5, controlHeightLG: t * 1.25 };
};
function pv(e) {
	const { sizeUnit: t, sizeStep: r } = e;
	return {
		sizeXXL: t * (r + 8),
		sizeXL: t * (r + 4),
		sizeLG: t * (r + 2),
		sizeMD: t * (r + 1),
		sizeMS: t * r,
		size: t * r,
		sizeSM: t * (r - 1),
		sizeXS: t * (r - 2),
		sizeXXS: t * (r - 3),
	};
}
const vu = {
		blue: "#1677ff",
		purple: "#722ED1",
		cyan: "#13C2C2",
		green: "#52C41A",
		magenta: "#EB2F96",
		pink: "#eb2f96",
		red: "#F5222D",
		orange: "#FA8C16",
		yellow: "#FADB14",
		volcano: "#FA541C",
		geekblue: "#2F54EB",
		gold: "#FAAD14",
		lime: "#A0D911",
	},
	oi = Object.assign(Object.assign({}, vu), {
		colorPrimary: "#1677ff",
		colorSuccess: "#52c41a",
		colorWarning: "#faad14",
		colorError: "#ff4d4f",
		colorInfo: "#1677ff",
		colorLink: "",
		colorTextBase: "",
		colorBgBase: "",
		fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
		fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
		fontSize: 14,
		lineWidth: 1,
		lineType: "solid",
		motionUnit: 0.1,
		motionBase: 0,
		motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
		motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
		motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
		motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
		motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
		motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
		motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
		motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
		borderRadius: 6,
		sizeUnit: 4,
		sizeStep: 4,
		sizePopupArrow: 16,
		controlHeight: 32,
		zIndexBase: 0,
		zIndexPopupBase: 1e3,
		opacityImage: 1,
		wireframe: !1,
		motion: !0,
	});
function Ke(e, t) {
	bv(e) && (e = "100%");
	var r = yv(e);
	return (
		(e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
		r && (e = parseInt(String(e * t), 10) / 100),
		Math.abs(e - t) < 1e-6
			? 1
			: (t === 360
					? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
					: (e = (e % t) / parseFloat(String(t))),
				e)
	);
}
function io(e) {
	return Math.min(1, Math.max(0, e));
}
function bv(e) {
	return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function yv(e) {
	return typeof e == "string" && e.indexOf("%") !== -1;
}
function gu(e) {
	return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ao(e) {
	return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function vr(e) {
	return e.length === 1 ? "0" + e : String(e);
}
function Sv(e, t, r) {
	return { r: Ke(e, 255) * 255, g: Ke(t, 255) * 255, b: Ke(r, 255) * 255 };
}
function al(e, t, r) {
	(e = Ke(e, 255)), (t = Ke(t, 255)), (r = Ke(r, 255));
	var n = Math.max(e, t, r),
		o = Math.min(e, t, r),
		i = 0,
		a = 0,
		s = (n + o) / 2;
	if (n === o) (a = 0), (i = 0);
	else {
		var l = n - o;
		switch (((a = s > 0.5 ? l / (2 - n - o) : l / (n + o)), n)) {
			case e:
				i = (t - r) / l + (t < r ? 6 : 0);
				break;
			case t:
				i = (r - e) / l + 2;
				break;
			case r:
				i = (e - t) / l + 4;
				break;
		}
		i /= 6;
	}
	return { h: i, s: a, l: s };
}
function zi(e, t, r) {
	return (
		r < 0 && (r += 1),
		r > 1 && (r -= 1),
		r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
	);
}
function wv(e, t, r) {
	var n, o, i;
	if (((e = Ke(e, 360)), (t = Ke(t, 100)), (r = Ke(r, 100)), t === 0)) (o = r), (i = r), (n = r);
	else {
		var a = r < 0.5 ? r * (1 + t) : r + t - r * t,
			s = 2 * r - a;
		(n = zi(s, a, e + 1 / 3)), (o = zi(s, a, e)), (i = zi(s, a, e - 1 / 3));
	}
	return { r: n * 255, g: o * 255, b: i * 255 };
}
function sl(e, t, r) {
	(e = Ke(e, 255)), (t = Ke(t, 255)), (r = Ke(r, 255));
	var n = Math.max(e, t, r),
		o = Math.min(e, t, r),
		i = 0,
		a = n,
		s = n - o,
		l = n === 0 ? 0 : s / n;
	if (n === o) i = 0;
	else {
		switch (n) {
			case e:
				i = (t - r) / s + (t < r ? 6 : 0);
				break;
			case t:
				i = (r - e) / s + 2;
				break;
			case r:
				i = (e - t) / s + 4;
				break;
		}
		i /= 6;
	}
	return { h: i, s: l, v: a };
}
function xv(e, t, r) {
	(e = Ke(e, 360) * 6), (t = Ke(t, 100)), (r = Ke(r, 100));
	var n = Math.floor(e),
		o = e - n,
		i = r * (1 - t),
		a = r * (1 - o * t),
		s = r * (1 - (1 - o) * t),
		l = n % 6,
		c = [r, a, i, i, s, r][l],
		u = [s, r, r, a, i, i][l],
		d = [i, i, s, r, r, a][l];
	return { r: c * 255, g: u * 255, b: d * 255 };
}
function ll(e, t, r, n) {
	var o = [vr(Math.round(e).toString(16)), vr(Math.round(t).toString(16)), vr(Math.round(r).toString(16))];
	return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1))
		? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
		: o.join("");
}
function Cv(e, t, r, n, o) {
	var i = [vr(Math.round(e).toString(16)), vr(Math.round(t).toString(16)), vr(Math.round(r).toString(16)), vr(Ev(n))];
	return o &&
		i[0].startsWith(i[0].charAt(1)) &&
		i[1].startsWith(i[1].charAt(1)) &&
		i[2].startsWith(i[2].charAt(1)) &&
		i[3].startsWith(i[3].charAt(1))
		? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
		: i.join("");
}
function Ev(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function cl(e) {
	return ut(e) / 255;
}
function ut(e) {
	return parseInt(e, 16);
}
function $v(e) {
	return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Oa = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	goldenrod: "#daa520",
	gold: "#ffd700",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavenderblush: "#fff0f5",
	lavender: "#e6e6fa",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32",
};
function Ov(e) {
	var t = { r: 0, g: 0, b: 0 },
		r = 1,
		n = null,
		o = null,
		i = null,
		a = !1,
		s = !1;
	return (
		typeof e == "string" && (e = Tv(e)),
		typeof e == "object" &&
			(Bt(e.r) && Bt(e.g) && Bt(e.b)
				? ((t = Sv(e.r, e.g, e.b)), (a = !0), (s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
				: Bt(e.h) && Bt(e.s) && Bt(e.v)
					? ((n = ao(e.s)), (o = ao(e.v)), (t = xv(e.h, n, o)), (a = !0), (s = "hsv"))
					: Bt(e.h) && Bt(e.s) && Bt(e.l) && ((n = ao(e.s)), (i = ao(e.l)), (t = wv(e.h, n, i)), (a = !0), (s = "hsl")),
			Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)),
		(r = gu(r)),
		{
			ok: a,
			format: e.format || s,
			r: Math.min(255, Math.max(t.r, 0)),
			g: Math.min(255, Math.max(t.g, 0)),
			b: Math.min(255, Math.max(t.b, 0)),
			a: r,
		}
	);
}
var Rv = "[-\\+]?\\d+%?",
	Pv = "[-\\+]?\\d*\\.\\d+%?",
	tr = "(?:".concat(Pv, ")|(?:").concat(Rv, ")"),
	Ni = "[\\s|\\(]+(".concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")\\s*\\)?"),
	ki = "[\\s|\\(]+(".concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")\\s*\\)?"),
	Pt = {
		CSS_UNIT: new RegExp(tr),
		rgb: new RegExp("rgb" + Ni),
		rgba: new RegExp("rgba" + ki),
		hsl: new RegExp("hsl" + Ni),
		hsla: new RegExp("hsla" + ki),
		hsv: new RegExp("hsv" + Ni),
		hsva: new RegExp("hsva" + ki),
		hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	};
function Tv(e) {
	if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
	var t = !1;
	if (Oa[e]) (e = Oa[e]), (t = !0);
	else if (e === "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
	var r = Pt.rgb.exec(e);
	return r
		? { r: r[1], g: r[2], b: r[3] }
		: ((r = Pt.rgba.exec(e)),
			r
				? { r: r[1], g: r[2], b: r[3], a: r[4] }
				: ((r = Pt.hsl.exec(e)),
					r
						? { h: r[1], s: r[2], l: r[3] }
						: ((r = Pt.hsla.exec(e)),
							r
								? { h: r[1], s: r[2], l: r[3], a: r[4] }
								: ((r = Pt.hsv.exec(e)),
									r
										? { h: r[1], s: r[2], v: r[3] }
										: ((r = Pt.hsva.exec(e)),
											r
												? { h: r[1], s: r[2], v: r[3], a: r[4] }
												: ((r = Pt.hex8.exec(e)),
													r
														? { r: ut(r[1]), g: ut(r[2]), b: ut(r[3]), a: cl(r[4]), format: t ? "name" : "hex8" }
														: ((r = Pt.hex6.exec(e)),
															r
																? { r: ut(r[1]), g: ut(r[2]), b: ut(r[3]), format: t ? "name" : "hex" }
																: ((r = Pt.hex4.exec(e)),
																	r
																		? {
																				r: ut(r[1] + r[1]),
																				g: ut(r[2] + r[2]),
																				b: ut(r[3] + r[3]),
																				a: cl(r[4] + r[4]),
																				format: t ? "name" : "hex8",
																			}
																		: ((r = Pt.hex3.exec(e)),
																			r
																				? {
																						r: ut(r[1] + r[1]),
																						g: ut(r[2] + r[2]),
																						b: ut(r[3] + r[3]),
																						format: t ? "name" : "hex",
																					}
																				: !1)))))))));
}
function Bt(e) {
	return !!Pt.CSS_UNIT.exec(String(e));
}
var ht = (function () {
	function e(t, r) {
		t === void 0 && (t = ""), r === void 0 && (r = {});
		var n;
		if (t instanceof e) return t;
		typeof t == "number" && (t = $v(t)), (this.originalInput = t);
		var o = Ov(t);
		(this.originalInput = t),
			(this.r = o.r),
			(this.g = o.g),
			(this.b = o.b),
			(this.a = o.a),
			(this.roundA = Math.round(100 * this.a) / 100),
			(this.format = (n = r.format) !== null && n !== void 0 ? n : o.format),
			(this.gradientType = r.gradientType),
			this.r < 1 && (this.r = Math.round(this.r)),
			this.g < 1 && (this.g = Math.round(this.g)),
			this.b < 1 && (this.b = Math.round(this.b)),
			(this.isValid = o.ok);
	}
	return (
		(e.prototype.isDark = function () {
			return this.getBrightness() < 128;
		}),
		(e.prototype.isLight = function () {
			return !this.isDark();
		}),
		(e.prototype.getBrightness = function () {
			var t = this.toRgb();
			return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
		}),
		(e.prototype.getLuminance = function () {
			var t = this.toRgb(),
				r,
				n,
				o,
				i = t.r / 255,
				a = t.g / 255,
				s = t.b / 255;
			return (
				i <= 0.03928 ? (r = i / 12.92) : (r = Math.pow((i + 0.055) / 1.055, 2.4)),
				a <= 0.03928 ? (n = a / 12.92) : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
				s <= 0.03928 ? (o = s / 12.92) : (o = Math.pow((s + 0.055) / 1.055, 2.4)),
				0.2126 * r + 0.7152 * n + 0.0722 * o
			);
		}),
		(e.prototype.getAlpha = function () {
			return this.a;
		}),
		(e.prototype.setAlpha = function (t) {
			return (this.a = gu(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
		}),
		(e.prototype.isMonochrome = function () {
			var t = this.toHsl().s;
			return t === 0;
		}),
		(e.prototype.toHsv = function () {
			var t = sl(this.r, this.g, this.b);
			return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
		}),
		(e.prototype.toHsvString = function () {
			var t = sl(this.r, this.g, this.b),
				r = Math.round(t.h * 360),
				n = Math.round(t.s * 100),
				o = Math.round(t.v * 100);
			return this.a === 1
				? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)")
				: "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
		}),
		(e.prototype.toHsl = function () {
			var t = al(this.r, this.g, this.b);
			return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
		}),
		(e.prototype.toHslString = function () {
			var t = al(this.r, this.g, this.b),
				r = Math.round(t.h * 360),
				n = Math.round(t.s * 100),
				o = Math.round(t.l * 100);
			return this.a === 1
				? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)")
				: "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
		}),
		(e.prototype.toHex = function (t) {
			return t === void 0 && (t = !1), ll(this.r, this.g, this.b, t);
		}),
		(e.prototype.toHexString = function (t) {
			return t === void 0 && (t = !1), "#" + this.toHex(t);
		}),
		(e.prototype.toHex8 = function (t) {
			return t === void 0 && (t = !1), Cv(this.r, this.g, this.b, this.a, t);
		}),
		(e.prototype.toHex8String = function (t) {
			return t === void 0 && (t = !1), "#" + this.toHex8(t);
		}),
		(e.prototype.toHexShortString = function (t) {
			return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
		}),
		(e.prototype.toRgb = function () {
			return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
		}),
		(e.prototype.toRgbString = function () {
			var t = Math.round(this.r),
				r = Math.round(this.g),
				n = Math.round(this.b);
			return this.a === 1
				? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")")
				: "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
		}),
		(e.prototype.toPercentageRgb = function () {
			var t = function (r) {
				return "".concat(Math.round(Ke(r, 255) * 100), "%");
			};
			return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
		}),
		(e.prototype.toPercentageRgbString = function () {
			var t = function (r) {
				return Math.round(Ke(r, 255) * 100);
			};
			return this.a === 1
				? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)")
				: "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
		}),
		(e.prototype.toName = function () {
			if (this.a === 0) return "transparent";
			if (this.a < 1) return !1;
			for (var t = "#" + ll(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Oa); r < n.length; r++) {
				var o = n[r],
					i = o[0],
					a = o[1];
				if (t === a) return i;
			}
			return !1;
		}),
		(e.prototype.toString = function (t) {
			var r = !!t;
			t = t ?? this.format;
			var n = !1,
				o = this.a < 1 && this.a >= 0,
				i = !r && o && (t.startsWith("hex") || t === "name");
			return i
				? t === "name" && this.a === 0
					? this.toName()
					: this.toRgbString()
				: (t === "rgb" && (n = this.toRgbString()),
					t === "prgb" && (n = this.toPercentageRgbString()),
					(t === "hex" || t === "hex6") && (n = this.toHexString()),
					t === "hex3" && (n = this.toHexString(!0)),
					t === "hex4" && (n = this.toHex8String(!0)),
					t === "hex8" && (n = this.toHex8String()),
					t === "name" && (n = this.toName()),
					t === "hsl" && (n = this.toHslString()),
					t === "hsv" && (n = this.toHsvString()),
					n || this.toHexString());
		}),
		(e.prototype.toNumber = function () {
			return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
		}),
		(e.prototype.clone = function () {
			return new e(this.toString());
		}),
		(e.prototype.lighten = function (t) {
			t === void 0 && (t = 10);
			var r = this.toHsl();
			return (r.l += t / 100), (r.l = io(r.l)), new e(r);
		}),
		(e.prototype.brighten = function (t) {
			t === void 0 && (t = 10);
			var r = this.toRgb();
			return (
				(r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100))))),
				(r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100))))),
				(r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100))))),
				new e(r)
			);
		}),
		(e.prototype.darken = function (t) {
			t === void 0 && (t = 10);
			var r = this.toHsl();
			return (r.l -= t / 100), (r.l = io(r.l)), new e(r);
		}),
		(e.prototype.tint = function (t) {
			return t === void 0 && (t = 10), this.mix("white", t);
		}),
		(e.prototype.shade = function (t) {
			return t === void 0 && (t = 10), this.mix("black", t);
		}),
		(e.prototype.desaturate = function (t) {
			t === void 0 && (t = 10);
			var r = this.toHsl();
			return (r.s -= t / 100), (r.s = io(r.s)), new e(r);
		}),
		(e.prototype.saturate = function (t) {
			t === void 0 && (t = 10);
			var r = this.toHsl();
			return (r.s += t / 100), (r.s = io(r.s)), new e(r);
		}),
		(e.prototype.greyscale = function () {
			return this.desaturate(100);
		}),
		(e.prototype.spin = function (t) {
			var r = this.toHsl(),
				n = (r.h + t) % 360;
			return (r.h = n < 0 ? 360 + n : n), new e(r);
		}),
		(e.prototype.mix = function (t, r) {
			r === void 0 && (r = 50);
			var n = this.toRgb(),
				o = new e(t).toRgb(),
				i = r / 100,
				a = { r: (o.r - n.r) * i + n.r, g: (o.g - n.g) * i + n.g, b: (o.b - n.b) * i + n.b, a: (o.a - n.a) * i + n.a };
			return new e(a);
		}),
		(e.prototype.analogous = function (t, r) {
			t === void 0 && (t = 6), r === void 0 && (r = 30);
			var n = this.toHsl(),
				o = 360 / r,
				i = [this];
			for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + o) % 360), i.push(new e(n));
			return i;
		}),
		(e.prototype.complement = function () {
			var t = this.toHsl();
			return (t.h = (t.h + 180) % 360), new e(t);
		}),
		(e.prototype.monochromatic = function (t) {
			t === void 0 && (t = 6);
			for (var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--; )
				a.push(new e({ h: n, s: o, v: i })), (i = (i + s) % 1);
			return a;
		}),
		(e.prototype.splitcomplement = function () {
			var t = this.toHsl(),
				r = t.h;
			return [this, new e({ h: (r + 72) % 360, s: t.s, l: t.l }), new e({ h: (r + 216) % 360, s: t.s, l: t.l })];
		}),
		(e.prototype.onBackground = function (t) {
			var r = this.toRgb(),
				n = new e(t).toRgb(),
				o = r.a + n.a * (1 - r.a);
			return new e({
				r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
				g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
				b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
				a: o,
			});
		}),
		(e.prototype.triad = function () {
			return this.polyad(3);
		}),
		(e.prototype.tetrad = function () {
			return this.polyad(4);
		}),
		(e.prototype.polyad = function (t) {
			for (var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1; a < t; a++)
				o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }));
			return o;
		}),
		(e.prototype.equals = function (t) {
			return this.toRgbString() === new e(t).toRgbString();
		}),
		e
	);
})();
function Av(e, t) {
	let { generateColorPalettes: r, generateNeutralColorPalettes: n } = t;
	const {
			colorSuccess: o,
			colorWarning: i,
			colorError: a,
			colorInfo: s,
			colorPrimary: l,
			colorBgBase: c,
			colorTextBase: u,
		} = e,
		d = r(l),
		h = r(o),
		b = r(i),
		m = r(a),
		v = r(s),
		p = n(c, u),
		y = e.colorLink || e.colorInfo,
		S = r(y);
	return Object.assign(Object.assign({}, p), {
		colorPrimaryBg: d[1],
		colorPrimaryBgHover: d[2],
		colorPrimaryBorder: d[3],
		colorPrimaryBorderHover: d[4],
		colorPrimaryHover: d[5],
		colorPrimary: d[6],
		colorPrimaryActive: d[7],
		colorPrimaryTextHover: d[8],
		colorPrimaryText: d[9],
		colorPrimaryTextActive: d[10],
		colorSuccessBg: h[1],
		colorSuccessBgHover: h[2],
		colorSuccessBorder: h[3],
		colorSuccessBorderHover: h[4],
		colorSuccessHover: h[4],
		colorSuccess: h[6],
		colorSuccessActive: h[7],
		colorSuccessTextHover: h[8],
		colorSuccessText: h[9],
		colorSuccessTextActive: h[10],
		colorErrorBg: m[1],
		colorErrorBgHover: m[2],
		colorErrorBorder: m[3],
		colorErrorBorderHover: m[4],
		colorErrorHover: m[5],
		colorError: m[6],
		colorErrorActive: m[7],
		colorErrorTextHover: m[8],
		colorErrorText: m[9],
		colorErrorTextActive: m[10],
		colorWarningBg: b[1],
		colorWarningBgHover: b[2],
		colorWarningBorder: b[3],
		colorWarningBorderHover: b[4],
		colorWarningHover: b[4],
		colorWarning: b[6],
		colorWarningActive: b[7],
		colorWarningTextHover: b[8],
		colorWarningText: b[9],
		colorWarningTextActive: b[10],
		colorInfoBg: v[1],
		colorInfoBgHover: v[2],
		colorInfoBorder: v[3],
		colorInfoBorderHover: v[4],
		colorInfoHover: v[4],
		colorInfo: v[6],
		colorInfoActive: v[7],
		colorInfoTextHover: v[8],
		colorInfoText: v[9],
		colorInfoTextActive: v[10],
		colorLinkHover: S[4],
		colorLink: S[6],
		colorLinkActive: S[7],
		colorBgMask: new ht("#000").setAlpha(0.45).toRgbString(),
		colorWhite: "#fff",
	});
}
const Mv = (e) => {
	let t = e,
		r = e,
		n = e,
		o = e;
	return (
		e < 6 && e >= 5 ? (t = e + 1) : e < 16 && e >= 6 ? (t = e + 2) : e >= 16 && (t = 16),
		e < 7 && e >= 5
			? (r = 4)
			: e < 8 && e >= 7
				? (r = 5)
				: e < 14 && e >= 8
					? (r = 6)
					: e < 16 && e >= 14
						? (r = 7)
						: e >= 16 && (r = 8),
		e < 6 && e >= 2 ? (n = 1) : e >= 6 && (n = 2),
		e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
		{ borderRadius: e, borderRadiusXS: n, borderRadiusSM: r, borderRadiusLG: t, borderRadiusOuter: o }
	);
};
function Iv(e) {
	const { motionUnit: t, motionBase: r, borderRadius: n, lineWidth: o } = e;
	return Object.assign(
		{
			motionDurationFast: `${(r + t).toFixed(1)}s`,
			motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
			motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
			lineWidthBold: o + 1,
		},
		Mv(n),
	);
}
const Vt = (e, t) => new ht(e).setAlpha(t).toRgbString(),
	fn = (e, t) => new ht(e).darken(t).toHexString(),
	_v = (e) => {
		const t = $n(e);
		return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[4], 6: t[5], 7: t[6], 8: t[4], 9: t[5], 10: t[6] };
	},
	Fv = (e, t) => {
		const r = e || "#fff",
			n = t || "#000";
		return {
			colorBgBase: r,
			colorTextBase: n,
			colorText: Vt(n, 0.88),
			colorTextSecondary: Vt(n, 0.65),
			colorTextTertiary: Vt(n, 0.45),
			colorTextQuaternary: Vt(n, 0.25),
			colorFill: Vt(n, 0.15),
			colorFillSecondary: Vt(n, 0.06),
			colorFillTertiary: Vt(n, 0.04),
			colorFillQuaternary: Vt(n, 0.02),
			colorBgLayout: fn(r, 4),
			colorBgContainer: fn(r, 0),
			colorBgElevated: fn(r, 0),
			colorBgSpotlight: Vt(n, 0.85),
			colorBorder: fn(r, 15),
			colorBorderSecondary: fn(r, 6),
		};
	};
function jv(e) {
	const t = new Array(10).fill(null).map((r, n) => {
		const o = n - 1,
			i = e * Math.pow(2.71828, o / 5),
			a = n > 1 ? Math.floor(i) : Math.ceil(i);
		return Math.floor(a / 2) * 2;
	});
	return (
		(t[1] = e),
		t.map((r) => {
			const n = r + 8;
			return { size: r, lineHeight: n / r };
		})
	);
}
const Lv = (e) => {
	const t = jv(e),
		r = t.map((o) => o.size),
		n = t.map((o) => o.lineHeight);
	return {
		fontSizeSM: r[0],
		fontSize: r[1],
		fontSizeLG: r[2],
		fontSizeXL: r[3],
		fontSizeHeading1: r[6],
		fontSizeHeading2: r[5],
		fontSizeHeading3: r[4],
		fontSizeHeading4: r[3],
		fontSizeHeading5: r[2],
		lineHeight: n[1],
		lineHeightLG: n[2],
		lineHeightSM: n[0],
		lineHeightHeading1: n[6],
		lineHeightHeading2: n[5],
		lineHeightHeading3: n[4],
		lineHeightHeading4: n[3],
		lineHeightHeading5: n[2],
	};
};
function zv(e) {
	const t = Object.keys(vu)
		.map((r) => {
			const n = $n(e[r]);
			return new Array(10)
				.fill(1)
				.reduce((o, i, a) => ((o[`${r}-${a + 1}`] = n[a]), (o[`${r}${a + 1}`] = n[a]), o), {});
		})
		.reduce((r, n) => ((r = Object.assign(Object.assign({}, r), n)), r), {});
	return Object.assign(
		Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(
						Object.assign(Object.assign({}, e), t),
						Av(e, { generateColorPalettes: _v, generateNeutralColorPalettes: Fv }),
					),
					Lv(e.fontSize),
				),
				pv(e),
			),
			mv(e),
		),
		Iv(e),
	);
}
const mu = xa(zv),
	pu = { token: oi, hashed: !0 },
	bu = X.createContext(pu),
	Ao = [
		"blue",
		"purple",
		"cyan",
		"green",
		"magenta",
		"pink",
		"red",
		"orange",
		"yellow",
		"volcano",
		"geekblue",
		"lime",
		"gold",
	],
	Nv = "5.9.3";
function Hi(e) {
	return e >= 0 && e <= 255;
}
function so(e, t) {
	const { r, g: n, b: o, a: i } = new ht(e).toRgb();
	if (i < 1) return e;
	const { r: a, g: s, b: l } = new ht(t).toRgb();
	for (let c = 0.01; c <= 1; c += 0.01) {
		const u = Math.round((r - a * (1 - c)) / c),
			d = Math.round((n - s * (1 - c)) / c),
			h = Math.round((o - l * (1 - c)) / c);
		if (Hi(u) && Hi(d) && Hi(h)) return new ht({ r: u, g: d, b: h, a: Math.round(c * 100) / 100 }).toRgbString();
	}
	return new ht({ r, g: n, b: o, a: 1 }).toRgbString();
}
var kv = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
function yu(e) {
	const { override: t } = e,
		r = kv(e, ["override"]),
		n = Object.assign({}, t);
	Object.keys(oi).forEach((h) => {
		delete n[h];
	});
	const o = Object.assign(Object.assign({}, r), n),
		i = 480,
		a = 576,
		s = 768,
		l = 992,
		c = 1200,
		u = 1600;
	if (o.motion === !1) {
		const h = "0s";
		(o.motionDurationFast = h), (o.motionDurationMid = h), (o.motionDurationSlow = h);
	}
	return Object.assign(
		Object.assign(Object.assign({}, o), {
			colorFillContent: o.colorFillSecondary,
			colorFillContentHover: o.colorFill,
			colorFillAlter: o.colorFillQuaternary,
			colorBgContainerDisabled: o.colorFillTertiary,
			colorBorderBg: o.colorBgContainer,
			colorSplit: so(o.colorBorderSecondary, o.colorBgContainer),
			colorTextPlaceholder: o.colorTextQuaternary,
			colorTextDisabled: o.colorTextQuaternary,
			colorTextHeading: o.colorText,
			colorTextLabel: o.colorTextSecondary,
			colorTextDescription: o.colorTextTertiary,
			colorTextLightSolid: o.colorWhite,
			colorHighlight: o.colorError,
			colorBgTextHover: o.colorFillSecondary,
			colorBgTextActive: o.colorFill,
			colorIcon: o.colorTextTertiary,
			colorIconHover: o.colorText,
			colorErrorOutline: so(o.colorErrorBg, o.colorBgContainer),
			colorWarningOutline: so(o.colorWarningBg, o.colorBgContainer),
			fontSizeIcon: o.fontSizeSM,
			lineWidthFocus: o.lineWidth * 4,
			lineWidth: o.lineWidth,
			controlOutlineWidth: o.lineWidth * 2,
			controlInteractiveSize: o.controlHeight / 2,
			controlItemBgHover: o.colorFillTertiary,
			controlItemBgActive: o.colorPrimaryBg,
			controlItemBgActiveHover: o.colorPrimaryBgHover,
			controlItemBgActiveDisabled: o.colorFill,
			controlTmpOutline: o.colorFillQuaternary,
			controlOutline: so(o.colorPrimaryBg, o.colorBgContainer),
			lineType: o.lineType,
			borderRadius: o.borderRadius,
			borderRadiusXS: o.borderRadiusXS,
			borderRadiusSM: o.borderRadiusSM,
			borderRadiusLG: o.borderRadiusLG,
			fontWeightStrong: 600,
			opacityLoading: 0.65,
			linkDecoration: "none",
			linkHoverDecoration: "none",
			linkFocusDecoration: "none",
			controlPaddingHorizontal: 12,
			controlPaddingHorizontalSM: 8,
			paddingXXS: o.sizeXXS,
			paddingXS: o.sizeXS,
			paddingSM: o.sizeSM,
			padding: o.size,
			paddingMD: o.sizeMD,
			paddingLG: o.sizeLG,
			paddingXL: o.sizeXL,
			paddingContentHorizontalLG: o.sizeLG,
			paddingContentVerticalLG: o.sizeMS,
			paddingContentHorizontal: o.sizeMS,
			paddingContentVertical: o.sizeSM,
			paddingContentHorizontalSM: o.size,
			paddingContentVerticalSM: o.sizeXS,
			marginXXS: o.sizeXXS,
			marginXS: o.sizeXS,
			marginSM: o.sizeSM,
			margin: o.size,
			marginMD: o.sizeMD,
			marginLG: o.sizeLG,
			marginXL: o.sizeXL,
			marginXXL: o.sizeXXL,
			boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
			screenXS: i,
			screenXSMin: i,
			screenXSMax: a - 1,
			screenSM: a,
			screenSMMin: a,
			screenSMMax: s - 1,
			screenMD: s,
			screenMDMin: s,
			screenMDMax: l - 1,
			screenLG: l,
			screenLGMin: l,
			screenLGMax: c - 1,
			screenXL: c,
			screenXLMin: c,
			screenXLMax: u - 1,
			screenXXL: u,
			screenXXLMin: u,
			boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
			boxShadowCard: `
      0 1px 2px -2px ${new ht("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ht("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ht("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
			boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
			boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
			boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
			boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
			boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
		}),
		n,
	);
}
var ul = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const Su = (e, t, r) => {
	const n = r.getDerivativeToken(e),
		{ override: o } = t,
		i = ul(t, ["override"]);
	let a = Object.assign(Object.assign({}, n), { override: o });
	return (
		(a = yu(a)),
		i &&
			Object.entries(i).forEach((s) => {
				let [l, c] = s;
				const { theme: u } = c,
					d = ul(c, ["theme"]);
				let h = d;
				u && (h = Su(Object.assign(Object.assign({}, a), d), { override: d }, u)), (a[l] = h);
			}),
		a
	);
};
function tn() {
	const { token: e, hashed: t, theme: r, components: n } = X.useContext(bu),
		o = `${Nv}-${t || ""}`,
		i = r || mu,
		[a, s] = Vh(i, [oi, e], {
			salt: o,
			override: Object.assign({ override: e }, n),
			getComputedToken: Su,
			formatToken: yu,
		});
	return [i, a, t ? s : ""];
}
function dt(e) {
	var t = f.useRef();
	t.current = e;
	var r = f.useCallback(function () {
		for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
		return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
	}, []);
	return r;
}
function On(e) {
	var t = f.useRef(!1),
		r = f.useState(e),
		n = W(r, 2),
		o = n[0],
		i = n[1];
	f.useEffect(function () {
		return (
			(t.current = !1),
			function () {
				t.current = !0;
			}
		);
	}, []);
	function a(s, l) {
		(l && t.current) || i(s);
	}
	return [o, a];
}
function Di(e) {
	return e !== void 0;
}
function ii(e, t) {
	var r = t || {},
		n = r.defaultValue,
		o = r.value,
		i = r.onChange,
		a = r.postState,
		s = On(function () {
			return Di(o) ? o : Di(n) ? (typeof n == "function" ? n() : n) : typeof e == "function" ? e() : e;
		}),
		l = W(s, 2),
		c = l[0],
		u = l[1],
		d = o !== void 0 ? o : c,
		h = a ? a(d) : d,
		b = dt(i),
		m = On([d]),
		v = W(m, 2),
		p = v[0],
		y = v[1];
	Us(
		function () {
			var g = p[0];
			c !== g && b(c, g);
		},
		[p],
	),
		Us(
			function () {
				Di(o) || u(o);
			},
			[o],
		);
	var S = dt(function (g, w) {
		u(g, w), y([d], w);
	});
	return [h, S];
}
const wu = "anticon",
	Hv = (e, t) => t || (e ? `ant-${e}` : "ant"),
	ot = f.createContext({ getPrefixCls: Hv, iconPrefixCls: wu }),
	{ Consumer: wy } = ot,
	xu = (e) => ({
		color: e.colorLink,
		textDecoration: "none",
		outline: "none",
		cursor: "pointer",
		transition: `color ${e.motionDurationSlow}`,
		"&:focus, &:hover": { color: e.colorLinkHover },
		"&:active": { color: e.colorLinkActive },
	}),
	Dv = (e, t, r, n, o) => {
		const i = e / 2,
			a = 0,
			s = i,
			l = (r * 1) / Math.sqrt(2),
			c = i - r * (1 - 1 / Math.sqrt(2)),
			u = i - t * (1 / Math.sqrt(2)),
			d = r * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
			h = 2 * i - u,
			b = d,
			m = 2 * i - l,
			v = c,
			p = 2 * i - a,
			y = s,
			S = i * Math.sqrt(2) + r * (Math.sqrt(2) - 2),
			g = r * (Math.sqrt(2) - 1);
		return {
			pointerEvents: "none",
			width: e,
			height: e,
			overflow: "hidden",
			"&::before": {
				position: "absolute",
				bottom: 0,
				insetInlineStart: 0,
				width: e,
				height: e / 2,
				background: n,
				clipPath: {
					_multi_value_: !0,
					value: [
						`polygon(${g}px 100%, 50% ${g}px, ${2 * i - g}px 100%, ${g}px 100%)`,
						`path('M ${a} ${s} A ${r} ${r} 0 0 0 ${l} ${c} L ${u} ${d} A ${t} ${t} 0 0 1 ${h} ${b} L ${m} ${v} A ${r} ${r} 0 0 0 ${p} ${y} Z')`,
					],
				},
				content: '""',
			},
			"&::after": {
				content: '""',
				position: "absolute",
				width: S,
				height: S,
				bottom: 0,
				insetInline: 0,
				margin: "auto",
				borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
				transform: "translateY(50%) rotate(-135deg)",
				boxShadow: o,
				zIndex: 0,
				background: "transparent",
			},
		};
	},
	ms = (e) => ({
		boxSizing: "border-box",
		margin: 0,
		padding: 0,
		color: e.colorText,
		fontSize: e.fontSize,
		lineHeight: e.lineHeight,
		listStyle: "none",
		fontFamily: e.fontFamily,
	}),
	Bv = () => ({
		display: "inline-flex",
		alignItems: "center",
		color: "inherit",
		fontStyle: "normal",
		lineHeight: 0,
		textAlign: "center",
		textTransform: "none",
		verticalAlign: "-0.125em",
		textRendering: "optimizeLegibility",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
		"> *": { lineHeight: 1 },
		svg: { display: "inline-block" },
	}),
	Vv = () => ({
		"&::before": { display: "table", content: '""' },
		"&::after": { display: "table", clear: "both", content: '""' },
	}),
	Wv = (e) => ({
		a: {
			color: e.colorLink,
			textDecoration: e.linkDecoration,
			backgroundColor: "transparent",
			outline: "none",
			cursor: "pointer",
			transition: `color ${e.motionDurationSlow}`,
			"-webkit-text-decoration-skip": "objects",
			"&:hover": { color: e.colorLinkHover },
			"&:active": { color: e.colorLinkActive },
			"&:active,\n  &:hover": { textDecoration: e.linkHoverDecoration, outline: 0 },
			"&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
			"&[disabled]": { color: e.colorTextDisabled, cursor: "not-allowed" },
		},
	}),
	Gv = (e, t) => {
		const { fontFamily: r, fontSize: n } = e,
			o = `[class^="${t}"], [class*=" ${t}"]`;
		return {
			[o]: {
				fontFamily: r,
				fontSize: n,
				boxSizing: "border-box",
				"&::before, &::after": { boxSizing: "border-box" },
				[o]: { boxSizing: "border-box", "&::before, &::after": { boxSizing: "border-box" } },
			},
		};
	},
	qv = (e) => ({
		outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
		outlineOffset: 1,
		transition: "outline-offset 0s, outline 0s",
	}),
	Uv = (e) => ({ "&:focus-visible": Object.assign({}, qv(e)) }),
	Cu = typeof CSSINJS_STATISTIC < "u";
let Ra = !0;
function mt() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
	if (!Cu) return Object.assign.apply(Object, [{}].concat(t));
	Ra = !1;
	const n = {};
	return (
		t.forEach((o) => {
			Object.keys(o).forEach((a) => {
				Object.defineProperty(n, a, { configurable: !0, enumerable: !0, get: () => o[a] });
			});
		}),
		(Ra = !0),
		n
	);
}
const fl = {};
function Kv() {}
function Xv(e) {
	let t,
		r = e,
		n = Kv;
	return (
		Cu &&
			((t = new Set()),
			(r = new Proxy(e, {
				get(o, i) {
					return Ra && t.add(i), o[i];
				},
			})),
			(n = (o, i) => {
				var a;
				fl[o] = {
					global: Array.from(t),
					component: Object.assign(Object.assign({}, (a = fl[o]) === null || a === void 0 ? void 0 : a.component), i),
				};
			})),
		{ token: r, keys: t, flush: n }
	);
}
const Eu = (e, t) => {
	const [r, n] = tn();
	return Ca({ token: n, hashId: "", path: ["ant-design-icons", e], nonce: () => t?.nonce }, () => [
		{ [`.${e}`]: Object.assign(Object.assign({}, Bv()), { [`.${e} .${e}-icon`]: { display: "block" } }) },
	]);
};
function rn(e, t, r) {
	let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	const o = Array.isArray(e) ? e : [e, e],
		[i] = o,
		a = o.join("-");
	return (s) => {
		const [l, c, u] = tn(),
			{ getPrefixCls: d, iconPrefixCls: h, csp: b } = f.useContext(ot),
			m = d(),
			v = { theme: l, token: c, hashId: u, nonce: () => b?.nonce, clientOnly: n.clientOnly, order: n.order || -999 };
		return (
			Ca(Object.assign(Object.assign({}, v), { clientOnly: !1, path: ["Shared", m] }), () => [{ "&": Wv(c) }]),
			Eu(h),
			[
				Ca(Object.assign(Object.assign({}, v), { path: [a, s, h] }), () => {
					const { token: p, flush: y } = Xv(c),
						S = Object.assign({}, c[i]);
					if (n.deprecatedTokens) {
						const { deprecatedTokens: I } = n;
						I.forEach((T) => {
							let [A, M] = T;
							var _;
							(S?.[A] || S?.[M]) && (((_ = S[M]) !== null && _ !== void 0) || (S[M] = S?.[A]));
						});
					}
					const g = typeof r == "function" ? r(mt(p, S ?? {})) : r,
						w = Object.assign(Object.assign({}, g), S),
						E = `.${s}`,
						C = mt(p, { componentCls: E, prefixCls: s, iconCls: `.${h}`, antCls: `.${m}` }, w),
						x = t(C, { hashId: u, prefixCls: s, rootPrefixCls: m, iconPrefixCls: h, overrideComponentToken: S });
					return y(i, w), [n.resetStyle === !1 ? null : Gv(c, s), x];
				}),
				u,
			]
		);
	};
}
const Yv = (e, t, r, n) => {
	const o = rn(e, t, r, Object.assign({ resetStyle: !1, order: -998 }, n));
	return (a) => {
		let { prefixCls: s } = a;
		return o(s), null;
	};
};
function Zv(e, t) {
	return Ao.reduce((r, n) => {
		const o = e[`${n}1`],
			i = e[`${n}3`],
			a = e[`${n}6`],
			s = e[`${n}7`];
		return Object.assign(
			Object.assign({}, r),
			t(n, { lightColor: o, lightBorderColor: i, darkColor: a, textColor: s }),
		);
	}, {});
}
const Qv = `-ant-${Date.now()}-${Math.random()}`;
function Jv(e, t) {
	const r = {},
		n = (a, s) => {
			let l = a.clone();
			return (l = s?.(l) || l), l.toRgbString();
		},
		o = (a, s) => {
			const l = new ht(a),
				c = $n(l.toRgbString());
			(r[`${s}-color`] = n(l)),
				(r[`${s}-color-disabled`] = c[1]),
				(r[`${s}-color-hover`] = c[4]),
				(r[`${s}-color-active`] = c[6]),
				(r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
				(r[`${s}-color-deprecated-bg`] = c[0]),
				(r[`${s}-color-deprecated-border`] = c[2]);
		};
	if (t.primaryColor) {
		o(t.primaryColor, "primary");
		const a = new ht(t.primaryColor),
			s = $n(a.toRgbString());
		s.forEach((c, u) => {
			r[`primary-${u + 1}`] = c;
		}),
			(r["primary-color-deprecated-l-35"] = n(a, (c) => c.lighten(35))),
			(r["primary-color-deprecated-l-20"] = n(a, (c) => c.lighten(20))),
			(r["primary-color-deprecated-t-20"] = n(a, (c) => c.tint(20))),
			(r["primary-color-deprecated-t-50"] = n(a, (c) => c.tint(50))),
			(r["primary-color-deprecated-f-12"] = n(a, (c) => c.setAlpha(c.getAlpha() * 0.12)));
		const l = new ht(s[0]);
		(r["primary-color-active-deprecated-f-30"] = n(l, (c) => c.setAlpha(c.getAlpha() * 0.3))),
			(r["primary-color-active-deprecated-d-02"] = n(l, (c) => c.darken(2)));
	}
	return (
		t.successColor && o(t.successColor, "success"),
		t.warningColor && o(t.warningColor, "warning"),
		t.errorColor && o(t.errorColor, "error"),
		t.infoColor && o(t.infoColor, "info"),
		`
  :root {
    ${Object.keys(r)
			.map((a) => `--${e}-${a}: ${r[a]};`)
			.join(`
`)}
  }
  `.trim()
	);
}
function eg(e, t) {
	const r = Jv(e, t);
	et() && Sr(r, `${Qv}-dynamic-theme`);
}
const Rn = f.createContext(!1),
	tg = (e) => {
		let { children: t, disabled: r } = e;
		const n = f.useContext(Rn);
		return f.createElement(Rn.Provider, { value: r ?? n }, t);
	},
	Zr = f.createContext(void 0),
	rg = (e) => {
		let { children: t, size: r } = e;
		const n = f.useContext(Zr);
		return f.createElement(Zr.Provider, { value: r || n }, t);
	};
function ng() {
	const e = f.useContext(Rn),
		t = f.useContext(Zr);
	return { componentDisabled: e, componentSize: t };
}
function og(e, t) {
	const r = e || {},
		n = r.inherit === !1 || !t ? pu : t;
	return os(
		() => {
			if (!e) return t;
			const o = Object.assign({}, n.components);
			return (
				Object.keys(e.components || {}).forEach((i) => {
					o[i] = Object.assign(Object.assign({}, o[i]), e.components[i]);
				}),
				Object.assign(Object.assign(Object.assign({}, n), r), {
					token: Object.assign(Object.assign({}, n.token), r.token),
					components: o,
				})
			);
		},
		[r, n],
		(o, i) =>
			o.some((a, s) => {
				const l = i[s];
				return !Qc(a, l, !0);
			}),
	);
}
var ig = ["children"],
	$u = f.createContext({});
function ag(e) {
	var t = e.children,
		r = Et(e, ig);
	return f.createElement($u.Provider, { value: r }, t);
}
var sg = (function (e) {
	Wo(r, e);
	var t = Go(r);
	function r() {
		return Lt(this, r), t.apply(this, arguments);
	}
	return (
		zt(r, [
			{
				key: "render",
				value: function () {
					return this.props.children;
				},
			},
		]),
		r
	);
})(f.Component);
function lg(e) {
	var t = f.useReducer(function (s) {
			return s + 1;
		}, 0),
		r = W(t, 2),
		n = r[1],
		o = f.useRef(e),
		i = dt(function () {
			return o.current;
		}),
		a = dt(function (s) {
			(o.current = typeof s == "function" ? s(o.current) : s), n();
		});
	return [i, a];
}
var Qt = "none",
	lo = "appear",
	co = "enter",
	uo = "leave",
	dl = "none",
	Mt = "prepare",
	Dr = "start",
	Br = "active",
	ps = "end",
	Ou = "prepared";
function hl(e, t) {
	var r = {};
	return (
		(r[e.toLowerCase()] = t.toLowerCase()),
		(r["Webkit".concat(e)] = "webkit".concat(t)),
		(r["Moz".concat(e)] = "moz".concat(t)),
		(r["ms".concat(e)] = "MS".concat(t)),
		(r["O".concat(e)] = "o".concat(t.toLowerCase())),
		r
	);
}
function cg(e, t) {
	var r = { animationend: hl("Animation", "AnimationEnd"), transitionend: hl("Transition", "TransitionEnd") };
	return (
		e &&
			("AnimationEvent" in t || delete r.animationend.animation,
			"TransitionEvent" in t || delete r.transitionend.transition),
		r
	);
}
var ug = cg(et(), typeof window < "u" ? window : {}),
	Ru = {};
if (et()) {
	var fg = document.createElement("div");
	Ru = fg.style;
}
var fo = {};
function Pu(e) {
	if (fo[e]) return fo[e];
	var t = ug[e];
	if (t)
		for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
			var i = r[o];
			if (Object.prototype.hasOwnProperty.call(t, i) && i in Ru) return (fo[e] = t[i]), fo[e];
		}
	return "";
}
var Tu = Pu("animationend"),
	Au = Pu("transitionend"),
	Mu = !!(Tu && Au),
	vl = Tu || "animationend",
	gl = Au || "transitionend";
function ml(e, t) {
	if (!e) return null;
	if (pe(e) === "object") {
		var r = t.replace(/-\w/g, function (n) {
			return n[1].toUpperCase();
		});
		return e[r];
	}
	return "".concat(e, "-").concat(t);
}
const dg = function (e) {
	var t = f.useRef();
	function r(o) {
		o && (o.removeEventListener(gl, e), o.removeEventListener(vl, e));
	}
	function n(o) {
		t.current && t.current !== o && r(t.current),
			o && o !== t.current && (o.addEventListener(gl, e), o.addEventListener(vl, e), (t.current = o));
	}
	return (
		f.useEffect(function () {
			return function () {
				r(t.current);
			};
		}, []),
		[n, r]
	);
};
var Iu = et() ? f.useLayoutEffect : f.useEffect;
const hg = function () {
	var e = f.useRef(null);
	function t() {
		Ft.cancel(e.current);
	}
	function r(n) {
		var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
		t();
		var i = Ft(function () {
			o <= 1
				? n({
						isCanceled: function () {
							return i !== e.current;
						},
					})
				: r(n, o - 1);
		});
		e.current = i;
	}
	return (
		f.useEffect(function () {
			return function () {
				t();
			};
		}, []),
		[r, t]
	);
};
var vg = [Mt, Dr, Br, ps],
	gg = [Mt, Ou],
	_u = !1,
	mg = !0;
function Fu(e) {
	return e === Br || e === ps;
}
const pg = function (e, t, r) {
	var n = On(dl),
		o = W(n, 2),
		i = o[0],
		a = o[1],
		s = hg(),
		l = W(s, 2),
		c = l[0],
		u = l[1];
	function d() {
		a(Mt, !0);
	}
	var h = t ? gg : vg;
	return (
		Iu(
			function () {
				if (i !== dl && i !== ps) {
					var b = h.indexOf(i),
						m = h[b + 1],
						v = r(i);
					v === _u
						? a(m, !0)
						: m &&
							c(function (p) {
								function y() {
									p.isCanceled() || a(m, !0);
								}
								v === !0 ? y() : Promise.resolve(v).then(y);
							});
				}
			},
			[e, i],
		),
		f.useEffect(function () {
			return function () {
				u();
			};
		}, []),
		[d, i]
	);
};
function bg(e, t, r, n) {
	var o = n.motionEnter,
		i = o === void 0 ? !0 : o,
		a = n.motionAppear,
		s = a === void 0 ? !0 : a,
		l = n.motionLeave,
		c = l === void 0 ? !0 : l,
		u = n.motionDeadline,
		d = n.motionLeaveImmediately,
		h = n.onAppearPrepare,
		b = n.onEnterPrepare,
		m = n.onLeavePrepare,
		v = n.onAppearStart,
		p = n.onEnterStart,
		y = n.onLeaveStart,
		S = n.onAppearActive,
		g = n.onEnterActive,
		w = n.onLeaveActive,
		E = n.onAppearEnd,
		C = n.onEnterEnd,
		x = n.onLeaveEnd,
		I = n.onVisibleChanged,
		T = On(),
		A = W(T, 2),
		M = A[0],
		_ = A[1],
		F = lg(Qt),
		k = W(F, 2),
		D = k[0],
		R = k[1],
		$ = On(null),
		O = W($, 2),
		j = O[0],
		L = O[1],
		N = D(),
		H = f.useRef(!1),
		q = f.useRef(null);
	function U() {
		return r();
	}
	var ee = f.useRef(!1);
	function J() {
		R(Qt), L(null, !0);
	}
	var Q = dt(function (Y) {
			var ie = D();
			if (ie !== Qt) {
				var Re = U();
				if (!(Y && !Y.deadline && Y.target !== Re)) {
					var Ee = ee.current,
						Z;
					ie === lo && Ee ? (Z = E?.(Re, Y)) : ie === co && Ee ? (Z = C?.(Re, Y)) : ie === uo && Ee && (Z = x?.(Re, Y)),
						Ee && Z !== !1 && J();
				}
			}
		}),
		se = dg(Q),
		de = W(se, 1),
		me = de[0],
		xe = function (ie) {
			switch (ie) {
				case lo:
					return P(P(P({}, Mt, h), Dr, v), Br, S);
				case co:
					return P(P(P({}, Mt, b), Dr, p), Br, g);
				case uo:
					return P(P(P({}, Mt, m), Dr, y), Br, w);
				default:
					return {};
			}
		},
		Ae = f.useMemo(
			function () {
				return xe(N);
			},
			[N],
		),
		ke = pg(N, !e, function (Y) {
			if (Y === Mt) {
				var ie = Ae[Mt];
				return ie ? ie(U()) : _u;
			}
			if (Oe in Ae) {
				var Re;
				L(((Re = Ae[Oe]) === null || Re === void 0 ? void 0 : Re.call(Ae, U(), null)) || null);
			}
			return (
				Oe === Br &&
					N !== Qt &&
					(me(U()),
					u > 0 &&
						(clearTimeout(q.current),
						(q.current = setTimeout(function () {
							Q({ deadline: !0 });
						}, u)))),
				Oe === Ou && J(),
				mg
			);
		}),
		we = W(ke, 2),
		Le = we[0],
		Oe = we[1],
		he = Fu(Oe);
	ee.current = he;
	var oe = f.useRef(null);
	Iu(
		function () {
			if (!(H.current && oe.current === t)) {
				_(t);
				var Y = H.current;
				H.current = !0;
				var ie;
				!Y && t && s && (ie = lo), Y && t && i && (ie = co), ((Y && !t && c) || (!Y && d && !t && c)) && (ie = uo);
				var Re = xe(ie);
				ie && (e || Re[Mt]) ? (R(ie), Le()) : R(Qt), (oe.current = t);
			}
		},
		[t],
	),
		f.useEffect(
			function () {
				((N === lo && !s) || (N === co && !i) || (N === uo && !c)) && R(Qt);
			},
			[s, i, c],
		),
		f.useEffect(function () {
			return function () {
				(H.current = !1), clearTimeout(q.current);
			};
		}, []);
	var V = f.useRef(!1);
	f.useEffect(
		function () {
			M && (V.current = !0), M !== void 0 && N === Qt && ((V.current || M) && I?.(M), (V.current = !0));
		},
		[M, N],
	);
	var ne = j;
	return Ae[Mt] && Oe === Dr && (ne = z({ transition: "none" }, ne)), [N, Oe, ne, M ?? t];
}
function yg(e) {
	var t = e;
	pe(e) === "object" && (t = e.transitionSupport);
	function r(o, i) {
		return !!(o.motionName && t && i !== !1);
	}
	var n = f.forwardRef(function (o, i) {
		var a = o.visible,
			s = a === void 0 ? !0 : a,
			l = o.removeOnLeave,
			c = l === void 0 ? !0 : l,
			u = o.forceRender,
			d = o.children,
			h = o.motionName,
			b = o.leavedClassName,
			m = o.eventProps,
			v = f.useContext($u),
			p = v.motion,
			y = r(o, p),
			S = f.useRef(),
			g = f.useRef();
		function w() {
			try {
				return S.current instanceof HTMLElement ? S.current : wo(g.current);
			} catch {
				return null;
			}
		}
		var E = bg(y, s, w, o),
			C = W(E, 4),
			x = C[0],
			I = C[1],
			T = C[2],
			A = C[3],
			M = f.useRef(A);
		A && (M.current = !0);
		var _ = f.useCallback(
				function (O) {
					(S.current = O), is(i, O);
				},
				[i],
			),
			F,
			k = z(z({}, m), {}, { visible: s });
		if (!d) F = null;
		else if (x === Qt)
			A
				? (F = d(z({}, k), _))
				: !c && M.current && b
					? (F = d(z(z({}, k), {}, { className: b }), _))
					: u || (!c && !b)
						? (F = d(z(z({}, k), {}, { style: { display: "none" } }), _))
						: (F = null);
		else {
			var D;
			I === Mt ? (D = "prepare") : Fu(I) ? (D = "active") : I === Dr && (D = "start");
			var R = ml(h, "".concat(x, "-").concat(D));
			F = d(z(z({}, k), {}, { className: ce(ml(h, x), P(P({}, R, R && D), h, typeof h == "string")), style: T }), _);
		}
		if (f.isValidElement(F) && In(F)) {
			var $ = Dc(F);
			$ || (F = f.cloneElement(F, { ref: _ }));
		}
		return f.createElement(sg, { ref: g }, F);
	});
	return (n.displayName = "CSSMotion"), n;
}
const Fn = yg(Mu);
var Pa = "add",
	Ta = "keep",
	Aa = "remove",
	Bi = "removed";
function Sg(e) {
	var t;
	return e && pe(e) === "object" && "key" in e ? (t = e) : (t = { key: e }), z(z({}, t), {}, { key: String(t.key) });
}
function Ma() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
	return e.map(Sg);
}
function wg() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
		t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
		r = [],
		n = 0,
		o = t.length,
		i = Ma(e),
		a = Ma(t);
	i.forEach(function (c) {
		for (var u = !1, d = n; d < o; d += 1) {
			var h = a[d];
			if (h.key === c.key) {
				n < d &&
					((r = r.concat(
						a.slice(n, d).map(function (b) {
							return z(z({}, b), {}, { status: Pa });
						}),
					)),
					(n = d)),
					r.push(z(z({}, h), {}, { status: Ta })),
					(n += 1),
					(u = !0);
				break;
			}
		}
		u || r.push(z(z({}, c), {}, { status: Aa }));
	}),
		n < o &&
			(r = r.concat(
				a.slice(n).map(function (c) {
					return z(z({}, c), {}, { status: Pa });
				}),
			));
	var s = {};
	r.forEach(function (c) {
		var u = c.key;
		s[u] = (s[u] || 0) + 1;
	});
	var l = Object.keys(s).filter(function (c) {
		return s[c] > 1;
	});
	return (
		l.forEach(function (c) {
			(r = r.filter(function (u) {
				var d = u.key,
					h = u.status;
				return d !== c || h !== Aa;
			})),
				r.forEach(function (u) {
					u.key === c && (u.status = Ta);
				});
		}),
		r
	);
}
var xg = ["component", "children", "onVisibleChanged", "onAllRemoved"],
	Cg = ["status"],
	Eg = [
		"eventProps",
		"visible",
		"children",
		"motionName",
		"motionAppear",
		"motionEnter",
		"motionLeave",
		"motionLeaveImmediately",
		"motionDeadline",
		"removeOnLeave",
		"leavedClassName",
		"onAppearPrepare",
		"onAppearStart",
		"onAppearActive",
		"onAppearEnd",
		"onEnterStart",
		"onEnterActive",
		"onEnterEnd",
		"onLeaveStart",
		"onLeaveActive",
		"onLeaveEnd",
	];
function $g(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fn,
		r = (function (n) {
			Wo(i, n);
			var o = Go(i);
			function i() {
				var a;
				Lt(this, i);
				for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
				return (
					(a = o.call.apply(o, [this].concat(l))),
					P(be(a), "state", { keyEntities: [] }),
					P(be(a), "removeKey", function (u) {
						a.setState(
							function (d) {
								var h = d.keyEntities.map(function (b) {
									return b.key !== u ? b : z(z({}, b), {}, { status: Bi });
								});
								return { keyEntities: h };
							},
							function () {
								var d = a.state.keyEntities,
									h = d.filter(function (b) {
										var m = b.status;
										return m !== Bi;
									}).length;
								h === 0 && a.props.onAllRemoved && a.props.onAllRemoved();
							},
						);
					}),
					a
				);
			}
			return (
				zt(
					i,
					[
						{
							key: "render",
							value: function () {
								var s = this,
									l = this.state.keyEntities,
									c = this.props,
									u = c.component,
									d = c.children,
									h = c.onVisibleChanged;
								c.onAllRemoved;
								var b = Et(c, xg),
									m = u || f.Fragment,
									v = {};
								return (
									Eg.forEach(function (p) {
										(v[p] = b[p]), delete b[p];
									}),
									delete b.keys,
									f.createElement(
										m,
										b,
										l.map(function (p, y) {
											var S = p.status,
												g = Et(p, Cg),
												w = S === Pa || S === Ta;
											return f.createElement(
												t,
												Te({}, v, {
													key: g.key,
													visible: w,
													eventProps: g,
													onVisibleChanged: function (C) {
														h?.(C, { key: g.key }), C || s.removeKey(g.key);
													},
												}),
												function (E, C) {
													return d(z(z({}, E), {}, { index: y }), C);
												},
											);
										}),
									)
								);
							},
						},
					],
					[
						{
							key: "getDerivedStateFromProps",
							value: function (s, l) {
								var c = s.keys,
									u = l.keyEntities,
									d = Ma(c),
									h = wg(u, d);
								return {
									keyEntities: h.filter(function (b) {
										var m = u.find(function (v) {
											var p = v.key;
											return b.key === p;
										});
										return !(m && m.status === Bi && b.status === Aa);
									}),
								};
							},
						},
					],
				),
				i
			);
		})(f.Component);
	return P(r, "defaultProps", { component: "div" }), r;
}
$g(Mu);
function Og(e) {
	const { children: t } = e,
		[, r] = tn(),
		{ motion: n } = r,
		o = f.useRef(!1);
	return (o.current = o.current || n === !1), o.current ? f.createElement(ag, { motion: n }, t) : t;
}
const Rg = () => null;
var Pg = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const Tg = [
		"getTargetContainer",
		"getPopupContainer",
		"renderEmpty",
		"pageHeader",
		"input",
		"pagination",
		"form",
		"select",
		"button",
	],
	Ag = "ant";
let ju;
function Mg() {
	return ju || Ag;
}
function Ig(e) {
	return Object.keys(e).some((t) => t.endsWith("Color"));
}
const _g = (e) => {
		let { prefixCls: t, iconPrefixCls: r, theme: n } = e;
		t !== void 0 && (ju = t), n && Ig(n) && eg(Mg(), n);
	},
	Fg = (e) => {
		const {
				children: t,
				csp: r,
				autoInsertSpaceInButton: n,
				alert: o,
				anchor: i,
				form: a,
				locale: s,
				componentSize: l,
				direction: c,
				space: u,
				virtual: d,
				dropdownMatchSelectWidth: h,
				popupMatchSelectWidth: b,
				popupOverflow: m,
				legacyLocale: v,
				parentContext: p,
				iconPrefixCls: y,
				theme: S,
				componentDisabled: g,
				segmented: w,
				statistic: E,
				spin: C,
				calendar: x,
				carousel: I,
				cascader: T,
				collapse: A,
				typography: M,
				checkbox: _,
				descriptions: F,
				divider: k,
				drawer: D,
				skeleton: R,
				steps: $,
				image: O,
				layout: j,
				list: L,
				mentions: N,
				modal: H,
				progress: q,
				result: U,
				slider: ee,
				breadcrumb: J,
				menu: Q,
				pagination: se,
				input: de,
				empty: me,
				badge: xe,
				radio: Ae,
				rate: ke,
				switch: we,
				transfer: Le,
				avatar: Oe,
				message: he,
				tag: oe,
				table: V,
				card: ne,
				tabs: Y,
				timeline: ie,
				timePicker: Re,
				upload: Ee,
				notification: Z,
				tree: ae,
				colorPicker: We,
				datePicker: jt,
				wave: Ze,
			} = e,
			Xe = f.useCallback(
				(G, ue) => {
					const { prefixCls: ye } = e;
					if (ue) return ue;
					const ve = ye || p.getPrefixCls("");
					return G ? `${ve}-${G}` : ve;
				},
				[p.getPrefixCls, e.prefixCls],
			),
			Ge = y || p.iconPrefixCls || wu,
			Rt = r || p.csp;
		Eu(Ge, Rt);
		const qe = og(S, p.theme),
			pt = {
				csp: Rt,
				autoInsertSpaceInButton: n,
				alert: o,
				anchor: i,
				locale: s || v,
				direction: c,
				space: u,
				virtual: d,
				popupMatchSelectWidth: b ?? h,
				popupOverflow: m,
				getPrefixCls: Xe,
				iconPrefixCls: Ge,
				theme: qe,
				segmented: w,
				statistic: E,
				spin: C,
				calendar: x,
				carousel: I,
				cascader: T,
				collapse: A,
				typography: M,
				checkbox: _,
				descriptions: F,
				divider: k,
				drawer: D,
				skeleton: R,
				steps: $,
				image: O,
				input: de,
				layout: j,
				list: L,
				mentions: N,
				modal: H,
				progress: q,
				result: U,
				slider: ee,
				breadcrumb: J,
				menu: Q,
				pagination: se,
				empty: me,
				badge: xe,
				radio: Ae,
				rate: ke,
				switch: we,
				transfer: Le,
				avatar: Oe,
				message: he,
				tag: oe,
				table: V,
				card: ne,
				tabs: Y,
				timeline: ie,
				timePicker: Re,
				upload: Ee,
				notification: Z,
				tree: ae,
				colorPicker: We,
				datePicker: jt,
				wave: Ze,
			},
			at = Object.assign({}, p);
		Object.keys(pt).forEach((G) => {
			pt[G] !== void 0 && (at[G] = pt[G]);
		}),
			Tg.forEach((G) => {
				const ue = e[G];
				ue && (at[G] = ue);
			});
		const ze = os(
				() => at,
				at,
				(G, ue) => {
					const ye = Object.keys(G),
						ve = Object.keys(ue);
					return ye.length !== ve.length || ye.some((fe) => G[fe] !== ue[fe]);
				},
			),
			bt = f.useMemo(() => ({ prefixCls: Ge, csp: Rt }), [Ge, Rt]);
		let _e = f.createElement(f.Fragment, null, f.createElement(Rg, { dropdownMatchSelectWidth: h }), t);
		const rt = f.useMemo(() => {
			var G, ue, ye, ve;
			return kr(
				((G = Yr.Form) === null || G === void 0 ? void 0 : G.defaultValidateMessages) || {},
				((ye = (ue = ze.locale) === null || ue === void 0 ? void 0 : ue.Form) === null || ye === void 0
					? void 0
					: ye.defaultValidateMessages) || {},
				((ve = ze.form) === null || ve === void 0 ? void 0 : ve.validateMessages) || {},
				a?.validateMessages || {},
			);
		}, [ze, a?.validateMessages]);
		Object.keys(rt).length > 0 && (_e = f.createElement(iv.Provider, { value: rt }, _e)),
			s && (_e = f.createElement(fv, { locale: s, _ANT_MARK__: uv }, _e)),
			(_e = f.createElement(vs.Provider, { value: bt }, _e)),
			l && (_e = f.createElement(rg, { size: l }, _e)),
			(_e = f.createElement(Og, null, _e));
		const B = f.useMemo(() => {
			const G = qe || {},
				{ algorithm: ue, token: ye, components: ve } = G,
				fe = Pg(G, ["algorithm", "token", "components"]),
				Qe = ue && (!Array.isArray(ue) || ue.length > 0) ? xa(ue) : mu,
				st = {};
			return (
				Object.entries(ve || {}).forEach((Nt) => {
					let [nr, or] = Nt;
					const Je = Object.assign({}, or);
					"algorithm" in Je &&
						(Je.algorithm === !0
							? (Je.theme = Qe)
							: (Array.isArray(Je.algorithm) || typeof Je.algorithm == "function") && (Je.theme = xa(Je.algorithm)),
						delete Je.algorithm),
						(st[nr] = Je);
				}),
				Object.assign(Object.assign({}, fe), {
					theme: Qe,
					token: Object.assign(Object.assign({}, oi), ye),
					components: st,
				})
			);
		}, [qe]);
		return (
			S && (_e = f.createElement(bu.Provider, { value: B }, _e)),
			g !== void 0 && (_e = f.createElement(tg, { disabled: g }, _e)),
			f.createElement(ot.Provider, { value: ze }, _e)
		);
	},
	jn = (e) => {
		const t = f.useContext(ot),
			r = f.useContext(gs);
		return f.createElement(Fg, Object.assign({ parentContext: t, legacyLocale: r }, e));
	};
jn.ConfigContext = ot;
jn.SizeContext = Zr;
jn.config = _g;
jn.useConfig = ng;
Object.defineProperty(jn, "SizeContext", { get: () => Zr });
function Lu(e) {
	var t;
	return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function jg(e) {
	return Lu(e) instanceof ShadowRoot;
}
function Mo(e) {
	return jg(e) ? Lu(e) : null;
}
function Lg(e) {
	return e.replace(/-(.)/g, function (t, r) {
		return r.toUpperCase();
	});
}
function zg(e, t) {
	gt(e, "[@ant-design/icons] ".concat(t));
}
function pl(e) {
	return (
		pe(e) === "object" &&
		typeof e.name == "string" &&
		typeof e.theme == "string" &&
		(pe(e.icon) === "object" || typeof e.icon == "function")
	);
}
function bl() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	return Object.keys(e).reduce(function (t, r) {
		var n = e[r];
		switch (r) {
			case "class":
				(t.className = n), delete t.class;
				break;
			default:
				delete t[r], (t[Lg(r)] = n);
		}
		return t;
	}, {});
}
function Ia(e, t, r) {
	return r
		? X.createElement(
				e.tag,
				z(z({ key: t }, bl(e.attrs)), r),
				(e.children || []).map(function (n, o) {
					return Ia(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
				}),
			)
		: X.createElement(
				e.tag,
				z({ key: t }, bl(e.attrs)),
				(e.children || []).map(function (n, o) {
					return Ia(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
				}),
			);
}
function zu(e) {
	return $n(e)[0];
}
function Nu(e) {
	return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Ng = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
	kg = function (t) {
		var r = f.useContext(vs),
			n = r.csp,
			o = r.prefixCls,
			i = Ng;
		o && (i = i.replace(/anticon/g, o)),
			f.useEffect(function () {
				var a = t.current,
					s = Mo(a);
				Sr(i, "@ant-design-icons", { prepend: !0, csp: n, attachTo: s });
			}, []);
	},
	Hg = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
	pn = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function Dg(e) {
	var t = e.primaryColor,
		r = e.secondaryColor;
	(pn.primaryColor = t), (pn.secondaryColor = r || zu(t)), (pn.calculated = !!r);
}
function Bg() {
	return z({}, pn);
}
var nn = function (t) {
	var r = t.icon,
		n = t.className,
		o = t.onClick,
		i = t.style,
		a = t.primaryColor,
		s = t.secondaryColor,
		l = Et(t, Hg),
		c = f.useRef(),
		u = pn;
	if (
		(a && (u = { primaryColor: a, secondaryColor: s || zu(a) }),
		kg(c),
		zg(pl(r), "icon should be icon definiton, but got ".concat(r)),
		!pl(r))
	)
		return null;
	var d = r;
	return (
		d && typeof d.icon == "function" && (d = z(z({}, d), {}, { icon: d.icon(u.primaryColor, u.secondaryColor) })),
		Ia(
			d.icon,
			"svg-".concat(d.name),
			z(
				z(
					{
						className: n,
						onClick: o,
						style: i,
						"data-icon": d.name,
						width: "1em",
						height: "1em",
						fill: "currentColor",
						"aria-hidden": "true",
					},
					l,
				),
				{},
				{ ref: c },
			),
		)
	);
};
nn.displayName = "IconReact";
nn.getTwoToneColors = Bg;
nn.setTwoToneColors = Dg;
function ku(e) {
	var t = Nu(e),
		r = W(t, 2),
		n = r[0],
		o = r[1];
	return nn.setTwoToneColors({ primaryColor: n, secondaryColor: o });
}
function Vg() {
	var e = nn.getTwoToneColors();
	return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Wg = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
ku($a.primary);
var it = f.forwardRef(function (e, t) {
	var r,
		n = e.className,
		o = e.icon,
		i = e.spin,
		a = e.rotate,
		s = e.tabIndex,
		l = e.onClick,
		c = e.twoToneColor,
		u = Et(e, Wg),
		d = f.useContext(vs),
		h = d.prefixCls,
		b = h === void 0 ? "anticon" : h,
		m = d.rootClassName,
		v = ce(
			m,
			b,
			((r = {}),
			P(r, "".concat(b, "-").concat(o.name), !!o.name),
			P(r, "".concat(b, "-spin"), !!i || o.name === "loading"),
			r),
			n,
		),
		p = s;
	p === void 0 && l && (p = -1);
	var y = a ? { msTransform: "rotate(".concat(a, "deg)"), transform: "rotate(".concat(a, "deg)") } : void 0,
		S = Nu(c),
		g = W(S, 2),
		w = g[0],
		E = g[1];
	return f.createElement(
		"span",
		Te({ role: "img", "aria-label": o.name }, u, { ref: t, tabIndex: p, onClick: l, className: v }),
		f.createElement(nn, { icon: o, primaryColor: w, secondaryColor: E, style: y }),
	);
});
it.displayName = "AntdIcon";
it.getTwoToneColor = Vg;
it.setTwoToneColor = ku;
var Gg = {
		icon: {
			tag: "svg",
			attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z",
					},
				},
			],
		},
		name: "close-circle",
		theme: "filled",
	},
	qg = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: Gg }));
	};
const Ug = f.forwardRef(qg),
	{ isValidElement: bs } = zo;
function Hu(e) {
	return e && bs(e) && e.type === f.Fragment;
}
function Kg(e, t, r) {
	return bs(e) ? f.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function ai(e, t) {
	return Kg(e, e, t);
}
var Io = { ENTER: 13, ESC: 27 },
	Xg = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
					},
				},
			],
		},
		name: "loading",
		theme: "outlined",
	},
	Yg = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: Xg }));
	};
const Zg = f.forwardRef(Yg);
function tt() {
	tt = function () {
		return t;
	};
	var e,
		t = {},
		r = Object.prototype,
		n = r.hasOwnProperty,
		o =
			Object.defineProperty ||
			function (R, $, O) {
				R[$] = O.value;
			},
		i = typeof Symbol == "function" ? Symbol : {},
		a = i.iterator || "@@iterator",
		s = i.asyncIterator || "@@asyncIterator",
		l = i.toStringTag || "@@toStringTag";
	function c(R, $, O) {
		return Object.defineProperty(R, $, { value: O, enumerable: !0, configurable: !0, writable: !0 }), R[$];
	}
	try {
		c({}, "");
	} catch {
		c = function (O, j, L) {
			return (O[j] = L);
		};
	}
	function u(R, $, O, j) {
		var L = $ && $.prototype instanceof y ? $ : y,
			N = Object.create(L.prototype),
			H = new k(j || []);
		return o(N, "_invoke", { value: A(R, O, H) }), N;
	}
	function d(R, $, O) {
		try {
			return { type: "normal", arg: R.call($, O) };
		} catch (j) {
			return { type: "throw", arg: j };
		}
	}
	t.wrap = u;
	var h = "suspendedStart",
		b = "suspendedYield",
		m = "executing",
		v = "completed",
		p = {};
	function y() {}
	function S() {}
	function g() {}
	var w = {};
	c(w, a, function () {
		return this;
	});
	var E = Object.getPrototypeOf,
		C = E && E(E(D([])));
	C && C !== r && n.call(C, a) && (w = C);
	var x = (g.prototype = y.prototype = Object.create(w));
	function I(R) {
		["next", "throw", "return"].forEach(function ($) {
			c(R, $, function (O) {
				return this._invoke($, O);
			});
		});
	}
	function T(R, $) {
		function O(L, N, H, q) {
			var U = d(R[L], R, N);
			if (U.type !== "throw") {
				var ee = U.arg,
					J = ee.value;
				return J && pe(J) == "object" && n.call(J, "__await")
					? $.resolve(J.__await).then(
							function (Q) {
								O("next", Q, H, q);
							},
							function (Q) {
								O("throw", Q, H, q);
							},
						)
					: $.resolve(J).then(
							function (Q) {
								(ee.value = Q), H(ee);
							},
							function (Q) {
								return O("throw", Q, H, q);
							},
						);
			}
			q(U.arg);
		}
		var j;
		o(this, "_invoke", {
			value: function (N, H) {
				function q() {
					return new $(function (U, ee) {
						O(N, H, U, ee);
					});
				}
				return (j = j ? j.then(q, q) : q());
			},
		});
	}
	function A(R, $, O) {
		var j = h;
		return function (L, N) {
			if (j === m) throw Error("Generator is already running");
			if (j === v) {
				if (L === "throw") throw N;
				return { value: e, done: !0 };
			}
			for (O.method = L, O.arg = N; ; ) {
				var H = O.delegate;
				if (H) {
					var q = M(H, O);
					if (q) {
						if (q === p) continue;
						return q;
					}
				}
				if (O.method === "next") O.sent = O._sent = O.arg;
				else if (O.method === "throw") {
					if (j === h) throw ((j = v), O.arg);
					O.dispatchException(O.arg);
				} else O.method === "return" && O.abrupt("return", O.arg);
				j = m;
				var U = d(R, $, O);
				if (U.type === "normal") {
					if (((j = O.done ? v : b), U.arg === p)) continue;
					return { value: U.arg, done: O.done };
				}
				U.type === "throw" && ((j = v), (O.method = "throw"), (O.arg = U.arg));
			}
		};
	}
	function M(R, $) {
		var O = $.method,
			j = R.iterator[O];
		if (j === e)
			return (
				($.delegate = null),
				(O === "throw" && R.iterator.return && (($.method = "return"), ($.arg = e), M(R, $), $.method === "throw")) ||
					(O !== "return" &&
						(($.method = "throw"), ($.arg = new TypeError("The iterator does not provide a '" + O + "' method")))),
				p
			);
		var L = d(j, R.iterator, $.arg);
		if (L.type === "throw") return ($.method = "throw"), ($.arg = L.arg), ($.delegate = null), p;
		var N = L.arg;
		return N
			? N.done
				? (($[R.resultName] = N.value),
					($.next = R.nextLoc),
					$.method !== "return" && (($.method = "next"), ($.arg = e)),
					($.delegate = null),
					p)
				: N
			: (($.method = "throw"), ($.arg = new TypeError("iterator result is not an object")), ($.delegate = null), p);
	}
	function _(R) {
		var $ = { tryLoc: R[0] };
		1 in R && ($.catchLoc = R[1]), 2 in R && (($.finallyLoc = R[2]), ($.afterLoc = R[3])), this.tryEntries.push($);
	}
	function F(R) {
		var $ = R.completion || {};
		($.type = "normal"), delete $.arg, (R.completion = $);
	}
	function k(R) {
		(this.tryEntries = [{ tryLoc: "root" }]), R.forEach(_, this), this.reset(!0);
	}
	function D(R) {
		if (R || R === "") {
			var $ = R[a];
			if ($) return $.call(R);
			if (typeof R.next == "function") return R;
			if (!isNaN(R.length)) {
				var O = -1,
					j = function L() {
						for (; ++O < R.length; ) if (n.call(R, O)) return (L.value = R[O]), (L.done = !1), L;
						return (L.value = e), (L.done = !0), L;
					};
				return (j.next = j);
			}
		}
		throw new TypeError(pe(R) + " is not iterable");
	}
	return (
		(S.prototype = g),
		o(x, "constructor", { value: g, configurable: !0 }),
		o(g, "constructor", { value: S, configurable: !0 }),
		(S.displayName = c(g, l, "GeneratorFunction")),
		(t.isGeneratorFunction = function (R) {
			var $ = typeof R == "function" && R.constructor;
			return !!$ && ($ === S || ($.displayName || $.name) === "GeneratorFunction");
		}),
		(t.mark = function (R) {
			return (
				Object.setPrototypeOf ? Object.setPrototypeOf(R, g) : ((R.__proto__ = g), c(R, l, "GeneratorFunction")),
				(R.prototype = Object.create(x)),
				R
			);
		}),
		(t.awrap = function (R) {
			return { __await: R };
		}),
		I(T.prototype),
		c(T.prototype, s, function () {
			return this;
		}),
		(t.AsyncIterator = T),
		(t.async = function (R, $, O, j, L) {
			L === void 0 && (L = Promise);
			var N = new T(u(R, $, O, j), L);
			return t.isGeneratorFunction($)
				? N
				: N.next().then(function (H) {
						return H.done ? H.value : N.next();
					});
		}),
		I(x),
		c(x, l, "Generator"),
		c(x, a, function () {
			return this;
		}),
		c(x, "toString", function () {
			return "[object Generator]";
		}),
		(t.keys = function (R) {
			var $ = Object(R),
				O = [];
			for (var j in $) O.push(j);
			return (
				O.reverse(),
				function L() {
					for (; O.length; ) {
						var N = O.pop();
						if (N in $) return (L.value = N), (L.done = !1), L;
					}
					return (L.done = !0), L;
				}
			);
		}),
		(t.values = D),
		(k.prototype = {
			constructor: k,
			reset: function ($) {
				if (
					((this.prev = 0),
					(this.next = 0),
					(this.sent = this._sent = e),
					(this.done = !1),
					(this.delegate = null),
					(this.method = "next"),
					(this.arg = e),
					this.tryEntries.forEach(F),
					!$)
				)
					for (var O in this) O.charAt(0) === "t" && n.call(this, O) && !isNaN(+O.slice(1)) && (this[O] = e);
			},
			stop: function () {
				this.done = !0;
				var $ = this.tryEntries[0].completion;
				if ($.type === "throw") throw $.arg;
				return this.rval;
			},
			dispatchException: function ($) {
				if (this.done) throw $;
				var O = this;
				function j(ee, J) {
					return (H.type = "throw"), (H.arg = $), (O.next = ee), J && ((O.method = "next"), (O.arg = e)), !!J;
				}
				for (var L = this.tryEntries.length - 1; L >= 0; --L) {
					var N = this.tryEntries[L],
						H = N.completion;
					if (N.tryLoc === "root") return j("end");
					if (N.tryLoc <= this.prev) {
						var q = n.call(N, "catchLoc"),
							U = n.call(N, "finallyLoc");
						if (q && U) {
							if (this.prev < N.catchLoc) return j(N.catchLoc, !0);
							if (this.prev < N.finallyLoc) return j(N.finallyLoc);
						} else if (q) {
							if (this.prev < N.catchLoc) return j(N.catchLoc, !0);
						} else {
							if (!U) throw Error("try statement without catch or finally");
							if (this.prev < N.finallyLoc) return j(N.finallyLoc);
						}
					}
				}
			},
			abrupt: function ($, O) {
				for (var j = this.tryEntries.length - 1; j >= 0; --j) {
					var L = this.tryEntries[j];
					if (L.tryLoc <= this.prev && n.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
						var N = L;
						break;
					}
				}
				N && ($ === "break" || $ === "continue") && N.tryLoc <= O && O <= N.finallyLoc && (N = null);
				var H = N ? N.completion : {};
				return (
					(H.type = $), (H.arg = O), N ? ((this.method = "next"), (this.next = N.finallyLoc), p) : this.complete(H)
				);
			},
			complete: function ($, O) {
				if ($.type === "throw") throw $.arg;
				return (
					$.type === "break" || $.type === "continue"
						? (this.next = $.arg)
						: $.type === "return"
							? ((this.rval = this.arg = $.arg), (this.method = "return"), (this.next = "end"))
							: $.type === "normal" && O && (this.next = O),
					p
				);
			},
			finish: function ($) {
				for (var O = this.tryEntries.length - 1; O >= 0; --O) {
					var j = this.tryEntries[O];
					if (j.finallyLoc === $) return this.complete(j.completion, j.afterLoc), F(j), p;
				}
			},
			catch: function ($) {
				for (var O = this.tryEntries.length - 1; O >= 0; --O) {
					var j = this.tryEntries[O];
					if (j.tryLoc === $) {
						var L = j.completion;
						if (L.type === "throw") {
							var N = L.arg;
							F(j);
						}
						return N;
					}
				}
				throw Error("illegal catch attempt");
			},
			delegateYield: function ($, O, j) {
				return (
					(this.delegate = { iterator: D($), resultName: O, nextLoc: j }), this.method === "next" && (this.arg = e), p
				);
			},
		}),
		t
	);
}
function yl(e, t, r, n, o, i, a) {
	try {
		var s = e[i](a),
			l = s.value;
	} catch (c) {
		return void r(c);
	}
	s.done ? t(l) : Promise.resolve(l).then(n, o);
}
function wr(e) {
	return function () {
		var t = this,
			r = arguments;
		return new Promise(function (n, o) {
			var i = e.apply(t, r);
			function a(l) {
				yl(i, n, o, a, s, "next", l);
			}
			function s(l) {
				yl(i, n, o, a, s, "throw", l);
			}
			a(void 0);
		});
	};
}
var Ln = z({}, xf),
	Qg = Ln.version,
	Vi = Ln.render,
	Jg = Ln.unmountComponentAtNode,
	si;
try {
	var em = Number((Qg || "").split(".")[0]);
	em >= 18 && (si = Ln.createRoot);
} catch {}
function Sl(e) {
	var t = Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	t && pe(t) === "object" && (t.usingClientEntryPoint = e);
}
var _o = "__rc_react_root__";
function tm(e, t) {
	Sl(!0);
	var r = t[_o] || si(t);
	Sl(!1), r.render(e), (t[_o] = r);
}
function rm(e, t) {
	Vi?.(e, t);
}
function nm(e, t) {
	if (si) {
		tm(e, t);
		return;
	}
	rm(e, t);
}
function om(e) {
	return _a.apply(this, arguments);
}
function _a() {
	return (
		(_a = wr(
			tt().mark(function e(t) {
				return tt().wrap(function (n) {
					for (;;)
						switch ((n.prev = n.next)) {
							case 0:
								return n.abrupt(
									"return",
									Promise.resolve().then(function () {
										var o;
										(o = t[_o]) === null || o === void 0 || o.unmount(), delete t[_o];
									}),
								);
							case 1:
							case "end":
								return n.stop();
						}
				}, e);
			}),
		)),
		_a.apply(this, arguments)
	);
}
function im(e) {
	Jg(e);
}
function am(e) {
	return Fa.apply(this, arguments);
}
function Fa() {
	return (
		(Fa = wr(
			tt().mark(function e(t) {
				return tt().wrap(function (n) {
					for (;;)
						switch ((n.prev = n.next)) {
							case 0:
								if (si === void 0) {
									n.next = 2;
									break;
								}
								return n.abrupt("return", om(t));
							case 2:
								im(t);
							case 3:
							case "end":
								return n.stop();
						}
				}, e);
			}),
		)),
		Fa.apply(this, arguments)
	);
}
const sm = (e, t, r) => (r !== void 0 ? r : `${e}-${t}`),
	Du = function (e) {
		if (!e) return !1;
		if (e instanceof Element) {
			if (e.offsetParent) return !0;
			if (e.getBBox) {
				var t = e.getBBox(),
					r = t.width,
					n = t.height;
				if (r || n) return !0;
			}
			if (e.getBoundingClientRect) {
				var o = e.getBoundingClientRect(),
					i = o.width,
					a = o.height;
				if (i || a) return !0;
			}
		}
		return !1;
	},
	lm = (e) => {
		const { componentCls: t, colorPrimary: r } = e;
		return {
			[t]: {
				position: "absolute",
				background: "transparent",
				pointerEvents: "none",
				boxSizing: "border-box",
				color: `var(--wave-color, ${r})`,
				boxShadow: "0 0 0 0 currentcolor",
				opacity: 0.2,
				"&.wave-motion-appear": {
					transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
					"&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
					"&.wave-quick": {
						transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(","),
					},
				},
			},
		};
	},
	cm = rn("Wave", (e) => [lm(e)]);
function um(e) {
	const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
	return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Wi(e) {
	return (
		e &&
		e !== "#fff" &&
		e !== "#ffffff" &&
		e !== "rgb(255, 255, 255)" &&
		e !== "rgba(255, 255, 255, 1)" &&
		um(e) &&
		!/rgba\((?:\d*, ){3}0\)/.test(e) &&
		e !== "transparent"
	);
}
function fm(e) {
	const { borderTopColor: t, borderColor: r, backgroundColor: n } = getComputedStyle(e);
	return Wi(t) ? t : Wi(r) ? r : Wi(n) ? n : null;
}
const Bu = "ant-wave-target";
function Gi(e) {
	return Number.isNaN(e) ? 0 : e;
}
const dm = (e) => {
		const { className: t, target: r, component: n } = e,
			o = f.useRef(null),
			[i, a] = f.useState(null),
			[s, l] = f.useState([]),
			[c, u] = f.useState(0),
			[d, h] = f.useState(0),
			[b, m] = f.useState(0),
			[v, p] = f.useState(0),
			[y, S] = f.useState(!1),
			g = { left: c, top: d, width: b, height: v, borderRadius: s.map((C) => `${C}px`).join(" ") };
		i && (g["--wave-color"] = i);
		function w() {
			const C = getComputedStyle(r);
			a(fm(r));
			const x = C.position === "static",
				{ borderLeftWidth: I, borderTopWidth: T } = C;
			u(x ? r.offsetLeft : Gi(-parseFloat(I))),
				h(x ? r.offsetTop : Gi(-parseFloat(T))),
				m(r.offsetWidth),
				p(r.offsetHeight);
			const {
				borderTopLeftRadius: A,
				borderTopRightRadius: M,
				borderBottomLeftRadius: _,
				borderBottomRightRadius: F,
			} = C;
			l([A, M, F, _].map((k) => Gi(parseFloat(k))));
		}
		if (
			(f.useEffect(() => {
				if (r) {
					const C = Ft(() => {
						w(), S(!0);
					});
					let x;
					return (
						typeof ResizeObserver < "u" && ((x = new ResizeObserver(w)), x.observe(r)),
						() => {
							Ft.cancel(C), x?.disconnect();
						}
					);
				}
			}, []),
			!y)
		)
			return null;
		const E = (n === "Checkbox" || n === "Radio") && r?.classList.contains(Bu);
		return f.createElement(
			Fn,
			{
				visible: !0,
				motionAppear: !0,
				motionName: "wave-motion",
				motionDeadline: 5e3,
				onAppearEnd: (C, x) => {
					var I;
					if (x.deadline || x.propertyName === "opacity") {
						const T = (I = o.current) === null || I === void 0 ? void 0 : I.parentElement;
						am(T).then(() => {
							T?.remove();
						});
					}
					return !1;
				},
			},
			(C) => {
				let { className: x } = C;
				return f.createElement("div", { ref: o, className: ce(t, { "wave-quick": E }, x), style: g });
			},
		);
	},
	hm = (e, t) => {
		var r;
		const { component: n } = t;
		if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked)) return;
		const o = document.createElement("div");
		(o.style.position = "absolute"),
			(o.style.left = "0px"),
			(o.style.top = "0px"),
			e?.insertBefore(o, e?.firstChild),
			nm(f.createElement(dm, Object.assign({}, t, { target: e })), o);
	};
function vm(e, t, r) {
	const { wave: n } = f.useContext(ot),
		[, o, i] = tn(),
		a = dt((c) => {
			const u = e.current;
			if (n?.disabled || !u) return;
			const d = u.querySelector(`.${Bu}`) || u,
				{ showEffect: h } = n || {};
			(h || hm)(d, { className: t, token: o, component: r, event: c, hashId: i });
		}),
		s = f.useRef();
	return (c) => {
		Ft.cancel(s.current),
			(s.current = Ft(() => {
				a(c);
			}));
	};
}
const gm = (e) => {
		const { children: t, disabled: r, component: n } = e,
			{ getPrefixCls: o } = f.useContext(ot),
			i = f.useRef(null),
			a = o("wave"),
			[, s] = cm(a),
			l = vm(i, ce(a, s), n);
		if (
			(X.useEffect(() => {
				const u = i.current;
				if (!u || u.nodeType !== 1 || r) return;
				const d = (h) => {
					!Du(h.target) ||
						!u.getAttribute ||
						u.getAttribute("disabled") ||
						u.disabled ||
						u.className.includes("disabled") ||
						u.className.includes("-leave") ||
						l(h);
				};
				return (
					u.addEventListener("click", d, !0),
					() => {
						u.removeEventListener("click", d, !0);
					}
				);
			}, [r]),
			!X.isValidElement(t))
		)
			return t ?? null;
		const c = In(t) ? en(t.ref, i) : i;
		return ai(t, { ref: c });
	},
	Vu = (e) => {
		const t = X.useContext(Zr);
		return X.useMemo(() => (e ? (typeof e == "string" ? (e ?? t) : e instanceof Function ? e(t) : t) : t), [e, t]);
	},
	Wu = f.createContext(null),
	mm = (e, t) => {
		const r = f.useContext(Wu),
			n = f.useMemo(() => {
				if (!r) return "";
				const { compactDirection: o, isFirstItem: i, isLastItem: a } = r,
					s = o === "vertical" ? "-vertical-" : "-";
				return ce(`${e}-compact${s}item`, {
					[`${e}-compact${s}first-item`]: i,
					[`${e}-compact${s}last-item`]: a,
					[`${e}-compact${s}item-rtl`]: t === "rtl",
				});
			}, [e, t, r]);
		return { compactSize: r?.compactSize, compactDirection: r?.compactDirection, compactItemClassnames: n };
	},
	pm = (e) => {
		let { children: t } = e;
		return f.createElement(Wu.Provider, { value: null }, t);
	};
var bm = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const Gu = f.createContext(void 0),
	ym = (e) => {
		const { getPrefixCls: t, direction: r } = f.useContext(ot),
			{ prefixCls: n, size: o, className: i } = e,
			a = bm(e, ["prefixCls", "size", "className"]),
			s = t("btn-group", n),
			[, , l] = tn();
		let c = "";
		switch (o) {
			case "large":
				c = "lg";
				break;
			case "small":
				c = "sm";
				break;
		}
		const u = ce(s, { [`${s}-${c}`]: c, [`${s}-rtl`]: r === "rtl" }, i, l);
		return f.createElement(Gu.Provider, { value: o }, f.createElement("div", Object.assign({}, a, { className: u })));
	},
	wl = /^[\u4e00-\u9fa5]{2}$/,
	ja = wl.test.bind(wl);
function xl(e) {
	return typeof e == "string";
}
function qi(e) {
	return e === "text" || e === "link";
}
function Sm(e, t) {
	if (e == null) return;
	const r = t ? " " : "";
	return typeof e != "string" && typeof e != "number" && xl(e.type) && ja(e.props.children)
		? ai(e, { children: e.props.children.split("").join(r) })
		: xl(e)
			? ja(e)
				? X.createElement("span", null, e.split("").join(r))
				: X.createElement("span", null, e)
			: Hu(e)
				? X.createElement("span", null, e)
				: e;
}
function wm(e, t) {
	let r = !1;
	const n = [];
	return (
		X.Children.forEach(e, (o) => {
			const i = typeof o,
				a = i === "string" || i === "number";
			if (r && a) {
				const s = n.length - 1,
					l = n[s];
				n[s] = `${l}${o}`;
			} else n.push(o);
			r = a;
		}),
		X.Children.map(n, (o) => Sm(o, t))
	);
}
const qu = f.forwardRef((e, t) => {
		const { className: r, style: n, children: o, prefixCls: i } = e,
			a = ce(`${i}-icon`, r);
		return X.createElement("span", { ref: t, className: a, style: n }, o);
	}),
	Cl = f.forwardRef((e, t) => {
		let { prefixCls: r, className: n, style: o, iconClassName: i } = e;
		const a = ce(`${r}-loading-icon`, n);
		return X.createElement(qu, { prefixCls: r, className: a, style: o, ref: t }, X.createElement(Zg, { className: i }));
	}),
	Ui = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
	Ki = (e) => ({ width: e.scrollWidth, opacity: 1, transform: "scale(1)" }),
	xm = (e) => {
		const { prefixCls: t, loading: r, existIcon: n, className: o, style: i } = e,
			a = !!r;
		return n
			? X.createElement(Cl, { prefixCls: t, className: o, style: i })
			: X.createElement(
					Fn,
					{
						visible: a,
						motionName: `${t}-loading-icon-motion`,
						removeOnLeave: !0,
						onAppearStart: Ui,
						onAppearActive: Ki,
						onEnterStart: Ui,
						onEnterActive: Ki,
						onLeaveStart: Ki,
						onLeaveActive: Ui,
					},
					(s, l) => {
						let { className: c, style: u } = s;
						return X.createElement(Cl, {
							prefixCls: t,
							className: o,
							style: Object.assign(Object.assign({}, i), u),
							ref: l,
							iconClassName: c,
						});
					},
				);
	},
	El = (e, t) => ({
		[`> span, > ${e}`]: {
			"&:not(:last-child)": { [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } } },
			"&:not(:first-child)": { [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineStartColor: t } } },
		},
	}),
	Cm = (e) => {
		const { componentCls: t, fontSize: r, lineWidth: n, groupBorderColor: o, colorErrorHover: i } = e;
		return {
			[`${t}-group`]: [
				{
					position: "relative",
					display: "inline-flex",
					[`> span, > ${t}`]: {
						"&:not(:last-child)": { [`&, & > ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } },
						"&:not(:first-child)": {
							marginInlineStart: -n,
							[`&, & > ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
						},
					},
					[t]: {
						position: "relative",
						zIndex: 1,
						"&:hover,\n          &:focus,\n          &:active": { zIndex: 2 },
						"&[disabled]": { zIndex: 0 },
					},
					[`${t}-icon-only`]: { fontSize: r },
				},
				El(`${t}-primary`, o),
				El(`${t}-danger`, i),
			],
		};
	},
	Em = (e) => {
		const { componentCls: t, iconCls: r, fontWeight: n } = e;
		return {
			[t]: {
				outline: "none",
				position: "relative",
				display: "inline-block",
				fontWeight: n,
				whiteSpace: "nowrap",
				textAlign: "center",
				backgroundImage: "none",
				backgroundColor: "transparent",
				border: `${e.lineWidth}px ${e.lineType} transparent`,
				cursor: "pointer",
				transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
				userSelect: "none",
				touchAction: "manipulation",
				lineHeight: e.lineHeight,
				color: e.colorText,
				"&:disabled > *": { pointerEvents: "none" },
				"> span": { display: "inline-block" },
				[`${t}-icon`]: { lineHeight: 0 },
				[`> ${r} + span, > span + ${r}`]: { marginInlineStart: e.marginXS },
				[`&:not(${t}-icon-only) > ${t}-icon`]: {
					[`&${t}-loading-icon, &:not(:last-child)`]: { marginInlineEnd: e.marginXS },
				},
				"> a": { color: "currentColor" },
				"&:not(:disabled)": Object.assign({}, Uv(e)),
				[`&-icon-only${t}-compact-item`]: { flex: "none" },
				[`&-compact-item${t}-primary`]: {
					[`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
						position: "relative",
						"&:before": {
							position: "absolute",
							top: -e.lineWidth,
							insetInlineStart: -e.lineWidth,
							display: "inline-block",
							width: e.lineWidth,
							height: `calc(100% + ${e.lineWidth * 2}px)`,
							backgroundColor: e.colorPrimaryHover,
							content: '""',
						},
					},
				},
				"&-compact-vertical-item": {
					[`&${t}-primary`]: {
						[`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
							position: "relative",
							"&:before": {
								position: "absolute",
								top: -e.lineWidth,
								insetInlineStart: -e.lineWidth,
								display: "inline-block",
								width: `calc(100% + ${e.lineWidth * 2}px)`,
								height: e.lineWidth,
								backgroundColor: e.colorPrimaryHover,
								content: '""',
							},
						},
					},
				},
			},
		};
	},
	Gt = (e, t, r) => ({ [`&:not(:disabled):not(${e}-disabled)`]: { "&:hover": t, "&:active": r } }),
	$m = (e) => ({ minWidth: e.controlHeight, paddingInlineStart: 0, paddingInlineEnd: 0, borderRadius: "50%" }),
	Om = (e) => ({
		borderRadius: e.controlHeight,
		paddingInlineStart: e.controlHeight / 2,
		paddingInlineEnd: e.controlHeight / 2,
	}),
	Rm = (e) => ({
		cursor: "not-allowed",
		borderColor: e.borderColorDisabled,
		color: e.colorTextDisabled,
		backgroundColor: e.colorBgContainerDisabled,
		boxShadow: "none",
	}),
	Pn = (e, t, r, n, o, i, a, s) => ({
		[`&${e}-background-ghost`]: Object.assign(
			Object.assign(
				{ color: r || void 0, backgroundColor: t, borderColor: n || void 0, boxShadow: "none" },
				Gt(e, Object.assign({ backgroundColor: t }, a), Object.assign({ backgroundColor: t }, s)),
			),
			{ "&:disabled": { cursor: "not-allowed", color: o || void 0, borderColor: i || void 0 } },
		),
	}),
	ys = (e) => ({ [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Rm(e)) }),
	Uu = (e) => Object.assign({}, ys(e)),
	Fo = (e) => ({ [`&:disabled, &${e.componentCls}-disabled`]: { cursor: "not-allowed", color: e.colorTextDisabled } }),
	Ku = (e) =>
		Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(Object.assign({}, Uu(e)), {
						backgroundColor: e.defaultBg,
						borderColor: e.defaultBorderColor,
						color: e.defaultColor,
						boxShadow: e.defaultShadow,
					}),
					Gt(
						e.componentCls,
						{ color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
						{ color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
					),
				),
				Pn(
					e.componentCls,
					e.ghostBg,
					e.defaultGhostColor,
					e.defaultGhostBorderColor,
					e.colorTextDisabled,
					e.colorBorder,
				),
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign(
						Object.assign(
							{ color: e.colorError, borderColor: e.colorError },
							Gt(
								e.componentCls,
								{ color: e.colorErrorHover, borderColor: e.colorErrorBorderHover },
								{ color: e.colorErrorActive, borderColor: e.colorErrorActive },
							),
						),
						Pn(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder),
					),
					ys(e),
				),
			},
		),
	Pm = (e) =>
		Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(Object.assign({}, Uu(e)), {
						color: e.primaryColor,
						backgroundColor: e.colorPrimary,
						boxShadow: e.primaryShadow,
					}),
					Gt(
						e.componentCls,
						{ color: e.colorTextLightSolid, backgroundColor: e.colorPrimaryHover },
						{ color: e.colorTextLightSolid, backgroundColor: e.colorPrimaryActive },
					),
				),
				Pn(
					e.componentCls,
					e.ghostBg,
					e.colorPrimary,
					e.colorPrimary,
					e.colorTextDisabled,
					e.colorBorder,
					{ color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
					{ color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
				),
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign(
						Object.assign(
							{ backgroundColor: e.colorError, boxShadow: e.dangerShadow, color: e.dangerColor },
							Gt(e.componentCls, { backgroundColor: e.colorErrorHover }, { backgroundColor: e.colorErrorActive }),
						),
						Pn(
							e.componentCls,
							e.ghostBg,
							e.colorError,
							e.colorError,
							e.colorTextDisabled,
							e.colorBorder,
							{ color: e.colorErrorHover, borderColor: e.colorErrorHover },
							{ color: e.colorErrorActive, borderColor: e.colorErrorActive },
						),
					),
					ys(e),
				),
			},
		),
	Tm = (e) => Object.assign(Object.assign({}, Ku(e)), { borderStyle: "dashed" }),
	Am = (e) =>
		Object.assign(
			Object.assign(
				Object.assign(
					{ color: e.colorLink },
					Gt(e.componentCls, { color: e.colorLinkHover, backgroundColor: e.linkHoverBg }, { color: e.colorLinkActive }),
				),
				Fo(e),
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign(
						{ color: e.colorError },
						Gt(e.componentCls, { color: e.colorErrorHover }, { color: e.colorErrorActive }),
					),
					Fo(e),
				),
			},
		),
	Mm = (e) =>
		Object.assign(
			Object.assign(
				Object.assign(
					{},
					Gt(
						e.componentCls,
						{ color: e.colorText, backgroundColor: e.textHoverBg },
						{ color: e.colorText, backgroundColor: e.colorBgTextActive },
					),
				),
				Fo(e),
			),
			{
				[`&${e.componentCls}-dangerous`]: Object.assign(
					Object.assign({ color: e.colorError }, Fo(e)),
					Gt(
						e.componentCls,
						{ color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
						{ color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
					),
				),
			},
		),
	Im = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-default`]: Ku(e),
			[`${t}-primary`]: Pm(e),
			[`${t}-dashed`]: Tm(e),
			[`${t}-link`]: Am(e),
			[`${t}-text`]: Mm(e),
			[`${t}-ghost`]: Pn(
				e.componentCls,
				e.ghostBg,
				e.colorBgContainer,
				e.colorBgContainer,
				e.colorTextDisabled,
				e.colorBorder,
			),
		};
	},
	Ss = function (e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		const {
				componentCls: r,
				controlHeight: n,
				fontSize: o,
				lineHeight: i,
				lineWidth: a,
				borderRadius: s,
				buttonPaddingHorizontal: l,
				iconCls: c,
			} = e,
			u = Math.max(0, (n - o * i) / 2 - a),
			d = `${r}-icon-only`;
		return [
			{
				[`${r}${t}`]: {
					fontSize: o,
					height: n,
					padding: `${u}px ${l}px`,
					borderRadius: s,
					[`&${d}`]: {
						width: n,
						paddingInlineStart: 0,
						paddingInlineEnd: 0,
						[`&${r}-round`]: { width: "auto" },
						[c]: { fontSize: e.buttonIconOnlyFontSize },
					},
					[`&${r}-loading`]: { opacity: e.opacityLoading, cursor: "default" },
					[`${r}-loading-icon`]: {
						transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
					},
				},
			},
			{ [`${r}${r}-circle${t}`]: $m(e) },
			{ [`${r}${r}-round${t}`]: Om(e) },
		];
	},
	_m = (e) => Ss(mt(e, { fontSize: e.contentFontSize })),
	Fm = (e) => {
		const t = mt(e, {
			controlHeight: e.controlHeightSM,
			fontSize: e.contentFontSizeSM,
			padding: e.paddingXS,
			buttonPaddingHorizontal: e.paddingInlineSM,
			borderRadius: e.borderRadiusSM,
			buttonIconOnlyFontSize: e.onlyIconSizeSM,
		});
		return Ss(t, `${e.componentCls}-sm`);
	},
	jm = (e) => {
		const t = mt(e, {
			controlHeight: e.controlHeightLG,
			fontSize: e.contentFontSizeLG,
			buttonPaddingHorizontal: e.paddingInlineLG,
			borderRadius: e.borderRadiusLG,
			buttonIconOnlyFontSize: e.onlyIconSizeLG,
		});
		return Ss(t, `${e.componentCls}-lg`);
	},
	Lm = (e) => {
		const { componentCls: t } = e;
		return { [t]: { [`&${t}-block`]: { width: "100%" } } };
	},
	Xu = (e) => {
		const { paddingInline: t, onlyIconSize: r } = e;
		return mt(e, { buttonPaddingHorizontal: t, buttonIconOnlyFontSize: r });
	},
	Yu = (e) => ({
		fontWeight: 400,
		defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
		primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
		dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
		primaryColor: e.colorTextLightSolid,
		dangerColor: e.colorTextLightSolid,
		borderColorDisabled: e.colorBorder,
		defaultGhostColor: e.colorBgContainer,
		ghostBg: "transparent",
		defaultGhostBorderColor: e.colorBgContainer,
		paddingInline: e.paddingContentHorizontal - e.lineWidth,
		paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
		paddingInlineSM: 8 - e.lineWidth,
		onlyIconSize: e.fontSizeLG,
		onlyIconSizeSM: e.fontSizeLG - 2,
		onlyIconSizeLG: e.fontSizeLG + 2,
		groupBorderColor: e.colorPrimaryHover,
		linkHoverBg: "transparent",
		textHoverBg: e.colorBgTextHover,
		defaultColor: e.colorText,
		defaultBg: e.colorBgContainer,
		defaultBorderColor: e.colorBorder,
		defaultBorderColorDisabled: e.colorBorder,
		contentFontSize: e.fontSize,
		contentFontSizeSM: e.fontSize,
		contentFontSizeLG: e.fontSizeLG,
	}),
	zm = rn(
		"Button",
		(e) => {
			const t = Xu(e);
			return [Em(t), Fm(t), _m(t), jm(t), Lm(t), Im(t), Cm(t)];
		},
		Yu,
	);
function Nm(e, t, r) {
	const { focusElCls: n, focus: o, borderElCls: i } = r,
		a = i ? "> *" : "",
		s = ["hover", o ? "focus" : null, "active"]
			.filter(Boolean)
			.map((l) => `&:${l} ${a}`)
			.join(",");
	return {
		[`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
		"&-item": Object.assign(Object.assign({ [s]: { zIndex: 2 } }, n ? { [`&${n}`]: { zIndex: 2 } } : {}), {
			[`&[disabled] ${a}`]: { zIndex: 0 },
		}),
	};
}
function km(e, t, r) {
	const { borderElCls: n } = r,
		o = n ? `> ${n}` : "";
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: { borderRadius: 0 },
		[`&-item:not(${t}-last-item)${t}-first-item`]: {
			[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
		},
		[`&-item:not(${t}-first-item)${t}-last-item`]: {
			[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
		},
	};
}
function Zu(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { focus: !0 };
	const { componentCls: r } = e,
		n = `${r}-compact`;
	return { [n]: Object.assign(Object.assign({}, Nm(e, n, t)), km(r, n, t)) };
}
function Hm(e, t) {
	return {
		[`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
		"&-item": { "&:hover,&:focus,&:active": { zIndex: 2 }, "&[disabled]": { zIndex: 0 } },
	};
}
function Dm(e, t) {
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
		[`&-item${t}-first-item:not(${t}-last-item)`]: {
			[`&, &${e}-sm, &${e}-lg`]: { borderEndEndRadius: 0, borderEndStartRadius: 0 },
		},
		[`&-item${t}-last-item:not(${t}-first-item)`]: {
			[`&, &${e}-sm, &${e}-lg`]: { borderStartStartRadius: 0, borderStartEndRadius: 0 },
		},
	};
}
function Bm(e) {
	const t = `${e.componentCls}-compact-vertical`;
	return { [t]: Object.assign(Object.assign({}, Hm(e, t)), Dm(e.componentCls, t)) };
}
const Vm = Yv(
	["Button", "compact"],
	(e) => {
		const t = Xu(e);
		return [Zu(t), Bm(t)];
	},
	Yu,
);
var Wm = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
function Gm(e) {
	if (typeof e == "object" && e) {
		const t = e?.delay;
		return { loading: !1, delay: !Number.isNaN(t) && typeof t == "number" ? t : 0 };
	}
	return { loading: !!e, delay: 0 };
}
const qm = (e, t) => {
		var r, n;
		const {
				loading: o = !1,
				prefixCls: i,
				type: a = "default",
				danger: s,
				shape: l = "default",
				size: c,
				styles: u,
				disabled: d,
				className: h,
				rootClassName: b,
				children: m,
				icon: v,
				ghost: p = !1,
				block: y = !1,
				htmlType: S = "button",
				classNames: g,
				style: w = {},
			} = e,
			E = Wm(e, [
				"loading",
				"prefixCls",
				"type",
				"danger",
				"shape",
				"size",
				"styles",
				"disabled",
				"className",
				"rootClassName",
				"children",
				"icon",
				"ghost",
				"block",
				"htmlType",
				"classNames",
				"style",
			]),
			{ getPrefixCls: C, autoInsertSpaceInButton: x, direction: I, button: T } = f.useContext(ot),
			A = C("btn", i),
			[M, _] = zm(A),
			F = f.useContext(Rn),
			k = d ?? F,
			D = f.useContext(Gu),
			R = f.useMemo(() => Gm(o), [o]),
			[$, O] = f.useState(R.loading),
			[j, L] = f.useState(!1),
			H = en(t, f.createRef()),
			q = f.Children.count(m) === 1 && !v && !qi(a);
		f.useEffect(() => {
			let ne = null;
			R.delay > 0
				? (ne = setTimeout(() => {
						(ne = null), O(!0);
					}, R.delay))
				: O(R.loading);
			function Y() {
				ne && (clearTimeout(ne), (ne = null));
			}
			return Y;
		}, [R]),
			f.useEffect(() => {
				if (!H || !H.current || x === !1) return;
				const ne = H.current.textContent;
				q && ja(ne) ? j || L(!0) : j && L(!1);
			}, [H]);
		const U = (ne) => {
				const { onClick: Y } = e;
				if ($ || k) {
					ne.preventDefault();
					return;
				}
				Y?.(ne);
			},
			ee = x !== !1,
			{ compactSize: J, compactItemClassnames: Q } = mm(A, I),
			se = { large: "lg", small: "sm", middle: void 0 },
			de = Vu((ne) => {
				var Y, ie;
				return (ie = (Y = c ?? J) !== null && Y !== void 0 ? Y : D) !== null && ie !== void 0 ? ie : ne;
			}),
			me = (de && se[de]) || "",
			xe = $ ? "loading" : v,
			Ae = ss(E, ["navigate"]),
			ke = ce(
				A,
				_,
				{
					[`${A}-${l}`]: l !== "default" && l,
					[`${A}-${a}`]: a,
					[`${A}-${me}`]: me,
					[`${A}-icon-only`]: !m && m !== 0 && !!xe,
					[`${A}-background-ghost`]: p && !qi(a),
					[`${A}-loading`]: $,
					[`${A}-two-chinese-chars`]: j && ee && !$,
					[`${A}-block`]: y,
					[`${A}-dangerous`]: !!s,
					[`${A}-rtl`]: I === "rtl",
				},
				Q,
				h,
				b,
				T?.className,
			),
			we = Object.assign(Object.assign({}, T?.style), w),
			Le = ce(g?.icon, (r = T?.classNames) === null || r === void 0 ? void 0 : r.icon),
			Oe = Object.assign(
				Object.assign({}, u?.icon || {}),
				((n = T?.styles) === null || n === void 0 ? void 0 : n.icon) || {},
			),
			he =
				v && !$
					? X.createElement(qu, { prefixCls: A, className: Le, style: Oe }, v)
					: X.createElement(xm, { existIcon: !!v, prefixCls: A, loading: !!$ }),
			oe = m || m === 0 ? wm(m, q && ee) : null;
		if (Ae.href !== void 0)
			return M(
				X.createElement(
					"a",
					Object.assign({}, Ae, { className: ce(ke, { [`${A}-disabled`]: k }), style: we, onClick: U, ref: H }),
					he,
					oe,
				),
			);
		let V = X.createElement(
			"button",
			Object.assign({}, E, { type: S, className: ke, style: we, onClick: U, disabled: k, ref: H }),
			he,
			oe,
			Q && X.createElement(Vm, { key: "compact", prefixCls: A }),
		);
		return qi(a) || (V = X.createElement(gm, { component: "Button", disabled: !!$ }, V)), M(V);
	},
	Qu = f.forwardRef(qm);
Qu.Group = ym;
Qu.__ANT_BUTTON = !0;
var Ju = f.createContext(null),
	$l = [];
function Um(e, t) {
	var r = f.useState(function () {
			if (!et()) return null;
			var m = document.createElement("div");
			return m;
		}),
		n = W(r, 1),
		o = n[0],
		i = f.useRef(!1),
		a = f.useContext(Ju),
		s = f.useState($l),
		l = W(s, 2),
		c = l[0],
		u = l[1],
		d =
			a ||
			(i.current
				? void 0
				: function (m) {
						u(function (v) {
							var p = [m].concat(te(v));
							return p;
						});
					});
	function h() {
		o.parentElement || document.body.appendChild(o), (i.current = !0);
	}
	function b() {
		var m;
		(m = o.parentElement) === null || m === void 0 || m.removeChild(o), (i.current = !1);
	}
	return (
		je(
			function () {
				return e ? (a ? a(h) : h()) : b(), b;
			},
			[e],
		),
		je(
			function () {
				c.length &&
					(c.forEach(function (m) {
						return m();
					}),
					u($l));
			},
			[c],
		),
		[o, d]
	);
}
function Km(e) {
	var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),
		r = document.createElement("div");
	r.id = t;
	var n = r.style;
	(n.position = "absolute"),
		(n.left = "0"),
		(n.top = "0"),
		(n.width = "100px"),
		(n.height = "100px"),
		(n.overflow = "scroll");
	var o, i;
	if (e) {
		var a = getComputedStyle(e);
		(n.scrollbarColor = a.scrollbarColor), (n.scrollbarWidth = a.scrollbarWidth);
		var s = getComputedStyle(e, "::-webkit-scrollbar"),
			l = parseInt(s.width, 10),
			c = parseInt(s.height, 10);
		try {
			var u = l ? "width: ".concat(s.width, ";") : "",
				d = c ? "height: ".concat(s.height, ";") : "";
			Sr(
				`
#`
					.concat(
						t,
						`::-webkit-scrollbar {
`,
					)
					.concat(
						u,
						`
`,
					)
					.concat(
						d,
						`
}`,
					),
				t,
			);
		} catch {
			(o = l), (i = c);
		}
	}
	document.body.appendChild(r);
	var h = e && o && !isNaN(o) ? o : r.offsetWidth - r.clientWidth,
		b = e && i && !isNaN(i) ? i : r.offsetHeight - r.clientHeight;
	return document.body.removeChild(r), En(t), { width: h, height: b };
}
function Xm(e) {
	return typeof document > "u" || !e || !(e instanceof Element) ? { width: 0, height: 0 } : Km(e);
}
function Ym() {
	return (
		document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
		window.innerWidth > document.body.offsetWidth
	);
}
var Zm = "rc-util-locker-".concat(Date.now()),
	Ol = 0;
function Qm(e) {
	var t = !!e,
		r = f.useState(function () {
			return (Ol += 1), "".concat(Zm, "_").concat(Ol);
		}),
		n = W(r, 1),
		o = n[0];
	je(
		function () {
			if (t) {
				var i = Xm(document.body).width,
					a = Ym();
				Sr(
					`
html body {
  overflow-y: hidden;
  `.concat(
						a ? "width: calc(100% - ".concat(i, "px);") : "",
						`
}`,
					),
					o,
				);
			} else En(o);
			return function () {
				En(o);
			};
		},
		[t, o],
	);
}
var Jm = !1;
function ep(e) {
	return Jm;
}
var Rl = function (t) {
		return t === !1
			? !1
			: !et() || !t
				? null
				: typeof t == "string"
					? document.querySelector(t)
					: typeof t == "function"
						? t()
						: t;
	},
	ef = f.forwardRef(function (e, t) {
		var r = e.open,
			n = e.autoLock,
			o = e.getContainer;
		e.debug;
		var i = e.autoDestroy,
			a = i === void 0 ? !0 : i,
			s = e.children,
			l = f.useState(r),
			c = W(l, 2),
			u = c[0],
			d = c[1],
			h = u || r;
		f.useEffect(
			function () {
				(a || r) && d(r);
			},
			[r, a],
		);
		var b = f.useState(function () {
				return Rl(o);
			}),
			m = W(b, 2),
			v = m[0],
			p = m[1];
		f.useEffect(function () {
			var M = Rl(o);
			p(M ?? null);
		});
		var y = Um(h && !v),
			S = W(y, 2),
			g = S[0],
			w = S[1],
			E = v ?? g;
		Qm(n && r && et() && (E === g || E === document.body));
		var C = null;
		if (s && In(s) && t) {
			var x = s;
			C = x.ref;
		}
		var I = as(C, t);
		if (!h || !et() || v === void 0) return null;
		var T = E === !1 || ep(),
			A = s;
		return (
			t && (A = f.cloneElement(s, { ref: I })),
			f.createElement(Ju.Provider, { value: w }, T ? A : Cf.createPortal(A, E))
		);
	});
function tp() {
	var e = z({}, zo);
	return e.useId;
}
var Pl = 0,
	Tl = tp();
const rp = Tl
	? function (t) {
			var r = Tl();
			return t || r;
		}
	: function (t) {
			var r = f.useState("ssr-id"),
				n = W(r, 2),
				o = n[0],
				i = n[1];
			return (
				f.useEffect(function () {
					var a = Pl;
					(Pl += 1), i("rc_unique_".concat(a));
				}, []),
				t || o
			);
		};
var np = function (t) {
	if (et() && window.document.documentElement) {
		var r = Array.isArray(t) ? t : [t],
			n = window.document.documentElement;
		return r.some(function (o) {
			return o in n.style;
		});
	}
	return !1;
};
function Al(e, t) {
	return np(e);
}
var gr = "RC_FORM_INTERNAL_HOOKS",
	$e = function () {
		gt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
	},
	Qr = f.createContext({
		getFieldValue: $e,
		getFieldsValue: $e,
		getFieldError: $e,
		getFieldWarning: $e,
		getFieldsError: $e,
		isFieldsTouched: $e,
		isFieldTouched: $e,
		isFieldValidating: $e,
		isFieldsValidating: $e,
		resetFields: $e,
		setFields: $e,
		setFieldValue: $e,
		setFieldsValue: $e,
		validateFields: $e,
		submit: $e,
		getInternalHooks: function () {
			return (
				$e(),
				{
					dispatch: $e,
					initEntityValue: $e,
					registerField: $e,
					useSubscribe: $e,
					setInitialValues: $e,
					destroyForm: $e,
					setCallbacks: $e,
					registerWatch: $e,
					getFields: $e,
					setValidateMessages: $e,
					setPreserve: $e,
					getInitialValue: $e,
				}
			);
		},
	}),
	jo = f.createContext(null);
function La(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e];
}
function op(e) {
	return e && !!e._init;
}
function mr() {
	return (
		(mr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
					}
					return e;
				}),
		mr.apply(this, arguments)
	);
}
function ip(e, t) {
	(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Tn(e, t);
}
function za(e) {
	return (
		(za = Object.setPrototypeOf
			? Object.getPrototypeOf.bind()
			: function (r) {
					return r.__proto__ || Object.getPrototypeOf(r);
				}),
		za(e)
	);
}
function Tn(e, t) {
	return (
		(Tn = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (n, o) {
					return (n.__proto__ = o), n;
				}),
		Tn(e, t)
	);
}
function ap() {
	if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
	} catch {
		return !1;
	}
}
function Co(e, t, r) {
	return (
		ap()
			? (Co = Reflect.construct.bind())
			: (Co = function (o, i, a) {
					var s = [null];
					s.push.apply(s, i);
					var l = Function.bind.apply(o, s),
						c = new l();
					return a && Tn(c, a.prototype), c;
				}),
		Co.apply(null, arguments)
	);
}
function sp(e) {
	return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Na(e) {
	var t = typeof Map == "function" ? new Map() : void 0;
	return (
		(Na = function (n) {
			if (n === null || !sp(n)) return n;
			if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t < "u") {
				if (t.has(n)) return t.get(n);
				t.set(n, o);
			}
			function o() {
				return Co(n, arguments, za(this).constructor);
			}
			return (
				(o.prototype = Object.create(n.prototype, {
					constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
				})),
				Tn(o, n)
			);
		}),
		Na(e)
	);
}
var lp = /%[sdj%]/g,
	cp = function () {};
function ka(e) {
	if (!e || !e.length) return null;
	var t = {};
	return (
		e.forEach(function (r) {
			var n = r.field;
			(t[n] = t[n] || []), t[n].push(r);
		}),
		t
	);
}
function vt(e) {
	for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
	var o = 0,
		i = r.length;
	if (typeof e == "function") return e.apply(null, r);
	if (typeof e == "string") {
		var a = e.replace(lp, function (s) {
			if (s === "%%") return "%";
			if (o >= i) return s;
			switch (s) {
				case "%s":
					return String(r[o++]);
				case "%d":
					return Number(r[o++]);
				case "%j":
					try {
						return JSON.stringify(r[o++]);
					} catch {
						return "[Circular]";
					}
					break;
				default:
					return s;
			}
		});
		return a;
	}
	return e;
}
function up(e) {
	return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Be(e, t) {
	return !!(e == null || (t === "array" && Array.isArray(e) && !e.length) || (up(t) && typeof e == "string" && !e));
}
function fp(e, t, r) {
	var n = [],
		o = 0,
		i = e.length;
	function a(s) {
		n.push.apply(n, s || []), o++, o === i && r(n);
	}
	e.forEach(function (s) {
		t(s, a);
	});
}
function Ml(e, t, r) {
	var n = 0,
		o = e.length;
	function i(a) {
		if (a && a.length) {
			r(a);
			return;
		}
		var s = n;
		(n = n + 1), s < o ? t(e[s], i) : r([]);
	}
	i([]);
}
function dp(e) {
	var t = [];
	return (
		Object.keys(e).forEach(function (r) {
			t.push.apply(t, e[r] || []);
		}),
		t
	);
}
var Il = (function (e) {
	ip(t, e);
	function t(r, n) {
		var o;
		return (o = e.call(this, "Async Validation Error") || this), (o.errors = r), (o.fields = n), o;
	}
	return t;
})(Na(Error));
function hp(e, t, r, n, o) {
	if (t.first) {
		var i = new Promise(function (h, b) {
			var m = function (y) {
					return n(y), y.length ? b(new Il(y, ka(y))) : h(o);
				},
				v = dp(e);
			Ml(v, r, m);
		});
		return (
			i.catch(function (h) {
				return h;
			}),
			i
		);
	}
	var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
		s = Object.keys(e),
		l = s.length,
		c = 0,
		u = [],
		d = new Promise(function (h, b) {
			var m = function (p) {
				if ((u.push.apply(u, p), c++, c === l)) return n(u), u.length ? b(new Il(u, ka(u))) : h(o);
			};
			s.length || (n(u), h(o)),
				s.forEach(function (v) {
					var p = e[v];
					a.indexOf(v) !== -1 ? Ml(p, r, m) : fp(p, r, m);
				});
		});
	return (
		d.catch(function (h) {
			return h;
		}),
		d
	);
}
function vp(e) {
	return !!(e && e.message !== void 0);
}
function gp(e, t) {
	for (var r = e, n = 0; n < t.length; n++) {
		if (r == null) return r;
		r = r[t[n]];
	}
	return r;
}
function _l(e, t) {
	return function (r) {
		var n;
		return (
			e.fullFields ? (n = gp(t, e.fullFields)) : (n = t[r.field || e.fullField]),
			vp(r)
				? ((r.field = r.field || e.fullField), (r.fieldValue = n), r)
				: { message: typeof r == "function" ? r() : r, fieldValue: n, field: r.field || e.fullField }
		);
	};
}
function Fl(e, t) {
	if (t) {
		for (var r in t)
			if (t.hasOwnProperty(r)) {
				var n = t[r];
				typeof n == "object" && typeof e[r] == "object" ? (e[r] = mr({}, e[r], n)) : (e[r] = n);
			}
	}
	return e;
}
var tf = function (t, r, n, o, i, a) {
		t.required && (!n.hasOwnProperty(t.field) || Be(r, a || t.type)) && o.push(vt(i.messages.required, t.fullField));
	},
	mp = function (t, r, n, o, i) {
		(/^\s+$/.test(r) || r === "") && o.push(vt(i.messages.whitespace, t.fullField));
	},
	ho,
	pp = function () {
		if (ho) return ho;
		var e = "[a-fA-F\\d:]",
			t = function (w) {
				return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
			},
			r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
			n = "[a-fA-F\\d]{1,4}",
			o = (
				`
(?:
(?:` +
				n +
				":){7}(?:" +
				n +
				`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
				n +
				":){6}(?:" +
				r +
				"|:" +
				n +
				`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
				n +
				":){5}(?::" +
				r +
				"|(?::" +
				n +
				`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
				n +
				":){4}(?:(?::" +
				n +
				"){0,1}:" +
				r +
				"|(?::" +
				n +
				`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
				n +
				":){3}(?:(?::" +
				n +
				"){0,2}:" +
				r +
				"|(?::" +
				n +
				`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
				n +
				":){2}(?:(?::" +
				n +
				"){0,3}:" +
				r +
				"|(?::" +
				n +
				`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
				n +
				":){1}(?:(?::" +
				n +
				"){0,4}:" +
				r +
				"|(?::" +
				n +
				`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
				n +
				"){0,5}:" +
				r +
				"|(?::" +
				n +
				`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
			)
				.replace(/\s*\/\/.*$/gm, "")
				.replace(/\n/g, "")
				.trim(),
			i = new RegExp("(?:^" + r + "$)|(?:^" + o + "$)"),
			a = new RegExp("^" + r + "$"),
			s = new RegExp("^" + o + "$"),
			l = function (w) {
				return w && w.exact ? i : new RegExp("(?:" + t(w) + r + t(w) + ")|(?:" + t(w) + o + t(w) + ")", "g");
			};
		(l.v4 = function (g) {
			return g && g.exact ? a : new RegExp("" + t(g) + r + t(g), "g");
		}),
			(l.v6 = function (g) {
				return g && g.exact ? s : new RegExp("" + t(g) + o + t(g), "g");
			});
		var c = "(?:(?:[a-z]+:)?//)",
			u = "(?:\\S+(?::\\S*)?@)?",
			d = l.v4().source,
			h = l.v6().source,
			b = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
			m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
			v = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
			p = "(?::\\d{2,5})?",
			y = '(?:[/?#][^\\s"]*)?',
			S = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + d + "|" + h + "|" + b + m + v + ")" + p + y;
		return (ho = new RegExp("(?:^" + S + "$)", "i")), ho;
	},
	jl = {
		email:
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
		hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
	},
	vn = {
		integer: function (t) {
			return vn.number(t) && parseInt(t, 10) === t;
		},
		float: function (t) {
			return vn.number(t) && !vn.integer(t);
		},
		array: function (t) {
			return Array.isArray(t);
		},
		regexp: function (t) {
			if (t instanceof RegExp) return !0;
			try {
				return !!new RegExp(t);
			} catch {
				return !1;
			}
		},
		date: function (t) {
			return (
				typeof t.getTime == "function" &&
				typeof t.getMonth == "function" &&
				typeof t.getYear == "function" &&
				!isNaN(t.getTime())
			);
		},
		number: function (t) {
			return isNaN(t) ? !1 : typeof t == "number";
		},
		object: function (t) {
			return typeof t == "object" && !vn.array(t);
		},
		method: function (t) {
			return typeof t == "function";
		},
		email: function (t) {
			return typeof t == "string" && t.length <= 320 && !!t.match(jl.email);
		},
		url: function (t) {
			return typeof t == "string" && t.length <= 2048 && !!t.match(pp());
		},
		hex: function (t) {
			return typeof t == "string" && !!t.match(jl.hex);
		},
	},
	bp = function (t, r, n, o, i) {
		if (t.required && r === void 0) {
			tf(t, r, n, o, i);
			return;
		}
		var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"],
			s = t.type;
		a.indexOf(s) > -1
			? vn[s](r) || o.push(vt(i.messages.types[s], t.fullField, t.type))
			: s && typeof r !== t.type && o.push(vt(i.messages.types[s], t.fullField, t.type));
	},
	yp = function (t, r, n, o, i) {
		var a = typeof t.len == "number",
			s = typeof t.min == "number",
			l = typeof t.max == "number",
			c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
			u = r,
			d = null,
			h = typeof r == "number",
			b = typeof r == "string",
			m = Array.isArray(r);
		if ((h ? (d = "number") : b ? (d = "string") : m && (d = "array"), !d)) return !1;
		m && (u = r.length),
			b && (u = r.replace(c, "_").length),
			a
				? u !== t.len && o.push(vt(i.messages[d].len, t.fullField, t.len))
				: s && !l && u < t.min
					? o.push(vt(i.messages[d].min, t.fullField, t.min))
					: l && !s && u > t.max
						? o.push(vt(i.messages[d].max, t.fullField, t.max))
						: s && l && (u < t.min || u > t.max) && o.push(vt(i.messages[d].range, t.fullField, t.min, t.max));
	},
	Mr = "enum",
	Sp = function (t, r, n, o, i) {
		(t[Mr] = Array.isArray(t[Mr]) ? t[Mr] : []),
			t[Mr].indexOf(r) === -1 && o.push(vt(i.messages[Mr], t.fullField, t[Mr].join(", ")));
	},
	wp = function (t, r, n, o, i) {
		if (t.pattern) {
			if (t.pattern instanceof RegExp)
				(t.pattern.lastIndex = 0),
					t.pattern.test(r) || o.push(vt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
			else if (typeof t.pattern == "string") {
				var a = new RegExp(t.pattern);
				a.test(r) || o.push(vt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
			}
		}
	},
	ge = { required: tf, whitespace: mp, type: bp, range: yp, enum: Sp, pattern: wp },
	xp = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r, "string") && !t.required) return n();
			ge.required(t, r, o, a, i, "string"),
				Be(r, "string") ||
					(ge.type(t, r, o, a, i),
					ge.range(t, r, o, a, i),
					ge.pattern(t, r, o, a, i),
					t.whitespace === !0 && ge.whitespace(t, r, o, a, i));
		}
		n(a);
	},
	Cp = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i), r !== void 0 && ge.type(t, r, o, a, i);
		}
		n(a);
	},
	Ep = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if ((r === "" && (r = void 0), Be(r) && !t.required)) return n();
			ge.required(t, r, o, a, i), r !== void 0 && (ge.type(t, r, o, a, i), ge.range(t, r, o, a, i));
		}
		n(a);
	},
	$p = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i), r !== void 0 && ge.type(t, r, o, a, i);
		}
		n(a);
	},
	Op = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i), Be(r) || ge.type(t, r, o, a, i);
		}
		n(a);
	},
	Rp = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i), r !== void 0 && (ge.type(t, r, o, a, i), ge.range(t, r, o, a, i));
		}
		n(a);
	},
	Pp = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i), r !== void 0 && (ge.type(t, r, o, a, i), ge.range(t, r, o, a, i));
		}
		n(a);
	},
	Tp = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (r == null && !t.required) return n();
			ge.required(t, r, o, a, i, "array"), r != null && (ge.type(t, r, o, a, i), ge.range(t, r, o, a, i));
		}
		n(a);
	},
	Ap = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i), r !== void 0 && ge.type(t, r, o, a, i);
		}
		n(a);
	},
	Mp = "enum",
	Ip = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i), r !== void 0 && ge[Mp](t, r, o, a, i);
		}
		n(a);
	},
	_p = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r, "string") && !t.required) return n();
			ge.required(t, r, o, a, i), Be(r, "string") || ge.pattern(t, r, o, a, i);
		}
		n(a);
	},
	Fp = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r, "date") && !t.required) return n();
			if ((ge.required(t, r, o, a, i), !Be(r, "date"))) {
				var l;
				r instanceof Date ? (l = r) : (l = new Date(r)), ge.type(t, l, o, a, i), l && ge.range(t, l.getTime(), o, a, i);
			}
		}
		n(a);
	},
	jp = function (t, r, n, o, i) {
		var a = [],
			s = Array.isArray(r) ? "array" : typeof r;
		ge.required(t, r, o, a, i, s), n(a);
	},
	Xi = function (t, r, n, o, i) {
		var a = t.type,
			s = [],
			l = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (l) {
			if (Be(r, a) && !t.required) return n();
			ge.required(t, r, o, s, i, a), Be(r, a) || ge.type(t, r, o, s, i);
		}
		n(s);
	},
	Lp = function (t, r, n, o, i) {
		var a = [],
			s = t.required || (!t.required && o.hasOwnProperty(t.field));
		if (s) {
			if (Be(r) && !t.required) return n();
			ge.required(t, r, o, a, i);
		}
		n(a);
	},
	bn = {
		string: xp,
		method: Cp,
		number: Ep,
		boolean: $p,
		regexp: Op,
		integer: Rp,
		float: Pp,
		array: Tp,
		object: Ap,
		enum: Ip,
		pattern: _p,
		date: Fp,
		url: Xi,
		hex: Xi,
		email: Xi,
		required: jp,
		any: Lp,
	};
function Ha() {
	return {
		default: "Validation error on field %s",
		required: "%s is required",
		enum: "%s must be one of %s",
		whitespace: "%s cannot be empty",
		date: {
			format: "%s date %s is invalid for format %s",
			parse: "%s date could not be parsed, %s is invalid ",
			invalid: "%s date %s is invalid",
		},
		types: {
			string: "%s is not a %s",
			method: "%s is not a %s (function)",
			array: "%s is not an %s",
			object: "%s is not an %s",
			number: "%s is not a %s",
			date: "%s is not a %s",
			boolean: "%s is not a %s",
			integer: "%s is not an %s",
			float: "%s is not a %s",
			regexp: "%s is not a valid %s",
			email: "%s is not a valid %s",
			url: "%s is not a valid %s",
			hex: "%s is not a valid %s",
		},
		string: {
			len: "%s must be exactly %s characters",
			min: "%s must be at least %s characters",
			max: "%s cannot be longer than %s characters",
			range: "%s must be between %s and %s characters",
		},
		number: {
			len: "%s must equal %s",
			min: "%s cannot be less than %s",
			max: "%s cannot be greater than %s",
			range: "%s must be between %s and %s",
		},
		array: {
			len: "%s must be exactly %s in length",
			min: "%s cannot be less than %s in length",
			max: "%s cannot be greater than %s in length",
			range: "%s must be between %s and %s in length",
		},
		pattern: { mismatch: "%s value %s does not match pattern %s" },
		clone: function () {
			var t = JSON.parse(JSON.stringify(this));
			return (t.clone = this.clone), t;
		},
	};
}
var Da = Ha(),
	zn = (function () {
		function e(r) {
			(this.rules = null), (this._messages = Da), this.define(r);
		}
		var t = e.prototype;
		return (
			(t.define = function (n) {
				var o = this;
				if (!n) throw new Error("Cannot configure a schema with no rules");
				if (typeof n != "object" || Array.isArray(n)) throw new Error("Rules must be an object");
				(this.rules = {}),
					Object.keys(n).forEach(function (i) {
						var a = n[i];
						o.rules[i] = Array.isArray(a) ? a : [a];
					});
			}),
			(t.messages = function (n) {
				return n && (this._messages = Fl(Ha(), n)), this._messages;
			}),
			(t.validate = function (n, o, i) {
				var a = this;
				o === void 0 && (o = {}), i === void 0 && (i = function () {});
				var s = n,
					l = o,
					c = i;
				if ((typeof l == "function" && ((c = l), (l = {})), !this.rules || Object.keys(this.rules).length === 0))
					return c && c(null, s), Promise.resolve(s);
				function u(v) {
					var p = [],
						y = {};
					function S(w) {
						if (Array.isArray(w)) {
							var E;
							p = (E = p).concat.apply(E, w);
						} else p.push(w);
					}
					for (var g = 0; g < v.length; g++) S(v[g]);
					p.length ? ((y = ka(p)), c(p, y)) : c(null, s);
				}
				if (l.messages) {
					var d = this.messages();
					d === Da && (d = Ha()), Fl(d, l.messages), (l.messages = d);
				} else l.messages = this.messages();
				var h = {},
					b = l.keys || Object.keys(this.rules);
				b.forEach(function (v) {
					var p = a.rules[v],
						y = s[v];
					p.forEach(function (S) {
						var g = S;
						typeof g.transform == "function" && (s === n && (s = mr({}, s)), (y = s[v] = g.transform(y))),
							typeof g == "function" ? (g = { validator: g }) : (g = mr({}, g)),
							(g.validator = a.getValidationMethod(g)),
							g.validator &&
								((g.field = v),
								(g.fullField = g.fullField || v),
								(g.type = a.getType(g)),
								(h[v] = h[v] || []),
								h[v].push({ rule: g, value: y, source: s, field: v }));
					});
				});
				var m = {};
				return hp(
					h,
					l,
					function (v, p) {
						var y = v.rule,
							S =
								(y.type === "object" || y.type === "array") &&
								(typeof y.fields == "object" || typeof y.defaultField == "object");
						(S = S && (y.required || (!y.required && v.value))), (y.field = v.field);
						function g(C, x) {
							return mr({}, x, {
								fullField: y.fullField + "." + C,
								fullFields: y.fullFields ? [].concat(y.fullFields, [C]) : [C],
							});
						}
						function w(C) {
							C === void 0 && (C = []);
							var x = Array.isArray(C) ? C : [C];
							!l.suppressWarning && x.length && e.warning("async-validator:", x),
								x.length && y.message !== void 0 && (x = [].concat(y.message));
							var I = x.map(_l(y, s));
							if (l.first && I.length) return (m[y.field] = 1), p(I);
							if (!S) p(I);
							else {
								if (y.required && !v.value)
									return (
										y.message !== void 0
											? (I = [].concat(y.message).map(_l(y, s)))
											: l.error && (I = [l.error(y, vt(l.messages.required, y.field))]),
										p(I)
									);
								var T = {};
								y.defaultField &&
									Object.keys(v.value).map(function (_) {
										T[_] = y.defaultField;
									}),
									(T = mr({}, T, v.rule.fields));
								var A = {};
								Object.keys(T).forEach(function (_) {
									var F = T[_],
										k = Array.isArray(F) ? F : [F];
									A[_] = k.map(g.bind(null, _));
								});
								var M = new e(A);
								M.messages(l.messages),
									v.rule.options && ((v.rule.options.messages = l.messages), (v.rule.options.error = l.error)),
									M.validate(v.value, v.rule.options || l, function (_) {
										var F = [];
										I && I.length && F.push.apply(F, I), _ && _.length && F.push.apply(F, _), p(F.length ? F : null);
									});
							}
						}
						var E;
						if (y.asyncValidator) E = y.asyncValidator(y, v.value, w, v.source, l);
						else if (y.validator) {
							try {
								E = y.validator(y, v.value, w, v.source, l);
							} catch (C) {
								console.error == null,
									l.suppressValidatorError ||
										setTimeout(function () {
											throw C;
										}, 0),
									w(C.message);
							}
							E === !0
								? w()
								: E === !1
									? w(
											typeof y.message == "function"
												? y.message(y.fullField || y.field)
												: y.message || (y.fullField || y.field) + " fails",
										)
									: E instanceof Array
										? w(E)
										: E instanceof Error && w(E.message);
						}
						E &&
							E.then &&
							E.then(
								function () {
									return w();
								},
								function (C) {
									return w(C);
								},
							);
					},
					function (v) {
						u(v);
					},
					s,
				);
			}),
			(t.getType = function (n) {
				if (
					(n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"),
					typeof n.validator != "function" && n.type && !bn.hasOwnProperty(n.type))
				)
					throw new Error(vt("Unknown rule type %s", n.type));
				return n.type || "string";
			}),
			(t.getValidationMethod = function (n) {
				if (typeof n.validator == "function") return n.validator;
				var o = Object.keys(n),
					i = o.indexOf("message");
				return (
					i !== -1 && o.splice(i, 1),
					o.length === 1 && o[0] === "required" ? bn.required : bn[this.getType(n)] || void 0
				);
			}),
			e
		);
	})();
zn.register = function (t, r) {
	if (typeof r != "function") throw new Error("Cannot register a validator by type, validator is not a function");
	bn[t] = r;
};
zn.warning = cp;
zn.messages = Da;
zn.validators = bn;
var ct = "'${name}' is not a valid ${type}",
	rf = {
		default: "Validation error on field '${name}'",
		required: "'${name}' is required",
		enum: "'${name}' must be one of [${enum}]",
		whitespace: "'${name}' cannot be empty",
		date: {
			format: "'${name}' is invalid for format date",
			parse: "'${name}' could not be parsed as date",
			invalid: "'${name}' is invalid date",
		},
		types: {
			string: ct,
			method: ct,
			array: ct,
			object: ct,
			number: ct,
			date: ct,
			boolean: ct,
			integer: ct,
			float: ct,
			regexp: ct,
			email: ct,
			url: ct,
			hex: ct,
		},
		string: {
			len: "'${name}' must be exactly ${len} characters",
			min: "'${name}' must be at least ${min} characters",
			max: "'${name}' cannot be longer than ${max} characters",
			range: "'${name}' must be between ${min} and ${max} characters",
		},
		number: {
			len: "'${name}' must equal ${len}",
			min: "'${name}' cannot be less than ${min}",
			max: "'${name}' cannot be greater than ${max}",
			range: "'${name}' must be between ${min} and ${max}",
		},
		array: {
			len: "'${name}' must be exactly ${len} in length",
			min: "'${name}' cannot be less than ${min} in length",
			max: "'${name}' cannot be greater than ${max} in length",
			range: "'${name}' must be between ${min} and ${max} in length",
		},
		pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
	},
	Ll = zn;
function zp(e, t) {
	return e.replace(/\$\{\w+\}/g, function (r) {
		var n = r.slice(2, -1);
		return t[n];
	});
}
var zl = "CODE_LOGIC_ERROR";
function Ba(e, t, r, n, o) {
	return Va.apply(this, arguments);
}
function Va() {
	return (
		(Va = wr(
			tt().mark(function e(t, r, n, o, i) {
				var a, s, l, c, u, d, h, b, m;
				return tt().wrap(
					function (p) {
						for (;;)
							switch ((p.prev = p.next)) {
								case 0:
									return (
										(a = z({}, n)),
										delete a.ruleIndex,
										(Ll.warning = function () {}),
										a.validator &&
											((s = a.validator),
											(a.validator = function () {
												try {
													return s.apply(void 0, arguments);
												} catch {
													return Promise.reject(zl);
												}
											})),
										(l = null),
										a && a.type === "array" && a.defaultField && ((l = a.defaultField), delete a.defaultField),
										(c = new Ll(P({}, t, [a]))),
										(u = kr(rf, o.validateMessages)),
										c.messages(u),
										(d = []),
										(p.prev = 10),
										(p.next = 13),
										Promise.resolve(c.validate(P({}, t, r), z({}, o)))
									);
								case 13:
									p.next = 18;
									break;
								case 15:
									(p.prev = 15),
										(p.t0 = p.catch(10)),
										p.t0.errors &&
											(d = p.t0.errors.map(function (y, S) {
												var g = y.message,
													w = g === zl ? u.default : g;
												return f.isValidElement(w) ? f.cloneElement(w, { key: "error_".concat(S) }) : w;
											}));
								case 18:
									if (!(!d.length && l)) {
										p.next = 23;
										break;
									}
									return (
										(p.next = 21),
										Promise.all(
											r.map(function (y, S) {
												return Ba("".concat(t, ".").concat(S), y, l, o, i);
											}),
										)
									);
								case 21:
									return (
										(h = p.sent),
										p.abrupt(
											"return",
											h.reduce(function (y, S) {
												return [].concat(te(y), te(S));
											}, []),
										)
									);
								case 23:
									return (
										(b = z(z({}, n), {}, { name: t, enum: (n.enum || []).join(", ") }, i)),
										(m = d.map(function (y) {
											return typeof y == "string" ? zp(y, b) : y;
										})),
										p.abrupt("return", m)
									);
								case 26:
								case "end":
									return p.stop();
							}
					},
					e,
					null,
					[[10, 15]],
				);
			}),
		)),
		Va.apply(this, arguments)
	);
}
function Np(e, t, r, n, o, i) {
	var a = e.join("."),
		s = r
			.map(function (u, d) {
				var h = u.validator,
					b = z(z({}, u), {}, { ruleIndex: d });
				return (
					h &&
						(b.validator = function (m, v, p) {
							var y = !1,
								S = function () {
									for (var E = arguments.length, C = new Array(E), x = 0; x < E; x++) C[x] = arguments[x];
									Promise.resolve().then(function () {
										gt(!y, "Your validator function has already return a promise. `callback` will be ignored."),
											y || p.apply(void 0, C);
									});
								},
								g = h(m, v, S);
							(y = g && typeof g.then == "function" && typeof g.catch == "function"),
								gt(y, "`callback` is deprecated. Please return a promise instead."),
								y &&
									g
										.then(function () {
											p();
										})
										.catch(function (w) {
											p(w || " ");
										});
						}),
					b
				);
			})
			.sort(function (u, d) {
				var h = u.warningOnly,
					b = u.ruleIndex,
					m = d.warningOnly,
					v = d.ruleIndex;
				return !!h == !!m ? b - v : h ? 1 : -1;
			}),
		l;
	if (o === !0)
		l = new Promise(
			(function () {
				var u = wr(
					tt().mark(function d(h, b) {
						var m, v, p;
						return tt().wrap(function (S) {
							for (;;)
								switch ((S.prev = S.next)) {
									case 0:
										m = 0;
									case 1:
										if (!(m < s.length)) {
											S.next = 12;
											break;
										}
										return (v = s[m]), (S.next = 5), Ba(a, t, v, n, i);
									case 5:
										if (((p = S.sent), !p.length)) {
											S.next = 9;
											break;
										}
										return b([{ errors: p, rule: v }]), S.abrupt("return");
									case 9:
										(m += 1), (S.next = 1);
										break;
									case 12:
										h([]);
									case 13:
									case "end":
										return S.stop();
								}
						}, d);
					}),
				);
				return function (d, h) {
					return u.apply(this, arguments);
				};
			})(),
		);
	else {
		var c = s.map(function (u) {
			return Ba(a, t, u, n, i).then(function (d) {
				return { errors: d, rule: u };
			});
		});
		l = (o ? Hp(c) : kp(c)).then(function (u) {
			return Promise.reject(u);
		});
	}
	return (
		l.catch(function (u) {
			return u;
		}),
		l
	);
}
function kp(e) {
	return Wa.apply(this, arguments);
}
function Wa() {
	return (
		(Wa = wr(
			tt().mark(function e(t) {
				return tt().wrap(function (n) {
					for (;;)
						switch ((n.prev = n.next)) {
							case 0:
								return n.abrupt(
									"return",
									Promise.all(t).then(function (o) {
										var i,
											a = (i = []).concat.apply(i, te(o));
										return a;
									}),
								);
							case 1:
							case "end":
								return n.stop();
						}
				}, e);
			}),
		)),
		Wa.apply(this, arguments)
	);
}
function Hp(e) {
	return Ga.apply(this, arguments);
}
function Ga() {
	return (
		(Ga = wr(
			tt().mark(function e(t) {
				var r;
				return tt().wrap(function (o) {
					for (;;)
						switch ((o.prev = o.next)) {
							case 0:
								return (
									(r = 0),
									o.abrupt(
										"return",
										new Promise(function (i) {
											t.forEach(function (a) {
												a.then(function (s) {
													s.errors.length && i([s]), (r += 1), r === t.length && i([]);
												});
											});
										}),
									)
								);
							case 2:
							case "end":
								return o.stop();
						}
				}, e);
			}),
		)),
		Ga.apply(this, arguments)
	);
}
function Fe(e) {
	return La(e);
}
function Nl(e, t) {
	var r = {};
	return (
		t.forEach(function (n) {
			var o = It(e, n);
			r = At(r, n, o);
		}),
		r
	);
}
function Vr(e, t) {
	var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
	return (
		e &&
		e.some(function (n) {
			return nf(t, n, r);
		})
	);
}
function nf(e, t) {
	var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
	return !e || !t || (!r && e.length !== t.length)
		? !1
		: t.every(function (n, o) {
				return e[o] === n;
			});
}
function Dp(e, t) {
	if (e === t) return !0;
	if ((!e && t) || (e && !t) || !e || !t || pe(e) !== "object" || pe(t) !== "object") return !1;
	var r = Object.keys(e),
		n = Object.keys(t),
		o = new Set([].concat(r, n));
	return te(o).every(function (i) {
		var a = e[i],
			s = t[i];
		return typeof a == "function" && typeof s == "function" ? !0 : a === s;
	});
}
function Bp(e) {
	var t = arguments.length <= 1 ? void 0 : arguments[1];
	return t && t.target && pe(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function kl(e, t, r) {
	var n = e.length;
	if (t < 0 || t >= n || r < 0 || r >= n) return e;
	var o = e[t],
		i = t - r;
	return i > 0
		? [].concat(te(e.slice(0, r)), [o], te(e.slice(r, t)), te(e.slice(t + 1, n)))
		: i < 0
			? [].concat(te(e.slice(0, t)), te(e.slice(t + 1, r + 1)), [o], te(e.slice(r + 1, n)))
			: e;
}
var Vp = ["name"],
	St = [];
function Hl(e, t, r, n, o, i) {
	return typeof e == "function" ? e(t, r, "source" in i ? { source: i.source } : {}) : n !== o;
}
var ws = (function (e) {
	Wo(r, e);
	var t = Go(r);
	function r(n) {
		var o;
		if (
			(Lt(this, r),
			(o = t.call(this, n)),
			P(be(o), "state", { resetCount: 0 }),
			P(be(o), "cancelRegisterFunc", null),
			P(be(o), "mounted", !1),
			P(be(o), "touched", !1),
			P(be(o), "dirty", !1),
			P(be(o), "validatePromise", void 0),
			P(be(o), "prevValidating", void 0),
			P(be(o), "errors", St),
			P(be(o), "warnings", St),
			P(be(o), "cancelRegister", function () {
				var l = o.props,
					c = l.preserve,
					u = l.isListField,
					d = l.name;
				o.cancelRegisterFunc && o.cancelRegisterFunc(u, c, Fe(d)), (o.cancelRegisterFunc = null);
			}),
			P(be(o), "getNamePath", function () {
				var l = o.props,
					c = l.name,
					u = l.fieldContext,
					d = u.prefixName,
					h = d === void 0 ? [] : d;
				return c !== void 0 ? [].concat(te(h), te(c)) : [];
			}),
			P(be(o), "getRules", function () {
				var l = o.props,
					c = l.rules,
					u = c === void 0 ? [] : c,
					d = l.fieldContext;
				return u.map(function (h) {
					return typeof h == "function" ? h(d) : h;
				});
			}),
			P(be(o), "refresh", function () {
				o.mounted &&
					o.setState(function (l) {
						var c = l.resetCount;
						return { resetCount: c + 1 };
					});
			}),
			P(be(o), "metaCache", null),
			P(be(o), "triggerMetaEvent", function (l) {
				var c = o.props.onMetaChange;
				if (c) {
					var u = z(z({}, o.getMeta()), {}, { destroy: l });
					Qc(o.metaCache, u) || c(u), (o.metaCache = u);
				} else o.metaCache = null;
			}),
			P(be(o), "onStoreChange", function (l, c, u) {
				var d = o.props,
					h = d.shouldUpdate,
					b = d.dependencies,
					m = b === void 0 ? [] : b,
					v = d.onReset,
					p = u.store,
					y = o.getNamePath(),
					S = o.getValue(l),
					g = o.getValue(p),
					w = c && Vr(c, y);
				switch (
					(u.type === "valueUpdate" &&
						u.source === "external" &&
						S !== g &&
						((o.touched = !0),
						(o.dirty = !0),
						(o.validatePromise = null),
						(o.errors = St),
						(o.warnings = St),
						o.triggerMetaEvent()),
					u.type)
				) {
					case "reset":
						if (!c || w) {
							(o.touched = !1),
								(o.dirty = !1),
								(o.validatePromise = void 0),
								(o.errors = St),
								(o.warnings = St),
								o.triggerMetaEvent(),
								v?.(),
								o.refresh();
							return;
						}
						break;
					case "remove": {
						if (h) {
							o.reRender();
							return;
						}
						break;
					}
					case "setField": {
						var E = u.data;
						if (w) {
							"touched" in E && (o.touched = E.touched),
								"validating" in E &&
									!("originRCField" in E) &&
									(o.validatePromise = E.validating ? Promise.resolve([]) : null),
								"errors" in E && (o.errors = E.errors || St),
								"warnings" in E && (o.warnings = E.warnings || St),
								(o.dirty = !0),
								o.triggerMetaEvent(),
								o.reRender();
							return;
						} else if ("value" in E && Vr(c, y, !0)) {
							o.reRender();
							return;
						}
						if (h && !y.length && Hl(h, l, p, S, g, u)) {
							o.reRender();
							return;
						}
						break;
					}
					case "dependenciesUpdate": {
						var C = m.map(Fe);
						if (
							C.some(function (x) {
								return Vr(u.relatedFields, x);
							})
						) {
							o.reRender();
							return;
						}
						break;
					}
					default:
						if (w || ((!m.length || y.length || h) && Hl(h, l, p, S, g, u))) {
							o.reRender();
							return;
						}
						break;
				}
				h === !0 && o.reRender();
			}),
			P(be(o), "validateRules", function (l) {
				var c = o.getNamePath(),
					u = o.getValue(),
					d = l || {},
					h = d.triggerName,
					b = d.validateOnly,
					m = b === void 0 ? !1 : b,
					v = Promise.resolve().then(
						wr(
							tt().mark(function p() {
								var y, S, g, w, E, C, x;
								return tt().wrap(function (T) {
									for (;;)
										switch ((T.prev = T.next)) {
											case 0:
												if (o.mounted) {
													T.next = 2;
													break;
												}
												return T.abrupt("return", []);
											case 2:
												if (
													((y = o.props),
													(S = y.validateFirst),
													(g = S === void 0 ? !1 : S),
													(w = y.messageVariables),
													(E = y.validateDebounce),
													(C = o.getRules()),
													h &&
														(C = C.filter(function (A) {
															return A;
														}).filter(function (A) {
															var M = A.validateTrigger;
															if (!M) return !0;
															var _ = La(M);
															return _.includes(h);
														})),
													!(E && h))
												) {
													T.next = 10;
													break;
												}
												return (
													(T.next = 8),
													new Promise(function (A) {
														setTimeout(A, E);
													})
												);
											case 8:
												if (o.validatePromise === v) {
													T.next = 10;
													break;
												}
												return T.abrupt("return", []);
											case 10:
												return (
													(x = Np(c, u, C, l, g, w)),
													x
														.catch(function (A) {
															return A;
														})
														.then(function () {
															var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : St;
															if (o.validatePromise === v) {
																var M;
																o.validatePromise = null;
																var _ = [],
																	F = [];
																(M = A.forEach) === null ||
																	M === void 0 ||
																	M.call(A, function (k) {
																		var D = k.rule.warningOnly,
																			R = k.errors,
																			$ = R === void 0 ? St : R;
																		D ? F.push.apply(F, te($)) : _.push.apply(_, te($));
																	}),
																	(o.errors = _),
																	(o.warnings = F),
																	o.triggerMetaEvent(),
																	o.reRender();
															}
														}),
													T.abrupt("return", x)
												);
											case 13:
											case "end":
												return T.stop();
										}
								}, p);
							}),
						),
					);
				return (
					m ||
						((o.validatePromise = v),
						(o.dirty = !0),
						(o.errors = St),
						(o.warnings = St),
						o.triggerMetaEvent(),
						o.reRender()),
					v
				);
			}),
			P(be(o), "isFieldValidating", function () {
				return !!o.validatePromise;
			}),
			P(be(o), "isFieldTouched", function () {
				return o.touched;
			}),
			P(be(o), "isFieldDirty", function () {
				if (o.dirty || o.props.initialValue !== void 0) return !0;
				var l = o.props.fieldContext,
					c = l.getInternalHooks(gr),
					u = c.getInitialValue;
				return u(o.getNamePath()) !== void 0;
			}),
			P(be(o), "getErrors", function () {
				return o.errors;
			}),
			P(be(o), "getWarnings", function () {
				return o.warnings;
			}),
			P(be(o), "isListField", function () {
				return o.props.isListField;
			}),
			P(be(o), "isList", function () {
				return o.props.isList;
			}),
			P(be(o), "isPreserve", function () {
				return o.props.preserve;
			}),
			P(be(o), "getMeta", function () {
				o.prevValidating = o.isFieldValidating();
				var l = {
					touched: o.isFieldTouched(),
					validating: o.prevValidating,
					errors: o.errors,
					warnings: o.warnings,
					name: o.getNamePath(),
					validated: o.validatePromise === null,
				};
				return l;
			}),
			P(be(o), "getOnlyChild", function (l) {
				if (typeof l == "function") {
					var c = o.getMeta();
					return z(z({}, o.getOnlyChild(l(o.getControlled(), c, o.props.fieldContext))), {}, { isFunction: !0 });
				}
				var u = Kr(l);
				return u.length !== 1 || !f.isValidElement(u[0])
					? { child: u, isFunction: !1 }
					: { child: u[0], isFunction: !1 };
			}),
			P(be(o), "getValue", function (l) {
				var c = o.props.fieldContext.getFieldsValue,
					u = o.getNamePath();
				return It(l || c(!0), u);
			}),
			P(be(o), "getControlled", function () {
				var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					c = o.props,
					u = c.trigger,
					d = c.validateTrigger,
					h = c.getValueFromEvent,
					b = c.normalize,
					m = c.valuePropName,
					v = c.getValueProps,
					p = c.fieldContext,
					y = d !== void 0 ? d : p.validateTrigger,
					S = o.getNamePath(),
					g = p.getInternalHooks,
					w = p.getFieldsValue,
					E = g(gr),
					C = E.dispatch,
					x = o.getValue(),
					I =
						v ||
						function (_) {
							return P({}, m, _);
						},
					T = l[u],
					A = z(z({}, l), I(x));
				A[u] = function () {
					(o.touched = !0), (o.dirty = !0), o.triggerMetaEvent();
					for (var _, F = arguments.length, k = new Array(F), D = 0; D < F; D++) k[D] = arguments[D];
					h ? (_ = h.apply(void 0, k)) : (_ = Bp.apply(void 0, [m].concat(k))),
						b && (_ = b(_, x, w(!0))),
						C({ type: "updateValue", namePath: S, value: _ }),
						T && T.apply(void 0, k);
				};
				var M = La(y || []);
				return (
					M.forEach(function (_) {
						var F = A[_];
						A[_] = function () {
							F && F.apply(void 0, arguments);
							var k = o.props.rules;
							k && k.length && C({ type: "validateField", namePath: S, triggerName: _ });
						};
					}),
					A
				);
			}),
			n.fieldContext)
		) {
			var i = n.fieldContext.getInternalHooks,
				a = i(gr),
				s = a.initEntityValue;
			s(be(o));
		}
		return o;
	}
	return (
		zt(r, [
			{
				key: "componentDidMount",
				value: function () {
					var o = this.props,
						i = o.shouldUpdate,
						a = o.fieldContext;
					if (((this.mounted = !0), a)) {
						var s = a.getInternalHooks,
							l = s(gr),
							c = l.registerField;
						this.cancelRegisterFunc = c(this);
					}
					i === !0 && this.reRender();
				},
			},
			{
				key: "componentWillUnmount",
				value: function () {
					this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1);
				},
			},
			{
				key: "reRender",
				value: function () {
					this.mounted && this.forceUpdate();
				},
			},
			{
				key: "render",
				value: function () {
					var o = this.state.resetCount,
						i = this.props.children,
						a = this.getOnlyChild(i),
						s = a.child,
						l = a.isFunction,
						c;
					return (
						l
							? (c = s)
							: f.isValidElement(s)
								? (c = f.cloneElement(s, this.getControlled(s.props)))
								: (gt(!s, "`children` of Field is not validate ReactElement."), (c = s)),
						f.createElement(f.Fragment, { key: o }, c)
					);
				},
			},
		]),
		r
	);
})(f.Component);
P(ws, "contextType", Qr);
P(ws, "defaultProps", { trigger: "onChange", valuePropName: "value" });
function of(e) {
	var t = e.name,
		r = Et(e, Vp),
		n = f.useContext(Qr),
		o = f.useContext(jo),
		i = t !== void 0 ? Fe(t) : void 0,
		a = "keep";
	return (
		r.isListField || (a = "_".concat((i || []).join("_"))),
		f.createElement(ws, Te({ key: a, name: i, isListField: !!o }, r, { fieldContext: n }))
	);
}
function Wp(e) {
	var t = e.name,
		r = e.initialValue,
		n = e.children,
		o = e.rules,
		i = e.validateTrigger,
		a = e.isListField,
		s = f.useContext(Qr),
		l = f.useContext(jo),
		c = f.useRef({ keys: [], id: 0 }),
		u = c.current,
		d = f.useMemo(
			function () {
				var v = Fe(s.prefixName) || [];
				return [].concat(te(v), te(Fe(t)));
			},
			[s.prefixName, t],
		),
		h = f.useMemo(
			function () {
				return z(z({}, s), {}, { prefixName: d });
			},
			[s, d],
		),
		b = f.useMemo(
			function () {
				return {
					getKey: function (p) {
						var y = d.length,
							S = p[y];
						return [u.keys[S], p.slice(y + 1)];
					},
				};
			},
			[d],
		);
	if (typeof n != "function") return gt(!1, "Form.List only accepts function as children."), null;
	var m = function (p, y, S) {
		var g = S.source;
		return g === "internal" ? !1 : p !== y;
	};
	return f.createElement(
		jo.Provider,
		{ value: b },
		f.createElement(
			Qr.Provider,
			{ value: h },
			f.createElement(
				of,
				{ name: [], shouldUpdate: m, rules: o, validateTrigger: i, initialValue: r, isList: !0, isListField: a ?? !!l },
				function (v, p) {
					var y = v.value,
						S = y === void 0 ? [] : y,
						g = v.onChange,
						w = s.getFieldValue,
						E = function () {
							var T = w(d || []);
							return T || [];
						},
						C = {
							add: function (T, A) {
								var M = E();
								A >= 0 && A <= M.length
									? ((u.keys = [].concat(te(u.keys.slice(0, A)), [u.id], te(u.keys.slice(A)))),
										g([].concat(te(M.slice(0, A)), [T], te(M.slice(A)))))
									: ((u.keys = [].concat(te(u.keys), [u.id])), g([].concat(te(M), [T]))),
									(u.id += 1);
							},
							remove: function (T) {
								var A = E(),
									M = new Set(Array.isArray(T) ? T : [T]);
								M.size <= 0 ||
									((u.keys = u.keys.filter(function (_, F) {
										return !M.has(F);
									})),
									g(
										A.filter(function (_, F) {
											return !M.has(F);
										}),
									));
							},
							move: function (T, A) {
								if (T !== A) {
									var M = E();
									T < 0 || T >= M.length || A < 0 || A >= M.length || ((u.keys = kl(u.keys, T, A)), g(kl(M, T, A)));
								}
							},
						},
						x = S || [];
					return (
						Array.isArray(x) || (x = []),
						n(
							x.map(function (I, T) {
								var A = u.keys[T];
								return (
									A === void 0 && ((u.keys[T] = u.id), (A = u.keys[T]), (u.id += 1)),
									{ name: T, key: A, isListField: !0 }
								);
							}),
							C,
							p,
						)
					);
				},
			),
		),
	);
}
function Gp(e) {
	var t = !1,
		r = e.length,
		n = [];
	return e.length
		? new Promise(function (o, i) {
				e.forEach(function (a, s) {
					a.catch(function (l) {
						return (t = !0), l;
					}).then(function (l) {
						(r -= 1), (n[s] = l), !(r > 0) && (t && i(n), o(n));
					});
				});
			})
		: Promise.resolve([]);
}
var af = "__@field_split__";
function Yi(e) {
	return e
		.map(function (t) {
			return "".concat(pe(t), ":").concat(t);
		})
		.join(af);
}
var Ir = (function () {
		function e() {
			Lt(this, e), P(this, "kvs", new Map());
		}
		return (
			zt(e, [
				{
					key: "set",
					value: function (r, n) {
						this.kvs.set(Yi(r), n);
					},
				},
				{
					key: "get",
					value: function (r) {
						return this.kvs.get(Yi(r));
					},
				},
				{
					key: "update",
					value: function (r, n) {
						var o = this.get(r),
							i = n(o);
						i ? this.set(r, i) : this.delete(r);
					},
				},
				{
					key: "delete",
					value: function (r) {
						this.kvs.delete(Yi(r));
					},
				},
				{
					key: "map",
					value: function (r) {
						return te(this.kvs.entries()).map(function (n) {
							var o = W(n, 2),
								i = o[0],
								a = o[1],
								s = i.split(af);
							return r({
								key: s.map(function (l) {
									var c = l.match(/^([^:]*):(.*)$/),
										u = W(c, 3),
										d = u[1],
										h = u[2];
									return d === "number" ? Number(h) : h;
								}),
								value: a,
							});
						});
					},
				},
				{
					key: "toJSON",
					value: function () {
						var r = {};
						return (
							this.map(function (n) {
								var o = n.key,
									i = n.value;
								return (r[o.join(".")] = i), null;
							}),
							r
						);
					},
				},
			]),
			e
		);
	})(),
	qp = ["name"],
	Up = zt(function e(t) {
		var r = this;
		Lt(this, e),
			P(this, "formHooked", !1),
			P(this, "forceRootUpdate", void 0),
			P(this, "subscribable", !0),
			P(this, "store", {}),
			P(this, "fieldEntities", []),
			P(this, "initialValues", {}),
			P(this, "callbacks", {}),
			P(this, "validateMessages", null),
			P(this, "preserve", null),
			P(this, "lastValidatePromise", null),
			P(this, "getForm", function () {
				return {
					getFieldValue: r.getFieldValue,
					getFieldsValue: r.getFieldsValue,
					getFieldError: r.getFieldError,
					getFieldWarning: r.getFieldWarning,
					getFieldsError: r.getFieldsError,
					isFieldsTouched: r.isFieldsTouched,
					isFieldTouched: r.isFieldTouched,
					isFieldValidating: r.isFieldValidating,
					isFieldsValidating: r.isFieldsValidating,
					resetFields: r.resetFields,
					setFields: r.setFields,
					setFieldValue: r.setFieldValue,
					setFieldsValue: r.setFieldsValue,
					validateFields: r.validateFields,
					submit: r.submit,
					_init: !0,
					getInternalHooks: r.getInternalHooks,
				};
			}),
			P(this, "getInternalHooks", function (n) {
				return n === gr
					? ((r.formHooked = !0),
						{
							dispatch: r.dispatch,
							initEntityValue: r.initEntityValue,
							registerField: r.registerField,
							useSubscribe: r.useSubscribe,
							setInitialValues: r.setInitialValues,
							destroyForm: r.destroyForm,
							setCallbacks: r.setCallbacks,
							setValidateMessages: r.setValidateMessages,
							getFields: r.getFields,
							setPreserve: r.setPreserve,
							getInitialValue: r.getInitialValue,
							registerWatch: r.registerWatch,
						})
					: (gt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
			}),
			P(this, "useSubscribe", function (n) {
				r.subscribable = n;
			}),
			P(this, "prevWithoutPreserves", null),
			P(this, "setInitialValues", function (n, o) {
				if (((r.initialValues = n || {}), o)) {
					var i,
						a = kr(n, r.store);
					(i = r.prevWithoutPreserves) === null ||
						i === void 0 ||
						i.map(function (s) {
							var l = s.key;
							a = At(a, l, It(n, l));
						}),
						(r.prevWithoutPreserves = null),
						r.updateStore(a);
				}
			}),
			P(this, "destroyForm", function () {
				var n = new Ir();
				r.getFieldEntities(!0).forEach(function (o) {
					r.isMergedPreserve(o.isPreserve()) || n.set(o.getNamePath(), !0);
				}),
					(r.prevWithoutPreserves = n);
			}),
			P(this, "getInitialValue", function (n) {
				var o = It(r.initialValues, n);
				return n.length ? kr(o) : o;
			}),
			P(this, "setCallbacks", function (n) {
				r.callbacks = n;
			}),
			P(this, "setValidateMessages", function (n) {
				r.validateMessages = n;
			}),
			P(this, "setPreserve", function (n) {
				r.preserve = n;
			}),
			P(this, "watchList", []),
			P(this, "registerWatch", function (n) {
				return (
					r.watchList.push(n),
					function () {
						r.watchList = r.watchList.filter(function (o) {
							return o !== n;
						});
					}
				);
			}),
			P(this, "notifyWatch", function () {
				var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
				if (r.watchList.length) {
					var o = r.getFieldsValue(),
						i = r.getFieldsValue(!0);
					r.watchList.forEach(function (a) {
						a(o, i, n);
					});
				}
			}),
			P(this, "timeoutId", null),
			P(this, "warningUnhooked", function () {}),
			P(this, "updateStore", function (n) {
				r.store = n;
			}),
			P(this, "getFieldEntities", function () {
				var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
				return n
					? r.fieldEntities.filter(function (o) {
							return o.getNamePath().length;
						})
					: r.fieldEntities;
			}),
			P(this, "getFieldsMap", function () {
				var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
					o = new Ir();
				return (
					r.getFieldEntities(n).forEach(function (i) {
						var a = i.getNamePath();
						o.set(a, i);
					}),
					o
				);
			}),
			P(this, "getFieldEntitiesForNamePathList", function (n) {
				if (!n) return r.getFieldEntities(!0);
				var o = r.getFieldsMap(!0);
				return n.map(function (i) {
					var a = Fe(i);
					return o.get(a) || { INVALIDATE_NAME_PATH: Fe(i) };
				});
			}),
			P(this, "getFieldsValue", function (n, o) {
				r.warningUnhooked();
				var i, a, s;
				if (
					(n === !0 || Array.isArray(n)
						? ((i = n), (a = o))
						: n && pe(n) === "object" && ((s = n.strict), (a = n.filter)),
					i === !0 && !a)
				)
					return r.store;
				var l = r.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null),
					c = [];
				return (
					l.forEach(function (u) {
						var d,
							h,
							b = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
						if (s) {
							var m, v;
							if ((m = (v = u).isList) !== null && m !== void 0 && m.call(v)) return;
						} else if (!i && (d = (h = u).isListField) !== null && d !== void 0 && d.call(h)) return;
						if (!a) c.push(b);
						else {
							var p = "getMeta" in u ? u.getMeta() : null;
							a(p) && c.push(b);
						}
					}),
					Nl(r.store, c.map(Fe))
				);
			}),
			P(this, "getFieldValue", function (n) {
				r.warningUnhooked();
				var o = Fe(n);
				return It(r.store, o);
			}),
			P(this, "getFieldsError", function (n) {
				r.warningUnhooked();
				var o = r.getFieldEntitiesForNamePathList(n);
				return o.map(function (i, a) {
					return i && !("INVALIDATE_NAME_PATH" in i)
						? { name: i.getNamePath(), errors: i.getErrors(), warnings: i.getWarnings() }
						: { name: Fe(n[a]), errors: [], warnings: [] };
				});
			}),
			P(this, "getFieldError", function (n) {
				r.warningUnhooked();
				var o = Fe(n),
					i = r.getFieldsError([o])[0];
				return i.errors;
			}),
			P(this, "getFieldWarning", function (n) {
				r.warningUnhooked();
				var o = Fe(n),
					i = r.getFieldsError([o])[0];
				return i.warnings;
			}),
			P(this, "isFieldsTouched", function () {
				r.warningUnhooked();
				for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
				var a = o[0],
					s = o[1],
					l,
					c = !1;
				o.length === 0
					? (l = null)
					: o.length === 1
						? Array.isArray(a)
							? ((l = a.map(Fe)), (c = !1))
							: ((l = null), (c = a))
						: ((l = a.map(Fe)), (c = s));
				var u = r.getFieldEntities(!0),
					d = function (p) {
						return p.isFieldTouched();
					};
				if (!l) return c ? u.every(d) : u.some(d);
				var h = new Ir();
				l.forEach(function (v) {
					h.set(v, []);
				}),
					u.forEach(function (v) {
						var p = v.getNamePath();
						l.forEach(function (y) {
							y.every(function (S, g) {
								return p[g] === S;
							}) &&
								h.update(y, function (S) {
									return [].concat(te(S), [v]);
								});
						});
					});
				var b = function (p) {
						return p.some(d);
					},
					m = h.map(function (v) {
						var p = v.value;
						return p;
					});
				return c ? m.every(b) : m.some(b);
			}),
			P(this, "isFieldTouched", function (n) {
				return r.warningUnhooked(), r.isFieldsTouched([n]);
			}),
			P(this, "isFieldsValidating", function (n) {
				r.warningUnhooked();
				var o = r.getFieldEntities();
				if (!n)
					return o.some(function (a) {
						return a.isFieldValidating();
					});
				var i = n.map(Fe);
				return o.some(function (a) {
					var s = a.getNamePath();
					return Vr(i, s) && a.isFieldValidating();
				});
			}),
			P(this, "isFieldValidating", function (n) {
				return r.warningUnhooked(), r.isFieldsValidating([n]);
			}),
			P(this, "resetWithFieldInitialValue", function () {
				var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					o = new Ir(),
					i = r.getFieldEntities(!0);
				i.forEach(function (l) {
					var c = l.props.initialValue,
						u = l.getNamePath();
					if (c !== void 0) {
						var d = o.get(u) || new Set();
						d.add({ entity: l, value: c }), o.set(u, d);
					}
				});
				var a = function (c) {
						c.forEach(function (u) {
							var d = u.props.initialValue;
							if (d !== void 0) {
								var h = u.getNamePath(),
									b = r.getInitialValue(h);
								if (b !== void 0)
									gt(
										!1,
										"Form already set 'initialValues' with path '".concat(
											h.join("."),
											"'. Field can not overwrite it.",
										),
									);
								else {
									var m = o.get(h);
									if (m && m.size > 1)
										gt(
											!1,
											"Multiple Field with path '".concat(
												h.join("."),
												"' set 'initialValue'. Can not decide which one to pick.",
											),
										);
									else if (m) {
										var v = r.getFieldValue(h);
										(!n.skipExist || v === void 0) && r.updateStore(At(r.store, h, te(m)[0].value));
									}
								}
							}
						});
					},
					s;
				n.entities
					? (s = n.entities)
					: n.namePathList
						? ((s = []),
							n.namePathList.forEach(function (l) {
								var c = o.get(l);
								if (c) {
									var u;
									(u = s).push.apply(
										u,
										te(
											te(c).map(function (d) {
												return d.entity;
											}),
										),
									);
								}
							}))
						: (s = i),
					a(s);
			}),
			P(this, "resetFields", function (n) {
				r.warningUnhooked();
				var o = r.store;
				if (!n) {
					r.updateStore(kr(r.initialValues)),
						r.resetWithFieldInitialValue(),
						r.notifyObservers(o, null, { type: "reset" }),
						r.notifyWatch();
					return;
				}
				var i = n.map(Fe);
				i.forEach(function (a) {
					var s = r.getInitialValue(a);
					r.updateStore(At(r.store, a, s));
				}),
					r.resetWithFieldInitialValue({ namePathList: i }),
					r.notifyObservers(o, i, { type: "reset" }),
					r.notifyWatch(i);
			}),
			P(this, "setFields", function (n) {
				r.warningUnhooked();
				var o = r.store,
					i = [];
				n.forEach(function (a) {
					var s = a.name,
						l = Et(a, qp),
						c = Fe(s);
					i.push(c),
						"value" in l && r.updateStore(At(r.store, c, l.value)),
						r.notifyObservers(o, [c], { type: "setField", data: a });
				}),
					r.notifyWatch(i);
			}),
			P(this, "getFields", function () {
				var n = r.getFieldEntities(!0),
					o = n.map(function (i) {
						var a = i.getNamePath(),
							s = i.getMeta(),
							l = z(z({}, s), {}, { name: a, value: r.getFieldValue(a) });
						return Object.defineProperty(l, "originRCField", { value: !0 }), l;
					});
				return o;
			}),
			P(this, "initEntityValue", function (n) {
				var o = n.props.initialValue;
				if (o !== void 0) {
					var i = n.getNamePath(),
						a = It(r.store, i);
					a === void 0 && r.updateStore(At(r.store, i, o));
				}
			}),
			P(this, "isMergedPreserve", function (n) {
				var o = n !== void 0 ? n : r.preserve;
				return o ?? !0;
			}),
			P(this, "registerField", function (n) {
				r.fieldEntities.push(n);
				var o = n.getNamePath();
				if ((r.notifyWatch([o]), n.props.initialValue !== void 0)) {
					var i = r.store;
					r.resetWithFieldInitialValue({ entities: [n], skipExist: !0 }),
						r.notifyObservers(i, [n.getNamePath()], { type: "valueUpdate", source: "internal" });
				}
				return function (a, s) {
					var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
					if (
						((r.fieldEntities = r.fieldEntities.filter(function (d) {
							return d !== n;
						})),
						!r.isMergedPreserve(s) && (!a || l.length > 1))
					) {
						var c = a ? void 0 : r.getInitialValue(o);
						if (
							o.length &&
							r.getFieldValue(o) !== c &&
							r.fieldEntities.every(function (d) {
								return !nf(d.getNamePath(), o);
							})
						) {
							var u = r.store;
							r.updateStore(At(u, o, c, !0)),
								r.notifyObservers(u, [o], { type: "remove" }),
								r.triggerDependenciesUpdate(u, o);
						}
					}
					r.notifyWatch([o]);
				};
			}),
			P(this, "dispatch", function (n) {
				switch (n.type) {
					case "updateValue": {
						var o = n.namePath,
							i = n.value;
						r.updateValue(o, i);
						break;
					}
					case "validateField": {
						var a = n.namePath,
							s = n.triggerName;
						r.validateFields([a], { triggerName: s });
						break;
					}
				}
			}),
			P(this, "notifyObservers", function (n, o, i) {
				if (r.subscribable) {
					var a = z(z({}, i), {}, { store: r.getFieldsValue(!0) });
					r.getFieldEntities().forEach(function (s) {
						var l = s.onStoreChange;
						l(n, o, a);
					});
				} else r.forceRootUpdate();
			}),
			P(this, "triggerDependenciesUpdate", function (n, o) {
				var i = r.getDependencyChildrenFields(o);
				return (
					i.length && r.validateFields(i),
					r.notifyObservers(n, i, { type: "dependenciesUpdate", relatedFields: [o].concat(te(i)) }),
					i
				);
			}),
			P(this, "updateValue", function (n, o) {
				var i = Fe(n),
					a = r.store;
				r.updateStore(At(r.store, i, o)),
					r.notifyObservers(a, [i], { type: "valueUpdate", source: "internal" }),
					r.notifyWatch([i]);
				var s = r.triggerDependenciesUpdate(a, i),
					l = r.callbacks.onValuesChange;
				if (l) {
					var c = Nl(r.store, [i]);
					l(c, r.getFieldsValue());
				}
				r.triggerOnFieldsChange([i].concat(te(s)));
			}),
			P(this, "setFieldsValue", function (n) {
				r.warningUnhooked();
				var o = r.store;
				if (n) {
					var i = kr(r.store, n);
					r.updateStore(i);
				}
				r.notifyObservers(o, null, { type: "valueUpdate", source: "external" }), r.notifyWatch();
			}),
			P(this, "setFieldValue", function (n, o) {
				r.setFields([{ name: n, value: o }]);
			}),
			P(this, "getDependencyChildrenFields", function (n) {
				var o = new Set(),
					i = [],
					a = new Ir();
				r.getFieldEntities().forEach(function (l) {
					var c = l.props.dependencies;
					(c || []).forEach(function (u) {
						var d = Fe(u);
						a.update(d, function () {
							var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Set();
							return h.add(l), h;
						});
					});
				});
				var s = function l(c) {
					var u = a.get(c) || new Set();
					u.forEach(function (d) {
						if (!o.has(d)) {
							o.add(d);
							var h = d.getNamePath();
							d.isFieldDirty() && h.length && (i.push(h), l(h));
						}
					});
				};
				return s(n), i;
			}),
			P(this, "triggerOnFieldsChange", function (n, o) {
				var i = r.callbacks.onFieldsChange;
				if (i) {
					var a = r.getFields();
					if (o) {
						var s = new Ir();
						o.forEach(function (c) {
							var u = c.name,
								d = c.errors;
							s.set(u, d);
						}),
							a.forEach(function (c) {
								c.errors = s.get(c.name) || c.errors;
							});
					}
					var l = a.filter(function (c) {
						var u = c.name;
						return Vr(n, u);
					});
					l.length && i(l, a);
				}
			}),
			P(this, "validateFields", function (n, o) {
				var i;
				r.warningUnhooked();
				var a, s;
				Array.isArray(n) || typeof n == "string" || typeof o == "string" ? ((a = n), (s = o)) : (s = n);
				var l = !!a,
					c = l ? a.map(Fe) : [],
					u = [],
					d = String(Date.now()),
					h = new Set(),
					b = (i = s) === null || i === void 0 ? void 0 : i.recursive;
				r.getFieldEntities(!0).forEach(function (y) {
					if ((l || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length))) {
						var S = y.getNamePath();
						if ((h.add(S.join(d)), !l || Vr(c, S, b))) {
							var g = y.validateRules(z({ validateMessages: z(z({}, rf), r.validateMessages) }, s));
							u.push(
								g
									.then(function () {
										return { name: S, errors: [], warnings: [] };
									})
									.catch(function (w) {
										var E,
											C = [],
											x = [];
										return (
											(E = w.forEach) === null ||
												E === void 0 ||
												E.call(w, function (I) {
													var T = I.rule.warningOnly,
														A = I.errors;
													T ? x.push.apply(x, te(A)) : C.push.apply(C, te(A));
												}),
											C.length
												? Promise.reject({ name: S, errors: C, warnings: x })
												: { name: S, errors: C, warnings: x }
										);
									}),
							);
						}
					}
				});
				var m = Gp(u);
				(r.lastValidatePromise = m),
					m
						.catch(function (y) {
							return y;
						})
						.then(function (y) {
							var S = y.map(function (g) {
								var w = g.name;
								return w;
							});
							r.notifyObservers(r.store, S, { type: "validateFinish" }), r.triggerOnFieldsChange(S, y);
						});
				var v = m
					.then(function () {
						return r.lastValidatePromise === m ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
					})
					.catch(function (y) {
						var S = y.filter(function (g) {
							return g && g.errors.length;
						});
						return Promise.reject({
							values: r.getFieldsValue(c),
							errorFields: S,
							outOfDate: r.lastValidatePromise !== m,
						});
					});
				v.catch(function (y) {
					return y;
				});
				var p = c.filter(function (y) {
					return h.has(y.join(d));
				});
				return r.triggerOnFieldsChange(p), v;
			}),
			P(this, "submit", function () {
				r.warningUnhooked(),
					r
						.validateFields()
						.then(function (n) {
							var o = r.callbacks.onFinish;
							if (o)
								try {
									o(n);
								} catch {}
						})
						.catch(function (n) {
							var o = r.callbacks.onFinishFailed;
							o && o(n);
						});
			}),
			(this.forceRootUpdate = t);
	});
function sf(e) {
	var t = f.useRef(),
		r = f.useState({}),
		n = W(r, 2),
		o = n[1];
	if (!t.current)
		if (e) t.current = e;
		else {
			var i = function () {
					o({});
				},
				a = new Up(i);
			t.current = a.getForm();
		}
	return [t.current];
}
var qa = f.createContext({
		triggerFormChange: function () {},
		triggerFormFinish: function () {},
		registerForm: function () {},
		unregisterForm: function () {},
	}),
	Kp = function (t) {
		var r = t.validateMessages,
			n = t.onFormChange,
			o = t.onFormFinish,
			i = t.children,
			a = f.useContext(qa),
			s = f.useRef({});
		return f.createElement(
			qa.Provider,
			{
				value: z(
					z({}, a),
					{},
					{
						validateMessages: z(z({}, a.validateMessages), r),
						triggerFormChange: function (c, u) {
							n && n(c, { changedFields: u, forms: s.current }), a.triggerFormChange(c, u);
						},
						triggerFormFinish: function (c, u) {
							o && o(c, { values: u, forms: s.current }), a.triggerFormFinish(c, u);
						},
						registerForm: function (c, u) {
							c && (s.current = z(z({}, s.current), {}, P({}, c, u))), a.registerForm(c, u);
						},
						unregisterForm: function (c) {
							var u = z({}, s.current);
							delete u[c], (s.current = u), a.unregisterForm(c);
						},
					},
				),
			},
			i,
		);
	},
	Xp = [
		"name",
		"initialValues",
		"fields",
		"form",
		"preserve",
		"children",
		"component",
		"validateMessages",
		"validateTrigger",
		"onValuesChange",
		"onFieldsChange",
		"onFinish",
		"onFinishFailed",
	],
	Yp = function (t, r) {
		var n = t.name,
			o = t.initialValues,
			i = t.fields,
			a = t.form,
			s = t.preserve,
			l = t.children,
			c = t.component,
			u = c === void 0 ? "form" : c,
			d = t.validateMessages,
			h = t.validateTrigger,
			b = h === void 0 ? "onChange" : h,
			m = t.onValuesChange,
			v = t.onFieldsChange,
			p = t.onFinish,
			y = t.onFinishFailed,
			S = Et(t, Xp),
			g = f.useContext(qa),
			w = sf(a),
			E = W(w, 1),
			C = E[0],
			x = C.getInternalHooks(gr),
			I = x.useSubscribe,
			T = x.setInitialValues,
			A = x.setCallbacks,
			M = x.setValidateMessages,
			_ = x.setPreserve,
			F = x.destroyForm;
		f.useImperativeHandle(r, function () {
			return C;
		}),
			f.useEffect(
				function () {
					return (
						g.registerForm(n, C),
						function () {
							g.unregisterForm(n);
						}
					);
				},
				[g, C, n],
			),
			M(z(z({}, g.validateMessages), d)),
			A({
				onValuesChange: m,
				onFieldsChange: function (H) {
					if ((g.triggerFormChange(n, H), v)) {
						for (var q = arguments.length, U = new Array(q > 1 ? q - 1 : 0), ee = 1; ee < q; ee++)
							U[ee - 1] = arguments[ee];
						v.apply(void 0, [H].concat(U));
					}
				},
				onFinish: function (H) {
					g.triggerFormFinish(n, H), p && p(H);
				},
				onFinishFailed: y,
			}),
			_(s);
		var k = f.useRef(null);
		T(o, !k.current),
			k.current || (k.current = !0),
			f.useEffect(function () {
				return F;
			}, []);
		var D,
			R = typeof l == "function";
		if (R) {
			var $ = C.getFieldsValue(!0);
			D = l($, C);
		} else D = l;
		I(!R);
		var O = f.useRef();
		f.useEffect(
			function () {
				Dp(O.current || [], i || []) || C.setFields(i || []), (O.current = i);
			},
			[i, C],
		);
		var j = f.useMemo(
				function () {
					return z(z({}, C), {}, { validateTrigger: b });
				},
				[C, b],
			),
			L = f.createElement(jo.Provider, { value: null }, f.createElement(Qr.Provider, { value: j }, D));
		return u === !1
			? L
			: f.createElement(
					u,
					Te({}, S, {
						onSubmit: function (H) {
							H.preventDefault(), H.stopPropagation(), C.submit();
						},
						onReset: function (H) {
							var q;
							H.preventDefault(), C.resetFields(), (q = S.onReset) === null || q === void 0 || q.call(S, H);
						},
					}),
					L,
				);
	};
function Dl(e) {
	try {
		return JSON.stringify(e);
	} catch {
		return Math.random();
	}
}
function Zp() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
	var n = t[0],
		o = n === void 0 ? [] : n,
		i = t[1],
		a = i === void 0 ? {} : i,
		s = op(a) ? { form: a } : a,
		l = s.form,
		c = f.useState(),
		u = W(c, 2),
		d = u[0],
		h = u[1],
		b = f.useMemo(
			function () {
				return Dl(d);
			},
			[d],
		),
		m = f.useRef(b);
	m.current = b;
	var v = f.useContext(Qr),
		p = l || v,
		y = p && p._init,
		S = Fe(o),
		g = f.useRef(S);
	return (
		(g.current = S),
		f.useEffect(
			function () {
				if (y) {
					var w = p.getFieldsValue,
						E = p.getInternalHooks,
						C = E(gr),
						x = C.registerWatch,
						I = x(function (A, M) {
							var _ = It(s.preserve ? M : A, g.current),
								F = Dl(_);
							m.current !== F && ((m.current = F), h(_));
						}),
						T = It(s.preserve ? w(!0) : w(), g.current);
					return d !== T && h(T), I;
				}
			},
			[y],
		),
		d
	);
}
var Qp = f.forwardRef(Yp),
	Nn = Qp;
Nn.FormProvider = Kp;
Nn.Field = of;
Nn.List = Wp;
Nn.useForm = sf;
Nn.useWatch = Zp;
const Jp = f.createContext({}),
	e0 = (e) => ({ animationDuration: e, animationFillMode: "both" }),
	t0 = (e) => ({ animationDuration: e, animationFillMode: "both" }),
	r0 = function (e, t, r, n) {
		const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
		return {
			[`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, e0(n)), { animationPlayState: "paused" }),
			[`${i}${e}-leave`]: Object.assign(Object.assign({}, t0(n)), { animationPlayState: "paused" }),
			[`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: "running" },
			[`${i}${e}-leave${e}-leave-active`]: { animationName: r, animationPlayState: "running", pointerEvents: "none" },
		};
	},
	n0 = new Ot("antZoomIn", {
		"0%": { transform: "scale(0.2)", opacity: 0 },
		"100%": { transform: "scale(1)", opacity: 1 },
	}),
	o0 = new Ot("antZoomOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.2)", opacity: 0 } }),
	Bl = new Ot("antZoomBigIn", {
		"0%": { transform: "scale(0.8)", opacity: 0 },
		"100%": { transform: "scale(1)", opacity: 1 },
	}),
	Vl = new Ot("antZoomBigOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.8)", opacity: 0 } }),
	i0 = new Ot("antZoomUpIn", {
		"0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
		"100%": { transform: "scale(1)", transformOrigin: "50% 0%" },
	}),
	a0 = new Ot("antZoomUpOut", {
		"0%": { transform: "scale(1)", transformOrigin: "50% 0%" },
		"100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
	}),
	s0 = new Ot("antZoomLeftIn", {
		"0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
		"100%": { transform: "scale(1)", transformOrigin: "0% 50%" },
	}),
	l0 = new Ot("antZoomLeftOut", {
		"0%": { transform: "scale(1)", transformOrigin: "0% 50%" },
		"100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
	}),
	c0 = new Ot("antZoomRightIn", {
		"0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 },
		"100%": { transform: "scale(1)", transformOrigin: "100% 50%" },
	}),
	u0 = new Ot("antZoomRightOut", {
		"0%": { transform: "scale(1)", transformOrigin: "100% 50%" },
		"100%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 },
	}),
	f0 = new Ot("antZoomDownIn", {
		"0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 },
		"100%": { transform: "scale(1)", transformOrigin: "50% 100%" },
	}),
	d0 = new Ot("antZoomDownOut", {
		"0%": { transform: "scale(1)", transformOrigin: "50% 100%" },
		"100%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 },
	}),
	h0 = {
		zoom: { inKeyframes: n0, outKeyframes: o0 },
		"zoom-big": { inKeyframes: Bl, outKeyframes: Vl },
		"zoom-big-fast": { inKeyframes: Bl, outKeyframes: Vl },
		"zoom-left": { inKeyframes: s0, outKeyframes: l0 },
		"zoom-right": { inKeyframes: c0, outKeyframes: u0 },
		"zoom-up": { inKeyframes: i0, outKeyframes: a0 },
		"zoom-down": { inKeyframes: f0, outKeyframes: d0 },
	},
	v0 = (e, t) => {
		const { antCls: r } = e,
			n = `${r}-${t}`,
			{ inKeyframes: o, outKeyframes: i } = h0[t];
		return [
			r0(n, o, i, e.motionDurationFast),
			{
				[`
        ${n}-enter,
        ${n}-appear
      `]: {
					transform: "scale(0)",
					opacity: 0,
					animationTimingFunction: e.motionEaseOutCirc,
					"&-prepare": { transform: "none" },
				},
				[`${n}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
			},
		];
	},
	g0 = function () {
		if (typeof navigator > "u" || typeof window > "u") return !1;
		var e = navigator.userAgent || navigator.vendor || window.opera;
		return (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
				e,
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
				e?.substr(0, 4),
			)
		);
	};
function m0(e) {
	var t = e.prefixCls,
		r = e.align,
		n = e.arrow,
		o = e.arrowPos,
		i = n || {},
		a = i.className,
		s = i.content,
		l = o.x,
		c = l === void 0 ? 0 : l,
		u = o.y,
		d = u === void 0 ? 0 : u,
		h = f.useRef();
	if (!r || !r.points) return null;
	var b = { position: "absolute" };
	if (r.autoArrow !== !1) {
		var m = r.points[0],
			v = r.points[1],
			p = m[0],
			y = m[1],
			S = v[0],
			g = v[1];
		p === S || !["t", "b"].includes(p) ? (b.top = d) : p === "t" ? (b.top = 0) : (b.bottom = 0),
			y === g || !["l", "r"].includes(y) ? (b.left = c) : y === "l" ? (b.left = 0) : (b.right = 0);
	}
	return f.createElement("div", { ref: h, className: ce("".concat(t, "-arrow"), a), style: b }, s);
}
function p0(e) {
	var t = e.prefixCls,
		r = e.open,
		n = e.zIndex,
		o = e.mask,
		i = e.motion;
	return o
		? f.createElement(Fn, Te({}, i, { motionAppear: !0, visible: r, removeOnLeave: !0 }), function (a) {
				var s = a.className;
				return f.createElement("div", { style: { zIndex: n }, className: ce("".concat(t, "-mask"), s) });
			})
		: null;
}
var b0 = f.memo(
		function (e) {
			var t = e.children;
			return t;
		},
		function (e, t) {
			return t.cache;
		},
	),
	y0 = f.forwardRef(function (e, t) {
		var r = e.popup,
			n = e.className,
			o = e.prefixCls,
			i = e.style,
			a = e.target,
			s = e.onVisibleChanged,
			l = e.open,
			c = e.keepDom,
			u = e.fresh,
			d = e.onClick,
			h = e.mask,
			b = e.arrow,
			m = e.arrowPos,
			v = e.align,
			p = e.motion,
			y = e.maskMotion,
			S = e.forceRender,
			g = e.getPopupContainer,
			w = e.autoDestroy,
			E = e.portal,
			C = e.zIndex,
			x = e.onMouseEnter,
			I = e.onMouseLeave,
			T = e.onPointerEnter,
			A = e.ready,
			M = e.offsetX,
			_ = e.offsetY,
			F = e.offsetR,
			k = e.offsetB,
			D = e.onAlign,
			R = e.onPrepare,
			$ = e.stretch,
			O = e.targetWidth,
			j = e.targetHeight,
			L = typeof r == "function" ? r() : r,
			N = l || c,
			H = g?.length > 0,
			q = f.useState(!g || !H),
			U = W(q, 2),
			ee = U[0],
			J = U[1];
		if (
			(je(
				function () {
					!ee && H && a && J(!0);
				},
				[ee, H, a],
			),
			!ee)
		)
			return null;
		var Q = "auto",
			se = { left: "-1000vw", top: "-1000vh", right: Q, bottom: Q };
		if (A || !l) {
			var de,
				me = v.points,
				xe = v.dynamicInset || ((de = v._experimental) === null || de === void 0 ? void 0 : de.dynamicInset),
				Ae = xe && me[0][1] === "r",
				ke = xe && me[0][0] === "b";
			Ae ? ((se.right = F), (se.left = Q)) : ((se.left = M), (se.right = Q)),
				ke ? ((se.bottom = k), (se.top = Q)) : ((se.top = _), (se.bottom = Q));
		}
		var we = {};
		return (
			$ &&
				($.includes("height") && j ? (we.height = j) : $.includes("minHeight") && j && (we.minHeight = j),
				$.includes("width") && O ? (we.width = O) : $.includes("minWidth") && O && (we.minWidth = O)),
			l || (we.pointerEvents = "none"),
			f.createElement(
				E,
				{
					open: S || N,
					getContainer:
						g &&
						function () {
							return g(a);
						},
					autoDestroy: w,
				},
				f.createElement(p0, { prefixCls: o, open: l, zIndex: C, mask: h, motion: y }),
				f.createElement(_n, { onResize: D, disabled: !l }, function (Le) {
					return f.createElement(
						Fn,
						Te(
							{
								motionAppear: !0,
								motionEnter: !0,
								motionLeave: !0,
								removeOnLeave: !1,
								forceRender: S,
								leavedClassName: "".concat(o, "-hidden"),
							},
							p,
							{
								onAppearPrepare: R,
								onEnterPrepare: R,
								visible: l,
								onVisibleChanged: function (he) {
									var oe;
									p == null || (oe = p.onVisibleChanged) === null || oe === void 0 || oe.call(p, he), s(he);
								},
							},
						),
						function (Oe, he) {
							var oe = Oe.className,
								V = Oe.style,
								ne = ce(o, oe, n);
							return f.createElement(
								"div",
								{
									ref: en(Le, t, he),
									className: ne,
									style: z(
										z(
											z(z({ "--arrow-x": "".concat(m.x || 0, "px"), "--arrow-y": "".concat(m.y || 0, "px") }, se), we),
											V,
										),
										{},
										{ boxSizing: "border-box", zIndex: C },
										i,
									),
									onMouseEnter: x,
									onMouseLeave: I,
									onPointerEnter: T,
									onClick: d,
								},
								b && f.createElement(m0, { prefixCls: o, arrow: b, arrowPos: m, align: v }),
								f.createElement(b0, { cache: !l && !u }, L),
							);
						},
					);
				}),
			)
		);
	}),
	S0 = f.forwardRef(function (e, t) {
		var r = e.children,
			n = e.getTriggerDOMNode,
			o = In(r),
			i = f.useCallback(
				function (s) {
					is(t, n ? n(s) : s);
				},
				[n],
			),
			a = as(i, r.ref);
		return o ? f.cloneElement(r, { ref: a }) : r;
	}),
	Wl = f.createContext(null);
function Gl(e) {
	return e ? (Array.isArray(e) ? e : [e]) : [];
}
function w0(e, t, r, n) {
	return f.useMemo(
		function () {
			var o = Gl(r ?? t),
				i = Gl(n ?? t),
				a = new Set(o),
				s = new Set(i);
			return (
				e &&
					(a.has("hover") && (a.delete("hover"), a.add("click")),
					s.has("hover") && (s.delete("hover"), s.add("click"))),
				[a, s]
			);
		},
		[e, t, r, n],
	);
}
function x0() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
		t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
		r = arguments.length > 2 ? arguments[2] : void 0;
	return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function C0(e, t, r, n) {
	for (var o = r.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
		var s,
			l = i[a];
		if (x0((s = e[l]) === null || s === void 0 ? void 0 : s.points, o, n)) return "".concat(t, "-placement-").concat(l);
	}
	return "";
}
function ql(e, t, r, n) {
	return t || (r ? { motionName: "".concat(e, "-").concat(r) } : n ? { motionName: n } : null);
}
function kn(e) {
	return e.ownerDocument.defaultView;
}
function Ua(e) {
	for (var t = [], r = e?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
		var o = kn(r).getComputedStyle(r),
			i = o.overflowX,
			a = o.overflowY,
			s = o.overflow;
		[i, a, s].some(function (l) {
			return n.includes(l);
		}) && t.push(r),
			(r = r.parentElement);
	}
	return t;
}
function An(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
	return Number.isNaN(e) ? t : e;
}
function dn(e) {
	return An(parseFloat(e), 0);
}
function Ul(e, t) {
	var r = z({}, e);
	return (
		(t || []).forEach(function (n) {
			if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
				var o = kn(n).getComputedStyle(n),
					i = o.overflow,
					a = o.overflowClipMargin,
					s = o.borderTopWidth,
					l = o.borderBottomWidth,
					c = o.borderLeftWidth,
					u = o.borderRightWidth,
					d = n.getBoundingClientRect(),
					h = n.offsetHeight,
					b = n.clientHeight,
					m = n.offsetWidth,
					v = n.clientWidth,
					p = dn(s),
					y = dn(l),
					S = dn(c),
					g = dn(u),
					w = An(Math.round((d.width / m) * 1e3) / 1e3),
					E = An(Math.round((d.height / h) * 1e3) / 1e3),
					C = (m - v - S - g) * w,
					x = (h - b - p - y) * E,
					I = p * E,
					T = y * E,
					A = S * w,
					M = g * w,
					_ = 0,
					F = 0;
				if (i === "clip") {
					var k = dn(a);
					(_ = k * w), (F = k * E);
				}
				var D = d.x + A - _,
					R = d.y + I - F,
					$ = D + d.width + 2 * _ - A - M - C,
					O = R + d.height + 2 * F - I - T - x;
				(r.left = Math.max(r.left, D)),
					(r.top = Math.max(r.top, R)),
					(r.right = Math.min(r.right, $)),
					(r.bottom = Math.min(r.bottom, O));
			}
		}),
		r
	);
}
function Kl(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
		r = "".concat(t),
		n = r.match(/^(.*)\%$/);
	return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Xl(e, t) {
	var r = t || [],
		n = W(r, 2),
		o = n[0],
		i = n[1];
	return [Kl(e.width, o), Kl(e.height, i)];
}
function Yl() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
	return [e[0], e[1]];
}
function _r(e, t) {
	var r = t[0],
		n = t[1],
		o,
		i;
	return (
		r === "t" ? (i = e.y) : r === "b" ? (i = e.y + e.height) : (i = e.y + e.height / 2),
		n === "l" ? (o = e.x) : n === "r" ? (o = e.x + e.width) : (o = e.x + e.width / 2),
		{ x: o, y: i }
	);
}
function Yt(e, t) {
	var r = { t: "b", b: "t", l: "r", r: "l" };
	return e
		.map(function (n, o) {
			return o === t ? r[n] || "c" : n;
		})
		.join("");
}
function E0(e, t, r, n, o, i, a) {
	var s = f.useState({
			ready: !1,
			offsetX: 0,
			offsetY: 0,
			offsetR: 0,
			offsetB: 0,
			arrowX: 0,
			arrowY: 0,
			scaleX: 1,
			scaleY: 1,
			align: o[n] || {},
		}),
		l = W(s, 2),
		c = l[0],
		u = l[1],
		d = f.useRef(0),
		h = f.useMemo(
			function () {
				return t ? Ua(t) : [];
			},
			[t],
		),
		b = f.useRef({}),
		m = function () {
			b.current = {};
		};
	e || m();
	var v = dt(function () {
			if (t && r && e) {
				let yt = function (Dt, fr) {
						var Rr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ne,
							Pr = L.x + Dt,
							ln = L.y + fr,
							cn = Pr + de,
							Jn = ln + se,
							xi = Math.max(Pr, Rr.left),
							Ci = Math.max(ln, Rr.top),
							Ei = Math.min(cn, Rr.right),
							$i = Math.min(Jn, Rr.bottom);
						return Math.max(0, (Ei - xi) * ($i - Ci));
					},
					Qn = function () {
						(qt = L.y + fe), (Ut = qt + se), (Kt = L.x + ve), (Cr = Kt + de);
					};
				var S,
					g,
					w = t,
					E = w.ownerDocument,
					C = kn(w),
					x = C.getComputedStyle(w),
					I = x.width,
					T = x.height,
					A = x.position,
					M = w.style.left,
					_ = w.style.top,
					F = w.style.right,
					k = w.style.bottom,
					D = w.style.overflow,
					R = z(z({}, o[n]), i),
					$ = E.createElement("div");
				(S = w.parentElement) === null || S === void 0 || S.appendChild($),
					($.style.left = "".concat(w.offsetLeft, "px")),
					($.style.top = "".concat(w.offsetTop, "px")),
					($.style.position = A),
					($.style.height = "".concat(w.offsetHeight, "px")),
					($.style.width = "".concat(w.offsetWidth, "px")),
					(w.style.left = "0"),
					(w.style.top = "0"),
					(w.style.right = "auto"),
					(w.style.bottom = "auto"),
					(w.style.overflow = "hidden");
				var O;
				if (Array.isArray(r)) O = { x: r[0], y: r[1], width: 0, height: 0 };
				else {
					var j = r.getBoundingClientRect();
					O = { x: j.x, y: j.y, width: j.width, height: j.height };
				}
				var L = w.getBoundingClientRect(),
					N = E.documentElement,
					H = N.clientWidth,
					q = N.clientHeight,
					U = N.scrollWidth,
					ee = N.scrollHeight,
					J = N.scrollTop,
					Q = N.scrollLeft,
					se = L.height,
					de = L.width,
					me = O.height,
					xe = O.width,
					Ae = { left: 0, top: 0, right: H, bottom: q },
					ke = { left: -Q, top: -J, right: U - Q, bottom: ee - J },
					we = R.htmlRegion,
					Le = "visible",
					Oe = "visibleFirst";
				we !== "scroll" && we !== Oe && (we = Le);
				var he = we === Oe,
					oe = Ul(ke, h),
					V = Ul(Ae, h),
					ne = we === Le ? V : oe,
					Y = he ? V : ne;
				(w.style.left = "auto"), (w.style.top = "auto"), (w.style.right = "0"), (w.style.bottom = "0");
				var ie = w.getBoundingClientRect();
				(w.style.left = M),
					(w.style.top = _),
					(w.style.right = F),
					(w.style.bottom = k),
					(w.style.overflow = D),
					(g = w.parentElement) === null || g === void 0 || g.removeChild($);
				var Re = An(Math.round((de / parseFloat(I)) * 1e3) / 1e3),
					Ee = An(Math.round((se / parseFloat(T)) * 1e3) / 1e3);
				if (Re === 0 || Ee === 0 || (Cn(r) && !Du(r))) return;
				var Z = R.offset,
					ae = R.targetOffset,
					We = Xl(L, Z),
					jt = W(We, 2),
					Ze = jt[0],
					Xe = jt[1],
					Ge = Xl(O, ae),
					Rt = W(Ge, 2),
					qe = Rt[0],
					pt = Rt[1];
				(O.x -= qe), (O.y -= pt);
				var at = R.points || [],
					ze = W(at, 2),
					bt = ze[0],
					_e = ze[1],
					rt = Yl(_e),
					B = Yl(bt),
					G = _r(O, rt),
					ue = _r(L, B),
					ye = z({}, R),
					ve = G.x - ue.x + Ze,
					fe = G.y - ue.y + Xe,
					Qe = yt(ve, fe),
					st = yt(ve, fe, V),
					Nt = _r(O, ["t", "l"]),
					nr = _r(L, ["t", "l"]),
					or = _r(O, ["b", "r"]),
					Je = _r(L, ["b", "r"]),
					nt = R.overflow || {},
					ui = nt.adjustX,
					Hn = nt.adjustY,
					xr = nt.shiftX,
					on = nt.shiftY,
					Dn = function (fr) {
						return typeof fr == "boolean" ? fr : fr >= 0;
					},
					qt,
					Ut,
					Kt,
					Cr;
				Qn();
				var an = Dn(Hn),
					sn = B[0] === rt[0];
				if (an && B[0] === "t" && (Ut > Y.bottom || b.current.bt)) {
					var ir = fe;
					sn ? (ir -= se - me) : (ir = Nt.y - Je.y - Xe);
					var ar = yt(ve, ir),
						fi = yt(ve, ir, V);
					ar > Qe || (ar === Qe && (!he || fi >= st))
						? ((b.current.bt = !0), (fe = ir), (Xe = -Xe), (ye.points = [Yt(B, 0), Yt(rt, 0)]))
						: (b.current.bt = !1);
				}
				if (an && B[0] === "b" && (qt < Y.top || b.current.tb)) {
					var Ue = fe;
					sn ? (Ue += se - me) : (Ue = or.y - nr.y - Xe);
					var Bn = yt(ve, Ue),
						di = yt(ve, Ue, V);
					Bn > Qe || (Bn === Qe && (!he || di >= st))
						? ((b.current.tb = !0), (fe = Ue), (Xe = -Xe), (ye.points = [Yt(B, 0), Yt(rt, 0)]))
						: (b.current.tb = !1);
				}
				var Vn = Dn(ui),
					Wn = B[1] === rt[1];
				if (Vn && B[1] === "l" && (Cr > Y.right || b.current.rl)) {
					var sr = ve;
					Wn ? (sr -= de - xe) : (sr = Nt.x - Je.x - Ze);
					var Gn = yt(sr, fe),
						hi = yt(sr, fe, V);
					Gn > Qe || (Gn === Qe && (!he || hi >= st))
						? ((b.current.rl = !0), (ve = sr), (Ze = -Ze), (ye.points = [Yt(B, 1), Yt(rt, 1)]))
						: (b.current.rl = !1);
				}
				if (Vn && B[1] === "r" && (Kt < Y.left || b.current.lr)) {
					var lr = ve;
					Wn ? (lr += de - xe) : (lr = or.x - nr.x - Ze);
					var qn = yt(lr, fe),
						Er = yt(lr, fe, V);
					qn > Qe || (qn === Qe && (!he || Er >= st))
						? ((b.current.lr = !0), (ve = lr), (Ze = -Ze), (ye.points = [Yt(B, 1), Yt(rt, 1)]))
						: (b.current.lr = !1);
				}
				Qn();
				var kt = xr === !0 ? 0 : xr;
				typeof kt == "number" &&
					(Kt < V.left && ((ve -= Kt - V.left - Ze), O.x + xe < V.left + kt && (ve += O.x - V.left + xe - kt)),
					Cr > V.right && ((ve -= Cr - V.right - Ze), O.x > V.right - kt && (ve += O.x - V.right + kt)));
				var cr = on === !0 ? 0 : on;
				typeof cr == "number" &&
					(qt < V.top && ((fe -= qt - V.top - Xe), O.y + me < V.top + cr && (fe += O.y - V.top + me - cr)),
					Ut > V.bottom && ((fe -= Ut - V.bottom - Xe), O.y > V.bottom - cr && (fe += O.y - V.bottom + cr)));
				var $r = L.x + ve,
					Or = $r + de,
					Ht = L.y + fe,
					Un = Ht + se,
					ur = O.x,
					Xt = ur + xe,
					Kn = O.y,
					vi = Kn + me,
					gi = Math.max($r, ur),
					Xn = Math.min(Or, Xt),
					mi = (gi + Xn) / 2,
					pi = mi - $r,
					bi = Math.max(Ht, Kn),
					Yn = Math.min(Un, vi),
					yi = (bi + Yn) / 2,
					Si = yi - Ht;
				a?.(t, ye);
				var Zn = ie.right - L.x - (ve + L.width),
					wi = ie.bottom - L.y - (fe + L.height);
				u({
					ready: !0,
					offsetX: ve / Re,
					offsetY: fe / Ee,
					offsetR: Zn / Re,
					offsetB: wi / Ee,
					arrowX: pi / Re,
					arrowY: Si / Ee,
					scaleX: Re,
					scaleY: Ee,
					align: ye,
				});
			}
		}),
		p = function () {
			d.current += 1;
			var g = d.current;
			Promise.resolve().then(function () {
				d.current === g && v();
			});
		},
		y = function () {
			u(function (g) {
				return z(z({}, g), {}, { ready: !1 });
			});
		};
	return (
		je(y, [n]),
		je(
			function () {
				e || y();
			},
			[e],
		),
		[c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, p]
	);
}
function $0(e, t, r, n, o) {
	je(
		function () {
			if (e && t && r) {
				let d = function () {
					n(), o();
				};
				var i = t,
					a = r,
					s = Ua(i),
					l = Ua(a),
					c = kn(a),
					u = new Set([c].concat(te(s), te(l)));
				return (
					u.forEach(function (h) {
						h.addEventListener("scroll", d, { passive: !0 });
					}),
					c.addEventListener("resize", d, { passive: !0 }),
					n(),
					function () {
						u.forEach(function (h) {
							h.removeEventListener("scroll", d), c.removeEventListener("resize", d);
						});
					}
				);
			}
		},
		[e, t, r],
	);
}
function O0(e, t, r, n, o, i, a, s) {
	var l = f.useRef(e),
		c = f.useRef(!1);
	l.current !== e && ((c.current = !0), (l.current = e)),
		f.useEffect(
			function () {
				var u = Ft(function () {
					c.current = !1;
				});
				return function () {
					Ft.cancel(u);
				};
			},
			[e],
		),
		f.useEffect(
			function () {
				if (t && n && (!o || i)) {
					var u = function () {
							var C = !1,
								x = function (A) {
									var M = A.target;
									C = a(M);
								},
								I = function (A) {
									var M = A.target;
									!c.current && l.current && !C && !a(M) && s(!1);
								};
							return [x, I];
						},
						d = u(),
						h = W(d, 2),
						b = h[0],
						m = h[1],
						v = u(),
						p = W(v, 2),
						y = p[0],
						S = p[1],
						g = kn(n);
					g.addEventListener("mousedown", b, !0),
						g.addEventListener("click", m, !0),
						g.addEventListener("contextmenu", m, !0);
					var w = Mo(r);
					return (
						w &&
							(w.addEventListener("mousedown", y, !0),
							w.addEventListener("click", S, !0),
							w.addEventListener("contextmenu", S, !0)),
						function () {
							g.removeEventListener("mousedown", b, !0),
								g.removeEventListener("click", m, !0),
								g.removeEventListener("contextmenu", m, !0),
								w &&
									(w.removeEventListener("mousedown", y, !0),
									w.removeEventListener("click", S, !0),
									w.removeEventListener("contextmenu", S, !0));
						}
					);
				}
			},
			[t, r, n, o, i],
		);
}
var R0 = [
	"prefixCls",
	"children",
	"action",
	"showAction",
	"hideAction",
	"popupVisible",
	"defaultPopupVisible",
	"onPopupVisibleChange",
	"afterPopupVisibleChange",
	"mouseEnterDelay",
	"mouseLeaveDelay",
	"focusDelay",
	"blurDelay",
	"mask",
	"maskClosable",
	"getPopupContainer",
	"forceRender",
	"autoDestroy",
	"destroyPopupOnHide",
	"popup",
	"popupClassName",
	"popupStyle",
	"popupPlacement",
	"builtinPlacements",
	"popupAlign",
	"zIndex",
	"stretch",
	"getPopupClassNameFromAlign",
	"fresh",
	"alignPoint",
	"onPopupClick",
	"onPopupAlign",
	"arrow",
	"popupMotion",
	"maskMotion",
	"popupTransitionName",
	"popupAnimation",
	"maskTransitionName",
	"maskAnimation",
	"className",
	"getTriggerDOMNode",
];
function P0() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ef,
		t = f.forwardRef(function (r, n) {
			var o = r.prefixCls,
				i = o === void 0 ? "rc-trigger-popup" : o,
				a = r.children,
				s = r.action,
				l = s === void 0 ? "hover" : s,
				c = r.showAction,
				u = r.hideAction,
				d = r.popupVisible,
				h = r.defaultPopupVisible,
				b = r.onPopupVisibleChange,
				m = r.afterPopupVisibleChange,
				v = r.mouseEnterDelay,
				p = r.mouseLeaveDelay,
				y = p === void 0 ? 0.1 : p,
				S = r.focusDelay,
				g = r.blurDelay,
				w = r.mask,
				E = r.maskClosable,
				C = E === void 0 ? !0 : E,
				x = r.getPopupContainer,
				I = r.forceRender,
				T = r.autoDestroy,
				A = r.destroyPopupOnHide,
				M = r.popup,
				_ = r.popupClassName,
				F = r.popupStyle,
				k = r.popupPlacement,
				D = r.builtinPlacements,
				R = D === void 0 ? {} : D,
				$ = r.popupAlign,
				O = r.zIndex,
				j = r.stretch,
				L = r.getPopupClassNameFromAlign,
				N = r.fresh,
				H = r.alignPoint,
				q = r.onPopupClick,
				U = r.onPopupAlign,
				ee = r.arrow,
				J = r.popupMotion,
				Q = r.maskMotion,
				se = r.popupTransitionName,
				de = r.popupAnimation,
				me = r.maskTransitionName,
				xe = r.maskAnimation,
				Ae = r.className,
				ke = r.getTriggerDOMNode,
				we = Et(r, R0),
				Le = T || A || !1,
				Oe = f.useState(!1),
				he = W(Oe, 2),
				oe = he[0],
				V = he[1];
			je(function () {
				V(g0());
			}, []);
			var ne = f.useRef({}),
				Y = f.useContext(Wl),
				ie = f.useMemo(
					function () {
						return {
							registerSubPopup: function (re, Me) {
								(ne.current[re] = Me), Y?.registerSubPopup(re, Me);
							},
						};
					},
					[Y],
				),
				Re = rp(),
				Ee = f.useState(null),
				Z = W(Ee, 2),
				ae = Z[0],
				We = Z[1],
				jt = dt(function (K) {
					Cn(K) && ae !== K && We(K), Y?.registerSubPopup(Re, K);
				}),
				Ze = f.useState(null),
				Xe = W(Ze, 2),
				Ge = Xe[0],
				Rt = Xe[1],
				qe = f.useRef(null),
				pt = dt(function (K) {
					Cn(K) && Ge !== K && (Rt(K), (qe.current = K));
				}),
				at = f.Children.only(a),
				ze = at?.props || {},
				bt = {},
				_e = dt(function (K) {
					var re,
						Me,
						He = Ge;
					return (
						He?.contains(K) ||
						((re = Mo(He)) === null || re === void 0 ? void 0 : re.host) === K ||
						K === He ||
						ae?.contains(K) ||
						((Me = Mo(ae)) === null || Me === void 0 ? void 0 : Me.host) === K ||
						K === ae ||
						Object.values(ne.current).some(function (Ie) {
							return Ie?.contains(K) || K === Ie;
						})
					);
				}),
				rt = ql(i, J, de, se),
				B = ql(i, Q, xe, me),
				G = f.useState(h || !1),
				ue = W(G, 2),
				ye = ue[0],
				ve = ue[1],
				fe = d ?? ye,
				Qe = dt(function (K) {
					d === void 0 && ve(K);
				});
			je(
				function () {
					ve(d || !1);
				},
				[d],
			);
			var st = f.useRef(fe);
			st.current = fe;
			var Nt = f.useRef([]);
			Nt.current = [];
			var nr = dt(function (K) {
					var re;
					Qe(K),
						((re = Nt.current[Nt.current.length - 1]) !== null && re !== void 0 ? re : fe) !== K &&
							(Nt.current.push(K), b?.(K));
				}),
				or = f.useRef(),
				Je = function () {
					clearTimeout(or.current);
				},
				nt = function (re) {
					var Me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
					Je(),
						Me === 0
							? nr(re)
							: (or.current = setTimeout(function () {
									nr(re);
								}, Me * 1e3));
				};
			f.useEffect(function () {
				return Je;
			}, []);
			var ui = f.useState(!1),
				Hn = W(ui, 2),
				xr = Hn[0],
				on = Hn[1];
			je(
				function (K) {
					(!K || fe) && on(!0);
				},
				[fe],
			);
			var Dn = f.useState(null),
				qt = W(Dn, 2),
				Ut = qt[0],
				Kt = qt[1],
				Cr = f.useState([0, 0]),
				an = W(Cr, 2),
				sn = an[0],
				ir = an[1],
				ar = function (re) {
					ir([re.clientX, re.clientY]);
				},
				fi = E0(fe, ae, H ? sn : Ge, k, R, $, U),
				Ue = W(fi, 11),
				Bn = Ue[0],
				di = Ue[1],
				Vn = Ue[2],
				Wn = Ue[3],
				sr = Ue[4],
				Gn = Ue[5],
				hi = Ue[6],
				lr = Ue[7],
				qn = Ue[8],
				Er = Ue[9],
				kt = Ue[10],
				cr = w0(oe, l, c, u),
				$r = W(cr, 2),
				Or = $r[0],
				Ht = $r[1],
				Un = Or.has("click"),
				ur = Ht.has("click") || Ht.has("contextMenu"),
				Xt = dt(function () {
					xr || kt();
				}),
				Kn = function () {
					st.current && H && ur && nt(!1);
				};
			$0(fe, Ge, ae, Xt, Kn),
				je(
					function () {
						Xt();
					},
					[sn, k],
				),
				je(
					function () {
						fe && !(R != null && R[k]) && Xt();
					},
					[JSON.stringify($)],
				);
			var vi = f.useMemo(
				function () {
					var K = C0(R, i, Er, H);
					return ce(K, L?.(Er));
				},
				[Er, L, R, i, H],
			);
			f.useImperativeHandle(n, function () {
				return { nativeElement: qe.current, forceAlign: Xt };
			});
			var gi = f.useState(0),
				Xn = W(gi, 2),
				mi = Xn[0],
				pi = Xn[1],
				bi = f.useState(0),
				Yn = W(bi, 2),
				yi = Yn[0],
				Si = Yn[1],
				Zn = function () {
					if (j && Ge) {
						var re = Ge.getBoundingClientRect();
						pi(re.width), Si(re.height);
					}
				},
				wi = function () {
					Zn(), Xt();
				},
				yt = function (re) {
					on(!1), kt(), m?.(re);
				},
				Qn = function () {
					return new Promise(function (re) {
						Zn(),
							Kt(function () {
								return re;
							});
					});
				};
			je(
				function () {
					Ut && (kt(), Ut(), Kt(null));
				},
				[Ut],
			);
			function Dt(K, re, Me, He) {
				bt[K] = function (Ie) {
					var eo;
					He?.(Ie), nt(re, Me);
					for (var Oi = arguments.length, Cs = new Array(Oi > 1 ? Oi - 1 : 0), to = 1; to < Oi; to++)
						Cs[to - 1] = arguments[to];
					(eo = ze[K]) === null || eo === void 0 || eo.call.apply(eo, [ze, Ie].concat(Cs));
				};
			}
			(Un || ur) &&
				(bt.onClick = function (K) {
					var re;
					st.current && ur ? nt(!1) : !st.current && Un && (ar(K), nt(!0));
					for (var Me = arguments.length, He = new Array(Me > 1 ? Me - 1 : 0), Ie = 1; Ie < Me; Ie++)
						He[Ie - 1] = arguments[Ie];
					(re = ze.onClick) === null || re === void 0 || re.call.apply(re, [ze, K].concat(He));
				}),
				O0(fe, ur, Ge, ae, w, C, _e, nt);
			var fr = Or.has("hover"),
				Rr = Ht.has("hover"),
				Pr,
				ln;
			fr &&
				(Dt("onMouseEnter", !0, v, function (K) {
					ar(K);
				}),
				Dt("onPointerEnter", !0, v, function (K) {
					ar(K);
				}),
				(Pr = function (re) {
					(fe || xr) && ae !== null && ae !== void 0 && ae.contains(re.target) && nt(!0, v);
				}),
				H &&
					(bt.onMouseMove = function (K) {
						var re;
						(re = ze.onMouseMove) === null || re === void 0 || re.call(ze, K);
					})),
				Rr &&
					(Dt("onMouseLeave", !1, y),
					Dt("onPointerLeave", !1, y),
					(ln = function () {
						nt(!1, y);
					})),
				Or.has("focus") && Dt("onFocus", !0, S),
				Ht.has("focus") && Dt("onBlur", !1, g),
				Or.has("contextMenu") &&
					(bt.onContextMenu = function (K) {
						var re;
						st.current && Ht.has("contextMenu") ? nt(!1) : (ar(K), nt(!0)), K.preventDefault();
						for (var Me = arguments.length, He = new Array(Me > 1 ? Me - 1 : 0), Ie = 1; Ie < Me; Ie++)
							He[Ie - 1] = arguments[Ie];
						(re = ze.onContextMenu) === null || re === void 0 || re.call.apply(re, [ze, K].concat(He));
					}),
				Ae && (bt.className = ce(ze.className, Ae));
			var cn = z(z({}, ze), bt),
				Jn = {},
				xi = [
					"onContextMenu",
					"onClick",
					"onMouseDown",
					"onTouchStart",
					"onMouseEnter",
					"onMouseLeave",
					"onFocus",
					"onBlur",
				];
			xi.forEach(function (K) {
				we[K] &&
					(Jn[K] = function () {
						for (var re, Me = arguments.length, He = new Array(Me), Ie = 0; Ie < Me; Ie++) He[Ie] = arguments[Ie];
						(re = cn[K]) === null || re === void 0 || re.call.apply(re, [cn].concat(He)), we[K].apply(we, He);
					});
			});
			var Ci = f.cloneElement(at, z(z({}, cn), Jn)),
				Ei = { x: Gn, y: hi },
				$i = ee ? z({}, ee !== !0 ? ee : {}) : null;
			return f.createElement(
				f.Fragment,
				null,
				f.createElement(
					_n,
					{ disabled: !fe, ref: pt, onResize: wi },
					f.createElement(S0, { getTriggerDOMNode: ke }, Ci),
				),
				f.createElement(
					Wl.Provider,
					{ value: ie },
					f.createElement(y0, {
						portal: e,
						ref: jt,
						prefixCls: i,
						popup: M,
						className: ce(_, vi),
						style: F,
						target: Ge,
						onMouseEnter: Pr,
						onMouseLeave: ln,
						onPointerEnter: Pr,
						zIndex: O,
						open: fe,
						keepDom: xr,
						fresh: N,
						onClick: q,
						mask: w,
						motion: rt,
						maskMotion: B,
						onVisibleChanged: yt,
						onPrepare: Qn,
						forceRender: I,
						autoDestroy: Le,
						getPopupContainer: x,
						align: Er,
						arrow: $i,
						arrowPos: Ei,
						ready: Bn,
						offsetX: di,
						offsetY: Vn,
						offsetR: Wn,
						offsetB: sr,
						onAlign: Xt,
						stretch: j,
						targetWidth: mi / lr,
						targetHeight: yi / qn,
					}),
				),
			);
		});
	return t;
}
const T0 = P0(ef);
function Zl(e, t, r) {
	return ce({
		[`${e}-status-success`]: t === "success",
		[`${e}-status-warning`]: t === "warning",
		[`${e}-status-error`]: t === "error",
		[`${e}-status-validating`]: t === "validating",
		[`${e}-has-feedback`]: r,
	});
}
const A0 = (e, t) => t || e;
var M0 = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
					},
				},
			],
		},
		name: "check",
		theme: "outlined",
	},
	I0 = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: M0 }));
	};
const _0 = f.forwardRef(I0);
var Fr = { shiftX: 64, adjustY: 1 },
	jr = { adjustX: 1, shiftY: !0 },
	wt = [0, 0],
	F0 = {
		left: { points: ["cr", "cl"], overflow: jr, offset: [-4, 0], targetOffset: wt },
		right: { points: ["cl", "cr"], overflow: jr, offset: [4, 0], targetOffset: wt },
		top: { points: ["bc", "tc"], overflow: Fr, offset: [0, -4], targetOffset: wt },
		bottom: { points: ["tc", "bc"], overflow: Fr, offset: [0, 4], targetOffset: wt },
		topLeft: { points: ["bl", "tl"], overflow: Fr, offset: [0, -4], targetOffset: wt },
		leftTop: { points: ["tr", "tl"], overflow: jr, offset: [-4, 0], targetOffset: wt },
		topRight: { points: ["br", "tr"], overflow: Fr, offset: [0, -4], targetOffset: wt },
		rightTop: { points: ["tl", "tr"], overflow: jr, offset: [4, 0], targetOffset: wt },
		bottomRight: { points: ["tr", "br"], overflow: Fr, offset: [0, 4], targetOffset: wt },
		rightBottom: { points: ["bl", "br"], overflow: jr, offset: [4, 0], targetOffset: wt },
		bottomLeft: { points: ["tl", "bl"], overflow: Fr, offset: [0, 4], targetOffset: wt },
		leftBottom: { points: ["br", "bl"], overflow: jr, offset: [-4, 0], targetOffset: wt },
	};
function lf(e) {
	var t = e.children,
		r = e.prefixCls,
		n = e.id,
		o = e.overlayInnerStyle,
		i = e.className,
		a = e.style;
	return f.createElement(
		"div",
		{ className: ce("".concat(r, "-content"), i), style: a },
		f.createElement(
			"div",
			{ className: "".concat(r, "-inner"), id: n, role: "tooltip", style: o },
			typeof t == "function" ? t() : t,
		),
	);
}
var j0 = [
		"overlayClassName",
		"trigger",
		"mouseEnterDelay",
		"mouseLeaveDelay",
		"overlayStyle",
		"prefixCls",
		"children",
		"onVisibleChange",
		"afterVisibleChange",
		"transitionName",
		"animation",
		"motion",
		"placement",
		"align",
		"destroyTooltipOnHide",
		"defaultVisible",
		"getTooltipContainer",
		"overlayInnerStyle",
		"arrowContent",
		"overlay",
		"id",
		"showArrow",
	],
	L0 = function (t, r) {
		var n = t.overlayClassName,
			o = t.trigger,
			i = o === void 0 ? ["hover"] : o,
			a = t.mouseEnterDelay,
			s = a === void 0 ? 0 : a,
			l = t.mouseLeaveDelay,
			c = l === void 0 ? 0.1 : l,
			u = t.overlayStyle,
			d = t.prefixCls,
			h = d === void 0 ? "rc-tooltip" : d,
			b = t.children,
			m = t.onVisibleChange,
			v = t.afterVisibleChange,
			p = t.transitionName,
			y = t.animation,
			S = t.motion,
			g = t.placement,
			w = g === void 0 ? "right" : g,
			E = t.align,
			C = E === void 0 ? {} : E,
			x = t.destroyTooltipOnHide,
			I = x === void 0 ? !1 : x,
			T = t.defaultVisible,
			A = t.getTooltipContainer,
			M = t.overlayInnerStyle;
		t.arrowContent;
		var _ = t.overlay,
			F = t.id,
			k = t.showArrow,
			D = k === void 0 ? !0 : k,
			R = Et(t, j0),
			$ = f.useRef(null);
		f.useImperativeHandle(r, function () {
			return $.current;
		});
		var O = z({}, R);
		"visible" in t && (O.popupVisible = t.visible);
		var j = function () {
			return f.createElement(lf, { key: "content", prefixCls: h, id: F, overlayInnerStyle: M }, _);
		};
		return f.createElement(
			T0,
			Te(
				{
					popupClassName: n,
					prefixCls: h,
					popup: j,
					action: i,
					builtinPlacements: F0,
					popupPlacement: w,
					ref: $,
					popupAlign: C,
					getPopupContainer: A,
					onPopupVisibleChange: m,
					afterPopupVisibleChange: v,
					popupTransitionName: p,
					popupAnimation: y,
					popupMotion: S,
					defaultPopupVisible: T,
					autoDestroy: I,
					mouseLeaveDelay: c,
					popupStyle: u,
					mouseEnterDelay: s,
					arrow: D,
				},
				O,
			),
			b,
		);
	};
const z0 = f.forwardRef(L0),
	cf = 8;
function uf(e) {
	const t = cf,
		{ contentRadius: r, limitVerticalRadius: n } = e,
		o = r > 12 ? r + 2 : 12;
	return { dropdownArrowOffset: o, dropdownArrowOffsetVertical: n ? t : o };
}
function vo(e, t) {
	return e ? t : {};
}
function N0(e, t) {
	const { componentCls: r, sizePopupArrow: n, borderRadiusXS: o, borderRadiusOuter: i, boxShadowPopoverArrow: a } = e,
		{
			colorBg: s,
			contentRadius: l = e.borderRadiusLG,
			limitVerticalRadius: c,
			arrowDistance: u = 0,
			arrowPlacement: d = { left: !0, right: !0, top: !0, bottom: !0 },
		} = t,
		{ dropdownArrowOffsetVertical: h, dropdownArrowOffset: b } = uf({ contentRadius: l, limitVerticalRadius: c });
	return {
		[r]: Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(
						{
							[`${r}-arrow`]: [
								Object.assign(Object.assign({ position: "absolute", zIndex: 1, display: "block" }, Dv(n, o, i, s, a)), {
									"&:before": { background: s },
								}),
							],
						},
						vo(!!d.top, {
							[[`&-placement-top ${r}-arrow`, `&-placement-topLeft ${r}-arrow`, `&-placement-topRight ${r}-arrow`].join(
								",",
							)]: { bottom: u, transform: "translateY(100%) rotate(180deg)" },
							[`&-placement-top ${r}-arrow`]: {
								left: { _skip_check_: !0, value: "50%" },
								transform: "translateX(-50%) translateY(100%) rotate(180deg)",
							},
							[`&-placement-topLeft ${r}-arrow`]: { left: { _skip_check_: !0, value: b } },
							[`&-placement-topRight ${r}-arrow`]: { right: { _skip_check_: !0, value: b } },
						}),
					),
					vo(!!d.bottom, {
						[[
							`&-placement-bottom ${r}-arrow`,
							`&-placement-bottomLeft ${r}-arrow`,
							`&-placement-bottomRight ${r}-arrow`,
						].join(",")]: { top: u, transform: "translateY(-100%)" },
						[`&-placement-bottom ${r}-arrow`]: {
							left: { _skip_check_: !0, value: "50%" },
							transform: "translateX(-50%) translateY(-100%)",
						},
						[`&-placement-bottomLeft ${r}-arrow`]: { left: { _skip_check_: !0, value: b } },
						[`&-placement-bottomRight ${r}-arrow`]: { right: { _skip_check_: !0, value: b } },
					}),
				),
				vo(!!d.left, {
					[[`&-placement-left ${r}-arrow`, `&-placement-leftTop ${r}-arrow`, `&-placement-leftBottom ${r}-arrow`].join(
						",",
					)]: { right: { _skip_check_: !0, value: u }, transform: "translateX(100%) rotate(90deg)" },
					[`&-placement-left ${r}-arrow`]: {
						top: { _skip_check_: !0, value: "50%" },
						transform: "translateY(-50%) translateX(100%) rotate(90deg)",
					},
					[`&-placement-leftTop ${r}-arrow`]: { top: h },
					[`&-placement-leftBottom ${r}-arrow`]: { bottom: h },
				}),
			),
			vo(!!d.right, {
				[[`&-placement-right ${r}-arrow`, `&-placement-rightTop ${r}-arrow`, `&-placement-rightBottom ${r}-arrow`].join(
					",",
				)]: { left: { _skip_check_: !0, value: u }, transform: "translateX(-100%) rotate(-90deg)" },
				[`&-placement-right ${r}-arrow`]: {
					top: { _skip_check_: !0, value: "50%" },
					transform: "translateY(-50%) translateX(-100%) rotate(-90deg)",
				},
				[`&-placement-rightTop ${r}-arrow`]: { top: h },
				[`&-placement-rightBottom ${r}-arrow`]: { bottom: h },
			}),
		),
	};
}
function k0(e, t, r, n) {
	if (n === !1) return { adjustX: !1, adjustY: !1 };
	const o = n && typeof n == "object" ? n : {},
		i = {};
	switch (e) {
		case "top":
		case "bottom":
			(i.shiftX = t.dropdownArrowOffset * 2 + r), (i.shiftY = !0), (i.adjustY = !0);
			break;
		case "left":
		case "right":
			(i.shiftY = t.dropdownArrowOffsetVertical * 2 + r), (i.shiftX = !0), (i.adjustX = !0);
			break;
	}
	const a = Object.assign(Object.assign({}, i), o);
	return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
}
const Ql = {
		left: { points: ["cr", "cl"] },
		right: { points: ["cl", "cr"] },
		top: { points: ["bc", "tc"] },
		bottom: { points: ["tc", "bc"] },
		topLeft: { points: ["bl", "tl"] },
		leftTop: { points: ["tr", "tl"] },
		topRight: { points: ["br", "tr"] },
		rightTop: { points: ["tl", "tr"] },
		bottomRight: { points: ["tr", "br"] },
		rightBottom: { points: ["bl", "br"] },
		bottomLeft: { points: ["tl", "bl"] },
		leftBottom: { points: ["br", "bl"] },
	},
	H0 = {
		topLeft: { points: ["bl", "tc"] },
		leftTop: { points: ["tr", "cl"] },
		topRight: { points: ["br", "tc"] },
		rightTop: { points: ["tl", "cr"] },
		bottomRight: { points: ["tr", "bc"] },
		rightBottom: { points: ["bl", "cr"] },
		bottomLeft: { points: ["tl", "bc"] },
		leftBottom: { points: ["br", "cl"] },
	},
	D0 = new Set([
		"topLeft",
		"topRight",
		"bottomLeft",
		"bottomRight",
		"leftTop",
		"leftBottom",
		"rightTop",
		"rightBottom",
	]);
function B0(e) {
	const { arrowWidth: t, autoAdjustOverflow: r, arrowPointAtCenter: n, offset: o, borderRadius: i } = e,
		a = t / 2,
		s = {};
	return (
		Object.keys(Ql).forEach((l) => {
			const c = (n && H0[l]) || Ql[l],
				u = Object.assign(Object.assign({}, c), { offset: [0, 0], dynamicInset: !0 });
			switch (((s[l] = u), D0.has(l) && (u.autoArrow = !1), l)) {
				case "top":
				case "topLeft":
				case "topRight":
					u.offset[1] = -a - o;
					break;
				case "bottom":
				case "bottomLeft":
				case "bottomRight":
					u.offset[1] = a + o;
					break;
				case "left":
				case "leftTop":
				case "leftBottom":
					u.offset[0] = -a - o;
					break;
				case "right":
				case "rightTop":
				case "rightBottom":
					u.offset[0] = a + o;
					break;
			}
			const d = uf({ contentRadius: i, limitVerticalRadius: !0 });
			if (n)
				switch (l) {
					case "topLeft":
					case "bottomLeft":
						u.offset[0] = -d.dropdownArrowOffset - a;
						break;
					case "topRight":
					case "bottomRight":
						u.offset[0] = d.dropdownArrowOffset + a;
						break;
					case "leftTop":
					case "rightTop":
						u.offset[1] = -d.dropdownArrowOffset - a;
						break;
					case "leftBottom":
					case "rightBottom":
						u.offset[1] = d.dropdownArrowOffset + a;
						break;
				}
			(u.overflow = k0(l, d, t, r)), (u.htmlRegion = "visibleFirst");
		}),
		s
	);
}
const V0 = (e) => {
		const {
			componentCls: t,
			tooltipMaxWidth: r,
			tooltipColor: n,
			tooltipBg: o,
			tooltipBorderRadius: i,
			zIndexPopup: a,
			controlHeight: s,
			boxShadowSecondary: l,
			paddingSM: c,
			paddingXS: u,
			tooltipRadiusOuter: d,
		} = e;
		return [
			{
				[t]: Object.assign(
					Object.assign(
						Object.assign(Object.assign({}, ms(e)), {
							position: "absolute",
							zIndex: a,
							display: "block",
							width: "max-content",
							maxWidth: r,
							visibility: "visible",
							transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
							"&-hidden": { display: "none" },
							"--antd-arrow-background-color": o,
							[`${t}-inner`]: {
								minWidth: s,
								minHeight: s,
								padding: `${c / 2}px ${u}px`,
								color: n,
								textAlign: "start",
								textDecoration: "none",
								wordWrap: "break-word",
								backgroundColor: o,
								borderRadius: i,
								boxShadow: l,
								boxSizing: "border-box",
							},
							[[
								"&-placement-left",
								"&-placement-leftTop",
								"&-placement-leftBottom",
								"&-placement-right",
								"&-placement-rightTop",
								"&-placement-rightBottom",
							].join(",")]: { [`${t}-inner`]: { borderRadius: Math.min(i, cf) } },
							[`${t}-content`]: { position: "relative" },
						}),
						Zv(e, (h, b) => {
							let { darkColor: m } = b;
							return {
								[`&${t}-${h}`]: {
									[`${t}-inner`]: { backgroundColor: m },
									[`${t}-arrow`]: { "--antd-arrow-background-color": m },
								},
							};
						}),
					),
					{ "&-rtl": { direction: "rtl" } },
				),
			},
			N0(mt(e, { borderRadiusOuter: d }), {
				colorBg: "var(--antd-arrow-background-color)",
				contentRadius: i,
				limitVerticalRadius: !0,
			}),
			{ [`${t}-pure`]: { position: "relative", maxWidth: "none", margin: e.sizePopupArrow } },
		];
	},
	ff = (e, t) =>
		rn(
			"Tooltip",
			(n) => {
				if (t === !1) return [];
				const { borderRadius: o, colorTextLightSolid: i, colorBgDefault: a, borderRadiusOuter: s } = n,
					l = mt(n, {
						tooltipMaxWidth: 250,
						tooltipColor: i,
						tooltipBorderRadius: o,
						tooltipBg: a,
						tooltipRadiusOuter: s > 4 ? 4 : s,
					});
				return [V0(l), v0(n, "zoom-big-fast")];
			},
			(n) => {
				let { zIndexPopupBase: o, colorBgSpotlight: i } = n;
				return { zIndexPopup: o + 70, colorBgDefault: i };
			},
			{ resetStyle: !1 },
		)(e),
	W0 = Ao.map((e) => `${e}-inverse`);
function G0(e) {
	return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
		? [].concat(te(W0), te(Ao)).includes(e)
		: Ao.includes(e);
}
function df(e, t) {
	const r = G0(t),
		n = ce({ [`${e}-${t}`]: t && r }),
		o = {},
		i = {};
	return (
		t && !r && ((o.background = t), (i["--antd-arrow-background-color"] = t)),
		{ className: n, overlayStyle: o, arrowStyle: i }
	);
}
const q0 = (e) => {
	const { prefixCls: t, className: r, placement: n = "top", title: o, color: i, overlayInnerStyle: a } = e,
		{ getPrefixCls: s } = f.useContext(ot),
		l = s("tooltip", t),
		[c, u] = ff(l, !0),
		d = df(l, i),
		h = d.arrowStyle,
		b = Object.assign(Object.assign({}, a), d.overlayStyle),
		m = ce(u, l, `${l}-pure`, `${l}-placement-${n}`, r, d.className);
	return c(
		f.createElement(
			"div",
			{ className: m, style: h },
			f.createElement("div", { className: `${l}-arrow` }),
			f.createElement(lf, Object.assign({}, e, { className: u, prefixCls: l, overlayInnerStyle: b }), o),
		),
	);
};
var U0 = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const Lo = f.forwardRef((e, t) => {
	var r, n;
	const {
			prefixCls: o,
			openClassName: i,
			getTooltipContainer: a,
			overlayClassName: s,
			color: l,
			overlayInnerStyle: c,
			children: u,
			afterOpenChange: d,
			afterVisibleChange: h,
			destroyTooltipOnHide: b,
			arrow: m = !0,
			title: v,
			overlay: p,
			builtinPlacements: y,
			arrowPointAtCenter: S = !1,
			autoAdjustOverflow: g = !0,
		} = e,
		w = !!m,
		[, E] = tn(),
		{ getPopupContainer: C, getPrefixCls: x, direction: I } = f.useContext(ot),
		T = ov(),
		A = f.useRef(null),
		M = () => {
			var V;
			(V = A.current) === null || V === void 0 || V.forceAlign();
		};
	f.useImperativeHandle(t, () => ({
		forceAlign: M,
		forcePopupAlign: () => {
			T.deprecated(!1, "forcePopupAlign", "forceAlign"), M();
		},
	}));
	const [_, F] = ii(!1, {
			value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
			defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible,
		}),
		k = !v && !p && v !== 0,
		D = (V) => {
			var ne, Y;
			F(k ? !1 : V),
				k ||
					((ne = e.onOpenChange) === null || ne === void 0 || ne.call(e, V),
					(Y = e.onVisibleChange) === null || Y === void 0 || Y.call(e, V));
		},
		R = f.useMemo(() => {
			var V, ne;
			let Y = S;
			return (
				typeof m == "object" &&
					(Y =
						(ne = (V = m.pointAtCenter) !== null && V !== void 0 ? V : m.arrowPointAtCenter) !== null && ne !== void 0
							? ne
							: S),
				y ||
					B0({
						arrowPointAtCenter: Y,
						autoAdjustOverflow: g,
						arrowWidth: w ? E.sizePopupArrow : 0,
						borderRadius: E.borderRadius,
						offset: E.marginXXS,
					})
			);
		}, [S, m, y, E]),
		$ = f.useMemo(() => (v === 0 ? v : p || v || ""), [p, v]),
		O = f.createElement(pm, null, typeof $ == "function" ? $() : $),
		{
			getPopupContainer: j,
			placement: L = "top",
			mouseEnterDelay: N = 0.1,
			mouseLeaveDelay: H = 0.1,
			overlayStyle: q,
			rootClassName: U,
		} = e,
		ee = U0(e, [
			"getPopupContainer",
			"placement",
			"mouseEnterDelay",
			"mouseLeaveDelay",
			"overlayStyle",
			"rootClassName",
		]),
		J = x("tooltip", o),
		Q = x(),
		se = e["data-popover-inject"];
	let de = _;
	!("open" in e) && !("visible" in e) && k && (de = !1);
	const me = bs(u) && !Hu(u) ? u : f.createElement("span", null, u),
		xe = me.props,
		Ae = !xe.className || typeof xe.className == "string" ? ce(xe.className, i || `${J}-open`) : xe.className,
		[ke, we] = ff(J, !se),
		Le = df(J, l),
		Oe = Le.arrowStyle,
		he = Object.assign(Object.assign({}, c), Le.overlayStyle),
		oe = ce(s, { [`${J}-rtl`]: I === "rtl" }, Le.className, U, we);
	return ke(
		f.createElement(
			z0,
			Object.assign({}, ee, {
				showArrow: w,
				placement: L,
				mouseEnterDelay: N,
				mouseLeaveDelay: H,
				prefixCls: J,
				overlayClassName: oe,
				overlayStyle: Object.assign(Object.assign({}, Oe), q),
				getTooltipContainer: j || a || C,
				ref: A,
				builtinPlacements: R,
				overlay: O,
				visible: de,
				onVisibleChange: D,
				afterVisibleChange: d ?? h,
				overlayInnerStyle: he,
				arrowContent: f.createElement("span", { className: `${J}-arrow-content` }),
				motion: { motionName: sm(Q, "zoom-big-fast", e.transitionName), motionDeadline: 1e3 },
				destroyTooltipOnHide: !!b,
			}),
			de ? ai(me, { className: Ae }) : me,
		),
	);
});
Lo._InternalPanelDoNotUseOrYouWillBeFired = q0;
const K0 = (e) => ({
		"&::-moz-placeholder": { opacity: 1 },
		"&::placeholder": { color: e, userSelect: "none" },
		"&:placeholder-shown": { textOverflow: "ellipsis" },
	}),
	xs = (e) => ({ borderColor: e.hoverBorderColor }),
	Ka = (e) => ({ borderColor: e.activeBorderColor, boxShadow: e.activeShadow, outline: 0 }),
	hf = (e) => ({
		color: e.colorTextDisabled,
		backgroundColor: e.colorBgContainerDisabled,
		borderColor: e.colorBorder,
		boxShadow: "none",
		cursor: "not-allowed",
		opacity: 1,
		"&:hover": Object.assign({}, xs(mt(e, { hoverBorderColor: e.colorBorder }))),
	}),
	vf = (e) => {
		const { paddingBlockLG: t, fontSizeLG: r, lineHeightLG: n, borderRadiusLG: o, paddingInlineLG: i } = e;
		return { padding: `${t}px ${i}px`, fontSize: r, lineHeight: n, borderRadius: o };
	},
	gf = (e) => ({ padding: `${e.paddingBlockSM}px ${e.paddingInlineSM}px`, borderRadius: e.borderRadiusSM }),
	mf = (e, t) => {
		const {
			componentCls: r,
			colorError: n,
			colorWarning: o,
			errorActiveShadow: i,
			warningActiveShadow: a,
			colorErrorBorderHover: s,
			colorWarningBorderHover: l,
		} = e;
		return {
			[`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
				borderColor: n,
				"&:hover": { borderColor: s },
				"&:focus, &-focused": Object.assign({}, Ka(mt(e, { activeBorderColor: n, activeShadow: i }))),
				[`${r}-prefix, ${r}-suffix`]: { color: n },
			},
			[`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
				borderColor: o,
				"&:hover": { borderColor: l },
				"&:focus, &-focused": Object.assign({}, Ka(mt(e, { activeBorderColor: o, activeShadow: a }))),
				[`${r}-prefix, ${r}-suffix`]: { color: o },
			},
		};
	},
	pf = (e) =>
		Object.assign(
			Object.assign(
				{
					position: "relative",
					display: "inline-block",
					width: "100%",
					minWidth: 0,
					padding: `${e.paddingBlock}px ${e.paddingInline}px`,
					color: e.colorText,
					fontSize: e.fontSize,
					lineHeight: e.lineHeight,
					backgroundColor: e.colorBgContainer,
					backgroundImage: "none",
					borderWidth: e.lineWidth,
					borderStyle: e.lineType,
					borderColor: e.colorBorder,
					borderRadius: e.borderRadius,
					transition: `all ${e.motionDurationMid}`,
				},
				K0(e.colorTextPlaceholder),
			),
			{
				"&:hover": Object.assign({}, xs(e)),
				"&:focus, &-focused": Object.assign({}, Ka(e)),
				"&-disabled, &[disabled]": Object.assign({}, hf(e)),
				"&-borderless": {
					"&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
						backgroundColor: "transparent",
						border: "none",
						boxShadow: "none",
					},
				},
				"textarea&": {
					maxWidth: "100%",
					height: "auto",
					minHeight: e.controlHeight,
					lineHeight: e.lineHeight,
					verticalAlign: "bottom",
					transition: `all ${e.motionDurationSlow}, height 0s`,
					resize: "vertical",
				},
				"&-lg": Object.assign({}, vf(e)),
				"&-sm": Object.assign({}, gf(e)),
				"&-rtl": { direction: "rtl" },
				"&-textarea-rtl": { direction: "rtl" },
			},
		),
	X0 = (e) => {
		const { componentCls: t, antCls: r } = e;
		return {
			position: "relative",
			display: "table",
			width: "100%",
			borderCollapse: "separate",
			borderSpacing: 0,
			"&[class*='col-']": { paddingInlineEnd: e.paddingXS, "&:last-child": { paddingInlineEnd: 0 } },
			[`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, vf(e)),
			[`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, gf(e)),
			[`&-lg ${r}-select-single ${r}-select-selector`]: { height: e.controlHeightLG },
			[`&-sm ${r}-select-single ${r}-select-selector`]: { height: e.controlHeightSM },
			[`> ${t}`]: { display: "table-cell", "&:not(:first-child):not(:last-child)": { borderRadius: 0 } },
			[`${t}-group`]: {
				"&-addon, &-wrap": {
					display: "table-cell",
					width: 1,
					whiteSpace: "nowrap",
					verticalAlign: "middle",
					"&:not(:first-child):not(:last-child)": { borderRadius: 0 },
				},
				"&-wrap > *": { display: "block !important" },
				"&-addon": {
					position: "relative",
					padding: `0 ${e.paddingInline}px`,
					color: e.colorText,
					fontWeight: "normal",
					fontSize: e.fontSize,
					textAlign: "center",
					backgroundColor: e.colorFillAlter,
					border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
					borderRadius: e.borderRadius,
					transition: `all ${e.motionDurationSlow}`,
					lineHeight: 1,
					[`${r}-select`]: {
						margin: `-${e.paddingBlock + 1}px -${e.paddingInline}px`,
						[`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
							[`${r}-select-selector`]: {
								backgroundColor: "inherit",
								border: `${e.lineWidth}px ${e.lineType} transparent`,
								boxShadow: "none",
							},
						},
						"&-open, &-focused": { [`${r}-select-selector`]: { color: e.colorPrimary } },
					},
					[`${r}-cascader-picker`]: {
						margin: `-9px -${e.paddingInline}px`,
						backgroundColor: "transparent",
						[`${r}-cascader-input`]: { textAlign: "start", border: 0, boxShadow: "none" },
					},
				},
				"&-addon:first-child": { borderInlineEnd: 0 },
				"&-addon:last-child": { borderInlineStart: 0 },
			},
			[`${t}`]: {
				width: "100%",
				marginBottom: 0,
				textAlign: "inherit",
				"&:focus": { zIndex: 1, borderInlineEndWidth: 1 },
				"&:hover": { zIndex: 1, borderInlineEndWidth: 1, [`${t}-search-with-button &`]: { zIndex: 0 } },
			},
			[`> ${t}:first-child, ${t}-group-addon:first-child`]: {
				borderStartEndRadius: 0,
				borderEndEndRadius: 0,
				[`${r}-select ${r}-select-selector`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
			},
			[`> ${t}-affix-wrapper`]: {
				[`&:not(:first-child) ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
				[`&:not(:last-child) ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
			},
			[`> ${t}:last-child, ${t}-group-addon:last-child`]: {
				borderStartStartRadius: 0,
				borderEndStartRadius: 0,
				[`${r}-select ${r}-select-selector`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
			},
			[`${t}-affix-wrapper`]: {
				"&:not(:last-child)": {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0,
					[`${t}-search &`]: { borderStartStartRadius: e.borderRadius, borderEndStartRadius: e.borderRadius },
				},
				[`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
					borderStartStartRadius: 0,
					borderEndStartRadius: 0,
				},
			},
			[`&${t}-group-compact`]: Object.assign(Object.assign({ display: "block" }, Vv()), {
				[`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
					"&:not(:first-child):not(:last-child)": {
						borderInlineEndWidth: e.lineWidth,
						"&:hover": { zIndex: 1 },
						"&:focus": { zIndex: 1 },
					},
				},
				"& > *": { display: "inline-block", float: "none", verticalAlign: "top", borderRadius: 0 },
				[`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: { display: "inline-flex" },
				"& > *:not(:last-child)": { marginInlineEnd: -e.lineWidth, borderInlineEndWidth: e.lineWidth },
				[`${t}`]: { float: "none" },
				[`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
					borderInlineEndWidth: e.lineWidth,
					borderRadius: 0,
					"&:hover": { zIndex: 1 },
					"&:focus": { zIndex: 1 },
				},
				[`& > ${r}-select-focused`]: { zIndex: 1 },
				[`& > ${r}-select > ${r}-select-arrow`]: { zIndex: 1 },
				[`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
					borderStartStartRadius: e.borderRadius,
					borderEndStartRadius: e.borderRadius,
				},
				[`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
					borderInlineEndWidth: e.lineWidth,
					borderStartEndRadius: e.borderRadius,
					borderEndEndRadius: e.borderRadius,
				},
				[`& > ${r}-select-auto-complete ${t}`]: { verticalAlign: "top" },
				[`${t}-group-wrapper + ${t}-group-wrapper`]: {
					marginInlineStart: -e.lineWidth,
					[`${t}-affix-wrapper`]: { borderRadius: 0 },
				},
				[`${t}-group-wrapper:not(:last-child)`]: {
					[`&${t}-search > ${t}-group`]: {
						[`& > ${t}-group-addon > ${t}-search-button`]: { borderRadius: 0 },
						[`& > ${t}`]: {
							borderStartStartRadius: e.borderRadius,
							borderStartEndRadius: 0,
							borderEndEndRadius: 0,
							borderEndStartRadius: e.borderRadius,
						},
					},
				},
			}),
		};
	},
	Y0 = (e) => {
		const { componentCls: t, controlHeightSM: r, lineWidth: n } = e,
			i = (r - n * 2 - 16) / 2;
		return {
			[t]: Object.assign(Object.assign(Object.assign(Object.assign({}, ms(e)), pf(e)), mf(e, t)), {
				'&[type="color"]': {
					height: e.controlHeight,
					[`&${t}-lg`]: { height: e.controlHeightLG },
					[`&${t}-sm`]: { height: r, paddingTop: i, paddingBottom: i },
				},
				'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
					"-webkit-appearance": "none",
				},
			}),
		};
	},
	Z0 = (e) => {
		const { componentCls: t } = e;
		return {
			[`${t}-clear-icon`]: {
				margin: 0,
				color: e.colorTextQuaternary,
				fontSize: e.fontSizeIcon,
				verticalAlign: -1,
				cursor: "pointer",
				transition: `color ${e.motionDurationSlow}`,
				"&:hover": { color: e.colorTextTertiary },
				"&:active": { color: e.colorText },
				"&-hidden": { visibility: "hidden" },
				"&-has-suffix": { margin: `0 ${e.inputAffixPadding}px` },
			},
		};
	},
	Q0 = (e) => {
		const {
			componentCls: t,
			inputAffixPadding: r,
			colorTextDescription: n,
			motionDurationSlow: o,
			colorIcon: i,
			colorIconHover: a,
			iconCls: s,
		} = e;
		return {
			[`${t}-affix-wrapper`]: Object.assign(
				Object.assign(
					Object.assign(
						Object.assign(Object.assign({}, pf(e)), {
							display: "inline-flex",
							[`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, xs(e)), {
								zIndex: 1,
								[`${t}-search-with-button &`]: { zIndex: 0 },
							}),
							"&-focused, &:focus": { zIndex: 1 },
							"&-disabled": { [`${t}[disabled]`]: { background: "transparent" } },
							[`> input${t}`]: {
								padding: 0,
								fontSize: "inherit",
								border: "none",
								borderRadius: 0,
								outline: "none",
								"&::-ms-reveal": { display: "none" },
								"&:focus": { boxShadow: "none !important" },
							},
							"&::before": { display: "inline-block", width: 0, visibility: "hidden", content: '"\\a0"' },
							[`${t}`]: {
								"&-prefix, &-suffix": {
									display: "flex",
									flex: "none",
									alignItems: "center",
									"> *:not(:last-child)": { marginInlineEnd: e.paddingXS },
								},
								"&-show-count-suffix": { color: n },
								"&-show-count-has-suffix": { marginInlineEnd: e.paddingXXS },
								"&-prefix": { marginInlineEnd: r },
								"&-suffix": { marginInlineStart: r },
							},
						}),
						Z0(e),
					),
					{
						[`${s}${t}-password-icon`]: {
							color: i,
							cursor: "pointer",
							transition: `all ${o}`,
							"&:hover": { color: a },
						},
					},
				),
				mf(e, `${t}-affix-wrapper`),
			),
		};
	},
	J0 = (e) => {
		const { componentCls: t, colorError: r, colorWarning: n, borderRadiusLG: o, borderRadiusSM: i } = e;
		return {
			[`${t}-group`]: Object.assign(Object.assign(Object.assign({}, ms(e)), X0(e)), {
				"&-rtl": { direction: "rtl" },
				"&-wrapper": {
					display: "inline-block",
					width: "100%",
					textAlign: "start",
					verticalAlign: "top",
					"&-rtl": { direction: "rtl" },
					"&-lg": { [`${t}-group-addon`]: { borderRadius: o, fontSize: e.fontSizeLG } },
					"&-sm": { [`${t}-group-addon`]: { borderRadius: i } },
					"&-status-error": { [`${t}-group-addon`]: { color: r, borderColor: r } },
					"&-status-warning": { [`${t}-group-addon`]: { color: n, borderColor: n } },
					"&-disabled": { [`${t}-group-addon`]: Object.assign({}, hf(e)) },
					[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
						[`${t}, ${t}-group-addon`]: { borderRadius: 0 },
					},
					[`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
						[`${t}, ${t}-group-addon`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
					},
					[`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
						[`${t}, ${t}-group-addon`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
					},
				},
			}),
		};
	},
	eb = (e) => {
		const { componentCls: t, antCls: r } = e,
			n = `${t}-search`;
		return {
			[n]: {
				[`${t}`]: {
					"&:hover, &:focus": {
						borderColor: e.colorPrimaryHover,
						[`+ ${t}-group-addon ${n}-button:not(${r}-btn-primary)`]: { borderInlineStartColor: e.colorPrimaryHover },
					},
				},
				[`${t}-affix-wrapper`]: { borderRadius: 0 },
				[`${t}-lg`]: { lineHeight: e.lineHeightLG - 2e-4 },
				[`> ${t}-group`]: {
					[`> ${t}-group-addon:last-child`]: {
						insetInlineStart: -1,
						padding: 0,
						border: 0,
						[`${n}-button`]: {
							paddingTop: 0,
							paddingBottom: 0,
							borderStartStartRadius: 0,
							borderStartEndRadius: e.borderRadius,
							borderEndEndRadius: e.borderRadius,
							borderEndStartRadius: 0,
							boxShadow: "none",
						},
						[`${n}-button:not(${r}-btn-primary)`]: {
							color: e.colorTextDescription,
							"&:hover": { color: e.colorPrimaryHover },
							"&:active": { color: e.colorPrimaryActive },
							[`&${r}-btn-loading::before`]: {
								insetInlineStart: 0,
								insetInlineEnd: 0,
								insetBlockStart: 0,
								insetBlockEnd: 0,
							},
						},
					},
				},
				[`${n}-button`]: { height: e.controlHeight, "&:hover, &:focus": { zIndex: 1 } },
				[`&-large ${n}-button`]: { height: e.controlHeightLG },
				[`&-small ${n}-button`]: { height: e.controlHeightSM },
				"&-rtl": { direction: "rtl" },
				[`&${t}-compact-item`]: {
					[`&:not(${t}-compact-last-item)`]: {
						[`${t}-group-addon`]: { [`${t}-search-button`]: { marginInlineEnd: -e.lineWidth, borderRadius: 0 } },
					},
					[`&:not(${t}-compact-first-item)`]: { [`${t},${t}-affix-wrapper`]: { borderRadius: 0 } },
					[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { "&:hover,&:focus,&:active": { zIndex: 2 } },
					[`> ${t}-affix-wrapper-focused`]: { zIndex: 2 },
				},
			},
		};
	},
	tb = (e) => {
		const { componentCls: t, paddingLG: r } = e,
			n = `${t}-textarea`;
		return {
			[n]: {
				position: "relative",
				"&-show-count": {
					[`> ${t}`]: { height: "100%" },
					[`${t}-data-count`]: {
						position: "absolute",
						bottom: -e.fontSize * e.lineHeight,
						insetInlineEnd: 0,
						color: e.colorTextDescription,
						whiteSpace: "nowrap",
						pointerEvents: "none",
					},
				},
				"&-allow-clear": { [`> ${t}`]: { paddingInlineEnd: r } },
				[`&-affix-wrapper${n}-has-feedback`]: { [`${t}`]: { paddingInlineEnd: r } },
				[`&-affix-wrapper${t}-affix-wrapper`]: {
					padding: 0,
					[`> textarea${t}`]: {
						fontSize: "inherit",
						border: "none",
						outline: "none",
						"&:focus": { boxShadow: "none !important" },
					},
					[`${t}-suffix`]: {
						margin: 0,
						"> *:not(:last-child)": { marginInline: 0 },
						[`${t}-clear-icon`]: { position: "absolute", insetInlineEnd: e.paddingXS, insetBlockStart: e.paddingXS },
						[`${n}-suffix`]: {
							position: "absolute",
							top: 0,
							insetInlineEnd: e.paddingInline,
							bottom: 0,
							zIndex: 1,
							display: "inline-flex",
							alignItems: "center",
							margin: "auto",
							pointerEvents: "none",
						},
					},
				},
			},
		};
	};
function rb(e) {
	return mt(e, { inputAffixPadding: e.paddingXXS });
}
const nb = (e) => {
		const {
			controlHeight: t,
			fontSize: r,
			lineHeight: n,
			lineWidth: o,
			controlHeightSM: i,
			controlHeightLG: a,
			fontSizeLG: s,
			lineHeightLG: l,
			paddingSM: c,
			controlPaddingHorizontalSM: u,
			controlPaddingHorizontal: d,
			colorFillAlter: h,
			colorPrimaryHover: b,
			controlOutlineWidth: m,
			controlOutline: v,
			colorErrorOutline: p,
			colorWarningOutline: y,
		} = e;
		return {
			paddingBlock: Math.max(Math.round(((t - r * n) / 2) * 10) / 10 - o, 0),
			paddingBlockSM: Math.max(Math.round(((i - r * n) / 2) * 10) / 10 - o, 0),
			paddingBlockLG: Math.ceil(((a - s * l) / 2) * 10) / 10 - o,
			paddingInline: c - o,
			paddingInlineSM: u - o,
			paddingInlineLG: d - o,
			addonBg: h,
			activeBorderColor: b,
			hoverBorderColor: b,
			activeShadow: `0 0 0 ${m}px ${v}`,
			errorActiveShadow: `0 0 0 ${m}px ${p}`,
			warningActiveShadow: `0 0 0 ${m}px ${y}`,
		};
	},
	ob = rn(
		"Input",
		(e) => {
			const t = mt(e, rb(e));
			return [Y0(t), tb(t), Q0(t), J0(t), eb(t), Zu(t)];
		},
		nb,
	);
function Lr(e) {
	return !!(e.addonBefore || e.addonAfter);
}
function Zi(e) {
	return !!(e.prefix || e.suffix || e.allowClear);
}
function Qi(e, t, r, n) {
	if (r) {
		var o = t;
		if (t.type === "click") {
			var i = e.cloneNode(!0);
			(o = Object.create(t, { target: { value: i }, currentTarget: { value: i } })), (i.value = ""), r(o);
			return;
		}
		if (n !== void 0) {
			(o = Object.create(t, { target: { value: e }, currentTarget: { value: e } })), (e.value = n), r(o);
			return;
		}
		r(o);
	}
}
function ib(e) {
	return typeof e > "u" || e === null ? "" : String(e);
}
var ab = function (t) {
	var r,
		n,
		o = t.inputElement,
		i = t.prefixCls,
		a = t.prefix,
		s = t.suffix,
		l = t.addonBefore,
		c = t.addonAfter,
		u = t.className,
		d = t.style,
		h = t.disabled,
		b = t.readOnly,
		m = t.focused,
		v = t.triggerFocus,
		p = t.allowClear,
		y = t.value,
		S = t.handleReset,
		g = t.hidden,
		w = t.classes,
		E = t.classNames,
		C = t.dataAttrs,
		x = t.styles,
		I = t.components,
		T = I?.affixWrapper || "span",
		A = I?.groupWrapper || "span",
		M = I?.wrapper || "span",
		_ = I?.groupAddon || "span",
		F = f.useRef(null),
		k = function (J) {
			var Q;
			(Q = F.current) !== null && Q !== void 0 && Q.contains(J.target) && v?.();
		},
		D = function () {
			var J;
			if (!p) return null;
			var Q = !h && !b && y,
				se = "".concat(i, "-clear-icon"),
				de = pe(p) === "object" && p !== null && p !== void 0 && p.clearIcon ? p.clearIcon : "✖";
			return X.createElement(
				"span",
				{
					onClick: S,
					onMouseDown: function (xe) {
						return xe.preventDefault();
					},
					className: ce(se, ((J = {}), P(J, "".concat(se, "-hidden"), !Q), P(J, "".concat(se, "-has-suffix"), !!s), J)),
					role: "button",
					tabIndex: -1,
				},
				de,
			);
		},
		R = f.cloneElement(o, {
			value: y,
			hidden: g,
			className: ce((r = o.props) === null || r === void 0 ? void 0 : r.className, !Zi(t) && !Lr(t) && u) || null,
			style: z(z({}, (n = o.props) === null || n === void 0 ? void 0 : n.style), !Zi(t) && !Lr(t) ? d : {}),
		});
	if (Zi(t)) {
		var $,
			O = "".concat(i, "-affix-wrapper"),
			j = ce(
				O,
				(($ = {}),
				P($, "".concat(O, "-disabled"), h),
				P($, "".concat(O, "-focused"), m),
				P($, "".concat(O, "-readonly"), b),
				P($, "".concat(O, "-input-with-clear-btn"), s && p && y),
				$),
				!Lr(t) && u,
				w?.affixWrapper,
				E?.affixWrapper,
			),
			L =
				(s || p) &&
				X.createElement("span", { className: ce("".concat(i, "-suffix"), E?.suffix), style: x?.suffix }, D(), s);
		R = X.createElement(
			T,
			Te(
				{ className: j, style: z(z({}, Lr(t) ? void 0 : d), x?.affixWrapper), hidden: !Lr(t) && g, onClick: k },
				C?.affixWrapper,
				{ ref: F },
			),
			a && X.createElement("span", { className: ce("".concat(i, "-prefix"), E?.prefix), style: x?.prefix }, a),
			f.cloneElement(o, { value: y, hidden: null }),
			L,
		);
	}
	if (Lr(t)) {
		var N = "".concat(i, "-group"),
			H = "".concat(N, "-addon"),
			q = ce("".concat(i, "-wrapper"), N, w?.wrapper),
			U = ce("".concat(i, "-group-wrapper"), u, w?.group);
		return X.createElement(
			A,
			{ className: U, style: d, hidden: g },
			X.createElement(
				M,
				{ className: q },
				l && X.createElement(_, { className: H }, l),
				f.cloneElement(R, { hidden: null }),
				c && X.createElement(_, { className: H }, c),
			),
		);
	}
	return R;
};
function sb(e, t) {
	if (!e) return;
	e.focus(t);
	const { cursor: r } = t || {};
	if (r) {
		const n = e.value.length;
		switch (r) {
			case "start":
				e.setSelectionRange(0, 0);
				break;
			case "end":
				e.setSelectionRange(n, n);
				break;
			default:
				e.setSelectionRange(0, n);
				break;
		}
	}
}
var lb = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
	cb = [
		"letter-spacing",
		"line-height",
		"padding-top",
		"padding-bottom",
		"font-family",
		"font-weight",
		"font-size",
		"font-variant",
		"text-rendering",
		"text-transform",
		"width",
		"text-indent",
		"padding-left",
		"padding-right",
		"border-width",
		"box-sizing",
		"word-break",
		"white-space",
	],
	Ji = {},
	xt;
function ub(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
		r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
	if (t && Ji[r]) return Ji[r];
	var n = window.getComputedStyle(e),
		o =
			n.getPropertyValue("box-sizing") ||
			n.getPropertyValue("-moz-box-sizing") ||
			n.getPropertyValue("-webkit-box-sizing"),
		i = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")),
		a = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")),
		s = cb
			.map(function (c) {
				return "".concat(c, ":").concat(n.getPropertyValue(c));
			})
			.join(";"),
		l = { sizingStyle: s, paddingSize: i, borderSize: a, boxSizing: o };
	return t && r && (Ji[r] = l), l;
}
function fb(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
		r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
		n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
	xt ||
		((xt = document.createElement("textarea")),
		xt.setAttribute("tab-index", "-1"),
		xt.setAttribute("aria-hidden", "true"),
		document.body.appendChild(xt)),
		e.getAttribute("wrap") ? xt.setAttribute("wrap", e.getAttribute("wrap")) : xt.removeAttribute("wrap");
	var o = ub(e, t),
		i = o.paddingSize,
		a = o.borderSize,
		s = o.boxSizing,
		l = o.sizingStyle;
	xt.setAttribute("style", "".concat(l, ";").concat(lb)), (xt.value = e.value || e.placeholder || "");
	var c = void 0,
		u = void 0,
		d,
		h = xt.scrollHeight;
	if ((s === "border-box" ? (h += a) : s === "content-box" && (h -= i), r !== null || n !== null)) {
		xt.value = " ";
		var b = xt.scrollHeight - i;
		r !== null && ((c = b * r), s === "border-box" && (c = c + i + a), (h = Math.max(c, h))),
			n !== null &&
				((u = b * n), s === "border-box" && (u = u + i + a), (d = h > u ? "" : "hidden"), (h = Math.min(u, h)));
	}
	var m = { height: h, overflowY: d, resize: "none" };
	return c && (m.minHeight = c), u && (m.maxHeight = u), m;
}
var db = [
		"prefixCls",
		"onPressEnter",
		"defaultValue",
		"value",
		"autoSize",
		"onResize",
		"className",
		"style",
		"disabled",
		"onChange",
		"onInternalAutoSize",
	],
	ea = 0,
	ta = 1,
	ra = 2,
	hb = f.forwardRef(function (e, t) {
		var r = e,
			n = r.prefixCls;
		r.onPressEnter;
		var o = r.defaultValue,
			i = r.value,
			a = r.autoSize,
			s = r.onResize,
			l = r.className,
			c = r.style,
			u = r.disabled,
			d = r.onChange;
		r.onInternalAutoSize;
		var h = Et(r, db),
			b = ii(o, {
				value: i,
				postState: function (U) {
					return U ?? "";
				},
			}),
			m = W(b, 2),
			v = m[0],
			p = m[1],
			y = function (U) {
				p(U.target.value), d?.(U);
			},
			S = f.useRef();
		f.useImperativeHandle(t, function () {
			return { textArea: S.current };
		});
		var g = f.useMemo(
				function () {
					return a && pe(a) === "object" ? [a.minRows, a.maxRows] : [];
				},
				[a],
			),
			w = W(g, 2),
			E = w[0],
			C = w[1],
			x = !!a,
			I = function () {
				try {
					if (document.activeElement === S.current) {
						var U = S.current,
							ee = U.selectionStart,
							J = U.selectionEnd,
							Q = U.scrollTop;
						S.current.setSelectionRange(ee, J), (S.current.scrollTop = Q);
					}
				} catch {}
			},
			T = f.useState(ra),
			A = W(T, 2),
			M = A[0],
			_ = A[1],
			F = f.useState(),
			k = W(F, 2),
			D = k[0],
			R = k[1],
			$ = function () {
				_(ea);
			};
		je(
			function () {
				x && $();
			},
			[i, E, C, x],
		),
			je(
				function () {
					if (M === ea) _(ta);
					else if (M === ta) {
						var q = fb(S.current, !1, E, C);
						_(ra), R(q);
					} else I();
				},
				[M],
			);
		var O = f.useRef(),
			j = function () {
				Ft.cancel(O.current);
			},
			L = function (U) {
				M === ra &&
					(s?.(U),
					a &&
						(j(),
						(O.current = Ft(function () {
							$();
						}))));
			};
		f.useEffect(function () {
			return j;
		}, []);
		var N = x ? D : null,
			H = z(z({}, c), N);
		return (
			(M === ea || M === ta) && ((H.overflowY = "hidden"), (H.overflowX = "hidden")),
			f.createElement(
				_n,
				{ onResize: L, disabled: !(a || s) },
				f.createElement(
					"textarea",
					Te({}, h, {
						ref: S,
						style: H,
						className: ce(n, l, P({}, "".concat(n, "-disabled"), u)),
						disabled: u,
						value: v,
						onChange: y,
					}),
				),
			)
		);
	}),
	vb = [
		"defaultValue",
		"value",
		"onFocus",
		"onBlur",
		"onChange",
		"allowClear",
		"maxLength",
		"onCompositionStart",
		"onCompositionEnd",
		"suffix",
		"prefixCls",
		"classes",
		"showCount",
		"className",
		"style",
		"disabled",
		"hidden",
		"classNames",
		"styles",
		"onResize",
	];
function bf(e, t) {
	return te(e || "")
		.slice(0, t)
		.join("");
}
function Jl(e, t, r, n) {
	var o = r;
	return e ? (o = bf(r, n)) : te(t || "").length < r.length && te(r || "").length > n && (o = t), o;
}
var gb = X.forwardRef(function (e, t) {
		var r,
			n = e.defaultValue,
			o = e.value,
			i = e.onFocus,
			a = e.onBlur,
			s = e.onChange,
			l = e.allowClear,
			c = e.maxLength,
			u = e.onCompositionStart,
			d = e.onCompositionEnd,
			h = e.suffix,
			b = e.prefixCls,
			m = b === void 0 ? "rc-textarea" : b,
			v = e.classes,
			p = e.showCount,
			y = e.className,
			S = e.style,
			g = e.disabled,
			w = e.hidden,
			E = e.classNames,
			C = e.styles,
			x = e.onResize,
			I = Et(e, vb),
			T = ii(n, { value: o, defaultValue: n }),
			A = W(T, 2),
			M = A[0],
			_ = A[1],
			F = f.useRef(null),
			k = X.useState(!1),
			D = W(k, 2),
			R = D[0],
			$ = D[1],
			O = X.useState(!1),
			j = W(O, 2),
			L = j[0],
			N = j[1],
			H = X.useRef(),
			q = X.useRef(0),
			U = X.useState(null),
			ee = W(U, 2),
			J = ee[0],
			Q = ee[1],
			se = function () {
				var Z;
				(Z = F.current) === null || Z === void 0 || Z.textArea.focus();
			};
		f.useImperativeHandle(t, function () {
			return {
				resizableTextArea: F.current,
				focus: se,
				blur: function () {
					var Z;
					(Z = F.current) === null || Z === void 0 || Z.textArea.blur();
				},
			};
		}),
			f.useEffect(
				function () {
					$(function (Ee) {
						return !g && Ee;
					});
				},
				[g],
			);
		var de = Number(c) > 0,
			me = function (Z) {
				N(!0), (H.current = M), (q.current = Z.currentTarget.selectionStart), u?.(Z);
			},
			xe = function (Z) {
				N(!1);
				var ae = Z.currentTarget.value;
				if (de) {
					var We,
						jt = q.current >= c + 1 || q.current === ((We = H.current) === null || We === void 0 ? void 0 : We.length);
					ae = Jl(jt, H.current, ae, c);
				}
				ae !== M && (_(ae), Qi(Z.currentTarget, Z, s, ae)), d?.(Z);
			},
			Ae = function (Z) {
				var ae = Z.target.value;
				if (!L && de) {
					var We =
						Z.target.selectionStart >= c + 1 || Z.target.selectionStart === ae.length || !Z.target.selectionStart;
					ae = Jl(We, M, ae, c);
				}
				_(ae), Qi(Z.currentTarget, Z, s, ae);
			},
			ke = function (Z) {
				var ae = I.onPressEnter,
					We = I.onKeyDown;
				Z.key === "Enter" && ae && ae(Z), We?.(Z);
			},
			we = function (Z) {
				$(!0), i?.(Z);
			},
			Le = function (Z) {
				$(!1), a?.(Z);
			},
			Oe = function (Z) {
				var ae;
				_(""), se(), Qi((ae = F.current) === null || ae === void 0 ? void 0 : ae.textArea, Z, s);
			},
			he = ib(M);
		!L && de && o == null && (he = bf(he, c));
		var oe = h,
			V;
		if (p) {
			var ne = te(he).length;
			pe(p) === "object"
				? (V = p.formatter({ value: he, count: ne, maxLength: c }))
				: (V = "".concat(ne).concat(de ? " / ".concat(c) : "")),
				(oe = X.createElement(
					X.Fragment,
					null,
					oe,
					X.createElement("span", { className: ce("".concat(m, "-data-count"), E?.count), style: C?.count }, V),
				));
		}
		var Y = function (Z) {
				var ae;
				x?.(Z), (ae = F.current) !== null && ae !== void 0 && ae.textArea.style.height && Q(!0);
			},
			ie = !I.autoSize && !p && !l,
			Re = X.createElement(ab, {
				value: he,
				allowClear: l,
				handleReset: Oe,
				suffix: oe,
				prefixCls: m,
				classes: {
					affixWrapper: ce(
						v?.affixWrapper,
						((r = {}), P(r, "".concat(m, "-show-count"), p), P(r, "".concat(m, "-textarea-allow-clear"), l), r),
					),
				},
				disabled: g,
				focused: R,
				className: y,
				style: z(z({}, S), J && !ie ? { height: "auto" } : {}),
				dataAttrs: { affixWrapper: { "data-count": typeof V == "string" ? V : void 0 } },
				hidden: w,
				inputElement: X.createElement(
					hb,
					Te({}, I, {
						onKeyDown: ke,
						onChange: Ae,
						onFocus: we,
						onBlur: Le,
						onCompositionStart: me,
						onCompositionEnd: xe,
						className: E?.textarea,
						style: z(z({}, C?.textarea), {}, { resize: S?.resize }),
						disabled: g,
						prefixCls: m,
						onResize: Y,
						ref: F,
					}),
				),
			});
		return Re;
	}),
	mb = function (e, t) {
		var r = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function")
			for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
				t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
		return r;
	};
const pb = f.forwardRef((e, t) => {
	const {
			prefixCls: r,
			bordered: n = !0,
			size: o,
			disabled: i,
			status: a,
			allowClear: s,
			showCount: l,
			classNames: c,
			rootClassName: u,
			className: d,
		} = e,
		h = mb(e, [
			"prefixCls",
			"bordered",
			"size",
			"disabled",
			"status",
			"allowClear",
			"showCount",
			"classNames",
			"rootClassName",
			"className",
		]),
		{ getPrefixCls: b, direction: m } = f.useContext(ot),
		v = Vu(o),
		p = f.useContext(Rn),
		y = i ?? p,
		{ status: S, hasFeedback: g, feedbackIcon: w } = f.useContext(Jp),
		E = A0(S, a),
		C = f.useRef(null);
	f.useImperativeHandle(t, () => {
		var M;
		return {
			resizableTextArea: (M = C.current) === null || M === void 0 ? void 0 : M.resizableTextArea,
			focus: (_) => {
				var F, k;
				sb(
					(k = (F = C.current) === null || F === void 0 ? void 0 : F.resizableTextArea) === null || k === void 0
						? void 0
						: k.textArea,
					_,
				);
			},
			blur: () => {
				var _;
				return (_ = C.current) === null || _ === void 0 ? void 0 : _.blur();
			},
		};
	});
	const x = b("input", r);
	let I;
	typeof s == "object" && s?.clearIcon ? (I = s) : s && (I = { clearIcon: f.createElement(Ug, null) });
	const [T, A] = ob(x);
	return T(
		f.createElement(
			gb,
			Object.assign({}, h, {
				disabled: y,
				allowClear: I,
				className: ce(d, u),
				classes: {
					affixWrapper: ce(
						`${x}-textarea-affix-wrapper`,
						{
							[`${x}-affix-wrapper-rtl`]: m === "rtl",
							[`${x}-affix-wrapper-borderless`]: !n,
							[`${x}-affix-wrapper-sm`]: v === "small",
							[`${x}-affix-wrapper-lg`]: v === "large",
							[`${x}-textarea-show-count`]: l,
						},
						Zl(`${x}-affix-wrapper`, E),
						A,
					),
				},
				classNames: Object.assign(Object.assign({}, c), {
					textarea: ce(
						{ [`${x}-borderless`]: !n, [`${x}-sm`]: v === "small", [`${x}-lg`]: v === "large" },
						Zl(x, E),
						A,
						c?.textarea,
					),
				}),
				prefixCls: x,
				suffix: g && f.createElement("span", { className: `${x}-textarea-suffix` }, w),
				showCount: l,
				ref: C,
			}),
		),
	);
});
var bb = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const yb = { border: 0, background: "transparent", padding: 0, lineHeight: "inherit", display: "inline-block" },
	ec = f.forwardRef((e, t) => {
		const r = (c) => {
				const { keyCode: u } = c;
				u === Io.ENTER && c.preventDefault();
			},
			n = (c) => {
				const { keyCode: u } = c,
					{ onClick: d } = e;
				u === Io.ENTER && d && d();
			},
			{ style: o, noStyle: i, disabled: a } = e,
			s = bb(e, ["style", "noStyle", "disabled"]);
		let l = {};
		return (
			i || (l = Object.assign({}, yb)),
			a && (l.pointerEvents = "none"),
			(l = Object.assign(Object.assign({}, l), o)),
			f.createElement(
				"div",
				Object.assign({ role: "button", tabIndex: 0, ref: t }, s, { onKeyDown: r, onKeyUp: n, style: l }),
			)
		);
	});
var Sb = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",
					},
				},
			],
		},
		name: "copy",
		theme: "outlined",
	},
	wb = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: Sb }));
	};
const xb = f.forwardRef(wb);
var Cb = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z",
					},
				},
			],
		},
		name: "edit",
		theme: "outlined",
	},
	Eb = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: Cb }));
	};
const $b = f.forwardRef(Eb);
var Ob = function () {
		var e = document.getSelection();
		if (!e.rangeCount) return function () {};
		for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
		switch (t.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				t.blur();
				break;
			default:
				t = null;
				break;
		}
		return (
			e.removeAllRanges(),
			function () {
				e.type === "Caret" && e.removeAllRanges(),
					e.rangeCount ||
						r.forEach(function (o) {
							e.addRange(o);
						}),
					t && t.focus();
			}
		);
	},
	Rb = Ob,
	tc = { "text/plain": "Text", "text/html": "Url", default: "Text" },
	Pb = "Copy to clipboard: #{key}, Enter";
function Tb(e) {
	var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
	return e.replace(/#{\s*key\s*}/g, t);
}
function Ab(e, t) {
	var r,
		n,
		o,
		i,
		a,
		s,
		l = !1;
	t || (t = {}), (r = t.debug || !1);
	try {
		(o = Rb()),
			(i = document.createRange()),
			(a = document.getSelection()),
			(s = document.createElement("span")),
			(s.textContent = e),
			(s.ariaHidden = "true"),
			(s.style.all = "unset"),
			(s.style.position = "fixed"),
			(s.style.top = 0),
			(s.style.clip = "rect(0, 0, 0, 0)"),
			(s.style.whiteSpace = "pre"),
			(s.style.webkitUserSelect = "text"),
			(s.style.MozUserSelect = "text"),
			(s.style.msUserSelect = "text"),
			(s.style.userSelect = "text"),
			s.addEventListener("copy", function (u) {
				if ((u.stopPropagation(), t.format))
					if ((u.preventDefault(), typeof u.clipboardData > "u")) {
						window.clipboardData.clearData();
						var d = tc[t.format] || tc.default;
						window.clipboardData.setData(d, e);
					} else u.clipboardData.clearData(), u.clipboardData.setData(t.format, e);
				t.onCopy && (u.preventDefault(), t.onCopy(u.clipboardData));
			}),
			document.body.appendChild(s),
			i.selectNodeContents(s),
			a.addRange(i);
		var c = document.execCommand("copy");
		if (!c) throw new Error("copy command was unsuccessful");
		l = !0;
	} catch {
		try {
			window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), (l = !0);
		} catch {
			(n = Tb("message" in t ? t.message : Pb)), window.prompt(n, e);
		}
	} finally {
		a && (typeof a.removeRange == "function" ? a.removeRange(i) : a.removeAllRanges()),
			s && document.body.removeChild(s),
			o();
	}
	return l;
}
var Mb = Ab;
const Ib = oc(Mb);
var _b = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z",
					},
				},
			],
		},
		name: "enter",
		theme: "outlined",
	},
	Fb = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: _b }));
	};
const jb = f.forwardRef(Fb),
	Lb = (e, t, r, n) => {
		const { titleMarginBottom: o, fontWeightStrong: i } = n;
		return { marginBottom: o, color: r, fontWeight: i, fontSize: e, lineHeight: t };
	},
	zb = (e) => {
		const t = [1, 2, 3, 4, 5],
			r = {};
		return (
			t.forEach((n) => {
				r[
					`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `
				] = Lb(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
			}),
			r
		);
	},
	Nb = (e) => {
		const { componentCls: t } = e;
		return {
			"a&, a": Object.assign(Object.assign({}, xu(e)), {
				textDecoration: e.linkDecoration,
				"&:active, &:hover": { textDecoration: e.linkHoverDecoration },
				[`&[disabled], &${t}-disabled`]: {
					color: e.colorTextDisabled,
					cursor: "not-allowed",
					"&:active, &:hover": { color: e.colorTextDisabled },
					"&:active": { pointerEvents: "none" },
				},
			}),
		};
	},
	kb = (e) => ({
		code: {
			margin: "0 0.2em",
			paddingInline: "0.4em",
			paddingBlock: "0.2em 0.1em",
			fontSize: "85%",
			fontFamily: e.fontFamilyCode,
			background: "rgba(150, 150, 150, 0.1)",
			border: "1px solid rgba(100, 100, 100, 0.2)",
			borderRadius: 3,
		},
		kbd: {
			margin: "0 0.2em",
			paddingInline: "0.4em",
			paddingBlock: "0.15em 0.1em",
			fontSize: "90%",
			fontFamily: e.fontFamilyCode,
			background: "rgba(150, 150, 150, 0.06)",
			border: "1px solid rgba(100, 100, 100, 0.2)",
			borderBottomWidth: 2,
			borderRadius: 3,
		},
		mark: { padding: 0, backgroundColor: Ea[2] },
		"u, ins": { textDecoration: "underline", textDecorationSkipInk: "auto" },
		"s, del": { textDecoration: "line-through" },
		strong: { fontWeight: 600 },
		"ul, ol": {
			marginInline: 0,
			marginBlock: "0 1em",
			padding: 0,
			li: { marginInline: "20px 0", marginBlock: 0, paddingInline: "4px 0", paddingBlock: 0 },
		},
		ul: { listStyleType: "circle", ul: { listStyleType: "disc" } },
		ol: { listStyleType: "decimal" },
		"pre, blockquote": { margin: "1em 0" },
		pre: {
			padding: "0.4em 0.6em",
			whiteSpace: "pre-wrap",
			wordWrap: "break-word",
			background: "rgba(150, 150, 150, 0.1)",
			border: "1px solid rgba(100, 100, 100, 0.2)",
			borderRadius: 3,
			fontFamily: e.fontFamilyCode,
			code: {
				display: "inline",
				margin: 0,
				padding: 0,
				fontSize: "inherit",
				fontFamily: "inherit",
				background: "transparent",
				border: 0,
			},
		},
		blockquote: {
			paddingInline: "0.6em 0",
			paddingBlock: 0,
			borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
			opacity: 0.85,
		},
	}),
	Hb = (e) => {
		const { componentCls: t, paddingSM: r } = e,
			n = r;
		return {
			"&-edit-content": {
				position: "relative",
				"div&": { insetInlineStart: -e.paddingSM, marginTop: -n, marginBottom: `calc(1em - ${n}px)` },
				[`${t}-edit-content-confirm`]: {
					position: "absolute",
					insetInlineEnd: e.marginXS + 2,
					insetBlockEnd: e.marginXS,
					color: e.colorTextDescription,
					fontWeight: "normal",
					fontSize: e.fontSize,
					fontStyle: "normal",
					pointerEvents: "none",
				},
				textarea: { margin: "0!important", MozTransition: "none", height: "1em" },
			},
		};
	},
	Db = (e) => ({ "&-copy-success": { "\n    &,\n    &:hover,\n    &:focus": { color: e.colorSuccess } } }),
	Bb = () => ({
		"\n  a&-ellipsis,\n  span&-ellipsis\n  ": { display: "inline-block", maxWidth: "100%" },
		"&-single-line": { whiteSpace: "nowrap" },
		"&-ellipsis-single-line": {
			overflow: "hidden",
			textOverflow: "ellipsis",
			"a&, span&": { verticalAlign: "bottom" },
		},
		"&-ellipsis-multiple-line": {
			display: "-webkit-box",
			overflow: "hidden",
			WebkitLineClamp: 3,
			WebkitBoxOrient: "vertical",
		},
	}),
	Vb = (e) => {
		const { componentCls: t, titleMarginTop: r } = e;
		return {
			[t]: Object.assign(
				Object.assign(
					Object.assign(
						Object.assign(
							Object.assign(
								Object.assign(
									Object.assign(
										Object.assign(
											Object.assign(
												{
													color: e.colorText,
													wordBreak: "break-word",
													lineHeight: e.lineHeight,
													[`&${t}-secondary`]: { color: e.colorTextDescription },
													[`&${t}-success`]: { color: e.colorSuccess },
													[`&${t}-warning`]: { color: e.colorWarning },
													[`&${t}-danger`]: {
														color: e.colorError,
														"a&:active, a&:focus": { color: e.colorErrorActive },
														"a&:hover": { color: e.colorErrorHover },
													},
													[`&${t}-disabled`]: { color: e.colorTextDisabled, cursor: "not-allowed", userSelect: "none" },
													"\n        div&,\n        p\n      ": { marginBottom: "1em" },
												},
												zb(e),
											),
											{
												[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: { marginTop: r },
												"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":
													{
														"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
															marginTop: r,
														},
													},
											},
										),
										kb(e),
									),
									Nb(e),
								),
								{
									[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, xu(e)), { marginInlineStart: e.marginXXS }),
								},
							),
							Hb(e),
						),
						Db(e),
					),
					Bb(),
				),
				{ "&-rtl": { direction: "rtl" } },
			),
		};
	},
	yf = rn(
		"Typography",
		(e) => [Vb(e)],
		() => ({ titleMarginTop: "1.2em", titleMarginBottom: "0.5em" }),
	),
	Wb = (e) => {
		const {
				prefixCls: t,
				"aria-label": r,
				className: n,
				style: o,
				direction: i,
				maxLength: a,
				autoSize: s = !0,
				value: l,
				onSave: c,
				onCancel: u,
				onEnd: d,
				component: h,
				enterIcon: b = f.createElement(jb, null),
			} = e,
			m = f.useRef(null),
			v = f.useRef(!1),
			p = f.useRef(),
			[y, S] = f.useState(l);
		f.useEffect(() => {
			S(l);
		}, [l]),
			f.useEffect(() => {
				if (m.current && m.current.resizableTextArea) {
					const { textArea: k } = m.current.resizableTextArea;
					k.focus();
					const { length: D } = k.value;
					k.setSelectionRange(D, D);
				}
			}, []);
		const g = (k) => {
				let { target: D } = k;
				S(D.value.replace(/[\n\r]/g, ""));
			},
			w = () => {
				v.current = !0;
			},
			E = () => {
				v.current = !1;
			},
			C = (k) => {
				let { keyCode: D } = k;
				v.current || (p.current = D);
			},
			x = () => {
				c(y.trim());
			},
			I = (k) => {
				let { keyCode: D, ctrlKey: R, altKey: $, metaKey: O, shiftKey: j } = k;
				p.current === D && !v.current && !R && !$ && !O && !j && (D === Io.ENTER ? (x(), d?.()) : D === Io.ESC && u());
			},
			T = () => {
				x();
			},
			A = h ? `${t}-${h}` : "",
			[M, _] = yf(t),
			F = ce(t, `${t}-edit-content`, { [`${t}-rtl`]: i === "rtl" }, n, A, _);
		return M(
			f.createElement(
				"div",
				{ className: F, style: o },
				f.createElement(pb, {
					ref: m,
					maxLength: a,
					value: y,
					onChange: g,
					onKeyDown: C,
					onKeyUp: I,
					onCompositionStart: w,
					onCompositionEnd: E,
					onBlur: T,
					"aria-label": r,
					rows: 1,
					autoSize: s,
				}),
				b !== null ? ai(b, { className: `${t}-edit-content-confirm` }) : null,
			),
		);
	};
var Gb = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const Sf = f.forwardRef((e, t) => {
	const {
			prefixCls: r,
			component: n = "article",
			className: o,
			rootClassName: i,
			setContentRef: a,
			children: s,
			direction: l,
			style: c,
		} = e,
		u = Gb(e, [
			"prefixCls",
			"component",
			"className",
			"rootClassName",
			"setContentRef",
			"children",
			"direction",
			"style",
		]),
		{ getPrefixCls: d, direction: h, typography: b } = f.useContext(ot),
		m = l ?? h;
	let v = t;
	a && (v = en(t, a));
	const p = d("typography", r),
		[y, S] = yf(p),
		g = ce(p, b?.className, { [`${p}-rtl`]: m === "rtl" }, o, i, S),
		w = Object.assign(Object.assign({}, b?.style), c);
	return y(f.createElement(n, Object.assign({ className: g, style: w, ref: v }, u), s));
});
function na(e, t) {
	return f.useMemo(() => {
		const r = !!e;
		return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
	}, [e]);
}
const qb = (e, t) => {
	const r = f.useRef(!1);
	f.useEffect(() => {
		r.current ? e() : (r.current = !0);
	}, t);
};
function wf(e) {
	const t = typeof e;
	return t === "string" || t === "number";
}
function Ub(e) {
	let t = 0;
	return (
		e.forEach((r) => {
			wf(r) ? (t += String(r).length) : (t += 1);
		}),
		t
	);
}
function oa(e, t) {
	let r = 0;
	const n = [];
	for (let o = 0; o < e.length; o += 1) {
		if (r === t) return n;
		const i = e[o],
			s = wf(i) ? String(i).length : 1,
			l = r + s;
		if (l > t) {
			const c = t - r;
			return n.push(String(i).slice(0, c)), n;
		}
		n.push(i), (r = l);
	}
	return e;
}
const Kb = 0,
	go = 1,
	rc = 2,
	ia = 3,
	aa = 4,
	Xb = (e) => {
		let { enabledMeasure: t, children: r, text: n, width: o, fontSize: i, rows: a, onEllipsis: s } = e;
		const [[l, c, u], d] = f.useState([0, 0, 0]),
			[h, b] = f.useState(0),
			[m, v] = f.useState(Kb),
			[p, y] = f.useState(0),
			S = f.useRef(null),
			g = f.useRef(null),
			w = f.useMemo(() => Kr(n), [n]),
			E = f.useMemo(() => Ub(w), [w]),
			C = f.useMemo(
				() => (!t || m !== ia ? (h && m !== aa && t ? r(oa(w, h), h < E) : r(w, !1)) : r(oa(w, c), c < E)),
				[t, m, r, w, c, E],
			);
		je(() => {
			t && o && i && E && (v(go), d([0, Math.ceil(E / 2), E]));
		}, [t, o, i, n, E, a]),
			je(() => {
				var A;
				m === go && y(((A = S.current) === null || A === void 0 ? void 0 : A.offsetHeight) || 0);
			}, [m]),
			je(() => {
				var A, M;
				if (p) {
					if (m === go) {
						const _ = ((A = g.current) === null || A === void 0 ? void 0 : A.offsetHeight) || 0,
							F = a * p;
						_ <= F ? (v(aa), s(!1)) : v(rc);
					} else if (m === rc)
						if (l !== u) {
							const _ = ((M = g.current) === null || M === void 0 ? void 0 : M.offsetHeight) || 0,
								F = a * p;
							let k = l,
								D = u;
							l === u - 1 ? (D = l) : _ <= F ? (k = c) : (D = c);
							const R = Math.ceil((k + D) / 2);
							d([k, R, D]);
						} else v(ia), b(c), s(!0);
				}
			}, [m, l, u, a, p]);
		const x = { width: o, whiteSpace: "normal", margin: 0, padding: 0 },
			I = (A, M, _) =>
				f.createElement(
					"span",
					{
						"aria-hidden": !0,
						ref: M,
						style: Object.assign(
							{
								position: "fixed",
								display: "block",
								left: 0,
								top: 0,
								zIndex: -9999,
								visibility: "hidden",
								pointerEvents: "none",
								fontSize: Math.ceil(i / 2) * 2,
							},
							_,
						),
					},
					A,
				),
			T = (A, M) => {
				const _ = oa(w, A);
				return I(r(_, !0), M, x);
			};
		return f.createElement(
			f.Fragment,
			null,
			C,
			t &&
				m !== ia &&
				m !== aa &&
				f.createElement(
					f.Fragment,
					null,
					I("lg", S, { wordBreak: "keep-all", whiteSpace: "nowrap" }),
					m === go ? I(r(w, !1), g, x) : T(c, g),
				),
		);
	},
	Yb = (e) => {
		let { enabledEllipsis: t, isEllipsis: r, children: n, tooltipProps: o } = e;
		return !o?.title || !t ? n : f.createElement(Lo, Object.assign({ open: r ? void 0 : !1 }, o), n);
	};
var Zb = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
function Qb(e, t) {
	let { mark: r, code: n, underline: o, delete: i, strong: a, keyboard: s, italic: l } = e,
		c = t;
	function u(d, h) {
		h && (c = f.createElement(d, {}, c));
	}
	return u("strong", a), u("u", o), u("del", i), u("code", n), u("mark", r), u("kbd", s), u("i", l), c;
}
function mo(e, t, r) {
	return e === !0 || e === void 0 ? t : e || (r && t);
}
function nc(e) {
	return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
const Jb = "...",
	li = f.forwardRef((e, t) => {
		var r, n, o;
		const {
				prefixCls: i,
				className: a,
				style: s,
				type: l,
				disabled: c,
				children: u,
				ellipsis: d,
				editable: h,
				copyable: b,
				component: m,
				title: v,
			} = e,
			p = Zb(e, [
				"prefixCls",
				"className",
				"style",
				"type",
				"disabled",
				"children",
				"ellipsis",
				"editable",
				"copyable",
				"component",
				"title",
			]),
			{ getPrefixCls: y, direction: S } = f.useContext(ot),
			[g] = cv("Text"),
			w = f.useRef(null),
			E = f.useRef(null),
			C = y("typography", i),
			x = ss(p, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]),
			[I, T] = na(h),
			[A, M] = ii(!1, { value: T.editing }),
			{ triggerType: _ = ["icon"] } = T,
			F = (B) => {
				var G;
				B && ((G = T.onStart) === null || G === void 0 || G.call(T)), M(B);
			};
		qb(() => {
			var B;
			A || (B = E.current) === null || B === void 0 || B.focus();
		}, [A]);
		const k = (B) => {
				B?.preventDefault(), F(!0);
			},
			D = (B) => {
				var G;
				(G = T.onChange) === null || G === void 0 || G.call(T, B), F(!1);
			},
			R = () => {
				var B;
				(B = T.onCancel) === null || B === void 0 || B.call(T), F(!1);
			},
			[$, O] = na(b),
			[j, L] = f.useState(!1),
			N = f.useRef(null),
			H = {};
		O.format && (H.format = O.format);
		const q = () => {
				N.current && clearTimeout(N.current);
			},
			U = (B) => {
				var G;
				B?.preventDefault(),
					B?.stopPropagation(),
					Ib(O.text || String(u) || "", H),
					L(!0),
					q(),
					(N.current = setTimeout(() => {
						L(!1);
					}, 3e3)),
					(G = O.onCopy) === null || G === void 0 || G.call(O, B);
			};
		f.useEffect(() => q, []);
		const [ee, J] = f.useState(!1),
			[Q, se] = f.useState(!1),
			[de, me] = f.useState(!1),
			[xe, Ae] = f.useState(!1),
			[ke, we] = f.useState(!1),
			[Le, Oe] = f.useState(!0),
			[he, oe] = na(d, { expandable: !1 }),
			V = he && !de,
			{ rows: ne = 1 } = oe,
			Y = f.useMemo(() => !V || oe.suffix !== void 0 || oe.onEllipsis || oe.expandable || I || $, [V, oe, I, $]);
		je(() => {
			he && !Y && (J(Al("webkitLineClamp")), se(Al("textOverflow")));
		}, [Y, he]);
		const ie = f.useMemo(() => (Y ? !1 : ne === 1 ? Q : ee), [Y, Q, ee]),
			Re = V && (ie ? ke : xe),
			Ee = V && ne === 1 && ie,
			Z = V && ne > 1 && ie,
			ae = (B) => {
				var G;
				me(!0), (G = oe.onExpand) === null || G === void 0 || G.call(oe, B);
			},
			[We, jt] = f.useState(0),
			[Ze, Xe] = f.useState(0),
			Ge = (B, G) => {
				let { offsetWidth: ue } = B;
				var ye;
				jt(ue),
					Xe(
						parseInt(
							(ye = window.getComputedStyle) === null || ye === void 0 ? void 0 : ye.call(window, G).fontSize,
							10,
						) || 0,
					);
			},
			Rt = (B) => {
				var G;
				Ae(B), xe !== B && ((G = oe.onEllipsis) === null || G === void 0 || G.call(oe, B));
			};
		f.useEffect(() => {
			const B = w.current;
			if (he && ie && B) {
				const G = Z ? B.offsetHeight < B.scrollHeight : B.offsetWidth < B.scrollWidth;
				ke !== G && we(G);
			}
		}, [he, ie, u, Z, Le]),
			f.useEffect(() => {
				const B = w.current;
				if (typeof IntersectionObserver > "u" || !B || !ie || !V) return;
				const G = new IntersectionObserver(() => {
					Oe(!!B.offsetParent);
				});
				return (
					G.observe(B),
					() => {
						G.disconnect();
					}
				);
			}, [ie, V]);
		let qe = {};
		oe.tooltip === !0
			? (qe = { title: (r = T.text) !== null && r !== void 0 ? r : u })
			: f.isValidElement(oe.tooltip)
				? (qe = { title: oe.tooltip })
				: typeof oe.tooltip == "object"
					? (qe = Object.assign({ title: (n = T.text) !== null && n !== void 0 ? n : u }, oe.tooltip))
					: (qe = { title: oe.tooltip });
		const pt = f.useMemo(() => {
			const B = (G) => ["string", "number"].includes(typeof G);
			if (!(!he || ie)) {
				if (B(T.text)) return T.text;
				if (B(u)) return u;
				if (B(v)) return v;
				if (B(qe.title)) return qe.title;
			}
		}, [he, ie, v, qe.title, Re]);
		if (A)
			return f.createElement(Wb, {
				value: (o = T.text) !== null && o !== void 0 ? o : typeof u == "string" ? u : "",
				onSave: D,
				onCancel: R,
				onEnd: T.onEnd,
				prefixCls: C,
				className: a,
				style: s,
				direction: S,
				component: m,
				maxLength: T.maxLength,
				autoSize: T.autoSize,
				enterIcon: T.enterIcon,
			});
		const at = () => {
				const { expandable: B, symbol: G } = oe;
				if (!B) return null;
				let ue;
				return (
					G ? (ue = G) : (ue = g?.expand),
					f.createElement("a", { key: "expand", className: `${C}-expand`, onClick: ae, "aria-label": g?.expand }, ue)
				);
			},
			ze = () => {
				if (!I) return;
				const { icon: B, tooltip: G } = T,
					ue = Kr(G)[0] || g?.edit,
					ye = typeof ue == "string" ? ue : "";
				return _.includes("icon")
					? f.createElement(
							Lo,
							{ key: "edit", title: G === !1 ? "" : ue },
							f.createElement(
								ec,
								{ ref: E, className: `${C}-edit`, onClick: k, "aria-label": ye },
								B || f.createElement($b, { role: "button" }),
							),
						)
					: null;
			},
			bt = () => {
				if (!$) return;
				const { tooltips: B, icon: G } = O,
					ue = nc(B),
					ye = nc(G),
					ve = j ? mo(ue[1], g?.copied) : mo(ue[0], g?.copy),
					fe = j ? g?.copied : g?.copy,
					Qe = typeof ve == "string" ? ve : fe;
				return f.createElement(
					Lo,
					{ key: "copy", title: ve },
					f.createElement(
						ec,
						{ className: ce(`${C}-copy`, j && `${C}-copy-success`), onClick: U, "aria-label": Qe },
						j ? mo(ye[1], f.createElement(_0, null), !0) : mo(ye[0], f.createElement(xb, null), !0),
					),
				);
			},
			_e = (B) => [B && at(), ze(), bt()],
			rt = (B) => [B && f.createElement("span", { "aria-hidden": !0, key: "ellipsis" }, Jb), oe.suffix, _e(B)];
		return f.createElement(_n, { onResize: Ge, disabled: !V || ie }, (B) =>
			f.createElement(
				Yb,
				{ tooltipProps: qe, enabledEllipsis: V, isEllipsis: Re },
				f.createElement(
					Sf,
					Object.assign(
						{
							className: ce(
								{
									[`${C}-${l}`]: l,
									[`${C}-disabled`]: c,
									[`${C}-ellipsis`]: he,
									[`${C}-single-line`]: V && ne === 1,
									[`${C}-ellipsis-single-line`]: Ee,
									[`${C}-ellipsis-multiple-line`]: Z,
								},
								a,
							),
							prefixCls: i,
							style: Object.assign(Object.assign({}, s), { WebkitLineClamp: Z ? ne : void 0 }),
							component: m,
							ref: en(B, w, t),
							direction: S,
							onClick: _.includes("text") ? k : void 0,
							"aria-label": pt?.toString(),
							title: v,
						},
						x,
					),
					f.createElement(
						Xb,
						{ enabledMeasure: V && !ie, text: u, rows: ne, width: We, fontSize: Ze, onEllipsis: Rt },
						(G, ue) => {
							let ye = G;
							return (
								G.length && ue && pt && (ye = f.createElement("span", { key: "show-content", "aria-hidden": !0 }, ye)),
								Qb(e, f.createElement(f.Fragment, null, ye, rt(ue)))
							);
						},
					),
				),
			),
		);
	});
var ey = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const ty = f.forwardRef((e, t) => {
		var { ellipsis: r, rel: n } = e,
			o = ey(e, ["ellipsis", "rel"]);
		const i = Object.assign(Object.assign({}, o), {
			rel: n === void 0 && o.target === "_blank" ? "noopener noreferrer" : n,
		});
		return delete i.navigate, f.createElement(li, Object.assign({}, i, { ref: t, ellipsis: !!r, component: "a" }));
	}),
	ry = f.forwardRef((e, t) => f.createElement(li, Object.assign({ ref: t }, e, { component: "div" })));
var ny = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const oy = (e, t) => {
		var { ellipsis: r } = e,
			n = ny(e, ["ellipsis"]);
		const o = f.useMemo(() => (r && typeof r == "object" ? ss(r, ["expandable", "rows"]) : r), [r]);
		return f.createElement(li, Object.assign({ ref: t }, n, { ellipsis: o, component: "span" }));
	},
	iy = f.forwardRef(oy);
var ay = function (e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	return r;
};
const sy = [1, 2, 3, 4, 5],
	ly = f.forwardRef((e, t) => {
		const { level: r = 1 } = e,
			n = ay(e, ["level"]);
		let o;
		return (
			sy.includes(r) ? (o = `h${r}`) : (o = "h1"), f.createElement(li, Object.assign({ ref: t }, n, { component: o }))
		);
	}),
	ci = Sf;
ci.Text = iy;
ci.Link = ty;
ci.Title = ly;
ci.Paragraph = ry;
var cy = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z",
					},
				},
			],
		},
		name: "environment",
		theme: "outlined",
	},
	uy = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: cy }));
	};
const xy = f.forwardRef(uy);
var fy = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z",
					},
				},
			],
		},
		name: "global",
		theme: "outlined",
	},
	dy = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: fy }));
	};
const Cy = f.forwardRef(dy);
var hy = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z",
					},
				},
			],
		},
		name: "mail",
		theme: "outlined",
	},
	vy = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: hy }));
	};
const Ey = f.forwardRef(vy);
var gy = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z",
					},
				},
			],
		},
		name: "phone",
		theme: "outlined",
	},
	my = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: gy }));
	};
const $y = f.forwardRef(my);
var py = {
		icon: {
			tag: "svg",
			attrs: { viewBox: "64 64 896 896", focusable: "false" },
			children: [
				{
					tag: "path",
					attrs: {
						d: "M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z",
					},
				},
			],
		},
		name: "printer",
		theme: "outlined",
	},
	by = function (t, r) {
		return f.createElement(it, Te({}, t, { ref: r, icon: py }));
	};
const Oy = f.forwardRef(by);
export { Qu as B, xy as E, Cy as G, Ey as M, $y as P, ci as T, zt as _, Lt as a, Oy as b, Sy as d, Cd as u };
