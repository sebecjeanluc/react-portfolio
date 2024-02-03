function dm(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n]
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const i in r)
				if (i !== 'default' && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i)
					o &&
						Object.defineProperty(
							e,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
						)
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	)
}
;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === 'childList')
				for (const s of o.addedNodes)
					s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(i) {
		const o = {}
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: i.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		)
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const o = n(i)
		fetch(i.href, o)
	}
})()
function pm(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e
}
var $f = { exports: {} },
	Ko = {},
	Mf = { exports: {} },
	M = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mi = Symbol.for('react.element'),
	hm = Symbol.for('react.portal'),
	mm = Symbol.for('react.fragment'),
	gm = Symbol.for('react.strict_mode'),
	vm = Symbol.for('react.profiler'),
	_m = Symbol.for('react.provider'),
	ym = Symbol.for('react.context'),
	Em = Symbol.for('react.forward_ref'),
	wm = Symbol.for('react.suspense'),
	Sm = Symbol.for('react.memo'),
	Cm = Symbol.for('react.lazy'),
	Mu = Symbol.iterator
function Tm(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Mu && e[Mu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null)
}
var jf = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	bf = Object.assign,
	zf = {}
function gr(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = zf),
		(this.updater = n || jf)
}
gr.prototype.isReactComponent = {}
gr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		)
	this.updater.enqueueSetState(this, e, t, 'setState')
}
gr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Ff() {}
Ff.prototype = gr.prototype
function ha(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = zf),
		(this.updater = n || jf)
}
var ma = (ha.prototype = new Ff())
ma.constructor = ha
bf(ma, gr.prototype)
ma.isPureReactComponent = !0
var ju = Array.isArray,
	Vf = Object.prototype.hasOwnProperty,
	ga = { current: null },
	Uf = { key: !0, ref: !0, __self: !0, __source: !0 }
function Wf(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (o = '' + t.key),
		t))
			Vf.call(t, r) && !Uf.hasOwnProperty(r) && (i[r] = t[r])
	var l = arguments.length - 2
	if (l === 1) i.children = n
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
		i.children = a
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
	return { $$typeof: mi, type: e, key: o, ref: s, props: i, _owner: ga.current }
}
function km(e, t) {
	return {
		$$typeof: mi,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	}
}
function va(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === mi
}
function Nm(e) {
	var t = { '=': '=0', ':': '=2' }
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n]
		})
	)
}
var bu = /\/+/g
function Ss(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Nm('' + e.key)
		: t.toString(36)
}
function Ji(e, t, n, r, i) {
	var o = typeof e
	;(o === 'undefined' || o === 'boolean') && (e = null)
	var s = !1
	if (e === null) s = !0
	else
		switch (o) {
			case 'string':
			case 'number':
				s = !0
				break
			case 'object':
				switch (e.$$typeof) {
					case mi:
					case hm:
						s = !0
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === '' ? '.' + Ss(s, 0) : r),
			ju(i)
				? ((n = ''),
				  e != null && (n = e.replace(bu, '$&/') + '/'),
				  Ji(i, t, n, '', function (u) {
						return u
				  }))
				: i != null &&
				  (va(i) &&
						(i = km(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ''
									: ('' + i.key).replace(bu, '$&/') + '/') +
								e
						)),
				  t.push(i)),
			1
		)
	if (((s = 0), (r = r === '' ? '.' : r + ':'), ju(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l]
			var a = r + Ss(o, l)
			s += Ji(o, t, n, a, i)
		}
	else if (((a = Tm(e)), typeof a == 'function'))
		for (e = a.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value), (a = r + Ss(o, l++)), (s += Ji(o, t, n, a, i))
	else if (o === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		)
	return s
}
function Ai(e, t, n) {
	if (e == null) return e
	var r = [],
		i = 0
	return (
		Ji(e, r, '', '', function (o) {
			return t.call(n, o, i++)
		}),
		r
	)
}
function xm(e) {
	if (e._status === -1) {
		var t = e._result
		;(t = t()),
			t.then(
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n))
				},
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n))
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t))
	}
	if (e._status === 1) return e._result.default
	throw e._result
}
var _e = { current: null },
	Zi = { transition: null },
	Am = {
		ReactCurrentDispatcher: _e,
		ReactCurrentBatchConfig: Zi,
		ReactCurrentOwner: ga,
	}
M.Children = {
	map: Ai,
	forEach: function (e, t, n) {
		Ai(
			e,
			function () {
				t.apply(this, arguments)
			},
			n
		)
	},
	count: function (e) {
		var t = 0
		return (
			Ai(e, function () {
				t++
			}),
			t
		)
	},
	toArray: function (e) {
		return (
			Ai(e, function (t) {
				return t
			}) || []
		)
	},
	only: function (e) {
		if (!va(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			)
		return e
	},
}
M.Component = gr
M.Fragment = mm
M.Profiler = vm
M.PureComponent = ha
M.StrictMode = gm
M.Suspense = wm
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Am
M.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		)
	var r = bf({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = ga.current)),
			t.key !== void 0 && (i = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps
		for (a in t)
			Vf.call(t, a) &&
				!Uf.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
	}
	var a = arguments.length - 2
	if (a === 1) r.children = n
	else if (1 < a) {
		l = Array(a)
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
		r.children = l
	}
	return { $$typeof: mi, type: e.type, key: i, ref: o, props: r, _owner: s }
}
M.createContext = function (e) {
	return (
		(e = {
			$$typeof: ym,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: _m, _context: e }),
		(e.Consumer = e)
	)
}
M.createElement = Wf
M.createFactory = function (e) {
	var t = Wf.bind(null, e)
	return (t.type = e), t
}
M.createRef = function () {
	return { current: null }
}
M.forwardRef = function (e) {
	return { $$typeof: Em, render: e }
}
M.isValidElement = va
M.lazy = function (e) {
	return { $$typeof: Cm, _payload: { _status: -1, _result: e }, _init: xm }
}
M.memo = function (e, t) {
	return { $$typeof: Sm, type: e, compare: t === void 0 ? null : t }
}
M.startTransition = function (e) {
	var t = Zi.transition
	Zi.transition = {}
	try {
		e()
	} finally {
		Zi.transition = t
	}
}
M.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.')
}
M.useCallback = function (e, t) {
	return _e.current.useCallback(e, t)
}
M.useContext = function (e) {
	return _e.current.useContext(e)
}
M.useDebugValue = function () {}
M.useDeferredValue = function (e) {
	return _e.current.useDeferredValue(e)
}
M.useEffect = function (e, t) {
	return _e.current.useEffect(e, t)
}
M.useId = function () {
	return _e.current.useId()
}
M.useImperativeHandle = function (e, t, n) {
	return _e.current.useImperativeHandle(e, t, n)
}
M.useInsertionEffect = function (e, t) {
	return _e.current.useInsertionEffect(e, t)
}
M.useLayoutEffect = function (e, t) {
	return _e.current.useLayoutEffect(e, t)
}
M.useMemo = function (e, t) {
	return _e.current.useMemo(e, t)
}
M.useReducer = function (e, t, n) {
	return _e.current.useReducer(e, t, n)
}
M.useRef = function (e) {
	return _e.current.useRef(e)
}
M.useState = function (e) {
	return _e.current.useState(e)
}
M.useSyncExternalStore = function (e, t, n) {
	return _e.current.useSyncExternalStore(e, t, n)
}
M.useTransition = function () {
	return _e.current.useTransition()
}
M.version = '18.2.0'
Mf.exports = M
var A = Mf.exports
const Bf = pm(A),
	Om = dm({ __proto__: null, default: Bf }, [A])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lm = A,
	Pm = Symbol.for('react.element'),
	Dm = Symbol.for('react.fragment'),
	Im = Object.prototype.hasOwnProperty,
	Rm = Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	$m = { key: !0, ref: !0, __self: !0, __source: !0 }
function Hf(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null
	n !== void 0 && (o = '' + n),
		t.key !== void 0 && (o = '' + t.key),
		t.ref !== void 0 && (s = t.ref)
	for (r in t) Im.call(t, r) && !$m.hasOwnProperty(r) && (i[r] = t[r])
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
	return { $$typeof: Pm, type: e, key: o, ref: s, props: i, _owner: Rm.current }
}
Ko.Fragment = Dm
Ko.jsx = Hf
Ko.jsxs = Hf
$f.exports = Ko
var E = $f.exports,
	cl = {},
	Kf = { exports: {} },
	$e = {},
	Yf = { exports: {} },
	Qf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
	function t(O, I) {
		var R = O.length
		O.push(I)
		e: for (; 0 < R; ) {
			var V = (R - 1) >>> 1,
				B = O[V]
			if (0 < i(B, I)) (O[V] = I), (O[R] = B), (R = V)
			else break e
		}
	}
	function n(O) {
		return O.length === 0 ? null : O[0]
	}
	function r(O) {
		if (O.length === 0) return null
		var I = O[0],
			R = O.pop()
		if (R !== I) {
			O[0] = R
			e: for (var V = 0, B = O.length, dt = B >>> 1; V < dt; ) {
				var Ee = 2 * (V + 1) - 1,
					je = O[Ee],
					xe = Ee + 1,
					pt = O[xe]
				if (0 > i(je, R))
					xe < B && 0 > i(pt, je)
						? ((O[V] = pt), (O[xe] = R), (V = xe))
						: ((O[V] = je), (O[Ee] = R), (V = Ee))
				else if (xe < B && 0 > i(pt, R)) (O[V] = pt), (O[xe] = R), (V = xe)
				else break e
			}
		}
		return I
	}
	function i(O, I) {
		var R = O.sortIndex - I.sortIndex
		return R !== 0 ? R : O.id - I.id
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance
		e.unstable_now = function () {
			return o.now()
		}
	} else {
		var s = Date,
			l = s.now()
		e.unstable_now = function () {
			return s.now() - l
		}
	}
	var a = [],
		u = [],
		c = 1,
		p = null,
		m = 3,
		v = !1,
		y = !1,
		_ = !1,
		w = typeof setTimeout == 'function' ? setTimeout : null,
		d = typeof clearTimeout == 'function' ? clearTimeout : null,
		f = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function h(O) {
		for (var I = n(u); I !== null; ) {
			if (I.callback === null) r(u)
			else if (I.startTime <= O) r(u), (I.sortIndex = I.expirationTime), t(a, I)
			else break
			I = n(u)
		}
	}
	function g(O) {
		if (((_ = !1), h(O), !y))
			if (n(a) !== null) (y = !0), oe(S)
			else {
				var I = n(u)
				I !== null && pe(g, I.startTime - O)
			}
	}
	function S(O, I) {
		;(y = !1), _ && ((_ = !1), d(x), (x = -1)), (v = !0)
		var R = m
		try {
			for (
				h(I), p = n(a);
				p !== null && (!(p.expirationTime > I) || (O && !b()));

			) {
				var V = p.callback
				if (typeof V == 'function') {
					;(p.callback = null), (m = p.priorityLevel)
					var B = V(p.expirationTime <= I)
					;(I = e.unstable_now()),
						typeof B == 'function' ? (p.callback = B) : p === n(a) && r(a),
						h(I)
				} else r(a)
				p = n(a)
			}
			if (p !== null) var dt = !0
			else {
				var Ee = n(u)
				Ee !== null && pe(g, Ee.startTime - I), (dt = !1)
			}
			return dt
		} finally {
			;(p = null), (m = R), (v = !1)
		}
	}
	var k = !1,
		N = null,
		x = -1,
		$ = 5,
		P = -1
	function b() {
		return !(e.unstable_now() - P < $)
	}
	function ie() {
		if (N !== null) {
			var O = e.unstable_now()
			P = O
			var I = !0
			try {
				I = N(!0, O)
			} finally {
				I ? q() : ((k = !1), (N = null))
			}
		} else k = !1
	}
	var q
	if (typeof f == 'function')
		q = function () {
			f(ie)
		}
	else if (typeof MessageChannel < 'u') {
		var nt = new MessageChannel(),
			ft = nt.port2
		;(nt.port1.onmessage = ie),
			(q = function () {
				ft.postMessage(null)
			})
	} else
		q = function () {
			w(ie, 0)
		}
	function oe(O) {
		;(N = O), k || ((k = !0), q())
	}
	function pe(O, I) {
		x = w(function () {
			O(e.unstable_now())
		}, I)
	}
	;(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (O) {
			O.callback = null
		}),
		(e.unstable_continueExecution = function () {
			y || v || ((y = !0), oe(S))
		}),
		(e.unstable_forceFrameRate = function (O) {
			0 > O || 125 < O
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: ($ = 0 < O ? Math.floor(1e3 / O) : 5)
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a)
		}),
		(e.unstable_next = function (O) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var I = 3
					break
				default:
					I = m
			}
			var R = m
			m = I
			try {
				return O()
			} finally {
				m = R
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (O, I) {
			switch (O) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					O = 3
			}
			var R = m
			m = O
			try {
				return I()
			} finally {
				m = R
			}
		}),
		(e.unstable_scheduleCallback = function (O, I, R) {
			var V = e.unstable_now()
			switch (
				(typeof R == 'object' && R !== null
					? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? V + R : V))
					: (R = V),
				O)
			) {
				case 1:
					var B = -1
					break
				case 2:
					B = 250
					break
				case 5:
					B = 1073741823
					break
				case 4:
					B = 1e4
					break
				default:
					B = 5e3
			}
			return (
				(B = R + B),
				(O = {
					id: c++,
					callback: I,
					priorityLevel: O,
					startTime: R,
					expirationTime: B,
					sortIndex: -1,
				}),
				R > V
					? ((O.sortIndex = R),
					  t(u, O),
					  n(a) === null &&
							O === n(u) &&
							(_ ? (d(x), (x = -1)) : (_ = !0), pe(g, R - V)))
					: ((O.sortIndex = B), t(a, O), y || v || ((y = !0), oe(S))),
				O
			)
		}),
		(e.unstable_shouldYield = b),
		(e.unstable_wrapCallback = function (O) {
			var I = m
			return function () {
				var R = m
				m = I
				try {
					return O.apply(this, arguments)
				} finally {
					m = R
				}
			}
		})
})(Qf)
Yf.exports = Qf
var Mm = Yf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gf = A,
	Pe = Mm
function T(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var Xf = new Set(),
	Gr = {}
function kn(e, t) {
	tr(e, t), tr(e + 'Capture', t)
}
function tr(e, t) {
	for (Gr[e] = t, e = 0; e < t.length; e++) Xf.add(t[e])
}
var wt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	fl = Object.prototype.hasOwnProperty,
	jm =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	zu = {},
	Fu = {}
function bm(e) {
	return fl.call(Fu, e)
		? !0
		: fl.call(zu, e)
		? !1
		: jm.test(e)
		? (Fu[e] = !0)
		: ((zu[e] = !0), !1)
}
function zm(e, t, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
		default:
			return !1
	}
}
function Fm(e, t, n, r) {
	if (t === null || typeof t > 'u' || zm(e, t, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t
			case 4:
				return t === !1
			case 5:
				return isNaN(t)
			case 6:
				return isNaN(t) || 1 > t
		}
	return !1
}
function ye(e, t, n, r, i, o, s) {
	;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s)
}
var ae = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		ae[e] = new ye(e, 0, !1, e, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0]
	ae[t] = new ye(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	ae[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	ae[e] = new ye(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		ae[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	ae[e] = new ye(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
	ae[e] = new ye(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
	ae[e] = new ye(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
	ae[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var _a = /[\-:]([a-z])/g
function ya(e) {
	return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(_a, ya)
		ae[t] = new ye(t, 1, !1, e, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(_a, ya)
		ae[t] = new ye(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
	})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(_a, ya)
	ae[t] = new ye(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
	ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ae.xlinkHref = new ye(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
	ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ea(e, t, n, r) {
	var i = ae.hasOwnProperty(t) ? ae[t] : null
	;(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Fm(t, n, i, r) && (n = null),
		r || i === null
			? bm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Nt = Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Oi = Symbol.for('react.element'),
	Mn = Symbol.for('react.portal'),
	jn = Symbol.for('react.fragment'),
	wa = Symbol.for('react.strict_mode'),
	dl = Symbol.for('react.profiler'),
	qf = Symbol.for('react.provider'),
	Jf = Symbol.for('react.context'),
	Sa = Symbol.for('react.forward_ref'),
	pl = Symbol.for('react.suspense'),
	hl = Symbol.for('react.suspense_list'),
	Ca = Symbol.for('react.memo'),
	Lt = Symbol.for('react.lazy'),
	Zf = Symbol.for('react.offscreen'),
	Vu = Symbol.iterator
function Tr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Vu && e[Vu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null)
}
var Q = Object.assign,
	Cs
function Rr(e) {
	if (Cs === void 0)
		try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/)
			Cs = (t && t[1]) || ''
		}
	return (
		`
` +
		Cs +
		e
	)
}
var Ts = !1
function ks(e, t) {
	if (!e || Ts) return ''
	Ts = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (t)
			if (
				((t = function () {
					throw Error()
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error()
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					l = o.length - 1;
				1 <= s && 0 <= l && i[s] !== o[l];

			)
				l--
			for (; 1 <= s && 0 <= l; s--, l--)
				if (i[s] !== o[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || i[s] !== o[l])) {
								var a =
									`
` + i[s].replace(' at new ', ' at ')
								return (
									e.displayName &&
										a.includes('<anonymous>') &&
										(a = a.replace('<anonymous>', e.displayName)),
									a
								)
							}
						while (1 <= s && 0 <= l)
					break
				}
		}
	} finally {
		;(Ts = !1), (Error.prepareStackTrace = n)
	}
	return (e = e ? e.displayName || e.name : '') ? Rr(e) : ''
}
function Vm(e) {
	switch (e.tag) {
		case 5:
			return Rr(e.type)
		case 16:
			return Rr('Lazy')
		case 13:
			return Rr('Suspense')
		case 19:
			return Rr('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (e = ks(e.type, !1)), e
		case 11:
			return (e = ks(e.type.render, !1)), e
		case 1:
			return (e = ks(e.type, !0)), e
		default:
			return ''
	}
}
function ml(e) {
	if (e == null) return null
	if (typeof e == 'function') return e.displayName || e.name || null
	if (typeof e == 'string') return e
	switch (e) {
		case jn:
			return 'Fragment'
		case Mn:
			return 'Portal'
		case dl:
			return 'Profiler'
		case wa:
			return 'StrictMode'
		case pl:
			return 'Suspense'
		case hl:
			return 'SuspenseList'
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Jf:
				return (e.displayName || 'Context') + '.Consumer'
			case qf:
				return (e._context.displayName || 'Context') + '.Provider'
			case Sa:
				var t = e.render
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				)
			case Ca:
				return (
					(t = e.displayName || null), t !== null ? t : ml(e.type) || 'Memo'
				)
			case Lt:
				;(t = e._payload), (e = e._init)
				try {
					return ml(e(t))
				} catch {}
		}
	return null
}
function Um(e) {
	var t = e.type
	switch (e.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (t.displayName || 'Context') + '.Consumer'
		case 10:
			return (t._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return t
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return ml(t)
		case 8:
			return t === wa ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null
			if (typeof t == 'string') return t
	}
	return null
}
function Kt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e
		case 'object':
			return e
		default:
			return ''
	}
}
function ed(e) {
	var t = e.type
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	)
}
function Wm(e) {
	var t = ed(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t]
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			o = n.set
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this)
				},
				set: function (s) {
					;(r = '' + s), o.call(this, s)
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (s) {
					r = '' + s
				},
				stopTracking: function () {
					;(e._valueTracker = null), delete e[t]
				},
			}
		)
	}
}
function Li(e) {
	e._valueTracker || (e._valueTracker = Wm(e))
}
function td(e) {
	if (!e) return !1
	var t = e._valueTracker
	if (!t) return !0
	var n = t.getValue(),
		r = ''
	return (
		e && (r = ed(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	)
}
function mo(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}
function gl(e, t) {
	var n = t.checked
	return Q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	})
}
function Uu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked
	;(n = Kt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		})
}
function nd(e, t) {
	;(t = t.checked), t != null && Ea(e, 'checked', t, !1)
}
function vl(e, t) {
	nd(e, t)
	var n = Kt(t.value),
		r = t.type
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value')
		return
	}
	t.hasOwnProperty('value')
		? _l(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && _l(e, t.type, Kt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked)
}
function Wu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return
		;(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t)
	}
	;(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n)
}
function _l(e, t, n) {
	;(t !== 'number' || mo(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var $r = Array.isArray
function Gn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {}
		for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = '' + Kt(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}
function yl(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91))
	return Q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	})
}
function Bu(e, t) {
	var n = t.value
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(T(92))
			if ($r(n)) {
				if (1 < n.length) throw Error(T(93))
				n = n[0]
			}
			t = n
		}
		t == null && (t = ''), (n = t)
	}
	e._wrapperState = { initialValue: Kt(n) }
}
function rd(e, t) {
	var n = Kt(t.value),
		r = Kt(t.defaultValue)
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r)
}
function Hu(e) {
	var t = e.textContent
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function id(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function El(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? id(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e
}
var Pi,
	od = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i)
					})
			  }
			: e
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t
		else {
			for (
				Pi = Pi || document.createElement('div'),
					Pi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Pi.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild)
			for (; t.firstChild; ) e.appendChild(t.firstChild)
		}
	})
function Xr(e, t) {
	if (t) {
		var n = e.firstChild
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t
			return
		}
	}
	e.textContent = t
}
var br = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Bm = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(br).forEach(function (e) {
	Bm.forEach(function (t) {
		;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (br[t] = br[e])
	})
})
function sd(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (br.hasOwnProperty(e) && br[e])
		? ('' + t).trim()
		: t + 'px'
}
function ld(e, t) {
	e = e.style
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = sd(n, t[n], r)
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
		}
}
var Hm = Q(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
)
function wl(e, t) {
	if (t) {
		if (Hm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(T(137, e))
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(T(60))
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(T(61))
		}
		if (t.style != null && typeof t.style != 'object') throw Error(T(62))
	}
}
function Sl(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string'
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var Cl = null
function Ta(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	)
}
var Tl = null,
	Xn = null,
	qn = null
function Ku(e) {
	if ((e = _i(e))) {
		if (typeof Tl != 'function') throw Error(T(280))
		var t = e.stateNode
		t && ((t = qo(t)), Tl(e.stateNode, e.type, t))
	}
}
function ad(e) {
	Xn ? (qn ? qn.push(e) : (qn = [e])) : (Xn = e)
}
function ud() {
	if (Xn) {
		var e = Xn,
			t = qn
		if (((qn = Xn = null), Ku(e), t)) for (e = 0; e < t.length; e++) Ku(t[e])
	}
}
function cd(e, t) {
	return e(t)
}
function fd() {}
var Ns = !1
function dd(e, t, n) {
	if (Ns) return e(t, n)
	Ns = !0
	try {
		return cd(e, t, n)
	} finally {
		;(Ns = !1), (Xn !== null || qn !== null) && (fd(), ud())
	}
}
function qr(e, t) {
	var n = e.stateNode
	if (n === null) return null
	var r = qo(n)
	if (r === null) return null
	n = r[t]
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r)
			break e
		default:
			e = !1
	}
	if (e) return null
	if (n && typeof n != 'function') throw Error(T(231, t, typeof n))
	return n
}
var kl = !1
if (wt)
	try {
		var kr = {}
		Object.defineProperty(kr, 'passive', {
			get: function () {
				kl = !0
			},
		}),
			window.addEventListener('test', kr, kr),
			window.removeEventListener('test', kr, kr)
	} catch {
		kl = !1
	}
function Km(e, t, n, r, i, o, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3)
	try {
		t.apply(n, u)
	} catch (c) {
		this.onError(c)
	}
}
var zr = !1,
	go = null,
	vo = !1,
	Nl = null,
	Ym = {
		onError: function (e) {
			;(zr = !0), (go = e)
		},
	}
function Qm(e, t, n, r, i, o, s, l, a) {
	;(zr = !1), (go = null), Km.apply(Ym, arguments)
}
function Gm(e, t, n, r, i, o, s, l, a) {
	if ((Qm.apply(this, arguments), zr)) {
		if (zr) {
			var u = go
			;(zr = !1), (go = null)
		} else throw Error(T(198))
		vo || ((vo = !0), (Nl = u))
	}
}
function Nn(e) {
	var t = e,
		n = e
	if (e.alternate) for (; t.return; ) t = t.return
	else {
		e = t
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
		while (e)
	}
	return t.tag === 3 ? n : null
}
function pd(e) {
	if (e.tag === 13) {
		var t = e.memoizedState
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated
	}
	return null
}
function Yu(e) {
	if (Nn(e) !== e) throw Error(T(188))
}
function Xm(e) {
	var t = e.alternate
	if (!t) {
		if (((t = Nn(e)), t === null)) throw Error(T(188))
		return t !== e ? null : e
	}
	for (var n = e, r = t; ; ) {
		var i = n.return
		if (i === null) break
		var o = i.alternate
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Yu(i), e
				if (o === r) return Yu(i), t
				o = o.sibling
			}
			throw Error(T(188))
		}
		if (n.return !== r.return) (n = i), (r = o)
		else {
			for (var s = !1, l = i.child; l; ) {
				if (l === n) {
					;(s = !0), (n = i), (r = o)
					break
				}
				if (l === r) {
					;(s = !0), (r = i), (n = o)
					break
				}
				l = l.sibling
			}
			if (!s) {
				for (l = o.child; l; ) {
					if (l === n) {
						;(s = !0), (n = o), (r = i)
						break
					}
					if (l === r) {
						;(s = !0), (r = o), (n = i)
						break
					}
					l = l.sibling
				}
				if (!s) throw Error(T(189))
			}
		}
		if (n.alternate !== r) throw Error(T(190))
	}
	if (n.tag !== 3) throw Error(T(188))
	return n.stateNode.current === n ? e : t
}
function hd(e) {
	return (e = Xm(e)), e !== null ? md(e) : null
}
function md(e) {
	if (e.tag === 5 || e.tag === 6) return e
	for (e = e.child; e !== null; ) {
		var t = md(e)
		if (t !== null) return t
		e = e.sibling
	}
	return null
}
var gd = Pe.unstable_scheduleCallback,
	Qu = Pe.unstable_cancelCallback,
	qm = Pe.unstable_shouldYield,
	Jm = Pe.unstable_requestPaint,
	J = Pe.unstable_now,
	Zm = Pe.unstable_getCurrentPriorityLevel,
	ka = Pe.unstable_ImmediatePriority,
	vd = Pe.unstable_UserBlockingPriority,
	_o = Pe.unstable_NormalPriority,
	eg = Pe.unstable_LowPriority,
	_d = Pe.unstable_IdlePriority,
	Yo = null,
	st = null
function tg(e) {
	if (st && typeof st.onCommitFiberRoot == 'function')
		try {
			st.onCommitFiberRoot(Yo, e, void 0, (e.current.flags & 128) === 128)
		} catch {}
}
var Je = Math.clz32 ? Math.clz32 : ig,
	ng = Math.log,
	rg = Math.LN2
function ig(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((ng(e) / rg) | 0)) | 0
}
var Di = 64,
	Ii = 4194304
function Mr(e) {
	switch (e & -e) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return e
	}
}
function yo(e, t) {
	var n = e.pendingLanes
	if (n === 0) return 0
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455
	if (s !== 0) {
		var l = s & ~i
		l !== 0 ? (r = Mr(l)) : ((o &= s), o !== 0 && (r = Mr(o)))
	} else (s = n & ~i), s !== 0 ? (r = Mr(s)) : o !== 0 && (r = Mr(o))
	if (r === 0) return 0
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Je(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
	return r
}
function og(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function sg(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - Je(o),
			l = 1 << s,
			a = i[s]
		a === -1
			? (!(l & n) || l & r) && (i[s] = og(l, t))
			: a <= t && (e.expiredLanes |= l),
			(o &= ~l)
	}
}
function xl(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	)
}
function yd() {
	var e = Di
	return (Di <<= 1), !(Di & 4194240) && (Di = 64), e
}
function xs(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e)
	return t
}
function gi(e, t, n) {
	;(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Je(t)),
		(e[t] = n)
}
function lg(e, t) {
	var n = e.pendingLanes & ~t
	;(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements)
	var r = e.eventTimes
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Je(n),
			o = 1 << i
		;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
	}
}
function Na(e, t) {
	var n = (e.entangledLanes |= t)
	for (e = e.entanglements; n; ) {
		var r = 31 - Je(n),
			i = 1 << r
		;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
	}
}
var z = 0
function Ed(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var wd,
	xa,
	Sd,
	Cd,
	Td,
	Al = !1,
	Ri = [],
	jt = null,
	bt = null,
	zt = null,
	Jr = new Map(),
	Zr = new Map(),
	Dt = [],
	ag =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		)
function Gu(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			jt = null
			break
		case 'dragenter':
		case 'dragleave':
			bt = null
			break
		case 'mouseover':
		case 'mouseout':
			zt = null
			break
		case 'pointerover':
		case 'pointerout':
			Jr.delete(t.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			Zr.delete(t.pointerId)
	}
}
function Nr(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = _i(t)), t !== null && xa(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e)
}
function ug(e, t, n, r, i) {
	switch (t) {
		case 'focusin':
			return (jt = Nr(jt, e, t, n, r, i)), !0
		case 'dragenter':
			return (bt = Nr(bt, e, t, n, r, i)), !0
		case 'mouseover':
			return (zt = Nr(zt, e, t, n, r, i)), !0
		case 'pointerover':
			var o = i.pointerId
			return Jr.set(o, Nr(Jr.get(o) || null, e, t, n, r, i)), !0
		case 'gotpointercapture':
			return (
				(o = i.pointerId), Zr.set(o, Nr(Zr.get(o) || null, e, t, n, r, i)), !0
			)
	}
	return !1
}
function kd(e) {
	var t = un(e.target)
	if (t !== null) {
		var n = Nn(t)
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = pd(n)), t !== null)) {
					;(e.blockedOn = t),
						Td(e.priority, function () {
							Sd(n)
						})
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	e.blockedOn = null
}
function eo(e) {
	if (e.blockedOn !== null) return !1
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
		if (n === null) {
			n = e.nativeEvent
			var r = new n.constructor(n.type, n)
			;(Cl = r), n.target.dispatchEvent(r), (Cl = null)
		} else return (t = _i(n)), t !== null && xa(t), (e.blockedOn = n), !1
		t.shift()
	}
	return !0
}
function Xu(e, t, n) {
	eo(e) && n.delete(t)
}
function cg() {
	;(Al = !1),
		jt !== null && eo(jt) && (jt = null),
		bt !== null && eo(bt) && (bt = null),
		zt !== null && eo(zt) && (zt = null),
		Jr.forEach(Xu),
		Zr.forEach(Xu)
}
function xr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Al ||
			((Al = !0), Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, cg)))
}
function ei(e) {
	function t(i) {
		return xr(i, e)
	}
	if (0 < Ri.length) {
		xr(Ri[0], e)
		for (var n = 1; n < Ri.length; n++) {
			var r = Ri[n]
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (
		jt !== null && xr(jt, e),
			bt !== null && xr(bt, e),
			zt !== null && xr(zt, e),
			Jr.forEach(t),
			Zr.forEach(t),
			n = 0;
		n < Dt.length;
		n++
	)
		(r = Dt[n]), r.blockedOn === e && (r.blockedOn = null)
	for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
		kd(n), n.blockedOn === null && Dt.shift()
}
var Jn = Nt.ReactCurrentBatchConfig,
	Eo = !0
function fg(e, t, n, r) {
	var i = z,
		o = Jn.transition
	Jn.transition = null
	try {
		;(z = 1), Aa(e, t, n, r)
	} finally {
		;(z = i), (Jn.transition = o)
	}
}
function dg(e, t, n, r) {
	var i = z,
		o = Jn.transition
	Jn.transition = null
	try {
		;(z = 4), Aa(e, t, n, r)
	} finally {
		;(z = i), (Jn.transition = o)
	}
}
function Aa(e, t, n, r) {
	if (Eo) {
		var i = Ol(e, t, n, r)
		if (i === null) js(e, t, r, wo, n), Gu(e, r)
		else if (ug(i, e, t, n, r)) r.stopPropagation()
		else if ((Gu(e, r), t & 4 && -1 < ag.indexOf(e))) {
			for (; i !== null; ) {
				var o = _i(i)
				if (
					(o !== null && wd(o),
					(o = Ol(e, t, n, r)),
					o === null && js(e, t, r, wo, n),
					o === i)
				)
					break
				i = o
			}
			i !== null && r.stopPropagation()
		} else js(e, t, r, null, n)
	}
}
var wo = null
function Ol(e, t, n, r) {
	if (((wo = null), (e = Ta(r)), (e = un(e)), e !== null))
		if (((t = Nn(e)), t === null)) e = null
		else if (((n = t.tag), n === 13)) {
			if (((e = pd(t)), e !== null)) return e
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null
			e = null
		} else t !== e && (e = null)
	return (wo = e), null
}
function Nd(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (Zm()) {
				case ka:
					return 1
				case vd:
					return 4
				case _o:
				case eg:
					return 16
				case _d:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var Rt = null,
	Oa = null,
	to = null
function xd() {
	if (to) return to
	var e,
		t = Oa,
		n = t.length,
		r,
		i = 'value' in Rt ? Rt.value : Rt.textContent,
		o = i.length
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return (to = i.slice(e, 1 < r ? 1 - r : void 0))
}
function no(e) {
	var t = e.keyCode
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	)
}
function $i() {
	return !0
}
function qu() {
	return !1
}
function Me(e) {
	function t(n, r, i, o, s) {
		;(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null)
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]))
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? $i
				: qu),
			(this.isPropagationStopped = qu),
			this
		)
	}
	return (
		Q(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = $i))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = $i))
			},
			persist: function () {},
			isPersistent: $i,
		}),
		t
	)
}
var vr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	La = Me(vr),
	vi = Q({}, vr, { view: 0, detail: 0 }),
	pg = Me(vi),
	As,
	Os,
	Ar,
	Qo = Q({}, vi, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Pa,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Ar &&
						(Ar && e.type === 'mousemove'
							? ((As = e.screenX - Ar.screenX), (Os = e.screenY - Ar.screenY))
							: (Os = As = 0),
						(Ar = e)),
				  As)
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : Os
		},
	}),
	Ju = Me(Qo),
	hg = Q({}, Qo, { dataTransfer: 0 }),
	mg = Me(hg),
	gg = Q({}, vi, { relatedTarget: 0 }),
	Ls = Me(gg),
	vg = Q({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	_g = Me(vg),
	yg = Q({}, vr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData
		},
	}),
	Eg = Me(yg),
	wg = Q({}, vr, { data: 0 }),
	Zu = Me(wg),
	Sg = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Cg = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Tg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function kg(e) {
	var t = this.nativeEvent
	return t.getModifierState ? t.getModifierState(e) : (e = Tg[e]) ? !!t[e] : !1
}
function Pa() {
	return kg
}
var Ng = Q({}, vi, {
		key: function (e) {
			if (e.key) {
				var t = Sg[e.key] || e.key
				if (t !== 'Unidentified') return t
			}
			return e.type === 'keypress'
				? ((e = no(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Cg[e.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Pa,
		charCode: function (e) {
			return e.type === 'keypress' ? no(e) : 0
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
		which: function (e) {
			return e.type === 'keypress'
				? no(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0
		},
	}),
	xg = Me(Ng),
	Ag = Q({}, Qo, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	ec = Me(Ag),
	Og = Q({}, vi, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Pa,
	}),
	Lg = Me(Og),
	Pg = Q({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Dg = Me(Pg),
	Ig = Q({}, Qo, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Rg = Me(Ig),
	$g = [9, 13, 27, 32],
	Da = wt && 'CompositionEvent' in window,
	Fr = null
wt && 'documentMode' in document && (Fr = document.documentMode)
var Mg = wt && 'TextEvent' in window && !Fr,
	Ad = wt && (!Da || (Fr && 8 < Fr && 11 >= Fr)),
	tc = ' ',
	nc = !1
function Od(e, t) {
	switch (e) {
		case 'keyup':
			return $g.indexOf(t.keyCode) !== -1
		case 'keydown':
			return t.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function Ld(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var bn = !1
function jg(e, t) {
	switch (e) {
		case 'compositionend':
			return Ld(t)
		case 'keypress':
			return t.which !== 32 ? null : ((nc = !0), tc)
		case 'textInput':
			return (e = t.data), e === tc && nc ? null : e
		default:
			return null
	}
}
function bg(e, t) {
	if (bn)
		return e === 'compositionend' || (!Da && Od(e, t))
			? ((e = xd()), (to = Oa = Rt = null), (bn = !1), e)
			: null
	switch (e) {
		case 'paste':
			return null
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char
				if (t.which) return String.fromCharCode(t.which)
			}
			return null
		case 'compositionend':
			return Ad && t.locale !== 'ko' ? null : t.data
		default:
			return null
	}
}
var zg = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
}
function rc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return t === 'input' ? !!zg[e.type] : t === 'textarea'
}
function Pd(e, t, n, r) {
	ad(r),
		(t = So(t, 'onChange')),
		0 < t.length &&
			((n = new La('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }))
}
var Vr = null,
	ti = null
function Fg(e) {
	Ud(e, 0)
}
function Go(e) {
	var t = Vn(e)
	if (td(t)) return e
}
function Vg(e, t) {
	if (e === 'change') return t
}
var Dd = !1
if (wt) {
	var Ps
	if (wt) {
		var Ds = 'oninput' in document
		if (!Ds) {
			var ic = document.createElement('div')
			ic.setAttribute('oninput', 'return;'),
				(Ds = typeof ic.oninput == 'function')
		}
		Ps = Ds
	} else Ps = !1
	Dd = Ps && (!document.documentMode || 9 < document.documentMode)
}
function oc() {
	Vr && (Vr.detachEvent('onpropertychange', Id), (ti = Vr = null))
}
function Id(e) {
	if (e.propertyName === 'value' && Go(ti)) {
		var t = []
		Pd(t, ti, e, Ta(e)), dd(Fg, t)
	}
}
function Ug(e, t, n) {
	e === 'focusin'
		? (oc(), (Vr = t), (ti = n), Vr.attachEvent('onpropertychange', Id))
		: e === 'focusout' && oc()
}
function Wg(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Go(ti)
}
function Bg(e, t) {
	if (e === 'click') return Go(t)
}
function Hg(e, t) {
	if (e === 'input' || e === 'change') return Go(t)
}
function Kg(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var et = typeof Object.is == 'function' ? Object.is : Kg
function ni(e, t) {
	if (et(e, t)) return !0
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1
	var n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var i = n[r]
		if (!fl.call(t, i) || !et(e[i], t[i])) return !1
	}
	return !0
}
function sc(e) {
	for (; e && e.firstChild; ) e = e.firstChild
	return e
}
function lc(e, t) {
	var n = sc(e)
	e = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e }
			e = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = sc(n)
	}
}
function Rd(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Rd(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1
}
function $d() {
	for (var e = window, t = mo(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow
		else break
		t = mo(e.document)
	}
	return t
}
function Ia(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	)
}
function Yg(e) {
	var t = $d(),
		n = e.focusedElem,
		r = e.selectionRange
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Rd(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Ia(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection()
				var i = n.textContent.length,
					o = Math.min(r.start, i)
				;(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = lc(n, o))
				var s = lc(n, r)
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
	}
}
var Qg = wt && 'documentMode' in document && 11 >= document.documentMode,
	zn = null,
	Ll = null,
	Ur = null,
	Pl = !1
function ac(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	Pl ||
		zn == null ||
		zn !== mo(r) ||
		((r = zn),
		'selectionStart' in r && Ia(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Ur && ni(Ur, r)) ||
			((Ur = r),
			(r = So(Ll, 'onSelect')),
			0 < r.length &&
				((t = new La('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = zn))))
}
function Mi(e, t) {
	var n = {}
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	)
}
var Fn = {
		animationend: Mi('Animation', 'AnimationEnd'),
		animationiteration: Mi('Animation', 'AnimationIteration'),
		animationstart: Mi('Animation', 'AnimationStart'),
		transitionend: Mi('Transition', 'TransitionEnd'),
	},
	Is = {},
	Md = {}
wt &&
	((Md = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Fn.animationend.animation,
		delete Fn.animationiteration.animation,
		delete Fn.animationstart.animation),
	'TransitionEvent' in window || delete Fn.transitionend.transition)
function Xo(e) {
	if (Is[e]) return Is[e]
	if (!Fn[e]) return e
	var t = Fn[e],
		n
	for (n in t) if (t.hasOwnProperty(n) && n in Md) return (Is[e] = t[n])
	return e
}
var jd = Xo('animationend'),
	bd = Xo('animationiteration'),
	zd = Xo('animationstart'),
	Fd = Xo('transitionend'),
	Vd = new Map(),
	uc =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		)
function qt(e, t) {
	Vd.set(e, t), kn(t, [e])
}
for (var Rs = 0; Rs < uc.length; Rs++) {
	var $s = uc[Rs],
		Gg = $s.toLowerCase(),
		Xg = $s[0].toUpperCase() + $s.slice(1)
	qt(Gg, 'on' + Xg)
}
qt(jd, 'onAnimationEnd')
qt(bd, 'onAnimationIteration')
qt(zd, 'onAnimationStart')
qt('dblclick', 'onDoubleClick')
qt('focusin', 'onFocus')
qt('focusout', 'onBlur')
qt(Fd, 'onTransitionEnd')
tr('onMouseEnter', ['mouseout', 'mouseover'])
tr('onMouseLeave', ['mouseout', 'mouseover'])
tr('onPointerEnter', ['pointerout', 'pointerover'])
tr('onPointerLeave', ['pointerout', 'pointerover'])
kn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
kn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
)
kn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
kn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
kn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
kn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var jr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	qg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(jr))
function cc(e, t, n) {
	var r = e.type || 'unknown-event'
	;(e.currentTarget = n), Gm(r, t, void 0, e), (e.currentTarget = null)
}
function Ud(e, t) {
	t = (t & 4) !== 0
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event
		r = r.listeners
		e: {
			var o = void 0
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget
					if (((l = l.listener), a !== o && i.isPropagationStopped())) break e
					cc(i, l, u), (o = a)
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== o && i.isPropagationStopped())
					)
						break e
					cc(i, l, u), (o = a)
				}
		}
	}
	if (vo) throw ((e = Nl), (vo = !1), (Nl = null), e)
}
function U(e, t) {
	var n = t[Ml]
	n === void 0 && (n = t[Ml] = new Set())
	var r = e + '__bubble'
	n.has(r) || (Wd(t, e, 2, !1), n.add(r))
}
function Ms(e, t, n) {
	var r = 0
	t && (r |= 4), Wd(n, e, r, t)
}
var ji = '_reactListening' + Math.random().toString(36).slice(2)
function ri(e) {
	if (!e[ji]) {
		;(e[ji] = !0),
			Xf.forEach(function (n) {
				n !== 'selectionchange' && (qg.has(n) || Ms(n, !1, e), Ms(n, !0, e))
			})
		var t = e.nodeType === 9 ? e : e.ownerDocument
		t === null || t[ji] || ((t[ji] = !0), Ms('selectionchange', !1, t))
	}
}
function Wd(e, t, n, r) {
	switch (Nd(t)) {
		case 1:
			var i = fg
			break
		case 4:
			i = dg
			break
		default:
			i = Aa
	}
	;(n = i.bind(null, t, n, e)),
		(i = void 0),
		!kl ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1)
}
function js(e, t, n, r, i) {
	var o = r
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var s = r.tag
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var a = s.tag
						if (
							(a === 3 || a === 4) &&
							((a = s.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return
						s = s.return
					}
				for (; l !== null; ) {
					if (((s = un(l)), s === null)) return
					if (((a = s.tag), a === 5 || a === 6)) {
						r = o = s
						continue e
					}
					l = l.parentNode
				}
			}
			r = r.return
		}
	dd(function () {
		var u = o,
			c = Ta(n),
			p = []
		e: {
			var m = Vd.get(e)
			if (m !== void 0) {
				var v = La,
					y = e
				switch (e) {
					case 'keypress':
						if (no(n) === 0) break e
					case 'keydown':
					case 'keyup':
						v = xg
						break
					case 'focusin':
						;(y = 'focus'), (v = Ls)
						break
					case 'focusout':
						;(y = 'blur'), (v = Ls)
						break
					case 'beforeblur':
					case 'afterblur':
						v = Ls
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						v = Ju
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						v = mg
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						v = Lg
						break
					case jd:
					case bd:
					case zd:
						v = _g
						break
					case Fd:
						v = Dg
						break
					case 'scroll':
						v = pg
						break
					case 'wheel':
						v = Rg
						break
					case 'copy':
					case 'cut':
					case 'paste':
						v = Eg
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						v = ec
				}
				var _ = (t & 4) !== 0,
					w = !_ && e === 'scroll',
					d = _ ? (m !== null ? m + 'Capture' : null) : m
				_ = []
				for (var f = u, h; f !== null; ) {
					h = f
					var g = h.stateNode
					if (
						(h.tag === 5 &&
							g !== null &&
							((h = g),
							d !== null && ((g = qr(f, d)), g != null && _.push(ii(f, g, h)))),
						w)
					)
						break
					f = f.return
				}
				0 < _.length &&
					((m = new v(m, y, null, n, c)), p.push({ event: m, listeners: _ }))
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === 'mouseover' || e === 'pointerover'),
					(v = e === 'mouseout' || e === 'pointerout'),
					m &&
						n !== Cl &&
						(y = n.relatedTarget || n.fromElement) &&
						(un(y) || y[St]))
				)
					break e
				if (
					(v || m) &&
					((m =
						c.window === c
							? c
							: (m = c.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					v
						? ((y = n.relatedTarget || n.toElement),
						  (v = u),
						  (y = y ? un(y) : null),
						  y !== null &&
								((w = Nn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((v = null), (y = u)),
					v !== y)
				) {
					if (
						((_ = Ju),
						(g = 'onMouseLeave'),
						(d = 'onMouseEnter'),
						(f = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((_ = ec),
							(g = 'onPointerLeave'),
							(d = 'onPointerEnter'),
							(f = 'pointer')),
						(w = v == null ? m : Vn(v)),
						(h = y == null ? m : Vn(y)),
						(m = new _(g, f + 'leave', v, n, c)),
						(m.target = w),
						(m.relatedTarget = h),
						(g = null),
						un(c) === u &&
							((_ = new _(d, f + 'enter', y, n, c)),
							(_.target = h),
							(_.relatedTarget = w),
							(g = _)),
						(w = g),
						v && y)
					)
						t: {
							for (_ = v, d = y, f = 0, h = _; h; h = Ln(h)) f++
							for (h = 0, g = d; g; g = Ln(g)) h++
							for (; 0 < f - h; ) (_ = Ln(_)), f--
							for (; 0 < h - f; ) (d = Ln(d)), h--
							for (; f--; ) {
								if (_ === d || (d !== null && _ === d.alternate)) break t
								;(_ = Ln(_)), (d = Ln(d))
							}
							_ = null
						}
					else _ = null
					v !== null && fc(p, m, v, _, !1),
						y !== null && w !== null && fc(p, w, y, _, !0)
				}
			}
			e: {
				if (
					((m = u ? Vn(u) : window),
					(v = m.nodeName && m.nodeName.toLowerCase()),
					v === 'select' || (v === 'input' && m.type === 'file'))
				)
					var S = Vg
				else if (rc(m))
					if (Dd) S = Hg
					else {
						S = Wg
						var k = Ug
					}
				else
					(v = m.nodeName) &&
						v.toLowerCase() === 'input' &&
						(m.type === 'checkbox' || m.type === 'radio') &&
						(S = Bg)
				if (S && (S = S(e, u))) {
					Pd(p, S, n, c)
					break e
				}
				k && k(e, m, u),
					e === 'focusout' &&
						(k = m._wrapperState) &&
						k.controlled &&
						m.type === 'number' &&
						_l(m, 'number', m.value)
			}
			switch (((k = u ? Vn(u) : window), e)) {
				case 'focusin':
					;(rc(k) || k.contentEditable === 'true') &&
						((zn = k), (Ll = u), (Ur = null))
					break
				case 'focusout':
					Ur = Ll = zn = null
					break
				case 'mousedown':
					Pl = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(Pl = !1), ac(p, n, c)
					break
				case 'selectionchange':
					if (Qg) break
				case 'keydown':
				case 'keyup':
					ac(p, n, c)
			}
			var N
			if (Da)
				e: {
					switch (e) {
						case 'compositionstart':
							var x = 'onCompositionStart'
							break e
						case 'compositionend':
							x = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							x = 'onCompositionUpdate'
							break e
					}
					x = void 0
				}
			else
				bn
					? Od(e, n) && (x = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (x = 'onCompositionStart')
			x &&
				(Ad &&
					n.locale !== 'ko' &&
					(bn || x !== 'onCompositionStart'
						? x === 'onCompositionEnd' && bn && (N = xd())
						: ((Rt = c),
						  (Oa = 'value' in Rt ? Rt.value : Rt.textContent),
						  (bn = !0))),
				(k = So(u, x)),
				0 < k.length &&
					((x = new Zu(x, e, null, n, c)),
					p.push({ event: x, listeners: k }),
					N ? (x.data = N) : ((N = Ld(n)), N !== null && (x.data = N)))),
				(N = Mg ? jg(e, n) : bg(e, n)) &&
					((u = So(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new Zu('onBeforeInput', 'beforeinput', null, n, c)),
						p.push({ event: c, listeners: u }),
						(c.data = N)))
		}
		Ud(p, t)
	})
}
function ii(e, t, n) {
	return { instance: e, listener: t, currentTarget: n }
}
function So(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var i = e,
			o = i.stateNode
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = qr(e, n)),
			o != null && r.unshift(ii(e, o, i)),
			(o = qr(e, t)),
			o != null && r.push(ii(e, o, i))),
			(e = e.return)
	}
	return r
}
function Ln(e) {
	if (e === null) return null
	do e = e.return
	while (e && e.tag !== 5)
	return e || null
}
function fc(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode
		if (a !== null && a === r) break
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((a = qr(n, o)), a != null && s.unshift(ii(n, a, l)))
				: i || ((a = qr(n, o)), a != null && s.push(ii(n, a, l)))),
			(n = n.return)
	}
	s.length !== 0 && e.push({ event: t, listeners: s })
}
var Jg = /\r\n?/g,
	Zg = /\u0000|\uFFFD/g
function dc(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			Jg,
			`
`
		)
		.replace(Zg, '')
}
function bi(e, t, n) {
	if (((t = dc(t)), dc(e) !== t && n)) throw Error(T(425))
}
function Co() {}
var Dl = null,
	Il = null
function Rl(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	)
}
var $l = typeof setTimeout == 'function' ? setTimeout : void 0,
	ev = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	pc = typeof Promise == 'function' ? Promise : void 0,
	tv =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof pc < 'u'
			? function (e) {
					return pc.resolve(null).then(e).catch(nv)
			  }
			: $l
function nv(e) {
	setTimeout(function () {
		throw e
	})
}
function bs(e, t) {
	var n = t,
		r = 0
	do {
		var i = n.nextSibling
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(i), ei(t)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = i
	} while (n)
	ei(t)
}
function Ft(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType
		if (t === 1 || t === 3) break
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
			if (t === '/$') return null
		}
	}
	return e
}
function hc(e) {
	e = e.previousSibling
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e
				t--
			} else n === '/$' && t++
		}
		e = e.previousSibling
	}
	return null
}
var _r = Math.random().toString(36).slice(2),
	ot = '__reactFiber$' + _r,
	oi = '__reactProps$' + _r,
	St = '__reactContainer$' + _r,
	Ml = '__reactEvents$' + _r,
	rv = '__reactListeners$' + _r,
	iv = '__reactHandles$' + _r
function un(e) {
	var t = e[ot]
	if (t) return t
	for (var n = e.parentNode; n; ) {
		if ((t = n[St] || n[ot])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = hc(e); e !== null; ) {
					if ((n = e[ot])) return n
					e = hc(e)
				}
			return t
		}
		;(e = n), (n = e.parentNode)
	}
	return null
}
function _i(e) {
	return (
		(e = e[ot] || e[St]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	)
}
function Vn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode
	throw Error(T(33))
}
function qo(e) {
	return e[oi] || null
}
var jl = [],
	Un = -1
function Jt(e) {
	return { current: e }
}
function W(e) {
	0 > Un || ((e.current = jl[Un]), (jl[Un] = null), Un--)
}
function F(e, t) {
	Un++, (jl[Un] = e.current), (e.current = t)
}
var Yt = {},
	de = Jt(Yt),
	Te = Jt(!1),
	_n = Yt
function nr(e, t) {
	var n = e.type.contextTypes
	if (!n) return Yt
	var r = e.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext
	var i = {},
		o
	for (o in n) i[o] = t[o]
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	)
}
function ke(e) {
	return (e = e.childContextTypes), e != null
}
function To() {
	W(Te), W(de)
}
function mc(e, t, n) {
	if (de.current !== Yt) throw Error(T(168))
	F(de, t), F(Te, n)
}
function Bd(e, t, n) {
	var r = e.stateNode
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n
	r = r.getChildContext()
	for (var i in r) if (!(i in t)) throw Error(T(108, Um(e) || 'Unknown', i))
	return Q({}, n, r)
}
function ko(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
		(_n = de.current),
		F(de, e),
		F(Te, Te.current),
		!0
	)
}
function gc(e, t, n) {
	var r = e.stateNode
	if (!r) throw Error(T(169))
	n
		? ((e = Bd(e, t, _n)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  W(Te),
		  W(de),
		  F(de, e))
		: W(Te),
		F(Te, n)
}
var mt = null,
	Jo = !1,
	zs = !1
function Hd(e) {
	mt === null ? (mt = [e]) : mt.push(e)
}
function ov(e) {
	;(Jo = !0), Hd(e)
}
function Zt() {
	if (!zs && mt !== null) {
		zs = !0
		var e = 0,
			t = z
		try {
			var n = mt
			for (z = 1; e < n.length; e++) {
				var r = n[e]
				do r = r(!0)
				while (r !== null)
			}
			;(mt = null), (Jo = !1)
		} catch (i) {
			throw (mt !== null && (mt = mt.slice(e + 1)), gd(ka, Zt), i)
		} finally {
			;(z = t), (zs = !1)
		}
	}
	return null
}
var Wn = [],
	Bn = 0,
	No = null,
	xo = 0,
	be = [],
	ze = 0,
	yn = null,
	gt = 1,
	vt = ''
function ln(e, t) {
	;(Wn[Bn++] = xo), (Wn[Bn++] = No), (No = e), (xo = t)
}
function Kd(e, t, n) {
	;(be[ze++] = gt), (be[ze++] = vt), (be[ze++] = yn), (yn = e)
	var r = gt
	e = vt
	var i = 32 - Je(r) - 1
	;(r &= ~(1 << i)), (n += 1)
	var o = 32 - Je(t) + i
	if (30 < o) {
		var s = i - (i % 5)
		;(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(gt = (1 << (32 - Je(t) + i)) | (n << i) | r),
			(vt = o + e)
	} else (gt = (1 << o) | (n << i) | r), (vt = e)
}
function Ra(e) {
	e.return !== null && (ln(e, 1), Kd(e, 1, 0))
}
function $a(e) {
	for (; e === No; )
		(No = Wn[--Bn]), (Wn[Bn] = null), (xo = Wn[--Bn]), (Wn[Bn] = null)
	for (; e === yn; )
		(yn = be[--ze]),
			(be[ze] = null),
			(vt = be[--ze]),
			(be[ze] = null),
			(gt = be[--ze]),
			(be[ze] = null)
}
var Le = null,
	Oe = null,
	H = !1,
	qe = null
function Yd(e, t) {
	var n = Fe(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function vc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Le = e), (Oe = Ft(t.firstChild)), !0)
					: !1
			)
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Le = e), (Oe = null), !0) : !1
			)
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = yn !== null ? { id: gt, overflow: vt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Fe(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Le = e),
					  (Oe = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function bl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function zl(e) {
	if (H) {
		var t = Oe
		if (t) {
			var n = t
			if (!vc(e, t)) {
				if (bl(e)) throw Error(T(418))
				t = Ft(n.nextSibling)
				var r = Le
				t && vc(e, t)
					? Yd(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e))
			}
		} else {
			if (bl(e)) throw Error(T(418))
			;(e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e)
		}
	}
}
function _c(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return
	Le = e
}
function zi(e) {
	if (e !== Le) return !1
	if (!H) return _c(e), (H = !0), !1
	var t
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !Rl(e.type, e.memoizedProps))),
		t && (t = Oe))
	) {
		if (bl(e)) throw (Qd(), Error(T(418)))
		for (; t; ) Yd(e, t), (t = Ft(t.nextSibling))
	}
	if ((_c(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(T(317))
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data
					if (n === '/$') {
						if (t === 0) {
							Oe = Ft(e.nextSibling)
							break e
						}
						t--
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++
				}
				e = e.nextSibling
			}
			Oe = null
		}
	} else Oe = Le ? Ft(e.stateNode.nextSibling) : null
	return !0
}
function Qd() {
	for (var e = Oe; e; ) e = Ft(e.nextSibling)
}
function rr() {
	;(Oe = Le = null), (H = !1)
}
function Ma(e) {
	qe === null ? (qe = [e]) : qe.push(e)
}
var sv = Nt.ReactCurrentBatchConfig
function Ge(e, t) {
	if (e && e.defaultProps) {
		;(t = Q({}, t)), (e = e.defaultProps)
		for (var n in e) t[n] === void 0 && (t[n] = e[n])
		return t
	}
	return t
}
var Ao = Jt(null),
	Oo = null,
	Hn = null,
	ja = null
function ba() {
	ja = Hn = Oo = null
}
function za(e) {
	var t = Ao.current
	W(Ao), (e._currentValue = t)
}
function Fl(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break
		e = e.return
	}
}
function Zn(e, t) {
	;(Oo = e),
		(ja = Hn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Ce = !0), (e.firstContext = null))
}
function We(e) {
	var t = e._currentValue
	if (ja !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
			if (Oo === null) throw Error(T(308))
			;(Hn = e), (Oo.dependencies = { lanes: 0, firstContext: e })
		} else Hn = Hn.next = e
	return t
}
var cn = null
function Fa(e) {
	cn === null ? (cn = [e]) : cn.push(e)
}
function Gd(e, t, n, r) {
	var i = t.interleaved
	return (
		i === null ? ((n.next = n), Fa(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		Ct(e, r)
	)
}
function Ct(e, t) {
	e.lanes |= t
	var n = e.alternate
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return)
	return n.tag === 3 ? n.stateNode : null
}
var Pt = !1
function Va(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	}
}
function Xd(e, t) {
	;(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			})
}
function _t(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	}
}
function Vt(e, t, n) {
	var r = e.updateQueue
	if (r === null) return null
	if (((r = r.shared), j & 2)) {
		var i = r.pending
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			Ct(e, n)
		)
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Fa(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		Ct(e, n)
	)
}
function ro(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Na(e, n)
	}
}
function yc(e, t) {
	var n = e.updateQueue,
		r = e.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				}
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next)
			} while (n !== null)
			o === null ? (i = o = t) : (o = o.next = t)
		} else i = o = t
		;(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n)
		return
	}
	;(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t)
}
function Lo(e, t, n, r) {
	var i = e.updateQueue
	Pt = !1
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		l = i.shared.pending
	if (l !== null) {
		i.shared.pending = null
		var a = l,
			u = a.next
		;(a.next = null), s === null ? (o = u) : (s.next = u), (s = a)
		var c = e.alternate
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== s &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = a)))
	}
	if (o !== null) {
		var p = i.baseState
		;(s = 0), (c = u = a = null), (l = o)
		do {
			var m = l.lane,
				v = l.eventTime
			if ((r & m) === m) {
				c !== null &&
					(c = c.next =
						{
							eventTime: v,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						})
				e: {
					var y = e,
						_ = l
					switch (((m = t), (v = n), _.tag)) {
						case 1:
							if (((y = _.payload), typeof y == 'function')) {
								p = y.call(v, p, m)
								break e
							}
							p = y
							break e
						case 3:
							y.flags = (y.flags & -65537) | 128
						case 0:
							if (
								((y = _.payload),
								(m = typeof y == 'function' ? y.call(v, p, m) : y),
								m == null)
							)
								break e
							p = Q({}, p, m)
							break e
						case 2:
							Pt = !0
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(m = i.effects),
					m === null ? (i.effects = [l]) : m.push(l))
			} else
				(v = {
					eventTime: v,
					lane: m,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = v), (a = p)) : (c = c.next = v),
					(s |= m)
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break
				;(m = l),
					(l = m.next),
					(m.next = null),
					(i.lastBaseUpdate = m),
					(i.shared.pending = null)
			}
		} while (!0)
		if (
			(c === null && (a = p),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t
			do (s |= i.lane), (i = i.next)
			while (i !== t)
		} else o === null && (i.shared.lanes = 0)
		;(wn |= s), (e.lanes = s), (e.memoizedState = p)
	}
}
function Ec(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(T(191, i))
				i.call(r)
			}
		}
}
var qd = new Gf.Component().refs
function Vl(e, t, n, r) {
	;(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Q({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Zo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Nn(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals
		var r = me(),
			i = Wt(e),
			o = _t(r, i)
		;(o.payload = t),
			n != null && (o.callback = n),
			(t = Vt(e, o, i)),
			t !== null && (Ze(t, e, i, r), ro(t, e, i))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals
		var r = me(),
			i = Wt(e),
			o = _t(r, i)
		;(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Vt(e, o, i)),
			t !== null && (Ze(t, e, i, r), ro(t, e, i))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals
		var n = me(),
			r = Wt(e),
			i = _t(n, r)
		;(i.tag = 2),
			t != null && (i.callback = t),
			(t = Vt(e, i, r)),
			t !== null && (Ze(t, e, r, n), ro(t, e, r))
	},
}
function wc(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !ni(n, r) || !ni(i, o)
			: !0
	)
}
function Jd(e, t, n) {
	var r = !1,
		i = Yt,
		o = t.contextType
	return (
		typeof o == 'object' && o !== null
			? (o = We(o))
			: ((i = ke(t) ? _n : de.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? nr(e, i) : Yt)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Zo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	)
}
function Sc(e, t, n, r) {
	;(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Zo.enqueueReplaceState(t, t.state, null)
}
function Ul(e, t, n, r) {
	var i = e.stateNode
	;(i.props = n), (i.state = e.memoizedState), (i.refs = qd), Va(e)
	var o = t.contextType
	typeof o == 'object' && o !== null
		? (i.context = We(o))
		: ((o = ke(t) ? _n : de.current), (i.context = nr(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == 'function' && (Vl(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((t = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Zo.enqueueReplaceState(i, i.state, null),
			Lo(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Or(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(T(309))
				var r = n.stateNode
			}
			if (!r) throw Error(T(147, e))
			var i = r,
				o = '' + e
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var l = i.refs
						l === qd && (l = i.refs = {}), s === null ? delete l[o] : (l[o] = s)
				  }),
				  (t._stringRef = o),
				  t)
		}
		if (typeof e != 'string') throw Error(T(284))
		if (!n._owner) throw Error(T(290, e))
	}
	return e
}
function Fi(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			T(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	)
}
function Cc(e) {
	var t = e._init
	return t(e._payload)
}
function Zd(e) {
	function t(d, f) {
		if (e) {
			var h = d.deletions
			h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f)
		}
	}
	function n(d, f) {
		if (!e) return null
		for (; f !== null; ) t(d, f), (f = f.sibling)
		return null
	}
	function r(d, f) {
		for (d = new Map(); f !== null; )
			f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling)
		return d
	}
	function i(d, f) {
		return (d = Bt(d, f)), (d.index = 0), (d.sibling = null), d
	}
	function o(d, f, h) {
		return (
			(d.index = h),
			e
				? ((h = d.alternate),
				  h !== null
						? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
						: ((d.flags |= 2), f))
				: ((d.flags |= 1048576), f)
		)
	}
	function s(d) {
		return e && d.alternate === null && (d.flags |= 2), d
	}
	function l(d, f, h, g) {
		return f === null || f.tag !== 6
			? ((f = Ks(h, d.mode, g)), (f.return = d), f)
			: ((f = i(f, h)), (f.return = d), f)
	}
	function a(d, f, h, g) {
		var S = h.type
		return S === jn
			? c(d, f, h.props.children, g, h.key)
			: f !== null &&
			  (f.elementType === S ||
					(typeof S == 'object' &&
						S !== null &&
						S.$$typeof === Lt &&
						Cc(S) === f.type))
			? ((g = i(f, h.props)), (g.ref = Or(d, f, h)), (g.return = d), g)
			: ((g = uo(h.type, h.key, h.props, null, d.mode, g)),
			  (g.ref = Or(d, f, h)),
			  (g.return = d),
			  g)
	}
	function u(d, f, h, g) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== h.containerInfo ||
			f.stateNode.implementation !== h.implementation
			? ((f = Ys(h, d.mode, g)), (f.return = d), f)
			: ((f = i(f, h.children || [])), (f.return = d), f)
	}
	function c(d, f, h, g, S) {
		return f === null || f.tag !== 7
			? ((f = mn(h, d.mode, g, S)), (f.return = d), f)
			: ((f = i(f, h)), (f.return = d), f)
	}
	function p(d, f, h) {
		if ((typeof f == 'string' && f !== '') || typeof f == 'number')
			return (f = Ks('' + f, d.mode, h)), (f.return = d), f
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case Oi:
					return (
						(h = uo(f.type, f.key, f.props, null, d.mode, h)),
						(h.ref = Or(d, null, f)),
						(h.return = d),
						h
					)
				case Mn:
					return (f = Ys(f, d.mode, h)), (f.return = d), f
				case Lt:
					var g = f._init
					return p(d, g(f._payload), h)
			}
			if ($r(f) || Tr(f)) return (f = mn(f, d.mode, h, null)), (f.return = d), f
			Fi(d, f)
		}
		return null
	}
	function m(d, f, h, g) {
		var S = f !== null ? f.key : null
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return S !== null ? null : l(d, f, '' + h, g)
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case Oi:
					return h.key === S ? a(d, f, h, g) : null
				case Mn:
					return h.key === S ? u(d, f, h, g) : null
				case Lt:
					return (S = h._init), m(d, f, S(h._payload), g)
			}
			if ($r(h) || Tr(h)) return S !== null ? null : c(d, f, h, g, null)
			Fi(d, h)
		}
		return null
	}
	function v(d, f, h, g, S) {
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return (d = d.get(h) || null), l(f, d, '' + g, S)
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case Oi:
					return (d = d.get(g.key === null ? h : g.key) || null), a(f, d, g, S)
				case Mn:
					return (d = d.get(g.key === null ? h : g.key) || null), u(f, d, g, S)
				case Lt:
					var k = g._init
					return v(d, f, h, k(g._payload), S)
			}
			if ($r(g) || Tr(g)) return (d = d.get(h) || null), c(f, d, g, S, null)
			Fi(f, g)
		}
		return null
	}
	function y(d, f, h, g) {
		for (
			var S = null, k = null, N = f, x = (f = 0), $ = null;
			N !== null && x < h.length;
			x++
		) {
			N.index > x ? (($ = N), (N = null)) : ($ = N.sibling)
			var P = m(d, N, h[x], g)
			if (P === null) {
				N === null && (N = $)
				break
			}
			e && N && P.alternate === null && t(d, N),
				(f = o(P, f, x)),
				k === null ? (S = P) : (k.sibling = P),
				(k = P),
				(N = $)
		}
		if (x === h.length) return n(d, N), H && ln(d, x), S
		if (N === null) {
			for (; x < h.length; x++)
				(N = p(d, h[x], g)),
					N !== null &&
						((f = o(N, f, x)), k === null ? (S = N) : (k.sibling = N), (k = N))
			return H && ln(d, x), S
		}
		for (N = r(d, N); x < h.length; x++)
			($ = v(N, d, x, h[x], g)),
				$ !== null &&
					(e && $.alternate !== null && N.delete($.key === null ? x : $.key),
					(f = o($, f, x)),
					k === null ? (S = $) : (k.sibling = $),
					(k = $))
		return (
			e &&
				N.forEach(function (b) {
					return t(d, b)
				}),
			H && ln(d, x),
			S
		)
	}
	function _(d, f, h, g) {
		var S = Tr(h)
		if (typeof S != 'function') throw Error(T(150))
		if (((h = S.call(h)), h == null)) throw Error(T(151))
		for (
			var k = (S = null), N = f, x = (f = 0), $ = null, P = h.next();
			N !== null && !P.done;
			x++, P = h.next()
		) {
			N.index > x ? (($ = N), (N = null)) : ($ = N.sibling)
			var b = m(d, N, P.value, g)
			if (b === null) {
				N === null && (N = $)
				break
			}
			e && N && b.alternate === null && t(d, N),
				(f = o(b, f, x)),
				k === null ? (S = b) : (k.sibling = b),
				(k = b),
				(N = $)
		}
		if (P.done) return n(d, N), H && ln(d, x), S
		if (N === null) {
			for (; !P.done; x++, P = h.next())
				(P = p(d, P.value, g)),
					P !== null &&
						((f = o(P, f, x)), k === null ? (S = P) : (k.sibling = P), (k = P))
			return H && ln(d, x), S
		}
		for (N = r(d, N); !P.done; x++, P = h.next())
			(P = v(N, d, x, P.value, g)),
				P !== null &&
					(e && P.alternate !== null && N.delete(P.key === null ? x : P.key),
					(f = o(P, f, x)),
					k === null ? (S = P) : (k.sibling = P),
					(k = P))
		return (
			e &&
				N.forEach(function (ie) {
					return t(d, ie)
				}),
			H && ln(d, x),
			S
		)
	}
	function w(d, f, h, g) {
		if (
			(typeof h == 'object' &&
				h !== null &&
				h.type === jn &&
				h.key === null &&
				(h = h.props.children),
			typeof h == 'object' && h !== null)
		) {
			switch (h.$$typeof) {
				case Oi:
					e: {
						for (var S = h.key, k = f; k !== null; ) {
							if (k.key === S) {
								if (((S = h.type), S === jn)) {
									if (k.tag === 7) {
										n(d, k.sibling),
											(f = i(k, h.props.children)),
											(f.return = d),
											(d = f)
										break e
									}
								} else if (
									k.elementType === S ||
									(typeof S == 'object' &&
										S !== null &&
										S.$$typeof === Lt &&
										Cc(S) === k.type)
								) {
									n(d, k.sibling),
										(f = i(k, h.props)),
										(f.ref = Or(d, k, h)),
										(f.return = d),
										(d = f)
									break e
								}
								n(d, k)
								break
							} else t(d, k)
							k = k.sibling
						}
						h.type === jn
							? ((f = mn(h.props.children, d.mode, g, h.key)),
							  (f.return = d),
							  (d = f))
							: ((g = uo(h.type, h.key, h.props, null, d.mode, g)),
							  (g.ref = Or(d, f, h)),
							  (g.return = d),
							  (d = g))
					}
					return s(d)
				case Mn:
					e: {
						for (k = h.key; f !== null; ) {
							if (f.key === k)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo === h.containerInfo &&
									f.stateNode.implementation === h.implementation
								) {
									n(d, f.sibling),
										(f = i(f, h.children || [])),
										(f.return = d),
										(d = f)
									break e
								} else {
									n(d, f)
									break
								}
							else t(d, f)
							f = f.sibling
						}
						;(f = Ys(h, d.mode, g)), (f.return = d), (d = f)
					}
					return s(d)
				case Lt:
					return (k = h._init), w(d, f, k(h._payload), g)
			}
			if ($r(h)) return y(d, f, h, g)
			if (Tr(h)) return _(d, f, h, g)
			Fi(d, h)
		}
		return (typeof h == 'string' && h !== '') || typeof h == 'number'
			? ((h = '' + h),
			  f !== null && f.tag === 6
					? (n(d, f.sibling), (f = i(f, h)), (f.return = d), (d = f))
					: (n(d, f), (f = Ks(h, d.mode, g)), (f.return = d), (d = f)),
			  s(d))
			: n(d, f)
	}
	return w
}
var ir = Zd(!0),
	ep = Zd(!1),
	yi = {},
	lt = Jt(yi),
	si = Jt(yi),
	li = Jt(yi)
function fn(e) {
	if (e === yi) throw Error(T(174))
	return e
}
function Ua(e, t) {
	switch ((F(li, t), F(si, e), F(lt, yi), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : El(null, '')
			break
		default:
			;(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = El(t, e))
	}
	W(lt), F(lt, t)
}
function or() {
	W(lt), W(si), W(li)
}
function tp(e) {
	fn(li.current)
	var t = fn(lt.current),
		n = El(t, e.type)
	t !== n && (F(si, e), F(lt, n))
}
function Wa(e) {
	si.current === e && (W(lt), W(si))
}
var K = Jt(0)
function Po(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			;(t.child.return = t), (t = t.child)
			continue
		}
		if (t === e) break
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null
			t = t.return
		}
		;(t.sibling.return = t.return), (t = t.sibling)
	}
	return null
}
var Fs = []
function Ba() {
	for (var e = 0; e < Fs.length; e++) Fs[e]._workInProgressVersionPrimary = null
	Fs.length = 0
}
var io = Nt.ReactCurrentDispatcher,
	Vs = Nt.ReactCurrentBatchConfig,
	En = 0,
	Y = null,
	ee = null,
	ne = null,
	Do = !1,
	Wr = !1,
	ai = 0,
	lv = 0
function ue() {
	throw Error(T(321))
}
function Ha(e, t) {
	if (t === null) return !1
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!et(e[n], t[n])) return !1
	return !0
}
function Ka(e, t, n, r, i, o) {
	if (
		((En = o),
		(Y = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(io.current = e === null || e.memoizedState === null ? fv : dv),
		(e = n(r, i)),
		Wr)
	) {
		o = 0
		do {
			if (((Wr = !1), (ai = 0), 25 <= o)) throw Error(T(301))
			;(o += 1),
				(ne = ee = null),
				(t.updateQueue = null),
				(io.current = pv),
				(e = n(r, i))
		} while (Wr)
	}
	if (
		((io.current = Io),
		(t = ee !== null && ee.next !== null),
		(En = 0),
		(ne = ee = Y = null),
		(Do = !1),
		t)
	)
		throw Error(T(300))
	return e
}
function Ya() {
	var e = ai !== 0
	return (ai = 0), e
}
function it() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	}
	return ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e), ne
}
function Be() {
	if (ee === null) {
		var e = Y.alternate
		e = e !== null ? e.memoizedState : null
	} else e = ee.next
	var t = ne === null ? Y.memoizedState : ne.next
	if (t !== null) (ne = t), (ee = e)
	else {
		if (e === null) throw Error(T(310))
		;(ee = e),
			(e = {
				memoizedState: ee.memoizedState,
				baseState: ee.baseState,
				baseQueue: ee.baseQueue,
				queue: ee.queue,
				next: null,
			}),
			ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e)
	}
	return ne
}
function ui(e, t) {
	return typeof t == 'function' ? t(e) : t
}
function Us(e) {
	var t = Be(),
		n = t.queue
	if (n === null) throw Error(T(311))
	n.lastRenderedReducer = e
	var r = ee,
		i = r.baseQueue,
		o = n.pending
	if (o !== null) {
		if (i !== null) {
			var s = i.next
			;(i.next = o.next), (o.next = s)
		}
		;(r.baseQueue = i = o), (n.pending = null)
	}
	if (i !== null) {
		;(o = i.next), (r = r.baseState)
		var l = (s = null),
			a = null,
			u = o
		do {
			var c = u.lane
			if ((En & c) === c)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action))
			else {
				var p = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				}
				a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
					(Y.lanes |= c),
					(wn |= c)
			}
			u = u.next
		} while (u !== null && u !== o)
		a === null ? (s = r) : (a.next = l),
			et(r, t.memoizedState) || (Ce = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = a),
			(n.lastRenderedState = r)
	}
	if (((e = n.interleaved), e !== null)) {
		i = e
		do (o = i.lane), (Y.lanes |= o), (wn |= o), (i = i.next)
		while (i !== e)
	} else i === null && (n.lanes = 0)
	return [t.memoizedState, n.dispatch]
}
function Ws(e) {
	var t = Be(),
		n = t.queue
	if (n === null) throw Error(T(311))
	n.lastRenderedReducer = e
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState
	if (i !== null) {
		n.pending = null
		var s = (i = i.next)
		do (o = e(o, s.action)), (s = s.next)
		while (s !== i)
		et(o, t.memoizedState) || (Ce = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o)
	}
	return [o, r]
}
function np() {}
function rp(e, t) {
	var n = Y,
		r = Be(),
		i = t(),
		o = !et(r.memoizedState, i)
	if (
		(o && ((r.memoizedState = i), (Ce = !0)),
		(r = r.queue),
		Qa(sp.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			ci(9, op.bind(null, n, r, i, t), void 0, null),
			re === null)
		)
			throw Error(T(349))
		En & 30 || ip(n, t, i)
	}
	return i
}
function ip(e, t, n) {
	;(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Y.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Y.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function op(e, t, n, r) {
	;(t.value = n), (t.getSnapshot = r), lp(t) && ap(e)
}
function sp(e, t, n) {
	return n(function () {
		lp(t) && ap(e)
	})
}
function lp(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !et(e, n)
	} catch {
		return !0
	}
}
function ap(e) {
	var t = Ct(e, 1)
	t !== null && Ze(t, e, 1, -1)
}
function Tc(e) {
	var t = it()
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ui,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = cv.bind(null, Y, e)),
		[t.memoizedState, e]
	)
}
function ci(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Y.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Y.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	)
}
function up() {
	return Be().memoizedState
}
function oo(e, t, n, r) {
	var i = it()
	;(Y.flags |= e),
		(i.memoizedState = ci(1 | t, n, void 0, r === void 0 ? null : r))
}
function es(e, t, n, r) {
	var i = Be()
	r = r === void 0 ? null : r
	var o = void 0
	if (ee !== null) {
		var s = ee.memoizedState
		if (((o = s.destroy), r !== null && Ha(r, s.deps))) {
			i.memoizedState = ci(t, n, o, r)
			return
		}
	}
	;(Y.flags |= e), (i.memoizedState = ci(1 | t, n, o, r))
}
function kc(e, t) {
	return oo(8390656, 8, e, t)
}
function Qa(e, t) {
	return es(2048, 8, e, t)
}
function cp(e, t) {
	return es(4, 2, e, t)
}
function fp(e, t) {
	return es(4, 4, e, t)
}
function dp(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null)
			}
		)
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null
			}
		)
}
function pp(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), es(4, 4, dp.bind(null, t, e), n)
	)
}
function Ga() {}
function hp(e, t) {
	var n = Be()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && Ha(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e)
}
function mp(e, t) {
	var n = Be()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && Ha(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e)
}
function gp(e, t, n) {
	return En & 21
		? (et(n, t) || ((n = yd()), (Y.lanes |= n), (wn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n))
}
function av(e, t) {
	var n = z
	;(z = n !== 0 && 4 > n ? n : 4), e(!0)
	var r = Vs.transition
	Vs.transition = {}
	try {
		e(!1), t()
	} finally {
		;(z = n), (Vs.transition = r)
	}
}
function vp() {
	return Be().memoizedState
}
function uv(e, t, n) {
	var r = Wt(e)
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		_p(e))
	)
		yp(t, n)
	else if (((n = Gd(e, t, n, r)), n !== null)) {
		var i = me()
		Ze(n, e, r, i), Ep(n, t, r)
	}
}
function cv(e, t, n) {
	var r = Wt(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
	if (_p(e)) yp(t, i)
	else {
		var o = e.alternate
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					l = o(s, n)
				if (((i.hasEagerState = !0), (i.eagerState = l), et(l, s))) {
					var a = t.interleaved
					a === null
						? ((i.next = i), Fa(t))
						: ((i.next = a.next), (a.next = i)),
						(t.interleaved = i)
					return
				}
			} catch {
			} finally {
			}
		;(n = Gd(e, t, i, r)),
			n !== null && ((i = me()), Ze(n, e, r, i), Ep(n, t, r))
	}
}
function _p(e) {
	var t = e.alternate
	return e === Y || (t !== null && t === Y)
}
function yp(e, t) {
	Wr = Do = !0
	var n = e.pending
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Ep(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Na(e, n)
	}
}
var Io = {
		readContext: We,
		useCallback: ue,
		useContext: ue,
		useEffect: ue,
		useImperativeHandle: ue,
		useInsertionEffect: ue,
		useLayoutEffect: ue,
		useMemo: ue,
		useReducer: ue,
		useRef: ue,
		useState: ue,
		useDebugValue: ue,
		useDeferredValue: ue,
		useTransition: ue,
		useMutableSource: ue,
		useSyncExternalStore: ue,
		useId: ue,
		unstable_isNewReconciler: !1,
	},
	fv = {
		readContext: We,
		useCallback: function (e, t) {
			return (it().memoizedState = [e, t === void 0 ? null : t]), e
		},
		useContext: We,
		useEffect: kc,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				oo(4194308, 4, dp.bind(null, t, e), n)
			)
		},
		useLayoutEffect: function (e, t) {
			return oo(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return oo(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = it()
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			)
		},
		useReducer: function (e, t, n) {
			var r = it()
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = uv.bind(null, Y, e)),
				[r.memoizedState, e]
			)
		},
		useRef: function (e) {
			var t = it()
			return (e = { current: e }), (t.memoizedState = e)
		},
		useState: Tc,
		useDebugValue: Ga,
		useDeferredValue: function (e) {
			return (it().memoizedState = e)
		},
		useTransition: function () {
			var e = Tc(!1),
				t = e[0]
			return (e = av.bind(null, e[1])), (it().memoizedState = e), [t, e]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Y,
				i = it()
			if (H) {
				if (n === void 0) throw Error(T(407))
				n = n()
			} else {
				if (((n = t()), re === null)) throw Error(T(349))
				En & 30 || ip(r, t, n)
			}
			i.memoizedState = n
			var o = { value: n, getSnapshot: t }
			return (
				(i.queue = o),
				kc(sp.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				ci(9, op.bind(null, r, o, n, t), void 0, null),
				n
			)
		},
		useId: function () {
			var e = it(),
				t = re.identifierPrefix
			if (H) {
				var n = vt,
					r = gt
				;(n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = ai++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':')
			} else (n = lv++), (t = ':' + t + 'r' + n.toString(32) + ':')
			return (e.memoizedState = t)
		},
		unstable_isNewReconciler: !1,
	},
	dv = {
		readContext: We,
		useCallback: hp,
		useContext: We,
		useEffect: Qa,
		useImperativeHandle: pp,
		useInsertionEffect: cp,
		useLayoutEffect: fp,
		useMemo: mp,
		useReducer: Us,
		useRef: up,
		useState: function () {
			return Us(ui)
		},
		useDebugValue: Ga,
		useDeferredValue: function (e) {
			var t = Be()
			return gp(t, ee.memoizedState, e)
		},
		useTransition: function () {
			var e = Us(ui)[0],
				t = Be().memoizedState
			return [e, t]
		},
		useMutableSource: np,
		useSyncExternalStore: rp,
		useId: vp,
		unstable_isNewReconciler: !1,
	},
	pv = {
		readContext: We,
		useCallback: hp,
		useContext: We,
		useEffect: Qa,
		useImperativeHandle: pp,
		useInsertionEffect: cp,
		useLayoutEffect: fp,
		useMemo: mp,
		useReducer: Ws,
		useRef: up,
		useState: function () {
			return Ws(ui)
		},
		useDebugValue: Ga,
		useDeferredValue: function (e) {
			var t = Be()
			return ee === null ? (t.memoizedState = e) : gp(t, ee.memoizedState, e)
		},
		useTransition: function () {
			var e = Ws(ui)[0],
				t = Be().memoizedState
			return [e, t]
		},
		useMutableSource: np,
		useSyncExternalStore: rp,
		useId: vp,
		unstable_isNewReconciler: !1,
	}
function sr(e, t) {
	try {
		var n = '',
			r = t
		do (n += Vm(r)), (r = r.return)
		while (r)
		var i = n
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack
	}
	return { value: e, source: t, stack: i, digest: null }
}
function Bs(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Wl(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var hv = typeof WeakMap == 'function' ? WeakMap : Map
function wp(e, t, n) {
	;(n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = t.value
	return (
		(n.callback = function () {
			$o || (($o = !0), (Zl = r)), Wl(e, t)
		}),
		n
	)
}
function Sp(e, t, n) {
	;(n = _t(-1, n)), (n.tag = 3)
	var r = e.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var i = t.value
		;(n.payload = function () {
			return r(i)
		}),
			(n.callback = function () {
				Wl(e, t)
			})
	}
	var o = e.stateNode
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				Wl(e, t),
					typeof r != 'function' &&
						(Ut === null ? (Ut = new Set([this])) : Ut.add(this))
				var s = t.stack
				this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
			}),
		n
	)
}
function Nc(e, t, n) {
	var r = e.pingCache
	if (r === null) {
		r = e.pingCache = new hv()
		var i = new Set()
		r.set(t, i)
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
	i.has(n) || (i.add(n), (e = Av.bind(null, e, t, n)), t.then(e, e))
}
function xc(e) {
	do {
		var t
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e
		e = e.return
	} while (e !== null)
	return null
}
function Ac(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = _t(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
				  (n.lanes |= 1)),
		  e)
}
var mv = Nt.ReactCurrentOwner,
	Ce = !1
function he(e, t, n, r) {
	t.child = e === null ? ep(t, null, n, r) : ir(t, e.child, n, r)
}
function Oc(e, t, n, r, i) {
	n = n.render
	var o = t.ref
	return (
		Zn(t, i),
		(r = Ka(e, t, n, r, o, i)),
		(n = Ya()),
		e !== null && !Ce
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  Tt(e, t, i))
			: (H && n && Ra(t), (t.flags |= 1), he(e, t, r, i), t.child)
	)
}
function Lc(e, t, n, r, i) {
	if (e === null) {
		var o = n.type
		return typeof o == 'function' &&
			!ru(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Cp(e, t, o, r, i))
			: ((e = uo(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e))
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps
		if (
			((n = n.compare), (n = n !== null ? n : ni), n(s, r) && e.ref === t.ref)
		)
			return Tt(e, t, i)
	}
	return (
		(t.flags |= 1),
		(e = Bt(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	)
}
function Cp(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps
		if (ni(o, r) && e.ref === t.ref)
			if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (Ce = !0)
			else return (t.lanes = e.lanes), Tt(e, t, i)
	}
	return Bl(e, t, n, r, i)
}
function Tp(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				F(Yn, Ae),
				(Ae |= n)
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					F(Yn, Ae),
					(Ae |= e),
					null
				)
			;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				F(Yn, Ae),
				(Ae |= r)
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			F(Yn, Ae),
			(Ae |= r)
	return he(e, t, i, n), t.child
}
function kp(e, t) {
	var n = t.ref
	;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152))
}
function Bl(e, t, n, r, i) {
	var o = ke(n) ? _n : de.current
	return (
		(o = nr(t, o)),
		Zn(t, i),
		(n = Ka(e, t, n, r, o, i)),
		(r = Ya()),
		e !== null && !Ce
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  Tt(e, t, i))
			: (H && r && Ra(t), (t.flags |= 1), he(e, t, n, i), t.child)
	)
}
function Pc(e, t, n, r, i) {
	if (ke(n)) {
		var o = !0
		ko(t)
	} else o = !1
	if ((Zn(t, i), t.stateNode === null))
		so(e, t), Jd(t, n, r), Ul(t, n, r, i), (r = !0)
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps
		s.props = l
		var a = s.context,
			u = n.contextType
		typeof u == 'object' && u !== null
			? (u = We(u))
			: ((u = ke(n) ? _n : de.current), (u = nr(t, u)))
		var c = n.getDerivedStateFromProps,
			p =
				typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
		p ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== r || a !== u) && Sc(t, s, r, u)),
			(Pt = !1)
		var m = t.memoizedState
		;(s.state = m),
			Lo(t, r, s, i),
			(a = t.memoizedState),
			l !== r || m !== a || Te.current || Pt
				? (typeof c == 'function' && (Vl(t, n, c, r), (a = t.memoizedState)),
				  (l = Pt || wc(t, n, l, r, m, a, u))
						? (p ||
								(typeof s.UNSAFE_componentWillMount != 'function' &&
									typeof s.componentWillMount != 'function') ||
								(typeof s.componentWillMount == 'function' &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == 'function' &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = a)),
				  (s.props = r),
				  (s.state = a),
				  (s.context = u),
				  (r = l))
				: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1))
	} else {
		;(s = t.stateNode),
			Xd(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : Ge(t.type, l)),
			(s.props = u),
			(p = t.pendingProps),
			(m = s.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null
				? (a = We(a))
				: ((a = ke(n) ? _n : de.current), (a = nr(t, a)))
		var v = n.getDerivedStateFromProps
		;(c =
			typeof v == 'function' ||
			typeof s.getSnapshotBeforeUpdate == 'function') ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== p || m !== a) && Sc(t, s, r, a)),
			(Pt = !1),
			(m = t.memoizedState),
			(s.state = m),
			Lo(t, r, s, i)
		var y = t.memoizedState
		l !== p || m !== y || Te.current || Pt
			? (typeof v == 'function' && (Vl(t, n, v, r), (y = t.memoizedState)),
			  (u = Pt || wc(t, n, u, r, m, y, a) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != 'function' &&
								typeof s.componentWillUpdate != 'function') ||
							(typeof s.componentWillUpdate == 'function' &&
								s.componentWillUpdate(r, y, a),
							typeof s.UNSAFE_componentWillUpdate == 'function' &&
								s.UNSAFE_componentWillUpdate(r, y, a)),
					  typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != 'function' ||
							(l === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != 'function' ||
							(l === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (s.props = r),
			  (s.state = y),
			  (s.context = a),
			  (r = u))
			: (typeof s.componentDidUpdate != 'function' ||
					(l === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != 'function' ||
					(l === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1))
	}
	return Hl(e, t, n, r, o, i)
}
function Hl(e, t, n, r, i, o) {
	kp(e, t)
	var s = (t.flags & 128) !== 0
	if (!r && !s) return i && gc(t, n, !1), Tt(e, t, o)
	;(r = t.stateNode), (mv.current = t)
	var l =
		s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = ir(t, e.child, null, o)), (t.child = ir(t, null, l, o)))
			: he(e, t, l, o),
		(t.memoizedState = r.state),
		i && gc(t, n, !0),
		t.child
	)
}
function Np(e) {
	var t = e.stateNode
	t.pendingContext
		? mc(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && mc(e, t.context, !1),
		Ua(e, t.containerInfo)
}
function Dc(e, t, n, r, i) {
	return rr(), Ma(i), (t.flags |= 256), he(e, t, n, r), t.child
}
var Kl = { dehydrated: null, treeContext: null, retryLane: 0 }
function Yl(e) {
	return { baseLanes: e, cachePool: null, transitions: null }
}
function xp(e, t, n) {
	var r = t.pendingProps,
		i = K.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		l
	if (
		((l = s) ||
			(l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		F(K, i & 1),
		e === null)
	)
		return (
			zl(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: 'hidden', children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = rs(s, r, 0, null)),
						  (e = mn(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Yl(n)),
						  (t.memoizedState = Kl),
						  e)
						: Xa(t, s))
		)
	if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return gv(e, t, s, r, l, i, n)
	if (o) {
		;(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling)
		var a = { mode: 'hidden', children: r.children }
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = a),
				  (t.deletions = null))
				: ((r = Bt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (o = Bt(l, o)) : ((o = mn(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? Yl(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Kl),
			r
		)
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = Bt(o, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	)
}
function Xa(e, t) {
	return (
		(t = rs({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	)
}
function Vi(e, t, n, r) {
	return (
		r !== null && Ma(r),
		ir(t, e.child, null, n),
		(e = Xa(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	)
}
function gv(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Bs(Error(T(422)))), Vi(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = rs({ mode: 'visible', children: r.children }, i, 0, null)),
			  (o = mn(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && ir(t, e.child, null, s),
			  (t.child.memoizedState = Yl(s)),
			  (t.memoizedState = Kl),
			  o)
	if (!(t.mode & 1)) return Vi(e, t, s, null)
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
		return (r = l), (o = Error(T(419))), (r = Bs(o, r, void 0)), Vi(e, t, s, r)
	}
	if (((l = (s & e.childLanes) !== 0), Ce || l)) {
		if (((r = re), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2
					break
				case 16:
					i = 8
					break
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32
					break
				case 536870912:
					i = 268435456
					break
				default:
					i = 0
			}
			;(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), Ct(e, i), Ze(r, e, i, -1))
		}
		return nu(), (r = Bs(Error(T(421)))), Vi(e, t, s, r)
	}
	return i.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Ov.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Oe = Ft(i.nextSibling)),
		  (Le = t),
		  (H = !0),
		  (qe = null),
		  e !== null &&
				((be[ze++] = gt),
				(be[ze++] = vt),
				(be[ze++] = yn),
				(gt = e.id),
				(vt = e.overflow),
				(yn = t)),
		  (t = Xa(t, r.children)),
		  (t.flags |= 4096),
		  t)
}
function Ic(e, t, n) {
	e.lanes |= t
	var r = e.alternate
	r !== null && (r.lanes |= t), Fl(e.return, t, n)
}
function Hs(e, t, n, r, i) {
	var o = e.memoizedState
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i))
}
function Ap(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail
	if ((he(e, t, r.children, n), (r = K.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128)
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Ic(e, n, t)
				else if (e.tag === 19) Ic(e, n, t)
				else if (e.child !== null) {
					;(e.child.return = e), (e = e.child)
					continue
				}
				if (e === t) break e
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e
					e = e.return
				}
				;(e.sibling.return = e.return), (e = e.sibling)
			}
		r &= 1
	}
	if ((F(K, r), !(t.mode & 1))) t.memoizedState = null
	else
		switch (i) {
			case 'forwards':
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && Po(e) === null && (i = n),
						(n = n.sibling)
				;(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Hs(t, !1, i, n, o)
				break
			case 'backwards':
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && Po(e) === null)) {
						t.child = i
						break
					}
					;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
				}
				Hs(t, !0, n, null, o)
				break
			case 'together':
				Hs(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
	return t.child
}
function so(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Tt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(wn |= t.lanes),
		!(n & t.childLanes))
	)
		return null
	if (e !== null && t.child !== e.child) throw Error(T(153))
	if (t.child !== null) {
		for (
			e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Bt(e, e.pendingProps)), (n.return = t)
		n.sibling = null
	}
	return t.child
}
function vv(e, t, n) {
	switch (t.tag) {
		case 3:
			Np(t), rr()
			break
		case 5:
			tp(t)
			break
		case 1:
			ke(t.type) && ko(t)
			break
		case 4:
			Ua(t, t.stateNode.containerInfo)
			break
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value
			F(Ao, r._currentValue), (r._currentValue = i)
			break
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (F(K, K.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? xp(e, t, n)
					: (F(K, K.current & 1),
					  (e = Tt(e, t, n)),
					  e !== null ? e.sibling : null)
			F(K, K.current & 1)
			break
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Ap(e, t, n)
				t.flags |= 128
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				F(K, K.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (t.lanes = 0), Tp(e, t, n)
	}
	return Tt(e, t, n)
}
var Op, Ql, Lp, Pp
Op = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === t) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
Ql = function () {}
Lp = function (e, t, n, r) {
	var i = e.memoizedProps
	if (i !== r) {
		;(e = t.stateNode), fn(lt.current)
		var o = null
		switch (n) {
			case 'input':
				;(i = gl(e, i)), (r = gl(e, r)), (o = [])
				break
			case 'select':
				;(i = Q({}, i, { value: void 0 })),
					(r = Q({}, r, { value: void 0 })),
					(o = [])
				break
			case 'textarea':
				;(i = yl(e, i)), (r = yl(e, r)), (o = [])
				break
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Co)
		}
		wl(n, r)
		var s
		n = null
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var l = i[u]
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Gr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
		for (u in r) {
			var a = r[u]
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === 'style')
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) ||
								(a && a.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ''))
						for (s in a)
							a.hasOwnProperty(s) &&
								l[s] !== a[s] &&
								(n || (n = {}), (n[s] = a[s]))
					} else n || (o || (o = []), o.push(u, n)), (n = a)
				else
					u === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
						  (l = l ? l.__html : void 0),
						  a != null && l !== a && (o = o || []).push(u, a))
						: u === 'children'
						? (typeof a != 'string' && typeof a != 'number') ||
						  (o = o || []).push(u, '' + a)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (Gr.hasOwnProperty(u)
								? (a != null && u === 'onScroll' && U('scroll', e),
								  o || l === a || (o = []))
								: (o = o || []).push(u, a))
		}
		n && (o = o || []).push('style', n)
		var u = o
		;(t.updateQueue = u) && (t.flags |= 4)
	}
}
Pp = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
}
function Lr(e, t) {
	if (!H)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling)
				n === null ? (e.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = e.tail
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling)
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null)
		}
}
function ce(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling)
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling)
	return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function _v(e, t, n) {
	var r = t.pendingProps
	switch (($a(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ce(t), null
		case 1:
			return ke(t.type) && To(), ce(t), null
		case 3:
			return (
				(r = t.stateNode),
				or(),
				W(Te),
				W(de),
				Ba(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(zi(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), qe !== null && (na(qe), (qe = null)))),
				Ql(e, t),
				ce(t),
				null
			)
		case 5:
			Wa(t)
			var i = fn(li.current)
			if (((n = t.type), e !== null && t.stateNode != null))
				Lp(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166))
					return ce(t), null
				}
				if (((e = fn(lt.current)), zi(t))) {
					;(r = t.stateNode), (n = t.type)
					var o = t.memoizedProps
					switch (((r[ot] = t), (r[oi] = o), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							U('cancel', r), U('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							U('load', r)
							break
						case 'video':
						case 'audio':
							for (i = 0; i < jr.length; i++) U(jr[i], r)
							break
						case 'source':
							U('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							U('error', r), U('load', r)
							break
						case 'details':
							U('toggle', r)
							break
						case 'input':
							Uu(r, o), U('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!o.multiple }),
								U('invalid', r)
							break
						case 'textarea':
							Bu(r, o), U('invalid', r)
					}
					wl(n, o), (i = null)
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s]
							s === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
									  (o.suppressHydrationWarning !== !0 &&
											bi(r.textContent, l, e),
									  (i = ['children', l]))
									: typeof l == 'number' &&
									  r.textContent !== '' + l &&
									  (o.suppressHydrationWarning !== !0 &&
											bi(r.textContent, l, e),
									  (i = ['children', '' + l]))
								: Gr.hasOwnProperty(s) &&
								  l != null &&
								  s === 'onScroll' &&
								  U('scroll', r)
						}
					switch (n) {
						case 'input':
							Li(r), Wu(r, o, !0)
							break
						case 'textarea':
							Li(r), Hu(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof o.onClick == 'function' && (r.onclick = Co)
					}
					;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
				} else {
					;(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = id(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = s.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === 'select' &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[ot] = t),
						(e[oi] = r),
						Op(e, t, !1, !1),
						(t.stateNode = e)
					e: {
						switch (((s = Sl(n, r)), n)) {
							case 'dialog':
								U('cancel', e), U('close', e), (i = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								U('load', e), (i = r)
								break
							case 'video':
							case 'audio':
								for (i = 0; i < jr.length; i++) U(jr[i], e)
								i = r
								break
							case 'source':
								U('error', e), (i = r)
								break
							case 'img':
							case 'image':
							case 'link':
								U('error', e), U('load', e), (i = r)
								break
							case 'details':
								U('toggle', e), (i = r)
								break
							case 'input':
								Uu(e, r), (i = gl(e, r)), U('invalid', e)
								break
							case 'option':
								i = r
								break
							case 'select':
								;(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = Q({}, r, { value: void 0 })),
									U('invalid', e)
								break
							case 'textarea':
								Bu(e, r), (i = yl(e, r)), U('invalid', e)
								break
							default:
								i = r
						}
						wl(n, i), (l = i)
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var a = l[o]
								o === 'style'
									? ld(e, a)
									: o === 'dangerouslySetInnerHTML'
									? ((a = a ? a.__html : void 0), a != null && od(e, a))
									: o === 'children'
									? typeof a == 'string'
										? (n !== 'textarea' || a !== '') && Xr(e, a)
										: typeof a == 'number' && Xr(e, '' + a)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  (Gr.hasOwnProperty(o)
											? a != null && o === 'onScroll' && U('scroll', e)
											: a != null && Ea(e, o, a, s))
							}
						switch (n) {
							case 'input':
								Li(e), Wu(e, r, !1)
								break
							case 'textarea':
								Li(e), Hu(e)
								break
							case 'option':
								r.value != null && e.setAttribute('value', '' + Kt(r.value))
								break
							case 'select':
								;(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Gn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Gn(e, !!r.multiple, r.defaultValue, !0)
								break
							default:
								typeof i.onClick == 'function' && (e.onclick = Co)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
			}
			return ce(t), null
		case 6:
			if (e && t.stateNode != null) Pp(e, t, e.memoizedProps, r)
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(T(166))
				if (((n = fn(li.current)), fn(lt.current), zi(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[ot] = t),
						(o = r.nodeValue !== n) && ((e = Le), e !== null))
					)
						switch (e.tag) {
							case 3:
								bi(r.nodeValue, n, (e.mode & 1) !== 0)
								break
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									bi(r.nodeValue, n, (e.mode & 1) !== 0)
						}
					o && (t.flags |= 4)
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[ot] = t),
						(t.stateNode = r)
			}
			return ce(t), null
		case 13:
			if (
				(W(K),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (H && Oe !== null && t.mode & 1 && !(t.flags & 128))
					Qd(), rr(), (t.flags |= 98560), (o = !1)
				else if (((o = zi(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(T(318))
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(T(317))
						o[ot] = t
					} else
						rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
					ce(t), (o = !1)
				} else qe !== null && (na(qe), (qe = null)), (o = !0)
				if (!o) return t.flags & 65536 ? t : null
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || K.current & 1 ? te === 0 && (te = 3) : nu())),
				  t.updateQueue !== null && (t.flags |= 4),
				  ce(t),
				  null)
		case 4:
			return (
				or(), Ql(e, t), e === null && ri(t.stateNode.containerInfo), ce(t), null
			)
		case 10:
			return za(t.type._context), ce(t), null
		case 17:
			return ke(t.type) && To(), ce(t), null
		case 19:
			if ((W(K), (o = t.memoizedState), o === null)) return ce(t), null
			if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) Lr(o, !1)
				else {
					if (te !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = Po(e)), s !== null)) {
								for (
									t.flags |= 128,
										Lr(o, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling)
								return F(K, (K.current & 1) | 2), t.child
							}
							e = e.sibling
						}
					o.tail !== null &&
						J() > lr &&
						((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304))
				}
			else {
				if (!r)
					if (((e = Po(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Lr(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !s.alternate && !H)
						)
							return ce(t), null
					} else
						2 * J() - o.renderingStartTime > lr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304))
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (o.last = s))
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = J()),
				  (t.sibling = null),
				  (n = K.current),
				  F(K, r ? (n & 1) | 2 : n & 1),
				  t)
				: (ce(t), null)
		case 22:
		case 23:
			return (
				tu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ae & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: ce(t),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(T(156, t.tag))
}
function yv(e, t) {
	switch (($a(t), t.tag)) {
		case 1:
			return (
				ke(t.type) && To(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 3:
			return (
				or(),
				W(Te),
				W(de),
				Ba(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 5:
			return Wa(t), null
		case 13:
			if ((W(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(T(340))
				rr()
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 19:
			return W(K), null
		case 4:
			return or(), null
		case 10:
			return za(t.type._context), null
		case 22:
		case 23:
			return tu(), null
		case 24:
			return null
		default:
			return null
	}
}
var Ui = !1,
	fe = !1,
	Ev = typeof WeakSet == 'function' ? WeakSet : Set,
	L = null
function Kn(e, t) {
	var n = e.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				G(e, t, r)
			}
		else n.current = null
}
function Gl(e, t, n) {
	try {
		n()
	} catch (r) {
		G(e, t, r)
	}
}
var Rc = !1
function wv(e, t) {
	if (((Dl = Eo), (e = $d()), Ia(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd }
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var i = r.anchorOffset,
						o = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, o.nodeType
					} catch {
						n = null
						break e
					}
					var s = 0,
						l = -1,
						a = -1,
						u = 0,
						c = 0,
						p = e,
						m = null
					t: for (;;) {
						for (
							var v;
							p !== n || (i !== 0 && p.nodeType !== 3) || (l = s + i),
								p !== o || (r !== 0 && p.nodeType !== 3) || (a = s + r),
								p.nodeType === 3 && (s += p.nodeValue.length),
								(v = p.firstChild) !== null;

						)
							(m = p), (p = v)
						for (;;) {
							if (p === e) break t
							if (
								(m === n && ++u === i && (l = s),
								m === o && ++c === r && (a = s),
								(v = p.nextSibling) !== null)
							)
								break
							;(p = m), (m = p.parentNode)
						}
						p = v
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (Il = { focusedElem: e, selectionRange: n }, Eo = !1, L = t; L !== null; )
		if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (L = e)
		else
			for (; L !== null; ) {
				t = L
				try {
					var y = t.alternate
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (y !== null) {
									var _ = y.memoizedProps,
										w = y.memoizedState,
										d = t.stateNode,
										f = d.getSnapshotBeforeUpdate(
											t.elementType === t.type ? _ : Ge(t.type, _),
											w
										)
									d.__reactInternalSnapshotBeforeUpdate = f
								}
								break
							case 3:
								var h = t.stateNode.containerInfo
								h.nodeType === 1
									? (h.textContent = '')
									: h.nodeType === 9 &&
									  h.documentElement &&
									  h.removeChild(h.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(T(163))
						}
				} catch (g) {
					G(t, t.return, g)
				}
				if (((e = t.sibling), e !== null)) {
					;(e.return = t.return), (L = e)
					break
				}
				L = t.return
			}
	return (y = Rc), (Rc = !1), y
}
function Br(e, t, n) {
	var r = t.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next)
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy
				;(i.destroy = void 0), o !== void 0 && Gl(t, n, o)
			}
			i = i.next
		} while (i !== r)
	}
}
function ts(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next)
		do {
			if ((n.tag & e) === e) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}
function Xl(e) {
	var t = e.ref
	if (t !== null) {
		var n = e.stateNode
		switch (e.tag) {
			case 5:
				e = n
				break
			default:
				e = n
		}
		typeof t == 'function' ? t(e) : (t.current = e)
	}
}
function Dp(e) {
	var t = e.alternate
	t !== null && ((e.alternate = null), Dp(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[ot], delete t[oi], delete t[Ml], delete t[rv], delete t[iv])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null)
}
function Ip(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function $c(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Ip(e.return)) return null
			e = e.return
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e
			;(e.child.return = e), (e = e.child)
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}
function ql(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Co))
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), (e = e.sibling)
}
function Jl(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), (e = e.sibling)
}
var se = null,
	Xe = !1
function At(e, t, n) {
	for (n = n.child; n !== null; ) Rp(e, t, n), (n = n.sibling)
}
function Rp(e, t, n) {
	if (st && typeof st.onCommitFiberUnmount == 'function')
		try {
			st.onCommitFiberUnmount(Yo, n)
		} catch {}
	switch (n.tag) {
		case 5:
			fe || Kn(n, t)
		case 6:
			var r = se,
				i = Xe
			;(se = null),
				At(e, t, n),
				(se = r),
				(Xe = i),
				se !== null &&
					(Xe
						? ((e = se),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: se.removeChild(n.stateNode))
			break
		case 18:
			se !== null &&
				(Xe
					? ((e = se),
					  (n = n.stateNode),
					  e.nodeType === 8
							? bs(e.parentNode, n)
							: e.nodeType === 1 && bs(e, n),
					  ei(e))
					: bs(se, n.stateNode))
			break
		case 4:
			;(r = se),
				(i = Xe),
				(se = n.stateNode.containerInfo),
				(Xe = !0),
				At(e, t, n),
				(se = r),
				(Xe = i)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!fe &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next
				do {
					var o = i,
						s = o.destroy
					;(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && Gl(n, t, s),
						(i = i.next)
				} while (i !== r)
			}
			At(e, t, n)
			break
		case 1:
			if (
				!fe &&
				(Kn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					;(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount()
				} catch (l) {
					G(n, t, l)
				}
			At(e, t, n)
			break
		case 21:
			At(e, t, n)
			break
		case 22:
			n.mode & 1
				? ((fe = (r = fe) || n.memoizedState !== null), At(e, t, n), (fe = r))
				: At(e, t, n)
			break
		default:
			At(e, t, n)
	}
}
function Mc(e) {
	var t = e.updateQueue
	if (t !== null) {
		e.updateQueue = null
		var n = e.stateNode
		n === null && (n = e.stateNode = new Ev()),
			t.forEach(function (r) {
				var i = Lv.bind(null, e, r)
				n.has(r) || (n.add(r), r.then(i, i))
			})
	}
}
function Qe(e, t) {
	var n = t.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r]
			try {
				var o = e,
					s = t,
					l = s
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							;(se = l.stateNode), (Xe = !1)
							break e
						case 3:
							;(se = l.stateNode.containerInfo), (Xe = !0)
							break e
						case 4:
							;(se = l.stateNode.containerInfo), (Xe = !0)
							break e
					}
					l = l.return
				}
				if (se === null) throw Error(T(160))
				Rp(o, s, i), (se = null), (Xe = !1)
				var a = i.alternate
				a !== null && (a.return = null), (i.return = null)
			} catch (u) {
				G(i, t, u)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) $p(t, e), (t = t.sibling)
}
function $p(e, t) {
	var n = e.alternate,
		r = e.flags
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Qe(t, e), rt(e), r & 4)) {
				try {
					Br(3, e, e.return), ts(3, e)
				} catch (_) {
					G(e, e.return, _)
				}
				try {
					Br(5, e, e.return)
				} catch (_) {
					G(e, e.return, _)
				}
			}
			break
		case 1:
			Qe(t, e), rt(e), r & 512 && n !== null && Kn(n, n.return)
			break
		case 5:
			if (
				(Qe(t, e),
				rt(e),
				r & 512 && n !== null && Kn(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode
				try {
					Xr(i, '')
				} catch (_) {
					G(e, e.return, _)
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					l = e.type,
					a = e.updateQueue
				if (((e.updateQueue = null), a !== null))
					try {
						l === 'input' && o.type === 'radio' && o.name != null && nd(i, o),
							Sl(l, s)
						var u = Sl(l, o)
						for (s = 0; s < a.length; s += 2) {
							var c = a[s],
								p = a[s + 1]
							c === 'style'
								? ld(i, p)
								: c === 'dangerouslySetInnerHTML'
								? od(i, p)
								: c === 'children'
								? Xr(i, p)
								: Ea(i, c, p, u)
						}
						switch (l) {
							case 'input':
								vl(i, o)
								break
							case 'textarea':
								rd(i, o)
								break
							case 'select':
								var m = i._wrapperState.wasMultiple
								i._wrapperState.wasMultiple = !!o.multiple
								var v = o.value
								v != null
									? Gn(i, !!o.multiple, v, !1)
									: m !== !!o.multiple &&
									  (o.defaultValue != null
											? Gn(i, !!o.multiple, o.defaultValue, !0)
											: Gn(i, !!o.multiple, o.multiple ? [] : '', !1))
						}
						i[oi] = o
					} catch (_) {
						G(e, e.return, _)
					}
			}
			break
		case 6:
			if ((Qe(t, e), rt(e), r & 4)) {
				if (e.stateNode === null) throw Error(T(162))
				;(i = e.stateNode), (o = e.memoizedProps)
				try {
					i.nodeValue = o
				} catch (_) {
					G(e, e.return, _)
				}
			}
			break
		case 3:
			if (
				(Qe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					ei(t.containerInfo)
				} catch (_) {
					G(e, e.return, _)
				}
			break
		case 4:
			Qe(t, e), rt(e)
			break
		case 13:
			Qe(t, e),
				rt(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Za = J())),
				r & 4 && Mc(e)
			break
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((fe = (u = fe) || c), Qe(t, e), (fe = u)) : Qe(t, e),
				rt(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (L = e, c = e.child; c !== null; ) {
						for (p = L = c; L !== null; ) {
							switch (((m = L), (v = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Br(4, m, m.return)
									break
								case 1:
									Kn(m, m.return)
									var y = m.stateNode
									if (typeof y.componentWillUnmount == 'function') {
										;(r = m), (n = m.return)
										try {
											;(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount()
										} catch (_) {
											G(r, n, _)
										}
									}
									break
								case 5:
									Kn(m, m.return)
									break
								case 22:
									if (m.memoizedState !== null) {
										bc(p)
										continue
									}
							}
							v !== null ? ((v.return = m), (L = v)) : bc(p)
						}
						c = c.sibling
					}
				e: for (c = null, p = e; ; ) {
					if (p.tag === 5) {
						if (c === null) {
							c = p
							try {
								;(i = p.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((l = p.stateNode),
										  (a = p.memoizedProps.style),
										  (s =
												a != null && a.hasOwnProperty('display')
													? a.display
													: null),
										  (l.style.display = sd('display', s)))
							} catch (_) {
								G(e, e.return, _)
							}
						}
					} else if (p.tag === 6) {
						if (c === null)
							try {
								p.stateNode.nodeValue = u ? '' : p.memoizedProps
							} catch (_) {
								G(e, e.return, _)
							}
					} else if (
						((p.tag !== 22 && p.tag !== 23) ||
							p.memoizedState === null ||
							p === e) &&
						p.child !== null
					) {
						;(p.child.return = p), (p = p.child)
						continue
					}
					if (p === e) break e
					for (; p.sibling === null; ) {
						if (p.return === null || p.return === e) break e
						c === p && (c = null), (p = p.return)
					}
					c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling)
				}
			}
			break
		case 19:
			Qe(t, e), rt(e), r & 4 && Mc(e)
			break
		case 21:
			break
		default:
			Qe(t, e), rt(e)
	}
}
function rt(e) {
	var t = e.flags
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Ip(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(T(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode
					r.flags & 32 && (Xr(i, ''), (r.flags &= -33))
					var o = $c(e)
					Jl(e, o, i)
					break
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = $c(e)
					ql(e, l, s)
					break
				default:
					throw Error(T(161))
			}
		} catch (a) {
			G(e, e.return, a)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}
function Sv(e, t, n) {
	;(L = e), Mp(e)
}
function Mp(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var i = L,
			o = i.child
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Ui
			if (!s) {
				var l = i.alternate,
					a = (l !== null && l.memoizedState !== null) || fe
				l = Ui
				var u = fe
				if (((Ui = s), (fe = a) && !u))
					for (L = i; L !== null; )
						(s = L),
							(a = s.child),
							s.tag === 22 && s.memoizedState !== null
								? zc(i)
								: a !== null
								? ((a.return = s), (L = a))
								: zc(i)
				for (; o !== null; ) (L = o), Mp(o), (o = o.sibling)
				;(L = i), (Ui = l), (fe = u)
			}
			jc(e)
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : jc(e)
	}
}
function jc(e) {
	for (; L !== null; ) {
		var t = L
		if (t.flags & 8772) {
			var n = t.alternate
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							fe || ts(5, t)
							break
						case 1:
							var r = t.stateNode
							if (t.flags & 4 && !fe)
								if (n === null) r.componentDidMount()
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Ge(t.type, n.memoizedProps)
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									)
								}
							var o = t.updateQueue
							o !== null && Ec(t, o, r)
							break
						case 3:
							var s = t.updateQueue
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode
											break
										case 1:
											n = t.child.stateNode
									}
								Ec(t, s, n)
							}
							break
						case 5:
							var l = t.stateNode
							if (n === null && t.flags & 4) {
								n = l
								var a = t.memoizedProps
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus()
										break
									case 'img':
										a.src && (n.src = a.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate
								if (u !== null) {
									var c = u.memoizedState
									if (c !== null) {
										var p = c.dehydrated
										p !== null && ei(p)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(T(163))
					}
				fe || (t.flags & 512 && Xl(t))
			} catch (m) {
				G(t, t.return, m)
			}
		}
		if (t === e) {
			L = null
			break
		}
		if (((n = t.sibling), n !== null)) {
			;(n.return = t.return), (L = n)
			break
		}
		L = t.return
	}
}
function bc(e) {
	for (; L !== null; ) {
		var t = L
		if (t === e) {
			L = null
			break
		}
		var n = t.sibling
		if (n !== null) {
			;(n.return = t.return), (L = n)
			break
		}
		L = t.return
	}
}
function zc(e) {
	for (; L !== null; ) {
		var t = L
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return
					try {
						ts(4, t)
					} catch (a) {
						G(t, n, a)
					}
					break
				case 1:
					var r = t.stateNode
					if (typeof r.componentDidMount == 'function') {
						var i = t.return
						try {
							r.componentDidMount()
						} catch (a) {
							G(t, i, a)
						}
					}
					var o = t.return
					try {
						Xl(t)
					} catch (a) {
						G(t, o, a)
					}
					break
				case 5:
					var s = t.return
					try {
						Xl(t)
					} catch (a) {
						G(t, s, a)
					}
			}
		} catch (a) {
			G(t, t.return, a)
		}
		if (t === e) {
			L = null
			break
		}
		var l = t.sibling
		if (l !== null) {
			;(l.return = t.return), (L = l)
			break
		}
		L = t.return
	}
}
var Cv = Math.ceil,
	Ro = Nt.ReactCurrentDispatcher,
	qa = Nt.ReactCurrentOwner,
	Ve = Nt.ReactCurrentBatchConfig,
	j = 0,
	re = null,
	Z = null,
	le = 0,
	Ae = 0,
	Yn = Jt(0),
	te = 0,
	fi = null,
	wn = 0,
	ns = 0,
	Ja = 0,
	Hr = null,
	we = null,
	Za = 0,
	lr = 1 / 0,
	ht = null,
	$o = !1,
	Zl = null,
	Ut = null,
	Wi = !1,
	$t = null,
	Mo = 0,
	Kr = 0,
	ea = null,
	lo = -1,
	ao = 0
function me() {
	return j & 6 ? J() : lo !== -1 ? lo : (lo = J())
}
function Wt(e) {
	return e.mode & 1
		? j & 2 && le !== 0
			? le & -le
			: sv.transition !== null
			? (ao === 0 && (ao = yd()), ao)
			: ((e = z),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nd(e.type))),
			  e)
		: 1
}
function Ze(e, t, n, r) {
	if (50 < Kr) throw ((Kr = 0), (ea = null), Error(T(185)))
	gi(e, n, r),
		(!(j & 2) || e !== re) &&
			(e === re && (!(j & 2) && (ns |= n), te === 4 && It(e, le)),
			Ne(e, r),
			n === 1 && j === 0 && !(t.mode & 1) && ((lr = J() + 500), Jo && Zt()))
}
function Ne(e, t) {
	var n = e.callbackNode
	sg(e, t)
	var r = yo(e, e === re ? le : 0)
	if (r === 0)
		n !== null && Qu(n), (e.callbackNode = null), (e.callbackPriority = 0)
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Qu(n), t === 1))
			e.tag === 0 ? ov(Fc.bind(null, e)) : Hd(Fc.bind(null, e)),
				tv(function () {
					!(j & 6) && Zt()
				}),
				(n = null)
		else {
			switch (Ed(r)) {
				case 1:
					n = ka
					break
				case 4:
					n = vd
					break
				case 16:
					n = _o
					break
				case 536870912:
					n = _d
					break
				default:
					n = _o
			}
			n = Bp(n, jp.bind(null, e))
		}
		;(e.callbackPriority = t), (e.callbackNode = n)
	}
}
function jp(e, t) {
	if (((lo = -1), (ao = 0), j & 6)) throw Error(T(327))
	var n = e.callbackNode
	if (er() && e.callbackNode !== n) return null
	var r = yo(e, e === re ? le : 0)
	if (r === 0) return null
	if (r & 30 || r & e.expiredLanes || t) t = jo(e, r)
	else {
		t = r
		var i = j
		j |= 2
		var o = zp()
		;(re !== e || le !== t) && ((ht = null), (lr = J() + 500), hn(e, t))
		do
			try {
				Nv()
				break
			} catch (l) {
				bp(e, l)
			}
		while (!0)
		ba(),
			(Ro.current = o),
			(j = i),
			Z !== null ? (t = 0) : ((re = null), (le = 0), (t = te))
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = xl(e)), i !== 0 && ((r = i), (t = ta(e, i)))), t === 1)
		)
			throw ((n = fi), hn(e, 0), It(e, r), Ne(e, J()), n)
		if (t === 6) It(e, r)
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Tv(i) &&
					((t = jo(e, r)),
					t === 2 && ((o = xl(e)), o !== 0 && ((r = o), (t = ta(e, o)))),
					t === 1))
			)
				throw ((n = fi), hn(e, 0), It(e, r), Ne(e, J()), n)
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(T(345))
				case 2:
					an(e, we, ht)
					break
				case 3:
					if (
						(It(e, r), (r & 130023424) === r && ((t = Za + 500 - J()), 10 < t))
					) {
						if (yo(e, 0) !== 0) break
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							me(), (e.pingedLanes |= e.suspendedLanes & i)
							break
						}
						e.timeoutHandle = $l(an.bind(null, e, we, ht), t)
						break
					}
					an(e, we, ht)
					break
				case 4:
					if ((It(e, r), (r & 4194240) === r)) break
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Je(r)
						;(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o)
					}
					if (
						((r = i),
						(r = J() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Cv(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = $l(an.bind(null, e, we, ht), r)
						break
					}
					an(e, we, ht)
					break
				case 5:
					an(e, we, ht)
					break
				default:
					throw Error(T(329))
			}
		}
	}
	return Ne(e, J()), e.callbackNode === n ? jp.bind(null, e) : null
}
function ta(e, t) {
	var n = Hr
	return (
		e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
		(e = jo(e, t)),
		e !== 2 && ((t = we), (we = n), t !== null && na(t)),
		e
	)
}
function na(e) {
	we === null ? (we = e) : we.push.apply(we, e)
}
function Tv(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot
					i = i.value
					try {
						if (!et(o(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n)
		else {
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0
				t = t.return
			}
			;(t.sibling.return = t.return), (t = t.sibling)
		}
	}
	return !0
}
function It(e, t) {
	for (
		t &= ~Ja,
			t &= ~ns,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Je(t),
			r = 1 << n
		;(e[n] = -1), (t &= ~r)
	}
}
function Fc(e) {
	if (j & 6) throw Error(T(327))
	er()
	var t = yo(e, 0)
	if (!(t & 1)) return Ne(e, J()), null
	var n = jo(e, t)
	if (e.tag !== 0 && n === 2) {
		var r = xl(e)
		r !== 0 && ((t = r), (n = ta(e, r)))
	}
	if (n === 1) throw ((n = fi), hn(e, 0), It(e, t), Ne(e, J()), n)
	if (n === 6) throw Error(T(345))
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		an(e, we, ht),
		Ne(e, J()),
		null
	)
}
function eu(e, t) {
	var n = j
	j |= 1
	try {
		return e(t)
	} finally {
		;(j = n), j === 0 && ((lr = J() + 500), Jo && Zt())
	}
}
function Sn(e) {
	$t !== null && $t.tag === 0 && !(j & 6) && er()
	var t = j
	j |= 1
	var n = Ve.transition,
		r = z
	try {
		if (((Ve.transition = null), (z = 1), e)) return e()
	} finally {
		;(z = r), (Ve.transition = n), (j = t), !(j & 6) && Zt()
	}
}
function tu() {
	;(Ae = Yn.current), W(Yn)
}
function hn(e, t) {
	;(e.finishedWork = null), (e.finishedLanes = 0)
	var n = e.timeoutHandle
	if ((n !== -1 && ((e.timeoutHandle = -1), ev(n)), Z !== null))
		for (n = Z.return; n !== null; ) {
			var r = n
			switch (($a(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && To()
					break
				case 3:
					or(), W(Te), W(de), Ba()
					break
				case 5:
					Wa(r)
					break
				case 4:
					or()
					break
				case 13:
					W(K)
					break
				case 19:
					W(K)
					break
				case 10:
					za(r.type._context)
					break
				case 22:
				case 23:
					tu()
			}
			n = n.return
		}
	if (
		((re = e),
		(Z = e = Bt(e.current, null)),
		(le = Ae = t),
		(te = 0),
		(fi = null),
		(Ja = ns = wn = 0),
		(we = Hr = null),
		cn !== null)
	) {
		for (t = 0; t < cn.length; t++)
			if (((n = cn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var i = r.next,
					o = n.pending
				if (o !== null) {
					var s = o.next
					;(o.next = i), (r.next = s)
				}
				n.pending = r
			}
		cn = null
	}
	return e
}
function bp(e, t) {
	do {
		var n = Z
		try {
			if ((ba(), (io.current = Io), Do)) {
				for (var r = Y.memoizedState; r !== null; ) {
					var i = r.queue
					i !== null && (i.pending = null), (r = r.next)
				}
				Do = !1
			}
			if (
				((En = 0),
				(ne = ee = Y = null),
				(Wr = !1),
				(ai = 0),
				(qa.current = null),
				n === null || n.return === null)
			) {
				;(te = 1), (fi = t), (Z = null)
				break
			}
			e: {
				var o = e,
					s = n.return,
					l = n,
					a = t
				if (
					((t = le),
					(l.flags |= 32768),
					a !== null && typeof a == 'object' && typeof a.then == 'function')
				) {
					var u = a,
						c = l,
						p = c.tag
					if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var m = c.alternate
						m
							? ((c.updateQueue = m.updateQueue),
							  (c.memoizedState = m.memoizedState),
							  (c.lanes = m.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null))
					}
					var v = xc(s)
					if (v !== null) {
						;(v.flags &= -257),
							Ac(v, s, l, o, t),
							v.mode & 1 && Nc(o, u, t),
							(t = v),
							(a = u)
						var y = t.updateQueue
						if (y === null) {
							var _ = new Set()
							_.add(a), (t.updateQueue = _)
						} else y.add(a)
						break e
					} else {
						if (!(t & 1)) {
							Nc(o, u, t), nu()
							break e
						}
						a = Error(T(426))
					}
				} else if (H && l.mode & 1) {
					var w = xc(s)
					if (w !== null) {
						!(w.flags & 65536) && (w.flags |= 256),
							Ac(w, s, l, o, t),
							Ma(sr(a, l))
						break e
					}
				}
				;(o = a = sr(a, l)),
					te !== 4 && (te = 2),
					Hr === null ? (Hr = [o]) : Hr.push(o),
					(o = s)
				do {
					switch (o.tag) {
						case 3:
							;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
							var d = wp(o, a, t)
							yc(o, d)
							break e
						case 1:
							l = a
							var f = o.type,
								h = o.stateNode
							if (
								!(o.flags & 128) &&
								(typeof f.getDerivedStateFromError == 'function' ||
									(h !== null &&
										typeof h.componentDidCatch == 'function' &&
										(Ut === null || !Ut.has(h))))
							) {
								;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
								var g = Sp(o, l, t)
								yc(o, g)
								break e
							}
					}
					o = o.return
				} while (o !== null)
			}
			Vp(n)
		} catch (S) {
			;(t = S), Z === n && n !== null && (Z = n = n.return)
			continue
		}
		break
	} while (!0)
}
function zp() {
	var e = Ro.current
	return (Ro.current = Io), e === null ? Io : e
}
function nu() {
	;(te === 0 || te === 3 || te === 2) && (te = 4),
		re === null || (!(wn & 268435455) && !(ns & 268435455)) || It(re, le)
}
function jo(e, t) {
	var n = j
	j |= 2
	var r = zp()
	;(re !== e || le !== t) && ((ht = null), hn(e, t))
	do
		try {
			kv()
			break
		} catch (i) {
			bp(e, i)
		}
	while (!0)
	if ((ba(), (j = n), (Ro.current = r), Z !== null)) throw Error(T(261))
	return (re = null), (le = 0), te
}
function kv() {
	for (; Z !== null; ) Fp(Z)
}
function Nv() {
	for (; Z !== null && !qm(); ) Fp(Z)
}
function Fp(e) {
	var t = Wp(e.alternate, e, Ae)
	;(e.memoizedProps = e.pendingProps),
		t === null ? Vp(e) : (Z = t),
		(qa.current = null)
}
function Vp(e) {
	var t = e
	do {
		var n = t.alternate
		if (((e = t.return), t.flags & 32768)) {
			if (((n = yv(n, t)), n !== null)) {
				;(n.flags &= 32767), (Z = n)
				return
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
			else {
				;(te = 6), (Z = null)
				return
			}
		} else if (((n = _v(n, t, Ae)), n !== null)) {
			Z = n
			return
		}
		if (((t = t.sibling), t !== null)) {
			Z = t
			return
		}
		Z = t = e
	} while (t !== null)
	te === 0 && (te = 5)
}
function an(e, t, n) {
	var r = z,
		i = Ve.transition
	try {
		;(Ve.transition = null), (z = 1), xv(e, t, n, r)
	} finally {
		;(Ve.transition = i), (z = r)
	}
	return null
}
function xv(e, t, n, r) {
	do er()
	while ($t !== null)
	if (j & 6) throw Error(T(327))
	n = e.finishedWork
	var i = e.finishedLanes
	if (n === null) return null
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(T(177))
	;(e.callbackNode = null), (e.callbackPriority = 0)
	var o = n.lanes | n.childLanes
	if (
		(lg(e, o),
		e === re && ((Z = re = null), (le = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Wi ||
			((Wi = !0),
			Bp(_o, function () {
				return er(), null
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		;(o = Ve.transition), (Ve.transition = null)
		var s = z
		z = 1
		var l = j
		;(j |= 4),
			(qa.current = null),
			wv(e, n),
			$p(n, e),
			Yg(Il),
			(Eo = !!Dl),
			(Il = Dl = null),
			(e.current = n),
			Sv(n),
			Jm(),
			(j = l),
			(z = s),
			(Ve.transition = o)
	} else e.current = n
	if (
		(Wi && ((Wi = !1), ($t = e), (Mo = i)),
		(o = e.pendingLanes),
		o === 0 && (Ut = null),
		tg(n.stateNode),
		Ne(e, J()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
	if ($o) throw (($o = !1), (e = Zl), (Zl = null), e)
	return (
		Mo & 1 && e.tag !== 0 && er(),
		(o = e.pendingLanes),
		o & 1 ? (e === ea ? Kr++ : ((Kr = 0), (ea = e))) : (Kr = 0),
		Zt(),
		null
	)
}
function er() {
	if ($t !== null) {
		var e = Ed(Mo),
			t = Ve.transition,
			n = z
		try {
			if (((Ve.transition = null), (z = 16 > e ? 16 : e), $t === null))
				var r = !1
			else {
				if (((e = $t), ($t = null), (Mo = 0), j & 6)) throw Error(T(331))
				var i = j
				for (j |= 4, L = e.current; L !== null; ) {
					var o = L,
						s = o.child
					if (L.flags & 16) {
						var l = o.deletions
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a]
								for (L = u; L !== null; ) {
									var c = L
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Br(8, c, o)
									}
									var p = c.child
									if (p !== null) (p.return = c), (L = p)
									else
										for (; L !== null; ) {
											c = L
											var m = c.sibling,
												v = c.return
											if ((Dp(c), c === u)) {
												L = null
												break
											}
											if (m !== null) {
												;(m.return = v), (L = m)
												break
											}
											L = v
										}
								}
							}
							var y = o.alternate
							if (y !== null) {
								var _ = y.child
								if (_ !== null) {
									y.child = null
									do {
										var w = _.sibling
										;(_.sibling = null), (_ = w)
									} while (_ !== null)
								}
							}
							L = o
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s)
					else
						e: for (; L !== null; ) {
							if (((o = L), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Br(9, o, o.return)
								}
							var d = o.sibling
							if (d !== null) {
								;(d.return = o.return), (L = d)
								break e
							}
							L = o.return
						}
				}
				var f = e.current
				for (L = f; L !== null; ) {
					s = L
					var h = s.child
					if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (L = h)
					else
						e: for (s = f; L !== null; ) {
							if (((l = L), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											ts(9, l)
									}
								} catch (S) {
									G(l, l.return, S)
								}
							if (l === s) {
								L = null
								break e
							}
							var g = l.sibling
							if (g !== null) {
								;(g.return = l.return), (L = g)
								break e
							}
							L = l.return
						}
				}
				if (
					((j = i), Zt(), st && typeof st.onPostCommitFiberRoot == 'function')
				)
					try {
						st.onPostCommitFiberRoot(Yo, e)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(z = n), (Ve.transition = t)
		}
	}
	return !1
}
function Vc(e, t, n) {
	;(t = sr(n, t)),
		(t = wp(e, t, 1)),
		(e = Vt(e, t, 1)),
		(t = me()),
		e !== null && (gi(e, 1, t), Ne(e, t))
}
function G(e, t, n) {
	if (e.tag === 3) Vc(e, e, n)
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Vc(t, e, n)
				break
			} else if (t.tag === 1) {
				var r = t.stateNode
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Ut === null || !Ut.has(r)))
				) {
					;(e = sr(n, e)),
						(e = Sp(t, e, 1)),
						(t = Vt(t, e, 1)),
						(e = me()),
						t !== null && (gi(t, 1, e), Ne(t, e))
					break
				}
			}
			t = t.return
		}
}
function Av(e, t, n) {
	var r = e.pingCache
	r !== null && r.delete(t),
		(t = me()),
		(e.pingedLanes |= e.suspendedLanes & n),
		re === e &&
			(le & n) === n &&
			(te === 4 || (te === 3 && (le & 130023424) === le && 500 > J() - Za)
				? hn(e, 0)
				: (Ja |= n)),
		Ne(e, t)
}
function Up(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Ii), (Ii <<= 1), !(Ii & 130023424) && (Ii = 4194304))
			: (t = 1))
	var n = me()
	;(e = Ct(e, t)), e !== null && (gi(e, t, n), Ne(e, n))
}
function Ov(e) {
	var t = e.memoizedState,
		n = 0
	t !== null && (n = t.retryLane), Up(e, n)
}
function Lv(e, t) {
	var n = 0
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState
			i !== null && (n = i.retryLane)
			break
		case 19:
			r = e.stateNode
			break
		default:
			throw Error(T(314))
	}
	r !== null && r.delete(t), Up(e, n)
}
var Wp
Wp = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), vv(e, t, n)
			Ce = !!(e.flags & 131072)
		}
	else (Ce = !1), H && t.flags & 1048576 && Kd(t, xo, t.index)
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type
			so(e, t), (e = t.pendingProps)
			var i = nr(t, de.current)
			Zn(t, n), (i = Ka(null, t, r, e, i, n))
			var o = Ya()
			return (
				(t.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  ke(r) ? ((o = !0), ko(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  Va(t),
					  (i.updater = Zo),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  Ul(t, r, e, n),
					  (t = Hl(null, t, r, !0, o, n)))
					: ((t.tag = 0), H && o && Ra(t), he(null, t, i, n), (t = t.child)),
				t
			)
		case 16:
			r = t.elementType
			e: {
				switch (
					(so(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Dv(r)),
					(e = Ge(r, e)),
					i)
				) {
					case 0:
						t = Bl(null, t, r, e, n)
						break e
					case 1:
						t = Pc(null, t, r, e, n)
						break e
					case 11:
						t = Oc(null, t, r, e, n)
						break e
					case 14:
						t = Lc(null, t, r, Ge(r.type, e), n)
						break e
				}
				throw Error(T(306, r, ''))
			}
			return t
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ge(r, i)),
				Bl(e, t, r, i, n)
			)
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ge(r, i)),
				Pc(e, t, r, i, n)
			)
		case 3:
			e: {
				if ((Np(t), e === null)) throw Error(T(387))
				;(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					Xd(e, t),
					Lo(t, r, null, n)
				var s = t.memoizedState
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						;(i = sr(Error(T(423)), t)), (t = Dc(e, t, r, n, i))
						break e
					} else if (r !== i) {
						;(i = sr(Error(T(424)), t)), (t = Dc(e, t, r, n, i))
						break e
					} else
						for (
							Oe = Ft(t.stateNode.containerInfo.firstChild),
								Le = t,
								H = !0,
								qe = null,
								n = ep(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((rr(), r === i)) {
						t = Tt(e, t, n)
						break e
					}
					he(e, t, r, n)
				}
				t = t.child
			}
			return t
		case 5:
			return (
				tp(t),
				e === null && zl(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				Rl(r, i) ? (s = null) : o !== null && Rl(r, o) && (t.flags |= 32),
				kp(e, t),
				he(e, t, s, n),
				t.child
			)
		case 6:
			return e === null && zl(t), null
		case 13:
			return xp(e, t, n)
		case 4:
			return (
				Ua(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = ir(t, null, r, n)) : he(e, t, r, n),
				t.child
			)
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ge(r, i)),
				Oc(e, t, r, i, n)
			)
		case 7:
			return he(e, t, t.pendingProps, n), t.child
		case 8:
			return he(e, t, t.pendingProps.children, n), t.child
		case 12:
			return he(e, t, t.pendingProps.children, n), t.child
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					F(Ao, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (et(o.value, s)) {
						if (o.children === i.children && !Te.current) {
							t = Tt(e, t, n)
							break e
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var l = o.dependencies
							if (l !== null) {
								s = o.child
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											;(a = _t(-1, n & -n)), (a.tag = 2)
											var u = o.updateQueue
											if (u !== null) {
												u = u.shared
												var c = u.pending
												c === null
													? (a.next = a)
													: ((a.next = c.next), (c.next = a)),
													(u.pending = a)
											}
										}
										;(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											Fl(o.return, n, t),
											(l.lanes |= n)
										break
									}
									a = a.next
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child
							else if (o.tag === 18) {
								if (((s = o.return), s === null)) throw Error(T(341))
								;(s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									Fl(s, n, t),
									(s = o.sibling)
							} else s = o.child
							if (s !== null) s.return = o
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null
										break
									}
									if (((o = s.sibling), o !== null)) {
										;(o.return = s.return), (s = o)
										break
									}
									s = s.return
								}
							o = s
						}
				he(e, t, i.children, n), (t = t.child)
			}
			return t
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				Zn(t, n),
				(i = We(i)),
				(r = r(i)),
				(t.flags |= 1),
				he(e, t, r, n),
				t.child
			)
		case 14:
			return (
				(r = t.type),
				(i = Ge(r, t.pendingProps)),
				(i = Ge(r.type, i)),
				Lc(e, t, r, i, n)
			)
		case 15:
			return Cp(e, t, t.type, t.pendingProps, n)
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ge(r, i)),
				so(e, t),
				(t.tag = 1),
				ke(r) ? ((e = !0), ko(t)) : (e = !1),
				Zn(t, n),
				Jd(t, r, i),
				Ul(t, r, i, n),
				Hl(null, t, r, !0, e, n)
			)
		case 19:
			return Ap(e, t, n)
		case 22:
			return Tp(e, t, n)
	}
	throw Error(T(156, t.tag))
}
function Bp(e, t) {
	return gd(e, t)
}
function Pv(e, t, n, r) {
	;(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function Fe(e, t, n, r) {
	return new Pv(e, t, n, r)
}
function ru(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Dv(e) {
	if (typeof e == 'function') return ru(e) ? 1 : 0
	if (e != null) {
		if (((e = e.$$typeof), e === Sa)) return 11
		if (e === Ca) return 14
	}
	return 2
}
function Bt(e, t) {
	var n = e.alternate
	return (
		n === null
			? ((n = Fe(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	)
}
function uo(e, t, n, r, i, o) {
	var s = 2
	if (((r = e), typeof e == 'function')) ru(e) && (s = 1)
	else if (typeof e == 'string') s = 5
	else
		e: switch (e) {
			case jn:
				return mn(n.children, i, o, t)
			case wa:
				;(s = 8), (i |= 8)
				break
			case dl:
				return (e = Fe(12, n, t, i | 2)), (e.elementType = dl), (e.lanes = o), e
			case pl:
				return (e = Fe(13, n, t, i)), (e.elementType = pl), (e.lanes = o), e
			case hl:
				return (e = Fe(19, n, t, i)), (e.elementType = hl), (e.lanes = o), e
			case Zf:
				return rs(n, i, o, t)
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case qf:
							s = 10
							break e
						case Jf:
							s = 9
							break e
						case Sa:
							s = 11
							break e
						case Ca:
							s = 14
							break e
						case Lt:
							;(s = 16), (r = null)
							break e
					}
				throw Error(T(130, e == null ? e : typeof e, ''))
		}
	return (
		(t = Fe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	)
}
function mn(e, t, n, r) {
	return (e = Fe(7, e, r, t)), (e.lanes = n), e
}
function rs(e, t, n, r) {
	return (
		(e = Fe(22, e, r, t)),
		(e.elementType = Zf),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	)
}
function Ks(e, t, n) {
	return (e = Fe(6, e, null, t)), (e.lanes = n), e
}
function Ys(e, t, n) {
	return (
		(t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	)
}
function Iv(e, t, n, r, i) {
	;(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = xs(0)),
		(this.expirationTimes = xs(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = xs(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null)
}
function iu(e, t, n, r, i, o, s, l, a) {
	return (
		(e = new Iv(e, t, n, l, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Fe(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Va(o),
		e
	)
}
function Rv(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return {
		$$typeof: Mn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	}
}
function Hp(e) {
	if (!e) return Yt
	e = e._reactInternals
	e: {
		if (Nn(e) !== e || e.tag !== 1) throw Error(T(170))
		var t = e
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context
					break e
				case 1:
					if (ke(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			t = t.return
		} while (t !== null)
		throw Error(T(171))
	}
	if (e.tag === 1) {
		var n = e.type
		if (ke(n)) return Bd(e, n, t)
	}
	return t
}
function Kp(e, t, n, r, i, o, s, l, a) {
	return (
		(e = iu(n, r, !0, e, i, o, s, l, a)),
		(e.context = Hp(null)),
		(n = e.current),
		(r = me()),
		(i = Wt(n)),
		(o = _t(r, i)),
		(o.callback = t ?? null),
		Vt(n, o, i),
		(e.current.lanes = i),
		gi(e, i, r),
		Ne(e, r),
		e
	)
}
function is(e, t, n, r) {
	var i = t.current,
		o = me(),
		s = Wt(i)
	return (
		(n = Hp(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = _t(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Vt(i, t, s)),
		e !== null && (Ze(e, i, s, o), ro(e, i, s)),
		s
	)
}
function bo(e) {
	if (((e = e.current), !e.child)) return null
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode
		default:
			return e.child.stateNode
	}
}
function Uc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane
		e.retryLane = n !== 0 && n < t ? n : t
	}
}
function ou(e, t) {
	Uc(e, t), (e = e.alternate) && Uc(e, t)
}
function $v() {
	return null
}
var Yp =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e)
		  }
function su(e) {
	this._internalRoot = e
}
os.prototype.render = su.prototype.render = function (e) {
	var t = this._internalRoot
	if (t === null) throw Error(T(409))
	is(e, t, null, null)
}
os.prototype.unmount = su.prototype.unmount = function () {
	var e = this._internalRoot
	if (e !== null) {
		this._internalRoot = null
		var t = e.containerInfo
		Sn(function () {
			is(null, e, null, null)
		}),
			(t[St] = null)
	}
}
function os(e) {
	this._internalRoot = e
}
os.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Cd()
		e = { blockedOn: null, target: e, priority: t }
		for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
		Dt.splice(n, 0, e), n === 0 && kd(e)
	}
}
function lu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ss(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	)
}
function Wc() {}
function Mv(e, t, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var o = r
			r = function () {
				var u = bo(s)
				o.call(u)
			}
		}
		var s = Kp(t, r, e, 0, null, !1, !1, '', Wc)
		return (
			(e._reactRootContainer = s),
			(e[St] = s.current),
			ri(e.nodeType === 8 ? e.parentNode : e),
			Sn(),
			s
		)
	}
	for (; (i = e.lastChild); ) e.removeChild(i)
	if (typeof r == 'function') {
		var l = r
		r = function () {
			var u = bo(a)
			l.call(u)
		}
	}
	var a = iu(e, 0, !1, null, null, !1, !1, '', Wc)
	return (
		(e._reactRootContainer = a),
		(e[St] = a.current),
		ri(e.nodeType === 8 ? e.parentNode : e),
		Sn(function () {
			is(t, a, n, r)
		}),
		a
	)
}
function ls(e, t, n, r, i) {
	var o = n._reactRootContainer
	if (o) {
		var s = o
		if (typeof i == 'function') {
			var l = i
			i = function () {
				var a = bo(s)
				l.call(a)
			}
		}
		is(t, s, e, i)
	} else s = Mv(n, t, e, i, r)
	return bo(s)
}
wd = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode
			if (t.current.memoizedState.isDehydrated) {
				var n = Mr(t.pendingLanes)
				n !== 0 &&
					(Na(t, n | 1), Ne(t, J()), !(j & 6) && ((lr = J() + 500), Zt()))
			}
			break
		case 13:
			Sn(function () {
				var r = Ct(e, 1)
				if (r !== null) {
					var i = me()
					Ze(r, e, 1, i)
				}
			}),
				ou(e, 1)
	}
}
xa = function (e) {
	if (e.tag === 13) {
		var t = Ct(e, 134217728)
		if (t !== null) {
			var n = me()
			Ze(t, e, 134217728, n)
		}
		ou(e, 134217728)
	}
}
Sd = function (e) {
	if (e.tag === 13) {
		var t = Wt(e),
			n = Ct(e, t)
		if (n !== null) {
			var r = me()
			Ze(n, e, t, r)
		}
		ou(e, t)
	}
}
Cd = function () {
	return z
}
Td = function (e, t) {
	var n = z
	try {
		return (z = e), t()
	} finally {
		z = n
	}
}
Tl = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((vl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t]
					if (r !== e && r.form === e.form) {
						var i = qo(r)
						if (!i) throw Error(T(90))
						td(r), vl(r, i)
					}
				}
			}
			break
		case 'textarea':
			rd(e, n)
			break
		case 'select':
			;(t = n.value), t != null && Gn(e, !!n.multiple, t, !1)
	}
}
cd = eu
fd = Sn
var jv = { usingClientEntryPoint: !1, Events: [_i, Vn, qo, ad, ud, eu] },
	Pr = {
		findFiberByHostInstance: un,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	bv = {
		bundleType: Pr.bundleType,
		version: Pr.version,
		rendererPackageName: Pr.rendererPackageName,
		rendererConfig: Pr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Nt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = hd(e)), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Pr.findFiberByHostInstance || $v,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!Bi.isDisabled && Bi.supportsFiber)
		try {
			;(Yo = Bi.inject(bv)), (st = Bi)
		} catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jv
$e.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!lu(t)) throw Error(T(200))
	return Rv(e, t, null, n)
}
$e.createRoot = function (e, t) {
	if (!lu(e)) throw Error(T(299))
	var n = !1,
		r = '',
		i = Yp
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = iu(e, 1, !1, null, null, n, !1, r, i)),
		(e[St] = t.current),
		ri(e.nodeType === 8 ? e.parentNode : e),
		new su(t)
	)
}
$e.findDOMNode = function (e) {
	if (e == null) return null
	if (e.nodeType === 1) return e
	var t = e._reactInternals
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(T(188))
			: ((e = Object.keys(e).join(',')), Error(T(268, e)))
	return (e = hd(t)), (e = e === null ? null : e.stateNode), e
}
$e.flushSync = function (e) {
	return Sn(e)
}
$e.hydrate = function (e, t, n) {
	if (!ss(t)) throw Error(T(200))
	return ls(null, e, t, !0, n)
}
$e.hydrateRoot = function (e, t, n) {
	if (!lu(e)) throw Error(T(405))
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = '',
		s = Yp
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = Kp(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[St] = t.current),
		ri(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i)
	return new os(t)
}
$e.render = function (e, t, n) {
	if (!ss(t)) throw Error(T(200))
	return ls(null, e, t, !1, n)
}
$e.unmountComponentAtNode = function (e) {
	if (!ss(e)) throw Error(T(40))
	return e._reactRootContainer
		? (Sn(function () {
				ls(null, null, e, !1, function () {
					;(e._reactRootContainer = null), (e[St] = null)
				})
		  }),
		  !0)
		: !1
}
$e.unstable_batchedUpdates = eu
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!ss(n)) throw Error(T(200))
	if (e == null || e._reactInternals === void 0) throw Error(T(38))
	return ls(e, t, n, !1, r)
}
$e.version = '18.2.0-next-9e3b772b8-20220608'
function Qp() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qp)
		} catch (e) {
			console.error(e)
		}
}
Qp(), (Kf.exports = $e)
var zv = Kf.exports,
	Bc = zv
;(cl.createRoot = Bc.createRoot), (cl.hydrateRoot = Bc.hydrateRoot)
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function di() {
	return (
		(di = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		di.apply(this, arguments)
	)
}
var Mt
;(function (e) {
	;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Mt || (Mt = {}))
const Hc = 'popstate'
function Fv(e) {
	e === void 0 && (e = {})
	function t(r, i) {
		let { pathname: o, search: s, hash: l } = r.location
		return ra(
			'',
			{ pathname: o, search: s, hash: l },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || 'default'
		)
	}
	function n(r, i) {
		return typeof i == 'string' ? i : zo(i)
	}
	return Uv(t, n, null, e)
}
function X(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function au(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t)
		try {
			throw new Error(t)
		} catch {}
	}
}
function Vv() {
	return Math.random().toString(36).substr(2, 8)
}
function Kc(e, t) {
	return { usr: e.state, key: e.key, idx: t }
}
function ra(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		di(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? yr(t) : t,
			{ state: n, key: (t && t.key) || r || Vv() }
		)
	)
}
function zo(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	)
}
function yr(e) {
	let t = {}
	if (e) {
		let n = e.indexOf('#')
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
		let r = e.indexOf('?')
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e)
	}
	return t
}
function Uv(e, t, n, r) {
	r === void 0 && (r = {})
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		s = i.history,
		l = Mt.Pop,
		a = null,
		u = c()
	u == null && ((u = 0), s.replaceState(di({}, s.state, { idx: u }), ''))
	function c() {
		return (s.state || { idx: null }).idx
	}
	function p() {
		l = Mt.Pop
		let w = c(),
			d = w == null ? null : w - u
		;(u = w), a && a({ action: l, location: _.location, delta: d })
	}
	function m(w, d) {
		l = Mt.Push
		let f = ra(_.location, w, d)
		n && n(f, w), (u = c() + 1)
		let h = Kc(f, u),
			g = _.createHref(f)
		try {
			s.pushState(h, '', g)
		} catch (S) {
			if (S instanceof DOMException && S.name === 'DataCloneError') throw S
			i.location.assign(g)
		}
		o && a && a({ action: l, location: _.location, delta: 1 })
	}
	function v(w, d) {
		l = Mt.Replace
		let f = ra(_.location, w, d)
		n && n(f, w), (u = c())
		let h = Kc(f, u),
			g = _.createHref(f)
		s.replaceState(h, '', g),
			o && a && a({ action: l, location: _.location, delta: 0 })
	}
	function y(w) {
		let d = i.location.origin !== 'null' ? i.location.origin : i.location.href,
			f = typeof w == 'string' ? w : zo(w)
		return (
			X(
				d,
				'No window.location.(origin|href) available to create URL for href: ' +
					f
			),
			new URL(f, d)
		)
	}
	let _ = {
		get action() {
			return l
		},
		get location() {
			return e(i, s)
		},
		listen(w) {
			if (a) throw new Error('A history only accepts one active listener')
			return (
				i.addEventListener(Hc, p),
				(a = w),
				() => {
					i.removeEventListener(Hc, p), (a = null)
				}
			)
		},
		createHref(w) {
			return t(i, w)
		},
		createURL: y,
		encodeLocation(w) {
			let d = y(w)
			return { pathname: d.pathname, search: d.search, hash: d.hash }
		},
		push: m,
		replace: v,
		go(w) {
			return s.go(w)
		},
	}
	return _
}
var Yc
;(function (e) {
	;(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error')
})(Yc || (Yc = {}))
function Wv(e, t, n) {
	n === void 0 && (n = '/')
	let r = typeof t == 'string' ? yr(t) : t,
		i = ar(r.pathname || '/', n)
	if (i == null) return null
	let o = Gp(e)
	Bv(o)
	let s = null
	for (let l = 0; s == null && l < o.length; ++l) s = Zv(o[l], t_(i))
	return s
}
function Gp(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
	let i = (o, s, l) => {
		let a = {
			relativePath: l === void 0 ? o.path || '' : l,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		}
		a.relativePath.startsWith('/') &&
			(X(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(a.relativePath = a.relativePath.slice(r.length)))
		let u = Ht([r, a.relativePath]),
			c = n.concat(a)
		o.children &&
			o.children.length > 0 &&
			(X(
				o.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + u + '".')
			),
			Gp(o.children, t, c, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: qv(u, o.index), routesMeta: c })
	}
	return (
		e.forEach((o, s) => {
			var l
			if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, s)
			else for (let a of Xp(o.path)) i(o, s, a)
		}),
		t
	)
}
function Xp(e) {
	let t = e.split('/')
	if (t.length === 0) return []
	let [n, ...r] = t,
		i = n.endsWith('?'),
		o = n.replace(/\?$/, '')
	if (r.length === 0) return i ? [o, ''] : [o]
	let s = Xp(r.join('/')),
		l = []
	return (
		l.push(...s.map((a) => (a === '' ? o : [o, a].join('/')))),
		i && l.push(...s),
		l.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
	)
}
function Bv(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Jv(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	)
}
const Hv = /^:[\w-]+$/,
	Kv = 3,
	Yv = 2,
	Qv = 1,
	Gv = 10,
	Xv = -2,
	Qc = (e) => e === '*'
function qv(e, t) {
	let n = e.split('/'),
		r = n.length
	return (
		n.some(Qc) && (r += Xv),
		t && (r += Yv),
		n
			.filter((i) => !Qc(i))
			.reduce((i, o) => i + (Hv.test(o) ? Kv : o === '' ? Qv : Gv), r)
	)
}
function Jv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0
}
function Zv(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = '/',
		o = []
	for (let s = 0; s < n.length; ++s) {
		let l = n[s],
			a = s === n.length - 1,
			u = i === '/' ? t : t.slice(i.length) || '/',
			c = ia(
				{ path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
				u
			)
		if (!c) return null
		Object.assign(r, c.params)
		let p = l.route
		o.push({
			params: r,
			pathname: Ht([i, c.pathname]),
			pathnameBase: s_(Ht([i, c.pathnameBase])),
			route: p,
		}),
			c.pathnameBase !== '/' && (i = Ht([i, c.pathnameBase]))
	}
	return o
}
function ia(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
	let [n, r] = e_(e.path, e.caseSensitive, e.end),
		i = t.match(n)
	if (!i) return null
	let o = i[0],
		s = o.replace(/(.)\/+$/, '$1'),
		l = i.slice(1)
	return {
		params: r.reduce((u, c, p) => {
			let { paramName: m, isOptional: v } = c
			if (m === '*') {
				let _ = l[p] || ''
				s = o.slice(0, o.length - _.length).replace(/(.)\/+$/, '$1')
			}
			const y = l[p]
			return v && !y ? (u[m] = void 0) : (u[m] = n_(y || '', m)), u
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: e,
	}
}
function e_(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		au(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		)
	let r = [],
		i =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(s, l, a) => (
						r.push({ paramName: l, isOptional: a != null }),
						a ? '/?([^\\/]+)?' : '/([^\\/]+)'
					)
				)
	return (
		e.endsWith('*')
			? (r.push({ paramName: '*' }),
			  (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (i += '\\/*$')
			: e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
		[new RegExp(i, t ? void 0 : 'i'), r]
	)
}
function t_(e) {
	try {
		return decodeURI(e)
	} catch (t) {
		return (
			au(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		)
	}
}
function n_(e, t) {
	try {
		return decodeURIComponent(e)
	} catch (n) {
		return (
			au(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(' due to a bad percent encoding (' + n + ').')
			),
			e
		)
	}
}
function ar(e, t) {
	if (t === '/') return e
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n)
	return r && r !== '/' ? null : e.slice(n) || '/'
}
function r_(e, t) {
	t === void 0 && (t = '/')
	let {
		pathname: n,
		search: r = '',
		hash: i = '',
	} = typeof e == 'string' ? yr(e) : e
	return {
		pathname: n ? (n.startsWith('/') ? n : i_(n, t)) : t,
		search: l_(r),
		hash: a_(i),
	}
}
function i_(e, t) {
	let n = t.replace(/\/+$/, '').split('/')
	return (
		e.split('/').forEach((i) => {
			i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
		}),
		n.length > 1 ? n.join('/') : '/'
	)
}
function Qs(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' +
			t +
			'` field [' +
			JSON.stringify(r) +
			'].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	)
}
function o_(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	)
}
function qp(e, t) {
	let n = o_(e)
	return t
		? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase)
}
function Jp(e, t, n, r) {
	r === void 0 && (r = !1)
	let i
	typeof e == 'string'
		? (i = yr(e))
		: ((i = di({}, e)),
		  X(
				!i.pathname || !i.pathname.includes('?'),
				Qs('?', 'pathname', 'search', i)
		  ),
		  X(
				!i.pathname || !i.pathname.includes('#'),
				Qs('#', 'pathname', 'hash', i)
		  ),
		  X(!i.search || !i.search.includes('#'), Qs('#', 'search', 'hash', i)))
	let o = e === '' || i.pathname === '',
		s = o ? '/' : i.pathname,
		l
	if (s == null) l = n
	else {
		let p = t.length - 1
		if (!r && s.startsWith('..')) {
			let m = s.split('/')
			for (; m[0] === '..'; ) m.shift(), (p -= 1)
			i.pathname = m.join('/')
		}
		l = p >= 0 ? t[p] : '/'
	}
	let a = r_(i, l),
		u = s && s !== '/' && s.endsWith('/'),
		c = (o || s === '.') && n.endsWith('/')
	return !a.pathname.endsWith('/') && (u || c) && (a.pathname += '/'), a
}
const Ht = (e) => e.join('/').replace(/\/\/+/g, '/'),
	s_ = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	l_ = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	a_ = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function u_(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	)
}
const Zp = ['post', 'put', 'patch', 'delete']
new Set(Zp)
const c_ = ['get', ...Zp]
new Set(c_)
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
	return (
		(pi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		pi.apply(this, arguments)
	)
}
const as = A.createContext(null),
	eh = A.createContext(null),
	en = A.createContext(null),
	us = A.createContext(null),
	xn = A.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	th = A.createContext(null)
function f_(e, t) {
	let { relative: n } = t === void 0 ? {} : t
	Ei() || X(!1)
	let { basename: r, navigator: i } = A.useContext(en),
		{ hash: o, pathname: s, search: l } = cs(e, { relative: n }),
		a = s
	return (
		r !== '/' && (a = s === '/' ? r : Ht([r, s])),
		i.createHref({ pathname: a, search: l, hash: o })
	)
}
function Ei() {
	return A.useContext(us) != null
}
function wi() {
	return Ei() || X(!1), A.useContext(us).location
}
function nh(e) {
	A.useContext(en).static || A.useLayoutEffect(e)
}
function d_() {
	let { isDataRoute: e } = A.useContext(xn)
	return e ? k_() : p_()
}
function p_() {
	Ei() || X(!1)
	let e = A.useContext(as),
		{ basename: t, future: n, navigator: r } = A.useContext(en),
		{ matches: i } = A.useContext(xn),
		{ pathname: o } = wi(),
		s = JSON.stringify(qp(i, n.v7_relativeSplatPath)),
		l = A.useRef(!1)
	return (
		nh(() => {
			l.current = !0
		}),
		A.useCallback(
			function (u, c) {
				if ((c === void 0 && (c = {}), !l.current)) return
				if (typeof u == 'number') {
					r.go(u)
					return
				}
				let p = Jp(u, JSON.parse(s), o, c.relative === 'path')
				e == null &&
					t !== '/' &&
					(p.pathname = p.pathname === '/' ? t : Ht([t, p.pathname])),
					(c.replace ? r.replace : r.push)(p, c.state, c)
			},
			[t, r, s, o, e]
		)
	)
}
function cs(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = A.useContext(en),
		{ matches: i } = A.useContext(xn),
		{ pathname: o } = wi(),
		s = JSON.stringify(qp(i, r.v7_relativeSplatPath))
	return A.useMemo(() => Jp(e, JSON.parse(s), o, n === 'path'), [e, s, o, n])
}
function h_(e, t) {
	return m_(e, t)
}
function m_(e, t, n, r) {
	Ei() || X(!1)
	let { navigator: i } = A.useContext(en),
		{ matches: o } = A.useContext(xn),
		s = o[o.length - 1],
		l = s ? s.params : {}
	s && s.pathname
	let a = s ? s.pathnameBase : '/'
	s && s.route
	let u = wi(),
		c
	if (t) {
		var p
		let w = typeof t == 'string' ? yr(t) : t
		a === '/' || ((p = w.pathname) != null && p.startsWith(a)) || X(!1), (c = w)
	} else c = u
	let m = c.pathname || '/',
		v = a === '/' ? m : m.slice(a.length) || '/',
		y = Wv(e, { pathname: v }),
		_ = E_(
			y &&
				y.map((w) =>
					Object.assign({}, w, {
						params: Object.assign({}, l, w.params),
						pathname: Ht([
							a,
							i.encodeLocation
								? i.encodeLocation(w.pathname).pathname
								: w.pathname,
						]),
						pathnameBase:
							w.pathnameBase === '/'
								? a
								: Ht([
										a,
										i.encodeLocation
											? i.encodeLocation(w.pathnameBase).pathname
											: w.pathnameBase,
								  ]),
					})
				),
			o,
			n,
			r
		)
	return t && _
		? A.createElement(
				us.Provider,
				{
					value: {
						location: pi(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							c
						),
						navigationType: Mt.Pop,
					},
				},
				_
		  )
		: _
}
function g_() {
	let e = T_(),
		t = u_(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
	return A.createElement(
		A.Fragment,
		null,
		A.createElement('h2', null, 'Unexpected Application Error!'),
		A.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? A.createElement('pre', { style: i }, n) : null,
		null
	)
}
const v_ = A.createElement(g_, null)
class __ extends A.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			})
	}
	static getDerivedStateFromError(t) {
		return { error: t }
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  }
	}
	componentDidCatch(t, n) {
		console.error('React Router caught the following error during render', t, n)
	}
	render() {
		return this.state.error !== void 0
			? A.createElement(
					xn.Provider,
					{ value: this.props.routeContext },
					A.createElement(th.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children
	}
}
function y_(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = A.useContext(as)
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		A.createElement(xn.Provider, { value: t }, r)
	)
}
function E_(e, t, n, r) {
	var i
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var o
		if ((o = n) != null && o.errors) e = n.matches
		else return null
	}
	let s = e,
		l = (i = n) == null ? void 0 : i.errors
	if (l != null) {
		let c = s.findIndex(
			(p) => p.route.id && (l == null ? void 0 : l[p.route.id])
		)
		c >= 0 || X(!1), (s = s.slice(0, Math.min(s.length, c + 1)))
	}
	let a = !1,
		u = -1
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < s.length; c++) {
			let p = s[c]
			if (
				((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c),
				p.route.id)
			) {
				let { loaderData: m, errors: v } = n,
					y =
						p.route.loader &&
						m[p.route.id] === void 0 &&
						(!v || v[p.route.id] === void 0)
				if (p.route.lazy || y) {
					;(a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]])
					break
				}
			}
		}
	return s.reduceRight((c, p, m) => {
		let v,
			y = !1,
			_ = null,
			w = null
		n &&
			((v = l && p.route.id ? l[p.route.id] : void 0),
			(_ = p.route.errorElement || v_),
			a &&
				(u < 0 && m === 0
					? (N_('route-fallback', !1), (y = !0), (w = null))
					: u === m &&
					  ((y = !0), (w = p.route.hydrateFallbackElement || null))))
		let d = t.concat(s.slice(0, m + 1)),
			f = () => {
				let h
				return (
					v
						? (h = _)
						: y
						? (h = w)
						: p.route.Component
						? (h = A.createElement(p.route.Component, null))
						: p.route.element
						? (h = p.route.element)
						: (h = c),
					A.createElement(y_, {
						match: p,
						routeContext: { outlet: c, matches: d, isDataRoute: n != null },
						children: h,
					})
				)
			}
		return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
			? A.createElement(__, {
					location: n.location,
					revalidation: n.revalidation,
					component: _,
					error: v,
					children: f(),
					routeContext: { outlet: null, matches: d, isDataRoute: !0 },
			  })
			: f()
	}, null)
}
var rh = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			e
		)
	})(rh || {}),
	Fo = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseLoaderData = 'useLoaderData'),
			(e.UseActionData = 'useActionData'),
			(e.UseRouteError = 'useRouteError'),
			(e.UseNavigation = 'useNavigation'),
			(e.UseRouteLoaderData = 'useRouteLoaderData'),
			(e.UseMatches = 'useMatches'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			(e.UseRouteId = 'useRouteId'),
			e
		)
	})(Fo || {})
function w_(e) {
	let t = A.useContext(as)
	return t || X(!1), t
}
function S_(e) {
	let t = A.useContext(eh)
	return t || X(!1), t
}
function C_(e) {
	let t = A.useContext(xn)
	return t || X(!1), t
}
function ih(e) {
	let t = C_(),
		n = t.matches[t.matches.length - 1]
	return n.route.id || X(!1), n.route.id
}
function T_() {
	var e
	let t = A.useContext(th),
		n = S_(Fo.UseRouteError),
		r = ih(Fo.UseRouteError)
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function k_() {
	let { router: e } = w_(rh.UseNavigateStable),
		t = ih(Fo.UseNavigateStable),
		n = A.useRef(!1)
	return (
		nh(() => {
			n.current = !0
		}),
		A.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == 'number'
							? e.navigate(i)
							: e.navigate(i, pi({ fromRouteId: t }, o)))
			},
			[e, t]
		)
	)
}
const Gc = {}
function N_(e, t, n) {
	!t && !Gc[e] && (Gc[e] = !0)
}
function co(e) {
	X(!1)
}
function x_(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: i = Mt.Pop,
		navigator: o,
		static: s = !1,
		future: l,
	} = e
	Ei() && X(!1)
	let a = t.replace(/^\/*/, '/'),
		u = A.useMemo(
			() => ({
				basename: a,
				navigator: o,
				static: s,
				future: pi({ v7_relativeSplatPath: !1 }, l),
			}),
			[a, l, o, s]
		)
	typeof r == 'string' && (r = yr(r))
	let {
			pathname: c = '/',
			search: p = '',
			hash: m = '',
			state: v = null,
			key: y = 'default',
		} = r,
		_ = A.useMemo(() => {
			let w = ar(c, a)
			return w == null
				? null
				: {
						location: { pathname: w, search: p, hash: m, state: v, key: y },
						navigationType: i,
				  }
		}, [a, c, p, m, v, y, i])
	return _ == null
		? null
		: A.createElement(
				en.Provider,
				{ value: u },
				A.createElement(us.Provider, { children: n, value: _ })
		  )
}
function A_(e) {
	let { children: t, location: n } = e
	return h_(oa(t), n)
}
new Promise(() => {})
function oa(e, t) {
	t === void 0 && (t = [])
	let n = []
	return (
		A.Children.forEach(e, (r, i) => {
			if (!A.isValidElement(r)) return
			let o = [...t, i]
			if (r.type === A.Fragment) {
				n.push.apply(n, oa(r.props.children, o))
				return
			}
			r.type !== co && X(!1), !r.props.index || !r.props.children || X(!1)
			let s = {
				id: r.props.id || o.join('-'),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			}
			r.props.children && (s.children = oa(r.props.children, o)), n.push(s)
		}),
		n
	)
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vo() {
	return (
		(Vo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Vo.apply(this, arguments)
	)
}
function oh(e, t) {
	if (e == null) return {}
	var n = {},
		r = Object.keys(e),
		i,
		o
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
	return n
}
function O_(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function L_(e, t) {
	return e.button === 0 && (!t || t === '_self') && !O_(e)
}
const P_ = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
		'unstable_viewTransition',
	],
	D_ = [
		'aria-current',
		'caseSensitive',
		'className',
		'end',
		'style',
		'to',
		'unstable_viewTransition',
		'children',
	],
	I_ = A.createContext({ isTransitioning: !1 }),
	R_ = 'startTransition',
	Xc = Om[R_]
function $_(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		o = A.useRef()
	o.current == null && (o.current = Fv({ window: i, v5Compat: !0 }))
	let s = o.current,
		[l, a] = A.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		c = A.useCallback(
			(p) => {
				u && Xc ? Xc(() => a(p)) : a(p)
			},
			[a, u]
		)
	return (
		A.useLayoutEffect(() => s.listen(c), [s, c]),
		A.createElement(x_, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: s,
			future: r,
		})
	)
}
const M_ =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	j_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	b_ = A.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: o,
				replace: s,
				state: l,
				target: a,
				to: u,
				preventScrollReset: c,
				unstable_viewTransition: p,
			} = t,
			m = oh(t, P_),
			{ basename: v } = A.useContext(en),
			y,
			_ = !1
		if (typeof u == 'string' && j_.test(u) && ((y = u), M_))
			try {
				let h = new URL(window.location.href),
					g = u.startsWith('//') ? new URL(h.protocol + u) : new URL(u),
					S = ar(g.pathname, v)
				g.origin === h.origin && S != null
					? (u = S + g.search + g.hash)
					: (_ = !0)
			} catch {}
		let w = f_(u, { relative: i }),
			d = F_(u, {
				replace: s,
				state: l,
				target: a,
				preventScrollReset: c,
				relative: i,
				unstable_viewTransition: p,
			})
		function f(h) {
			r && r(h), h.defaultPrevented || d(h)
		}
		return A.createElement(
			'a',
			Vo({}, m, { href: y || w, onClick: _ || o ? r : f, ref: n, target: a })
		)
	}),
	gn = A.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: i = !1,
				className: o = '',
				end: s = !1,
				style: l,
				to: a,
				unstable_viewTransition: u,
				children: c,
			} = t,
			p = oh(t, D_),
			m = cs(a, { relative: p.relative }),
			v = wi(),
			y = A.useContext(eh),
			{ navigator: _, basename: w } = A.useContext(en),
			d = y != null && V_(m) && u === !0,
			f = _.encodeLocation ? _.encodeLocation(m).pathname : m.pathname,
			h = v.pathname,
			g =
				y && y.navigation && y.navigation.location
					? y.navigation.location.pathname
					: null
		i ||
			((h = h.toLowerCase()),
			(g = g ? g.toLowerCase() : null),
			(f = f.toLowerCase())),
			g && w && (g = ar(g, w) || g)
		const S = f !== '/' && f.endsWith('/') ? f.length - 1 : f.length
		let k = h === f || (!s && h.startsWith(f) && h.charAt(S) === '/'),
			N =
				g != null &&
				(g === f || (!s && g.startsWith(f) && g.charAt(f.length) === '/')),
			x = { isActive: k, isPending: N, isTransitioning: d },
			$ = k ? r : void 0,
			P
		typeof o == 'function'
			? (P = o(x))
			: (P = [
					o,
					k ? 'active' : null,
					N ? 'pending' : null,
					d ? 'transitioning' : null,
			  ]
					.filter(Boolean)
					.join(' '))
		let b = typeof l == 'function' ? l(x) : l
		return A.createElement(
			b_,
			Vo({}, p, {
				'aria-current': $,
				className: P,
				ref: n,
				style: b,
				to: a,
				unstable_viewTransition: u,
			}),
			typeof c == 'function' ? c(x) : c
		)
	})
var sa
;(function (e) {
	;(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState')
})(sa || (sa = {}))
var qc
;(function (e) {
	;(e.UseFetcher = 'useFetcher'),
		(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration')
})(qc || (qc = {}))
function z_(e) {
	let t = A.useContext(as)
	return t || X(!1), t
}
function F_(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: s,
			unstable_viewTransition: l,
		} = t === void 0 ? {} : t,
		a = d_(),
		u = wi(),
		c = cs(e, { relative: s })
	return A.useCallback(
		(p) => {
			if (L_(p, n)) {
				p.preventDefault()
				let m = r !== void 0 ? r : zo(u) === zo(c)
				a(e, {
					replace: m,
					state: i,
					preventScrollReset: o,
					relative: s,
					unstable_viewTransition: l,
				})
			}
		},
		[u, a, c, r, i, n, e, o, s, l]
	)
}
function V_(e, t) {
	t === void 0 && (t = {})
	let n = A.useContext(I_)
	n == null && X(!1)
	let { basename: r } = z_(sa.useViewTransitionState),
		i = cs(e, { relative: t.relative })
	if (!n.isTransitioning) return !1
	let o = ar(n.currentLocation.pathname, r) || n.currentLocation.pathname,
		s = ar(n.nextLocation.pathname, r) || n.nextLocation.pathname
	return ia(i.pathname, s) != null || ia(i.pathname, o) != null
}
var ge = 'top',
	De = 'bottom',
	Ie = 'right',
	ve = 'left',
	fs = 'auto',
	Er = [ge, De, Ie, ve],
	Cn = 'start',
	ur = 'end',
	sh = 'clippingParents',
	uu = 'viewport',
	In = 'popper',
	lh = 'reference',
	la = Er.reduce(function (e, t) {
		return e.concat([t + '-' + Cn, t + '-' + ur])
	}, []),
	cu = [].concat(Er, [fs]).reduce(function (e, t) {
		return e.concat([t, t + '-' + Cn, t + '-' + ur])
	}, []),
	ah = 'beforeRead',
	uh = 'read',
	ch = 'afterRead',
	fh = 'beforeMain',
	dh = 'main',
	ph = 'afterMain',
	hh = 'beforeWrite',
	mh = 'write',
	gh = 'afterWrite',
	vh = [ah, uh, ch, fh, dh, ph, hh, mh, gh]
function ct(e) {
	return e ? (e.nodeName || '').toLowerCase() : null
}
function Re(e) {
	if (e == null) return window
	if (e.toString() !== '[object Window]') {
		var t = e.ownerDocument
		return (t && t.defaultView) || window
	}
	return e
}
function Tn(e) {
	var t = Re(e).Element
	return e instanceof t || e instanceof Element
}
function Ue(e) {
	var t = Re(e).HTMLElement
	return e instanceof t || e instanceof HTMLElement
}
function fu(e) {
	if (typeof ShadowRoot > 'u') return !1
	var t = Re(e).ShadowRoot
	return e instanceof t || e instanceof ShadowRoot
}
function U_(e) {
	var t = e.state
	Object.keys(t.elements).forEach(function (n) {
		var r = t.styles[n] || {},
			i = t.attributes[n] || {},
			o = t.elements[n]
		!Ue(o) ||
			!ct(o) ||
			(Object.assign(o.style, r),
			Object.keys(i).forEach(function (s) {
				var l = i[s]
				l === !1 ? o.removeAttribute(s) : o.setAttribute(s, l === !0 ? '' : l)
			}))
	})
}
function W_(e) {
	var t = e.state,
		n = {
			popper: {
				position: t.options.strategy,
				left: '0',
				top: '0',
				margin: '0',
			},
			arrow: { position: 'absolute' },
			reference: {},
		}
	return (
		Object.assign(t.elements.popper.style, n.popper),
		(t.styles = n),
		t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
		function () {
			Object.keys(t.elements).forEach(function (r) {
				var i = t.elements[r],
					o = t.attributes[r] || {},
					s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
					l = s.reduce(function (a, u) {
						return (a[u] = ''), a
					}, {})
				!Ue(i) ||
					!ct(i) ||
					(Object.assign(i.style, l),
					Object.keys(o).forEach(function (a) {
						i.removeAttribute(a)
					}))
			})
		}
	)
}
const du = {
	name: 'applyStyles',
	enabled: !0,
	phase: 'write',
	fn: U_,
	effect: W_,
	requires: ['computeStyles'],
}
function at(e) {
	return e.split('-')[0]
}
var vn = Math.max,
	Uo = Math.min,
	cr = Math.round
function aa() {
	var e = navigator.userAgentData
	return e != null && e.brands && Array.isArray(e.brands)
		? e.brands
				.map(function (t) {
					return t.brand + '/' + t.version
				})
				.join(' ')
		: navigator.userAgent
}
function _h() {
	return !/^((?!chrome|android).)*safari/i.test(aa())
}
function fr(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1)
	var r = e.getBoundingClientRect(),
		i = 1,
		o = 1
	t &&
		Ue(e) &&
		((i = (e.offsetWidth > 0 && cr(r.width) / e.offsetWidth) || 1),
		(o = (e.offsetHeight > 0 && cr(r.height) / e.offsetHeight) || 1))
	var s = Tn(e) ? Re(e) : window,
		l = s.visualViewport,
		a = !_h() && n,
		u = (r.left + (a && l ? l.offsetLeft : 0)) / i,
		c = (r.top + (a && l ? l.offsetTop : 0)) / o,
		p = r.width / i,
		m = r.height / o
	return {
		width: p,
		height: m,
		top: c,
		right: u + p,
		bottom: c + m,
		left: u,
		x: u,
		y: c,
	}
}
function pu(e) {
	var t = fr(e),
		n = e.offsetWidth,
		r = e.offsetHeight
	return (
		Math.abs(t.width - n) <= 1 && (n = t.width),
		Math.abs(t.height - r) <= 1 && (r = t.height),
		{ x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
	)
}
function yh(e, t) {
	var n = t.getRootNode && t.getRootNode()
	if (e.contains(t)) return !0
	if (n && fu(n)) {
		var r = t
		do {
			if (r && e.isSameNode(r)) return !0
			r = r.parentNode || r.host
		} while (r)
	}
	return !1
}
function kt(e) {
	return Re(e).getComputedStyle(e)
}
function B_(e) {
	return ['table', 'td', 'th'].indexOf(ct(e)) >= 0
}
function tn(e) {
	return ((Tn(e) ? e.ownerDocument : e.document) || window.document)
		.documentElement
}
function ds(e) {
	return ct(e) === 'html'
		? e
		: e.assignedSlot || e.parentNode || (fu(e) ? e.host : null) || tn(e)
}
function Jc(e) {
	return !Ue(e) || kt(e).position === 'fixed' ? null : e.offsetParent
}
function H_(e) {
	var t = /firefox/i.test(aa()),
		n = /Trident/i.test(aa())
	if (n && Ue(e)) {
		var r = kt(e)
		if (r.position === 'fixed') return null
	}
	var i = ds(e)
	for (fu(i) && (i = i.host); Ue(i) && ['html', 'body'].indexOf(ct(i)) < 0; ) {
		var o = kt(i)
		if (
			o.transform !== 'none' ||
			o.perspective !== 'none' ||
			o.contain === 'paint' ||
			['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
			(t && o.willChange === 'filter') ||
			(t && o.filter && o.filter !== 'none')
		)
			return i
		i = i.parentNode
	}
	return null
}
function Si(e) {
	for (var t = Re(e), n = Jc(e); n && B_(n) && kt(n).position === 'static'; )
		n = Jc(n)
	return n &&
		(ct(n) === 'html' || (ct(n) === 'body' && kt(n).position === 'static'))
		? t
		: n || H_(e) || t
}
function hu(e) {
	return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function Yr(e, t, n) {
	return vn(e, Uo(t, n))
}
function K_(e, t, n) {
	var r = Yr(e, t, n)
	return r > n ? n : r
}
function Eh() {
	return { top: 0, right: 0, bottom: 0, left: 0 }
}
function wh(e) {
	return Object.assign({}, Eh(), e)
}
function Sh(e, t) {
	return t.reduce(function (n, r) {
		return (n[r] = e), n
	}, {})
}
var Y_ = function (t, n) {
	return (
		(t =
			typeof t == 'function'
				? t(Object.assign({}, n.rects, { placement: n.placement }))
				: t),
		wh(typeof t != 'number' ? t : Sh(t, Er))
	)
}
function Q_(e) {
	var t,
		n = e.state,
		r = e.name,
		i = e.options,
		o = n.elements.arrow,
		s = n.modifiersData.popperOffsets,
		l = at(n.placement),
		a = hu(l),
		u = [ve, Ie].indexOf(l) >= 0,
		c = u ? 'height' : 'width'
	if (!(!o || !s)) {
		var p = Y_(i.padding, n),
			m = pu(o),
			v = a === 'y' ? ge : ve,
			y = a === 'y' ? De : Ie,
			_ =
				n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
			w = s[a] - n.rects.reference[a],
			d = Si(o),
			f = d ? (a === 'y' ? d.clientHeight || 0 : d.clientWidth || 0) : 0,
			h = _ / 2 - w / 2,
			g = p[v],
			S = f - m[c] - p[y],
			k = f / 2 - m[c] / 2 + h,
			N = Yr(g, k, S),
			x = a
		n.modifiersData[r] = ((t = {}), (t[x] = N), (t.centerOffset = N - k), t)
	}
}
function G_(e) {
	var t = e.state,
		n = e.options,
		r = n.element,
		i = r === void 0 ? '[data-popper-arrow]' : r
	i != null &&
		((typeof i == 'string' && ((i = t.elements.popper.querySelector(i)), !i)) ||
			(yh(t.elements.popper, i) && (t.elements.arrow = i)))
}
const Ch = {
	name: 'arrow',
	enabled: !0,
	phase: 'main',
	fn: Q_,
	effect: G_,
	requires: ['popperOffsets'],
	requiresIfExists: ['preventOverflow'],
}
function dr(e) {
	return e.split('-')[1]
}
var X_ = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function q_(e, t) {
	var n = e.x,
		r = e.y,
		i = t.devicePixelRatio || 1
	return { x: cr(n * i) / i || 0, y: cr(r * i) / i || 0 }
}
function Zc(e) {
	var t,
		n = e.popper,
		r = e.popperRect,
		i = e.placement,
		o = e.variation,
		s = e.offsets,
		l = e.position,
		a = e.gpuAcceleration,
		u = e.adaptive,
		c = e.roundOffsets,
		p = e.isFixed,
		m = s.x,
		v = m === void 0 ? 0 : m,
		y = s.y,
		_ = y === void 0 ? 0 : y,
		w = typeof c == 'function' ? c({ x: v, y: _ }) : { x: v, y: _ }
	;(v = w.x), (_ = w.y)
	var d = s.hasOwnProperty('x'),
		f = s.hasOwnProperty('y'),
		h = ve,
		g = ge,
		S = window
	if (u) {
		var k = Si(n),
			N = 'clientHeight',
			x = 'clientWidth'
		if (
			(k === Re(n) &&
				((k = tn(n)),
				kt(k).position !== 'static' &&
					l === 'absolute' &&
					((N = 'scrollHeight'), (x = 'scrollWidth'))),
			(k = k),
			i === ge || ((i === ve || i === Ie) && o === ur))
		) {
			g = De
			var $ = p && k === S && S.visualViewport ? S.visualViewport.height : k[N]
			;(_ -= $ - r.height), (_ *= a ? 1 : -1)
		}
		if (i === ve || ((i === ge || i === De) && o === ur)) {
			h = Ie
			var P = p && k === S && S.visualViewport ? S.visualViewport.width : k[x]
			;(v -= P - r.width), (v *= a ? 1 : -1)
		}
	}
	var b = Object.assign({ position: l }, u && X_),
		ie = c === !0 ? q_({ x: v, y: _ }, Re(n)) : { x: v, y: _ }
	if (((v = ie.x), (_ = ie.y), a)) {
		var q
		return Object.assign(
			{},
			b,
			((q = {}),
			(q[g] = f ? '0' : ''),
			(q[h] = d ? '0' : ''),
			(q.transform =
				(S.devicePixelRatio || 1) <= 1
					? 'translate(' + v + 'px, ' + _ + 'px)'
					: 'translate3d(' + v + 'px, ' + _ + 'px, 0)'),
			q)
		)
	}
	return Object.assign(
		{},
		b,
		((t = {}),
		(t[g] = f ? _ + 'px' : ''),
		(t[h] = d ? v + 'px' : ''),
		(t.transform = ''),
		t)
	)
}
function J_(e) {
	var t = e.state,
		n = e.options,
		r = n.gpuAcceleration,
		i = r === void 0 ? !0 : r,
		o = n.adaptive,
		s = o === void 0 ? !0 : o,
		l = n.roundOffsets,
		a = l === void 0 ? !0 : l,
		u = {
			placement: at(t.placement),
			variation: dr(t.placement),
			popper: t.elements.popper,
			popperRect: t.rects.popper,
			gpuAcceleration: i,
			isFixed: t.options.strategy === 'fixed',
		}
	t.modifiersData.popperOffsets != null &&
		(t.styles.popper = Object.assign(
			{},
			t.styles.popper,
			Zc(
				Object.assign({}, u, {
					offsets: t.modifiersData.popperOffsets,
					position: t.options.strategy,
					adaptive: s,
					roundOffsets: a,
				})
			)
		)),
		t.modifiersData.arrow != null &&
			(t.styles.arrow = Object.assign(
				{},
				t.styles.arrow,
				Zc(
					Object.assign({}, u, {
						offsets: t.modifiersData.arrow,
						position: 'absolute',
						adaptive: !1,
						roundOffsets: a,
					})
				)
			)),
		(t.attributes.popper = Object.assign({}, t.attributes.popper, {
			'data-popper-placement': t.placement,
		}))
}
const mu = {
	name: 'computeStyles',
	enabled: !0,
	phase: 'beforeWrite',
	fn: J_,
	data: {},
}
var Hi = { passive: !0 }
function Z_(e) {
	var t = e.state,
		n = e.instance,
		r = e.options,
		i = r.scroll,
		o = i === void 0 ? !0 : i,
		s = r.resize,
		l = s === void 0 ? !0 : s,
		a = Re(t.elements.popper),
		u = [].concat(t.scrollParents.reference, t.scrollParents.popper)
	return (
		o &&
			u.forEach(function (c) {
				c.addEventListener('scroll', n.update, Hi)
			}),
		l && a.addEventListener('resize', n.update, Hi),
		function () {
			o &&
				u.forEach(function (c) {
					c.removeEventListener('scroll', n.update, Hi)
				}),
				l && a.removeEventListener('resize', n.update, Hi)
		}
	)
}
const gu = {
	name: 'eventListeners',
	enabled: !0,
	phase: 'write',
	fn: function () {},
	effect: Z_,
	data: {},
}
var ey = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function fo(e) {
	return e.replace(/left|right|bottom|top/g, function (t) {
		return ey[t]
	})
}
var ty = { start: 'end', end: 'start' }
function ef(e) {
	return e.replace(/start|end/g, function (t) {
		return ty[t]
	})
}
function vu(e) {
	var t = Re(e),
		n = t.pageXOffset,
		r = t.pageYOffset
	return { scrollLeft: n, scrollTop: r }
}
function _u(e) {
	return fr(tn(e)).left + vu(e).scrollLeft
}
function ny(e, t) {
	var n = Re(e),
		r = tn(e),
		i = n.visualViewport,
		o = r.clientWidth,
		s = r.clientHeight,
		l = 0,
		a = 0
	if (i) {
		;(o = i.width), (s = i.height)
		var u = _h()
		;(u || (!u && t === 'fixed')) && ((l = i.offsetLeft), (a = i.offsetTop))
	}
	return { width: o, height: s, x: l + _u(e), y: a }
}
function ry(e) {
	var t,
		n = tn(e),
		r = vu(e),
		i = (t = e.ownerDocument) == null ? void 0 : t.body,
		o = vn(
			n.scrollWidth,
			n.clientWidth,
			i ? i.scrollWidth : 0,
			i ? i.clientWidth : 0
		),
		s = vn(
			n.scrollHeight,
			n.clientHeight,
			i ? i.scrollHeight : 0,
			i ? i.clientHeight : 0
		),
		l = -r.scrollLeft + _u(e),
		a = -r.scrollTop
	return (
		kt(i || n).direction === 'rtl' &&
			(l += vn(n.clientWidth, i ? i.clientWidth : 0) - o),
		{ width: o, height: s, x: l, y: a }
	)
}
function yu(e) {
	var t = kt(e),
		n = t.overflow,
		r = t.overflowX,
		i = t.overflowY
	return /auto|scroll|overlay|hidden/.test(n + i + r)
}
function Th(e) {
	return ['html', 'body', '#document'].indexOf(ct(e)) >= 0
		? e.ownerDocument.body
		: Ue(e) && yu(e)
		? e
		: Th(ds(e))
}
function Qr(e, t) {
	var n
	t === void 0 && (t = [])
	var r = Th(e),
		i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
		o = Re(r),
		s = i ? [o].concat(o.visualViewport || [], yu(r) ? r : []) : r,
		l = t.concat(s)
	return i ? l : l.concat(Qr(ds(s)))
}
function ua(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height,
	})
}
function iy(e, t) {
	var n = fr(e, !1, t === 'fixed')
	return (
		(n.top = n.top + e.clientTop),
		(n.left = n.left + e.clientLeft),
		(n.bottom = n.top + e.clientHeight),
		(n.right = n.left + e.clientWidth),
		(n.width = e.clientWidth),
		(n.height = e.clientHeight),
		(n.x = n.left),
		(n.y = n.top),
		n
	)
}
function tf(e, t, n) {
	return t === uu ? ua(ny(e, n)) : Tn(t) ? iy(t, n) : ua(ry(tn(e)))
}
function oy(e) {
	var t = Qr(ds(e)),
		n = ['absolute', 'fixed'].indexOf(kt(e).position) >= 0,
		r = n && Ue(e) ? Si(e) : e
	return Tn(r)
		? t.filter(function (i) {
				return Tn(i) && yh(i, r) && ct(i) !== 'body'
		  })
		: []
}
function sy(e, t, n, r) {
	var i = t === 'clippingParents' ? oy(e) : [].concat(t),
		o = [].concat(i, [n]),
		s = o[0],
		l = o.reduce(function (a, u) {
			var c = tf(e, u, r)
			return (
				(a.top = vn(c.top, a.top)),
				(a.right = Uo(c.right, a.right)),
				(a.bottom = Uo(c.bottom, a.bottom)),
				(a.left = vn(c.left, a.left)),
				a
			)
		}, tf(e, s, r))
	return (
		(l.width = l.right - l.left),
		(l.height = l.bottom - l.top),
		(l.x = l.left),
		(l.y = l.top),
		l
	)
}
function kh(e) {
	var t = e.reference,
		n = e.element,
		r = e.placement,
		i = r ? at(r) : null,
		o = r ? dr(r) : null,
		s = t.x + t.width / 2 - n.width / 2,
		l = t.y + t.height / 2 - n.height / 2,
		a
	switch (i) {
		case ge:
			a = { x: s, y: t.y - n.height }
			break
		case De:
			a = { x: s, y: t.y + t.height }
			break
		case Ie:
			a = { x: t.x + t.width, y: l }
			break
		case ve:
			a = { x: t.x - n.width, y: l }
			break
		default:
			a = { x: t.x, y: t.y }
	}
	var u = i ? hu(i) : null
	if (u != null) {
		var c = u === 'y' ? 'height' : 'width'
		switch (o) {
			case Cn:
				a[u] = a[u] - (t[c] / 2 - n[c] / 2)
				break
			case ur:
				a[u] = a[u] + (t[c] / 2 - n[c] / 2)
				break
		}
	}
	return a
}
function pr(e, t) {
	t === void 0 && (t = {})
	var n = t,
		r = n.placement,
		i = r === void 0 ? e.placement : r,
		o = n.strategy,
		s = o === void 0 ? e.strategy : o,
		l = n.boundary,
		a = l === void 0 ? sh : l,
		u = n.rootBoundary,
		c = u === void 0 ? uu : u,
		p = n.elementContext,
		m = p === void 0 ? In : p,
		v = n.altBoundary,
		y = v === void 0 ? !1 : v,
		_ = n.padding,
		w = _ === void 0 ? 0 : _,
		d = wh(typeof w != 'number' ? w : Sh(w, Er)),
		f = m === In ? lh : In,
		h = e.rects.popper,
		g = e.elements[y ? f : m],
		S = sy(Tn(g) ? g : g.contextElement || tn(e.elements.popper), a, c, s),
		k = fr(e.elements.reference),
		N = kh({ reference: k, element: h, strategy: 'absolute', placement: i }),
		x = ua(Object.assign({}, h, N)),
		$ = m === In ? x : k,
		P = {
			top: S.top - $.top + d.top,
			bottom: $.bottom - S.bottom + d.bottom,
			left: S.left - $.left + d.left,
			right: $.right - S.right + d.right,
		},
		b = e.modifiersData.offset
	if (m === In && b) {
		var ie = b[i]
		Object.keys(P).forEach(function (q) {
			var nt = [Ie, De].indexOf(q) >= 0 ? 1 : -1,
				ft = [ge, De].indexOf(q) >= 0 ? 'y' : 'x'
			P[q] += ie[ft] * nt
		})
	}
	return P
}
function ly(e, t) {
	t === void 0 && (t = {})
	var n = t,
		r = n.placement,
		i = n.boundary,
		o = n.rootBoundary,
		s = n.padding,
		l = n.flipVariations,
		a = n.allowedAutoPlacements,
		u = a === void 0 ? cu : a,
		c = dr(r),
		p = c
			? l
				? la
				: la.filter(function (y) {
						return dr(y) === c
				  })
			: Er,
		m = p.filter(function (y) {
			return u.indexOf(y) >= 0
		})
	m.length === 0 && (m = p)
	var v = m.reduce(function (y, _) {
		return (
			(y[_] = pr(e, { placement: _, boundary: i, rootBoundary: o, padding: s })[
				at(_)
			]),
			y
		)
	}, {})
	return Object.keys(v).sort(function (y, _) {
		return v[y] - v[_]
	})
}
function ay(e) {
	if (at(e) === fs) return []
	var t = fo(e)
	return [ef(e), t, ef(t)]
}
function uy(e) {
	var t = e.state,
		n = e.options,
		r = e.name
	if (!t.modifiersData[r]._skip) {
		for (
			var i = n.mainAxis,
				o = i === void 0 ? !0 : i,
				s = n.altAxis,
				l = s === void 0 ? !0 : s,
				a = n.fallbackPlacements,
				u = n.padding,
				c = n.boundary,
				p = n.rootBoundary,
				m = n.altBoundary,
				v = n.flipVariations,
				y = v === void 0 ? !0 : v,
				_ = n.allowedAutoPlacements,
				w = t.options.placement,
				d = at(w),
				f = d === w,
				h = a || (f || !y ? [fo(w)] : ay(w)),
				g = [w].concat(h).reduce(function (Ee, je) {
					return Ee.concat(
						at(je) === fs
							? ly(t, {
									placement: je,
									boundary: c,
									rootBoundary: p,
									padding: u,
									flipVariations: y,
									allowedAutoPlacements: _,
							  })
							: je
					)
				}, []),
				S = t.rects.reference,
				k = t.rects.popper,
				N = new Map(),
				x = !0,
				$ = g[0],
				P = 0;
			P < g.length;
			P++
		) {
			var b = g[P],
				ie = at(b),
				q = dr(b) === Cn,
				nt = [ge, De].indexOf(ie) >= 0,
				ft = nt ? 'width' : 'height',
				oe = pr(t, {
					placement: b,
					boundary: c,
					rootBoundary: p,
					altBoundary: m,
					padding: u,
				}),
				pe = nt ? (q ? Ie : ve) : q ? De : ge
			S[ft] > k[ft] && (pe = fo(pe))
			var O = fo(pe),
				I = []
			if (
				(o && I.push(oe[ie] <= 0),
				l && I.push(oe[pe] <= 0, oe[O] <= 0),
				I.every(function (Ee) {
					return Ee
				}))
			) {
				;($ = b), (x = !1)
				break
			}
			N.set(b, I)
		}
		if (x)
			for (
				var R = y ? 3 : 1,
					V = function (je) {
						var xe = g.find(function (pt) {
							var on = N.get(pt)
							if (on)
								return on.slice(0, je).every(function (ys) {
									return ys
								})
						})
						if (xe) return ($ = xe), 'break'
					},
					B = R;
				B > 0;
				B--
			) {
				var dt = V(B)
				if (dt === 'break') break
			}
		t.placement !== $ &&
			((t.modifiersData[r]._skip = !0), (t.placement = $), (t.reset = !0))
	}
}
const Nh = {
	name: 'flip',
	enabled: !0,
	phase: 'main',
	fn: uy,
	requiresIfExists: ['offset'],
	data: { _skip: !1 },
}
function nf(e, t, n) {
	return (
		n === void 0 && (n = { x: 0, y: 0 }),
		{
			top: e.top - t.height - n.y,
			right: e.right - t.width + n.x,
			bottom: e.bottom - t.height + n.y,
			left: e.left - t.width - n.x,
		}
	)
}
function rf(e) {
	return [ge, Ie, De, ve].some(function (t) {
		return e[t] >= 0
	})
}
function cy(e) {
	var t = e.state,
		n = e.name,
		r = t.rects.reference,
		i = t.rects.popper,
		o = t.modifiersData.preventOverflow,
		s = pr(t, { elementContext: 'reference' }),
		l = pr(t, { altBoundary: !0 }),
		a = nf(s, r),
		u = nf(l, i, o),
		c = rf(a),
		p = rf(u)
	;(t.modifiersData[n] = {
		referenceClippingOffsets: a,
		popperEscapeOffsets: u,
		isReferenceHidden: c,
		hasPopperEscaped: p,
	}),
		(t.attributes.popper = Object.assign({}, t.attributes.popper, {
			'data-popper-reference-hidden': c,
			'data-popper-escaped': p,
		}))
}
const xh = {
	name: 'hide',
	enabled: !0,
	phase: 'main',
	requiresIfExists: ['preventOverflow'],
	fn: cy,
}
function fy(e, t, n) {
	var r = at(e),
		i = [ve, ge].indexOf(r) >= 0 ? -1 : 1,
		o = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
		s = o[0],
		l = o[1]
	return (
		(s = s || 0),
		(l = (l || 0) * i),
		[ve, Ie].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l }
	)
}
function dy(e) {
	var t = e.state,
		n = e.options,
		r = e.name,
		i = n.offset,
		o = i === void 0 ? [0, 0] : i,
		s = cu.reduce(function (c, p) {
			return (c[p] = fy(p, t.rects, o)), c
		}, {}),
		l = s[t.placement],
		a = l.x,
		u = l.y
	t.modifiersData.popperOffsets != null &&
		((t.modifiersData.popperOffsets.x += a),
		(t.modifiersData.popperOffsets.y += u)),
		(t.modifiersData[r] = s)
}
const Ah = {
	name: 'offset',
	enabled: !0,
	phase: 'main',
	requires: ['popperOffsets'],
	fn: dy,
}
function py(e) {
	var t = e.state,
		n = e.name
	t.modifiersData[n] = kh({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: 'absolute',
		placement: t.placement,
	})
}
const Eu = {
	name: 'popperOffsets',
	enabled: !0,
	phase: 'read',
	fn: py,
	data: {},
}
function hy(e) {
	return e === 'x' ? 'y' : 'x'
}
function my(e) {
	var t = e.state,
		n = e.options,
		r = e.name,
		i = n.mainAxis,
		o = i === void 0 ? !0 : i,
		s = n.altAxis,
		l = s === void 0 ? !1 : s,
		a = n.boundary,
		u = n.rootBoundary,
		c = n.altBoundary,
		p = n.padding,
		m = n.tether,
		v = m === void 0 ? !0 : m,
		y = n.tetherOffset,
		_ = y === void 0 ? 0 : y,
		w = pr(t, { boundary: a, rootBoundary: u, padding: p, altBoundary: c }),
		d = at(t.placement),
		f = dr(t.placement),
		h = !f,
		g = hu(d),
		S = hy(g),
		k = t.modifiersData.popperOffsets,
		N = t.rects.reference,
		x = t.rects.popper,
		$ =
			typeof _ == 'function'
				? _(Object.assign({}, t.rects, { placement: t.placement }))
				: _,
		P =
			typeof $ == 'number'
				? { mainAxis: $, altAxis: $ }
				: Object.assign({ mainAxis: 0, altAxis: 0 }, $),
		b = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
		ie = { x: 0, y: 0 }
	if (k) {
		if (o) {
			var q,
				nt = g === 'y' ? ge : ve,
				ft = g === 'y' ? De : Ie,
				oe = g === 'y' ? 'height' : 'width',
				pe = k[g],
				O = pe + w[nt],
				I = pe - w[ft],
				R = v ? -x[oe] / 2 : 0,
				V = f === Cn ? N[oe] : x[oe],
				B = f === Cn ? -x[oe] : -N[oe],
				dt = t.elements.arrow,
				Ee = v && dt ? pu(dt) : { width: 0, height: 0 },
				je = t.modifiersData['arrow#persistent']
					? t.modifiersData['arrow#persistent'].padding
					: Eh(),
				xe = je[nt],
				pt = je[ft],
				on = Yr(0, N[oe], Ee[oe]),
				ys = h
					? N[oe] / 2 - R - on - xe - P.mainAxis
					: V - on - xe - P.mainAxis,
				sm = h
					? -N[oe] / 2 + R + on + pt + P.mainAxis
					: B + on + pt + P.mainAxis,
				Es = t.elements.arrow && Si(t.elements.arrow),
				lm = Es ? (g === 'y' ? Es.clientTop || 0 : Es.clientLeft || 0) : 0,
				xu = (q = b == null ? void 0 : b[g]) != null ? q : 0,
				am = pe + ys - xu - lm,
				um = pe + sm - xu,
				Au = Yr(v ? Uo(O, am) : O, pe, v ? vn(I, um) : I)
			;(k[g] = Au), (ie[g] = Au - pe)
		}
		if (l) {
			var Ou,
				cm = g === 'x' ? ge : ve,
				fm = g === 'x' ? De : Ie,
				sn = k[S],
				xi = S === 'y' ? 'height' : 'width',
				Lu = sn + w[cm],
				Pu = sn - w[fm],
				ws = [ge, ve].indexOf(d) !== -1,
				Du = (Ou = b == null ? void 0 : b[S]) != null ? Ou : 0,
				Iu = ws ? Lu : sn - N[xi] - x[xi] - Du + P.altAxis,
				Ru = ws ? sn + N[xi] + x[xi] - Du - P.altAxis : Pu,
				$u = v && ws ? K_(Iu, sn, Ru) : Yr(v ? Iu : Lu, sn, v ? Ru : Pu)
			;(k[S] = $u), (ie[S] = $u - sn)
		}
		t.modifiersData[r] = ie
	}
}
const Oh = {
	name: 'preventOverflow',
	enabled: !0,
	phase: 'main',
	fn: my,
	requiresIfExists: ['offset'],
}
function gy(e) {
	return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function vy(e) {
	return e === Re(e) || !Ue(e) ? vu(e) : gy(e)
}
function _y(e) {
	var t = e.getBoundingClientRect(),
		n = cr(t.width) / e.offsetWidth || 1,
		r = cr(t.height) / e.offsetHeight || 1
	return n !== 1 || r !== 1
}
function yy(e, t, n) {
	n === void 0 && (n = !1)
	var r = Ue(t),
		i = Ue(t) && _y(t),
		o = tn(t),
		s = fr(e, i, n),
		l = { scrollLeft: 0, scrollTop: 0 },
		a = { x: 0, y: 0 }
	return (
		(r || (!r && !n)) &&
			((ct(t) !== 'body' || yu(o)) && (l = vy(t)),
			Ue(t)
				? ((a = fr(t, !0)), (a.x += t.clientLeft), (a.y += t.clientTop))
				: o && (a.x = _u(o))),
		{
			x: s.left + l.scrollLeft - a.x,
			y: s.top + l.scrollTop - a.y,
			width: s.width,
			height: s.height,
		}
	)
}
function Ey(e) {
	var t = new Map(),
		n = new Set(),
		r = []
	e.forEach(function (o) {
		t.set(o.name, o)
	})
	function i(o) {
		n.add(o.name)
		var s = [].concat(o.requires || [], o.requiresIfExists || [])
		s.forEach(function (l) {
			if (!n.has(l)) {
				var a = t.get(l)
				a && i(a)
			}
		}),
			r.push(o)
	}
	return (
		e.forEach(function (o) {
			n.has(o.name) || i(o)
		}),
		r
	)
}
function wy(e) {
	var t = Ey(e)
	return vh.reduce(function (n, r) {
		return n.concat(
			t.filter(function (i) {
				return i.phase === r
			})
		)
	}, [])
}
function Sy(e) {
	var t
	return function () {
		return (
			t ||
				(t = new Promise(function (n) {
					Promise.resolve().then(function () {
						;(t = void 0), n(e())
					})
				})),
			t
		)
	}
}
function Cy(e) {
	var t = e.reduce(function (n, r) {
		var i = n[r.name]
		return (
			(n[r.name] = i
				? Object.assign({}, i, r, {
						options: Object.assign({}, i.options, r.options),
						data: Object.assign({}, i.data, r.data),
				  })
				: r),
			n
		)
	}, {})
	return Object.keys(t).map(function (n) {
		return t[n]
	})
}
var of = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function sf() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n]
	return !t.some(function (r) {
		return !(r && typeof r.getBoundingClientRect == 'function')
	})
}
function ps(e) {
	e === void 0 && (e = {})
	var t = e,
		n = t.defaultModifiers,
		r = n === void 0 ? [] : n,
		i = t.defaultOptions,
		o = i === void 0 ? of : i
	return function (l, a, u) {
		u === void 0 && (u = o)
		var c = {
				placement: 'bottom',
				orderedModifiers: [],
				options: Object.assign({}, of, o),
				modifiersData: {},
				elements: { reference: l, popper: a },
				attributes: {},
				styles: {},
			},
			p = [],
			m = !1,
			v = {
				state: c,
				setOptions: function (d) {
					var f = typeof d == 'function' ? d(c.options) : d
					_(),
						(c.options = Object.assign({}, o, c.options, f)),
						(c.scrollParents = {
							reference: Tn(l)
								? Qr(l)
								: l.contextElement
								? Qr(l.contextElement)
								: [],
							popper: Qr(a),
						})
					var h = wy(Cy([].concat(r, c.options.modifiers)))
					return (
						(c.orderedModifiers = h.filter(function (g) {
							return g.enabled
						})),
						y(),
						v.update()
					)
				},
				forceUpdate: function () {
					if (!m) {
						var d = c.elements,
							f = d.reference,
							h = d.popper
						if (sf(f, h)) {
							;(c.rects = {
								reference: yy(f, Si(h), c.options.strategy === 'fixed'),
								popper: pu(h),
							}),
								(c.reset = !1),
								(c.placement = c.options.placement),
								c.orderedModifiers.forEach(function (P) {
									return (c.modifiersData[P.name] = Object.assign({}, P.data))
								})
							for (var g = 0; g < c.orderedModifiers.length; g++) {
								if (c.reset === !0) {
									;(c.reset = !1), (g = -1)
									continue
								}
								var S = c.orderedModifiers[g],
									k = S.fn,
									N = S.options,
									x = N === void 0 ? {} : N,
									$ = S.name
								typeof k == 'function' &&
									(c = k({ state: c, options: x, name: $, instance: v }) || c)
							}
						}
					}
				},
				update: Sy(function () {
					return new Promise(function (w) {
						v.forceUpdate(), w(c)
					})
				}),
				destroy: function () {
					_(), (m = !0)
				},
			}
		if (!sf(l, a)) return v
		v.setOptions(u).then(function (w) {
			!m && u.onFirstUpdate && u.onFirstUpdate(w)
		})
		function y() {
			c.orderedModifiers.forEach(function (w) {
				var d = w.name,
					f = w.options,
					h = f === void 0 ? {} : f,
					g = w.effect
				if (typeof g == 'function') {
					var S = g({ state: c, name: d, instance: v, options: h }),
						k = function () {}
					p.push(S || k)
				}
			})
		}
		function _() {
			p.forEach(function (w) {
				return w()
			}),
				(p = [])
		}
		return v
	}
}
var Ty = ps(),
	ky = [gu, Eu, mu, du],
	Ny = ps({ defaultModifiers: ky }),
	xy = [gu, Eu, mu, du, Ah, Nh, Oh, Ch, xh],
	wu = ps({ defaultModifiers: xy })
const Lh = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			afterMain: ph,
			afterRead: ch,
			afterWrite: gh,
			applyStyles: du,
			arrow: Ch,
			auto: fs,
			basePlacements: Er,
			beforeMain: fh,
			beforeRead: ah,
			beforeWrite: hh,
			bottom: De,
			clippingParents: sh,
			computeStyles: mu,
			createPopper: wu,
			createPopperBase: Ty,
			createPopperLite: Ny,
			detectOverflow: pr,
			end: ur,
			eventListeners: gu,
			flip: Nh,
			hide: xh,
			left: ve,
			main: dh,
			modifierPhases: vh,
			offset: Ah,
			placements: cu,
			popper: In,
			popperGenerator: ps,
			popperOffsets: Eu,
			preventOverflow: Oh,
			read: uh,
			reference: lh,
			right: Ie,
			start: Cn,
			top: ge,
			variationPlacements: la,
			viewport: uu,
			write: mh,
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
)
/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Ot = new Map(),
	Gs = {
		set(e, t, n) {
			Ot.has(e) || Ot.set(e, new Map())
			const r = Ot.get(e)
			if (!r.has(t) && r.size !== 0) {
				console.error(
					`Bootstrap doesn't allow more than one instance per element. Bound instance: ${
						Array.from(r.keys())[0]
					}.`
				)
				return
			}
			r.set(t, n)
		},
		get(e, t) {
			return (Ot.has(e) && Ot.get(e).get(t)) || null
		},
		remove(e, t) {
			if (!Ot.has(e)) return
			const n = Ot.get(e)
			n.delete(t), n.size === 0 && Ot.delete(e)
		},
	},
	Ay = 1e6,
	Oy = 1e3,
	ca = 'transitionend',
	Ph = (e) => (
		e &&
			window.CSS &&
			window.CSS.escape &&
			(e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
		e
	),
	Ly = (e) =>
		e == null
			? `${e}`
			: Object.prototype.toString
					.call(e)
					.match(/\s([a-z]+)/i)[1]
					.toLowerCase(),
	Py = (e) => {
		do e += Math.floor(Math.random() * Ay)
		while (document.getElementById(e))
		return e
	},
	Dy = (e) => {
		if (!e) return 0
		let { transitionDuration: t, transitionDelay: n } =
			window.getComputedStyle(e)
		const r = Number.parseFloat(t),
			i = Number.parseFloat(n)
		return !r && !i
			? 0
			: ((t = t.split(',')[0]),
			  (n = n.split(',')[0]),
			  (Number.parseFloat(t) + Number.parseFloat(n)) * Oy)
	},
	Dh = (e) => {
		e.dispatchEvent(new Event(ca))
	},
	yt = (e) =>
		!e || typeof e != 'object'
			? !1
			: (typeof e.jquery < 'u' && (e = e[0]), typeof e.nodeType < 'u'),
	Qt = (e) =>
		yt(e)
			? e.jquery
				? e[0]
				: e
			: typeof e == 'string' && e.length > 0
			? document.querySelector(Ph(e))
			: null,
	wr = (e) => {
		if (!yt(e) || e.getClientRects().length === 0) return !1
		const t = getComputedStyle(e).getPropertyValue('visibility') === 'visible',
			n = e.closest('details:not([open])')
		if (!n) return t
		if (n !== e) {
			const r = e.closest('summary')
			if ((r && r.parentNode !== n) || r === null) return !1
		}
		return t
	},
	Gt = (e) =>
		!e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains('disabled')
			? !0
			: typeof e.disabled < 'u'
			? e.disabled
			: e.hasAttribute('disabled') && e.getAttribute('disabled') !== 'false',
	Ih = (e) => {
		if (!document.documentElement.attachShadow) return null
		if (typeof e.getRootNode == 'function') {
			const t = e.getRootNode()
			return t instanceof ShadowRoot ? t : null
		}
		return e instanceof ShadowRoot ? e : e.parentNode ? Ih(e.parentNode) : null
	},
	Wo = () => {},
	Ci = (e) => {
		e.offsetHeight
	},
	Rh = () =>
		window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
			? window.jQuery
			: null,
	Xs = [],
	Iy = (e) => {
		document.readyState === 'loading'
			? (Xs.length ||
					document.addEventListener('DOMContentLoaded', () => {
						for (const t of Xs) t()
					}),
			  Xs.push(e))
			: e()
	},
	He = () => document.documentElement.dir === 'rtl',
	Ye = (e) => {
		Iy(() => {
			const t = Rh()
			if (t) {
				const n = e.NAME,
					r = t.fn[n]
				;(t.fn[n] = e.jQueryInterface),
					(t.fn[n].Constructor = e),
					(t.fn[n].noConflict = () => ((t.fn[n] = r), e.jQueryInterface))
			}
		})
	},
	Se = (e, t = [], n = e) => (typeof e == 'function' ? e(...t) : n),
	$h = (e, t, n = !0) => {
		if (!n) {
			Se(e)
			return
		}
		const i = Dy(t) + 5
		let o = !1
		const s = ({ target: l }) => {
			l === t && ((o = !0), t.removeEventListener(ca, s), Se(e))
		}
		t.addEventListener(ca, s),
			setTimeout(() => {
				o || Dh(t)
			}, i)
	},
	Su = (e, t, n, r) => {
		const i = e.length
		let o = e.indexOf(t)
		return o === -1
			? !n && r
				? e[i - 1]
				: e[0]
			: ((o += n ? 1 : -1),
			  r && (o = (o + i) % i),
			  e[Math.max(0, Math.min(o, i - 1))])
	},
	Ry = /[^.]*(?=\..*)\.|.*/,
	$y = /\..*/,
	My = /::\d+$/,
	qs = {}
let lf = 1
const Mh = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
	jy = new Set([
		'click',
		'dblclick',
		'mouseup',
		'mousedown',
		'contextmenu',
		'mousewheel',
		'DOMMouseScroll',
		'mouseover',
		'mouseout',
		'mousemove',
		'selectstart',
		'selectend',
		'keydown',
		'keypress',
		'keyup',
		'orientationchange',
		'touchstart',
		'touchmove',
		'touchend',
		'touchcancel',
		'pointerdown',
		'pointermove',
		'pointerup',
		'pointerleave',
		'pointercancel',
		'gesturestart',
		'gesturechange',
		'gestureend',
		'focus',
		'blur',
		'change',
		'reset',
		'select',
		'submit',
		'focusin',
		'focusout',
		'load',
		'unload',
		'beforeunload',
		'resize',
		'move',
		'DOMContentLoaded',
		'readystatechange',
		'error',
		'abort',
		'scroll',
	])
function jh(e, t) {
	return (t && `${t}::${lf++}`) || e.uidEvent || lf++
}
function bh(e) {
	const t = jh(e)
	return (e.uidEvent = t), (qs[t] = qs[t] || {}), qs[t]
}
function by(e, t) {
	return function n(r) {
		return (
			Cu(r, { delegateTarget: e }),
			n.oneOff && C.off(e, r.type, t),
			t.apply(e, [r])
		)
	}
}
function zy(e, t, n) {
	return function r(i) {
		const o = e.querySelectorAll(t)
		for (let { target: s } = i; s && s !== this; s = s.parentNode)
			for (const l of o)
				if (l === s)
					return (
						Cu(i, { delegateTarget: s }),
						r.oneOff && C.off(e, i.type, t, n),
						n.apply(s, [i])
					)
	}
}
function zh(e, t, n = null) {
	return Object.values(e).find(
		(r) => r.callable === t && r.delegationSelector === n
	)
}
function Fh(e, t, n) {
	const r = typeof t == 'string',
		i = r ? n : t || n
	let o = Vh(e)
	return jy.has(o) || (o = e), [r, i, o]
}
function af(e, t, n, r, i) {
	if (typeof t != 'string' || !e) return
	let [o, s, l] = Fh(t, n, r)
	t in Mh &&
		(s = ((y) =>
			function (_) {
				if (
					!_.relatedTarget ||
					(_.relatedTarget !== _.delegateTarget &&
						!_.delegateTarget.contains(_.relatedTarget))
				)
					return y.call(this, _)
			})(s))
	const a = bh(e),
		u = a[l] || (a[l] = {}),
		c = zh(u, s, o ? n : null)
	if (c) {
		c.oneOff = c.oneOff && i
		return
	}
	const p = jh(s, t.replace(Ry, '')),
		m = o ? zy(e, n, s) : by(e, s)
	;(m.delegationSelector = o ? n : null),
		(m.callable = s),
		(m.oneOff = i),
		(m.uidEvent = p),
		(u[p] = m),
		e.addEventListener(l, m, o)
}
function fa(e, t, n, r, i) {
	const o = zh(t[n], r, i)
	o && (e.removeEventListener(n, o, !!i), delete t[n][o.uidEvent])
}
function Fy(e, t, n, r) {
	const i = t[n] || {}
	for (const [o, s] of Object.entries(i))
		o.includes(r) && fa(e, t, n, s.callable, s.delegationSelector)
}
function Vh(e) {
	return (e = e.replace($y, '')), Mh[e] || e
}
const C = {
	on(e, t, n, r) {
		af(e, t, n, r, !1)
	},
	one(e, t, n, r) {
		af(e, t, n, r, !0)
	},
	off(e, t, n, r) {
		if (typeof t != 'string' || !e) return
		const [i, o, s] = Fh(t, n, r),
			l = s !== t,
			a = bh(e),
			u = a[s] || {},
			c = t.startsWith('.')
		if (typeof o < 'u') {
			if (!Object.keys(u).length) return
			fa(e, a, s, o, i ? n : null)
			return
		}
		if (c) for (const p of Object.keys(a)) Fy(e, a, p, t.slice(1))
		for (const [p, m] of Object.entries(u)) {
			const v = p.replace(My, '')
			;(!l || t.includes(v)) && fa(e, a, s, m.callable, m.delegationSelector)
		}
	},
	trigger(e, t, n) {
		if (typeof t != 'string' || !e) return null
		const r = Rh(),
			i = Vh(t),
			o = t !== i
		let s = null,
			l = !0,
			a = !0,
			u = !1
		o &&
			r &&
			((s = r.Event(t, n)),
			r(e).trigger(s),
			(l = !s.isPropagationStopped()),
			(a = !s.isImmediatePropagationStopped()),
			(u = s.isDefaultPrevented()))
		const c = Cu(new Event(t, { bubbles: l, cancelable: !0 }), n)
		return (
			u && c.preventDefault(),
			a && e.dispatchEvent(c),
			c.defaultPrevented && s && s.preventDefault(),
			c
		)
	},
}
function Cu(e, t = {}) {
	for (const [n, r] of Object.entries(t))
		try {
			e[n] = r
		} catch {
			Object.defineProperty(e, n, {
				configurable: !0,
				get() {
					return r
				},
			})
		}
	return e
}
function uf(e) {
	if (e === 'true') return !0
	if (e === 'false') return !1
	if (e === Number(e).toString()) return Number(e)
	if (e === '' || e === 'null') return null
	if (typeof e != 'string') return e
	try {
		return JSON.parse(decodeURIComponent(e))
	} catch {
		return e
	}
}
function Js(e) {
	return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
}
const Et = {
	setDataAttribute(e, t, n) {
		e.setAttribute(`data-bs-${Js(t)}`, n)
	},
	removeDataAttribute(e, t) {
		e.removeAttribute(`data-bs-${Js(t)}`)
	},
	getDataAttributes(e) {
		if (!e) return {}
		const t = {},
			n = Object.keys(e.dataset).filter(
				(r) => r.startsWith('bs') && !r.startsWith('bsConfig')
			)
		for (const r of n) {
			let i = r.replace(/^bs/, '')
			;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
				(t[i] = uf(e.dataset[r]))
		}
		return t
	},
	getDataAttribute(e, t) {
		return uf(e.getAttribute(`data-bs-${Js(t)}`))
	},
}
class Ti {
	static get Default() {
		return {}
	}
	static get DefaultType() {
		return {}
	}
	static get NAME() {
		throw new Error(
			'You have to implement the static method "NAME", for each component!'
		)
	}
	_getConfig(t) {
		return (
			(t = this._mergeConfigObj(t)),
			(t = this._configAfterMerge(t)),
			this._typeCheckConfig(t),
			t
		)
	}
	_configAfterMerge(t) {
		return t
	}
	_mergeConfigObj(t, n) {
		const r = yt(n) ? Et.getDataAttribute(n, 'config') : {}
		return {
			...this.constructor.Default,
			...(typeof r == 'object' ? r : {}),
			...(yt(n) ? Et.getDataAttributes(n) : {}),
			...(typeof t == 'object' ? t : {}),
		}
	}
	_typeCheckConfig(t, n = this.constructor.DefaultType) {
		for (const [r, i] of Object.entries(n)) {
			const o = t[r],
				s = yt(o) ? 'element' : Ly(o)
			if (!new RegExp(i).test(s))
				throw new TypeError(
					`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`
				)
		}
	}
}
const Vy = '5.3.2'
class tt extends Ti {
	constructor(t, n) {
		super(),
			(t = Qt(t)),
			t &&
				((this._element = t),
				(this._config = this._getConfig(n)),
				Gs.set(this._element, this.constructor.DATA_KEY, this))
	}
	dispose() {
		Gs.remove(this._element, this.constructor.DATA_KEY),
			C.off(this._element, this.constructor.EVENT_KEY)
		for (const t of Object.getOwnPropertyNames(this)) this[t] = null
	}
	_queueCallback(t, n, r = !0) {
		$h(t, n, r)
	}
	_getConfig(t) {
		return (
			(t = this._mergeConfigObj(t, this._element)),
			(t = this._configAfterMerge(t)),
			this._typeCheckConfig(t),
			t
		)
	}
	static getInstance(t) {
		return Gs.get(Qt(t), this.DATA_KEY)
	}
	static getOrCreateInstance(t, n = {}) {
		return this.getInstance(t) || new this(t, typeof n == 'object' ? n : null)
	}
	static get VERSION() {
		return Vy
	}
	static get DATA_KEY() {
		return `bs.${this.NAME}`
	}
	static get EVENT_KEY() {
		return `.${this.DATA_KEY}`
	}
	static eventName(t) {
		return `${t}${this.EVENT_KEY}`
	}
}
const Zs = (e) => {
		let t = e.getAttribute('data-bs-target')
		if (!t || t === '#') {
			let n = e.getAttribute('href')
			if (!n || (!n.includes('#') && !n.startsWith('.'))) return null
			n.includes('#') && !n.startsWith('#') && (n = `#${n.split('#')[1]}`),
				(t = n && n !== '#' ? Ph(n.trim()) : null)
		}
		return t
	},
	D = {
		find(e, t = document.documentElement) {
			return [].concat(...Element.prototype.querySelectorAll.call(t, e))
		},
		findOne(e, t = document.documentElement) {
			return Element.prototype.querySelector.call(t, e)
		},
		children(e, t) {
			return [].concat(...e.children).filter((n) => n.matches(t))
		},
		parents(e, t) {
			const n = []
			let r = e.parentNode.closest(t)
			for (; r; ) n.push(r), (r = r.parentNode.closest(t))
			return n
		},
		prev(e, t) {
			let n = e.previousElementSibling
			for (; n; ) {
				if (n.matches(t)) return [n]
				n = n.previousElementSibling
			}
			return []
		},
		next(e, t) {
			let n = e.nextElementSibling
			for (; n; ) {
				if (n.matches(t)) return [n]
				n = n.nextElementSibling
			}
			return []
		},
		focusableChildren(e) {
			const t = [
				'a',
				'button',
				'input',
				'textarea',
				'select',
				'details',
				'[tabindex]',
				'[contenteditable="true"]',
			]
				.map((n) => `${n}:not([tabindex^="-"])`)
				.join(',')
			return this.find(t, e).filter((n) => !Gt(n) && wr(n))
		},
		getSelectorFromElement(e) {
			const t = Zs(e)
			return t && D.findOne(t) ? t : null
		},
		getElementFromSelector(e) {
			const t = Zs(e)
			return t ? D.findOne(t) : null
		},
		getMultipleElementsFromSelector(e) {
			const t = Zs(e)
			return t ? D.find(t) : []
		},
	},
	hs = (e, t = 'hide') => {
		const n = `click.dismiss${e.EVENT_KEY}`,
			r = e.NAME
		C.on(document, n, `[data-bs-dismiss="${r}"]`, function (i) {
			if (
				(['A', 'AREA'].includes(this.tagName) && i.preventDefault(), Gt(this))
			)
				return
			const o = D.getElementFromSelector(this) || this.closest(`.${r}`)
			e.getOrCreateInstance(o)[t]()
		})
	},
	Uy = 'alert',
	Wy = 'bs.alert',
	Uh = `.${Wy}`,
	By = `close${Uh}`,
	Hy = `closed${Uh}`,
	Ky = 'fade',
	Yy = 'show'
class ms extends tt {
	static get NAME() {
		return Uy
	}
	close() {
		if (C.trigger(this._element, By).defaultPrevented) return
		this._element.classList.remove(Yy)
		const n = this._element.classList.contains(Ky)
		this._queueCallback(() => this._destroyElement(), this._element, n)
	}
	_destroyElement() {
		this._element.remove(), C.trigger(this._element, Hy), this.dispose()
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = ms.getOrCreateInstance(this)
			if (typeof t == 'string') {
				if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
					throw new TypeError(`No method named "${t}"`)
				n[t](this)
			}
		})
	}
}
hs(ms, 'close')
Ye(ms)
const Qy = 'button',
	Gy = 'bs.button',
	Xy = `.${Gy}`,
	qy = '.data-api',
	Jy = 'active',
	cf = '[data-bs-toggle="button"]',
	Zy = `click${Xy}${qy}`
class gs extends tt {
	static get NAME() {
		return Qy
	}
	toggle() {
		this._element.setAttribute(
			'aria-pressed',
			this._element.classList.toggle(Jy)
		)
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = gs.getOrCreateInstance(this)
			t === 'toggle' && n[t]()
		})
	}
}
C.on(document, Zy, cf, (e) => {
	e.preventDefault()
	const t = e.target.closest(cf)
	gs.getOrCreateInstance(t).toggle()
})
Ye(gs)
const e0 = 'swipe',
	Sr = '.bs.swipe',
	t0 = `touchstart${Sr}`,
	n0 = `touchmove${Sr}`,
	r0 = `touchend${Sr}`,
	i0 = `pointerdown${Sr}`,
	o0 = `pointerup${Sr}`,
	s0 = 'touch',
	l0 = 'pen',
	a0 = 'pointer-event',
	u0 = 40,
	c0 = { endCallback: null, leftCallback: null, rightCallback: null },
	f0 = {
		endCallback: '(function|null)',
		leftCallback: '(function|null)',
		rightCallback: '(function|null)',
	}
class Bo extends Ti {
	constructor(t, n) {
		super(),
			(this._element = t),
			!(!t || !Bo.isSupported()) &&
				((this._config = this._getConfig(n)),
				(this._deltaX = 0),
				(this._supportPointerEvents = !!window.PointerEvent),
				this._initEvents())
	}
	static get Default() {
		return c0
	}
	static get DefaultType() {
		return f0
	}
	static get NAME() {
		return e0
	}
	dispose() {
		C.off(this._element, Sr)
	}
	_start(t) {
		if (!this._supportPointerEvents) {
			this._deltaX = t.touches[0].clientX
			return
		}
		this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
	}
	_end(t) {
		this._eventIsPointerPenTouch(t) &&
			(this._deltaX = t.clientX - this._deltaX),
			this._handleSwipe(),
			Se(this._config.endCallback)
	}
	_move(t) {
		this._deltaX =
			t.touches && t.touches.length > 1
				? 0
				: t.touches[0].clientX - this._deltaX
	}
	_handleSwipe() {
		const t = Math.abs(this._deltaX)
		if (t <= u0) return
		const n = t / this._deltaX
		;(this._deltaX = 0),
			n && Se(n > 0 ? this._config.rightCallback : this._config.leftCallback)
	}
	_initEvents() {
		this._supportPointerEvents
			? (C.on(this._element, i0, (t) => this._start(t)),
			  C.on(this._element, o0, (t) => this._end(t)),
			  this._element.classList.add(a0))
			: (C.on(this._element, t0, (t) => this._start(t)),
			  C.on(this._element, n0, (t) => this._move(t)),
			  C.on(this._element, r0, (t) => this._end(t)))
	}
	_eventIsPointerPenTouch(t) {
		return (
			this._supportPointerEvents &&
			(t.pointerType === l0 || t.pointerType === s0)
		)
	}
	static isSupported() {
		return (
			'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
		)
	}
}
const d0 = 'carousel',
	p0 = 'bs.carousel',
	nn = `.${p0}`,
	Wh = '.data-api',
	h0 = 'ArrowLeft',
	m0 = 'ArrowRight',
	g0 = 500,
	Dr = 'next',
	Pn = 'prev',
	Rn = 'left',
	po = 'right',
	v0 = `slide${nn}`,
	el = `slid${nn}`,
	_0 = `keydown${nn}`,
	y0 = `mouseenter${nn}`,
	E0 = `mouseleave${nn}`,
	w0 = `dragstart${nn}`,
	S0 = `load${nn}${Wh}`,
	C0 = `click${nn}${Wh}`,
	Bh = 'carousel',
	Ki = 'active',
	T0 = 'slide',
	k0 = 'carousel-item-end',
	N0 = 'carousel-item-start',
	x0 = 'carousel-item-next',
	A0 = 'carousel-item-prev',
	Hh = '.active',
	Kh = '.carousel-item',
	O0 = Hh + Kh,
	L0 = '.carousel-item img',
	P0 = '.carousel-indicators',
	D0 = '[data-bs-slide], [data-bs-slide-to]',
	I0 = '[data-bs-ride="carousel"]',
	R0 = { [h0]: po, [m0]: Rn },
	$0 = {
		interval: 5e3,
		keyboard: !0,
		pause: 'hover',
		ride: !1,
		touch: !0,
		wrap: !0,
	},
	M0 = {
		interval: '(number|boolean)',
		keyboard: 'boolean',
		pause: '(string|boolean)',
		ride: '(boolean|string)',
		touch: 'boolean',
		wrap: 'boolean',
	}
class ki extends tt {
	constructor(t, n) {
		super(t, n),
			(this._interval = null),
			(this._activeElement = null),
			(this._isSliding = !1),
			(this.touchTimeout = null),
			(this._swipeHelper = null),
			(this._indicatorsElement = D.findOne(P0, this._element)),
			this._addEventListeners(),
			this._config.ride === Bh && this.cycle()
	}
	static get Default() {
		return $0
	}
	static get DefaultType() {
		return M0
	}
	static get NAME() {
		return d0
	}
	next() {
		this._slide(Dr)
	}
	nextWhenVisible() {
		!document.hidden && wr(this._element) && this.next()
	}
	prev() {
		this._slide(Pn)
	}
	pause() {
		this._isSliding && Dh(this._element), this._clearInterval()
	}
	cycle() {
		this._clearInterval(),
			this._updateInterval(),
			(this._interval = setInterval(
				() => this.nextWhenVisible(),
				this._config.interval
			))
	}
	_maybeEnableCycle() {
		if (this._config.ride) {
			if (this._isSliding) {
				C.one(this._element, el, () => this.cycle())
				return
			}
			this.cycle()
		}
	}
	to(t) {
		const n = this._getItems()
		if (t > n.length - 1 || t < 0) return
		if (this._isSliding) {
			C.one(this._element, el, () => this.to(t))
			return
		}
		const r = this._getItemIndex(this._getActive())
		if (r === t) return
		const i = t > r ? Dr : Pn
		this._slide(i, n[t])
	}
	dispose() {
		this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
	}
	_configAfterMerge(t) {
		return (t.defaultInterval = t.interval), t
	}
	_addEventListeners() {
		this._config.keyboard && C.on(this._element, _0, (t) => this._keydown(t)),
			this._config.pause === 'hover' &&
				(C.on(this._element, y0, () => this.pause()),
				C.on(this._element, E0, () => this._maybeEnableCycle())),
			this._config.touch && Bo.isSupported() && this._addTouchEventListeners()
	}
	_addTouchEventListeners() {
		for (const r of D.find(L0, this._element))
			C.on(r, w0, (i) => i.preventDefault())
		const n = {
			leftCallback: () => this._slide(this._directionToOrder(Rn)),
			rightCallback: () => this._slide(this._directionToOrder(po)),
			endCallback: () => {
				this._config.pause === 'hover' &&
					(this.pause(),
					this.touchTimeout && clearTimeout(this.touchTimeout),
					(this.touchTimeout = setTimeout(
						() => this._maybeEnableCycle(),
						g0 + this._config.interval
					)))
			},
		}
		this._swipeHelper = new Bo(this._element, n)
	}
	_keydown(t) {
		if (/input|textarea/i.test(t.target.tagName)) return
		const n = R0[t.key]
		n && (t.preventDefault(), this._slide(this._directionToOrder(n)))
	}
	_getItemIndex(t) {
		return this._getItems().indexOf(t)
	}
	_setActiveIndicatorElement(t) {
		if (!this._indicatorsElement) return
		const n = D.findOne(Hh, this._indicatorsElement)
		n.classList.remove(Ki), n.removeAttribute('aria-current')
		const r = D.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement)
		r && (r.classList.add(Ki), r.setAttribute('aria-current', 'true'))
	}
	_updateInterval() {
		const t = this._activeElement || this._getActive()
		if (!t) return
		const n = Number.parseInt(t.getAttribute('data-bs-interval'), 10)
		this._config.interval = n || this._config.defaultInterval
	}
	_slide(t, n = null) {
		if (this._isSliding) return
		const r = this._getActive(),
			i = t === Dr,
			o = n || Su(this._getItems(), r, i, this._config.wrap)
		if (o === r) return
		const s = this._getItemIndex(o),
			l = (v) =>
				C.trigger(this._element, v, {
					relatedTarget: o,
					direction: this._orderToDirection(t),
					from: this._getItemIndex(r),
					to: s,
				})
		if (l(v0).defaultPrevented || !r || !o) return
		const u = !!this._interval
		this.pause(),
			(this._isSliding = !0),
			this._setActiveIndicatorElement(s),
			(this._activeElement = o)
		const c = i ? N0 : k0,
			p = i ? x0 : A0
		o.classList.add(p), Ci(o), r.classList.add(c), o.classList.add(c)
		const m = () => {
			o.classList.remove(c, p),
				o.classList.add(Ki),
				r.classList.remove(Ki, p, c),
				(this._isSliding = !1),
				l(el)
		}
		this._queueCallback(m, r, this._isAnimated()), u && this.cycle()
	}
	_isAnimated() {
		return this._element.classList.contains(T0)
	}
	_getActive() {
		return D.findOne(O0, this._element)
	}
	_getItems() {
		return D.find(Kh, this._element)
	}
	_clearInterval() {
		this._interval && (clearInterval(this._interval), (this._interval = null))
	}
	_directionToOrder(t) {
		return He() ? (t === Rn ? Pn : Dr) : t === Rn ? Dr : Pn
	}
	_orderToDirection(t) {
		return He() ? (t === Pn ? Rn : po) : t === Pn ? po : Rn
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = ki.getOrCreateInstance(this, t)
			if (typeof t == 'number') {
				n.to(t)
				return
			}
			if (typeof t == 'string') {
				if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
					throw new TypeError(`No method named "${t}"`)
				n[t]()
			}
		})
	}
}
C.on(document, C0, D0, function (e) {
	const t = D.getElementFromSelector(this)
	if (!t || !t.classList.contains(Bh)) return
	e.preventDefault()
	const n = ki.getOrCreateInstance(t),
		r = this.getAttribute('data-bs-slide-to')
	if (r) {
		n.to(r), n._maybeEnableCycle()
		return
	}
	if (Et.getDataAttribute(this, 'slide') === 'next') {
		n.next(), n._maybeEnableCycle()
		return
	}
	n.prev(), n._maybeEnableCycle()
})
C.on(window, S0, () => {
	const e = D.find(I0)
	for (const t of e) ki.getOrCreateInstance(t)
})
Ye(ki)
const j0 = 'collapse',
	b0 = 'bs.collapse',
	Ni = `.${b0}`,
	z0 = '.data-api',
	F0 = `show${Ni}`,
	V0 = `shown${Ni}`,
	U0 = `hide${Ni}`,
	W0 = `hidden${Ni}`,
	B0 = `click${Ni}${z0}`,
	tl = 'show',
	Qn = 'collapse',
	Yi = 'collapsing',
	H0 = 'collapsed',
	K0 = `:scope .${Qn} .${Qn}`,
	Y0 = 'collapse-horizontal',
	Q0 = 'width',
	G0 = 'height',
	X0 = '.collapse.show, .collapse.collapsing',
	da = '[data-bs-toggle="collapse"]',
	q0 = { parent: null, toggle: !0 },
	J0 = { parent: '(null|element)', toggle: 'boolean' }
class hi extends tt {
	constructor(t, n) {
		super(t, n), (this._isTransitioning = !1), (this._triggerArray = [])
		const r = D.find(da)
		for (const i of r) {
			const o = D.getSelectorFromElement(i),
				s = D.find(o).filter((l) => l === this._element)
			o !== null && s.length && this._triggerArray.push(i)
		}
		this._initializeChildren(),
			this._config.parent ||
				this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
			this._config.toggle && this.toggle()
	}
	static get Default() {
		return q0
	}
	static get DefaultType() {
		return J0
	}
	static get NAME() {
		return j0
	}
	toggle() {
		this._isShown() ? this.hide() : this.show()
	}
	show() {
		if (this._isTransitioning || this._isShown()) return
		let t = []
		if (
			(this._config.parent &&
				(t = this._getFirstLevelChildren(X0)
					.filter((l) => l !== this._element)
					.map((l) => hi.getOrCreateInstance(l, { toggle: !1 }))),
			(t.length && t[0]._isTransitioning) ||
				C.trigger(this._element, F0).defaultPrevented)
		)
			return
		for (const l of t) l.hide()
		const r = this._getDimension()
		this._element.classList.remove(Qn),
			this._element.classList.add(Yi),
			(this._element.style[r] = 0),
			this._addAriaAndCollapsedClass(this._triggerArray, !0),
			(this._isTransitioning = !0)
		const i = () => {
				;(this._isTransitioning = !1),
					this._element.classList.remove(Yi),
					this._element.classList.add(Qn, tl),
					(this._element.style[r] = ''),
					C.trigger(this._element, V0)
			},
			s = `scroll${r[0].toUpperCase() + r.slice(1)}`
		this._queueCallback(i, this._element, !0),
			(this._element.style[r] = `${this._element[s]}px`)
	}
	hide() {
		if (
			this._isTransitioning ||
			!this._isShown() ||
			C.trigger(this._element, U0).defaultPrevented
		)
			return
		const n = this._getDimension()
		;(this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
			Ci(this._element),
			this._element.classList.add(Yi),
			this._element.classList.remove(Qn, tl)
		for (const i of this._triggerArray) {
			const o = D.getElementFromSelector(i)
			o && !this._isShown(o) && this._addAriaAndCollapsedClass([i], !1)
		}
		this._isTransitioning = !0
		const r = () => {
			;(this._isTransitioning = !1),
				this._element.classList.remove(Yi),
				this._element.classList.add(Qn),
				C.trigger(this._element, W0)
		}
		;(this._element.style[n] = ''), this._queueCallback(r, this._element, !0)
	}
	_isShown(t = this._element) {
		return t.classList.contains(tl)
	}
	_configAfterMerge(t) {
		return (t.toggle = !!t.toggle), (t.parent = Qt(t.parent)), t
	}
	_getDimension() {
		return this._element.classList.contains(Y0) ? Q0 : G0
	}
	_initializeChildren() {
		if (!this._config.parent) return
		const t = this._getFirstLevelChildren(da)
		for (const n of t) {
			const r = D.getElementFromSelector(n)
			r && this._addAriaAndCollapsedClass([n], this._isShown(r))
		}
	}
	_getFirstLevelChildren(t) {
		const n = D.find(K0, this._config.parent)
		return D.find(t, this._config.parent).filter((r) => !n.includes(r))
	}
	_addAriaAndCollapsedClass(t, n) {
		if (t.length)
			for (const r of t)
				r.classList.toggle(H0, !n), r.setAttribute('aria-expanded', n)
	}
	static jQueryInterface(t) {
		const n = {}
		return (
			typeof t == 'string' && /show|hide/.test(t) && (n.toggle = !1),
			this.each(function () {
				const r = hi.getOrCreateInstance(this, n)
				if (typeof t == 'string') {
					if (typeof r[t] > 'u') throw new TypeError(`No method named "${t}"`)
					r[t]()
				}
			})
		)
	}
}
C.on(document, B0, da, function (e) {
	;(e.target.tagName === 'A' ||
		(e.delegateTarget && e.delegateTarget.tagName === 'A')) &&
		e.preventDefault()
	for (const t of D.getMultipleElementsFromSelector(this))
		hi.getOrCreateInstance(t, { toggle: !1 }).toggle()
})
Ye(hi)
const ff = 'dropdown',
	Z0 = 'bs.dropdown',
	An = `.${Z0}`,
	Tu = '.data-api',
	eE = 'Escape',
	df = 'Tab',
	tE = 'ArrowUp',
	pf = 'ArrowDown',
	nE = 2,
	rE = `hide${An}`,
	iE = `hidden${An}`,
	oE = `show${An}`,
	sE = `shown${An}`,
	Yh = `click${An}${Tu}`,
	Qh = `keydown${An}${Tu}`,
	lE = `keyup${An}${Tu}`,
	$n = 'show',
	aE = 'dropup',
	uE = 'dropend',
	cE = 'dropstart',
	fE = 'dropup-center',
	dE = 'dropdown-center',
	dn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
	pE = `${dn}.${$n}`,
	ho = '.dropdown-menu',
	hE = '.navbar',
	mE = '.navbar-nav',
	gE = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
	vE = He() ? 'top-end' : 'top-start',
	_E = He() ? 'top-start' : 'top-end',
	yE = He() ? 'bottom-end' : 'bottom-start',
	EE = He() ? 'bottom-start' : 'bottom-end',
	wE = He() ? 'left-start' : 'right-start',
	SE = He() ? 'right-start' : 'left-start',
	CE = 'top',
	TE = 'bottom',
	kE = {
		autoClose: !0,
		boundary: 'clippingParents',
		display: 'dynamic',
		offset: [0, 2],
		popperConfig: null,
		reference: 'toggle',
	},
	NE = {
		autoClose: '(boolean|string)',
		boundary: '(string|element)',
		display: 'string',
		offset: '(array|string|function)',
		popperConfig: '(null|object|function)',
		reference: '(string|element|object)',
	}
class ut extends tt {
	constructor(t, n) {
		super(t, n),
			(this._popper = null),
			(this._parent = this._element.parentNode),
			(this._menu =
				D.next(this._element, ho)[0] ||
				D.prev(this._element, ho)[0] ||
				D.findOne(ho, this._parent)),
			(this._inNavbar = this._detectNavbar())
	}
	static get Default() {
		return kE
	}
	static get DefaultType() {
		return NE
	}
	static get NAME() {
		return ff
	}
	toggle() {
		return this._isShown() ? this.hide() : this.show()
	}
	show() {
		if (Gt(this._element) || this._isShown()) return
		const t = { relatedTarget: this._element }
		if (!C.trigger(this._element, oE, t).defaultPrevented) {
			if (
				(this._createPopper(),
				'ontouchstart' in document.documentElement && !this._parent.closest(mE))
			)
				for (const r of [].concat(...document.body.children))
					C.on(r, 'mouseover', Wo)
			this._element.focus(),
				this._element.setAttribute('aria-expanded', !0),
				this._menu.classList.add($n),
				this._element.classList.add($n),
				C.trigger(this._element, sE, t)
		}
	}
	hide() {
		if (Gt(this._element) || !this._isShown()) return
		const t = { relatedTarget: this._element }
		this._completeHide(t)
	}
	dispose() {
		this._popper && this._popper.destroy(), super.dispose()
	}
	update() {
		;(this._inNavbar = this._detectNavbar()),
			this._popper && this._popper.update()
	}
	_completeHide(t) {
		if (!C.trigger(this._element, rE, t).defaultPrevented) {
			if ('ontouchstart' in document.documentElement)
				for (const r of [].concat(...document.body.children))
					C.off(r, 'mouseover', Wo)
			this._popper && this._popper.destroy(),
				this._menu.classList.remove($n),
				this._element.classList.remove($n),
				this._element.setAttribute('aria-expanded', 'false'),
				Et.removeDataAttribute(this._menu, 'popper'),
				C.trigger(this._element, iE, t)
		}
	}
	_getConfig(t) {
		if (
			((t = super._getConfig(t)),
			typeof t.reference == 'object' &&
				!yt(t.reference) &&
				typeof t.reference.getBoundingClientRect != 'function')
		)
			throw new TypeError(
				`${ff.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
			)
		return t
	}
	_createPopper() {
		if (typeof Lh > 'u')
			throw new TypeError(
				"Bootstrap's dropdowns require Popper (https://popper.js.org)"
			)
		let t = this._element
		this._config.reference === 'parent'
			? (t = this._parent)
			: yt(this._config.reference)
			? (t = Qt(this._config.reference))
			: typeof this._config.reference == 'object' &&
			  (t = this._config.reference)
		const n = this._getPopperConfig()
		this._popper = wu(t, this._menu, n)
	}
	_isShown() {
		return this._menu.classList.contains($n)
	}
	_getPlacement() {
		const t = this._parent
		if (t.classList.contains(uE)) return wE
		if (t.classList.contains(cE)) return SE
		if (t.classList.contains(fE)) return CE
		if (t.classList.contains(dE)) return TE
		const n =
			getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() ===
			'end'
		return t.classList.contains(aE) ? (n ? _E : vE) : n ? EE : yE
	}
	_detectNavbar() {
		return this._element.closest(hE) !== null
	}
	_getOffset() {
		const { offset: t } = this._config
		return typeof t == 'string'
			? t.split(',').map((n) => Number.parseInt(n, 10))
			: typeof t == 'function'
			? (n) => t(n, this._element)
			: t
	}
	_getPopperConfig() {
		const t = {
			placement: this._getPlacement(),
			modifiers: [
				{
					name: 'preventOverflow',
					options: { boundary: this._config.boundary },
				},
				{ name: 'offset', options: { offset: this._getOffset() } },
			],
		}
		return (
			(this._inNavbar || this._config.display === 'static') &&
				(Et.setDataAttribute(this._menu, 'popper', 'static'),
				(t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
			{ ...t, ...Se(this._config.popperConfig, [t]) }
		)
	}
	_selectMenuItem({ key: t, target: n }) {
		const r = D.find(gE, this._menu).filter((i) => wr(i))
		r.length && Su(r, n, t === pf, !r.includes(n)).focus()
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = ut.getOrCreateInstance(this, t)
			if (typeof t == 'string') {
				if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
				n[t]()
			}
		})
	}
	static clearMenus(t) {
		if (t.button === nE || (t.type === 'keyup' && t.key !== df)) return
		const n = D.find(pE)
		for (const r of n) {
			const i = ut.getInstance(r)
			if (!i || i._config.autoClose === !1) continue
			const o = t.composedPath(),
				s = o.includes(i._menu)
			if (
				o.includes(i._element) ||
				(i._config.autoClose === 'inside' && !s) ||
				(i._config.autoClose === 'outside' && s) ||
				(i._menu.contains(t.target) &&
					((t.type === 'keyup' && t.key === df) ||
						/input|select|option|textarea|form/i.test(t.target.tagName)))
			)
				continue
			const l = { relatedTarget: i._element }
			t.type === 'click' && (l.clickEvent = t), i._completeHide(l)
		}
	}
	static dataApiKeydownHandler(t) {
		const n = /input|textarea/i.test(t.target.tagName),
			r = t.key === eE,
			i = [tE, pf].includes(t.key)
		if ((!i && !r) || (n && !r)) return
		t.preventDefault()
		const o = this.matches(dn)
				? this
				: D.prev(this, dn)[0] ||
				  D.next(this, dn)[0] ||
				  D.findOne(dn, t.delegateTarget.parentNode),
			s = ut.getOrCreateInstance(o)
		if (i) {
			t.stopPropagation(), s.show(), s._selectMenuItem(t)
			return
		}
		s._isShown() && (t.stopPropagation(), s.hide(), o.focus())
	}
}
C.on(document, Qh, dn, ut.dataApiKeydownHandler)
C.on(document, Qh, ho, ut.dataApiKeydownHandler)
C.on(document, Yh, ut.clearMenus)
C.on(document, lE, ut.clearMenus)
C.on(document, Yh, dn, function (e) {
	e.preventDefault(), ut.getOrCreateInstance(this).toggle()
})
Ye(ut)
const Gh = 'backdrop',
	xE = 'fade',
	hf = 'show',
	mf = `mousedown.bs.${Gh}`,
	AE = {
		className: 'modal-backdrop',
		clickCallback: null,
		isAnimated: !1,
		isVisible: !0,
		rootElement: 'body',
	},
	OE = {
		className: 'string',
		clickCallback: '(function|null)',
		isAnimated: 'boolean',
		isVisible: 'boolean',
		rootElement: '(element|string)',
	}
class Xh extends Ti {
	constructor(t) {
		super(),
			(this._config = this._getConfig(t)),
			(this._isAppended = !1),
			(this._element = null)
	}
	static get Default() {
		return AE
	}
	static get DefaultType() {
		return OE
	}
	static get NAME() {
		return Gh
	}
	show(t) {
		if (!this._config.isVisible) {
			Se(t)
			return
		}
		this._append()
		const n = this._getElement()
		this._config.isAnimated && Ci(n),
			n.classList.add(hf),
			this._emulateAnimation(() => {
				Se(t)
			})
	}
	hide(t) {
		if (!this._config.isVisible) {
			Se(t)
			return
		}
		this._getElement().classList.remove(hf),
			this._emulateAnimation(() => {
				this.dispose(), Se(t)
			})
	}
	dispose() {
		this._isAppended &&
			(C.off(this._element, mf),
			this._element.remove(),
			(this._isAppended = !1))
	}
	_getElement() {
		if (!this._element) {
			const t = document.createElement('div')
			;(t.className = this._config.className),
				this._config.isAnimated && t.classList.add(xE),
				(this._element = t)
		}
		return this._element
	}
	_configAfterMerge(t) {
		return (t.rootElement = Qt(t.rootElement)), t
	}
	_append() {
		if (this._isAppended) return
		const t = this._getElement()
		this._config.rootElement.append(t),
			C.on(t, mf, () => {
				Se(this._config.clickCallback)
			}),
			(this._isAppended = !0)
	}
	_emulateAnimation(t) {
		$h(t, this._getElement(), this._config.isAnimated)
	}
}
const LE = 'focustrap',
	PE = 'bs.focustrap',
	Ho = `.${PE}`,
	DE = `focusin${Ho}`,
	IE = `keydown.tab${Ho}`,
	RE = 'Tab',
	$E = 'forward',
	gf = 'backward',
	ME = { autofocus: !0, trapElement: null },
	jE = { autofocus: 'boolean', trapElement: 'element' }
class qh extends Ti {
	constructor(t) {
		super(),
			(this._config = this._getConfig(t)),
			(this._isActive = !1),
			(this._lastTabNavDirection = null)
	}
	static get Default() {
		return ME
	}
	static get DefaultType() {
		return jE
	}
	static get NAME() {
		return LE
	}
	activate() {
		this._isActive ||
			(this._config.autofocus && this._config.trapElement.focus(),
			C.off(document, Ho),
			C.on(document, DE, (t) => this._handleFocusin(t)),
			C.on(document, IE, (t) => this._handleKeydown(t)),
			(this._isActive = !0))
	}
	deactivate() {
		this._isActive && ((this._isActive = !1), C.off(document, Ho))
	}
	_handleFocusin(t) {
		const { trapElement: n } = this._config
		if (t.target === document || t.target === n || n.contains(t.target)) return
		const r = D.focusableChildren(n)
		r.length === 0
			? n.focus()
			: this._lastTabNavDirection === gf
			? r[r.length - 1].focus()
			: r[0].focus()
	}
	_handleKeydown(t) {
		t.key === RE && (this._lastTabNavDirection = t.shiftKey ? gf : $E)
	}
}
const vf = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
	_f = '.sticky-top',
	Qi = 'padding-right',
	yf = 'margin-right'
class pa {
	constructor() {
		this._element = document.body
	}
	getWidth() {
		const t = document.documentElement.clientWidth
		return Math.abs(window.innerWidth - t)
	}
	hide() {
		const t = this.getWidth()
		this._disableOverFlow(),
			this._setElementAttributes(this._element, Qi, (n) => n + t),
			this._setElementAttributes(vf, Qi, (n) => n + t),
			this._setElementAttributes(_f, yf, (n) => n - t)
	}
	reset() {
		this._resetElementAttributes(this._element, 'overflow'),
			this._resetElementAttributes(this._element, Qi),
			this._resetElementAttributes(vf, Qi),
			this._resetElementAttributes(_f, yf)
	}
	isOverflowing() {
		return this.getWidth() > 0
	}
	_disableOverFlow() {
		this._saveInitialAttribute(this._element, 'overflow'),
			(this._element.style.overflow = 'hidden')
	}
	_setElementAttributes(t, n, r) {
		const i = this.getWidth(),
			o = (s) => {
				if (s !== this._element && window.innerWidth > s.clientWidth + i) return
				this._saveInitialAttribute(s, n)
				const l = window.getComputedStyle(s).getPropertyValue(n)
				s.style.setProperty(n, `${r(Number.parseFloat(l))}px`)
			}
		this._applyManipulationCallback(t, o)
	}
	_saveInitialAttribute(t, n) {
		const r = t.style.getPropertyValue(n)
		r && Et.setDataAttribute(t, n, r)
	}
	_resetElementAttributes(t, n) {
		const r = (i) => {
			const o = Et.getDataAttribute(i, n)
			if (o === null) {
				i.style.removeProperty(n)
				return
			}
			Et.removeDataAttribute(i, n), i.style.setProperty(n, o)
		}
		this._applyManipulationCallback(t, r)
	}
	_applyManipulationCallback(t, n) {
		if (yt(t)) {
			n(t)
			return
		}
		for (const r of D.find(t, this._element)) n(r)
	}
}
const bE = 'modal',
	zE = 'bs.modal',
	Ke = `.${zE}`,
	FE = '.data-api',
	VE = 'Escape',
	UE = `hide${Ke}`,
	WE = `hidePrevented${Ke}`,
	Jh = `hidden${Ke}`,
	Zh = `show${Ke}`,
	BE = `shown${Ke}`,
	HE = `resize${Ke}`,
	KE = `click.dismiss${Ke}`,
	YE = `mousedown.dismiss${Ke}`,
	QE = `keydown.dismiss${Ke}`,
	GE = `click${Ke}${FE}`,
	Ef = 'modal-open',
	XE = 'fade',
	wf = 'show',
	nl = 'modal-static',
	qE = '.modal.show',
	JE = '.modal-dialog',
	ZE = '.modal-body',
	e1 = '[data-bs-toggle="modal"]',
	t1 = { backdrop: !0, focus: !0, keyboard: !0 },
	n1 = { backdrop: '(boolean|string)', focus: 'boolean', keyboard: 'boolean' }
class hr extends tt {
	constructor(t, n) {
		super(t, n),
			(this._dialog = D.findOne(JE, this._element)),
			(this._backdrop = this._initializeBackDrop()),
			(this._focustrap = this._initializeFocusTrap()),
			(this._isShown = !1),
			(this._isTransitioning = !1),
			(this._scrollBar = new pa()),
			this._addEventListeners()
	}
	static get Default() {
		return t1
	}
	static get DefaultType() {
		return n1
	}
	static get NAME() {
		return bE
	}
	toggle(t) {
		return this._isShown ? this.hide() : this.show(t)
	}
	show(t) {
		this._isShown ||
			this._isTransitioning ||
			C.trigger(this._element, Zh, { relatedTarget: t }).defaultPrevented ||
			((this._isShown = !0),
			(this._isTransitioning = !0),
			this._scrollBar.hide(),
			document.body.classList.add(Ef),
			this._adjustDialog(),
			this._backdrop.show(() => this._showElement(t)))
	}
	hide() {
		!this._isShown ||
			this._isTransitioning ||
			C.trigger(this._element, UE).defaultPrevented ||
			((this._isShown = !1),
			(this._isTransitioning = !0),
			this._focustrap.deactivate(),
			this._element.classList.remove(wf),
			this._queueCallback(
				() => this._hideModal(),
				this._element,
				this._isAnimated()
			))
	}
	dispose() {
		C.off(window, Ke),
			C.off(this._dialog, Ke),
			this._backdrop.dispose(),
			this._focustrap.deactivate(),
			super.dispose()
	}
	handleUpdate() {
		this._adjustDialog()
	}
	_initializeBackDrop() {
		return new Xh({
			isVisible: !!this._config.backdrop,
			isAnimated: this._isAnimated(),
		})
	}
	_initializeFocusTrap() {
		return new qh({ trapElement: this._element })
	}
	_showElement(t) {
		document.body.contains(this._element) ||
			document.body.append(this._element),
			(this._element.style.display = 'block'),
			this._element.removeAttribute('aria-hidden'),
			this._element.setAttribute('aria-modal', !0),
			this._element.setAttribute('role', 'dialog'),
			(this._element.scrollTop = 0)
		const n = D.findOne(ZE, this._dialog)
		n && (n.scrollTop = 0), Ci(this._element), this._element.classList.add(wf)
		const r = () => {
			this._config.focus && this._focustrap.activate(),
				(this._isTransitioning = !1),
				C.trigger(this._element, BE, { relatedTarget: t })
		}
		this._queueCallback(r, this._dialog, this._isAnimated())
	}
	_addEventListeners() {
		C.on(this._element, QE, (t) => {
			if (t.key === VE) {
				if (this._config.keyboard) {
					this.hide()
					return
				}
				this._triggerBackdropTransition()
			}
		}),
			C.on(window, HE, () => {
				this._isShown && !this._isTransitioning && this._adjustDialog()
			}),
			C.on(this._element, YE, (t) => {
				C.one(this._element, KE, (n) => {
					if (!(this._element !== t.target || this._element !== n.target)) {
						if (this._config.backdrop === 'static') {
							this._triggerBackdropTransition()
							return
						}
						this._config.backdrop && this.hide()
					}
				})
			})
	}
	_hideModal() {
		;(this._element.style.display = 'none'),
			this._element.setAttribute('aria-hidden', !0),
			this._element.removeAttribute('aria-modal'),
			this._element.removeAttribute('role'),
			(this._isTransitioning = !1),
			this._backdrop.hide(() => {
				document.body.classList.remove(Ef),
					this._resetAdjustments(),
					this._scrollBar.reset(),
					C.trigger(this._element, Jh)
			})
	}
	_isAnimated() {
		return this._element.classList.contains(XE)
	}
	_triggerBackdropTransition() {
		if (C.trigger(this._element, WE).defaultPrevented) return
		const n =
				this._element.scrollHeight > document.documentElement.clientHeight,
			r = this._element.style.overflowY
		r === 'hidden' ||
			this._element.classList.contains(nl) ||
			(n || (this._element.style.overflowY = 'hidden'),
			this._element.classList.add(nl),
			this._queueCallback(() => {
				this._element.classList.remove(nl),
					this._queueCallback(() => {
						this._element.style.overflowY = r
					}, this._dialog)
			}, this._dialog),
			this._element.focus())
	}
	_adjustDialog() {
		const t =
				this._element.scrollHeight > document.documentElement.clientHeight,
			n = this._scrollBar.getWidth(),
			r = n > 0
		if (r && !t) {
			const i = He() ? 'paddingLeft' : 'paddingRight'
			this._element.style[i] = `${n}px`
		}
		if (!r && t) {
			const i = He() ? 'paddingRight' : 'paddingLeft'
			this._element.style[i] = `${n}px`
		}
	}
	_resetAdjustments() {
		;(this._element.style.paddingLeft = ''),
			(this._element.style.paddingRight = '')
	}
	static jQueryInterface(t, n) {
		return this.each(function () {
			const r = hr.getOrCreateInstance(this, t)
			if (typeof t == 'string') {
				if (typeof r[t] > 'u') throw new TypeError(`No method named "${t}"`)
				r[t](n)
			}
		})
	}
}
C.on(document, GE, e1, function (e) {
	const t = D.getElementFromSelector(this)
	;['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
		C.one(t, Zh, (i) => {
			i.defaultPrevented ||
				C.one(t, Jh, () => {
					wr(this) && this.focus()
				})
		})
	const n = D.findOne(qE)
	n && hr.getInstance(n).hide(), hr.getOrCreateInstance(t).toggle(this)
})
hs(hr)
Ye(hr)
const r1 = 'offcanvas',
	i1 = 'bs.offcanvas',
	xt = `.${i1}`,
	em = '.data-api',
	o1 = `load${xt}${em}`,
	s1 = 'Escape',
	Sf = 'show',
	Cf = 'showing',
	Tf = 'hiding',
	l1 = 'offcanvas-backdrop',
	tm = '.offcanvas.show',
	a1 = `show${xt}`,
	u1 = `shown${xt}`,
	c1 = `hide${xt}`,
	kf = `hidePrevented${xt}`,
	nm = `hidden${xt}`,
	f1 = `resize${xt}`,
	d1 = `click${xt}${em}`,
	p1 = `keydown.dismiss${xt}`,
	h1 = '[data-bs-toggle="offcanvas"]',
	m1 = { backdrop: !0, keyboard: !0, scroll: !1 },
	g1 = { backdrop: '(boolean|string)', keyboard: 'boolean', scroll: 'boolean' }
class Xt extends tt {
	constructor(t, n) {
		super(t, n),
			(this._isShown = !1),
			(this._backdrop = this._initializeBackDrop()),
			(this._focustrap = this._initializeFocusTrap()),
			this._addEventListeners()
	}
	static get Default() {
		return m1
	}
	static get DefaultType() {
		return g1
	}
	static get NAME() {
		return r1
	}
	toggle(t) {
		return this._isShown ? this.hide() : this.show(t)
	}
	show(t) {
		if (
			this._isShown ||
			C.trigger(this._element, a1, { relatedTarget: t }).defaultPrevented
		)
			return
		;(this._isShown = !0),
			this._backdrop.show(),
			this._config.scroll || new pa().hide(),
			this._element.setAttribute('aria-modal', !0),
			this._element.setAttribute('role', 'dialog'),
			this._element.classList.add(Cf)
		const r = () => {
			;(!this._config.scroll || this._config.backdrop) &&
				this._focustrap.activate(),
				this._element.classList.add(Sf),
				this._element.classList.remove(Cf),
				C.trigger(this._element, u1, { relatedTarget: t })
		}
		this._queueCallback(r, this._element, !0)
	}
	hide() {
		if (!this._isShown || C.trigger(this._element, c1).defaultPrevented) return
		this._focustrap.deactivate(),
			this._element.blur(),
			(this._isShown = !1),
			this._element.classList.add(Tf),
			this._backdrop.hide()
		const n = () => {
			this._element.classList.remove(Sf, Tf),
				this._element.removeAttribute('aria-modal'),
				this._element.removeAttribute('role'),
				this._config.scroll || new pa().reset(),
				C.trigger(this._element, nm)
		}
		this._queueCallback(n, this._element, !0)
	}
	dispose() {
		this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
	}
	_initializeBackDrop() {
		const t = () => {
				if (this._config.backdrop === 'static') {
					C.trigger(this._element, kf)
					return
				}
				this.hide()
			},
			n = !!this._config.backdrop
		return new Xh({
			className: l1,
			isVisible: n,
			isAnimated: !0,
			rootElement: this._element.parentNode,
			clickCallback: n ? t : null,
		})
	}
	_initializeFocusTrap() {
		return new qh({ trapElement: this._element })
	}
	_addEventListeners() {
		C.on(this._element, p1, (t) => {
			if (t.key === s1) {
				if (this._config.keyboard) {
					this.hide()
					return
				}
				C.trigger(this._element, kf)
			}
		})
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = Xt.getOrCreateInstance(this, t)
			if (typeof t == 'string') {
				if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
					throw new TypeError(`No method named "${t}"`)
				n[t](this)
			}
		})
	}
}
C.on(document, d1, h1, function (e) {
	const t = D.getElementFromSelector(this)
	if ((['A', 'AREA'].includes(this.tagName) && e.preventDefault(), Gt(this)))
		return
	C.one(t, nm, () => {
		wr(this) && this.focus()
	})
	const n = D.findOne(tm)
	n && n !== t && Xt.getInstance(n).hide(),
		Xt.getOrCreateInstance(t).toggle(this)
})
C.on(window, o1, () => {
	for (const e of D.find(tm)) Xt.getOrCreateInstance(e).show()
})
C.on(window, f1, () => {
	for (const e of D.find('[aria-modal][class*=show][class*=offcanvas-]'))
		getComputedStyle(e).position !== 'fixed' && Xt.getOrCreateInstance(e).hide()
})
hs(Xt)
Ye(Xt)
const v1 = /^aria-[\w-]*$/i,
	rm = {
		'*': ['class', 'dir', 'id', 'lang', 'role', v1],
		a: ['target', 'href', 'title', 'rel'],
		area: [],
		b: [],
		br: [],
		col: [],
		code: [],
		div: [],
		em: [],
		hr: [],
		h1: [],
		h2: [],
		h3: [],
		h4: [],
		h5: [],
		h6: [],
		i: [],
		img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
		li: [],
		ol: [],
		p: [],
		pre: [],
		s: [],
		small: [],
		span: [],
		sub: [],
		sup: [],
		strong: [],
		u: [],
		ul: [],
	},
	_1 = new Set([
		'background',
		'cite',
		'href',
		'itemtype',
		'longdesc',
		'poster',
		'src',
		'xlink:href',
	]),
	y1 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
	E1 = (e, t) => {
		const n = e.nodeName.toLowerCase()
		return t.includes(n)
			? _1.has(n)
				? !!y1.test(e.nodeValue)
				: !0
			: t.filter((r) => r instanceof RegExp).some((r) => r.test(n))
	}
function w1(e, t, n) {
	if (!e.length) return e
	if (n && typeof n == 'function') return n(e)
	const i = new window.DOMParser().parseFromString(e, 'text/html'),
		o = [].concat(...i.body.querySelectorAll('*'))
	for (const s of o) {
		const l = s.nodeName.toLowerCase()
		if (!Object.keys(t).includes(l)) {
			s.remove()
			continue
		}
		const a = [].concat(...s.attributes),
			u = [].concat(t['*'] || [], t[l] || [])
		for (const c of a) E1(c, u) || s.removeAttribute(c.nodeName)
	}
	return i.body.innerHTML
}
const S1 = 'TemplateFactory',
	C1 = {
		allowList: rm,
		content: {},
		extraClass: '',
		html: !1,
		sanitize: !0,
		sanitizeFn: null,
		template: '<div></div>',
	},
	T1 = {
		allowList: 'object',
		content: 'object',
		extraClass: '(string|function)',
		html: 'boolean',
		sanitize: 'boolean',
		sanitizeFn: '(null|function)',
		template: 'string',
	},
	k1 = { entry: '(string|element|function|null)', selector: '(string|element)' }
class N1 extends Ti {
	constructor(t) {
		super(), (this._config = this._getConfig(t))
	}
	static get Default() {
		return C1
	}
	static get DefaultType() {
		return T1
	}
	static get NAME() {
		return S1
	}
	getContent() {
		return Object.values(this._config.content)
			.map((t) => this._resolvePossibleFunction(t))
			.filter(Boolean)
	}
	hasContent() {
		return this.getContent().length > 0
	}
	changeContent(t) {
		return (
			this._checkContent(t),
			(this._config.content = { ...this._config.content, ...t }),
			this
		)
	}
	toHtml() {
		const t = document.createElement('div')
		t.innerHTML = this._maybeSanitize(this._config.template)
		for (const [i, o] of Object.entries(this._config.content))
			this._setContent(t, o, i)
		const n = t.children[0],
			r = this._resolvePossibleFunction(this._config.extraClass)
		return r && n.classList.add(...r.split(' ')), n
	}
	_typeCheckConfig(t) {
		super._typeCheckConfig(t), this._checkContent(t.content)
	}
	_checkContent(t) {
		for (const [n, r] of Object.entries(t))
			super._typeCheckConfig({ selector: n, entry: r }, k1)
	}
	_setContent(t, n, r) {
		const i = D.findOne(r, t)
		if (i) {
			if (((n = this._resolvePossibleFunction(n)), !n)) {
				i.remove()
				return
			}
			if (yt(n)) {
				this._putElementInTemplate(Qt(n), i)
				return
			}
			if (this._config.html) {
				i.innerHTML = this._maybeSanitize(n)
				return
			}
			i.textContent = n
		}
	}
	_maybeSanitize(t) {
		return this._config.sanitize
			? w1(t, this._config.allowList, this._config.sanitizeFn)
			: t
	}
	_resolvePossibleFunction(t) {
		return Se(t, [this])
	}
	_putElementInTemplate(t, n) {
		if (this._config.html) {
			;(n.innerHTML = ''), n.append(t)
			return
		}
		n.textContent = t.textContent
	}
}
const x1 = 'tooltip',
	A1 = new Set(['sanitize', 'allowList', 'sanitizeFn']),
	rl = 'fade',
	O1 = 'modal',
	Gi = 'show',
	L1 = '.tooltip-inner',
	Nf = `.${O1}`,
	xf = 'hide.bs.modal',
	Ir = 'hover',
	il = 'focus',
	P1 = 'click',
	D1 = 'manual',
	I1 = 'hide',
	R1 = 'hidden',
	$1 = 'show',
	M1 = 'shown',
	j1 = 'inserted',
	b1 = 'click',
	z1 = 'focusin',
	F1 = 'focusout',
	V1 = 'mouseenter',
	U1 = 'mouseleave',
	W1 = {
		AUTO: 'auto',
		TOP: 'top',
		RIGHT: He() ? 'left' : 'right',
		BOTTOM: 'bottom',
		LEFT: He() ? 'right' : 'left',
	},
	B1 = {
		allowList: rm,
		animation: !0,
		boundary: 'clippingParents',
		container: !1,
		customClass: '',
		delay: 0,
		fallbackPlacements: ['top', 'right', 'bottom', 'left'],
		html: !1,
		offset: [0, 6],
		placement: 'top',
		popperConfig: null,
		sanitize: !0,
		sanitizeFn: null,
		selector: !1,
		template:
			'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		title: '',
		trigger: 'hover focus',
	},
	H1 = {
		allowList: 'object',
		animation: 'boolean',
		boundary: '(string|element)',
		container: '(string|element|boolean)',
		customClass: '(string|function)',
		delay: '(number|object)',
		fallbackPlacements: 'array',
		html: 'boolean',
		offset: '(array|string|function)',
		placement: '(string|function)',
		popperConfig: '(null|object|function)',
		sanitize: 'boolean',
		sanitizeFn: '(null|function)',
		selector: '(string|boolean)',
		template: 'string',
		title: '(string|element|function)',
		trigger: 'string',
	}
class Cr extends tt {
	constructor(t, n) {
		if (typeof Lh > 'u')
			throw new TypeError(
				"Bootstrap's tooltips require Popper (https://popper.js.org)"
			)
		super(t, n),
			(this._isEnabled = !0),
			(this._timeout = 0),
			(this._isHovered = null),
			(this._activeTrigger = {}),
			(this._popper = null),
			(this._templateFactory = null),
			(this._newContent = null),
			(this.tip = null),
			this._setListeners(),
			this._config.selector || this._fixTitle()
	}
	static get Default() {
		return B1
	}
	static get DefaultType() {
		return H1
	}
	static get NAME() {
		return x1
	}
	enable() {
		this._isEnabled = !0
	}
	disable() {
		this._isEnabled = !1
	}
	toggleEnabled() {
		this._isEnabled = !this._isEnabled
	}
	toggle() {
		if (this._isEnabled) {
			if (
				((this._activeTrigger.click = !this._activeTrigger.click),
				this._isShown())
			) {
				this._leave()
				return
			}
			this._enter()
		}
	}
	dispose() {
		clearTimeout(this._timeout),
			C.off(this._element.closest(Nf), xf, this._hideModalHandler),
			this._element.getAttribute('data-bs-original-title') &&
				this._element.setAttribute(
					'title',
					this._element.getAttribute('data-bs-original-title')
				),
			this._disposePopper(),
			super.dispose()
	}
	show() {
		if (this._element.style.display === 'none')
			throw new Error('Please use show on visible elements')
		if (!(this._isWithContent() && this._isEnabled)) return
		const t = C.trigger(this._element, this.constructor.eventName($1)),
			r = (
				Ih(this._element) || this._element.ownerDocument.documentElement
			).contains(this._element)
		if (t.defaultPrevented || !r) return
		this._disposePopper()
		const i = this._getTipElement()
		this._element.setAttribute('aria-describedby', i.getAttribute('id'))
		const { container: o } = this._config
		if (
			(this._element.ownerDocument.documentElement.contains(this.tip) ||
				(o.append(i), C.trigger(this._element, this.constructor.eventName(j1))),
			(this._popper = this._createPopper(i)),
			i.classList.add(Gi),
			'ontouchstart' in document.documentElement)
		)
			for (const l of [].concat(...document.body.children))
				C.on(l, 'mouseover', Wo)
		const s = () => {
			C.trigger(this._element, this.constructor.eventName(M1)),
				this._isHovered === !1 && this._leave(),
				(this._isHovered = !1)
		}
		this._queueCallback(s, this.tip, this._isAnimated())
	}
	hide() {
		if (
			!this._isShown() ||
			C.trigger(this._element, this.constructor.eventName(I1)).defaultPrevented
		)
			return
		if (
			(this._getTipElement().classList.remove(Gi),
			'ontouchstart' in document.documentElement)
		)
			for (const i of [].concat(...document.body.children))
				C.off(i, 'mouseover', Wo)
		;(this._activeTrigger[P1] = !1),
			(this._activeTrigger[il] = !1),
			(this._activeTrigger[Ir] = !1),
			(this._isHovered = null)
		const r = () => {
			this._isWithActiveTrigger() ||
				(this._isHovered || this._disposePopper(),
				this._element.removeAttribute('aria-describedby'),
				C.trigger(this._element, this.constructor.eventName(R1)))
		}
		this._queueCallback(r, this.tip, this._isAnimated())
	}
	update() {
		this._popper && this._popper.update()
	}
	_isWithContent() {
		return !!this._getTitle()
	}
	_getTipElement() {
		return (
			this.tip ||
				(this.tip = this._createTipElement(
					this._newContent || this._getContentForTemplate()
				)),
			this.tip
		)
	}
	_createTipElement(t) {
		const n = this._getTemplateFactory(t).toHtml()
		if (!n) return null
		n.classList.remove(rl, Gi),
			n.classList.add(`bs-${this.constructor.NAME}-auto`)
		const r = Py(this.constructor.NAME).toString()
		return n.setAttribute('id', r), this._isAnimated() && n.classList.add(rl), n
	}
	setContent(t) {
		;(this._newContent = t),
			this._isShown() && (this._disposePopper(), this.show())
	}
	_getTemplateFactory(t) {
		return (
			this._templateFactory
				? this._templateFactory.changeContent(t)
				: (this._templateFactory = new N1({
						...this._config,
						content: t,
						extraClass: this._resolvePossibleFunction(this._config.customClass),
				  })),
			this._templateFactory
		)
	}
	_getContentForTemplate() {
		return { [L1]: this._getTitle() }
	}
	_getTitle() {
		return (
			this._resolvePossibleFunction(this._config.title) ||
			this._element.getAttribute('data-bs-original-title')
		)
	}
	_initializeOnDelegatedTarget(t) {
		return this.constructor.getOrCreateInstance(
			t.delegateTarget,
			this._getDelegateConfig()
		)
	}
	_isAnimated() {
		return (
			this._config.animation || (this.tip && this.tip.classList.contains(rl))
		)
	}
	_isShown() {
		return this.tip && this.tip.classList.contains(Gi)
	}
	_createPopper(t) {
		const n = Se(this._config.placement, [this, t, this._element]),
			r = W1[n.toUpperCase()]
		return wu(this._element, t, this._getPopperConfig(r))
	}
	_getOffset() {
		const { offset: t } = this._config
		return typeof t == 'string'
			? t.split(',').map((n) => Number.parseInt(n, 10))
			: typeof t == 'function'
			? (n) => t(n, this._element)
			: t
	}
	_resolvePossibleFunction(t) {
		return Se(t, [this._element])
	}
	_getPopperConfig(t) {
		const n = {
			placement: t,
			modifiers: [
				{
					name: 'flip',
					options: { fallbackPlacements: this._config.fallbackPlacements },
				},
				{ name: 'offset', options: { offset: this._getOffset() } },
				{
					name: 'preventOverflow',
					options: { boundary: this._config.boundary },
				},
				{
					name: 'arrow',
					options: { element: `.${this.constructor.NAME}-arrow` },
				},
				{
					name: 'preSetPlacement',
					enabled: !0,
					phase: 'beforeMain',
					fn: (r) => {
						this._getTipElement().setAttribute(
							'data-popper-placement',
							r.state.placement
						)
					},
				},
			],
		}
		return { ...n, ...Se(this._config.popperConfig, [n]) }
	}
	_setListeners() {
		const t = this._config.trigger.split(' ')
		for (const n of t)
			if (n === 'click')
				C.on(
					this._element,
					this.constructor.eventName(b1),
					this._config.selector,
					(r) => {
						this._initializeOnDelegatedTarget(r).toggle()
					}
				)
			else if (n !== D1) {
				const r =
						n === Ir
							? this.constructor.eventName(V1)
							: this.constructor.eventName(z1),
					i =
						n === Ir
							? this.constructor.eventName(U1)
							: this.constructor.eventName(F1)
				C.on(this._element, r, this._config.selector, (o) => {
					const s = this._initializeOnDelegatedTarget(o)
					;(s._activeTrigger[o.type === 'focusin' ? il : Ir] = !0), s._enter()
				}),
					C.on(this._element, i, this._config.selector, (o) => {
						const s = this._initializeOnDelegatedTarget(o)
						;(s._activeTrigger[o.type === 'focusout' ? il : Ir] =
							s._element.contains(o.relatedTarget)),
							s._leave()
					})
			}
		;(this._hideModalHandler = () => {
			this._element && this.hide()
		}),
			C.on(this._element.closest(Nf), xf, this._hideModalHandler)
	}
	_fixTitle() {
		const t = this._element.getAttribute('title')
		t &&
			(!this._element.getAttribute('aria-label') &&
				!this._element.textContent.trim() &&
				this._element.setAttribute('aria-label', t),
			this._element.setAttribute('data-bs-original-title', t),
			this._element.removeAttribute('title'))
	}
	_enter() {
		if (this._isShown() || this._isHovered) {
			this._isHovered = !0
			return
		}
		;(this._isHovered = !0),
			this._setTimeout(() => {
				this._isHovered && this.show()
			}, this._config.delay.show)
	}
	_leave() {
		this._isWithActiveTrigger() ||
			((this._isHovered = !1),
			this._setTimeout(() => {
				this._isHovered || this.hide()
			}, this._config.delay.hide))
	}
	_setTimeout(t, n) {
		clearTimeout(this._timeout), (this._timeout = setTimeout(t, n))
	}
	_isWithActiveTrigger() {
		return Object.values(this._activeTrigger).includes(!0)
	}
	_getConfig(t) {
		const n = Et.getDataAttributes(this._element)
		for (const r of Object.keys(n)) A1.has(r) && delete n[r]
		return (
			(t = { ...n, ...(typeof t == 'object' && t ? t : {}) }),
			(t = this._mergeConfigObj(t)),
			(t = this._configAfterMerge(t)),
			this._typeCheckConfig(t),
			t
		)
	}
	_configAfterMerge(t) {
		return (
			(t.container = t.container === !1 ? document.body : Qt(t.container)),
			typeof t.delay == 'number' &&
				(t.delay = { show: t.delay, hide: t.delay }),
			typeof t.title == 'number' && (t.title = t.title.toString()),
			typeof t.content == 'number' && (t.content = t.content.toString()),
			t
		)
	}
	_getDelegateConfig() {
		const t = {}
		for (const [n, r] of Object.entries(this._config))
			this.constructor.Default[n] !== r && (t[n] = r)
		return (t.selector = !1), (t.trigger = 'manual'), t
	}
	_disposePopper() {
		this._popper && (this._popper.destroy(), (this._popper = null)),
			this.tip && (this.tip.remove(), (this.tip = null))
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = Cr.getOrCreateInstance(this, t)
			if (typeof t == 'string') {
				if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
				n[t]()
			}
		})
	}
}
Ye(Cr)
const K1 = 'popover',
	Y1 = '.popover-header',
	Q1 = '.popover-body',
	G1 = {
		...Cr.Default,
		content: '',
		offset: [0, 8],
		placement: 'right',
		template:
			'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
		trigger: 'click',
	},
	X1 = { ...Cr.DefaultType, content: '(null|string|element|function)' }
class ku extends Cr {
	static get Default() {
		return G1
	}
	static get DefaultType() {
		return X1
	}
	static get NAME() {
		return K1
	}
	_isWithContent() {
		return this._getTitle() || this._getContent()
	}
	_getContentForTemplate() {
		return { [Y1]: this._getTitle(), [Q1]: this._getContent() }
	}
	_getContent() {
		return this._resolvePossibleFunction(this._config.content)
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = ku.getOrCreateInstance(this, t)
			if (typeof t == 'string') {
				if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
				n[t]()
			}
		})
	}
}
Ye(ku)
const q1 = 'scrollspy',
	J1 = 'bs.scrollspy',
	Nu = `.${J1}`,
	Z1 = '.data-api',
	ew = `activate${Nu}`,
	Af = `click${Nu}`,
	tw = `load${Nu}${Z1}`,
	nw = 'dropdown-item',
	Dn = 'active',
	rw = '[data-bs-spy="scroll"]',
	ol = '[href]',
	iw = '.nav, .list-group',
	Of = '.nav-link',
	ow = '.nav-item',
	sw = '.list-group-item',
	lw = `${Of}, ${ow} > ${Of}, ${sw}`,
	aw = '.dropdown',
	uw = '.dropdown-toggle',
	cw = {
		offset: null,
		rootMargin: '0px 0px -25%',
		smoothScroll: !1,
		target: null,
		threshold: [0.1, 0.5, 1],
	},
	fw = {
		offset: '(number|null)',
		rootMargin: 'string',
		smoothScroll: 'boolean',
		target: 'element',
		threshold: 'array',
	}
class vs extends tt {
	constructor(t, n) {
		super(t, n),
			(this._targetLinks = new Map()),
			(this._observableSections = new Map()),
			(this._rootElement =
				getComputedStyle(this._element).overflowY === 'visible'
					? null
					: this._element),
			(this._activeTarget = null),
			(this._observer = null),
			(this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
			this.refresh()
	}
	static get Default() {
		return cw
	}
	static get DefaultType() {
		return fw
	}
	static get NAME() {
		return q1
	}
	refresh() {
		this._initializeTargetsAndObservables(),
			this._maybeEnableSmoothScroll(),
			this._observer
				? this._observer.disconnect()
				: (this._observer = this._getNewObserver())
		for (const t of this._observableSections.values()) this._observer.observe(t)
	}
	dispose() {
		this._observer.disconnect(), super.dispose()
	}
	_configAfterMerge(t) {
		return (
			(t.target = Qt(t.target) || document.body),
			(t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
			typeof t.threshold == 'string' &&
				(t.threshold = t.threshold.split(',').map((n) => Number.parseFloat(n))),
			t
		)
	}
	_maybeEnableSmoothScroll() {
		this._config.smoothScroll &&
			(C.off(this._config.target, Af),
			C.on(this._config.target, Af, ol, (t) => {
				const n = this._observableSections.get(t.target.hash)
				if (n) {
					t.preventDefault()
					const r = this._rootElement || window,
						i = n.offsetTop - this._element.offsetTop
					if (r.scrollTo) {
						r.scrollTo({ top: i, behavior: 'smooth' })
						return
					}
					r.scrollTop = i
				}
			}))
	}
	_getNewObserver() {
		const t = {
			root: this._rootElement,
			threshold: this._config.threshold,
			rootMargin: this._config.rootMargin,
		}
		return new IntersectionObserver((n) => this._observerCallback(n), t)
	}
	_observerCallback(t) {
		const n = (s) => this._targetLinks.get(`#${s.target.id}`),
			r = (s) => {
				;(this._previousScrollData.visibleEntryTop = s.target.offsetTop),
					this._process(n(s))
			},
			i = (this._rootElement || document.documentElement).scrollTop,
			o = i >= this._previousScrollData.parentScrollTop
		this._previousScrollData.parentScrollTop = i
		for (const s of t) {
			if (!s.isIntersecting) {
				;(this._activeTarget = null), this._clearActiveClass(n(s))
				continue
			}
			const l = s.target.offsetTop >= this._previousScrollData.visibleEntryTop
			if (o && l) {
				if ((r(s), !i)) return
				continue
			}
			!o && !l && r(s)
		}
	}
	_initializeTargetsAndObservables() {
		;(this._targetLinks = new Map()), (this._observableSections = new Map())
		const t = D.find(ol, this._config.target)
		for (const n of t) {
			if (!n.hash || Gt(n)) continue
			const r = D.findOne(decodeURI(n.hash), this._element)
			wr(r) &&
				(this._targetLinks.set(decodeURI(n.hash), n),
				this._observableSections.set(n.hash, r))
		}
	}
	_process(t) {
		this._activeTarget !== t &&
			(this._clearActiveClass(this._config.target),
			(this._activeTarget = t),
			t.classList.add(Dn),
			this._activateParents(t),
			C.trigger(this._element, ew, { relatedTarget: t }))
	}
	_activateParents(t) {
		if (t.classList.contains(nw)) {
			D.findOne(uw, t.closest(aw)).classList.add(Dn)
			return
		}
		for (const n of D.parents(t, iw))
			for (const r of D.prev(n, lw)) r.classList.add(Dn)
	}
	_clearActiveClass(t) {
		t.classList.remove(Dn)
		const n = D.find(`${ol}.${Dn}`, t)
		for (const r of n) r.classList.remove(Dn)
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = vs.getOrCreateInstance(this, t)
			if (typeof t == 'string') {
				if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
					throw new TypeError(`No method named "${t}"`)
				n[t]()
			}
		})
	}
}
C.on(window, tw, () => {
	for (const e of D.find(rw)) vs.getOrCreateInstance(e)
})
Ye(vs)
const dw = 'tab',
	pw = 'bs.tab',
	On = `.${pw}`,
	hw = `hide${On}`,
	mw = `hidden${On}`,
	gw = `show${On}`,
	vw = `shown${On}`,
	_w = `click${On}`,
	yw = `keydown${On}`,
	Ew = `load${On}`,
	ww = 'ArrowLeft',
	Lf = 'ArrowRight',
	Sw = 'ArrowUp',
	Pf = 'ArrowDown',
	sl = 'Home',
	Df = 'End',
	pn = 'active',
	If = 'fade',
	ll = 'show',
	Cw = 'dropdown',
	im = '.dropdown-toggle',
	Tw = '.dropdown-menu',
	al = `:not(${im})`,
	kw = '.list-group, .nav, [role="tablist"]',
	Nw = '.nav-item, .list-group-item',
	xw = `.nav-link${al}, .list-group-item${al}, [role="tab"]${al}`,
	om =
		'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
	ul = `${xw}, ${om}`,
	Aw = `.${pn}[data-bs-toggle="tab"], .${pn}[data-bs-toggle="pill"], .${pn}[data-bs-toggle="list"]`
class mr extends tt {
	constructor(t) {
		super(t),
			(this._parent = this._element.closest(kw)),
			this._parent &&
				(this._setInitialAttributes(this._parent, this._getChildren()),
				C.on(this._element, yw, (n) => this._keydown(n)))
	}
	static get NAME() {
		return dw
	}
	show() {
		const t = this._element
		if (this._elemIsActive(t)) return
		const n = this._getActiveElem(),
			r = n ? C.trigger(n, hw, { relatedTarget: t }) : null
		C.trigger(t, gw, { relatedTarget: n }).defaultPrevented ||
			(r && r.defaultPrevented) ||
			(this._deactivate(n, t), this._activate(t, n))
	}
	_activate(t, n) {
		if (!t) return
		t.classList.add(pn), this._activate(D.getElementFromSelector(t))
		const r = () => {
			if (t.getAttribute('role') !== 'tab') {
				t.classList.add(ll)
				return
			}
			t.removeAttribute('tabindex'),
				t.setAttribute('aria-selected', !0),
				this._toggleDropDown(t, !0),
				C.trigger(t, vw, { relatedTarget: n })
		}
		this._queueCallback(r, t, t.classList.contains(If))
	}
	_deactivate(t, n) {
		if (!t) return
		t.classList.remove(pn),
			t.blur(),
			this._deactivate(D.getElementFromSelector(t))
		const r = () => {
			if (t.getAttribute('role') !== 'tab') {
				t.classList.remove(ll)
				return
			}
			t.setAttribute('aria-selected', !1),
				t.setAttribute('tabindex', '-1'),
				this._toggleDropDown(t, !1),
				C.trigger(t, mw, { relatedTarget: n })
		}
		this._queueCallback(r, t, t.classList.contains(If))
	}
	_keydown(t) {
		if (![ww, Lf, Sw, Pf, sl, Df].includes(t.key)) return
		t.stopPropagation(), t.preventDefault()
		const n = this._getChildren().filter((i) => !Gt(i))
		let r
		if ([sl, Df].includes(t.key)) r = n[t.key === sl ? 0 : n.length - 1]
		else {
			const i = [Lf, Pf].includes(t.key)
			r = Su(n, t.target, i, !0)
		}
		r && (r.focus({ preventScroll: !0 }), mr.getOrCreateInstance(r).show())
	}
	_getChildren() {
		return D.find(ul, this._parent)
	}
	_getActiveElem() {
		return this._getChildren().find((t) => this._elemIsActive(t)) || null
	}
	_setInitialAttributes(t, n) {
		this._setAttributeIfNotExists(t, 'role', 'tablist')
		for (const r of n) this._setInitialAttributesOnChild(r)
	}
	_setInitialAttributesOnChild(t) {
		t = this._getInnerElement(t)
		const n = this._elemIsActive(t),
			r = this._getOuterElement(t)
		t.setAttribute('aria-selected', n),
			r !== t && this._setAttributeIfNotExists(r, 'role', 'presentation'),
			n || t.setAttribute('tabindex', '-1'),
			this._setAttributeIfNotExists(t, 'role', 'tab'),
			this._setInitialAttributesOnTargetPanel(t)
	}
	_setInitialAttributesOnTargetPanel(t) {
		const n = D.getElementFromSelector(t)
		n &&
			(this._setAttributeIfNotExists(n, 'role', 'tabpanel'),
			t.id && this._setAttributeIfNotExists(n, 'aria-labelledby', `${t.id}`))
	}
	_toggleDropDown(t, n) {
		const r = this._getOuterElement(t)
		if (!r.classList.contains(Cw)) return
		const i = (o, s) => {
			const l = D.findOne(o, r)
			l && l.classList.toggle(s, n)
		}
		i(im, pn), i(Tw, ll), r.setAttribute('aria-expanded', n)
	}
	_setAttributeIfNotExists(t, n, r) {
		t.hasAttribute(n) || t.setAttribute(n, r)
	}
	_elemIsActive(t) {
		return t.classList.contains(pn)
	}
	_getInnerElement(t) {
		return t.matches(ul) ? t : D.findOne(ul, t)
	}
	_getOuterElement(t) {
		return t.closest(Nw) || t
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = mr.getOrCreateInstance(this)
			if (typeof t == 'string') {
				if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
					throw new TypeError(`No method named "${t}"`)
				n[t]()
			}
		})
	}
}
C.on(document, _w, om, function (e) {
	;['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
		!Gt(this) && mr.getOrCreateInstance(this).show()
})
C.on(window, Ew, () => {
	for (const e of D.find(Aw)) mr.getOrCreateInstance(e)
})
Ye(mr)
const Ow = 'toast',
	Lw = 'bs.toast',
	rn = `.${Lw}`,
	Pw = `mouseover${rn}`,
	Dw = `mouseout${rn}`,
	Iw = `focusin${rn}`,
	Rw = `focusout${rn}`,
	$w = `hide${rn}`,
	Mw = `hidden${rn}`,
	jw = `show${rn}`,
	bw = `shown${rn}`,
	zw = 'fade',
	Rf = 'hide',
	Xi = 'show',
	qi = 'showing',
	Fw = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
	Vw = { animation: !0, autohide: !0, delay: 5e3 }
class _s extends tt {
	constructor(t, n) {
		super(t, n),
			(this._timeout = null),
			(this._hasMouseInteraction = !1),
			(this._hasKeyboardInteraction = !1),
			this._setListeners()
	}
	static get Default() {
		return Vw
	}
	static get DefaultType() {
		return Fw
	}
	static get NAME() {
		return Ow
	}
	show() {
		if (C.trigger(this._element, jw).defaultPrevented) return
		this._clearTimeout(),
			this._config.animation && this._element.classList.add(zw)
		const n = () => {
			this._element.classList.remove(qi),
				C.trigger(this._element, bw),
				this._maybeScheduleHide()
		}
		this._element.classList.remove(Rf),
			Ci(this._element),
			this._element.classList.add(Xi, qi),
			this._queueCallback(n, this._element, this._config.animation)
	}
	hide() {
		if (!this.isShown() || C.trigger(this._element, $w).defaultPrevented) return
		const n = () => {
			this._element.classList.add(Rf),
				this._element.classList.remove(qi, Xi),
				C.trigger(this._element, Mw)
		}
		this._element.classList.add(qi),
			this._queueCallback(n, this._element, this._config.animation)
	}
	dispose() {
		this._clearTimeout(),
			this.isShown() && this._element.classList.remove(Xi),
			super.dispose()
	}
	isShown() {
		return this._element.classList.contains(Xi)
	}
	_maybeScheduleHide() {
		this._config.autohide &&
			(this._hasMouseInteraction ||
				this._hasKeyboardInteraction ||
				(this._timeout = setTimeout(() => {
					this.hide()
				}, this._config.delay)))
	}
	_onInteraction(t, n) {
		switch (t.type) {
			case 'mouseover':
			case 'mouseout': {
				this._hasMouseInteraction = n
				break
			}
			case 'focusin':
			case 'focusout': {
				this._hasKeyboardInteraction = n
				break
			}
		}
		if (n) {
			this._clearTimeout()
			return
		}
		const r = t.relatedTarget
		this._element === r ||
			this._element.contains(r) ||
			this._maybeScheduleHide()
	}
	_setListeners() {
		C.on(this._element, Pw, (t) => this._onInteraction(t, !0)),
			C.on(this._element, Dw, (t) => this._onInteraction(t, !1)),
			C.on(this._element, Iw, (t) => this._onInteraction(t, !0)),
			C.on(this._element, Rw, (t) => this._onInteraction(t, !1))
	}
	_clearTimeout() {
		clearTimeout(this._timeout), (this._timeout = null)
	}
	static jQueryInterface(t) {
		return this.each(function () {
			const n = _s.getOrCreateInstance(this, t)
			if (typeof t == 'string') {
				if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
				n[t](this)
			}
		})
	}
}
hs(_s)
Ye(_s)
function Uw() {
	return E.jsx('nav', {
		className: 'navbar navbar-expand-lg',
		children: E.jsxs('div', {
			className: 'container-fluid',
			children: [
				E.jsx('h1', {
					className: 'navbar-brand topName',
					children: E.jsx('a', { href: '/', children: 'TAK -uya- KAWAMURA' }),
				}),
				E.jsx('button', {
					className: 'navbar-toggler',
					type: 'button',
					'data-bs-toggle': 'collapse',
					'data-bs-target': '#navbarNav',
					'aria-controls': 'navbarNav',
					'aria-expanded': 'false',
					'aria-label': 'Toggle navigation',
					children: E.jsx('span', { className: 'navbar-toggler-icon' }),
				}),
				E.jsx('div', {
					className: 'collapse navbar-collapse nav__wrapper',
					id: 'navbarNav',
					children: E.jsxs('ul', {
						className: 'navbar-nav',
						children: [
							E.jsx('li', {
								className: 'nav-item nav-content',
								children: E.jsx(gn, {
									to: '/',
									exact: 'true',
									className: ({ isActive: e }) =>
										e ? 'nav-link active' : 'nav-link',
									children: 'HOME',
								}),
							}),
							E.jsx('li', {
								className: 'nav-item nav-content',
								children: E.jsx(gn, {
									to: '/ProjectGallery',
									exact: 'true',
									className: ({ isActive: e }) =>
										e ? 'nav-link active' : 'nav-link',
									children: 'PROJECT-GALLERY',
								}),
							}),
							E.jsx('li', {
								className: 'nav-item nav-content',
								children: E.jsx(gn, {
									to: '/Contact',
									exact: 'true',
									className: ({ isActive: e }) =>
										e ? 'nav-link active' : 'nav-link',
									children: 'CONTACT',
								}),
							}),
						],
					}),
				}),
			],
		}),
	})
}
function Ww() {
	return E.jsx('div', { className: 'header__wrapper', children: E.jsx(Uw, {}) })
}
const Bw = new Date().getFullYear()
function Hw() {
	return E.jsxs('footer', {
		children: [
			E.jsx('section', {
				className: 'section__wrapper',
				children: E.jsx('div', {
					className: 'text-center bg-transparent',
					children: E.jsxs('div', {
						className: 'mb-3 p-3',
						children: [
							E.jsx('h5', {
								className: 'card-title socialmedia__inner',
								children: 'Social Media',
							}),
							E.jsx('a', {
								href: 'https://github.com/sebecjeanluc',
								className: 'fs-2 m-3',
								target: '_blank',
								rel: 'noreferrer',
								children: E.jsx('svg', {
									xmlns: 'http://www.w3.org/2000/svg',
									width: '32',
									height: '32',
									fill: 'currentColor',
									className: 'bi bi-github',
									viewBox: '0 0 16 16',
									children: E.jsx('path', {
										d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
									}),
								}),
							}),
							E.jsx('a', {
								href: 'https://www.linkedin.com/in/tak-k-8b657828/',
								className: 'fs-2 m-3',
								target: '_blank',
								rel: 'noreferrer',
								children: E.jsx('svg', {
									xmlns: 'http://www.w3.org/2000/svg',
									width: '32',
									height: '32',
									fill: 'currentColor',
									className: 'bi bi-linkedin',
									viewBox: '0 0 16 16',
									children: E.jsx('path', {
										d: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z',
									}),
								}),
							}),
							E.jsx('a', {
								href: 'https://twitter.com/_takuyakawamura',
								className: 'fs-2 m-3',
								target: '_blank',
								rel: 'noreferrer',
								children: E.jsx('svg', {
									xmlns: 'http://www.w3.org/2000/svg',
									width: '32',
									height: '32',
									fill: 'currentColor',
									className: 'bi bi-twitter-x',
									viewBox: '0 0 16 16',
									children: E.jsx('path', {
										d: 'M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z',
									}),
								}),
							}),
						],
					}),
				}),
			}),
			E.jsx('section', {
				className: 'text-center text-lg-start footer',
				children: E.jsxs('div', {
					className: 'text-center p-3 footer-title',
					children: ['© ', Bw, ' TAKUYA KAWAMURA'],
				}),
			}),
		],
	})
}
function Kw() {
	return E.jsxs('section', {
		className: 'section__wrapper',
		children: [
			E.jsx('div', {
				className: 'section-title__wrapper',
				children: E.jsx('h3', { children: 'PROJECT' }),
			}),
			E.jsxs('div', {
				className: 'section-content__wrapper',
				children: [
					E.jsx(gn, {
						to: 'https://suiki.co.uk',
						target: '__blank',
						children: E.jsx('img', {
							src: '/images/work/suiki_hp_resized.png',
							alt: 'Suiki hp',
						}),
					}),
					E.jsx('h4', { children: 'WEB SERVICE' }),
					E.jsx('p', {
						children:
							'This website is under construction. It shows the part of design and mock-up coding for a cosmetic site.',
					}),
				],
			}),
			E.jsx('div', {
				className: 'contact-button__wrapper arrow-right',
				children: E.jsx('button', {
					className: 'contact-button',
					children: E.jsx(gn, {
						to: '/projectGallery',
						children: 'PROJECT GALLERY',
					}),
				}),
			}),
		],
	})
}
function Yw() {
	return E.jsxs('section', {
		id: 'home',
		children: [
			E.jsxs('div', {
				className: 'home__wrapper',
				children: [
					E.jsx('div', {
						className: 'home_profile_pic--wrapper',
						children: E.jsx('img', {
							src: '/images/pf_pic_BL.jpg',
							alt: 'Tak profile picture',
						}),
					}),
					E.jsxs('div', {
						className: 'home_title--wrapper',
						children: [
							E.jsx('h3', { children: "TAK -uya- KAWAMURA's PORTFOLIO" }),
							E.jsx('h4', { children: "IT's ALL ABOUT STORY" }),
							E.jsx('p', {
								children:
									'Takuya Kawamura, a front-end developer with a keen eye for film and interactive media, has made a significant transition from admiring movie storytelling to mastering the digital realm. Recognizing the untapped potential of smartphones, Takuya co-founded a web service dedicated to innovative collaborative storytelling. His expertise lies in crafting user interfaces that seamlessly integrate aesthetics with functionality, aiming to revolutionize digital experiences through engaging narratives and interactive storytelling techniques.',
							}),
							E.jsxs('div', {
								className: 'contact-button__wrapper',
								children: [
									E.jsx('a', {
										href: '/pdf/TakuyKawamuraResume2023EN-technicalResume.pdf',
										download: !0,
										children: E.jsx('button', {
											className: 'contact-button',
											children: 'RESUME DOWNLOAD',
										}),
									}),
									E.jsx('div', {
										className: 'contact-button__wrapper',
										children: 'EMAIL: tkawamura11@gmail.com',
									}),
								],
							}),
						],
					}),
				],
			}),
			E.jsx('div', {
				className: 'subSection__wrapper',
				children: E.jsx(gn, {
					to: '/contact',
					children: E.jsx('div', {
						className: 'contact-button__wrapper',
						children: E.jsx('button', {
							className: 'contact-button',
							children: 'CONTACT HIM',
						}),
					}),
				}),
			}),
			E.jsx(Kw, {}),
		],
	})
}
const Qw = [
	{
		id: 10,
		name: 'COMPANY WEBSITE - Pips',
		year: '12-2019',
		client: 'pips',
		description:
			'This is an official company website for Pips international pre-school. located in Tokyo, built in Wordpress.',
		imageLink: '/images/work/pips.png',
		status: !1,
		link: 'https://pipschild.com',
	},
	{
		id: 11,
		name: 'COMPANY WEBSITE - Miseenscen',
		year: '03-2020',
		client: 'Mise en scene, Inc.',
		description:
			'This is an official company website for Mise en scene, Inc. located in Tokyo, built in HTML, and CSS deloyed in AWS.',
		imageLink: '/images/work/miseenscene.png',
		status: !0,
		link: 'https://miseenscene.co.jp',
	},
	{
		id: 12,
		name: 'COMPANY WEBSITE - Suiki',
		year: '11-2021',
		client: 'Suiki',
		description:
			'This is an official company website for Suiki Limited, Inc. located in UK, built in HTML, and CSS deloyed in AWS.',
		imageLink: '/images/work/suiki_hp.png',
		status: !0,
		link: 'https://suiki.co.uk',
	},
	{
		id: 21,
		name: 'Readme Generator',
		year: '01-2024',
		client: 'bootcamp',
		description:
			"This project is about developing a command-line application that dynamically generates a professional README.md file for open-source GitHub projects. Utilizing the Inquirer package, the application will simplify the process of creating a detailed README that includes information on the app's purpose, usage, installation, issue reporting, and contribution guidelines. The aim is to enhance the quality of open-source projects and encourage community contributions, while allowing project creators to focus more on development work.",
		imageLink: '/images/work/readme-demo.png',
		status: !0,
		link: 'https://sebecjeanluc.github.io/readme-generator/',
		githubLink: 'https://github.com/sebecjeanluc/readme-generator',
	},
	{
		id: 22,
		name: 'Console Finances',
		year: '10-2021',
		client: 'bootcamp',
		description:
			'This is a Javascript practice for a bootcamp. In this practice, you will see the fundemental technique of Javascript, using variable, array, iteration, and conditional loops. The guidance is provided for the roadmap below.',
		imageLink:
			'https://raw.githubusercontent.com/sebecjeanluc/Console-Finances/main/consoleFinances.png',
		status: !0,
		link: 'https://sebecjeanluc.github.io/Console-Finances/',
		githubLink: 'https://github.com/sebecjeanluc/Console-Finances',
	},
	{
		id: 31,
		name: 'Team Profile Builder',
		year: '11-2021',
		client: 'bootcamp',
		description:
			'This project involves the creation of a Node.js command-line application designed to handle and process information about employees in a software engineering team. The essential task of this application is to take specific details about each team member, such as their name, role, ID, email, and other role-specific information, and use this data to generate an HTML webpage. This webpage will display summarized profiles for each team member. An integral part of the project is ensuring that the application passes a series of provided tests, indicating that each segment of the code functions as intended.',
		imageLink: '/images/work/team-profile.png',
		status: !0,
		link: 'https://sebecjeanluc.github.io/team-profile-generator/',
		githubLink: 'https://github.com/sebecjeanluc/team-profile-generator',
	},
	{
		id: 32,
		name: 'Weather Dashboard',
		year: '12-2021',
		client: 'bootcamp',
		description:
			'The project involves creating a browser-based weather dashboard that dynamically updates with data retrieved from the 5 Day Weather Forecast API. Developers must register for an API key, which could take up to 2 hours to activate, and learn how to use the API to integrate weather data into their dashboard.',
		imageLink:
			'https://raw.githubusercontent.com/sebecjeanluc/weather-dashboard/main/assets/images/demo.png',
		status: !0,
		link: 'https://sebecjeanluc.github.io/weather-dashboard/',
		githubLink: 'https://github.com/sebecjeanluc/weather-dashboard',
	},
	{
		id: 33,
		name: 'Work Day Scheduler',
		year: '12-2021',
		client: 'bootcamp',
		description:
			'The project involves creating a dynamic digital planner that displays the current day at the top and shows timeblocks for standard business hours. These timeblocks are color-coded to differentiate past, present, and future. Users can add events by clicking on a timeblock, which are then saved locally and persist between page refreshes.',
		imageLink:
			'https://raw.githubusercontent.com/sebecjeanluc/work-day-scheduler/main/assets/images/05-third-party-apis-homework-demo.gif',
		status: !0,
		link: 'https://sebecjeanluc.github.io/work-day-scheduler/',
		githubLink: 'https://github.com/sebecjeanluc/work-day-scheduler',
	},
	{
		id: 34,
		name: 'Code Quiz',
		year: '11-2021',
		client: 'bootcamp',
		description:
			"This project is to create a browser-based timed coding quiz with multiple-choice questions, using dynamic HTML, CSS, and JavaScript for a responsive interface, applying skills I've learned in this module.",
		imageLink:
			'https://raw.githubusercontent.com/sebecjeanluc/code-quiz/main/assets/guide/08-web-apis-challenge-demo.gif',
		status: !0,
		link: 'https://sebecjeanluc.github.io/code-quiz/',
		githubLink: 'https://github.com/sebecjeanluc/code-quiz',
	},
]
function Gw() {
	const e = Qw
	return E.jsxs('section', {
		className: 'section-picTop__wrapper',
		children: [
			E.jsx('img', { src: '/images/work/signature.png', alt: 'signature' }),
			E.jsx('div', {
				className: 'section-picTop__inner',
				children: E.jsx('h3', { children: 'PROJECT GALLERY' }),
			}),
			E.jsx('div', {
				className: 'projectGallery__wrapper',
				children: E.jsx('div', {
					className: 'projectGallery__inner',
					children: e.map((t) =>
						E.jsxs(
							'div',
							{
								className: 'projectGallery-button__wrapper',
								children: [
									E.jsx('div', {
										className: 'projectGallery-item',
										children: `# 0${t.id}`,
									}),
									E.jsx('button', {
										className: 'projectGallery-button',
										type: 'button',
										'data-bs-toggle': 'collapse',
										'data-bs-target': `#project0${t.id}`,
										'aria-expanded': 'false',
										'aria-controls': `project0${t.id}`,
										children: t.name,
									}),
									E.jsx('div', {
										className: 'collapse projectGallery-content',
										id: `project0${t.id}`,
										children: E.jsxs('div', {
											className: 'projectGallery-content-item',
											children: [
												E.jsx('img', {
													src: `${t.imageLink}`,
													className: 'card-img-top',
													alt: '...',
												}),
												E.jsx('div', {
													className: 'projectGallery-content-item',
													children: t.description,
												}),
												E.jsxs('div', {
													children: [
														'Deployed:',
														t.link
															? E.jsx('a', {
																	href: `${t.link}`,
																	target: '__blank',
																	children: ' LINK',
															  })
															: ' N/A',
													],
												}),
												E.jsxs('div', {
													children: [
														'GITHUB:',
														t.githubLink
															? E.jsx('a', {
																	href: `${t.githubLink}`,
																	target: '__blank',
																	children: ' LINK',
															  })
															: ' N/A',
													],
												}),
											],
										}),
									}),
								],
							},
							t.id
						)
					),
				}),
			}),
			E.jsx('div', {
				className: 'subSection__wrapper',
				children: E.jsx('div', {
					className: 'contact-button__wrapper arrow-right',
					children: E.jsx('button', {
						className: 'contact-button',
						children: E.jsx(gn, { to: '.', children: 'BACK TO HOME' }),
					}),
				}),
			}),
		],
	})
}
function Xw() {
	const [e, t] = A.useState({ name: '', email: '', message: '' })
	function n(i) {
		t({ ...e, [i.target.name]: i.target.value })
	}
	function r(i) {
		i.preventDefault(),
			console.log(e),
			alert(
				`Thank you ${e.name} but unfortunately the form is not working. Please contact via my email: tkawamura11@gmail.com or social media`
			)
	}
	return E.jsxs('section', {
		className: 'general__wrapper',
		children: [
			E.jsx('h3', { children: 'CONTACT' }),
			E.jsx('div', {
				className: 'subSection__wrapper',
				children: E.jsxs('form', {
					onSubmit: r,
					className: 'container mt-5',
					children: [
						E.jsxs('div', {
							className: 'mb-3',
							children: [
								E.jsx('label', {
									htmlFor: 'name',
									className: 'form-label',
									children: 'Name',
								}),
								E.jsx('input', {
									type: 'text',
									className: 'form-control',
									id: 'name',
									name: 'name',
									value: e.name,
									onChange: n,
								}),
							],
						}),
						E.jsxs('div', {
							className: 'mb-3',
							children: [
								E.jsx('label', {
									htmlFor: 'email',
									className: 'form-label',
									children: 'Email address',
								}),
								E.jsx('input', {
									type: 'email',
									className: 'form-control',
									id: 'email',
									name: 'email',
									value: e.email,
									onChange: n,
								}),
							],
						}),
						E.jsxs('div', {
							className: 'mb-3',
							children: [
								E.jsx('label', {
									htmlFor: 'message',
									className: 'form-label',
									children: 'Message',
								}),
								E.jsx('textarea', {
									className: 'form-control',
									id: 'message',
									name: 'message',
									rows: '3',
									value: e.message,
									onChange: n,
								}),
							],
						}),
						E.jsx('div', {
							className: 'subSection__wrapper',
							children: E.jsx('div', {
								className: 'contact-button__wrapper',
								children: E.jsx('button', {
									className: 'contact-button',
									type: 'submit',
									children: 'SUBMIT',
								}),
							}),
						}),
					],
				}),
			}),
		],
	})
}
function qw() {
	return E.jsxs($_, {
		children: [
			E.jsx(Ww, {}),
			E.jsxs(A_, {
				children: [
					E.jsx(co, { path: '/', element: E.jsx(Yw, {}) }),
					E.jsx(co, { path: '/projectGallery', element: E.jsx(Gw, {}) }),
					E.jsx(co, { path: '/contact', element: E.jsx(Xw, {}) }),
				],
			}),
			E.jsx(Hw, {}),
		],
	})
}
cl.createRoot(document.getElementById('root')).render(
	E.jsx(Bf.StrictMode, { children: E.jsx(qw, {}) })
)
