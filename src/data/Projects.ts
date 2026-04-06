export type ProjectImage = {
  original: string;
  thumbnail: string;
  description: string;
};

export type PortfolioProject = {
  id: number;
  caption: string;
  images: ProjectImage[];
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    caption: "Landing Page Design",
    images: [
      {
        original: "/dig1.jpg",
        thumbnail: "/dig1.jpg",
        description: "This is sequence diagram",
      },
      {
        original: "/seq1.png",
        thumbnail: "/seq1.png",
        description: "This is sequence diagram2",
      },
    ],
  },
  {
    id: 2,
    caption: "Analytics dashboard with dark mode UI.",
    images: [
      {
        original: "/seq2.webp",
        thumbnail: "/seq2.webp",
        description: "This is sequence diagram3",
      },
      {
        original: "/seq3.webp",
        thumbnail: "/seq3.webp",
        description: "This is sequence diagram4",
      },
    ],
  },
];

export default portfolioProjects;
