import PortfolioCard from "./PortfolioCard.tsx";
import type { PortfolioProject } from "../data/Projects.ts";
import portfolioProjects from "../data/Projects.ts";

function PortfolioGallery() {
  return (
    <section id="gallery" className="mt-16 scroll-mt-32">
      <div className="mb-10 space-y-3">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400">
          Works
        </p>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-black sm:text-4xl">
            <span className="bg-gradient-to-r from-slate-100 to-emerald-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-sm font-semibold text-slate-400">
            {portfolioProjects.length} projects
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {portfolioProjects.map((project: PortfolioProject) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioGallery;
