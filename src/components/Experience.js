import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <br/>
          <a
            className="text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Internship
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full 
            origin-top shadow-3xl 
            bg-gradient-to-b from-[#7b5cff] to-[#3c2bc0]
            dark:bg-gradient-to-b dark:from-[#3c2bc0] dark:to-[#7b5cff] dark:shadow-[0_0_10px_#7b5cff]"
          style={{ scaleY: scrollYProgress }}
        />


        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Sales & Outreach Intern"
            company="Buddy Up Company Limited"
            time="May - August (2025)"
            address="Bangkok 10600"
            companyLink="https://www.linkedin.com/company/megoodyth/"
            work="From May to August 2025, I completed my 4 months internship as a Sales & Outreach Intern at ME GOODY Space (Buddy Up Co., Ltd.) near ICONSIAM, Bangkok. I managed event promotions, designed marketing materials, and reached out to potential partners and collaborators. I also contributed social media marketing by creating content calendars, scheduling posts, and promoting space rentals. “ Additionally, I assisted with market research and event planning, which helped strengthen ME GOODY’s brand presence and community connections. This experience improved my communication, digital marketing, and client relation, while also helping me to grow personally and professionally in a supportive, and creative environment ."
          />

          <Details
            position="Marketing Intern"
            company="aboveA"
            time="March - April (2025)"
            address="Remote"
            companyLink="https://www.linkedin.com/company/abovea-agency/"
            work="During my 2-month internship as a Marketing Intern at aboveA Agency, I was actively involved in developing and executing creative marketing initiatives. 
                  My responsibilities included creating TikTok videos and writing engaging content to strengthen the brand’s online presence. I also conducted market research 
                  to identify target audiences, analyze consumer behavior, and support campaign planning. In addition, I participated in brainstorming sessions with the marketing team, 
                  where I contributed ideas that helped shape innovative social media strategies and promotional campaigns, enhancing both engagement and brand visibility."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Experience
        </Link>
      </div>
    </div>
  );
};

export default Experience;
