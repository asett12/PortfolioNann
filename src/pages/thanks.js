import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank you | Nann</title>
        <meta name="description" content="Thank you for contacting me." />
      </Head>

      <TransitionEffect />

      <main className="flex flex-col items-center justify-center w-full min-h-screen bg-dark text-light dark:bg-light dark:text-dark">
        <Layout className="pt-16 text-center">
          <AnimatedText
            text="Thanks for reaching out!"
            className="!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl mb-6"
          />
          <p className="text-lg text-gray-300 dark:text-gray-700 mb-10 max-w-xl mx-auto">
            I got your message. I’ll review it and get back to you soon.
          </p>

          <Link
            href="/"
            className="inline-block px-6 py-3 font-semibold rounded-lg
              bg-dark text-light border border-light
              hover:bg-transparent hover:text-dark hover:border-dark
              dark:bg-light dark:text-dark dark:border-dark 
              dark:hover:bg-transparent dark:hover:text-light dark:hover:border-light
              transition-all duration-300"
          >
            Go back home
          </Link>
        </Layout>
      </main>
    </>
  );
}
