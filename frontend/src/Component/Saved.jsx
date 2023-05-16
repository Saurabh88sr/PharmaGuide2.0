import React from 'react';
import News from './News';

const Saved = ({ savedNews }) => {
  return (
    <div>
      <h2>Saved News</h2>
      {savedNews.map((news, index) => (
        <News
          key={index}
          title={news.title}
          description={news.description}
          Imgurl={news.Imgurl}
          newsurl={news.newsurl}
        />
      ))}
    </div>
  );
};

export default Saved;
