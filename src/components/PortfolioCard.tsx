import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { useState } from "react";

type PortfolioCardProp = {
  item: {
    id: number;
    caption: string;
    images: {
      original: string;
      thumbnail: string;
      description: string;
    }[];
  };
  itemLabel?: string;
  buttonLabel?: string;
};

function PortfolioCard({
  item,
  itemLabel = "Project",
  buttonLabel = "View Gallery",
}: PortfolioCardProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMore() {
    setIsOpen((prev) => !prev);
  }

  function renderGalleryItem(image: {
    original: string;
    thumbnail?: string;
    description?: string;
  }) {
    return (
      <figure className="space-y-3">
        <div className="overflow-hidden rounded-lg bg-slate-950">
          <img
            src={image.original}
            alt={image.description || item.caption}
            className="h-full w-full object-contain"
          />
        </div>
        {image.description ? (
          <figcaption className="rounded-lg border border-emerald-400/15 bg-slate-900/70 px-4 py-3 text-sm leading-relaxed text-slate-200">
            {image.description}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <article className="group relative rounded-2xl border-2 border-emerald-400/25 bg-gradient-to-br from-slate-900/40 via-slate-950/30 to-slate-950/50 p-6 shadow-lg shadow-slate-900/20 transition-all duration-300 hover:border-emerald-300/50 hover:shadow-emerald-900/30 hover:shadow-2xl sm:p-8">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-transparent to-slate-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />

      <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex-1 space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400/80">
            {itemLabel} {item.id}
          </p>
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {item.caption}
          </h3>
        </div>

        <button
          type="button"
          className="group/btn relative whitespace-nowrap rounded-xl border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 px-6 py-2.5 text-sm font-semibold text-emerald-300 shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:from-emerald-500/30 hover:to-emerald-600/20 hover:text-emerald-200 hover:shadow-emerald-500/40"
          onClick={toggleMore}
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-400/0 to-emerald-500/0 opacity-0 blur transition-opacity group-hover/btn:opacity-30" />
          <span className="relative">
            {isOpen ? "Hide Gallery" : buttonLabel}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="animate-in fade-in relative z-10 mt-8 rounded-xl border-2 border-emerald-400/20 bg-slate-950/60 p-4 backdrop-blur duration-300 sm:p-6">
          <ImageGallery
            items={item.images}
            showPlayButton={false}
            showBullets={item.images.length > 1}
            showThumbnails={item.images.length > 1}
            renderItem={renderGalleryItem}
          />
        </div>
      )}
    </article>
  );
}

export default PortfolioCard;
