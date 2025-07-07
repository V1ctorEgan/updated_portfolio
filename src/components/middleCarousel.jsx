import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Left from "../assets/img/left.png";
import Right from "../assets/img/right-arrow.png";
import iotpic from "../assets/img/iot-dashboard.png"
import Expertdex from "../assets/img/expertdex.png"

const projects = [
  {
      title: "ExpertDex",
      description: "A platform that bridges the gap between businesses in the oil sector",
      technologies: "React, expressjs, reddis",
      image: Expertdex,
      live: "https://expert-dex-hqwe.vercel.app/",
      code: "#",
    },
  {
    title: "E-bike IoT Application",
    description: "Dashboard to display battery status, speed monitor and ride statistics",
    technologies: "React native, firebase",
    image: iotpic,
    live: "#",
    code: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization",
    technologies: "React Native, Redux",
    image: "https://via.placeholder.com/400x256/4ade80/000000?text=Dashboard",
    live: "#",
    code: "#",
  },
  {
    title: "Fintech Web App",
    description: "Secure web app for financial services and analytics.",
    technologies: "React.js, Tailwind CSS",
    image: "https://via.placeholder.com/400x256/22c55e/000000?text=Fintech+App",
    live: "#",
    code: "#",
  },
];

export default function MiddleCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => paginate(-1), 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const project = projects[index];

  return (
    <div className="hidden md:flex lg:hidden flex-col items-center justify-center">
      <div
        className="text-white p-[24px] w-full relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className=" w-full"
          >
            <div className="w-full bg-[#222222] h-[582px] p-[32px] rounded-[16px]">
              <div className="w-full flex items-center justify-start gap-2">
                <p className="bg-[#4ADE80] w-[12px] h-[12px] rounded-[6px]"></p>
                <p className="text-[#999999]">Featured Project</p>
              </div>
              <p className="text-white font-bold text-[24px] mt-[16px] mb-[16px]">
                {project.title}
              </p>
              <p className="text-[#999999] mb-[27px]">{project.description}</p>
              <p className="text-[#999999] mb-[25px] text-[14px]">
                <span className="text-[#4ADE80] font-semibold">Technologies:</span> {project.technologies}
              </p>
              <div className="flex w-[270px] gap-[16px]">
                <a
                  href={project.live}
                  className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] w-full h-[52px] rounded-[12px] bg-gradient-to-l to-[#4ADE80] from-[#22C55E] text-black"
                >
                  View Live
                </a>
                <a
                  href={project.code}
                  className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] border border-[#999999] w-full h-[52px] rounded-[12px]"
                >
                  View Code
                </a>
              </div>
              <div className="w-full h-[256px] bg-[#333333] flex mt-[32px] justify-center items-center rounded-[12px] overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full rounded-[12px]" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => paginate(1)}
          className="w-[56px] h-[56px] rounded-full bg-[#222] text-white flex items-center justify-center hover:bg-[#333]"
        >
          <img src={Left} alt="left" />
        </button>
        <button
          onClick={() => paginate(-1)}
          className="w-[56px] h-[56px] rounded-full bg-[#222] text-white flex items-center justify-center hover:bg-[#333]"
        >
          <img src={Right} alt="right" />
        </button>
      </div>
    </div>
  );
}
