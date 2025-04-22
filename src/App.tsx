import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/Events/Events";
import Contacts from "./pages/Contact/contactus";
import Memories from "./pages/Memories/memories";
import { useEffect, useState } from "react";
import Header from "./components/header";

function App() {
  const [page, setPage] = useState("home");


  return (
    
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route index element={<Events />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
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