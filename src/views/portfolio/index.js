// import Placeholder from './Placeholder';
import ConnectApi from "./ConnectApi";
import DevLondon from "./DevLondon";
import Portfolio from "./Portfolio";
import KnakCaseStudy from './KnakCaseStudy';
import FongoWorks from "./FongoWorks";
import LunaNova from "./LunaNova";
import Lifestyle from "./Lifestyle";

export const PortfolioRoutes = [
  { path: "/portfolio", name: "Portfolio", component: Portfolio, exact: true },
  { path: "/portfolio/connect-api", name: "Connect API", component: ConnectApi },
  { path: "/portfolio/dev-london", name: "Dev London", component: DevLondon },
  { path: "/portfolio/knak-ux-case-study", name: "Knak Case Study", component: KnakCaseStudy },
  { path: "/portfolio/luna-nova", name: "Luna Nova", component: LunaNova },
  { path: "/portfolio/fongo-works", name: "Fongo Works", component: FongoWorks },
  { path: "/portfolio/lifestyle-app", name: "Lifestyle App", component: Lifestyle },
];
