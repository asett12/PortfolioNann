import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { PROJECT_CATEGORIES } from "@/data/portfolioData";
import SkeletonImage from "@/components/SkeletonImage";
import Link from "next/link";
import { LinkedInIcon, MediumIcon } from "@/components/Icons";

function ArrowLeftIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function Slide({ item, slug }) {
  return (
    <section
      className="
        flex w-full items-start gap-8 mb-4
        flex-row-reverse
        md:flex-col
      "
    >
      <div
        className="
          flex-[0_0_360px] max-w-[420px] relative
          rounded-2xl border-2 border-solid border-dark bg-light p-4
          dark:border-light dark:bg-dark
          md:w-full md:max-w-none
        "
      >
        <div className="pointer-events-none absolute top-0 -left-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-bl-3xl bg-dark dark:bg-light" />
        <SkeletonImage
          src={item.image}
          alt={item.title}
          className="h-auto w-full rounded-2xl object-cover"
          sizes="(min-width: 1024px) 30vw, 400px"
          width={800}
          height={500}
          containerClassName="w-full rounded-2xl overflow-hidden"
        />
      </div>

      <article className="flex-1 flex flex-col gap-3 min-w-[280px] md:w-full">
        <h2 className="text-2xl font-bold text-dark/80 dark:text-light/80 md:text-xl">
          {item.headline || item.title}
        </h2>

        {item.tag ? (
          <p className="text-sm font-semibold text-lightGreen dark:text-primaryDark">
            {item.tag}
          </p>
        ) : null}

        {item.overview ? (
          <p className="text-sm leading-relaxed text-dark/80 dark:text-light/80">
            <b>Overview:</b> {item.overview}
          </p>
        ) : null}

        {item.body ? (
          <div
            className="text-sm leading-relaxed text-dark/80 dark:text-light/80 space-y-2"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        ) : null}

        {item.role ? (
          <div
            className="text-sm leading-relaxed text-dark/80 dark:text-light/80 space-y-2"
            dangerouslySetInnerHTML={{ __html: item.role }}
          />
        ) : null}

        {item.impact ? (
          <div
            className="text-sm leading-relaxed text-dark/80 dark:text-light/80 space-y-2"
            dangerouslySetInnerHTML={{ __html: item.impact }}
          />
        ) : null}

        {item.bullets?.length ? (
          <div>
            <h3 className="mb-1 text-base font-semibold">Key Highlights</h3>
            <ul className="space-y-1 text-sm text-dark/80 dark:text-light/80">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {item.learning ? (
          <p className="text-sm leading-relaxed text-dark/80 dark:text-light/80">
            <b>Impact &amp; Learning:</b> {item.learning}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={`/projects/${slug}/${item.id}`}
            className="rounded-lg bg-dark px-5 py-2 text-sm font-semibold text-light dark:bg-light dark:text-dark border border-dark dark:border-light hover:bg-transparent hover:text-dark dark:hover:bg-transparent dark:hover:text-light transition-all duration-200"
          >
            View full project
          </Link>

          {item.links?.length
            ? item.links.map((link) => {
                if (link.icon === "linkedIn")
                  return (
                    <Link key={link.href} href={link.href} target="_blank" className="w-9">
                      <LinkedInIcon />
                    </Link>
                  );
                if (link.icon === "medium")
                  return (
                    <Link key={link.href} href={link.href} target="_blank" className="w-9">
                      <MediumIcon />
                    </Link>
                  );
                if (link.icon === "linkedIn")
                  return (
                    <Link key={link.href} href={link.href} target="_blank" className="w-9">
                      <LinkedInIcon />
                    </Link>
                  );
                return null;
              })
            : null}
        </div>
      </article>
    </section>
  );
}

function Slider({ items, slug }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (next) => {
      const total = items.length;
      const safe = (next + total) % total;
      setDirection(next > index ? 1 : -1);
      setIndex(safe);
    },
    [index, items.length]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return (
    <div className="relative w-full pb-10">
      <div className="relative min-h-[520px] md:min-h-[580px]">
        <div className="relative flex items-center justify-center h-full">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={items[index].id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <Slide item={items[index]} slug={slug} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        className="
          absolute bottom-10 md:bottom-[-20px] left-0 right-0
          flex items-center justify-between gap-4
        "
      >
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            className="h-10 w-10 rounded-full border border-dark/20 dark:border-light/20 flex items-center justify-center text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition"
            aria-label="Previous project"
            type="button"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="h-10 w-10 rounded-full border border-dark/20 dark:border-light/20 flex items-center justify-center text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition"
            aria-label="Next project"
            type="button"
          >
            →
          </button>
        </div>

        <div className="flex gap-2">
          {items.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={item.id}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  active
                    ? "w-7 bg-dark dark:bg-light"
                    : "w-2.5 bg-dark/20 dark:bg-light/20 hover:bg-dark/40 dark:hover:bg-light/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                type="button"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCategoryPage({ category, slug }) {
  if (!category) return <p>Category not found.</p>;

  return (
    <>
      <Head>
        <title>{category.title} | Nann</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-[30px]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-6 text-dark dark:text-light 
                       hover:text-lightGreen dark:hover:text-primaryDark hover:underline
                       transition-all duration-200"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Projects
          </Link>

          <AnimatedText
            text={category.title}
            className="mb-8 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl"
          />
          <p className="mb-10 mx-auto max-w-3xl text-center text-dark/70 dark:text-light/70">
            {category.description}
          </p>
          <Slider items={category.items} slug={slug} />
        </Layout>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = Object.keys(PROJECT_CATEGORIES);
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = PROJECT_CATEGORIES[params.slug] || null;
  return { props: { category, slug: params.slug } };
}
