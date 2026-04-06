function About() {
  return (
    <section id="about" className="mt-16 scroll-mt-32 group">
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />
        <article className="relative rounded-3xl border-2 border-emerald-400/30 bg-gradient-to-br from-slate-900/50 via-slate-950/50 to-slate-950/60 p-8 leading-relaxed shadow-2xl shadow-emerald-900/10 backdrop-blur-sm sm:p-12 lg:p-14">
          <div className="space-y-2 mb-8">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400">
              About Me
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              <span className="bg-gradient-to-r from-slate-100 via-emerald-200 to-emerald-300 bg-clip-text text-transparent">
                Focused on Stability & Maintainability
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
            \n{" "}
            <p>
              I'm a Software Engineer with 8 years of experience in web frontend
              and backend development. From day one, I've been passionate about
              making systems more stable and user-friendly.
            </p>
            <p>
              My core tech stack includes C#, Python, and React. I build
              enterprise-level APIs, handle data processing, and craft
              high-quality interfaces with modern UI frameworks.
            </p>
            <p>
              I believe in continuous learning and team collaboration. Let's
              build something great together.
            </p>
            \n{" "}
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
