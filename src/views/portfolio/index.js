import ConnectApi from "./ConnectApi";
import DevLondon from "./DevLondon";
import Portfolio from "./Portfolio";
import KnakCaseStudy from './KnakCaseStudy';

export const PortfolioRoutes = [
  { path: "/portfolio", name: "Portfolio", component: Portfolio, exact: true },
  { path: "/portfolio/connect-api", name: "Connect API", component: ConnectApi },
  { path: "/portfolio/dev-london", name: "Dev London", component: DevLondon },
  { path: "/portfolio/knak-ux-case-study", name: "Knak Case Study", component: KnakCaseStudy },
];
