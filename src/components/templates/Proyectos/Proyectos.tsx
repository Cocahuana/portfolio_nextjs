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
			<Grid className='gap-6 max-w-[400px]'>
				<Flex className='justify-center items-center gap-2'>
					<SquareBlock />
					<h3>Proyectos</h3>
				</Flex>
				<Flex>
					<p className='text-base text-center'>
						Párrafo. Haz clic aquí para agregar tu propio texto y
						editarlo. Es fácil. Haz clic en Editar texto o doble
						clic aquí para agregar tu contenido y cambiar la fuente.
						En este espacio puedes contar tu historia y permitir que
						los usuarios sepan más sobre ti.
					</p>
				</Flex>
				{projects.map((project, key) => (
					<Card
						className='bg-white min-h-[30vh] max-h-[60vh] overflow-hidden'
						key={key}
					>
						<Flex className='h-full flex-col items-center justify-between'>
							<Flex className='flex-col gap-4 min-h-[250px] max-h-[252px] py-4 '>
								<Flex>
									<div className='h-full w-2 bg-[color:var(--primary-bg)]' />
									<Flex className='flex-col gap-1 px-4'>
										<BlueTitle titleText={project.title} />
										<p className='font-bold font-["DIN-Heavy"]'>
											{project.role}
										</p>
									</Flex>
								</Flex>
								<p className='px-4'>{project.description}</p>
							</Flex>
							<Image
								className='w-full max-h-[252px] object-cover'
								src={project.photo}
								alt={project.title}
							/>
						</Flex>
					</Card>
				))}
			</Grid>
		</BoxSkin>
	);
}

export default Proyectos;
