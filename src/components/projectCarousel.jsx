import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import  Left from "../assets/img/left.png"
import Right from "../assets/img/right-arrow.png"
import IotImage from "../assets/img/iot-dashboard.png";
import Expertdex from "../assets/img/expertdex.png"

const projects = [
  {
    title: "ExpertDex",
    description: "A platform that bridges the gap between businesses in the oil sector",
    technologies: "Nodejs/Expressjs, React, reddis",
    image: Expertdex,
    live: "https://expert-dex-hqwe.vercel.app/",
    code: "#",
  },
    {
    title: "E-bike IoT Application",
    description: "Dashboard to display battery status, speed monitor and ride statistics",
    technologies: "React native, firebase",
    image: IotImage,
    live: "#",
    code: "#",
  },
  {
    title: "Fintech Web App",
    description: "Secure web app for financial services and analytics.",
    technologies: "React.js, Tailwind CSS",
    image: "https://via.placeholder.com/400x300/22c55e/000000?text=Fintech+App",
    live: "#",
    code: "#",
  },
];

export default function FeaturedProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
   const [isHovered, setIsHovered] = useState(false);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prevIndex) =>
      (prevIndex + dir + projects.length) % projects.length
    );
  };

useEffect(() => {
    if (isHovered) return; // pause if hovered

    const interval = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <div className="hidden lg:block">
      <div className="lg:flex hidden lg:h-[407px] lg:w-full mt-[47px] relative overflow-hidden"   onMouseEnter={() => setIsHovered(true)}   onMouseLeave={() => setIsHovered(false)}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute flex w-full"
          >
            {/* LEFT SIDE */}
            <div className="bg-[#222222] rounded-l-[24px] p-[49px] h-[405px] border-r w-full">
              <div className="w-full flex items-center justify-start gap-2">
                <p className="bg-[#4ADE80] w-[12px] h-[12px] rounded-[6px]"></p>
                <p className="text-[#999999]">Featured Project</p>
              </div>
              <p className="text-white font-bold text-[30px] mt-[24px] mb-[28px]">
                {projects[index].title}
              </p>
              <p className="text-[#999999] mb-[27px]">
                {projects[index].description}
              </p>
              <p className="text-[#999999] mb-[33px] text-[16px]">
                <span className="text-[#4ADE80] font-semibold text-[16px]">
                  Technologies:
                </span>{" "}
                {projects[index].technologies}
              </p>
              <div className="flex w-[310px] gap-[24px]">
                <a
                  href={projects[index].live}
                  className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] w-full h-[52px] rounded-[12px] bg-gradient-to-r to-[#4ADE80] from-[#ffffff] text-black"
                >
                  View Live
                </a>
                <a
                  href={projects[index].code}
                  className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] border border-[#999999] w-full h-[52px] rounded-[12px]"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full h-[405px] flex justify-center items-center bg-[#4ADE80] rounded-r-[24px]">
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="object-cover h-full w-full rounded-r-[24px]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => paginate(-1)}
          className="w-[56px] h-[56px] rounded-full bg-[#222] text-white flex items-center justify-center hover:bg-[#333]"
        >
          <img src={Left} alt="left direction arrow" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-[56px] h-[56px]  rounded-full bg-[#222] text-white flex items-center justify-center hover:bg-[#333]"
        >
            <img src={Right} alt="right direction arrow" />
        </button>
      </div>
    </ div>
  );
}
