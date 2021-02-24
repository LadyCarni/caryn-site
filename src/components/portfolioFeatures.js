import React from "react";
import { Link } from "react-router-dom";
const PortfolioFeatures = () => {
  const gallery = [
    { 
      source: "https://source.unsplash.com/random?beach",
      title: "Planning Project",
      category: "Research & Strategy",
      id: 'feature1',
    },
    { 
      source: "https://source.unsplash.com/random?forest",
      title: "So UXY",
      category: "UX Design",
      id: 'feature2',
    },
    { 
      source: "https://source.unsplash.com/random?work",
      title: "Sites of web",
      category: "Website",
      id: 'feature3'
    }
  ];

  return (
    <div className="columns portfolio highlights">
      {gallery.map((project) => (
        <div className="column" key={project.id}>
          <Link to="#" >
            <div className="image filter bottom">
              <img src={project.source} alt={project.title}/>
            </div>
            <div className="caption overlay">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PortfolioFeatures
