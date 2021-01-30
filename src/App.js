import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Router basename="/">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/portfolio" component={Portfolio} />
      <Route
        path="/github"
        component={() => {
          window.location.href = "https://github.com/Samuel-en";
          return null;
        }}
      />
        <Route
          path="/linkedin"
          component={() => {
            window.location.href =
              "https://www.linkedin.com/in/samuel-endrias-098292121/";
            return null;
          }}
        />
        <Footer />
      </Router>
    </>
  );
}


export default App;
