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
        "In this project, we have developed a system in which users can create an account to request assistance and/or rent insurance. The webapp works in conjunction with SISE file systems (Argentina) and Auth0 authentication systems. The website has with internal video calls (without Google Meet or similar). The webapp is connected to 4 other applications: Iké Backoffice, Geohogar mobile and Mobile pet services.",
      photo: IMG_IKE_webapp,
      link: "https://ikeargentina.com.ar/",
    },
    {
      title: "Iké Backoffice",
      role: "Front-end Developer",
      description:
        "In this project, we have developed a system in which the admin of the Iké web app can manage suppliers and assign clients who require their services. The webapp has integrated calendars and systems to temporarily view the scheduled shifts and they also have colors to distinguish them from the different providers. The webapp is connected with 3 other applications: Iké Backoffice, and Mobile Pet Services.",
      photo: IMG_IKE_backoffice,
      link: "https://admin.mascotas.ikeargentina.com.ar",
    },
    {
      title: "Iké App mobile Prestadores",
      role: "Front-end Developer",
      description:
        "Iké Argentina provides assistance solutions 24 hours a day, 365 days a year, offering our users assistance in the event of unforeseen events in their home, vehicle, bicycle or accompanying their pet so that nothing interferes with their plans. In this mobile application ( Android and iOS), the appointments that clients take through the web app (pet service) will be reflected (we, as veterinarians) in this app, where we will receive consultations and we will be able to schedule video calls, receive notifications, review our calendar and We can even add images and see the details of the query.",
      photo: IMG_IKE_prestadores,
      link: "Not-available-link",
    },
    {
      title: "Iké Geohogar",
      role: "Frontend Developer",
      description:
        "La app busca conectar a los proveedores de un servicio en especifico (técnicos, ingenieros, plomeros, etc) con clientes que requieran sus servicios. En esta app, los tecnicos podran agendar visitas a domicilio y el presupuesto que el cliente abonará será creado por los coordinadores.",
      photo: IMG_IKE_geohogar,
      link: "Not-available-link",
    },
    {
      title: "Urbanist",
      role: "Full Stack Developer",
      description:
        "Urbanist is a company that is responsible for selling clothing created by themselves. It has shipments of products throughout Argentina. It has an integrated cart and a WhatsApp chat",
      photo: IMG_urbanist,
      link: "https://urbanist.com.ar/",
    },
    {
      title: "Artsand.com.ar",
      role: "Full Stack Developer",
      description:
        "Arts And is an architecture studio that is responsible for creating: plans, renders, works, among others. It is a visual landing page where you can contact them using a form",
      photo: IMG_artsand,
      link: "https://artsand.com.ar/",
    },
    {
      title: "Bookovich books Ecommerce",
      role: "Full Stack Developer",
      description:
        "I worked together with a team of eight people to design and develop an e-commerce web application whose main objective was to sell e-books online. My main role includes implementing the project and keeping it running 24/7 week, assigning tickets/features to my teammates, code review, debugging, pair programming, refactoring code, creating new features.",
      photo: IMG_ecommerce,
      link: "https://e-commerce-book-store.vercel.app/",
    },
    {
      title: "Finesite Landing Page",
      role: "Full Stack Developer",
      description:
        "The idea of Finesite began in July 2022 with the goal of creating a company that provides companies with intelligent and efficient web services that simplify their task, helping them achieve the desired goals in sales, conversions and leads.",
      photo: IMG_finesite,
      link: "https://finesiteweb.com/",
    },
    {
      title: "Eco Hotel Landing Page",
      role: "Full Stack Developer",
      description:
        "PRAGMA HOTEL is a pioneer in the region. Our experience and reputation made us the fastest growing hotel in the area. The renovation project of Pragma Hotel is in charge of the architect and designer Claudia Faena, specialist in wellness and well-being. Her designs have an elegant and spectacular imprint.",
      photo: IMG_ecoHotel,
      link: "https://eco-hotel.vercel.app/",
    },
    {
      title: "Begin Vegan Landing Page",
      role: "Full Stack Developer",
      description:
        "Begin Vegan was the initiative for a university project in Mendoza, where through a QR you could access this Landing Page and see the restaurant menus for those who work with vegan food",
      photo: IMG_beginVegan,
      link: "https://begin-vegan.vercel.app/",
    },
  ];

  return (
    <BoxSkin className="h-[350vh] px-6">
      <div className="flex justify-center h-full">
        <Grid className="gap-6 max-w-[400px] md:max-w-[724px] md:gap-20 h-full">
          <Flex className="justify-center items-center gap-3">
            <SquareBlock />
            <h3 className="md:text-3xl">Projects</h3>
          </Flex>
          <Flex>
            <p className="text-base md:text-lg text-center">
              Here you can see all the projects I have been in working, whether
              they are their own or for third parties.
            </p>
          </Flex>
          {projects.map((project, key) => (
            <Card
              className="bg-white h-[100vh] md:min-h-[50vh] gap-4 "
              key={key}
            >
              <Flex className="h-full flex-col items-center justify-between md:flex-row">
                <Flex className="flex-col gap-4 min-h-[250px] max-h-[252px]  py-4 md:py-0 md:h-full md:max-h-full md:justify-center md:w-3/5 items-center">
                  <Flex className="md:mb-6">
                    <div className="h-full w-2 bg-[color:var(--primary-bg)]" />
                    <Flex className="flex-col gap-1 px-4 md:px-8">
                      <BlueTitle titleText={project.title} />
                      <p className='font-bold text-sm font-["DIN-Heavy"]'>
                        {project.role}
                      </p>
                    </Flex>
                  </Flex>
                  <p className="px-4 md:px-10 text-base text-justify mb-6 ">
                    {project.description}
                  </p>
                  <Flex className="items-center justify-center">
                    <Button
                      text="See Project"
                      active={true}
                      href={project.link}
                      target="__blank"
                    />
                  </Flex>
                </Flex>
                <Flex className="w-full max-h-[252px] md:h-full md:max-h-full md:w-2/5 ">
                  <Image
                    className="w-full h-full object-cover "
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
