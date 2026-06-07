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
								• This powerful smart rate-limiting service actively protects
								systems by managing user traffic and preventing system overload
								or abuse.
							</p>
							<p className="project-point">
								• It intelligently monitors active connections, enforces
								customized limits for different users, and smoothly adapts to
								varying demand. Featuring a highly durable structural design,
								the service dependably handles massive surges in traffic while
								preserving fast, responsive service across the board.
							</p>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Windows2;
