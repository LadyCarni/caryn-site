import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import devLondon from "assets/portfolio/dev-london.jpg";
import knakApp from "assets/portfolio/knak-app.jpg";
const Projects = ({ match }) => {
  const gallery = [
    { 
      source: "https://source.unsplash.com/random?beach",
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
      source: knakApp,
      title: "Knak UX Case Study",
      slug: "knak-ux-case-study",
      category: "Product Development",
      id: 2
    },
    { 
      source: "https://source.unsplash.com/random?work",
      title: "Luna Nova",
      slug: "luna-nova",
      category: "Front-end Development",
      id: 3
    },
    { 
      source: "https://source.unsplash.com/random?cafe",
      title: "Fongo Works",
      slug: "fongo-works",
      category: "Web App",
      id: 4
    },
    { 
      source: "https://source.unsplash.com/random?phone",
      title: "Financial App *",
      slug: "financial-app",
      category: "Web Design",
      id: 5
    },
    { 
      source: "https://source.unsplash.com/random?happy",
      title: "Lifestyle App *",
      slug: "lifestyle-app",
      category: "Web Design",
      id: 6
    },
    { 
      source: "https://source.unsplash.com/random?dogs",
      title: "WeDiversify",
      slug: "we-diversify",
      category: "Web Design",
      id: 7
    },
    { 
      source: "https://source.unsplash.com/random?cat",
      title: "League of Packages",
      slug: "league-of-packages",
      category: "Web Design",
      id: 8
    },
    { 
      source: "https://source.unsplash.com/random?mountain",
      title: "Practical UX",
      slug: "practical-ux",
      category: "UX Strategy",
      id: 9
    },
    { 
      source: "https://source.unsplash.com/random?coach",
      title: "Wireframe workshop",
      slug: "wireframe-workshop",
      category: "Coaching",
      id: 10
    },
    { 
      source: "https://source.unsplash.com/random?wireframe",
      title: "Wireframe design patterns",
      slug: "wireframe-patterns",
      category: "Coaching",
      id: 11
    },
    { 
      source: "https://source.unsplash.com/random?wireframe",
      title: "Project Utopia",
      slug: "project-utopia",
      category: "Speaking",
      id: 12
    },
    { 
      source: "https://source.unsplash.com/random?partners",
      title: "Dev + Designer = <3",
      slug: "dev-designer-pairing",
      category: "Speaking",
      id: 13
    },
    { 
      source: "https://source.unsplash.com/random?presentation",
      title: "Public Speaking",
      slug: "public-speaking",
      category: "Speaking",
      id: 14
    },
    { 
      source: "https://source.unsplash.com/random?animation",
      title: "Credit Card",
      slug: "credit-card",
      category: "Interaction Design",
      id: 15
    },
    { 
      source: "https://source.unsplash.com/random?graph",
      title: "Donation Graphs",
      slug: "donation-graphs",
      category: "Interaction Design",
      id: 16
    },
    { 
      source: "https://source.unsplash.com/random?small",
      title: "Interaction Snippets",
      slug: "interaction-snippets",
      category: "Interaction Design",
      id: 17
    },
  ];

  const { path } = useRouteMatch();

  return (
    <>
      <h1>Welcome to the greatest portfolio on this site</h1>
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
      <span className="gotcha">* To protect the privacy of the client, this project's identity has been hidden</span>
    </>
  );
};

export default Projects
