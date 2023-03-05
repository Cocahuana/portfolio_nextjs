import NavLink from "@/components/elements/NavLink/NavLink";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import Hamburger from "@/components/elements/Hamburger/Hamburger";
function Header() {
	const navLinks = [
		{
			href: "/",
			label: "SOBRE MÍ",
		},
		{
			href: "/curriculum",
			label: "CURRICULUM",
		},
		{
			href: "/Proyectos",
			label: "PROYECTOS",
		},
		{
			href: "/Contacto",
			label: "CONTACTO",
		},
	];
	const nameBlock = (
		<div className='flex w-auto justify-center items-center lg:gap-4'>
			<SquareBlock />
			<h3>Ezequiel Dominguez</h3>
			<p className='lg:text-lg text-[10px] ml-1 font-medium tracking-wider'>
				/ FULL STACK DEVELOPER
			</p>
		</div>
	);

	return (
		<div className='h-[10vh] flex w-full bg-white fixed top-0 overflow-hidden'>
			<div className='flex lg:hidden w-full justify-between px-6 items-center'>
				<div className='flex flex-col items-start'>
					<div className='flex justify-center items-center'>
						<SquareBlock />
						<h3 className='ml-4'>Ezequiel Dominguez</h3>
					</div>
					<p className='text-[14px] font-medium tracking-wider'>
						FULL STACK DEVELOPER
					</p>
				</div>
				<Hamburger />
			</div>
			<div className='hidden lg:flex w-full bg-white'>
				<div className='w-1/2 flex justify-start items-center p-12'>
					{nameBlock}
				</div>
				<div className='w-1/2 flex'>
					<div className='w-full flex items-center justify-end p-4'>
						<div className='flex w-1/2 items-center justify-between p-4'>
							{navLinks.map((navLink) => (
								<NavLink
									key={navLink.label}
									href={navLink.href}
									label={navLink.label}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
