import React from 'react';

const Articles = () => {
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
        <div className="article-snippet">
          <h1>Title</h1>
          <p className="article-meta">
            <span className="date">Date</span>
          </p>
          <p className="article-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus fugit temporibus quo quis molestiae, quod sint nisi, consectetur impedit corporis iure excepturi veniam illo. Ipsum facilis sint ipsam fugit.</p>
          <a href="#">Read the full article</a>
        </div>
      </div>
    </div>
  );
}

export default Articles;
