import React from "react";
// import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";

const CaseStudy = () => {
  return (
    <>
      <PortfolioHeader
        headerImage="https://images.unsplash.com/photo-1598149885212-c92671611588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=958&q=80"
        // routes={PortfolioRoutes}
        imageAlt="placeholder"
        headerTitle="Under Construction"
        headerSubtitle="Come back soon!"
        headerDescription=""
        headerDisciplines={[]}
      />
    </>
  );
};

export default CaseStudy;
