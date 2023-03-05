import Button from "@/components/elements/Button/Button";
import styles from "./HomePage.module.css";
import ProfileCard from "@/components/modules/ProfileCard/ProfileCard";
function HomePage() {
	/* styles.content */
	return (
		<div className={`flex w-full h-full ${styles.skinBg}`}>
			<div className='w-full h-full'>
				<div className='bg-transparent w-full h-[80vh] flex justify-center items-center '>
					<div className='w-1/2 h-auto'>
						<div className='w-full h-full'>
							<div className='flex flex-col lg:flex-row w-full h-full'>
								<div className='w-2/5'>
									<ProfileCard />
								</div>
								<div className='w-1/2 flex flex-col justify-between items-start px-8 pt-16'>
									<h2 className='text-8xl'>Hola</h2>
									<h3>Esto es lo que soy y lo que hago</h3>
									<div className='flex gap-2'>
										<Button
											href='/curriculum'
											text='CURRICULUM'
											active={true}
										/>
										<Button
											href='/Proyectos'
											text='PROYECTOS'
											active={false}
										/>
									</div>
									<p className='text-lg'>
										Párrafo. Haz clic aquí para agregar tu
										propio texto y editar. Es fácil. Haz
										clic en Editar texto o doble clic aquí
										para agregar tu contenido y cambiar la
										fuente.
									</p>
									<p className='text-lg'>
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
