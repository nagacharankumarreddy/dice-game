import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import Home from "./home";
import Game from "./game";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={Game} />
      </Switch>
    </Router>
  );
}

export default App;
