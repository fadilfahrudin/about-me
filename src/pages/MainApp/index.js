import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { About, Home } from "../../pages";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default MainApp;
