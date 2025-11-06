"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    id: "uop",
    period: "April 2024 – Present",
    school: "Business Administration",
    degree: "Bachelor of Arts",
    location: "University of the People (Online)",
  },
  {
    id: "rangsit",
    period: "June 2022 – Decemer 2025",
    school: "International Business",
    degree: "Bachelor of Business Administration",
    location: "Rangsit University",
  },
  {
    id: "yangon",
    period: "December 2019 – March 2020",
    school: "International Relations",
    degree: "Bachelor of Arts",
    location: "University of Yangon",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Education() {
  return (
    <section className="mt-16 mb-16">
      {/* Section Heading */}
      <div className="w-full text-center">
        <h2 className="text-6xl font-bold uppercase text-dark dark:text-light sm:text-5xl xs:text-4xl">
          Education
        </h2>
      </div>

      <motion.ul
        className="relative mt-10 grid gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EDUCATION.map((item) => (
          <motion.li key={item.id} variants={itemVariants} className="relative">
            <div
              className="relative rounded-2xl border border-dark/10 bg-light/95 p-6 shadow-sm
                         dark:border-light/15 dark:bg-dark/90 dark:shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            >
              <div
                className="pointer-events-none absolute -inset-[2px] -z-10 rounded-[1.7rem] bg-gradient-to-br 
                           from-dark/5 via-dark/10 to-dark/0 dark:from-light/10 dark:via-light/5 dark:to-light/0"
              />

              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dark/60 dark:text-light/60">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-dark dark:text-light">
                    {item.school}
                  </h3>
                  <p className="text-[15px] font-medium text-dark/70 dark:text-light/70">
                    {item.degree}
                  </p>
                </div>

                <p className="text-sm font-medium text-dark/60 dark:text-light/60 md:text-right">
                  {item.location}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
