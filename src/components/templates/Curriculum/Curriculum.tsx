import BoxSkin from "@/components/elements/BoxSkin/BoxSkin";
import Button from "@/components/elements/Button/Button";
import Card from "@/components/elements/Card/Card";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import CurriculumCard from "@/components/modules/CurriculumCard/CurriculumCard";
import Flex from "@/components/elements/Flex/Flex";

function Curriculum() {
	const experiences = [
		{
			date: " 2035 - A la fecha",
			role: "PUESTO",
			companyName: "Nombre de la empresa",
			companyLocation: "Ubicación de la empresa",
			p1: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente.",
			p2: "Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
		},
		{
			date: " 2035 - A la fecha",
			role: "PUESTO",
			companyName: "Nombre de la empresa",
			companyLocation: "Ubicación de la empresa",
			p1: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente.",
			p2: "Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
		},
		{
			date: " 2035 - A la fecha",
			role: "PUESTO",
			companyName: "Nombre de la empresa",
			companyLocation: "Ubicación de la empresa",
			p1: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente.",
			p2: "Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
		},
	];
	const academy = [
		{
			date: " 2035 - A la fecha",
			role: "PUESTO",
			companyName: "Nombre de la empresa",
			companyLocation: "Ubicación de la empresa",
			p1: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente.",
			p2: "Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
		},
		{
			date: " 2035 - A la fecha",
			role: "PUESTO",
			companyName: "Nombre de la empresa",
			companyLocation: "Ubicación de la empresa",
			p1: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente.",
			p2: "Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
		},
		{
			date: " 2035 - A la fecha",
			role: "PUESTO",
			companyName: "Nombre de la empresa",
			companyLocation: "Ubicación de la empresa",
			p1: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente.",
			p2: "Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
		},
	];
	const professionalSkills = [
		"Mentalidad emprendedora",
		"Planeación orientada al mercado",
		"Trabajo en equipo y colaborativo",
		"Análisis de Datos",
	];
	const languages = [
		"Inglés (nativo)",
		"Francés (competente)",
		"Español (competente)",
	];
	return (
		<BoxSkin className='p-4 lg:p-0'>
			<div className='w-full h-auto  flex flex-col justify-center items-center '>
				<div className='w-full lg:w-[724px] grid lg:grid-cols-12 gap-8 '>
					<div className='col-span-full row-span-full grid grid-cols-2 grid-rows-2 items-center lg:items-end gap-10 lg:gap-0'>
						<div className='col-span-full flex items-center gap-2 justify-center lg:pt-14 lg:pb-2 '>
							<SquareBlock />
							<h3 className='text-3xl'>Currículum</h3>
						</div>

						<h4 className='col-span-1 flex items-end'>
							Experiencia
						</h4>

						<div className='col-span-1 flex items-end justify-end'>
							<Button
								href={"/resume_EN.pdf"}
								target='_blank'
								text='DESCARGAR CV'
								active={true}
							/>
						</div>
					</div>
					<div className='col-span-full flex flex-col gap-8 mb-10'>
						{experiences.map((experience: any, key: number) => (
							<CurriculumCard
								key={key}
								date={experience.date}
								role={experience.role}
								companyName={experience.companyName}
								companyLocation={experience.companyLocation}
								p1={experience.p1}
								p2={experience.p2}
							/>
						))}
					</div>
					<div>
						<h3>Educación</h3>
					</div>
					<div className='col-span-full flex flex-col gap-8  mb-10'>
						{academy.map((experience: any, key: number) => (
							<CurriculumCard
								key={key}
								date={experience.date}
								role={experience.role}
								companyName={experience.companyName}
								companyLocation={experience.companyLocation}
								p1={experience.p1}
								p2={experience.p2}
							/>
						))}
					</div>
					<div className='col-span-full flex flex-col gap-8 bg-white h-96'>
						<Card className='flex flex-col justify-center gap-8 p-10'>
							<div className='flex flex-col justify-center gap-8'>
								<h3>Habilidades profesionales</h3>
								<ul className='flex flex-wrap'>
									{professionalSkills.map(
										(skill: string, key: number) => (
											<li
												key={key}
												className='w-1/2 mb-4'
											>
												<Flex className='gap-4'>
													<SquareBlock />
													<p>{skill}</p>
												</Flex>
											</li>
										)
									)}
								</ul>
							</div>
							<div className='flex flex-col justify-center gap-8'>
								<h3>Idiomas</h3>
								<ul className='flex flex-wrap'>
									{languages.map(
										(language: string, key: number) => (
											<li
												key={key}
												className='w-1/2 mb-4'
											>
												<Flex className='gap-4'>
													<SquareBlock />
													<p>{language}</p>
												</Flex>
											</li>
										)
									)}
								</ul>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</BoxSkin>
	);
}

export default Curriculum;
