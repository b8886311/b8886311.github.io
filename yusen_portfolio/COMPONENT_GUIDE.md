# 履历网站项目 - 初学者指南

## 📁 项目结构

这个项目采用 **组件化架构**，将网站拆分成多个独立的组件，便于管理和维护。

```
src/
├── App.jsx                    # 主应用组件（组合所有页面区块）
├── App.css                    # 全局样式和背景效果
├── main.jsx                   # 应用入口文件
├── index.css                  # 基础重置样式
├── assets/                    # 资源文件
│   ├── wavy-bg-1.jpg         # 波浪背景图片 1
│   └── wavy-bg-2.webp        # 波浪背景图片 2
└── components/                # 组件文件夹
    ├── Hero/                  # 首页横幅组件
    │   ├── Hero.jsx
    │   └── Hero.css
    ├── About/                 # 关于我组件
    │   ├── About.jsx
    │   └── About.css
    ├── Skills/                # 技能展示组件
    │   ├── Skills.jsx
    │   └── Skills.css
    ├── Experience/            # 工作经历组件
    │   ├── Experience.jsx
    │   └── Experience.css
    ├── Projects/              # 项目作品组件
    │   ├── Projects.jsx
    │   └── Projects.css
    ├── Contact/               # 联系方式组件
    │   ├── Contact.jsx
    │   └── Contact.css
    └── Footer/                # 页脚组件
        ├── Footer.jsx
        └── Footer.css
```

## 🎨 设计风格

- **配色方案**: 灰色背景（#e8e8e8, #d8d8d8）搭配黑白强调色
- **流线型元素**: 不规则圆角、波浪形背景、流动动画
- **艺术感**: 使用真实的波浪背景图片，增加视觉深度
- **交互效果**: hover 悬停变换、平滑过渡动画

## 🧩 什么是组件？

在 React 中，**组件（Component）**就像乐高积木一样，是构建用户界面的基本单元。

每个组件都是一个独立的、可复用的代码块，包含：

- **JSX 文件**: 定义组件的结构和内容（.jsx）
- **CSS 文件**: 定义组件的样式和外观（.css）

### 组件的好处：

1. **模块化**: 每个部分都是独立的，容易理解
2. **可维护**: 修改某个组件不会影响其他部分
3. **可复用**: 同一个组件可以在不同地方使用
4. **协作友好**: 团队成员可以同时开发不同组件

## 📖 如何理解代码

### 1. App.jsx（主组件）

```jsx
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
// ... 其他导入

function App() {
  return (
    <div className="portfolio">
      <Hero /> {/* 导入并使用 Hero 组件 */}
      <About /> {/* 导入并使用 About 组件 */}
      {/* ... 其他组件 */}
    </div>
  );
}
```

**理解要点**：

- `import` 语句用于导入其他文件的组件
- `<Hero />` 这样的语法就是在使用（渲染）组件
- App 组件把所有小组件组合在一起，形成完整页面

### 2. Hero.jsx（子组件示例）

```jsx
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>YUSEN CHEN</h1>
      {/* 组件的内容 */}
    </section>
  );
}

export default Hero;
```

**理解要点**：

- `function Hero()` 定义了一个函数式组件
- `return` 里面是 JSX（看起来像 HTML）
- `export default` 让其他文件可以导入这个组件
- 导入 `./Hero.css` 为这个组件添加样式

### 3. 数据管理（以 Skills 组件为例）

```jsx
function Skills() {
  // 定义技能数据
  const skillCategories = [
    {
      title: "前端开发",
      icon: "⚡",
      skills: ["React", "Vue", "JavaScript"],
    },
  ];

  return (
    <div>
      {/* 使用 map 遍历数组，生成多个元素 */}
      {skillCategories.map((category, index) => (
        <div key={index}>
          <h3>{category.title}</h3>
          {/* 显示数据 */}
        </div>
      ))}
    </div>
  );
}
```

**理解要点**：

- `const` 声明一个常量（不会改变的变量）
- 数组 `[...]` 用于存储多个数据
- 对象 `{...}` 用键值对存储相关数据
- `.map()` 方法遍历数组，为每项生成 JSX

## 🛠️ 开发命令

### 本地开发

```bash
cd yusen_portfolio
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
cd yusen_portfolio
npm run build
```

### 部署到 GitHub Pages

```bash
# 在项目根目录执行
npm run deploy
```

## ✏️ 如何修改内容

### 修改个人信息

1. **名字和标题** → [Hero/Hero.jsx](src/components/Hero/Hero.jsx)

   ```jsx
   <span className="first-name">你的名字</span>
   <p className="role">你的职位</p>
   ```

2. **关于我的文字** → [About/About.jsx](src/components/About/About.jsx)

   ```jsx
   <p>修改这里的文字...</p>
   ```

3. **技能列表** → [Skills/Skills.jsx](src/components/Skills/Skills.jsx)

   ```jsx
   const skillCategories = [
     // 修改或添加技能
   ];
   ```

4. **工作经历** → [Experience/Experience.jsx](src/components/Experience/Experience.jsx)

   ```jsx
   const experiences = [
     // 修改或添加经历
   ];
   ```

5. **项目作品** → [Projects/Projects.jsx](src/components/Projects/Projects.jsx)

   ```jsx
   const projects = [
     // 修改或添加项目
   ];
   ```

6. **联系方式** → [Contact/Contact.jsx](src/components/Contact/Contact.jsx)
   ```jsx
   const contactInfo = [
     // 修改联系信息
   ];
   ```

### 修改样式

每个组件都有对应的 CSS 文件，例如：

- 修改 Hero 区块的样式 → `Hero/Hero.css`
- 修改颜色、字体大小、间距等

### 添加新组件

1. 在 `src/components/` 创建新文件夹
2. 创建 `ComponentName.jsx` 和 `ComponentName.css`
3. 在 `App.jsx` 中导入并使用

## 🎓 学习资源

- [React 官方文档](https://react.dev/)
- [MDN Web 文档](https://developer.mozilla.org/)
- [CSS 技巧](https://css-tricks.com/)

## 💡 常见问题

**Q: 为什么要拆分成这么多组件？**
A: 组件化让代码更清晰、更易维护。就像把一篇长文章分成多个段落一样。

**Q: 如何知道修改哪个文件？**
A: 根据要修改的内容位置，找到对应的组件文件夹。例如，要改首页的名字，就去 `Hero` 文件夹。

**Q: CSS 文件会不会互相影响？**
A: 使用了类名（className）来区分，但最好使用独特的类名避免冲突。

**Q: 可以删除不需要的组件吗？**
A: 可以！删除组件文件夹后，记得在 `App.jsx` 中移除对应的导入和使用。

## 📝 后续改进建议

1. ✨ 添加路由（React Router）实现多页面
2. 🌙 添加暗色主题切换
3. 🌐 添加多语言支持（i18n）
4. 📱 优化移动端体验
5. 🎬 添加更多动画效果
6. 📊 集成 Google Analytics 追踪访问

---

祝你学习愉快！🚀
