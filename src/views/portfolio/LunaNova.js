import React from 'react';
import PortfolioHeader from "components/portfolioHeader";
// import { PortfolioRoutes } from "./index";
import usePrism from "hooks/usePrism";
import lunaCover from "assets/portfolio/luna-cover.png";
import lunaGalleries from "assets/portfolio/luna-galleries.png";
import lunaGalleryBehavior from "assets/portfolio/luna-photo-gallery.gif";
import lunaAccordion from "assets/portfolio/luna-accordion.gif";
import lunaDivider from "assets/portfolio/luna-divider.png";
import lunaGradient from "assets/portfolio/luna-gradient.png";
import lunaHamburger from "assets/portfolio/luna-hamburger.gif";
import lunaScreens from "assets/portfolio/luna-nova-screens.jpg";

const LunaNova = () => {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage={lunaCover}
        // routes={PortfolioRoutes}
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

            <h2>Design Features</h2>
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
            <p>I was interested in creating a pure CSS accordion, and with the help of some public CodePens, I came up with this as a final solution.</p>

            <div className="flex columns">
              <div className="fill">
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
              </div>
              <div className="fill">
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
                    margin-bottom: $lg-space;

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
                        animation-delay: .75s;
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
                        -webkit-tap-highlight-color: 
                          rgba(0, 0, 0, 0);
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

                      // this i is our animated caret icon

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
                          transform: translate(-2px, 0)
                            rotate(45deg);
                        }

                        &::after {
                          transform: translate(2px, 0)
                            rotate(-45deg);
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
                              transform: translate(2px, 0)
                                rotate(45deg);
                            }

                            &::after {
                              transform: translate(-2px, 0)
                                rotate(-45deg);
                            }
                          }
                        }
                      }
                    }
                  }
                  `}
                </code></pre>
              </div>
            </div>

            <h3>Custom section dividers</h3>
            <p>Custom dividers give subtle, branded visual breaks.</p>
            <img src={lunaDivider} alt="Custom page divider" className="shadow"/>

            <div className="flex columns">
              <div className="fill">
                <pre className="language-jsx"><code>
                  {`
                    // Custom page divider

                    <div className="divider">
                      <img src={moon} className="moon" />
                    </div>
                  `}
                </code></pre>
              </div>
              <div className="fill">
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
              </div>
            </div>

            <h3>Branded gradient</h3>
            <p>The branded gradient was used on some elements to create visual interest and inject some personality into the site design.</p>
            <div className="flex columns">
              <div className="fill">
                <img src={lunaGradient} alt="Branded gradient effect" className="shadow"/>
              </div>
              <div className="fill">
              <pre className="language-scss"><code>
                {`
                  // Branded gradient

                  $brand-color: #99ced4; // blue
                  $secondary-color: #fca5f1; // pink
                  $brand-gradient: linear-gradient(45deg,
                    rgba($secondary-color, 1) 0%,
                    rgba($brand-color, 1) 90%);

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

            <h3>Custom hamburger menu</h3>
            <p>A custom animated hamburger menu was created to add a fun little interaction for the mobile experience.</p>
            <div className="flex columns">
              <div className="fill">
                <img src={lunaHamburger} alt="Hamburger menu animation" className="shadow"/>
              </div>
              <div className="fill">
              <pre className="language-jsx"><code>
                  {`
                  // mobile menu

                  <div className="navigation" id="mobile-nav">
                    <input type="checkbox" />
                    <p>menu</p>
                    <span></span> // hamburger line
                    <span></span> // hamburger line
                    <span></span> // hamburger line
                    <div className="header-nav">
                      // menu items
                    </div>
                  </div>

                  `}
                </code></pre>
                <pre className="language-scss"><code>
                  {`
                    // mobile nav

                    #mobile-nav {
                        @media screen and (min-width: 851px) {
                          // hide larger than mobile
                        }

                        @media screen and (max-width: 850px) {
                            background: transparent;
                            display: block;
                            position: relative;
                            top: .25em;
                            right: 0%;
                            z-index: 1;
                            -webkit-user-select: none;
                            user-select: none;

                            p {
                                position: absolute;
                                right: 45px;
                                color: $white;
                                text-transform: uppercase;
                                letter-spacing: 1px;
                                font-size: .85em;
                                line-height: 1.75em;
                            }

                            input {
                                display: block;
                                width: 100px;
                                height: 32px;
                                position: absolute;
                                top: -7px;
                                right: 0;
                                margin: 0;
                                cursor: pointer;
                                opacity: 0;
                                z-index: 2;
                                -webkit-touch-callout: none;

                                &:checked~div {
                                    opacity: 1;
                                    visibility: visible;
                                }

                                &:checked~span {
                                    opacity: 1;
                                    transform: rotate(45deg)
                                      translate(-2px, -1px);
                                    background: $mid-grey;
                                }

                                &:checked~span:nth-last-child(3) {
                                    opacity: 0;
                                    transform: rotate(0deg)
                                      scale(0.2, 0.2);
                                }

                                &:checked~span:nth-last-child(2) {
                                    transform: rotate(-45deg)
                                      translate(0, -1px);
                                }
                            }

                            span {
                                display: block;
                                width: 33px;
                                height: 4px;
                                margin-bottom: 5px;
                                position: relative;
                                background: #ccc;
                                border-radius: 3px;
                                z-index: 1;
                                transform-origin: 4px 0px;
                                transition: transform 0.5s
                                  cubic-bezier(0.77, 0.2, 0.05, 1.0),
                                  background 0.5s
                                  cubic-bezier(0.77, 0.2, 0.05, 1.0),
                                  opacity 0.55s ease;

                                &:first-child {
                                    transform-origin: 0% 0%;
                                }

                                &:nth-last-child(2) {
                                    transform-origin: 0% 100%;
                                }
                            }

                            .header-nav {
                                // mobile nav menu styles
                            }
                        }
                    }
                  `}
                </code></pre>
              </div>
            </div>
            <h2>Final Result</h2>
            <p>The <a href="https://www.lunanovaportuguesewaterdogs.com/" target="_blank" rel="noreferrer">Luna Nova</a> site has seen consistent growth in traffic year over year. As of 2021, the wait list for new puppies is well over a year. Several users have commented to the owner that they were thrilled to have seen so much information provided and felt more secure and reassured by the presentation of the information and the ease of use compared to any other breeders' sites.</p>
          </div>

          <div className="full-width">
            <img src={lunaScreens} alt="Luna Nova screens"/>
          </div>
        </div>
      </div>
    </>
  )
};

export default LunaNova;
