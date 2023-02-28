import NavLink from "@/components/elements/NavLink/NavLink";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
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

	return (
		<div className='h-32 flex'>
			<div className='w-1/2 flex justify-start items-center p-12'>
				<div className='flex w-auto justify-center items-center gap-4'>
					<SquareBlock />
					<h3>Ezequiel Dominguez</h3>
					<p className='text-lg ml-1 font-medium tracking-wider'>
						/ FULL STACK DEVELOPER
					</p>
				</div>
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
	);
}

export default Header;
