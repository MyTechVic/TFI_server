import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
