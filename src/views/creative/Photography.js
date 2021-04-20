import React from "react";
import header from 'assets/creative/photography-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/pro-light-svg-icons';


const albums = [
  {
    name: "All",
    value: "All",
    id: 0-1,
  },
  {
    name: "New Home Adventures",
    value: "New Home Adventures",
    id: 0-2,
  },
  {
    name: "Costa Rica 2018",
    value: "Costa Rica 2018",
    id: 0-3,
  }
];

class Photography extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [
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
          album: "New Home Adventures",
          thumb: "item rectangle",
          id: 1,
        },
        { 
          title: "Front Porch",
          image: "https://live.staticflickr.com/65535/50365003581_7845256fbb_w.jpg",
          link: "https://flic.kr/p/2jJzNSH",
          album: "New Home Adventures",
          thumb: "item",
          id: 2,
        },
        { 
          title: "Back yard",
          image: "https://live.staticflickr.com/65535/50365004406_bb0e165e71_w.jpg",
          link: "https://flic.kr/p/2jJzP7W",
          album: "New Home Adventures",
          thumb: "item rectangle",
          id: 3,
        },
        { 
          title: "Gravel pit",
          image: "https://live.staticflickr.com/65535/50364307808_e8411b4a6f_w.jpg",
          link: "https://flic.kr/p/2jJwf3C",
          album: "New Home Adventures",
          thumb: "item rectangle",
          id: 4,
        },
        { 
          title: "Caterpillar",
          image: "https://live.staticflickr.com/65535/50365003926_fd0959e4bd_w.jpg",
          link: "https://flic.kr/p/2jJzNYE",
          album: "New Home Adeventures",
          thumb: "item",
          id: 5,
        },
        { 
          title: "Toucan",
          image: "https://live.staticflickr.com/4851/46306584591_1a6a198af3_w.jpg",
          link: "https://flic.kr/p/2dxXmiv",
          album: "Costa Rica 2018",
          thumb: "item",
          id: 6,
        },
        { 
          title: "Jungle",
          image: "https://live.staticflickr.com/4835/31453834057_90dcd25bee_w.jpg",
          link: "https://flic.kr/p/PVt82K",
          album: "Costa Rica 2018",
          thumb: "item",
          id: 7,
        },
        { 
          title: "Frogs",
          image: "https://live.staticflickr.com/4881/45394044895_879be68a3b_w.jpg",
          link: "https://flic.kr/p/2cajm3t",
          album: "Costa Rica 2018",
          thumb: "item",
          id: 8,
        },
        { 
          title: "Lizard",
          image: "https://live.staticflickr.com/4841/32434743668_bf1157ff7b_w.jpg",
          link: "https://flic.kr/p/Rq9xhq",
          album: "Costa Rica 2018",
          thumb: "item",
          id: 9,
        },
        { 
          title: "Morning Mist",
          image: "https://live.staticflickr.com/4916/32434745468_ae87922187_w.jpg",
          link: "https://flic.kr/p/Rq9xPs",
          album: "Costa Rica 2018",
          thumb: "item rectangle",
          id: 10,
        },
        { 
          title: "Sunset",
          image: "https://live.staticflickr.com/4866/32434744838_6a18d213cc_w.jpg",
          link: "https://flic.kr/p/Rq9xCA",
          album: "Costa Rica 2018",
          thumb: "item rectangle",
          id: 11,
        },
      ],
      filterPhotos: []
    };
  }

  componentDidMount() {
    this.setState({
      filterPhotos: this.state.photos
    });
  };

  handleClick = name => {
    let filterPhotos = [];
    if (name === "All") {
      filterPhotos = this.state.photos;
    } else {
      filterPhotos = this.state.photos.filter(
        photo => photo.album === name
      )
    }

    this.setState({filterPhotos});
  }

  render() {
    const renderAll = this.state.filterPhotos.map(photo => (
      <div className={photo.thumb} key={photo.id}>
        <img src={photo.image} alt={photo.title}/>
        <div className="photo-info">
          <p>{photo.title}</p>
          <a href={photo.link} target="_blank" rel="noreferrer">View original<FontAwesomeIcon icon={faExternalLink} /></a>
        </div>
      </div>
    ));

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
                {albums.map(({id, name, value}) => (
                  <li key={id}>
                    <button value={value} onClick={this.handleClick.bind(this, name)}>{name}</button>
                  </li>
                ))}
                <li>New Home Adventures</li>
                <li>Costa Rica 2018</li>
              </ul>
            </div>
            <div className="creative-thumbs photos">
              {renderAll}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photography;
