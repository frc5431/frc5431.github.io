import Home from "./pages/Homepage/Home";
import Events from "./pages/Events/Events";
import Contacts from "./pages/Contact/contactus";
import Memories from "./pages/Memories/Memories";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import OurTeam from "./pages/About/OurTeam/OurTeam";
import OurSponsors from "./pages/About/OurSponsors";
import { Routes, Route } from 'react-router-dom';
import Credit from "./pages/Credit/Credit";
import NotFound from "./pages/404/404";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    console.log(page)
    const rootElement = document.getElementById('root');
    if (rootElement) {
      if (page === "memories") {
        // set background when on memories page
        rootElement.style.setProperty('--background-img', 
          `url("src/assets/img/universal/background memories.jpg")`);
      } else {
        // remove background when not on memories page
        rootElement.style.removeProperty('--background-img');
      }
    }
  }, [page]);


  return (
    <>
      <Header headerData={page} setHeaderData={setPage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about/ourteam" element={<OurTeam />} />
        <Route path="/about/oursponsors" element={<OurSponsors />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/resources/websitecredit" element={<Credit />} />
      </Routes>

    </>
  );
}

export default App;