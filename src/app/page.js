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
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            {/* Icône GitHub SVG */}
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
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300"
          >
            {/* Icône LinkedIn SVG */}
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
    </main>
  );
}
