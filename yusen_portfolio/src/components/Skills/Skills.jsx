// Skills 組件 - 技能展示區塊
// 展示不同類別的技能

import React from 'react';
import './Skills.css';

function Skills() {
  // 定義技能數據（使用陣列儲存，方便管理和修改）
  const skillCategories = [
    {
      title: '前端開發',
      icon: '⚡',
      skills: ['React', 'Vue', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      title: '後端開發',
      icon: '🔧',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST API', 'GraphQL']
    },
    {
      title: '資料庫',
      icon: '💾',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      title: '工具與部署',
      icon: '🚀',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD']
    }
  ];

  return (
    <section className="skills-section">
      <div className="section-container">
        <div className="section-number">02</div>
        
        <div className="section-layout">
          {/* 左側標題 */}
          <div className="section-header-left">
            <h2 className="section-title">技能</h2>
          </div>
          
          {/* 右側技能卡片網格 */}
          <div className="skills-grid">
            {/* 使用 map 方法遍歷陣列，生成多個技能卡片 */}
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-box">
                <div className="skill-box-header">
                  <div className="skill-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                <ul>
                  {/* 遍歷每個類別的技能列表 */}
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
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

export default Skills;
