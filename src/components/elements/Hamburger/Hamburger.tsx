type Props = {
	children?: React.ReactNode;
	isClosed?: boolean;
};

export function Hamburger({ children, isClosed }: Props) {
	return (
		<div>
			<button className='relative'>
				<div
					className={`relative flex items-center justify-center w-[50px] h-[50px] transform transition-all duration-200`}
				>
					<div
						className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300  origin-center 
						${isClosed === true ? "-rotate-[45deg]" : "focus:-rotate-[45deg]"}`}
					>
						{isClosed === true ? children : <Lines />}
					</div>
				</div>
			</button>
		</div>
	);
}

const Lines = () => (
	<>
		<div className='bg-[color:var(--primary-bg)] h-[2px] w-1/2 rounded ' />
		<div className='bg-[color:var(--primary-bg)] h-[1px] rounded' />
		<div className='bg-[color:var(--primary-bg)] h-[2px] w-1/2 rounded self-end' />
	</>
);

export const HamburgerClosed = () => (
	<>
		<div
			className={`bg-[color:var(--primary-bg)] w-1/2 rounded transform transition-all duration-300 -rotate-90 h-[1px] origin-right delay-75 -translate-y-[1px]`}
		/>
		<div className='bg-[color:var(--primary-bg)] h-[1px] rounded' />
		<div className='bg-[color:var(--primary-bg)]  w-1/2 rounded self-end transform transition-all duration-300 -rotate-90 h-[1px] origin-left delay-75 translate-y-[1px]' />
	</>
);
