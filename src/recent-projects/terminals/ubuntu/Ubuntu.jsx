import Draggable from 'react-draggable';
import './ubuntu.scss';

const Ubuntu = () => {
	return (
		<div className="full-ubuntu">
			<Draggable defaultPosition={{ x: 150, y: 20 }}>
				<div className="project-n-ubuntu">
					<div className="headings-ubuntu">
						<div className="tabs-ubuntu">
							<div className="tab-button-container">
								<div className="tab-button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width={22}
										height={22}
										fill="none"
										stroke="white"
										strokeWidth="1"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M6 8 L6 16 L4 16" />
										<path d="M18 8 L18 16 L20 16" />
										<path d="M6 8 C6 6, 8 4, 10 4 L14 4 C16 4, 18 6, 18 8" />
										<line x1="12" y1="8" x2="12" y2="14" />
										<line x1="9" y1="11" x2="15" y2="11" />
									</svg>
								</div>
								<div className="tab-button">
									<img src="assets/svg/v.svg" alt="Logo" className="tab-icon" />
								</div>
							</div>
						</div>
						<div className="title-container">
							<p
								className="title-ubuntu"
								style={{
									fontSize: '1.2rem',
								}}
							>
								CodeSketch: ~
							</p>
							<img
								src="assets/svg/mac-link.svg"
								alt="GitHub"
								className="github-icon"
								onClick={() =>
									window.open('https://github.com/Meghan31/Code-Sketch')
								}
							/>
						</div>
						<div className="window-controls">
							<div className="control-button minimize">
								<img
									src="assets/svg/_.svg"
									alt="Minimize"
									className="control-icon"
								/>
							</div>
							<div className="control-button maximize">
								<img
									src="assets/svg/white-box.svg"
									alt="Maximize"
									className="control-icon"
								/>
							</div>
							<div className="control-button close">
								<div className="close-circle"></div>
								<img
									src="assets/svg/ubuntu-close.svg"
									alt="Close"
									className="close-icon"
								/>
							</div>
						</div>
					</div>
					<div className="terminal-content">
						<div className="prompt-line">
							<p
								className="username"
								style={{
									fontFamily: 'monospace',
								}}
							>
								meghan31@ubuntu
							</p>
							<p
								className="separator"
								style={{
									fontFamily: 'monospace',
								}}
							>
								:
							</p>
							<p
								className="directory"
								style={{
									fontFamily: 'monospace',
								}}
							>
								~/CodeSketch
							</p>
							<p
								className="prompt"
								style={{
									fontFamily: 'monospace',
								}}
							>
								$
							</p>
							<p
								className="command"
								style={{
									fontFamily: 'monospace',
								}}
							>
								./show-project-info.sh
							</p>
						</div>
						<div className="output-section">
							<div className="project-description">
								{/* <div
									className="section-header"
									style={{
										fontFamily: 'monospace',
									}}
								>
									PROJECT
								</div>
								<p
									className="section-text"
									style={{
										fontFamily: 'monospace',
									}}
								>
									Built an innovative real-time, collaborative code editor and
									drawing board, enabling users to seamlessly collaborate on
									both code and visuals in a shared environment, improving
									workflow and creativity.
								</p> */}
								<p style={{
										fontFamily: 'monospace',
									}}>
						• Architected enterprise-grade real-time collaboration platform with
						Redis-backed distributed architecture and horizontal auto-scaling,
						supporting 1000+ concurrent WebSocket connections with &lt;100ms P99
						latency and 99%+ uptime in production
					</p>
							</div>
							<div
								className="project-description"
								style={{
									fontFamily: 'monospace',
								}}
							>
								{/* <div
									className="section-header"
									style={{
										fontFamily: 'monospace',
									}}
								>
									FEATURES
								</div>
								<p
									className="section-text"
									style={{
										fontFamily: 'monospace',
									}}
								>
									Leveraged WebSockets for efficient, instant updates between
									users, and implemented secure session management protocols to
									ensure data integrity and smooth, uninterrupted collaboration
									across various platforms.
								</p> */}
								<p style={{
										fontFamily: 'monospace',
									}}>
						• Established end-to-end DevOps excellence through containerized
						Docker deployments, automated CI/CD pipelines via GitHub Actions,
						comprehensive observability using Prometheus/Grafana, and 85% test
						coverage, enabling zero-downtime releases
					</p>
							</div>
						</div>
						<div className="prompt-line">
							<p
								className="username"
								style={{
									fontFamily: 'monospace',
								}}
							>
								meghan31@ubuntu
							</p>
							<p
								className="separator"
								style={{
									fontFamily: 'monospace',
								}}
							>
								:
							</p>
							<p
								className="directory"
								style={{
									fontFamily: 'monospace',
								}}
							>
								~/CodeSketch
							</p>
							<p
								className="prompt"
								style={{
									fontFamily: 'monospace',
								}}
							>
								$
							</p>
							<p
								className="command"
								style={{
									fontFamily: 'monospace',
								}}
							>
								cat tech-stack.txt
							</p>
						</div>
						<div className="tech-section">
							<p>
						Technologies Used: Node.js, Socket.IO, Redis, Docker, Cloud Infrastructure, AWS, Jest, CI/CD, React, Express, WebSockets, JavaScript, Collaborative Environment, Git/GitHub, Jest.
					</p>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Ubuntu;
