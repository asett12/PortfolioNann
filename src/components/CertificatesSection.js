"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const CERTIFICATES = [
  {
    id: "rec-letter-1",
    title: "Let's Share – Volunteer",
    issuer: "From: May Twetar Kyaw, Founder of Let's Share",
    quote:
      "“What drew my attention to Nann was her active participation in social skill improvement projects and academic work.” — Let's Share Foundation",
    date: "2021",
    type: "Recommendation Letter",
    description:
      "A professional recommendation letter highlighting my performance, growth, and contributions during my volunteer experience.",
    href: "/docs/Recommendation-Letter.pdf",
  },
  {
    id: "rec-letter-2",
    title: "ME GOODY Space – Internship",
    issuer: "From: Cin Ye, CEO of Buddy Up Co., Ltd.",
    quote:
      "“Nann consistently demonstrated dedication, professionalism, and a remarkable attitude towards learning and growth.” — Buddy Up Co., Ltd.",
    date: "2025",
    type: "Recommendation Letter",
    description:
      "A professional recommendation letter highlighting my performance, growth, and contributions during my front-end development internship.",
    href: "/docs/Recommendation-Letter-2.pdf",
  },
  {
    id: "rec-letter-3",
    title: "Rangsit University - Student",
    issuer: "From: Amporn Puapradit, Associate Dean for Academic and International Affairs",
    quote:
      "“Nann had shown communicative and analytical thinking skills and successfully demonstrated competences in the various activities.” — Rangsit University",
    date: "2025",
    type: "Recommendation Letter",
    description:
      "A professional recommendation letter highlighting my performance, growth, and contributions during my front-end development internship.",
    href: "/docs/6504264-NAN OHMAR WAI.pdf",
  },
];

export default function CertificatesSection() {
  if (CERTIFICATES.length === 0) return null;

  return (
    <section
      id="certificates"
      className="w-full pt-16"
      aria-labelledby="certificates-heading"
    >
      <h2
        id="certificates-heading"
        className={`${montserrat.className} font-bold text-7xl mb-14 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-dark dark:text-light`}
      >
        Recommendation Letters
      </h2>

      {/* Grid of certificates */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CERTIFICATES.map((cert, index) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-dark/10 bg-dark/5 p-5 shadow-sm
                       hover:shadow-lg hover:border-dark/30
                       dark:border-light/10 dark:bg-light/5 dark:hover:border-light/30
                       transition-all"
          >
            <div>
              {/* Type badge + date */}
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                {cert.type && (
                  <span className="rounded-full border border-dark/20 bg-dark/5 px-3 py-1 text-[11px] font-medium text-dark/70
                                   dark:border-light/25 dark:bg-light/5 dark:text-light/80">
                    {cert.type}
                  </span>
                )}
                {cert.date && (
                  <span className="rounded-full bg-dark/5 px-2.5 py-1 text-[11px] text-dark/60
                                   dark:bg-light/10 dark:text-light/70">
                    {cert.date}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                className={`${montserrat.className} text-lg font-semibold text-dark dark:text-light`}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="mt-1 text-sm font-medium text-dark/70 dark:text-light/70">
                {cert.issuer}
              </p>

              {/* Quote / Sentence */}
              {cert.quote && (
                <p className="mt-3 text-[15px] italic text-dark/80 dark:text-light/80 leading-snug">
                  {cert.quote}
                </p>
              )}
            </div>

            {/* View PDF button */}
            <div className="mt-5 flex items-center justify-between">
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-dark/30 px-4 py-1.5
                           text-sm font-medium text-dark/80 hover:border-dark hover:bg-dark hover:text-light
                           dark:border-light/40 dark:text-light/80 dark:hover:bg-light dark:hover:text-dark
                           transition-colors"
              >
                View PDF
                <span className="ml-1.5 text-xs opacity-80 group-hover:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
