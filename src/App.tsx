import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/Homepage/Home"));
const Events = lazy(() => import("./pages/Events/Events"));
const Contacts = lazy(() => import("./pages/Contact/ContactUs"));
const Memories = lazy(() => import("./pages/Memories/Memories"));
const OurTeam = lazy(() => import("./pages/About/OurTeam/OurTeam"));
const Sponsor = lazy(() => import("./pages/Sponsor/Sponsor"));
const Credit = lazy(() => import("./pages/Credit/Credit"));
const NotFound = lazy(() => import("./pages/404/404"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about/ourteam" element={<OurTeam />} />
          <Route path="/about/oursponsors" element={<Sponsor />} />
          <Route path="/resources/websitecredit" element={<Credit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
