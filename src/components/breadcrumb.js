import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Breadcrumb ({ routes, className }) {
  const { path } = useRouteMatch();

  const filteredRoutes = routes.filter((route) => {
    return path.includes(route.path);
  });

  return (
    <div className={`${className} breadcrumb`}>
      <ul>
        {filteredRoutes.map((route, index) => {
          return (
            <li key={route.name}>
              {index !== filteredRoutes.length - 1 && (
                <Link to={route.path} aria-label="go back">
                  {route.name}
                </Link>
              )}
              {index === filteredRoutes.length - 1 && route.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
