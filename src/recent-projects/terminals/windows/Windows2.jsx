import Draggable from 'react-draggable';
import './windows.scss';

const Windows2 = () => {
	return (
		<div className="full-windows">
			<Draggable defaultPosition={{ x: 240, y: -300 }}>
				<div className="project-n-windows">
					<div className="headings-windows">
						<div className="title-container">
							<img
								src="assets/svg/windows-powershell.svg"
								alt="PowerShell Logo"
								className="powershell-icon"
							/>
							<p className="title-windows">
								Windows PowerShell - Smart API Rate Limiter with Adaptive
								Scaling
							</p>
						</div>
						<div className="window-controls">
							<div className="control-button minimize">
								<img
									src="assets/svg/-.svg"
									alt="Minimize"
									className="control-icon"
								/>
							</div>
							<div className="control-button maximize">
								<img
									src="assets/svg/box.svg"
									alt="Maximize"
									className="control-icon"
								/>
							</div>
							<div className="control-button close">
								<img
									src="assets/svg/x.svg"
									alt="Close"
									className="control-icon"
								/>
							</div>
						</div>
					</div>

					<div className="terminal-content">
						<div className="copyright-section">
							<p className="powershell-copyright">
								Windows PowerShell
								<br />
								Copyright (C) Microsoft Corporation. All rights reserved.
								<br />
								Install the latest PowerShell for new features and improvements!
								<br />
								https://aka.ms/PSWindows
							</p>
						</div>

						<div
							className="command-prompt"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<p className="ps-path">
								PS
								C:\Users\Meghan31\Desktop\Smart-API-Rate-Limiter-with-Adaptive-Scaling&gt;
							</p>
							<span>&nbsp;&nbsp;&nbsp; </span>
							<p className="ps-command" style={{ paddingBottom: '5px' }}>
								get-project -info
							</p>
						</div>

						<div className="output-section">
							<p className="project-point">
								• Built a high-performance, **distributed API rate limiting
								service** using Spring Boot and Redis to manage request quotas
								and prevent API abuse. :contentReference
								{/* [oaicite:1]{index=1} */}
							</p>
							<p className="project-point">
								• Implemented a **Token Bucket algorithm** with distributed
								state via Redis, configurable limits per user, atomic
								refill/consume, and resilient, production-ready handling of high
								throughput traffic. :contentReference
								{/* [oaicite:2]{index=2} */}
							</p>
						</div>

						<div
							className="command-prompt"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<p className="ps-path">
								PS
								C:\Users\Meghan31\Desktop\Smart-API-Rate-Limiter-with-Adaptive-Scaling&gt;
							</p>
							<span>&nbsp;&nbsp;&nbsp; </span>
							<p className="ps-command" style={{ paddingBottom: '5px' }}>
								get-tech -list
							</p>
						</div>

						<div className="tech-section">
							<p>
								<span
									className="ps-output-tag"
									style={{ fontFamily: 'Courier New' }}
								>
									[TECHNOLOGIES]
								</span>{' '}
								Java, Spring Boot, Redis, Docker, Maven, JUnit, Git/GitHub, REST
								APIs, YAML Configuration :contentReference
								{/* [oaicite:3]
								{(index = 3)} */}
							</p>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Windows2;
