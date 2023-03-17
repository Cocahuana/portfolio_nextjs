import BoxSkin from "@/components/elements/BoxSkin/BoxSkin";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import Flex from "@/components/elements/Flex/Flex";
import Grid from "@/components/elements/Grid/Grid";
import Card from "@/components/elements/Card/Card";
import Image from "next/image";
import BlueTitle from "@/components/elements/BlueTitle/BlueTitle";
import IMG_beginVegan from "@/assets/images/IMG_beginVegan.jpg";
import IMG_ecoHotel from "@/assets/images/IMG_ecoHotel.jpg";
import IMG_ecommerce from "@/assets/images/IMG_ecommerce.png";
import IMG_finesite from "@/assets/images/IMG_finesite.png";
import Button from "@/components/elements/Button/Button";
function Proyectos() {
	const projects = [
		{
			title: "Finesite Landing Page",
			role: "Full Stack Developer",
			description:
				"La idea de Finesite comenzó en julio de 2022 con el objetivo de crear una empresa que brinde a las empresas servicios web inteligentes y eficientes que les simplifiquen la tarea, ayudándolos a alcanzar los objetivos deseados en ventas, conversiones y clientes potenciales.",
			photo: IMG_finesite,
			link: "https://finesiteweb.com/",
		},
		{
			title: "Bookovich books Ecommerce",
			role: "Full Stack Developer",
			description:
				"Trabajé junto con un equipo de ocho personas para diseñar y desarrollar una aplicación web de comercio electrónico que tenía como objetivo principal vender libros electrónicos en línea. Mi función principal incluye implementar el proyecto y mantenerlo funcionando las 24 horas del día, los 7 días de la semana, asignar tickets/funciones a mis compañeros de equipo, revisión de código, depuración, programación en pares, código de refactorización, creación de nuevas funciones.",
			photo: IMG_ecommerce,
			link: "https://e-commerce-book-store.vercel.app/",
		},
		{
			title: "Eco Hotel Landing Page",
			role: "Full Stack Developer",
			description:
				"PRAGMA HOTEL es pionero en la región. Nuestra experiencia y reputación nos convirtieron en el hotel con mayor crecimiento en la zona. El proyecto de renovación de Pragma Hotel está a cargo de la arquitecta y diseñadora Claudia Faena, especialista en wellness y bienestar. Sus diseños tienen una impronta elegante y espectacular.",
			photo: IMG_ecoHotel,
			link: "https://eco-hotel.vercel.app/",
		},
		{
			title: "Begin Vegan Landing Page",
			role: "Full Stack Developer",
			description:
				"Begin Vegan fue la iniciativa a un projecto universitario en Mendoza, donde mediante un QR se podría acceder a esta Landing Page y ver los menues del restaurant quienes trabajan con comida vegana",
			photo: IMG_beginVegan,
			link: "https://begin-vegan.vercel.app/",
		},
	];

	return (
		<BoxSkin className='min-h-screen px-6'>
			<Flex className='justify-center'>
				<Grid className='gap-6 max-w-[400px] md:max-w-[724px] md:gap-20'>
					<Flex className='justify-center items-center gap-3'>
						<SquareBlock />
						<h3 className='md:text-3xl'>Proyectos</h3>
					</Flex>
					<Flex>
						<p className='text-base md:text-lg text-center'>
							Aquí podrás ver todos los proyectos en los que he
							estado trabajando y manteniendo.
						</p>
					</Flex>
					{projects.map((project, key) => (
						<Card
							className='bg-white min-h-[30vh] max-h-[60vh] md:min-h-[50vh] overflow-hidden'
							key={key}
						>
							<Flex className='h-full flex-col items-center justify-between md:flex-row'>
								<Flex className='flex-col gap-4 min-h-[250px] max-h-[252px]  py-4 md:py-0 md:h-full md:max-h-full md:justify-center md:w-3/5 items-center'>
									<Flex className='md:mb-6'>
										<div className='h-full w-2 bg-[color:var(--primary-bg)]' />
										<Flex className='flex-col gap-1 px-4 md:px-8'>
											<BlueTitle
												titleText={project.title}
											/>
											<p className='font-bold text-sm font-["DIN-Heavy"]'>
												{project.role}
											</p>
										</Flex>
									</Flex>
									<p className='px-4 md:px-10 text-base text-justify mb-6'>
										{project.description}
									</p>
									<Button
										text='Ver proyecto'
										active={true}
										href={project.link}
										target='__blank'
									/>
								</Flex>
								<Flex className='w-full max-h-[252px] md:h-full md:max-h-full md:w-2/5 '>
									<Image
										className='w-full h-full object-cover '
										src={project.photo}
										alt={project.title}
									/>
								</Flex>
							</Flex>
						</Card>
					))}
				</Grid>
			</Flex>
		</BoxSkin>
	);
}

export default Proyectos;
