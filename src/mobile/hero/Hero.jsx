import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

const Hero = () => {
	const [hoverName, setHoverName] = useState(false);
	const [displayText, setDisplayText] = useState("Hi, I'm Meghan!");
	const fullName = 'Meghasrivardhan!!';
	const shortName = "Hi, I'm Meghan!";
	const animationRef = useRef(null);
	const charactersPool =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

	useEffect(() => {
		let frameCount = 0;
		let targetText = hoverName ? fullName : shortName;
		// let currentText = displayText;

		// Clean up any existing animation
		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current);
		}

		const animate = () => {
			// Calculate how many characters to unscramble based on frame count
			// Complete animation in ~15 frames
			const framesToComplete = 15;
			const charsToReveal = Math.ceil(
				(frameCount / framesToComplete) * targetText.length,
			);

			let newText = '';
			for (let i = 0; i < targetText.length; i++) {
				if (i < charsToReveal) {
					// Reveal the actual character from the target text
					newText += targetText[i];
				} else {
					// Use a random character from the pool
					newText +=
						charactersPool[Math.floor(Math.random() * charactersPool.length)];
				}
			}

			setDisplayText(newText);
			frameCount++;

			// Continue animation if not all characters are revealed
			if (frameCount <= framesToComplete) {
				animationRef.current = requestAnimationFrame(animate);
			}
		};

		// Start animation
		animationRef.current = requestAnimationFrame(animate);

		// Cleanup function
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [hoverName]);

	return (
		<section className="hero" id="hero">
			{/* <div className="profile-pic">
				<img src="https://via.placeholder.com/150" alt="Profile" /> 
			</div>
			*/}
			<div className="name-container">
				<h1
					className="scrambled-text"
					onMouseEnter={() => setHoverName(true)}
					onMouseLeave={() => setHoverName(false)}
				>
					{displayText}
				</h1>
			</div>
			<h2
				style={{
					fontFamily: "'Bytesized', monospace",
				}}
			>{`design ✺︎ tech ∿︎ build ◳︎`}</h2>
			<br />
			<h2
				style={{
					fontFamily: "'Tektur', sans-serif",
					fontWeight: 400,
					fontSize: '1rem',
				}}
			>{`CS Masters Student @ CU Boulder`}</h2>

			<div className="social-links">
				<img
					src="/assets/svg/dark-theme/linkedin-light.svg"
					alt="LinkedIn"
					width={'30px'}
					onClick={() =>
						window.open('https://www.linkedin.com/in/Meghan31/', '_blank')
					}
				/>
				<img
					src="/assets/svg/Skills/tools/github.svg"
					alt="GitHub"
					width={'30px'}
					onClick={() => window.open('https://github.com/Meghan31', '_blank')}
				/>
				<img
					src="/assets/svg/dark-theme/leetcode.svg"
					alt="LeetCode"
					width={'30px'}
					onClick={() =>
						window.open('https://leetcode.com/Meghan31/', '_blank')
					}
				/>
			</div>
			<div className="resume-download">
				<a
					href="/assets/Megha_SWE_Resume.pdf"
					download="Portfolio_Guy_Resume_Megha.pdf"
				>
					<button className="Mob-res">Download Resume</button>
				</a>
			</div>
		</section>
	);
};

export default Hero;
