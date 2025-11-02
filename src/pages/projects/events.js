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

const EVENTS = [
  {
    id: "itcma",
    title: "IT&CMA 2025",
    headline:
      "Incentive Travel & Conventions, Meetings Asia (IT&CMA) 2025 – Marketing Team Volunteer",
    tag: "Communication | Outreach | Event Management",
    overview:
      "IT&CMA (Incentive Travel & Conventions, Meetings Asia) is one of the world’s leading MICE (Meetings, Incentives, Conventions, and Exhibitions) events, bringing together industry leaders, corporate buyers, and tourism organizations from across the globe. As part of the Marketing Team, I supported event promotion, outreach, and client communication, contributing to the success of an international-scale business event.",
    bullets: [
      "Supported delegates and exhibitors in registration, communication, and networking sessions.",
      "Collaborated with team members and professionals to ensure smooth execution of marketing operations.",
    ],
    learning:
      "This experience deepened my understanding of event marketing, audience engagement, and cross-cultural communication. It also strengthened my teamwork and professionalism, inspiring me to pursue a career in event management and marketing.",
    image: proj1,
    links: [
      { href: "https://clay-theme.netlify.app", label: "Visit Demo", primary: true },
      { href: "https://github.com/lilxyzz/clay-theme", icon: "github" },
      {
        href: "https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn",
        icon: "dev",
      },
    ],
  },
  {
    id: "rsunival",
    title: "RSUnival 2024",
    headline: "RSUnival 2024 – Food Booth Experience",
    tag: "Sales | Customer Service | Marketing Strategies",
    overview:
      "During the RSUnival event, I gained hands-on sales and customer service experience by managing a food booth that featured Korean Kimbap (Day 1) and Mala Luk Chin Salad (Day 2). Both products were strategically selected based on current student food trends and sold out on both days.",
    bullets: [
      "Managed product pricing and real-time sales operations during peak hours.",
      "Engaged directly with customers to promote products and adapted strategies to maximize sales.",
    ],
    learning:
      "This experience strengthened my ability to analyze consumer behavior, communicate value, and work efficiently under pressure in a fast-paced environment — skills essential in both marketing and event management.",
    image: proj1,
    links: [
      { href: "https://clay-theme.netlify.app", label: "Visit Demo", primary: true },
      { href: "https://github.com/lilxyzz/clay-theme", icon: "github" },
      {
        href: "https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn",
        icon: "dev",
      },
    ],
  },
  {
    id: "pro-in-style",
    title: "Pro In Style Event 2024",
    headline: "“Pro In Style” Event – Photobooth Experience",
    tag: "Event Promotion | Campaign Planning",
    overview:
      "As part of the Photobooth Team at the “Pro In Style” event, I gained hands-on experience in event marketing and promotion strategy. Our team launched the campaign “Buy 1 Bubble Tea, Get 1 Polaroid Photo Free,” which effectively increased customer engagement and sales by merging product promotion with a fun interactive experience.",
    bullets: [
      "Collaborated on branding, pricing strategy, and on-site customer interaction.",
      "Helped design a visually appealing booth and campaign visuals to attract attendees.",
    ],
    learning:
      "This experience enhanced my understanding of audience targeting, experiential marketing, and campaign planning, while strengthening my communication, teamwork, and decision-making abilities in a fast-paced event setting.",
    image: proj1,
    links: [
      { href: "https://clay-theme.netlify.app", label: "Visit Demo", primary: true },
      { href: "https://github.com/lilxyzz/clay-theme", icon: "github" },
      {
        href: "https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn",
        icon: "dev",
      },
    ],
  },
];

function EventSlide({ event }) {
  return (
    <>
      {/* Desktop */}
      <section
        aria-labelledby={event.id}
        className="flex w-full flex-row gap-8 items-start mb-4 md:hidden"
      >
        {/* TEXT LEFT */}
        <article className="flex-1 flex flex-col gap-3 justify-start min-w-[260px]">
          <h2 className="text-lg lg:text-2xl font-bold leading-snug text-dark/80 dark:text-light/80">
            {event.headline}
          </h2>
          {event.tag && (
            <p className="text-sm lg:text-base font-semibold text-lightGreen dark:text-primaryDark">
              {event.tag}
            </p>
          )}
          <p className="text-sm lg:text-base leading-relaxed text-dark/80 dark:text-light/80">
            <b>Overview:</b> {event.overview}
          </p>
          {event.bullets?.length > 0 && (
            <div>
              <h3 className="mb-1 text-base lg:text-lg font-semibold text-dark/80 dark:text-light/80">
                Key Responsibilities
              </h3>
              <ul className="space-y-1 text-sm lg:text-base text-dark/80 dark:text-light/80">
                {event.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {event.learning && (
            <p className="text-sm lg:text-base leading-relaxed text-dark/80 dark:text-light/80">
              <b>Impact & Learning:</b> {event.learning}
            </p>
          )}
          {event.links?.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-1 lg:pt-2">
              {event.links.map((link) => {
                if (link.icon === "github")
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      aria-label="GitHub"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-dark/20 transition hover:bg-dark/5 dark:border-light/30 dark:hover:bg-light/10"
                    >
                      <GithubIcon />
                    </Link>
                  );
                if (link.icon === "dev")
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      aria-label="Dev.to"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-dark/20 transition hover:bg-dark/5 dark:border-light/30 dark:hover:bg-light/10"
                    >
                      <DevIcon />
                    </Link>
                  );
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className="rounded-lg bg-dark px-5 py-2 text-sm font-semibold tracking-wide text-light transition hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-transparent dark:hover:text-light dark:hover:border-light border border-dark dark:border-light"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}
        </article>

        {/* IMAGE RIGHT */}
        <div className="flex-[0_0_360px] max-w-[420px] relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark">
          <div className="pointer-events-none absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
          <figure className="relative">
            <Image
              className="h-auto w-full rounded-2xl"
              src={event.image}
              alt={event.title}
              sizes="(min-width: 768px) 35vw, 400px"
            />
          </figure>
        </div>
      </section>

      {/* Mobile: image top, text below */}
      <section
        aria-labelledby={event.id}
        className="hidden md:flex w-full flex-col gap-6 mb-6"
      >
        <div className="w-full relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark">
          <div className="pointer-events-none absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
          <figure className="relative">
            <Image
              className="h-auto w-full rounded-2xl"
              src={event.image}
              alt={event.title}
              sizes="100vw"
            />
          </figure>
        </div>

        <article className="flex flex-col gap-3">
          <h2 className="text-lg font-bold leading-snug text-dark/80 dark:text-light/80">
            {event.headline}
          </h2>
          {event.tag && (
            <p className="text-sm font-semibold text-lightGreen dark:text-primaryDark">
              {event.tag}
            </p>
          )}
          <p className="text-sm leading-relaxed text-dark/80 dark:text-light/80">
            <b>Overview:</b> {event.overview}
          </p>
          {event.bullets?.length > 0 && (
            <div>
              <h3 className="mb-1 text-base font-semibold text-dark/80 dark:text-light/80">
                Key Responsibilities
              </h3>
              <ul className="space-y-1 text-sm text-dark/80 dark:text-light/80">
                {event.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {event.learning && (
            <p className="text-sm leading-relaxed text-dark/80 dark:text-light/80">
              <b>Impact & Learning:</b> {event.learning}
            </p>
          )}
        </article>
      </section>
    </>
  );
}

/* SLIDER */
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

function EventSlider({ items }) {
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
            <EventSlide event={items[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            className="h-10 w-10 rounded-full border border-dark/30 dark:border-light/30 flex items-center justify-center text-lg hover:bg-dark/5 dark:hover:bg-light/10"
            aria-label="Previous event"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="h-10 w-10 rounded-full border border-dark/30 dark:border-light/30 flex items-center justify-center text-lg hover:bg-dark/5 dark:hover:bg-light/10"
            aria-label="Next event"
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

export default function EventProjectsPage() {
  return (
    <>
      <Head>
        <title>Event & Marketing Campaigns | Nann</title>
        <meta
          name="description"
          content="Highlights from IT&CMA 2025, RSUnival 2024, and Pro In Style 2024 – event marketing and volunteer projects by Nann."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Event Marketing & Campaigns"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-10"
          />
          <p className="mb-10 mx-auto max-w-3xl text-base text-dark/70 dark:text-light/70">
            Explore my hands-on experience in event marketing and promotional campaigns, spanning international conventions and university events.
          </p>
          <EventSlider items={EVENTS} />
        </Layout>
      </main>
    </>
  );
}
