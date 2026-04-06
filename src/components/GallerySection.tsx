import PortfolioCard from "./PortfolioCard.tsx";

type GalleryItem = {
  id: number;
  caption: string;
  images: {
    original: string;
    thumbnail: string;
    description: string;
  }[];
};

type GallerySectionProps = {
  sectionId: string;
  eyebrow: string;
  title: string;
  countLabel: string;
  itemLabel: string;
  buttonLabel: string;
  items: GalleryItem[];
};

function GallerySection({
  sectionId,
  eyebrow,
  title,
  countLabel,
  itemLabel,
  buttonLabel,
  items,
}: GallerySectionProps) {
  return (
    <section id={sectionId} className="mt-16 scroll-mt-32">
      <div className="mb-10 space-y-3">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400">
          {eyebrow}
        </p>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black sm:text-4xl">
            <span className="bg-gradient-to-r from-slate-100 to-emerald-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-sm font-semibold text-slate-400">{countLabel}</p>
        </div>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
            itemLabel={itemLabel}
            buttonLabel={buttonLabel}
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
