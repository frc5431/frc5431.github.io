import Home from "./pages/Home";
import Events from "./pages/Events/Events";
import Contacts from "./pages/Contact/contactus";
import Memories from "./pages/Memories/Memories";
import { useState } from "react";
import Header from "./components/header";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
    <Header headerData={page} setHeaderData={setPage}/>
    <div id="navbar"></div>

    {page === "home" && <Home/>}
    {page === "event" && <Events/>}
    {page === "contact" && <Contacts/>}
    {page === "memories" && <Memories/>}
    </>
  );
}

export default App;