"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  words,
  typingSpeed = 90,     // ms per letter when typing
  eraseSpeed = 55,       // ms per letter when deleting
  delayBetween = 1500,   // pause after a word is done
  className = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer;

    if (!isDeleting) {
      // typing
      if (displayed.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        // word is fully typed → wait → then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      // deleting
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, eraseSpeed);
      } else {
        // done deleting → go to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, eraseSpeed, delayBetween]);

  return (
    <span className={className}>
      {displayed}
      {/* cursor */}
      <span className="inline-block w-[2px] bg-current ml-1 animate-pulse h-[1.1em] align-middle" />
    </span>
  );
}
