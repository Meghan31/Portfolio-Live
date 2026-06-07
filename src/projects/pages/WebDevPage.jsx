import Sidebar from '../../components/sidebar/Sidebar';
import './webDevPage.scss';

/* ════════════════════════════════════════════════════════════════════
   WEB DEVELOPMENT — "DAYBREAK STUDIO"
   The sister page to the Game Boy bedroom — but it's morning now.
   Every project has shipped and floats as a live browser window in a
   clear, paper-cut sky. Below sits a sunny windowsill: a debugging
   rubber duck, a monstera, a "</>" mug going cold, a humming router.

   • Every font is pulled from Google Fonts (@import in the .scss).
   • No emoji anywhere — each glyph is inline SVG or a pure-CSS shape.
   • No soft "AI" glow gradients — skies are hard-banded, depth comes
     from layered paper-cut shadows, light is physically motivated.
   ════════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────
   PROJECT DATA  (real web builds — unchanged)
   ────────────────────────────────────────────────────────────── */

const projects = [
	{
		title: 'Interactive Portfolio',
		slug: 'rive-portfolio',
		description:
			'A dynamic portfolio with Rive animations, project showcases, fluid transitions, and interactive UI moments.',
		link: 'https://github.com/Meghan31/Rive-Portfolio.git',
		technologies: ['React', 'Rive', 'GSAP', 'Tailwind'],
		category: 'Frontend',
		accent: '#0ea5b7',
		hash: 'a3f92b1',
	},
	{
		title: 'Nostalgia Extension',
		slug: 'nostalgia-extension',
		description:
			'A lightweight Chrome extension built with React for quick capture and browser-native interactions.',
		link: 'https://github.com/Meghan31/nostalgia-copy-paste-extension',
		technologies: ['React', 'Chrome API', 'JS'],
		category: 'Extension',
		accent: '#8b5cf6',
		hash: '7c4e80d',
	},
	{
		title: 'Mind-Bloom',
		slug: 'mind-bloom',
		description:
			'A full-stack mental wellness app with mood tracking, journaling, and personalized affirmations.',
		link: 'https://github.com/Meghan31/Mind-Bloom',
		technologies: ['React', 'Node', 'PostgreSQL', 'Prisma', 'JWT'],
		category: 'Full Stack',
		accent: '#10b981',
		hash: 'f1b9a02',
	},
	{
		title: 'Slick-Chat',
		slug: 'slick-chat',
		description:
			'A real-time chat application with modern messaging flows, live updates, and full-stack architecture.',
		link: 'https://github.com/Meghan31/Slick-Chat',
		technologies: ['React', 'Node', 'Socket.io', 'MongoDB'],
		category: 'Full Stack',
		accent: '#ec4899',
		hash: '2d6c5ee',
	},
	{
		title: 'CodeSketch',
		slug: 'code-sketch',
		description:
			'A collaborative sketching and coding workspace using canvas interactions and real-time syncing.',
		link: 'https://github.com/Meghan31/Code-Sketch',
		technologies: ['React', 'WebSockets', 'Canvas', 'Node'],
		category: 'Full Stack',
		accent: '#f59e0b',
		hash: '9e0af31',
	},
	{
		title: 'Decentralized Voting',
		slug: 'voting-system',
		description:
			'A blockchain-based voting system deployed with cloud infrastructure and secure participation flows.',
		link: 'https://github.com/Meghan31/Voting-System-AWS.git',
		technologies: ['AWS', 'Blockchain', 'Node', 'React'],
		category: 'Cloud',
		accent: '#3b82f6',
		hash: 'b48d12c',
	},
	{
		title: 'Redis Cache Server',
		slug: 'redis-cache',
		description:
			'A high-performance backend setup using Redis for caching, response speed, and service efficiency.',
		link: 'https://github.com/Meghan31/Redis-Cache-Server.git',
		technologies: ['Redis', 'Node', 'Express', 'Docker'],
		category: 'Backend',
		accent: '#ef4444',
		hash: '5fa7e09',
	},
	{
		title: 'Markdown Editor',
		slug: 'markdown-editor',
		description:
			'A collaborative markdown editor with live previews, document syncing, and real-time editing.',
		link: 'https://github.com/Meghan31/Real-time-Markdown-Editor.git',
		technologies: ['React', 'Socket.io', 'Marked', 'Express'],
		category: 'Full Stack',
		accent: '#14b8a6',
		hash: 'c91b3d4',
	},
	{
		title: 'Educational Quiz App',
		slug: 'quiz-app',
		description:
			'A gamified learning app with quizzes, progress tracking, and Firebase-backed mobile flows.',
		link: 'https://github.com/Meghan31',
		technologies: ['React Native', 'Firebase', 'Redux'],
		category: 'Mobile Web',
		accent: '#f97316',
		hash: '0e6f8aa',
	},
];

/* per-window scatter — margin offsets, stacking order & gentle lean */
const LAYOUT = [
	{ mt: 0, ml: 0, z: 5, rot: -1.4 },
	{ mt: -26, ml: 34, z: 4, rot: 1.0 },
	{ mt: 22, ml: -18, z: 6, rot: -0.6 },
	{ mt: -18, ml: 18, z: 3, rot: 1.3 },
	{ mt: 6, ml: -10, z: 7, rot: -1.8 },
	{ mt: 38, ml: 28, z: 2, rot: 0.5 },
	{ mt: -8, ml: -26, z: 6, rot: 1.4 },
	{ mt: 28, ml: 22, z: 4, rot: -1.0 },
	{ mt: -22, ml: -14, z: 5, rot: 0.8 },
];

/* ──────────────────────────────────────────────────────────────
   SCENE DATA
   ────────────────────────────────────────────────────────────── */

/* sun's spokes — a crisp ring of rays that rotates as one group */
const RAYS = Array.from({ length: 12 }, (_, i) => i * 30);

/* paper-cut clouds drifting at different depths/speeds */
const CLOUDS = [
	{ top: '13%', size: 1.15, dur: '52s', delay: '0s', tone: '#ffffff' },
	{ top: '24%', size: 0.8, dur: '74s', delay: '-22s', tone: '#fdf6ec' },
	{ top: '8%', size: 0.62, dur: '64s', delay: '-40s', tone: '#ffffff' },
	{ top: '34%', size: 0.95, dur: '88s', delay: '-12s', tone: '#fbf1e0' },
];

/* paper planes — "ship it" — gliding across on a long loop */
const PLANES = [
	{ top: '20%', dur: '17s', delay: '2s', scale: 1, tone: '#5b6b8c' },
	{ top: '46%', dur: '23s', delay: '9s', scale: 0.78, tone: '#7c8aa8' },
	{ top: '64%', dur: '20s', delay: '15s', scale: 0.62, tone: '#94a0bb' },
];

/* drifting sun-dust motes caught in the light */
const MOTES = Array.from({ length: 12 }, (_, i) => ({
	left: `${(i * 8.3 + 4) % 100}%`,
	top: `${((i * 37) % 70) + 8}%`,
	size: 3 + (i % 3) * 2,
	dur: `${6 + (i % 5) * 2}s`,
	delay: `${(i % 6) * 0.7}s`,
}));

/* ── inline SVG glyphs (no emoji) ─────────────────────────────── */

const IconLock = () => (
	<svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<rect x="4.5" y="10.5" width="15" height="10" rx="2.4" fill="currentColor" />
		<path d="M7.6 10.5V8a4.4 4.4 0 0 1 8.8 0v2.5" stroke="currentColor" strokeWidth="2.2" fill="none" />
	</svg>
);

const IconBolt = () => (
	<svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
	</svg>
);

/* ──────────────────────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────────────────────── */

const WebDevPage = () => {
	return (
		<div className="web-studio">
			{/* left sidebar pogo-stick mascot — kept exactly as-is */}
			<Sidebar />

			{/* ═══════════ MORNING SKY — fixed backdrop diorama ═══════════ */}
			<div className="sky" aria-hidden="true">
				<div className="sky-band" />

				{/* sun with a slowly turning ring of rays */}
				<div className="sun">
					<div className="sun-rays">
						{RAYS.map((deg, i) => (
							<span key={i} className="ray" style={{ transform: `rotate(${deg}deg) translateY(-52px)` }} />
						))}
					</div>
					<span className="sun-core" />
					<span className="sun-blush" />
				</div>

				{/* paper-cut clouds */}
				{CLOUDS.map((c, i) => (
					<div
						key={i}
						className="cloud"
						style={{
							top: c.top,
							'--c-dur': c.dur,
							'--c-delay': c.delay,
							'--c-scale': c.size,
							'--c-tone': c.tone,
						}}
					>
						<span className="puff p1" />
						<span className="puff p2" />
						<span className="puff p3" />
						<span className="puff base" />
					</div>
				))}

				{/* paper planes shipping across the sky */}
				{PLANES.map((p, i) => (
					<span
						key={i}
						className="plane"
						style={{ top: p.top, '--pl-dur': p.dur, '--pl-delay': p.delay, '--pl-scale': p.scale, '--pl-tone': p.tone }}
					>
						<span className="plane-fold" />
					</span>
				))}

				{/* layered paper hills + a tiny skyline on the horizon */}
				<div className="hills">
					<span className="hill h-back" />
					<span className="hill h-mid" />
					<div className="skyline">
						<span className="bldg b1" />
						<span className="bldg b2" />
						<span className="bldg b3" />
						<span className="bldg b4" />
						<span className="bldg b5" />
						<span className="bldg b6" />
					</div>
					<span className="hill h-front" />
				</div>

				{/* sun-dust motes */}
				<div className="motes">
					{MOTES.map((m, i) => (
						<span
							key={i}
							className="mote"
							style={{ left: m.left, top: m.top, width: m.size, height: m.size, '--m-dur': m.dur, '--m-delay': m.delay }}
						/>
					))}
				</div>
			</div>

			{/* warm sunlight pooling from the upper-right (physical, not decorative) */}
			<div className="sun-wash" aria-hidden="true" />

			{/* ═══════════ WINDOWSILL — fixed foreground props ═══════════ */}
			<div className="sill" aria-hidden="true">
				<div className="sill-board" />
				<div className="sill-lip" />

				{/* debugging rubber duck, bobbing on a little reflection */}
				<div className="prop prop-duck">
					<span className="duck-ripple" />
					<span className="duck">
						<span className="duck-tail" />
						<span className="duck-body" />
						<span className="duck-wing" />
						<span className="duck-head">
							<span className="duck-eye" />
							<span className="duck-beak" />
						</span>
					</span>
				</div>

				{/* monstera in a terracotta pot */}
				<div className="prop prop-plant">
					<span className="leaf l1" />
					<span className="leaf l2" />
					<span className="leaf l3" />
					<span className="leaf l4" />
					<span className="leaf l5" />
					<span className="pot">
						<span className="pot-rim" />
					</span>
				</div>

				{/* "</>" mug, going cold */}
				<div className="prop prop-mug">
					<span className="mug-steam">
						<i />
						<i />
						<i />
					</span>
					<span className="mug-body">
						<span className="mug-logo">&lt;/&gt;</span>
					</span>
					<span className="mug-handle" />
				</div>

				{/* humming router with blinking LEDs + wifi waves */}
				<div className="prop prop-router">
					<span className="router-wave w1" />
					<span className="router-wave w2" />
					<span className="router-wave w3" />
					<span className="router-ant a-left" />
					<span className="router-ant a-right" />
					<span className="router-body">
						<span className="led d1" />
						<span className="led d2" />
						<span className="led d3" />
					</span>
				</div>

				{/* a small stack of manuals */}
				<div className="prop prop-books">
					<span className="book b1" />
					<span className="book b2" />
					<span className="book b3" />
				</div>
			</div>

			{/* ═══════════ SCATTERED DECOR (behind the windows) ═══════════ */}
			<div className="float-code" aria-hidden="true">
				<span className="fc-dots">
					<i className="r" />
					<i className="y" />
					<i className="g" />
				</span>
				<pre className="fc-lines">
					<span className="l1">const ship = () =&gt; {'{'}</span>
					<span className="l2">return sunshine;</span>
					<span className="l3">{'}'}</span>
					<span className="l4">{'// deploy on green'}</span>
				</pre>
			</div>

			<div className="float-tag" aria-hidden="true">&lt;/&gt;</div>
			<div className="float-cursor" aria-hidden="true" />
			<div className="float-spark s1" aria-hidden="true" />
			<div className="float-spark s2" aria-hidden="true" />
			<div className="float-spark s3" aria-hidden="true" />

			{/* back navigation */}
			<a href="/#projects" className="studio-back">
				<span className="back-prompt" aria-hidden="true">&#8627;</span> cd ../projects
			</a>

			{/* ═══════════ MAIN CONTENT ═══════════ */}
			<div className="studio-stage">
				<header className="studio-head">
					<p className="studio-eyebrow">
						<span className="eyebrow-dot" /> localhost:3000 &middot; LIVE RELOAD
					</p>
					<h1 className="studio-title">Web Development</h1>
					<p className="studio-sub">
						{'// shipping in the sunshine'}
						<span className="sub-caret">_</span>
					</p>
					<span className="studio-rule" />
				</header>

				<main className="studio-windows">
					{projects.map((p, i) => {
						const L = LAYOUT[i % LAYOUT.length];
						return (
							<a
								key={p.slug}
								href={p.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`win ${i % 2 === 0 ? 'open-l' : 'open-r'}`}
								aria-label={`${p.title} — open source on GitHub`}
								style={{
									'--mt': `${L.mt}px`,
									'--ml': `${L.ml}px`,
									'--z': L.z,
									'--card-rotate': `${L.rot}deg`,
									'--i': i,
									'--accent': p.accent,
								}}
							>
								{/* accent header rail */}
								<span className="win-rail" aria-hidden="true" />

								{/* TAB BAR */}
								<div className="win-tabbar">
									<span className="win-tab active">
										<span className="tab-fav" />
										<span className="tab-name">{p.title}</span>
										<span className="tab-close">&times;</span>
									</span>
									<span className="win-tab ghost">README.md</span>
									<span className="tab-new">+</span>
								</div>

								{/* TITLE BAR — traffic lights + window title */}
								<div className="win-titlebar">
									<span className="win-lights">
										<i className="lt close" />
										<i className="lt min" />
										<i className="lt max" />
									</span>
									<span className="win-titletext">
										meghan31 &mdash; {p.title}
									</span>
								</div>

								{/* ADDRESS BAR */}
								<div className="win-addr">
									<span className="addr-nav">
										<span>&larr;</span>
										<span>&rarr;</span>
									</span>
									<span className="addr-url">
										<IconLock />
										<span className="url-text">https://meghan31.dev/{p.slug}</span>
									</span>
									<span className="addr-reload">&#8635;</span>
								</div>

								{/* WINDOW CONTENT */}
								<div className="win-content">
									<h2 className="win-name">{p.title}</h2>
									<span className="win-type">{p.category}</span>
									<p className="win-desc">{p.description}</p>

									<span className="win-divider" />

									<div className="win-badges">
										{p.technologies.map((tech) => (
											<span className="badge" key={tech}>
												<span className="badge-pre">&gt;</span>
												{tech}
											</span>
										))}
									</div>

									<div className="win-actions">
										<span className="win-commit">git: {p.hash}</span>
										<span className="win-open">Open &rarr;</span>
									</div>
								</div>

								{/* STATUS BAR */}
								<div className="win-status">
									<span className="st-item">
										<span className="st-live" />
										LIVE
									</span>
									<span className="st-item">
										<IconLock />
										HTTPS
									</span>
									<span className="st-item">200 OK</span>
									<span className="st-item">
										<IconBolt />0 errors
									</span>
								</div>
							</a>
						);
					})}
				</main>

				<footer className="studio-footer">
					<span className="footer-rule" aria-hidden="true" />
					<p className="footer-text">npm run build &middot; all systems green</p>
				</footer>
			</div>
		</div>
	);
};

export default WebDevPage;
