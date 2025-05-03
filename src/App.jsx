import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Screening from "./components/Screening";
import Contact from "./components/Contact";
import ComingSoon from "./components/ComingSoon";

import Newsletter from "./pages/Newsletter";
import ThankYou from "./components/ThankYou";
import Webinars from "./components/Webinars"
import NoADHD from "./components/noADHD";
import Articles from "./components/Articles"
import PomodoroTimer from "./components/Pomodoro";

import Games from "./components/Games"
import Game1 from './components/Games/Game1.jsx';

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/screening" element={<Screening />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/comingsoon" element={<ComingSoon/>}/>
            <Route path="/message" element={<Newsletter />} />
            <Route path="/thank-you" element={<ThankYou />} />
            
            <Route path="/webinars" element={<Webinars/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/timer" element={<PomodoroTimer/>}/>
            
            <Route path="/games" element={<Games/>}/>
            <Route path="/game1" element={<Game1/>}/>
            <Route path="/noADHD" element={<NoADHD/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
