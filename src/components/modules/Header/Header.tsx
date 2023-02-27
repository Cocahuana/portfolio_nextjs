import NavLink from "@/components/elements/NavLink/NavLink";
function Header() {
	const navLinks = [
		{
			href: "/",
			label: "SOBRE MÍ",
		},
		{
			href: "/Curriculum",
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
			<div className='w-1/2 flex justify-start items-center p-4'>
				<div className='flex w-3/4 justify-between items-center'>
					<span>Cuadradito</span>
					<h2>Ezequiel Dominguez</h2>
					<h5>/ Full Stack Developer</h5>
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
