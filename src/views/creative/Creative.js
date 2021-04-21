import React from 'react';
import { Link } from 'react-router-dom';
import RecipeHeader from 'assets/creative/creative-header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCameraRetro, faHammer, faHatChef, faPalette } from '@fortawesome/pro-light-svg-icons';
import CreativeHeader from 'components/creativeHeader';
import Cheesecake from 'assets/creative/recipes/recipe-cheesecake4.jpg'

const Creative = () => {
  return (
    <div className="creative full-height">
      <CreativeHeader
        headerImage={RecipeHeader}
        imageAlt="Lemon blueberry pie"
      />
      <div className="creative-features">
        <span className="landmark"><FontAwesomeIcon icon={faBookmark} /> Featured Projects</span>

        <div className="featured-project">
          <div className="image">
            <img src={Cheesecake} alt="cheesecake"/>
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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptates facilis ducimus modi libero reiciendis doloribus at omnis nihil quae debitis, culpa, placeat sapiente. At aliquid vero ratione exercitationem numquam!</p>
          </div>
        </div>

        <div className="featured-project">
          <div className="image">
            <img src="https://images.squarespace-cdn.com/content/v1/59dbb8f880bd5e687ee3d7de/1510511987014-I6UOJZF7QGMXAY6ABIGA/ke17ZwdGBToddI8pDm48kC4YO-AgoJ4CLiMFvV9c6g17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USguj-ur38mIUjcR5WrYhgha9wwejTYectckOiFl0kAp9oMN8WBWKhxSju5IDWCMMA/Completed+block?format=750w" alt="craft"/>
          </div>
          <div className="feature-summary">
            <div className="title">
              <h2>Sarah's Choice king size quilt</h2>
              <div className="tag"><Link to="/creative/crafts"><FontAwesomeIcon icon={faPalette} /> Craft</Link></div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptates facilis ducimus modi libero reiciendis doloribus at omnis nihil quae debitis, culpa, placeat sapiente. At aliquid vero ratione exercitationem numquam!</p>
          </div>
        </div>

        <div className="featured-project">
          <div className="image">
            <img src="https://live.staticflickr.com/3893/15141775965_6b5d4c40ec_k.jpg" alt="craft"/>
          </div>
          <div className="feature-summary">
            <div className="title">
              <h2>The Highline, NYC</h2>
              <div className="tag"><Link to="/creative/photography"><FontAwesomeIcon icon={faCameraRetro} /> Photography</Link></div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptates facilis ducimus modi libero reiciendis doloribus at omnis nihil quae debitis, culpa, placeat sapiente. At aliquid vero ratione exercitationem numquam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creative;
