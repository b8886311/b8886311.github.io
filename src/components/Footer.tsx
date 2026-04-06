function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-400/15 bg-slate-950/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-2xl border border-emerald-400/10 bg-slate-900/40 px-5 py-6 text-center shadow-lg shadow-slate-950/30 backdrop-blur sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-100">
            Copyright © 2026 Yusen Chen
          </p>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-right">
          ※系統流程圖皆為簡化示意，僅供說明用途，與實際正式系統邏輯可能略有差異。
        </p>
      </div>
    </footer>
  );
}

export default Footer;
