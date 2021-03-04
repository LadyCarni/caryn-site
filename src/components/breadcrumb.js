import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Breadcrumb = ({ routes }) => {
  const { path } = useRouteMatch();

  return (
    <div className="breadcrumb feature-width">
      <ul>
        {routes.map((route, index) => {
          if (path.includes(route.path)) {
            return (
              <li key={route.name}>
                {index !== routes.length - 1 && path.includes(route.path) && (
                  <Link to={route.path} aria-label="go back">
                    {route.name}
                  </Link>
                )}
                {index === routes.length - 1 && route.name}
              </li>
            );
          }

          return null;
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
