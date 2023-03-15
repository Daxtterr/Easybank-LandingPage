import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import HeroThree from "./components/HeroThree";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App overflow-y-hidden">
      <Header />
      <Hero />
      <HeroTwo />
      <HeroThree />
      <Footer />
    </div>
  );
}

export default App;
