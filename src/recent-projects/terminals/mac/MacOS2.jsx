import Draggable from 'react-draggable';
import './macos.scss';

const MacOS2 = () => {
	return (
		<div className="full-mac">
			<Draggable defaultPosition={{ x: 240, y: -300 }}>
				<div className="project-n-mac">
					<div className="headings-mac">
						<div className="dots-mac">
							<div className="mac-dot red-mac"></div>
							<div className="mac-dot yellow-mac"></div>
							<div className="mac-dot green-mac"></div>
						</div>
						<div className="title-container-mac">
							<img
								src="assets/svg/mac-file.svg"
								alt="Logo"
								className="mac-icon"
							/>
							<p className="title-mac">TimeSling — -zsh — 150×20</p>
						</div>
						<div className="icons-mac">
							<img
								src="assets/svg/mac-link.svg"
								alt="GitHub Link"
								className="github-icon"
								onClick={() =>
									window.open('https://github.com/Meghan31/TimeSling')
								}
							/>
						</div>
					</div>
					<p className="last-login">
						Last login:{' '}
						{(() => {
							const now = new Date();
							const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
							const months = [
								'Jan',
								'Feb',
								'Mar',
								'Apr',
								'May',
								'Jun',
								'Jul',
								'Aug',
								'Sep',
								'Oct',
								'Nov',
								'Dec',
							];

							const day = days[now.getDay()];
							const month = months[now.getMonth()];
							const date = now.getDate();
							const hours = String(now.getHours()).padStart(2, '0');
							const minutes = String(now.getMinutes()).padStart(2, '0');
							const seconds = String(now.getSeconds()).padStart(2, '0');

							return `${day} ${month} ${date} ${hours}:${minutes}:${seconds}`;
						})()}{' '}
						on ttys004
					</p>

					<div className="terminal-content">
						{/* DESCRIPTION */}
						<div className="terminal-command">
							<div className="description-mac">
								<p className="user-mac" style={{ fontFamily: 'monospace' }}>
									meghan31@MacBook-Pro
								</p>
								<p className="symbol-mac">:</p>
								<p className="path-mac" style={{ fontFamily: 'monospace' }}>
									~/projects/TimeSling
								</p>
								<p className="symbol-mac">$</p>
							</div>
							<div className="command-mac">
								<p className="command-text" style={{ fontFamily: 'monospace' }}>
									cat README.md
								</p>
							</div>
						</div>

						<div className="points-mac">
							<p>
								• TimeSling is a simple macOS menu bar timer app — easily
								schedule time far into the future with a click, stack unlimited
								timers, and receive notifications that work even in fullscreen.
							</p>
							<br />
							<p>
								• Includes quick presets, custom drag-to-set functionalities,
								timer naming, and a sleek user interface focused on minimal
								friction.
							</p>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
};

export default MacOS2;
