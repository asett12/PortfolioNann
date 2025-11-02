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

const EXPERIENCES = [
  {
    id: "save4paws",
    title: "Save4Paws Fundraising Campaign",
    headline: "Save4Paws Fundraising Campaign – Volunteer",
    tag: "Fundraising | Outreach | Sales & Marketing",
    meta: "Cause: Home for Handicapped Animals Foundation",
    overview:
      "As part of the Save 4 Paws campaign, I gained hands-on sales and fundraising experience by helping organize a social-impact initiative that combined business strategy with compassion. Our team sold homemade Tanghulu and Kimbap to raise donations for the foundation.",
    bullets: [
      "Managed pricing, product display, and customer engagement during sales operations.",
      "Collaborated on promotion and booth management to attract buyers and communicate our cause effectively.",
      "Helped the team raise over 4,500 THB, surpassing our initial goal.",
    ],
    learning:
      "This experience strengthened my sales communication, teamwork, and adaptability, while deepening my ability to organize purpose-driven campaigns that connect people through meaningful causes.",
    image: proj1,
    links: [
      { href: "https://clay-theme.netlify.app", label: "View Related Work", primary: true },
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
      "During the RSUnival event, I managed a food booth that featured Korean Kimbap (Day 1) and Mala Luk Chin Salad (Day 2). Both products were selected based on current student food trends and sold out on both days.",
    bullets: [
      "Managed product pricing and real-time sales during peak hours.",
      "Engaged directly with customers to promote products and adapted strategies to maximize sales.",
    ],
    learning:
      "This experience strengthened my ability to analyze consumer behavior, communicate value, and work efficiently under pressure in a fast-paced environment.",
    image: proj1,
    links: [
      { href: "https://clay-theme.netlify.app", label: "View Related Work", primary: true },
    ],
  },
  {
    id: "pro-in-style",
    title: "“Pro In Style” Event 2024",
    headline: "“Pro In Style” Event – Photobooth Experience",
    tag: "Event Promotion | Campaign Planning",
    overview:
      "As part of the Photobooth Team, I worked on a campaign — “Buy 1 Bubble Tea, Get 1 Polaroid Photo Free” — to increase engagement and sales by combining product promotion with an interactive experience.",
    bullets: [
      "Collaborated on branding, pricing strategy, and on-site customer interaction.",
      "Helped design a visually appealing booth and campaign visuals to attract attendees.",
    ],
    learning:
      "This experience improved my understanding of experiential marketing, audience targeting, and fast decision-making in an event environment.",
    image: proj1,
    links: [
      { href: "https://clay-theme.netlify.app", label: "View Related Work", primary: true },
    ],
  },
];

function ExperienceSlide({ exp }) {
  return (
    <>
      {/* DESKTOP (default) */}
      <section
        aria-labelledby={exp.id}
        className="flex w-full flex-row gap-8 items-start mb-4 md:hidden"
      >
        {/* TEXT LEFT */}
        <article
          id={exp.id}
          className="flex-1 flex flex-col gap-3 justify-start min-w-[260px]"
        >
          <h2 className="text-lg lg:text-2xl font-bold leading-snug text-dark/80 dark:text-light/80">
            {exp.headline}
          </h2>

          {exp.tag && (
            <p className="text-sm lg:text-base font-semibold text-lightGreen dark:text-primaryDark">
              {exp.tag}
            </p>
          )}

          {exp.meta && (
            <p className="text-xs lg:text-sm text-dark/60 dark:text-light/60">
              <b>{exp.meta}</b>
            </p>
          )}

          <p className="text-sm lg:text-base leading-relaxed text-dark/80 dark:text-light/80">
            <b>Overview:</b> {exp.overview}
          </p>

          {exp.bullets?.length > 0 && (
            <div>
              <h3 className="mb-1 text-base lg:text-lg font-semibold text-dark/80 dark:text-light/80">
                Key Contributions
              </h3>
              <ul className="space-y-1 text-sm lg:text-base text-dark/80 dark:text-light/80">
                {exp.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {exp.learning && (
            <p className="text-sm lg:text-base leading-relaxed text-dark/80 dark:text-light/80">
              <b>Impact &amp; Learning:</b> {exp.learning}
            </p>
          )}

          {exp.links?.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-1 lg:pt-2">
              {exp.links.map((link) => {
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
              src={exp.image}
              alt={exp.title}
              sizes="(min-width: 768px) 35vw, 400px"
            />
            <figcaption className="sr-only">{exp.title}</figcaption>
          </figure>
        </div>
      </section>

      {/* MOBILE → image first, text below */}
      <section
        aria-labelledby={exp.id}
        className="hidden md:flex w-full flex-col gap-6 mb-6"
      >
        {/* IMAGE ABOVE */}
        <div className="w-full relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark">
          <div className="pointer-events-none absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
          <figure className="relative">
            <Image
              className="h-auto w-full rounded-2xl"
              src={exp.image}
              alt={exp.title}
              sizes="100vw"
            />
            <figcaption className="sr-only">{exp.title}</figcaption>
          </figure>
        </div>

        {/* TEXT BELOW */}
        <article className="flex flex-col gap-3">
          <h2 className="text-lg font-bold leading-snug text-dark/80 dark:text-light/80">
            {exp.headline}
          </h2>

          {exp.tag && (
            <p className="text-sm font-semibold text-lightGreen dark:text-primaryDark">
              {exp.tag}
            </p>
          )}

          {exp.meta && (
            <p className="text-xs text-dark/60 dark:text-light/60">
              <b>{exp.meta}</b>
            </p>
          )}

          <p className="text-sm leading-relaxed text-dark/80 dark:text-light/80">
            <b>Overview:</b> {exp.overview}
          </p>

          {exp.bullets?.length > 0 && (
            <div>
              <h3 className="mb-1 text-base font-semibold text-dark/80 dark:text-light/80">
                Key Contributions
              </h3>
              <ul className="space-y-1 text-sm text-dark/80 dark:text-light/80">
                {exp.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {exp.learning && (
            <p className="text-sm leading-relaxed text-dark/80 dark:text-light/80">
              <b>Impact &amp; Learning:</b> {exp.learning}
            </p>
          )}
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

function ExperienceSlider({ items }) {
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
            <ExperienceSlide exp={items[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            className="h-10 w-10 rounded-full border border-dark/30 dark:border-light/30 flex items-center justify-center text-lg hover:bg-dark/5 dark:hover:bg-light/10"
            aria-label="Previous experience"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="h-10 w-10 rounded-full border border-dark/30 dark:border-light/30 flex items-center justify-center text-lg hover:bg-dark/5 dark:hover:bg-light/10"
            aria-label="Next experience"
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

export default function MarketingExperiencesPage() {
  return (
    <>
      <Head>
        <title>Event & Marketing Activities | Nann</title>
        <meta
          name="description"
          content="Volunteer, fundraising, and event marketing experiences by Nann — Save4Paws, RSUnival 2024, and Pro In Style 2024."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Marketing, Events & Fundraising"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-10"
          />
          <p className="mb-10 mx-auto max-w-3xl text-base text-dark/70 dark:text-light/70">
            Below are some of the on-ground projects and campaigns I’ve joined. Use the arrows or your keyboard to browse.
          </p>
          <ExperienceSlider items={EXPERIENCES} />
        </Layout>
      </main>
    </>
  );
}
