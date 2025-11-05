"use client";

import { useState } from "react";
import Image from "next/image";

export default function SkeletonImage({
  containerClassName = "",
  className = "",
  ...imageProps
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
    >
      {/* Skeleton background + spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Pulsing skeleton layer */}
          <div className="absolute inset-0 animate-pulse bg-neutral-800/40 dark:bg-neutral-200/30" />

          {/* Spinner */}
          <div className="relative">
            <span className="sr-only">Loading image...</span>
            <svg
              className="h-6 w-6 animate-spin text-white/80 dark:text-neutral-900/80 drop-shadow-md"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        </div>
      )}

      {/* Actual image */}
      <Image
        {...imageProps}
        className={`transition-all duration-500 ease-out ${
          isLoading
            ? "scale-[1.02] blur-sm opacity-0"
            : "scale-100 blur-0 opacity-100"
        } ${className}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
