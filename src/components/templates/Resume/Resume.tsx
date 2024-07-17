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
      companyLocation: "Remote in Argentina",
      paragraphs: [
        "Collaborate with cross-functional teams to develop and implement innovative web applications",
        "Implement intuitive and responsive Figma design user interfaces that align with the client's brand and user experience goals.",
        "Translating UI/UX wireframes to visual elements",
        "Develop and deploy high-quality code using React Js, JavaScript, and other frontend technologies.",
        "Keep up to date with the latest design and development trends and technologies.",
        "Assist back-end developers with coding and troubleshooting.",
        "Communicate effectively with project managers, designers and other interested parties.",
      ],
    },
    {
      date: "August 2022 - Today",
      role: "Full Stack Developer",
      companyName: "Freelancer",
      companyLocation: "Remote",
      paragraphs: [
        "Today, in an increasingly digital world, having a strong and engaging online presence is essential to the success of any business. That is why I'm  here to offer you my high-quality web development services.",
        "Let me help you to improve or create your online presence",
      ],
    },
    {
      date: "September 2022 - October 2022",
      role: "Frontend Developer",
      companyName: "Contractor",
      companyLocation: "Remote in Argentina",
      paragraphs: [
        "Develop functions from requirements with React js and control data flow with Redux.",
        "Implement best practices of clean and scalable code for the development of the project in addition to being responsible for the entire Front-End architecture.",
        "Work together with the technical lead to define the features and the best ways to implement them.",
        "Suggest changes that could help the user experience in the app.",
      ],
    },
    {
      date: "June 2022 - September 2022",
      role: "Full-Stack Teaching Assistant",
      companyName: "Henry - Part Time",
      companyLocation: "Remote in LATAM",
      paragraphs: [
        "Bootcamp Assistant (TA) for Full-Stack Development students.",
        "Coordinate a group of students to achieve integration into the study group.",
        "Guide students in the first steps of the course.",
        "Assist the resolution of exercises and promote group collaboration (Pair Programming).",
        "Propose ideas to improve Bootcamp processes.",
      ],
    },
    {
      date: "August 2020 - March 2021",
      role: "Freelance Embedded Language Developer",
      companyName: "Empresa Lumínica Argentina S.A - Full-time",
      companyLocation: "Hybrid",
      paragraphs: [
        "Made applications using the C++ programming language set in the Arduino development environment.",
        "Meet Deadlines using agile methodologies",
        "Writing documentation and user manual",
        "Assignment of tasks to carry out all parts of the project",
        "Taking request",
      ],
    },
  ];
  const academy = [
    {
      date: "March 2021 - November 2025",
      role: "Degree in computer science",
      companyName: "Universidad Atlántida Argentina",
      companyLocation: "Mar del Plata, Buenos Aires, Argentina",
      paragraphs: ["Currently studying the third year of the degree"],
    },
    {
      date: "April 2022 - August 2022",
      role: "Full Stack Developer course",
      companyName: "Henry",
      companyLocation: "Remote, Worldwide",
      paragraphs: ["800 hours of theoretical and practical course"],
    },
    {
      date: "March 2014 - April 2021",
      role: "Electronics Technician",
      companyName: "Escuela de Educación Técnica Número 2",
      companyLocation: "Mar del Plata, Buenos Aires, Argentina",
      paragraphs: ["Score: 8.20 / 10"],
    },
  ];
  const professionalSkills = [
    "Deadline Oriented",
    "Pair Programming",
    "Team Work",
    "Teaching",
    "Client Presentation",
  ];
  const languages = [
    "Inglés (native / C2 certificate)",
    "Español (native / birth language)",
    "Portugues (basic / A1)",
  ];
  return (
    <BoxSkin className="p-4 lg:p-0">
      <div className="w-full h-auto  flex flex-col justify-center items-center ">
        <div className="w-full lg:w-[724px] grid lg:grid-cols-12 gap-8 ">
          <div className="col-span-full row-span-full grid grid-cols-2 grid-rows-2 items-center lg:items-end gap-10 lg:gap-0">
            <div className="col-span-full flex items-center gap-2 justify-center lg:pt-14 lg:pb-2 ">
              <SquareBlock />
              <h3 className="text-3xl">Curriculum</h3>
            </div>

            <h4 className="col-span-1 flex items-end">Experience</h4>

            <div className="col-span-1 flex items-end justify-end">
              <Button
                href={"/resume_EN.pdf"}
                target="_blank"
                text="DOWNLOAD CV"
                active={true}
              />
            </div>
          </div>
          <div className="col-span-full flex flex-col gap-8 mb-10">
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
            <h3>EDUCATION</h3>
          </div>
          <div className="col-span-full flex flex-col gap-8  mb-10">
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
          <div className="col-span-full flex flex-col gap-8 bg-white h-auto lg:h-96">
            <Card className="flex flex-col justify-center gap-8 p-10">
              <div className="flex flex-col justify-center gap-8">
                <h3>PROFESSIONAL SKILLS</h3>
                <ul className="flex flex-wrap">
                  {professionalSkills.map((skill: string, key: number) => (
                    <li key={key} className="w-full lg:w-1/2 mb-4">
                      <Flex className="gap-4">
                        <SquareBlock />
                        <p className="text-base">{skill}</p>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center gap-8">
                <h3>Languages</h3>
                <ul className="flex flex-wrap">
                  {languages.map((language: string, key: number) => (
                    <li key={key} className="w-full lg:w-1/2 mb-4">
                      <Flex className="gap-4">
                        <SquareBlock />
                        <p className="text-base">{language}</p>
                      </Flex>
                    </li>
                  ))}
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
