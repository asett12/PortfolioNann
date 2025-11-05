import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/Nann.png";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nann's Portfolio</title>
        <meta
          name="description"
          content="Next Portfolio, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-10">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            {/* left image */}
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit pb-10">
              <div
                className="relative h-[450px] w-[450px] overflow-hidden rounded-2xl shadow-xl 
                          hover:shadow-2xl transition-all duration-500 ease-out transform 
                          hover:-translate-y-2 hover:scale-[1.02] border border-gray-700/20 
                          bg-gradient-to-b from-gray-900/40 to-gray-800/10 backdrop-blur-sm"
              >
                <Image
                  priority
                  src={profilePic}
                  alt="image"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 450px, 50vw"
                />
              </div>
            </div>



            {/* text side */}
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hey, I’m Nann"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              {/* typewriter section */}
              <div className="flex w-full items-start lg:w-full lg:justify-center sm:justify-center md:text-center md:inline-block">
                <h2
                  className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize
                  !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl"
                >
                  <TypewriterText
                    words={[
                      "Creative Event &",
                      "Marketing Enthusiast",
                    ]}
                    typingSpeed={85}
                    eraseSpeed={55}
                    delayBetween={1500}
                    className="text-transparent bg-clip-text"
                  />
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                I'm a fresh graduate business student passionate about creating meaningful
                experiences through event management, marketing and creative collaboration.
                I enjoy bringing people together and turning ideas into reality.
              </p>

              <div className="mt-2 flex items-center self-start gap-3 lg:self-center">
                <Link
                  href="/about/"
                  target="_self"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark
                              p-2.5 px-6 text-lg font-semibold capitalize text-light
                              hover:border-dark hover:bg-transparent hover:text-dark
                              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                              md:p-2 md:px-4 md:text-base`}
                >
                  Get To Know Me
                </Link>

                <Link
                  href="/projects/"
                  target="_self"
                  className={`flex items-center rounded-lg border-2 border-solid bg-light
                              p-2.5 px-6 text-lg font-semibold capitalize text-dark
                              hover:border-light hover:bg-dark hover:text-light
                              dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
                              md:p-2 md:px-4 md:text-base`}
                >
                  Projects
                </Link>

                {/* Play icon button */}
                <Link
                  href="/thank-you-video"
                  aria-label="Watch thank you video"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid
                             border-dark bg-light text-dark transition-colors duration-200
                             hover:bg-dark hover:text-light hover:border-light
                             dark:bg-dark dark:text-light dark:border-light
                             dark:hover:bg-light dark:hover:text-dark dark:hover:border-dark
                             md:h-10 md:w-10"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <circle cx="12" cy="12" r="11" className="opacity-20" />
                    <path d="M10 8l6 4-6 4V8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </article>
    </>
  );
}
