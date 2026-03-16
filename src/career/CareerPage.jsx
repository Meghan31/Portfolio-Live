import Career from '../components/rive/career/Career';
import './CareerPage.scss';

export const CareerPage = () => {
	return (
		<div className="career-landscape">
			{/* Sky Section */}
			<div className="sky-section"></div>
			<div className="career-content">
				<Career />
			</div>

			{/* Rolling Hills Horizon */}
			<div className="horizon-hills">
				<div className="hill hill-1"></div>
				<div className="hill hill-2"></div>
				<div className="hill hill-3"></div>
			</div>

			{/* Background Hills (Parallax) */}
			<div className="background-hills">
				<div className="bg-hill bg-hill-1"></div>
				<div className="bg-hill bg-hill-2"></div>
				<div className="bg-hill bg-hill-3"></div>
			</div>

			{/* Main Ground/Grass Field */}
			<div className="grass-field">
				{/* Atmospheric Glow */}
				<div className="sun-glow"></div>

				{/* Career Path */}
				<div className="career-path-trail">
					<svg
						className="path-svg"
						viewBox="0 0 100 2800"
						preserveAspectRatio="none"
					>
						<path
							d="M 50 0 Q 35 400 55 800 Q 70 1200 45 1600 Q 30 2000 50 2400 L 50 2800"
							fill="none"
							stroke="#C8A96E"
							strokeWidth="25"
							strokeLinecap="round"
						/>
					</svg>
				</div>

				{/* Rive Trees */}
				{/* <Tree1 className="rive-tree-pos rive-tree-pos-1" />
				<Tree1 className="rive-tree-pos rive-tree-pos-2" />
				<Tree1 className="rive-tree-pos rive-tree-pos-3" />
				<Tree1 className="rive-tree-pos rive-tree-pos-4" />
				<Tree1 className="rive-tree-pos rive-tree-pos-5" />
				<Tree1 className="rive-tree-pos rive-tree-pos-6" />
				<Tree1 className="rive-tree-pos rive-tree-pos-7" /> */}

				{/* Cartoon Mushrooms */}
				<div className="mushroom mushroom-1">
					<div className="stem"></div>
					<div className="cap">
						<div className="dot dot-1"></div>
						<div className="dot dot-2"></div>
						<div className="dot dot-3"></div>
					</div>
					<div className="shadow"></div>
				</div>
				<div className="mushroom mushroom-2">
					<div className="stem"></div>
					<div className="cap">
						<div className="dot dot-1"></div>
						<div className="dot dot-2"></div>
					</div>
					<div className="shadow"></div>
				</div>
				<div className="mushroom mushroom-3">
					<div className="stem"></div>
					<div className="cap">
						<div className="dot dot-1"></div>
						<div className="dot dot-2"></div>
						<div className="dot dot-3"></div>
					</div>
				</div>
				<div className="mushroom mushroom-4">
					<div className="stem"></div>
					<div className="cap">
						<div className="dot dot-1"></div>
						<div className="dot dot-2"></div>
					</div>
				</div>
				<div className="mushroom mushroom-5">
					<div className="stem"></div>
					<div className="cap">
						<div className="dot dot-1"></div>
						<div className="dot dot-2"></div>
						<div className="dot dot-3"></div>
					</div>
				</div>
				{/* Middle mushrooms */}
				<div className="mushroom mushroom-6">
					<div className="stem"></div>
					<div className="cap">
						<div className="dot dot-1"></div>
						<div className="dot dot-2"></div>
					</div>
					<div className="shadow"></div>
				</div>
				<div className="mushroom mushroom-7">
					<div className="stem"></div>
					<div className="cap">
						<div className="dot dot-1"></div>
						<div className="dot dot-2"></div>
						<div className="dot dot-3"></div>
					</div>
					<div className="shadow"></div>
				</div>

				{/* Small Grass Tufts */}
				{[
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
				].map((n) => (
					<div key={n} className={`grass-tuft gt-${n}`}>
						<div className="blade blade-l"></div>
						<div className="blade blade-c"></div>
						<div className="blade blade-r"></div>
					</div>
				))}

				{/* Cartoon Flowers */}
				<div className="flower flower-pink flower-1">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-lavender flower-2">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-yellow flower-3">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-pink flower-4">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-lavender flower-5">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-yellow flower-6">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-pink flower-7">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-lavender flower-8">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-yellow flower-9">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-pink flower-10">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-lavender flower-11">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>
				<div className="flower flower-yellow flower-12">
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="petal"></div>
					<div className="center"></div>
					<div className="stem"></div>
				</div>

				{/* Small Pebbles/Rocks */}
				<div className="pebble pebble-1"></div>
				<div className="pebble pebble-2"></div>
				<div className="pebble pebble-3"></div>
				<div className="pebble pebble-4"></div>
				<div className="pebble pebble-5"></div>
				<div className="pebble pebble-6"></div>

				{/* Career Component */}

				{/* Dark Ground Base Strip */}
				<div className="ground-base"></div>
			</div>
		</div>
	);
};
