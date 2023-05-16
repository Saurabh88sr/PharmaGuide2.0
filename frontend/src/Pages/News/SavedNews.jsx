import React, { useState, useEffect } from "react";
import { getSavedNews, removeNews } from "./NewsStorage";

const SavedNews = () => {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    const fetchSavedNews = () => {
      const savedNewsData = getSavedNews();
      setSavedNews(savedNewsData);
    };

    fetchSavedNews();
  }, []);

  const handleUnsave = (newsId) => {
    removeNews(newsId);
    const updatedSavedNews = savedNews.filter((news) => news.id !== newsId);
    setSavedNews([...updatedSavedNews]);
  };
  

  return (
    <div>
      <h2>Saved News</h2>
      {savedNews.map((news) => (
        <div key={news.id}>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          <a href={news.newsurl} target="blank" class="btn btn-sm btn-dark">
              Read More
            </a>
          <button onClick={() => handleUnsave(news.id)}>Unsave</button>
        </div>
      ))}
    </div>
  );
};

export default SavedNews;
