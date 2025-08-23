import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import caryn1 from 'assets/about/caryn-portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentLines } from '@fortawesome/pro-light-svg-icons';
import carynResume from 'assets/CarynFarvour_UXManager_Resume.pdf';
import PracticalUx from 'assets/about/practicalux.png';
import erieTalk from 'assets/caryn3.jpg';
import devLondon from 'assets/portfolio/dev-london.jpg';
import codemash from 'assets/about/codemash.jpg';
import uxCentreStage from 'assets/about/ux-center-stage.jpg';
import laraconChicago from 'assets/about/laracon-chicago.jpg';
import laraconEu2017 from 'assets/about/laracon-eu-2017.jpg';
import stemGyrls2017 from 'assets/about/stem-gyrls-2017.jpg';
import laraconUs2017 from 'assets/about/laracon-us-2017.jpg';
import garyBear from 'assets/about/gary-bear.jpg';
import zonta from 'assets/about/zonta.jpg';
import laraconUs2016 from 'assets/about/laracon-us-2016.jpg';
import laraconEu2016 from 'assets/caryn6.jpg';
import stemGyrls2015 from 'assets/about/stem-gyrls-2015.jpg';
import canUx from 'assets/about/canUx.jpg';
import fluxible from 'assets/about/fluxible-goat-check.jpg';
import laraconUs2015 from 'assets/about/laracon-us-2015.jpg';
import devDesign from 'assets/about/dev-design-pair.jpg';
import stockDesk from 'assets/about/stock-desk.jpg';
import hackernest from 'assets/about/hackernest.jpg';
import laraconEu2014 from 'assets/about/laracon-eu-2014.jpg';
import fluxible2014 from 'assets/about/fluxible2014.jpg';
import uxWaterloo2014 from 'assets/about/ux-waterloo-2014.jpg';
import wireframe2017 from 'assets/about/wireframe.png';
import stockBike from 'assets/about/stock-bike.jpg';
import stockScreen from 'assets/about/stock-screen.jpg';
import stockMic from 'assets/about/stock-mic.jpg';

const CustomLink = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const About = () => {
  const timeline = [
    {
      id: 'e9171ee3-c811-43cf-b583-874367bd2d72',
      year: '2008',
      events: [
        {
          id: 'f988f59c-84ae-4ba4-83be-7bd8f46d17d7',
          type: 'job',
          title: 'Advertising Layout & Graphic Artist (Conestoga College)',
        },
        {
          id: '92a28763-bf18-4861-934f-b64c868d70aa',
          type: 'job',
          title: 'Launch Design by Humphreys (freelance brand)',
        },
      ]
    },
    {
      id: '2d4d15c4-7804-473d-b527-a314348242de',
      year: '2009',
      events: [
        {
          id: '127a5206-4bb4-4c87-9a59-1b47a623df35',
          type: 'education',
          title: 'Graduate of Advertising (Conestoga College)',
        },
        {
          id: 'f6b77db9-4fd5-4f78-91b0-2ebf7aec1431',
          type: 'job',
          title: 'Digital Media Coordinator (Waterloo Regional Children\'s Museum)',
        },
        {
          id: '7db9da23-d622-4593-8a9c-9a6b0842b380',
          type: 'job',
          title: 'Graphic Designer (R&S Screening)',
        }
      ]
    },
    {
      id: 'ca254398-a65d-4bc5-a9fe-d8a919ccde94',
      year: '2010',
      events: [
        {
          id: '7e26c37f-6684-474c-8549-610eef13c05b',
          type: 'job',
          title: 'Director of Marketing (Waterloo Management Education Centre)',
        }
      ]
    },
    {
      id: '532dc5a9-7685-4e22-b281-23db3417e834',
      year: '2012',
      events: [
        {
          id: 1,
          type: 'job',
          title: 'Web Designer (ChromeMedia)',
        }
      ]
    },
    {
      id: 'f0412ed2-f865-498d-86f2-a38cdb108afd',
      year: '2013',
      events: [
        {
          id: '60134515-b692-48f5-b8a3-438d3a3b16f7',
          type: 'community',
          title: 'Attend Fluxible (Kitchener)',
        },
        {
          id: '4827bf72-75e9-45b3-9da8-4df85545d5a1',
          type: 'education',
          title: 'Begin specialization in UX (ChromeMedia)',
        },
        {
          id: '1fdd4c39-d02c-4b03-8afe-1b265cc38417',
          type: 'community',
          title: 'Join UX Waterloo community group (Waterloo)',
        },
        {
          id: '5483bb86-552a-45b0-b76c-4025012d7293',
          type: 'community',
          title: 'Join Girl Geek Dinners WR (Waterloo)',
        },
        {
          id: '3bb44726-618f-4694-af69-79c0fd97c01f',
          type: 'speaker',
          title: 'Begin professional blog (Medium)',
        }
      ]
    },
    {
      id: '4a7120ef-4b06-46bf-9bab-5693f860cb17',
      year: '2014',
      events: [
        {
          id: '18dc2aa3-7c71-4f69-aafd-e20320819976',
          type: 'education',
          title: 'Certification: Human Computer Interaction (UC San Diego)',
        },
        {
          id: 'c18d16ee-e5a3-4389-a6ab-e77b567155d9',
          type: 'speaker',
          title: 'Speaker, UX Waterloo: "How to Wireframe like a Boss" (Waterloo)',
          image: uxWaterloo2014,
          description: 'My first public speaking engagement was at a UX Waterloo event where I taught a hands-on wireframing workshop. Attendees were given a quick rundown of some essential UX knowledge and warmed up with some practice wireframe elements, then were rewarded with being able to create rough wireframes for some fun app ideas.',
          year: '2014'
        },
        {
          id: '3d342566-4036-4bff-bd2e-e7248592db75',
          type: 'community',
          title: 'Attend Fluxible (Kitchener)',
          image: fluxible2014,
          description: 'My second Fluxible. Organized by the peer-2-peer group UX Waterloo with attendees from all over Southwestern Ontario, this local UX conference brought together speakers from all different UX disciplines to share their knowledge.',
          year: '2014'
        },
        {
          id: '24084961-a3a6-41ad-be15-1104cc8adb45',
          type: 'community',
          title: 'Attend Laracon EU (Amsterdam)',
          image: laraconEu2014,
          description: 'This was my first time attending Laracon EU; the European version of the conference focused around the PHP framework Laravel (our framework of choice at Vehikl).',
          year: '2014'
        },
        {
          id: 'e9d9f89f-5b37-48b8-a394-796985e8c8ed',
          type: 'community',
          title: 'Join Hackernest meetup (Kitchener-Waterloo)',
          image: hackernest,
          description: 'Hackernest is a monthly social and networking event for the local tech community. It is a not-for-profit with chapters around the world. Attendees include staff and students from around the region, which makes for a busy networking evening with many varied people.',
          year: '2014'
        }
      ]
    },
    {
      id: '95fc24ea-7219-4f74-b7de-8b7df14d9555',
      year: '2015',
      events: [
        {
          id: 'a972907e-312e-40bc-93b8-623c0c40d2e5',
          type: 'speaker',
          title: 'UX Facilitative Volunteer, STEMGyrls',
          image: stemGyrls2015,
          description: 'I was thrilled to be asked to share my UX skills for the first time at this mini-con hosted by the YWCA in Cambridge, Ontario. As the oldest sister of 6 girls, I\'ve had a passion for encouraging and inspiring young girls to get interested in and follow a STEM path. It was a treat to get to see the girls\' faces light up when they realized that some of the most essential artistic UX skills were skills [they already possessed](https://twitter.com/LadyCarni/status/655469926040383488)! This was certainly one of the most rewarding little events I\'d participated in.',
          year: '2015'
        },
        {
          id: 'ed92e512-b7c3-4670-a581-808470c0ef15',
          type: 'community',
          title: 'Attend CanUX (Ottawa)',
          image: canUx,
          description: 'Hosted in Ottawa, this UX conference had Aaron Draplin as its keynote speaker. This was my first big UX conference, and the connections I made among the speakers and attendees were invaluable to my career.',
          year: '2015'
        },
        {
          id: '997cda67-f02b-4bdc-aa24-a8c7a89a1f84',
          type: 'community',
          title: 'Attend Fluxible (Kitchener)',
          image: fluxible,
          description: 'A locally run UX conference in Kitchener-Waterloo, Fluxible invited designers, strategists, authors, and product managers from Southwestern Ontario to this two day, single-track event. The event was the first to host a \'goat check\' (aka coat check) that featured real, live goats!',
          year: '2015'
        },
        {
          id: '0d34a55b-ebeb-4098-9ced-fb249b80b091',
          type: 'community',
          title: 'Creator: Gary the Bear',
          image: garyBear,
          description: 'In a moment of inspiration (and no small amount of frivolity), I bought a giant bear coat and decided he would live in the Vehikl office as our unofficial mascot. I named him Gary the Bear (in honor of a well-liked client at the time). Gary was given his own [Twitter account](https://twitter.com/bearwithgary), and posed as his own personality online.\n\nGary was [adopted](https://twitter.com/bearwithgary/status/1022276833205731330/photo/1) by [a few friends](https://twitter.com/bearwithgary/status/889851070436044800/photo/1), and ended up being passed around throughout the conference, and started an unofficial, [annual tradition](https://twitter.com/bearwithgary/status/889630236224008192/photo/1) at Laracon, and [always](https://twitter.com/bearwithgary/status/1022882695817256960/photo/1) brought [lots of laughs](https://twitter.com/bearwithgary/status/1154088952120381442/photo/1).',
          year: '2015'
        },
        {
          id: '0ffa15a3-6c26-4eae-ab3f-a2512ec574d7',
          type: 'community',
          title: 'Attend Laracon US (Louisville)',
          image: laraconUs2015,
          description: 'Hosted in Louisville, Laracon US was as eventful as ever. This year I introduced Gary the Bear to the attendees. I used Gary as a means to break the ice and get the wallflowers excited about networking and enjoying themselves between the talks.',
          year: '2015'
        },
        {
          id: 'da8266cd-9545-464d-a87d-6863e1f16717',
          type: 'community',
          title: 'Attend Erie Day of Code (Erie, PA)',
        },
      ]
    },
    {
      id: 'e717497b-1f0a-4005-9802-4927a1eac39a',
      year: '2016',
      events: [
        {
          id: 'd5732ab5-6318-4027-a403-c439e7957943',
          type: 'speaker',
          title: 'Panelist, Zonta Film Festival screening of "Code: Debugging the Gender Gap"',
          image: zonta,
          description: 'I spoke on a panel of women after the screening of a documentary about women in tech. The Princess Cinema in Waterloo partnered up with the Zonta Film Festival to show the documentary "Code: Debugging the Gender Gap". This film examines the reasons behind the lack of women and girls choosing computer science as a vocation in the United States, despite thousands of available jobs and the desperate need for qualified programmers and engineers.',
          year: '2016'
        },
        {
          id: 'a68b8fdf-68a0-45ee-a030-302ee8a8bb77',
          type: 'speaker',
          title: 'Join as contributing writer for Code Like a Girl Inc.',
        },
        {
          id: '0d3f38dd-9b80-4de2-86ef-60d04bca3920',
          type: 'community',
          title: 'Attend Codemash (Sandusky, OH)',
        },
        {
          id: 'aa2f2c09-0cea-4fcf-920b-7783f01b67e1',
          type: 'community',
          title: 'Attend Laracon US (Louisville)',
          image: laraconUs2016,
          description: 'Hosted in Louisville for the another year, Laracon US was a smash hit. Great talks all around, and, as always, a great turnout from the community. Attendees returning to Louisville got to see a little more of the area around the venue, and took advantage of the great after party to network and have fun with colleagues.',
          year: '2016'
        },
        {
          id: '204edb3d-4257-4eb9-9350-644da4b70d2f',
          type: 'speaker',
          title: 'Speaker, Laracon EU: "Project Utopia" (Amsterdam)',
          image: laraconEu2016,
          description: 'This was my first big [conference talk](https://www.youtube.com/watch?v=WARtjv330mg). The talk was jointly given with Jesse O\'Brien on a topic we called Project Utopia; how to run a successful software project. We had been successfully running software projects for several years, and had also seen several mistakes others would make, that we felt we could help alleviate with a few practical and applicable tips. This talk was recreated and published on Medium as [an article](https://medium.com/vehikl-news/running-better-software-projects-c589f017c63f) for those who didn\'t see the talk.',
          year: '2016'
        },
        {
          id: '5a8e817e-a391-4f9d-a075-275d0e4e1109',
          type: 'community',
          title: 'Attend Erie Day of Code (Erie, PA)',
        },
        {
          id: 'bf53df7c-12e0-4e04-a0b6-8330c6f8c080',
          type: 'speaker',
          title: 'Speaker, Ladies that UX: "Pairing with Devs/Designers" (London, ON)',
          image: devDesign,
          description: 'At a local UX meetup, I gave [a brief talk](https://youtu.be/jKjPE0hG5oU?t=1802) on how to pair program for developers and designers. The concept of cross-functional teams can be controversial in general, but the concept of the two disciplines actually working alongside one another has ruffled a few feathers in the community over the years. This talk was designed to shed light on how to break down the walls between the disciplines so that the product you\'re both designing and building ends up better.',
          year: '2016'
        },
      ]
    },
    {
      id: 'acb88ba5-fa87-4f10-a2fd-9ca11fcacefc',
      year: '2017',
      events: [
        {
          id: '43b98251-ff3d-4d36-a5fc-dca7ee7bf0e3',
          type: 'community',
          title: 'Join Technical Chats for Women (Kitchener)',
        },
        {
          id: 'e0b6bd30-4ba3-45fc-99bf-997bff06de53',
          type: 'speaker',
          title: 'Panelist, Future Female Techmakers Conference',
          image: stockMic,
          description: 'I was invited to speak on a panel of women from varying STEM fields for an audience of grade 9 - 12 high school and undergraduate students. The panel included a 60 minute discussion and a 20 minute Q&A from audience members.\n\nThe annual Future Female Techmakers Conference (FFTC) aims to teach women how to be effective mentors, provides female role models to young women interested in the tech industry, and creates lasting meaningful connections that will support all of the participants in their journey towards becoming female techmakers.',
          year: '2017'
        },
        {
          id: '8ecc1d62-afaa-41a9-a30f-f6b1296464cc',
          type: 'community',
          title: 'Attend Laracon EU (Amsterdam)',
          image: laraconEu2017,
          description: 'This was my third time attending this conference, as a representative of Vehikl; a loyal sponsor of the conference. This conference gave me the opportunity to meet up with our Laravel counterparts in Europe that wouldn\'t be able to make the trip to Laracon US every year.\n\nThis year I\'d made a [meme](https://twitter.com/LadyCarni/status/902211456283930629) out of the celebrity status of Taylor Otwell (the creator of Laravel), so I spent the sponsor dinner [pretending to be paparazzi](https://www.instagram.com/p/BYdF75FjbeJ/). This community is always up for a good laugh.',
          year: '2017'
        },
        {
          id: '9c143f3e-8657-4825-8107-dfb6f32b8691',
          type: 'community',
          title: 'SheHacks Facilitator (London, ON)',
          image: wireframe2017,
          description: 'I was asked to facilitate a wireframing workshop for Western University as a part of the SheHacks event. Attendees were taught some essential UX knowledge and got to use the concepts with some practice wireframe elements, then were rewarded with being able to create rough wireframes for some fun app ideas.',
          year: '2017'
        },
        {
          id: '1b3ae9d8-da30-4d1d-bf4d-a10863dd71c5',
          type: 'community',
          title: 'Join Ladies that UX (London, ON)',
        },
        {
          id: '621f4832-fc0d-4296-8945-5bd87a1b888a',
          type: 'community',
          title: 'Attend UX Centre Stag (London, ON)',
        },
        {
          id: 'd225b207-a3fc-4ed2-9545-f1bf2e470916',
          type: 'speaker',
          title: 'UX Facilitative Volunteer, STEMGyrls',
          image: stemGyrls2017,
          description: 'I was invited to return to this year\'s STEM Gyrls mini-con where I ran a booth on teaching girls the basics about User Experience design. I had activities that taught the attendees how to wireframe their ideas, and how to storyboard to come up with a way to tell a story about the ideas they have.',
          year: '2017'
        },
        {
          id: 'dcea0422-3b66-4d0a-be45-8d68cf2b11a1',
          type: 'community',
          title: 'Attend Laracon US (NYC)',
          image: laraconUs2017,
          description: 'Another year, another great Laracon US. This year the conference was in New York City, at a venue that couldn\'t be beat. Good talks from seasoned speakers, great engaging crowd, and another year of fun and games amongst the sponsors and supporters.',
          year: '2017'
        },
      ]
    },
    {
      id: '86fa477f-53e0-445d-991c-354722224048',
      year: '2018',
      events: [
        {
          id: '3a5e8aaf-8bdb-4625-8a9c-047c8b528977',
          type: 'community',
          title: 'Attend Codemash (Sandusky, OH)',
          image: codemash,
          description: 'Even after a few trips to Sandusky for Codemash, this conference never fails to deliver. Tons of tracks, across a huge variety of topics, to appeal to almost every discipline in software, with top tier speakers, it\'s impossible to get bored during this event.\n\nWhen you aren\'t buzzing with excitement from the last talk you watched, you\'re looking forward to chatting with the seemingly endless hallways of sponsors, with your eye on North America\'s largest indoor water park located right at the venue... which also happens to be where the incredibly fun after party takes place.',
          year: '2018',
        },
        {
          id: 'd57e61c2-2887-4ad7-9a7c-ef8c342cfe03',
          type: 'community',
          title: 'Attend Laracon US (Chicago)',
          image: laraconChicago,
          description: 'Laracon US is an annual conference centered around Laravel (a PHP framework). This year Laracon was hosted in Chicago, and the entire Vehikl team attended. Networking with the Laravel community was, as always, an absolute blast. The leaders and professionals in this community have long been some of the warmest, most fun to hang out with and work alongside.',
          year: '2018',
        },
        {
          id: 'c2e240e5-34cf-4801-9684-b9a370811828',
          type: 'speaker',
          title: 'Launch of DevLondon (London, ON)',
        },
        {
          id: '86999fe4-7ccb-4b2c-bbcf-803261242872',
          type: 'community',
          title: 'Attend UX Centre Stage (London, ON)',
          image: uxCentreStage,
          description: 'Hosted by a local University, UX Centre Stage is organized by Ladies that UX (London). This annual one day event brings together the local Southwestern Ontario UX community to learn, share, and network.',
          year: '2018'
        }
      ]
    },
    {
      id: 'e9000491-98ab-423a-a6e8-53fcf91f5450',
      year: '2019',
      events: [
        {
          id: 'fcf47537-fe5e-405e-ad64-3abf234bb360',
          type: 'speaker',
          title: 'Author, "Practical UX"',
          image: PracticalUx,
          description: 'Together, with five experienced UX professionals, designers, and authors, this [series](https://medium.com/@LadyCarni/practical-ux-the-perspective-d8908313336d) explores some favorite tools and habits for applying usability in everyday work. It includes a set of free downloadable worksheets and posters.',
          year: '2019',
        },
        {
          id: '646351eb-3ba3-43a8-aa11-6ef55470aa79',
          type: 'speaker',
          title: 'Speaker, Erie Day of Code (Erie, PA)',
          image: erieTalk,
          description: 'Aimed toward developers, this talk presented the concepts I introduced in the Practical UX series. It broke down practical UX techniques to use every day. The audience was shown some essential UX rules, easy tools for getting started, UX tips specific to developing software, and some insider info on the state of mind used by UX professionals to strategize and design successful products.',
          year: '2019',
        },
        {
          id: 'ef0fa120-d967-4a57-8251-e9d1d5e0537e',
          type: 'community',
          title: 'Organizer, DevLondon (London, ON)',
          image: devLondon,
          description: 'I volunteered to take over the events of this local community group that had become quiet and relatively inactive in London, Ontario. I renamed it to give it a fresh face. [Dev London](https://devldn.ca/) is a peer-to-peer group designed to provide insights and inspiration through leadership and networking with the local tech community.',
          year: '2019',
        },
      ]
    },
    {
      id: 'f75c44c0-71fa-4141-9c73-9d77d9fb2f5f',
      year: '2020',
      events: [
        {
          id: '7a25d1ca-700a-4a40-a488-09656e1270f4',
          type: 'community',
          title: 'Attend RC Show (Toronto)',
        },
        {
          id: 'be658b70-9d28-4392-a681-d701e7b6970f',
          type: 'education',
          title: 'SMART Goal Setting course',
        },
      ]
    },
    {
      id: '811a300d-5dad-4fce-badc-a82054fade8b',
      year: 'Vehikl (formerly ChromeMedia)',
      events: [
        {
          id: 'cb686e97-2463-40dc-b9e3-90998bac056a',
          type: 'job',
          title: 'UX Designer; Acting UX Lead',
          image: stockScreen,
          description: 'Delivered impactful digital products across industries by leading UX design for startups, nonprofits, and enterprise clients, resulting in scalable applications and stronger client engagement.\n\nEstablished UX as a core offering within Vehikl, influencing how development teams collaborated with clients and elevating the company\'s profile as a full-service partner beyond engineering.\n\nCreated design systems, IA frameworks, and user-centered workflows that reduced development rework and enabled faster iteration cycles.\n\nAuthored thought leadership articles and case studies (2015-2019) that showcased Vehikl\'s design expertise, strengthening industry reputation and contributing to new client acquisition.\n\nMentored developers and junior designers on design thinking and usability practices, improving cross-functional collaboration and raising overall design maturity inside the company.',
          year: '2012 - 2019'
        },
      ]
    },
    {
      id: 'fe08895f-4701-4918-bb2b-a9554cae8fbc',
      year: 'Flyt (Just Eat Group)',
      events: [
        {
          id: 'a35e13f8-c1dd-47ad-af4d-2ccdc82b031a',
          type: 'job',
          title: 'Product Manager: North America',
          image: stockBike,
          description: 'Shipped [Connect API](/portfolio/connect-api), a scalable integration platform that enabled restaurants to onboard new delivery partners in weeks instead of months, reducing operational overhead and accelerating revenue opportunities across North American markets.',
          year: '2019 - 2021'
        },
      ]
    },
    {
      id: '90724e2b-f611-4fdb-a3c9-e222819cfeeb',
      year: 'Arctic Wolf',
      events: [
        {
          id: 'bc271fdc-0d71-48b1-a188-c5c48b72344c',
          type: 'job',
          title: 'Senior UX Manager',
          image: stockDesk,
          description: 'Scaled governance and adoption of [Fenrir design system](/portfolio/design-system)\n\nIncreased adoption from ~33% to 95% of product teams\n\nReduced design delivery from 2-5 weeks to 1-3 weeks',
          year: '2025 - Current'
        },
        {
          id: '439cdee2-9d2c-479a-9a67-d72fce28d158',
          type: 'job',
          title: 'UX Manager',
          image: stockDesk,
          description: 'Launched Fenrir v1 design system and governance model\n\nReduced design delivery from months to weeks\n\nPartnered with product leaders to integrate UX into roadmap planning',
          year: '2021-2022'
        }
      ]
    }
  ];

  const getMostRecentDetailItem = () => {
    for (let i = timeline.length - 1; i >= 0; i--) {
      const timelineItem = timeline[i];
      const lastEventWithDescription = timelineItem.events.find(event => event.description);
      if (lastEventWithDescription) {
        return lastEventWithDescription.id;
      }
    }
    return null;
  };

  const [selectedItemId, setSelectedItemId] = useState(getMostRecentDetailItem());

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
          <img src={caryn1} alt="Caryn Farvour portrait" />
        </div>
        <div className="bio-content">
          <h1>Hi, I'm Caryn</h1>
          <p className="help">(pronounced kuh-<i>RIN</i>; like Corinne)</p>
          <p>I'm a UX leader focused on design systems, information architecture, and cross-functional delivery. I partner closely with product and engineering to ship scalable patterns that speed design, reduce rework, and improve consistency across complex suites. I also mentor teams and leaders, coach developers on user-first practices, and contribute to the UX community through talks and workshops.</p>
          <h3>Quick Facts</h3>
          <ul>
            <li><b>Current role:</b> Senior UX Manager at Arctic Wolf</li>
            <li><b>Core strengths:</b> Design Systems, UX Strategy, Information Architecture, Team Leadership, Cross-functional Collaboration</li>
            <li><b>Community:</b> Speaker and contributor at Laracon, Fluxible, and other UX/Dev conferences</li>
          </ul>
          <h3>Community & Speaking Highlights</h3>
          <ul>
            <li><b>Laracon (2014-2018):</b> Speaker and recurring participant</li>
            <li><b>Fluxible (2013-2015):</b> Attendee and workshop participant</li>
            <li><b>Practical UX Series (2019):</b> Co-authored developer-friendly UX resources</li>
            <li><b>STEMGyrls Workshop (2015):</b> Facilitated UX intro session for high-schoolers</li>
            <li><b>Local Meetups:</b> Speaker at UX Waterloo and other software meetups</li>
          </ul>
          <a href={carynResume} target="_blank" rel="noreferrer" className="arrow-link block">View Resume (PDF)</a>
        </div>
      </div>
      <div className="timeline">
        <h2>Career Timeline</h2>
        <div className="timeline-content">
          <div className="timeline">
            <div className="path"></div>
            <ul>
              {timeline.reverse().map(({ id, year, events }) => (
                <div className="year-section" key={id}>
                  <li className="year-title">{year}</li>
                  {events.map(({ id, type, title, description }) => {

                    const lineClass = `${type} ${description ? "more-info" : ""} ${detailItem && selectedItemId === id ? "active" : ""}`

                    return (
                      <li
                        key={year + id}
                        className={lineClass}
                        onClick={() => description ? setSelectedItemId(id) : null}>
                        <div className="event">
                          {title}
                        </div>

                        {description ?
                          (<div className="more">
                            <FontAwesomeIcon icon={faCommentLines} />
                          </div>) : null}
                      </li>
                    )
                  })}
                </div>
              ))}
            </ul>
          </div>
          {detailItem &&
            <div className="about-detail">
              {detailItem.image && (
                <img className="about-detail-profile-img" src={detailItem.image} alt={detailItem.title} />
              )}
              <div className="about-detail-description">
                <div className="description-content">
                  <ReactMarkdown
                    components={{
                      a: CustomLink
                    }}
                  >
                    {detailItem.description}
                  </ReactMarkdown>
                  <p>({detailItem.year})</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default About
