function Hamburger() {
	return (
		<div>
			<button className='relative group'>
				<div className='relative flex items-center justify-center w-[50px] h-[50px] transform transition-all bg-white  duration-200'>
					<div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center'>
						<HamburgerLines />
					</div>
				</div>
			</button>
		</div>
	);
}

const HamburgerLines = () => (
	<>
		<div className='bg-[color:var(--primary-bg)] h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]' />
		<div className='bg-[color:var(--primary-bg)] h-[1px] rounded' />
		<div className='bg-[color:var(--primary-bg)] h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]' />
	</>
);

export default Hamburger;
