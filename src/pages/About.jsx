import AboutBox from "../components/aboutBox";
import ExperienceComp from "../components/experienceComp";

const About = () => {
  return (
    <div className="bg-[#0F0F0F] pb-[111.5px] lg:pl-8 p-4 flex md:flex-col flex-col lg:flex-row lg:justify-evenly lg:pr-2 pt-[122px]">
      <section className="lg:w-[50%]   lg:pr-16 ">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl text-green-200 pb-[42px]">
          About Me
        </h2>
        <p className="text-[#999999] text-xl ">
          I'm a passionate full-stack developer with over 4 years of experience
          building mobile and web applications. I specialize in React Native for
          mobile development, React.js for web frontends, and Node.js and
          firebase for robust backend systems.
        </p>
        <p className="text-[#999999] text-xl mt-[40px]">
          My expertise spans the entire development lifecycle, from initial
          concept and design to deployment and maintenance. I'm committed to
          writing clean, efficient code and staying up-to-date with the latest
          technologies and best practices.
        </p>

        <div className="lg:gap-6  justify-evenly md:flex lg:mt-8  md:pb-8 md:pt-[28px] pt-2 md:pt-0">
          <AboutBox
            first={"FrontEnd"}
            sec="React Native, Expo, React.js, TypeScript, Redux"
          />
          <AboutBox
            first={"Backend"}
            sec="Node.js, Express.js, MongoDB, PostgreSQL, Firebase"
          />
        </div>
      </section >
      <section className="lg:rounded-[24px] rounded-2xl bg-[#222222] lg:w-[564px] lg:h-[574px] w-ful md:w-full  mt-[32px]  p-[41px] ">
        <h2 className="lg:text-3xl text-2xl text-white">Experience</h2>
        <ExperienceComp f={'Senior Full-Stack Developer'} s={'ExpertDex • 2024 - Present '} t={'Leading development of front-end applications and backend services for enterprise clients.'} />
        <ExperienceComp f={'React Native Developer'} s={'Avly • 2024'} t={'Built cross-platform mobile applications from concept to production.'} />
        <ExperienceComp f={'Frontend Developer'} s={'Vulue • 2022 - 2024'} t={'Developed responsive web applications using React.js and modern frontend technologies.'} />
      </section >

    </div>
  );
};
export default About;
