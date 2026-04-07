import background from "../assets/pexels-catiamatos-1072179.jpg";

function PortfolioHero() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-3xl border-2 border-emerald-400/30 bg-slate-600">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      {/* Subtle forest glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-slate-950/40 to-slate-950/65" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 space-y-6 px-6 py-12 sm:px-10 sm:py-16">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border-1.5 border-emerald-400/60 bg-emerald-900/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 shadow-sm shadow-emerald-500/15 backdrop-blur sm:text-sm">
              全端工程師
            </span>
            <span className="rounded-full border-1.5 border-emerald-400/60 bg-emerald-900/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 shadow-sm shadow-emerald-500/15 backdrop-blur sm:text-sm">
              前端設計
            </span>
            <span className="rounded-full border-1.5 border-emerald-400/60 bg-emerald-900/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 shadow-sm shadow-emerald-500/15 backdrop-blur sm:text-sm">
              系統優化
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-5 md:items-end">
          <div className="md:col-span-3 space-y-4">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-emerald-300/80 uppercase">
                Hello, welcome to my portfolio
              </p>
              <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
                <span className="block text-white">I&apos;M</span>
                <span className="block bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                  Yusen Chen
                </span>
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Software engineer with 8 years of experience.
              <br />
              Passionate about building stable, maintainable systems.
            </p>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="group relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-full border-2 border-emerald-400/50 bg-slate-900/60 p-2 backdrop-blur">
                <img
                  src="/avatar.jpg"
                  alt="avatar"
                  className="h-40 w-40 rounded-full object-cover object-[center_5%] ring-2 ring-emerald-500/30 sm:h-48 sm:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;
