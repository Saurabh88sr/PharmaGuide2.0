import { useState } from "react";
import { saveNews, removeNews } from "../Pages/News/NewsStorage";

const News = (props) => {
  const [saved, setSaved] = useState(false);

  // const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=6f7b8b848da34cd094c4f107920e6b44"
  //     );
  //     setNewsData(response.data.articles);
  //   };
  //   fetchData();
  // }, []);
  
  const handleSaveToggle = () => {
    setSaved(!saved);
    if (!saved) {
      saveNews(props);
    } else {
      removeNews(props);
    }
  };
  
  // const saveNws = () => {
  //   // Perform save news operation here
  //   console.log("News saved:", props.title);
  // };

  // const removeews = () => {
  //   // Perform unsave news operation here
  //   console.log("News unsaved:", props.title);
  // };

  return (
    <>
      
        <div className="card card-icon">
          <img src={!props.Imgurl?"https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230421031008.jpg" :props.Imgurl } class="card-img-top" alt="News Cover" />
          <div class="card-body">
            <h5 class="card-title">{props.title} ...</h5>
            <p class="card-text">{props.description} ...</p>
            <a href={props.newsurl} target="blank" class="btn btn-sm btn-dark">
              Read More
            </a>
            <button className="btn btn-sm btn-primary" onClick={handleSaveToggle}>
            {saved ? "Unsave" : "Save"}
          </button>
          </div>
        </div>
    </>
  );
};

export default News;
