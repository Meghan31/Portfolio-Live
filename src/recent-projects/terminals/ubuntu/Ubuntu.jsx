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
								CreatorBoost: ~
							</p>
							<img
								src="assets/svg/mac-link.svg"
								alt="GitHub"
								className="github-icon"
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
								~/CreatorBoost
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
								<p
									style={{
										fontFamily: 'monospace',
									}}
								>
									• CreatorBoost is an advanced analytics platform that provides
									real-time dashboards and internal tooling for comprehensive
									workflow management.
								</p>
							</div>
							<div
								className="project-description"
								style={{
									fontFamily: 'monospace',
								}}
							>
								<p
									style={{
										fontFamily: 'monospace',
									}}
								>
									• It effortlessly processes large volumes of information,
									delivering instant insights and robust tracking capabilities
									to end users.
								</p>
								<p
									style={{
										fontFamily: 'monospace',
									}}
								>
									• Built with high-performance event pipelines, the system
									ensures seamless, low-latency communication and deep
									observability, allowing rapid decision-making across the
									platform.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Ubuntu;
