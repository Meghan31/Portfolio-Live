import Name from '../rive/home/Name';
import GitHub from '../rive/social_media/GitHub';
import Linkedin from '../rive/social_media/Linkedin';
import Resume from '../rive/social_media/Resume';
import './details.scss';
import ToDo from './ToDo';

const Details = () => {
	return (
		<div className="right-section">
			{/* <p class="section-text-p1">Hello, I'm</p> */}
			<img src="assets/images/Whitehello.jpg" alt="Logo" className="hello-im" />
			<Name />
			{/* <p className="section-text-p2">
				I&apos;m a Developer / Designer / Student
			</p> */}
			<div>
				<ToDo />
			</div>
			{/* <SocialMedia />
      <GitHub />
      <Linkedin />
      <Resume /> */}
			<div className="buttons">
				<GitHub />
				<Linkedin />
				{/* <Resume /> */}
				{/* <div
					style={{
						height: '70px',
						width: '70px',
						marginTop: '30px',
					}}
				> */}
				<img
					src="/assets/svg/leetcode.svg"
					height={49}
					width={49}
					alt="Logo"
					className="footer-icon"
					onClick={() =>
						window.open('https://leetcode.com/u/Meghan31/', '_blank')
					}
				/>
				{/* </div> */}
			</div>
		</div>
	);
};

export default Details;
