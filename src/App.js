import './App.css';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/About/AboutPage';
import PreviousWorksSection from './pages/PreviousWorks/PreviousWorks';
import NorthernLightsBackground from "./components/NorthernLights/NorthernLights";
import ContactInfo from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NorthernLightsBackground />
      <LandingPage />
      <AboutPage />
      <PreviousWorksSection />
      <ContactInfo />
    </div>
  );
}

export default App;
