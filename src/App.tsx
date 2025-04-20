import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/Events/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;