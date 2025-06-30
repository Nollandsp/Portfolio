import ProjectsSection from "../components/Projects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="pt-10 max-w-4xl mx-auto px-4">
      <h1 className="text-center font-rubik font-bold text-3xl">
        Nollan Da Silva Pereira
      </h1>

      <div className="pt-10 flex items-center justify-between">
        <h3 className="text-left max-w-sm mr-15 ml-2">
          Hi, I'm Nollan a passionate person developing his front and back end
          skills as developer.
        </h3>

        <div className="flex space-x-6 text-white text-2xl mr-2">
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
              className="w-6 h-6"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.42c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.12 0 0 1-.32 3.3 1.22a11.45 11.45 0 016 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.62.24 2.82.12 3.12.77.84 1.23 1.9 1.23 3.2 0 4.58-2.82 5.6-5.5 5.9.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

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
              className="w-6 h-6"
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
        style={{ width: "50%", maxWidth: "600px" }}
        className="mx-auto block w-full max-w-lg mb-6"
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

      <h2
        id="education"
        className="text-4xl font-bold text-white mb-2 text-center mt-60"
      >
        EDUCATION & CERTIFICATIONS
      </h2>
      <section className="mt-20 px-1 max-w-4xl mx-auto">
        <div className="max-w-2xl mx-auto">
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

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-6 rounded-2xl p-6">
            <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
              2025
            </p>

            <div className="flex items-center gap-2">
              <p className="font-bold text-white text-lg flex items-center gap-2">
                Next.js App Router Fundamentals
                <img
                  src="/vercel.svg"
                  alt="Next.js Logo"
                  className="w-6 h-6 rounded-md object-cover"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-6 rounded-2xl p-6">
            <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
              2025
            </p>

            <div className="flex items-center gap-2">
              <p className="font-bold text-white text-lg flex items-center gap-2">
                Next.js Pages Router Fundamentals
                <img
                  src="/vercel.svg"
                  alt="Next.js Logo"
                  className="w-6 h-6 rounded-md object-cover"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-6 rounded-2xl p-6">
            <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
              2025
            </p>

            <div className="flex items-center gap-2">
              <p className="font-bold text-white text-lg flex items-center gap-2">
                Next.js SEO Fundamentals
                <img
                  src="/vercel.svg"
                  alt="Next.js Logo"
                  className="w-6 h-6 rounded-md object-cover"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-6 rounded-2xl p-6">
            <p className="bg-gray-950 text-white px-4 py-2 rounded-md min-w-[90px] text-center font-semibold -ml-4 flex items-center justify-center gap-2">
              2025
            </p>

            <div className="flex items-center gap-2">
              <p className="font-bold text-white text-lg flex items-center gap-2">
                React Foundations for Next.js
                <img
                  src="/vercel.svg"
                  alt="Next.js Logo"
                  className="w-6 h-6 rounded-md object-cover"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-center mt-40 text-2xl font-semibold">
        ABOUT MY TECH STACK
      </h2>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
        {/* HTML */}
        <a
          href="https://developer.mozilla.org/fr/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img src="/html-5.png" alt="HTML5 Logo" className="w-12 h-12" />
              <p className="mt-3 text-center text-white font-bold">HTML</p>
            </div>
          </div>
        </a>

        {/* CSS */}
        <a
          href="https://developer.mozilla.org/fr/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img src="/css-3.png" alt="CSS3 Logo" className="w-12 h-12" />
              <p className="mt-3 text-center text-white font-bold">CSS</p>
            </div>
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
            <img src="/js.png" alt="JavaScript Logo" className="w-12 h-12" />
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
          <div className="flex flex-col items-center">
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img src="/nextjs.png" alt="NextJs Logo" className="w-12 h-12" />
              <p className="mt-3 text-center text-white font-bold">NextJs</p>
            </div>
          </div>
        </a>

        {/* Figma */}
        <a
          href="https://www.figma.com/fr-fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img src="/figma.png" alt="Figma Logo" className="w-12 h-12" />
              <p className="mt-3 text-center text-white font-bold">Figma</p>
            </div>
          </div>
        </a>
        {/* Tailwind*/}

        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
              <img
                src="/tailwind-css.png"
                alt="Figma Logo"
                className="w-12 h-12"
              />
              <p className="mt-3 text-center text-white font-bold">
                Tailwind css
              </p>
            </div>
          </div>
        </a>
        {/* Github */}
      </section>
      <div className="w-full flex justify-center mt-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="bg-gray-950 rounded-xl shadow-md p-6 w-36 h-36 transition duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 flex flex-col items-center justify-center">
            <img src="/github.png" alt="GitHub Logo" className="w-12 h-12" />
            <p className="mt-3 text-center text-white font-bold">GitHub</p>
          </div>
        </a>
      </div>
      <ProjectsSection />
    </main>
  );
}
