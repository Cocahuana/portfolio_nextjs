import { motion } from "framer-motion";

function Backdrop({ children, onClick }: any) {
	return (
		<motion.div
			onClick={onClick}
			className='absolute top-0 left-0 h-full w-full bg-[color:#00000061] flex items-center justify-center overflow-y-hidden'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
}

export default Backdrop;
