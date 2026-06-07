import './appDevPage.scss';
import Sidebar from '../../components/sidebar/Sidebar';

/* ════════════════════════════════════════════════════════════════════
   APP DEVELOPMENT — "GAME BOY BEDROOM WORLD"
   Dusk has settled in a gamer's bedroom. Fairy lights hum over a
   parchment wall, a window glows sunset-orange, and the projects sit
   on the desk as Game Boy cartridges waiting to be played.

   • Every font is pulled from Google Fonts (@import in the .scss).
   • No emoji anywhere — each glyph is inline SVG or a pure-CSS shape.
   • No soft "AI" gradients — gradients are banded / textured / retro.
   ════════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────
   PIXEL GLYPHS  (hand-drawn on an 8x8 grid, 'X' = filled cell)
   ────────────────────────────────────────────────────────────── */

const ICONS = {
  chart: [
    '......XX', '......XX', '....XXXX', '....XXXX',
    '..XXXXXX', '..XXXXXX', 'XXXXXXXX', 'XXXXXXXX',
  ],
  robot: [
    '..X..X..', '.XXXXXX.', 'XXXXXXXX', 'X.XXXX.X',
    'XXXXXXXX', 'X.XXXX.X', '.XXXXXX.', '..X..X..',
  ],
  burger: [
    '........', '.XXXXXX.', 'XXXXXXXX', '.XXXXXX.',
    'XXXXXXXX', '.XXXXXX.', 'XXXXXXXX', '........',
  ],
  folder: [
    '........', 'XXX.....', 'XXXXXXX.', 'XXXXXXXX',
    'XXXXXXXX', 'XXXXXXXX', 'XXXXXXXX', '........',
  ],
  money: [
    '........', 'XXXXXXXX', 'X......X', 'X.XXXX.X',
    'X.XXXX.X', 'X......X', 'XXXXXXXX', '........',
  ],
  cart: [
    'X.......', 'XXXXXXX.', '.X...X..', '.X...X..',
    '.XXXXX..', '........', '.X...X..', '.X...X..',
  ],
  rocket: [
    '...XX...', '..XXXX..', '..XXXX..', '.XXXXXX.',
    '.XXXXXX.', 'XX.XX.XX', 'X......X', '........',
  ],
  car: [
    '........', '..XXXX..', '.XXXXXX.', 'XXXXXXXX',
    'XXXXXXXX', '.XX..XX.', '.XX..XX.', '........',
  ],
  send: [
    'X.......', 'XXX.....', 'XXXXX...', 'XXXXXXX.',
    'XXXXX...', 'XXX.....', 'X.......', '........',
  ],
  chip: [
    '.X.X.X.X', 'XXXXXXXX', 'X.XXXX.X', 'X.X..X.X',
    'X.X..X.X', 'X.XXXX.X', 'XXXXXXXX', '.X.X.X.X',
  ],
  video: [
    '........', 'XXXXX...', 'XXXXX.XX', 'XXXXXXXX',
    'XXXXX.XX', 'XXXXX...', '........', '........',
  ],
};

/* classic invader for the wall poster (11 x 8) */
const INVADER = [
  '..X.....X..',
  '...X...X...',
  '..XXXXXXX..',
  '.XX.XXX.XX.',
  'XXXXXXXXXXX',
  'X.XXXXXXX.X',
  'X.X.....X.X',
  '...XX.XX...',
];

/* generic pixel-grid → crisp SVG */
const Pixels = ({ grid, color, w, h, className }) => {
  const cells = [];
  grid.forEach((row, y) =>
    row.split('').forEach((c, x) => {
      if (c === 'X') cells.push({ x, y });
    })
  );
  const cols = grid[0].length;
  const rows = grid.length;
  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="1" height="1" fill={color} />
      ))}
    </svg>
  );
};

/* cartridge icon — white pixels with a soft dark shadow copy beneath */
const PixelIcon = ({ type }) => {
  const grid = ICONS[type] || ICONS.chart;
  const cells = [];
  grid.forEach((row, y) =>
    row.split('').forEach((c, x) => {
      if (c === 'X') cells.push({ x, y });
    })
  );
  return (
    <svg
      className="pixel-icon"
      width="30"
      height="30"
      viewBox="0 0 8 8"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g transform="translate(0.5,0.5)" opacity="0.35">
        {cells.map((c, i) => (
          <rect key={`s${i}`} x={c.x} y={c.y} width="1" height="1" fill="#000" />
        ))}
      </g>
      {cells.map((c, i) => (
        <rect key={`w${i}`} x={c.x} y={c.y} width="1" height="1" fill="#fff" />
      ))}
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────
   PROJECT DATA  (real Flutter builds)
   ────────────────────────────────────────────────────────────── */

const projects = [
  {
    title: 'Crypto App',
    description:
      'Track cryptocurrency prices and trends in real time with interactive charts and price alerts.',
    link: 'https://github.com/Meghan31/Crypto-App.git',
    technologies: ['Flutter', 'API', 'Realtime'],
    icon: 'chart',
    gradient: 'linear-gradient(135deg, #5BC8E8 0%, #2196f3 100%)',
  },
  {
    title: 'FlutterGPT',
    description:
      'An intelligent mobile assistant powered by conversational AI for quick answers and natural interactions.',
    link: 'https://github.com/Meghan31/FlutterGPT.git',
    technologies: ['Flutter', 'GPT API', 'NLP'],
    icon: 'robot',
    gradient: 'linear-gradient(135deg, #ff8c42 0%, #e64a19 100%)',
  },
  {
    title: 'Foodie App',
    description:
      'Discover and share recipes through an intuitive app with warm visuals and simple browsing.',
    link: 'https://github.com/Meghan31/Foodie_app.git',
    technologies: ['Flutter', 'Firebase', 'UI/UX'],
    icon: 'burger',
    gradient: 'linear-gradient(135deg, #66bb6a 0%, #2e7d32 100%)',
  },
  {
    title: 'Note Store',
    description:
      'Store notes and files securely while sharing them across devices with cloud storage workflows.',
    link: 'https://github.com/Meghan31/Note-Store-File-Share.git',
    technologies: ['Flutter', 'Cloud', 'Crypto'],
    icon: 'folder',
    gradient: 'linear-gradient(135deg, #ab47bc 0%, #6a1b9a 100%)',
  },
  {
    title: 'Personal Expenses',
    description:
      'Track expenses with charts, categories, and budget tools that make spending patterns easier to read.',
    link: 'https://github.com/Meghan31/personal-expenses-app',
    technologies: ['Flutter', 'SQLite', 'Charts'],
    icon: 'money',
    gradient: 'linear-gradient(135deg, #ef5350 0%, #b71c1c 100%)',
  },
  {
    title: 'Shoppers App',
    description:
      'A complete e-commerce flow with product browsing, cart management, and a payment-ready structure.',
    link: 'https://github.com/Meghan31/Shoppers.git',
    technologies: ['Flutter', 'Commerce', 'Payments'],
    icon: 'cart',
    gradient: 'linear-gradient(135deg, #ffd54f 0%, #f57f17 100%)',
  },
  {
    title: 'Space Attack',
    description:
      'A mobile arcade game with character movement, animations, and fast space-attack gameplay loops.',
    link: 'https://github.com/Meghan31/Superman-Space-Attack.git',
    technologies: ['Flutter', 'GameDev', 'Anim'],
    icon: 'rocket',
    gradient: 'linear-gradient(135deg, #5BC8E8 0%, #2196f3 100%)',
  },
  {
    title: 'Taxi Cab App',
    description:
      'Connect riders and drivers with GPS tracking, location matching, and real-time ride updates.',
    link: 'https://github.com/Meghan31/Cab-rider-app.git',
    technologies: ['Flutter', 'GPS', 'Realtime'],
    icon: 'car',
    gradient: 'linear-gradient(135deg, #ff8c42 0%, #e64a19 100%)',
  },
  {
    title: 'Bitcoin Bot',
    description:
      'A Telegram bot for Bitcoin trends, live pricing checks, and notification-style alerts.',
    link: 'https://github.com/Meghan31/Telegram_Bitcoin_Bot_flutter.git',
    technologies: ['Flutter', 'Telegram', 'Crypto'],
    icon: 'send',
    gradient: 'linear-gradient(135deg, #66bb6a 0%, #2e7d32 100%)',
  },
  {
    title: 'TensorFlow Lite',
    description:
      'Real-time image recognition on mobile using TensorFlow Lite and on-device ML classification.',
    link: 'https://github.com/Meghan31/TensorFlow-Lite-with-Flutter.git',
    technologies: ['Flutter', 'TFLite', 'ML'],
    icon: 'chip',
    gradient: 'linear-gradient(135deg, #ab47bc 0%, #6a1b9a 100%)',
  },
  {
    title: 'Vi-Me App',
    description:
      'A video meeting app concept with conferencing features, room setup, and modern call controls.',
    link: 'https://github.com/Meghan31/Video-Meet-App.git',
    technologies: ['Flutter', 'WebRTC', 'Agora'],
    icon: 'video',
    gradient: 'linear-gradient(135deg, #ef5350 0%, #b71c1c 100%)',
  },
];

/* ──────────────────────────────────────────────────────────────
   SCENE DATA
   ────────────────────────────────────────────────────────────── */

/* spinning pixel-star cluster in the upper-right (over the window sky) */
const STARS = [
  { size: 18, color: '#5BC8E8', dur: '8s', top: '7%', right: '15%' },
  { size: 12, color: '#ff8c42', dur: '12s', top: '11%', right: '11%' },
  { size: 22, color: '#ffd54f', dur: '6s', top: '5%', right: '19%' },
  { size: 10, color: '#5BC8E8', dur: '10s', top: '14%', right: '9%' },
  { size: 16, color: '#ffffff', dur: '9s', top: '9%', right: '22%' },
];

/* fairy-light string — one gentle sag across the top of the wall */
const FAIRY_COLORS = ['#5BC8E8', '#ffd54f', '#ff8c42', '#ff6b6b', '#66bb6a'];
const FAIRY = Array.from({ length: 15 }, (_, i) => {
  const t = i / 14;
  return {
    left: 3 + t * 94,
    top: 4 + Math.sin(t * Math.PI) * 34,
    color: FAIRY_COLORS[i % FAIRY_COLORS.length],
    delay: ((i % 5) * 0.34).toFixed(2),
  };
});

/* faux wood grain on the desk */
const DESK_GRAIN = [4, 10, 17, 24, 31, 38, 45, 52, 59, 66, 73, 80, 87, 94];
const DESK_ROT = [-0.8, 0.5, -0.4, 0.9, -0.6, 0.3, -1.0, 0.7, -0.5, 0.4, -0.9, 0.6, -0.3, 0.8];

const AppDevPage = () => {
  return (
    <div className="gb-page">
      {/* left sidebar pogo-stick mascot — kept exactly as-is */}
      <Sidebar />

      {/* ═══════════ DUSK BEDROOM — back wall scene (behind cards) ═══════════ */}
      <div className="room" aria-hidden="true">
        <div className="room-wall" />
        <div className="room-rail" />

        {/* window with a banded sunset, pixel sun, drifting clouds, skyline */}
        <div className="window">
          <div className="window-sky">
            <span className="sky-sun" />
            <span className="sky-cloud c1" />
            <span className="sky-cloud c2" />
            <span className="sky-bird b1" />
            <span className="sky-bird b2" />
            <Pixels
              className="sky-skyline"
              grid={[
                '..............................',
                '...........X..................',
                '....X......X.........X........',
                '....X..X...X....X....X....X...',
                'X...X..X.X.X.X..X.XX.X.X..X.XX',
                'XX.XX.XX.X.X.X.XX.XX.X.X.XX.XX',
                'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              ]}
              color="#3a2a52"
              w="100%"
              h="74"
            />
          </div>
          <span className="window-muntin-v" />
          <span className="window-muntin-h" />
          <span className="window-sill" />
        </div>

        {/* string of fairy lights draped across the top */}
        <div className="fairy">
          <svg className="fairy-wire" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,5 Q50,58 100,5" fill="none" stroke="#3d3324" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
          </svg>
          {FAIRY.map((b, i) => (
            <span
              key={i}
              className="bulb"
              style={{
                left: `${b.left}%`,
                top: `${b.top}px`,
                '--bulb': b.color,
                animationDelay: `${b.delay}s`,
              }}
            />
          ))}
        </div>

        {/* framed pixel-art poster, leaning slightly */}
        <div className="poster">
          <div className="poster-mat">
            <Pixels className="poster-art" grid={INVADER} color="#1f6f7a" w="86" h="62" />
            <span className="poster-cap">INSERT COIN</span>
          </div>
        </div>

        {/* wall shelf with little trinkets */}
        <div className="shelf">
          <span className="shelf-bracket b-left" />
          <span className="shelf-bracket b-right" />
          <div className="shelf-plank" />
          <div className="shelf-items">
            <span className="trinket trinket-console">
              <span className="tc-screen" />
              <span className="tc-pad" />
            </span>
            <span className="trinket trinket-trophy">
              <span className="tt-cup" />
              <span className="tt-stem" />
              <span className="tt-base" />
            </span>
            <span className="trinket trinket-plant">
              <span className="tp-leaf l1" />
              <span className="tp-leaf l2" />
              <span className="tp-leaf l3" />
              <span className="tp-pot" />
            </span>
          </div>
        </div>
      </div>

      {/* warm light pooling from the desk lamp — sells the dusk mood */}
      <div className="room-glow" aria-hidden="true" />

      {/* ═══════════ WOODEN DESK (fixed, foreground) ═══════════ */}
      <div className="desk-surface" aria-hidden="true">
        <div className="desk-edge" />
        {DESK_GRAIN.map((left, i) => (
          <div
            key={i}
            className="desk-grain"
            style={{ left: `${left}%`, transform: `rotate(${DESK_ROT[i]}deg)` }}
          />
        ))}

        {/* woven desk mat (the cozy rug of the desk) */}
        <div className="deskpad" />

        {/* clip-on desk lamp casting the warm glow */}
        <div className="desk-lamp">
          <span className="lamp-base" />
          <span className="lamp-arm a1" />
          <span className="lamp-arm a2" />
          <span className="lamp-head" />
          <span className="lamp-beam" />
        </div>

        {/* coffee mug, gently steaming */}
        <div className="desk-mug">
          <span className="mug-steam">
            <i />
            <i />
            <i />
          </span>
          <span className="mug-body" />
          <span className="mug-handle" />
        </div>

        {/* a cassette tape */}
        <div className="desk-cassette">
          <span className="cass-label" />
          <span className="cass-reel r-left" />
          <span className="cass-reel r-right" />
        </div>

        {/* a little stack of spare cartridges */}
        <div className="desk-stack">
          <span className="mini-cart m1" />
          <span className="mini-cart m2" />
          <span className="mini-cart m3" />
        </div>
      </div>

      {/* ═══════════ SCATTERED PIXEL DECOR (behind cards) ═══════════ */}
      <div className="deco-stars" aria-hidden="true">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="pixel-star"
            style={{
              width: s.size,
              height: s.size,
              background: s.color,
              animationDuration: s.dur,
              top: s.top,
              right: s.right,
            }}
          />
        ))}
      </div>

      <div className="deco-controller" aria-hidden="true">
        <div className="controller-body">
          <div className="dpad">
            <div className="dpad-h" />
            <div className="dpad-v" />
          </div>
          <div className="btn-red" />
          <div className="btn-blue" />
        </div>
      </div>

      <div className="deco-heart" aria-hidden="true">
        <svg width="34" height="34" viewBox="0 0 8 8" shapeRendering="crispEdges">
          <rect x="1" y="0" width="2" height="1" fill="#ff6b6b" />
          <rect x="5" y="0" width="2" height="1" fill="#ff6b6b" />
          <rect x="0" y="1" width="8" height="2" fill="#ff6b6b" />
          <rect x="1" y="3" width="6" height="1" fill="#ff6b6b" />
          <rect x="2" y="4" width="4" height="1" fill="#ff6b6b" />
          <rect x="3" y="5" width="2" height="1" fill="#ff6b6b" />
        </svg>
      </div>

      <div className="deco-sticker" aria-hidden="true">A++</div>

      <div className="deco-blocks" aria-hidden="true">
        <div className="pixel-block" style={{ background: '#5BC8E8' }} />
        <div className="pixel-block" style={{ background: '#ff8c42' }} />
        <div className="pixel-block" style={{ background: '#ffd54f' }} />
      </div>

      {/* back navigation */}
      <a href="/#projects" className="back-nav">
        <span className="back-arrow" aria-hidden="true">&larr;</span> Back to Projects
      </a>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <div className="page-content">
        <header className="page-header">
          <p className="page-eyebrow">PLAYER 1 &middot; PRESS START</p>
          <h1 className="page-title">App Development</h1>
          <p className="page-subtitle">// my mobile builds</p>
          <div className="pixel-divider" aria-hidden="true" />
        </header>

        <div className="card-grid">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cartridge-card"
              aria-label={`${project.title} — open project on GitHub`}
              style={{ animationDelay: `${(index + 1) * 0.09}s` }}
            >
              {/* cartridge label */}
              <div className="cartridge-label" style={{ background: project.gradient }}>
                <span className="label-dither" aria-hidden="true" />
                <span className="label-shine" aria-hidden="true" />
                <span className="label-publisher">MEGHAN31</span>
                <span className="label-icon">
                  <PixelIcon type={project.icon} />
                </span>
                <span className="label-title">{project.title}</span>
              </div>

              {/* Game Boy screen */}
              <div className="cartridge-screen">
                <span className="screen-glass" aria-hidden="true" />
                <span className="screen-scanlines" aria-hidden="true" />
                <span className="screen-status">
                  <span className="screen-led" /> READY
                </span>
                <p className="screen-text">{project.description}</p>
                <span className="screen-caret" aria-hidden="true">&#9608;</span>
              </div>

              {/* tech badges */}
              <div className="tech-badge-row">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* bottom grip / connector */}
              <div className="cartridge-ridge">
                <span className="ridge-label">&#9658; VIEW PROJECT</span>
                <div className="connector-pins">
                  <div className="pin" />
                  <div className="pin" />
                  <div className="pin" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <footer className="page-footer">
          <span className="footer-pixels" aria-hidden="true" />
          <p className="footer-text">THANKS FOR PLAYING &middot; INSERT COIN TO CONTINUE</p>
        </footer>
      </div>
    </div>
  );
};

export default AppDevPage;
