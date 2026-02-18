// Hero 組件 - 首頁的主要展示區域
// 這是一個 React 函數式組件，用於展示個人介紹和聯絡方式

import React from 'react';
import './Hero.css';

function Hero() {
  // 返回 JSX（看起來像 HTML 的語法）
  return (
    <section className="hero">
      {/* 左側：名字和標題 */}
      <div className="hero-left">
        <div className="geometric-frame">
          <span className="frame-corner tl"></span>
          <span className="frame-corner tr"></span>
          <span className="frame-corner bl"></span>
          <span className="frame-corner br"></span>
        </div>
        
        <div className="title-block">
          <div className="label">PORTFOLIO 2026</div>
          <h1 className="name">
            <span className="first-name">YUSEN</span>
            <span className="last-name">CHEN</span>
          </h1>
          <div className="separator"></div>
          <p className="role">FULL STACK DEVELOPER</p>
        </div>
      </div>

      {/* 右側：個人簡介和聯絡連結 */}
      <div className="hero-right">
        <p className="intro-text">
          熱愛程式設計與創造，專注於構建優雅且高效的網頁應用。
          擅長前端開發，對使用者體驗有獨到見解。
        </p>
        
        {/* 聯絡方式列表 */}
        <div className="contact-links">
          <a href="mailto:your.email@example.com">
            <span className="link-line"></span>
            <span className="link-text">EMAIL</span>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <span className="link-line"></span>
            <span className="link-text">GITHUB</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <span className="link-line"></span>
            <span className="link-text">LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// 匯出組件，讓其他檔案可以使用
export default Hero;
