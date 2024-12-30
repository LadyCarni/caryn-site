import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import Home from "./views/home/Home";
import Portfolio from "./views/portfolio/Portfolio";
import Articles from "./views/articles/Articles";
import Creative from "./views/creative/Creative";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Footer from "./components/footer";
import Menu from "./components/menu";
import { PortfolioRoutes } from "./views/portfolio/index";
// import ScrollToTop from "./components/ScrollToTop";

const Site = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="header row">
        <span className="brand">
          <Link to="/">Caryn Farvour</Link>
        </span>
        <div className="nav-container">
          <Menu />
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio/*" element={<Portfolio />}/>
        {PortfolioRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        ))}
        <Route path="/articles" element={<Articles />}/>
        <Route path="/creative" element={<Creative />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

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

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Site;
