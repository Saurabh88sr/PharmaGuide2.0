import React, { useState, useEffect } from "react";
import axios from "axios";
import News from "./News";

const Newsbar = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=6f7b8b848da34cd094c4f107920e6b44&pageSize=4");
      setNewsData(response.data.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="container my-4">
      <h1 className="headBg">Top Headline</h1>
      {newsData ? (<div className="row">
        {newsData.map((news) => (
          <div className="col-md-3 p-2" key={news.title}>
              <News
              //if news.title is null print a Not Found
                title={news.title ? news.title.slice(0,45): "Not Found "} description={news.description ? news.description.slice(0,45) :"Not Found"} Imgurl={news.urlToImage} newsurl={news.url}
              />            
          </div>
        ))}
      </div>) : (<p>Loading...</p>)}
    </div>
  );
};

export default Newsbar;
