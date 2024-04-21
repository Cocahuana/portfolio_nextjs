import Button from "@/components/elements/Button/Button";
import styles from "./HomePage.module.css";
import ProfileCard from "@/components/modules/ProfileCard/ProfileCard";
function HomePage() {
	/* styles.content */
	const CTAs = (
		<div className='hidden lg:flex gap-2'>
			<Button href='/Curriculum' text='CURRICULUM' active={true} />
			<Button href='/Proyectos' text='PROYECTOS' active={false} />
		</div>
	);
	return (
		<div className={`flex w-full h-full ${styles.skinBg}`}>
			<div className='w-full h-full'>
				<div className='bg-transparent px-6 mb-6 lg:mb-0 lg:mt-2 w-full minH-[80vh] lg:h-[80vh] flex justify-center items-center '>
					<div className='w-full lg:w-1/2 h-auto'>
						<div className='w-full h-full'>
							<div className='flex flex-col lg:flex-row w-full h-full'>
								<div className=' w-full lg:w-2/5'>
									<ProfileCard />
								</div>
								<div className='w-full lg:w-3/4 flex flex-col justify-between items-start p-6 lg:px-8 lg:pt-16 gap-6 lg:gap-0 '>
									<h2 className='text-[40px] lg:text-8xl'>
										Hola
									</h2>
									<h3>Soy Front-end Developer</h3>
									{CTAs}
									<p className='text-justify lg:text-lg'>
										También soy Desarrollador de software
										con más de un año de experiencia en el
										diseño y desarrollo de aplicaciones y
										páginas web.
									</p>
									<p className='text-justify lg:text-lg'>
										Automotivado con un fuerte deseo de
										aprender nuevas tecnologías, trabajar en
										proyectos desafiantes y ayudar a mis
										compañeros de equipo, También soy
										adaptable y flexible para aprender
										nuevas herramientas y hacer realidad los
										sueños de los clientes.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
