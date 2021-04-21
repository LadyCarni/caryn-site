import React, { useState } from "react";
import { faHatChef } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import header from 'assets/creative/creative-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import BaileysFudge from 'assets/creative/recipes/recipe-baileys-fudge.jpg';
import FrenchToast from 'assets/creative/recipes/recipe-banana-bread-french-toast4.jpg';
import TwicePotatoes from 'assets/creative/recipes/recipe-double-spuds.jpg';
import Bitterballen from 'assets/creative/recipes/recipe-bitterballen1.jpg';
import Tortellini from 'assets/creative/recipes/recipe-shrimp-tortellini.jpg';
import SweetPotatoCasserole from 'assets/creative/recipes/recipe-sweet-potato-casserole1.jpg';
import CampingShrimp from 'assets/creative/recipes/recipe-camping-pack-shrimp.jpg';
import BlueberryLemon from 'assets/creative/recipes/recipe-blueberry-lemon3.jpg';
import WhiteChili from 'assets/creative/recipes/recipe-white-bean-chili3.jpg';
import Cardamom from 'assets/creative/recipes/recipe-cardamom-cookies1.jpg';
import ChocolateOrange from 'assets/creative/recipes/recipe-chocolate-orange1.jpg';
import RainbowCake from 'assets/creative/recipes/recipe-rainbow-cake4.jpg';
import Snickerdoodle from 'assets/creative/recipes/recipe-snickerdoodle3.jpg';
import Charcuterie from 'assets/creative/recipes/recipe-charcuterie4.jpg';
import Ceasar from 'assets/creative/recipes/recipe-ceasar.jpg';
import Rugalach from 'assets/creative/recipes/recipe-cranberry-rugalach.jpg';
import Donuts from 'assets/creative/recipes/recipe-donuts.jpg';
import DripCake from 'assets/creative/recipes/recipe-drip-cake.jpg';
import ThemeCake from 'assets/creative/recipes/recipe-espurr-cake3.jpg';
import Linzer from 'assets/creative/recipes/recipe-linzer.jpg';
import PumpkinPie from 'assets/creative/recipes/recipe-pumpkin-pie.jpg';
import LocoMoco from 'assets/creative/recipes/recipe-loco-moco.jpg';
import Taquitos from 'assets/creative/recipes/recipe-buffalo-taquitos.jpg';
import Cheesecake from 'assets/creative/recipes/recipe-cheesecake4.jpg'

const categories = [
  {
    name: "All",
    value: null,
    id: 0-1,
  },
  {
    name: "Desserts",
    value: "Desserts",
    id: 0-2,
  },
  {
    name: "Appetizers",
    value: "Appetizers",
    id: 0-3,
  },
  {
    name: "Main Dishes",
    value: "Main Dishes",
    id: 0-4,
  },
  {
    name: "Misc",
    value: "Misc",
    id: 0-5,
  }
];

const allRecipes = [
  { 
    title: "Bailey's Fudge",
    image: BaileysFudge,
    link: "#",
    category: "Desserts",
    thumb: "item",
    id: 0,
  },
  { 
    title: "Banana Bread French Toast",
    image: FrenchToast,
    link: "#",
    category: "Main Dishes",
    thumb: "item rectangle",
    id: 1,
  },
  { 
    title: "World's Best Cheesecake",
    image: Cheesecake,
    link: "/creative/recipes/cheesecake",
    category: "Desserts",
    thumb: "item rectangle",
    id: 23,
  },
  { 
    title: "Twice Baked Potatoes",
    image: TwicePotatoes,
    link: "#",
    category: "Appetizers",
    thumb: "item large-square",
    id: 2,
  },
  { 
    title: "Bitterballen",
    image: Bitterballen,
    link: "#",
    category: "Appetizers",
    thumb: "item rectangle",
    id: 3,
  },
  { 
    title: "Shrimp Tortellini",
    image: Tortellini,
    link: "#",
    category: "Main Dishes",
    thumb: "item rectangle",
    id: 4,
  },
  { 
    title: "Sweet Potato Casserole",
    image: SweetPotatoCasserole,
    link: "#",
    category: "Appetizers",
    thumb: "item",
    id: 5,
  },
  { 
    title: "Campfire Shrimp",
    image: CampingShrimp,
    link: "#",
    category: "Main Dishes",
    thumb: "item",
    id: 6,
  },
  { 
    title: "Blueberry Lemon cake",
    image: BlueberryLemon,
    link: "#",
    category: "Desserts",
    thumb: "item large-square",
    id: 7,
  },
  { 
    title: "White Chili",
    image: WhiteChili,
    link: "#",
    category: "Main Dishes",
    thumb: "item",
    id: 8,
  },
  { 
    title: "Cardamom Cookies",
    image: Cardamom,
    link: "#",
    category: "Desserts",
    thumb: "item rectangle",
    id: 9,
  },
  { 
    title: "Chocolate Orange Swirl Cookies",
    image: ChocolateOrange,
    link: "#",
    category: "Desserts",
    thumb: "item",
    id: 10,
  },
  { 
    title: "Theme Cake: Rainbow",
    image: RainbowCake,
    link: "#",
    category: "Desserts",
    thumb: "item rectangle",
    id: 11,
  },
  { 
    title: "Snickerdoodle Cookies",
    image: Snickerdoodle,
    link: "#",
    category: "Desserts",
    thumb: "item",
    id: 12,
  },
  { 
    title: "Charcuterie Boards",
    image: Charcuterie,
    link: "#",
    category: "Appetizers",
    thumb: "item rectangle",
    id: 13,
  },
  { 
    title: "Caesar Cocktail",
    image: Ceasar,
    link: "#",
    category: "Misc",
    thumb: "item rectangle",
    id: 14,
  },
  { 
    title: "Cranberry Pecan Rugalach",
    image: Rugalach,
    link: "#",
    category: "Desserts",
    thumb: "item large-square",
    id: 15,
  },
  { 
    title: "Traditional Donuts",
    image: Donuts,
    link: "#",
    category: "Desserts",
    thumb: "item",
    id: 16,
  },
  { 
    title: "White Drip Cake",
    image: DripCake,
    link: "#",
    category: "Desserts",
    thumb: "item large-square",
    id: 17,
  },
  { 
    title: "Theme Cake: Espurr",
    image: ThemeCake,
    link: "#",
    category: "Desserts",
    thumb: "item rectangle",
    id: 18,
  },
  { 
    title: "Linzer Cookies",
    image: Linzer,
    link: "#",
    category: "Desserts",
    thumb: "item",
    id: 19,
  },
  { 
    title: "Sparkly Pumpkin Pie",
    image: PumpkinPie,
    link: "#",
    category: "Desserts",
    thumb: "item",
    id: 20,
  },
  { 
    title: "Loco Moco",
    image: LocoMoco,
    link: "#",
    category: "Desserts",
    thumb: "item rectangle",
    id: 21,
  },    { 
    title: "Buffalo Chicken Taquitos",
    image: Taquitos,
    link: "#",
    category: "Appetizers",
    thumb: "item",
    id: 22,
  },
];


const Recipes = () => {
  const[filter, setFilter] = useState(null);

  const renderAll = allRecipes.filter(recipe => filter ? recipe.category === filter : true).map(recipe => (
    <div className={recipe.thumb} key={recipe.id}>
      <img src={recipe.image} alt={recipe.title}/>
      <div className="photo-info">
        <p>{recipe.title}</p>
        <a href={recipe.link}>View recipe<FontAwesomeIcon icon={faHatChef} /></a>
      </div>
    </div>
  ));

  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <CreativeHeader
        headerImage={header}
        imageAlt="Blueberry Lemon pie"
      />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="creative-nav">
            <ul>
              {categories.map(({id, name, value}) => (
                <li key={id} onClick={() => setFilter(value)} className={`${filter === value ? 'active' : '' }`}>
                  {name}
                  {/* ({allRecipes.filter(recipe => value ? recipe.category === value : true).length}) */}
                </li>
              ))}
            </ul>
          </div>
          <div className="creative-thumbs">
            {renderAll}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
