import Home from "./pages/Homepage/Home";
import Events from "./pages/Events/Events";
import Contacts from "./pages/Contact/contactus";
import Memories from "./pages/Memories/Memories";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import OurTeam from "./pages/About/OurTeam/OurTeam";
import OurSponsors from "./pages/About/OurSponsors";

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

      {page === "home" && <Home />}
      {page === "ourteam" && <OurTeam/>}
      {page === "oursponsors" && <OurSponsors/>}
      {page === "event" && <Events />}
      {page === "contact" && <Contacts />}
      {page === "memories" && <Memories />}
    </>
  );
}

export default App;