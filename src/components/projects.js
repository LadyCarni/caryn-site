import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
const Projects = ({ match }) => {
  const gallery = [
    { 
      source: "https://source.unsplash.com/random?beach",
      title: "Planning Project",
      slug: "wow-project",
      category: "Research & Strategy",
      id: 1,
    },
    { 
      source: "https://source.unsplash.com/random?forest",
      title: "So UXY",
      slug: "such-project",
      category: "UX Design",
      id: 2,
    },
    { 
      source: "https://source.unsplash.com/random?work",
      title: "Sites of web",
      slug: "dat-project-tho",
      category: "Website",
      id: 3
    },
    { 
      source: "https://source.unsplash.com/random?cafe",
      title: "So research right now",
      slug: "research-project",
      category: "Research & Strategy",
      id: 4
    },
    { 
      source: "https://source.unsplash.com/random?phone",
      title: "All the UX",
      slug: "ux-all-the-things",
      category: "UX Design",
      id: 5
    },
    { 
      source: "https://source.unsplash.com/random?happy",
      title: "Internets of Something",
      slug: "project-of-projects",
      category: "Website",
      id: 6
    },
  ];

  const { url, path } = useRouteMatch();

  const projectCards = gallery.map((project) => {
    return (
      <div className="column" key={project.id}>
        <Link to={`${url}/${project.slug}`}>
          <div className="image filter bottom">
            <img src={project.source} alt={project.title}/>
          </div>
          <div className="caption overlay">
            <h3>{project.title}</h3>
            <span>{project.category}</span>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="light feature feature-width full-height">
      <Switch>
        <Route path={`${path}`} exact>
          <div className="feature-content shadow columns portfolio">
            {projectCards}
          </div>
        </Route>
        <Route path={`${path}/wow-project`}>
          <div>
            wow project!
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Projects
