import AnimatedText from "@/components/AnimatedText";
import { LinkedInIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

import proj1 from "/public/images/projects/clay-theme.png";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      className="relative"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
        {title}
      </h2>
      <FramerImage
        src={img}
        ref={imgRef}
        alt={title}
        className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{
          x: x,
          y: y,
        }}
        sizes="(max-width: 768px) 60vw,
                (max-width: 1200px) 40vw,
                33vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, linkedIn, tools }) => {
  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl border
      border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark
      lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark
         dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%]"
      />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={1200}              // ✅ required
          height={800}              // ✅ required
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
          priority
        />

      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>

        {summary && (
          <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
        )}

        <div className="mt-2 flex items-center">
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              className="w-10"
              aria-label="LinkedIn link"
            >
              <LinkedInIcon />
            </Link>
          )}
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base
            border-2 border-solid text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
          >
            View Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools }) => {
  return (
    <article
      className="relative flex h-full w-full flex-col items-center 
      justify-start rounded-2xl border border-solid border-dark bg-light 
      p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark
         dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%]"
      />

      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
          priority
        />
      </Link>

      {/* make this flex-1 so it fills the remaining height */}
      <div className="mt-4 flex w-full flex-1 flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        {/* mt-auto pushes the button to the bottom of the card */}
        <Link
          href={link}
          className="mt-auto rounded-lg bg-dark px-6 py-2 text-lg font-semibold
          sm:px-4 sm:text-base border-2 border-solid text-light hover:border-dark hover:bg-transparent hover:text-dark 
          dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
        >
          View Projects
        </Link>
      </div>
    </article>
  );
};


export default function Projects() {
  return (
    <>
      <Head>
        <title>Nann's Portfolio</title>
        <meta
          name="description"
          content="Explore Nann’s event, academic, and marketing projects — all showcasing creativity, strategy, and teamwork."
        />
      </Head>

      <TransitionEffect />
      <main className="mb-5 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Every Challenge is a Chance to Grow✨"
            className="mb-16 !text-7xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          {/* ---- Main three categories ---- */}
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Event & Marketing"
                tools="Sales | Event Marketing | Customer Engagement"
                title="Event Projects"
                img="/images/events/it&cma/mainEvent.png"
                date="2023"
                link="/projects/events"          
                linkedIn="https://www.linkedin.com/in/nanohnmarwai109/"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 flex">
              <Project
                type="Research & Visual Designs"
                tools="UI/UX Designs | Innovation | Research"
                title="Academic & Innovation Projects"
                img="/images/Academic/China-ASEAN/mainAcademic.png"
                date="2023"
                link="/projects/academic"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 flex">
              <Project
                type="Campaign Planning & Marketing"
                tools="Project Management | Communication"
                title="Marketing Campaign Projects"
                img="/images/MarketingCampaign/mainMarketing.png"
                date="2023"
                link="/projects/marketing"
              />
            </div>

          </div>

          {/* ---- Footer section ---- */}
          <div>
            <ul className="flex flex-col items-center relative pt-16">
            </ul>

            <div className="mt-10 flex items-center justify-between gap-3 grid-cols-2">
              <Link
                href="/articles/"
                className="flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
                capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
                dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
                md:p-2 md:px-4 md:text-base"
              >
                View Experience
              </Link>

              <Link
                href="/about/"
                className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                md:p-2 md:px-4 md:text-base"
              >
                Get To Know Me
              </Link>
            </div>

            <HireMe2 />
        </div>

        </Layout>
      </main>
    </>
  );
}
