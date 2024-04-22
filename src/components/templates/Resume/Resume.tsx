import BoxSkin from "@/components/elements/BoxSkin/BoxSkin";
import Button from "@/components/elements/Button/Button";
import Card from "@/components/elements/Card/Card";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import CurriculumCard from "@/components/modules/CurriculumCard/CurriculumCard";
import Flex from "@/components/elements/Flex/Flex";

function Resume() {
	const experiences = [
		{
			date: "May 2023 - Present",
			role: "Front-end Developer",
			companyName: "InnovativeDev Global",
			companyLocation: "Remote in Argentina",
			paragraphs: [
				"I design a solution to improve loading times for key forms within our client's web application, significantly enhancing user experience. Previously, load times averaged 30 seconds; through strategic enhancements, I reduced this to an average of 3 seconds, marking a remarkable 90% improvement in performance.",
				"Pioneered the development of a new application: Backoffice; empowering administrators with customizable dashboard functionalities, notably enhancing calendar management capabilities.",
				"Guided the development process of a cutting-edge mobile application featuring integrated video call functionality, engineered from inception to login credentials and help in the app deployment.",
			],
		},
		{
			date: "December 2023 - April 2024",
			role: "Semi Senior Front-end developer",
			companyName: "DataAnnotation Tech",
			companyLocation: "Remote, New York, USA",
			paragraphs: [
				"Spearheaded the development and training of AI chatbots, thorough crafting several coding challenges and corresponding solutions.",
				"Ensured the production of top-tier code snippets while precisely evaluating AI-generated code for accuracy and efficiency.",
				"Writing explanations of how code could solve problems and evaluating various solution approaches.",
				"Exhibited fluency in English, matched with exceptional writing and exceptional grammar, facilitating clear communication and documentation processes.",
				"Writing human-readable summaries of coding problems",
			],
		},
		{
			date: "Octubre 2022 - Actualidad",
			role: "Full Stack Developer",
			companyName: "Finesite",
			companyLocation: "Remoto en Argentina",
			paragraphs: [
				"Colaborar con equipos multifuncionales para desarrollar e implementar aplicaciones web innovadoras",
				"Implementar interfaces de usuario intuitivas y receptivas del diseño de Figma que se alineen con la marca del cliente y los objetivos de experiencia del usuario.",
				"Traducción de wireframes de UI/UX a elementos visuales",
				"Desarrollar e implementar código de alta calidad usando React Js, JavaScript y otras tecnologías frontend.",
				"Manténerse actualizado con las últimas tendencias y tecnologías de diseño y desarrollo.",
				"Ayudar a los desarrolladores de back-end con la codificación y la resolución de problemas.",
				"Comunicarse efectivamente con gerentes de proyecto, diseñadores y otras partes interesadas.",
			],
		},
		{
			date: "Agosto 2022 - Actualidad",
			role: "Full Stack Developer",
			companyName: "Freelancer",
			companyLocation: "Remoto",
			paragraphs: [
				"Today, in an increasingly digital world, having a strong and engaging online presence is essential to the success of any business. That is why I'm  here to offer you my high-quality web development services.",
				"Let me help you to improve or create your online presence",
			],
		},
		{
			date: "Septiembre 2022 - Octubre 2022",
			role: "Frontend Developer",
			companyName: "Contractor",
			companyLocation: "Remote in Argentina",
			paragraphs: [
				"Desarrollar las funciones a partir de los requisitos con React js y controlar el flujo de datos con Redux.",
				"Implementar mejores prácticas de código limpio y escalable para el desarrollo del proyecto además de ser responsable de toda la arquitectura Front-End.",
				"Trabaje junto con el líder técnico para definir las características y las mejores formas de implementarlos.",
				"Sugerir cambios que podrían ayudar a la experiencia del usuario en la aplicación.",
			],
		},
		{
			date: "Junio 2022 - Septiembre 2022",
			role: "Asistente de enseñanza Full-Stack",
			companyName: "Henry - Part Time",
			companyLocation: "Remote in LATAM",
			paragraphs: [
				"Ayudante de Bootcamp (TA) para alumnos de Desarrollo Full-Stack.",
				"Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio.",
				"Orientar a los estudiantes en los primeros pasos de la cursada.",
				"Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming).",
				"Proponer ideas para la mejora de los procesos del Bootcamp.",
			],
		},
		{
			date: "Agosto 2020 - Marzo 2021",
			role: "Desarrollador Freelance de lenguajes Embebidos",
			companyName: "Empresa Lumínica Argentina S.A - Full-time",
			companyLocation: "Hibrído",
			paragraphs: [
				"Realizó aplicaciones mediante el lenguaje de programación C++ ambientado en el entorno de desarrollo de Arduino.",
				"Cumplir Deadlines utilizando metodologías ágiles",
				" Escritura de documentación y manual de usuario",
				"Asignación de tareas a realizar para llevar a cabo todas las partes del proyecto",
				"Toma de requerimiento",
			],
		},
	];
	const academy = [
		{
			date: "Marzo 2021 - November 2025",
			role: "Licenciatura en Informática",
			companyName: "Universidad Atlántida Argentina",
			companyLocation: "Mar del Plata, Buenos Aires, Argentina",
			paragraphs: ["Cursando actualmente el tercer año de la carrera"],
		},
		{
			date: "Abril 2022 - Agosto 2022",
			role: "Full Stack Developer course",
			companyName: "Henry",
			companyLocation: "Remote, Worldwide",
			paragraphs: ["800 horas de curso teorico y práctico"],
		},
		{
			date: "Marzo 2014 - Abril 2021",
			role: "Tecnico en Electronica",
			companyName: "Escuela de Educación Técnica Número 2",
			companyLocation: "Mar del Plata, Buenos Aires, Argentina",
			paragraphs: ["Promedio: 8.20 / 10"],
		},
	];
	const professionalSkills = [
		"Deadline Oriented",
		"Pair Programming",
		"Trabajo en equipo y colaborativo",
		"Teaching ",
		"Client Presentation",
	];
	const languages = [
		"Inglés (nativo / C2 certificado)",
		"Español (nativo / lengua materna)",
		"Portugues (básico / A1)",
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
								paragraphs={experience.paragraphs}
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
								paragraphs={experience.paragraphs}
							/>
						))}
					</div>
					<div className='col-span-full flex flex-col gap-8 bg-white h-auto lg:h-96'>
						<Card className='flex flex-col justify-center gap-8 p-10'>
							<div className='flex flex-col justify-center gap-8'>
								<h3>Habilidades profesionales</h3>
								<ul className='flex flex-wrap'>
									{professionalSkills.map(
										(skill: string, key: number) => (
											<li
												key={key}
												className='w-full lg:w-1/2 mb-4'
											>
												<Flex className='gap-4'>
													<SquareBlock />
													<p className='text-base'>
														{skill}
													</p>
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
												className='w-full lg:w-1/2 mb-4'
											>
												<Flex className='gap-4'>
													<SquareBlock />
													<p className='text-base'>
														{language}
													</p>
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

export default Resume;
