import Home from "./pages/Homepage/Home";
import Events from "./pages/Events/Events";
import Contacts from "./pages/Contact/ContactUs";
import Memories from "./pages/Memories/Memories";
import Header from "./components/Header/Header";
import OurTeam from "./pages/About/OurTeam/OurTeam";
import Sponsor from "./pages/Sponsor/Sponsor";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Credit from "./pages/Credit/Credit";
import NotFound from "./pages/404/404";

function App() {
  // removes bug of scroll position being kept when navigating between pages
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about/ourteam" element={<OurTeam />} />
        <Route path="/about/oursponsors" element={<Sponsor />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/resources/websitecredit" element={<Credit />} />
      </Routes>
    </>
  );
}

export default App;
