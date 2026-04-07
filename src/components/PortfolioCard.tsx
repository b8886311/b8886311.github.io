import { useState, useRef } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function toggleMore() {
    setIsOpen((prev) => !prev);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 50;

    // 右滑 (diff < 0)：顯示前一張
    if (diff < -threshold) {
      setSelectedIndex((prev) =>
        prev === 0 ? item.images.length - 1 : prev - 1,
      );
    }

    // 左滑 (diff > 0)：顯示下一張
    if (diff > threshold) {
      setSelectedIndex((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1,
      );
    }

    touchStartX.current = null;
  }

  const selectedImage = item.images[selectedIndex] ?? item.images[0];

  function handleSelectImage(nextIndex: number) {
    setSelectedIndex(nextIndex);
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
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
                Gallery Preview
              </p>
            </div>
          </div>

          {selectedImage ? (
            <figure className="space-y-3">
              <div
                className="group relative overflow-hidden rounded-xl border border-emerald-400/15 bg-slate-950"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={selectedImage.original}
                  alt={selectedImage.description || item.caption}
                  className="mx-auto max-h-[52vh] w-full object-contain sm:max-h-[60vh]"
                />
                {item.images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((prev) =>
                          prev === 0 ? item.images.length - 1 : prev - 1,
                        )
                      }
                      className="pointer-events-none absolute inset-0 left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-gradient-to-r from-black/40 to-transparent opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 md:flex md:items-center md:justify-start md:pl-4"
                      aria-label="上一張"
                    >
                      <span className="hidden text-3xl text-white md:inline">
                        ‹
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((prev) =>
                          prev === item.images.length - 1 ? 0 : prev + 1,
                        )
                      }
                      className="pointer-events-none absolute inset-0 right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-gradient-to-l from-black/40 to-transparent opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 md:flex md:items-center md:justify-end md:pr-4"
                      aria-label="下一張"
                    >
                      <span className="hidden text-3xl text-white md:inline">
                        ›
                      </span>
                    </button>
                  </>
                ) : null}
              </div>
              {selectedImage.description ? (
                <figcaption className="rounded-xl border border-emerald-400/15 bg-slate-900/70 px-4 py-3 text-sm leading-relaxed text-slate-200">
                  {selectedImage.description}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          {item.images.length > 1 ? (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {item.images.map((image, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={`${image.original}-${index}`}
                    type="button"
                    onClick={() => handleSelectImage(index)}
                    className={`relative h-20 w-28 flex-none overflow-hidden rounded-lg border-2 transition-all duration-200 sm:h-24 sm:w-36 ${
                      isSelected
                        ? "border-emerald-300 shadow-lg shadow-emerald-500/20"
                        : "border-slate-700 opacity-70 hover:border-emerald-400/50 hover:opacity-100"
                    }`}
                    aria-label={`選擇圖片 ${index + 1}`}
                  >
                    <img
                      src={image.thumbnail || image.original}
                      alt={image.description || item.caption}
                      className="h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
}

export default PortfolioCard;
