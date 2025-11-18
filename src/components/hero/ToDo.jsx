import { TypeAnimation } from 'react-type-animation';

const ToDo = () => {
	return (
		<TypeAnimation
			sequence={[
				"I'm a Software Engineer",
				2000,
				"Specializes in Backend",
				2000,
				"A Cloud Enthusiast",
				2000,
				"And a Full Stack Engineer",
				2000,
				"I develop Web and Mobile Apps",
				2000,
				"A Design Lover",
				2000,
				
				
			]}
			wrapper="span"
			speed={10}
			style={{
				fontSize: '2em',
				fontWeight: 'bold',
				fontFamily: 'Courier New',
				display: 'inline-block',
				color: 'Black',
			}}
			repeat={Infinity}
		/>
	);
};

export default ToDo;
