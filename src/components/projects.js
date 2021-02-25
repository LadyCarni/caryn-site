import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
const Projects = ({ match }) => {
  const gallery = [
    { 
      source: "https://source.unsplash.com/random?beach",
      title: "Planning Project",
      slug: "wow-project",
      category: "Research & Strategy",
      id: 0,
    },
    { 
      source: "https://source.unsplash.com/random?forest",
      title: "So UXY",
      slug: "such-project",
      category: "UX Design",
      id: 1,
    },
    { 
      source: "https://source.unsplash.com/random?work",
      title: "Sites of web",
      slug: "dat-project-tho",
      category: "Website",
      id: 2
    },
    { 
      source: "https://source.unsplash.com/random?cafe",
      title: "So research right now",
      slug: "research-project",
      category: "Research & Strategy",
      id: 3
    },
    { 
      source: "https://source.unsplash.com/random?phone",
      title: "All the UX",
      slug: "ux-all-the-things",
      category: "UX Design",
      id: 4
    },
    { 
      source: "https://source.unsplash.com/random?happy",
      title: "Internets of Something",
      slug: "project-of-projects",
      category: "Website",
      id: 5
    },
  ];

  const { path } = useRouteMatch();

  return (
    <div className="light feature feature-width full-height">
        <Route
          exact
          path={`${path}`}
          render={() => (
            <div className="feature-content shadow columns portfolio">
              {gallery.map(({id, slug, title, category, source}) =>(
                <div className="column filter" key={id}>
                  <Link to={`${path}/${slug}`}>
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
          )}
        />
    </div>
  );
};

export default Projects
