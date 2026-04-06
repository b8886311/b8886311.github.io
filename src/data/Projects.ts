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
    caption: "CICD 與部署流程",
    images: [
      {
        original: "/projects/project1-1.png",
        thumbnail: "/projects/project1-1.png",
        description:
          "透過此服務可以使程式在Git進行上傳/合併時自動將程式打包、自動測試，並測試完成後部屬程式並重啟服務。大幅降低上述所提及手動部屬的風險。目前已在客戶後端環境實施並穩定運行中。",
      },
    ],
  },
  {
    id: 2,
    caption: "自動解析設備機台log工具",
    images: [
      {
        original: "/projects/project2-1.png",
        thumbnail: "/projects/project2-1.png",
        description:
          "本程式為背景執行程式，主要用途為將來自不同廠商的設備的Log抓取下來，透過製程人員對Log專業分析，賦予特定的Log意義設定。定期掃描每個機台的Log去分析機台運行是否正常。",
      },
      {
        original: "/projects/project2-2.png",
        thumbnail: "/projects/project2-2.png",
        description: "",
      },
      {
        original: "/projects/project2-3.png",
        thumbnail: "/projects/project2-3.png",
        description: "",
      },
      {
        original: "/projects/project2-4.png",
        thumbnail: "/projects/project2-4.png",
        description: "",
      },
      {
        original: "/projects/project2-5.png",
        thumbnail: "/projects/project2-5.png",
        description: "",
      },
      {
        original: "/projects/project2-6.png",
        thumbnail: "/projects/project2-6.png",
        description: "",
      },
      {
        original: "/projects/project2-7.png",
        thumbnail: "/projects/project2-7.png",
        description: "",
      },
      {
        original: "/projects/project2-8.png",
        thumbnail: "/projects/project2-8.png",
        description: "",
      },
    ],
  },
  {
    id: 3,
    caption: "叉車AGV自動車載程式",
    images: [
      {
        original: "/projects/project3-1.png",
        thumbnail: "/projects/project3-1.png",
        description:
          "叉車式AGV車載程式，分別透過Modbus和Socket與電池/雷達/底盤控制系統/機械手臂通訊。透過Webservices和上位系統WCS接取工作命令，控制AGV前往目標地標、下達動作，待動作完成與上位系統交握。",
      },
      {
        original: "/projects/project3-2.png",
        thumbnail: "/projects/project3-2.png",
        description: "",
      },
      {
        original: "/projects/project3-3.png",
        thumbnail: "/projects/project3-3.png",
        description: "",
      },
      {
        original: "/projects/project3-4.png",
        thumbnail: "/projects/project3-4.png",
        description: "",
      },
    ],
  },
  {
    id: 4,
    caption: "多車通行路線調度模擬程式",
    images: [
      {
        original: "/projects/project4-1.png",
        thumbnail: "/projects/project4-1.png",
        description:
          "基於openTCS三大核心:調度(dispatcher)、路由(router)、交管與路權分配(scheduler)進行探討。主要針對多車派發訂單後，多台AGV分配派發路線、當一台車在行進時，如果路線重疊的情況下，系統該如何決策其他車在指定位置停下並且當車子行經時，該如何釋放該道路的路權，使之其餘車子能夠通過。",
      },
      {
        original: "/projects/project4-2.png",
        thumbnail: "/projects/project4-2.png",
        description: "",
      },
      {
        original: "/projects/project4-3.png",
        thumbnail: "/projects/project4-3.png",
        description: "",
      },
      {
        original: "/projects/project4-4.png",
        thumbnail: "/projects/project4-4.png",
        description: "",
      },
      {
        original: "/projects/project4-5.png",
        thumbnail: "/projects/project4-5.png",
        description: "",
      },
    ],
  },
  {
    id: 5,
    caption: "QR Code自動排列演算法",
    images: [
      {
        original: "/projects/project5-1.png",
        thumbnail: "/projects/project5-1.png",
        description:
          "上位程式透過二維碼掃描器進行飛拍後，得到一串無序只有x/y/時間/QR Code的一串數據，透過自動排列演算法，將無序的資料變為有序且對應紗車的每一個位置。",
      },
      {
        original: "/projects/project5-2.png",
        thumbnail: "/projects/project5-2.png",
        description: "",
      },
    ],
  },
  {
    id: 6,
    caption: "AGV組合機械手臂自動車載程式",
    images: [
      {
        original: "/projects/project6-1.png",
        thumbnail: "/projects/project6-1.png",
        description:
          "組合式AGV車載程式，分別透過Modbus和Socket與電池/雷達/底盤控制系統/機械手臂通訊。控制AGV前往目標地標、執行目標動作待動作完成將結果回報給上位系統。",
      },
      {
        original: "/projects/project6-2.png",
        thumbnail: "/projects/project6-2.png",
        description: "",
      },
    ],
  },
  {
    id: 7,
    caption: "美國亞利桑那覆銅箔層壓板工廠 全廠自動化專案",
    images: [
      {
        original: "/projects/project7-1.png",
        thumbnail: "/projects/project7-1.png",
        description:
          "前端製程使用Modbus連接掃碼槍掃描工單，並且工單至上位交握撈取工單製程資訊。透過第三方api控件實現liveform 可看到QR Code條碼增加美觀。工單資訊將和QR Code綁定紀錄至資料庫，最後透過與PLC交握訊號實現人工疊合覆銅箔壓層板，並將半成品送入第二道工站",
      },
      {
        original: "/projects/project7-2.png",
        thumbnail: "/projects/project7-2.png",
        description:
          "抵達拆解站後，將自動掃描QR Code並依序將QR Code綁定資料帶出，透過和PLC交握訊號實現人工拆解覆銅箔層壓板，送往暫存區存放。",
      },
      {
        original: "/projects/project7-3.png",
        thumbnail: "/projects/project7-3.png",
        description:
          "透過與PLC交握訊號，將暫存區工站將分成鋼板暫存站與CCL暫存站，透過在兩台車當前位置新增規則，實現簡單交管。",
      },
      {
        original: "/projects/project7-4.png",
        thumbnail: "/projects/project7-4.png",
        description:
          "裁切製程介面可選擇當前在CCL暫存區的半成品作為裁切對象，選擇後台車將會把該半成品送入裁切站。",
      },
    ],
  },
];

export default portfolioProjects;
