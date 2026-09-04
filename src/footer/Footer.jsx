import './footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-socials">
				<img
					src="/assets/svg/gh.svg"
					alt="Logo"
					className="footer-icon"
					onClick={() => window.open('https://github.com/Meghan31', '_blank')}
				/>
				{/* <img
					src="/assets/svg/linkedin.svg"
					alt="Logo"
					className="footer-icon"
					onClick={() =>
						window.open('https://www.linkedin.com/in/meghan31/', '_blank')
					}
				/> */}
				<img
					src="/assets/svg/Skills/leetcode.svg"
					alt="Logo"
					className="footer-icon"
					onClick={() =>
						window.open('https://leetcode.com/u/Meghan31/', '_blank')
					}
				/>
			</div>

			<div className="footer-bottom">
				<p>
					Copyright &copy; {new Date().getFullYear()} Meghasrivardhan
					Pulakhandam. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
