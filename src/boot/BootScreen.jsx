/* eslint-disable react/prop-types */
// prop-types isn't a dependency of this project; props here are internal-only.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './boot.scss';

/* ------------------------------------------------------------------ *
 *  BootScreen — "the portfolio boots like a personal workstation"
 *
 *  One terminal session that walks through three shells:
 *    1. Windows PowerShell   (init)
 *    2. Ubuntu / systemd     (mount)
 *    3. macOS zsh            (launch)
 *
 *  The progress bar tracks REAL asset loading (images + .riv files +
 *  fonts + document readyState), floored by a minimum display time so
 *  it never flickers past, and ceilinged by MAX_DURATION so a slow
 *  asset can never trap a visitor.
 * ------------------------------------------------------------------ */

const SESSION_KEY = 'meghan31:booted';

const MIN_DURATION_FULL = 2600; // never exit a cold boot before this
const MIN_DURATION_FAST = 650; // returning visitor, same session
const MAX_DURATION = 9000; // hard ceiling — always let people in
const EXIT_MS = 520; // must match $exit-ms in boot.scss

/* Heavy above-the-fold assets worth warming while the boot plays. */
const PRELOAD_IMAGES = ['/assets/images/Whitehello.jpg'];

const PRELOAD_BINARY = [
	'/assets/rive/home/name.riv',
	'/assets/rive/home/newface-mouse.riv',
	'/assets/rive/about/withpen.riv',
	'/assets/rive/socials/github.riv',
	'/assets/rive/socials/linkedin.riv',
	'/assets/rive/projects/webdev.riv',
	'/assets/rive/projects/appdev.riv',
	'/assets/rive/projects/aimldev.riv',
	'/assets/rive/projects/frog.riv',
	'/assets/rive/hangerMan/hangingman.riv',
];

const HOLDING_MESSAGES = [
	'fetching creative modules',
	'decompressing rive canvases',
	'still working — large assets',
	'almost there',
];

/* ---------------------------- prompts ---------------------------- */

const PS_PROMPT = [{ t: 'PS C:\\Users\\Meghan31\\portfolio>', c: 'ps-path' }];

const UB_PROMPT = [
	{ t: 'meghan31@dev-workstation', c: 'ub-user' },
	{ t: ':', c: 'ub-sym' },
	{ t: '~', c: 'ub-dir' },
	{ t: '$', c: 'ub-sym' },
];

const MAC_PROMPT = [
	{ t: 'meghan31@MacBook-Pro', c: 'mac-user' },
	{ t: ':', c: 'mac-sym' },
	{ t: '~/portfolio', c: 'mac-path' },
	{ t: '$', c: 'mac-sym' },
];

const lastLogin = () => {
	const n = new Date();
	const d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][n.getDay()];
	const m = [
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
	][n.getMonth()];
	const p = (x) => String(x).padStart(2, '0');
	return `${d} ${m} ${p(n.getDate())} ${p(n.getHours())}:${p(
		n.getMinutes()
	)}:${p(n.getSeconds())}`;
};

/* ---------------------------- the script ---------------------------- */

const buildFullScript = () => [
	{ kind: 'stage', stage: 'ps', phase: 'INIT', delay: 0 },

	{ kind: 'line', cls: 'ps-dim', text: 'Windows PowerShell', delay: 260 },
	{
		kind: 'line',
		cls: 'ps-dim',
		text: 'Copyright (C) 2026 meghan31. All rights reserved.',
		delay: 55,
	},
	{ kind: 'line', cls: 'sp', text: '', delay: 40 },
	{
		kind: 'type',
		pre: PS_PROMPT,
		cls: 'ps-cmd',
		text: ' .\\boot.ps1 -Profile Dev',
		delay: 150,
	},
	{ kind: 'line', cls: 'sp', text: '', delay: 90 },
	{
		kind: 'line',
		tag: 'VERBOSE:',
		tagCls: 'ps-verb',
		cls: 'ps-text',
		text: ' initializing portfolio environment',
		delay: 105,
	},
	{
		kind: 'line',
		tag: 'VERBOSE:',
		tagCls: 'ps-verb',
		cls: 'ps-text',
		text: ' resolving identity ............ meghan31',
		delay: 105,
	},
	{
		kind: 'line',
		tag: 'VERBOSE:',
		tagCls: 'ps-verb',
		cls: 'ps-text',
		text: ' dark mode preference .......... always',
		delay: 105,
	},
	{
		kind: 'line',
		tag: 'VERBOSE:',
		tagCls: 'ps-verb',
		cls: 'ps-text',
		text: ' handing off to unix layer ..... ok',
		delay: 105,
	},
	{ kind: 'line', cls: 'sp', text: '', delay: 110 },

	{ kind: 'stage', stage: 'ubuntu', phase: 'MOUNT', delay: 200 },
	{
		kind: 'type',
		pre: UB_PROMPT,
		cls: 'ub-cmd',
		text: ' sudo systemctl start portfolio',
		delay: 130,
	},
	{ kind: 'line', cls: 'sp', text: '', delay: 90 },
	{
		kind: 'line',
		tag: '[  OK  ]',
		tagCls: 'ub-ok',
		cls: 'ub-text',
		text: ' Mounted /home/meghan31/projects',
		delay: 88,
	},
	{
		kind: 'line',
		tag: '[  OK  ]',
		tagCls: 'ub-ok',
		cls: 'ub-text',
		text: ' Mounted /home/meghan31/skills',
		delay: 88,
	},
	{
		kind: 'line',
		tag: '[  OK  ]',
		tagCls: 'ub-ok',
		cls: 'ub-text',
		text: ' Started caffeine.service',
		delay: 88,
	},
	{
		kind: 'line',
		tag: '[  OK  ]',
		tagCls: 'ub-ok',
		cls: 'ub-text',
		text: ' Loaded 47 unfinished side projects',
		delay: 88,
	},
	{
		kind: 'line',
		tag: '[  OK  ]',
		tagCls: 'ub-ok',
		cls: 'ub-text',
		text: ' Reached target creative-modules.target',
		delay: 88,
	},
	{ kind: 'line', cls: 'sp', text: '', delay: 110 },

	{ kind: 'stage', stage: 'mac', phase: 'LAUNCH', delay: 200 },
	{
		kind: 'line',
		cls: 'mac-dim',
		text: `Last login: ${lastLogin()} on ttys001`,
		delay: 110,
	},
	{
		kind: 'type',
		pre: MAC_PROMPT,
		cls: 'mac-cmd',
		text: ' npm run launch',
		delay: 105,
	},
	{ kind: 'line', cls: 'sp', text: '', delay: 90 },
	{
		kind: 'line',
		tag: '  \u25B8 ',
		tagCls: 'mac-arrow',
		cls: 'mac-text',
		text: 'starting UI components',
		delay: 100,
	},
	{
		kind: 'line',
		tag: '  \u25B8 ',
		tagCls: 'mac-arrow',
		cls: 'mac-text',
		text: 'warming rive canvases',
		delay: 100,
	},
	{
		kind: 'line',
		tag: '  \u25B8 ',
		tagCls: 'mac-arrow',
		cls: 'mac-text',
		text: 'hydrating the good ideas',
		delay: 100,
	},
	{
		kind: 'line',
		tag: '  \u2714 ',
		tagCls: 'mac-check',
		cls: 'mac-done',
		text: 'booting experience \u2014 welcome in.',
		delay: 170,
	},
];

const buildFastScript = () => [
	{ kind: 'stage', stage: 'mac', phase: 'RESUME', delay: 0 },
	{
		kind: 'line',
		cls: 'mac-dim',
		text: `Last login: ${lastLogin()} on ttys001`,
		delay: 200,
	},
	{
		kind: 'type',
		pre: MAC_PROMPT,
		cls: 'mac-cmd',
		text: ' npm run launch --resume',
		delay: 88,
	},
	{ kind: 'line', cls: 'sp', text: '', delay: 100 },
	{
		kind: 'line',
		tag: '  \u25B8 ',
		tagCls: 'mac-arrow',
		cls: 'mac-text',
		text: 'restoring session',
		delay: 120,
	},
	{
		kind: 'line',
		tag: '  \u2714 ',
		tagCls: 'mac-check',
		cls: 'mac-done',
		text: 'welcome back.',
		delay: 160,
	},
];

/* ---------------------------- chrome ---------------------------- */

const Glyph = ({ d, size = 10 }) => (
	<svg
		className="boot-glyph"
		width={size}
		height={size}
		viewBox="0 0 10 10"
		aria-hidden="true"
		focusable="false"
	>
		<path d={d} />
	</svg>
);

const MIN_D = 'M0 5 H10';
const MAX_D = 'M0.7 0.7 H9.3 V9.3 H0.7 Z';
const CLOSE_D = 'M0.7 0.7 L9.3 9.3 M9.3 0.7 L0.7 9.3';

const TitleBar = ({ variant, active }) => {
	const cls = `boot-chrome boot-chrome--${variant}${active ? ' is-active' : ''}`;

	if (variant === 'ps') {
		return (
			<div className={cls} aria-hidden={!active}>
				<div className="boot-chrome-left">
					<span className="boot-ps-mark">
						<span>&gt;_</span>
					</span>
					<span className="boot-chrome-title">
						Windows PowerShell — portfolio
					</span>
				</div>
				<div className="boot-chrome-right boot-win-controls">
					<span className="boot-winbtn">
						<Glyph d={MIN_D} />
					</span>
					<span className="boot-winbtn">
						<Glyph d={MAX_D} />
					</span>
					<span className="boot-winbtn is-close">
						<Glyph d={CLOSE_D} />
					</span>
				</div>
			</div>
		);
	}

	if (variant === 'ubuntu') {
		return (
			<div className={cls} aria-hidden={!active}>
				<div className="boot-chrome-left">
					<span className="boot-ub-tab">
						<Glyph d="M5 1 V9 M1 5 H9" size={9} />
					</span>
				</div>
				<span className="boot-chrome-title is-centered">
					meghan31@dev-workstation: ~
				</span>
				<div className="boot-chrome-right boot-ub-controls">
					<span className="boot-ubbtn">
						<Glyph d={MIN_D} size={9} />
					</span>
					<span className="boot-ubbtn">
						<Glyph d={MAX_D} size={9} />
					</span>
					<span className="boot-ubbtn">
						<Glyph d={CLOSE_D} size={9} />
					</span>
				</div>
			</div>
		);
	}

	return (
		<div className={cls} aria-hidden={!active}>
			<div className="boot-chrome-left boot-mac-dots">
				<span className="boot-dot is-red" />
				<span className="boot-dot is-yellow" />
				<span className="boot-dot is-green" />
			</div>
			<span className="boot-chrome-title is-centered">
				meghan31 — -zsh — 120×32
			</span>
			<div className="boot-chrome-right" />
		</div>
	);
};

/* ---------------------------- component ---------------------------- */

const BootScreen = ({ onFinish }) => {
	const reduced = useMemo(
		() =>
			typeof window !== 'undefined' &&
			window.matchMedia &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches,
		[]
	);

	const fast = useMemo(() => {
		try {
			return sessionStorage.getItem(SESSION_KEY) === '1';
		} catch {
			return false;
		}
	}, []);

	const script = useMemo(
		() => (fast ? buildFastScript() : buildFullScript()),
		[fast]
	);

	const [entries, setEntries] = useState([]);
	const [stage, setStage] = useState(fast ? 'mac' : 'ps');
	const [phase, setPhase] = useState(fast ? 'RESUME' : 'INIT');
	const [pct, setPct] = useState(0);
	const [holdIdx, setHoldIdx] = useState(0);
	const [holding, setHolding] = useState(false);
	const [exiting, setExiting] = useState(false);

	const bodyRef = useRef(null);
	const startRef = useRef(
		typeof performance !== 'undefined' ? performance.now() : Date.now()
	);
	const loadedRef = useRef(0);
	const totalRef = useRef(1);
	const scriptPRef = useRef(0);
	const scriptDoneRef = useRef(false);
	const curRef = useRef(0);
	const finishedRef = useRef(false);

	const minDuration = fast ? MIN_DURATION_FAST : MIN_DURATION_FULL;
	const typeMs = reduced ? 0 : 8;
	const gapScale = reduced ? 0.4 : 1;

	/* ---------------- exit ---------------- */

	const finish = useCallback(() => {
		if (finishedRef.current) return;
		finishedRef.current = true;
		try {
			sessionStorage.setItem(SESSION_KEY, '1');
		} catch {
			/* private mode — just boot fully next time */
		}
		setExiting(true);
		window.setTimeout(() => onFinish && onFinish(), EXIT_MS);
	}, [onFinish]);

	/* ---------------- lock the page while booting ---------------- */

	useEffect(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		window.scrollTo(0, 0);
		return () => {
			document.body.style.overflow = prev;
		};
	}, []);

	/* ---------------- skip on any interaction ---------------- */

	useEffect(() => {
		const skip = () => finish();
		window.addEventListener('keydown', skip);
		window.addEventListener('mousedown', skip);
		window.addEventListener('touchstart', skip, { passive: true });
		return () => {
			window.removeEventListener('keydown', skip);
			window.removeEventListener('mousedown', skip);
			window.removeEventListener('touchstart', skip);
		};
	}, [finish]);

	/* ---------------- warm the real assets ---------------- */

	useEffect(() => {
		const jobs = [
			...PRELOAD_IMAGES.map((u) => ({ u, kind: 'img' })),
			...PRELOAD_BINARY.map((u) => ({ u, kind: 'bin' })),
		];
		totalRef.current = jobs.length + 1; // +1 = fonts & document ready
		let alive = true;
		const bump = () => {
			if (alive) loadedRef.current += 1;
		};

		jobs.forEach(({ u, kind }) => {
			if (kind === 'img') {
				const img = new Image();
				img.onload = bump;
				img.onerror = bump;
				img.src = u;
			} else {
				fetch(u, { cache: 'force-cache' })
					.then((r) => r.blob())
					.then(bump)
					.catch(bump);
			}
		});

		const docReady = new Promise((res) => {
			if (document.readyState === 'complete') res();
			else window.addEventListener('load', res, { once: true });
		});
		const fontsReady = document.fonts
			? document.fonts.ready
			: Promise.resolve();

		Promise.all([docReady, fontsReady]).then(bump).catch(bump);

		return () => {
			alive = false;
		};
	}, []);

	/* ---------------- run the script ---------------- */

	useEffect(() => {
		let cancelled = false;
		const timers = [];
		let i = 0;
		let key = 0;

		setEntries([]);
		scriptDoneRef.current = false;
		scriptPRef.current = 0;

		const step = () => {
			if (cancelled) return;
			scriptPRef.current = i / script.length;

			if (i >= script.length) {
				scriptDoneRef.current = true;
				scriptPRef.current = 1;
				return;
			}

			const ev = script[i++];
			const wait = Math.round((ev.delay || 0) * gapScale);

			timers.push(
				window.setTimeout(() => {
					if (cancelled) return;

					if (ev.kind === 'stage') {
						setStage(ev.stage);
						setPhase(ev.phase);
						step();
						return;
					}

					if (ev.kind === 'line') {
						setEntries((prev) => [...prev, { ...ev, id: key++ }]);
						step();
						return;
					}

					// kind === 'type'
					const full = ev.text;
					setEntries((prev) => [...prev, { ...ev, id: key++, typed: 0 }]);

					if (typeMs === 0) {
						setEntries((prev) => {
							const next = prev.slice();
							next[next.length - 1] = {
								...next[next.length - 1],
								typed: full.length,
							};
							return next;
						});
						step();
						return;
					}

					let n = 0;
					const tick = () => {
						if (cancelled) return;
						n += 1;
						setEntries((prev) => {
							const next = prev.slice();
							const last = next[next.length - 1];
							if (!last) return prev;
							next[next.length - 1] = { ...last, typed: n };
							return next;
						});
						if (n < full.length) timers.push(window.setTimeout(tick, typeMs));
						else step();
					};
					timers.push(window.setTimeout(tick, typeMs));
				}, wait)
			);
		};

		step();

		return () => {
			cancelled = true;
			timers.forEach(window.clearTimeout);
		};
	}, [script, gapScale, typeMs]);

	/* ---------------- progress ---------------- */

	useEffect(() => {
		let raf;
		const now = () =>
			typeof performance !== 'undefined' ? performance.now() : Date.now();

		const loop = () => {
			const elapsed = now() - startRef.current;
			const assetP = Math.min(1, loadedRef.current / totalRef.current);
			const scriptP = scriptPRef.current;
			const timedOut = elapsed >= MAX_DURATION;
			const ready =
				scriptDoneRef.current && assetP >= 1 && elapsed >= minDuration;

			setHolding(scriptDoneRef.current && assetP < 1 && !timedOut);

			const target = ready || timedOut ? 100 : Math.min(scriptP, assetP) * 97;
			curRef.current += (target - curRef.current) * 0.14;

			// don't let float dust stall the bar at 99.97%
			if (target === 100 && curRef.current > 99.5) curRef.current = 100;
			setPct(curRef.current);

			if (curRef.current >= 100) {
				finish();
				return;
			}
			raf = requestAnimationFrame(loop);
		};

		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [finish, minDuration]);

	/* ---------------- rotating holding message ---------------- */

	useEffect(() => {
		if (!holding) return undefined;
		const id = window.setInterval(
			() => setHoldIdx((x) => (x + 1) % HOLDING_MESSAGES.length),
			1500
		);
		return () => window.clearInterval(id);
	}, [holding]);

	/* ---------------- keep the log pinned to the bottom ---------------- */

	useEffect(() => {
		const el = bodyRef.current;
		if (el) el.scrollTop = el.scrollHeight;
	}, [entries]);

	/* ---------------- render ---------------- */

	const lastId = entries.length ? entries[entries.length - 1].id : -1;

	return (
		<div
			className={[
				'boot-root',
				`boot--${stage}`,
				fast ? 'is-fast' : '',
				exiting ? 'is-exiting' : '',
				reduced ? 'is-reduced' : '',
			]
				.filter(Boolean)
				.join(' ')}
			role="progressbar"
			aria-label="Loading portfolio"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={Math.round(pct)}
		>
			<div className="boot-vignette" aria-hidden="true" />

			<div className="boot-stack">
				<div className="boot-post" aria-hidden="true">
					<span>meghan31 BIOS v3.1</span>
					<span className="boot-post-sep">·</span>
					<span>portfolio workstation</span>
					<span className="boot-post-sep">·</span>
					<span>memory 65536K OK</span>
				</div>

				<div className="boot-window">
					<div className="boot-titlebar">
						<TitleBar variant="ps" active={stage === 'ps'} />
						<TitleBar variant="ubuntu" active={stage === 'ubuntu'} />
						<TitleBar variant="mac" active={stage === 'mac'} />
					</div>

					<div className="boot-body" ref={bodyRef} aria-hidden="true">
						<div className="boot-log">
							{entries.map((e) => (
								<div className="boot-line" key={e.id}>
									{e.pre &&
										e.pre.map((seg, k) => (
											<span key={k} className={seg.c}>
												{seg.t}
											</span>
										))}
									{e.tag && <span className={e.tagCls}>{e.tag}</span>}
									<span className={e.cls}>
										{e.typed === undefined ? e.text : e.text.slice(0, e.typed)}
									</span>
									{e.id === lastId && (
										<span className="boot-cursor" aria-hidden="true" />
									)}
									{e.text === '' && !e.pre && !e.tag && '\u00A0'}
								</div>
							))}
						</div>
					</div>

					<div className="boot-status">
						<span className="boot-phase">{phase}</span>
						<div className="boot-bar">
							<div
								className="boot-bar-fill"
								style={{ width: `${Math.min(100, pct)}%` }}
							/>
						</div>
						<span className="boot-pct">{Math.round(pct)}%</span>
					</div>
				</div>

				<div className="boot-hint">
					<span className="boot-hold">
						{holding && (
							<>
								{HOLDING_MESSAGES[holdIdx]}
								<span className="boot-ellipsis" />
							</>
						)}
					</span>
					<span className="boot-skip">press any key to skip</span>
				</div>
			</div>
		</div>
	);
};

export default BootScreen;
