import GallerySection from "./GallerySection.tsx";
import portfolioSkillTrees from "../data/SkillTree.ts";
import type { PortfolioSkillTree } from "../data/SkillTree.ts";

function SkillTreeGallery() {
  return (
    <GallerySection
      sectionId="skilltree"
      eyebrow="Skill Tree"
      title="Skill Map"
      countLabel={`${portfolioSkillTrees.length} item`}
      itemLabel="Map"
      buttonLabel="View Skill Tree"
      items={portfolioSkillTrees as PortfolioSkillTree[]}
    />
  );
}

export default SkillTreeGallery;
