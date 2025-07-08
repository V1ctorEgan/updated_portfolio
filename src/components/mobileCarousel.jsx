import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Iot from "../assets/img/iot-dashboard.png";
import Expertdex from "../assets/img/expertdex.png";
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
    description:
      "Dashboard to display battery status, speed monitor and ride statistics",
    technologies: "React Native, Firebase",
    image: Iot,
    live: "#",
    code: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with real-time data visualization",
    technologies: "React Native, Redux",
    image: "https://via.placeholder.com/400x300/4ade80/000000?text=Dashboard+App",
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

export default function MobileCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prevIndex) => (prevIndex + dir + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      paginate(-1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="md:hidden text-white w-full p-[16px] relative overflow-hidden mb-3">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full"
        >
          <div className=" w-full bg-[#222222] rounded-[16px] p-[25px]">
            <div className="w-full flex items-center justify-start gap-2">
              <p className="bg-[#4ADE80] w-[12px] h-[12px] rounded-[6px]"></p>
              <p className="text-[#999999]">Featured Project</p>
            </div>
            <p className="text-white font-bold text-[20px] mt-[16px] mb-[16px]">
              {projects[index].title}
            </p>
            <div className="flex justify-center items-center bg-green-400 rounded-[8px] w-full h-[192px] overflow-hidden">
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="object-cover w-full h-full rounded-[8px]"
              />
            </div>
            <p className="text-[#999999] mb-[16px] mt-[18px] text-[14px]">
              {projects[index].description}
            </p>
            <p className="text-[#999999] mb-[26px] text-[14px]">
              <span className="text-[#4ADE80] text-[14px] font-semibold">Technologies:</span>{" "}
              {projects[index].technologies}
            </p>
            <div className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] mb-[12px] w-full h-[52px] rounded-[12px] bg-gradient-to-l to-[#4ADE80] from-[#22C55E] text-black">
              View Live
            </div>
            <div className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] border border-[#999999] w-full h-[52px] rounded-[12px]">
              View Code
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
