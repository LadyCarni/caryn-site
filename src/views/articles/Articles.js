import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { faExternalLink, faBookmark } from '@fortawesome/pro-light-svg-icons';
import practicalUX from "assets/articles/practical-ux-cover.jpg";
import howToTalk from "assets/articles/how-to-talk.jpg";
import betterProjects from "assets/articles/better-projects.png";
import wireframe from "assets/articles/wireframe.png";
import teamBuilding from "assets/articles/team-building.jpg";

const Articles = () => {
  const articles = [
    { 
      title: "UX Resources",
      link: "https://medium.com/@LadyCarni/ux-resources-235248952303",
      date: "February 14 2024",
      summary: "Maybe you're interested in getting started in User Experience (UX), or maybe you're just keen to brush up your existing skills. Here are a list of basic resources I've found to be helpful for various scenarios.",
      id: 0,
    },
    { 
      title: "Remote Team Building",
      link: "https://medium.com/@LadyCarni/remote-team-building-7c2a03570703",
      date: "June 23, 2020",
      summary: "When you're ready to take a break and have some fun with your team, you likely want to go beyond some of the more traditional corporate team building exercises.",
      id: 0,
    },
    { 
      title: "Saying goodbye",
      link: "https://medium.com/@LadyCarni/saying-goodbye-99be8253b890",
      date: "November 29, 2019",
      summary: "To explain why I've decided to move on, I'll need to take you all the way back to early 2012; back to the beginning.",
      id: 1,
    },
    { 
      title: "FontAwesome Pro for your Ionic/Angular project",
      link: "https://medium.com/vehikl-news/fontawesome-pro-for-your-ionic-angular-project-c99c00b47c3",
      date: "September 27, 2019",
      summary: "This is a love story between FontAwesome's Pro icon pack (v5) and an Ionic (v4) project using Angular (v7).",
      id: 2,
    },
    { 
      title: "Practical UX: Tools of the Trade",
      link: "https://medium.com/@LadyCarni/practical-ux-tools-of-the-trade-5a84b9d42491",
      date: "March 19, 2019",
      summary: "The third in the Practical UX series; sharing a collection of tools and techniques for the pragmatic UX professional",
      id: 3,
    },
    { 
      title: "Practical UX: The Who and the Why",
      link: "https://blog.prototypr.io/practical-ux-the-who-and-the-why-13e24a34ee53",
      date: "March 4, 2019",
      summary: "The second in the Practical UX series. We build software for people. When desining and bulding, we must ask: Who are they, and what problem are we solving for them?",
      id: 4,
    },
    { 
      title: "Practical UX: The Perspective",
      link: "https://medium.com/@LadyCarni/practical-ux-the-perspective-d8908313336d",
      date: "January 10, 2019",
      summary: "The first in the Practical UX series; framing the mindset and the outlook of the pragmatic UX professional.",
      id: 5,
    },
    { 
      title: "Giving Talks: 101",
      link: "https://medium.com/@LadyCarni/giving-talks-101-29f3cc4d36ac",
      date: "November 1, 2018",
      summary: "Addressing fears and common obstacles so you can talk in front of strangers and give back to the community.",
      id: 6,
    },
    { 
      title: "Running Better Software Projects",
      link: "https://medium.com/vehikl-news/running-better-software-projects-c589f017c63f",
      date: "July 5, 2017",
      summary: "Learn how to facilitate effective client meetings, organize phases of a project, manage sprints, and improve collaboration on your team.",
      id: 7,
    },
    { 
      title: "Imposter Syndrome",
      link: "https://code.likeagirl.io/imposter-syndrome-c2bdad47d88d",
      date: "March 4, 2017",
      summary: "Why is it, despite our success we still have that nagging voice in the backs of our minds taunting us with accusations of fraud, fraud, FRAUD!!",
      id: 8,
    },
    { 
      title: "Stock Photo Resources",
      link: "https://medium.com/@LadyCarni/im-sure-you-ve-been-there-you-re-designing-a-brand-spanking-new-site-and-you-know-damned-well-fbbd8b13fe43",
      date: "November 4, 2016",
      summary: "Stock images today aren't the libraries of a few years ago. Here are just a few to get you started!",
      id: 9, 
    },
    { 
      title: "Wireframe vs. Prototype",
      link: "https://medium.com/vehikl-news/wireframe-vs-prototype-a77afa83311a",
      date: "July 12, 2016",
      summary: "Which is best? The highly-detailed, more refined prototype, or the moderately-detailed, flexible wireframe.",
      id: 10, 
    },
    { 
      title: "Your Product: Design Built",
      link: "https://medium.com/vehikl-news/time-management-facilitating-meetings-prioritizing-work-delegating-tasks-collaborating-with-efbdd78f51d1",
      date: "May 19, 2016",
      summary: "The planning and execution of an efficient, meaningful, cost-effective user experience.",
      id: 11, 
    },
    { 
      title: "10 Ways to Teach Kids to Code",
      link: "https://medium.com/vehikl-news/10-ways-to-teach-kids-to-code-1c5e4b68a247",
      date: "January 9, 2016",
      summary: "Board games, apps, websites, and tutorials for helping teach kids how to code.",
      id: 12, 
    },
  ];

  return (
    <div className="articles full-height">
      <Helmet>
        <title>Caryn Farvour</title>
        <meta property="og:title" content="Caryn Farvour" />
        <meta property="og:description" content="A professional UX portfolio showcasing industry insights, creative projects, hobbies, and recipes, blending design expertise with personal passion." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/about/caryn-portrait.jpg" />
        <meta property="og:url" content="https://carynfarvour.design" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="article-feature-container">
        <span className="landmark"><FontAwesomeIcon icon={faBookmark} /> Top Articles</span>

        <div className="article-features">
          <div className="article-feature main-feature">
            <div className="article-feature-content main-feature-content filter shadow">
              <a href="https://medium.com/@LadyCarni/practical-ux-the-perspective-d8908313336d" target="_blank" rel="noreferrer">
                <div className="article-image image bottom">
                  <img src={practicalUX} alt="Practical UX article"/>
                </div>
                <div className="article-info">
                  <h3>Practical UX: The Perspective <FontAwesomeIcon icon={faExternalLink} /></h3>
                  <span>Applying user experience principles to every day practices</span>
                </div>
              </a>
            </div>
          </div>

          <div className="article-feature secondary-features">
            <div className="article-feature-content secondary-feature-content filter shadow">
              <a href="https://medium.com/vehikl-news/running-better-software-projects-c589f017c63f" target="_blank" rel="noreferrer">
                <div className="article-image image bottom">
                  <img src={betterProjects} alt="Example of whiteboarding"/>
                </div>
                <div className="article-info">
                  <h4>Better Software Projects <FontAwesomeIcon icon={faExternalLink} /></h4>
                </div>
              </a>
            </div>
            <div className="article-feature-content secondary-feature-content filter shadow">
              <a href="https://medium.com/@LadyCarni/remote-team-building-7c2a03570703" target="_blank" rel="noreferrer">
                <div className="article-image image bottom">
                  <img src={teamBuilding} alt="Team standing together"/>
                </div>
                <div className="article-info">
                  <h4>Remote Team Building <FontAwesomeIcon icon={faExternalLink} /></h4>
                </div>
              </a>
            </div>
            <div className="article-feature-content secondary-feature-content filter shadow">
              <a href="https://medium.com/@LadyCarni/giving-talks-101-29f3cc4d36ac" target="_blank" rel="noreferrer">
                <div className="article-image image bottom">
                  <img src={howToTalk} alt="Talking at a conference"/>
                </div>
                <div className="article-info">
                  <h4>Giving Talks: 101 <FontAwesomeIcon icon={faExternalLink} /></h4>
                </div>
              </a>
            </div>
            <div className="article-feature-content secondary-feature-content filter shadow">
              <a href="https://medium.com/vehikl-news/time-management-facilitating-meetings-prioritizing-work-delegating-tasks-collaborating-with-efbdd78f51d1" target="_blank" rel="noreferrer">
                <div className="article-image image bottom">
                  <img src={wireframe} alt="Example of wireframing"/>
                </div>
                <div className="article-info">
                  <h4>Design Built <FontAwesomeIcon icon={faExternalLink} /></h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="article-feed">
        <div className="title">
          <span className="landmark"><FontAwesomeIcon icon={faBookmark} /> Recent Articles</span>
        </div>
        <div className="articles">
          {articles.map(({id, title, link, date, summary}) =>(
            <div className="article-snippet" key={id}>
              <div className="article-meta">
                {date}
              </div>
              <div className="article-body">
                <a href={`${link}`} target="_blank" rel="noreferrer">
                  <h2>{title}</h2>
                  <p className="article-summary">{summary}<span className="continue">Continue<FontAwesomeIcon icon={faExternalLink} /></span></p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
