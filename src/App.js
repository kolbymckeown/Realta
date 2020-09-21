import React from "react";
import English from "./components/english/English";
import French from "./components/french/French";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={English} />
      </Switch>
      <Switch>
        <Route exact path="/francais" component={French} />
      </Switch>
    </Router>
  );
}

export default App;
