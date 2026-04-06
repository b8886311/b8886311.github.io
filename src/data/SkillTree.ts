export type SkillTreeImage = {
  original: string;
  thumbnail: string;
  description: string;
};

export type PortfolioSkillTree = {
  id: number;
  caption: string;
  images: SkillTreeImage[];
};

const portfolioSkillTrees: PortfolioSkillTree[] = [
  {
    id: 1,
    caption: "Skill Tree Overview",
    images: [
      {
        original: "/skilltree.png",
        thumbnail: "/skilltree.png",
        description: "",
      },
    ],
  },
];

export default portfolioSkillTrees;
