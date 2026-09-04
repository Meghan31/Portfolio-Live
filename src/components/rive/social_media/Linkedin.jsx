import { useRive } from '@rive-app/react-canvas';
import '../rive-details.scss';

export default function Linkedin() {
	const { RiveComponent } = useRive(
		{
			src: '/assets/rive/socials/linkedin.riv',
			stateMachines: 'linked_ani',

			autoplay: true,
		},

		{
			shouldResizeCanvasToContainer: true,
		},
	);

	return (
		<div
			className="rive-linkedin"
			// onClick={() =>
			// 	window.open('https://www.linkedin.com/in/meghan31/', '_blank')
			// }
		>
			<RiveComponent />
		</div>
	);
}
