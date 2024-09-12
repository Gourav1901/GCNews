// // News.js
import React from 'react';
import './News.css';

function News({ news }) {
  if (!news) {
    return null;
  }

  const handleClick = () => {
    if (news.url) {
      window.open(news.url, '_blank');
    }
  };

  return (
    <div className="news-card" onClick={handleClick}>
      <div className="news-image-container">
        {news.urlToImage ? (
          <img src={news.urlToImage} alt={news.title} className="news-image" />
        ) : (
          <div className="news-image-placeholder">No Image</div>
        )}
      </div>
      <div className="news-content">
        {news.title && <h2 className="news-title">{news.title.slice(0, 50)}{news.title.length > 50 ? '...' : ''}</h2>}
        {news.description && <p className="news-description">{news.description.slice(0, 100)}{news.description.length > 100 ? '...' : ''}</p>}
        {news.source && news.source.name && <p className="news-source">{news.source.name}</p>}
      </div>
    </div>
  );
}

export default News;


