import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import Flex from "@/components/elements/Flex/Flex";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import Button from "@/components/elements/Button/Button";
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
				<Flex className='flex-col relative min-h-[400px]  '>
					<Flex className='bg-transparent justify-end items-center p-2 px-6'>
						<Flex className=' w-6 h-6 items-center justify-end'>
							<AiOutlineCloseCircle
								className='w-10 h-10 fill-white'
								onClick={handleClose}
								cursor='pointer'
							/>
						</Flex>
					</Flex>
					<Flex className='bg-green-500 rounded-t-md flex-1 items-center justify-center'>
						<BsCheckCircle className='w-auto h-28 fill-white' />
					</Flex>
					<Flex className='bg-white rounded-b-md flex-col items-center flex-1 gap-3 p-6 max-h-[160px]'>
						<h3 className='text-2xl'>Todo Joya!</h3>
						<p className='text-base'>{text}</p>
						<Button
							text='Cerrar'
							active={true}
							onClick={handleClose}
						/>
					</Flex>
				</Flex>
			</motion.div>
		</Backdrop>
	);
}

export default ContactModal;
