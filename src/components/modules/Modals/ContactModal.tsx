import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import Flex from "@/components/elements/Flex/Flex";
import { AiOutlineCloseCircle } from "react-icons/ai";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

function ContactModal({ handleClose, text }: any) {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className=' w-[90%] md:w-[700px] lg:w-1/2 min-h-[50%] md:min-h-[300px]'
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<Flex className='flex-col relative min-h-[400px] flex-1 '>
					<Flex className='bg-transparent justify-end items-center'>
						<Flex className=' w-8 h-8 items-center justify-center'>
							<AiOutlineCloseCircle
								className='w-10 h-10 fill-white'
								onClick={handleClose}
							/>
						</Flex>
					</Flex>
					<Flex className='bg-green-400 rounded-t-md relative flex-1'>
						NICE Icon
					</Flex>
					<Flex className='bg-white rounded-b-md items-stretch flex-col relative flex-1'>
						<h3>Todo Joya!</h3>
						<p>{text}</p>
						<button onClick={handleClose}>Close</button>
					</Flex>
				</Flex>
			</motion.div>
		</Backdrop>
	);
}

export default ContactModal;
