import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import caryn1 from 'assets/caryn1.jpg';
import caryn2 from 'assets/caryn5.jpg';
import caryn3 from 'assets/caryn3.jpg';
import caryn4 from 'assets/caryn4.jpg';
import carynResume from 'assets/caryn-humphreys-resume-2021.pdf';

const About = () => {
  const timeline2008 = [
    {
      type: "job",
      title: "Advertising Layout & Graphic Artist (Conestoga College)"
    },
    {
      type: "job",
      title: "Launch Design by Humphreys (freelance brand)"
    },
  ];

  const timeline2009 = [
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

  const timeline2010 = [
    {
      type: "job",
      title: "Director of Marketing (Waterloo Management Education Centre)"
    }
  ];

  const timeline2012 = [
    {
      type: "job",
      title: "Web Designer (ChromeMedia)"
    }
  ];

  const timeline2013 = [
    {
      type: "community",
      title: "Attend Fluxible (Kitchener)"
    },
    {
      type: "education",
      title: "Begin specialization in UX (ChromeMedia)"
    },
    {
      type: "community",
      title: "Join UX Waterloo community group (Waterloo)"
    },
    {
      type: "community",
      title: "Join Girl Geek Dinners WR (Waterloo)"
    },
    {
      type: "speaker",
      title: "Begin professional blog (Medium)"
    }
  ];

  const timeline2014 = [
    {
      type: "job",
      title: "Rebrand ChromeMedia to Vehikl"
    },
    {
      type: "education",
      title: "Certification: Human Computer Interaction (UC San Diego)"
    },
    {
      type: "job",
      title: "Promotion: UX Designer (Vehikl)"
    },
    {
      type: "speaker",
      title: "Speaker, UX Waterloo: \"How to Wireframe like a Boss\" (Waterloo)"
    },
    {
      type: "community",
      title: "Attend Fluxible (Kitchener)"
    },
    {
      type: "community",
      title: "Attend Laracon EU (Amsterdam)"
    },
    {
      type: "community",
      title: "Attend Erie Day of Code (Erie, PA)"
    },
    {
      type: "community",
      title: "Join Hackernest meetup (Kitchener-Waterloo)"
    }
  ];

  const timeline2015 = [
    {
      type: "speaker",
      title: "UX Facilitative Volunteer, STEMGyrls"
    },
    {
      type: "community",
      title: "Attend CanUX (Ottawa)"
    },
    {
      type: "community",
      title: "Attend Fluxible (Kitchener)"
    },
    {
      type: "community",
      title: "Attend Erie Day of Code (Erie, PA)"
    },
  ];

  const timeline2016 = [
    {
      type: "speaker",
      title: "Panelist, Zonta Film Festival screening of \"Code: Debugging the Gender Gap\""
    },
    {
      type: "speaker",
      title: "Join as contributing writer for Code Like a Girl Inc."
    },
    {
      type: "community",
      title: "Attend Codemash (Sandusky, OH)"
    },
    {
      type: "community",
      title: "Creator: Gary the Bear"
    },
    {
      type: "community",
      title: "Attend Laracon US (Louisville)"
    },
    {
      type: "speaker",
      title: "Speaker, Laracon EU: \"Project Utopia\" (Amsterdam)"
    },
    {
      type: "community",
      title: "Attend Erie Day of Code (Erie, PA)"
    },
    {
      type: "speaker",
      title: "Speaker, Ladies that UX: \"Pairing with Devs/Designers\" (London, ON)"
    },
  ];

  const timeline2017 = [
    {
      type: "job",
      title: "Promotion: UX Developer (Vehikl)"
    },
    {
      type: "community",
      title: "Join Technical Chats for Women (Kitchener)"
    },
    {
      type: "speaker",
      title: "Panelist, Future Female Techmakers Conference"
    },
    {
      type: "community",
      title: "Attend Laracon EU (Amsterdam)"
    },
    {
      type: "speaker",
      title: "UX Facilitative Volunteer, STEMGyrls"
    },
    {
      type: "community",
      title: "Attend Laracon US (NYC)"
    },
  ];

  const timeline2018 = [
    {
      type: "community",
      title: "Attend Codemash (Sandusky, OH)"
    },
    {
      type: "community",
      title: "Attend Laracon US (Chicago)"
    },
    {
      type: "speaker",
      title: "Launch of DevLondon (London, ON)"
    },
    {
      type: "community",
      title: "Join Ladies that UX (London, ON)"
    },
  ];

  const timeline2019 = [
    {
      type: "speaker",
      title: "Author, \"Practical UX\""
    },
    {
      type: "speaker",
      title: "Speaker, Erie Day of Code (Erie, PA)"
    },
    {
      type: "job",
      title: "Product Manager: North America (Flyt; Skip the Dishes)"
    },
    {
      type: "community",
      title: "Organizer, DevLondon (London, ON)"
    },
  ];

  const timeline2020 = [
    {
      type: "community",
      title: "Attend RC Show (Toronto)"
    },
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
          <p>I'm a senior User Experience (UX) developer who is passionate about product design. I have been specializing in UX design for 8 years, and honing my front-end development and web design skills for the past 7 years. I've been leading cross-functional software teams through facilitation, coaching, and project management for 4 years. I have had training in accessibility for web, and have a formal education in business, marketing, and traditional art.</p>
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
            {timeline2008.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2009</li>
            {timeline2009.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2010</li>
            {timeline2010.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2012</li>
            {timeline2012.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2013</li>
            {timeline2013.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}
            
            <li className="year">2014</li>
            {timeline2014.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}
            
            <li className="year">2015</li>
            {timeline2015.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}
            
            <li className="year">2016</li>
            {timeline2016.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}
            
            <li className="year">2017</li>
            {timeline2017.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}
            
            <li className="year">2018</li>
            {timeline2018.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}
            
            <li className="year">2019</li>
            {timeline2019.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}

            <li className="year">2020</li>
            {timeline2020.map(({id, type, title}) =>(
              <li className={`${type}`}>
              {title}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About
