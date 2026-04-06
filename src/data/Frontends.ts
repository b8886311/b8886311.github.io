export type FrontendImage = {
  original: string;
  thumbnail: string;
  description: string;
};

export type PortfolioFrontend = {
  id: number;
  caption: string;
  images: FrontendImage[];
};

const portfolioFrontends: PortfolioFrontend[] = [
  {
    id: 1,
    caption: "E-Commerce",
    images: [
      {
        original: "/frontend/f_project1-1.png",
        thumbnail: "/frontend/f_project1-1.png",
        description:
          "前端框架-React 包含產品展示、聯繫我們、關於我們、會員註冊等功能。產品展示頁面使用了響應式設計，確保在不同設備上都有良好的用戶體驗。",
      },
      {
        original: "/frontend/f_project1-2.png",
        thumbnail: "/frontend/f_project1-2.png",
        description: "",
      },
      {
        original: "/frontend/f_project1-3.png",
        thumbnail: "/frontend/f_project1-3.png",
        description: "",
      },
    ],
  },
  {
    id: 2,
    caption: "旅遊網站",
    images: [
      {
        original: "/frontend/f_project2-1.png",
        thumbnail: "/frontend/f_project2-1.png",
        description:
          "前端框架-原生Html, Css, Javascript 包含首頁、景點介紹等功能。首頁設計簡潔，使用大圖展示熱門景點，並且提供清晰的導航欄方便用戶瀏覽。",
      },
    ],
  },
  {
    id: 3,
    caption: "圍棋網站",
    images: [
      {
        original: "/frontend/f_project3-1.png",
        thumbnail: "/frontend/f_project3-1.png",
        description:
          "前端框架-原生Html, Css, Javascript 包含首頁、知名棋士、棋院介紹等功能。首頁設計簡潔，使用響應式設計確保在不同設備上都有良好的用戶體驗。",
      },
      {
        original: "/frontend/f_project3-2.png",
        thumbnail: "/frontend/f_project3-2.png",
        description: "",
      },
      {
        original: "/frontend/f_project3-3.png",
        thumbnail: "/frontend/f_project3-3.png",
        description: "",
      },
      {
        original: "/frontend/f_project3-4.png",
        thumbnail: "/frontend/f_project3-4.png",
        description: "",
      },
    ],
  },
];

export default portfolioFrontends;
