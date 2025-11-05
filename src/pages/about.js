import Layout from "@/components/Layout";
import Head from "next/head";
import SkeletonImage from "@/components/SkeletonImage";
import profile from "../../public/images/profile/Nann1.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
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
  return (
    <>
      <Head>
        <title>Nann's Portfolio</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Learning Never Stops 💡"
            className="mb-16 !text-7xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hi! I’m Nan Ohmar Wai, a fresh graduate International Business student at Rangsit University with a strong passion for event management, digital marketing, and community engagement. I’m highly motivated, detail-oriented, and thrive in dynamic environments where creativity meets organization.
                Over the past few years, I’ve gained hands-on experience in sales outreach, event planning, and promotional campaigns through internships and student projects. These experiences have strengthened my skills in strategic planning, project coordination, communication, and market analysis.
              </p>
              <p className="my-4 font-medium">
                Beyond academics, I’ve also participated in volunteer programs, leadership initiatives, and social impact projects, which have allowed me to develop a deeper understanding of teamwork, youth empowerment, and community engagement.
                I’m passionate about creating meaningful experiences and building connections through events, marketing, and creative projects. My goal is to continue growing as a marketing and event professional — combining business strategy with creativity to make a positive impact wherever I work.

              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <SkeletonImage
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                containerClassName="w-full rounded-2xl border-2 border-solid border-dark overflow-hidden"
                priority={true}
                src={profile}
                alt="Travis Lord"
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
                  <AnimatedNumberFramerMotion value={25} />+
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
                  <AnimatedNumberFramerMotion value={5000} />+
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

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
