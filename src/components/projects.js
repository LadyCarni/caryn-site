import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  const gallery = [
    { 
      source: "https://source.unsplash.com/random?beach",
      title: "Planning Project",
      category: "Research & Strategy",
      id: 1,
    },
    { 
      source: "https://source.unsplash.com/random?forest",
      title: "So UXY",
      category: "UX Design",
      id: 2,
    },
    { 
      source: "https://source.unsplash.com/random?work",
      title: "Sites of web",
      category: "Website",
      id: 3
    },
    { 
      source: "https://source.unsplash.com/random?cafe",
      title: "So research right now",
      category: "Research & Strategy",
      id: 4
    },
    { 
      source: "https://source.unsplash.com/random?phone",
      title: "All the UX",
      category: "UX Design",
      id: 5
    },
    { 
      source: "https://source.unsplash.com/random?happy",
      title: "Internets of Something",
      category: "Website",
      id: 6
    },
  ];

  return (
    <div className="feature-content columns portfolio">
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

export default Projects
