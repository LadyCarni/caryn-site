import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/show-language/prism-show-language.js";
import "prismjs/components/prism-json";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-jsx";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import Home from "views/home/Home";
import About from "views/about/About";
import Articles from 'views/articles/Articles';
import Menu from "components/menu";
import { PortfolioRoutes } from "./views/portfolio/index";
import Footer from "components/footer";

const Site = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="header row feature-width">
        <span className="brand">
          <Link to="/">Caryn Farvour</Link>
        </span>
        <div className="nav-container">
          <Menu />
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        {PortfolioRoutes.map(({ path, component }, key) => (
          <Route exact path={path} key={key} component={component} />
        ))}
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/creative">
          <Creative />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Creative() {
  return (
    <div className="light feature feature-width full-height">
      <h2>Creative</h2>
      <p>Coming soon for your inspiration!</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="light feature feature-width full-height">
      <h2>Contact</h2>
      <p>Coming soon! Contact me somewhere else!</p>
    </div>
  );
}

export default Site;
