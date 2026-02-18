// Projects 組件 - 專案展示區塊
// 展示個人或團隊完成的專案

import React from 'react';
import './Projects.css';

function Projects() {
  // 專案數據
  const projects = [
    {
      number: '01',
      title: '電商平台',
      description: '一個功能完整的電商網站，支援商品瀏覽、購物車、付款等功能。使用 React 和 Node.js 開發，整合了第三方支付 API。',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      number: '02',
      title: '任務管理系統',
      description: '團隊協作工具，支援專案管理、任務分配、進度追蹤。採用即時更新技術，提升團隊效率。',
      tech: ['Vue', 'Express', 'Socket.io', 'PostgreSQL']
    },
    {
      number: '03',
      title: '個人部落格',
      description: '簡潔的部落格平台，支援 Markdown 編輯、標籤分類、留言功能。注重閱讀體驗和 SEO 優化。',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel']
    },
    {
      number: '04',
      title: '天氣應用',
      description: '即時天氣查詢應用，提供詳細的天氣資訊和未來預報。介面簡潔，數據視覺化呈現。',
      tech: ['React', 'Weather API', 'Chart.js', 'CSS']
    }
  ];

  return (
    <section className="projects-section">
      <div className="section-container">
        <div className="section-number">04</div>
        
        {/* 置中的標題佈局 */}
        <div className="section-header-center">
          <h2 className="section-title">專案作品</h2>
          <div className="title-underline"></div>
        </div>
        
        {/* 專案網格 */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* 大號專案編號裝飾 */}
              <div className="project-number-badge">{project.number}</div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* 技術棧標籤 */}
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
              
              {/* 懸停時出現的裝飾線 */}
              <div className="project-hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
