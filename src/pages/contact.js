import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/thanks");
      } else {
        const data = await res.json();
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>NexTemp Built with Nextjs</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Drop Me a Message Anytime👋🏻"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative rounded-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-5 -z-10 h-[103%] w-[101.5%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

            {/* left part */}
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
              <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark dark:text-primaryDark">
                What’s Next?
              </h2>
              <p>
                My inbox is always open. Whether you have a question or just
                want to say hello, I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* form */}
            <div className="col-span-4 xl:col-span-4 md:col-span-8 md:order-2">
              <form onSubmit={handleSubmit}>
                <div className="p-2">
                  <label className="block text-sm font-medium text-dark dark:text-light">
                    Your Name:
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="p-2">
                  <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                    Your Email:
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="off"
                      className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="p-2">
                  <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                    Message:
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {errorMsg ? (
                  <p className="p-2 text-sm text-red-500">{errorMsg}</p>
                ) : null}

                <div className="p-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 font-semibold rounded-lg
                      bg-dark text-light border border-light
                      hover:bg-transparent hover:text-dark hover:border-dark
                      dark:bg-light dark:text-dark dark:hover:bg-transparent 
                      dark:hover:text-light dark:hover:border-light
                      transition-all duration-300
                      disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send it!"}
                  </button>
                </div>


              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
