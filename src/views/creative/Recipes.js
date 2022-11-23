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
import Cheesecake from 'assets/creative/recipes/recipe-cheesecake4.jpg';
import Lasagna from 'assets/creative/recipes/lasagna9.jpg';
import DryRub from 'assets/creative/recipes/dry-rub.jpg';
import Shortbread from 'assets/creative/recipes/recipe-shortbread.jpg';
import BourbonMolasses from 'assets/creative/recipes/bourbon-molasses-done.jpg';

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
    name: "Mains",
    value: "Mains",
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
    title: "World's Best Cheesecake",
    image: Cheesecake,
    link: "/creative/recipes/cheesecake",
    category: "Desserts",
    thumb: "item rectangle",
    id: '781759a9-bc6b-4204-a53c-e3131cb72683',
  },
  { 
    title: "Chicken Lasagna",
    image: Lasagna,
    link: "/creative/recipes/lasagna",
    category: "Mains",
    thumb: "item rectangle",
    id: '175af412-fe01-43f2-ac2b-cea0ddd9e168',
  },
  { 
    title: "Bailey's Fudge",
    image: BaileysFudge,
    link: "/creative/recipes/fudge",
    category: "Desserts",
    thumb: "item",
    id: '268b49ac-879c-46d1-b268-fe21897c7596',
  },
  { 
    title: "Bourbon Molasses Cookies",
    image: BourbonMolasses,
    link: "/creative/recipes/bourbon-molasses-cookie",
    category: "Desserts",
    thumb: "item rectangle",
    id: "5097e68d-637f-435d-b48d-36fdf1ef9ee1",
  },
  { 
    title: "Best-Ever Dry Rub",
    image: DryRub,
    link: "/creative/recipes/dry-rub",
    category: "Misc",
    thumb: "item",
    id: 'e6f538eb-39f0-45a0-b9df-b807117cb9a8',
  },
  { 
    title: "Banana Bread French Toast",
    image: FrenchToast,
    link: "/creative/recipes/french-toast",
    category: "Mains",
    thumb: "item rectangle",
    id: '991eeb7f-7437-486d-8472-3bc4c1dc1b28',
  },
  { 
    title: "Chocolate Orange Swirl Cookies",
    image: ChocolateOrange,
    link: "/creative/recipes/chocolate-orange-swirl",
    category: "Desserts",
    thumb: "item rectangle",
    id: 'abc442c1-6aef-487b-9ccf-45e62a53e471',
  },
  { 
    title: "Shortbread Cookies",
    image: Shortbread,
    link: "/creative/recipes/shortbread",
    category: "Desserts",
    thumb: "item",
    id: 'bb14bb7d-f169-4dfd-829a-263aa7e585f1',
  },
  { 
    title: "Sparkly Pumpkin Pie",
    image: PumpkinPie,
    link: "/creative/recipes/pumpkin-pie",
    category: "Desserts",
    thumb: "item",
    id: 'f76d5449-7bfa-40b2-a55a-109fd957c9c7',
  },
  { 
    title: "Sweet Potato Casserole",
    image: SweetPotatoCasserole,
    link: "/creative/recipes/sweet-potato-casserole",
    category: "Mains",
    thumb: "item",
    id: '57416f61-67fe-4204-aa0d-77956e34d36e',
  },
  { 
    title: "Buffalo Chicken Taquitos",
    image: Taquitos,
    link: "/creative/recipes/buffalo-chicken-taquitos",
    category: "Appetizers",
    thumb: "item",
    id: '8bee53df-db27-4678-82ea-37f076d8ec2a',
  },
  { 
    title: "Snickerdoodle Cookies",
    image: Snickerdoodle,
    link: "/creative/recipes/snickerdoodle",
    category: "Desserts",
    thumb: "item",
    id: "bce43d05-cea1-410e-9811-aff7246e8d97",
  },
  { 
    title: "Twice Baked Potatoes",
    image: TwicePotatoes,
    link: "#",
    category: "Appetizers",
    thumb: "item large-square soon",
    id: 2,
  },
  { 
    title: "Bitterballen",
    image: Bitterballen,
    link: "#",
    category: "Appetizers",
    thumb: "item rectangle soon",
    id: 3,
  },
  { 
    title: "Shrimp Tortellini",
    image: Tortellini,
    link: "#",
    category: "Mains",
    thumb: "item rectangle soon",
    id: 4,
  },
  { 
    title: "Campfire Shrimp",
    image: CampingShrimp,
    link: "#",
    category: "Mains",
    thumb: "item soon",
    id: 6,
  },
  { 
    title: "Blueberry Lemon cake",
    image: BlueberryLemon,
    link: "#",
    category: "Desserts",
    thumb: "item large-square soon",
    id: 7,
  },
  { 
    title: "White Chili",
    image: WhiteChili,
    link: "#",
    category: "Mains",
    thumb: "item soon",
    id: 8,
  },
  { 
    title: "Cardamom Cookies",
    image: Cardamom,
    link: "#",
    category: "Desserts",
    thumb: "item rectangle soon",
    id: 9,
  },
  { 
    title: "Theme Cake: Rainbow",
    image: RainbowCake,
    link: "#",
    category: "Desserts",
    thumb: "item rectangle soon",
    id: 11,
  },
  { 
    title: "Charcuterie Boards",
    image: Charcuterie,
    link: "#",
    category: "Appetizers",
    thumb: "item rectangle soon",
    id: 13,
  },
  { 
    title: "Caesar Cocktail",
    image: Ceasar,
    link: "#",
    category: "Misc",
    thumb: "item rectangle soon",
    id: 14,
  },
  { 
    title: "Cranberry Pecan Rugalach",
    image: Rugalach,
    link: "#",
    category: "Desserts",
    thumb: "item large-square soon",
    id: 15,
  },
  { 
    title: "Traditional Donuts",
    image: Donuts,
    link: "#",
    category: "Desserts",
    thumb: "item soon",
    id: 16,
  },
  { 
    title: "White Drip Cake",
    image: DripCake,
    link: "#",
    category: "Desserts",
    thumb: "item large-square soon",
    id: 17,
  },
  { 
    title: "Theme Cake: Espurr",
    image: ThemeCake,
    link: "#",
    category: "Desserts",
    thumb: "item rectangle soon",
    id: 18,
  },
  { 
    title: "Linzer Cookies",
    image: Linzer,
    link: "#",
    category: "Desserts",
    thumb: "item soon",
    id: 19,
  },
  { 
    title: "Loco Moco",
    image: LocoMoco,
    link: "#",
    category: "Mains",
    thumb: "item rectangle soon",
    id: 21,
  },
];


const Recipes = () => {
  const[filter, setFilter] = useState(null);

  const renderAll = allRecipes.filter(recipe => filter ? recipe.category === filter : true).map(recipe => (
    <div className={recipe.thumb} key={recipe.id}>
      <a href={recipe.link}>
        <img src={recipe.image} alt={recipe.title}/>
        <div className="photo-info">
            <p>{recipe.title}</p>
            <span className="link-text">View recipe</span><FontAwesomeIcon icon={faHatChef} />
        </div>
      </a>
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
            <ul className="sticky-side">
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
