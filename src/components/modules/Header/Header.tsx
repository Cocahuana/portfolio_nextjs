import NavLink from "@/components/elements/NavLink/NavLink";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import Hamburger from "@/components/elements/Hamburger/Hamburger";
import { useState, useEffect } from "react";
import Flex from "@/components/elements/Flex/Flex";
function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const handleMenu = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsOpen(!isOpen);
	};
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
		<>
			{isOpen === true ? (
				<div className='z-50 w-full h-full fixed bg-[color:var(--skin-bg)]'>
					<Flex className=' w-full h-full flex-col'>
						<Flex
							className='w-full h-[10vh] items-center justify-end px-6'
							onClick={handleMenu}
						>
							<Hamburger />
						</Flex>
						<Flex className='w-full h-full items-center'>
							<Flex className='flex-col w-full h-1/3 items-center justify-around'>
								{navLinks.map((navLink) => (
									<NavLink
										className='text-xl font-bold'
										key={navLink.label}
										href={navLink.href}
										label={navLink.label}
									/>
								))}
							</Flex>
						</Flex>
					</Flex>
				</div>
			) : (
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
						<div className='z-50' onClick={handleMenu}>
							<Hamburger />
						</div>
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
			)}
		</>
	);
}

export default Header;
