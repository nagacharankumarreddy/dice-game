import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import Game from "./game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game" exact element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
