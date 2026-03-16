// import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

// const STATE_MACHINE = 'State Machine 1';

// export default function Tree1({ className = 'rive-tree2' }) {
// 	const { rive, RiveComponent } = useRive({
// 		src: '/assets/rive/nature/tree2.riv',
// 		stateMachines: STATE_MACHINE,
// 		autoplay: true,
// 	});

// 	const triggerWind = useStateMachineInput(rive, STATE_MACHINE, 'trigger_wind');

// 	const handleMouseEnter = () => triggerWind?.fire();
// 	const handleMouseLeave = () => {};

// 	return (
// 		<div
// 			className={className}
// 			onMouseEnter={handleMouseEnter}
// 			onMouseLeave={handleMouseLeave}
// 		>
// 			<RiveComponent />
// 		</div>
// 	);
// }
