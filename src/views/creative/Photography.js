import React from "react";
import header from 'assets/creative/photography-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/pro-light-svg-icons';


const Photography = () => {
  const photos = [
    { 
      title: "Front view",
      image: "https://live.staticflickr.com/65535/50365003501_a5a7b08c3c_w.jpg",
      link: "https://flic.kr/p/2jJzNRk",
      album: "New Home Adventures",
      thumb: "item rectangle",
      id: 0,
    },
    { 
      title: "Back view",
      image: "https://live.staticflickr.com/65535/50364308133_6787c9422e_w.jpg",
      link: "https://flic.kr/p/2jJwf9e",
      album: "New Home Adventure",
      thumb: "item rectangle",
      id: 1,
    },
    { 
      title: "Front Porch",
      image: "https://live.staticflickr.com/65535/50365003581_7845256fbb_w.jpg",
      link: "https://flic.kr/p/2jJzNSH",
      album: "New Home Adventure",
      thumb: "item",
      id: 2,
    },
    { 
      title: "Back yard",
      image: "https://live.staticflickr.com/65535/50365004406_bb0e165e71_w.jpg",
      link: "https://flic.kr/p/2jJzP7W",
      album: "New Home Adventure",
      thumb: "item rectangle",
      id: 3,
    },
    { 
      title: "Gravel pit",
      image: "https://live.staticflickr.com/65535/50364307808_e8411b4a6f_w.jpg",
      link: "https://flic.kr/p/2jJwf3C",
      album: "New Home Adventure",
      thumb: "item rectangle",
      id: 4,
    },
    { 
      title: "Caterpillar",
      image: "https://live.staticflickr.com/65535/50365003926_fd0959e4bd_w.jpg",
      link: "https://flic.kr/p/2jJzNYE",
      album: "New Home Adeventure",
      thumb: "item",
      id: 5,
    }
  ]
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <CreativeHeader
        headerImage={header}
        imageAlt="Jellyfish"
      />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="creative-nav">
            <ul>
              <li>New Home Adventures</li>
            </ul>
          </div>
          <div className="creative-thumbs photos">
            {photos.map(({id, title, thumb, image, link, album}) =>(
              <div className={thumb} key={id}>
                <img src={image} alt={title}/>
                <div className="photo-info">
                  <p>{title}</p>
                  <a href={link} target="_blank" rel="noreferrer">View original<FontAwesomeIcon icon={faExternalLink} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
