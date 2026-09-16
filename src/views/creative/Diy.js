import React from "react";
import header from 'assets/creative/diy-header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/pro-light-svg-icons';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import pipeDesk from 'assets/creative/diy/pipe-desk14.jpg';
import buffet from 'assets/creative/diy/buffet23.jpg';
import stairsRefinish from 'assets/creative/diy/stairs19.jpg';
import airConditioner from 'assets/creative/diy/air-conditioner-lattice2.jpg';
import bookshelfUpdate from 'assets/creative/diy/bookshelf5.jpg';
import geometricPaint from 'assets/creative/diy/paint-angles7.jpg';
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
      title: "Loft bed",
      image: loftBed,
      link: "/creative/diy/loft-bed",
      thumb: "item",
      id: crypto.randomUUID(),
    },
    {
      title: "Buffet refurbish",
      image: buffet,
      link: "/creative/diy/buffet-refurbish",
      thumb: "item large-square",
      id: crypto.randomUUID(),
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
      title: "Bookshelf update",
      image: bookshelfUpdate,
      link: "#",
      thumb: "item soon",
      id: 8,
    },
    {
      title: "Geometric paint",
      image: geometricPaint,
      link: "#",
      thumb: "item rectangle soon",
      id: 10,
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
                <a href={link}>
                <img src={image} alt={title}/>
                  <div className="photo-info">
                    <p>{title}</p>
                    <span className="link-text">View project</span><FontAwesomeIcon icon={faHammer} />
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

export default Diy;
