// About 組件 - 關於我的區塊
// 展示個人簡介和背景資訊

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      {/* 區塊容器 */}
      <div className="section-container">
        {/* 大號背景數字裝飾 */}
        <div className="section-number">01</div>
        
        {/* 左右分欄佈局 */}
        <div className="section-layout">
          {/* 左側：標題 */}
          <div className="section-header-left">
            <h2 className="section-title">關於我</h2>
          </div>
          
          {/* 右側：內容 */}
          <div className="text-block">
            <p>
              我是一位全端開發者，專注於創建美觀且實用的網頁應用。
              我熱衷於學習新技術，並將它們應用到實際專案中。
            </p>
            <p>
              在開發過程中，我注重使用者體驗和程式碼品質，
              相信好的產品應該既美觀又高效。
            </p>
            <p>
              除了程式設計，我也喜歡設計和藝術，
              這讓我能夠在技術和美學之間找到平衡。
            </p>
            {/* 裝飾性引號 */}
            <div className="quote-mark"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
