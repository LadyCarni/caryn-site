import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';

export default function Site() {
  return (
    <Router>
      <div className="header row feature-width">
        <span className="brand"><Link to="/">Caryn Farvour</Link></span>
        <div className="nav">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
          <Link to="/creative">Creative</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/creative">
          <Creative />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
    </div>
  );
}

function Articles() {
  return (
    <div>
      <h2>Articles</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Creative() {
  return (
    <div>
      <h2>Creative</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}
