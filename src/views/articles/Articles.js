import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faBookmark } from '@fortawesome/pro-light-svg-icons';
import practicalUX from "assets/articles/practical-ux-cover.jpg";
import howToTalk from "assets/articles/how-to-talk.jpg";
import betterProjects from "assets/articles/better-projects.png";
import wireframe from "assets/articles/wireframe.png";
import teamBuilding from "assets/articles/team-building.jpg";

const Articles = () => {
  const articles = [
    { 
      title: "Saying goodbye",
      link: "https://medium.com/@LadyCarni/saying-goodbye-99be8253b890",
      date: "November 29, 2019",
      summary: "After seven years and seven months, many emotionally draining conversations, and more than a few restless nights, I’ve made the choice to move on from Vehikl.",
      id: 0,
    },
    { 
      title: "FontAwesome Pro for your Ionic/Angular project",
      link: "https://medium.com/vehikl-news/fontawesome-pro-for-your-ionic-angular-project-c99c00b47c3",
      date: "September 27, 2019",
      summary: "This is a love story between FontAwesome’s Pro icon pack (v5) and an Ionic (v4) project using Angular (v7).",
      id: 1,
    },
    { 
      title: "Practical UX: Tools of the Trade",
      link: "https://medium.com/@LadyCarni/practical-ux-tools-of-the-trade-5a84b9d42491",
      date: "March 19, 2019",
      summary: "A collection of tools and techniques for the pragmatic UX professional",
      id: 2,
    },
  ];

  return (
    <div className="articles full-height">
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
                  <h4>Running Better Software Projects <FontAwesomeIcon icon={faExternalLink} /></h4>
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
                  <h4>Your Product:<br />Design Built <FontAwesomeIcon icon={faExternalLink} /></h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="article-feed">
        {articles.map(({id, title, link, date, summary}) =>(
          <div className="article-snippet" key={id}>
            <h2>{title}</h2>
            <p className="article-meta">
              <span className="date">{date}</span>
            </p>
            <p className="article-summary">{summary}...</p>
            <a href={`${link}`} target="_blank" rel="noreferrer">Read the full article on Medium <FontAwesomeIcon icon={faExternalLink} /></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
