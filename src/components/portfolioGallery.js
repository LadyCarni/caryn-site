import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  const data = [
    { 
      source: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Planning Project",
      category: "Research & Strategy",
      id: 1,
    },
    { 
      source: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      title: "So UXY",
      category: "UX Design",
      id: 2,
    },
    { 
      source: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Sites of web",
      category: "Website",
      id: 3
    },
    { 
      source: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "So research right now",
      category: "Research & Strategy",
      id: 4
    },
    { 
      source: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      title: "All the UX",
      category: "UX Design",
      id: 5
    },
    { 
      source: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Internets of Something",
      category: "Website",
      id: 6
    },
  ];

  return (
    <div className="feature-content bottom columns portfolio">
      {data.map((project) => (
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
