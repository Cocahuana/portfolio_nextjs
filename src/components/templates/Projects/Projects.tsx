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
import IMG_artsand from "@/assets/images/IMG_artsand.png";
import IMG_urbanist from "@/assets/images/IMG_urbanist.png";
import IMG_IKE_webapp from "@/assets/images/IMG_IKE_webapp.png";
import IMG_IKE_backoffice from "@/assets/images/IMG_IKE_backoffice.png";
import IMG_IKE_prestadores from "@/assets/images/IMG_IKE_prestadores.png";
import IMG_IKE_geohogar from "@/assets/images/IMG_IKE_geohogar.png";
import Button from "@/components/elements/Button/Button";
function Proyectos() {
	const projects = [
		{
			title: "Iké Webapp",
			role: "Front-end Developer",
			description:
				"En este proyecto, hemos desarrollado un sistema en el que los usuarios pueden crease una cuenta para poder solicitar asistencias y/o alquilar seguros. La webapp funciona en conjunto con sistemas de expedientes SISE (Argentina) y Sistemas de autenticación Auth0. La web cuenta con videollamadas internas (sin google meet o similares). La webapp esta conectada con otras 4 aplicaciones: Iké Backoffice, Geohogar mobile y Servicios de mascotas Mobile.",
			photo: IMG_IKE_webapp,
			link: "",
		},
		{
			title: "Iké Backoffice",
			role: "Front-end Developer",
			description:
				"En este proyecto, hemos desarrollado un sistema en el que el admin de la Iké web app puede gestionar a proveedores y asignarles clientes que requieran sus servicios. La webapp tiene calendarios integrados y sistemas para visualizar de forma temporaria los turnos agendados y ademas tienen colores para distinguirlos de los distintos proveedores. La webapp esta conectada con otras 3 aplicaciones: Iké Backoffice, y Servicios de mascotas Mobile.",
			photo: IMG_IKE_backoffice,
			link: "",
		},
		{
			title: "Iké App mobile Prestadores",
			role: "Front-end Developer",
			description:
				"Iké Argentina brinda soluciones de asistencia las 24 hs, los 365 días del año ofreciendo a nuestros usuarios asistencia frente a imprevistos en su hogar, vehículo, bicicleta o acompañando a su mascota para que nada interfiera en sus planes. En esta aplicación para celulares (Android e iOS), los turnos que saquen los clientes mediante la web app (servicio de mascotas) la veremos reflajada (nosotros, como veterinarios) en esta app, donde nos llegaran las consultas y podremos agendar videollamadas, recibir notificaciones, revisar nuestro calendario e incluso podemos agregar imagenes y ver los detalles de la consulta.",
			photo: IMG_IKE_prestadores,
			link: "",
		},
		{
			title: "Iké Geohogar",
			role: "Frontend Developer",
			description:
				"La app busca conectar a los proveedores de un servicio en especifico (técnicos, ingenieros, plomeros, etc) con clientes que requieran sus servicios. En esta app, los tecnicos podran agendar visitas a domicilio y el presupuesto que el cliente abonará será creado por los coordinadores.",
			photo: IMG_IKE_geohogar,
			link: "",
		},
		{
			title: "Urbanist",
			role: "Full Stack Developer",
			description:
				"Urbanist es una empresa que se encarga de vender indumentaria creada por ellos mismos. Cuenta con envios de los productos en toda Argentina. Tiene integrada un carrito y un chat para whatsapp",
			photo: IMG_urbanist,
			link: "https://urbanist.com.ar/",
		},
		{
			title: "Artsand.com.ar",
			role: "Full Stack Developer",
			description:
				"Artsand es un estudio de arquitectura que se encarga de realizar: planos, renders, obras, entre otros. Es una landing page visual en la que puedes contactarlos mediante un formulario",
			photo: IMG_artsand,
			link: "https://artsand.com.ar/",
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
			title: "Finesite Landing Page",
			role: "Full Stack Developer",
			description:
				"La idea de Finesite comenzó en julio de 2022 con el objetivo de crear una empresa que brinde a las empresas servicios web inteligentes y eficientes que les simplifiquen la tarea, ayudándolos a alcanzar los objetivos deseados en ventas, conversiones y clientes potenciales.",
			photo: IMG_finesite,
			link: "https://finesiteweb.com/",
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
		<BoxSkin className='h-[350vh] px-6'>
			<div className='flex justify-center h-full'>
				<Grid className='gap-6 max-w-[400px] md:max-w-[724px] md:gap-20 h-full'>
					<Flex className='justify-center items-center gap-3'>
						<SquareBlock />
						<h3 className='md:text-3xl'>Proyectos</h3>
					</Flex>
					<Flex>
						<p className='text-base md:text-lg text-center'>
							Aquí podrás ver todos los proyectos en los que he
							estado trabajando, ya sean propios o para terceros.
						</p>
					</Flex>
					{projects.map((project, key) => (
						<Card
							className='bg-white h-[100vh] md:min-h-[50vh] gap-4 '
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
									<p className='px-4 md:px-10 text-base text-justify mb-6 '>
										{project.description}
									</p>
									<Flex className='items-center justify-center'>
										<Button
											text='Ver proyecto'
											active={true}
											href={project.link}
											target='__blank'
										/>
									</Flex>
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
			</div>
		</BoxSkin>
	);
}

export default Proyectos;
