import { useState } from "react";

const navLinkClass =
  "rounded-full border-2 border-emerald-400/50 bg-emerald-500/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-emerald-300 shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 hover:shadow-emerald-500/50 hover:-translate-y-0.5 backdrop-blur-sm";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/25 bg-slate-800 text-lg font-semibold text-emerald-300 shadow-sm shadow-emerald-500/20 transition-transform duration-200 group-hover:scale-105">
            森
          </div>
          <p className="text-base font-semibold tracking-wide text-slate-200 sm:text-lg">
            森&apos;s Portfolio
          </p>
        </a>

        <nav className="hidden items-center gap-3 md:flex">
          <a href="#about" className={navLinkClass}>
            關於我
          </a>
          <a href="#gallery" className={navLinkClass}>
            作品
          </a>
        </nav>

        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition-colors hover:border-slate-500 hover:text-emerald-300"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/45"
                onClick={closeMenu}
              />
              <div className="fixed right-4 top-20 z-50 w-56 rounded-xl border border-slate-700/80 bg-slate-900/95 p-3 shadow-xl shadow-black/30">
                <nav className="flex flex-col gap-2 text-sm font-medium">
                  <a
                    href="#home"
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-slate-200 transition-colors hover:bg-slate-700"
                    onClick={closeMenu}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-slate-200 transition-colors hover:bg-slate-700"
                    onClick={closeMenu}
                  >
                    About
                  </a>
                  <a
                    href="#gallery"
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-slate-200 transition-colors hover:bg-slate-700"
                    onClick={closeMenu}
                  >
                    Gallery
                  </a>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
