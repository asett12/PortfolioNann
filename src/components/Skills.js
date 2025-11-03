"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-default w-max origin-center absolute 
        font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        xs:text-[10px] xs:py-1 xs:px-2 xs:rounded-full
      "
      style={{ whiteSpace: "nowrap" }}
    >
      {name}
    </motion.div>
  );
};

const SKILL_SETS = {
  digitalTools: {
    title: "Digital Tools",
    skills: [
      { name: "Slack", x: "-15vw", y: "8vw", mobile: { x: "-20vw", y: "13vw" } },
      { name: "Excel", x: "15vw", y: "8vw", mobile: { x: "20vw", y: "13vw" } },
      { name: "Canva", x: "-20vw", y: "0vw", mobile: { x: "-26vw", y: "0vw" } },
      { name: "Google Analytics", x: "20vw", y: "-8vw", mobile: { x: "26vw", y: "-15vw" } },
      { name: "Google Workspace", x: "-20vw", y: "-8vw", mobile: { x: "-26vw", y: "-15vw" } },
      { name: "Figma", x: "20vw", y: "0vw", mobile: { x: "26vw", y: "0vw" } },
      { name: "Meta Business Suite", x: "0vw", y: "12vw", mobile: { x: "0vw", y: "25vw" } },
      { name: "Capcut", x: "0vw", y: "-15vw", mobile: { x: "0vw", y: "-25vw" } },
    ],
  },
  languages: {
    title: "Languages",
    skills: [
      { name: "English", x: "-20vw", y: "0vw", mobile: { x: "-25vw", y: "0vw" } },
      { name: "Myanmar", x: "0vw", y: "-12vw", mobile: { x: "0vw", y: "-17vw" } },
      { name: "Thai", x: "20vw", y: "0vw", mobile: { x: "25vw", y: "0vw" } },
    ],
  },
  softSkills: {
    title: "Soft Skills",
    skills: [
      { name: "Teamwork & Collaboration", x: "0vw", y: "-14vw", mobile: { x: "0vw", y: "-22vw" } },
      { name: "Leadership", x: "-20vw", y: "-10vw", mobile: { x: "-28vw", y: "-12vw" } },
      { name: "Communication", x: "-22vw", y: "10vw", mobile: { x: "-28vw", y: "10vw" } },
      { name: "Time Management", x: "22vw", y: "10vw", mobile: { x: "28vw", y: "10vw" } },
      { name: "Event Planning", x: "0vw", y: "14vw", mobile: { x: "0vw", y: "22vw" } },
      { name: "Problem Solving", x: "20vw", y: "-10vw", mobile: { x: "28vw", y: "-12vw" } },
    ],
  },
  hardSkills: {
    title: "Hard Skills",
    skills: [
      { name: "Content Creation", x: "0vw", y: "-12vw", mobile: { x: "0vw", y: "-30vw" } },
      { name: "Reporting & Docs", x: "0vw", y: "12vw", mobile: { x: "0vw", y: "30vw" } },
      { name: "Market Research", x: "-20vw", y: "5vw", mobile: { x: "-25vw", y: "15vw" } },
      { name: "Digital Marketing", x: "20vw", y: "5vw", mobile: { x: "25vw", y: "15vw" } },
      { name: "Sales & Outreach", x: "20vw", y: "-5vw", mobile: { x: "25vw", y: "-15vw" } },
      { name: "Event Coordination", x: "-20vw", y: "-5vw", mobile: { x: "-25vw", y: "-15vw" } },
    ],
  },
};

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < breakpoint);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);
  return isMobile;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("digitalTools");
  const isMobile = useIsMobile();
  const currentSet = SKILL_SETS[activeCategory];

  return (
    <>
      <h2 className="font-bold text-7xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      {/* toggles */}
      <div className="flex items-center justify-center gap-4 mt-10 mb-6 flex-wrap px-4">
        {Object.entries(SKILL_SETS).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-5 py-2 rounded-full border transition-all duration-200 text-sm md:text-base
              ${
                activeCategory === key
                  // active
                  ? "bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-transparent"
                  // inactive
                  : "bg-white/80 text-dark border-gray-300 hover:border-gray-500 dark:bg-transparent dark:text-light dark:border-gray-500/40 dark:hover:border-light/80"
              }`}
          >
            {value.title}
          </button>
        ))}
      </div>

      {/* circles */}
      <div
        className="
          w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center 
          mb-64 md:mb-32 rounded-full
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
          sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
          lg:h-[80vh] sm:h-[60vh] xs:h-[54vh]
        "
      >
        <motion.div
          key={activeCategory}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="z-10 cursor-default flex rounded-full font-semibold px-6 py-7 shadow-dark
            bg-gradient-to-r from-[#3c2bc0] to-[#7b5cff] text-light lg:p-6 md:p-4 xs:text-[11px] xs:px-4 xs:py-2"
        >
          {currentSet.title}
        </motion.div>

        {currentSet.skills.map((skill) => {
          const useMobile = isMobile && skill.mobile;
          const x = useMobile ? skill.mobile.x : skill.x;
          const y = useMobile ? skill.mobile.y : skill.y;
          return <Skill key={skill.name} name={skill.name} x={x} y={y} />;
        })}
      </div>
    </>
  );
};

export default Skills;
