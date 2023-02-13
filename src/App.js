import './App.css';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PreviousWorksSection from './pages/PreviousWorks';
import NorthernLightsBackground from "./components/NorthernLights/NorthernLights";

function App() {
  return (
    <div className="App">
      <NorthernLightsBackground />
      <LandingPage />
      <AboutPage />
      <PreviousWorksSection />
    </div>
  );
}

export default App;
