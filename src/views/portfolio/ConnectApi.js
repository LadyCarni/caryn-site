import React from "react";
import { PortfolioRoutes } from "./index";
import PortfolioHeader from "../../components/portfolioHeader";
import usePrism from "hooks/usePrism";

function ConnectApi() {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
        routes={PortfolioRoutes}
        imageAlt="placeholder"
        headerTitle="Connect API"
        headerSubtitle="Restaurant operations for the world of delivery"
        headerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium et non tenetur illo suscipit culpa iusto fuga eum est veritatis deleniti, excepturi qui, magni ea ipsa aliquid nihil autem?"
        headerDisciplines={[
          "Front-end Development (Vue)",
          "Web Design",
          "UX",
        ]}
      />
      <div className="feature feature-width">
        <div className="project-content flex column">
          <div className="article">
            <p className="external-link"><a href="https://connect-api.flyt.io/" target="_blank" rel="noreferrer">Connect API</a></p>
            <h2>Context</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              excepturi eaque at corrupti. Debitis reprehenderit similique
              officia neque hic odio, corrupti animi rerum minima, ex provident.
              Aut iste porro magni.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectApi;
