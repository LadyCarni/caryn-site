import React from 'react';
import { Link } from 'react-router-dom';
import RecipeHeader from 'assets/creative/creative-header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { faBookmark, faCameraRetro, faHammer, faHatChef, faPalette } from '@fortawesome/pro-light-svg-icons';
import CreativeHeader from 'components/creativeHeader';
import cheesecake from 'assets/creative/recipes/recipe-cheesecake4.jpg'
import vinylElephant from 'assets/creative/crafts/vinyl-elephant.jpg'

const Creative = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Caryn Farvour</title>
        <meta property="og:title" content="Caryn Farvour" />
        <meta property="og:description" content="A professional UX portfolio showcasing industry insights, creative projects, hobbies, and recipes, blending design expertise with personal passion." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/about/caryn-portrait.jpg" />
        <meta property="og:url" content="https://carynfarvour.design" />
        <meta property="og:type" content="article" />
      </Helmet>
      <CreativeHeader
        headerImage={RecipeHeader}
        imageAlt="Lemon blueberry pie"
      />
      <div className="creative-features">
        <span className="landmark"><FontAwesomeIcon icon={faBookmark} /> Featured Projects</span>

        <div className="featured-project">
          <div className="image">
            <img src={cheesecake} alt="cheesecake"/>
          </div>
          <div className="feature-summary">
            <div className="title">
              <h2>Signature Cheesecake</h2>
              <div className="tag"><Link to="/creative/recipes"><FontAwesomeIcon icon={faHatChef} /> Recipe</Link></div>
            </div>
            <p>As a self-professed cheesecake aficionado, this recipe is the culmination of over 20 years of experimentation and exploration. It has a soft, light consistency and a delicate, rich flavor. Give this a shot and you'll never make another recipe!</p>
            <Link to="/creative/recipes/cheesecake" className="arrow-link block">View recipe</Link>
          </div>
        </div>

        <div className="featured-project">
          <div className="image">
            <img src="https://images.squarespace-cdn.com/content/v1/59dbb8f880bd5e687ee3d7de/1510633563810-PMLF9EBAVONPDEIV6BHS/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/13551683_1754461124777429_728829684_n.jpg?format=750w" alt="craft"/>
          </div>
          <div className="feature-summary">
            <div className="title">
              <h2>Mixed softwood pipe desk</h2>
              <div className="tag"><Link to="/creative/diy"><FontAwesomeIcon icon={faHammer} /> DIY</Link></div>
            </div>
            <p>A simple desk created by hand with repurposed tongue-and-groove flooring over a plumbing pipe desk frame. A few additional features like epoxy knots and routered edges make this a beautiful project that anybody can pull off!</p>
            <Link to="/creative/diy/pipe-desk" className="arrow-link block">View project</Link>
          </div>
        </div>

        <div className="featured-project">
          <div className="image">
            <img src={vinylElephant} alt="vinyl elephant craft"/>
          </div>
          <div className="feature-summary">
            <div className="title">
              <h2>Vinyl Elephant</h2>
              <div className="tag"><Link to="/creative/crafts"><FontAwesomeIcon icon={faPalette} /> Craft</Link></div>
            </div>
            <p>A quick afternoon project that adds something fun to the wall. This project requires a few specialized tools, and a fair bit of patience!</p>
            <Link to="/creative/crafts/vinyl-elephant" className="arrow-link block">View craft</Link>
          </div>
        </div>

        <div className="featured-project">
          <div className="image">
            <img src="https://live.staticflickr.com/4916/32434745468_ae87922187_w.jpg" alt="Costa Rica Jungle"/>
          </div>
          <div className="feature-summary">
            <div className="title">
              <h2>Photography</h2>
              <div className="tag"><Link to="/creative/photography"><FontAwesomeIcon icon={faCameraRetro} /> Photography</Link></div>
            </div>
            <p>As an avid hobbyist photographer, I enjoy going on adventures and capturing both the visual and emotional scene with composition and some fun post-process editing. Have fun!</p>
            <Link to="/creative/photography" className="arrow-link block">View photos</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creative;
