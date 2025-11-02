import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon, DevIcon } from "@/components/Icons";
import proj1 from "/public/images/projects/clay-theme.png";

const COMPETITIONS = [
  {
    id: "china-asean",
    heading: "China-ASEAN Innovation Quest (2025)",
    title: "China-ASEAN Innovation Quest 2025 - FloodNavi AI Assistance Platform",
    tag: "Research Analysis | Visual Designs",
    body: (
      <>
        <p className="">
          <b>Competition: </b> China-ASEAN Innovation Quest 2025
          <br />
          (Sunway University, Malaysia)
          <br />
          <br />
          <b> Team:</b> InnoTrio (Rangsit University)
          <br />
          <br />
          <b>Achievement:</b> Top 14 out of 58 Teams
          <br />
          <br />
          <b>Concept:</b> FloodNavi is an AI-powered flood alert and assistance platform designed to
          help communities in Southeast Asia prepare for and respond to floods. It integrates
          real-time data, community reporting, disaster resource hub and offline functionality to
          provide life-saving alerts even in low-connectivity areas.
        </p>
      </>
    ),
    role: (
      <>
        <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
          <b>My Role</b>
          <br />
          • Designed pitch visuals and assisted with research on AI and LoRa integration
          <br />
          • Contributed to sustainability, marketing, and scalability analysis
        </h4>
      </>
    ),
    impact: (
      <p className="my-4">
        <b>Impact:</b> FloodNavi aims to strengthen community resilience and support SDGs 13, 11,
        and 3 — Climate Action, Sustainable Cities, and Good Health & Well-being. The project
        showcases how AI and IoT can empower flood-prone communities with accessible, real-time
        solutions.
      </p>
    ),
    links: [
      {
        href: "https://clay-theme.netlify.app",
        label: "Visit Demo",
        primary: true,
      },
      {
        href: "https://github.com/lilxyzz/clay-theme",
        icon: "github",
      },
      {
        href: "https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn",
        icon: "dev",
      },
    ],
    image: proj1,
  },
  {
    id: "rsu-pitch",
    heading: "Rangsit Business Pitch Competition EP.1 (2024)",
    title: "Rangsit Business Pitch Competition EP.1 (2024) - TRUE MONEY Wallet App",
    tag: "UI/UX Designs | Marketing Strategies",
    body: (
      <>
        <p className="">
          <b>Competition: </b> Rangsit Business Pitch Competition EP.1 (2024)
          <br />
          (Rangsit University, Thailand)
          <br />
          <br />
          <b>Achievement:</b> 2nd Runner-Up
          <br />
          <br />
          <b>Concept:</b> Our team reimagined TrueMoney Wallet as an essential lifestyle app for
          students by integrating new features of Smart Budgeting Tools, Academic &amp; Campus
          Updates, GPS-Based Recommendations, Weather &amp; Location Widgets and Inclusive Access for
          international students.
        </p>
      </>
    ),
    role: (
      <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
        <b>My Role</b>
        <br />
        • Concept ideation &amp; feature design (UI/UX wireframes)
        <br />
        • Market research and user-journey analysis
      </h4>
    ),
    impact: (
      <p className="my-4">
        <b>Impact</b> Our proposal aimed to boost usability, inclusivity, and brand loyalty among
        Gen Z users, positioning TrueMoney Wallet as a daily companion for student life. The project
        enhanced my marketing strategy, UX design, and pitching skills through a real-world
        innovation challenge.
      </p>
    ),
    links: [
      {
        href: "https://clay-theme.netlify.app",
        label: "Visit Demo",
        primary: true,
      },
      {
        href: "https://github.com/lilxyzz/clay-theme",
        icon: "github",
      },
      {
        href: "https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn",
        icon: "dev",
      },
    ],
    image: proj1,
  },
  {
    id: "loreal",
    heading: "L’Oréal Brandstorm Competition (2024)",
    title: "L’Oréal Brandstorm Competition (2024) - CHROMA App Prototype",
    tag: "UI/UX Designs | Innovation",
    body: (
      <>
        <p className="">
          <b>Competition: </b> L’Oréal Brandstorm Competition (2024)
          <br />
          <br />
          <b>Objective: </b> To design a tech-driven, sustainable hair-coloring solution that
          redefines both professional salon and at-home experiences for L’Oréal’s Professional
          Products Division.
          <br />
          <br />
          <b>Concept:</b> CHROMA is a smart hybrid coloring kit that personalizes hair color through
          AI analysis, offering vibrant results while protecting hair health and the planet.
        </p>
      </>
    ),
    role: (
      <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
        <b>My Role</b>
        <br />
        • Co-developed concept &amp; marketing strategy
        <br />
        • Prepared script for pitching and video narration
        <br />
        • Designed presentation visuals &amp; app prototypes (UI/UX wireframes)
      </h4>
    ),
    impact: (
      <p className="my-4">
        <b>Impact:</b> A creative beauty-tech concept aligning with L’Oréal’s “Beauty for All” and
        “For the Future” missions — making hair innovation more inclusive, tech-enabled, and
        sustainable.
      </p>
    ),
    links: [
      {
        href: "https://clay-theme.netlify.app",
        label: "Visit Demo",
        primary: true,
      },
      {
        href: "https://github.com/lilxyzz/clay-theme",
        icon: "github",
      },
      {
        href: "https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn",
        icon: "dev",
      },
    ],
    image: proj1,
  },
];

function CompetitionSlide({ item }) {
  return (
    <>
      {/* desktop / large */}
      <section
        aria-labelledby={item.id}
        className="flex w-full flex-row gap-8 items-start mb-4 md:hidden"
      >
        {/* TEXT LEFT */}
        <article className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[260px]">
          <h2 className="mb-2 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
            {item.title}
          </h2>
          {item.tag ? (
            <h3 className="mb-1 text-lg font-bold text-lightGreen dark:text-primaryDark">
              {item.tag}
            </h3>
          ) : null}

          {/* original body */}
          {item.body}

          {/* original role */}
          {item.role}

          {/* original impact */}
          {item.impact}

          {/* original links */}
          {item.links?.length ? (
            <div className="mt-2 flex items-center gap-4 sm:gap-8">
              {item.links.map((link) => {
                if (link.icon === "github") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className="w-10"
                      aria-label="github link"
                    >
                      <GithubIcon />
                    </Link>
                  );
                }
                if (link.icon === "dev") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className="w-10"
                      aria-label="github link"
                    >
                      <DevIcon />
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base border-2 border-solid bg-dark capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                    aria-label="Visit Theme Demo"
                    href={link.href}
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </article>

        {/* IMAGE RIGHT */}
        <div className="relative flex-[0_0_360px] max-w-[420px] h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark">
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
          <Image
            className="h-auto w-full rounded-2xl"
            src={item.image}
            alt={item.title}
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
            priority
          />
        </div>
      </section>

      {/* mobile — image first, text after */}
      <section
        aria-labelledby={item.id}
        className="hidden md:flex w-full flex-col gap-6 mb-6"
      >
        {/* image */}
        <div className="relative w-full rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark">
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
          <Image
            className="h-auto w-full rounded-2xl"
            src={item.image}
            alt={item.title}
            sizes="100vw"
            priority
          />
        </div>

        {/* text */}
        <article className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
            {item.title}
          </h2>
          {item.tag ? (
            <h3 className="text-lg font-bold text-lightGreen dark:text-primaryDark">
              {item.tag}
            </h3>
          ) : null}

          {item.body}
          {item.role}
          {item.impact}

          {item.links?.length ? (
            <div className="mt-2 flex items-center gap-4 sm:gap-8">
              {item.links.map((link) => {
                if (link.icon === "github") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className="w-10"
                      aria-label="github link"
                    >
                      <GithubIcon />
                    </Link>
                  );
                }
                if (link.icon === "dev") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className="w-10"
                      aria-label="github link"
                    >
                      <DevIcon />
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base border-2 border-solid bg-dark capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                    aria-label="Visit Theme Demo"
                    href={link.href}
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </article>
      </section>
    </>
  );
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    position: "absolute",
  }),
  center: { x: 0, opacity: 1, position: "relative" },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    position: "absolute",
  }),
};

function CompetitionSlider({ items }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (next) => {
      const total = items.length;
      const safeNext = (next + total) % total;
      setDirection(next > index ? 1 : -1);
      setIndex(safeNext);
    },
    [index, items.length]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return (
    <div className="relative w-full">
      <div className="relative flex items-center justify-center">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={items[index].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <CompetitionSlide item={items[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            className="h-10 w-10 rounded-full border border-dark/30 dark:border-light/30 flex items-center justify-center text-lg hover:bg-dark/5 dark:hover:bg-light/10"
            aria-label="Previous competition"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="h-10 w-10 rounded-full border border-dark/30 dark:border-light/30 flex items-center justify-center text-lg hover:bg-dark/5 dark:hover:bg-light/10"
            aria-label="Next competition"
          >
            →
          </button>
        </div>
        <div className="flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-dark dark:bg-light" : "w-2.5 bg-dark/25 dark:bg-light/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// page wrapper — kept Head text
export default function About() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://travislord.xyz/projects/clay-gatsby-theme"
        ></link>
        <title>Nann Theme | Academic & Innovation Projects | By Asett</title>
        <meta
          name="description"
          content="I am thrilled to share Clay Theme with the web development community! I have recently launched Clay Theme, a cutting-edge Gatsby Framework Template."
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Academic & Innovation Projects"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-10"
          />
          <p className="mb-10 mx-auto max-w-3xl text-base text-dark/70 dark:text-light/70">
            Highlights from international competitions, business pitch challenges, and beauty-tech
            innovation projects.
          </p>

          <CompetitionSlider items={COMPETITIONS} />
        </Layout>
      </main>
    </>
  );
}
