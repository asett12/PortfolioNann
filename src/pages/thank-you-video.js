import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

export default function ThankYouVideo() {
  return (
    <>
      <Head>
        <title>Thank You Video | Nann</title>
        <meta
          name="description"
          content="A thank you video for visiting Nann’s portfolio."
        />
      </Head>

      <TransitionEffect />

      <main className="flex min-h-screen w-full items-center justify-center bg-light text-dark dark:bg-dark dark:text-light">
        <Layout className="pt-16 pb-24 flex flex-col items-center">
          <AnimatedText
            text="Thanks for visiting my portfolio 🎥"
            className="mb-8 !text-5xl text-center lg:!text-4xl md:!text-3xl"
          />

          <p className="mb-8 max-w-xl text-center text-base font-medium text-gray-600 dark:text-gray-300 md:text-sm">
            I really appreciate you taking the time to explore my projects.
          </p>

          {/* Video container */}
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-700/50 
            bg-gradient-to-br from-[#05070a] via-[#050505] to-[#111827] shadow-2xl"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-lightGreen/10 via-transparent to-slideGreen/15" />

            <video
              controls
              className="relative z-10 w-full h-[600px] md:h-[420px] sm:h-[320px] rounded-3xl object-cover"
            >
              <source src="/videos/thank-you.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects/"
              className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              md:p-2 md:px-4 md:text-base"
            >
              Back to Projects
            </Link>

            <Link
              href="/"
              className="flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
              capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
              dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
              md:p-2 md:px-4 md:text-base"
            >
              Back to Home
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
}
