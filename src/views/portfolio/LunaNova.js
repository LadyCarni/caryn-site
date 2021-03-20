import React from 'react';
import PortfolioHeader from "components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import usePrism from "hooks/usePrism";
import lunaCover from "assets/portfolio/luna-cover.png";
import lunaGalleries from "assets/portfolio/luna-galleries.png";
import lunaGalleryBehavior from "assets/portfolio/luna-photo-gallery.gif";

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

            <pre className="language-javascript"><code>
            {`
              Freyja.jsx

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

            <pre className="language-javascript"><code>
            {`
              DogDisplayPage.jsx

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

            <img src={lunaGalleryBehavior} alt="Gallery behavior"/>
          </div>
        </div>
      </div>
    </>
  )
};

export default LunaNova;
