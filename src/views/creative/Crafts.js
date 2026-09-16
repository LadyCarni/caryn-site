import React from "react";
import header from 'assets/creative/craft-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from "@fortawesome/pro-light-svg-icons";
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import vinylElephant from 'assets/creative/crafts/vinyl-elephant.jpg';
import roomVinyls from 'assets/creative/crafts/vinyl-room6.jpg';
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
      title: "Sarah's Choice quilt",
      image: tanQuilt,
      link: "/creative/crafts/sarahs-choice-quilt",
      thumb: "item rectangle",
      id: crypto.randomUUID(),
    },
    {
      title: "Vinyl Room Signs",
      image: roomVinyls,
      link: "#",
      thumb: "item rectangle soon",
      id: 7,
    },
    {
      title: "Blue Quilt",
      image: blueQuilt,
      link: "#",
      thumb: "item soon",
      id: 10,
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
              <a href={link}>
                <img src={image} alt={title}/>
                <div className="photo-info">
                  <p>{title}</p>
                  <span className="link-text">View craft</span><FontAwesomeIcon icon={faPalette} />
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crafts;