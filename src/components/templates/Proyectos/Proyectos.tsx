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
function Proyectos() {
	const projects = [
		{
			title: "Nombre del proyecto 01",
			role: "Full Stack Developer",
			description:
				"Párrafo. Haz clic para agregar tu propio texto y editarlo. Es fácil. Haz clic en “Editar texto” o doble clic aquí para agregar tu propio contenido y cambiar la fuente. Puedes arrastrarlo y soltarlo en cualquier lugar de la página.",
			photo: IMG_finesite,
		},
		{
			title: "Nombre del proyecto 01",
			role: "Full Stack Developer",
			description:
				"Párrafo. Haz clic para agregar tu propio texto y editarlo. Es fácil. Haz clic en “Editar texto” o doble clic aquí para agregar tu propio contenido y cambiar la fuente. Puedes arrastrarlo y soltarlo en cualquier lugar de la página.",
			photo: IMG_ecommerce,
		},
		{
			title: "Nombre del proyecto 01",
			role: "Full Stack Developer",
			description:
				"Párrafo. Haz clic para agregar tu propio texto y editarlo. Es fácil. Haz clic en “Editar texto” o doble clic aquí para agregar tu propio contenido y cambiar la fuente. Puedes arrastrarlo y soltarlo en cualquier lugar de la página.",
			photo: IMG_ecoHotel,
		},
		{
			title: "Nombre del proyecto 01",
			role: "Full Stack Developer",
			description:
				"Párrafo. Haz clic para agregar tu propio texto y editarlo. Es fácil. Haz clic en “Editar texto” o doble clic aquí para agregar tu propio contenido y cambiar la fuente. Puedes arrastrarlo y soltarlo en cualquier lugar de la página.",
			photo: IMG_beginVegan,
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
							Párrafo. Haz clic aquí para agregar tu propio texto
							y editarlo. Es fácil. Haz clic en Editar texto o
							doble clic aquí para agregar tu contenido y cambiar
							la fuente. En este espacio puedes contar tu historia
							y permitir que los usuarios sepan más sobre ti.
						</p>
					</Flex>
					{projects.map((project, key) => (
						<Card
							className='bg-white min-h-[30vh] max-h-[60vh] md:min-h-[50vh] overflow-hidden'
							key={key}
						>
							<Flex className='h-full flex-col items-center justify-between md:flex-row'>
								<Flex className='flex-col gap-4 min-h-[250px] max-h-[252px]  py-4 md:py-0 md:h-full md:max-h-full md:justify-center md:w-3/5'>
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
									<p className='px-4 md:px-10 text-base text-justify'>
										{project.description}
									</p>
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
