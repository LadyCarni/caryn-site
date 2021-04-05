import Placeholder from './Placeholder';
import Creative from "./Creative";

export const CreativeRoutes = [
  { path: "/creative", name: "Creative", component: Creative, exact: true },
  { path: "/creative/crafts", name: "Crafts", component: Placeholder },
  { path: "/creative/recipes", name: "Recipes", component: Placeholder },
  { path: "/creative/diy", name: "DIY", component: Placeholder },
  { path: "/creative/photography", name: "Photography", component: Placeholder },
];
