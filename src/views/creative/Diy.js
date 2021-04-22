import React from "react";
import header from 'assets/creative/diy-header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/pro-light-svg-icons';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import pipeDesk from 'assets/creative/diy/pipe-desk14.jpg';
import buffet from 'assets/creative/diy/buffet23.jpg';
import floatingDesk from 'assets/creative/diy/floating-desk5.jpg';
import stairsRefinish from 'assets/creative/diy/stairs19.jpg';
import airConditioner from 'assets/creative/diy/air-conditioner-lattice2.jpg';
import chairRefurb from 'assets/creative/diy/antique-chair4.jpg';
import sideTable from 'assets/creative/diy/side-table3.jpg';
import coffeeTable from 'assets/creative/diy/table-update3.jpg';
import bookshelfUpdate from 'assets/creative/diy/bookshelf5.jpg';
import vegPlanter from 'assets/creative/diy/planter4.jpg';
import geometricPaint from 'assets/creative/diy/paint-angles7.jpg';
import solarLight from 'assets/creative/diy/light-fix4.jpg';
import loftBed from 'assets/creative/diy/loft-bed6.jpg';
import vanityUpdate from 'assets/creative/diy/refurb-vanity5.jpg';
import antiqueTable from 'assets/creative/diy/side-table-update11.jpg';
import workbench from 'assets/creative/diy/workbench2.jpg';


const Diy = () => {
  const allDiy = [
    { 
      title: "Mixed softwood pipe desk",
      image: pipeDesk,
      link: "/creative/diy/pipe-desk",
      thumb: "item rectangle",
      id: 0,
    },
    {
      title: "Buffet refurbish",
      image: buffet,
      link: "#",
      thumb: "item large-square soon",
      id: 1,
    },
    {
      title: "Floating desk",
      image: floatingDesk,
      link: "#",
      thumb: "item rectangle soon",
      id: 2,
    },
    {
      title: "Stairs refinish",
      image: stairsRefinish,
      link: "#",
      thumb: "item large-square soon",
      id: 3,
    },
    {
      title: "Air conditioner cover",
      image: airConditioner,
      link: "#",
      thumb: "item rectangle soon",
      id: 4,
    },
    {
      title: "Antique chair refurbish",
      image: chairRefurb,
      link: "#",
      thumb: "item soon",
      id: 5,
    },
    {
      title: "Side table update",
      image: sideTable,
      link: "#",
      thumb: "item soon",
      id: 6,
    },
    {
      title: "Coffee table update",
      image: coffeeTable,
      link: "#",
      thumb: "item rectangle soon",
      id: 7,
    },
    {
      title: "Bookshelf update",
      image: bookshelfUpdate,
      link: "#",
      thumb: "item soon",
      id: 8,
    },
    {
      title: "Vegetable planter",
      image: vegPlanter,
      link: "#",
      thumb: "item rectangle soon",
      id: 9,
    },
    {
      title: "Geometric paint",
      image: geometricPaint,
      link: "#",
      thumb: "item rectangle soon",
      id: 10,
    },
    {
      title: "Loft bed",
      image: loftBed,
      link: "#",
      thumb: "item soon",
      id: 12,
    },
    {
      title: "Solar light fix",
      image: solarLight,
      link: "#",
      thumb: "item rectangle soon",
      id: 11,
    },
    {
      title: "Workbench",
      image: workbench,
      link: "#",
      thumb: "item soon",
      id: 15,
    },
    {
      title: "Vanity update",
      image: vanityUpdate,
      link: "#",
      thumb: "item soon",
      id: 13,
    },
    {
      title: "Antique table refurbish",
      image: antiqueTable,
      link: "#",
      thumb: "item rectangle soon",
      id: 14,
    },
  ];

  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <CreativeHeader
        headerImage={header}
        imageAlt="Refinished table"
      />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="creative-thumbs">
            {allDiy.map(({id, title, image, link, thumb}) => (
              <div className={thumb} key={id}>
                <img src={image} alt={title}/>
                <div className="photo-info">
                  <a href={link}>
                    <p>{title}</p>
                    <span className="link-text">View project</span><FontAwesomeIcon icon={faHammer} />
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

export default Diy;
