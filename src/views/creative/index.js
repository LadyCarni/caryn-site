// import Placeholder from './Placeholder';
import Creative from "./Creative";
import Crafts from "./Crafts";
import Diy from "./Diy";
import Recipes from "./Recipes";
import Photography from "./Photography";
import Cheesecake from "./recipes/Cheesecake";
import Lasagna from "./recipes/Lasagna";
import DryRub from "./recipes/DryRub";
import BananaBread from "./recipes/Bananabread";
import Fudge from "./recipes/Baileysfudge";
import ChocolateOrange from "./recipes/OrangeChocolateSwirl";
import VinylElephant from "./crafts/VinylElephant";
import PipeDesk from "./diy/PipeDesk";
import Shortbread from "./recipes/Shortbread";
import PumpkinPie from "./recipes/PumpkinPie";
import SweetPotatoCasserole from "./recipes/SweetPotatoCasserole";
import TaquitoRecipe from "./recipes/Taquitos";

export const CreativeRoutes = [
  { path: "/creative", name: "Creative", component: Creative, exact: true },
  { path: "/creative/crafts", name: "Crafts", component: Crafts },
  { path: "/creative/crafts/vinyl-elephant", name: "Vinyl Elephant", component: VinylElephant },
  { path: "/creative/recipes", name: "Recipes", component: Recipes },
  { path: "/creative/recipes/cheesecake", name: "Cheesecake", component: Cheesecake },
  { path: "/creative/recipes/lasagna", name: "Chicken Lasagna", component: Lasagna },
  { path: "/creative/recipes/dry-rub", name: "Best-Ever Dry Rub", component: DryRub },
  { path: "/creative/recipes/fudge", name: "Bailey's Fudge", component: Fudge },
  { path: "/creative/recipes/shortbread", name: "Shortbread cookies", component: Shortbread },
  { path: "/creative/recipes/pumpkin-pie", name: "Sparkly Pumpkin Pie", component: PumpkinPie },
  { path: "/creative/recipes/sweet-potato-casserole", name: "Sweet Potato Casserole", component: SweetPotatoCasserole },
  { path: "/creative/recipes/buffalo-chicken-taquitos", name: "Buffalo Chicken Taquitos", component: TaquitoRecipe },
  { path: "/creative/recipes/chocolate-orange-swirl", name: "Chocolate Orange Swirl cookies", component: ChocolateOrange },
  { path: "/creative/recipes/french-toast", name: "Banana Bread French Toast", component: BananaBread },
  { path: "/creative/diy", name: "DIY", component: Diy },
  { path: "/creative/diy/pipe-desk", name: "Pipe Desk", component: PipeDesk },
  { path: "/creative/photography", name: "Photography", component: Photography },
];
