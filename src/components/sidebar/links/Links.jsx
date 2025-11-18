import { motion } from 'framer-motion';
const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const Links = () => {
	const items = ['home', 'about', 'career', 'recents', 'contact'];
	const CapItems = ['Home', 'About', 'Career', 'Projects', 'Contact'];
	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.div className="links" variants={variants}>
			{items.map((item) => (
				<motion.a
					// href={`#${item}`}
					onClick={() => handleScroll(item)}
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					{CapItems[items.indexOf(item)]}
				</motion.a>
			))}
		</motion.div>
	);
};

export default Links;
