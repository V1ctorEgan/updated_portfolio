import AboutBox from "../components/aboutBox";

const About = () => {
  return (
    <div className="bg-[#0F0F0F] pl-8 flex md:flex-col flex-col lg:flex-row">
      <section className="w-[50% flex-1/2 border">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl text-green-200 pb-[42px]">
          About Me
        </h2>
        <p className="text-[#999999] text-xl ">
          I'm a passionate full-stack developer with over 4 years of experience
          building mobile and web applications. I specialize in React Native for
          mobile development, React.js for web frontends, and Node.js and
          firebase for robust backend systems.
        </p>
        <p className="text-[#999999] text-xl mt-[20px]">
          My expertise spans the entire development lifecycle, from initial
          concept and design to deployment and maintenance. I'm committed to
          writing clean, efficient code and staying up-to-date with the latest
          technologies and best practices.
        </p>

        <div className="lg:gap-6 justify-center items-center lg:flex ">
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
      <section className="lg:rounded-[24px] rounded-2xl bg-[#222222] lg:w-[564px] lg:h-[574px] h-[426px] w-[427px] md:w-[963px] md:h-[410px] w-[50% flex-1/2 border">
        <h2>Experience</h2>
        
      </section >

    </div>
  );
};
export default About;
