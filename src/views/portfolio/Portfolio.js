import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from 'components/projects';

const Portfolio = () => {
  return (
    <div className="light pattern feature portfolio">
      <Helmet>
        <title>Caryn Farvour</title>
        <meta property="og:title" content="Caryn Farvour" />
        <meta property="og:description" content="A professional UX portfolio showcasing industry insights, creative projects, hobbies, and recipes, blending design expertise with personal passion." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/about/caryn-portrait.jpg" />
        <meta property="og:url" content="https://carynfarvour.design" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Projects />
    </div>
  )
}

export default Portfolio;
