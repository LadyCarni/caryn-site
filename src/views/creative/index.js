// import Placeholder from './Placeholder';
import Creative from "./Creative";
import Crafts from "./Crafts";
import Diy from "./Diy";
import Recipes from "./Recipes";
import Photography from "./Photography";
import Cheesecake from "./recipes/Cheesecake";
import Lasagna from "./recipes/Lasagna";
import Fudge from "./recipes/Baileysfudge";
import VinylElephant from "./crafts/VinylElephant";
import PipeDesk from "./diy/PipeDesk";

export const CreativeRoutes = [
  { path: "/creative", name: "Creative", component: Creative, exact: true },
  { path: "/creative/crafts", name: "Crafts", component: Crafts },
  { path: "/creative/crafts/vinyl-elephant", name: "Vinyl Elephant", component: VinylElephant },
  { path: "/creative/recipes", name: "Recipes", component: Recipes },
  { path: "/creative/recipes/cheesecake", name: "Cheesecake", component: Cheesecake },
  { path: "/creative/recipes/lasagna", name: "Chicken Lasagna", component: Lasagna },
  { path: "/creative/recipes/fudge", name: "Bailey's Fudge", component: Fudge },
  { path: "/creative/diy", name: "DIY", component: Diy },
  { path: "/creative/diy/pipe-desk", name: "Pipe Desk", component: PipeDesk },
  { path: "/creative/photography", name: "Photography", component: Photography },
];
