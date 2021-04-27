import React from 'react';
import caryn1 from 'assets/caryn1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentLines } from '@fortawesome/pro-light-svg-icons';
import carynResume from 'assets/caryn-humphreys-resume-2021.pdf';
import PracticalUx from 'assets/about/practicalux.png';

const About = () => {
  const timeline = [
    {
      id: 0,
      year: "2008",
      events: [
        {
          id: 1,
          type: "job",
          title: "Advertising Layout & Graphic Artist (Conestoga College)",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "job",
          title: "Launch Design by Humphreys (freelance brand)",
          image: "",
          description: ""
        },
      ]
    },
    {
      id: 1,
      year: "2009",
      events: [
        {
          id: 1,
          type: "education",
          title: "Graduate of Advertising (Conestoga College)",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "job",
          title: "Digital Media Coordinator (Waterloo Regional Children's Museum)",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "job",
          title: "Graphic Designer (R&S Screening)",
          image: "",
          description: ""
        }
      ]
    },
    {
      id: 2,
      year: "2010",
      events: [
        {
          id: 1,
          type: "job",
          title: "Director of Marketing (Waterloo Management Education Centre)",
          image: "",
          description: ""
        }
      ]
    },
    {
      id: 3,
      year: "2012",
      events: [
        {
          id: 1,
          type: "job",
          title: "Web Designer (ChromeMedia)",
          image: "",
          description: ""
        }
      ]
    },
    {
      id: 4,
      year: "2013",
      events: [
        {
          id: 1,
          type: "community",
          title: "Attend Fluxible (Kitchener)",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "education",
          title: "Begin specialization in UX (ChromeMedia)",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "community",
          title: "Join UX Waterloo community group (Waterloo)",
          image: "",
          description: ""
        },
        {
          id: 4,
          type: "community",
          title: "Join Girl Geek Dinners WR (Waterloo)",
          image: "",
          description: ""
        },
        {
          id: 5,
          type: "speaker",
          title: "Begin professional blog (Medium)",
          image: "",
          description: ""
        }
      ]
    },
    {
      id: 5,
      year: "2014",
      events: [
        {
          id: 1,
          type: "job",
          title: "Rebrand ChromeMedia to Vehikl",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "education",
          title: "Certification: Human Computer Interaction (UC San Diego)",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "job",
          title: "Promotion: UX Designer (Vehikl)",
          image: "",
          description: ""
        },
        {
          id: 4,
          type: "speaker",
          title: "Speaker, UX Waterloo: \"How to Wireframe like a Boss\" (Waterloo)",
          image: "",
          description: ""
        },
        {
          id: 5,
          type: "community",
          title: "Attend Fluxible (Kitchener)",
          image: "",
          description: ""
        },
        {
          id: 6,
          type: "community",
          title: "Attend Laracon EU (Amsterdam)",
          image: "",
          description: ""
        },
        {
          id: 7,
          type: "community",
          title: "Attend Erie Day of Code (Erie, PA)",
          image: "",
          description: ""
        },
        {
          id: 8,
          type: "community",
          title: "Join Hackernest meetup (Kitchener-Waterloo)",
          image: "",
          description: ""
        }
      ]
    },
    {
      id: 6,
      year: "2015",
      events: [
        {
          id: 1,
          type: "speaker",
          title: "UX Facilitative Volunteer, STEMGyrls",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "community",
          title: "Attend CanUX (Ottawa)",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "community",
          title: "Attend Fluxible (Kitchener)",
          image: "",
          description: ""
        },
        {
          id: 4,
          type: "community",
          title: "Attend Erie Day of Code (Erie, PA)",
          image: "",
          description: ""
        },
      ]
    },
    {
      id: 7,
      year: "2016",
      events: [
        {
          id: 1,
          type: "speaker",
          title: "Panelist, Zonta Film Festival screening of \"Code: Debugging the Gender Gap\"",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "speaker",
          title: "Join as contributing writer for Code Like a Girl Inc.",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "community",
          title: "Attend Codemash (Sandusky, OH)",
          image: "",
          description: ""
        },
        {
          id: 4,
          type: "community",
          title: "Creator: Gary the Bear",
          image: "",
          description: ""
        },
        {
          id: 5,
          type: "community",
          title: "Attend Laracon US (Louisville)",
          image: "",
          description: ""
        },
        {
          id: 6,
          type: "speaker",
          title: "Speaker, Laracon EU: \"Project Utopia\" (Amsterdam)",
          image: "",
          description: ""
        },
        {
          id: 7,
          type: "community",
          title: "Attend Erie Day of Code (Erie, PA)",
          image: "",
          description: ""
        },
        {
          id: 8,
          type: "speaker",
          title: "Speaker, Ladies that UX: \"Pairing with Devs/Designers\" (London, ON)",
          image: "",
          description: ""
        },
      ]
    },
    {
      id: 8,
      year: "2017",
      events: [
        {
          id: 1,
          type: "job",
          title: "Promotion: UX Developer (Vehikl)",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "community",
          title: "Join Technical Chats for Women (Kitchener)",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "speaker",
          title: "Panelist, Future Female Techmakers Conference",
          image: "",
          description: ""
        },
        {
          id: 4,
          type: "community",
          title: "Attend Laracon EU (Amsterdam)",
          image: "",
          description: ""
        },
        {
          id: 5,
          type: "speaker",
          title: "UX Facilitative Volunteer, STEMGyrls",
          image: "",
          description: ""
        },
        {
          id: 6,
          type: "community",
          title: "Attend Laracon US (NYC)",
          image: "",
          description: ""
        },
      ]
    },
    {
      id: 9,
      year: "2018",
      events: [
        {
          id: 1,
          type: "community",
          title: "Attend Codemash (Sandusky, OH)",
          image: "",
          description: ""
        },
        {
          id: 2,
          type: "community",
          title: "Attend Laracon US (Chicago)",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "speaker",
          title: "Launch of DevLondon (London, ON)",
          image: "",
          description: ""
        },
        {
          id: 4,
          type: "community",
          title: "Join Ladies that UX (London, ON)",
          image: "",
          description: ""
        },
      ]
    },
    {
      id: 10,
      year: "2019",
      events: [
        {
          id: 1,
          type: "speaker more-info",
          title: "Author, \"Practical UX\"",
          image: PracticalUx,
          description: "Together, with five experienced UX professionals, designers, and authors, this series explores some favorite tools and habits for applying usability in everyday work. It includes a set of free downloadable worksheets and posters."
        },
        {
          id: 2,
          type: "speaker",
          title: "Speaker, Erie Day of Code (Erie, PA)",
          image: "",
          description: ""
        },
        {
          id: 3,
          type: "job",
          title: "Product Manager: North America (Flyt; Skip the Dishes)",
          image: "",
          description: ""
        },
        {
          id: 4,
          type: "community",
          title: "Organizer, DevLondon (London, ON)",
          image: "",
          description: ""
        },
      ]
    },
    {
      id: 11,
      year: "2020",
      events: [
        {
          id: 1,
          type: "community",
          title: "Attend RC Show (Toronto)",
          image: "",
          description: ""
        },
      ]
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
          <p>I'm a senior User Experience (UX) developer who is passionate about product design. I have been specializing in UX design for 8 years, and honing my front-end development and web design skills for the past 7 years. I've been leading cross-functional software teams through facilitation, coaching, and project management for 4 years. I have had training in accessibility for web, and have a formal education in business, marketing, and traditional art.</p>
          <a href={carynResume} target="_blank" rel="noreferrer" className="arrow-link block">View Resume (PDF)</a>
        </div>
      </div>
      <div className="timeline">
        <h2>History</h2>
        <div className="timeline-content">
          <div className="timeline">
            <div className="path"></div>
            <ul>
              {timeline.reverse().map(({id, year, events}) => (
                <div className="year-section" key={id}>
                  <li className="year-title">{year}</li>
                  {events.map(({id, type, title, description}) =>(
                    <li key={year+id} className={`${type}`}>
                      <div className="event">
                        {title}
                      </div>

                      { description ? 
                       (<div className="more">
                        <FontAwesomeIcon icon={faCommentLines} />
                      </div>) : null }
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
          <div className="detail">
            <h3>Practical UX (2020)</h3>
            <img src={PracticalUx} alt="detail"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil temporibus numquam laboriosam aliquam omnis quidem expedita possimus accusantium, minus explicabo, alias iusto consequuntur deserunt perferendis. Deserunt, veritatis voluptatem. Autem, nisi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
