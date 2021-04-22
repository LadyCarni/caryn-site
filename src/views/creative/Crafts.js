import React from "react";
import header from 'assets/creative/craft-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from "@fortawesome/pro-light-svg-icons";
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import stringArt from 'assets/creative/crafts/string-art6.jpg';
import uvPainting from 'assets/creative/crafts/uv-4.jpg';
import vinylElephant from 'assets/creative/crafts/vinyl-elephant.jpg';
import mathMat from 'assets/creative/crafts/sewing-math-mat1.jpg';
import brandedSwag from 'assets/creative/crafts/branded-swag.jpg';
import dollhouseBricks from 'assets/creative/crafts/dollhouse-bricks.jpg';
import tayloredShirts from 'assets/creative/crafts/taylored3.jpg';
import roomVinyls from 'assets/creative/crafts/vinyl-room6.jpg';
import bottleVinyls from 'assets/creative/crafts/vinyl-wine-label.jpg';
import quiltStencil from 'assets/creative/crafts/quilt-stencil1.jpg';
import vinylStudio from 'assets/creative/crafts/vinyl-studio.jpg';
import blueQuilt from 'assets/creative/crafts/quilt-blue3.jpg';
import tanQuilt from 'assets/creative/crafts/tan-quilt1.jpg';

const Crafts = () => {
  const allCrafts = [
    { 
      title: "Vinyl Elephant",
      image: vinylElephant,
      link: "/creative/crafts/vinyl-elephant",
      thumb: "item rectangle",
      id: 2,
    },
    { 
      title: "String Art",
      image: stringArt,
      link: "#",
      thumb: "item soon",
      id: 0,
    },
    { 
      title: "UV Painting",
      image: uvPainting,
      link: "#",
      thumb: "item soon",
      id: 1,
    },
    { 
      title: "Sewing Math Mat",
      image: mathMat,
      link: "#",
      thumb: "item soon",
      id: 3,
    },
    { 
      title: "Branded Swag",
      image: brandedSwag,
      link: "#",
      thumb: "item rectangle soon",
      id: 4,
    },
    { 
      title: "Dollhouse Bricks",
      image: dollhouseBricks,
      link: "#",
      thumb: "item soon",
      id: 5,
    },
    { 
      title: "Taylored Shirts",
      image: tayloredShirts,
      link: "#",
      thumb: "item rectangle soon",
      id: 6,
    },
    { 
      title: "Vinyl Room Signs",
      image: roomVinyls,
      link: "#",
      thumb: "item rectangle soon",
      id: 7,
    },
    { 
      title: "Quilt Stencil",
      image: quiltStencil,
      link: "#",
      thumb: "item rectangle soon",
      id: 8,
    },
    { 
      title: "Vinyl Wine Label",
      image: bottleVinyls,
      link: "#",
      thumb: "item soon",
      id: 9,
    },
    { 
      title: "Blue Quilt",
      image: blueQuilt,
      link: "#",
      thumb: "item soon",
      id: 10,
    },
    { 
      title: "Vinyl Studio",
      image: vinylStudio,
      link: "#",
      thumb: "item rectangle soon",
      id: 11,
    },
    { 
      title: "Sarah's Choice quilt",
      image: tanQuilt,
      link: "#",
      thumb: "item rectangle soon",
      id: 12,
    },
  ];

  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <CreativeHeader
        headerImage={header}
        imageAlt="Sewing project"
      />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="creative-thumbs">
            {allCrafts.map(({id, title, image, link, thumb}) => (
              <div className={thumb} key={id}>
                <img src={image} alt={title}/>
                <div className="photo-info">
                  <a href={link}>
                    <p>{title}</p>
                    <span className="link-text">View craft</span><FontAwesomeIcon icon={faPalette} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crafts;
