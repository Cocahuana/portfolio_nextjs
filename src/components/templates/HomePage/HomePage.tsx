import Button from "@/components/elements/Button/Button";
import styles from "./HomePage.module.css";
import ProfileCard from "@/components/modules/ProfileCard/ProfileCard";
function HomePage() {
  /* styles.content */
  const CTAs = (
    <div className="hidden lg:flex gap-2">
      <Button href="/Curriculum" text="CURRICULUM" active={true} />
      <Button href="/Proyectos" text="PROJECTS" active={false} />
    </div>
  );
  return (
    <div className={`flex w-full h-full ${styles.skinBg}`}>
      <div className="w-full h-full">
        <div className="bg-transparent px-6 mb-6 lg:mb-0 lg:mt-2 w-full minH-[80vh] lg:h-[80vh] flex justify-center items-center ">
          <div className="w-full lg:w-1/2 h-auto">
            <div className="w-full h-full">
              <div className="flex flex-col lg:flex-row w-full h-full">
                <div className=" w-full lg:w-2/5">
                  <ProfileCard />
                </div>
                <div className="w-full lg:w-3/4 flex flex-col justify-between items-start p-6 lg:px-8 lg:pt-16 gap-6 lg:gap-0 ">
                  <h2 className="text-[40px] lg:text-8xl">Hola</h2>
                  <h3>Soy Front-end Developer</h3>
                  {CTAs}
                  <p className="text-justify lg:text-lg">
                    I am also a Software Developer with more than 3 years of
                    experience. experience in designing and developing
                    applications and websites.
                  </p>
                  <p className="text-justify lg:text-lg">
                    Self-motivated with a strong desire to learn new things
                    technologies, work on challenging projects and help my
                    teammates, I am also adaptable and flexible to learn new
                    tools and make dreams come true clients' dreams.
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
