// Experience 組件 - 工作經歷區塊
// 使用時間軸展示工作經歷

import React from 'react';
import './Experience.css';

function Experience() {
  // 工作經歷數據
  const experiences = [
    {
      date: '2024 - 現在',
      title: '全端開發工程師',
      company: 'Tech Solutions Inc.',
      responsibilities: [
        '負責前端 React 應用的開發與維護',
        '設計並實現 RESTful API',
        '優化網站性能，提升使用者體驗',
        '與團隊協作完成多個專案'
      ]
    },
    {
      date: '2022 - 2024',
      title: '前端開發工程師',
      company: 'Digital Agency',
      responsibilities: [
        '開發響應式網頁應用',
        '參與 UI/UX 設計討論',
        '使用 Vue.js 構建單頁應用',
        '編寫可維護的程式碼和文件'
      ]
    },
    {
      date: '2021 - 2022',
      title: '初級開發者',
      company: 'Startup Co.',
      responsibilities: [
        '學習 Web 開發技術棧',
        '協助完成小型專案',
        '進行程式碼審查和測試',
        '參與技術分享會'
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="section-container">
        <div className="section-number">03</div>
        
        <div className="section-layout">
          <div className="section-header-left">
            <h2 className="section-title">工作經歷</h2>
          </div>
          
          {/* 時間軸 */}
          <div className="timeline">
            {/* 遍歷工作經歷陣列 */}
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
