// Footer 組件 - 頁尾區塊
// 網站底部版權資訊

import React from 'react';
import './Footer.css';

function Footer() {
  // 獲取當前年份
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-line"></div>
        <p>© {currentYear} YUSEN CHEN. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
