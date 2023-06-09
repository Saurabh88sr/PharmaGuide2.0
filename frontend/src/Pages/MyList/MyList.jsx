import { useState } from "react";
import Medlist from "./Medlist";
import Newslist from "./Newslist";

const MyList = () => {
  const [showMedList, setShowMedList] = useState(true);
  const [showNewsList, setShowNewsList] = useState(false);

  function handleMedListClick() {
    setShowMedList(true);
    setShowNewsList(false);
  }

  function handleNewsListClick() {
    setShowMedList(false);
    setShowNewsList(true);
  }

  return (
    <>
      <div className="container mt-3 p-2">
        <div className="d-flex">
          <div>
            <ul className="list-group">
              <li className=" d-flex justify-content-between align-items-center">
                <div className="headBg">
                  <h3>Your List</h3>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <button type="button" className="btn" onClick={handleMedListClick}>
                  Medicine
                </button>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <button type="button" className="btn" onClick={handleNewsListClick}>
                  News
                </button>
              </li>
            </ul>
          </div>
          <div>
            {showMedList && <Medlist />}
            {showNewsList && <Newslist />}
          </div>
          <div>
            {/* Additional content if needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyList;
