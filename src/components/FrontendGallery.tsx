import GallerySection from "./GallerySection.tsx";
import portfolioFrontends from "../data/Frontends.ts";
import type { PortfolioFrontend } from "../data/Frontends.ts";

function FrontendGallery() {
  return (
    <GallerySection
      sectionId="frontends"
      eyebrow="Frontends"
      title="Frontend Projects"
      countLabel={`${portfolioFrontends.length} projects`}
      itemLabel="Frontend"
      buttonLabel="View Gallery"
      items={portfolioFrontends as PortfolioFrontend[]}
    />
  );
}

export default FrontendGallery;
