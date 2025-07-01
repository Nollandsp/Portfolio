"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-center mt-20 text-2xl font-semibold text-white">
        PROJECTS IDEAS ?
      </h2>
      <p className="text-gray-500 text-center text-lg font-bold px-4">
        Let&apos;s start your project now, don&apos;t hesitate!
      </p>

      <div className="flex flex-col items-center my-16 space-y-4">
        <a
          href="mailto:dasilvanollan@gmail.com"
          className="w-full max-w-[220px]"
        >
          <Button
            variant="outline"
            className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3 flex justify-center items-center"
          >
            <img
              src="/envelope.png"
              alt="Contact par mail"
              className="w-8 h-8 object-contain"
            />
          </Button>
        </a>
        <div className="flex space-x-6 text-white text-2xl mr-2 mt-10">
          {/* Icône GitHub */}
          <a
            href="https://github.com/Nollandsp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.42c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.12 0 0 1-.32 3.3 1.22a11.45 11.45 0 016 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.62.24 2.82.12 3.12.77.84 1.23 1.9 1.23 3.2 0 4.58-2.82 5.6-5.5 5.9.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Icône LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nollan-da-silva-pereira-125338250/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.4h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.26c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V24h-5V8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
