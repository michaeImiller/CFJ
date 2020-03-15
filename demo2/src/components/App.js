import React, { Component } from "react";
import './styles/App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Children from "./components/Children";
import ChildrenBoy from "./components/ChildrenBoy";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>LazyLoad Demo </h2>
          <Link to="/children"> Children </Link>
          <br />
          <Link to="/childrenboy"> ChildrenBoy </Link>
          <Switch>
            <Route path="/children">
              <Children />
            </Route>
            <Route path="/childrenboy">
              <ChildrenBoy />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
