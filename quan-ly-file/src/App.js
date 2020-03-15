import React, { Component } from "react";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Sidebar} />
            <Route exact path="/" component={Sidebar} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
