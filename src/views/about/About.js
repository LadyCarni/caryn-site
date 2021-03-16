import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import caryn1 from 'assets/caryn1.jpg';
import caryn2 from 'assets/caryn5.jpg';
import caryn3 from 'assets/caryn3.jpg';
import caryn4 from 'assets/caryn4.jpg';
import carynResume from 'assets/caryn-humphreys-resume-2021.pdf';

const About = () => {
  const timeline1 = [
    {
      type: "job",
      title: "Advertising Layout & Graphic Artist (Conestoga College)"
    }
  ];

  const timeline2 = [
    {
      type: "job",
      title: "Launch Design by Humphreys (freelance brand)"
    },
    {
      type: "education",
      title: "Graduate of Advertising (Conestoga College)"
    },
    {
      type: "job",
      title: "Digital Media Coordinator (Waterloo Regional Children's Museum)"
    },
    {
      type: "job",
      title: "Graphic Designer (R&S Screening)"
    }
  ];

  const timeline3 = [
    {
      type: "job",
      title: "Director of Marketing (Waterloo Management Education Centre)"
    }
  ];

  const timeline4 = [
    {
      type: "job",
      title: "Web Designer (ChromeMedia)"
    }
  ];

  return (
    <div className="feature feature-width">
      <div className="bio">
        <div className="inline">
          <img src={caryn1} alt="Caryn Farvour portrait"/>
        </div>
        <div className="bio-content">
          <h1>Hi, I'm Caryn</h1>
          <p className="help">(pronounced kuh-<i>RIN</i>; like Corinne)</p>
          <p>I'm a senior User Experience (UX) developer who is passionate about product design. I have been specializing in UX design for 9 years, and honing my front-end development and web design skills for the past 6 years. I've been leading cross-functional software teams through facilitation, coaching, and project management for 4 years. I have had training in accessibility for web, and have a formal education in business, marketing, and traditional art.</p>
          <a href={carynResume} target="_blank" rel="noreferrer" className="arrow-link block">View Resume (PDF)<FontAwesomeIcon icon={faLongArrowRight} /></a>
          {/* <div className="gallery">
            <div className="image">
              <img src={caryn2} alt="Caryn Farvour in the wild" className="caption"/>
              <span className="image-caption">Wireframing in the wild</span>
            </div>
            <div className="image">
              <img src={caryn3} alt="Caryn Farvour speaking at Erie Day of Code" className="caption"/>
              <span className="image-caption">Speaking at Erie Day of Code</span>
            </div>
            <div className="image">
              <img src={caryn4} alt="Caryn Farvour and her bengal, Nyx" className="caption left"/>
              <span className="image-caption">My bengal assistant, Nyx</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="timeline">
        <h2>History</h2>
        <div className="timeline-content">
          <div className="path"></div>
          <ul>
            <li className="year">2008</li>
            {timeline1.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2009</li>
            {timeline2.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2010</li>
            {timeline3.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2012</li>
            {timeline4.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2013</li>
            <li className="community">
              Attend Fluxible (Kitchener)
            </li>
            <li className="year">2014</li>
            <li className="job">
              Rebrand ChromeMedia to Vehikl
            </li>
            <li className="education">
              Certification: Human Computer Interaction (UC San Diego)
            </li>
            <li className="job">
              Promotion: UX Designer (Vehikl)
            </li>
            <li className="community">
              Attend Laracon EU (Amsterdam)
            </li>
            <li className="community">
              Attend Erie Day of Code (Erie, PA)
            </li>
            <li className="year">2015</li>
            <li className="community">
              UX Facilitative Volunteer, STEMGyrls
            </li>
            <li className="community">
              Attend CanUX (Ottawa)
            </li>
            <li className="community">
              Attend Fluxible (Kitchener)
            </li>
            <li className="community">
              Attend Erie Day of Code (Erie, PA)
            </li>
            <li className="year">2016</li>
            <li className="community">
              Panelist, Zonta Film Festival screening of "Code: Debugging the Gender Gap"
            </li>
            <li className="community">
              Contributing writer for Code Like a Girl Inc.
            </li>
            <li className="community">
              Attend Codemash (Sandusky, OH)
            </li>
            <li className="community">
              Attend Laracon US (Louisville)
            </li>
            <li className="community">
              Speaker, Laracon EU: "Project Utopia" (Amsterdam)
            </li>
            <li className="community">
              Attend Erie Day of Code (Erie, PA)
            </li>
            <li className="year">2017</li>
            <li className="community">
              Panelist, Future Female Techmakers Conference
            </li>
            <li className="community">
              Attend Laracon EU (Amsterdam)
            </li>
            <li className="community">
              Panelist, Future Female Techmakers Conference
            </li>
            <li className="community">
              Attend Laracon EU (Amsterdam)
            </li>
            <li className="community">
              UX Facilitative Volunteer, STEMGyrls
            </li>
            <li className="community">
              Attend Laracon US (NYC)
            </li>
            <li className="year">2018</li>
            <li className="community">
              Attend Laracon US (Chicago)
            </li>
            <li className="community">
              Launch of DevLondon
            </li>
            <li className="year">2019</li>
            <li className="community">
              Author, "Practical UX"
            </li>
            <li className="community">
              Speaker, Erie Day of Code (Erie, PA)
            </li>
            <li className="job">
              Product Manager: North America (Flyt; Skip the Dishes)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About
