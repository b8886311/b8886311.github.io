import portfolioProjects from "../data/Projects";
import GallerySection from "./GallerySection.tsx";

function PortfolioGallery() {
  return (
    <GallerySection
      sectionId="gallery"
      eyebrow="Works"
      title="Featured Projects"
      countLabel={`${portfolioProjects.length} projects`}
      itemLabel="Project"
      buttonLabel="View Gallery"
      items={portfolioProjects}
    />
  );
}

export default PortfolioGallery;
