import Draggable from 'react-draggable';
import './windows.scss';

const Windows = () => {
	return (
		<div className="full-windows">
			<Draggable defaultPosition={{ x: 150, y: 20 }}>
				<div className="project-n-windows">
					<div className="headings-windows">
						<div className="title-container">
							<img
								src="assets/svg/windows-powershell.svg"
								alt="PowerShell Logo"
								className="powershell-icon"
							/>
							<p className="title-windows">Windows PowerShell - CodeSketch</p>
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
								PS C:\Users\Meghan31\Desktop\CodeSketch&gt;
							</p>
							<span>&nbsp;&nbsp;&nbsp; </span>
							<p
								className="ps-command"
								style={{
									paddingBottom: '5px',
								}}
							>
								get-project -info
							</p>
						</div>

						<div className="output-section">
							<p className="project-point">
								• CodeSketch is a high-performance, real-time collaborative
								platform designed for seamless teamwork.
							</p>
							<p className="project-point">
								• It supports thousands of concurrent users in the same space,
								empowering them to interact and collaborate with exceptionally
								low delays.
							</p>
							<p className="project-point">
								• The system features a robust, secure infrastructure for
								reliable session management and highly consistent document
								storage, ensuring uninterrupted operation.
							</p>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default Windows;
