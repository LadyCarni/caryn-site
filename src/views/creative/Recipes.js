import React from "react";
import header from 'assets/creative/creative-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";


const Recipes = () => {
  const recipes = [
    { 
      title: "Bailey's Fudge",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 0,
    },
    { 
      title: "Banana Bread French Toast",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Main Dishes",
      thumb: "item",
      id: 1,
    },
    { 
      title: "Twice Baked Potatoes",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Appetizers",
      thumb: "item",
      id: 2,
    },
    { 
      title: "Bitterballen",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Appetizers",
      thumb: "item",
      id: 3,
    },
    { 
      title: "Shrimp Tortellini",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Main Dishes",
      thumb: "item rectangle",
      id: 4,
    },
    { 
      title: "Sweet Potato Casserole",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Appetizers",
      thumb: "item",
      id: 5,
    },
    { 
      title: "Campfire Shrimp",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Main Dishes",
      thumb: "item",
      id: 6,
    },
    { 
      title: "Blueberry Lemon cake",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item large-square",
      id: 7,
    },
    { 
      title: "White Chili",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Main Dishes",
      thumb: "item",
      id: 8,
    },
    { 
      title: "Cardamom Cookies",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item large-square",
      id: 9,
    },
    { 
      title: "Chocolate Orange Swirl Cookies",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 10,
    },
    { 
      title: "Theme Cake: Rainbow",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item rectangle",
      id: 11,
    },
    { 
      title: "Snickerdoodle Cookies",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 12,
    },
    { 
      title: "Charcuterie Boards",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Appetizers",
      thumb: "item large-square",
      id: 13,
    },
    { 
      title: "Caesar Cocktail",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Misc",
      thumb: "item rectangle",
      id: 14,
    },
    { 
      title: "Cranberry Pecan Rugalach",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 15,
    },
    { 
      title: "Traditional Donuts",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 16,
    },
    { 
      title: "White Drip Cake",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 17,
    },
    { 
      title: "Theme Cake: Espurr",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 18,
    },
    { 
      title: "Linzer Cookies",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item rectangle",
      id: 19,
    },
    { 
      title: "Sparkly Pumpkin Pie",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item",
      id: 20,
    },
    { 
      title: "Loco Moco",
      image: "https://source.unsplash.com/random?recipe",
      link: "#",
      category: "Desserts",
      thumb: "item rectangle",
      id: 21,
    },
  ];

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
              <li>Desserts</li>
              <li>Appetizers</li>
              <li>Main Dishes</li>
              <li>Misc</li>
            </ul>
          </div>
          <div className="creative-thumbs">
            {recipes.map(({id, title, thumb, image, link, category}) =>(
              <div className={thumb} key={id}>
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
