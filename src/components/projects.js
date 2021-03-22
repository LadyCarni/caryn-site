import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import devLondon from "assets/portfolio/dev-london.jpg";
import knakWires from "assets/portfolio/knak-wires.jpg";
import connectFeature from "assets/portfolio/connect-cover.jpg";
import fongoCover from 'assets/portfolio/fongo-cover.png';
import lunaCover from 'assets/portfolio/luna-cover.png';
const Projects = ({ match }) => {
  const gallery = [
    { 
      source: connectFeature,
      title: "Connect API",
      slug: "connect-api",
      category: "Product Design, Front-end Dev",
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
      source: knakWires,
      title: "Knak UX Case Study",
      slug: "knak-ux-case-study",
      category: "UX, Product Development",
      id: 2
    },
    { 
      source: lunaCover,
      title: "Luna Nova",
      slug: "luna-nova",
      category: "Web Design, Front-end Dev",
      id: 3
    },
    { 
      source: fongoCover,
      title: "Fongo Works",
      slug: "fongo-works",
      category: "Web App",
      id: 4
    },
    { 
      source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
      title: "Financial App *",
      slug: "financial-app",
      category: "Web Design",
      id: 5
    },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Lifestyle App *",
    //   slug: "lifestyle-app",
    //   category: "Web Design",
    //   id: 6
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "WeDiversify",
    //   slug: "we-diversify",
    //   category: "Web Design",
    //   id: 7
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "League of Packages",
    //   slug: "league-of-packages",
    //   category: "Web Design",
    //   id: 8
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Practical UX",
    //   slug: "practical-ux",
    //   category: "UX Strategy",
    //   id: 9
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Wireframe workshop",
    //   slug: "wireframe-workshop",
    //   category: "Coaching",
    //   id: 10
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Wireframe design patterns",
    //   slug: "wireframe-patterns",
    //   category: "Coaching",
    //   id: 11
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Project Utopia",
    //   slug: "project-utopia",
    //   category: "Speaking",
    //   id: 12
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Dev + Designer = <3",
    //   slug: "dev-designer-pairing",
    //   category: "Speaking",
    //   id: 13
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Public Speaking",
    //   slug: "public-speaking",
    //   category: "Speaking",
    //   id: 14
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Credit Card",
    //   slug: "credit-card",
    //   category: "Interaction Design",
    //   id: 15
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Donation Graphs",
    //   slug: "donation-graphs",
    //   category: "Interaction Design",
    //   id: 16
    // },
    // { 
    //   source: "https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80",
    //   title: "Interaction Snippets",
    //   slug: "interaction-snippets",
    //   category: "Interaction Design",
    //   id: 17
    // },
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
