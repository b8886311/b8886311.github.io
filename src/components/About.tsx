function About() {
  return (
    <section id="about" className="mt-16 scroll-mt-32 group">
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />
        <article className="relative rounded-3xl border-2 border-emerald-400/30 bg-gradient-to-br from-slate-900/50 via-slate-950/50 to-slate-950/60 p-8 leading-relaxed shadow-2xl shadow-emerald-900/10 backdrop-blur-sm sm:p-12 lg:p-14">
          <div className="space-y-2 mb-8">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400">
              About Me
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              <span className="bg-gradient-to-r from-slate-100 via-emerald-200 to-emerald-300 bg-clip-text text-transparent">
                Focused on Stability & Maintainability
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
            <p className="indent-8 first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:align-top mb-4">
              我叫陳裕森，目前在緯創軟體股份有限公司擔任成就客戶二部資深軟體開發工程師。
              這些年來的工作經歷，不僅讓我在軟體開發領域持續精進，也培養了良好的職業素養與人格特質。
            </p>
            <p className="indent-8 mb-4">
              我深信「技術是日積月累的」，因此我會每週日安排固定時間學習新技術，不論是充實現有知識，還是學習尚未接觸的領域。
              當學成新技能後，我會主動將其應用於工作，例如在專案中導入新技術、優化現有系統架構，讓學習的知識能真正轉化為實際的生產力。此外，我於2025年到2026年間分別考取「AWS
              Certified Cloud Practitioner」、「AWS Certified Solutions
              Architect 」「Professional Scrum Master I」等證照。
            </p>
            <p className="indent-8 mb-4">
              目前任職於緯創軟體股份有限公司，並擔任資深軟體開發工程師
              與聯華電子 IT 部門合作，擔任PG（Programming）並兼任SD（System
              Designer）角色，致力於開發更穩定且具擴充性的系統架構。
              參與並獨立開發多個專案，涵蓋 企業內部系統開發、資料庫管理、CICD
              Pipeline規劃 等多個領域。
            </p>
            <p className="indent-8 mb-4">
              作為一名軟體工程師，我始終保持學習與創新的態度，期望在專業領域持續突破，與公司一同成長。
              目前，我積極進修AI人工智慧相關課程，因應公司未來發展策略，希望能提前打好基礎，將
              AI 技術應用於實務場景，提升系統的智慧化與自動化程度。
              我認為軟體開發不只是技術，更是一種解決問題的能力。未來，我希望能在跨領域應用、系統優化、智慧交通或
              IoT
              領域發揮專長，並貢獻我的技術實力與實事求是的精神，相信這些特質將能與貴公司所尋求的人才相符。
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
