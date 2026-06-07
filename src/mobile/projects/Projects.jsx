import './Project.scss';
import MacMob from './terminals/MacMob';
import UbuntuMob from './terminals/UbuntuMob';
import WindowMob from './terminals/WindowMob';

const Projects = () => {
	return (
		<div>
			<UbuntuMob />
			<br />
			<WindowMob />
			<br />
			<MacMob />
		</div>
	);
};

export default Projects;
