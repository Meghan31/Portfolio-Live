import { FiGithub } from 'react-icons/fi';
import './aimlDevPage.scss';

const AIMLDevPage = () => {
	const projects = [
		{
			title: 'Neural Music Recommender',
			entry: '#01',
			date: 'Dec 2024',
			description:
				'A sophisticated music recommendation system using collaborative filtering and deep neural networks to provide personalized suggestions based on listening habits.',
			link: 'https://github.com/Meghan31/Music-Recommendation-System.git',
			technologies: ['TensorFlow', 'Python', 'Neural Networks', 'NLP'],
			accuracy: '92.7%',
			stars: 4,
			checks: [true, true, true],
		},
		{
			title: 'Breast Cancer Detection',
			entry: '#02',
			date: 'Nov 2024',
			description:
				'An AI-driven model for early detection of breast cancer using advanced image analysis and classification to improve diagnostic accuracy and patient outcomes.',
			link: 'https://github.com/Meghan31/Breast-Cancer-Prediction.git',
			technologies: ['PyTorch', 'Computer Vision', 'CNN', 'Transfer Learning'],
			accuracy: '94.3%',
			stars: 5,
			checks: [true, true, false],
		},
		{
			title: 'Smart Hotel Management',
			entry: '#03',
			date: 'Sep 2024',
			description:
				'An AI-enhanced hotel management solution optimizing room allocation, predicting booking patterns, and personalizing guest service for maximum efficiency.',
			link: 'https://github.com/Meghan31/Hotel-Management.git',
			technologies: ['Scikit-learn', 'Python', 'Time Series', 'Clustering'],
			accuracy: '88.5%',
			stars: 3,
			checks: [true, true, true],
		},
		{
			title: 'Sign Language Translator',
			entry: '#04',
			date: 'Oct 2024',
			description:
				'A machine learning application translating sign language gestures into text or speech in real-time, bridging communication gaps for the hearing impaired.',
			link: 'https://github.com/Meghan31/Sign-Language-Translator.git',
			technologies: ['TensorFlow', 'Computer Vision', 'LSTM', 'MediaPipe'],
			accuracy: '91.2%',
			stars: 4,
			checks: [true, false, false],
		},
		{
			title: 'Drowsiness Detection',
			entry: '#05',
			date: 'Aug 2024',
			description:
				'A real-time computer vision system detecting driver drowsiness to prevent road accidents by monitoring eye movements and facial expressions.',
			link: 'https://github.com/Meghan31/Drowsiness-Detection.git',
			technologies: ['Keras', 'OpenCV', 'Deep Learning', 'Real-time'],
			accuracy: '95.8%',
			stars: 5,
			checks: [true, true, false],
		},
	];

	const rotations    = ['-2deg', '1.5deg', '-1deg', '2.5deg', '-0.5deg'];
	const marginTops   = ['0rem', '3rem', '1rem', '-1.5rem', '2rem'];
	const zIndexes     = [1, 3, 2, 4, 1];
	const checkLabels  = ['tested', 'deployed', 'documented'];

	const renderStars = (count) =>
		Array.from({ length: 5 }, (_, i) => (
			<span key={i} className={i < count ? 'star filled' : 'star empty'}>
				{i < count ? '★' : '☆'}
			</span>
		));

	/* ── Unique hand-drawn diagrams per card ── */
	const diagrams = [
		/* 0 — Neural network (Music Recommender) */
		<svg key="d0" className="card-diagram" width="82" height="62" viewBox="0 0 82 62" fill="none" aria-hidden="true">
			{[20, 40].flatMap((y1, i) =>
				[14, 30, 46].map((y2, j) => (
					<line key={`ca${i}${j}`} x1="16" y1={y1} x2="38" y2={y2} stroke="var(--red-dim)" strokeWidth="0.9" />
				))
			)}
			{[14, 30, 46].map((y, i) => (
				<line key={`cb${i}`} x1="46" y1={y} x2="67" y2="30" stroke="var(--red-dim)" strokeWidth="0.9" />
			))}
			<circle cx="10" cy="20" r="5" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<circle cx="10" cy="40" r="5" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<circle cx="42" cy="14" r="5" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<circle cx="42" cy="30" r="5" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<circle cx="42" cy="46" r="5" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<circle cx="72" cy="30" r="6" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--red-dim)" />
		</svg>,

		/* 1 — Magnifying glass over data (Cancer Detection) */
		<svg key="d1" className="card-diagram" width="82" height="62" viewBox="0 0 82 62" fill="none" aria-hidden="true">
			<circle cx="32" cy="26" r="20" stroke="var(--ink-dark)" strokeWidth="2" />
			<line x1="47" y1="43" x2="72" y2="58" stroke="var(--ink-dark)" strokeWidth="3.5" strokeLinecap="round" />
			<circle cx="24" cy="22" r="2.5" fill="var(--red-accent)" />
			<circle cx="34" cy="17" r="2.5" fill="var(--red-accent)" />
			<circle cx="40" cy="26" r="2.5" fill="var(--red-accent)" />
			<circle cx="29" cy="32" r="2.5" fill="var(--red-accent)" />
			<circle cx="38" cy="19" r="6" stroke="var(--red-ink)" strokeWidth="1.5" strokeDasharray="2,2" fill="none" />
			<circle cx="20" cy="14" r="5" fill="white" fillOpacity="0.25" />
		</svg>,

		/* 2 — Decision tree (Hotel Management) */
		<svg key="d2" className="card-diagram" width="82" height="62" viewBox="0 0 82 62" fill="none" aria-hidden="true">
			<rect x="33" y="2" width="16" height="10" rx="2" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<line x1="39" y1="12" x2="20" y2="26" stroke="var(--ink-dark)" strokeWidth="1.5" />
			<line x1="43" y1="12" x2="62" y2="26" stroke="var(--ink-dark)" strokeWidth="1.5" />
			<rect x="12" y="26" width="16" height="10" rx="2" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<rect x="54" y="26" width="16" height="10" rx="2" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<line x1="18" y1="36" x2="11" y2="50" stroke="var(--ink-dark)" strokeWidth="1.5" />
			<line x1="22" y1="36" x2="29" y2="50" stroke="var(--ink-dark)" strokeWidth="1.5" />
			<circle cx="11" cy="55" r="5" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<circle cx="29" cy="55" r="5" stroke="var(--red-ink)" strokeWidth="1.5" fill="var(--paper-white)" />
			<circle cx="62" cy="52" r="6" fill="var(--red-dim)" stroke="var(--red-ink)" strokeWidth="1.5" />
		</svg>,

		/* 3 — Hand gesture + arrow (Sign Language) */
		<svg key="d3" className="card-diagram" width="82" height="62" viewBox="0 0 82 62" fill="none" aria-hidden="true">
			<path
				d="M28 58 Q17 58 17 46 L17 22 Q17 16 23 16 L23 10 Q23 5 29 5 L29 16 L32 6 Q32 2 37 2 Q42 2 42 6 L42 16 L45 8 Q45 4 50 4 Q55 4 55 8 L55 26 Q61 26 61 32 L61 46 Q61 58 50 58 Z"
				stroke="var(--red-ink)"
				strokeWidth="1.5"
				fill="var(--paper-white)"
			/>
			<path
				d="M64 28 L76 28 M73 25 L76 28 L73 31"
				stroke="var(--red-accent)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>,

		/* 4 — Eye with detection box (Drowsiness) */
		<svg key="d4" className="card-diagram" width="82" height="62" viewBox="0 0 82 62" fill="none" aria-hidden="true">
			<path d="M6 31 Q41 5 76 31 Q41 57 6 31 Z" stroke="var(--ink-dark)" strokeWidth="1.5" fill="none" />
			<circle cx="41" cy="31" r="11" stroke="var(--red-ink)" strokeWidth="1.5" fill="none" />
			<circle cx="41" cy="31" r="5" fill="var(--red-dim)" stroke="var(--ink-dark)" strokeWidth="1.5" />
			<rect x="4" y="8" width="74" height="46" stroke="var(--red-accent)" strokeWidth="1" strokeDasharray="4,3" rx="2" fill="none" />
			<path d="M4 18 L4 8 L14 8"  stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M68 8 L78 8 L78 18" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4 44 L4 54 L14 54" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M68 54 L78 54 L78 44" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>,
	];

	return (
		<div className="aiml-lab-page">

			{/* ══ AMBIENT BACKGROUND LAYER ══ */}
			<div className="lab-bg-ambient" aria-hidden="true">

				{/* Coffee ring stain — bottom-left area */}
				<svg className="bg-coffee" width="144" height="144" viewBox="0 0 144 144">
					<circle cx="72" cy="72" r="64" stroke="#8B6914" strokeWidth="5" fill="none" />
					<circle cx="76" cy="76" r="50" stroke="#8B6914" strokeWidth="3" fill="none" />
					<circle cx="72" cy="72" r="63" fill="#C4A265" fillOpacity="0.04" />
				</svg>

				{/* Three scatter push-pins */}
				{[
					{ l: '31%', t: '16%', color: '#E74C3C' },
					{ l: '68%', t: '73%', color: '#E67E22' },
					{ l: '13%', t: '55%', color: '#E74C3C' },
				].map((pin, i) => (
					<svg
						key={`pin${i}`}
						className="bg-pin"
						style={{ left: pin.l, top: pin.t }}
						width="22"
						height="28"
						viewBox="0 0 22 28"
					>
						<circle cx="11" cy="9" r="8" fill={pin.color} stroke="rgba(0,0,0,0.22)" strokeWidth="1" />
						<circle cx="8" cy="6" r="3" fill="rgba(255,255,255,0.3)" />
						<line x1="11" y1="17" x2="11" y2="28" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
						<ellipse cx="13" cy="28" rx="3" ry="1" fill="rgba(0,0,0,0.1)" />
					</svg>
				))}

				{/* Sticky note peeking from behind content */}
				<div className="bg-sticky-note">
					<span>check these<br />results!!!</span>
				</div>

				{/* Handwritten margin annotations */}
				<p className="bg-margin-note note-1">needs more training data →</p>
				<p className="bg-margin-note note-2">!!! check loss curve</p>

				{/* Eraser smudge blob */}
				<div className="bg-eraser-smudge" />

				{/* Conspiracy-board connecting threads between cards */}
				<svg className="bg-strings" viewBox="0 0 1200 900" preserveAspectRatio="none" aria-hidden="true">
					<line x1="280" y1="240" x2="580" y2="400" stroke="var(--red-accent)" strokeWidth="1.2" strokeDasharray="7,5" opacity="0.28" />
					<line x1="580" y1="400" x2="900" y2="230" stroke="var(--red-accent)" strokeWidth="1.2" strokeDasharray="7,5" opacity="0.28" />
				</svg>
			</div>

			{/* ══ LAB NOTEBOOK HEADER ══ */}
			<header className="lab-header">

				{/* Sketched rectangle border — SVG with dasharray to look hand-drawn */}
				<svg className="header-sketch-border" viewBox="0 0 900 172" preserveAspectRatio="none" aria-hidden="true">
					<path d="M10 8 L892 6 L895 165 L7 167 L10 8"
						stroke="var(--ink-dark)" strokeWidth="2.5" fill="none"
						strokeDasharray="14,5,7,5" strokeLinecap="round" />
					<path d="M17 15 L885 13 L888 158 L14 160 L17 15"
						stroke="var(--ink-dark)" strokeWidth="1" fill="none"
						strokeDasharray="10,8,5,4" strokeLinecap="round" opacity="0.28" />
				</svg>

				{/* Rubber stamp */}
				<div className="header-stamp">IN PROGRESS</div>

				{/* Margin robot — drawn as if in the notebook margin */}
				<svg className="header-robot" width="74" height="90" viewBox="0 0 74 90" aria-hidden="true">
					<line x1="37" y1="7" x2="37" y2="-3" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="37" cy="-6" r="4" fill="var(--red-accent)" stroke="var(--ink-dark)" strokeWidth="1" />
					<rect x="12" y="7" width="50" height="36" rx="12" fill="var(--orange)" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="26" cy="25" r="7.5" fill="white" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="48" cy="25" r="7.5" fill="white" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="26" cy="25" r="3.5" fill="var(--ink-dark)" className="robot-eye" />
					<circle cx="48" cy="25" r="3.5" fill="var(--ink-dark)" className="robot-eye" />
					<path d="M24 35 Q37 41 50 35" stroke="var(--ink-dark)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
					<rect x="6" y="45" width="62" height="38" rx="8" fill="var(--orange)" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<rect x="20" y="55" width="34" height="18" rx="4" fill="none" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="29" cy="64" r="3.5" fill="var(--ink-dark)" fillOpacity="0.35" />
					<circle cx="37" cy="64" r="3.5" fill="var(--ink-dark)" fillOpacity="0.35" />
					<circle cx="45" cy="64" r="3.5" fill="var(--ink-dark)" fillOpacity="0.35" />
					<line x1="6" y1="51" x2="-5" y2="67" stroke="var(--ink-dark)" strokeWidth="2.5" strokeLinecap="round" />
					<line x1="68" y1="51" x2="79" y2="67" stroke="var(--ink-dark)" strokeWidth="2.5" strokeLinecap="round" />
					<line x1="24" y1="83" x2="24" y2="93" stroke="var(--ink-dark)" strokeWidth="3" strokeLinecap="round" />
					<line x1="50" y1="83" x2="50" y2="93" stroke="var(--ink-dark)" strokeWidth="3" strokeLinecap="round" />
				</svg>

				{/* Lightbulb doodle */}
				<svg className="header-lightbulb" width="60" height="80" viewBox="0 0 60 80" aria-hidden="true">
					<path d="M30 14 Q16 24 16 40 Q16 54 24 58 L24 66 L36 66 L36 58 Q44 54 44 40 Q44 24 30 14 Z"
						stroke="var(--red-ink)" strokeWidth="1.5" fill="#F9E4A0" fillOpacity="0.5" />
					<line x1="24" y1="66" x2="36" y2="66" stroke="var(--red-ink)" strokeWidth="1.5" strokeLinecap="round" />
					<line x1="26" y1="70" x2="34" y2="70" stroke="var(--red-ink)" strokeWidth="1.5" strokeLinecap="round" />
					<path d="M24 44 Q30 38 36 44" stroke="var(--red-ink)" strokeWidth="1" fill="none" strokeLinecap="round" />
					<line x1="30" y1="7" x2="30" y2="2"   stroke="#F9E4A0" strokeWidth="2.5" strokeLinecap="round" className="glow-line" />
					<line x1="14" y1="18" x2="10" y2="13"  stroke="#F9E4A0" strokeWidth="2"   strokeLinecap="round" className="glow-line" />
					<line x1="46" y1="18" x2="50" y2="13"  stroke="#F9E4A0" strokeWidth="2"   strokeLinecap="round" className="glow-line" />
					<line x1="8"  y1="40" x2="3"  y2="40"  stroke="#F9E4A0" strokeWidth="2"   strokeLinecap="round" className="glow-line" />
					<line x1="52" y1="40" x2="57" y2="40"  stroke="#F9E4A0" strokeWidth="2"   strokeLinecap="round" className="glow-line" />
				</svg>

				<div className="header-inner">
					<h1 className="lab-title">AI / ML Research</h1>
					<svg className="title-underlines" width="290" height="16" viewBox="0 0 290 16" aria-hidden="true">
						<path d="M2 5 Q72 2 145 6 Q218 10 288 5"  stroke="var(--red-accent)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
						<path d="M2 12 Q72 9 145 13 Q218 17 288 12" stroke="var(--red-ink)"   strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.55" />
					</svg>
					<p className="lab-subtitle">
						Researcher: <em>Megha</em>&nbsp;&nbsp;·&nbsp;&nbsp;
						Classification: <strong>ACTIVE</strong>&nbsp;&nbsp;·&nbsp;&nbsp;
						Entries: 5
					</p>
				</div>
			</header>

			{/* ══ CORKBOARD CARD GRID ══ */}
			<main className="lab-corkboard">
				{projects.map((project, i) => (
					<article
						key={i}
						className="lab-card"
						style={{
							'--i': i,
							'--r': rotations[i],
							marginTop: marginTops[i],
							zIndex: zIndexes[i],
						}}
					>
						{/* Red pushpin at top-center */}
						<svg className="card-pushpin" width="26" height="34" viewBox="0 0 26 34" aria-hidden="true">
							<circle cx="13" cy="11" r="10" fill="var(--red-accent)" stroke="var(--red-ink)" strokeWidth="1" />
							<circle cx="9.5" cy="7.5" r="3.5" fill="rgba(255,255,255,0.3)" />
							<line x1="13" y1="21" x2="13" y2="34" stroke="#aaa" strokeWidth="2" strokeLinecap="round" />
							<ellipse cx="15" cy="34" rx="3.5" ry="1.3" fill="rgba(0,0,0,0.12)" />
						</svg>

						{/* Tape / clip decoration — cycles through 3 variants */}
						{i % 3 === 0 && (
							<svg className="card-tape tape-pink" width="92" height="24" viewBox="0 0 92 24" aria-hidden="true">
								<rect x="0" y="4" width="92" height="16" fill="var(--tape-pink)" opacity="0.72" rx="1" />
								<line x1="0" y1="10" x2="92" y2="10" stroke="white" strokeWidth="0.7" opacity="0.35" />
								<line x1="0" y1="15" x2="92" y2="15" stroke="white" strokeWidth="0.7" opacity="0.35" />
							</svg>
						)}
						{i % 3 === 1 && (
							<svg className="card-binder-clip" width="40" height="60" viewBox="0 0 40 60" aria-hidden="true">
								<rect x="4" y="24" width="32" height="36" rx="3" fill="#b5b5b5" stroke="#888" strokeWidth="1.5" />
								<rect x="6" y="26" width="9" height="32" rx="2" fill="rgba(255,255,255,0.18)" />
								<path d="M8 24 Q-4 8 8 2 Q15 -2 15 14" stroke="#ccc" strokeWidth="3" fill="none" strokeLinecap="round" />
								<path d="M32 24 Q44 8 32 2 Q25 -2 25 14" stroke="#ccc" strokeWidth="3" fill="none" strokeLinecap="round" />
							</svg>
						)}
						{i % 3 === 2 && (
							<svg className="card-tape tape-mint" width="92" height="24" viewBox="0 0 92 24" aria-hidden="true">
								<rect x="0" y="4" width="92" height="16" fill="var(--tape-mint)" opacity="0.76" rx="1" />
								<line x1="0" y1="10" x2="92" y2="10" stroke="white" strokeWidth="0.7" opacity="0.35" />
								<line x1="0" y1="15" x2="92" y2="15" stroke="white" strokeWidth="0.7" opacity="0.35" />
							</svg>
						)}

						{/* ── Card body ── */}
						<div className="card-inner">
							<div className="card-header-section">
								<span className="card-entry-label">
									Lab Entry {project.entry} · {project.date}
								</span>
								<h2 className="card-title">{project.title}</h2>
								<svg className="card-title-underline" width="200" height="10" viewBox="0 0 200 10" aria-hidden="true">
									<path d="M2 6 Q50 3 100 7 Q150 11 198 6"
										stroke="var(--red-accent)" strokeWidth="2" fill="none" strokeLinecap="round" />
								</svg>
							</div>

							<p className="card-desc">{project.description}</p>

							{/* Unique hand-drawn diagram */}
							{diagrams[i]}

							{/* Tech stickers */}
							<div className="card-stickers">
								{project.technologies.map((tech, j) => (
									<span key={j} className="tech-sticker" style={{ '--j': j }}>
										{tech}
									</span>
								))}
							</div>

							{/* Card footer */}
							<footer className="card-footer">
								<div className="card-checkboxes">
									{checkLabels.map((label, j) => (
										<span key={j} className="checkbox-item">
											<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
												<rect x="1" y="1" width="12" height="12" rx="2"
													stroke="var(--ink-charcoal)" strokeWidth="1.5" fill="none" />
												{project.checks[j] && (
													<path d="M3 7 L6 10 L11 4"
														stroke="var(--red-ink)" strokeWidth="1.8" fill="none"
														strokeLinecap="round" strokeLinejoin="round" />
												)}
											</svg>
											<span>{label}</span>
										</span>
									))}
								</div>

								<div className="card-stars">{renderStars(project.stars)}</div>

								<a href={project.link} className="card-see-more" target="_blank" rel="noopener noreferrer">
									<svg width="26" height="12" viewBox="0 0 26 12" aria-hidden="true">
										<path d="M2 6 Q9 4 18 6 M18 6 L14 3 M18 6 L14 9"
											stroke="var(--red-accent)" strokeWidth="1.8" fill="none"
											strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<FiGithub size={13} />
									see more
								</a>
							</footer>
						</div>
					</article>
				))}
			</main>

			{/* ══ BACKGROUND DOODLE DECORATIONS ══ */}
			<div className="lab-doodles" aria-hidden="true">

				{/* Orange robot — top-right area */}
				<svg className="doodle-robot" width="96" height="116" viewBox="0 0 96 116">
					<line x1="48" y1="8" x2="48" y2="-2" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="48" cy="-5" r="4.5" fill="var(--red-accent)" stroke="var(--ink-dark)" strokeWidth="1" />
					<rect x="17" y="8" width="62" height="44" rx="13" fill="var(--orange)" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="32" cy="30" r="9.5" fill="white" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="64" cy="30" r="9.5" fill="white" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="32" cy="30" r="4.5" fill="var(--ink-dark)" className="robot-eye" />
					<circle cx="64" cy="30" r="4.5" fill="var(--ink-dark)" className="robot-eye" />
					<path d="M30 42 Q48 49 66 42" stroke="var(--ink-dark)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
					<rect x="8" y="54" width="80" height="48" rx="9" fill="var(--orange)" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<rect x="24" y="66" width="48" height="22" rx="5" fill="none" stroke="var(--ink-dark)" strokeWidth="1.5" />
					<circle cx="36" cy="77" r="4.5" fill="var(--ink-dark)" fillOpacity="0.32" />
					<circle cx="48" cy="77" r="4.5" fill="var(--ink-dark)" fillOpacity="0.32" />
					<circle cx="60" cy="77" r="4.5" fill="var(--ink-dark)" fillOpacity="0.32" />
					<line x1="8"  y1="60" x2="-4" y2="79" stroke="var(--ink-dark)" strokeWidth="3"   strokeLinecap="round" />
					<line x1="88" y1="60" x2="100" y2="79" stroke="var(--ink-dark)" strokeWidth="3"   strokeLinecap="round" />
					<line x1="30" y1="102" x2="30" y2="116" stroke="var(--ink-dark)" strokeWidth="3.5" strokeLinecap="round" />
					<line x1="66" y1="102" x2="66" y2="116" stroke="var(--ink-dark)" strokeWidth="3.5" strokeLinecap="round" />
				</svg>

				{/* Test tube rack — bottom-left */}
				<svg className="doodle-test-tubes" width="108" height="96" viewBox="0 0 108 96">
					<rect x="2" y="84" width="104" height="10" rx="3"
						fill="var(--ink-dark)" fillOpacity="0.13" stroke="var(--ink-dark)" strokeWidth="1.5" />
					{/* tube 1 — red */}
					<path d="M17 10 L17 76 Q17 83 23 83 Q29 83 29 76 L29 10 Z" stroke="var(--ink-dark)" strokeWidth="1.5" fill="none" />
					<rect x="17" y="10" width="12" height="5" rx="1" fill="var(--ink-dark)" fillOpacity="0.08" stroke="var(--ink-dark)" strokeWidth="1" />
					<path d="M17 48 L29 48 L29 76 Q29 83 23 83 Q17 83 17 76 Z" fill="var(--red-accent)" fillOpacity="0.36" />
					{/* tube 2 — teal */}
					<path d="M48 4 L48 76 Q48 83 54 83 Q60 83 60 76 L60 4 Z" stroke="var(--ink-dark)" strokeWidth="1.5" fill="none" />
					<rect x="48" y="4" width="12" height="5" rx="1" fill="var(--ink-dark)" fillOpacity="0.08" stroke="var(--ink-dark)" strokeWidth="1" />
					<path d="M48 62 L60 62 L60 76 Q60 83 54 83 Q48 83 48 76 Z" fill="#2ECC71" fillOpacity="0.4" />
					{/* tube 3 — yellow */}
					<path d="M79 2 L79 76 Q79 83 85 83 Q91 83 91 76 L91 2 Z" stroke="var(--ink-dark)" strokeWidth="1.5" fill="none" />
					<rect x="79" y="2" width="12" height="5" rx="1" fill="var(--ink-dark)" fillOpacity="0.08" stroke="var(--ink-dark)" strokeWidth="1" />
					<path d="M79 34 L91 34 L91 76 Q91 83 85 83 Q79 83 79 76 Z" fill="var(--tape-yellow)" fillOpacity="0.72" />
					<circle cx="54" cy="66" r="2.2" fill="#2ECC71" fillOpacity="0.55" />
					<circle cx="85" cy="38" r="2"   fill="var(--tape-yellow)" fillOpacity="0.9" />
				</svg>

				{/* Magnifying glass — mid-right, neural network inside lens */}
				<svg className="doodle-magnifier" width="108" height="108" viewBox="0 0 108 108">
					<circle cx="44" cy="44" r="36" stroke="var(--ink-dark)" strokeWidth="2.5" fill="white" fillOpacity="0.2" />
					<line x1="71" y1="71" x2="100" y2="100" stroke="var(--ink-dark)" strokeWidth="6" strokeLinecap="round" />
					<circle cx="33" cy="40" r="3.5" fill="var(--red-accent)" fillOpacity="0.68" />
					<circle cx="46" cy="28" r="3.5" fill="var(--red-accent)" fillOpacity="0.68" />
					<circle cx="57" cy="42" r="3.5" fill="var(--red-accent)" fillOpacity="0.68" />
					<circle cx="44" cy="56" r="3.5" fill="var(--red-accent)" fillOpacity="0.68" />
					<line x1="33" y1="40" x2="46" y2="28" stroke="var(--red-ink)" strokeWidth="1" opacity="0.5" />
					<line x1="46" y1="28" x2="57" y2="42" stroke="var(--red-ink)" strokeWidth="1" opacity="0.5" />
					<line x1="57" y1="42" x2="44" y2="56" stroke="var(--red-ink)" strokeWidth="1" opacity="0.5" />
					<line x1="44" y1="56" x2="33" y2="40" stroke="var(--red-ink)" strokeWidth="1" opacity="0.5" />
					<line x1="33" y1="40" x2="57" y2="42" stroke="var(--red-ink)" strokeWidth="1" opacity="0.5" />
					<circle cx="28" cy="28" r="9" fill="white" fillOpacity="0.24" />
				</svg>

			</div>
		</div>
	);
};

export default AIMLDevPage;
