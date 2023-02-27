import Button from "@/components/elements/Button/Button";
import styles from "./HomePage.module.css";
import ProfileCard from "@/components/modules/ProfileCard/ProfileCard";
import Card from "@/components/modules/Card/Card";
function HomePage() {
	/* styles.content */
	const { skinBg, whiteBg } = styles;
	return (
		<div className='flex w-full'>
			<div className={skinBg}>sadasd</div>
			<div className={whiteBg}>fgfffff</div>
			<div className='bg-transparent w-full h-3/4 flex justify-center items-center absolute'>
				<div className='w-1/2 h-3/4'>
					<Card>
						<div className='flex w-full h-full'>
							<div className='w-2/5'>
								<ProfileCard />
							</div>
							<div className='w-1/2 flex flex-col '>
								<h2>Hola</h2>
								<h3>Esto es lo que soy y lo que hago</h3>
								<Button text='CURRICULUM' active={true} />
								<Button text='PROYECTOS' active={false} />
								<p>
									Párrafo. Haz clic aquí para agregar tu
									propio texto y editar. Es fácil. Haz clic en
									Editar texto o doble clic aquí para agregar
									tu contenido y cambiar la fuente.
								</p>
								<p>
									Aquí puedes contar tu historia y permitir
									que tus usuarios sepan más sobre ti.
								</p>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
