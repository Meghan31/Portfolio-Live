import './UbuntuMob.scss';

const UbuntuMob = () => {
	return (
		<div className="full-ubuntu-mob">
			<div className="project-n-ubuntu-mob">
				<div className="headings-ubuntu-mob">
					<div className="dots-ubuntu-mob">
						<div
							style={{
								background: '#373637',
								width: '25px',
								height: '25px',
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex',
								position: 'relative',
								borderTopLeftRadius: '10%',
								borderBottomLeftRadius: '10%',
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width={20}
								height={20}
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
						<div
							style={{
								background: '#373637',
								width: '25px',
								height: '25px',
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex',
								position: 'relative',
								borderTopRightRadius: '10%',
								borderBottomRightRadius: '10%',
							}}
						>
							<img
								src="assets/svg/v.svg"
								alt="Logo"
								style={{
									height: '15px',
									width: '18px',
									color: 'white',
								}}
							/>
						</div>
					</div>
					<div
						className="project-name-ubuntu-mob"
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<p className="title-ubuntu-mob">CreatorBoost: ~</p>
						<img
							src="assets/svg/mac-link.svg"
							alt="GitHub"
							style={{
								marginTop: '4px',
								height: '22px',
								width: '22px',
								color: 'whitesmoke',
							}}
						/>
					</div>
					<div
						className="dots-close-ubuntu-mob"
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<img
							src="assets/svg/_.svg"
							alt="Minimize"
							style={{
								height: '18px',
								width: '32px',
								color: 'white',
							}}
						/>
						<img
							src="assets/svg/white-box.svg"
							alt="Maximize"
							style={{
								height: '20px',
								width: '20px',
								marginRight: '4px',
							}}
						/>

						<div
							style={{
								position: 'relative',
								marginRight: '20px',
							}}
						>
							<img
								src="assets/svg/ubuntu-close.svg"
								alt="Close"
								style={{
									position: 'absolute',
									height: '20px',
									width: '20px',
									zIndex: 2,
								}}
							/>
							<div
								style={{
									position: 'absolute',
									width: '8px',
									height: '8px',
									borderRadius: '50%',
									backgroundColor: 'white',
									margin: '6px',
									zIndex: 1,
								}}
							></div>
						</div>
					</div>
				</div>

				<div className="description-ubuntu-mob">
					<p>meghan31@ubuntu</p>
					<p>:</p>
					<p>~/CreatorBoost</p>
					<p>$</p>
					<p
						style={{
							color: 'whitesmoke',
						}}
					>
						&nbsp;./show-project-info.sh
					</p>
				</div>
				<div className="points-ubuntu-mob">
					<p>
						• CreatorBoost is an advanced analytics platform that provides
						real-time dashboards and internal tooling for comprehensive workflow
						management.
					</p>

					<br />
					<p>
						• It effortlessly processes large volumes of information, delivering
						instant insights and robust tracking capabilities to end users.
					</p>
					<br />
					<p>
						• Built with high-performance event pipelines, the system ensures
						seamless, low-latency communication and deep observability, allowing
						rapid decision-making across the platform.
					</p>
				</div>
			</div>
		</div>
	);
};

export default UbuntuMob;
