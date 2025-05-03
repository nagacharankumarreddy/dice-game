import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Game from "./game";
import Home from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
