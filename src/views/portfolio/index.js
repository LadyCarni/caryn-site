import CaseStudy from "./TemplateCaseStudy";
import DevLondon from "./DevLondon";
import Portfolio from "./Portfolio";

export const PortfolioRoutes = [
  { path: "/portfolio", name: "Portfolio", component: Portfolio, exact: true },
  { path: "/portfolio/connect-api", name: "Connect API", component: CaseStudy },
  { path: "/portfolio/dev-london", name: "Dev London", component: DevLondon },
];
