import "./App.css";
import Header from "./components/Header";
import PortfolioHero from "./components/PortfolioHero";
import About from "./components/About";
import PortfolioGallery from "./components/PortfolioGallery";

function App() {
  return (
    <div id="home" className="bg-slate-950 text-slate-100 antialiased">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <PortfolioHero />
        <About />
        <PortfolioGallery />
      </main>
    </div>
  );
}

export default App;
