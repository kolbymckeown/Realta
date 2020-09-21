import React from "react";
import English from "./components/english/English";
import French from "./components/french/French";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <English />
        </Route>
        <Route exact path="/francais">
          <French />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
