// import {
// 	Alignment,
// 	Fit,
// 	Layout,
// 	useRive,
// 	useStateMachineInput,
// } from '@rive-app/react-canvas';
// import { useEffect, useRef, useState } from 'react';
// import './Tree.scss';

// const STATE_MACHINE = 'State Machine 1';
// const TREE_COUNT = 3;

// export default function Tree({ showControls = false }) {
// 	const [selectedTree, setSelectedTree] = useState(1);
// 	const clickCycleRef = useRef(0);

// 	// ── Rive instance ──────────────────────────────────────────────────────────
// 	const { rive, RiveComponent } = useRive({
// 		src: '/assets/rive/nature/tree.riv',
// 		stateMachines: STATE_MACHINE,
// 		autoplay: true,
// 		layout: new Layout({
// 			// fit: Fit.Contain,
// 			// alignment: Alignment.Center,
// 		}),
// 	});

// 	// ── State-machine inputs ───────────────────────────────────────────────────
// 	// Number input — selects which of the 6 trees is displayed
// 	const selectTreeInput = useStateMachineInput(
// 		rive,
// 		STATE_MACHINE,
// 		'Select Tree',
// 	);

// 	// Trigger inputs — drive animation states inside the state machine
// 	const triggerShake1 = useStateMachineInput(rive, STATE_MACHINE, 'Shake 1');
// 	const triggerShake2 = useStateMachineInput(rive, STATE_MACHINE, 'Shake 2');
// 	const triggerLaunchStorm = useStateMachineInput(
// 		rive,
// 		STATE_MACHINE,
// 		'Launch Storm',
// 	);
// 	const triggerReset = useStateMachineInput(rive, STATE_MACHINE, 'Reset');

// 	// ── Sync tree selection ────────────────────────────────────────────────────
// 	useEffect(() => {
// 		if (selectTreeInput) {
// 			selectTreeInput.value = selectedTree;
// 		}
// 	}, [selectTreeInput, selectedTree]);

// 	// ── Interaction handlers ───────────────────────────────────────────────────
// 	const handleMouseEnter = () => triggerShake1?.fire();

// 	const handleMouseLeave = () => triggerReset?.fire();

// 	// Clicks cycle: Shake 1 → Shake 2 → Launch Storm → repeat
// 	const handleClick = () => {
// 		const step = clickCycleRef.current % 3;
// 		clickCycleRef.current += 1;
// 		if (step === 0) triggerShake1?.fire();
// 		else if (step === 1) triggerShake2?.fire();
// 		else triggerLaunchStorm?.fire();
// 	};

// 	// ── Tree selector ──────────────────────────────────────────────────────────
// 	const handleSelectTree = (num) => {
// 		setSelectedTree(num);
// 		triggerReset?.fire();
// 	};

// 	// ── Render ─────────────────────────────────────────────────────────────────
// 	return (
// 		// <div className="tree-wrapper">
// 		<div
// 			className="tree-canvas"
// 			onMouseEnter={handleMouseEnter}
// 			onMouseLeave={handleMouseLeave}
// 			onClick={handleClick}
// 			role="img"
// 			aria-label="Animated tree"
// 		>
// 			<RiveComponent />
// 		</div>
// 		// </div>
// 	);
// }
