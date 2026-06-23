import Layout from "@/components/Layout";
import Head from "next/head";
import SkeletonImage from "@/components/SkeletonImage";
import profile from "../../public/images/profile/Nann1.png";
import { useInView, useMotionValue, useSpring, motion,  AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react"; 
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CertificatesSection from "@/components/CertificatesSection";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  const sections = [
    { id: "bio", label: "Biography" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "recommendation", label: "Recommendation" },
    { id: "experience", label: "Internship" },
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDownEnough = window.scrollY > 400;
      setShowScrollTop(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Nann&apos;s Portfolio</title>
        <meta
          name="description"
          content="NexTemp, An open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Learning Never Stops 💡"
            className="mb-8 !text-7xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />

          {/* On-page navigation */}
          <nav
            className="
              mb-10 
              text-sm font-medium text-dark/60 dark:text-light/60
              flex flex-wrap items-center gap-2
            "
          >
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="rounded-full border border-dark/25 px-4 py-1.5
                           hover:border-dark hover:text-dark
                           dark:border-light/25 dark:hover:border-light dark:hover:text-light
                           transition-colors text-center"
              >
                {sec.label}
              </a>
            ))}
          </nav>

          {/* BIOGRAPHY + stats */}
          <section id="bio" className="scroll-mt-28">
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              <div
                className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
                md:col-span-8"
              >
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  BIOGRAPHY
                </h2>
                <p className="font-medium ">
                  Hi! I'm Nan Ohmar Wai, an International Business graduate from Rangsit University with a strong passion 
                  for social media management, content creation, and digital marketing. Throughout my professional experiences,
                  I have managed social media platforms, developed content strategies, 
                  designed graphic visuals, and edited short-form videos for education, wellness, and mental health organizations.
                
                </p>
                <p className="my-4 font-medium">
                  I am a creative, detail-oriented, and adaptable professional who enjoys staying up to date with digital trends and continuously learning 
                  new tools and techniques. My goal is to continue growing in content marketing and social media management roles 
                  where I can combine creativity, strategy, and design to help brands increase their online presence 
                  and engage their communities effectively.
                </p>
              </div>

              <div
                className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
                bg-light p-8 dark:border-light dark:bg-dark
                xl:col-span-4 md:col-span-8 md:order-1"
              >
                <div
                  className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl 
                    bg-dark dark:bg-light"
                />
                <SkeletonImage
                  className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                  containerClassName="w-full rounded-2xl border-2 border-solid border-dark overflow-hidden"
                  priority={true}
                  src={profile}
                  alt="Nan Ohmar Wai"
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                />
              </div>

              <div
                className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
                xl:items-center md:order-3"
              >
                {/* Events & Workshops */}
                <div className="flex flex-col items-end justify-center text-right">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumberFramerMotion value={10} />+
                  </span>
                  <h3
                    className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                    text-right md:text-lg sm:text-base xs:text-sm"
                  >
                    Events & Workshops Supported
                  </h3>
                </div>

                {/* Social Media Posts */}
                <div className="flex flex-col items-end justify-center text-right">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumberFramerMotion value={100} />+
                  </span>
                  <h3
                    className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                    text-right md:text-lg sm:text-base xs:text-sm"
                  >
                    Social Media Posts Designed & Published
                  </h3>
                </div>

                {/* Combined Reach */}
                <div className="flex flex-col items-end justify-center text-right">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumberFramerMotion value={100} />K+
                  </span>
                  <h3
                    className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                    text-right md:text-lg sm:text-base xs:text-sm"
                  >
                    Combined Social Media Reached
                  </h3>
                </div>
              </div>

              <HireMe2 />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mt-24 scroll-mt-28">
            <Skills />
          </section>

          {/* EDUCATION */}
          <section id="education" className="mt-24 scroll-mt-28">
            <Education />
          </section>

          {/* CERTIFICATES */}
          <section id="recommendation" className="mt-24 scroll-mt-28">
            <CertificatesSection />
          </section>

          {/* INTERNSHIP / EXPERIENCE */}
          <section id="experience" className="mt-24 scroll-mt-28">
            <Experience />
          </section>
        </Layout>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              type="button"
              onClick={handleScrollTop}
              key="scroll-top-btn"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                fixed bottom-6 right-6 z-50
                rounded-full px-4 py-3
                bg-dark text-light shadow-lg
                dark:bg-light dark:text-dark
                text-sm font-medium
                hover:scale-105 hover:shadow-xl
                transition-transform transition-shadow
              "
              aria-label="Scroll back to top"
            >
              ↑ Back to top
            </motion.button>
          )}
        </AnimatePresence>

      </main>
    </>
  );
}
