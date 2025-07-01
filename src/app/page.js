"use client";

import React, { useState, useEffect } from "react";
import ProjectsSection from "../components/Projects";
import { Button } from "@/components/ui/button";
import { SkeletonFormationItem } from "@/components/ui/SkeletonFormationItem";
import Contact from "../components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de 2 secondes
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-10 max-w-4xl mx-auto px-4">
      <h1 className="text-center font-rubik font-bold text-3xl">
        NOLLAN DA SILVA PEREIRA
      </h1>
      <div className="pt-10 flex items-center justify-between">
        {/* Texte à gauche */}
        <h3 className="text-left max-w-xs md:max-w-lg">
          Hi, I&apos;m Nollan, a passionate person developing his front and back
          end skills as developer.
        </h3>

        {/* Icônes à droite */}
        <div className="flex space-x-6 text-white text-2xl">
          {/* GitHub */}
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
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.42c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.12 0 0 1-.32 3.3 1.22a11.45 11.45 0 016 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.62.24 2.82.12 3.12.77.84 1.23 1.9 1.23 3.2 0 4.58-2.82 5.6-5.5 5.9.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
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
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.4h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.26c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V24h-5V8z" />
            </svg>
          </a>
        </div>
      </div>
      <video
        src="/animation.webm"
        autoPlay
        loop
        muted
        playsInline
        className="mx-auto block w-1/2 max-w-xs sm:w-2/5 sm:max-w-sm md:w-1/3 md:max-w-md mb-6 sm:my-10"
      />

      <Button
        asChild
        variant="outline"
        className="block mx-auto mb-16 max-w-[220px] w-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3"
      >
        <a
          href="#education"
          className="flex items-center justify-center h-full w-full text-center"
        >
          DISCOVER MY JOURNEY
        </a>
      </Button>
      {/* Section EDUCATION & CERTIFICATIONS */}
      <h2
        id="education"
        className="text-4xl font-bold text-white mb-2 text-center mt-60"
      >
        EDUCATION & CERTIFICATIONS
      </h2>
      <section className="mt-20 px-4 max-w-3xl mx-auto space-y-6 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {isLoading ? (
          <>
            <SkeletonFormationItem />
            <SkeletonFormationItem />
            <SkeletonFormationItem />
          </>
        ) : (
          <>
            <div className="max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl mx-auto">
              <div className="flex items-center gap-6 rounded-2xl p-6">
                <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center">
                  2025
                </p>
                <div>
                  <p className="font-bold text-white text-lg">
                    Titre Professionnel Certifié Développeur Web
                  </p>
                  <p className="text-gray-400 mt-1">AFCI Beauvais</p>
                </div>
              </div>
            </div>

            <div className="max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl mx-auto">
              <div className="flex items-center gap-6 rounded-2xl p-6">
                <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
                  2025
                </p>

                <div className="flex items-center gap-2">
                  <p className="font-bold text-white text-lg flex items-center gap-2">
                    Next.js App Router Fundamentals
                    <image
                      src="/vercel.svg"
                      alt="Next.js Logo"
                      className="w-6 h-6 rounded-md object-cover"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl mx-auto">
              <div className="flex items-center gap-6 rounded-2xl p-6">
                <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
                  2025
                </p>

                <div className="flex items-center gap-2">
                  <p className="font-bold text-white text-lg flex items-center gap-2">
                    Next.js Pages Router Fundamentals
                    <image
                      src="/vercel.svg"
                      alt="Next.js Logo"
                      className="w-6 h-6 rounded-md object-cover"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl mx-auto">
              <div className="flex items-center gap-6 rounded-2xl p-6">
                <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
                  2025
                </p>

                <div className="flex items-center gap-2">
                  <p className="font-bold text-white text-lg flex items-center gap-2">
                    Next.js SEO Fundamentals
                    <image
                      src="/vercel.svg"
                      alt="Next.js Logo"
                      className="w-6 h-6 rounded-md object-cover"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl mx-auto">
              <div className="flex items-center gap-6 rounded-2xl p-6">
                <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
                  2025
                </p>

                <div className="flex items-center gap-2">
                  <p className="font-bold text-white text-lg flex items-center gap-2">
                    React Foundations for Next.js
                    <image
                      src="/vercel.svg"
                      alt="Next.js Logo"
                      className="w-6 h-6 rounded-md object-cover"
                    />
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Section ABOUT MY TECH STACK */}
      <h2 className="text-center mt-40 text-4xl sm:text-xl md:text-2xl font-semibold">
        ABOUT MY TECH STACK
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto px-2">
        {/* HTML */}
        <a
          href="https://developer.mozilla.org/fr/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
            <img
              src="/html-5.png"
              alt="HTML5 Logo"
              className="w-12 sm:w-14 md:w-16 h-auto"
            />
            <p className="mt-3 text-center text-white font-bold">HTML</p>
          </div>
        </a>

        {/* CSS */}
        <a
          href="https://developer.mozilla.org/fr/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
            <img
              src="/css-3.png"
              alt="CSS3 Logo"
              className="w-12 sm:w-14 md:w-16 h-auto"
            />
            <p className="mt-3 text-center text-white font-bold">CSS</p>
          </div>
        </a>

        {/* JavaScript */}
        <a
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
            <img
              src="/js.png"
              alt="JavaScript Logo"
              className="w-12 sm:w-14 md:w-16 h-auto"
            />
            <p className="mt-3 text-center text-white font-bold">JavaScript</p>
          </div>
        </a>

        {/* NextJs */}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
            <img
              src="/nextjs.png"
              alt="Next.js Logo"
              className="w-12 sm:w-14 md:w-16 h-auto"
            />
            <p className="mt-3 text-center text-white font-bold">NextJs</p>
          </div>
        </a>

        {/* Ligne Tailwind CSS + GitHub */}
        <div className="md:col-span-4 flex justify-center gap-10 flex-wrap mt-4">
          {/* Tailwind CSS */}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img
                src="/tailwind-css.png"
                alt="Tailwind CSS Logo"
                className="w-12 sm:w-14 md:w-16 h-auto"
              />
              <p className="mt-3 text-center text-white font-bold">
                Tailwind CSS
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img
                src="/github.png"
                alt="Git Logo"
                className="w-12 sm:w-14 md:w-16 h-auto"
              />
              <p className="mt-3 text-center text-white font-bold">GitHub</p>
            </div>
          </a>
        </div>

        {/* Ligne Figma centrée */}
        <div className="md:col-span-4 flex justify-center mt-8">
          <a
            href="https://www.figma.com/fr-fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img
                src="/figma.png"
                alt="Figma Logo"
                className="w-12 sm:w-14 md:w-16 h-auto"
              />
              <p className="mt-3 text-center text-white font-bold">Figma</p>
            </div>
          </a>
        </div>
      </section>

      <ProjectsSection />
      <Contact />
    </main>
  );
}
