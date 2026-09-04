import { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './app.scss';

import BootScreen from './boot/BootScreen';
import Home from './Home';
import AIMLDevPage from './projects/pages/AiMlPage';
import AppDevPage from './projects/pages/AppDevPage';
// import DesignDevPage from './projects/pages/DesignDevPage';
import WebDevPage from './projects/pages/WebDevPage';
import RecentProjects from './recent-projects/RecentProjects';
// import Projects from "./projects/Projects";

const App = () => {
	// Boot overlay gates the site on first paint; it buys time while the
	// hero images and .riv files warm up, then lifts.
	const [booted, setBooted] = useState(false);

	// const cursorRef = useRef(null);
	const dotsRef = useRef([]);
	const requestRef = useRef();

	useEffect(() => {
		// Create cursor stylesheet
		const styleElement = document.createElement('style');
		styleElement.textContent = `
      body {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><g transform='rotate(-220, 20, 20)'><path d='M10,5 Q11.5,5 13,5 Q14,15 15,25 Q11.5,25 8,25 Q9,15 10,5 Z' fill='%23EBB746' stroke='%23591D56' stroke-width='1'/><path d='M8,25 L15,25 L15,28 L8,28 Z' fill='white' stroke='%23591D56' stroke-width='1'/><path d='M8,28 C7,30 5,32 8,35 C11,37 15,35 18,33 C20,32 17,28 15,28 Z' fill='%236D3448' stroke='%23591D56' stroke-width='1'/></g></svg>") 10 10, auto;
      }
      
      a, button, input, textarea, select, .link {
        cursor: pointer !important;
      }
      
      .cursor-dot {
        position: fixed;
        pointer-events: none;
        border-radius: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        z-index: 9998;
        animation: fadeOut 1s forwards;
      }
      
      @keyframes fadeOut {
        0% {
          opacity: 0.8;
          width: 4px;
          height: 4px;
        }
        100% {
          opacity: 0;
          width: 12px;
          height: 12px;
        }
      }
    `;
		document.head.appendChild(styleElement);

		// Function for creating color dots
		const createDot = (x, y) => {
			const colors = [
				'#FF5252', // Red
				'#FF9800', // Orange
				'#FFEB3B', // Yellow
				'#66BB6A', // Green
				'#42A5F5', // Blue
				'#7E57C2', // Purple
				'#EC407A', // Pink
				'#AB47BC', // Deep Purple
				'#26C6DA', // Cyan
				'#FF7043', // Deep Orange
				'#8D6E63', // Brown
				'#78909C', // Blue Grey
			];

			const dot = document.createElement('div');
			dot.className = 'cursor-dot';
			dot.style.left = `${x}px`;
			dot.style.top = `${y}px`;
			dot.style.backgroundColor =
				colors[Math.floor(Math.random() * colors.length)];
			document.body.appendChild(dot);

			// Store reference to remove later
			dotsRef.current.push({
				element: dot,
				timeCreated: Date.now(),
			});
		};

		// Track mouse movement to create trail
		const onMouseMove = (e) => {
			// Create paint dots while moving
			if (Math.random() > 0.8) {
				// Create dots occasionally, not on every move
				createDot(e.clientX, e.clientY);
			}
		};

		// Add click effect
		const onMouseDown = (e) => {
			// Create a burst of dots on click
			for (let i = 0; i < 6; i++) {
				setTimeout(() => {
					createDot(
						e.clientX + (Math.random() * 20 - 10),
						e.clientY + (Math.random() * 20 - 10)
					);
				}, i * 30);
			}
		};

		// Clean up dots after they animate
		const cleanUpDots = () => {
			const now = Date.now();
			dotsRef.current = dotsRef.current.filter((dot) => {
				if (now - dot.timeCreated > 1000) {
					// 1 second lifetime
					if (document.body.contains(dot.element)) {
						document.body.removeChild(dot.element);
					}
					return false;
				}
				return true;
			});

			requestRef.current = requestAnimationFrame(cleanUpDots);
		};

		requestRef.current = requestAnimationFrame(cleanUpDots);

		// Add event listeners
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mousedown', onMouseDown);

		// Clean up function
		return () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mousedown', onMouseDown);

			// Remove all dots
			dotsRef.current.forEach((dot) => {
				if (document.body.contains(dot.element)) {
					document.body.removeChild(dot.element);
				}
			});

			// Cancel animation frame
			cancelAnimationFrame(requestRef.current);

			// Remove style
			document.head.removeChild(styleElement);
		};
	}, []);

	return (
		<>
			{!booted && <BootScreen onFinish={() => setBooted(true)} />}

			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/app" element={<AppDevPage />} />
					<Route path="/web" element={<WebDevPage />} />
					<Route path="/ai" element={<AIMLDevPage />} />
					{/* <Route path="/design" element={<DesignDevPage />} /> */}
					<Route path="/recent" element={<RecentProjects />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Router>

			{booted && <PopupNotification />}
		</>
	);
};

export default App;

const PopupNotification = () => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		// Reset visibility on reload
		setVisible(true);

		// Optional: Hide after a few seconds
		const timer = setTimeout(() => {
			setVisible(false);
		}, 3000); // Hide after 3 seconds

		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => {
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div
			style={{
				position: 'fixed',
				top: '20px',
				left: '50%',
				transform: 'translateX(-50%)',
				backgroundColor: 'rgba(0, 0, 0, 0.8)',
				color: 'white',
				padding: '10px 20px',
				borderRadius: '6px',
				boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
				zIndex: 1000,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				maxWidth: '90%',
				width: 'auto',
			}}
		>
			<span style={{ fontWeight: 'medium', fontFamily: 'sans-serif' }}>
				Animations await your touch and hover
			</span>
			<button
				onClick={handleClose}
				style={{
					background: 'transparent',
					border: 'none',
					color: 'white',
					fontSize: '16px',
					marginLeft: '16px',
					cursor: 'pointer',
					opacity: '0.7',
				}}
			>
				×
			</button>
		</div>
	);
};
