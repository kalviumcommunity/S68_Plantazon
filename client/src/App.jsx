import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Plantcomponent from "./components/Plantcomponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/plants" element={<Plantcomponent />} />
      </Routes>
    </Router>
  );
}

export default App;
