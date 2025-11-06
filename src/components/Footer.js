import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-solid border-dark/10
      font-base text-lg dark:text-light dark:border-light/10 sm:text-base"
    >
      <Layout className="py-8 lg:py-6">
        <div
          className="
            flex w-full items-center justify-between flex-wrap gap-y-4 text-sm text-gray-700 dark:text-gray-300
            md:flex-col md:items-center md:justify-center md:gap-3
          "
        >
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 md:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-[#3c2bc0] dark:text-[#7b5cff]"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.734 6.75 12.75 6.75 12.75s6.75-8.016 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Bangkok, Thailand</span>
          </div>

          {/* Center Credit (always centered) */}
          <div
            className="
              flex flex-col items-center justify-center text-center text-gray-600 dark:text-gray-400
              md:order-2
            "
          >
            <span>&copy; {new Date().getFullYear()} Nann’s Portfolio</span>
            <div className="flex items-center gap-1 mt-1">
              Built By&nbsp;
              <Link
                href="https://github.com/asett12"
                className="underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark transition-colors"
              >
                Asett
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 md:justify-center md:order-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-[#3c2bc0] dark:text-[#7b5cff]"
            >
              <path d="M2.25 5.25c0-1.243 1.007-2.25 2.25-2.25h2.598c.98 0 1.83.648 2.092 1.589l.86 3.09a2.25 2.25 0 01-.57 2.154l-1.06 1.06a15.972 15.972 0 007.104 7.104l1.06-1.06a2.25 2.25 0 012.154-.57l3.09.86a2.25 2.25 0 011.589 2.092V19.5a2.25 2.25 0 01-2.25 2.25h-.75C8.31 21.75 2.25 15.69 2.25 8.25v-.75z" />
            </svg>

            <Link
              href="tel:+66619455083"
              className="hover:underline hover:text-primary dark:hover:text-primaryDark transition-colors"
            >
              +66 61 945 5083
            </Link>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
