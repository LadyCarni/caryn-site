import React, {useState} from "react";
import header from 'assets/creative/photography-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/pro-light-svg-icons';

const albums = [
  {
    name: "All",
    value: null,
    id: 'c3b3ea4e-12b9-4531-afe7-d9acde6d8040',
  },
  {
    name: "New Home Adventures",
    value: "New Home Adventures",
    id: '2e56f845-1d7c-432c-89a9-80f28c0ef475',
  },
  {
    name: "Costa Rica 2018",
    value: "Costa Rica 2018",
    id: 'b8a4678a-11e7-4576-8bb5-69fcfd2b6ec5',
  },
  {
    name: "London, UK",
    value: "London, UK",
    id: '0eb73c8c-88be-4c6d-8dd8-0d26a277d325',
  },
  {
    name: "Garden",
    value: "Garden",
    id: '3ded49b3-f6b4-4c25-a978-e315256cbecc',
  },
  {
    name: "Hawaii",
    value: "Hawaii",
    id: 'fbc025a7-6e12-4595-a70e-2d0c1ef4e0c9',
  },
  {
    name: "Ontario Fall",
    value: "Ontario Fall",
    id: '5c4dca1b-cc3d-421f-8fc5-3192491b62d7',
  },
  {
    name: "Detroit Auto Show",
    value: "Detroit Auto Show",
    id: '419da2a9-9b0e-4a62-b10a-d5e549ffe236',
  },
  {
    name: "Amsterdam 2016",
    value: "Amsterdam 2016",
    id: '098eab20-22c8-499c-8464-388910dbfa4b',
  },
  {
    name: "Gaylord Opryland",
    value: "Gaylord Opryland",
    id: '2dd02fd8-a8ae-4d1d-9a0f-8a73eaf7d0ee',
  },
];

const allPhotos = [
  { 
    title: "Front view",
    image: "https://live.staticflickr.com/65535/50365003501_a5a7b08c3c_w.jpg",
    link: "https://flic.kr/p/2jJzNRk",
    album: "New Home Adventures",
    thumb: "item rectangle",
    id: '2a0592e9-5eb8-4d0a-9084-3d9b670800e1',
  },
  { 
    title: "Back view",
    image: "https://live.staticflickr.com/65535/50364308133_6787c9422e_w.jpg",
    link: "https://flic.kr/p/2jJwf9e",
    album: "New Home Adventures",
    thumb: "item rectangle",
    id: '8d0499ca-af78-4db9-89cb-3bbeace8cdf6',
  },
  { 
    title: "Front Porch",
    image: "https://live.staticflickr.com/65535/50365003581_7845256fbb_w.jpg",
    link: "https://flic.kr/p/2jJzNSH",
    album: "New Home Adventures",
    thumb: "item",
    id: '67c07187-8a75-4267-8aa1-8b59a844c4e3',
  },
  { 
    title: "Back yard",
    image: "https://live.staticflickr.com/65535/50365004406_bb0e165e71_w.jpg",
    link: "https://flic.kr/p/2jJzP7W",
    album: "New Home Adventures",
    thumb: "item rectangle",
    id: 'bca7502b-7884-451d-bde7-66479b66810b',
  },
  { 
    title: "Gravel pit",
    image: "https://live.staticflickr.com/65535/50364307808_e8411b4a6f_w.jpg",
    link: "https://flic.kr/p/2jJwf3C",
    album: "New Home Adventures",
    thumb: "item rectangle",
    id: '83ea16ae-8927-426e-af23-4ddcf0a0f8ff',
  },
  { 
    title: "Caterpillar",
    image: "https://live.staticflickr.com/65535/50365003926_fd0959e4bd_w.jpg",
    link: "https://flic.kr/p/2jJzNYE",
    album: "New Home Adventures",
    thumb: "item",
    id: 'd4e6a19a-256c-4a96-a4ad-1115437c4702',
  },
  { 
    title: "Smoke tree",
    image: "https://live.staticflickr.com/65535/51212932658_1acc6b7ab9_w.jpg",
    link: "https://flic.kr/p/2m2vEDy",
    album: "New Home Adventures",
    thumb: "item rectangle",
    id: '542da15c-afaa-462e-bcb7-6509820f6596',
  },
  { 
    title: "European columbine",
    image: "https://live.staticflickr.com/65535/51213781275_9e58431476_w.jpg",
    link: "https://flic.kr/p/2m2A1UT",
    album: "New Home Adventures",
    thumb: "item",
    id: 'bd53e896-8b4f-4e3b-8f22-90dfeac6138c',
  },
  { 
    title: "Toucan",
    image: "https://live.staticflickr.com/4851/46306584591_1a6a198af3_w.jpg",
    link: "https://flic.kr/p/2dxXmiv",
    album: "Costa Rica 2018",
    thumb: "item",
    id: 'c2b6d2ab-285d-4aad-a6a5-5c4fb240b478',
  },
  { 
    title: "Jungle",
    image: "https://live.staticflickr.com/4835/31453834057_90dcd25bee_w.jpg",
    link: "https://flic.kr/p/PVt82K",
    album: "Costa Rica 2018",
    thumb: "item",
    id: 'e1ed783d-0401-477e-8d01-2c3413171c15',
  },
  { 
    title: "Frogs",
    image: "https://live.staticflickr.com/4881/45394044895_879be68a3b_w.jpg",
    link: "https://flic.kr/p/2cajm3t",
    album: "Costa Rica 2018",
    thumb: "item",
    id: 'e3bc384f-008a-4f74-bae8-cdf6f4252552',
  },
  { 
    title: "Lizard",
    image: "https://live.staticflickr.com/4841/32434743668_bf1157ff7b_w.jpg",
    link: "https://flic.kr/p/Rq9xhq",
    album: "Costa Rica 2018",
    thumb: "item",
    id: 'e4d9dc65-ba3e-4152-824d-c5f9b009da71',
  },
  { 
    title: "Morning Mist",
    image: "https://live.staticflickr.com/4916/32434745468_ae87922187_w.jpg",
    link: "https://flic.kr/p/Rq9xPs",
    album: "Costa Rica 2018",
    thumb: "item rectangle",
    id: '4a671ce4-9967-426b-aab0-11f61db1792f',
  },
  { 
    title: "Sunset",
    image: "https://live.staticflickr.com/4866/32434744838_6a18d213cc_w.jpg",
    link: "https://flic.kr/p/Rq9xCA",
    album: "Costa Rica 2018",
    thumb: "item rectangle",
    id: 'ad0e3737-cf03-4812-bdc9-267483144218',
  },
  { 
    title: "UK",
    image: "https://live.staticflickr.com/65535/50364908322_890e6a2141_w.jpg",
    link: "https://flic.kr/p/2jJzjyj",
    album: "London, UK",
    thumb: "item rectangle",
    id: '8a33ccd5-814a-4f4a-bc33-c5b4b5bf55e5',
  },
  { 
    title: "UK",
    image: "https://live.staticflickr.com/65535/50364048643_e11802f003_w.jpg",
    link: "https://flic.kr/p/2jJuV1g",
    album: "London, UK",
    thumb: "item",
    id: '5d1c3fe5-2197-4397-865b-18bddd851234',
  },
  { 
    title: "UK",
    image: "https://live.staticflickr.com/65535/50364744671_d011664352_w.jpg",
    link: "https://flic.kr/p/2jJytUK",
    album: "London, UK",
    thumb: "item",
    id: 'ca5b185e-e2f8-45ec-94b4-bd0ae6c94ad4',
  },
  { 
    title: "UK",
    image: "https://live.staticflickr.com/65535/50364048813_eb882f0296_w.jpg",
    link: "https://flic.kr/p/2jJuV4c",
    album: "London, UK",
    thumb: "item rectangle",
    id: 'c99aecef-3b9f-4e53-992b-24660b3dee7a',
  },
  { 
    title: "Forget-me-not",
    image: "https://live.staticflickr.com/65535/48024222413_4dfb71ba61_w.jpg",
    link: "https://flic.kr/p/2gaJGbH",
    album: "Garden",
    thumb: "item rectangle",
    id: 'a602a9b9-f8ff-422f-9eb6-faaae135ab5f',
  },
  { 
    title: "Forget-me-not",
    image: "https://live.staticflickr.com/65535/48024222028_9e92881af0_w.jpg",
    link: "https://flic.kr/p/2gaJG55",
    album: "Garden",
    thumb: "item",
    id: '04b1597d-a1f9-4209-a65e-ca1c6c2f8310',
  },
  { 
    title: "Ants on peonies",
    image: "https://live.staticflickr.com/65535/48024222543_46bb8dcfb1_w.jpg",
    link: "https://flic.kr/p/2gaJGdX",
    album: "Garden",
    thumb: "item rectangle",
    id: '0fcb1218-76ff-4df3-8f6e-a61552c0466d',
  },
  { 
    title: "Lily",
    image: "https://live.staticflickr.com/65535/48239693406_23b49a9cbb_w.jpg",
    link: "https://flic.kr/p/2guM3cQ",
    album: "Garden",
    thumb: "item rectangle",
    id: '2bda77e1-031b-4da5-98f9-821bc14814e8',
  },
  { 
    title: "Painted nettle",
    image: "https://live.staticflickr.com/65535/48239693136_dcfc164457_w.jpg",
    link: "https://flic.kr/p/2guM38b",
    album: "Garden",
    thumb: "item",
    id: 'c16707f3-1bc5-474e-ad6b-a5b0289b54e3',
  },
  { 
    title: "Halona blowhole, Oahu",
    image: "https://live.staticflickr.com/4776/26924297438_e5e27392a7_w.jpg",
    link: "https://flic.kr/p/H2d4AN",
    album: "Hawaii",
    thumb: "item rectangle",
    id: 'f30a8773-10c1-495f-aa23-9f2c7e47f385',
  },
  { 
    title: "Giovanni's Shrimp Truck",
    image: "https://live.staticflickr.com/4788/40752100902_b78e87da56_w.jpg",
    link: "https://flic.kr/p/2568aPm",
    album: "Hawaii",
    thumb: "item rectangle",
    id: '0b05baf4-0e26-48d9-b9b7-82e065047b90',
  },
  { 
    title: "USS Missouri",
    image: "https://live.staticflickr.com/4794/25922819287_76dab5b534_w.jpg",
    link: "https://flic.kr/p/FuHe38",
    album: "Hawaii",
    thumb: "item rectangle",
    id: '603afc18-9fad-4c5f-8d4e-d06462ea55e2',
  },
  { 
    title: "Pearl Harbor",
    image: "https://live.staticflickr.com/4776/25922818777_25138973ef_w.jpg",
    link: "https://flic.kr/p/FuHdTk",
    album: "Hawaii",
    thumb: "item",
    id: '8a9b30d8-05fb-4874-89a1-f6a4ec1dff9c',
  },
  { 
    title: "Volcanic ash fog (aka vog)",
    image: "https://live.staticflickr.com/4773/26924298338_f8b787542a_w.jpg",
    link: "https://flic.kr/p/H2d4Sj",
    album: "Hawaii",
    thumb: "item",
    id: '25de43ca-fe46-43df-9513-1cc026a94475',
  },
  { 
    title: "Fall road",
    image: "https://live.staticflickr.com/4445/37822190536_35218af963_w.jpg",
    link: "https://flic.kr/p/ZCdBxo",
    album: "Ontario Fall",
    thumb: "item rectangle",
    id: '692a7c3e-45ff-414f-bc57-810607fe1be2',
  },
  { 
    title: "Abandoned house",
    image: "https://live.staticflickr.com/4498/24018049248_15cd2087ba_w.jpg",
    link: "https://flic.kr/p/CAoMgo",
    album: "Ontario Fall",
    thumb: "item rectangle",
    id: '726b962c-7523-44c2-99ad-45be63583fec',
  },
  { 
    title: "Abandoned house",
    image: "https://live.staticflickr.com/4506/37871024561_55666627f1_w.jpg",
    link: "https://flic.kr/p/ZGwUck",
    album: "Ontario Fall",
    thumb: "item",
    id: 'bfdf2d3f-32e7-4b82-8584-61cf1a52b372',
  },
  { 
    title: "Caterpillar",
    image: "https://live.staticflickr.com/4452/37822593276_bf91eaf833_w.jpg",
    link: "https://flic.kr/p/ZCfFgb",
    album: "Ontario Fall",
    thumb: "item",
    id: '95b2316a-ffd1-4139-8817-ed5fae38b489',
  },
  { 
    title: "Gone",
    image: "https://live.staticflickr.com/4456/24018046288_7b8c67473d_w.jpg",
    link: "https://flic.kr/p/CAoLom",
    album: "Ontario Fall",
    thumb: "item rectangle",
    id: '318f8597-11fd-46e1-8a7f-cfc339c91622',
  },
  { 
    title: "Car show",
    image: "https://live.staticflickr.com/737/32061341180_6e5c039737.jpg",
    link: "https://flic.kr/p/QR9LtA",
    album: "Detroit Auto Show",
    thumb: "item rectangle",
    id: '79e4b9d7-6ea5-4d03-9744-c17f54cf8d3e',
  },
  { 
    title: "Car show",
    image: "https://live.staticflickr.com/423/32399384826_5b9a51e80b.jpg",
    link: "https://flic.kr/p/Rn2jkd",
    album: "Detroit Auto Show",
    thumb: "item",
    id: 'af26c606-3b8a-4f8a-8627-08f0776c7ec5',
  },
  { 
    title: "Car show",
    image: "https://live.staticflickr.com/507/32061265490_173187e42b.jpg",
    link: "https://flic.kr/p/QR9neu",
    album: "Detroit Auto Show",
    thumb: "item rectangle",
    id: 'a3d57063-64b0-445b-aa18-6b021f58fa22',
  },
  { 
    title: "Car show",
    image: "https://live.staticflickr.com/417/32061256190_da19b60673.jpg",
    link: "https://flic.kr/p/QR9jt9",
    album: "Detroit Auto Show",
    thumb: "item",
    id: '8afa9139-c39c-457d-a633-75443042c6cf',
  },
  { 
    title: "Car show",
    image: "https://live.staticflickr.com/737/31595960934_67744af097.jpg",
    link: "https://flic.kr/p/Q92yp9",
    album: "Detroit Auto Show",
    thumb: "item rectangle",
    id: '50dcbb00-43a0-43fe-9dc7-3647232c57e2',
  },
  { 
    title: "Amsterdam",
    image: "https://live.staticflickr.com/8324/29348731605_833b0f322b.jpg",
    link: "https://flic.kr/p/LHrVpT",
    album: "Amsterdam 2016",
    thumb: "item",
    id: '44765cac-bf3f-4983-98f1-ac8937865d3c',
  },
  { 
    title: "Amsterdam",
    image: "https://live.staticflickr.com/7751/28725714104_8342d7c44d.jpg",
    link: "https://flic.kr/p/KLoN1Q",
    album: "Amsterdam 2016",
    thumb: "item",
    id: '2c9710f8-09b8-4765-afc6-9eddd4aa786e',
  },
  { 
    title: "Amsterdam",
    image: "https://live.staticflickr.com/8278/29269984371_ffc31d73dc.jpg",
    link: "https://flic.kr/p/LAujAX",
    album: "Amsterdam 2016",
    thumb: "item rectangle",
    id: '634a378b-bae6-4af7-b82a-4e223cfa3bd0',
  },
  { 
    title: "Amsterdam",
    image: "https://live.staticflickr.com/8096/29348198465_3d379ae350.jpg",
    link: "https://flic.kr/p/LHpbVP",
    album: "Amsterdam 2016",
    thumb: "item rectangle",
    id: '6d6e7858-092c-4efe-bf1b-95f519dce881',
  },
  { 
    title: "Amsterdam",
    image: "https://live.staticflickr.com/8534/28725248264_1739f575f5.jpg",
    link: "https://flic.kr/p/KLmpx7",
    album: "Amsterdam 2016",
    thumb: "item",
    id: '51a0c010-620e-4ba0-b4e9-027aaacd0e8e',
  },
  { 
    title: "Amsterdam",
    image: "https://live.staticflickr.com/8250/29240460542_466ccab282.jpg",
    link: "https://flic.kr/p/LxT1cq",
    album: "Amsterdam 2016",
    thumb: "item",
    id: '266a3a7d-4c1c-45c1-83a1-a7a5fd6c3a55',
  },
  { 
    title: "Gaylord Opryland",
    image: "https://live.staticflickr.com/8847/28899483866_bdeccbdab8.jpg",
    link: "https://flic.kr/p/L2KpHd",
    album: "Gaylord Opryland",
    thumb: "item rectangle",
    id: '1e7fa627-ef0f-4382-90c0-e29a28c74a35',
  },
  { 
    title: "Gaylord Opryland",
    image: "https://live.staticflickr.com/8513/28312931744_09dd7ff1ea.jpg",
    link: "https://flic.kr/p/K8VbcA",
    album: "Gaylord Opryland",
    thumb: "item",
    id: '3f532fb2-f136-4365-9f07-6954a5ba61a6',
  },
  { 
    title: "Gaylord Opryland",
    image: "https://live.staticflickr.com/8564/28899402386_2e50ff37c1.jpg",
    link: "https://flic.kr/p/L2JZuo",
    album: "Gaylord Opryland",
    thumb: "item",
    id: '7c13c1bf-f68d-47d7-b35a-6efad6a6874a',
  },
  { 
    title: "Gaylord Opryland",
    image: "https://live.staticflickr.com/8589/28826054132_d89432a1f8.jpg",
    link: "https://flic.kr/p/KVg4Bj",
    album: "Gaylord Opryland",
    thumb: "item rectangle",
    id: 'feb8f9ff-f78b-44c0-9f6b-b5beb1e34910',
  },
  { 
    title: "Gaylord Opryland",
    image: "https://live.staticflickr.com/8087/28826045322_2122a512d2.jpg",
    link: "https://flic.kr/p/KVg1Zq",
    album: "Gaylord Opryland",
    thumb: "item rectangle",
    id: '6c04c9a9-739c-442c-845a-2dc7004da9b1',
  },
];

const Photography = () => {
  const [filter, setFilter] = useState(null);

  const renderAll = allPhotos.filter(photo => filter ? photo.album === filter : true).map(photo => (
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
                <li key={id} onClick={() => setFilter(value)} className={`${filter === value ? 'active' : '' }`}>
                  {name}
                </li>
              ))}
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

export default Photography;
