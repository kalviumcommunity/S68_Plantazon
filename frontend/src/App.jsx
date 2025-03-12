import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Plantcomponent from "./components/Plantcomponent";
import AddEntity from "./components/AddEntity";
import EntityList from "./components/EntityList";
import UpdateEntity from "./components/UpdateEntity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/plants" element={<Plantcomponent />} />
        <Route path="/form" element={<AddEntity />} />
        <Route path="/" element={<EntityList/>}/>
        <Route path="/update/:id" element={<UpdateEntity/>}/>
      </Routes>
    </Router>
  );
}

export default App;
