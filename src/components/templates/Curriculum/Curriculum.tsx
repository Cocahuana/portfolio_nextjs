import BoxSkin from "@/components/elements/BoxSkin/BoxSkin";
import Button from "@/components/elements/Button/Button";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import CurriculumCard from "@/components/modules/CurriculumCard/CurriculumCard";
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
	return (
		<BoxSkin>
			<div className='w-full h-auto  flex flex-col justify-center items-center'>
				<div className='w-[724px] grid grid-cols-12 gap-8'>
					<div className='col-span-full row-span-full grid grid-cols-3 grid-rows-2'>
						<div className='col-span-1 ' />
						<div className='col-span-1  flex items-center gap-2  justify-center pt-28 pb-2 '>
							<SquareBlock />
							<h3>Currículum</h3>
						</div>
						<div className='col-span-1 row-span-1' />
						<h4 className=' flex items-end '>Experiencia</h4>
						<div />
						<div className='flex items-end justify-end'>
							<Button text='DESCARGAR CV' active={true} />
						</div>
					</div>
					<div className='col-span-full flex flex-col gap-8'>
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
				</div>
			</div>
		</BoxSkin>
	);
}

export default Curriculum;
