import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/vendor">
            <h1>VENDOR</h1>
          </Route>
          <Route path="/special">
            <h1>special</h1>
          </Route>
          <Route path="/promotion">
            <h1>PROMOTIONS</h1>
          </Route>
          <Route path="/shop">
            <h1>shop</h1>
          </Route>
          <Route path="/Register">
            <h1>Register</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <NavBar />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
