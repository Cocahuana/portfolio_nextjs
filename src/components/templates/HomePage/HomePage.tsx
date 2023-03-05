import Button from "@/components/elements/Button/Button";
import styles from "./HomePage.module.css";
import ProfileCard from "@/components/modules/ProfileCard/ProfileCard";
function HomePage() {
	/* styles.content */
	const CTAs = (
		<div className='hidden lg:flex gap-2'>
			<Button href='/curriculum' text='CURRICULUM' active={true} />
			<Button href='/Proyectos' text='PROYECTOS' active={false} />
		</div>
	);
	return (
		<div className={`flex w-full h-full ${styles.skinBg}`}>
			<div className='w-full h-full'>
				<div className='bg-transparent px-6 mb-6 w-full minH-[80vh] lg:h-[80vh] flex justify-center items-center '>
					<div className='w-full lg:w-1/2 h-auto'>
						<div className='w-full h-full'>
							<div className='flex flex-col lg:flex-row w-full h-full'>
								<div className=' w-full lg:w-2/5'>
									<ProfileCard />
								</div>
								<div className='w-full lg:w-1/2 flex flex-col justify-between items-start p-6 lg:px-8 lg:pt-16 gap-6 lg:gap-0 '>
									<h2 className='text-[40px] lg:text-8xl'>
										Hola
									</h2>
									<h3>Esto es lo que soy y lo que hago</h3>
									{CTAs}
									<p className='text-base lg:text-lg'>
										Párrafo. Haz clic aquí para agregar tu
										propio texto y editar. Es fácil. Haz
										clic en Editar texto o doble clic aquí
										para agregar tu contenido y cambiar la
										fuente.
									</p>
									<p className='text-base lg:text-lg'>
										Aquí puedes contar tu historia y
										permitir que tus usuarios sepan más
										sobre ti.
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
