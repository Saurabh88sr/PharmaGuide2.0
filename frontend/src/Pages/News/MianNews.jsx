import React, { useState, useEffect } from "react";
import axios from "axios";
import News from "./NewsCard";
import SearchBar from "../../Component/SearchBar";
import SavedNews from "./SavedNews";


const MainNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [savedNews, setSavedNews] = useState([]);


  useEffect(() => {
    fetchData();
  }, );

  const fetchData = async () => {
    try {
      const response = await axios.get(
        // `https://newsapi.org/v2/top-headlines?country=in&category=health&q=${searchText}&apiKey=6f7b8b848da34cd094c4f107920e6b44&pageSize=12`
      );
      setNewsData(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    fetchData();
  };
  const handleSave = (news) => {
    setSavedNews([...savedNews, news]);
  };

  const handleUnsave = (news) => {
    const updatedSavedNews = savedNews.filter(
      (saved) => saved.title !== news.title
    );
    setSavedNews(updatedSavedNews);
  };

  return (
    <div className="container my-4">
      <SearchBar
        button="Search News"
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
        onSearch={handleSearch}
      />
      <div className="row">
        {newsData.map((news) => (
          <div className="col-md-3 p-3" key={news.title}>
            <News
              title={news.title ? news.title.slice(0, 45) : "Not Found"}
              description={news.description ? news.description.slice(0, 60) : "Not Found"}
              Imgurl={news.urlToImage}
              newsurl={news.url}
              onSave={handleSave}
              onUnsave={handleUnsave}
            />
          </div>
        ))}
      </div>
      <SavedNews savedNews={savedNews} />

    </div>
  );
};

export default MainNews;
