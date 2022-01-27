import React from "react";
import Menu from "./components/navbar";
import Cardlist from "./components/cardlist";
import TrainingCard from "./components/training";
import Homepage from "./components/homepage";
import ErrorPage from "./components/errorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu
        logo={<Link to="/Eng-flashcards">Flashcards</Link>}
        home={<Link to="/cardlist">Cardlist</Link>}
        training={<Link to="/training">Training</Link>}
      />
      <Routes>
        <Route path="/Eng-flashcards" element={<Homepage></Homepage>}></Route>
        <Route path="training" element={<TrainingCard></TrainingCard>}></Route>
        <Route path="cardlist" element={<Cardlist></Cardlist>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
