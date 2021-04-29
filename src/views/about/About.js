import React, { useState } from 'react';
import caryn1 from 'assets/caryn1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentLines, faTimes } from '@fortawesome/pro-light-svg-icons';
import carynResume from 'assets/caryn-humphreys-resume-2021.pdf';
import PracticalUx from 'assets/about/practicalux.png';
import erieTalk from 'assets/caryn3.jpg';

const About = () => {
  const timeline = [
    {
      id: "e9171ee3-c811-43cf-b583-874367bd2d72",
      year: "2008",
      events: [
        {
          id: "f988f59c-84ae-4ba4-83be-7bd8f46d17d7",
          type: "job",
          title: "Advertising Layout & Graphic Artist (Conestoga College)",
        },
        {
          id: "92a28763-bf18-4861-934f-b64c868d70aa",
          type: "job",
          title: "Launch Design by Humphreys (freelance brand)",
        },
      ]
    },
    {
      id: "2d4d15c4-7804-473d-b527-a314348242de",
      year: "2009",
      events: [
        {
          id: "127a5206-4bb4-4c87-9a59-1b47a623df35",
          type: "education",
          title: "Graduate of Advertising (Conestoga College)",
        },
        {
          id: "f6b77db9-4fd5-4f78-91b0-2ebf7aec1431",
          type: "job",
          title: "Digital Media Coordinator (Waterloo Regional Children's Museum)",
        },
        {
          id: "7db9da23-d622-4593-8a9c-9a6b0842b380",
          type: "job",
          title: "Graphic Designer (R&S Screening)",
        }
      ]
    },
    {
      id: "ca254398-a65d-4bc5-a9fe-d8a919ccde94",
      year: "2010",
      events: [
        {
          id: "7e26c37f-6684-474c-8549-610eef13c05b",
          type: "job",
          title: "Director of Marketing (Waterloo Management Education Centre)",
        }
      ]
    },
    {
      id: "532dc5a9-7685-4e22-b281-23db3417e834",
      year: "2012",
      events: [
        {
          id: 1,
          type: "job",
          title: "Web Designer (ChromeMedia)",
        }
      ]
    },
    {
      id: "f0412ed2-f865-498d-86f2-a38cdb108afd",
      year: "2013",
      events: [
        {
          id: "60134515-b692-48f5-b8a3-438d3a3b16f7",
          type: "community",
          title: "Attend Fluxible (Kitchener)",
        },
        {
          id: "4827bf72-75e9-45b3-9da8-4df85545d5a1",
          type: "education",
          title: "Begin specialization in UX (ChromeMedia)",
        },
        {
          id: "1fdd4c39-d02c-4b03-8afe-1b265cc38417",
          type: "community",
          title: "Join UX Waterloo community group (Waterloo)",
        },
        {
          id: "5483bb86-552a-45b0-b76c-4025012d7293",
          type: "community",
          title: "Join Girl Geek Dinners WR (Waterloo)",
        },
        {
          id: "3bb44726-618f-4694-af69-79c0fd97c01f",
          type: "speaker",
          title: "Begin professional blog (Medium)",
        }
      ]
    },
    {
      id: "4a7120ef-4b06-46bf-9bab-5693f860cb17",
      year: "2014",
      events: [
        {
          id: "45cde8e3-f1d8-4ff8-91e0-c156f342003f",
          type: "job",
          title: "Rebrand ChromeMedia to Vehikl",
        },
        {
          id: "18dc2aa3-7c71-4f69-aafd-e20320819976",
          type: "education",
          title: "Certification: Human Computer Interaction (UC San Diego)",
        },
        {
          id: "0c1adfc4-b550-4a43-9e9f-bc610dcd363d",
          type: "job",
          title: "Promotion: UX Designer (Vehikl)",
        },
        {
          id: "c18d16ee-e5a3-4389-a6ab-e77b567155d9",
          type: "speaker",
          title: "Speaker, UX Waterloo: \"How to Wireframe like a Boss\" (Waterloo)",
        },
        {
          id: "3d342566-4036-4bff-bd2e-e7248592db75",
          type: "community",
          title: "Attend Fluxible (Kitchener)",
        },
        {
          id: "24084961-a3a6-41ad-be15-1104cc8adb45",
          type: "community",
          title: "Attend Laracon EU (Amsterdam)",
        },
        {
          id: "f83a3160-9cdf-4ee8-9bd0-a83cfd1f1130",
          type: "community",
          title: "Attend Erie Day of Code (Erie, PA)",
        },
        {
          id: "e9d9f89f-5b37-48b8-a394-796985e8c8ed",
          type: "community",
          title: "Join Hackernest meetup (Kitchener-Waterloo)",
        }
      ]
    },
    {
      id: "95fc24ea-7219-4f74-b7de-8b7df14d9555",
      year: "2015",
      events: [
        {
          id: "a972907e-312e-40bc-93b8-623c0c40d2e5",
          type: "speaker",
          title: "UX Facilitative Volunteer, STEMGyrls",
        },
        {
          id: "ed92e512-b7c3-4670-a581-808470c0ef15",
          type: "community",
          title: "Attend CanUX (Ottawa)",
        },
        {
          id: "997cda67-f02b-4bdc-aa24-a8c7a89a1f84",
          type: "community",
          title: "Attend Fluxible (Kitchener)",
        },
        {
          id: "da8266cd-9545-464d-a87d-6863e1f16717",
          type: "community",
          title: "Attend Erie Day of Code (Erie, PA)",
        },
      ]
    },
    {
      id: "e717497b-1f0a-4005-9802-4927a1eac39a",
      year: "2016",
      events: [
        {
          id: "d5732ab5-6318-4027-a403-c439e7957943",
          type: "speaker",
          title: "Panelist, Zonta Film Festival screening of \"Code: Debugging the Gender Gap\"",
        },
        {
          id: "a68b8fdf-68a0-45ee-a030-302ee8a8bb77",
          type: "speaker",
          title: "Join as contributing writer for Code Like a Girl Inc.",
        },
        {
          id: "0d3f38dd-9b80-4de2-86ef-60d04bca3920",
          type: "community",
          title: "Attend Codemash (Sandusky, OH)",
        },
        {
          id: "0d34a55b-ebeb-4098-9ced-fb249b80b091",
          type: "community",
          title: "Creator: Gary the Bear",
        },
        {
          id: "aa2f2c09-0cea-4fcf-920b-7783f01b67e1",
          type: "community",
          title: "Attend Laracon US (Louisville)",
        },
        {
          id: "204edb3d-4257-4eb9-9350-644da4b70d2f",
          type: "speaker",
          title: "Speaker, Laracon EU: \"Project Utopia\" (Amsterdam)",
        },
        {
          id: "5a8e817e-a391-4f9d-a075-275d0e4e1109",
          type: "community",
          title: "Attend Erie Day of Code (Erie, PA)",
        },
        {
          id: "bf53df7c-12e0-4e04-a0b6-8330c6f8c080",
          type: "speaker",
          title: "Speaker, Ladies that UX: \"Pairing with Devs/Designers\" (London, ON)",
        },
      ]
    },
    {
      id: "acb88ba5-fa87-4f10-a2fd-9ca11fcacefc",
      year: "2017",
      events: [
        {
          id: "1448592f-adbe-47c7-9afb-3d961389da17",
          type: "job",
          title: "Promotion: UX Developer (Vehikl)",
        },
        {
          id: "43b98251-ff3d-4d36-a5fc-dca7ee7bf0e3",
          type: "community",
          title: "Join Technical Chats for Women (Kitchener)",
        },
        {
          id: "e0b6bd30-4ba3-45fc-99bf-997bff06de53",
          type: "speaker",
          title: "Panelist, Future Female Techmakers Conference",
        },
        {
          id: "8ecc1d62-afaa-41a9-a30f-f6b1296464cc",
          type: "community",
          title: "Attend Laracon EU (Amsterdam)",
        },
        {
          id: "d225b207-a3fc-4ed2-9545-f1bf2e470916",
          type: "speaker",
          title: "UX Facilitative Volunteer, STEMGyrls",
        },
        {
          id: "dcea0422-3b66-4d0a-be45-8d68cf2b11a1",
          type: "community",
          title: "Attend Laracon US (NYC)",
        },
      ]
    },
    {
      id: "86fa477f-53e0-445d-991c-354722224048",
      year: "2018",
      events: [
        {
          id: "3a5e8aaf-8bdb-4625-8a9c-047c8b528977",
          type: "community",
          title: "Attend Codemash (Sandusky, OH)",
        },
        {
          id: "d57e61c2-2887-4ad7-9a7c-ef8c342cfe03",
          type: "community",
          title: "Attend Laracon US (Chicago)",
        },
        {
          id: "c2e240e5-34cf-4801-9684-b9a370811828",
          type: "speaker",
          title: "Launch of DevLondon (London, ON)",
        },
        {
          id: "1b3ae9d8-da30-4d1d-bf4d-a10863dd71c5",
          type: "community",
          title: "Join Ladies that UX (London, ON)",
        },
      ]
    },
    {
      id: "e9000491-98ab-423a-a6e8-53fcf91f5450",
      year: "2019",
      events: [
        {
          id: "fcf47537-fe5e-405e-ad64-3abf234bb360",
          type: "speaker",
          title: "Author, \"Practical UX\"",
          image: PracticalUx,
          description: "Together, with five experienced UX professionals, designers, and authors, this series explores some favorite tools and habits for applying usability in everyday work. It includes a set of free downloadable worksheets and posters.",
          year: "2019"
        },
        {
          id: "646351eb-3ba3-43a8-aa11-6ef55470aa79",
          type: "speaker",
          title: "Speaker, Erie Day of Code (Erie, PA)",
          image: erieTalk,
          description: "Aimed toward developers, this talk presented the concepts I introduced in the Practical UX series. It broke down practical UX techniques to use every day. The audience was shown some essential UX rules, easy tools for getting started, UX tips specific to developing software, and some insider info on the state of mind used by UX professionals to strategize and design successful products.",
          year: "2019"
        },
        {
          id: "5c1c0249-9590-4e3b-a5c7-c3301094381c",
          type: "job",
          title: "Product Manager: North America (Flyt; Skip the Dishes)",

        },
        {
          id: "ef0fa120-d967-4a57-8251-e9d1d5e0537e",
          type: "community",
          title: "Organizer, DevLondon (London, ON)",
        },
      ]
    },
    {
      id: "f75c44c0-71fa-4141-9c73-9d77d9fb2f5f",
      year: "2020",
      events: [
        {
          id: "7a25d1ca-700a-4a40-a488-09656e1270f4",
          type: "community",
          title: "Attend RC Show (Toronto)",
        },
      ]
    }
  ];

  const[selectedItemId, setSelectedItemId] = useState(null);

  let detailItem;
  timeline.forEach(item => {
    const i = item.events.find(event => event.id === selectedItemId)
    if (i) {
      detailItem = i
      return
    }
  });

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
                    <li key={year+id} className={`${type} ${description ? "more-info" : "" }`} onClick={() => description ? setSelectedItemId(id) : null}>
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
          { detailItem && 
            <div className="detail">
              <button onClick={() => setSelectedItemId(null)}>close <FontAwesomeIcon icon={faTimes} /></button>
              <h3>{detailItem.title} ({detailItem.year})</h3>
              <img src={detailItem.image} alt={detailItem.title}/>
              <p>{detailItem.description}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default About
