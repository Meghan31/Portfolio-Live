import './MacMob.scss';

const MacMob = () => {
	return (
		<div className="full-mac-mob">
			<div className="project-n-mac-mob">
				<div className="headings-mac-mob">
					<div className="dots-mac-mob">
						<div
							className="mac-dot-mob red-mac-mob"
							onClick={() => console.log('Close clicked')}
						></div>
						<div
							className="mac-dot-mob yellow-mac-mob"
							onClick={() => console.log('Minimize clicked')}
						></div>
						<div
							className="mac-dot-mob green-mac-mob"
							onClick={() => console.log('Maximize clicked')}
						></div>
					</div>
					<div className="title-container-mac-mob">
						<img
							src="assets/svg/mac-file.svg"
							alt="Logo"
							style={{
								height: '16px',
								width: '16px',
								marginRight: '8px',
							}}
						/>
						<p className="title-mac-mob">MarketPulse — -zsh — 80×24</p>
					</div>
					<div className="icons-mac-mob">
						<img
							src="assets/svg/mac-link.svg"
							alt="GitHub Link"
							style={{
								height: '18px',
								width: '18px',
							}}
						/>
					</div>
				</div>
				<p className="last-login-mob">
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
				<div className="description-mac-mob">
					<p
						className="user-mac-mob"
						style={{
							fontFamily: 'monospace',
						}}
					>
						meghan31@MacBook-Pro
					</p>
					<p
						className="symbol-mac-mob"
						style={{
							fontFamily: 'monospace',
						}}
					>
						:
					</p>
					<p
						className="path-mac-mob"
						style={{
							fontFamily: 'monospace',
						}}
					>
						~/projects/marketpulse
					</p>
					<p
						className="symbol-mac-mob"
						style={{
							fontFamily: 'monospace',
						}}
					>
						$
					</p>
				</div>
				<div className="command-mac-mob">
					<p
						className="command-text-mob"
						style={{
							fontFamily: 'monospace',
							color: 'grey',
						}}
					>
						cat project-description.md
					</p>
				</div>
				<div className="points-mac-mob">
					<p>
						• MarketPulse is a comprehensive resale marketplace platform
						designed to effortlessly connect buyers and sellers with a robust
						and reliable system.
					</p>
					<br />
					<p>
						• The platform tracks every user action smoothly and highlights
						trending items in real-time, providing detailed insights into
						dynamic market movements.
					</p>
					<br />
					<p>
						• It includes highly responsive search functionality and is
						continuously monitored to guarantee uninterrupted service and rapid
						query resolution for all users.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MacMob;
