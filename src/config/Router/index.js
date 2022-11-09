import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { About, Home } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Switch>
    </Router>
  );
};

export default Routes;
