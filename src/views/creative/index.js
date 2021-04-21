// import Placeholder from './Placeholder';
import Creative from "./Creative";
import Crafts from "./Crafts";
import Diy from "./Diy";
import Recipes from "./Recipes";
import Photography from "./Photography";
import Cheesecake from "./recipes/Cheesecake";

export const CreativeRoutes = [
  { path: "/creative", name: "Creative", component: Creative, exact: true },
  { path: "/creative/crafts", name: "Crafts", component: Crafts },
  { path: "/creative/recipes", name: "Recipes", component: Recipes },
  { path: "/creative/recipes/cheesecake", name: "Cheesecake", component: Cheesecake },
  { path: "/creative/diy", name: "DIY", component: Diy },
  { path: "/creative/photography", name: "Photography", component: Photography },
];
