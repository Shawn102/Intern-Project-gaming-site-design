import { NavHeader } from "./components/Navbar";
import { MiddleContent } from "./components/Middle/MiddleContent";
import { AllGames } from "./components/All-Games/AllGames";
import Cosplay from "./components/Cosplay/Cosplay";
import Footer from "./components/Footer";
import { FloatingAd } from "./components/FloatingAd";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <MiddleContent />
      <AllGames />
      <Cosplay />
      <Footer />
      <FloatingAd />
    </div>
  );
}

export default App;
