export type CertificateImage = {
  original: string;
  thumbnail: string;
  description: string;
};

export type PortfolioCertificate = {
  id: number;
  caption: string;
  images: CertificateImage[];
};

const portfolioCertificates: PortfolioCertificate[] = [
  {
    id: 1,
    caption: "多益證書",
    images: [
      {
        original: "/certificate/cart1.png",
        thumbnail: "/certificate/cart1.png",
        description: "TOEIC-710分 於2023年6月考取",
      },
    ],
  },
  {
    id: 2,
    caption: "PSM-I",
    images: [
      {
        original: "/certificate/cart2.png",
        thumbnail: "/certificate/cart2.png",
        description: "Professional Scrum Master I 證書 於2026年2月考取",
      },
    ],
  },
  {
    id: 3,
    caption: "AWS-SAA",
    images: [
      {
        original: "/certificate/cart3.png",
        thumbnail: "/certificate/cart3.png",
        description: "AWS Solutions Architect Associate 證書 於2026年2月考取",
      },
    ],
  },
  {
    id: 4,
    caption: "AWS-CLP",
    images: [
      {
        original: "/certificate/cart4.png",
        thumbnail: "/certificate/cart4.png",
        description: "AWS Certified Cloud Practitioner 證書 於2025年9月考取",
      },
    ],
  },
  {
    id: 5,
    caption: "在學證明",
    images: [
      {
        original: "/certificate/cart5.png",
        thumbnail: "/certificate/cart5.png",
        description: "時代英語國際中心-字彙課程在學證明 ",
      },
      {
        original: "/certificate/cart6.png",
        thumbnail: "/certificate/cart6.png",
        description: "時代英語國際中心-多益課程在學證明 ",
      },
      {
        original: "/certificate/cart7.png",
        thumbnail: "/certificate/cart7.png",
        description: "Udemy-機器學習課程在學證明",
      },
      {
        original: "/certificate/cart8.png",
        thumbnail: "/certificate/cart8.png",
        description: "Udemy-深度學習課程在學證明",
      },
      {
        original: "/certificate/cart9.png",
        thumbnail: "/certificate/cart9.png",
        description: "Udemy-Oracle資料庫課程在學證明",
      },
    ],
  },
];

export default portfolioCertificates;
