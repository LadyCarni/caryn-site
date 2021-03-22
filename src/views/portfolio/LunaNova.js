import React from 'react';
import PortfolioHeader from "components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import usePrism from "hooks/usePrism";
import lunaCover from "assets/portfolio/luna-cover.png";
import lunaGalleries from "assets/portfolio/luna-galleries.png";
import lunaGalleryBehavior from "assets/portfolio/luna-photo-gallery.gif";
import lunaAccordion from "assets/portfolio/luna-accordion.gif";
import lunaDivider from "assets/portfolio/luna-divider.png";
import lunaGradient from "assets/portfolio/luna-gradient.png";

const LunaNova = () => {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage={lunaCover}
        routes={PortfolioRoutes}
        imageAlt="Luna Nova website"
        headerTitle="Luna Nova"
        headerSubtitle="An approachable dog breeder website"
        headerDescription="Luna Nova is a Portuguese Water Dog breeder operating from a home-based business in Cambridge, Ontario"
        headerDisciplines={["Web Design", "Front-end Development (React)"]}
      />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="article">
            <p className="external-link"><a href="https://www.lunanovaportuguesewaterdogs.com/" target="_blank" rel="noreferrer">Luna Nova</a></p>
            <h2>The Challenge</h2>
            <p>With so many competing breeders, my client needed to stand out and make her customers feel secure knowing they were adopting from a registered, safe, and loving home. Her website needed to be informative, transparent, and a showcase for the caliber of dogs she breeds. Many users would be non technically savvy, and would require an intuitive, smooth experience using and browsing the site.</p>
            <h3>Primary Goals</h3>
            <ul>
              <li>Informative and digestible</li>
              <li>Accessible on mobile</li>
              <li>User-friendly</li>
            </ul>

            <h2>The Results</h2>
            <p>Luna Nova's site became a comprehensive informational resource not only on the dogs themselves, but also on the entire Portuguese Water Dog breed. This information included health background, estimated expectations for ownership costs, detailed data on each breeding dog, as well as several albums worth of photos documenting everything a potential adoptive owner would like to see.</p>

            <h3>Dog Bio & Photo Galleries</h3>
            <p>Each dog has a specific pedigree that the client wanted to show to visitors to the site. I designed a detailed layout that, despite the high level of medical detail, was easy on the eye and wouldn't alienate potentially unfamiliar visitors.</p>
            <p>Photos would arrive in many dimensions, with varied candid photos of each of the dogs. With this in mind, I created the photo galleries with some modifications on <a href="https://github.com/neptunian/react-photo-gallery" target="_blank" rel="noreferrer">this photo gallery</a> and <a href="https://github.com/jossmac/react-images" target="_blank" rel="noreferrer">this lightbox/carousel</a> package.</p>
          </div>

          <div className="full-width">
            <img src={lunaGalleries} alt="Galleries on Luna Nova website" className="shadow"/>
          </div>

          <div className="article">
            <p>Out of the box, neither the photo gallery or the lightbox package had behavior that matched what I was trying to achieve. Working with another developer, I created a component to handle the behaviors of a simple, easy to use lightbox and the carousel within it as well as the structure of the gallery itself.</p>

            <pre className="language-jsx"><code>
            {`
              // Freya.jsx

              ...

              const photos = [
                { src: freya1, width: 1.5, height: 2 },
                { src: freya2, width: 2, height: 1.5 },
                { src: freya3, width: 1.5, height: 2 },
                ...
              ];

              export default () => {
                return (
                  <DogDisplayPage photos={photos}>
                    ...
                  </DogDisplayPage>
                );
              }
            `}
            </code></pre>

            <pre className="language-jsx"><code>
            {`
              // DogDisplayPage.jsx

              ...
              import Gallery from 'react-photo-gallery';
              import Lightbox from 'react-images';

              class DogDisplayPage extends React.Component {
                componentDidMount() {
                    window.scrollTo(0, 0);
                }

                constructor() {
                  super();
                  this.state = { currentImage: 0 };
                  this.closeLightbox = this.closeLightbox.bind(this);
                  this.openLightbox = this.openLightbox.bind(this);
                  this.gotoNext = this.gotoNext.bind(this);
                  this.gotoPrevious = this.gotoPrevious.bind(this);
                }

                openLightbox(event, obj) {
                  this.setState({
                    currentImage: obj.index,
                    lightboxIsOpen: true,
                  });
                }

                closeLightbox() {
                  this.setState({
                    currentImage: 0,
                    lightboxIsOpen: false,
                  });
                }

                gotoPrevious() {
                  this.setState({
                    currentImage: this.state.currentImage - 1,
                  });
                }

                gotoNext() {
                  this.setState({
                    currentImage: this.state.currentImage + 1,
                  });
                }

                render() {
                  return (
                    <div className="dog-page">
                      {this.props.children}
                      <Gallery photos={this.props.photos}
                        onClick={this.openLightbox}
                        columns={4}
                        direction={"column"}
                      />
                      <Lightbox images={this.props.photos}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                      />
                    </div>
                  )
                }
              }

              export default DogDisplayPage;
            `}
            </code></pre>

            <p>The end result of the structure of the photo galleries allowed me to continue to build out each of the dog pages as well as maintain consistency and ease of use.</p>

            <img src={lunaGalleryBehavior} alt="Gallery behavior" className="shadow"/>

            <h3>Accordions</h3>
            <p>Some of the more in-depth health information needed to be optionally available, without taking up too much screen real estate. I made the choice to put these important pieces of information in accordions, with simple, obvious interactions.</p>
            <img src={lunaAccordion} alt="Accordion behavior" className="shadow"/>
            
            <pre className="language-jsx"><code>
            {`
              // Accordion markup

              ...
              
              <ul className="accordion">
                <li>
                  <input type="checkbox" defaultChecked />
                  <i/> // open/close indicator
                  <h3>Eye Problems</h3> // title
                  <p>
                    ...  // content
                  </p>
                </li>
                <li>
                  <input type="checkbox" defaultChecked />
                  <i/>
                  <h3>Hip Dysplasia</h3>
                  <p>
                    ...  // content
                  </p>
                </li>
              </ul>
            `}
            </code></pre>

            <p>I was interested in creating a pure CSS accordion, and with the help of some public CodePens, I came up with this as a final solution.</p>

            <pre className="language-scss"><code>
            {`
            // Accordion SCSS

            $brand-color: #99ced4; // blue
            $dark-brand-color: darken($brand-color, 30%);

            .accordion {
              background: $off-white;
              list-style: none;
              perspective: 900;
              padding: 0;
              margin: 0;
              margin-bottom: $lg-space; // utilizing variables is essential for consistency

              input {
                margin: 0;
              }

              p {
                &:nth-child(2) {
                  margin-bottom: 0;
                }
              }

              li {
                position: relative;
                padding: 0;
                margin: 0;
                padding-top: $space;
                border-top: 1px dashed $brand-color;
                animation: flipdown 0.5s ease both;

                &:nth-of-type(1) {
                  animation-delay: .5s;
                  border-top: none;
                }

                &:nth-of-type(2) {
                  animation-delay: .75s; // increase the delay slightly for each child
                }

                &:nth-of-type(3) {
                  animation-delay: 1s;
                }

                &:nth-of-type(4) {
                  animation-delay: 1.25s;
                }

                &:nth-of-type(5) {
                  animation-delay: 1.5s;
                }

                &:last-child {
                  padding-bottom: .25em;
                }

                h3 {
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  -webkit-touch-callout: none;
                  user-select: none;
                  color: $dark-brand-color;
                  margin: 0;
                  padding-left: $space;
                }

                p {
                  padding: 0 $space;
                  position: relative;
                  overflow: hidden;
                  max-height: 800px;
                  transition: all 0.25s ease-in-out;
                  opacity: 1;
                  transform: translate(0, 0);
                  margin-top: 14px;
                  z-index: 2;
                }

                // this i is our cool little animated caret icon

                i {
                  position: absolute;
                  transform: translate(-6px, 0);
                  margin-top: .65em;
                  right: $space;

                  &::before, &::after {
                    content: '';
                    transition: all .25s ease-in-out;
                    position: absolute;
                    background-color: $dark-brand-color;
                    width: 3px;
                    height: 9px;
                  }

                  &::before {
                    transform: translate(-2px, 0) rotate(45deg);
                  }

                  &::after {
                    transform: translate(2px, 0) rotate(-45deg);
                  }
                }

                input[ type = 'checkbox' ] {
                  position: absolute;
                  cursor: pointer;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                  opacity: 0;

                  &:checked {
                    &~p {
                      margin-top: 0;
                      max-height: 0;
                      opacity: 0;
                      transform: translate(0, 50%);
                    }

                    &~i {
                      &::before {
                        transform: translate(2px, 0) rotate(45deg);
                      }

                      &::after {
                        transform: translate(-2px, 0) rotate(-45deg);
                      }
                    }
                  }
                }
              }
            }
            `}
            </code></pre>

            <h3>Design Features</h3>
            <p><b>Custom section dividers</b> were designed to create simple, branded visual breaks.</p>
            <img src={lunaDivider} alt="Custom page divider" className="shadow"/>
            <pre className="language-jsx"><code>
            {`
              // Custom page divider

              <div className="divider">
                <img src={moon} className="moon" />
              </div>
            `}
            </code></pre>

            <pre className="language-scss"><code>
            {`
              // Custom page divider

              $brand-color: #99ced4; // blue

              .divider {
                border-bottom: 1px dashed $brand-color;
                height: 1px;
                margin: 3em 0;
                position: relative;

                .moon {
                    background: white; 
                    height: 20px;
                    left: 48%;
                    padding: 10px;
                    position: absolute;
                    top: -18px;
                }
              }
            `}
            </code></pre>

            <p>The <b>branded gradient</b> was used on some elements to create some visual interest and inject some personality into the site design.</p>
            <img src={lunaGradient} alt="Branded gradient effect" className="shadow"/>
            <pre className="language-scss"><code>
            {`
              // Branded gradient

              $brand-color: #99ced4; // blue
              $secondary-color: #fca5f1; // pink
              $brand-gradient: linear-gradient(45deg, rgba($secondary-color, 1) 0%, rgba($brand-color, 1) 90%);

              .icon-ref {
                display: flex;
                flex-direction: row;
                align-items: center;

                &::before {
                    align-items: center;
                    background: $brand-gradient;
                    border-radius: 30px;
                    color: $mute-grey;
                    display: flex;
                    font-family: $icon-font;
                    font-size: .85em;
                    height: 15px;
                    justify-content: center;
                    margin-right: $sm-space;
                    padding: $sm-space;
                    width: 15px;
                }
              }
            `}
            </code></pre>
          </div>
        </div>
      </div>
    </>
  )
};

export default LunaNova;
