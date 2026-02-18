// App.jsx - 主应用组件
// 这是整个应用的根组件，负责组合所有页面区块

// React 导入
import React from 'react';

// 导入各个组件
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// 导入全局样式
import './App.css';

function App() {
  return (
    // 主容器
    <div className="portfolio">
      {/* 固定的几何背景装饰 */}
      <div className="geometric-background">
        <div className="grid-overlay"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="diagonal-line line-1"></div>
        <div className="diagonal-line line-2"></div>
      </div>

      {/* 页面各个区块组件 */}
      {/* 每个组件负责各自的内容和样式 */}
      
      <Hero />        {/* 首页横幅 */}
      <About />       {/* 关于我 */}
      <Skills />      {/* 技能展示 */}
      <Experience />  {/* 工作经历 */}
      <Projects />    {/* 项目作品 */}
      <Contact />     {/* 联系方式 */}
      <Footer />      {/* 页脚 */}
    </div>
  );
}

// 导出 App 组件，让 main.jsx 可以使用
export default App;
