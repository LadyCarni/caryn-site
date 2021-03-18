import React from "react";
import { Link } from "react-router-dom";
import devLondon from "assets/portfolio/dev-london.jpg";
import connectFeature from "assets/portfolio/connect-cover.jpg";
import fongoWorks from "assets/portfolio/fongo-cover.png";
const PortfolioFeatures = ({ match }) => {
  const gallery = [
    { 
      source: connectFeature,
      title: "Connect API",
      slug: "connect-api",
      category: "Front-end Development",
      id: 0,
    },
    { 
      source: devLondon,
      title: "Dev London",
      slug: "dev-london",
      category: "Front-end Development",
      id: 1,
    },
    { 
      source: fongoWorks,
      title: "Fongo Works",
      slug: "fongo-works",
      category: "Front-end Development",
      id: 2,
    },
  ];

  return (
    <div className="columns portfolio shadow highlights">
      {gallery.map(({id, slug, title, category, source}) =>(
        <div className="column filter" key={id}>
          <Link to={`/portfolio/${slug}`}>
            <div className="image bottom">
              <img src={source} alt={title}/>
            </div>
            <div className="caption overlay">
              <h3>{title}</h3>
              <span>{category}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PortfolioFeatures
