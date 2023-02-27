import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import { motion } from "framer-motion";
type Props = {
	children: React.ReactNode;
};

const opacityVariant = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const animationTransition = { type: "spring", stiffness: 260, damping: 150 };

const Default = ({ children }: Props) => (
	<div>
		<Header />
		<motion.div
			initial='initial'
			animate='in'
			variants={opacityVariant}
			transition={animationTransition}
		>
			{children}
		</motion.div>
		<Footer />
	</div>
);

export default Default;
