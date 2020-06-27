import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { OrderOnline } from "./components/OrderOnline";

export const notFinished = () => {
  return <h1>notFinished</h1>;
}

export const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={notFinished} />
      <Route path="/menu" component={notFinished} />
      <Route path="/order-online" component={OrderOnline} />
      <Route path="/contact" component={notFinished} />
    </Switch>
  </Router>
);
