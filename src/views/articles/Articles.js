import React from 'react';

const Articles = () => {
  const articles = [
    { 
      title: "Practical UX: The Perspective",
      link: "https://medium.com/@LadyCarni/practical-ux-the-perspective-d8908313336d",
      date: "Jan 10, 2019",
      summary: "The core of all software, whether mobile apps or websites, all boil down to the people who you’re designing and building for. The user is the most important aspect of software. Without a good experience for the user, the product fails.",
      id: 0,
    },
  ];

  return (
    <div className="articles full-height">
      <div className="article-features">
        <div className="main-feature">
          <div className="main-feature-content">
            main feature
          </div>
        </div>
        <div className="secondary-features">
          <div className="secondary-feature-content">secondary feature 1</div>
          <div className="secondary-feature-content">secondary feature 2</div>
          <div className="secondary-feature-content">secondary feature 3</div>
          <div className="secondary-feature-content">secondary feature 4</div>
        </div>
      </div>
      
      <div className="article-feed">
        {articles.map(({id, title, link, date, summary}) =>(
          <div className="article-snippet" key={id}>
            <h1>{title}</h1>
            <p className="article-meta">
              <span className="date">{date}</span>
            </p>
            <p className="article-summary">{summary}...</p>
            <a href={`${link}`} target="_blank" rel="noreferrer">Read the full article on Medium</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
